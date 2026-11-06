/**
 * math-9-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Toán Học Lớp 9
 * Chuẩn GDPT 2018 - Học kỳ 1 & Học kỳ 2 (Trọng tâm thi vào 10)
 */

window.MATH9_DATA = {
  "name": "Toán Học Lớp 9",
  "grade": 9,
  "topics": [
    {
      "id": "can_bac_hai_he_phuong_trinh",
      "terms": [
        1
      ],
      "name": "Chủ Đề 1: Căn Bậc Hai, Hệ Phương Trình & Hệ Thức Lượng Tam Giác Vuông",
      "icon": "📐",
      "desc": "Căn thức bậc hai, rút gọn biểu thức chứa căn; Hệ hai phương trình bậc nhất hai ẩn; Hệ thức lượng trong tam giác vuông.",
      "theory": {
        "highlights": [
          {
            "icon": "✨",
            "title": "Hằng đẳng thức căn bậc hai & Rút gọn",
            "content": "• <strong>Điều kiện có nghĩa:</strong> √A xác định khi và chỉ khi A ≥ 0.<br/>• <strong>Hằng đẳng thức:</strong> √(A²) = |A| (bằng A nếu A ≥ 0, bằng -A nếu A < 0).<br/>• <strong>Quy tắc trục căn thức ở mẫu:</strong><br/>  - 1 / √A = √A / A (A > 0).<br/>  - C / (√A ± B) = C(√A ∓ B) / (A - B²)."
          },
          {
            "icon": "📐",
            "title": "Hệ thức lượng trong tam giác vuông ABC (vuông tại A, đường cao AH)",
            "content": "• 1. b² = a · b'; c² = a · c' (bình phương cạnh góc vuông bằng tích cạnh huyền và hình chiếu).<br/>• 2. h² = b' · c' (bình phương đường cao bằng tích hai hình chiếu).<br/>• 3. a · h = b · c (tích cạnh huyền và đường cao bằng tích hai cạnh góc vuông).<br/>• 4. 1/h² = 1/b² + 1/c².<br/>• 5. Tỉ số lượng giác: sin = đối/huyền, cos = kề/huyền, tan = đối/kề, cot = kề/đối."
          }
        ]
      },
      "questions": [
        {
          "id": "m9_1_1",
          "level": 1,
          "question": "Biểu thức √(2x - 4) xác định khi và chỉ khi:",
          "options": [
            "x ≥ 2",
            "x > 2",
            "x ≤ 2",
            "x ≠ 2"
          ],
          "correct": 0,
          "explanation": "Biểu thức dưới dấu căn không âm: 2x - 4 ≥ 0 ➔ 2x ≥ 4 ➔ x ≥ 2."
        },
        {
          "id": "m9_1_2",
          "level": 1,
          "question": "Căn bậc hai số học của 81 là:",
          "options": [
            "9",
            "-9",
            "±9",
            "81"
          ],
          "correct": 0,
          "explanation": "Căn bậc hai số học của số không âm a là số không âm x sao cho x² = a. Do đó √81 = 9."
        },
        {
          "id": "m9_1_3",
          "level": 2,
          "question": "Rút gọn biểu thức A = √( (3 - √10)² ) ta được kết quả:",
          "options": [
            "√10 - 3",
            "3 - √10",
            "1",
            "10 - 3"
          ],
          "correct": 0,
          "explanation": "√( (3 - √10)² ) = |3 - √10|. Vì 3 = √9 < √10 nên 3 - √10 < 0 ➔ |3 - √10| = √10 - 3."
        },
        {
          "id": "m9_1_4",
          "level": 2,
          "question": "Cho tam giác ABC vuông tại A có AB = 3 cm, AC = 4 cm. Độ dài đường cao AH bằng:",
          "options": [
            "2,4 cm",
            "5 cm",
            "12 cm",
            "3,5 cm"
          ],
          "correct": 0,
          "explanation": "Cạnh huyền BC = √(3² + 4²) = 5 cm. Áp dụng a·h = b·c: 5·AH = 3·4 = 12 ➔ AH = 12/5 = 2,4 cm."
        },
        {
          "id": "m9_1_5",
          "level": 3,
          "question": "Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
          "options": [
            "(x = 2; y = 1)",
            "(x = 1; y = 2)",
            "(x = 3; y = -1)",
            "(x = 2; y = 2)"
          ],
          "correct": 0,
          "explanation": "Cộng vế với vế: 3x = 6 ➔ x = 2. Thay vào phương trình thứ hai: 2 - y = 1 ➔ y = 1. Nghiệm là (2; 1)."
        },
        {
          "id": "m9_1_6",
          "level": 3,
          "question": "Cho tam giác ABC vuông tại A có góc B = 30° và cạnh huyền BC = 10 cm. Độ dài cạnh đối AC là:",
          "options": [
            "5 cm",
            "5√3 cm",
            "10√3 cm",
            "2,5 cm"
          ],
          "correct": 0,
          "explanation": "AC = BC · sin B = 10 · sin 30° = 10 · 0,5 = 5 cm (cạnh đối diện góc 30° bằng nửa cạnh huyền)."
        },
        {
          "id": "m9_1_7",
          "level": 4,
          "question": "Tìm x để biểu thức P = √x / (x - 4) có giá trị lớn nhất với x > 4:",
          "options": [
            "Không tồn tại giá trị lớn nhất",
            "x = 9",
            "x = 16",
            "x = 4"
          ],
          "correct": 0,
          "explanation": "Với x > 4, khi x tiến rất gần 4 từ bên phải thì mẫu số tiến về 0 dương, P tiến ra dương vô cùng nên không có giá trị lớn nhất."
        },
        {
          "id": "m9_1_8",
          "level": 4,
          "question": "Một người đứng cách chân tháp 30 m nhìn lên đỉnh tháp dưới một góc nâng 45°. Biết mắt người đó cách mặt đất 1,6 m. Chiều cao của tòa tháp là:",
          "options": [
            "31,6 m",
            "30 m",
            "45 m",
            "15,8 m"
          ],
          "correct": 0,
          "explanation": "Khoảng cách từ mắt đến đỉnh theo phương thẳng đứng h1 = 30 · tan 45° = 30 · 1 = 30 m. Chiều cao tháp h = h1 + chiều cao người = 30 + 1,6 = 31,6 m."
        }
      ]
    },
    {
      "id": "phuong_trinh_bac_hai_viete_duong_tron",
      "terms": [
        2
      ],
      "name": "Chủ Đề 2: Phương Trình Bậc Hai, Hệ Thức Viète & Đường Tròn",
      "icon": "⭕",
      "desc": "Công thức nghiệm ax² + bx + c = 0, định lí Viète; Góc ở tâm, góc nội tiếp, tứ giác nội tiếp và hình học không gian (trọng tâm ôn thi vào 10).",
      "theory": {
        "highlights": [
          {
            "icon": "⚡",
            "title": "Công thức nghiệm & Định lí Viète",
            "content": "• Biệt thức Δ = b² - 4ac (hoặc Δ' = b'² - ac với b = 2b'):<br/>  - Δ > 0: Phương trình có 2 nghiệm phân biệt x1,2 = (-b ± √Δ) / (2a).<br/>  - Δ = 0: Phương trình có nghiệm kép x1 = x2 = -b / (2a).<br/>  - Δ < 0: Phương trình vô nghiệm.<br/>• <strong>Định lí Viète:</strong> Nếu x1, x2 là nghiệm thì S = x1 + x2 = -b/a và P = x1 · x2 = c/a.<br/>• <strong>Ứng dụng:</strong> Tìm hai số biết tổng S và tích P: là nghiệm của phương trình X² - SX + P = 0."
          },
          {
            "icon": "⭕",
            "title": "Góc với đường tròn & Tứ giác nội tiếp",
            "content": "• <strong>Góc nội tiếp:</strong> Số đo góc nội tiếp bằng nửa số đo của cung bị chắn. Góc nội tiếp chắn nửa đường tròn là góc vuông (90°).<br/>• <strong>Dấu hiệu nhận biết tứ giác nội tiếp:</strong><br/>  1. Tứ giác có tổng hai góc đối diện bằng 180°.<br/>  2. Tứ giác có hai đỉnh kề nhau cùng nhìn cạnh chứa hai đỉnh còn lại dưới một góc bằng nhau.<br/>  3. Tứ giác có điểm cách đều 4 đỉnh (tâm đường tròn ngoại tiếp)."
          }
        ]
      },
      "questions": [
        {
          "id": "m9_2_1",
          "level": 1,
          "question": "Biệt thức Δ của phương trình bậc hai 2x² - 3x + 1 = 0 là:",
          "options": [
            "1",
            "-1",
            "17",
            "7"
          ],
          "correct": 0,
          "explanation": "Δ = b² - 4ac = (-3)² - 4·2·1 = 9 - 8 = 1."
        },
        {
          "id": "m9_2_2",
          "level": 1,
          "question": "Góc nội tiếp chắn nửa đường tròn có số đo bằng bao nhiêu độ?",
          "options": [
            "90°",
            "180°",
            "60°",
            "45°"
          ],
          "correct": 0,
          "explanation": "Định lí góc nội tiếp: Góc nội tiếp chắn nửa đường tròn là góc vuông (số đo bằng 90°)."
        },
        {
          "id": "m9_2_3",
          "level": 2,
          "question": "Tổng hai nghiệm x1 + x2 của phương trình x² - 7x + 10 = 0 là:",
          "options": [
            "7",
            "-7",
            "10",
            "-10"
          ],
          "correct": 0,
          "explanation": "Theo hệ thức Viète: S = x1 + x2 = -b/a = -(-7)/1 = 7."
        },
        {
          "id": "m9_2_4",
          "level": 2,
          "question": "Cho tứ giác ABCD nội tiếp đường tròn. Biết góc A = 70°. Số đo góc đối diện C là:",
          "options": [
            "110°",
            "70°",
            "90°",
            "120°"
          ],
          "correct": 0,
          "explanation": "Trong tứ giác nội tiếp, tổng hai góc đối bằng 180°: Góc C = 180° - 70° = 110°."
        },
        {
          "id": "m9_2_5",
          "level": 3,
          "question": "Gọi x1, x2 là hai nghiệm của phương trình x² - 5x + 3 = 0. Giá trị của biểu thức A = x1² + x2² là:",
          "options": [
            "19",
            "25",
            "22",
            "31"
          ],
          "correct": 0,
          "explanation": "Theo Viète: x1 + x2 = 5, x1·x2 = 3. Ta có: x1² + x2² = (x1 + x2)² - 2x1x2 = 5² - 2·3 = 25 - 6 = 19."
        },
        {
          "id": "m9_2_6",
          "level": 3,
          "question": "Một hình trụ có bán kính đáy r = 5 cm và chiều cao h = 10 cm. Thể tích hình trụ đó là:",
          "options": [
            "250π cm³",
            "50π cm³",
            "100π cm³",
            "500π cm³"
          ],
          "correct": 0,
          "explanation": "Thể tích hình trụ V = π · r² · h = π · 5² · 10 = 250π cm³."
        },
        {
          "id": "m9_2_7",
          "level": 4,
          "question": "Tìm tất cả các giá trị của m để phương trình x² - 2(m + 1)x + m² + 4 = 0 có hai nghiệm phân biệt:",
          "options": [
            "m > 1,5",
            "m ≥ 1,5",
            "m < 1,5",
            "m = 1,5"
          ],
          "correct": 0,
          "explanation": "Phương trình có 2 nghiệm phân biệt khi Δ' > 0: (m + 1)² - (m² + 4) = m² + 2m + 1 - m² - 4 = 2m - 3 > 0 ➔ m > 1,5."
        },
        {
          "id": "m9_2_8",
          "level": 4,
          "question": "Một mảnh vườn hình chữ nhật có diện tích 120 m². Nếu tăng chiều rộng thêm 2 m và giảm chiều dài 3 m thì diện tích không đổi. Chiều dài ban đầu của mảnh vườn là:",
          "options": [
            "15 m",
            "12 m",
            "20 m",
            "10 m"
          ],
          "correct": 0,
          "explanation": "Gọi chiều rộng là x (m), chiều dài là 120/x. Ta có: (x + 2)(120/x - 3) = 120 ➔ 120 - 3x + 240/x - 6 = 120 ➔ 3x² + 6x - 240 = 0 ➔ x² + 2x - 80 = 0 ➔ (x - 8)(x + 10) = 0 ➔ x = 8. Chiều dài là 120 / 8 = 15 m."
        }
      ]
    }
  ]
};
