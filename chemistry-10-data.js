/**
 * chemistry-10-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Hóa Học Lớp 10
 * Chuẩn GDPT 2018 - Học kỳ 1 & Học kỳ 2
 */

window.CHEMISTRY10_DATA = {
  "name": "Hóa Học Lớp 10",
  "grade": 10,
  "topics": [
    {
      "id": "nguyen_tu_bang_tuan_hoan_lien_ket",
      "terms": [
        1
      ],
      "name": "Chủ Đề 1: Cấu Tạo Nguyên Tử, Bảng Tuần Hoàn & Liên Kết Hóa Học",
      "icon": "🧪",
      "desc": "Thành phần nguyên tử, cấu hình electron; Quy luật tuần hoàn; Liên kết ion, liên kết cộng hóa trị & liên kết hydrogen.",
      "theory": {
        "highlights": [
          {
            "icon": "⚛️",
            "title": "Cấu tạo nguyên tử & Cấu hình electron",
            "content": "• Nguyên tử gồm hạt nhân mang điện dương (proton p mang điện +1, neutron n không mang điện) và vỏ nguyên tử gồm các electron mang điện -1.<br/>• Số hiệu nguyên tử Z = số p = số e; Số khối A = Z + N.<br/>• <strong>Thứ tự mức năng lượng:</strong> 1s 2s 2p 3s 3p 4s 3d 4p 5s... Viết cấu hình e theo nguyên lí vững bền, Pauli và Hund."
          },
          {
            "icon": "🔗",
            "title": "Bảng tuần hoàn & Bản chất các loại liên kết",
            "content": "• <strong>Quy luật biến đổi tuần hoàn:</strong> Đi từ trái sang phải trong một chu kì: bán kính nguyên tử giảm dần, độ âm điện tăng dần, tính kim loại giảm dần, tính phi kim tăng dần.<br/>• <strong>Liên kết ion:</strong> Hình thành do lực hút tĩnh điện giữa các ion mang điện tích trái dấu (kim loại điển hình + phi kim điển hình như NaCl, CaO).<br/>• <strong>Liên kết cộng hóa trị:</strong> Hình thành bằng các cặp electron dùng chung giữa các nguyên tử (phi kim + phi kim như H₂, HCl, CO₂). Hiệu độ âm điện Δχ: 0 ≤ Δχ < 0,4 (CHT không cực); 0,4 ≤ Δχ < 1,7 (CHT có cực); Δχ ≥ 1,7 (liên kết ion)."
          }
        ]
      },
      "questions": [
        {
          "id": "ch10_1_1",
          "level": 1,
          "question": "Các hạt cấu tạo nên hạt nhân của hầu hết các nguyên tử là:",
          "options": [
            "Proton và neutron",
            "Electron và proton",
            "Chỉ có proton",
            "Electron, proton và neutron"
          ],
          "correct": 0,
          "explanation": "Hạt nhân nguyên tử gồm proton mang điện tích dương và neutron không mang điện (trừ đồng vị 1H không có neutron)."
        },
        {
          "id": "ch10_1_2",
          "level": 1,
          "question": "Nguyên tử nguyên tố Natri (Z = 11) có cấu hình electron lớp ngoài cùng là:",
          "options": [
            "3s¹",
            "2s² 2p⁶",
            "3s²",
            "3p¹"
          ],
          "correct": 0,
          "explanation": "Cấu hình e của Na (Z = 11): 1s² 2s² 2p⁶ 3s¹. Lớp ngoài cùng là 3s¹."
        },
        {
          "id": "ch10_1_3",
          "level": 2,
          "question": "Trong bảng tuần hoàn, các nguyên tố thuộc cùng một nhóm A có đặc điểm chung nổi bật nào?",
          "options": [
            "Có cùng số electron ở lớp ngoài cùng (quyết định tính chất hóa học tương tự nhau)",
            "Có cùng số lớp electron",
            "Có cùng số khối A",
            "Có cùng bán kính nguyên tử"
          ],
          "correct": 0,
          "explanation": "Số thứ tự nhóm A bằng số electron hóa trị (lớp ngoài cùng), quyết định tính chất hóa học tương đồng."
        },
        {
          "id": "ch10_1_4",
          "level": 2,
          "question": "Phân tử nào sau đây có liên kết ion?",
          "options": [
            "Natri clorua (NaCl)",
            "Khí clo (Cl₂)",
            "Nước (H₂O)",
            "Khí metan (CH₄)"
          ],
          "correct": 0,
          "explanation": "NaCl là hợp chất giữa kim loại kiềm điển hình (Na) và phi kim halogen điển hình (Cl), có liên kết ion."
        },
        {
          "id": "ch10_1_5",
          "level": 3,
          "question": "Nguyên tử nguyên tố X có tổng số hạt p, n, e là 40, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 12. Số hiệu nguyên tử Z của X là:",
          "options": [
            "13 (Nhôm Al)",
            "12 (Magie Mg)",
            "14 (Silic Si)",
            "11 (Natri Na)"
          ],
          "correct": 0,
          "explanation": "Ta có hệ: 2Z + N = 40 và 2Z - N = 12 ➔ 4Z = 52 ➔ Z = 13 (Al), N = 14."
        },
        {
          "id": "ch10_1_6",
          "level": 3,
          "question": "Dãy các nguyên tố nào sau đây được sắp xếp theo chiều tính phi kim tăng dần từ trái sang phải?",
          "options": [
            "Si < P < S < Cl",
            "Cl < S < P < Si",
            "F < Cl < Br < I",
            "Na < Mg < Al < Si"
          ],
          "correct": 0,
          "explanation": "Trong chu kì 3, đi từ trái sang phải theo chiều tăng điện tích hạt nhân, tính phi kim tăng dần: Si < P < S < Cl."
        },
        {
          "id": "ch10_1_7",
          "level": 4,
          "question": "Nguyên nhân chính khiến nước đá (băng) có khối lượng riêng nhỏ hơn nước lỏng (nổi trên mặt nước) là do:",
          "options": [
            "Mạng lưới liên kết hydrogen giữa các phân tử H₂O trong nước đá tạo nên cấu trúc rỗng thể tích lớn",
            "Nước đá có chứa nhiều bọt khí",
            "Nước đá bị mất bớt nguyên tử O",
            "Nước lỏng có nhiều liên kết cộng hóa trị hơn"
          ],
          "correct": 0,
          "explanation": "Các liên kết hydrogen định hướng tạo nên mạng tinh thể rỗng lục giác cho băng đá, làm thể tích tăng và khối lượng riêng giảm."
        },
        {
          "id": "ch10_1_8",
          "level": 4,
          "question": "Phân tử N₂ có liên kết ba N≡N rất bền vững với năng lượng liên kết lớn (945 kJ/mol). Điều này giải thích cho tính chất nào của khí Nitrogen?",
          "options": [
            "Khí Nitrogen khá trơ về mặt hóa học ở nhiệt độ phòng",
            "Khí Nitrogen rất dễ nổ",
            "Khí Nitrogen có tính khử rất mạnh ở nhiệt độ thường",
            "Khí Nitrogen dễ dàng hòa tan trong nước"
          ],
          "correct": 0,
          "explanation": "Liên kết ba rất bền khiến phân tử N₂ khó bị bẻ gãy ở nhiệt độ thường, do đó Nitrogen khá trơ về mặt hóa học."
        }
      ]
    },
    {
      "id": "oxi_hoa_khu_toc_do_halogen",
      "terms": [
        2
      ],
      "name": "Chủ Đề 2: Phản Ứng Oxi Hóa - Khử, Enthalpy & Nhóm Halogen",
      "icon": "🔥",
      "desc": "Cân bằng phản ứng oxi hóa - khử theo phương pháp thăng bằng electron; Biến thiên Enthalpy chuẩn Δr H°₂₉₈; Tốc độ phản ứng & Tính chất nhóm Halogen (VIIA).",
      "theory": {
        "highlights": [
          {
            "icon": "⚡",
            "title": "Phản ứng Oxi hóa - Khử & Thăng bằng electron",
            "content": "• <strong>Chất khử:</strong> Chất nhường electron (số oxi hóa tăng sau phản ứng). 'Khử cho - O nhận'.<br/>• <strong>Chất oxi hóa:</strong> Chất nhận electron (số oxi hóa giảm sau phản ứng).<br/>• <strong>Quy tắc thăng bằng e:</strong> Tổng số electron chất khử nhường bằng tổng số electron chất oxi hóa nhận."
          },
          {
            "icon": "🔥",
            "title": "Biến thiên Enthalpy (Δr H°₂₉₈) & Tốc độ phản ứng",
            "content": "• <strong>Δr H°₂₉₈ < 0:</strong> Phản ứng tỏa nhiệt (ví dụ phản ứng cháy than củi, xăng dầu).<br/>• <strong>Δr H°₂₉₈ > 0:</strong> Phản ứng thu nhiệt (cần cung cấp nhiệt liên tục như nung đá vôi).<br/>• <strong>5 yếu tố ảnh hưởng đến tốc độ phản ứng:</strong> Nồng độ, nhiệt độ, áp suất (với chất khí), diện tích tiếp xúc bề mặt và chất xúc tác."
          }
        ]
      },
      "questions": [
        {
          "id": "ch10_2_1",
          "level": 1,
          "question": "Trong phản ứng: Zn + 2HCl ➔ ZnCl₂ + H₂, nguyên tử Kẽm (Zn) đóng vai trò là:",
          "options": [
            "Chất khử (số oxi hóa tăng từ 0 lên +2)",
            "Chất oxi hóa",
            "Chất bị khử",
            "Môi trường"
          ],
          "correct": 0,
          "explanation": "Zn nhường 2 electron (Zn⁰ ➔ Zn⁺² + 2e), số oxi hóa tăng nên Zn là chất khử."
        },
        {
          "id": "ch10_2_2",
          "level": 1,
          "question": "Phản ứng nung đá vôi CaCO₃(r) ➔ CaO(r) + CO₂(k) có Δr H°₂₉₈ = +178,29 kJ. Đây là phản ứng:",
          "options": [
            "Thu nhiệt (vì Δr H°₂₉₈ > 0)",
            "Tỏa nhiệt",
            "Không đổi nhiệt độ",
            "Tự phát nổ"
          ],
          "correct": 0,
          "explanation": "Dấu của biến thiên enthalpy chuẩn dương (Δr H°₂₉₈ > 0) đặc trưng cho phản ứng thu nhiệt."
        },
        {
          "id": "ch10_2_3",
          "level": 2,
          "question": "Trong các đơn chất halogen F₂, Cl₂, Br₂, I₂, chất có tính oxi hóa mạnh nhất là:",
          "options": [
            "Fluorine (F₂)",
            "Chlorine (Cl₂)",
            "Bromine (Br₂)",
            "Iodine (I₂)"
          ],
          "correct": 0,
          "explanation": "Fluorine có độ âm điện lớn nhất bảng tuần hoàn nên F₂ là phi kim có tính oxi hóa mạnh nhất nhóm halogen."
        },
        {
          "id": "ch10_2_4",
          "level": 2,
          "question": "Để bảo quản thực phẩm được tươi lâu hơn trong gia đình, người ta đặt thực phẩm vào tủ lạnh. Biện pháp này đã tác động vào yếu tố nào làm giảm tốc độ ôi thiu?",
          "options": [
            "Giảm nhiệt độ",
            "Giảm nồng độ chất phản ứng",
            "Thêm chất xúc tác",
            "Tăng áp suất"
          ],
          "correct": 0,
          "explanation": "Hạ thấp nhiệt độ làm giảm động năng của các phân tử và vi sinh vật, từ đó làm chậm tốc độ phản ứng phân hủy thực phẩm."
        },
        {
          "id": "ch10_2_5",
          "level": 3,
          "question": "Cân bằng phản ứng oxi hóa - khử: Fe + HNO₃ (loãng) ➔ Fe(NO₃)₃ + NO + H₂O. Hệ số nguyên tối giản của HNO₃ là:",
          "options": [
            "4",
            "2",
            "3",
            "8"
          ],
          "correct": 0,
          "explanation": "Fe⁰ ➔ Fe⁺³ + 3e; N⁺⁵ + 3e ➔ N⁺². Nhân tỉ lệ 1:1. Phương trình: Fe + 4HNO₃ ➔ Fe(NO₃)₃ + NO + 2H₂O. Hệ số HNO₃ là 4."
        },
        {
          "id": "ch10_2_6",
          "level": 3,
          "question": "Nhỏ vài giọt dung dịch bạc nitrat (AgNO₃) vào ống nghiệm chứa dung dịch NaCl, hiện tượng quan sát được là:",
          "options": [
            "Xuất hiện kết tủa trắng (AgCl)",
            "Xuất hiện kết tủa vàng nhạt (AgBr)",
            "Xuất hiện kết tủa vàng đậm (AgI)",
            "Có bọt khí thoát ra"
          ],
          "correct": 0,
          "explanation": "Phản ứng nhận biết ion Cl⁻: Ag⁺ + Cl⁻ ➔ AgCl↓ (kết tủa trắng không tan trong acid mạnh)."
        },
        {
          "id": "ch10_2_7",
          "level": 4,
          "question": "Cho phản ứng tổng hợp amoniac: N₂(k) + 3H₂(k) ⇌ 2NH₃(k) có Δr H°₂₉₈ = -92 kJ. Để cân bằng chuyển dịch theo chiều thuận tạo ra nhiều NH₃ hơn, cần tác động biện pháp nào?",
          "options": [
            "Tăng áp suất và giảm nhiệt độ thích hợp",
            "Giảm áp suất và tăng nhiệt độ",
            "Tăng nhiệt độ và giữ nguyên áp suất",
            "Bớt khí N₂ ra ngoài"
          ],
          "correct": 0,
          "explanation": "Phản ứng thuận tỏa nhiệt (ΔH < 0) và giảm số mol khí (4 mol ➔ 2 mol). Theo nguyên lý Le Chatelier: Tăng áp suất và hạ nhiệt độ sẽ làm cân bằng dịch chuyển theo chiều thuận."
        },
        {
          "id": "ch10_2_8",
          "level": 4,
          "question": "Clo hóa nước sinh hoạt hoặc dùng Cloramin B khử trùng nguồn nước sau lũ lụt dựa trên nguyên tắc hóa học nào?",
          "options": [
            "Khí Cl₂ tác dụng với nước tạo axit hypoclorơ (HClO) có tính oxi hóa rất mạnh tiêu diệt vi khuẩn, mầm bệnh",
            "Khí Cl₂ hút hết oxy trong nước",
            "Khí Cl₂ biến nước thành muối ăn",
            "Khí Cl₂ làm kết tủa các khoáng chất"
          ],
          "correct": 0,
          "explanation": "Cl₂ + H₂O ⇌ HCl + HClO. Hợp chất HClO phân hủy sinh ra nguyên tử oxy hoạt tính có tính sát trùng, diệt khuẩn cực mạnh."
        }
      ]
    }
  ]
};
