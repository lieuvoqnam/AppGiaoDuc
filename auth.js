/**
 * auth.js - Hệ thống Quản lý Tài khoản Học sinh & Đăng nhập
 * Hỗ trợ:
 * 1. Đăng ký, Đăng nhập, Bảng vàng thành tích (Leaderboard).
 * 2. Tự động đồng bộ 100% qua Đám Mây Google Firebase Firestore (Laptop <-> iPad <-> Điện thoại).
 * 3. Tự động chuyển đổi mượt mà giữa chế độ Đám Mây và Cục bộ (Offline / LocalStorage).
 */

class AuthManager {
  constructor() {
    this.STORAGE_KEY_USERS = 'vn_map_puzzle_users_v1';
    this.STORAGE_KEY_CURRENT = 'vn_map_puzzle_current_session';
    this.ADMIN_PIN = '2026'; // Mã PIN của Giáo Viên / Phụ Huynh để hỗ trợ học sinh đặt lại mật khẩu
    this.currentUser = null;
    this.init();
  }

  init() {
    // Tải thông tin tài khoản đang đăng nhập từ phiên làm việc trước
    const savedSession = localStorage.getItem(this.STORAGE_KEY_CURRENT);
    if (savedSession) {
      try {
        const username = JSON.parse(savedSession).username;
        const user = this.getUser(username);
        if (user) {
          this.currentUser = user;
          // Nếu có đám mây, âm thầm đồng bộ lại dữ liệu mới nhất từ đám mây về
          this.refreshCurrentUserFromCloud(username);
        } else {
          localStorage.removeItem(this.STORAGE_KEY_CURRENT);
        }
      } catch (e) {
        localStorage.removeItem(this.STORAGE_KEY_CURRENT);
      }
    }

    // Lắng nghe sự kiện kết nối Firebase để tự động đồng bộ ngầm 100% (không popup)
    window.addEventListener('firebase-connected', () => {
      console.log("☁️ Đám Mây Firebase đã sẵn sàng! Đang tự động đồng bộ tài khoản ngầm...");
      this.silentBackgroundSync();
      if (this.currentUser) {
        this.refreshCurrentUserFromCloud(this.currentUser.username);
      }
    });

    // Thử đồng bộ ngầm ngay nếu Firebase đã khởi tạo sẵn
    if (this.isCloudActive()) {
      this.silentBackgroundSync();
    }
  }

  // Tự động đồng bộ ngầm 100%: đưa mọi tài khoản cục bộ lên Đám Mây mà không cần người dùng thao tác
  async silentBackgroundSync() {
    if (!this.isCloudActive()) return;
    try {
      const localUsers = this.getAllUsers();
      const usernames = Object.keys(localUsers);
      if (usernames.length > 0) {
        const batch = window.firebaseDB.batch();
        let count = 0;
        for (const uName of usernames) {
          const userDocRef = window.firebaseDB.collection('users').doc(uName);
          batch.set(userDocRef, localUsers[uName], { merge: true });
          count++;
        }
        await batch.commit();
        if (count > 0) {
          console.log(`☁️ [Tự động] Đã đồng bộ ngầm ${count} tài khoản lên Đám Mây.`);
        }
      }
    } catch (err) {
      console.warn("Đồng bộ ngầm Firebase:", err);
    }
  }

  // Kiểm tra xem Đám mây Firebase có đang hoạt động không
  isCloudActive() {
    return !!(window.firebaseDB && typeof window.firebaseDB.collection === 'function');
  }

