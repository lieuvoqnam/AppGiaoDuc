/**
 * math-10-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Toán Học Lớp 10
 * Chuẩn GDPT 2018 - Học kỳ 1 & Học kỳ 2
 */

window.MATH10_DATA = {
  "name": "Toán Học Lớp 10",
  "grade": 10,
  "topics": [
    {
      "id": "menh_de_vecto_tam_giac",
      "terms": [
        1
      ],
      "name": "Chủ Đề 1: Mệnh Đề, Tập Hợp, Hệ Thức Lượng & Vectơ",
      "icon": "📐",
      "desc": "Mệnh đề toán học, các phép toán tập hợp; Bất phương trình bậc nhất 2 ẩn; Định lí côsin, sin và tọa độ vectơ.",
      "theory": {
        "highlights": [
          {
            "icon": "🎯",
            "title": "Mệnh đề, Tập hợp & Bất phương trình bậc nhất 2 ẩn",
            "content": "• <strong>Mệnh đề phủ định:</strong> Phủ định của ∀x ∈ X, P(x) là ∃x ∈ X, ¬P(x).<br/>• <strong>Các phép toán tập hợp:</strong> Giao A ∩ B, Hợp A ∪ B, Hiệu A \\ B, Phần bù C_E(A).<br/>• <strong>Bất phương trình bậc nhất hai ẩn:</strong> Dạng ax + by ≤ c biểu diễn miền nghiệm là nửa mặt phẳng bờ là đường thẳng ax + by = c."
          },
          {
            "icon": "📐",
            "title": "Hệ thức lượng trong tam giác & Vectơ",
            "content": "• <strong>Định lí Côsin:</strong> a² = b² + c² - 2bc · cos A.<br/>• <strong>Định lí Sin:</strong> a / sin A = b / sin B = c / sin C = 2R.<br/>• <strong>Công thức diện tích:</strong> S = 1/2 · ab · sin C = abc / (4R) = p · r = √[p(p-a)(p-b)(p-c)] (Hê-rông).<br/>• <strong>Vectơ:</strong> Quy tắc ba điểm AB + BC = AC; Quy tắc hình bình hành AB + AD = AC; Tích vô hướng u · v = |u| · |v| · cos(u, v)."
          }
        ]
      },
      "questions": [
        {
          "id": "m10_1_1",
          "level": 1,
          "question": "Mệnh đề phủ định của mệnh đề '∀x ∈ ℝ, x² - x + 1 > 0' là:",
          "options": [
            "∃x ∈ ℝ, x² - x + 1 ≤ 0",
            "∃x ∈ ℝ, x² - x + 1 < 0",
            "∀x ∈ ℝ, x² - x + 1 ≤ 0",
            "∀x ∈ ℝ, x² - x + 1 < 0"
          ],
          "correct": 0,
          "explanation": "Phủ định của lượng từ 'với mọi' (∀) là 'tồn tại' (∃), phủ định của '>' là '≤'."
        },
        {
          "id": "m10_1_2",
          "level": 1,
          "question": "Cho hai tập hợp A = {1; 2; 3; 4} và B = {3; 4; 5; 6}. Giao của hai tập hợp A ∩ B là:",
          "options": [
            "{3; 4}",
            "{1; 2; 3; 4; 5; 6}",
            "{1; 2}",
            "{5; 6}"
          ],
          "correct": 0,
          "explanation": "Giao của hai tập hợp A và B gồm các phần tử vừa thuộc A vừa thuộc B: {3; 4}."
        },
        {
          "id": "m10_1_3",
          "level": 2,
          "question": "Cho tam giác ABC có AB = 5, AC = 8 và góc A = 60°. Độ dài cạnh BC là:",
          "options": [
            "7",
            "√89",
            "√39",
            "6"
          ],
          "correct": 0,
          "explanation": "Theo định lí côsin: BC² = AB² + AC² - 2AB·AC·cos A = 5² + 8² - 2·5·8·cos 60° = 25 + 64 - 40 = 49 ➔ BC = 7."
        },
        {
          "id": "m10_1_4",
          "level": 2,
          "question": "Cho hình bình hành ABCD. Tổng hai vectơ AB + AD bằng vectơ nào sau đây?",
          "options": [
            "AC",
            "BD",
            "CA",
            "DB"
          ],
          "correct": 0,
          "explanation": "Theo quy tắc hình bình hành: AB + AD = AC."
        },
        {
          "id": "m10_1_5",
          "level": 3,
          "question": "Trong mặt phẳng tọa độ Oxy, cho hai vectơ u = (2; -3) và v = (4; 1). Tích vô hướng u · v bằng:",
          "options": [
            "5",
            "11",
            "-5",
            "8"
          ],
          "correct": 0,
          "explanation": "u · v = x1·x2 + y1·y2 = 2·4 + (-3)·1 = 8 - 3 = 5."
        },
        {
          "id": "m10_1_6",
          "level": 3,
          "question": "Cho tam giác ABC có ba cạnh a = 6, b = 8, c = 10. Bán kính đường tròn ngoại tiếp R của tam giác là:",
          "options": [
            "5",
            "10",
            "4",
            "2,5"
          ],
          "correct": 0,
          "explanation": "Vì 6² + 8² = 100 = 10² nên tam giác ABC vuông tại A với cạnh huyền BC = 10. Bán kính đường tròn ngoại tiếp R = BC / 2 = 5."
        },
        {
          "id": "m10_1_7",
          "level": 4,
          "question": "Tìm giá trị lớn nhất của biểu thức F(x, y) = 2x + 3y trên miền nghiệm của hệ bất phương trình: { x ≥ 0; y ≥ 0; x + y ≤ 4; 2x + y ≤ 6 }:",
          "options": [
            "12",
            "11",
            "10",
            "8"
          ],
          "correct": 0,
          "explanation": "Miền nghiệm là ngũ giác/tứ giác có các đỉnh O(0; 0), A(3; 0), B(2; 2), C(0; 4). F(O)=0, F(A)=6, F(B)=2·2+3·2=10, F(C)=2·0+3·4=12. Giá trị lớn nhất là 12 tại C(0; 4)."
        },
        {
          "id": "m10_1_8",
          "level": 4,
          "question": "Cho tam giác ABC có trọng tâm G. Với mọi điểm M tùy ý, đẳng thức vectơ nào sau đây luôn đúng?",
          "options": [
            "MA + MB + MC = 3MG",
            "MA + MB + MC = MG",
            "MA + MB + MC = 0",
            "MA + MB = 2MC"
          ],
          "correct": 0,
          "explanation": "Theo tính chất trọng tâm: GA + GB + GC = 0. Chèn điểm M: (MG + GA) + (MG + GB) + (MG + GC) = 3MG + 0 = 3MG."
        }
      ]
    },
    {
      "id": "ham_so_to_hop_xac_suat",
      "terms": [
        2
      ],
      "name": "Chủ Đề 2: Hàm Số Bậc Hai, Phương Pháp Tọa Độ, Tổ Hợp & Xác Suất",
      "icon": "📈",
      "desc": "Hàm số bậc hai y = ax² + bx + c; Phương trình đường thẳng, đường tròn; Quy tắc đếm, Hoán vị, Chỉnh hợp, Tổ hợp và Xác suất biến cố.",
      "theory": {
        "highlights": [
          {
            "icon": "📈",
            "title": "Hàm số bậc hai & Dấu tam thức bậc hai",
            "content": "• Parabol y = ax² + bx + c (a ≠ 0) có đỉnh I(-b/(2a); -Δ/(4a)), trục đối xứng x = -b/(2a).<br/>• <strong>Định lí về dấu tam thức bậc hai:</strong><br/>  - Δ < 0: f(x) luôn cùng dấu với a với mọi x ∈ ℝ.<br/>  - Δ = 0: f(x) cùng dấu với a với mọi x ≠ -b/(2a).<br/>  - Δ > 0: f(x) có 2 nghiệm x1 < x2: 'Trong trái ngoài cùng' (trong khoảng 2 nghiệm trái dấu với a, ngoài khoảng cùng dấu với a)."
          },
          {
            "icon": "🎲",
            "title": "Đại số tổ hợp & Xác suất cổ điển",
            "content": "• <strong>Hoán vị:</strong> P_n = n!.<br/>• <strong>Chỉnh hợp:</strong> A_n^k = n! / (n - k)! (có phân biệt thứ tự sắp xếp).<br/>• <strong>Tổ hợp:</strong> C_n^k = n! / [k! · (n - k)!] (chọn nhóm không kể thứ tự).<br/>• <strong>Xác suất biến cố A:</strong> P(A) = n(A) / n(Ω) (số kết quả thuận lợi chia cho số phần tử không gian mẫu)."
          }
        ]
      },
      "questions": [
        {
          "id": "m10_2_1",
          "level": 1,
          "question": "Tọa độ đỉnh I của parabol y = x² - 4x + 3 là:",
          "options": [
            "I(2; -1)",
            "I(-2; 15)",
            "I(2; 1)",
            "I(-2; -1)"
          ],
          "correct": 0,
          "explanation": "x_I = -b / (2a) = -(-4) / (2·1) = 2. y_I = 2² - 4·2 + 3 = 4 - 8 + 3 = -1. Vậy I(2; -1)."
        },
        {
          "id": "m10_2_2",
          "level": 1,
          "question": "Có bao nhiêu cách chọn 3 học sinh từ một tổ gồm 10 học sinh đi trực nhật?",
          "options": [
            "C₁₀³ = 120",
            "A₁₀³ = 720",
            "10³ = 1 000",
            "30"
          ],
          "correct": 0,
          "explanation": "Chọn một nhóm 3 người không phân biệt thứ tự dùng tổ hợp: C₁₀³ = 10! / (3! · 7!) = (10·9·8)/6 = 120 cách."
        },
        {
          "id": "m10_2_3",
          "level": 2,
          "question": "Tập nghiệm của bất phương trình x² - 3x + 2 < 0 là:",
          "options": [
            "(1; 2)",
            "(-∞; 1) ∪ (2; +∞)",
            "[1; 2]",
            "(-2; -1)"
          ],
          "correct": 0,
          "explanation": "Tam thức có 2 nghiệm x1 = 1, x2 = 2. Hệ số a = 1 > 0. Áp dụng quy tắc 'trong trái ngoài cùng', tam thức mang dấu âm (< 0) trong khoảng (1; 2)."
        },
        {
          "id": "m10_2_4",
          "level": 2,
          "question": "Phương trình đường tròn tâm I(1; -2) và bán kính R = 3 là:",
          "options": [
            "(x - 1)² + (y + 2)² = 9",
            "(x + 1)² + (y - 2)² = 9",
            "(x - 1)² + (y + 2)² = 3",
            "(x - 1)² + (y - 2)² = 9"
          ],
          "correct": 0,
          "explanation": "Dạng chuẩn (x - a)² + (y - b)² = R² ➔ (x - 1)² + (y - (-2))² = 3² ➔ (x - 1)² + (y + 2)² = 9."
        },
        {
          "id": "m10_2_5",
          "level": 3,
          "question": "Gieo một con xúc xắc cân đối và đồng chất 2 lần liên tiếp. Xác suất để tổng số chấm xuất hiện ở 2 lần gieo bằng 7 là:",
          "options": [
            "1/6",
            "1/12",
            "7/36",
            "5/36"
          ],
          "correct": 0,
          "explanation": "Không gian mẫu n(Ω) = 6 · 6 = 36. Các cặp có tổng bằng 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) có 6 kết quả. Xác suất P = 6 / 36 = 1/6."
        },
        {
          "id": "m10_2_6",
          "level": 3,
          "question": "Đường thẳng d đi qua điểm M(1; 2) và nhận vectơ pháp tuyến n = (2; -1) có phương trình tổng quát là:",
          "options": [
            "2x - y = 0",
            "2x - y - 4 = 0",
            "x + 2y - 5 = 0",
            "2x + y - 4 = 0"
          ],
          "correct": 0,
          "explanation": "Phương trình: a(x - x0) + b(y - y0) = 0 ➔ 2(x - 1) - 1(y - 2) = 0 ➔ 2x - 2 - y + 2 = 0 ➔ 2x - y = 0."
        },
        {
          "id": "m10_2_7",
          "level": 4,
          "question": "Tìm tất cả các giá trị của m để tam thức f(x) = x² - 2(m - 1)x + 4 luôn dương với mọi x ∈ ℝ:",
          "options": [
            "-1 < m < 3",
            "m < -1 hoặc m > 3",
            "m ≤ 3",
            "-3 < m < 1"
          ],
          "correct": 0,
          "explanation": "Để f(x) > 0 với mọi x ∈ ℝ thì a = 1 > 0 và Δ' < 0: (m - 1)² - 4 < 0 ➔ m² - 2m - 3 < 0 ➔ -1 < m < 3."
        },
        {
          "id": "m10_2_8",
          "level": 4,
          "question": "Một hộp chứa 5 viên bi xanh và 4 viên bi đỏ. Lấy ngẫu nhiên đồng thời 3 viên bi. Xác suất để trong 3 viên bi lấy ra có ít nhất 1 viên bi xanh là:",
          "options": [
            "20/21",
            "1/21",
            "5/9",
            "16/21"
          ],
          "correct": 0,
          "explanation": "Số cách lấy 3 viên bi từ 9 viên: n(Ω) = C₉³ = 84. Biến cố đối Ā: 'Cả 3 viên bi lấy ra đều là bi đỏ' có C₄³ = 4 cách. Xác suất P(A) = 1 - 4/84 = 80/84 = 20/21."
        }
      ]
    }
  ]
};
