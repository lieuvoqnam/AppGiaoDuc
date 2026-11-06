/**
 * science-8-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Khoa Học Tự Nhiên Lớp 8
 * Chuẩn GDPT 2018 - Học kỳ 1 & Học kỳ 2
 */

window.SCIENCE8_DATA = {
  "name": "Khoa Học Tự Nhiên Lớp 8",
  "grade": 8,
  "topics": [
    {
      "id": "khtn8_phan_ung_mol",
      "terms": [
        1
      ],
      "name": "Chủ Đề 1: Phản Ứng Hóa Học, Định Luật Bảo Toàn & Mol",
      "icon": "⚗️",
      "desc": "Hiện tượng vật lí - hóa học, định luật bảo toàn khối lượng, mol, thể tích mol chất khí và tính toán theo phương trình hóa học.",
      "theory": {
        "highlights": [
          {
            "icon": "⚖️",
            "title": "Định luật bảo toàn khối lượng & Phương trình hóa học",
            "content": "• <strong>Định luật Lomonosov - Lavoisier:</strong> Trong một phản ứng hóa học, tổng khối lượng của các chất sản phẩm bằng tổng khối lượng của các chất tham gia phản ứng: <em>m_A + m_B = m_C + m_D</em>.<br/>• <strong>Bản chất phản ứng:</strong> Liên kết giữa các nguyên tử thay đổi làm cho phân tử này biến đổi thành phân tử khác; số lượng nguyên tử mỗi nguyên tố được bảo toàn."
          },
          {
            "icon": "🧪",
            "title": "Khái niệm Mol & Thể tích mol khí (đkc)",
            "content": "• <strong>Mol:</strong> Là lượng chất chứa N (6,022 × 10²³) nguyên tử hoặc phân tử của chất đó.<br/>• <strong>Khối lượng mol:</strong> m = n × M (g).<br/>• <strong>Thể tích mol khí ở đkc (25°C, 1 bar):</strong> V = n × 24,79 (lít).<br/>• <strong>Tỉ khối của chất khí A đối với B:</strong> d_A/B = M_A / M_B."
          }
        ]
      },
      "questions": [
        {
          "id": "s8_t1_01",
          "level": 1,
          "question": "Dấu hiệu chính để phân biệt hiện tượng hóa học với hiện tượng vật lí là:",
          "options": [
            "Có sự tạo thành chất mới",
            "Có sự thay đổi hình dạng",
            "Có sự thay đổi trạng thái từ rắn sang lỏng",
            "Có sự biến đổi kích thước hạt"
          ],
          "correct": 0,
          "explanation": "Hiện tượng hóa học là hiện tượng chất biến đổi có tạo thành chất mới."
        },
        {
          "id": "s8_t1_02",
          "level": 1,
          "question": "Ở điều kiện chuẩn (25°C, 1 bar), 1 mol của bất kì chất khí nào đều chiếm thể tích là:",
          "options": [
            "24,79 lít",
            "22,4 lít",
            "24,0 lít",
            "25,0 lít"
          ],
          "correct": 0,
          "explanation": "Theo chuẩn IUPAC mới (GDPT 2018), ở 25°C và 1 bar (đkc), 1 mol khí chiếm 24,79 lít."
        },
        {
          "id": "s8_t1_03",
          "level": 1,
          "question": "Khối lượng mol phân tử của khí Carbon dioxide (CO₂) là (biết C = 12, O = 16):",
          "options": [
            "44 g/mol",
            "28 g/mol",
            "32 g/mol",
            "40 g/mol"
          ],
          "correct": 0,
          "explanation": "M_CO2 = 12 + 16 · 2 = 44 g/mol."
        },
        {
          "id": "s8_t1_04",
          "level": 2,
          "question": "Đốt cháy hoàn toàn 6 gam than củi (carbon) cần dùng 16 gam khí oxygen. Khối lượng khí carbon dioxide sinh ra là:",
          "options": [
            "22 gam",
            "10 gam",
            "12 gam",
            "24 gam"
          ],
          "correct": 0,
          "explanation": "Theo định luật bảo toàn khối lượng: m_CO2 = m_C + m_O2 = 6 + 16 = 22 gam."
        },
        {
          "id": "s8_t1_05",
          "level": 2,
          "question": "Số mol của 5,6 gam sắt (Fe) là (biết Fe = 56):",
          "options": [
            "0,1 mol",
            "0,2 mol",
            "1 mol",
            "0,05 mol"
          ],
          "correct": 0,
          "explanation": "n = m / M = 5,6 / 56 = 0,1 mol."
        },
        {
          "id": "s8_t1_06",
          "level": 2,
          "question": "Tỉ khối của khí Methane (CH₄) đối với không khí (M_kk ≈ 29) là:",
          "options": [
            "0,55",
            "1,81",
            "1,20",
            "0,85"
          ],
          "correct": 0,
          "explanation": "M_CH4 = 12 + 4 = 16 g/mol. d_(CH4/kk) = 16 / 29 ≈ 0,55 (nhẹ hơn không khí)."
        },
        {
          "id": "s8_t1_07",
          "level": 3,
          "question": "Hòa tan hoàn toàn 2,4 gam magie (Mg) vào dung dịch axit HCl dư sinh ra khí H₂ ở đkc. Thể tích khí H₂ thu được là (Mg = 24):",
          "options": [
            "2,479 lít",
            "2,24 lít",
            "4,958 lít",
            "1,2395 lít"
          ],
          "correct": 0,
          "explanation": "n_Mg = 2,4 / 24 = 0,1 mol. Mg + 2HCl → MgCl₂ + H₂↑. n_H2 = 0,1 mol → V = 0,1 · 24,79 = 2,479 lít."
        },
        {
          "id": "s8_t1_08",
          "level": 3,
          "question": "Trong phản ứng phân hủy thuốc tím: 2KMnO₄ → K₂MnO₄ + MnO₂ + O₂. Tỉ lệ số phân tử KMnO₄ phản ứng và số phân tử O₂ tạo thành là:",
          "options": [
            "2 : 1",
            "1 : 1",
            "1 : 2",
            "2 : 3"
          ],
          "correct": 0,
          "explanation": "Hệ số tỉ lượng trước KMnO₄ là 2, trước O₂ là 1 → tỉ lệ là 2 : 1."
        },
        {
          "id": "s8_t1_09",
          "level": 3,
          "question": "Nồng độ mol của dung dịch khi hòa tan 0,2 mol NaCl vào nước để được 500 mL dung dịch là:",
          "options": [
            "0,4 M",
            "0,1 M",
            "0,2 M",
            "0,5 M"
          ],
          "correct": 0,
          "explanation": "V = 500 mL = 0,5 lít. C_M = n / V = 0,2 / 0,5 = 0,4 M."
        },
        {
          "id": "s8_t1_10",
          "level": 4,
          "question": "Nung 100 gam đá vôi (chứa 80% CaCO₃, còn lại là tạp chất trơ) đến khi phản ứng hoàn toàn: CaCO₃ → CaO + CO₂. Khối lượng vôi sống (CaO) thu được là (Ca=40, C=12, O=16):",
          "options": [
            "44,8 gam",
            "56,0 gam",
            "40,0 gam",
            "33,6 gam"
          ],
          "correct": 0,
          "explanation": "m_CaCO3 = 100 · 80% = 80 g → n_CaCO3 = 80 / 100 = 0,8 mol. n_CaO = 0,8 mol → m_CaO = 0,8 · 56 = 44,8 g."
        },
        {
          "id": "s8_t1_11",
          "level": 4,
          "question": "Hỗn hợp khí X gồm O₂ và O₃ có tỉ khối đối với khí H₂ là 20. Thành phần phần trăm về thể tích của khí O₂ trong hỗn hợp là:",
          "options": [
            "50%",
            "40%",
            "60%",
            "25%"
          ],
          "correct": 0,
          "explanation": "M_X = 20 · 2 = 40. Áp dụng quy tắc đường chéo: O₂ (32) và O₃ (48). |32 - 40| = 8; |48 - 40| = 8. Tỉ lệ thể tích n_O2 : n_O3 = 8 : 8 = 1 : 1 → %V_O2 = 50%."
        }
      ]
    },
    {
      "id": "khtn8_acid_base_muoi",
      "terms": [
        1
      ],
      "name": "Chủ Đề 2: Acid, Base, Oxide, Muối & Thang Đo pH",
      "icon": "🧪",
      "desc": "Tính chất hóa học đặc trưng của Acid, Base, Oxide, Muối, thang đo pH và vai trò của phân bón hóa học trong nông nghiệp.",
      "theory": {
        "highlights": [
          {
            "icon": "🌈",
            "title": "Phân loại hợp chất vô cơ & Thang đo pH",
            "content": "• <strong>Acid:</strong> Phân tử gồm một hay nhiều nguyên tử H liên kết với gốc acid (HCl, H₂SO₄...). Đổi màu quỳ tím sang <em>đỏ</em>.<br/>• <strong>Base:</strong> Gồm cation kim loại liên kết với một hay nhiều nhóm hydroxide (-OH). Base tan (kiềm) đổi màu quỳ tím sang <em>xanh</em>, phenolphthalein sang <em>hồng</em>.<br/>• <strong>Thang pH:</strong> pH < 7 (môi trường acid, pH càng nhỏ acid càng mạnh); pH = 7 (trung tính); pH > 7 (môi trường base)."
          },
          {
            "icon": "🌾",
            "title": "Phân bón hóa học trong nông nghiệp",
            "content": "• <strong>Phân đạm:</strong> Cung cấp N, kích thích cây đẻ nhánh, xanh lá (Urea, đạm nitrat).<br/>• <strong>Phân lân:</strong> Cung cấp P, kích thích phát triển bộ rễ, ra hoa (Supephotphat).<br/>• <strong>Phân kali:</strong> Cung cấp K, giúp cây cứng cáp, tăng khả năng chống chịu sâu bệnh và lạnh (KCl, K₂SO₄)."
          }
        ]
      },
      "questions": [
        {
          "id": "s8_t2_01",
          "level": 1,
          "question": "Dung dịch axit clohiđric (HCl) làm quỳ tím chuyển sang màu gì?",
          "options": [
            "Đỏ",
            "Xanh",
            "Vàng",
            "Hồng phấn"
          ],
          "correct": 0,
          "explanation": "Dung dịch acid làm giấy quỳ tím hóa đỏ."
        },
        {
          "id": "s8_t2_02",
          "level": 1,
          "question": "Dung dịch có độ pH = 7 là môi trường mang tính chất gì?",
          "options": [
            "Trung tính",
            "Axit",
            "Bazơ",
            "Không xác định"
          ],
          "correct": 0,
          "explanation": "pH = 7 là môi trường trung tính (như nước tinh khiết)."
        },
        {
          "id": "s8_t2_03",
          "level": 1,
          "question": "Chất nào sau đây là một bazo tan trong nước (kiềm)?",
          "options": [
            "NaOH",
            "Fe(OH)₃",
            "Cu(OH)₂",
            "Al(OH)₃"
          ],
          "correct": 0,
          "explanation": "NaOH (natri hydroxide) tan tốt trong nước tạo dung dịch kiềm."
        },
        {
          "id": "s8_t2_04",
          "level": 2,
          "question": "Phản ứng giữa dung dịch axit và dung dịch bazơ được gọi là phản ứng gì?",
          "options": [
            "Phản ứng trung hòa",
            "Phản ứng phân hủy",
            "Phản ứng oxi hóa khử",
            "Phản ứng thế"
          ],
          "correct": 0,
          "explanation": "Acid + Base → Muối + Nước gọi là phản ứng trung hòa."
        },
        {
          "id": "s8_t2_05",
          "level": 2,
          "question": "Loại phân bón nào sau đây cung cấp nguyên tố dinh dưỡng Nitơ cho cây trồng?",
          "options": [
            "Phân đạm",
            "Phân lân",
            "Phân kali",
            "Phân vi lượng kẽm"
          ],
          "correct": 0,
          "explanation": "Phân đạm cung cấp nguyên tố Nitơ (N) giúp cây phát triển thân, lá."
        },
        {
          "id": "s8_t2_06",
          "level": 2,
          "question": "Để khử chua cho đất nông nghiệp nghèo dinh dưỡng có độ pH < 5, người nông dân thường bón:",
          "options": [
            "Vôi bột (CaO hoặc Ca(OH)₂)",
            "Muối ăn (NaCl)",
            "Giấm ăn (CH₃COOH)",
            "Dung dịch axit clohiđric"
          ],
          "correct": 0,
          "explanation": "Vôi bột có tính base nhẹ, trung hòa acid dư trong đất chua, nâng độ pH của đất lên."
        },
        {
          "id": "s8_t2_07",
          "level": 3,
          "question": "Nhỏ một giọt phenolphtalein không màu vào ống nghiệm chứa dung dịch KOH, dung dịch sẽ chuyển sang màu:",
          "options": [
            "Hồng cánh sen",
            "Xanh lam",
            "Đỏ thẫm",
            "Không đổi màu"
          ],
          "correct": 0,
          "explanation": "Dung dịch kiềm (base tan) làm phenolphthalein chuyển sang màu hồng."
        },
        {
          "id": "s8_t2_08",
          "level": 3,
          "question": "Chất khí nào sinh ra khi nhỏ dung dịch HCl vào mẩu đá vôi (CaCO₃)?",
          "options": [
            "CO₂",
            "H₂",
            "O₂",
            "SO₂"
          ],
          "correct": 0,
          "explanation": "CaCO₃ + 2HCl → CaCl₂ + CO₂↑ + H₂O."
        },
        {
          "id": "s8_t2_09",
          "level": 3,
          "question": "Khi bị ong hoặc kiến đốt (nọc có chứa axit fomic), người ta thường bôi chất nào sau đây để giảm sưng đau ngứa?",
          "options": [
            "Vôi tôi hoặc kem đánh răng có tính kiềm nhẹ",
            "Giấm ăn",
            "Nước chanh",
            "Nước ngọt có gas"
          ],
          "correct": 0,
          "explanation": "Vôi hoặc kem đánh răng có tính kiềm giúp trung hòa acid trong vết cắn, làm dịu vết thương."
        },
        {
          "id": "s8_t2_10",
          "level": 4,
          "question": "Để nhận biết 3 dung dịch mất nhãn: HCl, NaOH, Na₂SO₄ chỉ bằng một thuốc thử duy nhất, ta dùng:",
          "options": [
            "Quỳ tím",
            "Phenolphtalein",
            "Dung dịch BaCl₂",
            "Kim loại Cu"
          ],
          "correct": 0,
          "explanation": "Quỳ tím: hóa đỏ là HCl; hóa xanh là NaOH; không đổi màu là Na₂SO₄."
        },
        {
          "id": "s8_t2_11",
          "level": 4,
          "question": "Cần thêm bao nhiêu mL nước cất vào 100 mL dung dịch HCl có pH = 1 để thu được dung dịch có pH = 2?",
          "options": [
            "900 mL",
            "1000 mL",
            "500 mL",
            "100 mL"
          ],
          "correct": 0,
          "explanation": "pH=1 có [H⁺]=0,1M, n=0,01 mol. pH=2 có [H⁺]=0,01M → V_mới = 0,01 / 0,01 = 1 lít = 1000 mL. Lượng nước thêm = 1000 - 100 = 900 mL."
        }
      ]
    },
    {
      "id": "khtn8_luc_ap_suat",
      "terms": [
        2
      ],
      "name": "Chủ Đề 3: Lực, Áp Suất & Tác Dụng Làm Quay (Đòn Bẩy)",
      "icon": "⚖️",
      "desc": "Áp lực, áp suất chất rắn, áp suất chất lỏng, áp suất khí quyển, lực đẩy Archimedes và điều kiện cân bằng của đòn bẩy.",
      "theory": {
        "highlights": [
          {
            "icon": "🚢",
            "title": "Áp suất chất lỏng & Lực đẩy Archimedes",
            "content": "• <strong>Áp suất:</strong> p = F / S (N/m² hoặc Pa).<br/>• <strong>Áp suất chất lỏng:</strong> p = d · h (d là trọng lượng riêng, h là độ sâu tính từ mặt thoáng).<br/>• <strong>Lực đẩy Archimedes:</strong> F_A = d · V (V là thể tích phần chất lỏng bị vật chiếm chỗ).<br/>• <strong>Điều kiện vật nổi, chìm:</strong> Vật chìm khi F_A < P (d_vật > d_lỏng); Lơ lửng khi F_A = P (d_vật = d_lỏng); Nổi khi F_A > P."
          },
          {
            "icon": "🔧",
            "title": "Tác dụng làm quay của lực & Moment lực",
            "content": "• <strong>Moment lực:</strong> Đại lượng đặc trưng cho tác dụng làm quay của lực quanh một trục: M = F · d (d là cánh tay đòn - khoảng cách từ trục quay đến giá của lực).<br/>• <strong>Quy tắc đòn bẩy:</strong> F₁ · d₁ = F₂ · d₂."
          }
        ]
      },
      "questions": [
        {
          "id": "s8_t3_01",
          "level": 1,
          "question": "Đơn vị đo chuẩn của áp suất trong hệ đo lường SI là:",
          "options": [
            "Pascal (Pa)",
            "Newton (N)",
            "Joule (J)",
            "Watt (W)"
          ],
          "correct": 0,
          "explanation": "Đơn vị của áp suất là Pascal (Pa), 1 Pa = 1 N/m²."
        },
        {
          "id": "s8_t3_02",
          "level": 1,
          "question": "Lực đẩy Ac-si-met tác dụng lên một vật nhúng chìm trong chất lỏng có phương và chiều như thế nào?",
          "options": [
            "Phương thẳng đứng, chiều từ dưới lên trên",
            "Phương thẳng đứng, chiều từ trên xuống dưới",
            "Phương nằm ngang, chiều từ trái sang phải",
            "Phương bất kì phụ thuộc vào hình dạng vật"
          ],
          "correct": 0,
          "explanation": "Lực đẩy Archimedes luôn có phương thẳng đứng, hướng từ dưới lên trên."
        },
        {
          "id": "s8_t3_03",
          "level": 1,
          "question": "Công thức tính áp suất chất rắn tác dụng lên diện tích bị ép S là:",
          "options": [
            "p = F / S",
            "p = F · S",
            "p = S / F",
            "p = d · V"
          ],
          "correct": 0,
          "explanation": "Áp suất p = F / S (trong đó F là áp lực vuông góc, S là diện tích bị ép)."
        },
        {
          "id": "s8_t3_04",
          "level": 2,
          "question": "Một người tác dụng lên mặt sàn một áp lực 500 N, diện tích hai bàn chân tiếp xúc là 0,025 m². Áp suất của người đó lên sàn là:",
          "options": [
            "20 000 Pa",
            "12 500 Pa",
            "5 000 Pa",
            "2 000 Pa"
          ],
          "correct": 0,
          "explanation": "p = F / S = 500 / 0,025 = 20 000 Pa."
        },
        {
          "id": "s8_t3_05",
          "level": 2,
          "question": "Tại sao các lưỡi dao, lưỡi kéo cắt kim loại thường được mài sắc?",
          "options": [
            "Để giảm diện tích tiếp xúc S, làm tăng áp suất giúp cắt dễ dàng hơn",
            "Để tăng diện tích tiếp xúc",
            "Để giảm áp lực tác dụng",
            "Để dao trông bóng bẩy hơn"
          ],
          "correct": 0,
          "explanation": "Mài sắc làm giảm diện tích tiếp xúc S, theo công thức p = F/S thì áp suất p tăng vọt giúp cắt dễ dàng."
        },
        {
          "id": "s8_t3_06",
          "level": 2,
          "question": "Một vật thả trong nước chìm hoàn toàn xuống đáy là do:",
          "options": [
            "Trọng lượng P của vật lớn hơn lực đẩy Archimedes",
            "Lực đẩy Archimedes lớn hơn trọng lượng vật",
            "Khối lượng riêng của vật nhỏ hơn của nước",
            "Vật có bề mặt sần sùi"
          ],
          "correct": 0,
          "explanation": "Vật chìm khi lực kéo xuống (trọng lực P) lớn hơn lực đẩy nổi lên (F_A)."
        },
        {
          "id": "s8_t3_07",
          "level": 3,
          "question": "Một thợ lặn ở độ sâu 15 m dưới biển. Biết trọng lượng riêng của nước biển là 10 300 N/m³. Áp suất nước biển tác dụng lên thợ lặn là:",
          "options": [
            "154 500 Pa",
            "103 000 Pa",
            "150 000 Pa",
            "206 000 Pa"
          ],
          "correct": 0,
          "explanation": "p = d · h = 10 300 · 15 = 154 500 Pa."
        },
        {
          "id": "s8_t3_08",
          "level": 3,
          "question": "Một vật bằng kim loại có thể tích 0,002 m³ nhúng ngập hoàn toàn trong nước (d_nước = 10 000 N/m³). Lực đẩy Archimedes tác dụng lên vật là:",
          "options": [
            "20 N",
            "200 N",
            "2 N",
            "50 N"
          ],
          "correct": 0,
          "explanation": "F_A = d · V = 10 000 · 0,002 = 20 N."
        },
        {
          "id": "s8_t3_09",
          "level": 3,
          "question": "Một chiếc xà beng dài 1,2 m có điểm tựa cách vật nặng 0,2 m. Để nâng vật nặng 600 N, người ta cần tác dụng lực tối thiểu ở đầu kia là:",
          "options": [
            "120 N",
            "100 N",
            "150 N",
            "200 N"
          ],
          "correct": 0,
          "explanation": "d₁ = 0,2 m, d₂ = 1,2 - 0,2 = 1,0 m. F₂ · d₂ = F₁ · d₁ ⇔ F₂ · 1 = 600 · 0,2 = 120 N."
        },
        {
          "id": "s8_t3_10",
          "level": 4,
          "question": "Một khối gỗ nổi trên mặt nước với 2/3 thể tích ngập trong nước. Biết d_nước = 10 000 N/m³. Khối lượng riêng của gỗ là:",
          "options": [
            "≈ 667 kg/m³",
            "750 kg/m³",
            "500 kg/m³",
            "800 kg/m³"
          ],
          "correct": 0,
          "explanation": "Khi vật nổi: P = F_A ⇔ d_vật · V = d_nước · (2/3 V) ⇔ d_vật = 2/3 · 10 000 ≈ 6 667 N/m³ → D_vật ≈ 667 kg/m³."
        },
        {
          "id": "s8_t3_11",
          "level": 4,
          "question": "Khi bơm hút chân không rút bớt không khí trong một hộp sữa giấy mỏng rỗng, vỏ hộp sữa bị bẹp dúm lại từ mọi phía là do:",
          "options": [
            "Áp suất khí quyển bên ngoài lớn hơn áp suất không khí bên trong hộp",
            "Áp suất chất lỏng đẩy vào",
            "Lực ma sát bề mặt",
            "Khối lượng của hộp tăng lên"
          ],
          "correct": 0,
          "explanation": "Khi rút bớt không khí, áp suất trong hộp giảm mạnh, áp suất khí quyển từ mọi hướng bên ngoài ép bẹp vỏ hộp."
        }
      ]
    },
    {
      "id": "khtn8_co_the_nguoi_dien",
      "terms": [
        2
      ],
      "name": "Chủ Đề 4: Hệ Cơ Quan Ở Người & Mạch Điện Cơ Bản",
      "icon": "🫀",
      "desc": "Cấu tạo và chức năng các hệ tiêu hóa, tuần hoàn, hô hấp, bài tiết ở người và các đại lượng cơ bản của dòng điện (cường độ I, hiệu điện thế U).",
      "theory": {
        "highlights": [
          {
            "icon": "🩸",
            "title": "Hệ tuần hoàn & Hệ tiêu hóa ở người",
            "content": "• <strong>Hệ tuần hoàn:</strong> Tim (4 ngăn: 2 tâm nhĩ, 2 tâm thất) và hệ mạch (động mạch, mao mạch, tĩnh mạch). Vòng tuần hoàn lớn vận chuyển máu đỏ tươi giàu O₂ đi nuôi toàn bộ cơ thể.<br/>• <strong>Hệ tiêu hóa:</strong> Tiêu hóa cơ học (nhai, nghiền, co bóp) và tiêu hóa hóa học (các enzym phân giải glucid, protein, lipid thành các chất dinh dưỡng đơn giản hấp thụ vào máu)."
          },
          {
            "icon": "⚡",
            "title": "Dòng điện, Cường độ dòng điện & Hiệu điện thế",
            "content": "• <strong>Dòng điện:</strong> Dòng các hạt mang điện (electron tự do) dịch chuyển có hướng.<br/>• <strong>Cường độ dòng điện (I):</strong> Đo bằng Ampe kế mắc nối tiếp trong mạch, đơn vị Ampe (A).<br/>• <strong>Hiệu điện thế (U):</strong> Đo bằng Vôn kế mắc song song giữa hai điểm, đơn vị Vôn (V)."
          }
        ]
      },
      "questions": [
        {
          "id": "s8_t4_01",
          "level": 1,
          "question": "Trong hệ tuần hoàn người, máu được bơm từ tâm thất trái vào động mạch chủ là loại máu gì?",
          "options": [
            "Máu đỏ tươi giàu O₂",
            "Máu đỏ thẫm giàu CO₂",
            "Máu pha lẫn",
            "Máu không chứa hồng cầu"
          ],
          "correct": 0,
          "explanation": "Tâm thất trái co bóp tống máu đỏ tươi giàu O₂ vào động mạch chủ đi nuôi toàn cơ thể."
        },
        {
          "id": "s8_t4_02",
          "level": 1,
          "question": "Dụng cụ dùng để đo cường độ dòng điện trong đoạn mạch là:",
          "options": [
            "Ampe kế (mắc nối tiếp)",
            "Vôn kế (mắc song song)",
            "Nhiệt kế",
            "Lực kế"
          ],
          "correct": 0,
          "explanation": "Ampe kế dùng đo cường độ dòng điện và phải mắc nối tiếp trong mạch."
        },
        {
          "id": "s8_t4_03",
          "level": 1,
          "question": "Cơ quan nào trong cơ thể người đảm nhiệm chức năng chính hấp thụ chất dinh dưỡng vào máu?",
          "options": [
            "Ruột non",
            "Dạ dày",
            "Thực quản",
            "Ruột già"
          ],
          "correct": 0,
          "explanation": "Ruột non có diện tích bề mặt hấp thụ khổng lồ nhờ các nếp gấp và lông ruột dày đặc."
        },
        {
          "id": "s8_t4_04",
          "level": 2,
          "question": "Enzym amylase trong dịch nước bọt có tác dụng biến đổi chất nào sau đây?",
          "options": [
            "Tinh bột chín thành đường maltose",
            "Chất đạm thành axit amin",
            "Chất béo thành axit béo",
            "Vitamin thành khoáng chất"
          ],
          "correct": 0,
          "explanation": "Amylase trong nước bọt thủy phân tinh bột chín thành đường đôi maltose."
        },
        {
          "id": "s8_t4_05",
          "level": 2,
          "question": "Tác dụng phát sáng của dòng điện được ứng dụng trong thiết bị nào sau đây?",
          "options": [
            "Đèn đi-ốt phát quang (LED)",
            "Bàn là điện",
            "Bếp từ",
            "Quạt điện"
          ],
          "correct": 0,
          "explanation": "Đèn LED ứng dụng tác dụng phát sáng của dòng điện khi cho dòng điện đi qua."
        },
        {
          "id": "s8_t4_06",
          "level": 2,
          "question": "Sự trao đổi khí giữa phế nang và máu trong mao mạch phổi diễn ra theo cơ chế nào?",
          "options": [
            "Khuếch tán từ nơi có nồng độ cao đến nơi có nồng độ thấp",
            "Vận chuyển chủ động tiêu tốn ATP",
            "Ẩm bào",
            "Thẩm thấu nước"
          ],
          "correct": 0,
          "explanation": "O₂ và CO₂ trao đổi qua màng phế nang - mao mạch theo cơ chế khuếch tán thụ động theo chênh lệch phân áp."
        },
        {
          "id": "s8_t4_07",
          "level": 3,
          "question": "Một bóng đèn pin thắp sáng bình thường ở hiệu điện thế định mức 3V, cường độ dòng điện 0,4A. Nếu dùng nguồn điện 6V thì:",
          "options": [
            "Bóng đèn sẽ bị cháy dây tóc do dòng điện vượt quá mức chịu đựng",
            "Bóng đèn sáng bình thường",
            "Bóng đèn sáng mờ hơn",
            "Không có hiện tượng gì"
          ],
          "correct": 0,
          "explanation": "Đặt hiệu điện thế gấp đôi định mức làm dòng điện tăng vọt, nhiệt lượng tỏa ra quá lớn làm đứt dây tóc."
        },
        {
          "id": "s8_t4_08",
          "level": 3,
          "question": "Tại sao người có nhóm máu O được mệnh danh là 'người cho phổ thông'?",
          "options": [
            "Hồng cầu không chứa kháng nguyên A và B nên không bị kháng thể người nhận gây ngưng kết",
            "Huyết tương không có kháng thể",
            "Máu nhóm O có nhiều dinh dưỡng nhất",
            "Nhóm máu O có thể tiêu diệt mọi vi khuẩn"
          ],
          "correct": 0,
          "explanation": "Hồng cầu nhóm máu O không mang kháng nguyên A, B nên không bị kháng thể tương ứng trong máu người nhận tấn công."
        },
        {
          "id": "s8_t4_09",
          "level": 3,
          "question": "Bộ phận nào của hệ bài tiết có chức năng lọc máu tạo thành nước tiểu đầu?",
          "options": [
            "Cầu thận",
            "Ống thận",
            "Bể thận",
            "Bàng quang"
          ],
          "correct": 0,
          "explanation": "Quá trình lọc máu tạo nước tiểu đầu diễn ra tại các nang cầu thận ở phần vỏ thận."
        },
        {
          "id": "s8_t4_10",
          "level": 4,
          "question": "Trong mạch điện gồm hai bóng đèn Đ₁ và Đ₂ mắc nối tiếp. Biết ampe kế chỉ 0,5 A. Cường độ dòng điện qua mỗi bóng đèn là:",
          "options": [
            "I₁ = I₂ = 0,5 A",
            "I₁ = I₂ = 0,25 A",
            "I₁ = 0,5 A; I₂ = 1 A",
            "I₁ + I₂ = 0,5 A"
          ],
          "correct": 0,
          "explanation": "Trong đoạn mạch mắc nối tiếp: I = I₁ = I₂ = 0,5 A."
        },
        {
          "id": "s8_t4_11",
          "level": 4,
          "question": "Tại sao khi tập thể dục nhịp tim và nhịp thở của chúng ta lại tăng lên đáng kể?",
          "options": [
            "Để cung cấp kịp thời O₂ và chất dinh dưỡng cho tế bào cơ bắp, đồng thời đào thải CO₂ và nhiệt lượng",
            "Để làm mát phổi",
            "Do dây thần kinh bị chèn ép",
            "Để làm giảm áp lực máu"
          ],
          "correct": 0,
          "explanation": "Khi vận động, cơ bắp cần năng lượng lớn nên nhịp tim và hô hấp tăng tốc để đáp ứng nhu cầu O₂ và thanh thải CO₂."
        }
      ]
    }
  ]
};
