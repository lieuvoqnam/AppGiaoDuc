/**
 * app.js - Vietnam Map Puzzle Game Logic
 * Quản lý trạng thái trò chơi, tương tác kéo thả bản đồ, chuyển đổi 34 tỉnh/thành (mới) và 63 tỉnh/thành (cũ).
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- GAME STATE ---
  const state = {
    dataset: '34', // Default to the updated 34 provinces/cities! ('34' | '63')
    mode: 'region', // 'region' | 'all' | 'quiz' | 'explore'
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
  const mapSvg = document.getElementById('vietnam-map');
  const baseMapLayer = document.getElementById('base-map-layer');
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
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const authMsg = document.getElementById('auth-msg');
  const linkToRegister = document.getElementById('link-to-register');
  const linkToLogin = document.getElementById('link-to-login');
  const avatarGrid = document.getElementById('avatar-grid');

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
      authModal.classList.add('hidden');
      updateUserProfileUI(user);
      startTimer();
    } else {
      authModal.classList.remove('hidden');
      if (state.timerInterval) clearInterval(state.timerInterval);
    }
  }

  function updateUserProfileUI(user) {
    if (!user) return;
    userAvatarEl.textContent = user.avatar || '🎓';
    userDisplayNameEl.textContent = user.fullName || user.username;
    userDisplayClassEl.textContent = user.className || 'Học sinh';
  }

  function setupAuthHandlers() {
    // Switch between Login & Register tabs
    authTabLogin.addEventListener('click', () => showAuthTab('login'));
    authTabRegister.addEventListener('click', () => showAuthTab('register'));
    linkToRegister.addEventListener('click', (e) => { e.preventDefault(); showAuthTab('register'); });
    linkToLogin.addEventListener('click', (e) => { e.preventDefault(); showAuthTab('login'); });

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
    userInfoBtn.addEventListener('click', openLeaderboardModal);
    leaderboardClose.addEventListener('click', () => leaderboardModal.classList.add('hidden'));
  }

  function showAuthTab(tab) {
    authMsg.classList.add('hidden');
    if (tab === 'login') {
      authTabLogin.classList.add('active');
      authTabRegister.classList.remove('active');
      loginForm.classList.remove('hidden');
      registerForm.classList.add('hidden');
    } else {
      authTabLogin.classList.remove('active');
      authTabRegister.classList.add('active');
      loginForm.classList.add('hidden');
      registerForm.classList.remove('hidden');
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

      subpaths.forEach((sub, sIdx) => {
        const slotPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        slotPath.setAttribute('d', sub.d);
        slotPath.setAttribute('id', `slot-sub-${p.id}-${sIdx}`);
        slotPath.setAttribute('class', `slot-path slot-prov-${p.id}`);
        slotPath.dataset.id = p.id;
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
        applyMode('region', reg.id);
      });
      regionSelector.appendChild(btn);
    });
  }

  // --- APPLY GAME MODE & REGION ---
  function applyMode(mode, regionId = null) {
    state.mode = mode;
    if (regionId) state.currentRegionId = regionId;

    // Reset piece selection
    state.selectedPieceId = null;

    // Update Mode Buttons UI
    modeButtons.forEach(b => {
      b.classList.toggle('active', b.dataset.mode === mode);
    });

    // Update Region Tabs UI
    document.querySelectorAll('.region-tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.region === state.currentRegionId);
    });

    // Show/hide region selector bar based on mode
    if (mode === 'region') {
      regionSelector.style.display = 'flex';
      quizBanner.classList.add('hidden');
    } else if (mode === 'all') {
      regionSelector.style.display = 'none';
      quizBanner.classList.add('hidden');
    } else if (mode === 'quiz') {
      regionSelector.style.display = 'none';
      quizBanner.classList.remove('hidden');
      setupNextQuizQuestion();
    } else if (mode === 'explore') {
      regionSelector.style.display = 'flex';
      quizBanner.classList.add('hidden');
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

      if (isPlaced) {
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

  // --- DRAG & DROP ENGINE (POINTER EVENTS) ---
  function onPiecePointerDown(e, province) {
    if (e.button !== 0 && e.pointerType === 'mouse') return; // Left click only
    e.preventDefault();

    state.isDraggingPiece = true;
    state.draggedProvince = province;
    state.dragStartScreen = { x: e.clientX, y: e.clientY };

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
    updateFloatingPiecePosition(e.clientX, e.clientY);

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
      window.authManager.updateProgress(state.score, state.streak, false);
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

  function zoomMap(delta, centerX = 406, centerY = 436) {
    const prevZoom = state.zoomLevel;
    const newZoom = Math.min(3.2, Math.max(0.85, prevZoom + delta));
    if (newZoom === prevZoom) return;

    state.panOffset.x = centerX - (centerX - state.panOffset.x) * (newZoom / prevZoom);
    state.panOffset.y = centerY - (centerY - state.panOffset.y) * (newZoom / prevZoom);
    state.zoomLevel = newZoom;

    updateMapTransform();
  }

  function resetMapView() {
    state.zoomLevel = 1.0;
    state.panOffset = { x: 0, y: 0 };
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

    const svgW = 812;
    const svgH = 873;

    const scale = Math.min(2.4, Math.max(1.1, Math.min(svgW / (regW * 1.6), svgH / (regH * 1.6))));
    state.zoomLevel = scale;
    state.panOffset.x = (svgW / 2) - regCx * scale;
    state.panOffset.y = (svgH / 2) - regCy * scale;

    updateMapTransform();
  }

  // Map panning with pointer / mouse drag on background
  baseMapLayer.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    state.isPanning = true;
    state.panStart = { x: e.clientX, y: e.clientY };
    mapSvg.style.cursor = 'grabbing';
  });

  window.addEventListener('pointermove', (e) => {
    if (state.isPanning) {
      const dx = (e.clientX - state.panStart.x);
      const dy = (e.clientY - state.panStart.y);
      state.panOffset.x += dx;
      state.panOffset.y += dy;
      state.panStart = { x: e.clientX, y: e.clientY };
      updateMapTransform();
    }
  });

  window.addEventListener('pointerup', () => {
    if (state.isPanning) {
      state.isPanning = false;
      mapSvg.style.cursor = 'default';
    }
  });

  // Mouse wheel zoom
  mapSvg.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomDelta = e.deltaY < 0 ? 0.15 : -0.15;
    zoomMap(zoomDelta, 406, 436);
  }, { passive: false });

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
      window.authManager.updateProgress(state.score, state.streak, false);
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
      window.authManager.updateProgress(state.score, state.streak, true);
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

    // Mode Buttons
    modeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        applyMode(btn.dataset.mode);
      });
    });

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
