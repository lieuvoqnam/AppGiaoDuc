/**
 * math-4-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Toán Lớp 4
 * Chuẩn Chương trình GDPT 2018 (Kết nối tri thức, Cánh diều, Chân trời sáng tạo)
 */

window.MATH4_DATA = {
  topics: [
    {
      id: "natural_numbers",
      name: "Số Tự Nhiên & Phép Tính",
      icon: "🔢",
      color: "#3b82f6",
      desc: "Hàng và lớp, làm tròn số, tính chất phép tính, nhân/chia số có hai chữ số, dấu hiệu chia hết.",
      theory: {
        highlights: [
          {
            title: "Hàng và Lớp",
            content: "Mỗi lớp gồm 3 hàng từ phải sang trái:<br/>• <strong>Lớp đơn vị:</strong> Hàng đơn vị, chục, trăm.<br/>• <strong>Lớp nghìn:</strong> Hàng nghìn, chục nghìn, trăm nghìn.<br/>• <strong>Lớp triệu:</strong> Hàng triệu, chục triệu, trăm triệu."
          },
          {
            title: "Quy tắc làm tròn số",
            content: "Nhìn chữ số ngay bên phải hàng cần làm tròn:<br/>• Nếu <strong>&lt; 5</strong> (0, 1, 2, 3, 4): Giữ nguyên hàng làm tròn, các chữ số phía sau thành 0.<br/>• Nếu <strong>&ge; 5</strong> (5, 6, 7, 8, 9): Cộng thêm 1 vào hàng làm tròn, các chữ số phía sau thành 0."
          },
          {
            title: "Dấu hiệu chia hết",
            content: "• <strong>Chia hết cho 2:</strong> Chữ số tận cùng chẵn (0, 2, 4, 6, 8).<br/>• <strong>Chia hết cho 5:</strong> Tận cùng là 0 hoặc 5.<br/>• <strong>Chia hết cho cả 2 và 5:</strong> Tận cùng là 0.<br/>• <strong>Chia hết cho 9:</strong> Tổng các chữ số chia hết cho 9.<br/>• <strong>Chia hết cho 3:</strong> Tổng các chữ số chia hết cho 3."
          },
          {
            title: "Mẹo nhân nhẩm siêu tốc",
            content: "• <strong>Nhân với 11 (2 chữ số):</strong> Viết tổng 2 chữ số vào giữa (35 × 11: 3 + 5 = 8 → 385; 78 × 11: 7 + 8 = 15 → viết 5 ở giữa, nhớ 1 sang 7 thành 858).<br/>• <strong>Nhân với 25:</strong> Chia số đó cho 4 rồi nhân với 100."
          }
        ]
      },
      questions: [
        {
          id: "nn_1",
          level: 1,
          type: "choice",
          question: "Chữ số 7 trong số <strong>45 782 310</strong> thuộc hàng nào, lớp nào?",
          options: [
            "Hàng trăm, lớp đơn vị",
            "Hàng trăm nghìn, lớp nghìn",
            "Hàng triệu, lớp triệu",
            "Hàng chục nghìn, lớp nghìn"
          ],
          correct: 1,
          explanation: "Từ phải sang trái: 0 (đơn vị), 1 (chục), 3 (trăm), 2 (nghìn), 8 (chục nghìn), 7 (trăm nghìn). Vậy chữ số 7 thuộc hàng trăm nghìn, lớp nghìn."
        },
        {
          id: "nn_2",
          level: 1,
          type: "choice",
          question: "Trong các số sau, số nào vừa chia hết cho 2 vừa chia hết cho 5?",
          options: ["135", "248", "370", "405"],
          correct: 2,
          explanation: "Số vừa chia hết cho 2 vừa chia hết cho 5 phải có chữ số tận cùng là 0. Trong các số trên, số 370 có tận cùng là 0."
        },
        {
          id: "nn_3",
          level: 2,
          type: "choice",
          question: "Làm tròn số <strong>478 625</strong> đến hàng nghìn ta được số nào?",
          options: ["478 000", "479 000", "480 000", "478 600"],
          correct: 1,
          explanation: "Hàng nghìn là chữ số 8. Chữ số ngay sau nó (hàng trăm) là 6 ≥ 5, do đó ta cộng thêm 1 vào hàng nghìn: 8 + 1 = 9 và thay các chữ số sau bằng 0 → 479 000."
        },
        {
          id: "nn_4",
          level: 2,
          type: "choice",
          question: "Kết quả của phép tính: <strong>314 × 25</strong> là:",
          options: ["7 850", "7 650", "8 150", "6 850"],
          correct: 0,
          explanation: "Đặt tính: 314 × 25 = 7 850. (Hoặc mẹo: 314 × 25 = 314 × 100 : 4 = 31 400 : 4 = 7 850)."
        },
        {
          id: "nn_5",
          level: 3,
          type: "choice",
          question: "Tính bằng cách thuận tiện nhất: <strong>48 × 115 - 48 × 15</strong>",
          options: ["4 800", "48 000", "480", "5 200"],
          correct: 0,
          explanation: "Áp dụng tính chất nhân một số với một hiệu: 48 × (115 - 15) = 48 × 100 = 4 800."
        },
        {
          id: "nn_6",
          level: 3,
          type: "choice",
          question: "Tìm chữ số x để số <strong>5x4</strong> chia hết cho 9:",
          options: ["0", "9", "4", "cả 0 và 9 đều đúng"],
          correct: 3,
          explanation: "Tổng các chữ số: 5 + x + 4 = 9 + x. Để chia hết cho 9 thì 9 + x chia hết cho 9. Do x là chữ số (0 đến 9), nên x có thể bằng 0 hoặc 9 (504 hoặc 594)."
        },
        {
          id: "nn_7",
          level: 4,
          type: "choice",
          question: "Để đánh số trang của một quyển sách từ trang 1 đến trang 120, người ta phải dùng bao nhiêu chữ số?",
          options: ["252", "240", "261", "249"],
          correct: 0,
          explanation: "• Từ trang 1 đến 9: (9 - 1 + 1) = 9 trang × 1 = 9 chữ số.<br/>• Từ trang 10 đến 99: (99 - 10 + 1) = 90 trang × 2 = 180 chữ số.<br/>• Từ trang 100 đến 120: (120 - 100 + 1) = 21 trang × 3 = 63 chữ số.<br/>Tổng chữ số: 9 + 180 + 63 = 252 chữ số."
        }
      ]
    },
    {
      id: "fractions",
      name: "Phân Số & Các Phép Tính",
      icon: "➗",
      color: "#10b981",
      desc: "Bản chất phân số, rút gọn, quy đồng, so sánh, 4 phép tính cộng, trừ, nhân, chia phân số.",
      theory: {
        highlights: [
          {
            title: "Khái niệm phân số",
            content: "Phân số có dạng <span class='f-math'>a/b</span> (b ≠ 0). a là tử số, b là mẫu số.<br/>• <strong>Tử số &lt; Mẫu số:</strong> Phân số &lt; 1.<br/>• <strong>Tử số = Mẫu số:</strong> Phân số = 1.<br/>• <strong>Tử số &gt; Mẫu số:</strong> Phân số &gt; 1."
          },
          {
            title: "Cộng & Trừ phân số",
            content: "• <strong>Cùng mẫu số:</strong> Cộng/trừ tử số với tử số, giữ nguyên mẫu số.<br/>• <strong>Khác mẫu số:</strong> Quy đồng mẫu số về cùng mẫu số chung rồi cộng/trừ."
          },
          {
            title: "Nhân & Chia phân số",
            content: "• <strong>Nhân:</strong> <span class='f-math'>a/b × c/d = (a × c)/(b × d)</span> (Tử nhân tử, mẫu nhân mẫu).<br/>• <strong>Chia:</strong> <span class='f-math'>a/b : c/d = a/b × d/c</span> (Nhân với phân số đảo ngược)."
          },
          {
            title: "Tìm phân số của một số",
            content: "Muốn tìm <span class='f-math'>m/n</span> của số A, ta lấy: <strong>A × <span class='f-math'>m/n</span></strong>."
          }
        ]
      },
      questions: [
        {
          id: "fr_1",
          level: 1,
          type: "choice",
          question: "Rút gọn phân số <strong>18/24</strong> thành phân số tối giản ta được:",
          options: ["9/12", "6/8", "3/4", "2/3"],
          correct: 2,
          explanation: "Chia cả tử và mẫu cho ước chung lớn nhất là 6: 18 : 6 = 3; 24 : 6 = 4. Phân số tối giản là 3/4."
        },
        {
          id: "fr_2",
          level: 1,
          type: "choice",
          question: "Phân số nào sau đây lớn hơn 1?",
          options: ["5/8", "7/7", "9/11", "12/7"],
          correct: 3,
          explanation: "Phân số lớn hơn 1 khi tử số lớn hơn mẫu số. Trong các phân số trên, 12/7 có tử số 12 > mẫu số 7 nên 12/7 > 1."
        },
        {
          id: "fr_3",
          level: 2,
          type: "choice",
          question: "Kết quả của phép tính: <strong>3/5 + 2/7</strong> là:",
          options: ["5/12", "31/35", "16/35", "6/35"],
          correct: 1,
          explanation: "Quy đồng mẫu số chung là 35: 3/5 = 21/35; 2/7 = 10/35. Tổng: 21/35 + 10/35 = 31/35."
        },
        {
          id: "fr_4",
          level: 2,
          type: "choice",
          question: "Tìm x, biết: <strong>x × 3/4 = 9/8</strong>",
          options: ["x = 27/32", "x = 3/2", "x = 2/3", "x = 12/24"],
          correct: 1,
          explanation: "x = 9/8 : 3/4 = 9/8 × 4/3 = 36/24 = 3/2."
        },
        {
          id: "fr_5",
          level: 3,
          type: "choice",
          question: "Một mảnh vải dài 45m. Người thợ may cắt 3/5 chiều dài tấm vải để may áo. Hỏi mảnh vải còn lại bao nhiêu mét?",
          options: ["27m", "18m", "15m", "30m"],
          correct: 1,
          explanation: "Chiều dài vải đã may áo: 45 × 3/5 = 27m. Chiều dài mảnh vải còn lại: 45 - 27 = 18m."
        },
        {
          id: "fr_6",
          level: 4,
          type: "choice",
          question: "Tính nhanh tổng sau: <strong>S = 1/2 + 1/4 + 1/8 + 1/16 + 1/32 + 1/64</strong>",
          options: ["63/64", "1", "65/64", "31/32"],
          correct: 0,
          explanation: "Nhân 2 vế với 2: 2 × S = 1 + 1/2 + 1/4 + 1/8 + 1/16 + 1/32.<br/>Lấy (2 × S) - S = 1 - 1/64 = 63/64."
        }
      ]
    },
    {
      id: "measurements",
      name: "Đại Lượng & Đo Lường",
      icon: "⚖️",
      color: "#ea580c",
      desc: "Khối lượng (yến, tạ, tấn), diện tích (m², dm², cm²), thời gian (thế kỉ, giây).",
      theory: {
        highlights: [
          {
            title: "Khối lượng",
            content: "Tấn → Tạ → Yến → kg → hg → dag → g (mỗi đơn vị liền kề gấp/kém nhau <strong>10 lần</strong>).<br/>• 1 tấn = 10 tạ = 100 yến = 1000 kg.<br/>• 1 tạ = 10 yến = 100 kg.<br/>• 1 yến = 10 kg."
          },
          {
            title: "Diện tích",
            content: "m² → dm² → cm² → mm² (mỗi đơn vị đo diện tích liền kề gấp/kém nhau <strong>100 lần</strong>).<br/>• 1 m² = 100 dm² = 10 000 cm².<br/>• 1 dm² = 100 cm² = 10 000 mm²."
          },
          {
            title: "Thời gian & Thế kỉ",
            content: "• 1 thế kỉ = 100 năm.<br/>• Xác định thế kỉ: Năm tận cùng khác '00', lấy (phần nghìn + trăm) cộng thêm 1.<br/>• Ví dụ: Năm 938: 9 + 1 = 10 (thế kỉ X); Năm 2026: 20 + 1 = 21 (thế kỉ XXI)."
          }
        ]
      },
      questions: [
        {
          id: "ms_1",
          level: 1,
          type: "choice",
          question: "Điền số thích hợp vào chỗ chấm: <strong>3 tạ 5 yến = ...... kg</strong>",
          options: ["35 kg", "350 kg", "305 kg", "3 500 kg"],
          correct: 1,
          explanation: "3 tạ = 300 kg; 5 yến = 50 kg. Tổng cộng: 300 + 50 = 350 kg."
        },
        {
          id: "ms_2",
          level: 1,
          type: "choice",
          question: "Năm 1010, vua Lý Thái Tổ dời đô về Thăng Long (Hà Nội). Năm đó thuộc thế kỉ nào?",
          options: ["Thế kỉ X", "Thế kỉ XI", "Thế kỉ IX", "Thế kỉ XII"],
          correct: 1,
          explanation: "Năm 1010: Phần nghìn và trăm là 10. Do hai chữ số cuối khác 00 nên ta lấy 10 + 1 = 11 → Thế kỉ XI (mười một)."
        },
        {
          id: "ms_3",
          level: 2,
          type: "choice",
          question: "Điền dấu thích hợp: <strong>5 m² 8 dm² ...... 580 dm²</strong>",
          options: [">", "<", "=", "Không so sánh được"],
          correct: 1,
          explanation: "Đổi 5 m² 8 dm² = 500 dm² + 8 dm² = 508 dm². Vì 508 dm² < 580 dm² nên dấu cần điền là <."
        },
        {
          id: "ms_4",
          level: 3,
          type: "choice",
          question: "Một căn phòng hình chữ nhật dài 8m, rộng 5m. Người ta dùng các viên gạch hoa hình vuông cạnh 4dm để lát kín nền. Cần bao nhiêu viên gạch?",
          options: ["100 viên", "200 viên", "250 viên", "400 viên"],
          correct: 2,
          explanation: "Diện tích căn phòng: 8 × 5 = 40 m² = 4 000 dm².<br/>Diện tích 1 viên gạch: 4 × 4 = 16 dm².<br/>Số viên gạch cần dùng: 4 000 : 16 = 250 viên."
        },
        {
          id: "ms_5",
          level: 4,
          type: "choice",
          question: "Một thửa ruộng hình chữ nhật có chiều dài 60m, chiều rộng bằng 2/3 chiều dài. Cứ 100 m² thu hoạch được 50kg thóc. Cả thửa ruộng thu được bao nhiêu tạ thóc?",
          options: ["12 tạ", "1 200 tạ", "24 tạ", "120 tạ"],
          correct: 0,
          explanation: "Chiều rộng: 60 × 2/3 = 40m. Diện tích: 60 × 40 = 2 400 m².<br/>Số thóc thu được: 2 400 : 100 × 50 = 1 200 kg = 12 tạ thóc."
        }
      ]
    },
    {
      id: "geometry",
      name: "Hình Học & Diện Tích",
      icon: "📐",
      color: "#8b5cf6",
      desc: "Góc nhọn, góc vuông, góc tù, góc bẹt; đường song song/vuông góc; hình bình hành; hình thoi.",
      theory: {
        highlights: [
          {
            title: "Các loại góc",
            content: "• <strong>Góc nhọn:</strong> &lt; 90° (nhỏ hơn góc vuông).<br/>• <strong>Góc vuông:</strong> = 90°.<br/>• <strong>Góc tù:</strong> &gt; 90° và &lt; 180°.<br/>• <strong>Góc bẹt:</strong> = 180° (bằng 2 góc vuông)."
          },
          {
            title: "Hình bình hành",
            content: "• Có 2 cặp cạnh đối diện song song và bằng nhau.<br/>• <strong>Chu vi:</strong> P = (a + b) × 2.<br/>• <strong>Diện tích:</strong> S = a × h (Đáy × Chiều cao)."
          },
          {
            title: "Hình thoi",
            content: "• Có 4 cạnh bằng nhau, 2 đường chéo vuông góc tại trung điểm.<br/>• <strong>Diện tích:</strong> S = (m × n) : 2 (Tích 2 đường chéo chia 2)."
          }
        ]
      },
      questions: [
        {
          id: "geo_1",
          level: 1,
          type: "choice",
          question: "Góc có số đo lớn hơn góc vuông và bé hơn góc bẹt được gọi là:",
          options: ["Góc nhọn", "Góc vuông", "Góc tù", "Góc tam giác"],
          correct: 2,
          explanation: "Theo định nghĩa hình học lớp 4: Góc tù là góc lớn hơn góc vuông và bé hơn góc bẹt."
        },
        {
          id: "geo_2",
          level: 2,
          type: "choice",
          question: "Một hình bình hành có độ dài đáy là 15cm, chiều cao tương ứng 8cm. Diện tích hình bình hành đó là:",
          options: ["60 cm²", "120 cm²", "46 cm²", "23 cm²"],
          correct: 1,
          explanation: "Diện tích hình bình hành S = a × h = 15 × 8 = 120 cm²."
        },
        {
          id: "geo_3",
          level: 2,
          type: "choice",
          question: "Một hình thoi có độ dài hai đường chéo lần lượt là 14cm và 10cm. Diện tích hình thoi là:",
          options: ["140 cm²", "70 cm²", "48 cm²", "24 cm²"],
          correct: 1,
          explanation: "Diện tích hình thoi S = (m × n) : 2 = (14 × 10) : 2 = 140 : 2 = 70 cm²."
        },
        {
          id: "geo_4",
          level: 3,
          type: "choice",
          question: "Một tấm bìa hình thoi có diện tích bằng diện tích hình vuông cạnh 12cm. Biết một đường chéo dài 16cm. Đường chéo còn lại dài:",
          options: ["9cm", "18cm", "12cm", "24cm"],
          correct: 1,
          explanation: "Diện tích hình vuông: 12 × 12 = 144 cm². Diện tích hình thoi = (m × n) : 2 = 144 → m × n = 288. Đường chéo còn lại: 288 : 16 = 18cm."
        },
        {
          id: "geo_5",
          level: 4,
          type: "choice",
          question: "Một thửa ruộng hình chữ nhật có chu vi 140m. Nếu tăng chiều rộng thêm 10m và giảm chiều dài đi 10m thì thửa ruộng trở thành hình vuông. Diện tích thửa ruộng ban đầu là:",
          options: ["1 225 m²", "1 125 m²", "1 200 m²", "1 050 m²"],
          correct: 1,
          explanation: "Nửa chu vi: 140 : 2 = 70m. Chiều dài hơn chiều rộng: 10 + 10 = 20m.<br/>Chiều dài: (70 + 20) : 2 = 45m. Chiều rộng: 70 - 45 = 25m.<br/>Diện tích: 45 × 25 = 1 125 m²."
        }
      ]
    },
    {
      id: "word_problems",
      name: "5 Dạng Toán Có Lời Văn",
      icon: "💡",
      color: "#ec4899",
      desc: "Trung bình cộng, Tổng - Hiệu, Tổng - Tỉ, Hiệu - Tỉ, bài toán rút về đơn vị.",
      theory: {
        highlights: [
          {
            title: "1. Trung bình cộng",
            content: "• <strong>TBC</strong> = Tổng các số : Số lượng số hạng.<br/>• <strong>Tổng các số</strong> = TBC × Số lượng số hạng."
          },
          {
            title: "2. Tìm 2 số khi biết Tổng & Hiệu",
            content: "• <strong>Số lớn</strong> = (Tổng + Hiệu) : 2.<br/>• <strong>Số bé</strong> = (Tổng - Hiệu) : 2."
          },
          {
            title: "3. Tìm 2 số khi biết Tổng & Tỉ",
            content: "• Bước 1: Tìm tổng số phần bằng nhau.<br/>• Bước 2: Tìm giá trị 1 phần = Tổng : Tổng số phần.<br/>• Bước 3: Tìm số bé và số lớn theo số phần."
          },
          {
            title: "4. Tìm 2 số khi biết Hiệu & Tỉ",
            content: "• Bước 1: Tìm hiệu số phần bằng nhau.<br/>• Bước 2: Tìm giá trị 1 phần = Hiệu : Hiệu số phần.<br/>• Bước 3: Tìm số bé và số lớn theo số phần."
          }
        ]
      },
      questions: [
        {
          id: "wp_1",
          level: 1,
          type: "choice",
          question: "Bốn bạn An, Bình, Cúc, Dũng có cân nặng lần lượt là 32kg, 35kg, 37kg, 36kg. Trung bình mỗi bạn nặng bao nhiêu kg?",
          options: ["34 kg", "35 kg", "36 kg", "35.5 kg"],
          correct: 1,
          explanation: "Tổng cân nặng: 32 + 35 + 37 + 36 = 140 kg. Trung bình cộng: 140 : 4 = 35 kg."
        },
        {
          id: "wp_2",
          level: 2,
          type: "choice",
          question: "Hai số có tổng là 98 và hiệu là 24. Số lớn là:",
          options: ["61", "37", "74", "62"],
          correct: 0,
          explanation: "Công thức Số lớn = (Tổng + Hiệu) : 2 = (98 + 24) : 2 = 122 : 2 = 61."
        },
        {
          id: "wp_3",
          level: 2,
          type: "choice",
          question: "Khối 4 có 180 học sinh, số học sinh nữ bằng 4/5 số học sinh nam. Số học sinh nữ là:",
          options: ["100 em", "80 em", "72 em", "90 em"],
          correct: 1,
          explanation: "Tổng số phần bằng nhau: 4 + 5 = 9 phần. Giá trị 1 phần: 180 : 9 = 20 em. Số học sinh nữ: 20 × 4 = 80 em."
        },
        {
          id: "wp_4",
          level: 3,
          type: "choice",
          question: "Bố hơn con 28 tuổi. Tuổi con bằng 2/9 tuổi bố. Tuổi của bố hiện nay là:",
          options: ["32 tuổi", "36 tuổi", "40 tuổi", "42 tuổi"],
          correct: 1,
          explanation: "Hiệu số phần bằng nhau: 9 - 2 = 7 phần. Tuổi con: 28 : 7 × 2 = 8 tuổi. Tuổi bố: 8 + 28 = 36 tuổi."
        },
        {
          id: "wp_5",
          level: 3,
          type: "choice",
          question: "Hiện nay tổng số tuổi của hai bà cháu là 68 tuổi. Cách đây 4 năm, tuổi bà gấp 5 lần tuổi cháu. Tuổi của cháu hiện nay là:",
          options: ["10 tuổi", "12 tuổi", "14 tuổi", "16 tuổi"],
          correct: 2,
          explanation: "Cách đây 4 năm, mỗi người bớt 4 tuổi → Tổng số tuổi 4 năm trước: 68 - (4 × 2) = 60 tuổi.<br/>Tổng số phần 4 năm trước: 5 + 1 = 6 phần.<br/>Tuổi cháu 4 năm trước: 60 : 6 = 10 tuổi.<br/>Tuổi cháu hiện nay: 10 + 4 = 14 tuổi."
        },
        {
          id: "wp_6",
          level: 4,
          type: "choice",
          question: "An có 18 viên bi, Bình có 22 viên bi. Cường có số bi nhiều hơn mức trung bình cộng của cả ba bạn là 4 viên bi. Cường có số viên bi là:",
          options: ["24 viên", "26 viên", "28 viên", "25 viên"],
          correct: 1,
          explanation: "Gọi TBC là mức trung bình cộng cả 3 bạn. Cường có: TBC + 4.<br/>Tổng số bi cả 3 bạn: 3 × TBC = 18 + 22 + (TBC + 4) = 44 + TBC.<br/>→ 2 × TBC = 44 → TBC = 22 viên.<br/>Số bi của Cường: 22 + 4 = 26 viên."
        }
      ]
    },
    {
      id: "statistics_probability",
      name: "Thống Kê & Xác Suất",
      icon: "📊",
      color: "#06b6d4",
      desc: "Biểu đồ cột, dãy số liệu, đánh giá khả năng sự kiện: chắc chắn, có thể, không thể.",
      theory: {
        highlights: [
          {
            title: "Khả năng xảy ra của một sự kiện",
            content: "• <strong>Chắc chắn:</strong> Sự kiện 100% xảy ra trong mọi trường hợp.<br/>• <strong>Có thể:</strong> Sự kiện có cơ hội diễn ra hoặc không diễn ra.<br/>• <strong>Không thể:</strong> Sự kiện 0% cơ hội diễn ra (hoàn toàn vô lý)."
          },
          {
            title: "Biểu đồ cột",
            content: "• Cột càng cao thể hiện số lượng càng nhiều.<br/>• Muốn tính trung bình: Lấy tổng chiều cao số liệu các cột chia cho số lượng cột."
          }
        ]
      },
      questions: [
        {
          id: "st_1",
          level: 1,
          type: "choice",
          question: "Trong hộp có 5 viên bi màu xanh và 1 viên bi màu đỏ. Lấy ngẫu nhiên 1 viên bi. Sự kiện nào sau đây là 'KHÔNG THỂ' xảy ra?",
          options: [
            "Lấy được viên bi màu xanh",
            "Lấy được viên bi màu đỏ",
            "Lấy được viên bi màu vàng",
            "Lấy được viên bi hình tròn"
          ],
          correct: 2,
          explanation: "Vì trong hộp chỉ có bi xanh và bi đỏ, không có bi vàng nên sự kiện 'Lấy được viên bi màu vàng' là không thể xảy ra."
        },
        {
          id: "st_2",
          level: 2,
          type: "choice",
          question: "Bốn lớp 4A, 4B, 4C, 4D trồng cây lần lượt là: 35 cây, 40 cây, 45 cây, 40 cây. Trung bình mỗi lớp trồng được bao nhiêu cây?",
          options: ["38 cây", "40 cây", "42 cây", "45 cây"],
          correct: 1,
          explanation: "Tổng số cây: 35 + 40 + 45 + 40 = 160 cây. Trung bình mỗi lớp: 160 : 4 = 40 cây."
        }
      ]
    }
  ],

  // Đề thi thử Học Kỳ tổng hợp (10 câu hỏi chuẩn hóa toàn diện 6 chủ đề)
  mockExam: [
    {
      id: "exam_1",
      topic: "Số tự nhiên",
      question: "Số <strong>'Bảy mươi hai triệu năm trăm linh bốn nghìn ba trăm mười'</strong> viết là:",
      options: ["72 504 310", "72 540 310", "72 504 301", "70 250 431"],
      correct: 0,
      explanation: "Lớp triệu: 72; Lớp nghìn: 504; Lớp đơn vị: 310. Viết là: 72 504 310."
    },
    {
      id: "exam_2",
      topic: "Đo lường",
      question: "Năm 1288, quân và dân nhà Trần đại thắng quân Nguyên Mông trên sông Bạch Đằng. Năm đó thuộc thế kỉ nào?",
      options: ["Thế kỉ XI", "Thế kỉ XII", "Thế kỉ XIII", "Thế kỉ XIV"],
      correct: 2,
      explanation: "Năm 1288: 12 + 1 = 13 → Thế kỉ XIII (mười ba)."
    },
    {
      id: "exam_3",
      topic: "Phân số",
      question: "Phân số nào dưới đây là phân số tối giản?",
      options: ["6/9", "15/25", "7/11", "8/12"],
      correct: 2,
      explanation: "7/11 có tử và mẫu là hai số nguyên tố cùng nhau (chỉ cùng chia hết cho 1) nên là phân số tối giản."
    },
    {
      id: "exam_4",
      topic: "Đo lường",
      question: "Điền số thích hợp: <strong>5 tấn 45 kg = ...... kg</strong>",
      options: ["545 kg", "5 045 kg", "5 450 kg", "50 045 kg"],
      correct: 1,
      explanation: "5 tấn = 5 000 kg. Cộng thêm 45 kg = 5 045 kg."
    },
    {
      id: "exam_5",
      topic: "Hình học",
      question: "Một hình bình hành có độ dài đáy là 18cm, chiều cao bằng 2/3 độ dài đáy. Diện tích hình bình hành là:",
      options: ["108 cm²", "216 cm²", "30 cm²", "54 cm²"],
      correct: 1,
      explanation: "Chiều cao: 18 × 2/3 = 12cm. Diện tích: 18 × 12 = 216 cm²."
    },
    {
      id: "exam_6",
      topic: "Số tự nhiên",
      question: "Tính nhanh: <strong>125 × 37 × 8</strong>",
      options: ["3 700", "37 000", "370 000", "46 250"],
      correct: 1,
      explanation: "Nhóm (125 × 8) × 37 = 1 000 × 37 = 37 000."
    },
    {
      id: "exam_7",
      topic: "Phân số",
      question: "Tính giá trị biểu thức: <strong>5/8 + 3/4 : 6/5</strong>",
      options: ["5/4", "10/8", "1/2", "3/4"],
      correct: 0,
      explanation: "Thực hiện phép chia trước: 3/4 : 6/5 = 3/4 × 5/6 = 15/24 = 5/8.<br/>Cộng: 5/8 + 5/8 = 10/8 = 5/4."
    },
    {
      id: "exam_8",
      topic: "Toán lời văn",
      question: "Một mảnh vườn hình chữ nhật có nửa chu vi là 75m, chiều rộng bằng 2/3 chiều dài. Chiều dài mảnh vườn là:",
      options: ["30m", "45m", "50m", "60m"],
      correct: 1,
      explanation: "Tổng số phần: 2 + 3 = 5 phần. Chiều dài mảnh vườn: 75 : 5 × 3 = 45m (chiều rộng là 30m)."
    },
    {
      id: "exam_9",
      topic: "Hình học",
      question: "Một hình thoi có diện tích 48 cm², độ dài một đường chéo là 8cm. Đường chéo còn lại dài:",
      options: ["6cm", "12cm", "24cm", "16cm"],
      correct: 1,
      explanation: "Ta có: (m × n) : 2 = 48 → m × n = 96. Đường chéo kia: 96 : 8 = 12cm."
    },
    {
      id: "exam_10",
      topic: "Toán nâng cao",
      question: "Một giá sách có 2 ngăn chứa 180 cuốn sách. Nếu chuyển 15 cuốn từ ngăn trên xuống ngăn dưới thì ngăn trên bằng 2/3 ngăn dưới. Ban đầu ngăn trên có:",
      options: ["72 cuốn", "87 cuốn", "93 cuốn", "105 cuốn"],
      correct: 1,
      explanation: "Tổng số phần sau khi chuyển: 2 + 3 = 5 phần. Số sách ngăn trên sau chuyển: 180 : 5 × 2 = 72 cuốn.<br/>Ban đầu ngăn trên có: 72 + 15 = 87 cuốn."
    }
  ]
};
