# 🎓 Cổng Học Liệu Số Tương Tác Lớp 1 - 12 & Trò Chơi Bản Đồ Việt Nam

Cổng thông tin và học liệu số tương tác toàn diện dành cho học sinh từ **Lớp 1 đến Lớp 12** theo Chương trình Giáo dục Phổ thông (GDPT 2018). Trong đó, ứng dụng **"Em Yêu Bản Đồ Việt Nam"** là học liệu số cốt lõi trực thuộc bộ môn **Lịch sử và Địa lý**.

---

## 🏛️ Kiến Trúc Hệ Thống

```
├── index.html              # 🏠 Trang chủ Cổng Học Liệu Số Tương Tác (Lớp 1 - 12)
├── portal.css              # Giao diện Cổng Học Liệu Số (Responsive, Modern)
├── portal-data.js          # Dữ liệu phân phối chương trình các môn học từ Lớp 1 đến 12
├── portal.js               # Logic điều khiển Cổng, chuyển lớp, lọc môn & trình diễn ứng dụng
│
├── game.html               # 🗺️ Ứng dụng Game Ghép Hình Bản Đồ Việt Nam 34/63 Tỉnh Thành
├── style.css               # Giao diện Game Ghép Hình Bản Đồ
├── app.js                  # Cơ chế kéo thả (drag & drop), hút dính (snap), tính điểm, đố vui
├── auth.js                 # Hệ thống Đăng ký, Đăng nhập học sinh, Lưu tiến độ & Bảng Vàng
│
├── provinces-34-data.js    # Dữ liệu 34 Tỉnh Thành Mới (5 Vùng Địa Lý)
├── provinces-data.js       # Dữ liệu 63 Tỉnh Thành Cũ
├── vietnam.svg             # Bản đồ Vector SVG tương tác
└── server.py               # Máy chủ Web chia sẻ qua mạng LAN / Wifi lớp học
```

---

## 📚 Phân Bổ Môn Học Theo Cấp (Lớp 1 - 12)

Cổng học tập chia thành 3 Cấp học và 12 Khối lớp theo chuẩn Bộ GD&ĐT:

### 1. 🎒 Cấp Tiểu Học (Lớp 1 - Lớp 5)
- **Lớp 1 - 3**: Tiếng Việt, Toán, Tự nhiên và Xã hội (TNXH), Đạo đức, Âm nhạc, Mỹ thuật, Hoạt động trải nghiệm.
- **Lớp 4 - 5**: Môn **Lịch sử và Địa lý** chính thức được đưa vào chương trình giảng dạy.
  - 👉 **Ứng dụng tích hợp**: Trò chơi *"Em Yêu Bản Đồ Việt Nam"* - Khám phá các tỉnh thành, đặc sản, danh lam thắng cảnh và chủ quyền biển đảo.

### 2. 🏫 Cấp Trung Học Cơ Sở (Lớp 6 - Lớp 9)
- Ngữ văn, Toán, Ngoại ngữ 1, Khoa học Tự nhiên (KHTN), Giáo dục công dân, Tin học, Công nghệ...
- **Môn Lịch sử và Địa lý**: Dạy tích hợp phân môn Lịch sử và Địa lý tự nhiên, dân cư, kinh tế - xã hội các vùng miền.
  - 👉 **Ứng dụng tích hợp**: Bản đồ 34 Tỉnh Thành Mới, đối chiếu 63 tỉnh cũ, tìm hiểu cơ cấu 5 vùng kinh tế - địa lý.

### 3. 🏛️ Cấp Trung Học Phổ Thông (Lớp 10 - Lớp 12)
- Các môn bắt buộc và môn tự chọn theo định hướng nghề nghiệp.
- **Môn Địa lý** & **Môn Lịch sử**: Đi sâu vào Địa lý kinh tế - xã hội Việt Nam, phân vùng lãnh thổ kinh tế, chủ quyền biển đảo và an ninh quốc gia.
  - 👉 **Ứng dụng tích hợp**: Rèn luyện kỹ năng đọc bản đồ (Atlat số), xác định vị trí chiến lược của các trung tâm kinh tế biển, cụm đô thị mới.

---

## 🗺️ Vị Trí Của Ứng Dụng Trong Môn Lịch Sử & Địa Lý

Khi học sinh chọn bất kỳ khối lớp nào từ **Lớp 4 đến Lớp 12** và bấm vào môn **Lịch sử và Địa lý** (hoặc môn **Địa lý** ở THPT), Cổng sẽ tự động làm nổi bật thẻ bài học tương tác:

