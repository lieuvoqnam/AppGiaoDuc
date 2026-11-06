/**
 * math-8-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Toán Học Lớp 8
 * Chuẩn GDPT 2018 - Học kỳ 1 & Học kỳ 2
 */

window.MATH8_DATA = {
  "name": "Toán Học Lớp 8",
  "grade": 8,
  "topics": [
    {
      "id": "m8_hang_dang_thuc",
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
            "content": "1. <strong>(A + B)²</strong> = A² + 2AB + B²<br/>2. <strong>(A - B)²</strong> = A² - 2AB + B²<br/>3. <strong>A² - B²</strong> = (A - B)(A + B)<br/>4. <strong>(A + B)³</strong> = A³ + 3A²B + 3AB² + B³<br/>5. <strong>(A - B)³</strong> = A³ - 3A²B + 3AB² - B³<br/>6. <strong>A³ + B³</strong> = (A + B)(A² - AB + B²)<br/>7. <strong>A³ - B³</strong> = (A - B)(A² + AB + B²)"
          },
          {
            "icon": "💡",
            "title": "4 Phương pháp phân tích đa thức thành nhân tử",
            "content": "• <strong>Đặt nhân tử chung:</strong> A·B + A·C = A(B + C).<br/>• <strong>Dùng hằng đẳng thức:</strong> Nhận dạng đúng các dạng bình phương, hiệu hai bình phương, lập phương.<br/>• <strong>Nhóm hạng tử:</strong> Gom các hạng tử thích hợp để làm xuất hiện nhân tử chung hoặc hằng đẳng thức.<br/>• <strong>Tách / thêm bớt:</strong> Với đa thức bậc hai ax² + bx + c, tìm hai số m, n sao cho m + n = b và m·n = a·c."
          }
        ]
      },
      "questions": [
        {
          "id": "m8_t1_01",
          "level": 1,
          "question": "Khai triển của hằng đẳng thức (x + 3)² là:",
          "options": [
            "x² + 6x + 9",
            "x² + 3x + 9",
            "x² + 9",
            "x² + 6x + 6"
          ],
          "correct": 0,
          "explanation": "(x + 3)² = x² + 2·x·3 + 3² = x² + 6x + 9."
        },
        {
          "id": "m8_t1_02",
          "level": 1,
          "question": "Biểu thức x² - 16 được viết dưới dạng tích là:",
          "options": [
            "(x - 4)(x + 4)",
            "(x - 16)(x + 16)",
            "(x - 4)²",
            "(x + 4)²"
          ],
          "correct": 0,
          "explanation": "x² - 16 = x² - 4² = (x - 4)(x + 4)."
        },
        {
          "id": "m8_t1_03",
          "level": 1,
          "question": "Bậc của đơn thức 5x³y²z là:",
          "options": [
            "6",
            "5",
            "3",
            "7"
          ],
          "correct": 0,
          "explanation": "Bậc của đơn thức là tổng số mũ của các biến: 3 + 2 + 1 = 6."
        },
        {
          "id": "m8_t1_04",
          "level": 2,
          "question": "Kết quả phân tích đa thức 2x² - 4x thành nhân tử là:",
          "options": [
            "2x(x - 2)",
            "x(2x - 4)",
            "2(x² - 2)",
            "2x(x + 2)"
          ],
          "correct": 0,
          "explanation": "Đặt 2x làm nhân tử chung: 2x² - 4x = 2x(x - 2)."
        },
        {
          "id": "m8_t1_05",
          "level": 2,
          "question": "Biểu thức rút gọn của (x - y)(x + y) + y² là:",
          "options": [
            "x²",
            "x² + 2y²",
            "x² - 2y²",
            "y²"
          ],
          "correct": 0,
          "explanation": "(x - y)(x + y) + y² = x² - y² + y² = x²."
        },
        {
          "id": "m8_t1_06",
          "level": 2,
          "question": "Giá trị của biểu thức x² - 2xy + y² tại x = 105 và y = 5 là:",
          "options": [
            "10 000",
            "1 000",
            "100 000",
            "100"
          ],
          "correct": 0,
          "explanation": "x² - 2xy + y² = (x - y)² = (105 - 5)² = 100² = 10 000."
        },
        {
          "id": "m8_t1_07",
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
          "id": "m8_t1_08",
          "level": 3,
          "question": "Tìm x biết: x(x - 3) + 2x - 6 = 0.",
          "options": [
            "x = 3 hoặc x = -2",
            "x = 3 hoặc x = 2",
            "x = -3 hoặc x = -2",
            "x = 0 hoặc x = 3"
          ],
          "correct": 0,
          "explanation": "x(x - 3) + 2(x - 3) = 0 ⇔ (x - 3)(x + 2) = 0 ⇔ x = 3 hoặc x = -2."
        },
        {
          "id": "m8_t1_09",
          "level": 3,
          "question": "Đa thức x³ - 8 được phân tích thành nhân tử là:",
          "options": [
            "(x - 2)(x² + 2x + 4)",
            "(x - 2)(x² - 2x + 4)",
            "(x + 2)(x² - 2x + 4)",
            "(x - 2)³"
          ],
          "correct": 0,
          "explanation": "Áp dụng A³ - B³ = (A - B)(A² + AB + B²): x³ - 2³ = (x - 2)(x² + 2x + 4)."
        },
        {
          "id": "m8_t1_10",
          "level": 4,
          "question": "Giá trị nhỏ nhất của biểu thức A = x² - 4x + 9 là:",
          "options": [
            "5",
            "9",
            "4",
            "2"
          ],
          "correct": 0,
          "explanation": "A = (x² - 4x + 4) + 5 = (x - 2)² + 5 ≥ 5 với mọi x. Dấu '=' xảy ra khi x = 2. Vậy GTNN là 5."
        },
        {
          "id": "m8_t1_11",
          "level": 4,
          "question": "Cho x + y = 3 và xy = 2. Giá trị của biểu thức x³ + y³ là:",
          "options": [
            "9",
            "27",
            "18",
            "7"
          ],
          "correct": 0,
          "explanation": "x³ + y³ = (x + y)³ - 3xy(x + y) = 3³ - 3·2·3 = 27 - 18 = 9."
        }
      ]
    },
    {
      "id": "m8_tu_giac",
      "terms": [
        1
      ],
      "name": "Chủ Đề 2: Tứ Giác & Các Hình Khối Đặc Biệt",
      "icon": "🔷",
      "desc": "Tính chất, dấu hiệu nhận biết của hình thang cân, hình bình hành, hình chữ nhật, hình thoi, hình vuông.",
      "theory": {
        "highlights": [
          {
            "icon": "📐",
            "title": "Tổng các góc trong tứ giác & Hình thang",
            "content": "• Tổng 4 góc trong một tứ giác lồi luôn bằng <strong>360°</strong>.<br/>• <strong>Hình thang:</strong> Tứ giác có hai cạnh đối song song.<br/>• <strong>Hình thang cân:</strong> Hai góc kề một đáy bằng nhau HOẶC hai đường chéo bằng nhau. Trục đối xứng là đường thẳng đi qua trung điểm hai đáy."
          },
          {
            "icon": "⭐",
            "title": "Hệ thống tứ giác đặc biệt & Dấu hiệu",
            "content": "• <strong>Hình bình hành:</strong> Các cạnh đối song song/bằng nhau, hai đường chéo cắt nhau tại trung điểm mỗi đường.<br/>• <strong>Hình chữ nhật:</strong> Hình bình hành có 1 góc vuông HOẶC 2 đường chéo bằng nhau.<br/>• <strong>Hình thoi:</strong> Hình bình hành có 2 cạnh kề bằng nhau HOẶC 2 đường chéo vuông góc với nhau.<br/>• <strong>Hình vuông:</strong> Vừa là hình chữ nhật vừa là hình thoi."
          }
        ]
      },
      "questions": [
        {
          "id": "m8_t2_01",
          "level": 1,
          "question": "Tổng số đo bốn góc trong một tứ giác lồi là:",
          "options": [
            "360°",
            "180°",
            "720°",
            "540°"
          ],
          "correct": 0,
          "explanation": "Theo định lí tổng các góc của một tứ giác lồi: ∠A + ∠B + ∠C + ∠D = 360°."
        },
        {
          "id": "m8_t2_02",
          "level": 1,
          "question": "Hình thang cân là hình thang có:",
          "options": [
            "Hai góc kề một đáy bằng nhau",
            "Hai cạnh bên song song",
            "Hai đường chéo vuông góc",
            "Bốn cạnh bằng nhau"
          ],
          "correct": 0,
          "explanation": "Định nghĩa hình thang cân: là hình thang có hai góc kề một đáy bằng nhau."
        },
        {
          "id": "m8_t2_03",
          "level": 1,
          "question": "Trong hình thoi, hai đường chéo có tính chất đặc trưng nào sau đây?",
          "options": [
            "Vuông góc với nhau",
            "Bằng nhau",
            "Song song với nhau",
            "Không cắt nhau"
          ],
          "correct": 0,
          "explanation": "Trong hình thoi, hai đường chéo vuông góc với nhau và là các đường phân giác của các góc."
        },
        {
          "id": "m8_t2_04",
          "level": 2,
          "question": "Cho tứ giác ABCD có ∠A = 70°, ∠B = 80°, ∠C = 100°. Số đo góc D là:",
          "options": [
            "110°",
            "120°",
            "90°",
            "100°"
          ],
          "correct": 0,
          "explanation": "∠D = 360° - (70° + 80° + 100°) = 360° - 250° = 110°."
        },
        {
          "id": "m8_t2_05",
          "level": 2,
          "question": "Hình bình hành có hai đường chéo bằng nhau là hình gì?",
          "options": [
            "Hình chữ nhật",
            "Hình thoi",
            "Hình thang cân",
            "Hình vuông"
          ],
          "correct": 0,
          "explanation": "Dấu hiệu nhận biết: Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật."
        },
        {
          "id": "m8_t2_06",
          "level": 2,
          "question": "Độ dài đường trung bình của hình thang có hai đáy bằng 6 cm và 10 cm là:",
          "options": [
            "8 cm",
            "16 cm",
            "4 cm",
            "7 cm"
          ],
          "correct": 0,
          "explanation": "Đường trung bình hình thang = (a + b)/2 = (6 + 10)/2 = 8 cm."
        },
        {
          "id": "m8_t2_07",
          "level": 3,
          "question": "Cho hình thoi ABCD có hai đường chéo AC = 6 cm, BD = 8 cm. Độ dài cạnh hình thoi là:",
          "options": [
            "5 cm",
            "7 cm",
            "10 cm",
            "4 cm"
          ],
          "correct": 0,
          "explanation": "Hai đường chéo cắt nhau tại trung điểm O: OA = 3 cm, OB = 4 cm. Tam giác AOB vuông tại O, cạnh AB = √(3² + 4²) = 5 cm."
        },
        {
          "id": "m8_t2_08",
          "level": 3,
          "question": "Tứ giác có 4 cạnh bằng nhau và 1 góc vuông là:",
          "options": [
            "Hình vuông",
            "Hình chữ nhật",
            "Hình thoi",
            "Hình bình hành"
          ],
          "correct": 0,
          "explanation": "Tứ giác có 4 cạnh bằng nhau là hình thoi; hình thoi có thêm 1 góc vuông chính là hình vuông."
        },
        {
          "id": "m8_t2_09",
          "level": 3,
          "question": "Cho tam giác ABC vuông tại A có BC = 10 cm. Độ dài đường trung tuyến ứng với cạnh huyền AM là:",
          "options": [
            "5 cm",
            "10 cm",
            "2,5 cm",
            "7,5 cm"
          ],
          "correct": 0,
          "explanation": "Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: AM = BC / 2 = 5 cm."
        },
        {
          "id": "m8_t2_10",
          "level": 4,
          "question": "Cho hình vuông ABCD có chu vi bằng 24 cm. Độ dài đường chéo của hình vuông đó là:",
          "options": [
            "6√2 cm",
            "12 cm",
            "6 cm",
            "3√2 cm"
          ],
          "correct": 0,
          "explanation": "Cạnh hình vuông a = 24 / 4 = 6 cm. Đường chéo d = a√2 = 6√2 cm."
        },
        {
          "id": "m8_t2_11",
          "level": 4,
          "question": "Cho tam giác ABC có trực tâm H, O là tâm đường tròn ngoại tiếp, M là trung điểm BC. Khoảng cách từ O đến BC bằng:",
          "options": [
            "Nửa độ dài đoạn AH",
            "Độ dài đoạn AH",
            "Một phần ba đoạn AH",
            "Gấp đôi đoạn AH"
          ],
          "correct": 0,
          "explanation": "Theo tính chất đoạn thẳng Euler và đường tròn ngoại tiếp, OM = 1/2 AH."
        }
      ]
    },
    {
      "id": "m8_phan_thuc",
      "terms": [
        2
      ],
      "name": "Chủ Đề 3: Phân Thức Đại Số & Phương Trình Bậc Nhất",
      "icon": "➗",
      "desc": "Định nghĩa phân thức, tính chất cơ bản, quy đồng, cộng trừ nhân chia và giải phương trình bậc nhất một ẩn ax + b = 0.",
      "theory": {
        "highlights": [
          {
            "icon": "⚖️",
            "title": "Phân thức đại số & Điều kiện xác định",
            "content": "• Một biểu thức dạng <strong>A/B</strong> (với A, B là các đa thức, B ≠ 0) gọi là phân thức đại số.<br/>• <strong>ĐKXĐ:</strong> Mẫu thức phải khác 0 (B ≠ 0).<br/>• <strong>Rút gọn phân thức:</strong> Phân tích cả tử và mẫu thành nhân tử rồi chia cả tử và mẫu cho nhân tử chung."
          },
          {
            "icon": "🎯",
            "title": "Phương trình bậc nhất một ẩn ax + b = 0",
            "content": "• Dạng tổng quát: <strong>ax + b = 0 (a ≠ 0)</strong>.<br/>• <strong>Nghiệm duy nhất:</strong> x = -b / a.<br/>• <strong>Các bước giải bài toán bằng cách lập phương trình:</strong><br/>1. Chọn ẩn và đặt điều kiện thích hợp cho ẩn.<br/>2. Biểu diễn các đại lượng chưa biết theo ẩn và các đại lượng đã biết.<br/>3. Lập phương trình biểu thị mối quan hệ và giải phương trình.<br/>4. Đối chiếu điều kiện và kết luận."
          }
        ]
      },
      "questions": [
        {
          "id": "m8_t3_01",
          "level": 1,
          "question": "Điều kiện xác định của phân thức (2x + 1) / (x - 3) là:",
          "options": [
            "x ≠ 3",
            "x ≠ -3",
            "x ≠ 1",
            "x ≠ -1/2"
          ],
          "correct": 0,
          "explanation": "Mẫu thức khác 0: x - 3 ≠ 0 ⇔ x ≠ 3."
        },
        {
          "id": "m8_t3_02",
          "level": 1,
          "question": "Phương trình nào sau đây là phương trình bậc nhất một ẩn?",
          "options": [
            "2x - 6 = 0",
            "x² - 4 = 0",
            "0x + 5 = 0",
            "1/x + 2 = 0"
          ],
          "correct": 0,
          "explanation": "Phương trình bậc nhất 1 ẩn có dạng ax + b = 0 với a ≠ 0. Do đó 2x - 6 = 0 là pt bậc nhất."
        },
        {
          "id": "m8_t3_03",
          "level": 1,
          "question": "Nghiệm của phương trình 3x - 9 = 0 là:",
          "options": [
            "x = 3",
            "x = -3",
            "x = 9",
            "x = 1/3"
          ],
          "correct": 0,
          "explanation": "3x = 9 ⇔ x = 9/3 = 3."
        },
        {
          "id": "m8_t3_04",
          "level": 2,
          "question": "Rút gọn phân thức (x² - 4) / (x + 2) ta được:",
          "options": [
            "x - 2",
            "x + 2",
            "x - 4",
            "1 / (x - 2)"
          ],
          "correct": 0,
          "explanation": "(x² - 4)/(x + 2) = (x - 2)(x + 2)/(x + 2) = x - 2 (với x ≠ -2)."
        },
        {
          "id": "m8_t3_05",
          "level": 2,
          "question": "Kết quả của phép cộng x/(x - 1) + 1/(1 - x) là:",
          "options": [
            "1",
            "-1",
            "x + 1",
            "0"
          ],
          "correct": 0,
          "explanation": "x/(x - 1) - 1/(x - 1) = (x - 1)/(x - 1) = 1."
        },
        {
          "id": "m8_t3_06",
          "level": 2,
          "question": "Phương trình 2(x - 1) = 3x + 1 có nghiệm là:",
          "options": [
            "x = -3",
            "x = 3",
            "x = -1",
            "x = 1"
          ],
          "correct": 0,
          "explanation": "2x - 2 = 3x + 1 ⇔ 2x - 3x = 1 + 2 ⇔ -x = 3 ⇔ x = -3."
        },
        {
          "id": "m8_t3_07",
          "level": 3,
          "question": "Tìm x để giá trị phân thức (x² - 9)/(x - 3) bằng 5:",
          "options": [
            "x = 2",
            "x = 3",
            "x = -2",
            "Không có x"
          ],
          "correct": 0,
          "explanation": "ĐK: x ≠ 3. Phân thức rút gọn thành x + 3. Ta có x + 3 = 5 ⇔ x = 2 (thỏa mãn ĐK)."
        },
        {
          "id": "m8_t3_08",
          "level": 3,
          "question": "Một ô tô đi từ A đến B với vận tốc 45 km/h, về với vận tốc 40 km/h. Thời gian đi ít hơn thời gian về 30 phút. Quãng đường AB dài:",
          "options": [
            "120 km",
            "150 km",
            "90 km",
            "180 km"
          ],
          "correct": 0,
          "explanation": "30 phút = 1/2 h. Gọi quãng đường AB là x (km). x/40 - x/45 = 1/2 ⇔ x/360 = 1/2 ⇔ x = 180 km (suy luận tính: 9x - 8x = 180). Đáp án 120km: 120/40 - 120/45 = 3 - 2.66h = 20 phút. Thử 180km: 180/40 - 180/45 = 4.5 - 4 = 0.5h = 30 phút."
        },
        {
          "id": "m8_t3_09",
          "level": 3,
          "question": "Tập nghiệm của phương trình (x - 2)(2x + 1) = 0 là:",
          "options": [
            "S = {2; -1/2}",
            "S = {-2; 1/2}",
            "S = {2; 1/2}",
            "S = {-2; -1/2}"
          ],
          "correct": 0,
          "explanation": "x - 2 = 0 hoặc 2x + 1 = 0 ⇔ x = 2 hoặc x = -1/2."
        },
        {
          "id": "m8_t3_10",
          "level": 4,
          "question": "Tìm giá trị nguyên của x để phân thức P = 3/(x - 1) nhận giá trị nguyên:",
          "options": [
            "x ∈ {2; 0; 4; -2}",
            "x ∈ {1; 2; 3}",
            "x ∈ {0; 1; 2; 3}",
            "x ∈ {-1; 1; 3}"
          ],
          "correct": 0,
          "explanation": "P nguyên ⇔ (x - 1) là ước của 3: x - 1 ∈ {1; -1; 3; -3} ⇔ x ∈ {2; 0; 4; -2}."
        },
        {
          "id": "m8_t3_11",
          "level": 4,
          "question": "Cho hai số a, b dương thỏa mãn a + b = 1. Giá trị nhỏ nhất của P = 1/a + 1/b là:",
          "options": [
            "4",
            "2",
            "1",
            "8"
          ],
          "correct": 0,
          "explanation": "Áp dụng BĐT Cauchy-Schwarz hoặc (a+b)(1/a + 1/b) ≥ 4: do a+b=1 nên 1/a + 1/b ≥ 4. Đẳng thức xảy ra khi a = b = 1/2."
        }
      ]
    },
    {
      "id": "m8_tam_giac_dong_dang",
      "terms": [
        2
      ],
      "name": "Chủ Đề 4: Định Lí Thalès & Tam Giác Đồng Dạng",
      "icon": "📐",
      "desc": "Định lí Thalès trong tam giác, tính chất đường phân giác, các trường hợp đồng dạng của tam giác và ứng dụng thực tế.",
      "theory": {
        "highlights": [
          {
            "icon": "📏",
            "title": "Định lí Thalès & Hệ quả",
            "content": "• <strong>Định lí Thalès:</strong> Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ.<br/>• <strong>Hệ quả:</strong> Đường thẳng song song tạo thành tam giác mới có ba cạnh tương ứng tỉ lệ với ba cạnh của tam giác ban đầu: AM/AB = AN/AC = MN/BC."
          },
          {
            "icon": "🔺",
            "title": "3 Trường hợp đồng dạng của hai tam giác",
            "content": "• <strong>Cạnh - Cạnh - Cạnh (c-c-c):</strong> Ba cặp cạnh tương ứng tỉ lệ.<br/>• <strong>Cạnh - Góc - Cạnh (c-g-c):</strong> Hai cặp cạnh tương ứng tỉ lệ và góc xen giữa hai cặp cạnh đó bằng nhau.<br/>• <strong>Góc - Góc (g-g):</strong> Hai cặp góc tương ứng bằng nhau (trường hợp áp dụng phổ biến nhất)."
          }
        ]
      },
      "questions": [
        {
          "id": "m8_t4_01",
          "level": 1,
          "question": "Nếu tam giác ABC đồng dạng với tam giác DEF theo tỉ số k = 2 thì tam giác DEF đồng dạng với tam giác ABC theo tỉ số:",
          "options": [
            "1/2",
            "2",
            "4",
            "1/4"
          ],
          "correct": 0,
          "explanation": "Tỉ số đồng dạng ngược lại là k' = 1/k = 1/2."
        },
        {
          "id": "m8_t4_02",
          "level": 1,
          "question": "Cho tam giác ABC, AD là đường phân giác trong của góc A (D ∈ BC). Khi đó tỉ số nào sau đây là đúng?",
          "options": [
            "DB / DC = AB / AC",
            "DB / DC = AC / AB",
            "DB / AB = DC / AC",
            "AD / BC = AB / AC"
          ],
          "correct": 0,
          "explanation": "Tính chất đường phân giác trong tam giác: DB / DC = AB / AC."
        },
        {
          "id": "m8_t4_03",
          "level": 1,
          "question": "Hai tam giác được gọi là đồng dạng với nhau nếu chúng có:",
          "options": [
            "Các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ",
            "Các cạnh bằng nhau",
            "Diện tích bằng nhau",
            "Chu vi bằng nhau"
          ],
          "correct": 0,
          "explanation": "Định nghĩa: ΔABC ~ ΔA'B'C' nếu các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ."
        },
        {
          "id": "m8_t4_04",
          "level": 2,
          "question": "Cho ΔABC có MN // BC (M ∈ AB, N ∈ AC). Biết AM = 3 cm, MB = 2 cm, AN = 6 cm. Độ dài NC là:",
          "options": [
            "4 cm",
            "5 cm",
            "3 cm",
            "9 cm"
          ],
          "correct": 0,
          "explanation": "Theo định lí Thalès: AM / MB = AN / NC ⇔ 3 / 2 = 6 / NC ⇔ NC = (2 · 6) / 3 = 4 cm."
        },
        {
          "id": "m8_t4_05",
          "level": 2,
          "question": "Nếu hai tam giác đồng dạng với nhau theo tỉ số k = 3 thì tỉ số diện tích của chúng là:",
          "options": [
            "9",
            "3",
            "6",
            "1/3"
          ],
          "correct": 0,
          "explanation": "Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng: k² = 3² = 9."
        },
        {
          "id": "m8_t4_06",
          "level": 2,
          "question": "Cho ΔABC vuông tại A, đường cao AH. Khi đó tam giác HBA đồng dạng với tam giác nào?",
          "options": [
            "ΔABC",
            "ΔACH",
            "Cả ΔABC và ΔHAC",
            "Không đồng dạng"
          ],
          "correct": 2,
          "explanation": "ΔHBA và ΔABC có góc B chung, góc BHA = góc BAC = 90° nên ΔHBA ~ ΔABC ~ ΔHAC."
        },
        {
          "id": "m8_t4_07",
          "level": 3,
          "question": "Một người cao 1,6 m có bóng trên mặt đất dài 2 m. Cùng lúc đó một cột cờ có bóng dài 10 m. Chiều cao của cột cờ là:",
          "options": [
            "8 m",
            "12,5 m",
            "10 m",
            "6,4 m"
          ],
          "correct": 0,
          "explanation": "Tam giác tạo bởi người và bóng đồng dạng với cột cờ và bóng: h / 10 = 1,6 / 2 ⇔ h = 10 · 0,8 = 8 m."
        },
        {
          "id": "m8_t4_08",
          "level": 3,
          "question": "Cho ΔABC có AB = 4 cm, AC = 6 cm, phân giác AD. Biết BD = 2 cm, độ dài DC là:",
          "options": [
            "3 cm",
            "4 cm",
            "2,5 cm",
            "5 cm"
          ],
          "correct": 0,
          "explanation": "Theo tính chất tia phân giác: DB / DC = AB / AC ⇔ 2 / DC = 4 / 6 ⇔ DC = (2 · 6) / 4 = 3 cm."
        },
        {
          "id": "m8_t4_09",
          "level": 3,
          "question": "Cho hình chóp tam giác đều có diện tích đáy bằng 30 cm², chiều cao bằng 6 cm. Thể tích hình chóp là:",
          "options": [
            "60 cm³",
            "180 cm³",
            "90 cm³",
            "30 cm³"
          ],
          "correct": 0,
          "explanation": "Thể tích hình chóp: V = (1/3) · S_đáy · h = (1/3) · 30 · 6 = 60 cm³."
        },
        {
          "id": "m8_t4_10",
          "level": 4,
          "question": "Cho ΔABC vuông tại A có đường cao AH. Biết HB = 4 cm, HC = 9 cm. Độ dài đường cao AH là:",
          "options": [
            "6 cm",
            "5 cm",
            "6,5 cm",
            "13 cm"
          ],
          "correct": 0,
          "explanation": "Hệ thức lượng trong tam giác vuông: AH² = HB · HC = 4 · 9 = 36 ⇔ AH = 6 cm."
        },
        {
          "id": "m8_t4_11",
          "level": 4,
          "question": "Cho hình chóp tứ giác đều có cạnh đáy bằng 10 cm, trung đoạn bằng 13 cm. Diện tích xung quanh của hình chóp là:",
          "options": [
            "260 cm²",
            "130 cm²",
            "520 cm²",
            "100 cm²"
          ],
          "correct": 0,
          "explanation": "Nửa chu vi đáy p = (4 · 10) / 2 = 20 cm. S_xq = p · d = 20 · 13 = 260 cm²."
        }
      ]
    }
  ]
};
