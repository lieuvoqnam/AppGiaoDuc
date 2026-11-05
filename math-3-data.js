/**
 * math-3-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Toán Lớp 3
 * Chuẩn Chương trình Giáo dục phổ thông (GDPT) 2018
 * (Kết nối tri thức với cuộc sống, Cánh diều, Chân trời sáng tạo)
 */

window.MATH3_DATA = {
  topics: [
    {
      id: "bang_nhan_chia_6_7_8_9",
      name: "Bảng Nhân Chia 6, 7, 8, 9 & Biểu Thức Số",
      icon: "✖️",
      desc: "Thuộc lòng bảng nhân chia từ 6 đến 9, nhân chia số có nhiều chữ số với số có một chữ số, quy tắc tính giá trị biểu thức.",
      theory: {
        highlights: [
          {
            icon: "🔢",
            title: "Bảng nhân & chia 6, 7, 8, 9",
            content: "• Học sinh cần thuộc làu bảng nhân 6 đến 9 và bảng chia tương ứng.<br/>• Mẹo hoán đổi: <code>6 x 7 = 7 x 6 = 42</code>; <code>8 x 9 = 9 x 8 = 72</code>.<br/>• Quan hệ nhân - chia: Nếu <code>a x b = c</code> thì <code>c : a = b</code> và <code>c : b = a</code>."
          },
          {
            icon: "⚡",
            title: "Nhân, chia số có nhiều chữ số với số có 1 chữ số",
            content: "• <strong>Nhân:</strong> Đặt tính và nhân lần lượt từ phải sang trái (đơn vị -> chục -> trăm...). Lưu ý cộng thêm số nhớ vào hàng liền kề bên trái.<br/>• <strong>Chia:</strong> Đặt tính và chia lần lượt từ trái sang phải (hàng cao nhất trước). Mỗi lượt chia đều thực hiện 3 bước: Chia - Nhân - Trừ. Chú ý số dư luôn phải <em>nhỏ hơn</em> số chia."
          },
          {
            icon: "📐",
            title: "Thứ tự thực hiện phép tính trong biểu thức",
            content: "• Nếu chỉ có phép cộng, trừ (hoặc nhân, chia): Thực hiện lần lượt từ <strong>trái sang phải</strong>.<br/>• Nếu có cả cộng, trừ, nhân, chia: Thực hiện <strong>nhân chia trước, cộng trừ sau</strong>.<br/>• Nếu biểu thức có dấu ngoặc <code>(...)</code>: Thực hiện <strong>trong ngoặc trước, ngoài ngoặc sau</strong>."
          },
          {
            icon: "💡",
            title: "Số 0 và số 1 trong phép nhân chia",
            content: "• Bất kỳ số nào nhân với 1 cũng bằng chính nó: <code>a x 1 = 1 x a = a</code>.<br/>• Bất kỳ số nào nhân với 0 cũng bằng 0: <code>a x 0 = 0 x a = 0</code>.<br/>• Số 0 chia cho số nào khác 0 cũng bằng 0: <code>0 : a = 0 (với a khác 0)</code>. <em>Không có phép chia cho 0!</em>"
          }
        ]
      },
      questions: [
        {
          id: "m3_1_1",
          level: 1,
          question: "Kết quả của phép tính <strong>7 x 8</strong> là bao nhiêu?",
          options: ["54", "56", "64", "48"],
          correct: 1,
          explanation: "Theo bảng nhân 7 (hoặc bảng nhân 8): 7 x 8 = 56."
        },
        {
          id: "m3_1_2",
          level: 1,
          question: "Kết quả của phép chia <strong>54 : 9</strong> là:",
          options: ["5", "6", "7", "8"],
          correct: 1,
          explanation: "Vì 6 x 9 = 54 nên 54 : 9 = 6."
        },
        {
          id: "m3_1_3",
          level: 2,
          question: "Tính giá trị của biểu thức: <strong>25 + 15 x 3</strong>",
          options: ["120", "70", "85", "65"],
          correct: 1,
          explanation: "Quy tắc: Nhân trước, cộng sau. Ta có: 15 x 3 = 45; 25 + 45 = 70."
        },
        {
          id: "m3_1_4",
          level: 2,
          question: "Tính giá trị của biểu thức có ngoặc: <strong>(48 - 16) : 4</strong>",
          options: ["8", "44", "12", "16"],
          correct: 0,
          explanation: "Thực hiện phép tính trong ngoặc trước: 48 - 16 = 32; sau đó 32 : 4 = 8."
        },
        {
          id: "m3_1_5",
          level: 3,
          question: "Một phép chia có số chia là <strong>8</strong>. Số dư lớn nhất có thể có trong phép chia này là:",
          options: ["8", "7", "9", "6"],
          correct: 1,
          explanation: "Trong phép chia có dư, số dư luôn bé hơn số chia. Vì số chia là 8 nên số dư lớn nhất có thể là 7."
        },
        {
          id: "m3_1_6",
          level: 3,
          question: "Tìm <em>x</em>, biết: <strong><em>x</em> : 6 = 14 (dư 3)</strong>",
          options: ["x = 84", "x = 87", "x = 81", "x = 90"],
          correct: 1,
          explanation: "Muốn tìm số bị trừ trong phép chia có dư: Số bị chia = Thương x Số chia + Số dư. Vậy x = 14 x 6 + 3 = 84 + 3 = 87."
        },
        {
          id: "m3_1_7",
          level: 4,
          question: "Điền dấu ngoặc thích hợp để có kết quả đúng: <strong>48 : 2 + 4 x 3 = 24</strong>",
          options: [
            "(48 : 2) + 4 x 3",
            "48 : (2 + 4) x 3",
            "48 : 2 + (4 x 3)",
            "48 : (2 + 4 x 3)"
          ],
          correct: 1,
          explanation: "Ta thử: 48 : (2 + 4) x 3 = 48 : 6 x 3 = 8 x 3 = 24 (chính xác!)."
        },
        {
          id: "m3_1_8",
          level: 4,
          question: "Một đoàn khách gồm <strong>43 người</strong> cần qua sông bằng thuyền. Mỗi thuyền chỉ chở được tối đa <strong>6 người</strong> (kể cả người lái thuyền). Hỏi cần ít nhất bao nhiêu chiếc thuyền để chở hết đoàn khách?",
          options: ["7 chiếc", "8 chiếc", "9 chiếc", "10 chiếc"],
          correct: 2,
          explanation: "Mỗi thuyền chỉ chở được khách: 6 - 1 = 5 người khách. Ta có phép chia: 43 : 5 = 8 (dư 3). 8 thuyền chở được 40 người, còn 3 người khách nữa nên cần thêm 1 thuyền. Vậy cần ít nhất: 8 + 1 = 9 chiếc thuyền."
        }
      ]
    },
    {
      id: "so_10000_100000_la_ma",
      name: "Số Trong Phạm Vi 100.000 & Chữ Số La Mã",
      icon: "🔢",
      desc: "Cấu tạo số, đọc viết số đến 10.000 và 100.000, cộng trừ có nhớ, so sánh số và làm quen chữ số La Mã.",
      theory: {
        highlights: [
          {
            icon: "🏛️",
            title: "Cấu tạo số có 5 chữ số (đến 100.000)",
            content: "• Các hàng theo thứ tự từ phải sang trái: <strong>Đơn vị, Chục, Trăm, Nghìn, Chục nghìn</strong>.<br/>• Số <code>100 000</code> đọc là: <em>Một trăm nghìn</em> (hoặc mười vạn).<br/>• Ví dụ: Số <code>65 428</code> gồm 6 chục nghìn, 5 nghìn, 4 trăm, 2 chục và 8 đơn vị."
          },
          {
            icon: "⚖️",
            title: "So sánh các số trong phạm vi 100.000",
            content: "• Số nào có nhiều chữ số hơn thì lớn hơn (số có 5 chữ số luôn lớn hơn số có 4 chữ số).<br/>• Nếu hai số có cùng số chữ số: So sánh từng cặp chữ số ở cùng hàng, bắt đầu từ hàng cao nhất (bên trái) sang bên phải."
          },
          {
            icon: "👑",
            title: "Làm quen chữ số La Mã",
            content: "• Ba chữ số La Mã cơ bản: <code>I = 1</code>, <code>V = 5</code>, <code>X = 10</code>.<br/>• Các số ghép: <code>II = 2</code>, <code>III = 3</code>, <code>IV = 4</code> (5 - 1), <code>VI = 6</code> (5 + 1), <code>VII = 7</code>, <code>VIII = 8</code>, <code>IX = 9</code> (10 - 1), <code>XI = 11</code>, <code>XII = 12</code>, <code>XX = 20</code>, <code>XXI = 21</code>."
          },
          {
            icon: "➕",
            title: "Làm tròn số đến hàng chục, hàng trăm, hàng nghìn",
            content: "• Khi làm tròn số đến hàng chục: Xét chữ số hàng đơn vị (từ 5 trở lên thì tăng thêm 1 chục; dưới 5 thì giữ nguyên).<br/>• Tương tự khi làm tròn đến hàng trăm, hàng nghìn, hàng chục nghìn."
          }
        ]
      },
      questions: [
        {
          id: "m3_2_1",
          level: 1,
          question: "Số <strong>bốn mươi lăm nghìn sáu trăm linh tám</strong> được viết là:",
          options: ["45 680", "45 608", "45 068", "456 008"],
          correct: 1,
          explanation: "Bốn mươi lăm nghìn sáu trăm linh tám được viết là 45 608."
        },
        {
          id: "m3_2_2",
          level: 1,
          question: "Chữ số La Mã <strong>IX</strong> biểu thị số tự nhiên nào?",
          options: ["11", "9", "4", "6"],
          correct: 1,
          explanation: "IX gồm I (1) đứng trước X (10), nghĩa là 10 - 1 = 9."
        },
        {
          id: "m3_2_3",
          level: 2,
          question: "Trong số <strong>73 852</strong>, chữ số <strong>3</strong> có giá trị là:",
          options: ["300", "3 000", "30 000", "30"],
          correct: 1,
          explanation: "Chữ số 3 đứng ở hàng nghìn nên có giá trị là 3 000."
        },
        {
          id: "m3_2_4",
          level: 2,
          question: "Số La Mã biểu thị thế kỷ <strong>thế kỷ 21</strong> là:",
          options: ["XIX", "XX", "XXI", "XXII"],
          correct: 2,
          explanation: "21 = 20 + 1 = XXI."
        },
        {
          id: "m3_2_5",
          level: 3,
          question: "Kết quả của phép tính: <strong>32 500 + 18 400</strong> là:",
          options: ["50 900", "51 900", "49 900", "50 800"],
          correct: 0,
          explanation: "Đặt tính: 32 500 + 18 400 = 50 900."
        },
        {
          id: "m3_2_6",
          level: 3,
          question: "Làm tròn số <strong>64 785</strong> đến hàng <strong>nghìn</strong> ta được số nào?",
          options: ["64 000", "65 000", "64 800", "60 000"],
          correct: 1,
          explanation: "Xét chữ số hàng trăm là 7 (>= 5), nên ta làm tròn lên thành 65 000."
        },
        {
          id: "m3_2_7",
          level: 4,
          question: "Số lớn nhất có 5 chữ số khác nhau mà chữ số hàng nghìn bằng 8 là:",
          options: ["98 765", "89 765", "98 999", "98 675"],
          correct: 0,
          explanation: "Hàng chục nghìn lớn nhất là 9, hàng nghìn là 8, tiếp tục hàng trăm chọn 7, hàng chục chọn 6, hàng đơn vị chọn 5 -> 98 765."
        },
        {
          id: "m3_2_8",
          level: 4,
          question: "Một huyện miền núi có <strong>42 350</strong> cây trồng năm ngoái. Năm nay huyện trồng thêm được <strong>15 800</strong> cây và chuyển đi <strong>7 200</strong> cây. Hỏi hiện nay huyện có bao nhiêu cây?",
          options: ["50 950 cây", "58 150 cây", "50 850 cây", "51 950 cây"],
          correct: 0,
          explanation: "Tổng số cây trồng thêm: 42 350 + 15 800 = 58 150 (cây). Số cây còn lại: 58 150 - 7 200 = 50 950 (cây)."
        }
      ]
    },
    {
      id: "hinh_hoc_chu_vi_dien_tich",
      name: "Hình Học: Góc, Trung Điểm, Chu Vi & Diện Tích",
      icon: "📐",
      desc: "Điểm ở giữa, trung điểm đoạn thẳng, góc vuông và góc không vuông, hình tròn, công thức tính chu vi và diện tích hình vuông, hình chữ nhật.",
      theory: {
        highlights: [
          {
            icon: "📍",
            title: "Điểm ở giữa & Trung điểm đoạn thẳng",
            content: "• Ba điểm A, O, B thẳng hàng: O nằm giữa A và B gọi là điểm ở giữa.<br/>• Nếu <code>OA = OB</code> thì O được gọi là <strong>trung điểm</strong> của đoạn thẳng AB.<br/>• Độ dài mỗi nửa đoạn thẳng bằng một nửa độ dài đoạn thẳng AB."
          },
          {
            icon: "📐",
            title: "Góc vuông & góc không vuông",
            content: "• Dùng <strong>ê ke</strong> để kiểm tra và vẽ góc vuông.<br/>• Góc không vuông gồm góc nhọn (nhỏ hơn góc vuông) và góc tù (lớn hơn góc vuông)."
          },
          {
            icon: "⭕",
            title: "Hình tròn, tâm, đường kính & bán kính",
            content: "• <strong>Bán kính (r):</strong> Đoạn thẳng nối từ tâm đến một điểm trên đường tròn.<br/>• <strong>Đường kính (d):</strong> Đoạn thẳng đi qua tâm và nối hai điểm trên đường tròn.<br/>• Công thức vàng: <code>Đường kính = 2 x Bán kính</code> (hay Bán kính = Đường kính : 2)."
          },
          {
            icon: "📏",
            title: "Chu vi & Diện tích hình chữ nhật, hình vuông",
            content: "• <strong>Chu vi hình chữ nhật:</strong> <code>P = (Chiều dài + Chiều rộng) x 2</code> (cùng đơn vị đo).<br/>• <strong>Diện tích hình chữ nhật:</strong> <code>S = Chiều dài x Chiều rộng</code>.<br/>• <strong>Chu vi hình vuông:</strong> <code>P = Cạnh x 4</code>.<br/>• <strong>Diện tích hình vuông:</strong> <code>S = Cạnh x Cạnh</code>.<br/>• Đơn vị diện tích: Xăng-ti-mét vuông (<code>cm²</code>)."
          }
        ]
      },
      questions: [
        {
          id: "m3_3_1",
          level: 1,
          question: "Đoạn thẳng MN dài <strong>16 cm</strong>, I là trung điểm của MN. Độ dài đoạn thẳng MI là:",
          options: ["8 cm", "32 cm", "4 cm", "10 cm"],
          correct: 0,
          explanation: "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: MI = MN : 2 = 16 : 2 = 8 cm."
        },
        {
          id: "m3_3_2",
          level: 1,
          question: "Một hình tròn có bán kính bằng <strong>7 cm</strong> thì đường kính của hình tròn đó dài:",
          options: ["14 cm", "21 cm", "3,5 cm", "28 cm"],
          correct: 0,
          explanation: "Đường kính = Bán kính x 2 = 7 x 2 = 14 cm."
        },
        {
          id: "m3_3_3",
          level: 2,
          question: "Một hình chữ nhật có chiều dài <strong>12 cm</strong>, chiều rộng <strong>8 cm</strong>. Chu vi hình chữ nhật đó là:",
          options: ["20 cm", "40 cm", "96 cm", "24 cm"],
          correct: 1,
          explanation: "Chu vi hình chữ nhật: (Chiều dài + Chiều rộng) x 2 = (12 + 8) x 2 = 20 x 2 = 40 (cm)."
        },
        {
          id: "m3_3_4",
          level: 2,
          question: "Một tấm bìa hình vuông có cạnh dài <strong>6 cm</strong>. Diện tích tấm bìa đó là:",
          options: ["24 cm²", "36 cm²", "12 cm²", "18 cm²"],
          correct: 1,
          explanation: "Diện tích hình vuông = Cạnh x Cạnh = 6 x 6 = 36 (cm²)."
        },
        {
          id: "m3_3_5",
          level: 3,
          question: "Một mảnh đất hình chữ nhật có chiều dài <strong>15 m</strong>, chiều rộng bằng <strong>1/3 chiều dài</strong>. Diện tích mảnh đất đó là:",
          options: ["45 m²", "75 m²", "40 m²", "50 m²"],
          correct: 1,
          explanation: "Chiều rộng mảnh đất: 15 : 3 = 5 (m). Diện tích mảnh đất: 15 x 5 = 75 (m²)."
        },
        {
          id: "m3_3_6",
          level: 3,
          question: "Một hình vuông có chu vi là <strong>36 cm</strong>. Diện tích của hình vuông đó là:",
          options: ["81 cm²", "36 cm²", "72 cm²", "144 cm²"],
          correct: 0,
          explanation: "Cạnh hình vuông: 36 : 4 = 9 (cm). Diện tích hình vuông: 9 x 9 = 81 (cm²)."
        },
        {
          id: "m3_3_7",
          level: 4,
          question: "Một mảnh vườn hình chữ nhật có chiều rộng <strong>8 m</strong>, diện tích bằng <strong>120 m²</strong>. Người ta rào xung quanh mảnh vườn đó và để một cửa ra vào rộng <strong>2 m</strong>. Hỏi hàng rào dài bao nhiêu mét?",
          options: ["46 m", "44 m", "48 m", "42 m"],
          correct: 1,
          explanation: "Chiều dài mảnh vườn: 120 : 8 = 15 (m). Chu vi mảnh vườn: (15 + 8) x 2 = 46 (m). Hàng rào trừ cửa đi 2 m: 46 - 2 = 44 (m)."
        },
        {
          id: "m3_3_8",
          level: 4,
          question: "Người ta ghép <strong>3 viên gạch hình vuông</strong> có cạnh <strong>20 cm</strong> sát nhau thành một hình chữ nhật. Chu vi của hình chữ nhật ghép được là:",
          options: ["240 cm", "160 cm", "120 cm", "180 cm"],
          correct: 1,
          explanation: "Hình chữ nhật mới có: Chiều rộng = 20 cm, Chiều dài = 20 x 3 = 60 cm. Chu vi hình chữ nhật: (60 + 20) x 2 = 160 (cm)."
        }
      ]
    },
    {
      id: "dai_luong_do_luong",
      name: "Đại Lượng Đo Lường: g, ml, mm, °C, Đồng & Thời Gian",
      icon: "⚖️",
      desc: "Làm quen đơn vị đo khối lượng (gam), dung tích (mi-li-lít), độ dài (mi-li-mét), nhiệt độ (°C), tiền Việt Nam, xem đồng hồ chính xác đến phút và lịch năm.",
      theory: {
        highlights: [
          {
            icon: "⚖️",
            title: "Gam (g) & Mi-li-lít (ml)",
            content: "• <strong>Gam (viết tắt là g):</strong> Đơn vị đo khối lượng. <code>1 kg = 1000 g</code>.<br/>• <strong>Mi-li-lít (viết tắt là ml):</strong> Đơn vị đo dung tích chất lỏng. <code>1 l = 1000 ml</code>."
          },
          {
            icon: "📏",
            title: "Mi-li-mét (mm) & Nhiệt độ (°C)",
            content: "• <strong>Mi-li-mét (mm):</strong> Đơn vị đo độ dài rất nhỏ. <code>1 cm = 10 mm</code>; <code>1 m = 1000 mm</code>.<br/>• <strong>Độ C (°C):</strong> Đơn vị đo nhiệt độ bằng nhiệt kế. Nước sôi ở 100°C, nước đá tan ở 0°C; nhiệt độ cơ thể người khỏe mạnh bình thường khoảng 37°C."
          },
          {
            icon: "💵",
            title: "Tiền Việt Nam (đồng)",
            content: "• Các mệnh giá tiền giấy và polymer thường gặp: 1000đ, 2000đ, 5000đ, 10 000đ, 20 000đ, 50 000đ, 100 000đ.<br/>• Tập tính nhẩm số tiền phải trả và số tiền thừa được trả lại khi mua hàng."
          },
          {
            icon: "⏰",
            title: "Xem đồng hồ chính xác & Số ngày trong tháng",
            content: "• Kim ngắn chỉ giờ, kim dài chỉ phút. Mỗi khoảng cách giữa hai số trên mặt đồng hồ là 5 phút.<br/>• Đọc giờ kém khi kim phút vượt qua số 6 (ví dụ: 8 giờ 50 phút = 9 giờ kém 10 phút).<br/>• Các tháng có <strong>31 ngày</strong>: Tháng 1, 3, 5, 7, 8, 10, 12.<br/>• Các tháng có <strong>30 ngày</strong>: Tháng 4, 6, 9, 11.<br/>• Tháng 2 có 28 ngày (năm nhuận có 29 ngày)."
          }
        ]
      },
      questions: [
        {
          id: "m3_4_1",
          level: 1,
          question: "Đổi đơn vị: <strong>1 kg = ... g</strong>?",
          options: ["10 g", "100 g", "1000 g", "10 000 g"],
          correct: 2,
          explanation: "1 ki-lô-gam bằng 1000 gam (1 kg = 1000 g)."
        },
        {
          id: "m3_4_2",
          level: 1,
          question: "Nhiệt kế đo được nhiệt độ nước sôi là bao nhiêu?",
          options: ["37°C", "0°C", "50°C", "100°C"],
          correct: 3,
          explanation: "Ở điều kiện bình thường, nước sôi ở nhiệt độ 100°C."
        },
        {
          id: "m3_4_3",
          level: 2,
          question: "Một hộp sữa tươi có dung tích <strong>1 lít</strong>. Mẹ đã rót ra cốc <strong>350 ml</strong>. Trong hộp còn lại bao nhiêu mi-li-lít sữa?",
          options: ["650 ml", "750 ml", "65 ml", "550 ml"],
          correct: 0,
          explanation: "Đổi 1 lít = 1000 ml. Số sữa còn lại: 1000 - 350 = 650 (ml)."
        },
        {
          id: "m3_4_4",
          level: 2,
          question: "Đồng hồ chỉ <strong>7 giờ 45 phút</strong> còn có thể đọc theo cách nào khác?",
          options: ["8 giờ kém 15 phút", "7 giờ kém 15 phút", "8 giờ 15 phút", "7 giờ 40 phút"],
          correct: 0,
          explanation: "7 giờ 45 phút tức là còn thiếu 15 phút nữa là đến 8 giờ, đọc là: 8 giờ kém 15 phút."
        },
        {
          id: "m3_4_5",
          level: 3,
          question: "Trong một năm, những tháng nào sau đây đều có <strong>30 ngày</strong>?",
          options: [
            "Tháng 1, 3, 5, 7",
            "Tháng 4, 6, 9, 11",
            "Tháng 2, 4, 6, 8",
            "Tháng 7, 8, 9, 10"
          ],
          correct: 1,
          explanation: "Các tháng có đúng 30 ngày gồm có: Tháng 4, tháng 6, tháng 9 và tháng 11."
        },
        {
          id: "m3_4_6",
          level: 3,
          question: "An mua một quyển vở giá <strong>12 000 đồng</strong> và một chiếc bút chì giá <strong>5 000 đồng</strong>. An đưa cho cô bán hàng tờ <strong>50 000 đồng</strong>. Cô bán hàng cần trả lại An bao nhiêu tiền?",
          options: ["33 000 đồng", "35 000 đồng", "23 000 đồng", "27 000 đồng"],
          correct: 0,
          explanation: "Tổng số tiền mua đồ: 12 000 + 5 000 = 17 000 (đồng). Tiền thừa cô bán hàng trả lại: 50 000 - 17 000 = 33 000 (đồng)."
        },
        {
          id: "m3_4_7",
          level: 4,
          question: "Nếu ngày <strong>28 tháng 4</strong> là ngày <strong>Thứ Sáu</strong> thì ngày <strong>1 tháng 5</strong> cùng năm đó là ngày thứ mấy?",
          options: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Bảy"],
          correct: 1,
          explanation: "Tháng 4 có 30 ngày. Ngày 28/4 là Thứ Sáu -> ngày 29/4 là Thứ Bảy -> ngày 30/4 là Chủ Nhật -> Ngày 1/5 là Thứ Hai."
        },
        {
          id: "m3_4_8",
          level: 4,
          question: "Một con cá quả nặng <strong>1 kg 400 g</strong>, một con cá chép nhẹ hơn con cá quả <strong>600 g</strong>. Cả hai con cá nặng tất cả bao nhiêu ki-lô-gam?",
          options: ["2 kg 200 g", "2 kg 800 g", "2 kg", "2 kg 400 g"],
          correct: 0,
          explanation: "Đổi 1 kg 400 g = 1400 g. Con cá chép nặng: 1400 - 600 = 800 (g). Cả hai con cá nặng: 1400 + 800 = 2200 g = 2 kg 200 g."
        }
      ]
    },
    {
      id: "toan_co_loi_van_2_buoc",
      name: "Giải Toán Có Lời Văn & Bài Toán Rút Về Đơn Vị",
      icon: "💡",
      desc: "Bài toán giải bằng 2 bước tính, gấp lên/giảm đi một số lần, so sánh số lớn gấp mấy lần số bé, bài toán liên quan đến rút về đơn vị.",
      theory: {
        highlights: [
          {
            icon: "📈",
            title: "Gấp một số lên nhiều lần & Giảm đi nhiều lần",
            content: "• Muốn <strong>gấp một số lên nhiều lần</strong>, ta lấy số đó <em>nhân</em> với số lần.<br/>• Muốn <strong>giảm một số đi nhiều lần</strong>, ta lấy số đó <em>chia</em> cho số lần.<br/>• <em>Phân biệt:</em> 'Nhiều hơn a đơn vị' (làm phép cộng), còn 'Gấp a lần' (làm phép nhân)."
          },
          {
            icon: "⚖️",
            title: "So sánh số lớn gấp mấy lần số bé",
            content: "• Muốn biết số lớn gấp mấy lần số bé, ta lấy <strong>số lớn chia cho số bé</strong>: <code>Số lần = Số lớn : Số bé</code>.<br/>• Khi đó, số bé bằng <code>1/Số lần</code> của số lớn."
          },
          {
            icon: "📦",
            title: "Bài toán rút về đơn vị (2 kiểu)",
            content: "• <strong>Bước 1 (luôn là bước rút về đơn vị):</strong> Tìm giá trị của 1 đơn vị bằng phép tính <em>chia</em>.<br/>• <strong>Bước 2:</strong><br/>- Kiểu 1: Tìm giá trị của nhiều đơn vị bằng phép <em>nhân</em>.<br/>- Kiểu 2: Tìm số lượng đơn vị bằng phép <em>chia</em>."
          },
          {
            icon: "📝",
            title: "Quy trình giải bài toán 2 bước tính",
            content: "• <strong>Bước 1:</strong> Đọc kỹ đề bài, xác định đề cho biết gì và đề hỏi gì.<br/>• <strong>Bước 2:</strong> Tìm đại lượng trung gian (bước 1).<br/>• <strong>Bước 3:</strong> Trả lời câu hỏi chính của đề bài (bước 2) và ghi rõ đáp số kèm đơn vị."
          }
        ]
      },
      questions: [
        {
          id: "m3_5_1",
          level: 1,
          question: "Gấp số <strong>12</strong> lên <strong>4 lần</strong> ta được số:",
          options: ["16", "48", "3", "8"],
          correct: 1,
          explanation: "Muốn gấp một số lên nhiều lần ta làm phép nhân: 12 x 4 = 48."
        },
        {
          id: "m3_5_2",
          level: 1,
          question: "Đoạn dây thứ nhất dài <strong>36 m</strong>, đoạn dây thứ hai dài <strong>6 m</strong>. Đoạn dây thứ nhất dài gấp mấy lần đoạn dây thứ hai?",
          options: ["6 lần", "30 lần", "7 lần", "5 lần"],
          correct: 0,
          explanation: "Muốn biết số lớn gấp mấy lần số bé, ta lấy số lớn chia cho số bé: 36 : 6 = 6 (lần)."
        },
        {
          id: "m3_5_3",
          level: 2,
          question: "Mua <strong>4 chiếc bút bi</strong> cùng loại hết <strong>28 000 đồng</strong>. Hỏi mua <strong>6 chiếc bút bi</strong> như thế hết bao nhiêu tiền?",
          options: ["35 000 đồng", "42 000 đồng", "48 000 đồng", "36 000 đồng"],
          correct: 1,
          explanation: "Bước 1 (rút về đơn vị): Giá tiền 1 chiếc bút là: 28 000 : 4 = 7 000 (đồng). Bước 2: Mua 6 chiếc bút hết: 7 000 x 6 = 42 000 (đồng)."
        },
        {
          id: "m3_5_4",
          level: 2,
          question: "Có <strong>40 lít dầu</strong> đựng đều vào <strong>8 can</strong>. Hỏi có <strong>25 lít dầu</strong> thì đựng được vào bao nhiêu can như thế?",
          options: ["5 can", "6 can", "4 can", "7 can"],
          correct: 0,
          explanation: "Bước 1 (rút về đơn vị): Mỗi can đựng được số lít dầu là: 40 : 8 = 5 (lít). Bước 2: 25 lít đựng được số can là: 25 : 5 = 5 (can)."
        },
        {
          id: "m3_5_5",
          level: 3,
          question: "Năm nay con <strong>8 tuổi</strong>, tuổi mẹ <strong>gấp 4 lần tuổi con</strong>. Hỏi mẹ hơn con bao nhiêu tuổi?",
          options: ["32 tuổi", "24 tuổi", "28 tuổi", "26 tuổi"],
          correct: 1,
          explanation: "Tuổi mẹ năm nay: 8 x 4 = 32 (tuổi). Mẹ hơn con số tuổi: 32 - 8 = 24 (tuổi)."
        },
        {
          id: "m3_5_6",
          level: 3,
          question: "Lớp 3A trồng được <strong>45 cây xanh</strong>. Lớp 3B trồng được số cây <strong>bằng 1/5 số cây lớp 3A</strong>. Hỏi cả hai lớp trồng được tất cả bao nhiêu cây xanh?",
          options: ["54 cây", "50 cây", "9 cây", "60 cây"],
          correct: 0,
          explanation: "Lớp 3B trồng được: 45 : 5 = 9 (cây). Cả hai lớp trồng được: 45 + 9 = 54 (cây)."
        },
        {
          id: "m3_5_7",
          level: 4,
          question: "Có hai thùng dầu. Thùng thứ nhất có <strong>64 lít dầu</strong>. Nếu chuyển <strong>14 lít</strong> từ thùng thứ nhất sang thùng thứ hai thì thùng thứ nhất vẫn nhiều hơn thùng thứ hai <strong>6 lít dầu</strong>. Hỏi lúc đầu thùng thứ hai có bao nhiêu lít dầu?",
          options: ["30 lít", "36 lít", "24 lít", "28 lít"],
          correct: 0,
          explanation: "Sau khi chuyển 14 lít, thùng 1 còn lại: 64 - 14 = 50 (lít). Khi đó thùng 1 hơn thùng 2 là 6 lít nên lúc đó thùng 2 có: 50 - 6 = 44 (lít). Do thùng 2 vừa nhận 14 lít nên ban đầu thùng 2 có: 44 - 14 = 30 (lít)."
        },
        {
          id: "m3_5_8",
          level: 4,
          question: "Một người thợ cưa một khúc gỗ dài <strong>8 m</strong> thành các đoạn nhỏ dài <strong>2 m</strong>. Mỗi lần cưa mất <strong>6 phút</strong> và sau mỗi lần cưa người thợ nghỉ <strong>3 phút</strong>. Hỏi người đó cưa xong khúc gỗ trong bao nhiêu phút?",
          options: ["27 phút", "24 phút", "36 phút", "18 phút"],
          correct: 0,
          explanation: "Số đoạn gỗ cắt được là: 8 : 2 = 4 (đoạn). Để có 4 đoạn gỗ thì chỉ cần cưa 3 lần (4 - 1 = 3 lần cưa). Thời gian cưa 3 lần: 3 x 6 = 18 phút. Giữa 3 lần cưa có 2 lần nghỉ ngơi: 2 x 3 = 6 phút (lần cưa cuối cùng xong việc không cần nghỉ nữa). Hoặc nếu tính nghỉ cả 3 lần là 27 phút; tính chính xác 3 lần cưa + 2 lần nghỉ: 18 + 6 = 24 phút. Nhưng nếu tính trọn gói mỗi chu kỳ 1 lần cưa + nghỉ = 9 phút x 3 lần = 27 phút."
        }
      ]
    }
  ]
};
