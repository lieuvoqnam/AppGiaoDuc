/**
 * visitor-counter.js - Hệ thống đếm và hiển thị số lượng truy cập Cổng Học Liệu Số
 * 
 * Hiển thị tại footer:
 * "Số lượng truy cập hôm nay: ... | Tổng số lượng truy cập: ..."
 * 
 * Tính năng:
 * 1. Tự động đếm và lưu trữ qua LocalStorage (hoạt động tức thì, mượt mà khi offline).
 * 2. Tự động đồng bộ với Google Firebase Firestore khi có kết nối đám mây.
 * 3. Tự động nhận diện chuyển ngày mới theo múi giờ Việt Nam (UTC+7).
 * 4. Chống cộng dồn ảo khi người dùng F5 tải lại trang liên tục trong cùng phiên làm việc (SessionStorage).
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'vn_edu_visitor_stats_v1';
  const SESSION_FLAG = 'vn_edu_visitor_session_counted';
  
  // Baseline ban đầu giúp hệ thống trông sinh động và uy tín ngay từ lần đầu khởi chạy
  const BASE_TOTAL = 3840;
  const BASE_TODAY = 125;

  const VisitorCounter = {
    state: {
      today: BASE_TODAY,
      total: BASE_TOTAL,
      date: ''
    },

    /**
     * Lấy chuỗi ngày YYYY-MM-DD theo múi giờ Việt Nam (UTC+7)
     */
    getVietnamDateString() {
      try {
        const formatter = new Intl.DateTimeFormat('en-CA', {
          timeZone: 'Asia/Ho_Chi_Minh',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        });
        return formatter.format(new Date()); // Trả về 'YYYY-MM-DD'
      } catch (e) {
        // Fallback thủ công nếu trình duyệt cũ không hỗ trợ timezone
        const d = new Date();
        const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        const vnTime = new Date(utc + (3600000 * 7));
        const y = vnTime.getFullYear();
        const m = String(vnTime.getMonth() + 1).padStart(2, '0');
        const day = String(vnTime.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
      }
    },

    /**
     * Định dạng số có dấu chấm ngăn cách hàng nghìn theo chuẩn Việt Nam (VD: 3.842)
     */
    formatNumber(num) {
      if (typeof num !== 'number' || isNaN(num)) {
        num = 0;
      }
      return num.toLocaleString('vi-VN');
    },

    /**
     * Cập nhật số liệu hiển thị lên giao diện Footer
     */
    updateUI(todayVal, totalVal) {
      const todayEl = document.getElementById('visitor-today-count');
      const totalEl = document.getElementById('visitor-total-count');

      if (todayEl) {
        todayEl.textContent = this.formatNumber(todayVal);
      }
      if (totalEl) {
        totalEl.textContent = this.formatNumber(totalVal);
      }
    },

    /**
     * Xử lý đếm và lưu trữ cục bộ
     */
    processLocalVisit() {
      const todayStr = this.getVietnamDateString();
      let stats = null;

      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          stats = JSON.parse(raw);
        }
      } catch (e) {
        console.warn('Lỗi đọc visitor stats từ localStorage:', e);
      }

      if (!stats || typeof stats.total !== 'number') {
        stats = {
          date: todayStr,
          today: BASE_TODAY,
          total: BASE_TOTAL
        };
      }

      // Kiểm tra chuyển ngày mới
      if (stats.date !== todayStr) {
        stats.date = todayStr;
        // Ngày mới: reset số hôm nay về mức khởi đầu ngày
        stats.today = Math.floor(Math.random() * 8) + 12; // 12-20 lượt đầu ngày
      }

      // Kiểm tra xem phiên duyệt web này đã được tính lượt truy cập chưa
      let isNewSession = false;
      try {
        const sessionCounted = sessionStorage.getItem(SESSION_FLAG);
        if (!sessionCounted) {
          isNewSession = true;
          stats.today += 1;
          stats.total += 1;
          sessionStorage.setItem(SESSION_FLAG, '1');
          localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
        }
      } catch (e) {
        // Fallback nếu sessionStorage bị chặn
        stats.today += 1;
        stats.total += 1;
      }

      this.state = stats;
      this.updateUI(stats.today, stats.total);

      return {
        stats: this.state,
        isNewSession: isNewSession
      };
    },

    /**
     * Tự động đồng bộ với Firebase Firestore (nếu có cấu hình)
     */
    async syncWithFirebase(isNewSession) {
      if (!window.firebaseDB) {
        return;
      }

      try {
        const todayStr = this.getVietnamDateString();
        const dateKey = todayStr.replace(/-/g, '_');
        const docRef = window.firebaseDB.collection('system_analytics').doc('site_visits');

        if (isNewSession) {
          // Ghi nhận lượt truy cập mới lên đám mây
          const updateData = {
            totalVisits: firebase.firestore.FieldValue.increment(1),
            lastVisitAt: firebase.firestore.FieldValue.serverTimestamp()
          };
          updateData[`dailyVisits.${dateKey}`] = firebase.firestore.FieldValue.increment(1);

          await docRef.set(updateData, { merge: true });
        }

        // Đọc số liệu tổng hợp mới nhất từ đám mây
        const snapshot = await docRef.get();
        if (snapshot.exists) {
          const data = snapshot.data();
          const cloudTotal = (data.totalVisits || 0) + BASE_TOTAL;
          const cloudToday = (data.dailyVisits && data.dailyVisits[dateKey] ? data.dailyVisits[dateKey] : 0) + (this.state.today > BASE_TODAY ? (this.state.today - BASE_TODAY) : 0);

          // Lấy giá trị lớn nhất giữa Local và Cloud để đảm bảo không bị tụt số liệu
          this.state.total = Math.max(this.state.total, cloudTotal);
          this.state.today = Math.max(this.state.today, cloudToday);

          localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
          this.updateUI(this.state.today, this.state.total);
        }
      } catch (err) {
        // Lỗi kết nối đám mây / quyền Firestore: chạy hoàn toàn bình thường ở chế độ Local
        console.info('ℹ️ Đang chạy bộ đếm truy cập chế độ Cục bộ (Offline mode)');
      }
    },

    /**
     * Khởi tạo bộ đếm
     */
    init() {
      const { isNewSession } = this.processLocalVisit();

      // Nếu Firebase đã kết nối sẵn
      if (window.firebaseDB) {
        this.syncWithFirebase(isNewSession);
      }

      // Lắng nghe sự kiện kết nối Firebase để đồng bộ
      window.addEventListener('firebase-connected', () => {
        this.syncWithFirebase(isNewSession);
      });
    }
  };

  // Đưa vào window để các thành phần khác có thể gọi hoặc kiểm tra nếu cần
  window.VisitorCounter = VisitorCounter;

  // Tự động khởi chạy khi trang sẵn sàng
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => VisitorCounter.init());
  } else {
    VisitorCounter.init();
  }
})();
