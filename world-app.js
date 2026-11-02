/**
 * world-app.js - Logic điều khiển Trò chơi Ghép Hình Bản Đồ Thế Giới
 * Hỗ trợ 5 Châu lục, 4 chế độ chơi, kéo-thả hút dính, đố vui quốc kỳ và kỳ quan.
 * Tuân thủ quy tắc độ khó: Mức Dễ có highlight; Mức Vừa & Khó BỎ HOÀN TOÀN highlight!
 */

document.addEventListener('DOMContentLoaded', () => {
  if (!window.WORLD_DATA) {
    console.error('Missing WORLD_DATA');
    return;
  }

  // --- GAME STATE ---
  const state = {
    mode: 'continent', // 'continent' | 'all' | 'quiz' | 'explore'
    difficulty: 'easy', // 'easy' | 'medium' | 'hard'
    currentContinentId: 'asia',
    placedCountries: new Set(),
    selectedPieceId: null,
    score: 0,
    streak: 0,
    maxStreak: 0,
    timerSeconds: 0,
    timerInterval: null,
    quizTargetId: null,

    // Pan & Zoom
    viewBox: { x: 0, y: 0, w: 1200, h: 670 },
    initialViewBox: { x: 0, y: 0, w: 1200, h: 670 },
    isPanning: false,
    panStart: { x: 0, y: 0 },

    // Drag & Drop
    isDraggingPiece: false,
    draggedCountry: null,
    dragStartScreen: { x: 0, y: 0 },
    currentSvgOffset: { x: 0, y: 0 }
  };

  // --- DOM ELEMENTS ---
  const worldSvg = document.getElementById('world-svg');
  const slotsLayer = document.getElementById('slots-layer');
  const placedLayer = document.getElementById('placed-layer');
  const draggingLayer = document.getElementById('dragging-layer');
  const labelsLayer = document.getElementById('labels-layer');
  const puzzleTray = document.getElementById('puzzle-tray');
  const continentSelector = document.getElementById('continent-selector');
  const quizBanner = document.getElementById('quiz-banner');
  const quizTargetFlagEl = document.getElementById('quiz-target-flag');
  const quizTargetNameEl = document.getElementById('quiz-target-name');
  const quizHintEl = document.getElementById('quiz-hint-text');

  // Stats
  const statPlacedCount = document.getElementById('stat-placed-count');
  const statTotalCount = document.getElementById('stat-total-count');
  const statScore = document.getElementById('stat-score');
  const statStreak = document.getElementById('stat-streak');
  const statTimer = document.getElementById('stat-timer');

  // Controls
  const modeButtons = document.querySelectorAll('[data-mode]');
  const difficultyButtons = document.querySelectorAll('[data-difficulty]');
  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomOut = document.getElementById('btn-zoom-out');
  const btnResetView = document.getElementById('btn-reset-view');
  const btnFullscreen = document.getElementById('btn-fullscreen');
  const btnToggleSound = document.getElementById('btn-toggle-sound');

  // Modals
  const infoModal = document.getElementById('info-modal');
  const modalClose = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');
  const victoryModal = document.getElementById('victory-modal');
  const victoryClose = document.getElementById('victory-close');
  const victoryActionBtn = document.getElementById('victory-action-btn');

  // User Profile DOM
  const userAvatarEl = document.getElementById('user-avatar');
  const userDisplayNameEl = document.getElementById('user-display-name');
  const userDisplayClassEl = document.getElementById('user-display-class');
  const btnLeaderboard = document.getElementById('btn-leaderboard');
  const btnLogout = document.getElementById('btn-logout');
  const leaderboardModal = document.getElementById('leaderboard-modal');
  const leaderboardClose = document.getElementById('leaderboard-close');
  const lbCurrentUserBox = document.getElementById('lb-current-user-box');
  const lbTableBody = document.getElementById('lb-table-body');

  // --- INITIALIZATION ---
  function init() {
    setupAuthUI();
    renderContinentSelector();
    buildMapSvgElements();
    applyMode('continent', 'asia');
    setupEventListeners();
    startTimer();
  }

  // --- AUTH STATUS & PROFILE ---
  function setupAuthUI() {
    if (window.authManager && window.authManager.isLoggedIn()) {
      const user = window.authManager.currentUser;
      if (userAvatarEl) userAvatarEl.textContent = user.avatar || '🎓';
      if (userDisplayNameEl) userDisplayNameEl.textContent = user.fullName || user.username;
      if (userDisplayClassEl) userDisplayClassEl.textContent = user.className || 'Học sinh';
    }

    if (btnLogout) {
      btnLogout.addEventListener('click', () => {
        if (confirm('Bạn có muốn đăng xuất để chuyển tài khoản học sinh khác không?')) {
          if (window.authManager) window.authManager.logout();
          window.location.href = 'index.html';
        }
      });
    }

    if (btnLeaderboard) btnLeaderboard.addEventListener('click', openLeaderboard);
    if (leaderboardClose) leaderboardClose.addEventListener('click', () => leaderboardModal.classList.add('hidden'));
  }

  function openLeaderboard() {
    if (!window.authManager) return;
    const user = window.authManager.currentUser;
    const leaders = window.authManager.getLeaderboard();

    if (user && lbCurrentUserBox) {
      lbCurrentUserBox.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="font-size:2.2rem; background:rgba(255,255,255,0.2); width:48px; height:48px; border-radius:12px; display:flex; align-items:center; justify-content:center;">${user.avatar || '🎓'}</div>
          <div>
            <h4 style="font-size:1.1rem; font-weight:900;">${user.fullName}</h4>
            <span style="font-size:0.8rem; opacity:0.9;">${user.className}</span>
          </div>
        </div>
        <div style="text-align:right;">
          <span style="font-size:0.7rem; font-weight:800; text-transform:uppercase; opacity:0.85;">Điểm Kỷ Lục</span>
          <div style="font-size:1.3rem; font-weight:900;">${(user.highScore || 0).toLocaleString()}</div>
        </div>
      `;
    }

    if (lbTableBody) {
      lbTableBody.innerHTML = '';
      if (leaders.length === 0) {
        lbTableBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:18px; color:#94a3b8;">Chưa có dữ liệu bảng vàng!</td></tr>`;
      } else {
        leaders.forEach((u, idx) => {
          const tr = document.createElement('tr');
          let rank = `${idx + 1}`;
          if (idx === 0) rank = '🥇';
          else if (idx === 1) rank = '🥈';
          else if (idx === 2) rank = '🥉';

          const isMe = user && user.username === u.username;
          if (isMe) tr.style.background = '#e0f2fe';

          tr.innerHTML = `
            <td style="font-size:1.1rem;">${rank}</td>
            <td><strong>${u.avatar || '🎓'} ${u.fullName}</strong></td>
            <td style="color:#64748b;">${u.className}</td>
            <td style="color:#0284c7; font-weight:900; text-align:right;">${(u.highScore || 0).toLocaleString()}</td>
          `;
          lbTableBody.appendChild(tr);
        });
      }
    }

    if (leaderboardModal) leaderboardModal.classList.remove('hidden');
  }

  // --- RENDER CONTINENT SELECTOR BAR ---
  function renderContinentSelector() {
    if (!continentSelector) return;
    continentSelector.innerHTML = '';

    window.WORLD_DATA.continents.forEach(cont => {
      const btn = document.createElement('button');
      btn.className = `continent-btn ${cont.id === state.currentContinentId ? 'active' : ''}`;
      btn.dataset.id = cont.id;
      btn.innerHTML = `<span>${cont.icon}</span> <span>${cont.name}</span>`;
      btn.addEventListener('click', () => {
        applyMode('continent', cont.id);
      });
      continentSelector.appendChild(btn);
    });
  }

  // --- BUILD MAP SVG ELEMENTS (SLOTS & LABELS) ---
  function buildMapSvgElements() {
    // 0. Render authentic world background landmasses
    const baseWorldPathEl = document.getElementById('base-world-path');
    if (baseWorldPathEl && window.WORLD_DATA.baseWorldPath) {
      baseWorldPathEl.setAttribute('d', window.WORLD_DATA.baseWorldPath);
    }

    slotsLayer.innerHTML = '';
    placedLayer.innerHTML = '';
    labelsLayer.innerHTML = '';

    window.WORLD_DATA.countries.forEach(country => {
      // 1. Target Slot Path
      const slot = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      slot.setAttribute('d', country.d);
      slot.setAttribute('class', `slot-path slot-country-${country.id}`);
      slot.setAttribute('data-id', country.id);
      slot.setAttribute('tabindex', '0');
      slotsLayer.appendChild(slot);

      // 2. Snap Dot Target (Vị trí đặt chính xác tại THỦ ĐÔ quốc gia)
      const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('cx', country.center[0]);
      dot.setAttribute('cy', country.center[1]);
      dot.setAttribute('r', '4.5');
      dot.setAttribute('class', 'snap-dot capital-marker');
      dot.setAttribute('id', `snap-dot-${country.id}`);
      dot.setAttribute('data-id', country.id);

      const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      title.textContent = `⭐ Thủ đô ${country.capital} (${country.name})`;
      dot.appendChild(title);
      slotsLayer.appendChild(dot);

      // 3. Placed Country Group
      const placedGrp = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      placedGrp.setAttribute('id', `placed-group-${country.id}`);
      placedGrp.setAttribute('class', 'placed-country-group hidden');

      const placedPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      placedPath.setAttribute('d', country.d);
      placedPath.setAttribute('fill', country.color);
      placedPath.setAttribute('class', 'placed-country-path');
      placedPath.setAttribute('data-id', country.id);
      placedGrp.appendChild(placedPath);

      // Đánh dấu Thủ đô sau khi ghép xong
      const capMarker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      capMarker.setAttribute('cx', country.center[0]);
      capMarker.setAttribute('cy', country.center[1]);
      capMarker.setAttribute('r', '3.5');
      capMarker.setAttribute('class', 'placed-capital-dot');
      const capTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      capTitle.textContent = `⭐ Thủ đô ${country.capital} (${country.name})`;
      capMarker.appendChild(capTitle);
      placedGrp.appendChild(capMarker);

      // Click placed country to open Atlas popup
      placedPath.addEventListener('click', () => openCountryAtlasModal(country));
      capMarker.addEventListener('click', (e) => {
        e.stopPropagation();
        openCountryAtlasModal(country);
      });
      placedLayer.appendChild(placedGrp);

      // 4. Country Label (Đặt gần Thủ đô)
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', country.center[0]);
      text.setAttribute('y', country.center[1] + 6);
      text.setAttribute('class', 'map-label hidden');
      text.setAttribute('id', `label-${country.id}`);
      text.textContent = country.name;
      labelsLayer.appendChild(text);
    });
  }

  // --- APPLY MODE (Châu Lục, Toàn Cầu, Đố Vui, Khám Phá) ---
  function applyMode(mode, continentId = null) {
    state.mode = mode;
    state.selectedPieceId = null;

    if (continentId) {
      state.currentContinentId = continentId;
    }

    // Update Mode Buttons
    modeButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    // Update Continent Bar
    if (continentSelector) {
      continentSelector.querySelectorAll('.continent-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.id === state.currentContinentId);
      });
      continentSelector.style.display = (mode === 'continent' || mode === 'explore') ? 'flex' : 'none';
    }

    // Update Quiz Banner
    if (quizBanner) {
      if (mode === 'quiz') {
        quizBanner.classList.remove('hidden');
        setupNextQuizQuestion();
      } else {
        quizBanner.classList.add('hidden');
      }
    }

    // Auto zoom map
    if (mode === 'continent') {
      focusContinent(state.currentContinentId);
    } else {
      resetMapView();
    }

    updateSlotsVisibility();
    renderPuzzleTray();
    updateStats();
    updateSlotHighlight();
  }

  // --- GET ACTIVE COUNTRIES FOR CURRENT MODE ---
  function getActiveCountries() {
    const all = window.WORLD_DATA.countries;
    if (state.mode === 'continent') {
      return all.filter(c => c.continent === state.currentContinentId);
    } else {
      return all;
    }
  }

  // --- UPDATE SLOTS VISIBILITY & LABELS ---
  function updateSlotsVisibility() {
    const active = getActiveCountries();
    const activeIds = new Set(active.map(c => c.id));

    window.WORLD_DATA.countries.forEach(country => {
      const slot = document.querySelector(`.slot-country-${country.id}`);
      const snapDot = document.getElementById(`snap-dot-${country.id}`);
      const placedGrp = document.getElementById(`placed-group-${country.id}`);
      const label = document.getElementById(`label-${country.id}`);

      const isPlaced = state.placedCountries.has(country.id);
      const isActiveInMode = activeIds.has(country.id);

      if (isPlaced) {
        if (placedGrp) placedGrp.classList.remove('hidden');
        if (slot) slot.classList.add('hidden');
        if (snapDot) snapDot.classList.add('hidden');
        if (label) {
          label.classList.remove('hidden');
          label.classList.add('placed');
        }
      } else {
        if (placedGrp) placedGrp.classList.add('hidden');
        if (slot) slot.classList.remove('hidden');

        if (isActiveInMode) {
          if (slot) {
            slot.classList.add('active-target');
            slot.classList.remove('faint-target');
          }
          if (snapDot) snapDot.classList.toggle('hidden', state.difficulty === 'hard');
          if (label) {
            label.classList.toggle('hidden', state.difficulty !== 'easy');
          }
        } else {
          if (slot) {
            slot.classList.remove('active-target');
            slot.classList.add('faint-target');
          }
          if (snapDot) snapDot.classList.add('hidden');
          if (label) label.classList.add('hidden');
        }
      }
    });
  }

  // --- HIGHLIGHT TARGET ON MAP THEO CẤP ĐỘ KHÓ ---
  function updateSlotHighlight() {
    // 1. Luôn xóa highlight cũ trên toàn bộ bản đồ
    document.querySelectorAll('.slot-path').forEach(slot => {
      slot.classList.remove('highlight-target');
    });

    // 2. QUY TẮC ĐỘ KHÓ:
    // - Cấp độ "Dễ" (easy): Làm nổi bật (highlight vàng nhấp nháy) vị trí quốc gia trên bản đồ.
    // - Cấp độ "Vừa" (medium) & "Khó" (hard): BỎ HOÀN TOÀN highlight vị trí trên bản đồ!
    if (state.selectedPieceId && state.difficulty === 'easy') {
      const targetSlots = document.querySelectorAll(`.slot-country-${state.selectedPieceId}`);
      targetSlots.forEach(s => s.classList.add('highlight-target'));
    }
  }

  // --- RENDER PUZZLE TRAY (Khay Mảnh Ghép) ---
  function renderPuzzleTray() {
    if (!puzzleTray) return;
    puzzleTray.innerHTML = '';

    const active = getActiveCountries();
    const unplaced = active.filter(c => !state.placedCountries.has(c.id));

    if (unplaced.length === 0) {
      puzzleTray.innerHTML = `
        <div class="tray-completed-msg">
          <div class="trophy-icon">🏆</div>
          <h3>Xuất Sắc!</h3>
          <p>Bạn đã hoàn thành các quốc gia trong phần này!</p>
          <button class="btn-primary" id="btn-next-step">
            ${state.mode === 'continent' ? 'Khám Phá Châu Lục Tiếp Theo ➔' : 'Xem Bách Khoa Toàn Thư 📖'}
          </button>
        </div>
      `;
      const nextBtn = document.getElementById('btn-next-step');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (state.mode === 'continent') {
            advanceToNextContinent();
          } else {
            applyMode('explore');
          }
        });
      }
      return;
    }

    let countriesToRender = unplaced;
    if (state.mode === 'quiz' && state.quizTargetId) {
      const target = window.WORLD_DATA.countries.find(c => c.id === state.quizTargetId);
      countriesToRender = target ? [target] : [];
    }

    countriesToRender.forEach(c => {
      const card = document.createElement('div');
      card.className = `piece-card ${state.selectedPieceId === c.id ? 'selected' : ''}`;
      card.dataset.id = c.id;

      // Mini preview SVG
      const b = c.bbox;
      const pad = Math.max(8, Math.max(b[2], b[3]) * 0.2);
      const miniViewBox = `${b[0] - pad} ${b[1] - pad} ${b[2] + pad * 2} ${b[3] + pad * 2}`;

      card.innerHTML = `
        <div class="mini-svg-container">
          <svg viewBox="${miniViewBox}" preserveAspectRatio="xMidYMid meet">
            <path d="${c.d}" fill="${c.color}" stroke="#ffffff" stroke-width="2" />
          </svg>
        </div>
        <div class="piece-info">
          <div class="piece-header-row">
            <span class="piece-flag">${c.flag}</span>
            <span class="piece-name">${state.difficulty === 'hard' && state.mode !== 'quiz' ? '???' : c.name}</span>
          </div>
          <div class="piece-landmark">🏛️ ${c.landmark}</div>
          <div class="piece-capital">Thủ đô: ${c.capital}</div>
        </div>
      `;

      // Pointer event for drag initiation
      card.addEventListener('pointerdown', (e) => onPiecePointerDown(e, c));

      // Click to select
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        selectPiece(c.id);
      });

      puzzleTray.appendChild(card);
    });
  }

  // --- SELECT PIECE & TAP-TO-PLACE ---
  function selectPiece(countryId) {
    if (state.selectedPieceId === countryId) {
      state.selectedPieceId = null;
    } else {
      state.selectedPieceId = countryId;
      if (window.soundEngine) window.soundEngine.playPickup();
    }

    document.querySelectorAll('.piece-card').forEach(card => {
      card.classList.toggle('selected', card.dataset.id === state.selectedPieceId);
    });

    // Cập nhật Highlight trên bản đồ (tuân thủ độ khó)
    updateSlotHighlight();
  }

  // --- DRAG & DROP ENGINE (Pointer Events) ---
  function onPiecePointerDown(e, country) {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    e.preventDefault();

    state.isDraggingPiece = true;
    state.draggedCountry = country;
    state.dragStartScreen = { x: e.clientX, y: e.clientY };

    if (window.soundEngine) window.soundEngine.playPickup();

    draggingLayer.innerHTML = '';
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.id = 'floating-piece-group';
    group.setAttribute('class', 'dragging-group');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', country.d);
    path.setAttribute('fill', country.color);
    path.setAttribute('class', 'floating-piece-path');
    group.appendChild(path);

    draggingLayer.appendChild(group);
    updateFloatingPiecePosition(e.clientX, e.clientY);

    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp);
    document.addEventListener('pointercancel', onPointerCancel);
  }

  function updateFloatingPiecePosition(clientX, clientY) {
    if (!state.draggedCountry) return;
    const c = state.draggedCountry;

    const svgPoint = screenToSvgCoords(clientX, clientY);
    const dx = svgPoint.x - c.center[0];
    const dy = svgPoint.y - c.center[1];
    state.currentSvgOffset = { x: dx, y: dy };

    const group = document.getElementById('floating-piece-group');
    if (group) {
      group.setAttribute('transform', `translate(${dx}, ${dy})`);
    }

    const dist = Math.hypot(dx, dy);
    const targetSlot = document.querySelector(`.slot-country-${c.id}`);
    const snapDot = document.getElementById(`snap-dot-${c.id}`);

    if (dist < 42) {
      group.classList.add('snap-ready');
      if (targetSlot) targetSlot.classList.add('snap-hover');
      if (snapDot) snapDot.classList.add('snap-hover');
    } else {
      group.classList.remove('snap-ready');
      if (targetSlot) targetSlot.classList.remove('snap-hover');
      if (snapDot) snapDot.classList.remove('snap-hover');
    }
  }

  function onPointerMove(e) {
    if (state.isDraggingPiece) {
      updateFloatingPiecePosition(e.clientX, e.clientY);
    }
  }

  function onPointerUp() {
    if (!state.isDraggingPiece) return;

    const c = state.draggedCountry;
    const { x: dx, y: dy } = state.currentSvgOffset;
    const dist = Math.hypot(dx, dy);

    if (dist <= 42) {
      handleCorrectPlacement(c);
    } else {
      handleFailedPlacement(c);
    }

    cleanUpDrag();
  }

  function onPointerCancel() {
    if (state.isDraggingPiece) {
      handleFailedPlacement(state.draggedCountry);
      cleanUpDrag();
    }
  }

  function cleanUpDrag() {
    state.isDraggingPiece = false;
    state.draggedCountry = null;
    draggingLayer.innerHTML = '';
    document.removeEventListener('pointermove', onPointerMove);
    document.removeEventListener('pointerup', onPointerUp);
    document.removeEventListener('pointercancel', onPointerCancel);

    document.querySelectorAll('.slot-path, .snap-dot').forEach(el => {
      el.classList.remove('snap-hover');
    });
  }

  // --- HANDLE CORRECT PLACEMENT ---
  function handleCorrectPlacement(country) {
    state.placedCountries.add(country.id);
    state.selectedPieceId = null;

    if (window.soundEngine) window.soundEngine.playSnap();

    // Streak & score calculation
    state.streak++;
    if (state.streak > state.maxStreak) state.maxStreak = state.streak;
    const comboMultiplier = Math.min(3, 1 + (state.streak - 1) * 0.2);
    const addedScore = Math.round(120 * comboMultiplier);
    state.score += addedScore;

    showFloatingScore(country.center[0], country.center[1], `+${addedScore}`);

    updateSlotsVisibility();
    updateSlotHighlight();
    renderPuzzleTray();
    updateStats();

    if (window.authManager) {
      window.authManager.updateProgress(state.score, state.streak, false);
    }

    checkCompletionCondition();
  }

  function handleFailedPlacement() {
    if (window.soundEngine) window.soundEngine.playError();
    state.streak = 0;
    updateStats();
  }

  // --- CLICK MAP SLOT TO PLACE (Tap-to-Place Support) ---
  slotsLayer.addEventListener('click', (e) => {
    const slot = e.target.closest('.slot-path, .snap-dot');
    if (!slot) return;

    const clickedId = slot.dataset.id;
    if (state.selectedPieceId && state.selectedPieceId === clickedId) {
      const country = window.WORLD_DATA.countries.find(c => c.id === state.selectedPieceId);
      if (country) handleCorrectPlacement(country);
    } else if (state.selectedPieceId && state.selectedPieceId !== clickedId) {
      if (window.soundEngine) window.soundEngine.playError();
      slot.classList.add('wrong-shake');
      setTimeout(() => slot.classList.remove('wrong-shake'), 400);
    }
  });

  // --- CHECK COMPLETION CONDITION ---
  function checkCompletionCondition() {
    const active = getActiveCountries();
    const allPlaced = active.every(c => state.placedCountries.has(c.id));

    if (state.mode === 'quiz') {
      const unplaced = window.WORLD_DATA.countries.filter(c => !state.placedCountries.has(c.id));
      if (unplaced.length === 0) {
        triggerVictoryModal(true);
      } else {
        setTimeout(setupNextQuizQuestion, 600);
      }
      return;
    }

    if (allPlaced) {
      if (window.soundEngine) window.soundEngine.playVictoryFanfare();
      if (window.confettiEngine) window.confettiEngine.burst(150);

      setTimeout(() => {
        triggerVictoryModal(false);
      }, 500);
    }
  }

  // --- CONTINENT ADVANCEMENT ---
  function advanceToNextContinent() {
    const continents = window.WORLD_DATA.continents;
    const curIdx = continents.findIndex(c => c.id === state.currentContinentId);
    const nextIdx = (curIdx + 1) % continents.length;
    applyMode('continent', continents[nextIdx].id);
  }

  // --- QUIZ MODE ENGINE ---
  function setupNextQuizQuestion() {
    const unplaced = window.WORLD_DATA.countries.filter(c => !state.placedCountries.has(c.id));
    if (unplaced.length === 0) {
      triggerVictoryModal(true);
      return;
    }

    const target = unplaced[Math.floor(Math.random() * unplaced.length)];
    state.quizTargetId = target.id;
    state.selectedPieceId = target.id;

    if (quizTargetFlagEl) quizTargetFlagEl.textContent = target.flag;
    if (quizTargetNameEl) quizTargetNameEl.textContent = target.name;
    if (quizHintEl) quizHintEl.textContent = `Thủ đô: ${target.capital} • Kỳ quan: ${target.landmark}`;

    renderPuzzleTray();
    updateSlotsVisibility();
    updateSlotHighlight();
  }

  // --- STATS UPDATE ---
  function updateStats() {
    const active = getActiveCountries();
    const placed = active.filter(c => state.placedCountries.has(c.id)).length;

    if (statPlacedCount) statPlacedCount.textContent = placed;
    if (statTotalCount) statTotalCount.textContent = active.length;
    if (statScore) statScore.textContent = state.score.toLocaleString();
    if (statStreak) statStreak.textContent = state.streak;
  }

  // --- TIMER ---
  function startTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
      state.timerSeconds++;
      const mins = String(Math.floor(state.timerSeconds / 60)).padStart(2, '0');
      const secs = String(state.timerSeconds % 60).padStart(2, '0');
      if (statTimer) statTimer.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  // --- FLOATING SCORE ---
  function showFloatingScore(x, y, text) {
    const viewport = document.getElementById('map-viewport');
    if (!viewport) return;

    const screenCoords = svgToScreenCoords(x, y);
    const span = document.createElement('span');
    span.className = 'floating-score';
    span.textContent = text;
    span.style.left = `${screenCoords.x}px`;
    span.style.top = `${screenCoords.y}px`;
    viewport.appendChild(span);

    setTimeout(() => span.remove(), 800);
  }

  // --- VICTORY MODAL ---
  function triggerVictoryModal(isQuiz = false) {
    if (!victoryModal) return;

    const vicScoreEl = document.getElementById('victory-score');
    const vicTimeEl = document.getElementById('victory-time');
    const vicTitle = document.getElementById('victory-title');
    const vicDesc = document.getElementById('victory-desc');

    if (vicScoreEl) vicScoreEl.textContent = state.score.toLocaleString();
    if (vicTimeEl && statTimer) vicTimeEl.textContent = statTimer.textContent;

    if (isQuiz) {
      if (vicTitle) vicTitle.textContent = 'Bậc Thầy Địa Lý Thế Giới! 🌍';
      if (vicDesc) vicDesc.textContent = 'Bạn đã vượt qua xuất sắc toàn bộ câu đố Quốc kỳ & Kỳ quan các nước!';
    } else {
      if (vicTitle) vicTitle.textContent = 'Chúc Mừng Bạn! 🏆';
      if (vicDesc) vicDesc.textContent = 'Bạn đã hoàn thành ghép các quốc gia trên bản đồ thế giới!';
    }

    victoryModal.classList.remove('hidden');

    if (window.authManager) {
      window.authManager.updateProgress(state.score, state.maxStreak, true);
    }
  }

  // --- COUNTRY ATLAS POPUP MODAL ---
  function openCountryAtlasModal(country) {
    if (!infoModal || !modalBody) return;

    const contObj = window.WORLD_DATA.continents.find(c => c.id === country.continent);

    modalBody.innerHTML = `
      <div class="country-profile-header">
        <div class="country-profile-flag">${country.flag}</div>
        <div class="country-profile-title">
          <h2>${country.name}</h2>
          <span class="continent-tag">${contObj ? contObj.name : 'Thế Giới'}</span>
        </div>
      </div>

      <div class="country-info-grid">
        <div class="info-item">
          <span class="lbl">🏛️ Thủ đô</span>
          <span class="val">${country.capital}</span>
        </div>
        <div class="info-item">
          <span class="lbl">📐 Diện tích</span>
          <span class="val">${country.area}</span>
        </div>
        <div class="info-item">
          <span class="lbl">👥 Dân số</span>
          <span class="val">${country.population}</span>
        </div>
        <div class="info-item">
          <span class="lbl">🌍 Châu lục</span>
          <span class="val">${contObj ? contObj.name : 'Thế Giới'}</span>
        </div>
      </div>

      <div class="highlight-box">
        <h4>🌟 Kỳ quan & Biểu tượng nổi tiếng</h4>
        <p>${country.landmark}</p>
      </div>

      <div class="highlight-box" style="background:#f0fdf4; border-color:#bbf7d0;">
        <h4 style="color:#15803d;">💡 Chuyện kể địa lý thú vị</h4>
        <p style="color:#166534;">${country.funFact}</p>
      </div>
    `;

    infoModal.classList.remove('hidden');
    if (window.soundEngine) window.soundEngine.playSnap();
  }

  // --- MAP ZOOM & PAN ENGINE ---
  function applyViewBox() {
    worldSvg.setAttribute('viewBox', `${state.viewBox.x} ${state.viewBox.y} ${state.viewBox.w} ${state.viewBox.h}`);
    updateLabelsAndElementsScale();
  }

  // --- TỰ ĐỘNG ĐIỀU CHỈNH FONT CHỮ & KÍCH THƯỚC ĐIỂM KHI ZOOM IN / ZOOM OUT ---
  function updateLabelsAndElementsScale() {
    if (!state.initialViewBox) return;
    const scaleRatio = state.viewBox.w / state.initialViewBox.w;

    // 1. Kích thước font chữ TO RÕ RÀNG, DỄ ĐỌC:
    // - Khi Zoom Out (nhìn toàn cầu): fontSize ~ 20.0px (SVG) tương đương 16-18px trên màn hình, to rõ ràng tuyệt đối.
    // - Khi Zoom In (phóng to vào châu lục như Châu Âu): fontSize ~ 6.5px (SVG) tương đương 24-26px trên màn hình.
    const fontSize = Math.max(5.0, Math.min(26.0, 20.0 * Math.pow(scaleRatio, 0.72)));
    const yOffset = Math.max(7.0, 16.0 * scaleRatio);
    const dotRadius = Math.max(3.2, Math.min(8.5, 6.5 * scaleRatio));
    const strokeWidth = Math.max(1.8, Math.min(4.5, 3.8 * scaleRatio));

    // Cập nhật tất cả nhãn tên quốc gia
    document.querySelectorAll('.map-label').forEach(label => {
      label.style.fontSize = `${fontSize.toFixed(1)}px`;
      label.style.strokeWidth = `${strokeWidth.toFixed(1)}px`;
      const id = label.id.replace('label-', '');
      const country = window.WORLD_DATA.countries.find(c => c.id === id);
      if (country) {
        label.setAttribute('y', (country.center[1] + yOffset).toFixed(1));
      }
    });

    // Cập nhật kích thước điểm định vị thủ đô (snap dot & placed capital dot)
    document.querySelectorAll('.snap-dot, .placed-capital-dot').forEach(dot => {
      dot.setAttribute('r', dotRadius.toFixed(1));
    });
  }

  function resetMapView() {
    state.viewBox = { ...state.initialViewBox };
    applyViewBox();
  }

  function focusContinent(continentId) {
    const cont = window.WORLD_DATA.continents.find(c => c.id === continentId);
    if (!cont || !cont.viewBox) return;

    const parts = cont.viewBox.split(' ').map(Number);
    state.viewBox = { x: parts[0], y: parts[1], w: parts[2], h: parts[3] };
    applyViewBox();
  }

  function zoomMap(delta) {
    const factor = delta > 0 ? 0.8 : 1.25;
    const newW = state.viewBox.w * factor;
    const newH = state.viewBox.h * factor;

    // Boundaries check
    if (newW < 200 || newW > 1600) return;

    state.viewBox.x += (state.viewBox.w - newW) / 2;
    state.viewBox.y += (state.viewBox.h - newH) / 2;
    state.viewBox.w = newW;
    state.viewBox.h = newH;
    applyViewBox();
  }

  function screenToSvgCoords(clientX, clientY) {
    const pt = worldSvg.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    return pt.matrixTransform(worldSvg.getScreenCTM().inverse());
  }

  function svgToScreenCoords(svgX, svgY) {
    const pt = worldSvg.createSVGPoint();
    pt.x = svgX;
    pt.y = svgY;
    const screenPt = pt.matrixTransform(worldSvg.getScreenCTM());
    const rect = document.getElementById('map-viewport').getBoundingClientRect();
    return { x: screenPt.x - rect.left, y: screenPt.y - rect.top };
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // Mode Buttons
    modeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        applyMode(btn.dataset.mode);
      });
    });

    // Difficulty Buttons (Cập nhật độ khó & quy tắc highlight)
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

    // Fullscreen
    btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => console.warn(err));
      } else {
        document.exitFullscreen().catch(err => console.warn(err));
      }
    });

    // Sound toggle
    if (btnToggleSound) {
      btnToggleSound.addEventListener('click', () => {
        if (window.soundEngine) {
          const enabled = window.soundEngine.toggle();
          btnToggleSound.textContent = enabled ? '🔊' : '🔇';
        }
      });
    }

    // Modal Close
    if (modalClose) modalClose.addEventListener('click', () => infoModal.classList.add('hidden'));
    if (victoryClose) victoryClose.addEventListener('click', () => victoryModal.classList.add('hidden'));
    if (victoryActionBtn) {
      victoryActionBtn.addEventListener('click', () => {
        victoryModal.classList.add('hidden');
        advanceToNextContinent();
      });
    }

    window.addEventListener('click', (e) => {
      if (e.target === infoModal) infoModal.classList.add('hidden');
      if (e.target === victoryModal) victoryModal.classList.add('hidden');
      if (e.target === leaderboardModal) leaderboardModal.classList.add('hidden');
    });

    // Pan Map
    worldSvg.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.slot-path, .snap-dot, .placed-country-path')) return;
      state.isPanning = true;
      state.panStart = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointermove', (e) => {
      if (state.isPanning) {
        const dx = e.clientX - state.panStart.x;
        const dy = e.clientY - state.panStart.y;
        state.panStart = { x: e.clientX, y: e.clientY };

        const scaleX = state.viewBox.w / worldSvg.clientWidth;
        const scaleY = state.viewBox.h / worldSvg.clientHeight;
        state.viewBox.x -= dx * scaleX;
        state.viewBox.y -= dy * scaleY;
        applyViewBox();
      }
    });

    window.addEventListener('pointerup', () => {
      state.isPanning = false;
    });

    // Wheel Zoom
    worldSvg.addEventListener('wheel', (e) => {
      e.preventDefault();
      zoomMap(e.deltaY < 0 ? 0.25 : -0.25);
    }, { passive: false });
  }

  // Launch!
  init();
});
