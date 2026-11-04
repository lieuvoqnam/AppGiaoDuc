/**
 * portal.js - Logic điều khiển Cổng Học Liệu Số Tương Tác Lớp 1 - 12
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure data exists
  if (!window.PORTAL_DATA) {
    console.error('Missing PORTAL_DATA');
    return;
  }

  // --- PORTAL STATE ---
  const state = {
    currentLevel: 'tieu_hoc', // 'tieu_hoc' | 'thcs' | 'thpt'
    currentGrade: 4, // Default selected grade (1 - 12)
    selectedSubjectId: 'lich_su_dia_ly', // Default selected subject
    searchQuery: ''
  };

  // --- DOM ELEMENTS ---
  const levelTabsContainer = document.getElementById('level-tabs');
  const gradePillsContainer = document.getElementById('grade-pills');
  const gradeTitleEl = document.getElementById('grade-title');
  const gradeDescEl = document.getElementById('grade-desc');
  const subjectsGrid = document.getElementById('subjects-grid');
  const appShowcaseArea = document.getElementById('app-showcase-area');
  const subjectsCountBadge = document.getElementById('subjects-count-badge');
  const subjectDetailHeader = document.getElementById('subject-detail-header');
  const searchInput = document.getElementById('portal-search-input');

  // Auth & Header DOM
  const authModal = document.getElementById('auth-modal');
  const authTabLogin = document.getElementById('auth-tab-login');
  const authTabRegister = document.getElementById('auth-tab-register');
  const authTabRecovery = document.getElementById('auth-tab-recovery');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const recoveryForm = document.getElementById('recovery-form');
  const authMsg = document.getElementById('auth-msg');
  const linkToRegister = document.getElementById('link-to-register');
  const linkToLogin = document.getElementById('link-to-login');
  const linkForgotPass = document.getElementById('link-forgot-pass');
  const linkBackToLogin = document.getElementById('link-back-to-login');
  const avatarGrid = document.getElementById('avatar-grid');

  const btnModeFindUser = document.getElementById('btn-mode-find-user');
  const btnModeResetPass = document.getElementById('btn-mode-reset-pass');
  const subFindUserBlock = document.getElementById('sub-find-user-block');
  const subResetPassBlock = document.getElementById('sub-reset-pass-block');

  const findFullname = document.getElementById('find-fullname');
  const findClassname = document.getElementById('find-classname');
  const btnSubmitFindUser = document.getElementById('btn-submit-find-user');
  const findUserResult = document.getElementById('find-user-result');

  const resetUsername = document.getElementById('reset-username');
  const resetAdminPin = document.getElementById('reset-admin-pin');
  const resetNewPassword = document.getElementById('reset-new-password');
  const btnSubmitResetPass = document.getElementById('btn-submit-reset-pass');

  const userAvatarEl = document.getElementById('user-avatar');
  const userDisplayNameEl = document.getElementById('user-display-name');
  const userDisplayClassEl = document.getElementById('user-display-class');
  const userInfoBtn = document.getElementById('user-info-btn');
  const btnLeaderboard = document.getElementById('btn-leaderboard');
  const btnLogout = document.getElementById('btn-logout');

  const leaderboardModal = document.getElementById('leaderboard-modal');
  const leaderboardClose = document.getElementById('leaderboard-close');
  const lbCurrentUserBox = document.getElementById('lb-current-user-box');
  const lbTableBody = document.getElementById('lb-table-body');

  let selectedAvatar = '🎓';

  // --- INITIALIZATION ---
  function init() {
    setupAuthHandlers();
    checkAuthStatus();
    renderLevels();
    renderGradePills();
    selectGrade(state.currentGrade);
    setupSearch();
  }

  // --- AUTH STATUS & UI ---
  function checkAuthStatus() {
    if (window.authManager && window.authManager.isLoggedIn()) {
      const user = window.authManager.currentUser;
      if (authModal) authModal.classList.add('hidden');
      updateUserProfileUI(user);

      // Auto-detect grade from user's class name (e.g., "5A" -> Grade 5, "12A1" -> Grade 12)
      if (user.className) {
        const match = user.className.match(/\b(1[0-2]|[1-9])\b/);
        if (match) {
          const detectedGrade = parseInt(match[1]);
          if (detectedGrade >= 1 && detectedGrade <= 12) {
            selectGrade(detectedGrade);
          }
        }
      }
    } else {
      if (authModal) authModal.classList.remove('hidden');
    }
  }

  function updateUserProfileUI(user) {
    if (!user) return;
    if (userAvatarEl) { if (window.authManager && window.authManager.renderAvatar) window.authManager.renderAvatar(userAvatarEl, user.avatar); else userAvatarEl.textContent = user.avatar || '🎓'; }
    if (userDisplayNameEl) userDisplayNameEl.textContent = user.fullName || user.username;
    let classText = user.className || 'Học sinh';
    if (user.schoolName && !classText.includes(user.schoolName)) {
      classText = `${classText} • ${user.schoolName}`;
    }
    if (userDisplayClassEl) userDisplayClassEl.textContent = classText;
  }

  function setupAuthHandlers() {
    if (!authModal) return;

    authTabLogin.addEventListener('click', () => showAuthTab('login'));
    authTabRegister.addEventListener('click', () => showAuthTab('register'));
    linkToRegister.addEventListener('click', (e) => { e.preventDefault(); showAuthTab('register'); });
    linkToLogin.addEventListener('click', (e) => { e.preventDefault(); showAuthTab('login'); });

    if (avatarGrid) {
      avatarGrid.querySelectorAll('.avt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          avatarGrid.querySelectorAll('.avt-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          selectedAvatar = btn.dataset.avatar;
        });
      });
    }

    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;

      try {
        const user = await window.authManager.login(username, password);
        showAuthMessage('Đăng nhập thành công! Chào mừng bạn!', 'success');
        setTimeout(() => {
          authModal.classList.add('hidden');
          updateUserProfileUI(user);
        }, 500);
      } catch (err) {
        showAuthMessage(err.message, 'error');
      }
    });

    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fullName = document.getElementById('reg-fullname').value;
      const className = document.getElementById('reg-classname').value;
      const username = document.getElementById('reg-username').value;
      const password = document.getElementById('reg-password').value;

      try {
        const user = await window.authManager.register({
          username, fullName, className, avatar: selectedAvatar, password
        });
        showAuthMessage(`Chúc mừng ${user.fullName}! Tài khoản đã tạo thành công!`, 'success');
        setTimeout(() => {
          authModal.classList.add('hidden');
          updateUserProfileUI(user);
        }, 600);
      } catch (err) {
        showAuthMessage(err.message, 'error');
      }
    });

    if (authTabRecovery) authTabRecovery.addEventListener('click', () => showAuthTab('recovery'));
    if (linkForgotPass) linkForgotPass.addEventListener('click', (e) => { e.preventDefault(); showAuthTab('recovery'); });
    if (linkBackToLogin) linkBackToLogin.addEventListener('click', (e) => { e.preventDefault(); showAuthTab('login'); });

    // Chuyển đổi giữa 2 chế độ trong Form Khôi phục
    if (btnModeFindUser && btnModeResetPass) {
      btnModeFindUser.addEventListener('click', () => {
        btnModeFindUser.style.background = '#0284c7';
        btnModeFindUser.style.color = '#ffffff';
        btnModeFindUser.style.borderColor = '#0284c7';
        btnModeResetPass.style.background = '#ffffff';
        btnModeResetPass.style.color = '#475569';
        btnModeResetPass.style.borderColor = '#cbd5e1';
        if (subFindUserBlock) subFindUserBlock.style.display = 'block';
        if (subResetPassBlock) subResetPassBlock.style.display = 'none';
        if (findUserResult) findUserResult.style.display = 'none';
      });

      btnModeResetPass.addEventListener('click', () => {
        btnModeResetPass.style.background = '#0284c7';
        btnModeResetPass.style.color = '#ffffff';
        btnModeResetPass.style.borderColor = '#0284c7';
        btnModeFindUser.style.background = '#ffffff';
        btnModeFindUser.style.color = '#475569';
        btnModeFindUser.style.borderColor = '#cbd5e1';
        if (subFindUserBlock) subFindUserBlock.style.display = 'none';
        if (subResetPassBlock) subResetPassBlock.style.display = 'block';
      });
    }

    // Xử lý Tìm Tên Đăng Nhập
    if (btnSubmitFindUser) {
      btnSubmitFindUser.addEventListener('click', async () => {
        const nameVal = (findFullname ? findFullname.value : '').trim();
        const classVal = (findClassname ? findClassname.value : '').trim();
        if (!nameVal) {
          showAuthMessage('Vui lòng nhập Họ và Tên của học sinh để tìm kiếm!', 'error');
          return;
        }

        try {
          btnSubmitFindUser.textContent = '⏳ Đang tìm kiếm...';
          const matches = await window.authManager.findUserByName(nameVal, classVal);
          if (matches && matches.length > 0) {
            findUserResult.style.display = 'block';
            findUserResult.style.background = '#f0fdf4';
            findUserResult.style.border = '1.5px solid #86efac';
            findUserResult.style.color = '#15803d';

            let html = `🎉 <strong>Tìm thấy ${matches.length} học sinh phù hợp:</strong><ul style="margin-top:6px; padding-left:18px; line-height:1.6;">`;
            matches.forEach(m => {
              html += `<li><strong>${m.fullName}</strong> (${m.className}) ➔ Tên đăng nhập: <code style="background:#dcfce7; padding:2px 6px; border-radius:4px; font-weight:900; color:#166534;">${m.username}</code> <button type="button" class="btn-use-found-user" data-username="${m.username}" style="margin-left:8px; padding:2px 8px; font-size:0.75rem; border:1px solid #16a34a; background:#ffffff; color:#16a34a; border-radius:4px; cursor:pointer; font-weight:700;">Dùng tên này</button></li>`;
            });
            html += `</ul>`;
            findUserResult.innerHTML = html;

            findUserResult.querySelectorAll('.btn-use-found-user').forEach(btn => {
              btn.addEventListener('click', () => {
                const u = btn.dataset.username;
                document.getElementById('login-username').value = u;
                showAuthTab('login');
                document.getElementById('login-password').focus();
              });
            });
          } else {
            findUserResult.style.display = 'block';
            findUserResult.style.background = '#fff1f2';
            findUserResult.style.border = '1.5px solid #fecdd3';
            findUserResult.style.color = '#be123c';
            findUserResult.innerHTML = `⚠️ Không tìm thấy học sinh nào có tên "${nameVal}". Vui lòng kiểm tra lại chính tả hoặc đăng ký tài khoản mới nhé!`;
          }
        } catch (err) {
          showAuthMessage(err.message, 'error');
        } finally {
          btnSubmitFindUser.textContent = '🔍 Tìm Tên Đăng Nhập ➔';
        }
      });
    }

    // Xử lý Đặt Lại Mật Khẩu
    if (btnSubmitResetPass) {
      btnSubmitResetPass.addEventListener('click', async () => {
        const uVal = (resetUsername ? resetUsername.value : '').trim();
        const pinVal = (resetAdminPin ? resetAdminPin.value : '').trim();
        const passVal = (resetNewPassword ? resetNewPassword.value : '').trim();

        if (!uVal || !pinVal || !passVal) {
          showAuthMessage('Vui lòng nhập đầy đủ Tên đăng nhập, Mã PIN Thầy Cô và Mật khẩu mới!', 'error');
          return;
        }

        try {
          btnSubmitResetPass.textContent = '⏳ Đang lưu mật khẩu...';
          await window.authManager.resetPassword({
            username: uVal,
            adminPin: pinVal,
            newPassword: passVal
          });
          showAuthMessage(`🎉 Tuyệt vời! Mật khẩu của tài khoản "${uVal}" đã được đặt lại thành công!`, 'success');
          document.getElementById('login-username').value = uVal;
          document.getElementById('login-password').value = passVal;
          setTimeout(() => {
            showAuthTab('login');
          }, 1500);
        } catch (err) {
          showAuthMessage(err.message, 'error');
        } finally {
          btnSubmitResetPass.textContent = '🔑 Lưu Mật Khẩu Mới ➔';
        }
      });
    }

    if (btnLogout) {
      btnLogout.addEventListener('click', () => {
        if (confirm('Bạn có chắc muốn đăng xuất để chuyển tài khoản khác không?')) {
          window.authManager.logout();
          checkAuthStatus();
        }
      });
    }

    if (btnLeaderboard) btnLeaderboard.addEventListener('click', openLeaderboardModal);
    if (leaderboardClose) leaderboardClose.addEventListener('click', () => leaderboardModal.classList.add('hidden'));

    // User Profile Modal Open
    if (window.authManager && typeof window.authManager.initProfileModal === 'function') {
      const profileCtrl = window.authManager.initProfileModal({
        onUpdate: (user) => updateUserProfileUI(user)
      });
      if (userInfoBtn && profileCtrl) {
        userInfoBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          profileCtrl.openModal();
        });
      }
    }

    window.addEventListener('click', (e) => {
      if (e.target === leaderboardModal) leaderboardModal.classList.add('hidden');
    });
  }

  function showAuthTab(tab) {
    authMsg.classList.add('hidden');
    if (findUserResult) findUserResult.style.display = 'none';

    authTabLogin.classList.remove('active');
    authTabRegister.classList.remove('active');
    if (authTabRecovery) authTabRecovery.classList.remove('active');

    loginForm.classList.add('hidden');
    registerForm.classList.add('hidden');
    if (recoveryForm) recoveryForm.classList.add('hidden');

    if (tab === 'login') {
      authTabLogin.classList.add('active');
      loginForm.classList.remove('hidden');
    } else if (tab === 'register') {
      authTabRegister.classList.add('active');
      registerForm.classList.remove('hidden');
    } else if (tab === 'recovery') {
      if (authTabRecovery) authTabRecovery.classList.add('active');
      if (recoveryForm) recoveryForm.classList.remove('hidden');
    }
  }

  function showAuthMessage(text, type = 'error') {
    authMsg.textContent = text;
    authMsg.className = `auth-msg-box ${type}`;
    authMsg.classList.remove('hidden');
  }

  function openLeaderboardModal() {
    const user = window.authManager.currentUser;
    const leaders = window.authManager.getLeaderboard();

    if (user && lbCurrentUserBox) {
      lbCurrentUserBox.innerHTML = `
        <div class="lb-user-info">
          <div class="lb-user-avt">${user.avatar || '🎓'}</div>
          <div class="lb-user-names">
            <h4>${user.fullName}</h4>
            <span>${user.className} • ${user.username}</span>
          </div>
        </div>
        <div class="lb-user-stats">
          <div class="lb-user-stat-item">
            <span class="lb-stat-lbl">Điểm Kỷ Lục</span>
            <span class="lb-stat-val">${(user.highScore || 0).toLocaleString()}</span>
          </div>
          <div class="lb-user-stat-item">
            <span class="lb-stat-lbl">Combo Đỉnh</span>
            <span class="lb-stat-val">x${user.maxStreak || 0}</span>
          </div>
          <div class="lb-user-stat-item">
            <span class="lb-stat-lbl">Đã Hoàn Thành</span>
            <span class="lb-stat-val">${user.totalCompleted || 0} lần</span>
          </div>
        </div>
      `;
    }

    if (lbTableBody) {
      lbTableBody.innerHTML = '';
      if (leaders.length === 0) {
        lbTableBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:#94a3b8;">Chưa có dữ liệu. Hãy là người đầu tiên ghi điểm!</td></tr>`;
      } else {
        leaders.forEach((u, idx) => {
          const tr = document.createElement('tr');
          let rankBadge = `${idx + 1}`;
          if (idx === 0) rankBadge = '🥇';
          else if (idx === 1) rankBadge = '🥈';
          else if (idx === 2) rankBadge = '🥉';

          const isMe = user && user.username === u.username;
          if (isMe) tr.style.background = '#e0f2fe';

          tr.innerHTML = `
            <td><span class="rank-badge">${rankBadge}</span></td>
            <td>
              <span style="font-size:1.2rem; margin-right:6px;">${u.avatar || '🎓'}</span>
              <strong>${u.fullName}</strong>
              ${isMe ? '<span class="lb-badge-pill">Bạn</span>' : ''}
            </td>
            <td style="color:#64748b;">${u.className || 'Học sinh'}</td>
            <td style="color:#0284c7; font-weight:900;">${(u.highScore || 0).toLocaleString()}</td>
          `;
          lbTableBody.appendChild(tr);
        });
      }
    }

    if (leaderboardModal) leaderboardModal.classList.remove('hidden');
  }

  // --- RENDER LEVELS (Tiểu học, THCS, THPT) ---
  function renderLevels() {
    if (!levelTabsContainer) return;
    levelTabsContainer.innerHTML = '';

    window.PORTAL_DATA.levels.forEach(lvl => {
      const btn = document.createElement('button');
      btn.className = `level-tab-btn ${lvl.id === state.currentLevel ? 'active' : ''}`;
      btn.dataset.level = lvl.id;
      btn.innerHTML = `<span class="icon">${lvl.badge}</span> <span>${lvl.name}</span>`;
      btn.addEventListener('click', () => {
        state.currentLevel = lvl.id;
        renderLevels();
        // Auto select first grade of level
        selectGrade(lvl.grades[0]);
      });
      levelTabsContainer.appendChild(btn);
    });
  }

  // --- RENDER GRADE PILLS (Lớp 1 - 12) ---
  function renderGradePills() {
    if (!gradePillsContainer) return;
    gradePillsContainer.innerHTML = '';

    const currentLevelObj = window.PORTAL_DATA.levels.find(l => l.id === state.currentLevel);
    const availableGrades = currentLevelObj ? currentLevelObj.grades : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    availableGrades.forEach(gNum => {
      const btn = document.createElement('button');
      btn.className = `grade-pill-btn ${gNum === state.currentGrade ? 'active' : ''}`;
      btn.dataset.grade = gNum;
      btn.innerHTML = `<span>Lớp ${gNum}</span>`;
      btn.addEventListener('click', () => {
        selectGrade(gNum);
      });
      gradePillsContainer.appendChild(btn);
    });
  }

  // --- SELECT GRADE ---
  function selectGrade(gradeNum) {
    state.currentGrade = gradeNum;
    const gradeData = window.PORTAL_DATA.grades[gradeNum];
    if (!gradeData) return;

    // Update level if needed
    if (gradeData.level !== state.currentLevel) {
      state.currentLevel = gradeData.level;
      renderLevels();
    }
    renderGradePills();

    // Update Header Text
    if (gradeTitleEl) gradeTitleEl.textContent = `Chương Trình ${gradeData.title}`;
    if (gradeDescEl) gradeDescEl.textContent = gradeData.desc;

    // Find default subject
    const hasHistoryGeo = gradeData.subjects.some(s => s.id === 'lich_su_dia_ly' || s.id === 'dia_ly');
    if (hasHistoryGeo) {
      state.selectedSubjectId = gradeData.subjects.find(s => s.id === 'lich_su_dia_ly' || s.id === 'dia_ly').id;
    } else {
      state.selectedSubjectId = gradeData.subjects[0].id;
    }

    renderSubjects(gradeData.subjects);
    renderAppShowcase(gradeData);
  }

  // --- RENDER SUBJECTS (CỘT BÊN TRÁI: THƯ MỤC CÁC MÔN HỌC) ---
  function renderSubjects(subjects) {
    if (!subjectsGrid) return;
    subjectsGrid.innerHTML = '';

    if (subjectsCountBadge) {
      subjectsCountBadge.textContent = `${subjects.length} môn`;
    }

    if (!subjects || subjects.length === 0) {
      subjectsGrid.innerHTML = `
        <div class="sidebar-empty-box">
          <span style="font-size:1.8rem;">🔍</span>
          <p style="font-size:0.85rem; color:#64748b; margin-top:6px; font-weight:700;">Không tìm thấy môn học phù hợp.</p>
        </div>
      `;
      if (subjectDetailHeader) {
        subjectDetailHeader.innerHTML = `
          <div style="padding:16px; color:#64748b; font-weight:700;">Không có kết quả môn học phù hợp.</div>
        `;
      }
      if (appShowcaseArea) appShowcaseArea.innerHTML = '';
      return;
    }

    // Ensure selectedSubjectId is in current subjects list
    if (!subjects.some(s => s.id === state.selectedSubjectId)) {
      state.selectedSubjectId = subjects[0].id;
    }

    subjects.forEach(sub => {
      const isSelected = sub.id === state.selectedSubjectId;
      const card = document.createElement('div');
      card.className = `subject-sidebar-item ${isSelected ? 'selected' : ''} ${sub.hasApp ? 'has-interactive-app' : ''}`;
      card.dataset.id = sub.id;

      let badgeHtml = '';
      if (sub.hasApp) {
        badgeHtml = `<span class="sub-item-badge app-badge">⭐ Có App</span>`;
      } else {
        badgeHtml = `<span class="sub-item-badge normal-badge">GDPT 2018</span>`;
      }

      card.innerHTML = `
        <div class="sub-item-icon-box" style="background:${sub.color}18; color:${sub.color}; border: 1.5px solid ${sub.color}40;">
          ${sub.icon}
        </div>
        <div class="sub-item-content">
          <div class="sub-item-title-row">
            <h4 class="sub-item-name">${sub.name}</h4>
            ${badgeHtml}
          </div>
          <p class="sub-item-desc">${sub.desc}</p>
        </div>
        <div class="sub-item-arrow-wrap">
          <span class="sub-item-arrow">›</span>
        </div>
      `;

      card.addEventListener('click', () => {
        state.selectedSubjectId = sub.id;
        document.querySelectorAll('.subject-sidebar-item').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        renderAppShowcase(window.PORTAL_DATA.grades[state.currentGrade]);

        // Smooth scroll to detail column on mobile/tablet
        if (window.innerWidth <= 960) {
          const detailCol = document.getElementById('subject-detail-column');
          if (detailCol) {
            detailCol.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });

      subjectsGrid.appendChild(card);
    });
  }

  // --- RENDER APP SHOWCASE AREA (CỘT BÊN PHẢI: CHI TIẾT & HỌC LIỆU MÔN HỌC) ---
  function renderAppShowcase(gradeData) {
    if (!appShowcaseArea) return;
    appShowcaseArea.innerHTML = '';

    const subject = gradeData.subjects.find(s => s.id === state.selectedSubjectId);
    if (!subject) return;

    // Render Right Column Header Card
    if (subjectDetailHeader) {
      subjectDetailHeader.innerHTML = `
        <div class="sdh-left">
          <div class="sdh-icon-box" style="background:${subject.color}20; color:${subject.color}; border: 2px solid ${subject.color}45;">
            ${subject.icon}
          </div>
          <div class="sdh-text-wrap">
            <div class="sdh-meta-tags">
              <span class="sdh-grade-pill">${gradeData.title}</span>
              ${subject.hasApp ? `<span class="sdh-status-pill app-available">🎮 Đã Có Ứng Dụng Tương Tác</span>` : `<span class="sdh-status-pill in-progress">📖 Khung Kiến Thức GDPT 2018</span>`}
            </div>
            <h2 class="sdh-subject-name">${subject.name}</h2>
          </div>
        </div>
        <div class="sdh-desc-wrap">
          <p class="sdh-desc-text">🎯 <strong>Trọng tâm môn học:</strong> ${subject.desc}</p>
        </div>
      `;
    }

    // If subject has interactive apps (e.g. Lịch sử và Địa lý, Toán, Tiếng Việt, Khoa học...)
    if (subject.apps && subject.apps.length > 0) {
      subject.apps.forEach(app => {
        const isWorld = app.id === 'world_map_puzzle';
        const isMath = app.id === 'math_4_review';
        const isVnMap = app.id === 'vn_map_puzzle';
        const cardTheme = app.cardTheme || (isWorld ? 'world-featured-card' : (isMath ? 'math-featured-card' : 'featured-game-card'));
        const showcaseCard = document.createElement('div');
        showcaseCard.className = `app-showcase-card ${cardTheme}`;

        let tagsHtml = '';
        app.tags.forEach(t => {
          tagsHtml += `<span class="app-tag-pill">${t}</span>`;
        });

        let badgeIcon = app.icon;
        if (isVnMap || app.icon === 'vietnam-icon.svg' || app.icon === 'vietnam_map') {
          badgeIcon = `<img src="vietnam-icon.svg" alt="Bản đồ Việt Nam" class="vn-map-badge-img">`;
        } else if (!badgeIcon) {
          badgeIcon = isWorld ? '🌍' : (isMath ? '🧮' : '🇻🇳');
        }
        const buttonSub = app.buttonSub || (isWorld ? 'Khám phá 5 Châu lục thế giới' : (isMath ? '6 Chủ đề & Thi thử' : 'Bản đồ 34 Tỉnh Thành Mới'));
        const features = app.features || (isWorld ? [
          '🌍 Khám Phá 5 Châu Lục Lớn',
          '🚩 Đố Vui Quốc Kỳ & Kỳ Quan Thế Giới',
          '🧲 Kéo - Thả - Bắt Dính Tự Động (Snap)',
          '📖 Bách Khoa Toàn Thư Quốc Gia'
        ] : (isMath ? [
          '📖 Ôn Tập Lý Thuyết & Mẹo Tính Nhanh',
          '🎯 Bài Tập Phân Hóa 4 Mức Độ',
          '⏱️ Đề Thi Thử Tự Động Chấm Điểm',
          '💡 Lời Giải Chi Tiết Từng Bước'
        ] : [
          '🧩 Kéo - Thả - Bắt Dính Tự Động (Snap)',
          '🏔️ 5 Vùng Địa Lý Hài Hòa',
          '🏆 Bảng Vàng Điểm Thưởng & Huy Hiệu',
          '🇻🇳 Chủ Quyền Hoàng Sa & Trường Sa'
        ]));

        let featHtml = '';
        features.forEach(f => {
          featHtml += `<div class="feat-item">${f}</div>`;
        });

        showcaseCard.innerHTML = `
          <div class="showcase-banner">
            <div class="showcase-visual-badge">${badgeIcon}</div>
            <div class="showcase-info">
              <div class="showcase-meta">
                <span class="subject-tag">${subject.name} • ${gradeData.title}</span>
                ${tagsHtml}
              </div>
              <h2 class="showcase-title">${app.title}</h2>
              <h4 class="showcase-subtitle">${app.subtitle}</h4>
              <p class="showcase-goal">🎯 <strong>Yêu cầu cần đạt:</strong> ${app.learningGoal}</p>
            </div>
            <div class="showcase-btn-wrap">
              <a href="${app.url}" class="btn-launch-game">
                <span class="btn-icon">🚀</span>
                <span class="btn-text">
                  <strong>Vào Học & Chơi Ngay</strong>
                  <small>${buttonSub}</small>
                </span>
                <span class="arrow">➔</span>
              </a>
            </div>
          </div>
          <div class="showcase-features-bar">
            ${featHtml}
          </div>
        `;
        appShowcaseArea.appendChild(showcaseCard);
      });
    } else {
      // Other subjects placeholder
      const placeholderCard = document.createElement('div');
      placeholderCard.className = 'app-showcase-card placeholder-card';
      placeholderCard.innerHTML = `
        <div class="placeholder-content">
          <div class="placeholder-icon">${subject.icon}</div>
          <h3>${subject.name} - ${gradeData.title}</h3>
          <p>${subject.desc}</p>
          <div class="placeholder-status-pill">🛠️ Đang cập nhật thêm bài học & ứng dụng tương tác số hóa</div>
          <p class="placeholder-tip">💡 Mời bạn bấm sang các môn đã có ứng dụng tương tác như <strong>🇻🇳 Lịch Sử và Địa Lý Lớp 4</strong> (Bản Đồ Việt Nam), <strong>Toán Học</strong> hoặc <strong>Lớp 7</strong> (Bản Đồ Thế Giới) để trải nghiệm trò chơi học tập!</p>
        </div>
      `;
      appShowcaseArea.appendChild(placeholderCard);
    }
  }

  // --- SEARCH SETUP ---
  function setupSearch() {
    if (!searchInput) return;
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      state.searchQuery = q;
      if (!q) {
        selectGrade(state.currentGrade);
        return;
      }

      // Filter subjects across current grade
      const currentSubjects = window.PORTAL_DATA.grades[state.currentGrade].subjects;
      const filtered = currentSubjects.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.desc.toLowerCase().includes(q) ||
        (s.apps && s.apps.some(a => a.title.toLowerCase().includes(q) || a.tags.some(t => t.toLowerCase().includes(q))))
      );

      renderSubjects(filtered);
      if (filtered.length > 0) {
        renderAppShowcase(window.PORTAL_DATA.grades[state.currentGrade]);
      }
    });
  }

  // Launch init
  init();
});
