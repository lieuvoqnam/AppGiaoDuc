/**
 * firebase-config.js - Cấu hình Google Firebase Firestore cho Cổng Học Liệu Số
 * Đồng bộ tự động 100% tài khoản, điểm số và thành tích giữa Laptop, iPad, Điện thoại.
 */

// Cấu hình Firebase mặc định của dự án
window.DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyB0Qg9mrbbRZ_FR4nbcNbS5MLq8pXibVg4",
  authDomain: "appgiaoduc-f7b63.firebaseapp.com",
  projectId: "appgiaoduc-f7b63",
  storageBucket: "appgiaoduc-f7b63.firebasestorage.app",
  messagingSenderId: "253467630410",
  appId: "1:253467630410:web:203f975455d3a5cd6e7fb3",
  measurementId: "G-68SFSFD4TG"
};

// Key lưu trữ cấu hình tùy chỉnh trên trình duyệt (giúp cài đặt nhanh từ giao diện web trên iPad/Laptop)
window.FIREBASE_CONFIG_STORAGE_KEY = 'vn_edu_firebase_custom_config_v1';

// Lấy cấu hình Firebase đang hoạt động
window.getActiveFirebaseConfig = function() {
  try {
    const custom = localStorage.getItem(window.FIREBASE_CONFIG_STORAGE_KEY);
    if (custom) {
      const parsed = JSON.parse(custom);
      if (parsed && parsed.apiKey && parsed.projectId && !parsed.apiKey.includes('YOUR_API_KEY')) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Lỗi đọc cấu hình Firebase tùy chỉnh:", e);
  }

  // Fallback về cấu hình mặc định trong file
  if (window.DEFAULT_FIREBASE_CONFIG && 
      window.DEFAULT_FIREBASE_CONFIG.apiKey && 
      !window.DEFAULT_FIREBASE_CONFIG.apiKey.includes('YOUR_API_KEY')) {
    return window.DEFAULT_FIREBASE_CONFIG;
  }

  return null;
};

// Khởi tạo Firebase Firestore
window.firebaseDB = null;

window.initFirebaseApp = function() {
  const config = window.getActiveFirebaseConfig();
  if (!config) {
    console.info("ℹ️ Firebase chưa được cấu hình. Hệ thống đang chạy ở chế độ Cục bộ (Local Storage).");
    return false;
  }

  if (typeof firebase === 'undefined') {
    console.warn("⚠️ Thư viện Firebase SDK chưa được tải.");
    return false;
  }

  try {
    if (!firebase.apps || !firebase.apps.length) {
      firebase.initializeApp(config);
    }
    window.firebaseDB = firebase.firestore();
    console.log("🔥 [Firebase Firestore] Đã kết nối Đám mây thành công! Dự án:", config.projectId);
    
    // Bắn event để thông báo các module khác (như auth.js, giao diện) cập nhật trạng thái
    window.dispatchEvent(new CustomEvent('firebase-connected', { detail: { projectId: config.projectId } }));
    return true;
  } catch (err) {
    console.error("❌ Lỗi khởi tạo Firebase Firestore:", err);
    return false;
  }
};

// Hàm lưu cấu hình mới từ giao diện và kết nối lại
window.saveFirebaseConfig = function(configInput) {
  let configObj = null;

  if (typeof configInput === 'string') {
    // Nếu người dùng dán cả đoạn code JS: const firebaseConfig = { ... }
    try {
      // Tìm khối {...}
      const match = configInput.match(/\{[\s\S]*\}/);
      if (match) {
        // Dùng Function an toàn để parse JS object
        configObj = new Function(`return ${match[0]};`)();
      } else {
        configObj = JSON.parse(configInput);
      }
    } catch (e) {
      throw new Error("Định dạng cấu hình không hợp lệ. Vui lòng dán đoạn mã firebaseConfig từ Firebase Console!");
    }
  } else if (typeof configInput === 'object') {
    configObj = configInput;
  }

  if (!configObj || !configObj.apiKey || !configObj.projectId) {
    throw new Error("Cấu hình thiếu apiKey hoặc projectId hợp lệ!");
  }

  // Lưu vào localStorage
  localStorage.setItem(window.FIREBASE_CONFIG_STORAGE_KEY, JSON.stringify(configObj));

  // Thử khởi tạo lại
  const success = window.initFirebaseApp();
  if (!success) {
    throw new Error("Không thể khởi tạo Firebase với cấu hình vừa nhập. Vui lòng kiểm tra lại thông tin!");
  }

  return configObj;
};

// Hàm xóa cấu hình (quay về LocalStorage)
window.clearFirebaseConfig = function() {
  localStorage.removeItem(window.FIREBASE_CONFIG_STORAGE_KEY);
  window.firebaseDB = null;
  window.dispatchEvent(new CustomEvent('firebase-disconnected'));
  console.log("Đã ngắt kết nối Firebase, quay về chế độ Cục bộ.");
};

// Tự động khởi tạo ngay khi tải xong file này
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.initFirebaseApp());
} else {
  window.initFirebaseApp();
}