- **Tên ứng dụng**: *Em Yêu Bản Đồ Việt Nam*
- **Hình thức**: Trò chơi ghép hình 34 Tỉnh Thành (kèm tùy chọn 63 Tỉnh Thành)
- **Yêu cầu cần đạt**: Nhận biết vị trí địa lý, danh lam thắng cảnh, phân biệt 5 vùng địa lý tự nhiên và khẳng định chủ quyền Hoàng Sa & Trường Sa.
- **Nút điều hướng**: Bấm `[Vào Học & Chơi Ngay ➔]` để chuyển trực tiếp sang `game.html`.
- **Nút quay lại**: Trên thanh công cụ của game có nút `[🏠 Cổng Học Tập]` để quay lại trang chủ bất cứ lúc nào.

---

## 🌟 34 Đơn Vị Hành Chính Cấp Tỉnh Mới & 5 Vùng Địa Lý

1. **Trung du & Miền núi phía Bắc (9 tỉnh)**: Cao Bằng, Tuyên Quang (+Hà Giang), Lào Cai (+Yên Bái), Thái Nguyên (+Bắc Kạn), Lạng Sơn, Phú Thọ (+Vĩnh Phúc +Hòa Bình), Điện Biên, Lai Châu, Sơn La.
2. **Đồng bằng Sông Hồng (6 tỉnh/thành)**: Hà Nội, Hải Phòng (+Hải Dương), Quảng Ninh, Bắc Ninh (+Bắc Giang), Hưng Yên (+Thái Bình), Ninh Bình (+Nam Định +Hà Nam).
3. **Bắc Trung Bộ, Duyên hải Miền Trung & Tây Nguyên (11 tỉnh/thành)**: Thanh Hóa, Nghệ An, Hà Tĩnh, Quảng Trị (+Quảng Bình), TP Huế, TP Đà Nẵng (+Quảng Nam +Hoàng Sa), Quảng Ngãi (+Kon Tum), Khánh Hòa (+Ninh Thuận +Trường Sa), Gia Lai (+Bình Định), Đắk Lắk (+Phú Yên), Lâm Đồng (+Đắk Nông +Bình Thuận).
4. **Đông Nam Bộ (3 tỉnh/thành)**: TP Hồ Chí Minh (+Bình Dương +BR-VT), Đồng Nai (+Bình Phước), Tây Ninh (+Long An).
5. **Đồng bằng Sông Cửu Long (5 tỉnh/thành)**: Cần Thơ (+Hậu Giang +Sóc Trăng), Vĩnh Long (+Bến Tre +Trà Vinh), Đồng Tháp (+Tiền Giang), An Giang (+Kiên Giang), Cà Mau (+Bạc Liêu).

---

## 🔐 Đăng Ký, Đăng Nhập & Bảng Vàng (SSO Đồng Bộ)

- **Đồng bộ xuyên suốt (Single Sign-On)**: Tài khoản đăng nhập ở trang Cổng (`index.html`) sẽ tự động được sử dụng trong Game (`game.html`) và ngược lại.
- **Hồ sơ học sinh**: Họ tên, Lớp & Trường, Avatar ngộ nghĩnh (🎓, 🦁, 🐼, 🚀, 🌟...), Mật khẩu mã hóa SHA-256.
- **Bảng Vàng Thi Đua (Leaderboard)**: Tự động ghi nhận Điểm số cao nhất, Chuỗi combo và Danh hiệu học tập để vinh danh Top 10 học sinh toàn trường.

---

## 🚀 Hướng Dẫn Sử Dụng & Chia Sẻ

### 1. Mở trực tiếp trên máy tính
Nhấp đúp chuột vào file [`index.html`](index.html) để mở trên trình duyệt bất kỳ.

### 2. Chạy Server cục bộ & Chia sẻ qua Wifi lớp học
Mở terminal và gõ:
```bash
python server.py
```
- Mở trên máy giáo viên: `http://localhost:8080/index.html`
- Học sinh kết nối cùng mạng Wifi chỉ cần gõ địa chỉ IP hiển thị trên màn hình:
  `http://192.168.x.x:8080/index.html` (trên iPad, điện thoại, máy tính học sinh).

### 3. Đưa lên Internet (Miễn phí)
- Kéo thả toàn bộ thư mục dự án này lên **Netlify Drop** (https://app.netlify.com/drop) hoặc đẩy lên **GitHub Pages** để nhận link web trực tuyến chia sẻ toàn trường.
