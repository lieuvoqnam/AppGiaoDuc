/**

 * app.js - Vietnam Map Puzzle Game Logic

 * Quản lý trạng thái trò chơi, tương tác kéo thả bản đồ, chuyển đổi 34 tỉnh/thành (mới) và 63 tỉnh/thành (cũ).

 */



document.addEventListener('DOMContentLoaded', () => {

  // --- GAME STATE ---

  const state = {

    dataset: '34', // Default to the updated 34 provinces/cities! ('34' | '63')

    mode: 'all', // 'all' | 'region' | 'quiz' | 'explore'

    currentRegionId: 'bac_bo', // Default starting region in 34-mode

    difficulty: 'easy', // 'easy' | 'medium' | 'hard'

    placedProvinces: new Set(),

    selectedPieceId: null,

    quizTargetId: null,

    score: 0,

    streak: 0,

    maxStreak: 0,

    timerSeconds: 0,

    timerInterval: null,

    zoomLevel: 1.0,

    panOffset: { x: 0, y: 0 },

    isPanning: false,

    hasPanned: false,

    panStart: { x: 0, y: 0 },

    isDraggingPiece: false,

    draggedProvince: null,

    dragStartScreen: { x: 0, y: 0 },

    currentSvgOffset: { x: 0, y: 0 }

  };



  // Helper getters for current dataset

  function getProvincesList() {

    return state.dataset === '34' ? window.VIETNAM_PROVINCES_34 : window.VIETNAM_PROVINCES;

  }



  function getRegionsList() {

    return state.dataset === '34' ? window.VIETNAM_REGIONS_34 : window.VIETNAM_REGIONS;

  }



  function getProvinceMap() {

    const map = new Map();

    getProvincesList().forEach(p => map.set(p.id, p));

    return map;

  }



  function getRegionMap() {

    const map = new Map();

    getRegionsList().forEach(r => map.set(r.id, r));

    return map;

  }



  // --- DOM ELEMENTS ---

  const mapViewport = document.getElementById('map-viewport');

  const mapSvg = document.getElementById('vietnam-map');

  const slotsLayer = document.getElementById('slots-layer');

  const placedLayer = document.getElementById('placed-layer');

  const draggingLayer = document.getElementById('dragging-layer');

  const labelsLayer = document.getElementById('labels-layer');

  const mapTransformGroup = document.getElementById('map-transform-group');



  // Stats DOM

  const placedCountEl = document.getElementById('stat-placed-count');

  const totalCountEl = document.getElementById('stat-total-count');

  const progressBarEl = document.getElementById('stat-progress-bar');

  const scoreEl = document.getElementById('stat-score');

  const streakEl = document.getElementById('stat-streak');

  const timerEl = document.getElementById('stat-timer');

  const streakContainerEl = document.getElementById('streak-container');



  // Controls DOM

  const regionSelector = document.getElementById('region-selector');

  const difficultyButtons = document.querySelectorAll('[data-difficulty]');

  const modeButtons = document.querySelectorAll('[data-mode]');

  const puzzleTray = document.getElementById('puzzle-tray');

  const quizBanner = document.getElementById('quiz-banner');

  const quizTargetNameEl = document.getElementById('quiz-target-name');

  const quizHintEl = document.getElementById('quiz-hint');

  const btnModel34 = document.getElementById('btn-model-34');

  const btnModel63 = document.getElementById('btn-model-63');



  // Zoom & Tools DOM

  const btnZoomIn = document.getElementById('btn-zoom-in');

  const btnZoomOut = document.getElementById('btn-zoom-out');

  const btnResetView = document.getElementById('btn-reset-view');

  const btnFullscreen = document.getElementById('btn-fullscreen');

  const btnToggleSound = document.getElementById('btn-toggle-sound');



  // Modal DOM

  const infoModal = document.getElementById('info-modal');

  const modalClose = document.getElementById('modal-close');

  const modalBody = document.getElementById('modal-body');

  const victoryModal = document.getElementById('victory-modal');

  const victoryClose = document.getElementById('victory-close');

  const victoryTitle = document.getElementById('victory-title');

  const victoryDesc = document.getElementById('victory-desc');

  const victoryScore = document.getElementById('victory-score');

  const victoryTime = document.getElementById('victory-time');

  const victoryActionBtn = document.getElementById('victory-action-btn');



  // Auth & Profile DOM

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

    setupEventListeners();

    setupAuthHandlers();

    switchDataset('34'); // Default to 34 provinces



    // Check Login Status on launch

    checkAuthStatus();

  }



  // --- AUTH STATUS & UI ---

  function checkAuthStatus() {

    if (window.authManager && window.authManager.isLoggedIn()) {

      const user = window.authManager.currentUser;

      if (authModal) authModal.classList.add('hidden');

      updateUserProfileUI(user);

      startTimer();

    } else {

      // Cho phép học sinh vào chơi trực tiếp (Guest), không cưỡng chế popup chặn toàn màn hình

      if (authModal) authModal.classList.add('hidden');

      updateUserProfileUI({ fullName: 'Học sinh', className: 'Lớp 4', avatar: '🎓' });

      startTimer();

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

    // Switch between Login & Register tabs

    authTabLogin.addEventListener('click', () => showAuthTab('login'));

    authTabRegister.addEventListener('click', () => showAuthTab('register'));

    if (authTabRecovery) authTabRecovery.addEventListener('click', () => showAuthTab('recovery'));

    linkToRegister.addEventListener('click', (e) => { e.preventDefault(); showAuthTab('register'); });

    linkToLogin.addEventListener('click', (e) => { e.preventDefault(); showAuthTab('login'); });

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



    // Avatar Selection

    if (avatarGrid) {

      avatarGrid.querySelectorAll('.avt-btn').forEach(btn => {

        btn.addEventListener('click', () => {

          avatarGrid.querySelectorAll('.avt-btn').forEach(b => b.classList.remove('active'));

          btn.classList.add('active');

          selectedAvatar = btn.dataset.avatar;

        });

      });

    }



    // Submit Login

    loginForm.addEventListener('submit', async (e) => {

      e.preventDefault();

      const username = document.getElementById('login-username').value;

      const password = document.getElementById('login-password').value;



      try {

        const user = await window.authManager.login(username, password);

        showAuthMessage('Đăng nhập thành công! Chúc bạn chơi vui vẻ!', 'success');

        setTimeout(() => {

          authModal.classList.add('hidden');

          updateUserProfileUI(user);

          window.soundEngine.playSnap();

          startTimer();

        }, 500);

      } catch (err) {

        showAuthMessage(err.message, 'error');

        window.soundEngine.playError();

      }

    });



    // Submit Register

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

        showAuthMessage(`Chúc mừng ${user.fullName}! Tài khoản đã được tạo thành công!`, 'success');

        window.confettiEngine.burst(80);

        window.soundEngine.playRegionComplete();



        setTimeout(() => {

          authModal.classList.add('hidden');

          updateUserProfileUI(user);

          startTimer();

        }, 700);

      } catch (err) {

        showAuthMessage(err.message, 'error');

        window.soundEngine.playError();

      }

    });



    // Logout

    btnLogout.addEventListener('click', () => {

      if (confirm('Bạn có chắc muốn đăng xuất để chuyển tài khoản học sinh khác không?')) {

        window.authManager.logout();

        state.placedProvinces.clear();

        state.score = 0;

        state.streak = 0;

        state.timerSeconds = 0;

        updateStats();

        updateSlotsVisibility();

        renderPuzzleTray();

        checkAuthStatus();

      }

    });



    // Leaderboard Modal Open

    btnLeaderboard.addEventListener('click', openLeaderboardModal);

    leaderboardClose.addEventListener('click', () => leaderboardModal.classList.add('hidden'));



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



    // Render current user summary

    if (user) {

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



    // Render table

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



    leaderboardModal.classList.remove('hidden');

  }



  // --- SWITCH DATASET (34 vs 63) ---

  function switchDataset(datasetKey) {

    state.dataset = datasetKey;

    state.placedProvinces.clear();

    state.selectedPieceId = null;

    state.quizTargetId = null;



    // Update dataset buttons UI

    btnModel34.classList.toggle('active', datasetKey === '34');

    btnModel63.classList.toggle('active', datasetKey === '63');



    // Default starting region

    const defaultRegion = datasetKey === '34' ? 'bac_bo' : 'tay_bac';

    state.currentRegionId = defaultRegion;



    renderRegionSelector();

    buildMapSvgElements();

    applyMode(state.mode, defaultRegion);

  }



  // --- BUILD MAP SVG ELEMENTS ---

  function buildMapSvgElements() {

    slotsLayer.innerHTML = '';

    placedLayer.innerHTML = '';

    labelsLayer.innerHTML = '';



    const provinces = getProvincesList();



    provinces.forEach(p => {

      // 1. Slots: Can have multiple subpaths if merged

      const subpaths = p.subpaths || [{ id: p.id, d: p.d }];



      // Helper for Tap-to-Place on iPad & Touch devices

      function onSlotClicked(e) {

        e.stopPropagation();

        if (state.hasPanned) return; // Nếu vừa kéo di chuyển bản đồ thì không kích hoạt đặt mảnh

        if (state.selectedPieceId) {

          if (state.selectedPieceId === p.id) {

            handleCorrectPlacement(p);

          } else {

            handleFailedPlacement(p);

          }

        }

      }



      subpaths.forEach((sub, sIdx) => {

        const slotPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        slotPath.setAttribute('d', sub.d);

        slotPath.setAttribute('id', `slot-sub-${p.id}-${sIdx}`);

        slotPath.setAttribute('class', `slot-path slot-prov-${p.id}`);

        slotPath.dataset.id = p.id;

        slotPath.addEventListener('click', onSlotClicked);

        slotsLayer.appendChild(slotPath);

      });



      // Snap circle indicator (for visual target)

      const snapCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

      snapCircle.setAttribute('cx', p.center[0]);

      snapCircle.setAttribute('cy', p.center[1]);

      snapCircle.setAttribute('r', '8');

      snapCircle.setAttribute('id', `snap-dot-${p.id}`);

      snapCircle.setAttribute('class', 'snap-dot');

      snapCircle.dataset.id = p.id;

      snapCircle.addEventListener('click', onSlotClicked);

      slotsLayer.appendChild(snapCircle);



      // 2. Placed Group (mảnh ghép hoàn thành)

      const placedGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

      placedGroup.setAttribute('id', `placed-group-${p.id}`);

      placedGroup.setAttribute('class', 'placed-group hidden');

      placedGroup.dataset.id = p.id;



      subpaths.forEach(sub => {

        const placedPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        placedPath.setAttribute('d', sub.d);

        placedPath.setAttribute('class', 'placed-path');

        placedPath.setAttribute('fill', p.color);

        placedGroup.appendChild(placedPath);

      });



      placedLayer.appendChild(placedGroup);



      // 3. Label Text

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

      text.setAttribute('x', p.center[0]);

      text.setAttribute('y', p.center[1] + 3);

      text.setAttribute('id', `label-${p.id}`);

      text.setAttribute('class', 'province-label hidden');

      text.textContent = p.shortName || p.name;

      labelsLayer.appendChild(text);



      // Click on placed province to view info

      placedGroup.addEventListener('click', (e) => {

        e.stopPropagation();

        if (state.hasPanned) return; // Nếu vừa kéo rê bản đồ thì không mở modal

        showProvinceInfoModal(p);

      });

    });

  }



  // --- RENDER REGION SELECTOR BUTTONS ---

  function renderRegionSelector() {
    regionSelector.innerHTML = '';
    const regions = getRegionsList();

    regions.forEach(reg => {
      const btn = document.createElement('button');
      btn.className = `region-tab-btn ${reg.id === state.currentRegionId ? 'active' : ''}`;
      btn.dataset.region = reg.id;
      btn.innerHTML = `<span class="badge">${reg.badge}</span> <span class="name">${reg.name}</span> <span class="count">(${reg.count})</span>`;
      btn.addEventListener('click', () => {
        applyMode(state.mode === 'explore' ? 'explore' : 'region', reg.id);
      });
      regionSelector.appendChild(btn);
    });
  }



  // --- APPLY GAME MODE & REGION ---

  function applyMode(mode, regionId = null) {
    state.mode = mode;
    if (regionId) {
      state.currentRegionId = regionId;
    }

    // Đảm bảo vùng hợp lệ trong chế độ 34 tỉnh thành (4 vùng SGK)
    if (state.dataset === '34') {
      const valid34 = ['bac_bo', 'song_hong', 'mien_trung_tay_nguyen', 'nam_bo'];
      if (!valid34.includes(state.currentRegionId)) {
        state.currentRegionId = 'bac_bo';
      }
    }

    // Reset piece selection
    state.selectedPieceId = null;

    // Cập nhật trạng thái các nút chế độ (Mode Buttons)
    document.querySelectorAll('.mode-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.mode === mode);
    });

    // Cập nhật trạng thái tab vùng miền
    document.querySelectorAll('.region-tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.region === state.currentRegionId);
    });

    // Ẩn mức độ Dễ/Vừa/Khó khi ở chế độ Khám Phá Địa Lý
    const diffGroup = document.querySelector('.difficulty-group');
    if (diffGroup) {
      diffGroup.style.display = (mode === 'explore') ? 'none' : 'flex';
    }

    // Xử lý riêng cho chế độ Khám Phá Địa Lý (Explore Mode)
    if (mode === 'explore') {
      regionSelector.style.display = 'flex';
      quizBanner.classList.add('hidden');
      renderRegionSelector();
      updateSlotsVisibility();
      renderExploreMode();
      focusRegion(state.currentRegionId);
      updateStats();
      return;
    }

    // Khôi phục tiêu đề thanh dock cho các chế độ ghép hình / đố vui
    const dockIcon = document.querySelector('.dock-header .dock-title .icon');
    const dockTitle = document.querySelector('.dock-header .dock-title span:last-child');
    const dockInstruction = document.querySelector('.dock-header .dock-instruction');
    if (dockTitle && dockInstruction) {
      if (mode === 'quiz') {
        if (dockIcon) dockIcon.textContent = '🎯';
        dockTitle.textContent = 'Đố Vui Vị Trí';
        dockInstruction.textContent = 'Tìm và đặt đúng vị trí tỉnh thành được yêu cầu!';
      } else {
        if (dockIcon) dockIcon.textContent = '📦';
        dockTitle.textContent = 'Khay Mảnh Ghép';
        dockInstruction.textContent = 'Kéo mảnh ghép vào bản đồ hoặc Chạm để đặt!';
      }
    }

    // Show/hide region selector bar based on mode
    if (mode === 'region') {
      regionSelector.style.display = 'flex';
      quizBanner.classList.add('hidden');
      renderRegionSelector();
    } else if (mode === 'all') {
      regionSelector.style.display = 'none';
      quizBanner.classList.add('hidden');
    } else if (mode === 'quiz') {
      regionSelector.style.display = 'none';
      quizBanner.classList.remove('hidden');
      setupNextQuizQuestion();
    }

    // Update active slots styling
    updateSlotsVisibility();
    renderPuzzleTray();
    updateStats();

    // Auto-focus zoom to region if in region mode
    if (mode === 'region') {
      focusRegion(state.currentRegionId);
    } else {
      resetMapView();
    }
  }



  // Expose global controller for direct inline clicks

  window.applyGameMode = applyMode;



  // --- GET ACTIVE PROVINCES FOR CURRENT MODE ---

  function getActiveProvinces() {

    const all = getProvincesList();

    if (state.mode === 'region') {

      return all.filter(p => p.regionId === state.currentRegionId);

    } else {

      return all;

    }

  }



  // --- UPDATE SLOTS ON MAP ---

  function updateSlotsVisibility() {
    const activeProvinces = getActiveProvinces();
    const activeIds = new Set(activeProvinces.map(p => p.id));
    const allProvinces = getProvincesList();

    allProvinces.forEach(p => {
      const slots = document.querySelectorAll(`.slot-prov-${p.id}`);
      const snapDot = document.getElementById(`snap-dot-${p.id}`);
      const label = document.getElementById(`label-${p.id}`);
      const placedGrp = document.getElementById(`placed-group-${p.id}`);

      const isPlaced = state.placedProvinces.has(p.id);
      const isActiveInMode = activeIds.has(p.id);
      const isExploreRegion = state.mode === 'explore' && p.regionId === state.currentRegionId;

      if (isPlaced || isExploreRegion) {
        if (placedGrp) placedGrp.classList.remove('hidden');
        slots.forEach(s => s.classList.add('hidden'));
        if (snapDot) snapDot.classList.add('hidden');
        if (label) {
          label.classList.remove('hidden');
          label.classList.add('placed');
        }
      } else {
        if (placedGrp) placedGrp.classList.add('hidden');
        slots.forEach(s => s.classList.remove('hidden'));

        if (isActiveInMode) {
          slots.forEach(s => {
            s.classList.add('active-target');
            s.classList.remove('faint-target');
          });
          if (snapDot) snapDot.classList.toggle('hidden', state.difficulty === 'hard');
          
          if (state.difficulty === 'easy') {
            if (label) {
              label.classList.remove('hidden');
              label.classList.remove('placed');
            }
          } else {
            if (label) label.classList.add('hidden');
          }
        } else {
          slots.forEach(s => {
            s.classList.remove('active-target');
            s.classList.add('faint-target');
          });
          if (snapDot) snapDot.classList.add('hidden');
          if (label) label.classList.add('hidden');
        }
      }
    });
  }



  // --- RENDER PUZZLE TRAY (Khay chứa mảnh ghép) ---

  
  // --- KHÁM PHÁ ĐỊA LÝ THEO VÙNG MIỀN (EXPLORE MODE) ---
  function getExploreQuestions(regionId) {
    if (!state.exploreQuestionsCache) state.exploreQuestionsCache = {};
    if (state.exploreQuestionsCache[regionId]) {
      return state.exploreQuestionsCache[regionId];
    }

    const questions = [];

    // 1. Lấy câu hỏi từ ngân hàng SGK GDPT 2018 (history-geo-4-data.js)
    if (window.HISTORY_GEO4_DATA && Array.isArray(window.HISTORY_GEO4_DATA.topics)) {
      const topicMap = {
        'bac_bo': ['trung_du_mien_nui_bac_bo'],
        'tay_bac': ['trung_du_mien_nui_bac_bo'],
        'dong_bac': ['trung_du_mien_nui_bac_bo'],
        'song_hong': ['dong_bang_bac_bo'],
        'mien_trung_tay_nguyen': ['duyen_hai_mien_trung', 'tay_nguyen', 'bien_dao_viet_nam'],
        'bac_trung_bo': ['duyen_hai_mien_trung'],
        'nam_trung_bo': ['duyen_hai_mien_trung', 'bien_dao_viet_nam'],
        'tay_nguyen': ['tay_nguyen'],
        'nam_bo': ['nam_bo'],
        'dong_nam_bo': ['nam_bo'],
        'dong_bang_song_cuu_long': ['nam_bo']
      };

      const targetTopicIds = topicMap[regionId] || [];
      window.HISTORY_GEO4_DATA.topics.forEach(top => {
        if (targetTopicIds.includes(top.id) && Array.isArray(top.questions)) {
          top.questions.forEach(q => {
            questions.push({
              id: q.id,
              question: q.question,
              options: [...q.options],
              correct: q.correct,
              explanation: q.explanation || ''
            });
          });
        }
      });
    }

    // 2. Tạo bổ sung các câu hỏi địa phương từ các tỉnh thành trong vùng
    const allProvinces = getProvincesList();
    const regionProvinces = allProvinces.filter(p => p.regionId === regionId);
    const otherProvinces = allProvinces.filter(p => p.regionId !== regionId);

    regionProvinces.forEach(p => {
      // Câu hỏi về Tỉnh lị / Trung tâm hành chính
      if (p.capital && p.capital !== p.name) {
        const wrongCaps = regionProvinces
          .filter(op => op.id !== p.id && op.capital && op.capital !== p.capital)
          .map(op => op.capital);
        while (wrongCaps.length < 3 && otherProvinces.length > 0) {
          const randP = otherProvinces[Math.floor(Math.random() * otherProvinces.length)];
          if (randP.capital && !wrongCaps.includes(randP.capital) && randP.capital !== p.capital) {
            wrongCaps.push(randP.capital);
          }
        }
        if (wrongCaps.length >= 3) {
          const opts = [p.capital, ...wrongCaps.slice(0, 3)];
          const correctVal = p.capital;
          opts.sort(() => Math.random() - 0.5);
          questions.push({
            id: `exp_cap_${p.id}`,
            question: `Tỉnh lị (trung tâm hành chính) của ${p.name} là đô thị nào sau đây?`,
            options: opts,
            correct: opts.indexOf(correctVal),
            explanation: `Trung tâm hành chính (tỉnh lị) của ${p.name} là ${p.capital}.`
          });
        }
      }

      // Câu hỏi về Danh lam thắng cảnh
      if (p.landmark && p.landmark.length > 4) {
        const primaryLandmark = p.landmark.split(',')[0].trim();
        const wrongNames = regionProvinces
          .filter(op => op.id !== p.id)
          .map(op => op.name)
          .slice(0, 3);
        if (wrongNames.length >= 3) {
          const opts = [p.name, ...wrongNames.slice(0, 3)];
          const correctVal = p.name;
          opts.sort(() => Math.random() - 0.5);
          questions.push({
            id: `exp_lm_${p.id}`,
            question: `Danh lam thắng cảnh nổi tiếng "${primaryLandmark}" thuộc tỉnh/thành phố nào sau đây?`,
            options: opts,
            correct: opts.indexOf(correctVal),
            explanation: `Danh thắng "${primaryLandmark}" thuộc địa phận ${p.name}.`
          });
        }
      }

      // Câu hỏi về Đặc sản vùng miền
      if (p.specialty && p.specialty.length > 4) {
        const primarySpec = p.specialty.split(',')[0].trim();
        const wrongNames = regionProvinces
          .filter(op => op.id !== p.id)
          .map(op => op.name)
          .slice(0, 3);
        if (wrongNames.length >= 3) {
          const opts = [p.name, ...wrongNames.slice(0, 3)];
          const correctVal = p.name;
          opts.sort(() => Math.random() - 0.5);
          questions.push({
            id: `exp_spec_${p.id}`,
            question: `Món đặc sản ẩm thực "${primarySpec}" là nét văn hóa đặc trưng của tỉnh/thành nào?`,
            options: opts,
            correct: opts.indexOf(correctVal),
            explanation: `Đặc sản "${primarySpec}" gắn liền với quê hương ${p.name}.`
          });
        }
      }
    });

    state.exploreQuestionsCache[regionId] = questions;
    return questions;
  }

  function renderExploreMode() {
    const currentRegionId = state.currentRegionId;
    const regMap = getRegionMap();
    const reg = regMap.get(currentRegionId);
    const regName = reg ? reg.name : 'Vùng Miền';
    const regBadge = reg ? reg.badge : '🌏';

    if (!state.exploreState) state.exploreState = {};
    if (!state.exploreState[currentRegionId]) {
      state.exploreState[currentRegionId] = { currentIdx: 0, answers: {} };
    }

    const regState = state.exploreState[currentRegionId];
    const questions = getExploreQuestions(currentRegionId);
    const totalQs = questions.length;

    // Cập nhật tiêu đề dock
    const dockIcon = document.querySelector('.dock-header .dock-title .icon');
    const dockTitle = document.querySelector('.dock-header .dock-title span:last-child');
    const dockInstruction = document.querySelector('.dock-header .dock-instruction');
    if (dockIcon) dockIcon.textContent = '📖';
    if (dockTitle) dockTitle.textContent = `Khám Phá: ${regName}`;
    if (dockInstruction) dockInstruction.textContent = 'Trả lời các câu hỏi tìm hiểu thiên nhiên, văn hóa và lịch sử vùng miền!';

    const qIdx = regState.currentIdx;
    const allProvinces = getProvincesList();
    const regionProvinces = allProvinces.filter(p => p.regionId === currentRegionId);

    // Nếu đã hoàn thành tất cả câu hỏi trong vùng
    if (totalQs > 0 && qIdx >= totalQs) {
      const regionsList = getRegionsList();
      const currRegIdx = regionsList.findIndex(r => r.id === currentRegionId);
      const nextReg = regionsList[(currRegIdx + 1) % regionsList.length];

      let provPillsHtml = '';
      regionProvinces.forEach(p => {
        provPillsHtml += `<button type="button" class="explore-prov-pill" data-pid="${p.id}">🏛️ ${p.name}</button>`;
      });

      puzzleTray.innerHTML = `
        <div class="explore-container">
          <div class="explore-completion-card">
            <div class="explore-completion-icon">🎉</div>
            <h3>Xuất sắc! Em đã hoàn thành!</h3>
            <p>Em đã trả lời trọn vẹn tất cả ${totalQs} câu hỏi khám phá <strong>${regName}</strong>.</p>
            <div class="explore-completion-actions">
              <button type="button" class="btn-primary" id="btn-explore-next-region" style="width:100%; padding:12px; font-weight:800;">
                Khám phá ${nextReg.badge} ${nextReg.name} ➔
              </button>
              <button type="button" class="btn-secondary" id="btn-explore-replay-region" style="width:100%; padding:10px; margin-top:6px; font-weight:700;">
                Luyện tập lại bộ câu hỏi vùng này ⟲
              </button>
            </div>
          </div>

          <div class="explore-prov-list">
            <div class="explore-prov-list-title">
              <span>📍 Các tỉnh thành trong vùng (${regionProvinces.length}):</span>
            </div>
            <div class="explore-prov-pills">
              ${provPillsHtml}
            </div>
          </div>
        </div>
      `;

      const btnNextReg = document.getElementById('btn-explore-next-region');
      if (btnNextReg) {
        btnNextReg.addEventListener('click', () => {
          applyMode('explore', nextReg.id);
        });
      }

      const btnReplay = document.getElementById('btn-explore-replay-region');
      if (btnReplay) {
        btnReplay.addEventListener('click', () => {
          regState.currentIdx = 0;
          regState.answers = {};
          renderExploreMode();
        });
      }

      puzzleTray.querySelectorAll('.explore-prov-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          const pid = btn.dataset.pid;
          const p = getProvinceMap().get(pid);
          if (p) showProvinceInfoModal(p);
        });
      });

      return;
    }

    // Hiển thị câu hỏi hiện tại
    const q = questions[qIdx] || {
      question: `Em hãy tìm hiểu các địa danh và danh lam thắng cảnh của vùng ${regName}!`,
      options: ['Đồng ý khám phá', 'Bắt đầu', 'Xem bản đồ', 'Tìm hiểu'],
      correct: 0,
      explanation: `Chào mừng em đến với hành trình khám phá ${regName}.`
    };

    const answeredOpt = regState.answers[qIdx];
    const isAnswered = answeredOpt !== undefined;
    const letters = ['A', 'B', 'C', 'D'];

    let optionsHtml = '';
    q.options.forEach((optText, oIdx) => {
      let optClass = 'explore-opt-btn';
      if (isAnswered) {
        if (oIdx === q.correct) {
          optClass += ' correct';
        } else if (oIdx === answeredOpt) {
          optClass += ' incorrect';
        }
      }
      optionsHtml += `
        <button type="button" class="${optClass}" data-opt="${oIdx}" ${isAnswered ? 'disabled' : ''}>
          <span class="explore-opt-letter">${letters[oIdx]}</span>
          <span style="flex:1;">${optText}</span>
        </button>
      `;
    });

    let explanationHtml = '';
    if (isAnswered) {
      const isCorrect = answeredOpt === q.correct;
      explanationHtml = `
        <div class="explore-explanation">
          <strong>${isCorrect ? '✅ Chính xác! Tuyệt vời!' : '❌ Chưa chính xác.'}</strong><br/>
          💡 <em>${q.explanation || ('Đáp án đúng là: ' + q.options[q.correct])}</em>
        </div>
        <button type="button" class="explore-next-btn" id="btn-explore-next-q">
          <span>Câu tiếp theo</span> ➔
        </button>
      `;
    }

    let provPillsHtml = '';
    regionProvinces.forEach(p => {
      provPillsHtml += `<button type="button" class="explore-prov-pill" data-pid="${p.id}">🏛️ ${p.name}</button>`;
    });

    puzzleTray.innerHTML = `
      <div class="explore-container">
        <div class="explore-q-card">
          <div class="explore-q-header">
            <span class="explore-badge">${regBadge} ${regName}</span>
            <span class="explore-counter">Câu ${qIdx + 1}/${totalQs}</span>
          </div>
          <div class="explore-q-text">${q.question}</div>
          <div class="explore-options">
            ${optionsHtml}
          </div>
          ${explanationHtml}
        </div>

        <div class="explore-prov-list">
          <div class="explore-prov-list-title">
            <span>📍 Tỉnh thành trong vùng (${regionProvinces.length}):</span>
          </div>
          <div class="explore-prov-pills">
            ${provPillsHtml}
          </div>
        </div>
      </div>
    `;

    // Gắn sự kiện chọn đáp án
    if (!isAnswered) {
      puzzleTray.querySelectorAll('.explore-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const optIdx = parseInt(btn.dataset.opt, 10);
          regState.answers[qIdx] = optIdx;
          if (optIdx === q.correct) {
            playSnd('success');
            state.score += 10;
            state.streak = (state.streak || 0) + 1;
            updateStats();
            if (typeof showFloatingScore === 'function') {
              showFloatingScore(345, 420, '+10 Điểm!');
            }
          } else {
            playSnd('error');
            state.streak = 0;
            updateStats();
          }
          renderExploreMode();
        });
      });
    } else {
      const nextBtn = document.getElementById('btn-explore-next-q');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          regState.currentIdx++;
          renderExploreMode();
        });
      }
    }

    // Gắn sự kiện click vào các tỉnh thành trong danh sách
    puzzleTray.querySelectorAll('.explore-prov-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const pid = btn.dataset.pid;
        const p = getProvinceMap().get(pid);
        if (p) showProvinceInfoModal(p);
      });
    });
  }

  function renderPuzzleTray() {

    puzzleTray.innerHTML = '';

    const activeProvinces = getActiveProvinces();

    const unplacedProvinces = activeProvinces.filter(p => !state.placedProvinces.has(p.id));



    if (unplacedProvinces.length === 0) {

      puzzleTray.innerHTML = `

        <div class="tray-completed-msg">

          <div class="trophy-icon">🏆</div>

          <h3>Tuyệt vời!</h3>

          <p>Bạn đã hoàn thành các tỉnh thành trong phần này!</p>

          <button class="btn-primary" id="btn-next-step">

            ${state.mode === 'region' ? 'Chinh phục Vùng tiếp theo ➔' : 'Xem lại Bách Khoa Toàn Thư 📖'}

          </button>

        </div>

      `;

      const nextBtn = document.getElementById('btn-next-step');

      if (nextBtn) {

        nextBtn.addEventListener('click', () => {

          if (state.mode === 'region') {

            advanceToNextRegion();

          } else {

            applyMode('explore');

          }

        });

      }

      return;

    }



    // In Quiz mode, only display current target piece card

    let provincesToRender = unplacedProvinces;

    if (state.mode === 'quiz' && state.quizTargetId) {

      const provMap = getProvinceMap();

      const targetP = provMap.get(state.quizTargetId);

      provincesToRender = targetP ? [targetP] : [];

    }



    provincesToRender.forEach(p => {

      const card = document.createElement('div');

      card.className = `piece-card ${state.selectedPieceId === p.id ? 'selected' : ''}`;

      card.dataset.id = p.id;

      card.setAttribute('draggable', 'false'); // Handled via pointer events



      // Calculate viewBox for mini SVG thumbnail

      const b = p.bbox;

      const pad = Math.max(8, Math.max(b[2], b[3]) * 0.15);

      const miniViewBox = `${b[0] - pad} ${b[1] - pad} ${b[2] + pad * 2} ${b[3] + pad * 2}`;



      // Render all subpaths inside mini preview

      const subpaths = p.subpaths || [{ id: p.id, d: p.d }];

      let svgPathsHtml = '';

      subpaths.forEach(sub => {

        svgPathsHtml += `<path d="${sub.d}" fill="${p.color}" stroke="#ffffff" stroke-width="2" />`;

      });



      // Merged tag if applicable

      let mergedTagHtml = '';

      if (p.mergedFrom && p.mergedFrom.length > 1) {

        mergedTagHtml = `<span class="piece-merged-tag">🔄 Gồm: ${p.mergedFrom.join(' + ')}</span>`;

      }



      card.innerHTML = `

        <div class="mini-svg-container">

          <svg viewBox="${miniViewBox}" preserveAspectRatio="xMidYMid meet">

            ${svgPathsHtml}

          </svg>

        </div>

        <div class="piece-info">

          <div class="piece-name">${state.difficulty === 'hard' && state.mode !== 'quiz' ? '???' : p.name}</div>

          ${mergedTagHtml}

          <div class="piece-sub">${p.landmark}</div>

        </div>

      `;



      // Pointer event for drag initiation

      card.addEventListener('pointerdown', (e) => onPiecePointerDown(e, p));



      // Click to select

      card.addEventListener('click', (e) => {

        e.stopPropagation();

        selectPiece(p.id);

      });



      puzzleTray.appendChild(card);

    });

  }



  // --- PIECE SELECTION & CLICK-TO-PLACE ---

  function selectPiece(provinceId) {

    if (state.selectedPieceId === provinceId) {

      state.selectedPieceId = null; // Toggle off

    } else {

      state.selectedPieceId = provinceId;

      window.soundEngine.playPickup();

    }



    // Update Tray UI

    document.querySelectorAll('.piece-card').forEach(card => {

      card.classList.toggle('selected', card.dataset.id === state.selectedPieceId);

    });



    // Cập nhật vị trí Highlight trên bản đồ

    updateSlotHighlight();

  }



  // --- CẬP NHẬT HIGHLIGHT VỊ TRÍ TRÊN BẢN ĐỒ THEO CẤP ĐỘ ---

  function updateSlotHighlight() {

    // Luôn xóa highlight cũ trên toàn bộ bản đồ

    document.querySelectorAll('.slot-path').forEach(slot => {

      slot.classList.remove('highlight-target');

    });



    // QUY TẮC ĐỘ KHÓ:

    // - Cấp độ "Dễ" (easy): Làm nổi bật (highlight vàng nhấp nháy) vị trí mục tiêu để học sinh dễ nhận biết.

    // - Cấp độ "Vừa" (medium) & "Khó" (hard): BỎ HOÀN TOÀN highlight trên bản đồ, học sinh tự định vị theo kiến thức địa lý.

    if (state.selectedPieceId && state.difficulty === 'easy') {

      const targetSlots = document.querySelectorAll(`.slot-prov-${state.selectedPieceId}`);

      targetSlots.forEach(s => s.classList.add('highlight-target'));

    }

  }



  // --- DRAG & DROP ENGINE (POINTER EVENTS & TOUCH GESTURES) ---

  let touchCandidate = null;



  function onPiecePointerDown(e, province) {

    if (e.button !== 0 && e.pointerType === 'mouse') return; // Left click only



    if (e.pointerType === 'touch') {

      // Trên iPad / Thiết bị cảm ứng:

      // Không gọi preventDefault ngay để cho phép người dùng cuộn khay mảnh ghép mượt mà

      touchCandidate = {

        province: province,

        startX: e.clientX,

        startY: e.clientY,

        pointerId: e.pointerId,

        isDragging: false

      };



      document.addEventListener('pointermove', onTouchMove, { passive: false });

      document.addEventListener('pointerup', onTouchEnd);

      document.addEventListener('pointercancel', onTouchCancel);

      return;

    }



    // Với chuột máy tính: bắt đầu kéo ngay lập tức

    e.preventDefault();

    initiatePieceDrag(e.clientX, e.clientY, province);

  }



  function onTouchMove(e) {

    if (!touchCandidate) return;



    if (!touchCandidate.isDragging) {

      const dx = e.clientX - touchCandidate.startX;

      const dy = e.clientY - touchCandidate.startY;

      const dist = Math.hypot(dx, dy);



      // Nếu kéo lệch ngang sang phía bản đồ (hoặc khoảng cách đủ lớn) -> Kích hoạt chế độ kéo thả

      if (dist > 10) {

        if (Math.abs(dx) > Math.abs(dy) * 0.75 || dist > 20) {

          touchCandidate.isDragging = true;

          e.preventDefault();

          initiatePieceDrag(e.clientX, e.clientY, touchCandidate.province);

        } else {

          // Người dùng đang vuốt dọc để cuộn xem danh sách mảnh ghép -> để trình duyệt cuộn tự nhiên

          cleanUpTouchCandidate();

        }

      }

    } else {

      e.preventDefault();

      onPointerMove(e);

    }

  }



  function onTouchEnd(e) {

    if (touchCandidate && touchCandidate.isDragging) {

      onPointerUp(e);

    }

    cleanUpTouchCandidate();

  }



  function onTouchCancel() {

    if (touchCandidate && touchCandidate.isDragging) {

      onPointerCancel();

    }

    cleanUpTouchCandidate();

  }



  function cleanUpTouchCandidate() {

    touchCandidate = null;

    document.removeEventListener('pointermove', onTouchMove);

    document.removeEventListener('pointerup', onTouchEnd);

    document.removeEventListener('pointercancel', onTouchCancel);

  }



  function initiatePieceDrag(clientX, clientY, province) {

    state.isDraggingPiece = true;

    state.draggedProvince = province;

    state.dragStartScreen = { x: clientX, y: clientY };



    window.soundEngine.playPickup();



    // Create dragging SVG element

    draggingLayer.innerHTML = '';

    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    group.id = 'floating-piece-group';

    group.setAttribute('class', 'dragging-group');



    const subpaths = province.subpaths || [{ id: province.id, d: province.d }];

    subpaths.forEach(sub => {

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

      path.setAttribute('d', sub.d);

      path.setAttribute('fill', province.color);

      path.setAttribute('class', 'floating-piece-path');

      group.appendChild(path);

    });



    draggingLayer.appendChild(group);



    // Initial position in SVG coordinate system

    updateFloatingPiecePosition(clientX, clientY);



    // Listen on document for smooth global movement

    document.addEventListener('pointermove', onPointerMove);

    document.addEventListener('pointerup', onPointerUp);

    document.addEventListener('pointercancel', onPointerCancel);

  }



  function updateFloatingPiecePosition(clientX, clientY) {

    if (!state.draggedProvince) return;

    const p = state.draggedProvince;



    // Convert screen coordinates to SVG map coordinate system

    const svgPoint = screenToSvgCoords(clientX, clientY);



    // Offset piece so pointer grips its center

    const dx = svgPoint.x - p.center[0];

    const dy = svgPoint.y - p.center[1];

    state.currentSvgOffset = { x: dx, y: dy };



    const group = document.getElementById('floating-piece-group');

    if (group) {

      group.setAttribute('transform', `translate(${dx}, ${dy})`);

    }



    // Check proximity to target slot

    const dist = Math.hypot(dx, dy);

    const targetSlots = document.querySelectorAll(`.slot-prov-${p.id}`);

    const snapDot = document.getElementById(`snap-dot-${p.id}`);



    if (dist < 48) {

      group.classList.add('snap-ready');

      targetSlots.forEach(s => s.classList.add('snap-hover'));

      if (snapDot) snapDot.classList.add('snap-hover');

    } else {

      group.classList.remove('snap-ready');

      targetSlots.forEach(s => s.classList.remove('snap-hover'));

      if (snapDot) snapDot.classList.remove('snap-hover');

    }

  }



  function onPointerMove(e) {

    if (state.isDraggingPiece) {

      updateFloatingPiecePosition(e.clientX, e.clientY);

    }

  }



  function onPointerUp(e) {

    if (!state.isDraggingPiece) return;



    const p = state.draggedProvince;

    const { x: dx, y: dy } = state.currentSvgOffset;

    const dist = Math.hypot(dx, dy);



    // Snap distance threshold (45 SVG units)

    if (dist <= 48) {

      // SUCCESSFUL SNAP!

      handleCorrectPlacement(p);

    } else {

      // Missed / Placed too far

      handleFailedPlacement(p);

    }



    cleanUpDrag();

  }



  function onPointerCancel() {

    if (state.isDraggingPiece) {

      handleFailedPlacement(state.draggedProvince);

      cleanUpDrag();

    }

  }



  function cleanUpDrag() {

    state.isDraggingPiece = false;

    state.draggedProvince = null;

    draggingLayer.innerHTML = '';

    document.removeEventListener('pointermove', onPointerMove);

    document.removeEventListener('pointerup', onPointerUp);

    document.removeEventListener('pointercancel', onPointerCancel);



    document.querySelectorAll('.slot-path, .snap-dot').forEach(el => {

      el.classList.remove('snap-hover');

    });

  }



  // --- HANDLE CORRECT PLACEMENT ---

  function handleCorrectPlacement(province) {

    state.placedProvinces.add(province.id);

    state.selectedPieceId = null;



    // Audio effect

    window.soundEngine.playSnap();



    // Streak and score calculation

    state.streak++;

    if (state.streak > state.maxStreak) state.maxStreak = state.streak;

    const comboMultiplier = Math.min(3, 1 + (state.streak - 1) * 0.2);

    const addedScore = Math.round(100 * comboMultiplier);

    state.score += addedScore;



    // Show floating score indicator

    showFloatingScore(province.center[0], province.center[1], `+${addedScore}`);



    // Update Map

    updateSlotsVisibility();

    updateSlotHighlight();



    // Sparkle pulse effect on placed path

    const placedGrp = document.getElementById(`placed-group-${province.id}`);

    if (placedGrp) {

      placedGrp.classList.add('just-snapped');

      setTimeout(() => placedGrp.classList.remove('just-snapped'), 800);

    }



    // Refresh UI

    renderPuzzleTray();

    updateStats();



    // Persist student's progress

    if (window.authManager) {

      window.authManager.updateProgress(state.score, state.streak, false, 'vn_map');

    }



    // Check completion condition

    checkCompletionCondition();

  }



  // --- HANDLE FAILED PLACEMENT ---

  function handleFailedPlacement(province) {

    window.soundEngine.playError();

    state.streak = 0; // Reset streak

    updateStats();

  }



  // --- CLICK MAP SLOT TO PLACE (TAP-TO-PLACE SUPPORT) ---

  slotsLayer.addEventListener('click', (e) => {

    const slot = e.target.closest('.slot-path, .snap-dot');

    if (!slot) return;



    const clickedId = slot.dataset.id;

    if (state.selectedPieceId && state.selectedPieceId === clickedId) {

      // Match! Place immediately

      const provMap = getProvinceMap();

      const p = provMap.get(state.selectedPieceId);

      if (p) handleCorrectPlacement(p);

    } else if (state.selectedPieceId && state.selectedPieceId !== clickedId) {

      // Wrong slot clicked

      window.soundEngine.playError();

      slot.classList.add('wrong-shake');

      setTimeout(() => slot.classList.remove('wrong-shake'), 400);

    }

  });



  // --- CHECK COMPLETION CONDITION ---

  function checkCompletionCondition() {

    const activeProvinces = getActiveProvinces();

    const allActivePlaced = activeProvinces.every(p => state.placedProvinces.has(p.id));



    if (state.mode === 'quiz') {

      const allProvinces = getProvincesList();

      const unplaced = allProvinces.filter(p => !state.placedProvinces.has(p.id));

      if (unplaced.length === 0) {

        triggerVictoryModal(true);

      } else {

        setTimeout(setupNextQuizQuestion, 600);

      }

      return;

    }



    if (allActivePlaced) {

      if (state.mode === 'region') {

        const regMap = getRegionMap();

        const reg = regMap.get(state.currentRegionId);

        window.soundEngine.playRegionComplete();

        window.confettiEngine.burst(100);



        setTimeout(() => {

          triggerRegionCompleteModal(reg);

        }, 500);

      } else if (state.mode === 'all') {

        window.soundEngine.playVictoryFanfare();

        window.confettiEngine.burst(200);



        setTimeout(() => {

          triggerVictoryModal(false);

        }, 500);

      }

    }

  }



  // --- REGION ADVANCEMENT ---

  function advanceToNextRegion() {

    const regions = getRegionsList();

    const curIdx = regions.findIndex(r => r.id === state.currentRegionId);

    const nextIdx = (curIdx + 1) % regions.length;

    applyMode('region', regions[nextIdx].id);

  }



  // --- QUIZ MODE ENGINE ---

  function setupNextQuizQuestion() {

    const allProvinces = getProvincesList();

    const unplaced = allProvinces.filter(p => !state.placedProvinces.has(p.id));

    if (unplaced.length === 0) {

      triggerVictoryModal(true);

      return;

    }



    // Pick random unplaced province

    const target = unplaced[Math.floor(Math.random() * unplaced.length)];

    state.quizTargetId = target.id;

    state.selectedPieceId = target.id;



    quizTargetNameEl.textContent = target.name;

    quizHintEl.textContent = target.hint || target.landmark;



    renderPuzzleTray();

    updateSlotsVisibility();

    updateSlotHighlight();

  }



  // --- STATS UPDATE ---

  function updateStats() {

    const active = getActiveProvinces();

    const placedInActive = active.filter(p => state.placedProvinces.has(p.id)).length;

    const totalInActive = active.length;



    placedCountEl.textContent = placedInActive;

    totalCountEl.textContent = totalInActive;



    const percent = totalInActive > 0 ? (placedInActive / totalInActive) * 100 : 0;

    progressBarEl.style.width = `${percent}%`;



    scoreEl.textContent = state.score.toLocaleString();

    streakEl.textContent = state.streak;



    if (state.streak >= 3) {

      streakContainerEl.classList.add('fire');

    } else {

      streakContainerEl.classList.remove('fire');

    }

  }



  // --- TIMER ---

  function startTimer() {

    if (state.timerInterval) clearInterval(state.timerInterval);

    state.timerInterval = setInterval(() => {

      state.timerSeconds++;

      const mins = Math.floor(state.timerSeconds / 60);

      const secs = state.timerSeconds % 60;

      timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    }, 1000);

  }



  // --- FLOATING SCORE ANIMATION ---

  function showFloatingScore(svgX, svgY, text) {

    const svgPoint = mapSvg.createSVGPoint();

    svgPoint.x = svgX;

    svgPoint.y = svgY;

    const screenPoint = svgPoint.matrixTransform(mapSvg.getScreenCTM());



    const floater = document.createElement('div');

    floater.className = 'floating-score';

    floater.textContent = text;

    floater.style.left = `${screenPoint.x}px`;

    floater.style.top = `${screenPoint.y}px`;

    document.body.appendChild(floater);



    setTimeout(() => {

      if (floater.parentNode) floater.parentNode.removeChild(floater);

    }, 1000);

  }



  // --- SCREEN TO SVG COORD CONVERTER ---

  function screenToSvgCoords(clientX, clientY) {

    const pt = mapSvg.createSVGPoint();

    pt.x = clientX;

    pt.y = clientY;

    const svgMatrix = mapTransformGroup.getScreenCTM().inverse();

    return pt.matrixTransform(svgMatrix);

  }



  // --- MAP ZOOM & PAN ---

  function updateMapTransform() {

    mapTransformGroup.setAttribute(

      'transform',

      `translate(${state.panOffset.x}, ${state.panOffset.y}) scale(${state.zoomLevel})`

    );

  }



  // --- TỰ ĐỘNG ĐIỀU CHỈNH FONT CHỮ CÁC TỈNH THÀNH KHI ZOOM IN / ZOOM OUT ---

  function updateProvinceLabelsScale() {

    const zoom = state.zoomLevel || 1.0;

    // Khi Zoom In: chữ tự thu nhỏ lại để vừa khít địa giới tỉnh, không che lấp nhau.

    // Khi Zoom Out: chữ giữ kích thước lớn to rõ ràng (11.5px SVG) để luôn dễ đọc.

    const fontSize = Math.max(6.5, Math.min(14.0, 11.5 / Math.pow(zoom, 0.65)));

    document.querySelectorAll('.province-label').forEach(label => {

      label.style.fontSize = `${fontSize.toFixed(1)}px`;

    });

  }



  function zoomMap(delta, centerX = 345, centerY = 420) {

    const prevZoom = state.zoomLevel;

    const newZoom = Math.min(3.2, Math.max(0.85, prevZoom + delta));

    if (newZoom === prevZoom) return;



    state.panOffset.x = centerX - (centerX - state.panOffset.x) * (newZoom / prevZoom);

    state.panOffset.y = centerY - (centerY - state.panOffset.y) * (newZoom / prevZoom);

    state.zoomLevel = newZoom;

    updateProvinceLabelsScale();



    // Giới hạn pan offset sau khi zoom

    const maxPanX = 380 * state.zoomLevel;

    const maxPanY = 380 * state.zoomLevel;

    state.panOffset.x = Math.max(-maxPanX, Math.min(maxPanX, state.panOffset.x));

    state.panOffset.y = Math.max(-maxPanY, Math.min(maxPanY, state.panOffset.y));



    updateMapTransform();

  }



  function resetMapView() {

    state.zoomLevel = 1.0;

    state.panOffset = { x: 0, y: 0 };

    updateProvinceLabelsScale();

    updateMapTransform();

  }



  function focusRegion(regionId) {

    const all = getProvincesList();

    const provinces = all.filter(p => p.regionId === regionId);

    if (!provinces.length) return;



    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

    provinces.forEach(p => {

      minX = Math.min(minX, p.bbox[0]);

      minY = Math.min(minY, p.bbox[1]);

      maxX = Math.max(maxX, p.bbox[0] + p.bbox[2]);

      maxY = Math.max(maxY, p.bbox[1] + p.bbox[3]);

    });



    const regW = maxX - minX;

    const regH = maxY - minY;

    const regCx = (minX + maxX) / 2;

    const regCy = (minY + maxY) / 2;



    const svgW = 920;

    const svgH = 890;

    const centerSvgX = -115 + svgW / 2; // 345

    const centerSvgY = -25 + svgH / 2;  // 420



    const scale = Math.min(2.4, Math.max(1.1, Math.min(svgW / (regW * 1.6), svgH / (regH * 1.6))));

    state.zoomLevel = scale;

    state.panOffset.x = centerSvgX - regCx * scale;

    state.panOffset.y = centerSvgY - regCy * scale;

    updateProvinceLabelsScale();

    updateMapTransform();

  }



  // --- MULTI-TOUCH & MAP PANNING / PINCH-TO-ZOOM ---

  const activePointers = new Map();

  let pinchInitialDist = 0;

  let pinchInitialZoom = 1.0;

  let pinchCenterSvg = { x: 345, y: 420 };



  function onMapPointerDown(e) {

    // Chỉ xử lý chuột trái (button === 0) hoặc ngón tay cảm ứng

    if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;



    // Bỏ qua nếu bấm vào các nút điều khiển trên bản đồ hoặc la bàn

    if (e.target.closest('.map-controls') || e.target.closest('.compass-badge')) return;



    // Bỏ qua nếu đang kéo thả mảnh ghép

    if (state.isDraggingPiece || (touchCandidate && touchCandidate.isDragging)) return;



    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });



    if (activePointers.size === 1) {

      state.isPanning = true;

      state.hasPanned = false;

      state.panStart = { x: e.clientX, y: e.clientY };



      if (mapViewport) mapViewport.classList.add('is-panning');

      if (mapSvg) mapSvg.style.cursor = 'grabbing';

    } else if (activePointers.size === 2) {

      // Bắt đầu thao tác Pinch-to-zoom (2 ngón tay trên iPad/điện thoại)

      state.isPanning = false;

      const pts = Array.from(activePointers.values());

      pinchInitialDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);

      pinchInitialZoom = state.zoomLevel;

      const screenMidX = (pts[0].x + pts[1].x) / 2;

      const screenMidY = (pts[0].y + pts[1].y) / 2;

      pinchCenterSvg = screenToSvgCoords(screenMidX, screenMidY);

    }

  }



  if (mapViewport) {

    mapViewport.addEventListener('pointerdown', onMapPointerDown);

  }



  window.addEventListener('pointermove', (e) => {

    if (!activePointers.has(e.pointerId)) return;

    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });



    // 1. Thao tác Pinch-to-zoom khi có 2 ngón tay chạm cùng lúc

    if (activePointers.size === 2 && pinchInitialDist > 10) {

      const pts = Array.from(activePointers.values());

      const currentDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);

      const ratio = currentDist / pinchInitialDist;

      const targetZoom = Math.min(3.2, Math.max(0.85, pinchInitialZoom * ratio));



      if (Math.abs(targetZoom - state.zoomLevel) > 0.008) {

        state.hasPanned = true;

        const prevZoom = state.zoomLevel;

        state.panOffset.x = pinchCenterSvg.x - (pinchCenterSvg.x - state.panOffset.x) * (targetZoom / prevZoom);

        state.panOffset.y = pinchCenterSvg.y - (pinchCenterSvg.y - state.panOffset.y) * (targetZoom / prevZoom);

        state.zoomLevel = targetZoom;



        const maxPanX = 380 * state.zoomLevel;

        const maxPanY = 380 * state.zoomLevel;

        state.panOffset.x = Math.max(-maxPanX, Math.min(maxPanX, state.panOffset.x));

        state.panOffset.y = Math.max(-maxPanY, Math.min(maxPanY, state.panOffset.y));



        updateProvinceLabelsScale();

        updateMapTransform();

      }

      return;

    }



    // 2. Thao tác Pan bản đồ 1 ngón tay / 1 chuột: Chuẩn hóa 1:1 theo ma trận SVG ScreenCTM

    if (state.isPanning && activePointers.size === 1) {

      const dxScreen = (e.clientX - state.panStart.x);

      const dyScreen = (e.clientY - state.panStart.y);



      if (Math.abs(dxScreen) > 3 || Math.abs(dyScreen) > 3) {

        state.hasPanned = true;

      }



      // Chia cho hệ số tỷ lệ CTM để con trỏ chuột và bản đồ bám dính 1:1 không bị trôi lệch

      const ctm = mapSvg ? mapSvg.getScreenCTM() : null;

      const scaleFactor = ctm && ctm.a > 0 ? ctm.a : 1.0;

      const dxSvg = dxScreen / scaleFactor;

      const dySvg = dyScreen / scaleFactor;



      state.panOffset.x += dxSvg;

      state.panOffset.y += dySvg;



      // Giới hạn khung nhìn bản đồ (không bị kéo trôi ra ngoài khoảng trống)

      const maxPanX = 380 * state.zoomLevel;

      const maxPanY = 380 * state.zoomLevel;

      state.panOffset.x = Math.max(-maxPanX, Math.min(maxPanX, state.panOffset.x));

      state.panOffset.y = Math.max(-maxPanY, Math.min(maxPanY, state.panOffset.y));



      state.panStart = { x: e.clientX, y: e.clientY };

      updateMapTransform();

    }

  });



  function stopMapPointer(e) {

    if (e && e.pointerId) {

      activePointers.delete(e.pointerId);

    } else {

      activePointers.clear();

    }



    if (activePointers.size === 1) {

      // Chuyển lại trạng thái pan mượt mà với ngón tay còn lại

      const remaining = activePointers.values().next().value;

      state.panStart = { x: remaining.x, y: remaining.y };

      state.isPanning = true;

    } else if (activePointers.size === 0) {

      if (state.isPanning) {

        state.isPanning = false;

        if (mapViewport) mapViewport.classList.remove('is-panning');

        if (mapSvg) mapSvg.style.cursor = 'grab';

      }

      setTimeout(() => {

        state.hasPanned = false;

      }, 50);

    }

  }



  window.addEventListener('pointerup', stopMapPointer);

  window.addEventListener('pointercancel', stopMapPointer);



  // Mouse wheel zoom (hỗ trợ cuộn chuột trên toàn bộ khung bản đồ)

  if (mapViewport) {

    mapViewport.addEventListener('wheel', (e) => {

      e.preventDefault();

      const zoomDelta = e.deltaY < 0 ? 0.15 : -0.15;

      zoomMap(zoomDelta, 345, 420);

    }, { passive: false });

  }



  // --- PROVINCE INFO MODAL (Bách Khoa Tỉnh Thành) ---

  function showProvinceInfoModal(p) {

    const regMap = getRegionMap();

    const reg = regMap.get(p.regionId);



    let mergedInfoHtml = '';

    if (p.mergedFrom && p.mergedFrom.length > 1) {

      mergedInfoHtml = `

        <div class="info-row" style="background:#eff6ff; padding:10px 14px; border-radius:10px; border:1px solid #bfdbfe;">

          <div class="info-icon">🔄</div>

          <div class="info-details">

            <span class="info-label" style="color:#1d4ed8;">Địa giới mới sáp nhập từ:</span>

            <span class="info-val" style="color:#1e40af; font-size:1rem;"><strong>${p.mergedFrom.join(' + ')}</strong></span>

          </div>

        </div>

      `;

    }



    modalBody.innerHTML = `

      <div class="modal-province-header" style="background: linear-gradient(135deg, ${p.color}, #1e293b)">

        <div class="modal-badge">${reg ? reg.badge : '🇻🇳'}</div>

        <div class="modal-title-area">

          <div class="modal-province-region">${p.regionName}</div>

          <h2 class="modal-province-name">${p.name}</h2>

          <div class="modal-province-cap">Thủ phủ / Trung tâm: <strong>${p.capital}</strong></div>

        </div>

      </div>

      <div class="modal-province-content">

        ${mergedInfoHtml}

        <div class="info-row">

          <div class="info-icon">🏛️</div>

          <div class="info-details">

            <span class="info-label">Danh lam thắng cảnh tiêu biểu:</span>

            <span class="info-val">${p.landmark}</span>

          </div>

        </div>

        <div class="info-row">

          <div class="info-icon">🍲</div>

          <div class="info-details">

            <span class="info-label">Đặc sản ẩm thực trứ danh:</span>

            <span class="info-val">${p.specialty}</span>

          </div>

        </div>

        <div class="info-row highlight-box">

          <div class="info-icon">💡</div>

          <div class="info-details">

            <span class="info-label">Bạn có biết?</span>

            <span class="info-val">${p.funFact}</span>

          </div>

        </div>

      </div>

    `;

    infoModal.classList.remove('hidden');

  }



  // --- VICTORY & REGION COMPLETE MODALS ---

  function triggerRegionCompleteModal(region) {

    if (window.authManager) {

      window.authManager.updateProgress(state.score, state.streak, false, 'vn_map');

    }

    victoryTitle.textContent = `Chúc mừng bạn! 🎉`;

    victoryDesc.innerHTML = `Bạn đã xuất sắc hoàn thành tất cả các mảnh ghép của <strong>${region.name}</strong> (${region.badge})!`;

    victoryScore.textContent = state.score.toLocaleString();

    victoryTime.textContent = timerEl.textContent;

    victoryActionBtn.textContent = 'Chinh phục Vùng Tiếp Theo ➔';

    victoryActionBtn.onclick = () => {

      victoryModal.classList.add('hidden');

      advanceToNextRegion();

    };

    victoryModal.classList.remove('hidden');

  }



  function triggerVictoryModal(isQuiz) {

    if (window.authManager) {

      window.authManager.updateProgress(state.score, state.streak, true, 'vn_map');

    }

    victoryTitle.textContent = `ĐỈNH CAO ĐỊA LÝ! 👑`;

    const totalCount = getProvincesList().length;

    victoryDesc.innerHTML = `Thật phi thường! Bạn đã hoàn thành trọn vẹn bản đồ <strong>${totalCount} tỉnh, thành phố cùng 2 quần đảo Hoàng Sa - Trường Sa</strong> của Tổ quốc Việt Nam!`;

    victoryScore.textContent = state.score.toLocaleString();

    victoryTime.textContent = timerEl.textContent;

    victoryActionBtn.textContent = 'Chơi Lại Từ Đầu ↺';

    victoryActionBtn.onclick = () => {

      victoryModal.classList.add('hidden');

      state.placedProvinces.clear();

      state.score = 0;

      state.streak = 0;

      state.timerSeconds = 0;

      applyMode('region', state.dataset === '34' ? 'bac_bo' : 'tay_bac');

    };

    victoryModal.classList.remove('hidden');

  }



  // --- SETUP EVENT LISTENERS ---

  function setupEventListeners() {

    // Dataset switchers (34 vs 63)

    if (btnModel34) {

      btnModel34.addEventListener('click', () => switchDataset('34'));

    }

    if (btnModel63) {

      btnModel63.addEventListener('click', () => switchDataset('63'));

    }



    // Mode Buttons (Cả trực tiếp và qua container delegation)

    document.querySelectorAll('.mode-btn').forEach(btn => {

      btn.addEventListener('click', (e) => {

        e.preventDefault();

        e.stopPropagation();

        const m = btn.dataset.mode;

        if (m) applyMode(m);

      });

    });



    const ctrlBar = document.getElementById('control-bar');

    if (ctrlBar) {

      ctrlBar.addEventListener('click', (e) => {

        const btn = e.target.closest('.mode-btn');

        if (btn && btn.dataset && btn.dataset.mode) {

          applyMode(btn.dataset.mode);

        }

      });

    }



    // Auth modal close & guest play handlers

    const authCloseBtn = document.getElementById('auth-modal-close');

    if (authCloseBtn) {

      authCloseBtn.addEventListener('click', () => {

        authModal.classList.add('hidden');

        startTimer();

      });

    }



    const btnGuestPlay = document.getElementById('btn-guest-play');

    if (btnGuestPlay) {

      btnGuestPlay.addEventListener('click', () => {

        authModal.classList.add('hidden');

        updateUserProfileUI({ fullName: 'Học sinh', className: 'Lớp 4', avatar: '🎓' });

        startTimer();

      });

    }



    // Difficulty Buttons

    difficultyButtons.forEach(btn => {

      btn.addEventListener('click', () => {

        difficultyButtons.forEach(b => b.classList.remove('active'));

        btn.classList.add('active');

        state.difficulty = btn.dataset.difficulty;

        updateSlotsVisibility();

        renderPuzzleTray();

        updateSlotHighlight();

      });

    });



    // Zoom Buttons

    btnZoomIn.addEventListener('click', () => zoomMap(0.25));

    btnZoomOut.addEventListener('click', () => zoomMap(-0.25));

    btnResetView.addEventListener('click', resetMapView);



    // Fullscreen Toggle

    btnFullscreen.addEventListener('click', () => {

      if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen().catch(err => console.warn(err));

      } else {

        document.exitFullscreen().catch(err => console.warn(err));

      }

    });



    // Sound Toggle

    btnToggleSound.addEventListener('click', () => {

      const isEnabled = window.soundEngine.toggleSound();

      btnToggleSound.textContent = isEnabled ? '🔊' : '🔇';

      btnToggleSound.title = isEnabled ? 'Tắt âm thanh' : 'Bật âm thanh';

    });



    // Modal Close

    modalClose.addEventListener('click', () => infoModal.classList.add('hidden'));

    victoryClose.addEventListener('click', () => victoryModal.classList.add('hidden'));



    window.addEventListener('click', (e) => {

      if (e.target === infoModal) infoModal.classList.add('hidden');

      if (e.target === victoryModal) victoryModal.classList.add('hidden');

      if (e.target === leaderboardModal) leaderboardModal.classList.add('hidden');

    });

  }



  // Run init

  init();

});

