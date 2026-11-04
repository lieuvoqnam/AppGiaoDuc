/**
 * math-2-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Toán Lớp 2
 * Chuẩn Chương trình Giáo dục phổ thông (GDPT) 2018
 * (Kết nối tri thức với cuộc sống, Cánh diều, Chân trời sáng tạo)
 */

window.MATH2_DATA = {
  topics: [
    {
      id: "so_va_phep_tinh_1000",
      name: "Số & Phép Tính Trong Phạm Vi 1000",
      icon: "🔢",
      desc: "Đọc viết số có 3 chữ số, hàng trăm - chục - đơn vị, cộng trừ có nhớ trong phạm vi 100 và 1000.",
      theory: {
        highlights: [
          {
            icon: "🧮",
            title: "Cấu tạo số có 3 chữ số",
            content: "• Số có 3 chữ số gồm các hàng: <strong>Trăm</strong>, <strong>Chục</strong> và <strong>Đơn vị</strong>.<br/>• Ví dụ: Số <strong>478</strong> gồm 4 trăm, 7 chục và 8 đơn vị: <code>478 = 400 + 70 + 8</code>.<br/>• Số tròn trăm: 100, 200, 300, ..., 900, 1000 (Một nghìn)."
          },
          {
            icon: "⚖️",
            title: "So sánh số có 3 chữ số",
            content: "• So sánh từ hàng cao nhất (hàng trăm): Số nào có chữ số hàng trăm lớn hơn thì số đó lớn hơn.<br/>• Nếu hàng trăm bằng nhau, so sánh tiếp chữ số hàng chục.<br/>• Nếu hàng chục bằng nhau, so sánh tiếp chữ số hàng đơn vị.<br/>• Ví dụ: <code>542 > 499</code> (vì 5 trăm > 4 trăm); <code>635 < 671</code> (vì 3 chục < 7 chục)."
          },
          {
            icon: "➕",
            title: "Phép cộng có nhớ",
            content: "• Đặt tính thẳng cột: đơn vị thẳng đơn vị, chục thẳng chục, trăm thẳng trăm.<br/>• Cộng lần lượt từ phải sang trái.<br/>• Nếu tổng ở hàng đơn vị từ 10 trở lên, ta viết chữ số hàng đơn vị và <em>nhớ 1 sang hàng chục</em>.<br/>• Ví dụ: <code>47 + 28 = 75</code> (7 + 8 = 15, viết 5 nhớ 1; 4 + 2 = 6, thêm 1 bằng 7)."
          },
          {
            icon: "➖",
            title: "Phép trừ có nhớ",
            content: "• Trừ lần lượt từ phải sang trái.<br/>• Nếu chữ số hàng đơn vị ở số bị trừ bé hơn số trừ, ta <em>mượn 1 chục</em> ở hàng chục để trừ, rồi nhớ 1 để trả vào hàng chục của số trừ.<br/>• Ví dụ: <code>62 - 37 = 25</code> (2 không trừ được 7, lấy 12 - 7 = 5, viết 5 nhớ 1; 3 thêm 1 là 4; 6 - 4 = 2)."
          }
        ]
      },
      questions: [
        {
          id: "m2_1_1",
          level: 1,
          question: "Số gồm <strong>5 trăm, 0 chục và 7 đơn vị</strong> được viết là:",
          options: ["507", "570", "705", "57"],
          correct: 0,
          explanation: "Số có 5 trăm, 0 chục, 7 đơn vị được viết thành 507, đọc là 'năm trăm linh bảy'."
        },
        {
          id: "m2_1_2",
          level: 1,
          question: "Số liền sau của số <strong>399</strong> là số nào?",
          options: ["398", "400", "401", "390"],
          correct: 1,
          explanation: "Muốn tìm số liền sau của một số, ta lấy số đó cộng thêm 1: 399 + 1 = 400."
        },
        {
          id: "m2_1_3",
          level: 2,
          question: "Kết quả của phép tính <strong>48 + 27</strong> là:",
          options: ["65", "75", "71", "85"],
          correct: 1,
          explanation: "8 + 7 = 15, viết 5 nhớ 1; 4 + 2 = 6, thêm 1 bằng 7. Vậy 48 + 27 = 75."
        },
        {
          id: "m2_1_4",
          level: 2,
          question: "Tìm <em>x</em>, biết: <strong><em>x</em> - 35 = 48</strong>",
          options: ["x = 13", "x = 73", "x = 83", "x = 84"],
          correct: 2,
          explanation: "Trong phép trừ, x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ: x = 48 + 35 = 83."
        },
        {
          id: "m2_1_5",
          level: 3,
          question: "Điền dấu thích hợp vào chỗ chấm: <strong>600 + 40 + 5 ... 654</strong>",
          options: ["<", ">", "=", "Không so sánh được"],
          correct: 0,
          explanation: "Ta có: 600 + 40 + 5 = 645. So sánh 645 và 654: hàng trăm đều là 6, hàng chục có 4 < 5, nên 645 < 654."
        },
        {
          id: "m2_1_6",
          level: 3,
          question: "Một cửa hàng buổi sáng bán được <strong>145 kg</strong> gạo, buổi chiều bán được nhiều hơn buổi sáng <strong>38 kg</strong> gạo. Hỏi buổi chiều cửa hàng bán được bao nhiêu ki-lô-gam gạo?",
          options: ["173 kg", "183 kg", "107 kg", "193 kg"],
          correct: 1,
          explanation: "Buổi chiều cửa hàng bán được: 145 + 38 = 183 (kg gạo)."
        },
        {
          id: "m2_1_7",
          level: 4,
          question: "Cho 3 chữ số: <strong>2, 5, 8</strong>. Có thể lập được bao nhiêu số có 3 chữ số khác nhau từ 3 chữ số đã cho?",
          options: ["4 số", "6 số", "8 số", "9 số"],
          correct: 1,
          explanation: "Các số có 3 chữ số khác nhau lập từ {2, 5, 8} là: 258, 285, 528, 582, 825, 852. Tổng cộng có 6 số."
        },
        {
          id: "m2_1_8",
          level: 4,
          question: "Hiệu của số lớn nhất có ba chữ số và số bé nhất có ba chữ số khác nhau là:",
          options: ["897", "899", "890", "900"],
          correct: 0,
          explanation: "Số lớn nhất có ba chữ số là 999. Số bé nhất có ba chữ số khác nhau là 102. Hiệu là: 999 - 102 = 897."
        }
      ]
    },
    {
      id: "phep_nhan_phep_chia",
      name: "Bảng Nhân & Chia 2, 5",
      icon: "✖️",
      desc: "Làm quen với phép nhân, bảng nhân 2 và 5, phép chia, bảng chia 2 và 5, thành phần phép tính.",
      theory: {
        highlights: [
          {
            icon: "✖️",
            title: "Ý nghĩa của Phép Nhân",
            content: "• Phép nhân là cách viết gọn của tổng nhiều số hạng bằng nhau.<br/>• Ví dụ: <code>2 + 2 + 2 + 2 = 2 x 4 = 8</code> (2 được lấy 4 lần).<br/>• Thành phần: <strong>Thừa số x Thừa số = Tích</strong>."
          },
          {
            icon: "➗",
            title: "Ý nghĩa của Phép Chia",
            content: "• Phép chia dùng để chia đều một nhóm đồ vật thành các phần bằng nhau.<br/>• Từ phép nhân <code>2 x 5 = 10</code>, ta có hai phép chia tương ứng: <code>10 : 2 = 5</code> và <code>10 : 5 = 2</code>.<br/>• Thành phần: <strong>Số bị chia : Số chia = Thương</strong>."
          },
          {
            icon: "2️⃣",
            title: "Bảng nhân & chia 2",
            content: "• <strong>Nhân 2:</strong> 2x1=2, 2x2=4, 2x3=6, 2x4=8, 2x5=10, 2x6=12, 2x7=14, 2x8=16, 2x9=18, 2x10=20.<br/>• <strong>Chia 2:</strong> 2:2=1, 4:2=2, 6:2=3, 8:2=4, 10:2=5, 12:2=6, 14:2=7, 16:2=8, 18:2=9, 20:2=10."
          },
          {
            icon: "5️⃣",
            title: "Bảng nhân & chia 5",
            content: "• <strong>Nhân 5:</strong> 5x1=5, 5x2=10, 5x3=15, 5x4=20, 5x5=25, 5x6=30, 5x7=35, 5x8=40, 5x9=45, 5x10=50.<br/>• <strong>Chia 5:</strong> 5:5=1, 10:5=2, 15:5=3, 20:5=4, 25:5=5, 30:5=6, 35:5=7, 40:5=8, 45:5=9, 50:5=10."
          }
        ]
      },
      questions: [
        {
          id: "m2_2_1",
          level: 1,
          question: "Tổng <strong>5 + 5 + 5 + 5 + 5 + 5</strong> được viết dưới dạng phép nhân là:",
          options: ["5 x 5", "5 x 6", "6 x 5", "5 x 4"],
          correct: 1,
          explanation: "Số 5 được lấy 6 lần, vậy chuyển thành phép nhân là 5 x 6."
        },
        {
          id: "m2_2_2",
          level: 1,
          question: "Trong phép tính <strong>35 : 5 = 7</strong>, số <strong>35</strong> được gọi là:",
          options: ["Thừa số", "Số chia", "Số bị chia", "Thương"],
          correct: 2,
          explanation: "Trong phép chia '35 : 5 = 7', 35 là Số bị chia, 5 là Số chia, 7 là Thương."
        },
        {
          id: "m2_2_3",
          level: 2,
          question: "Kết quả của phép tính <strong>2 x 9</strong> là:",
          options: ["16", "18", "20", "14"],
          correct: 1,
          explanation: "Theo bảng nhân 2: 2 x 9 = 18."
        },
        {
          id: "m2_2_4",
          level: 2,
          question: "Mỗi con thỏ có <strong>2 cái tai</strong>. Hỏi <strong>8 con thỏ</strong> có tất cả bao nhiêu cái tai?",
          options: ["10 cái tai", "14 cái tai", "16 cái tai", "18 cái tai"],
          correct: 2,
          explanation: "Số cái tai của 8 con thỏ là: 2 x 8 = 16 (cái tai)."
        },
        {
          id: "m2_2_5",
          level: 3,
          question: "Cô giáo có <strong>40 quyển vở</strong> đem chia đều cho <strong>5 bạn</strong> học sinh xuất sắc. Hỏi mỗi bạn nhận được bao nhiêu quyển vở?",
          options: ["7 quyển", "8 quyển", "9 quyển", "6 quyển"],
          correct: 1,
          explanation: "Mỗi bạn nhận được số quyển vở là: 40 : 5 = 8 (quyển vở)."
        },
        {
          id: "m2_2_6",
          level: 3,
          question: "Giá trị của biểu thức <strong>5 x 8 + 15</strong> là:",
          options: ["40", "45", "50", "55"],
          correct: 3,
          explanation: "Thực hiện phép nhân trước, phép cộng sau: 5 x 8 = 40; 40 + 15 = 55."
        },
        {
          id: "m2_2_7",
          level: 4,
          question: "Có <strong>18 cái kẹo</strong> chia đều cho một số bạn, mỗi bạn được <strong>2 cái kẹo</strong>. Hỏi có tất cả bao nhiêu bạn được chia kẹo?",
          options: ["8 bạn", "9 bạn", "7 bạn", "10 bạn"],
          correct: 1,
          explanation: "Số bạn được chia kẹo là: 18 : 2 = 9 (bạn)."
        },
        {
          id: "m2_2_8",
          level: 4,
          question: "Tìm một số biết rằng lấy số đó <strong>nhân với 5</strong> rồi <strong>cộng với 25</strong> thì được kết quả bằng <strong>50</strong>.",
          options: ["Số 3", "Số 5", "Số 4", "Số 6"],
          correct: 1,
          explanation: "Ta làm ngược lại: 50 - 25 = 25. Số đó nhân với 5 bằng 25, nên số đó là 25 : 5 = 5."
        }
      ]
    },
    {
      id: "do_luong_dai_luong",
      name: "Đo Lường: dm, m, km, kg, Lít & Giờ Phút",
      icon: "📏",
      desc: "Đơn vị đo độ dài (dm, m, km, mm), khối lượng (kg), dung tích (lít), xem đồng hồ và tiền Việt Nam.",
      theory: {
        highlights: [
          {
            icon: "📐",
            title: "Đơn vị đo độ dài: dm, m, km, mm",
            content: "• <strong>Đề-xi-mét (dm):</strong> <code>1 dm = 10 cm</code>; <code>10 dm = 1 m</code>.<br/>• <strong>Mét (m):</strong> Đơn vị đo độ dài tiêu chuẩn. <code>1 m = 10 dm = 100 cm = 1000 mm</code>.<br/>• <strong>Ki-lô-mét (km):</strong> Dùng đo quãng đường dài giữa các tỉnh thành phố: <code>1 km = 1000 m</code>.<br/>• <strong>Mi-li-mét (mm):</strong> Đơn vị đo độ dài rất nhỏ (bề dày quyển sách, chiếc thẻ ATM): <code>1 cm = 10 mm</code>."
          },
          {
            icon: "⚖️",
            title: "Khối lượng (kg) & Dung tích (lít)",
            content: "• <strong>Ki-lô-gam (kg):</strong> Dùng đo khối lượng đồ vật, bao gạo, cân nặng con người.<br/>• <strong>Lít (l):</strong> Dùng đo sức chứa chất lỏng (nước khoáng, dầu ăn, sữa tươi, xăng xe)."
          },
          {
            icon: "⏰",
            title: "Xem đồng hồ & Thời gian",
            content: "• 1 ngày = 24 giờ; 1 giờ = 60 phút.<br/>• Kim ngắn chỉ <strong>giờ</strong>, kim dài chỉ <strong>phút</strong>.<br/>• Kim dài chỉ số 12 là giờ đúng; chỉ số 3 là 15 phút; chỉ số 6 là 30 phút (rưỡi).<br/>• Các tháng có 31 ngày: Tháng 1, 3, 5, 7, 8, 10, 12. Tháng có 30 ngày: Tháng 4, 6, 9, 11."
          },
          {
            icon: "💵",
            title: "Tiền Việt Nam",
            content: "• Đơn vị tiền tệ Việt Nam là <strong>đồng</strong>.<br/>• Các mệnh giá thường dùng trong toán lớp 2: 100 đồng, 200 đồng, 500 đồng, 1 000 đồng, 2 000 đồng, 5 000 đồng, 10 000 đồng."
          }
        ]
      },
      questions: [
        {
          id: "m2_3_1",
          level: 1,
          question: "1 mét (m) bằng bao nhiêu xăng-ti-mét (cm)?",
          options: ["10 cm", "100 cm", "1000 cm", "1 cm"],
          correct: 1,
          explanation: "Theo bảng đơn vị đo độ dài: 1 m = 10 dm = 100 cm."
        },
        {
          id: "m2_3_2",
          level: 1,
          question: "Đơn vị nào thích hợp nhất để đo <strong>quãng đường từ Hà Nội đến Hải Phòng</strong>?",
          options: ["Mi-li-mét (mm)", "Xăng-ti-mét (cm)", "Mét (m)", "Ki-lô-mét (km)"],
          correct: 3,
          explanation: "Quãng đường dài giữa các tỉnh/thành phố được đo bằng ki-lô-mét (km)."
        },
        {
          id: "m2_3_3",
          level: 2,
          question: "Đồng hồ chỉ kim ngắn nằm giữa số 2 và 3, kim dài chỉ đúng số 6. Lúc đó là mấy giờ?",
          options: ["2 giờ 15 phút", "2 giờ 30 phút (2 rưỡi)", "3 giờ 30 phút", "6 giờ 10 phút"],
          correct: 1,
          explanation: "Kim ngắn ở giữa số 2 và 3 chỉ hơn 2 giờ, kim dài chỉ số 6 tương ứng 30 phút. Vậy đồng hồ chỉ 2 giờ 30 phút (hay 2 giờ rưỡi)."
        },
        {
          id: "m2_3_4",
          level: 2,
          question: "Điền số thích hợp: <strong>35 dm + 45 dm = ... m</strong>",
          options: ["80 m", "8 m", "800 m", "8 dm"],
          correct: 1,
          explanation: "35 dm + 45 dm = 80 dm. Đổi 80 dm sang mét: 80 dm = 8 m."
        },
        {
          id: "m2_3_5",
          level: 3,
          question: "Can thứ nhất đựng <strong>18 lít dầu</strong>, can thứ hai đựng ít hơn can thứ nhất <strong>5 lít dầu</strong>. Hỏi cả hai can đựng tất cả bao nhiêu lít dầu?",
          options: ["23 lít", "31 lít", "36 lít", "13 lít"],
          correct: 1,
          explanation: "Can thứ hai đựng: 18 - 5 = 13 (lít). Cả hai can đựng: 18 + 13 = 31 (lít dầu)."
        },
        {
          id: "m2_3_6",
          level: 3,
          question: "Một sợi dây dài <strong>1 m</strong>. Người ta cắt đi <strong>40 cm</strong>. Hỏi đoạn dây còn lại dài bao nhiêu đề-xi-mét (dm)?",
          options: ["60 dm", "6 dm", "4 dm", "600 dm"],
          correct: 1,
          explanation: "Đổi 1 m = 100 cm. Đoạn dây còn lại dài: 100 - 40 = 60 (cm). Đổi 60 cm = 6 dm."
        },
        {
          id: "m2_3_7",
          level: 4,
          question: "Mẹ mua một bó rau giá <strong>5 000 đồng</strong> và một vỉ trứng giá <strong>15 000 đồng</strong>. Mẹ đưa cho cô bán hàng tờ tiền <strong>50 000 đồng</strong>. Hỏi cô bán hàng phải trả lại mẹ bao nhiêu tiền?",
          options: ["20 000 đồng", "30 000 đồng", "25 000 đồng", "35 000 đồng"],
          correct: 1,
          explanation: "Tổng số tiền mẹ mua là: 5 000 + 15 000 = 20 000 (đồng). Số tiền cô bán hàng trả lại là: 50 000 - 20 000 = 30 000 (đồng)."
        },
        {
          id: "m2_3_8",
          level: 4,
          question: "Hôm nay là <strong>thứ Hai ngày 5 tháng 5</strong>. Hỏi <strong>thứ Hai tuần sau</strong> là ngày mấy tháng 5?",
          options: ["Ngày 11 tháng 5", "Ngày 12 tháng 5", "Ngày 13 tháng 5", "Ngày 14 tháng 5"],
          correct: 1,
          explanation: "Một tuần lễ có 7 ngày. Thứ Hai tuần sau là: ngày 5 + 7 = ngày 12 tháng 5."
        }
      ]
    },
    {
      id: "hinh_hoc_thong_ke",
      name: "Hình Học: Đường Gấp Khúc, Khối Trụ, Khối Cầu & Thống Kê",
      icon: "📐",
      desc: "Điểm, đoạn thẳng, đường gấp khúc và tính độ dài; tam giác, tứ giác, khối trụ, khối cầu; kiểm đếm dữ liệu.",
      theory: {
        highlights: [
          {
            icon: "📏",
            title: "Đoạn thẳng & Đường gấp khúc",
            content: "• Đoạn thẳng AB có 2 điểm mút A và B.<br/>• Đường gấp khúc gồm nhiều đoạn thẳng nối tiếp nhau mà không thẳng hàng.<br/>• <strong>Độ dài đường gấp khúc:</strong> Bằng <em>tổng độ dài các đoạn thẳng</em> tạo nên đường gấp khúc đó.<br/>• Ví dụ: Đường gấp khúc ABCD có độ dài = AB + BC + CD."
          },
          {
            icon: "🔺",
            title: "Hình tam giác & Hình tứ giác",
            content: "• <strong>Hình tam giác:</strong> Hình có 3 cạnh và 3 đỉnh.<br/>• <strong>Hình tứ giác:</strong> Hình có 4 cạnh và 4 đỉnh (hình vuông, hình chữ nhật đều là hình tứ giác đặc biệt)."
          },
          {
            icon: "🥫",
            title: "Khối trụ & Khối cầu",
            content: "• <strong>Khối trụ:</strong> Có hai mặt đáy hình tròn bằng nhau và mặt xung quanh uốn cong (ví dụ: lon nước ngọt, hộp sữa bột, khúc gỗ tròn).<br/>• <strong>Khối cầu:</strong> Tròn xoe hoàn toàn từ mọi góc nhìn, có thể lăn về mọi hướng (ví dụ: quả bóng đá, hòn bi ve, quả địa cầu)."
          },
          {
            icon: "📊",
            title: "Thu thập, kiểm đếm & Khả năng xảy ra",
            content: "• <strong>Kiểm đếm:</strong> Đếm số lượng từng loại đối tượng và ghi vào bảng thống kê.<br/>• <strong>Khả năng xảy ra của một sự kiện:</strong><br/>  - <em>Chắc chắn:</em> Luôn luôn xảy ra.<br/>  - <em>Có thể:</em> Có khả năng xảy ra hoặc không xảy ra.<br/>  - <em>Không thể:</em> Hoàn toàn không bao giờ xảy ra."
          }
        ]
      },
      questions: [
        {
          id: "m2_4_1",
          level: 1,
          question: "Đường gấp khúc MNPQ gồm mấy đoạn thẳng?",
          options: ["2 đoạn thẳng", "3 đoạn thẳng", "4 đoạn thẳng", "5 đoạn thẳng"],
          correct: 1,
          explanation: "Đường gấp khúc MNPQ gồm 3 đoạn thẳng nối tiếp nhau: MN, NP và PQ."
        },
        {
          id: "m2_4_2",
          level: 1,
          question: "Vật thể nào dưới đây có dạng <strong>khối cầu</strong>?",
          options: ["Hộp sữa tươi giấy", "Lon nước ngọt", "Quả bóng đá", "Viên phấn viết bảng"],
          correct: 2,
          explanation: "Quả bóng đá tròn xoe, có dạng khối cầu. Lon nước ngọt có dạng khối trụ."
        },
        {
          id: "m2_4_3",
          level: 2,
          question: "Tính độ dài đường gấp khúc ABC, biết đoạn thẳng <strong>AB = 14 cm</strong> và <strong>BC = 26 cm</strong>.",
          options: ["30 cm", "40 cm", "38 cm", "42 cm"],
          correct: 1,
          explanation: "Độ dài đường gấp khúc ABC là: 14 + 26 = 40 (cm)."
        },
        {
          id: "m2_4_4",
          level: 2,
          question: "Hình nào dưới đây có <strong>4 cạnh và 4 đỉnh</strong>?",
          options: ["Hình tam giác", "Hình tứ giác", "Hình tròn", "Hình lập phương"],
          correct: 1,
          explanation: "Hình tứ giác là hình có 4 cạnh và 4 đỉnh."
        },
        {
          id: "m2_4_5",
          level: 3,
          question: "Một đường gấp khúc gồm <strong>4 đoạn thẳng</strong> bằng nhau, mỗi đoạn thẳng dài <strong>5 cm</strong>. Độ dài đường gấp khúc đó là:",
          options: ["15 cm", "20 cm", "25 cm", "10 cm"],
          correct: 1,
          explanation: "Độ dài đường gấp khúc là: 5 x 4 = 20 (cm)."
        },
        {
          id: "m2_4_6",
          level: 3,
          question: "Trong một hộp có <strong>5 viên bi màu xanh</strong> và <strong>không có viên bi nào màu đỏ</strong>. Nhắm mắt lấy ngẫu nhiên 1 viên bi từ hộp. Sự kiện <em>\"Lấy được một viên bi màu đỏ\"</em> là sự kiện:",
          options: ["Chắc chắn xảy ra", "Có thể xảy ra", "Không thể xảy ra", "Đúng một nửa"],
          correct: 2,
          explanation: "Vì trong hộp không có viên bi đỏ nào nên không thể lấy được viên bi màu đỏ."
        },
        {
          id: "m2_4_7",
          level: 4,
          question: "Một hình tam giác có độ dài các cạnh lần lượt là <strong>12 cm, 18 cm và 25 cm</strong>. Chu vi hình tam giác đó (tổng độ dài 3 cạnh) là:",
          options: ["45 cm", "55 cm", "50 cm", "60 cm"],
          correct: 1,
          explanation: "Chu vi hình tam giác là: 12 + 18 + 25 = 55 (cm)."
        },
        {
          id: "m2_4_8",
          level: 4,
          question: "Cho hình chữ nhật ABCD. Người ta kẻ một đoạn thẳng nối 2 đỉnh đối diện A và C. Hỏi đoạn thẳng AC đã chia hình chữ nhật thành mấy hình tam giác?",
          options: ["1 hình tam giác", "2 hình tam giác", "3 hình tam giác", "4 hình tam giác"],
          correct: 1,
          explanation: "Đoạn thẳng AC chia hình chữ nhật ABCD thành 2 hình tam giác vuông: tam giác ABC và tam giác CDA."
        }
      ]
    },
    {
      id: "giai_toan_co_loi_van",
      name: "Giải Toán Có Lời Văn Lớp 2",
      icon: "💡",
      desc: "Dạng toán nhiều hơn, ít hơn, bài toán gấp số lần và chia đều phần bằng nhau.",
      theory: {
        highlights: [
          {
            icon: "📈",
            title: "Bài toán về Nhiều Hơn",
            content: "• Muốn tìm số lớn hơn: <code>Số lớn = Số bé + Phần nhiều hơn</code>.<br/>• Ví dụ: Bạn Lan có 15 bông hoa, bạn Mai có nhiều hơn bạn Lan 4 bông hoa. Số hoa của Mai là: <code>15 + 4 = 19 (bông hoa)</code>."
          },
          {
            icon: "📉",
            title: "Bài toán về Ít Hơn",
            content: "• Muốn tìm số bé hơn: <code>Số bé = Số lớn - Phần ít hơn</code>.<br/>• Ví dụ: Cành trên có 20 con chim, cành dưới có ít hơn cành trên 6 con chim. Số chim ở cành dưới là: <code>20 - 6 = 14 (con chim)</code>."
          },
          {
            icon: "📦",
            title: "Bài toán áp dụng Phép Nhân",
            content: "• Khi mỗi nhóm có số lượng bằng nhau, muốn tìm tổng số lượng trong nhiều nhóm: Ta làm phép nhân.<br/>• Công thức: <code>Số đồ vật trong 1 hộp x Số hộp = Tổng số đồ vật</code>."
          },
          {
            icon: "🍰",
            title: "Bài toán chia phần bằng nhau",
            content: "• Khi chia đều một tổng số đồ vật cho các bạn (hoặc vào các túi): Ta làm phép chia.<br/>• Công thức: <code>Tổng số đồ vật : Số bạn = Số đồ vật mỗi bạn nhận được</code>."
          }
        ]
      },
      questions: [
        {
          id: "m2_5_1",
          level: 1,
          question: "Lớp 2A có <strong>18 bạn nữ</strong> và <strong>16 bạn nam</strong>. Hỏi lớp 2A có tất cả bao nhiêu học sinh?",
          options: ["32 bạn", "34 bạn", "35 bạn", "36 bạn"],
          correct: 1,
          explanation: "Tổng số học sinh lớp 2A là: 18 + 16 = 34 (học sinh)."
        },
        {
          id: "m2_5_2",
          level: 1,
          question: "Đàn gà nhà bác An có <strong>45 con gà</strong>, bác vừa bán đi <strong>15 con gà</strong>. Hỏi đàn gà nhà bác An còn lại bao nhiêu con gà?",
          options: ["25 con gà", "30 con gà", "35 con gà", "20 con gà"],
          correct: 1,
          explanation: "Số con gà còn lại là: 45 - 15 = 30 (con gà)."
        },
        {
          id: "m2_5_3",
          level: 2,
          question: "Bạn Nam gấp được <strong>24 chiếc thuyền giấy</strong>. Bạn Việt gấp được <strong>nhiều hơn</strong> bạn Nam <strong>8 chiếc thuyền giấy</strong>. Hỏi bạn Việt gấp được bao nhiêu chiếc thuyền giấy?",
          options: ["30 chiếc", "32 chiếc", "16 chiếc", "34 chiếc"],
          correct: 1,
          explanation: "Bài toán về nhiều hơn: Số thuyền giấy bạn Việt gấp được là 24 + 8 = 32 (chiếc thuyền)."
        },
        {
          id: "m2_5_4",
          level: 2,
          question: "Cây bưởi có <strong>52 quả</strong>, cây cam có <strong>ít hơn</strong> cây bưởi <strong>14 quả</strong>. Hỏi cây cam có bao nhiêu quả?",
          options: ["36 quả", "38 quả", "42 quả", "66 quả"],
          correct: 1,
          explanation: "Bài toán về ít hơn: Số quả bưởi của cây cam là 52 - 14 = 38 (quả)."
        },
        {
          id: "m2_5_5",
          level: 3,
          question: "Mẹ xếp bánh vào <strong>5 đĩa</strong>, mỗi đĩa có <strong>4 cái bánh</strong>. Hỏi mẹ đã xếp tất cả bao nhiêu cái bánh?",
          options: ["18 cái bánh", "20 cái bánh", "22 cái bánh", "9 cái bánh"],
          correct: 1,
          explanation: "Tổng số cái bánh mẹ đã xếp là: 4 x 5 = 20 (cái bánh) [hoặc 5 x 4 = 20]."
        },
        {
          id: "m2_5_6",
          level: 3,
          question: "Có <strong>30 quyển truyện</strong> chia đều cho <strong>5 tổ học tập</strong>. Hỏi mỗi tổ được chia bao nhiêu quyển truyện?",
          options: ["5 quyển", "6 quyển", "7 quyển", "8 quyển"],
          correct: 1,
          explanation: "Số quyển truyện mỗi tổ nhận được là: 30 : 5 = 6 (quyển truyện)."
        },
        {
          id: "m2_5_7",
          level: 4,
          question: "Bình có <strong>15 viên bi</strong>. Nếu Bình cho An <strong>3 viên bi</strong> thì số bi của hai bạn bằng nhau. Hỏi lúc đầu An có bao nhiêu viên bi?",
          options: ["12 viên bi", "9 viên bi", "6 viên bi", "8 viên bi"],
          correct: 1,
          explanation: "Sau khi Bình cho An 3 viên bi, Bình còn lại: 15 - 3 = 12 (viên bi). Khi đó hai bạn có số bi bằng nhau nên lúc đó An có 12 viên bi. Vậy lúc đầu An có: 12 - 3 = 9 (viên bi)."
        },
        {
          id: "m2_5_8",
          level: 4,
          question: "Bác nông dân nuôi một đàn cừu và một đàn gà. Đếm được tất cả <strong>4 con cừu</strong> và <strong>5 con gà</strong>. Hỏi có tất cả bao nhiêu cái chân?",
          options: ["24 cái chân", "26 cái chân", "28 cái chân", "22 cái chân"],
          correct: 1,
          explanation: "Mỗi con cừu có 4 chân, 4 con cừu có: 4 x 4 = 16 (chân). Mỗi con gà có 2 chân, 5 con gà có: 2 x 5 = 10 (chân). Tổng số chân là: 16 + 10 = 26 (cái chân)."
        }
      ]
    }
  ]
};