  // Lấy toàn bộ danh sách tài khoản từ LocalStorage
  getAllUsers() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY_USERS);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  // Lưu danh sách tài khoản vào LocalStorage
  saveAllUsers(users) {
    localStorage.setItem(this.STORAGE_KEY_USERS, JSON.stringify(users));
  }

  // Tìm một tài khoản theo username trong bộ nhớ cục bộ
  getUser(username) {
    if (!username) return null;
    const users = this.getAllUsers();
    return users[username.trim().toLowerCase()] || null;
  }

  // Cập nhật âm thầm thông tin người dùng từ Firebase về máy
  async refreshCurrentUserFromCloud(username) {
    if (!this.isCloudActive() || !username) return;
    try {
      const docRef = window.firebaseDB.collection('users').doc(username.trim().toLowerCase());
      const doc = await docRef.get();
      if (doc.exists) {
        const cloudUser = doc.data();
        const users = this.getAllUsers();
        users[cloudUser.username] = cloudUser;
        this.saveAllUsers(users);
        this.currentUser = cloudUser;
        console.log("☁️ Đã cập nhật dữ liệu mới nhất từ Đám mây cho học sinh:", cloudUser.fullName);
      }
    } catch (err) {
      console.warn("Không thể tải dữ liệu đám mây (đang dùng cache):", err);
    }
  }

  // Hàm mã hóa mật khẩu SHA-256 an toàn
  async hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + "_vn_map_salt_2026");
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // Đăng ký tài khoản học sinh mới (Tự động lưu lên Cloud Firestore & LocalStorage)
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

    // 1. Kiểm tra tài khoản trên Đám mây Firebase trước (nếu online)
    if (this.isCloudActive()) {
      try {
        const docRef = window.firebaseDB.collection('users').doc(uName);
        const doc = await docRef.get();
        if (doc.exists) {
          throw new Error(`Tên đăng nhập "${uName}" đã được sử dụng trên Đám Mây. Bạn hãy chọn tên khác nhé!`);
        }
      } catch (err) {
        if (err.message && err.message.includes('Tên đăng nhập')) {
          throw err;
        }
        console.warn("Lỗi kiểm tra trùng lặp trên Firebase, tiếp tục kiểm tra cục bộ:", err);
      }
    }

    // 2. Kiểm tra tài khoản trong bộ nhớ cục bộ
    const users = this.getAllUsers();
    if (users[uName]) {
      throw new Error(`Tên đăng nhập "${uName}" đã có người sử dụng. Hãy chọn tên khác!`);
    }

    const passwordHash = await this.hashPassword(password);
    const nowISO = new Date().toISOString();

    const newUser = {
      username: uName,
      fullName: name,
      className: cls || 'Học sinh',
      avatar: avt,
      password: (password || '').trim(), // Mật khẩu dạng chữ rõ ràng để Thầy Cô / Phụ Huynh dễ tra cứu trên Firebase
      passwordHash: passwordHash,
      createdAt: nowISO,
      updatedAt: nowISO,
      highScore: 0,
      maxStreak: 0,
      totalCompleted: 0,
      gamesPlayed: 0,
      badges: ['🌱 Nhà Thám Hiểm Mới']
    };

    // 3. Đẩy lên Firebase Firestore
    if (this.isCloudActive()) {
      try {
        await window.firebaseDB.collection('users').doc(uName).set(newUser);
        console.log("☁️ [Firebase] Đã lưu tài khoản mới lên Đám mây:", uName);
      } catch (err) {
        console.error("Lỗi khi lưu lên Firebase:", err);
        // Vẫn lưu vào máy cục bộ nếu lỗi mạng
      }
    }

    // 4. Lưu vào bộ nhớ cục bộ
    users[uName] = newUser;
    this.saveAllUsers(users);

    // 5. Đăng nhập ngay
    this.currentUser = newUser;
    localStorage.setItem(this.STORAGE_KEY_CURRENT, JSON.stringify({ username: uName }));

    return newUser;
  }

  // Đăng nhập (Hỗ trợ tìm tài khoản trên Cloud Firestore hoặc LocalStorage)
  async login(username, password) {
    const uName = (username || '').trim().toLowerCase();
    if (!uName || !password) {
      throw new Error('Vui lòng nhập đầy đủ Tên đăng nhập và Mật khẩu!');
    }

    let user = null;

    // 1. Thử tìm trên Đám mây Firebase trước (để lấy dữ liệu mới nhất từ thiết bị khác)
    if (this.isCloudActive()) {
      try {
        const docRef = window.firebaseDB.collection('users').doc(uName);
        const doc = await docRef.get();
        if (doc.exists) {
          user = doc.data();
          console.log("☁️ [Firebase] Tìm thấy tài khoản trên Đám mây:", uName);
          // Cập nhật lại vào bộ nhớ cục bộ trên iPad/Laptop
          const localUsers = this.getAllUsers();
          localUsers[uName] = user;
          this.saveAllUsers(localUsers);
        }
      } catch (err) {
        console.warn("Không thể truy vấn Firebase (đang thử bộ nhớ máy):", err);
      }
    }

    // 2. Nếu không tìm thấy trên cloud hoặc offline, kiểm tra bộ nhớ máy
    if (!user) {
      user = this.getUser(uName);
    }

    if (!user) {
      throw new Error('Tài khoản không tồn tại. Nếu bạn vừa tạo trên Laptop, hãy đảm bảo cả hai máy đều đã bật Đám Mây!');
    }

    // 3. Kiểm tra mật khẩu
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

  // Cập nhật điểm và thành tích của học sinh hiện tại (Đồng bộ real-time lên Cloud)
  updateProgress(score, streak, isFullCompleted = false) {
    if (!this.currentUser) return;

    const uName = this.currentUser.username;
    const users = this.getAllUsers();
    const user = users[uName] || this.currentUser;

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

    user.updatedAt = new Date().toISOString();

    // Lưu vào máy cục bộ
    users[uName] = user;
    this.saveAllUsers(users);
    this.currentUser = user;

    // Tự động đẩy lên Firebase Firestore
    if (this.isCloudActive()) {
      window.firebaseDB.collection('users').doc(uName).set(user, { merge: true })
        .then(() => console.log("☁️ [Firebase] Đã đồng bộ điểm số lên Đám mây!"))
        .catch(err => console.warn("Lỗi lưu điểm lên Firebase:", err));
    }
  }

  // Lấy bảng vàng thành tích (Leaderboard)
  getLeaderboard() {
    const users = Object.values(this.getAllUsers());
    users.sort((a, b) => (b.highScore || 0) - (a.highScore || 0));
    return users.slice(0, 10);
  }

  // Lấy bảng vàng trực tiếp từ Firebase Firestore (nếu có mạng)
  async fetchCloudLeaderboard() {
    if (!this.isCloudActive()) {
      return this.getLeaderboard();
    }
    try {
      const snapshot = await window.firebaseDB.collection('users')
        .orderBy('highScore', 'desc')
        .limit(15)
        .get();

      const cloudUsers = [];
      const localUsers = this.getAllUsers();

      snapshot.forEach(doc => {
        const u = doc.data();
        cloudUsers.push(u);
        localUsers[u.username] = u;
      });

      // Lưu lại vào bộ nhớ cục bộ để dùng offline
      this.saveAllUsers(localUsers);
      return cloudUsers;
    } catch (err) {
      console.warn("Không thể tải Leaderboard từ Firebase, dùng dữ liệu nội bộ:", err);
      return this.getLeaderboard();
    }
  }

  // Đẩy toàn bộ tài khoản cục bộ hiện có lên Đám mây (Đồng bộ 1 chạm)
  async uploadAllLocalUsersToCloud() {
    if (!this.isCloudActive()) {
      throw new Error("Đám mây Firebase chưa được kết nối!");
    }
    const localUsers = this.getAllUsers();
    const usernames = Object.keys(localUsers);
    if (usernames.length === 0) {
      return 0;
    }

    let count = 0;
    const batch = window.firebaseDB.batch();
    for (const uName of usernames) {
      const userDocRef = window.firebaseDB.collection('users').doc(uName);
      batch.set(userDocRef, localUsers[uName], { merge: true });
      count++;
    }
    await batch.commit();
    console.log(`☁️ Đã đẩy thành công ${count} tài khoản lên Firebase Firestore!`);
    return count;
  }

  // Tra cứu Tên Đăng Nhập bằng Họ và Tên + Lớp của học sinh
  async findUserByName(fullName, className = '') {
    const targetName = (fullName || '').trim().toLowerCase();
    const targetClass = (className || '').trim().toLowerCase();
    if (!targetName || targetName.length < 2) {
      throw new Error('Vui lòng nhập họ và tên của học sinh (tối thiểu 2 ký tự)!');
    }

    const matches = [];

    // 1. Quét trên Đám mây Firebase
    if (this.isCloudActive()) {
      try {
        const snap = await window.firebaseDB.collection('users').get();
        snap.forEach(doc => {
          const u = doc.data();
          const uFullName = (u.fullName || '').toLowerCase();
          const uClass = (u.className || '').toLowerCase();
          if (uFullName.includes(targetName)) {
            if (!targetClass || uClass.includes(targetClass)) {
              matches.push({
                username: u.username,
                fullName: u.fullName,
                className: u.className,
                avatar: u.avatar || '🎓'
              });
            }
          }
        });
      } catch (err) {
        console.warn("Lỗi tra cứu trên Firebase:", err);
      }
    }

    // 2. Quét bộ nhớ cục bộ (nếu chưa có kết quả từ cloud)
    if (matches.length === 0) {
      const localUsers = this.getAllUsers();
      for (const uName of Object.keys(localUsers)) {
        const u = localUsers[uName];
        const uFullName = (u.fullName || '').toLowerCase();
        const uClass = (u.className || '').toLowerCase();
        if (uFullName.includes(targetName)) {
          if (!targetClass || uClass.includes(targetClass)) {
            matches.push({
              username: u.username,
              fullName: u.fullName,
              className: u.className,
              avatar: u.avatar || '🎓'
            });
          }
        }
      }
    }

    return matches;
  }

  // Đặt lại Mật Khẩu mới (Dành cho Giáo Viên / Phụ Huynh dùng Mã PIN)
  async resetPassword({ username, adminPin, newPassword }) {
    const uName = (username || '').trim().toLowerCase();
    const pin = (adminPin || '').trim();
    const newPass = (newPassword || '').trim();

    if (!uName) {
      throw new Error('Vui lòng nhập Tên đăng nhập của học sinh cần đặt lại mật khẩu!');
    }
    if (pin !== this.ADMIN_PIN) {
      throw new Error('Mã PIN Giáo viên / Phụ huynh không chính xác! (Mã mặc định là: 2026)');
    }
    if (!newPass || newPass.length < 4) {
      throw new Error('Mật khẩu mới phải có ít nhất 4 ký tự!');
    }

    let user = null;

    // Tìm tài khoản trên Đám mây
    if (this.isCloudActive()) {
      try {
        const docRef = window.firebaseDB.collection('users').doc(uName);
        const doc = await docRef.get();
        if (doc.exists) {
          user = doc.data();
        }
      } catch (e) {
        console.warn("Lỗi tìm kiếm Firebase:", e);
      }
    }

    // Nếu không có trên cloud, tìm trong local
    if (!user) {
      user = this.getUser(uName);
    }

    if (!user) {
      throw new Error(`Không tìm thấy tài khoản có tên đăng nhập "${uName}"!`);
    }

    // Cập nhật mật khẩu mới
    const passwordHash = await this.hashPassword(newPass);
    user.password = newPass; // Cập nhật mật khẩu chữ thường
    user.passwordHash = passwordHash;
    user.updatedAt = new Date().toISOString();

    // Lưu lên Firebase Firestore
    if (this.isCloudActive()) {
      try {
        await window.firebaseDB.collection('users').doc(uName).update({
          password: newPass,
          passwordHash: passwordHash,
          updatedAt: user.updatedAt
        });
        console.log("☁️ [Firebase] Đã đặt lại mật khẩu thành công cho học sinh:", uName);
      } catch (err) {
        console.warn("Lỗi lưu mật khẩu mới lên Firebase:", err);
      }
    }

    // Lưu vào bộ nhớ cục bộ
    const localUsers = this.getAllUsers();
    localUsers[uName] = user;
    this.saveAllUsers(localUsers);

    return user;
  }
}

window.authManager = new AuthManager();
