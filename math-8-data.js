/**
 * math-8-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Toán Học Lớp 8
 * Chuẩn GDPT 2018 - Học kỳ 1 & Học kỳ 2
 */

window.MATH8_DATA = {
  "name": "Toán Học Lớp 8",
  "grade": 8,
  "topics": [
    {
      "id": "hang_dang_thuc",
      "terms": [
        1
      ],
      "name": "Chủ Đề 1: Đa Thức & 7 Hằng Đẳng Thức Đáng Nhớ",
      "icon": "📐",
      "desc": "Đơn thức, đa thức nhiều biến, 7 hằng đẳng thức đáng nhớ và phương pháp phân tích đa thức thành nhân tử.",
      "theory": {
        "highlights": [
          {
            "icon": "✨",
            "title": "7 Hằng đẳng thức đáng nhớ cốt lõi",
            "content": "1. <strong>Bình phương của một tổng:</strong> (A + B)² = A² + 2AB + B²<br/>2. <strong>Bình phương của một hiệu:</strong> (A - B)² = A² - 2AB + B²<br/>3. <strong>Hiệu hai bình phương:</strong> A² - B² = (A - B)(A + B)<br/>4. <strong>Lập phương của một tổng:</strong> (A + B)³ = A³ + 3A²B + 3AB² + B³<br/>5. <strong>Lập phương của một hiệu:</strong> (A - B)³ = A³ - 3A²B + 3AB² - B³<br/>6. <strong>Tổng hai lập phương:</strong> A³ + B³ = (A + B)(A² - AB + B²)<br/>7. <strong>Hiệu hai lập phương:</strong> A³ - B³ = (A - B)(A² + AB + B²)"
          },
          {
            "icon": "💡",
            "title": "Kỹ năng phân tích đa thức thành nhân tử",
            "content": "• <strong>Phương pháp 1 - Đặt nhân tử chung:</strong> Tìm ước chung lớn nhất của hệ số và phần biến chung số mũ nhỏ nhất.<br/>• <strong>Phương pháp 2 - Dùng hằng đẳng thức:</strong> Nhận diện cấu trúc dạng bình phương, hiệu hai bình phương hoặc lập phương.<br/>• <strong>Phương pháp 3 - Nhóm hạng tử:</strong> Gom các hạng tử thích hợp để xuất hiện nhân tử chung hoặc hằng đẳng thức.<br/>• <strong>Phương pháp 4 - Tách hoặc thêm bớt hạng tử:</strong> Tách hạng tử bậc nhất ax² + bx + c thành tích ac rồi tách b."
          }
        ]
      },
      "questions": [
        {
          "id": "m8_1_1",
          "level": 1,
          "question": "Khai triển của hằng đẳng thức (x + 3)² là:",
          "options": [
            "x² + 6x + 9",
            "x² + 3x + 9",
            "x² + 9",
            "x² + 6x + 6"
          ],
          "correct": 0,
          "explanation": "Áp dụng (A + B)² = A² + 2AB + B² với A = x, B = 3 ta có: (x + 3)² = x² + 2·x·3 + 3² = x² + 6x + 9."
        },
        {
          "id": "m8_1_2",
          "level": 1,
          "question": "Biểu thức x² - 16 được viết dưới dạng tích là:",
          "options": [
            "(x - 4)(x + 4)",
            "(x - 16)(x + 16)",
            "(x - 4)²",
            "(x + 4)²"
          ],
          "correct": 0,
          "explanation": "Áp dụng hiệu hai bình phương: x² - 16 = x² - 4² = (x - 4)(x + 4)."
        },
        {
          "id": "m8_1_3",
          "level": 2,
          "question": "Phân tích đa thức 2x² - 4x thành nhân tử ta được:",
          "options": [
            "2x(x - 2)",
            "2(x² - 2)",
            "x(2x - 4)",
            "2x(x + 2)"
          ],
          "correct": 0,
          "explanation": "Đặt nhân tử chung 2x: 2x² - 4x = 2x(x - 2)."
        },
        {
          "id": "m8_1_4",
          "level": 2,
          "question": "Giá trị của biểu thức x² - 2xy + y² tại x = 103 và y = 3 là:",
          "options": [
            "10 000",
            "1 000",
            "100",
            "10 600"
          ],
          "correct": 0,
          "explanation": "Ta có: x² - 2xy + y² = (x - y)² = (103 - 3)² = 100² = 10 000."
        },
        {
          "id": "m8_1_5",
          "level": 3,
          "question": "Tìm x biết: x² - 25 = 0.",
          "options": [
            "x = 5 hoặc x = -5",
            "x = 5",
            "x = 25",
            "x = -5"
          ],
          "correct": 0,
          "explanation": "(x - 5)(x + 5) = 0 ➔ x = 5 hoặc x = -5."
        },
        {
          "id": "m8_1_6",
          "level": 3,
          "question": "Phân tích đa thức x² - 5x + 6 thành nhân tử:",
          "options": [
            "(x - 2)(x - 3)",
            "(x - 1)(x - 6)",
            "(x + 2)(x + 3)",
            "(x + 1)(x - 6)"
          ],
          "correct": 0,
          "explanation": "Tách -5x = -2x - 3x: x² - 2x - 3x + 6 = x(x - 2) - 3(x - 2) = (x - 2)(x - 3)."
        },
        {
          "id": "m8_1_7",
          "level": 4,
          "question": "Giá trị nhỏ nhất của biểu thức A = x² - 4x + 10 là:",
          "options": [
            "6",
            "10",
            "4",
            "2"
          ],
          "correct": 0,
          "explanation": "A = (x² - 4x + 4) + 6 = (x - 2)² + 6 ≥ 6. Dấu bằng xảy ra khi x = 2."
        },
        {
          "id": "m8_1_8",
          "level": 4,
          "question": "Cho x + y = 5 và xy = 6. Giá trị của biểu thức x³ + y³ bằng:",
          "options": [
            "35",
            "65",
            "125",
            "95"
          ],
          "correct": 0,
          "explanation": "x³ + y³ = (x + y)³ - 3xy(x + y) = 5³ - 3·6·5 = 125 - 90 = 35."
        }
      ]
    },
    {
      "id": "phan_thuc_tu_giac",
      "terms": [
        1
      ],
      "name": "Chủ Đề 2: Phân Thức Đại Số & Tứ Giác Đặc Biệt",
      "icon": "📊",
      "desc": "Tính chất phân thức, cộng trừ nhân chia phân thức; Hình thang cân, hình bình hành, hình chữ nhật, hình thoi, hình vuông.",
      "theory": {
        "highlights": [
          {
            "icon": "📐",
            "title": "Phân thức đại số & Điều kiện xác định",
            "content": "• Phân thức đại số có dạng A/B với A, B là các đa thức và B ≠ 0.<br/>• <strong>Quy tắc rút gọn:</strong> Phân tích tử và mẫu thành nhân tử rồi chia cả tử và mẫu cho nhân tử chung.<br/>• <strong>Cộng, trừ phân thức:</strong> Quy đồng mẫu thức chung rồi cộng/trừ tử thức và giữ nguyên mẫu thức."
          },
          {
            "icon": "🔷",
            "title": "Dấu hiệu nhận biết các tứ giác đặc biệt",
            "content": "• <strong>Hình bình hành:</strong> Tứ giác có các cạnh đối song song (hoặc bằng nhau), hai đường chéo cắt nhau tại trung điểm mỗi đường.<br/>• <strong>Hình chữ nhật:</strong> Tứ giác có 3 góc vuông, hoặc hình bình hành có 1 góc vuông (hai đường chéo bằng nhau).<br/>• <strong>Hình thoi:</strong> Tứ giác có 4 cạnh bằng nhau, hai đường chéo vuông góc tại trung điểm.<br/>• <strong>Hình vuông:</strong> Vừa là hình chữ nhật, vừa là hình thoi (4 góc vuông và 4 cạnh bằng nhau)."
          }
        ]
      },
      "questions": [
        {
          "id": "m8_2_1",
          "level": 1,
          "question": "Điều kiện xác định của phân thức (x + 1)/(x - 2) là:",
          "options": [
            "x ≠ 2",
            "x ≠ -1",
            "x ≠ 0",
            "x > 2"
          ],
          "correct": 0,
          "explanation": "Mẫu thức phải khác 0: x - 2 ≠ 0 ➔ x ≠ 2."
        },
        {
          "id": "m8_2_2",
          "level": 1,
          "question": "Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường là hình gì?",
          "options": [
            "Hình bình hành",
            "Hình thang",
            "Hình chữ nhật",
            "Hình thoi"
          ],
          "correct": 0,
          "explanation": "Theo định nghĩa và dấu hiệu nhận biết, tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường là hình bình hành."
        },
        {
          "id": "m8_2_3",
          "level": 2,
          "question": "Rút gọn phân thức (2x - 4)/(x² - 4) ta được kết quả:",
          "options": [
            "2/(x + 2)",
            "2/(x - 2)",
            "1/(x + 2)",
            "2/(x - 4)"
          ],
          "correct": 0,
          "explanation": "(2x - 4)/(x² - 4) = 2(x - 2) / [(x - 2)(x + 2)] = 2/(x + 2)."
        },
        {
          "id": "m8_2_4",
          "level": 2,
          "question": "Hình bình hành có hai đường chéo vuông góc với nhau là:",
          "options": [
            "Hình thoi",
            "Hình chữ nhật",
            "Hình vuông",
            "Hình thang cân"
          ],
          "correct": 0,
          "explanation": "Dấu hiệu nhận biết: Hình bình hành có 2 đường chéo vuông góc là hình thoi."
        },
        {
          "id": "m8_2_5",
          "level": 3,
          "question": "Kết quả của phép tính (x + 1)/x + (x - 1)/x là:",
          "options": [
            "2",
            "2x",
            "(2x + 2)/x",
            "1"
          ],
          "correct": 0,
          "explanation": "Cùng mẫu số x: (x + 1 + x - 1)/x = 2x/x = 2."
        },
        {
          "id": "m8_2_6",
          "level": 3,
          "question": "Cho tam giác ABC vuông tại A có AB = 6 cm, AC = 8 cm. Độ dài đường trung tuyến ứng với cạnh huyền BC là:",
          "options": [
            "5 cm",
            "10 cm",
            "7 cm",
            "4 cm"
          ],
          "correct": 0,
          "explanation": "Theo định lí Pythagore: BC = √(6² + 8²) = 10 cm. Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: AM = 10/2 = 5 cm."
        },
        {
          "id": "m8_2_7",
          "level": 4,
          "question": "Tìm giá trị nguyên của x để phân thức A = 4/(x - 3) nhận giá trị nguyên:",
          "options": [
            "x ∈ {4, 2, 5, 1, 7, -1}",
            "x ∈ {1, 2, 3}",
            "x ∈ {-1, 0, 1}",
            "x ∈ {3, 4, 5}"
          ],
          "correct": 0,
          "explanation": "Để A nguyên thì x - 3 là ước của 4: x - 3 ∈ {±1, ±2, ±4} ➔ x ∈ {4, 2, 5, 1, 7, -1}."
        },
        {
          "id": "m8_2_8",
          "level": 4,
          "question": "Cho hình chữ nhật ABCD có hai đường chéo cắt nhau tại O. Biết AC = 12 cm. Độ dài đoạn thẳng BD là:",
          "options": [
            "12 cm",
            "6 cm",
            "24 cm",
            "8 cm"
          ],
          "correct": 0,
          "explanation": "Trong hình chữ nhật, hai đường chéo có độ dài bằng nhau: BD = AC = 12 cm."
        }
      ]
    },
    {
      "id": "ham_so_phuong_trinh",
      "terms": [
        2
      ],
      "name": "Chủ Đề 3: Hàm Số Bậc Nhất & Phương Trình Bậc Nhất",
      "icon": "📈",
      "desc": "Hàm số y = ax + b (a ≠ 0), hệ số góc, đồ thị đường thẳng và giải phương trình bậc nhất một ẩn.",
      "theory": {
        "highlights": [
          {
            "icon": "🎯",
            "title": "Hàm số bậc nhất y = ax + b (a ≠ 0)",
            "content": "• <strong>Hệ số góc:</strong> a gọi là hệ số góc của đường thẳng d: y = ax + b.<br/>  - a > 0: Góc tạo bởi d và tia Ox là góc nhọn, hàm số đồng biến.<br/>  - a < 0: Góc tạo bởi d và tia Ox là góc tù, hàm số nghịch biến.<br/>• <strong>Vị trí tương đối của hai đường thẳng:</strong> Cho d: y = ax + b và d': y = a'x + b':<br/>  - d // d' ⇔ a = a' và b ≠ b'.<br/>  - d cắt d' ⇔ a ≠ a'.<br/>  - d trùng d' ⇔ a = a' và b = b'."
          },
          {
            "icon": "⚖️",
            "title": "Phương trình bậc nhất một ẩn ax + b = 0 (a ≠ 0)",
            "content": "• Chuyển vế đổi dấu: ax = -b ⇔ x = -b/a.<br/>• <strong>Phương trình tích A(x)·B(x) = 0:</strong> A(x) = 0 hoặc B(x) = 0.<br/>• <strong>Quy trình giải bài toán bằng cách lập phương trình:</strong> Chọn ẩn và đặt điều kiện ➔ Biểu diễn các đại lượng ➔ Lập phương trình ➔ Giải và đối chiếu điều kiện."
          }
        ]
      },
      "questions": [
        {
          "id": "m8_3_1",
          "level": 1,
          "question": "Hệ số góc của đường thẳng y = 3x - 5 là:",
          "options": [
            "3",
            "-5",
            "5",
            "-3"
          ],
          "correct": 0,
          "explanation": "Hàm số y = ax + b có hệ số góc là a = 3."
        },
        {
          "id": "m8_3_2",
          "level": 1,
          "question": "Nghiệm của phương trình 2x - 6 = 0 là:",
          "options": [
            "x = 3",
            "x = -3",
            "x = 6",
            "x = 2"
          ],
          "correct": 0,
          "explanation": "2x = 6 ➔ x = 6/2 = 3."
        },
        {
          "id": "m8_3_3",
          "level": 2,
          "question": "Đường thẳng y = (m - 1)x + 2 song song với đường thẳng y = 2x + 1 khi:",
          "options": [
            "m = 3",
            "m = 2",
            "m = 1",
            "m = -1"
          ],
          "correct": 0,
          "explanation": "Hai đường thẳng song song khi a = a' và b ≠ b' ➔ m - 1 = 2 ➔ m = 3 (và 2 ≠ 1 thỏa mãn)."
        },
        {
          "id": "m8_3_4",
          "level": 2,
          "question": "Tập nghiệm của phương trình (x - 2)(2x + 4) = 0 là:",
          "options": [
            "S = {2, -2}",
            "S = {2, 4}",
            "S = {-2, -4}",
            "S = {2}"
          ],
          "correct": 0,
          "explanation": "x - 2 = 0 ➔ x = 2; hoặc 2x + 4 = 0 ➔ x = -2. Vậy S = {2, -2}."
        },
        {
          "id": "m8_3_5",
          "level": 3,
          "question": "Một người đi xe máy từ A đến B với vận tốc 40 km/h hết 2,5 giờ. Quãng đường AB dài:",
          "options": [
            "100 km",
            "80 km",
            "120 km",
            "90 km"
          ],
          "correct": 0,
          "explanation": "Quãng đường s = v · t = 40 · 2,5 = 100 km."
        },
        {
          "id": "m8_3_6",
          "level": 3,
          "question": "Đồ thị hàm số y = ax + 3 đi qua điểm M(1; 5). Hệ số a bằng:",
          "options": [
            "2",
            "3",
            "5",
            "8"
          ],
          "correct": 0,
          "explanation": "Thay x = 1, y = 5 vào hàm số: 5 = a·1 + 3 ➔ a = 2."
        },
        {
          "id": "m8_3_7",
          "level": 4,
          "question": "Một ô tô dự định đi từ A đến B với vận tốc 50 km/h. Sau khi đi được 1 giờ với vận tốc dự định, ô tô tăng tốc thêm 10 km/h nên đến B sớm hơn dự định 30 phút. Quãng đường AB là:",
          "options": [
            "200 km",
            "150 km",
            "180 km",
            "250 km"
          ],
          "correct": 0,
          "explanation": "Gọi thời gian dự định là t (h). Quãng đường còn lại sau 1h: s2 = 50(t - 1). Thời gian đi s2 với vận tốc 60 km/h là t - 1 - 0,5 = t - 1,5. Ta có: 60(t - 1,5) = 50(t - 1) ➔ 10t = 40 ➔ t = 4. Vậy quãng đường AB = 50 · 4 = 200 km."
        },
        {
          "id": "m8_3_8",
          "level": 4,
          "question": "Tìm m để đồ thị hai hàm số y = 2x + m và y = x - 2 cắt nhau tại một điểm nằm trên trục tung Oy:",
          "options": [
            "m = -2",
            "m = 2",
            "m = 0",
            "m = -1"
          ],
          "correct": 0,
          "explanation": "Điểm trên trục tung Oy có x = 0. Đường y = x - 2 cắt Oy tại (0; -2). Để đường y = 2x + m đi qua (0; -2) thì m = -2."
        }
      ]
    },
    {
      "id": "hinh_dong_dang_chop",
      "terms": [
        2
      ],
      "name": "Chủ Đề 4: Định Lí Thalès, Tam Giác Đồng Dạng & Hình Chóp",
      "icon": "📐",
      "desc": "Định lí Thalès, tính chất đường phân giác, 3 trường hợp đồng dạng của tam giác; Diện tích xung quanh và thể tích hình chóp đều.",
      "theory": {
        "highlights": [
          {
            "icon": "🔺",
            "title": "Định lí Thalès & Tam giác đồng dạng",
            "content": "• <strong>Định lí Thalès:</strong> Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ.<br/>• <strong>Tính chất đường phân giác:</strong> Đường phân giác trong góc A của tam giác ABC chia cạnh đối diện thành hai đoạn tỉ lệ với hai cạnh kề: DB/DC = AB/AC.<br/>• <strong>Ba trường hợp đồng dạng:</strong> c-c-c (ba cạnh tỉ lệ), c-g-c (hai cạnh tỉ lệ và góc xen giữa bằng nhau), g-g (hai góc bằng nhau)."
          },
          {
            "icon": "🏛️",
            "title": "Hình chóp tam giác đều & chóp tứ giác đều",
            "content": "• <strong>Diện tích xung quanh:</strong> S_xq = p · d (với p là nửa chu vi đáy, d là trung đoạn).<br/>• <strong>Thể tích hình chóp:</strong> V = 1/3 · S_đáy · h (với h là chiều cao hình chóp)."
          }
        ]
      },
      "questions": [
        {
          "id": "m8_4_1",
          "level": 1,
          "question": "Cho tam giác ABC có MN // BC (M ∈ AB, N ∈ AC). Theo định lí Thalès ta có tỉ số đúng là:",
          "options": [
            "AM/AB = AN/AC",
            "AM/MB = AC/AN",
            "AM/AC = AN/AB",
            "AM/AN = BC/MN"
          ],
          "correct": 0,
          "explanation": "Theo định lí Thalès: AM/AB = AN/AC."
        },
        {
          "id": "m8_4_2",
          "level": 1,
          "question": "Công thức tính thể tích của hình chóp có diện tích đáy S và chiều cao h là:",
          "options": [
            "V = 1/3 · S · h",
            "V = S · h",
            "V = 1/2 · S · h",
            "V = 3 · S · h"
          ],
          "correct": 0,
          "explanation": "Thể tích hình chóp bằng 1/3 diện tích đáy nhân chiều cao."
        },
        {
          "id": "m8_4_3",
          "level": 2,
          "question": "Cho tam giác ABC, tia phân giác trong góc A cắt BC tại D. Biết AB = 4 cm, AC = 6 cm, BD = 2 cm. Độ dài đoạn CD là:",
          "options": [
            "3 cm",
            "4 cm",
            "2 cm",
            "5 cm"
          ],
          "correct": 0,
          "explanation": "Theo tính chất đường phân giác: BD/CD = AB/AC ➔ 2/CD = 4/6 ➔ CD = 3 cm."
        },
        {
          "id": "m8_4_4",
          "level": 2,
          "question": "Một hình chóp tứ giác đều có cạnh đáy bằng 6 cm, chiều cao h = 10 cm. Thể tích hình chóp là:",
          "options": [
            "120 cm³",
            "360 cm³",
            "60 cm³",
            "180 cm³"
          ],
          "correct": 0,
          "explanation": "Diện tích đáy S = 6² = 36 cm². Thể tích V = 1/3 · 36 · 10 = 120 cm³."
        },
        {
          "id": "m8_4_5",
          "level": 3,
          "question": "Hai tam giác đồng dạng với tỉ số đồng dạng k = 2/3. Tỉ số diện tích của hai tam giác đó bằng:",
          "options": [
            "4/9",
            "2/3",
            "9/4",
            "3/2"
          ],
          "correct": 0,
          "explanation": "Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng: k² = (2/3)² = 4/9."
        },
        {
          "id": "m8_4_6",
          "level": 3,
          "question": "Bóng của một cột cờ trên mặt đất dài 6 m. Cùng lúc đó một cọc tiêu cao 1 m cắm vuông góc với mặt đất có bóng dài 1,5 m. Chiều cao của cột cờ là:",
          "options": [
            "4 m",
            "9 m",
            "6 m",
            "5 m"
          ],
          "correct": 0,
          "explanation": "Theo tính chất tam giác đồng dạng: h_cột / h_cọc = bóng_cột / bóng_cọc ➔ h / 1 = 6 / 1,5 ➔ h = 4 m."
        },
        {
          "id": "m8_4_7",
          "level": 4,
          "question": "Một chiếc lều cắm trại có dạng hình chóp tứ giác đều có đáy là hình vuông cạnh 2 m, độ dài trung đoạn d = 2,5 m. Diện tích vải bạt cần để phủ kín 4 mặt bên (không tính đáy) là:",
          "options": [
            "10 m²",
            "20 m²",
            "5 m²",
            "8 m²"
          ],
          "correct": 0,
          "explanation": "Nửa chu vi đáy p = (2 · 4) / 2 = 4 m. Diện tích xung quanh S_xq = p · d = 4 · 2,5 = 10 m²."
        },
        {
          "id": "m8_4_8",
          "level": 4,
          "question": "Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài đường cao AH bằng:",
          "options": [
            "6 cm",
            "5 cm",
            "36 cm",
            "6,5 cm"
          ],
          "correct": 0,
          "explanation": "Tam giác HBA đồng dạng tam giác HAC ➔ AH² = BH · CH = 4 · 9 = 36 ➔ AH = 6 cm."
        }
      ]
    }
  ]
};
