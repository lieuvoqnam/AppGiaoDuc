/**
 * math-4-app.js - Bộ Điều Khiển Tương Tác Ôn Tập & Thi Thử Toán Lớp 4
 */

(function () {
  'use strict';

  const state = {
    mode: 'practice', // 'theory', 'practice', 'exam'
    topicId: 'natural_numbers',
    level: 'all', // 'all', 1, 2, 3, 4
    practiceAnswers: {}, // { [qId]: selectedOptIdx }
    isPracticeSubmitted: false,
    practiceQuestions: [], // Dynamic generated practice questions
    examQuestions: [], // Dynamic generated exam questions
    examAnswers: {}, // { [qId]: idx }
    examTimeLeft: 20 * 60, // 20 minutes
    examTimer: null,
    isExamSubmitted: false
  };

  // DOM Elements
  const modeTabBtns = document.querySelectorAll('.mode-tab-btn');
  const topicPillsContainer = document.getElementById('topic-pills');
  const levelFilterContainer = document.getElementById('level-filters');
  const theoryView = document.getElementById('theory-view');
  const practiceView = document.getElementById('practice-view');
  const examView = document.getElementById('exam-view');
  const practiceQuestionsList = document.getElementById('practice-questions-list');
  const examQuestionsList = document.getElementById('exam-questions-list');
  const examTimerEl = document.getElementById('exam-timer');
  const btnSubmitPractice = document.getElementById('btn-submit-practice');
  const btnSubmitExam = document.getElementById('btn-submit-exam');
  const scoreModal = document.getElementById('score-modal');

  // Sound helper
  function playSnd(type) {
    if (window.soundEngine && window.soundEngine.enabled) {
      if (type === 'victory') window.soundEngine.playVictoryFanfare();
      else if (type === 'levelUp' || type === 'correct') window.soundEngine.playSnap();
      else if (type === 'wrong') window.soundEngine.playError();
      else if (type === 'click') window.soundEngine.playPickup();
    }
  }

  // --- INITIALIZATION ---
  function init() {
    initUserWidget();
    renderTopicPills();
    bindEvents();
    switchMode('practice');
  }

  // User Profile
  function initUserWidget() {
    const auth = window.authManager || window.EduAuth;
    if (!auth) return;
    const user = (window.authManager && window.authManager.currentUser) ||
                 (auth.getCurrentUser ? auth.getCurrentUser() : null);
    const avatarEl = document.getElementById('user-avatar');
    const nameEl = document.getElementById('user-display-name');
    const classEl = document.getElementById('user-display-class');

    if (user && avatarEl && nameEl && classEl) {
      avatarEl.textContent = user.avatar || '🎓';
      nameEl.textContent = user.fullName || 'Học sinh';
      classEl.textContent = user.className || 'Lớp 4';
    }

    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
      btnLogout.addEventListener('click', () => {
        if (confirm('Bạn có muốn đổi tài khoản học sinh khác không?')) {
          if (window.authManager && typeof window.authManager.logout === 'function') {
            window.authManager.logout();
            window.location.reload();
          } else if (auth.openLoginModal) {
            auth.openLoginModal(() => initUserWidget());
          }
        }
      });
    }

    const btnLeaderboard = document.getElementById('btn-leaderboard');
    if (btnLeaderboard) {
      btnLeaderboard.addEventListener('click', () => {
        alert('Bảng vàng tích lũy điểm được cập nhật tự động khi bạn hoàn thành Đề Thi Thử!');
      });
    }

    const btnSound = document.getElementById('btn-toggle-sound');
    if (btnSound) {
      btnSound.addEventListener('click', () => {
        if (window.soundEngine && typeof window.soundEngine.toggleSound === 'function') {
          const isMuted = !window.soundEngine.toggleSound();
          btnSound.textContent = isMuted ? '🔇' : '🔊';
        } else if (window.EduAudio) {
          const isMuted = window.EduAudio.toggleMute();
          btnSound.textContent = isMuted ? '🔇' : '🔊';
        }
      });
    }

    const btnFullscreen = document.getElementById('btn-fullscreen');
    if (btnFullscreen) {
      btnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
          btnFullscreen.textContent = '🗗';
        } else {
          document.exitFullscreen().catch(() => {});
          btnFullscreen.textContent = '⛶';
        }
      });
    }
  }

  // Render Topic Pills
  function renderTopicPills() {
    if (!topicPillsContainer || !window.MATH4_DATA) return;
    topicPillsContainer.innerHTML = '';

    window.MATH4_DATA.topics.forEach(t => {
      const btn = document.createElement('button');
      btn.className = `topic-pill ${t.id === state.topicId ? 'active' : ''}`;
      btn.innerHTML = `<span>${t.icon}</span> ${t.name}`;
      btn.addEventListener('click', () => {
        playSnd('click');
        state.topicId = t.id;
        document.querySelectorAll('.topic-pill').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        if (state.mode === 'theory') renderTheory();
        else if (state.mode === 'practice') loadPracticeQuestions();
      });
      topicPillsContainer.appendChild(btn);
    });
  }

  // Bind Mode Tabs & Filters
  function bindEvents() {
    modeTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        playSnd('click');
        const mode = btn.dataset.mode;
        switchMode(mode);
      });
    });

    if (levelFilterContainer) {
      levelFilterContainer.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          playSnd('click');
          levelFilterContainer.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.level = btn.dataset.lvl;
          loadPracticeQuestions();
        });
      });
    }

    const btnRerollPractice = document.getElementById('btn-reroll-practice');
    if (btnRerollPractice) {
      btnRerollPractice.addEventListener('click', () => {
        playSnd('levelUp');
        loadPracticeQuestions();
      });
    }

    const btnRerollExam = document.getElementById('btn-reroll-exam');
    if (btnRerollExam) {
      btnRerollExam.addEventListener('click', () => {
        if (!state.isExamSubmitted && Object.keys(state.examAnswers).length > 0) {
          if (!confirm('Bạn có muốn hủy bài thi đang làm dở để đổi sang đề thi mới không?')) return;
        }
        playSnd('levelUp');
        startExam(true);
      });
    }

    if (btnSubmitPractice) {
      btnSubmitPractice.addEventListener('click', () => {
        if (state.isPracticeSubmitted) {
          playSnd('levelUp');
          loadPracticeQuestions();
        } else {
          submitPractice();
        }
      });
    }

    if (btnSubmitExam) {
      btnSubmitExam.addEventListener('click', submitExam);
    }
  }

  // Switch Mode
  function switchMode(newMode) {
    state.mode = newMode;
    modeTabBtns.forEach(b => b.classList.toggle('active', b.dataset.mode === newMode));

    // Hide all views
    theoryView.classList.add('hidden');
    practiceView.classList.add('hidden');
    examView.classList.add('hidden');

    const topicBar = document.getElementById('topic-bar-wrapper');

    if (newMode === 'theory') {
      if (topicBar) topicBar.classList.remove('hidden');
      theoryView.classList.remove('hidden');
      renderTheory();
    } else if (newMode === 'practice') {
      if (topicBar) topicBar.classList.remove('hidden');
      practiceView.classList.remove('hidden');
      if (!state.practiceQuestions || state.practiceQuestions.length === 0) {
        loadPracticeQuestions();
      } else {
        renderPractice();
      }
    } else if (newMode === 'exam') {
      if (topicBar) topicBar.classList.add('hidden');
      examView.classList.remove('hidden');
      if (!state.examQuestions || state.examQuestions.length === 0) {
        startExam(true);
      }
    }
  }

  // --- 1. RENDER THEORY ---
  function renderTheory() {
    const topic = window.MATH4_DATA.topics.find(t => t.id === state.topicId);
    if (!topic) return;

    const iconEl = document.getElementById('theory-header-icon');
    const titleEl = document.getElementById('theory-header-title');
    const descEl = document.getElementById('theory-header-desc');
    const gridEl = document.getElementById('theory-grid');

    if (iconEl) iconEl.textContent = topic.icon;
    if (titleEl) titleEl.textContent = topic.name;
    if (descEl) descEl.textContent = topic.desc;

    if (gridEl) {
      gridEl.innerHTML = '';
      topic.theory.highlights.forEach(h => {
        const card = document.createElement('div');
        card.className = 'theory-card';
        card.innerHTML = `
          <h3>💡 ${h.title}</h3>
          <div class="theory-content">${h.content}</div>
        `;
        gridEl.appendChild(card);
      });
    }
  }

  // --- 2. RENDER PRACTICE ---
  function loadPracticeQuestions() {
    state.isPracticeSubmitted = false;
    state.practiceAnswers = {};
    if (window.Math4Generator && typeof window.Math4Generator.generatePractice === 'function') {
      state.practiceQuestions = window.Math4Generator.generatePractice(state.topicId, state.level, 6);
    } else if (window.MATH4_DATA) {
      const topic = window.MATH4_DATA.topics.find(t => t.id === state.topicId);
      if (topic) {
        let qs = topic.questions;
        if (state.level !== 'all') {
          qs = qs.filter(q => q.level === parseInt(state.level));
        }
        state.practiceQuestions = [...qs];
      }
    }
    renderPractice();
  }

  function renderPractice() {
    if (!practiceQuestionsList) return;
    const questions = state.practiceQuestions || [];
    practiceQuestionsList.innerHTML = '';

    if (btnSubmitPractice) {
      btnSubmitPractice.style.display = questions.length === 0 ? 'none' : 'block';
      btnSubmitPractice.textContent = state.isPracticeSubmitted 
        ? '🎲 Làm Bộ Số Mới Khác' 
        : '📝 Nộp Bài & Xem Điểm Số';
    }

    if (questions.length === 0) {
      practiceQuestionsList.innerHTML = `
        <div style="text-align:center; padding: 40px; background:#fff; border-radius:18px; border:2px dashed #cbd5e1;">
          <div style="font-size:2.5rem; margin-bottom:10px;">🌟</div>
          <h3 style="font-size:1.2rem; color:#475569;">Đang cập nhật thêm câu hỏi cho mức độ này!</h3>
          <p style="color:#94a3b8; font-size:0.95rem;">Bạn hãy chọn mức độ khác hoặc bấm "Đổi Đề / Sinh Số Mới" nhé.</p>
        </div>
      `;
      return;
    }

    const levelNames = { 1: 'Mức 1: Nhận biết', 2: 'Mức 2: Thông hiểu', 3: 'Mức 3: Vận dụng', 4: 'Mức 4: Vận dụng cao' };

    questions.forEach((q, idx) => {
      const card = document.createElement('div');
      card.className = 'q-card';
      card.id = `practice-q-${q.id}`;

      const selectedOpt = state.practiceAnswers[q.id];

      let optionsHtml = '';
      q.options.forEach((opt, optIdx) => {
        const letters = ['A', 'B', 'C', 'D'];
        let optClass = 'opt-btn';
        if (state.isPracticeSubmitted) {
          if (optIdx === q.correct) optClass += ' correct';
          else if (selectedOpt === optIdx && optIdx !== q.correct) optClass += ' wrong';
        } else if (selectedOpt === optIdx) {
          optClass += ' selected';
        }

        optionsHtml += `
          <button class="${optClass}" data-qid="${q.id}" data-opt="${optIdx}">
            <span class="opt-letter">${letters[optIdx]}</span>
            <span>${opt}</span>
          </button>
        `;
      });

      // Lời giải chi tiết LUÔN ĐƯỢC ẨN ĐI VỚI LỚP 'hidden' CHO ĐẾN KHI BẤM NỘP BÀI
      const isExpHidden = !state.isPracticeSubmitted;

      card.innerHTML = `
        <div class="q-card-header">
          <span class="q-badge lvl-${q.level}">${levelNames[q.level] || 'Luyện tập'}</span>
          <span style="font-size:0.95rem; font-weight:800; color:#64748b;">Câu ${idx + 1}/${questions.length}</span>
        </div>
        <div class="q-text">${q.question}</div>
        <div class="options-grid">
          ${optionsHtml}
        </div>
        <div id="explanation-${q.id}" class="explanation-box ${isExpHidden ? 'hidden' : ''}" style="${isExpHidden ? 'display: none !important;' : 'display: block;'}">
          <h4>📖 Lời giải chi tiết:</h4>
          <div>${q.explanation}</div>
        </div>
      `;

      card.querySelectorAll('.opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (state.isPracticeSubmitted) return;
          const optIdx = parseInt(btn.dataset.opt);
          handlePracticeAnswer(q, optIdx);
        });
      });

      practiceQuestionsList.appendChild(card);
    });
  }

  function handlePracticeAnswer(q, optIdx) {
    if (state.isPracticeSubmitted) return;
    playSnd('click');
    state.practiceAnswers[q.id] = optIdx;

    const card = document.getElementById(`practice-q-${q.id}`);
    if (!card) return;

    card.querySelectorAll('.opt-btn').forEach(btn => {
      const bOpt = parseInt(btn.dataset.opt);
      if (bOpt === optIdx) {
        btn.classList.add('selected');
      } else {
        btn.classList.remove('selected');
      }
    });
    // Lời giải chi tiết tuyệt đối giữ ẩn cho đến khi Nộp bài
  }

  function submitPractice() {
    if (state.isPracticeSubmitted) return;

    const questions = state.practiceQuestions || [];
    if (questions.length === 0) return;

    const answeredCount = Object.keys(state.practiceAnswers).length;
    if (answeredCount === 0) {
      alert('Bạn vui lòng chọn câu trả lời trước khi nộp bài nhé!');
      return;
    }

    if (answeredCount < questions.length) {
      if (!confirm(`Bạn mới trả lời ${answeredCount}/${questions.length} câu. Bạn có chắc chắn muốn nộp bài để xem điểm số và lời giải chi tiết không?`)) {
        return;
      }
    }

    state.isPracticeSubmitted = true;
    let correctCount = 0;

    questions.forEach(q => {
      const selected = state.practiceAnswers[q.id];
      const isCorrect = (selected === q.correct);
      if (isCorrect) correctCount++;

      const card = document.getElementById(`practice-q-${q.id}`);
      if (card) {
        card.querySelectorAll('.opt-btn').forEach((btn, optIdx) => {
          btn.classList.remove('selected');
          if (optIdx === q.correct) {
            btn.classList.add('correct');
          } else if (selected === optIdx && !isCorrect) {
            btn.classList.add('wrong');
          }
        });

        // CHỈ MỞ LỜI GIẢI CHI TIẾT TẠI ĐÂY KHI ĐÃ BẤM NỘP BÀI
        const expEl = document.getElementById(`explanation-${q.id}`);
        if (expEl) {
          expEl.classList.remove('hidden');
          expEl.style.removeProperty('display');
        }
      }
    });

    if (btnSubmitPractice) {
      btnSubmitPractice.textContent = '🎲 Làm Bộ Số Mới Khác';
    }

    const score = Math.round((correctCount / questions.length) * 100) / 10;
    showScoreModal({
      title: 'Kết Quả Bài Luyện Tập',
      score: score,
      correctCount: correctCount,
      totalCount: questions.length,
      mode: 'practice'
    });
  }

  // --- 3. RENDER MOCK EXAM ---
  function startExam(forceNew = true) {
    if (forceNew || !state.examQuestions || state.examQuestions.length === 0) {
      if (window.Math4Generator && typeof window.Math4Generator.generateMockExam === 'function') {
        state.examQuestions = window.Math4Generator.generateMockExam();
      } else if (window.MATH4_DATA) {
        state.examQuestions = [...window.MATH4_DATA.mockExam];
      }
    }

    state.examAnswers = {};
    state.examTimeLeft = 20 * 60;
    state.isExamSubmitted = false;

    if (state.examTimer) clearInterval(state.examTimer);
    state.examTimer = setInterval(updateExamTimer, 1000);
    updateExamTimerDisplay();

    renderExamQuestions();
  }

  function updateExamTimer() {
    if (state.examTimeLeft <= 0) {
      clearInterval(state.examTimer);
      alert('⏰ Đã hết thời gian làm bài! Hệ thống sẽ tự động nộp bài.');
      submitExam();
      return;
    }
    state.examTimeLeft--;
    updateExamTimerDisplay();
  }

  function updateExamTimerDisplay() {
    if (!examTimerEl) return;
    const mins = Math.floor(state.examTimeLeft / 60);
    const secs = state.examTimeLeft % 60;
    examTimerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  function renderExamQuestions() {
    if (!examQuestionsList) return;
    const questions = state.examQuestions || [];
    examQuestionsList.innerHTML = '';

    questions.forEach((q, idx) => {
      const card = document.createElement('div');
      card.className = 'q-card';
      card.id = `exam-q-${q.id}`;

      let optionsHtml = '';
      const letters = ['A', 'B', 'C', 'D'];
      const selectedOpt = state.examAnswers[q.id];
      q.options.forEach((opt, optIdx) => {
        let optClass = 'opt-btn';
        if (state.isExamSubmitted) {
          if (optIdx === q.correct) optClass += ' correct';
          else if (selectedOpt === optIdx && optIdx !== q.correct) optClass += ' wrong';
        } else if (selectedOpt === optIdx) {
          optClass += ' selected';
        }

        optionsHtml += `
          <button class="${optClass}" data-qid="${q.id}" data-opt="${optIdx}">
            <span class="opt-letter">${letters[optIdx]}</span>
            <span>${opt}</span>
          </button>
        `;
      });

      const topicLabel = q.topic || 'Toán Lớp 4';

      card.innerHTML = `
        <div class="q-card-header">
          <span class="q-badge" style="background:#e0f2fe; color:#0284c7;">Chủ đề: ${topicLabel}</span>
          <span style="font-size:0.95rem; font-weight:800; color:#64748b;">Câu ${idx + 1}/${questions.length} (1.0 điểm)</span>
        </div>
        <div class="q-text">${q.question}</div>
        <div class="options-grid">
          ${optionsHtml}
        </div>
        <div id="exam-explanation-${q.id}" class="explanation-box hidden" style="display: none !important;">
          <h4>📖 Hướng dẫn giải:</h4>
          <div>${q.explanation}</div>
        </div>
      `;

      card.querySelectorAll('.opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (state.isExamSubmitted) return;
          playSnd('click');
          const optIdx = parseInt(btn.dataset.opt);
          state.examAnswers[q.id] = optIdx;

          card.querySelectorAll('.opt-btn').forEach(b => {
            if (parseInt(b.dataset.opt) === optIdx) {
              b.classList.add('selected');
            } else {
              b.classList.remove('selected');
            }
          });
        });
      });

      examQuestionsList.appendChild(card);
    });
  }

  function submitExam() {
    if (state.isExamSubmitted) return;
    state.isExamSubmitted = true;
    if (state.examTimer) clearInterval(state.examTimer);

    const questions = state.examQuestions || [];
    let correctCount = 0;

    questions.forEach(q => {
      const selected = state.examAnswers[q.id];
      const isCorrect = (selected === q.correct);
      if (isCorrect) correctCount++;

      const card = document.getElementById(`exam-q-${q.id}`);
      if (card) {
        card.querySelectorAll('.opt-btn').forEach((btn, optIdx) => {
          btn.classList.remove('selected');
          if (optIdx === q.correct) btn.classList.add('correct');
          else if (selected === optIdx && !isCorrect) btn.classList.add('wrong');
        });
        const expEl = document.getElementById(`exam-explanation-${q.id}`);
        if (expEl) {
          expEl.classList.remove('hidden');
          expEl.style.removeProperty('display');
        }
      }
    });

    const score = correctCount; // 1.0 point per question (total 10.0)
    showScoreModal({
      title: 'Kết Quả Bài Thi Thử Cuối Kỳ',
      score: score,
      correctCount: correctCount,
      totalCount: questions.length,
      mode: 'exam'
    });
  }

  function showScoreModal(data) {
    if (!scoreModal) return;

    const titleEl = document.getElementById('modal-score-title');
    const valEl = document.getElementById('modal-score-val');
    const tagEl = document.getElementById('modal-score-tag');
    const msgEl = document.getElementById('modal-score-msg');

    if (titleEl) titleEl.textContent = data.title || 'Kết Quả Bài Làm';
    if (valEl) valEl.textContent = `${data.score} / 10.0`;

    let badgeText = 'Xuất Sắc! 🌟';
    let badgeClass = 'perfect';
    let msg = `Tuyệt vời! Bạn đã trả lời đúng ${data.correctCount}/${data.totalCount} câu hỏi! Bấm "Xem Lời Giải Chi Tiết" để xem lời giải mẫu bên dưới nhé.`;

    if (data.score >= 9) {
      playSnd('victory');
      if (typeof window.confetti === 'function') window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    } else if (data.score >= 7) {
      badgeText = 'Khá Giỏi! 👍';
      badgeClass = 'good';
      msg = `Làm tốt lắm! Bạn đúng ${data.correctCount}/${data.totalCount} câu. Bấm "Xem Lời Giải Chi Tiết" để đối chiếu các bước giải chi tiết nhé.`;
      playSnd('levelUp');
    } else if (data.score >= 5) {
      badgeText = 'Đạt Yêu Cầu 📚';
      badgeClass = 'pass';
      msg = `Bạn đạt ${data.correctCount}/${data.totalCount} câu. Bấm "Xem Lời Giải Chi Tiết" để học lại phương pháp giải của những câu làm sai nhé!`;
      playSnd('correct');
    } else {
      badgeText = 'Cần Cố Gắng Thêm 💪';
      badgeClass = 'retry';
      msg = `Đừng nản lòng! Bấm "Xem Lời Giải Chi Tiết" để đọc kỹ từng bước hướng dẫn giải, sau đó làm lại nhé.`;
      playSnd('wrong');
    }

    if (tagEl) {
      tagEl.textContent = badgeText;
      tagEl.className = `score-badge-tag ${badgeClass}`;
    }
    if (msgEl) msgEl.textContent = msg;

    // Tự động lưu kết quả thi thử vào hồ sơ học sinh
    if (window.authManager && window.authManager.isLoggedIn()) {
      window.authManager.updateProgress(
        Math.round(data.score * 100),
        data.correctCount,
        data.score >= 9.0,
        'math_4',
        {
          lastExamScore: data.score,
          lastExamDate: new Date().toISOString()
        }
      );
    }
    scoreModal.classList.remove('hidden');

    const btnClose = document.getElementById('btn-close-modal');
    if (btnClose) {
      btnClose.onclick = () => {
        scoreModal.classList.add('hidden');
        const targetList = (data.mode === 'practice') ? practiceQuestionsList : examQuestionsList;
        if (targetList) {
          targetList.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    }

    const btnRetry = document.getElementById('btn-retry-exam');
    if (btnRetry) {
      btnRetry.onclick = () => {
        scoreModal.classList.add('hidden');
        if (data.mode === 'practice') {
          loadPracticeQuestions();
        } else {
          startExam(true);
        }
      };
    }
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
