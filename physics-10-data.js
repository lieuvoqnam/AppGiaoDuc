/**
 * physics-10-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Vật Lí Lớp 10
 * Chuẩn GDPT 2018 - Học kỳ 1 & Học kỳ 2
 */

window.PHYSICS10_DATA = {
  "name": "Vật Lí Lớp 10",
  "grade": 10,
  "topics": [
    {
      "id": "dong_hoc_ba_dinh_luat_newton",
      "terms": [
        1
      ],
      "name": "Chủ Đề 1: Động Học & Ba Định Luật Newton",
      "icon": "⚡",
      "desc": "Chuyển động thẳng biến đổi đều, rơi tự do; Ba định luật Newton, các lực cơ học (lực hấp dẫn, ma sát, đàn hồi) và cân bằng vật rắn.",
      "theory": {
        "highlights": [
          {
            "icon": "🏎️",
            "title": "Chuyển động thẳng biến đổi đều",
            "content": "• <strong>Vận tốc:</strong> v = v0 + at.<br/>• <strong>Độ dịch chuyển:</strong> d = v0·t + 1/2·at².<br/>• <strong>Hệ thức độc lập thời gian:</strong> v² - v0² = 2ad.<br/>• <strong>Rơi tự do (v0 = 0):</strong> v = gt; h = 1/2·gt² ➔ v = √(2gh)."
          },
          {
            "icon": "⚡",
            "title": "Ba định luật Newton về chuyển động",
            "content": "• <strong>Định luật I:</strong> Nếu một vật không chịu tác dụng của lực nào hoặc chịu các lực có hợp lực bằng 0 thì vật đang đứng yên sẽ tiếp tục đứng yên, đang chuyển động sẽ tiếp tục chuyển động thẳng đều (quán tính).<br/>• <strong>Định luật II:</strong> Gia tốc tỉ lệ thuận với lực tác dụng và tỉ lệ nghịch với khối lượng: a = F / m ➔ F = m · a.<br/>• <strong>Định luật III:</strong> Trong mọi trường hợp, khi vật A tác dụng lên vật B một lực thì vật B cũng tác dụng lại vật A một lực: F_AB = - F_BA (lực và phản lực cùng phương, ngược chiều, cùng độ lớn nhưng đặt vào 2 vật khác nhau)."
          }
        ]
      },
      "questions": [
        {
          "id": "phy10_1_1",
          "level": 1,
          "question": "Một vật chuyển động thẳng biến đổi đều từ trạng thái nghỉ với gia tốc a = 2 m/s². Sau 5 giây, vận tốc của vật là:",
          "options": [
            "10 m/s",
            "5 m/s",
            "25 m/s",
            "20 m/s"
          ],
          "correct": 0,
          "explanation": "v = v0 + at = 0 + 2 · 5 = 10 m/s."
        },
        {
          "id": "phy10_1_2",
          "level": 1,
          "question": "Cặp 'lực và phản lực' trong định luật III Newton có đặc điểm nào sau đây?",
          "options": [
            "Xuất hiện và mất đi đồng thời, cùng phương ngược chiều nhưng đặt vào hai vật khác nhau",
            "Đặt vào cùng một vật nên triệt tiêu lẫn nhau",
            "Có độ lớn khác nhau",
            "Luôn cùng hướng với nhau"
          ],
          "correct": 0,
          "explanation": "Lực và phản lực là cặp lực trực đối nhưng đặt vào hai vật tương tác khác nhau nên không triệt tiêu nhau."
        },
        {
          "id": "phy10_1_3",
          "level": 2,
          "question": "Thả rơi tự do một hòn sỏi từ độ cao h = 20 m xuống mặt đất. Lấy g = 10 m/s². Thời gian rơi của hòn sỏi là:",
          "options": [
            "2 giây",
            "1 giây",
            "4 giây",
            "2,5 giây"
          ],
          "correct": 0,
          "explanation": "h = 1/2 · gt² ➔ t = √(2h / g) = √(2 · 20 / 10) = √4 = 2 s."
        },
        {
          "id": "phy10_1_4",
          "level": 2,
          "question": "Một ô tô có khối lượng 1 000 kg đang chuyển động thì hãm phanh với lực hãm F = 2 000 N. Gia tốc của ô tô trong quá trình hãm phanh là:",
          "options": [
            "-2 m/s²",
            "2 m/s²",
            "-0,5 m/s²",
            "0,5 m/s²"
          ],
          "correct": 0,
          "explanation": "Lực hãm ngược chiều chuyển động nên F = -2000 N ➔ a = F / m = -2000 / 1000 = -2 m/s²."
        },
        {
          "id": "phy10_1_5",
          "level": 3,
          "question": "Một lò xo có độ cứng k = 100 N/m. Khi treo vật có khối lượng m thì lò xo dãn ra 4 cm. Lấy g = 10 m/s². Khối lượng m của vật là:",
          "options": [
            "0,4 kg (400 g)",
            "4 kg",
            "0,25 kg",
            "2,5 kg"
          ],
          "correct": 0,
          "explanation": "Khi cân bằng: F_đh = P ➔ k · Δl = m · g ➔ 100 · 0,04 = m · 10 ➔ m = 4 / 10 = 0,4 kg."
        },
        {
          "id": "phy10_1_6",
          "level": 3,
          "question": "Đoàn tàu đang chạy với vận tốc 72 km/h (20 m/s) thì hãm phanh chuyển động chậm dần đều và dừng lại sau khi đi thêm 100 m. Gia tốc của đoàn tàu là:",
          "options": [
            "-2 m/s²",
            "-4 m/s²",
            "-1 m/s²",
            "-0,5 m/s²"
          ],
          "correct": 0,
          "explanation": "Áp dụng v² - v0² = 2ad ➔ 0² - 20² = 2 · a · 100 ➔ -400 = 200a ➔ a = -2 m/s²."
        },
        {
          "id": "phy10_1_7",
          "level": 4,
          "question": "Một vật trượt đều xuống một mặt phẳng nghiêng góc α = 30° so với phương ngang. Hệ số ma sát trượt μ giữa vật và mặt phẳng nghiêng bằng:",
          "options": [
            "tan 30° = 1/√3 ≈ 0,577",
            "sin 30° = 0,5",
            "cos 30° ≈ 0,866",
            "cot 30° = √3"
          ],
          "correct": 0,
          "explanation": "Khi trượt đều (a = 0): P·sin α = F_ms = μ·N = μ·P·cos α ➔ μ = sin α / cos α = tan α = tan 30° = 1/√3."
        },
        {
          "id": "phy10_1_8",
          "level": 4,
          "question": "Một người dùng cờ lê dài 25 cm để siết chặt một bu lông với lực tác dụng F = 40 N vuông góc với cán cờ lê. Mômen lực tác dụng lên bu lông là:",
          "options": [
            "10 N·m",
            "100 N·m",
            "1 000 N·m",
            "1,6 N·m"
          ],
          "correct": 0,
          "explanation": "Mômen lực M = F · d = 40 · 0,25 = 10 N·m."
        }
      ]
    },
    {
      "id": "nang_luong_dong_luong",
      "terms": [
        2
      ],
      "name": "Chủ Đề 2: Năng Lượng, Công Cơ Học, Động Lượng & Bảo Toàn",
      "icon": "⚡",
      "desc": "Công, công suất, động năng, thế năng, cơ năng; Định luật bảo toàn cơ năng và định luật bảo toàn động lượng.",
      "theory": {
        "highlights": [
          {
            "icon": "🔋",
            "title": "Công, Công suất & Định luật bảo toàn cơ năng",
            "content": "• <strong>Công cơ học:</strong> A = F · s · cos α (Joule J).<br/>• <strong>Công suất:</strong> P = A / t = F · v (Watt W).<br/>• <strong>Cơ năng:</strong> W = W_đ + W_t = 1/2·m·v² + m·g·z.<br/>• <strong>Định luật bảo toàn cơ năng:</strong> Khi một vật chuyển động chỉ chịu tác dụng của trọng lực (hoặc lực đàn hồi), cơ năng của vật là một đại lượng bảo toàn: W = const."
          },
          {
            "icon": "🚀",
            "title": "Động lượng & Va chạm",
            "content": "• <strong>Động lượng:</strong> p = m · v (kg·m/s).<br/>• <strong>Định luật bảo toàn động lượng:</strong> Trong một hệ kín, tổng động lượng của hệ được bảo toàn: p_trước = p_sau.<br/>• <strong>Ứng dụng:</strong> Chuyển động bằng phản lực của tên lửa vũ trụ (m1·v1 + m2·v2 = 0 ➔ v_tên lửa = - (m_khí / m_vỏ) · v_khí)."
          }
        ]
      },
      "questions": [
        {
          "id": "phy10_2_1",
          "level": 1,
          "question": "Công cơ học của một lực tác dụng F làm vật dịch chuyển quãng đường s theo hướng của lực (α = 0°) được tính bằng công thức:",
          "options": [
            "A = F · s",
            "A = F / s",
            "A = F · s · sin α",
            "A = F² · s"
          ],
          "correct": 0,
          "explanation": "Khi hướng của lực trùng với hướng chuyển động thì cos 0° = 1 ➔ A = F · s."
        },
        {
          "id": "phy10_2_2",
          "level": 1,
          "question": "Đơn vị đo động lượng trong hệ đơn vị quốc tế SI là:",
          "options": [
            "kg·m/s",
            "N/m",
            "Joule (J)",
            "Watt (W)"
          ],
          "correct": 0,
          "explanation": "Động lượng p = m·v có đơn vị là kilôgam mét trên giây (kg·m/s) hoặc N·s."
        },
        {
          "id": "phy10_2_3",
          "level": 2,
          "question": "Một vật có khối lượng m = 2 kg đang chuyển động với vận tốc v = 3 m/s. Động năng của vật là:",
          "options": [
            "9 J",
            "6 J",
            "18 J",
            "3 J"
          ],
          "correct": 0,
          "explanation": "Động năng W_đ = 1/2 · m · v² = 1/2 · 2 · 3² = 9 J."
        },
        {
          "id": "phy10_2_4",
          "level": 2,
          "question": "Một cần cẩu nâng một khối bê tông nặng 1 000 kg lên cao 6 m trong thời gian 10 giây. Lấy g = 10 m/s². Công suất của cần cẩu là:",
          "options": [
            "6 000 W (6 kW)",
            "60 000 W",
            "600 W",
            "10 000 W"
          ],
          "correct": 0,
          "explanation": "Công A = P·h = m·g·h = 1000 · 10 · 6 = 60 000 J. Công suất P = A / t = 60 000 / 10 = 6 000 W."
        },
        {
          "id": "phy10_2_5",
          "level": 3,
          "question": "Một vật được thả rơi tự do từ độ cao h = 45 m so với mặt đất. Lấy g = 10 m/s² và bỏ qua lực cản không khí. Vận tốc của vật ngay trước khi chạm đất là:",
          "options": [
            "30 m/s",
            "20 m/s",
            "45 m/s",
            "15 m/s"
          ],
          "correct": 0,
          "explanation": "Bảo toàn cơ năng: mgh = 1/2·mv² ➔ v = √(2gh) = √(2 · 10 · 45) = √900 = 30 m/s."
        },
        {
          "id": "phy10_2_6",
          "level": 3,
          "question": "Một viên đạn khối lượng 10 g (0,01 kg) bay với vận tốc 600 m/s cắm vào một bao cát đứng yên khối lượng 5,99 kg. Vận tốc của hệ bao cát và viên đạn ngay sau va chạm mềm là:",
          "options": [
            "1 m/s",
            "2 m/s",
            "6 m/s",
            "0,5 m/s"
          ],
          "correct": 0,
          "explanation": "Bảo toàn động lượng: m1·v1 = (m1 + m2)·V ➔ 0,01 · 600 = (0,01 + 5,99)·V ➔ 6 = 6·V ➔ V = 1 m/s."
        },
        {
          "id": "phy10_2_7",
          "level": 4,
          "question": "Ném một vật thẳng đứng lên cao từ mặt đất với vận tốc ban đầu v0 = 20 m/s. Lấy g = 10 m/s². Độ cao mà tại đó động năng bằng thế năng (chọn gốc thế năng tại mặt đất) là:",
          "options": [
            "10 m",
            "20 m",
            "15 m",
            "5 m"
          ],
          "correct": 0,
          "explanation": "Cơ năng ban đầu W = 1/2·m·v0² = 1/2 · m · 400 = 200m. Tại vị trí W_đ = W_t: W = 2W_t = 2mgh ➔ 2m·10·h = 200m ➔ 20h = 200 ➔ h = 10 m."
        },
        {
          "id": "phy10_2_8",
          "level": 4,
          "question": "Nguyên lý hoạt động của động cơ phản lực ở tên lửa và mực ống khi bơi lùi trong nước dựa trên ứng dụng của định luật nào?",
          "options": [
            "Định luật bảo toàn động lượng",
            "Định luật bảo toàn cơ năng",
            "Định luật vạn vật hấp dẫn",
            "Định luật Hooke về đàn hồi"
          ],
          "correct": 0,
          "explanation": "Khi tên lửa phụt luồng khí có khối lượng và vận tốc lớn về phía sau, theo định luật bảo toàn động lượng, phần thân tên lửa sẽ nhận một vận tốc lớn lao về phía trước."
        }
      ]
    }
  ]
};
