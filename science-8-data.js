/**
 * science-8-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Khoa Học Tự Nhiên Lớp 8
 * Chuẩn GDPT 2018 - Học kỳ 1 & Học kỳ 2
 */

window.SCIENCE8_DATA = {
  "name": "Khoa Học Tự Nhiên Lớp 8",
  "grade": 8,
  "topics": [
    {
      "id": "phan_ung_hoa_hoc_acid_base",
      "terms": [
        1
      ],
      "name": "Chủ Đề 1: Biến Đổi Hóa Học, Acid - Base & Thang pH",
      "icon": "🧪",
      "desc": "Định luật bảo toàn khối lượng, mol và tỉ khối; Tính chất của Acid, Base, Oxide, Muối và thang pH môi trường.",
      "theory": {
        "highlights": [
          {
            "icon": "⚖️",
            "title": "Định luật bảo toàn khối lượng & Khái niệm Mol",
            "content": "• <strong>Định luật:</strong> Trong một phản ứng hóa học, tổng khối lượng của các chất sản phẩm bằng tổng khối lượng của các chất tham gia phản ứng (m_A + m_B = m_C + m_D).<br/>• <strong>Mol:</strong> Là lượng chất chứa N_A (6,022 · 10²³) nguyên tử hoặc phân tử của chất đó.<br/>• <strong>Công thức cơ bản:</strong> n = m / M (mol); V = n · 24,79 (lít ở điều kiện chuẩn 25°C, 1 bar); C_M = n / V."
          },
          {
            "icon": "🔬",
            "title": "Acid, Base, Oxide & Thang đo pH",
            "content": "• <strong>Acid:</strong> Phân tử gồm một hay nhiều nguyên tử H liên kết với gốc acid (HCl, H₂SO₄), làm quỳ tím hóa đỏ, tác dụng với kim loại giải phóng khí H₂.<br/>• <strong>Base:</strong> Phân tử gồm nguyên tử kim loại liên kết với một hay nhiều nhóm hydroxide -OH (NaOH, Ca(OH)₂), làm quỳ tím hóa xanh, phenolphtalein hóa hồng.<br/>• <strong>Thang pH:</strong><br/>  - pH < 7: Môi trường acid (càng nhỏ càng chua/acid mạnh).<br/>  - pH = 7: Môi trường trung tính (nước cất).<br/>  - pH > 7: Môi trường base/kiềm."
          }
        ]
      },
      "questions": [
        {
          "id": "sci8_1_1",
          "level": 1,
          "question": "Dung dịch nào sau đây làm đổi màu giấy quỳ tím thành đỏ?",
          "options": [
            "Axit clohiđric (HCl)",
            "Natri hiđroxit (NaOH)",
            "Nước cất (H₂O)",
            "Canxi hiđroxit (Ca(OH)₂)"
          ],
          "correct": 0,
          "explanation": "Dung dịch acid như HCl có pH < 7 làm giấy quỳ tím chuyển sang màu đỏ."
        },
        {
          "id": "sci8_1_2",
          "level": 1,
          "question": "Ở điều kiện chuẩn (25 °C, 1 bar), thể tích của 1 mol chất khí bất kì là bao nhiêu?",
          "options": [
            "24,79 lít",
            "22,4 lít",
            "24,0 lít",
            "25,0 lít"
          ],
          "correct": 0,
          "explanation": "Theo chương trình mới GDPT 2018 (chuẩn IUPAC 1 bar, 25 °C), 1 mol khí chiếm thể tích V = 24,79 lít."
        },
        {
          "id": "sci8_1_3",
          "level": 2,
          "question": "Đốt cháy hoàn toàn 6 gam than củi (chứa Carbon) trong bình chứa khí Oxygen, thu được 22 gam khí Carbon dioxide (CO₂). Khối lượng khí Oxygen đã tham gia phản ứng là:",
          "options": [
            "16 gam",
            "28 gam",
            "12 gam",
            "14 gam"
          ],
          "correct": 0,
          "explanation": "Áp dụng định luật bảo toàn khối lượng: m_C + m_O₂ = m_CO₂ ➔ 6 + m_O₂ = 22 ➔ m_O₂ = 16 gam."
        },
        {
          "id": "sci8_1_4",
          "level": 2,
          "question": "Chỉ số pH của máu người bình thường duy trì trong khoảng hẹp 7,35 - 7,45. Máu người có môi trường gì?",
          "options": [
            "Kiềm nhẹ (base yếu)",
            "Axit mạnh",
            "Trung tính hoàn toàn",
            "Axit nhẹ"
          ],
          "correct": 0,
          "explanation": "pH trong khoảng 7,35 - 7,45 lớn hơn 7 một chút nên máu có môi trường kiềm nhẹ (base yếu)."
        },
        {
          "id": "sci8_1_5",
          "level": 3,
          "question": "Hòa tan hoàn toàn 5,6 gam kim loại Sắt (Fe) vào dung dịch axit HCl dư. Thể tích khí H₂ sinh ra ở điều kiện chuẩn (24,79 lít/mol) là: (Biết Fe = 56)",
          "options": [
            "2,479 lít",
            "4,958 lít",
            "2,24 lít",
            "1,2395 lít"
          ],
          "correct": 0,
          "explanation": "n_Fe = 5,6 / 56 = 0,1 mol. Phương trình: Fe + 2HCl ➔ FeCl₂ + H₂. n_H₂ = n_Fe = 0,1 mol ➔ V_H₂ = 0,1 · 24,79 = 2,479 lít."
        },
        {
          "id": "sci8_1_6",
          "level": 3,
          "question": "Khi bị ong hoặc kiến đốt, nọc độc có tính acid gây đau rát. Ta nên bôi chất nào sau đây vào vết cắn để trung hòa giảm đau?",
          "options": [
            "Nước vôi tôi hoặc bột baking soda (tính kiềm)",
            "Nước cốt chanh",
            "Giấm ăn",
            "Nước muối sinh lí"
          ],
          "correct": 0,
          "explanation": "Nước vôi hoặc bột baking soda có tính kiềm (base) sẽ phản ứng trung hòa acid trong nọc độc, làm dịu vết sưng rát."
        },
        {
          "id": "sci8_1_7",
          "level": 4,
          "question": "Để khử chua (giảm độ acid) cho đất trồng trọt nông nghiệp có pH < 5, bà con nông dân thường bón chất nào sau đây vào ruộng?",
          "options": [
            "Vôi bột (CaO hoặc Ca(OH)₂)",
            "Phân đạm Urê",
            "Muối ăn (NaCl)",
            "Axit photphoric"
          ],
          "correct": 0,
          "explanation": "Vôi bột khi gặp nước tạo thành dung dịch kiềm Ca(OH)₂ có tính base sẽ phản ứng trung hòa các acid trong đất chua, nâng pH về mức thích hợp cho cây trồng."
        },
        {
          "id": "sci8_1_8",
          "level": 4,
          "question": "Trộn 100 ml dung dịch NaOH 1M với 100 ml dung dịch HCl 1M. Nhúng mẩu giấy quỳ tím vào dung dịch sau phản ứng, giấy quỳ tím có hiện tượng gì?",
          "options": [
            "Không đổi màu (vẫn giữ màu tím)",
            "Hóa đỏ đậm",
            "Hóa xanh biếc",
            "Mất màu hoàn toàn"
          ],
          "correct": 0,
          "explanation": "Số mol NaOH = 0,1 mol, n_HCl = 0,1 mol. Phản ứng xảy ra vừa đủ: NaOH + HCl ➔ NaCl + H₂O. Dung dịch thu được là dung dịch muối ăn trung tính (pH = 7) nên quỳ tím không đổi màu."
        }
      ]
    },
    {
      "id": "vat_li_ap_suat_sinh_thai",
      "terms": [
        2
      ],
      "name": "Chủ Đề 2: Áp Suất, Lực Đẩy Archimedes & Hệ Sinh Thái",
      "icon": "🌊",
      "desc": "Khối lượng riêng, áp suất chất rắn - lỏng - khí, lực đẩy Archimedes; Cấu tạo hệ cơ quan cơ thể người và cân bằng sinh thái.",
      "theory": {
        "highlights": [
          {
            "icon": "⚖️",
            "title": "Áp suất & Lực đẩy Archimedes",
            "content": "• <strong>Áp suất chất rắn:</strong> p = F / S (N/m² hoặc Pascal Pa).<br/>• <strong>Lực đẩy Archimedes:</strong> Một vật nhúng trong chất lỏng bị chất lỏng tác dụng một lực đẩy hướng thẳng đứng từ dưới lên trên: F_A = d · V (với d là trọng lượng riêng chất lỏng, V là thể tích phần vật chìm).<br/>• <strong>Điều kiện chìm nổi:</strong><br/>  - F_A < P: Vật chìm xuống.<br/>  - F_A = P: Vật lơ lửng trong chất lỏng hoặc nổi trên mặt thoáng.<br/>  - F_A > P: Vật nổi lên."
          },
          {
            "icon": "🌿",
            "title": "Hệ tuần hoàn, hệ thần kinh & Cân bằng sinh thái",
            "content": "• <strong>Hệ tuần hoàn:</strong> Tim 4 ngăn hoạt động như một chiếc bơm đẩy máu qua 2 vòng tuần hoàn (vòng tuần hoàn lớn nuôi cơ thể và vòng tuần hoàn nhỏ trao đổi khí ở phổi).<br/>• <strong>Hệ sinh thái:</strong> Gồm thành phần vô sinh và sinh vật sản xuất (cây xanh), sinh vật tiêu thụ (động vật), sinh vật phân giải (vi khuẩn, nấm). Mắt xích chuỗi thức ăn duy trì trạng thái cân bằng tự nhiên."
          }
        ]
      },
      "questions": [
        {
          "id": "sci8_2_1",
          "level": 1,
          "question": "Công thức tính áp suất của một lực F tác dụng vuông góc lên diện tích tiếp xúc S là:",
          "options": [
            "p = F / S",
            "p = F · S",
            "p = S / F",
            "p = F² / S"
          ],
          "correct": 0,
          "explanation": "Áp suất được tính bằng áp lực trên một đơn vị diện tích: p = F / S."
        },
        {
          "id": "sci8_2_2",
          "level": 1,
          "question": "Lực đẩy Archimedes tác dụng lên một vật chìm trong chất lỏng có phương và chiều như thế nào?",
          "options": [
            "Phương thẳng đứng, chiều từ dưới lên trên",
            "Phương thẳng đứng, chiều từ trên xuống dưới",
            "Phương nằm ngang, chiều từ trái sang phải",
            "Theo mọi hướng vuông góc với bề mặt"
          ],
          "correct": 0,
          "explanation": "Lực đẩy Archimedes luôn có phương thẳng đứng và chiều hướng từ dưới lên trên."
        },
        {
          "id": "sci8_2_3",
          "level": 2,
          "question": "Vì sao lưỡi dao, lưỡi kéo càng mài sắc bén thì cắt gọt các vật càng dễ dàng?",
          "options": [
            "Lưỡi sắc có diện tích tiếp xúc S rất nhỏ, làm tăng áp suất p lên vật bị cắt",
            "Lưỡi sắc làm tăng lực tác dụng F của tay",
            "Lưỡi sắc làm giảm ma sát trượt",
            "Lưỡi sắc làm tăng khối lượng riêng của dao"
          ],
          "correct": 0,
          "explanation": "Theo công thức p = F / S, khi diện tích S giảm đi thì áp suất tác dụng tăng lên rất lớn, giúp mũi dao cắt sâu dễ dàng."
        },
        {
          "id": "sci8_2_4",
          "level": 2,
          "question": "Một khối sắt có thể tích 0,002 m³ được nhúng chìm hoàn toàn trong nước. Biết trọng lượng riêng của nước là d = 10 000 N/m³. Độ lớn lực đẩy Archimedes là:",
          "options": [
            "20 N",
            "200 N",
            "2 N",
            "2 000 N"
          ],
          "correct": 0,
          "explanation": "F_A = d · V = 10 000 · 0,002 = 20 N."
        },
        {
          "id": "sci8_2_5",
          "level": 3,
          "question": "Một chiếc tàu ngầm đang lặn dưới đáy biển, nếu bơm nước ra khỏi các khoang chứa thì tàu ngầm sẽ có hiện tượng gì?",
          "options": [
            "Nổi dần lên trên mặt nước",
            "Tiếp tục lặn sâu hơn",
            "Đứng yên bất động",
            "Bị nén vỡ vụn"
          ],
          "correct": 0,
          "explanation": "Bơm nước ra ngoài làm giảm trọng lượng P của tàu ngầm. Khi P < F_A, hợp lực hướng lên trên giúp tàu nổi dần lên."
        },
        {
          "id": "sci8_2_6",
          "level": 3,
          "question": "Trong hệ tuần hoàn của người, ngăn tim nào có thành cơ dày nhất để tạo áp lực mạnh đẩy máu đi nuôi toàn bộ các cơ quan trong cơ thể?",
          "options": [
            "Tâm thất trái",
            "Tâm nhĩ trái",
            "Tâm thất phải",
            "Tâm nhĩ phải"
          ],
          "correct": 0,
          "explanation": "Tâm thất trái có thành cơ tim dày nhất vì phải co bóp tạo lực tống máu đi khắp vòng tuần hoàn lớn của cơ thể."
        },
        {
          "id": "sci8_2_7",
          "level": 4,
          "question": "Một người đứng thẳng bằng hai chân trên sàn nhà có khối lượng 60 kg, diện tích tiếp xúc của mỗi bàn chân với mặt sàn là 150 cm². Áp suất của người đó tác dụng lên mặt sàn là: (lấy g = 10 m/s²)",
          "options": [
            "20 000 Pa",
            "40 000 Pa",
            "2 000 Pa",
            "30 000 Pa"
          ],
          "correct": 0,
          "explanation": "Trọng lượng P = F = 60 · 10 = 600 N. Tổng diện tích tiếp xúc cả 2 chân S = 2 · 150 cm² = 300 cm² = 0,03 m². Áp suất p = 600 / 0,03 = 20 000 Pa."
        },
        {
          "id": "sci8_2_8",
          "level": 4,
          "question": "Trong một hệ sinh thái đồng cỏ, nếu người dân săn bắt rắn hổ mang quá mức sẽ trực tiếp dẫn đến hậu quả nghiêm trọng nào?",
          "options": [
            "Số lượng chuột đồng tăng đột biến gây phá hoại mùa màng",
            "Đồng cỏ phát triển xanh tốt hơn",
            "Số lượng diều hâu tăng lên nhanh chóng",
            "Mưa bão xảy ra thường xuyên hơn"
          ],
          "correct": 0,
          "explanation": "Rắn là thiên địch kiểm soát số lượng chuột. Mất đi mắt xích động vật ăn thịt này sẽ khiến loài gặm nhấm bùng phát phá hoại cân bằng sinh thái."
        }
      ]
    }
  ]
};
