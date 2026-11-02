/**
 * auth.js - Hệ thống Quản lý Tài khoản Học sinh & Đăng nhập
 * Hỗ trợ Đăng ký, Đăng nhập, Lưu tiến độ học tập, Bảng vàng thành tích (Leaderboard).
 * Hoạt động mượt mà trên cả máy tính, điện thoại, Netlify, GitHub Pages và Offline.
 */

class AuthManager {
  constructor() {
    this.STORAGE_KEY_USERS = 'vn_map_puzzle_users_v1';
    this.STORAGE_KEY_CURRENT = 'vn_map_puzzle_current_session';
    this.currentUser = null;
    this.init();
  }

  init() {
    // Tải thông tin tài khoản đang đăng nhập (nếu có)
    const savedSession = localStorage.getItem(this.STORAGE_KEY_CURRENT);
    if (savedSession) {
      try {
        const username = JSON.parse(savedSession).username;
        const user = this.getUser(username);
        if (user) {
          this.currentUser = user;
        } else {
          localStorage.removeItem(this.STORAGE_KEY_CURRENT);
        }
      } catch (e) {
        localStorage.removeItem(this.STORAGE_KEY_CURRENT);
      }
    }
  }

  // Lấy toàn bộ danh sách tài khoản
  getAllUsers() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY_USERS);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  // Lưu danh sách tài khoản
  saveAllUsers(users) {
    localStorage.setItem(this.STORAGE_KEY_USERS, JSON.stringify(users));
  }

  // Tìm một tài khoản theo username
  getUser(username) {
    if (!username) return null;
    const users = this.getAllUsers();
    return users[username.trim().toLowerCase()] || null;
  }

  // Hàm mã hóa mật khẩu SHA-256 an toàn
  async hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + "_vn_map_salt_2026");
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // Đăng ký tài khoản học sinh mới
  async register({ username, fullName, className, avatar, password }) {
    const uName = (username || '').trim().toLowerCase();
    const name = (fullName || '').trim();
    const cls = (className || '').trim();
    const avt = avatar || '🎓';

    if (!uName || uName.length < 3) {
      throw new Error('Tên đăng nhập phải có ít nhất 3 ký tự (viết liền không dấu)!');
    }
    if (!name) {
      throw new Error('Vui lòng nhập họ và tên của học sinh!');
    }
    if (!password || password.length < 4) {
      throw new Error('Mật khẩu phải có ít nhất 4 ký tự!');
    }

    const users = this.getAllUsers();
    if (users[uName]) {
      throw new Error(`Tên đăng nhập "${uName}" đã có người sử dụng. Hãy chọn tên khác!`);
    }

    const passwordHash = await this.hashPassword(password);

    const newUser = {
      username: uName,
      fullName: name,
      className: cls || 'Học sinh',
      avatar: avt,
      passwordHash: passwordHash,
      createdAt: new Date().toISOString(),
      highScore: 0,
      maxStreak: 0,
      totalCompleted: 0,
      gamesPlayed: 0,
      badges: ['🌱 Nhà Thám Hiểm Mới']
    };

    users[uName] = newUser;
    this.saveAllUsers(users);

    // Tự động đăng nhập sau khi tạo tài khoản thành công
    this.currentUser = newUser;
    localStorage.setItem(this.STORAGE_KEY_CURRENT, JSON.stringify({ username: uName }));

    return newUser;
  }

  // Đăng nhập
  async login(username, password) {
    const uName = (username || '').trim().toLowerCase();
    if (!uName || !password) {
      throw new Error('Vui lòng nhập đầy đủ Tên đăng nhập và Mật khẩu!');
    }

    const user = this.getUser(uName);
    if (!user) {
      throw new Error('Tài khoản không tồn tại. Bạn hãy đăng ký tài khoản mới nhé!');
    }

    const inputHash = await this.hashPassword(password);
    if (user.passwordHash !== inputHash) {
      throw new Error('Mật khẩu không chính xác. Vui lòng kiểm tra lại!');
    }

    this.currentUser = user;
    localStorage.setItem(this.STORAGE_KEY_CURRENT, JSON.stringify({ username: uName }));
    return user;
  }

  // Đăng xuất
  logout() {
    this.currentUser = null;
    localStorage.removeItem(this.STORAGE_KEY_CURRENT);
  }

  // Kiểm tra đã đăng nhập chưa
  isLoggedIn() {
    return !!this.currentUser;
  }

  // Cập nhật điểm và thành tích của học sinh hiện tại
  updateProgress(score, streak, isFullCompleted = false) {
    if (!this.currentUser) return;

    const uName = this.currentUser.username;
    const users = this.getAllUsers();
    const user = users[uName];
    if (!user) return;

    user.gamesPlayed = (user.gamesPlayed || 0) + 1;
    if (score > (user.highScore || 0)) {
      user.highScore = score;
    }
    if (streak > (user.maxStreak || 0)) {
      user.maxStreak = streak;
    }
    if (isFullCompleted) {
      user.totalCompleted = (user.totalCompleted || 0) + 1;
    }

    // Cập nhật huy hiệu đạt được
    user.badges = user.badges || ['🌱 Nhà Thám Hiểm Mới'];
    if (user.highScore >= 1000 && !user.badges.includes('⭐ Thợ Ghép Điêu Luyện')) {
      user.badges.push('⭐ Thợ Ghép Điêu Luyện');
    }
    if (user.maxStreak >= 10 && !user.badges.includes('🔥 Chiến Thần Combo')) {
      user.badges.push('🔥 Chiến Thần Combo');
    }
    if (user.totalCompleted >= 1 && !user.badges.includes('👑 Bậc Thầy Bản Đồ Việt Nam')) {
      user.badges.push('👑 Bậc Thầy Bản Đồ Việt Nam');
    }
    if (user.totalCompleted >= 5 && !user.badges.includes('🏆 Đại Sứ Địa Lý')) {
      user.badges.push('🏆 Đại Sứ Địa Lý');
    }

    users[uName] = user;
    this.saveAllUsers(users);
    this.currentUser = user;
  }

  // Lấy bảng vàng thành tích (Leaderboard) sắp xếp theo điểm cao nhất
  getLeaderboard() {
    const users = Object.values(this.getAllUsers());
    users.sort((a, b) => (b.highScore || 0) - (a.highScore || 0));
    return users.slice(0, 10); // Lấy top 10 học sinh
  }
}

window.authManager = new AuthManager();
