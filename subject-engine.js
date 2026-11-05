/**
 * subject-engine.js - Bộ Điều Khiển Tương Tác Chuẩn Hóa Cho Các Môn Học Lớp 4
 * Hỗ trợ: Tiếng Việt, Khoa Học, Tiếng Anh, Tin Học, Đạo Đức
 * Tích hợp: Ôn lý thuyết, Luyện tập phân hóa 4 mức độ, Phòng thi thử học kỳ bấm giờ,
 * Âm thanh Web Audio, Pháo hoa Confetti, Đồng bộ tài khoản & Phát âm chuẩn Text-to-Speech.
 */

window.SubjectEngine = (function () {
  'use strict';

  function createEngine(config) {
    const data = config.data;
    const defaultLang = config.lang || 'vi-VN';
    const isLanguageSubject = config.isLanguageSubject || false;

    const state = {
      mode: 'practice', // 'theory', 'practice', 'exam'
      topicId: data.topics && data.topics.length > 0 ? data.topics[0].id : '',
      level: 'all', // 'all', 1, 2, 3, 4
      practiceAnswers: {}, // { [qId]: selectedOptIdx }
      isPracticeSubmitted: false,
      practiceQuestions: [],
      examQuestions: [],
      examAnswers: {}, // { [qId]: selectedOptIdx }
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

    // Clean text for speech synthesis
    function getCleanSpeechText(text) {
      if (!text) return '';
      return text
        .replace(/<[^>]*>/g, ' ')
        .replace(/_{2,}/g, ' blank ')
        .replace(/["“”'‘’]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    // TTS Helper
    function speakText(text, lang = defaultLang) {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const clean = getCleanSpeechText(text);
      const utterance = new SpeechSynthesisUtterance(clean);
      utterance.lang = lang;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }

    // Sound Helper
    function playSnd(type) {
      if (window.EduAudio && typeof window.EduAudio.play === 'function') {
        window.EduAudio.play(type);
      } else if (window.soundEngine) {
        if (type === 'correct' || type === 'success') window.soundEngine.playSnap();
        else if (type === 'wrong' || type === 'error') window.soundEngine.playError();
        else if (type === 'victory' || type === 'fanfare') window.soundEngine.playVictoryFanfare();
        else window.soundEngine.playPickup();
      }
    }

    // Shuffle array helper
    function shuffle(arr) {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    // Clone question with randomized option order
    function randomizeQuestion(q) {
      const correctText = q.options[q.correct];
      const randomizedOptions = shuffle(q.options);
      const newCorrect = randomizedOptions.indexOf(correctText);
      return {
        ...q,
        options: randomizedOptions,
        correct: newCorrect
      };
    }

    // --- INITIALIZATION ---
    function init() {
      initUserWidget();
      renderTopicPills();
      bindEvents();
      switchMode('practice');
    }

    // User Profile Widget
    function initUserWidget() {
      const user = (window.EduAuth && window.EduAuth.getCurrentUser()) ||
                   (window.authManager && window.authManager.currentUser) ||
                   { fullName: 'Học sinh', className: 'Lớp 4', avatar: '🎓' };

      const avatarEl = document.getElementById('user-avatar');
      const nameEl = document.getElementById('user-display-name');
      const classEl = document.getElementById('user-display-class');

      if (avatarEl) avatarEl.textContent = user.avatar || '🎓';
      if (nameEl) nameEl.textContent = user.fullName || 'Học sinh';
      if (classEl) classEl.textContent = user.className || 'Lớp 4';

      const btnLogout = document.getElementById('btn-logout');
      if (btnLogout) {
        btnLogout.addEventListener('click', () => {
          if (confirm('Bạn có muốn đổi tài khoản học sinh khác không?')) {
            if (window.EduAuth && window.EduAuth.openLoginModal) {
              window.EduAuth.openLoginModal(() => initUserWidget());
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
          if (window.EduAudio) {
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

    // Topic Pills
    function renderTopicPills() {
      if (!topicPillsContainer || !data.topics) return;
      topicPillsContainer.innerHTML = '';

      data.topics.forEach(tp => {
        const btn = document.createElement('button');
        btn.className = `topic-pill ${tp.id === state.topicId ? 'active' : ''}`;
        btn.dataset.topic = tp.id;
        btn.innerHTML = `<span style="font-size:1.2rem;">${tp.icon}</span> <span>${tp.name}</span>`;
        btn.addEventListener('click', () => {
          selectTopic(tp.id);
        });
        topicPillsContainer.appendChild(btn);
      });
    }

    function selectTopic(tId) {
      state.topicId = tId;
      document.querySelectorAll('.topic-pill').forEach(b => {
        b.classList.toggle('active', b.dataset.topic === tId);
      });

      if (state.mode === 'theory') {
        renderTheoryView();
      } else if (state.mode === 'practice') {
        generatePracticeQuestions();
        renderPracticeQuestions();
      }
    }

    // Mode Switcher
    function switchMode(newMode) {
      state.mode = newMode;
      modeTabBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === newMode);
      });

      const topicBar = document.getElementById('topic-bar-wrapper');
      if (topicBar) {
        topicBar.style.display = (newMode === 'exam') ? 'none' : 'block';
      }

      if (theoryView) theoryView.classList.toggle('hidden', newMode !== 'theory');
      if (practiceView) practiceView.classList.toggle('hidden', newMode !== 'practice');
      if (examView) examView.classList.toggle('hidden', newMode !== 'exam');

      if (newMode === 'theory') {
        renderTheoryView();
      } else if (newMode === 'practice') {
        if (!state.practiceQuestions || state.practiceQuestions.length === 0) {
          generatePracticeQuestions();
        }
        renderPracticeQuestions();
      } else if (newMode === 'exam') {
        if (!state.examQuestions || state.examQuestions.length === 0) {
          generateExam();
        }
        renderExamQuestions();
        startExamTimer();
      }
    }

    // 1. THEORY VIEW
    function renderTheoryView() {
      const topic = data.topics.find(t => t.id === state.topicId) || data.topics[0];
      if (!topic) return;

      const titleEl = document.getElementById('theory-header-title');
      const descEl = document.getElementById('theory-header-desc');
      const iconEl = document.getElementById('theory-header-icon');
      const gridEl = document.getElementById('theory-grid');

      if (titleEl) titleEl.textContent = topic.name;
      if (descEl) descEl.textContent = topic.desc;
      if (iconEl) iconEl.textContent = topic.icon;

      if (!gridEl) return;
      gridEl.innerHTML = '';

      if (topic.theory && topic.theory.highlights) {
        topic.theory.highlights.forEach(item => {
          const card = document.createElement('div');
          card.className = 'theory-card';

          let speakBtnHtml = '';
          if (isLanguageSubject && item.english) {
            speakBtnHtml = `<button type="button" class="btn-speak-word" title="Nghe phát âm chuẩn">🔊</button>`;
          }

          card.innerHTML = `
            <h3>${item.icon || '📌'} ${item.title} ${speakBtnHtml}</h3>
            <div class="theory-content">${item.content}</div>
          `;

          if (speakBtnHtml) {
            const btn = card.querySelector('.btn-speak-word');
            if (btn) {
              btn.addEventListener('click', (e) => {
                e.stopPropagation();
                speakText(item.english);
              });
            }
          }

          gridEl.appendChild(card);
        });
      }
    }

    // 2. PRACTICE VIEW
    function generatePracticeQuestions() {
      const topic = data.topics.find(t => t.id === state.topicId) || data.topics[0];
      if (!topic || !topic.questions) {
        state.practiceQuestions = [];
        return;
      }

      let qs = [...topic.questions];

      // Filter by level
      if (state.level !== 'all') {
        const lvlNum = parseInt(state.level);
        qs = qs.filter(q => q.level === lvlNum);
      }

      // Randomize options for each question
      state.practiceQuestions = qs.map(q => randomizeQuestion(q));
      state.practiceAnswers = {};
      state.isPracticeSubmitted = false;
    }

    function renderPracticeQuestions() {
      if (!practiceQuestionsList) return;
      practiceQuestionsList.innerHTML = '';

      if (btnSubmitPractice) {
        btnSubmitPractice.textContent = '📝 Nộp Bài & Xem Điểm Số';
        btnSubmitPractice.style.background = 'linear-gradient(135deg, #16a34a, #15803d)';
      }

      if (state.practiceQuestions.length === 0) {
        practiceQuestionsList.innerHTML = `
          <div style="text-align:center; padding:40px; background:#ffffff; border-radius:18px; border:2px dashed #cbd5e1;">
            <span style="font-size:3rem;">🔍</span>
            <h3 style="margin-top:12px; color:#475569;">Không có bài tập phù hợp với bộ lọc này</h3>
            <p style="color:#94a3b8; margin-top:6px;">Hãy thử chọn cấp độ khác hoặc nhấn "Tất cả" nhé!</p>
          </div>
        `;
        return;
      }

      const letters = ['A', 'B', 'C', 'D'];
      const levelLabels = {
        1: 'Mức 1: Nhận biết',
        2: 'Mức 2: Thông hiểu',
        3: 'Mức 3: Vận dụng',
        4: 'Mức 4: Vận dụng cao'
      };

      state.practiceQuestions.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'q-card';
        card.id = `practice-q-${q.id}`;

        const cleanSpeech = getCleanSpeechText(q.question);

        let optionsHtml = '';
        q.options.forEach((opt, optIdx) => {
          let optClass = 'opt-btn';
          const selectedOpt = state.practiceAnswers[q.id];

          if (state.isPracticeSubmitted) {
            if (optIdx === q.correct) optClass += ' correct';
            else if (selectedOpt === optIdx) optClass += ' wrong';
          } else if (selectedOpt === optIdx) {
            optClass += ' selected';
          }

          let optSpeakBtn = '';
          if (isLanguageSubject) {
            optSpeakBtn = `<span class="opt-speak-btn" data-opt-idx="${optIdx}" title="Nghe phát âm đáp án">🔊</span>`;
          }

          optionsHtml += `
            <button class="${optClass}" data-qid="${q.id}" data-opt="${optIdx}">
              <span class="opt-letter">${letters[optIdx]}</span>
              <span class="opt-text">${opt}</span>
              ${optSpeakBtn}
            </button>
          `;
        });

        const qSpeakHtml = isLanguageSubject 
          ? `<button type="button" class="btn-speak-q" id="practice-speak-q-${q.id}" title="Bấm để nghe câu hỏi" aria-label="Nghe câu hỏi">🔊</button>` 
          : '';

        card.innerHTML = `
          <div class="q-card-header">
            <span class="q-badge lvl-${q.level}">${levelLabels[q.level] || 'Luyện tập'}</span>
            <span style="font-size:0.95rem; font-weight:800; color:#64748b;">Câu ${idx + 1}/${state.practiceQuestions.length}</span>
          </div>
          <div class="q-text">${q.question} ${qSpeakHtml}</div>
          <div class="options-grid">
            ${optionsHtml}
          </div>
          <div id="practice-explanation-${q.id}" class="explanation-box ${state.isPracticeSubmitted ? '' : 'hidden'}" style="${state.isPracticeSubmitted ? '' : 'display: none !important;'}">
            <h4>📖 Lời giải chi tiết:</h4>
            <div>${q.explanation}</div>
          </div>
        `;

        if (isLanguageSubject) {
          // Listen question
          const btnSpeak = card.querySelector(`#practice-speak-q-${q.id}`);
          if (btnSpeak) {
            btnSpeak.addEventListener('click', (e) => {
              e.stopPropagation();
              speakText(cleanSpeech);
            });
          }

          // Option audio
          card.querySelectorAll('.opt-speak-btn').forEach(sBtn => {
            sBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              const optIdx = parseInt(sBtn.dataset.optIdx);
              const optText = q.options[optIdx];
              speakText(optText);
            });
          });
        }

        // Option selection
        card.querySelectorAll('.opt-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            if (state.isPracticeSubmitted) return;
            playSnd('click');
            const optIdx = parseInt(btn.dataset.opt);
            state.practiceAnswers[q.id] = optIdx;

            card.querySelectorAll('.opt-btn').forEach(b => {
              if (parseInt(b.dataset.opt) === optIdx) {
                b.classList.add('selected');
              } else {
                b.classList.remove('selected');
              }
            });
          });
        });

        practiceQuestionsList.appendChild(card);
      });
    }

    function submitPractice() {
      if (state.isPracticeSubmitted) return;
      state.isPracticeSubmitted = true;

      const questions = state.practiceQuestions;
      let correctCount = 0;

      questions.forEach(q => {
        const selected = state.practiceAnswers[q.id];
        const isCorrect = (selected === q.correct);
        if (isCorrect) correctCount++;

        const card = document.getElementById(`practice-q-${q.id}`);
        if (card) {
          card.querySelectorAll('.opt-btn').forEach((btn, optIdx) => {
            btn.classList.remove('selected');
            if (optIdx === q.correct) btn.classList.add('correct');
            else if (selected === optIdx && !isCorrect) btn.classList.add('wrong');
          });

          const expEl = document.getElementById(`practice-explanation-${q.id}`);
          if (expEl) {
            expEl.classList.remove('hidden');
            expEl.style.removeProperty('display');
          }
        }
      });

      const totalCount = questions.length;
      const score = totalCount > 0 ? ((correctCount / totalCount) * 10).toFixed(1) : '10.0';

      if (btnSubmitPractice) {
        btnSubmitPractice.textContent = `🎉 Hoàn Thành: Đúng ${correctCount}/${totalCount} Câu (Điểm: ${score}/10)`;
        btnSubmitPractice.style.background = '#0284c7';
      }

      showScoreModal({
        title: 'Kết Quả Luyện Tập Phân Hóa',
        score: score,
        correctCount: correctCount,
        totalCount: totalCount,
        mode: 'practice'
      });
    }

    // 3. EXAM VIEW
    function generateExam() {
      const allQs = [];
      data.topics.forEach(t => {
        if (t.questions && t.questions.length > 0) {
          t.questions.forEach(q => {
            allQs.push({ ...q, topicName: t.name });
          });
        }
      });

      // Sample 10 questions across topics with varied levels
      const sampled = shuffle(allQs).slice(0, 10);
      state.examQuestions = sampled.map(q => randomizeQuestion(q));
      state.examAnswers = {};
      state.isExamSubmitted = false;
      state.examTimeLeft = 20 * 60;
    }

    function renderExamQuestions() {
      if (!examQuestionsList) return;
      examQuestionsList.innerHTML = '';

      if (btnSubmitExam) {
        btnSubmitExam.textContent = '📝 Nộp Bài & Xem Điểm Số';
        btnSubmitExam.style.background = 'linear-gradient(135deg, #16a34a, #15803d)';
      }

      const letters = ['A', 'B', 'C', 'D'];
      state.examQuestions.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'q-card';
        card.id = `exam-q-${q.id}`;

        const cleanSpeech = getCleanSpeechText(q.question);

        let optionsHtml = '';
        q.options.forEach((opt, optIdx) => {
          let optClass = 'opt-btn';
          const selectedOpt = state.examAnswers[q.id];

          if (state.isExamSubmitted) {
            if (optIdx === q.correct) optClass += ' correct';
            else if (selectedOpt === optIdx) optClass += ' wrong';
          } else if (selectedOpt === optIdx) {
            optClass += ' selected';
          }

          let optSpeakBtn = '';
          if (isLanguageSubject) {
            optSpeakBtn = `<span class="opt-speak-btn" data-opt-idx="${optIdx}" title="Nghe phát âm đáp án">🔊</span>`;
          }

          optionsHtml += `
            <button class="${optClass}" data-qid="${q.id}" data-opt="${optIdx}">
              <span class="opt-letter">${letters[optIdx]}</span>
              <span class="opt-text">${opt}</span>
              ${optSpeakBtn}
            </button>
          `;
        });

        const qSpeakHtml = isLanguageSubject 
          ? `<button type="button" class="btn-speak-q" id="exam-speak-q-${q.id}" title="Bấm để nghe câu hỏi" aria-label="Nghe câu hỏi">🔊</button>` 
          : '';

        card.innerHTML = `
          <div class="q-card-header">
            <span class="q-badge lvl-${q.level}">Chủ đề: ${q.topicName || 'Lớp 4'}</span>
            <span style="font-size:0.95rem; font-weight:800; color:#64748b;">Câu ${idx + 1}/${state.examQuestions.length} (1.0 điểm)</span>
          </div>
          <div class="q-text">${q.question} ${qSpeakHtml}</div>
          <div class="options-grid">
            ${optionsHtml}
          </div>
          <div id="exam-explanation-${q.id}" class="explanation-box ${state.isExamSubmitted ? '' : 'hidden'}" style="${state.isExamSubmitted ? '' : 'display: none !important;'}">
            <h4>📖 Hướng dẫn giải chi tiết:</h4>
            <div>${q.explanation}</div>
          </div>
        `;

        if (isLanguageSubject) {
          // Listen question
          const btnSpeak = card.querySelector(`#exam-speak-q-${q.id}`);
          if (btnSpeak) {
            btnSpeak.addEventListener('click', (e) => {
              e.stopPropagation();
              speakText(cleanSpeech);
            });
          }

          // Option audio
          card.querySelectorAll('.opt-speak-btn').forEach(sBtn => {
            sBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              const optIdx = parseInt(sBtn.dataset.optIdx);
              const optText = q.options[optIdx];
              speakText(optText);
            });
          });
        }

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

    function startExamTimer() {
      if (state.examTimer) clearInterval(state.examTimer);

      function updateTimerDisplay() {
        if (!examTimerEl) return;
        const mins = Math.floor(state.examTimeLeft / 60);
        const secs = state.examTimeLeft % 60;
        examTimerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }

      updateTimerDisplay();
      state.examTimer = setInterval(() => {
        if (state.isExamSubmitted) {
          clearInterval(state.examTimer);
          return;
        }

        state.examTimeLeft--;
        updateTimerDisplay();

        if (state.examTimeLeft <= 0) {
          clearInterval(state.examTimer);
          alert('Hết giờ làm bài thi! Hệ thống đang tự động nộp bài...');
          submitExam();
        }
      }, 1000);
    }

    function submitExam() {
      if (state.isExamSubmitted) return;
      state.isExamSubmitted = true;
      if (state.examTimer) clearInterval(state.examTimer);

      const questions = state.examQuestions;
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

      const score = (correctCount * 1.0).toFixed(1);

      if (btnSubmitExam) {
        btnSubmitExam.textContent = `🎉 Hoàn Thành Bài Thi: Điểm ${score} / 10.0`;
        btnSubmitExam.style.background = '#0284c7';
      }

      // Record high score in authManager
      if (window.authManager && window.authManager.currentUser) {
        const scoreNum = Math.round(parseFloat(score) * 100);
        const curScore = window.authManager.currentUser.highScore || 0;
        if (scoreNum > curScore && typeof window.authManager.updateHighScore === 'function') {
          window.authManager.updateHighScore(scoreNum);
        }
      }

      showScoreModal({
        title: 'Kết Quả Bài Thi Thử Học Kỳ',
        score: score,
        correctCount: correctCount,
        totalCount: questions.length,
        mode: 'exam'
      });
    }

    // Modal Presentation
    function showScoreModal(scoreData) {
      if (!scoreModal) return;

      const titleEl = document.getElementById('modal-score-title');
      const valEl = document.getElementById('modal-score-val');
      const tagEl = document.getElementById('modal-score-tag');
      const msgEl = document.getElementById('modal-score-msg');

      if (titleEl) titleEl.textContent = scoreData.title;
      if (valEl) valEl.textContent = `${scoreData.score} / 10.0`;

      const numScore = parseFloat(scoreData.score);
      let badgeText = 'Xuất Sắc! 🌟';
      let badgeClass = 'perfect';
      let msg = `Tuyệt vời! Bạn đã trả lời đúng ${scoreData.correctCount}/${scoreData.totalCount} câu hỏi! Bấm "Xem Lời Giải Chi Tiết" để đối chiếu đáp án nhé.`;

      if (numScore >= 9.0) {
        playSnd('victory');
        if (typeof window.launchConfetti === 'function') window.launchConfetti();
      } else if (numScore >= 7.0) {
        badgeText = 'Khá Giỏi! 👍';
        badgeClass = 'good';
        msg = `Làm tốt lắm! Bạn đúng ${scoreData.correctCount}/${scoreData.totalCount} câu. Tiếp tục phát huy nhé!`;
        playSnd('level');
      } else if (numScore >= 5.0) {
        badgeText = 'Đạt Yêu Cầu 📚';
        badgeClass = 'pass';
        msg = `Bạn đạt ${scoreData.correctCount}/${scoreData.totalCount} câu. Xem lại các câu giải thích để nắm chắc kiến thức hơn nhé!`;
        playSnd('correct');
      } else {
        badgeText = 'Cần Cố Gắng Thêm 💪';
        badgeClass = 'retry';
        msg = `Đừng nản lòng! Đọc kỹ từng câu hướng dẫn giải chi tiết bên dưới rồi luyện tập lại nhé!`;
        playSnd('wrong');
      }

      if (tagEl) {
        tagEl.className = `score-badge-tag ${badgeClass}`;
        tagEl.textContent = badgeText;
      }
      if (msgEl) msgEl.textContent = msg;

      scoreModal.classList.remove('hidden');
    }

    // Event Binds
    function bindEvents() {
      modeTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          switchMode(btn.dataset.mode);
        });
      });

      if (levelFilterContainer) {
        levelFilterContainer.querySelectorAll('.level-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            levelFilterContainer.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.level = btn.dataset.lvl;
            generatePracticeQuestions();
            renderPracticeQuestions();
          });
        });
      }

      const btnRerollPractice = document.getElementById('btn-reroll-practice');
      if (btnRerollPractice) {
        btnRerollPractice.addEventListener('click', () => {
          playSnd('click');
          generatePracticeQuestions();
          renderPracticeQuestions();
        });
      }

      const btnRerollExam = document.getElementById('btn-reroll-exam');
      if (btnRerollExam) {
        btnRerollExam.addEventListener('click', () => {
          playSnd('click');
          generateExam();
          renderExamQuestions();
          startExamTimer();
        });
      }

      if (btnSubmitPractice) {
        btnSubmitPractice.addEventListener('click', submitPractice);
      }

      if (btnSubmitExam) {
        btnSubmitExam.addEventListener('click', submitExam);
      }

      const btnCloseModal = document.getElementById('btn-close-modal');
      if (btnCloseModal) {
        btnCloseModal.addEventListener('click', () => {
          if (scoreModal) scoreModal.classList.add('hidden');
        });
      }

      const btnRetryExam = document.getElementById('btn-retry-exam');
      if (btnRetryExam) {
        btnRetryExam.addEventListener('click', () => {
          if (scoreModal) scoreModal.classList.add('hidden');
          if (state.mode === 'exam') {
            generateExam();
            renderExamQuestions();
            startExamTimer();
          } else {
            generatePracticeQuestions();
            renderPracticeQuestions();
          }
        });
      }
    }

    return {
      init: init,
      switchMode: switchMode,
      speakText: speakText
    };
  }

  return {
    createEngine: createEngine
  };
})();
