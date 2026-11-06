/**
 * science-9-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Khoa Học Tự Nhiên Lớp 9
 * Chuẩn GDPT 2018 - Học kỳ 1 & Học kỳ 2 (Trọng tâm thi vào 10)
 */

window.SCIENCE9_DATA = {
  "name": "Khoa Học Tự Nhiên Lớp 9",
  "grade": 9,
  "topics": [
    {
      "id": "dien_quang_hoc",
      "terms": [
        1
      ],
      "name": "Chủ Đề 1: Năng Lượng Điện, Cảm Ứng Điện Từ & Quang Học",
      "icon": "⚡",
      "desc": "Định luật Ohm, công suất điện; Hiện tượng cảm ứng điện từ và thấu kính hội tụ, thấu kính phân kì.",
      "theory": {
        "highlights": [
          {
            "icon": "💡",
            "title": "Định luật Ohm & Điện năng tiêu thụ",
            "content": "• <strong>Định luật Ohm:</strong> I = U / R (Cường độ dòng điện tỉ lệ thuận với hiệu điện thế U và tỉ lệ nghịch với điện trở R).<br/>• <strong>Đoạn mạch nối tiếp:</strong> I = I1 = I2; U = U1 + U2; R_td = R1 + R2.<br/>• <strong>Đoạn mạch song song:</strong> U = U1 = U2; I = I1 + I2; 1/R_td = 1/R1 + 1/R2.<br/>• <strong>Công suất & Điện năng:</strong> P = U · I = I² · R; A = P · t = U · I · t (Joule hoặc kWh: 1 kWh = 3 600 000 J)."
          },
          {
            "icon": "🔍",
            "title": "Thấu kính hội tụ & Thấu kính phân kì",
            "content": "• <strong>Thấu kính hội tụ (rìa mỏng):</strong> Chùm tia tới song song với trục chính cho chùm tia ló hội tụ tại tiêu điểm F'. Cho ảnh thật (ngược chiều) khi d > f; cho ảnh ảo (cùng chiều, lớn hơn vật) khi d < f.<br/>• <strong>Thấu kính phân kì (rìa dày):</strong> Chùm tia tới song song cho chùm tia ló phân kì có đường kéo dài đi qua tiêu điểm. Luôn cho ảnh ảo, cùng chiều và nhỏ hơn vật.<br/>• <strong>Mắt cận thị:</strong> Nhìn rõ vật ở gần nhưng không nhìn rõ vật ở xa, điểm cực viễn ở gần hơn mắt bình thường; khắc phục bằng kính phân kì."
          }
        ]
      },
      "questions": [
        {
          "id": "sci9_1_1",
          "level": 1,
          "question": "Công thức biểu diễn định luật Ohm cho một đoạn mạch điện có điện trở R là:",
          "options": [
            "I = U / R",
            "I = U · R",
            "R = U · I",
            "U = I / R"
          ],
          "correct": 0,
          "explanation": "Định luật Ohm: Cường độ dòng điện tỉ lệ thuận với hiệu điện thế và tỉ lệ nghịch với điện trở: I = U / R."
        },
        {
          "id": "sci9_1_2",
          "level": 1,
          "question": "Để khắc phục tật cận thị ở mắt, người ta phải đeo loại kính nào sau đây có độ tụ thích hợp?",
          "options": [
            "Kính phân kì",
            "Kính hội tụ",
            "Kính lúp hai mặt lồi",
            "Kính râm đổi màu"
          ],
          "correct": 0,
          "explanation": "Mắt cận thị có tiêu cự ngắn, cần đeo thấu kính phân kì để làm phân kì chùm sáng, dời ảnh lùi lại đúng trên màng lưới (võng mạc)."
        },
        {
          "id": "sci9_1_3",
          "level": 2,
          "question": "Hai điện trở R1 = 10 Ω và R2 = 20 Ω mắc nối tiếp vào hiệu điện thế U = 12 V. Điện trở tương đương của đoạn mạch là:",
          "options": [
            "30 Ω",
            "6,67 Ω",
            "200 Ω",
            "10 Ω"
          ],
          "correct": 0,
          "explanation": "Mạch mắc nối tiếp: R_td = R1 + R2 = 10 + 20 = 30 Ω."
        },
        {
          "id": "sci9_1_4",
          "level": 2,
          "question": "Một bóng đèn ghi 220V - 100W hoạt động bình thường ở hiệu điện thế 220V trong thời gian 5 giờ. Điện năng bóng đèn tiêu thụ là:",
          "options": [
            "0,5 kWh",
            "500 kWh",
            "5 kWh",
            "50 kWh"
          ],
          "correct": 0,
          "explanation": "Điện năng A = P · t = 0,1 kW · 5 h = 0,5 kWh (nửa số điện)."
        },
        {
          "id": "sci9_1_5",
          "level": 3,
          "question": "Hai điện trở R1 = 6 Ω và R2 = 12 Ω mắc song song vào nguồn điện 12V. Cường độ dòng điện trong mạch chính là:",
          "options": [
            "3 A",
            "1 A",
            "2 A",
            "4 A"
          ],
          "correct": 0,
          "explanation": "1/R_td = 1/6 + 1/12 = 3/12 ➔ R_td = 4 Ω. Cường độ mạch chính I = U / R_td = 12 / 4 = 3 A."
        },
        {
          "id": "sci9_1_6",
          "level": 3,
          "question": "Một vật sáng AB cao 2 cm đặt vuông góc với trục chính của thấu kính hội tụ có tiêu cự f = 10 cm, cách thấu kính một khoảng d = 20 cm (d = 2f). Chiều cao của ảnh A'B' thu được là:",
          "options": [
            "2 cm",
            "4 cm",
            "1 cm",
            "10 cm"
          ],
          "correct": 0,
          "explanation": "Khi đặt vật tại d = 2f thì thấu kính hội tụ cho ảnh thật ngược chiều, cách thấu kính d' = 2f và có kích thước bằng đúng vật: A'B' = AB = 2 cm."
        },
        {
          "id": "sci9_1_7",
          "level": 4,
          "question": "Đường dây tải điện có điện trở tổng cộng R = 10 Ω truyền tải công suất điện P = 100 000 W. Nếu tăng hiệu điện thế truyền tải từ 10 000 V lên 20 000 V thì công suất hao phí do tỏa nhiệt trên đường dây sẽ:",
          "options": [
            "Giảm đi 4 lần",
            "Tăng lên 2 lần",
            "Giảm đi 2 lần",
            "Không đổi"
          ],
          "correct": 0,
          "explanation": "Công suất hao phí P_hp = R · P² / U². Hao phí tỉ lệ nghịch với bình phương hiệu điện thế U². Tăng U lên 2 lần thì hao phí giảm 2² = 4 lần."
        },
        {
          "id": "sci9_1_8",
          "level": 4,
          "question": "Một bếp điện 220V - 1000W dùng để đun sôi 2 lít nước từ 20 °C ở hiệu điện thế 220V. Biết nhiệt dung riêng của nước c = 4200 J/(kg·K) và hiệu suất bếp là 80%. Thời gian đun sôi nước là:",
          "options": [
            "840 giây (14 phút)",
            "672 giây",
            "1000 giây",
            "420 giây"
          ],
          "correct": 0,
          "explanation": "Nhiệt lượng cần cung cấp: Q = m·c·Δt = 2 · 4200 · (100 - 20) = 672 000 J. Nhiệt lượng bếp tỏa ra: A = Q / 0,8 = 840 000 J. Thời gian t = A / P = 840 000 / 1000 = 840 s."
        }
      ]
    },
    {
      "id": "hoa_huu_co_di_truyen",
      "terms": [
        2
      ],
      "name": "Chủ Đề 2: Hóa Học Hữu Cơ & Di Truyền Học Mendel",
      "icon": "🧬",
      "desc": "Hydrocarbon (Methane, Ethylene), Rượu ethylic & Acetic acid; Di truyền học NST, DNA, biến dị và ứng dụng công nghệ sinh học.",
      "theory": {
        "highlights": [
          {
            "icon": "🧪",
            "title": "Hóa học hữu cơ: Hydrocarbon & Dẫn xuất",
            "content": "• <strong>Methane (CH₄):</strong> Là hydrocarbon no, chỉ chứa liên kết đơn C-H, đặc trưng bởi phản ứng thế với Halogen (clo) khi có ánh sáng.<br/>• <strong>Ethylene (C₂H₄):</strong> Có liên kết đôi C=C kém bền, đặc trưng bởi phản ứng cộng (làm mất màu dung dịch nước Bromine) và phản ứng trùng hợp tạo nhựa PE.<br/>• <strong>Rượu ethylic (C₂H₅OH):</strong> Chứa nhóm -OH, tác dụng với kim loại Na giải phóng khí H₂.<br/>• <strong>Axit axetic (CH₃COOH):</strong> Chứa nhóm -COOH, có tính acid và phản ứng ester hóa với rượu ethylic tạo ethyl acetate có mùi thơm hoa quả."
          },
          {
            "icon": "🧬",
            "title": "Quy luật di truyền Mendel & Nhiễm sắc thể (DNA)",
            "content": "• <strong>Quy luật phân li:</strong> Mỗi tính trạng do một cặp alen quy định. Ở đời con lai F2 tỉ lệ kiểu hình xấp xỉ 3 trội : 1 lặn.<br/>• <strong>Quy luật phân li độc lập:</strong> F2 thu được tỉ lệ kiểu hình 9 : 3 : 3 : 1.<br/>• <strong>DNA & Nguyên tắc bổ sung:</strong> Hai mạch polynucleotide xoắn kép liên kết theo nguyên tắc bổ sung A liên kết với T (2 liên kết H), G liên kết với C (3 liên kết H)."
          }
        ]
      },
      "questions": [
        {
          "id": "sci9_2_1",
          "level": 1,
          "question": "Chất khí nào sau đây làm mất màu da cam của dung dịch nước Bromine ở nhiệt độ phòng?",
          "options": [
            "Ethylene (C₂H₄)",
            "Methane (CH₄)",
            "Khí Carbon dioxide (CO₂)",
            "Khí Nitrogen (N₂)"
          ],
          "correct": 0,
          "explanation": "Ethylene có liên kết đôi C=C kém bền nên dễ dàng tham gia phản ứng cộng làm mất màu nước Bromine."
        },
        {
          "id": "sci9_2_2",
          "level": 1,
          "question": "Theo nguyên tắc bổ sung trong phân tử DNA, nucleotide loại Adenine (A) liên kết với nucleotide loại nào trên mạch đối diện?",
          "options": [
            "Thymine (T)",
            "Guanine (G)",
            "Cytosine (C)",
            "Uracil (U)"
          ],
          "correct": 0,
          "explanation": "Theo nguyên tắc bổ sung của Watson - Crick: A liên kết với T bằng 2 liên kết hydrogen; G liên kết với C bằng 3 liên kết hydrogen."
        },
        {
          "id": "sci9_2_3",
          "level": 2,
          "question": "Khi cho giấm ăn (chứa axit axetic CH₃COOH) vào vỏ trứng gà (chứa canxi cacbonat CaCO₃), hiện tượng quan sát được là:",
          "options": [
            "Sủi bọt khí không màu bốc lên và vỏ trứng tan dần",
            "Không có hiện tượng gì xảy ra",
            "Xuất hiện kết tủa màu xanh",
            "Dung dịch chuyển sang màu tím"
          ],
          "correct": 0,
          "explanation": "Axit axetic phản ứng với muối cacbonat giải phóng khí Carbon dioxide: 2CH₃COOH + CaCO₃ ➔ (CH₃COO)₂Ca + H₂O + CO₂↑."
        },
        {
          "id": "sci9_2_4",
          "level": 2,
          "question": "Khi lai giữa hai cây đậu Hà Lan thuần chủng hoa đỏ (AA) và hoa trắng (aa), thế hệ con lai F1 thu được kiểu hình là:",
          "options": [
            "100% cây hoa đỏ",
            "50% hoa đỏ : 50% hoa trắng",
            "75% hoa đỏ : 25% hoa trắng",
            "100% cây hoa trắng"
          ],
          "correct": 0,
          "explanation": "P: AA × aa ➔ F1: 100% kiểu gen Aa (mang tính trạng trội hoàn toàn nên 100% hoa đỏ)."
        },
        {
          "id": "sci9_2_5",
          "level": 3,
          "question": "Đốt cháy hoàn toàn 2,479 lít khí Methane (CH₄) ở điều kiện chuẩn (25°C, 1 bar). Thể tích khí CO₂ thu được ở cùng điều kiện là:",
          "options": [
            "2,479 lít",
            "4,958 lít",
            "1,2395 lít",
            "24,79 lít"
          ],
          "correct": 0,
          "explanation": "Phương trình đốt cháy: CH₄ + 2O₂ ➔ CO₂ + 2H₂O. Tỉ lệ thể tích chất khí đo ở cùng điều kiện bằng tỉ lệ số mol ➔ V_CO₂ = V_CH₄ = 2,479 lít."
        },
        {
          "id": "sci9_2_6",
          "level": 3,
          "question": "Một đoạn phân tử DNA có tổng số 3 000 nucleotide, trong đó số nucleotide loại Adenine (A) chiếm 20%. Số nucleotide loại Guanine (G) là:",
          "options": [
            "900",
            "600",
            "1 500",
            "300"
          ],
          "correct": 0,
          "explanation": "Theo nguyên tắc bổ sung: %A + %G = 50% ➔ %G = 30%. Số nucleotide loại G = 30% · 3000 = 900 nucleotide."
        },
        {
          "id": "sci9_2_7",
          "level": 4,
          "question": "Cho 4,6 gam rượu ethylic (C₂H₅OH) tác dụng hết với lượng dư kim loại Natri (Na). Thể tích khí H₂ sinh ra ở điều kiện chuẩn (24,79 lít/mol) là: (Biết C=12, H=1, O=16)",
          "options": [
            "1,2395 lít",
            "2,479 lít",
            "4,958 lít",
            "2,24 lít"
          ],
          "correct": 0,
          "explanation": "M của C₂H₅OH = 46 g/mol ➔ n = 4,6 / 46 = 0,1 mol. Phương trình: 2C₂H₅OH + 2Na ➔ 2C₂H₅ONa + H₂↑. n_H₂ = n/2 = 0,05 mol ➔ V_H₂ = 0,05 · 24,79 = 1,2395 lít."
        },
        {
          "id": "sci9_2_8",
          "level": 4,
          "question": "Ở người, bệnh mù màu đỏ - lục do gen lặn b nằm trên vùng không tương đồng của nhiễm sắc thể giới tính X quy định. Một người mẹ bình thường có kiểu gen X^B X^b lấy chồng bình thường X^B Y. Xác suất sinh con trai đầu lòng bị bệnh mù màu là:",
          "options": [
            "25%",
            "50%",
            "12,5%",
            "0%"
          ],
          "correct": 0,
          "explanation": "P: X^B X^b × X^B Y ➔ Các kiểu gen đời con: 1/4 X^B X^B, 1/4 X^B X^b, 1/4 X^B Y (con trai bình thường), 1/4 X^b Y (con trai mù màu). Xác suất sinh con trai mù màu là 1/4 = 25%."
        }
      ]
    }
  ]
};
