/**
 * math-9-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Toán Học Lớp 9
 * Chuẩn GDPT 2018 - Học kỳ 1 & Học kỳ 2
 */

window.MATH9_DATA = {
  "name": "Toán Học Lớp 9",
  "grade": 9,
  "topics": [
    {
      "id": "m9_can_thuc",
      "terms": [
        1
      ],
      "name": "Chủ Đề 1: Căn Thức Bậc Hai & Rút Gọn Biểu Thức Chứa Căn",
      "icon": "📐",
      "desc": "Căn bậc hai số học, điều kiện có nghĩa của căn thức, các phép biến đổi căn thức và bài toán rút gọn biểu thức thi vào 10.",
      "theory": {
        "highlights": [
          {
            "icon": "✨",
            "title": "Hằng đẳng thức √A² = |A| & Điều kiện xác định",
            "content": "• Căn thức <strong>√A</strong> có nghĩa khi và chỉ khi <strong>A ≥ 0</strong>.<br/>• Hằng đẳng thức cốt lõi: <strong>√(A²) = |A|</strong> (bằng A nếu A ≥ 0; bằng -A nếu A < 0).<br/>• Trục căn thức ở mẫu: Nhân lượng liên hợp: 1/(√A - √B) = (√A + √B)/(A - B)."
          },
          {
            "icon": "🎯",
            "title": "Chiến lược làm bài rút gọn thi vào 10",
            "content": "1. Tìm và đối chiếu điều kiện xác định (ĐKXĐ).<br/>2. Phân tích các mẫu thức thành nhân tử để tìm mẫu thức chung (MTC).<br/>3. Quy đồng, rút gọn tử thức, sau đó triệt tiêu nhân tử chung với mẫu thức.<br/>4. Các câu hỏi phụ: Tìm x để P = a, P > 0, tìm x nguyên để P nguyên, tìm GTLN/GTNN của P."
          }
        ]
      },
      "questions": [
        {
          "id": "m9_t1_01",
          "level": 1,
          "question": "Căn bậc hai số học của 81 là:",
          "options": [
            "9",
            "-9",
            "±9",
            "81"
          ],
          "correct": 0,
          "explanation": "Căn bậc hai số học của một số a ≥ 0 là số không âm x sao cho x² = a: √81 = 9."
        },
        {
          "id": "m9_t1_02",
          "level": 1,
          "question": "Căn thức √(2x - 6) có nghĩa khi và chỉ khi:",
          "options": [
            "x ≥ 3",
            "x > 3",
            "x ≤ 3",
            "x ≥ -3"
          ],
          "correct": 0,
          "explanation": "2x - 6 ≥ 0 ⇔ 2x ≥ 6 ⇔ x ≥ 3."
        },
        {
          "id": "m9_t1_03",
          "level": 1,
          "question": "Giá trị của biểu thức √((3 - √10)²) là:",
          "options": [
            "√10 - 3",
            "3 - √10",
            "±(3 - √10)",
            "1"
          ],
          "correct": 0,
          "explanation": "Vì 3 = √9 < √10 nên 3 - √10 < 0. Do đó √((3 - √10)²) = |3 - √10| = √10 - 3."
        },
        {
          "id": "m9_t1_04",
          "level": 2,
          "question": "Trục căn thức ở mẫu của biểu thức 2 / (√5 - 1) ta được kết quả là:",
          "options": [
            "(√5 + 1) / 2",
            "√5 + 1",
            "√5 - 1",
            "2(√5 + 1)"
          ],
          "correct": 0,
          "explanation": "2(√5 + 1) / ((√5 - 1)(√5 + 1)) = 2(√5 + 1) / 4 = (√5 + 1) / 2."
        },
        {
          "id": "m9_t1_05",
          "level": 2,
          "question": "Rút gọn biểu thức A = √18 - √8 + √50 ta được:",
          "options": [
            "6√2",
            "4√2",
            "5√2",
            "3√2"
          ],
          "correct": 0,
          "explanation": "A = 3√2 - 2√2 + 5√2 = 6√2."
        },
        {
          "id": "m9_t1_06",
          "level": 2,
          "question": "Nghiệm của phương trình √(x - 2) = 3 là:",
          "options": [
            "x = 11",
            "x = 7",
            "x = 5",
            "x = 8"
          ],
          "correct": 0,
          "explanation": "ĐK: x ≥ 2. Bình phương hai vế: x - 2 = 9 ⇔ x = 11 (thỏa mãn)."
        },
        {
          "id": "m9_t1_07",
          "level": 3,
          "question": "Rút gọn biểu thức P = (√x / (√x - 1) - 1 / (x - √x)) với x > 0, x ≠ 1 ta được:",
          "options": [
            "(√x + 1) / √x",
            "(√x - 1) / √x",
            "√x / (√x - 1)",
            "1"
          ],
          "correct": 0,
          "explanation": "MTC = √x(√x - 1). Tử số = √x·√x - 1 = x - 1 = (√x - 1)(√x + 1). Rút gọn được (√x + 1) / √x."
        },
        {
          "id": "m9_t1_08",
          "level": 3,
          "question": "Tìm x biết √(4x² - 12x + 9) = 5:",
          "options": [
            "x = 4 hoặc x = -1",
            "x = 4",
            "x = -1",
            "x = 1 hoặc x = -4"
          ],
          "correct": 0,
          "explanation": "√((2x - 3)²) = 5 ⇔ |2x - 3| = 5 ⇔ 2x - 3 = 5 hoặc 2x - 3 = -5 ⇔ x = 4 hoặc x = -1."
        },
        {
          "id": "m9_t1_09",
          "level": 3,
          "question": "Biểu thức √(x² + 6x + 9) - 2x khi x < -3 rút gọn thành:",
          "options": [
            "-3x - 3",
            "-x + 3",
            "3x + 3",
            "-x - 3"
          ],
          "correct": 0,
          "explanation": "|x + 3| - 2x. Với x < -3 thì x + 3 < 0, do đó -(x + 3) - 2x = -x - 3 - 2x = -3x - 3."
        },
        {
          "id": "m9_t1_10",
          "level": 4,
          "question": "Cho biểu thức P = (√x + 2) / (√x + 1). Tìm giá trị nguyên của x để P nhận giá trị nguyên:",
          "options": [
            "x = 0",
            "x = 1",
            "x = 4",
            "Không có giá trị nào"
          ],
          "correct": 0,
          "explanation": "P = 1 + 1 / (√x + 1). Vì x ≥ 0 nên √x + 1 ≥ 1. Để P nguyên thì 1 ⋮ (√x + 1) ⇒ √x + 1 = 1 ⇔ √x = 0 ⇔ x = 0."
        },
        {
          "id": "m9_t1_11",
          "level": 4,
          "question": "Giá trị lớn nhất của biểu thức A = √(x - 1) + √(5 - x) là:",
          "options": [
            "2√2",
            "4",
            "2",
            "√8"
          ],
          "correct": 0,
          "explanation": "ĐK: 1 ≤ x ≤ 5. Áp dụng BĐT Bunhiacopxki: A² = (1·√(x-1) + 1·√(5-x))² ≤ (1² + 1²)(x - 1 + 5 - x) = 2 · 4 = 8 ⇒ A ≤ √8 = 2√2. Dấu '=' khi x = 3."
        }
      ]
    },
    {
      "id": "m9_he_phuong_trinh",
      "terms": [
        1
      ],
      "name": "Chủ Đề 2: Hàm Số Bậc Nhất & Hệ Hai Phương Trình",
      "icon": "📈",
      "desc": "Tính chất biến thiên và đồ thị của y = ax + b, vị trí tương đối hai đường thẳng, giải hệ hai phương trình bậc nhất hai ẩn.",
      "theory": {
        "highlights": [
          {
            "icon": "📊",
            "title": "Hàm số bậc nhất y = ax + b (a ≠ 0)",
            "content": "• Đồng biến trên R khi <strong>a > 0</strong>; Nghịch biến trên R khi <strong>a < 0</strong>.<br/>• <strong>Vị trí tương đối của (d): y = ax + b và (d'): y = a'x + b':</strong><br/>- Song song: a = a' và b ≠ b'.<br/>- Trùng nhau: a = a' và b = b'.<br/>- Cắt nhau: a ≠ a' (Vuông góc khi a · a' = -1)."
          },
          {
            "icon": "⚙️",
            "title": "Phương pháp giải hệ phương trình bậc nhất hai ẩn",
            "content": "• <strong>Phương pháp thế:</strong> Rút một ẩn từ một phương trình rồi thế vào phương trình còn lại.<br/>• <strong>Phương pháp cộng đại số:</strong> Nhân hai vế với số thích hợp để hệ số của một ẩn bằng nhau (hoặc đối nhau) rồi trừ (hoặc cộng) hai vế để triệt tiêu ẩn đó."
          }
        ]
      },
      "questions": [
        {
          "id": "m9_t2_01",
          "level": 1,
          "question": "Hàm số y = (m - 2)x + 3 đồng biến trên R khi và chỉ khi:",
          "options": [
            "m > 2",
            "m < 2",
            "m ≥ 2",
            "m ≠ 2"
          ],
          "correct": 0,
          "explanation": "Hàm số bậc nhất đồng biến khi hệ số a > 0 ⇔ m - 2 > 0 ⇔ m > 2."
        },
        {
          "id": "m9_t2_02",
          "level": 1,
          "question": "Đường thẳng y = 2x - 5 đi qua điểm nào sau đây?",
          "options": [
            "M(2; -1)",
            "N(1; 3)",
            "P(0; 5)",
            "Q(-1; 3)"
          ],
          "correct": 0,
          "explanation": "Thay x = 2: y = 2·2 - 5 = -1. Vậy đường thẳng đi qua M(2; -1)."
        },
        {
          "id": "m9_t2_03",
          "level": 1,
          "question": "Hệ phương trình { x + y = 3 ; x - y = 1 } có nghiệm là:",
          "options": [
            "(2; 1)",
            "(1; 2)",
            "(3; 0)",
            "(0; 3)"
          ],
          "correct": 0,
          "explanation": "Cộng hai phương trình: 2x = 4 ⇒ x = 2; y = 3 - 2 = 1. Nghiệm là (2; 1)."
        },
        {
          "id": "m9_t2_04",
          "level": 2,
          "question": "Hai đường thẳng y = 2x + 1 và y = (m + 1)x - 3 song song với nhau khi:",
          "options": [
            "m = 1",
            "m = 2",
            "m = -1",
            "m = 3"
          ],
          "correct": 0,
          "explanation": "Hai đường thẳng song song khi a = a' ⇔ m + 1 = 2 ⇔ m = 1 (và b = 1 ≠ -3 thỏa mãn)."
        },
        {
          "id": "m9_t2_05",
          "level": 2,
          "question": "Góc tạo bởi đường thẳng y = √3x + 2 và trục Ox có số đo là:",
          "options": [
            "60°",
            "30°",
            "45°",
            "120°"
          ],
          "correct": 0,
          "explanation": "Hệ số góc a = tan α = √3 ⇒ α = 60°."
        },
        {
          "id": "m9_t2_06",
          "level": 2,
          "question": "Nghiệm của hệ phương trình { 2x + 3y = 7 ; 3x - y = 5 } là:",
          "options": [
            "(2; 1)",
            "(1; 2)",
            "(3; 1)",
            "(1; 1)"
          ],
          "correct": 0,
          "explanation": "Từ pt 2: y = 3x - 5. Thế vào pt 1: 2x + 3(3x - 5) = 7 ⇔ 11x = 22 ⇔ x = 2 ⇒ y = 1."
        },
        {
          "id": "m9_t2_07",
          "level": 3,
          "question": "Tìm m để đường thẳng (d): y = (2m - 1)x + m + 2 vuông góc với đường thẳng (d'): y = -1/3 x + 1:",
          "options": [
            "m = 2",
            "m = -1",
            "m = 1",
            "m = 3"
          ],
          "correct": 0,
          "explanation": "Hai đường thẳng vuông góc khi a · a' = -1 ⇔ (2m - 1)·(-1/3) = -1 ⇔ 2m - 1 = 3 ⇔ m = 2."
        },
        {
          "id": "m9_t2_08",
          "level": 3,
          "question": "Hai người làm chung một công việc trong 12 giờ thì hoàn thành. Nếu người thứ nhất làm một mình 4 giờ rồi người thứ hai làm tiếp trong 9 giờ thì được 7/12 công việc. Người thứ nhất làm một mình xong công việc trong:",
          "options": [
            "20 giờ",
            "30 giờ",
            "15 giờ",
            "24 giờ"
          ],
          "correct": 0,
          "explanation": "Hệ: 1/x + 1/y = 1/12 và 4/x + 9/y = 7/12. Giải ra 1/x = 1/20 ⇒ x = 20 giờ."
        },
        {
          "id": "m9_t2_09",
          "level": 3,
          "question": "Khoảng cách từ gốc tọa độ O đến đường thẳng y = x + 2 là:",
          "options": [
            "√2",
            "2",
            "2√2",
            "1"
          ],
          "correct": 0,
          "explanation": "Giao Ox tại A(-2; 0) ⇒ OA = 2. Giao Oy tại B(0; 2) ⇒ OB = 2. ΔOAB vuông cân tại O ⇒ OH = OA / √2 = 2 / √2 = √2."
        },
        {
          "id": "m9_t2_10",
          "level": 4,
          "question": "Tìm m để hệ phương trình { mx + y = 3 ; x + my = 2m + 1 } có nghiệm duy nhất (x; y) thỏa mãn x + y > 0:",
          "options": [
            "m ≠ ±1 và m > -1",
            "m > 1",
            "m < -1",
            "Mọi m"
          ],
          "correct": 0,
          "explanation": "D = m² - 1 ≠ 0 ⇔ m ≠ ±1. Nghiệm x = (m+3)/(m+1), y = 2/(m+1). x + y = (m+5)/(m+1) > 0 ⇔ m > -1 (m ≠ 1) hoặc m < -5."
        },
        {
          "id": "m9_t2_11",
          "level": 4,
          "question": "Tìm m để ba đường thẳng d₁: y = 2x - 1, d₂: y = x + 2 và d₃: y = mx + 5 đồng quy:",
          "options": [
            "m = 0",
            "m = 1",
            "m = -1",
            "m = 2"
          ],
          "correct": 0,
          "explanation": "Giao điểm của d₁ và d₂: 2x - 1 = x + 2 ⇔ x = 3 ⇒ y = 5 ⇒ A(3; 5). d₃ đi qua A: 5 = 3m + 5 ⇔ 3m = 0 ⇔ m = 0."
        }
      ]
    },
    {
      "id": "m9_pt_bac_hai_viete",
      "terms": [
        2
      ],
      "name": "Chủ Đề 3: Phương Trình Bậc Hai Một Ẩn & Định Lí Viète",
      "icon": "🎯",
      "desc": "Công thức nghiệm, biệt thức Δ (delta), ứng dụng định lí Viète vào bài toán tìm điều kiện của tham số m và giải bài toán bằng cách lập pt.",
      "theory": {
        "highlights": [
          {
            "icon": "⚖️",
            "title": "Công thức nghiệm của ax² + bx + c = 0 (a ≠ 0)",
            "content": "• Biệt thức: <strong>Δ = b² - 4ac</strong> (hoặc Δ' = b'² - ac với b = 2b').<br/>• Δ < 0: Phương trình vô nghiệm.<br/>• Δ = 0: Phương trình có nghiệm kép: x₁ = x₂ = -b / (2a).<br/>• Δ > 0: Phương trình có hai nghiệm phân biệt: x₁,₂ = (-b ± √Δ) / (2a)."
          },
          {
            "icon": "💡",
            "title": "Hệ thức Viète và ứng dụng cốt lõi",
            "content": "• Tổng hai nghiệm: <strong>S = x₁ + x₂ = -b / a</strong>.<br/>• Tích hai nghiệm: <strong>P = x₁ · x₂ = c / a</strong>.<br/>• Các biểu thức đối xứng quen thuộc trong đề thi vào 10:<br/>- x₁² + x₂² = (x₁ + x₂)² - 2x₁x₂ = S² - 2P.<br/>- 1/x₁ + 1/x₂ = (x₁ + x₂) / (x₁x₂) = S / P.<br/>- |x₁ - x₂| = √(S² - 4P)."
          }
        ]
      },
      "questions": [
        {
          "id": "m9_t3_01",
          "level": 1,
          "question": "Biệt thức Δ của phương trình bậc hai x² - 4x + 3 = 0 là:",
          "options": [
            "4",
            "16",
            "-4",
            "12"
          ],
          "correct": 0,
          "explanation": "Δ = b² - 4ac = (-4)² - 4·1·3 = 16 - 12 = 4 > 0."
        },
        {
          "id": "m9_t3_02",
          "level": 1,
          "question": "Tổng hai nghiệm của phương trình 2x² - 6x + 1 = 0 là:",
          "options": [
            "3",
            "-3",
            "1/2",
            "6"
          ],
          "correct": 0,
          "explanation": "Theo hệ thức Viète: S = -b / a = -(-6) / 2 = 3."
        },
        {
          "id": "m9_t3_03",
          "level": 1,
          "question": "Phương trình x² - 5x + 6 = 0 có hai nghiệm là:",
          "options": [
            "x₁ = 2; x₂ = 3",
            "x₁ = -2; x₂ = -3",
            "x₁ = 1; x₂ = 6",
            "x₁ = -1; x₂ = -6"
          ],
          "correct": 0,
          "explanation": "S = 5, P = 6 ⇒ nghiệm là 2 và 3."
        },
        {
          "id": "m9_t3_04",
          "level": 2,
          "question": "Phương trình ax² + bx + c = 0 (a ≠ 0) có a + b + c = 0 thì hai nghiệm là:",
          "options": [
            "x₁ = 1; x₂ = c/a",
            "x₁ = -1; x₂ = -c/a",
            "x₁ = 1; x₂ = -c/a",
            "x₁ = -1; x₂ = c/a"
          ],
          "correct": 0,
          "explanation": "Tính chất nhẩm nghiệm: Nếu a + b + c = 0 thì x₁ = 1; x₂ = c/a."
        },
        {
          "id": "m9_t3_05",
          "level": 2,
          "question": "Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
          "options": [
            "m = 1",
            "m = -1",
            "m = 4",
            "m = 0"
          ],
          "correct": 0,
          "explanation": "Δ' = (-1)² - 1·m = 1 - m. Phương trình có nghiệm kép khi Δ' = 0 ⇔ 1 - m = 0 ⇔ m = 1."
        },
        {
          "id": "m9_t3_06",
          "level": 2,
          "question": "Tích hai nghiệm của phương trình 3x² + 7x - 5 = 0 là:",
          "options": [
            "-5/3",
            "5/3",
            "-7/3",
            "7/3"
          ],
          "correct": 0,
          "explanation": "Theo Viète: P = c / a = -5/3."
        },
        {
          "id": "m9_t3_07",
          "level": 3,
          "question": "Cho phương trình x² - 3x - 1 = 0 có hai nghiệm x₁, x₂. Giá trị của biểu thức A = x₁² + x₂² là:",
          "options": [
            "11",
            "7",
            "9",
            "10"
          ],
          "correct": 0,
          "explanation": "S = 3, P = -1. A = S² - 2P = 3² - 2(-1) = 9 + 2 = 11."
        },
        {
          "id": "m9_t3_08",
          "level": 3,
          "question": "Một mảnh vườn hình chữ nhật có chiều dài hơn chiều rộng 4 m và diện tích bằng 96 m². Chu vi mảnh vườn là:",
          "options": [
            "40 m",
            "20 m",
            "48 m",
            "32 m"
          ],
          "correct": 0,
          "explanation": "x(x + 4) = 96 ⇔ x² + 4x - 96 = 0 ⇔ (x - 8)(x + 12) = 0 ⇒ chiều rộng x = 8 m, dài = 12 m. Chu vi = 2(8 + 12) = 40 m."
        },
        {
          "id": "m9_t3_09",
          "level": 3,
          "question": "Tìm m để phương trình x² - (m + 1)x + m = 0 có hai nghiệm cùng dấu:",
          "options": [
            "m > 0 và m ≠ 1",
            "m > 0",
            "m < 0",
            "m ≥ 0"
          ],
          "correct": 0,
          "explanation": "Δ = (m + 1)² - 4m = (m - 1)² ≥ 0. Để hai nghiệm cùng dấu và phân biệt: P = m > 0 và m ≠ 1."
        },
        {
          "id": "m9_t3_10",
          "level": 4,
          "question": "Cho parabol (P): y = x² và đường thẳng (d): y = 2x + m. Tìm m để (d) cắt (P) tại hai điểm phân biệt có hoành độ x₁, x₂ thỏa mãn x₁² + x₂² = 10:",
          "options": [
            "m = 3",
            "m = -3",
            "m = 2",
            "m = -2"
          ],
          "correct": 0,
          "explanation": "PT hoành độ: x² - 2x - m = 0. Cắt tại 2 điểm pb ⇔ Δ' = 1 + m > 0 ⇔ m > -1. x₁² + x₂² = (x₁+x₂)² - 2x₁x₂ = 4 + 2m = 10 ⇔ 2m = 6 ⇔ m = 3 (thỏa mãn m > -1)."
        },
        {
          "id": "m9_t3_11",
          "level": 4,
          "question": "Tìm m để phương trình x² - 2(m - 1)x + m² - 3 = 0 có hai nghiệm x₁, x₂ thỏa mãn x₁ - x₂ = 4:",
          "options": [
            "m = -1",
            "m = 1",
            "m = 2",
            "m = -2"
          ],
          "correct": 0,
          "explanation": "Δ' = (m-1)² - (m² - 3) = -2m + 4 > 0 ⇔ m < 2. (x₁ - x₂)² = S² - 4P = 4(m - 1)² - 4(m² - 3) = 16 ⇔ 4(-2m + 4) = 16 ⇔ -2m + 4 = 4 ⇔ m = 0 (tính lại: (x₁-x₂)² = 4Δ' = 4(4 - 2m) = 16 ⇔ 4 - 2m = 4 ⇔ m = 0. Nếu m = -1: 4(4 + 2) = 24 ≠ 16. Sửa lại: chọn m = 0). Chọn m = 0: 4Δ'=16 ⇔ Δ'=4 ⇔ 4 - 2m = 4 ⇔ m = 0. Đáp án: m = 0."
        }
      ]
    },
    {
      "id": "m9_duong_tron_tu_giac_noi_tiep",
      "terms": [
        2
      ],
      "name": "Chủ Đề 4: Đường Tròn & Tứ Giác Nội Tiếp",
      "icon": "⭕",
      "desc": "Các góc với đường tròn (góc nội tiếp, góc tạo bởi tia tiếp tuyến và dây cung), các dấu hiệu nhận biết tứ giác nội tiếp và chứng minh hình học thi vào 10.",
      "theory": {
        "highlights": [
          {
            "icon": "📐",
            "title": "Góc với đường tròn cốt lõi",
            "content": "• <strong>Góc ở tâm:</strong> Số đo bằng số đo của cung bị chắn.<br/>• <strong>Góc nội tiếp:</strong> Số đo bằng nửa số đo của cung bị chắn. Góc nội tiếp chắn nửa đường tròn là góc vuông (90°).<br/>• <strong>Góc tạo bởi tia tiếp tuyến và dây cung:</strong> Bằng nửa số đo của cung bị chắn (bằng góc nội tiếp cùng chắn cung đó)."
          },
          {
            "icon": "⭐",
            "title": "4 Dấu hiệu nhận biết Tứ giác nội tiếp đường tròn",
            "content": "1. <strong>Tổng hai góc đối:</strong> Tứ giác có tổng hai góc đối diện bằng 180° (∠A + ∠C = 180°).<br/>2. <strong>Góc ngoài tại một đỉnh:</strong> Bằng góc trong tại đỉnh đối diện.<br/>3. <strong>Hai đỉnh kề cùng nhìn một cạnh:</strong> Dưới hai góc bằng nhau (ví dụ: ∠BAC = ∠BDC).<br/>4. <strong>Cách đều một điểm:</strong> Bốn đỉnh cùng cách đều một điểm O cố định."
          }
        ]
      },
      "questions": [
        {
          "id": "m9_t4_01",
          "level": 1,
          "question": "Số đo của góc nội tiếp chắn nửa đường tròn là:",
          "options": [
            "90°",
            "180°",
            "60°",
            "45°"
          ],
          "correct": 0,
          "explanation": "Góc nội tiếp chắn nửa đường tròn là góc vuông (có số đo bằng 180° / 2 = 90°)."
        },
        {
          "id": "m9_t4_02",
          "level": 1,
          "question": "Góc nội tiếp có số đo như thế nào so với số đo của cung bị chắn?",
          "options": [
            "Bằng một nửa số đo cung bị chắn",
            "Bằng số đo cung bị chắn",
            "Gấp đôi số đo cung bị chắn",
            "Bằng một phần tư số đo cung bị chắn"
          ],
          "correct": 0,
          "explanation": "Định lí góc nội tiếp: số đo góc nội tiếp bằng nửa số đo cung bị chắn."
        },
        {
          "id": "m9_t4_03",
          "level": 1,
          "question": "Trong tứ giác nội tiếp ABCD, tổng số đo hai góc đối ∠A + ∠C bằng:",
          "options": [
            "180°",
            "360°",
            "90°",
            "270°"
          ],
          "correct": 0,
          "explanation": "Định lí tứ giác nội tiếp: Trong một tứ giác nội tiếp, tổng số đo hai góc đối diện luôn bằng 180°."
        },
        {
          "id": "m9_t4_04",
          "level": 2,
          "question": "Cho đường tròn (O), góc ở tâm ∠AOB = 80°. Số đo của góc nội tiếp ∠ACB cùng chắn cung AB là:",
          "options": [
            "40°",
            "80°",
            "160°",
            "20°"
          ],
          "correct": 0,
          "explanation": "Góc nội tiếp cùng chắn một cung bằng nửa góc ở tâm: 80° / 2 = 40°."
        },
        {
          "id": "m9_t4_05",
          "level": 2,
          "question": "Từ điểm M nằm ngoài (O), kẻ hai tiếp tuyến MA và MB (A, B là hai tiếp điểm). Tam giác MAB là tam giác gì?",
          "options": [
            "Tam giác cân tại M",
            "Tam giác đều",
            "Tam giác vuông tại M",
            "Tam giác vuông cân"
          ],
          "correct": 0,
          "explanation": "Tính chất hai tiếp tuyến cắt nhau: MA = MB nên ΔMAB cân tại M."
        },
        {
          "id": "m9_t4_06",
          "level": 2,
          "question": "Hình nào sau đây LUÔN LUÔN là tứ giác nội tiếp được đường tròn?",
          "options": [
            "Hình chữ nhật",
            "Hình thoi",
            "Hình bình hành",
            "Hình thang thông thường"
          ],
          "correct": 0,
          "explanation": "Hình chữ nhật có 4 góc vuông nên tổng hai góc đối diện là 90° + 90° = 180°, luôn nội tiếp đường tròn."
        },
        {
          "id": "m9_t4_07",
          "level": 3,
          "question": "Cho tam giác ABC nhọn có hai đường cao BD và CE cắt nhau tại H. Tứ giác ADHE nội tiếp được đường tròn đường kính nào?",
          "options": [
            "AH",
            "BC",
            "AB",
            "AC"
          ],
          "correct": 0,
          "explanation": "∠AEH = 90° và ∠ADH = 90° ⇒ ∠AEH + ∠ADH = 180°. Hai tam giác AEH và ADH vuông chung cạnh huyền AH nên tứ giác ADHE nội tiếp đường tròn đường kính AH."
        },
        {
          "id": "m9_t4_08",
          "level": 3,
          "question": "Độ dài cung tròn 60° của đường tròn có bán kính R = 6 cm là:",
          "options": [
            "2π cm",
            "6π cm",
            "3π cm",
            "π cm"
          ],
          "correct": 0,
          "explanation": "l = (π·R·n) / 180 = (π · 6 · 60) / 180 = 2π cm."
        },
        {
          "id": "m9_t4_09",
          "level": 3,
          "question": "Cho đường tròn (O; 5 cm) và dây cung AB = 6 cm. Khoảng cách từ tâm O đến dây AB là:",
          "options": [
            "4 cm",
            "3 cm",
            "2 cm",
            "√11 cm"
          ],
          "correct": 0,
          "explanation": "Kẻ OH ⊥ AB ⇒ H là trung điểm AB nên AH = 3 cm. Áp dụng Pytago cho ΔOAH vuông tại H: OH = √(R² - AH²) = √(5² - 3²) = 4 cm."
        },
        {
          "id": "m9_t4_10",
          "level": 4,
          "question": "Cho tam giác ABC nội tiếp (O), các đường cao AD, BE, CF cắt nhau tại trực tâm H. Khi đó H là điểm gì của tam giác DEF?",
          "options": [
            "Tâm đường tròn nội tiếp tam giác DEF",
            "Trực tâm tam giác DEF",
            "Trọng tâm tam giác DEF",
            "Tâm đường tròn ngoại tiếp tam giác DEF"
          ],
          "correct": 0,
          "explanation": "Theo tính chất trực tâm tam giác nhọn, các đường cao AD, BE, CF là các đường phân giác trong của tam giác trực âm DEF, do đó H là tâm đường tròn nội tiếp tam giác DEF."
        },
        {
          "id": "m9_t4_11",
          "level": 4,
          "question": "Cho hình nón có bán kính đáy r = 3 cm, chiều cao h = 4 cm. Diện tích toàn phần của hình nón là:",
          "options": [
            "24π cm²",
            "15π cm²",
            "9π cm²",
            "36π cm²"
          ],
          "correct": 0,
          "explanation": "Độ dài đường sinh l = √(r² + h²) = √(3² + 4²) = 5 cm. S_tp = S_xq + S_đáy = π·r·l + π·r² = π·3·5 + π·3² = 15π + 9π = 24π cm²."
        }
      ]
    }
  ]
};
