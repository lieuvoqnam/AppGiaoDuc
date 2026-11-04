/**
 * vietnamese-2-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Tiếng Việt Lớp 2
 * Chuẩn Chương trình Giáo dục phổ thông (GDPT) 2018
 * (Kết nối tri thức với cuộc sống, Cánh diều, Chân trời sáng tạo)
 */

window.VIETNAMESE2_DATA = {
  topics: [
    {
      id: "tu_chi_su_vat_hoat_dong_dac_diem",
      name: "Từ Chỉ Sự Vật, Hoạt Động & Đặc Điểm",
      icon: "🔤",
      desc: "Nhận biết từ chỉ người, đồ vật, con vật, cây cối; từ chỉ hành động và từ miêu tả đặc điểm màu sắc, hình dáng, tính nết.",
      theory: {
        highlights: [
          {
            icon: "🏷️",
            title: "Từ chỉ Sự Vật",
            content: "• <strong>Từ chỉ người:</strong> bác sĩ, thầy giáo, mẹ, em bé, học sinh...<br/>• <strong>Từ chỉ đồ vật:</strong> bàn ghế, bút chì, sách vở, cặp sách, thước kẻ...<br/>• <strong>Từ chỉ con vật:</strong> con mèo, chú chó, chim sẻ, gà trống, chú voi...<br/>• <strong>Từ chỉ cây cối:</strong> cây bàng, hoa phượng, cây cam, hoa sen, bụi tre..."
          },
          {
            icon: "🏃",
            title: "Từ chỉ Hoạt Động",
            content: "• Là từ chỉ hành động cử động của người hoặc con vật.<br/>• <strong>Ví dụ:</strong> đi, chạy, nhảy, đọc sách, viết bài, quét nhà, bơi lội, ca hát, múa lượn..."
          },
          {
            icon: "🎨",
            title: "Từ chỉ Đặc Điểm",
            content: "• <strong>Màu sắc:</strong> đỏ thắm, xanh biếc, vàng tươi, trắng tinh, hồng hào...<br/>• <strong>Hình dáng, kích thước:</strong> tròn xoe, cao lớn, nhỏ nhắn, dài ngoẵng, vuông vắn...<br/>• <strong>Tính nết:</strong> ngoan ngoãn, chăm chỉ, thật thà, hiền lành, thông minh..."
          },
          {
            icon: "💡",
            title: "Mẹo nhận biết siêu nhanh",
            content: "• Muốn biết có phải từ chỉ hoạt động: Hỏi câu hỏi <em>'Đang làm gì?'</em>.<br/>• Muốn biết có phải từ chỉ đặc điểm: Hỏi câu hỏi <em>'Như thế nào? Màu gì? Dáng ra sao?'</em>.<br/>• Muốn biết từ chỉ sự vật: Hỏi <em>'Ai? Con gì? Cái gì? Cây gì?'</em>."
          }
        ]
      },
      questions: [
        {
          id: "tv2_1_1",
          level: 1,
          question: "Từ nào dưới đây là <strong>từ chỉ con vật</strong>?",
          options: ["Cái bàn", "Bác nông dân", "Chim sơn ca", "Cây bàng"],
          correct: 2,
          explanation: "'Chim sơn ca' là tên một loài chim, do đó là từ chỉ con vật. 'Cái bàn' là đồ vật, 'Bác nông dân' là người, 'Cây bàng' là cây cối."
        },
        {
          id: "tv2_1_2",
          level: 1,
          question: "Trong các từ sau, từ nào là <strong>từ chỉ hoạt động</strong>?",
          options: ["Thước kẻ", "Múa hát", "Xanh biếc", "Con mèo"],
          correct: 1,
          explanation: "'Múa hát' là hành động của con người, nên là từ chỉ hoạt động."
        },
        {
          id: "tv2_1_3",
          level: 2,
          question: "Dãy từ nào dưới đây gồm toàn các <strong>từ chỉ đặc điểm</strong>?",
          options: [
            "Đỏ thắm, chăm chỉ, tròn xoe",
            "Bút chì, chạy nhảy, bạn bè",
            "Học bài, quét nhà, nấu cơm",
            "Cô giáo, thước kẻ, hoa hồng"
          ],
          correct: 0,
          explanation: "'Đỏ thắm' chỉ màu sắc, 'chăm chỉ' chỉ tính nết, 'tròn xoe' chỉ hình dáng. Cả 3 từ đều là từ chỉ đặc điểm."
        },
        {
          id: "tv2_1_4",
          level: 2,
          question: "Trong câu: <em>\"Đàn cá tung tăng bơi lội dưới làn nước trong veo.\"</em>, từ nào là <strong>từ chỉ đặc điểm</strong>?",
          options: ["Đàn cá", "Bơi lội", "Làn nước", "Trong veo"],
          correct: 3,
          explanation: "'Trong veo' miêu tả tính chất, đặc điểm của dòng nước, nên là từ chỉ đặc điểm."
        },
        {
          id: "tv2_1_5",
          level: 3,
          question: "Tìm từ không cùng nhóm với các từ còn lại trong dãy: <em>vở bài tập, hộp bút, cặp sách, ngoan ngoãn</em>.",
          options: ["Vở bài tập", "Hộp bút", "Cặp sách", "Ngoan ngoãn"],
          correct: 3,
          explanation: "'Vở bài tập, hộp bút, cặp sách' đều là từ chỉ đồ vật (đồ dùng học tập). Riêng 'ngoan ngoãn' là từ chỉ đặc điểm tính nết."
        },
        {
          id: "tv2_1_6",
          level: 3,
          question: "Câu ca dao: <em>\"Công cha như núi Thái Sơn / Nghĩa mẹ như nước trong nguồn chảy ra.\"</em> có những <strong>từ chỉ người</strong> nào?",
          options: ["Công cha, nghĩa mẹ", "Cha, mẹ", "Núi, nước", "Thái Sơn, nguồn"],
          correct: 1,
          explanation: "Hai từ chỉ người thân ruột thịt trong câu là 'cha' và 'mẹ'."
        },
        {
          id: "tv2_1_7",
          level: 4,
          question: "Đoạn văn sau có bao nhiêu từ chỉ hoạt động: <em>\"Mỗi sáng, chú gà trống nhảy lên đống rơm cất tiếng gáy vang báo thức mọi người thức dậy.\"</em>?",
          options: ["2 từ", "3 từ", "4 từ", "5 từ"],
          correct: 2,
          explanation: "Các từ chỉ hoạt động gồm: 'nhảy', 'gáy' (hoặc cất tiếng gáy), 'báo thức', 'thức dậy'. Tổng cộng có 4 từ chỉ hoạt động."
        },
        {
          id: "tv2_1_8",
          level: 4,
          question: "Từ nào dưới đây có thể vừa là <strong>từ chỉ con vật</strong> vừa là <strong>từ chỉ hoạt động</strong> tùy thuộc vào ngữ cảnh?",
          options: ["Bò", "Gà", "Vịt", "Chó"],
          correct: 0,
          explanation: "'Bò' vừa là danh từ chỉ con bò (ví dụ: con bò đang ăn cỏ), vừa là động từ chỉ hoạt động bò bằng tay chân (ví dụ: em bé đang bò trên sàn nhà)."
        }
      ]
    },
    {
      id: "ba_kieu_cau_dau_cau",
      name: "Ba Kiểu Câu Cơ Bản & Dấu Câu",
      icon: "❓",
      desc: "Ba mẫu câu 'Ai là gì?', 'Ai làm gì?', 'Ai thế nào?' cùng cách sử dụng dấu chấm, dấu phẩy, dấu hỏi, dấu than.",
      theory: {
        highlights: [
          {
            icon: "1️⃣",
            title: "Câu 'Ai là gì?' (Giới thiệu, nhận định)",
            content: "• Thường có chữ <strong>'là'</strong> ở giữa.<br/>• Dùng để giới thiệu tên gọi, nghề nghiệp hoặc chức vụ của người/vật.<br/>• <strong>Ví dụ:</strong> <em>Bố em là bộ đội hải quân.</em> / <em>Bạn Nam là lớp trưởng gương mẫu.</em>"
          },
          {
            icon: "2️⃣",
            title: "Câu 'Ai làm gì?' (Nêu hoạt động)",
            content: "• Bộ phận trả lời câu hỏi 'Làm gì?' chứa <strong>từ chỉ hoạt động</strong>.<br/>• Dùng để kể về hành động của người hoặc con vật.<br/>• <strong>Ví dụ:</strong> <em>Mẹ em đang tưới hoa trong vườn.</em> / <em>Chú mèo nằm sưởi nắng bên thềm.</em>"
          },
          {
            icon: "3️⃣",
            title: "Câu 'Ai thế nào?' (Nêu đặc điểm)",
            content: "• Bộ phận trả lời câu hỏi 'Thế nào?' chứa <strong>từ chỉ đặc điểm</strong> (hình dáng, màu sắc, tính tình).<br/>• <strong>Ví dụ:</strong> <em>Cánh đồng lúa chín vàng óng.</em> / <em>Bạn Mai rất hiền lành và chăm học.</em>"
          },
          {
            icon: "🖋️",
            title: "Cách dùng 4 dấu câu quan trọng",
            content: "• <strong>Dấu chấm (.):</strong> Đặt ở cuối câu kể lại một sự việc hoàn chỉnh.<br/>• <strong>Dấu chấm hỏi (?):</strong> Đặt ở cuối câu hỏi để tìm kiếm thông tin.<br/>• <strong>Dấu chấm than (!):</strong> Đặt ở cuối câu bộc lộ cảm xúc vui mừng, ngạc nhiên hoặc lời cầu khiến.<br/>• <strong>Dấu phẩy (,):</strong> Đặt ở giữa câu để ngăn cách các từ hoặc cụm từ cùng loại."
          }
        ]
      },
      questions: [
        {
          id: "tv2_2_1",
          level: 1,
          question: "Câu: <em>\"Bác Hồ là vị lãnh tụ kính yêu của dân tộc Việt Nam.\"</em> thuộc kiểu câu nào?",
          options: ["Ai làm gì?", "Ai là gì?", "Ai thế nào?", "Câu hỏi"],
          correct: 1,
          explanation: "Câu có từ 'là' dùng để giới thiệu và khẳng định, thuộc kiểu câu 'Ai là gì?'."
        },
        {
          id: "tv2_2_2",
          level: 1,
          question: "Dấu câu nào thích hợp nhất để điền vào cuối câu: <em>\"Hôm nay bạn có mang theo sách giáo khoa Tiếng Việt không...\"</em>?",
          options: ["Dấu chấm (.)", "Dấu phẩy (,)", "Dấu chấm hỏi (?)", "Dấu chấm than (!)"],
          correct: 2,
          explanation: "Đây là câu hỏi dùng để hỏi bạn bè nên kết thúc bằng dấu chấm hỏi (?)."
        },
        {
          id: "tv2_2_3",
          level: 2,
          question: "Câu nào dưới đây được viết theo mẫu câu <strong>\"Ai làm gì?\"</strong>?",
          options: [
            "Bầu trời hôm nay rất trong xanh.",
            "Bạn Huy đang say sưa đọc sách ở thư viện.",
            "Trường em là trường tiểu học Chu Văn An.",
            "Dòng sông quê em quanh co uốn khúc."
          ],
          correct: 1,
          explanation: "Câu 'Bạn Huy đang say sưa đọc sách ở thư viện' nêu hoạt động của bạn Huy (đang say sưa đọc sách), thuộc kiểu câu 'Ai làm gì?'."
        },
        {
          id: "tv2_2_4",
          level: 2,
          question: "Câu nào dưới đây thuộc mẫu câu <strong>\"Ai thế nào?\"</strong>?",
          options: [
            "Mẹ đi chợ mua cá.",
            "Chú thỏ có bộ lông trắng muốt và đôi mắt đỏ tròn xoe.",
            "Bố em là kỹ sư xây dựng.",
            "Em bé đang tập đi."
          ],
          correct: 1,
          explanation: "Câu miêu tả đặc điểm hình dáng của chú thỏ ('bộ lông trắng muốt và đôi mắt đỏ tròn xoe'), thuộc mẫu 'Ai thế nào?'."
        },
        {
          id: "tv2_2_5",
          level: 3,
          question: "Điền dấu câu thích hợp vào chỗ trống: <em>\"Ôi, bông hoa hồng nhung này đẹp quá[...]\"</em>",
          options: ["Dấu chấm (.)", "Dấu chấm than (!)", "Dấu chấm hỏi (?)", "Dấu phẩy (,)"],
          correct: 1,
          explanation: "Câu bộc lộ cảm xúc ngợi ca, thán phục ('Ôi... đẹp quá') nên kết thúc bằng dấu chấm than (!)."
        },
        {
          id: "tv2_2_6",
          level: 3,
          question: "Chọn cách đặt dấu phẩy đúng nhất trong câu sau:",
          options: [
            "Hộp bút của em có thước kẻ, bút mực bút chì, và tẩy.",
            "Hộp bút của em có thước kẻ, bút mực, bút chì và tẩy.",
            "Hộp bút, của em có thước kẻ bút mực bút chì và tẩy.",
            "Hộp bút của em, có thước kẻ bút mực bút chì và tẩy."
          ],
          correct: 1,
          explanation: "Dấu phẩy ngăn cách các từ cùng chỉ đồ vật liệt kê: 'thước kẻ, bút mực, bút chì và tẩy'."
        },
        {
          id: "tv2_2_7",
          level: 4,
          question: "Cho câu: <em>\"Buổi sáng sớm, những hạt sương đêm đọng long lanh trên phiến lá.\"</em>. Bộ phận trả lời cho câu hỏi <strong>\"Thế nào?\"</strong> là:",
          options: [
            "Buổi sáng sớm",
            "Những hạt sương đêm",
            "Đọng long lanh trên phiến lá",
            "Long lanh"
          ],
          correct: 2,
          explanation: "Chủ ngữ (Ai/Cái gì) là 'những hạt sương đêm'. Bộ phận vị ngữ trả lời câu hỏi 'Thế nào?' là 'đọng long lanh trên phiến lá'."
        },
        {
          id: "tv2_2_8",
          level: 4,
          question: "Đọc câu: <em>\"Mẹ em vừa hiền từ lại vừa đảm đang.\"</em>. Câu này thuộc mẫu câu nào?",
          options: ["Ai là gì?", "Ai làm gì?", "Ai thế nào?", "Không thuộc 3 kiểu câu trên"],
          correct: 2,
          explanation: "'Hiền từ' và 'đảm đang' đều là từ chỉ đặc điểm phẩm chất của người mẹ, do đó câu này thuộc kiểu câu 'Ai thế nào?'."
        }
      ]
    },
    {
      id: "quy_tac_chinh_ta",
      name: "Quy Tắc Chính Tả c/k, g/gh, ng/ngh & Âm Vần",
      icon: "✍️",
      desc: "Nắm vững quy tắc chính tả c/k, g/gh, ng/ngh, phân biệt tr/ch, s/x, d/gi/r, l/n và dấu hỏi - ngã.",
      theory: {
        highlights: [
          {
            icon: "🔑",
            title: "Quy tắc viết c / k",
            content: "• Viết là <strong>k</strong> khi đứng trước các nguyên âm: <strong>e, ê, i</strong> (hoặc y).<br/>  <em>Ví dụ:</em> cây kéo, quả khế, kim chỉ, kì quan.<br/>• Viết là <strong>c</strong> khi đứng trước các nguyên âm còn lại (a, o, ô, ơ, u, ư...).<br/>  <em>Ví dụ:</em> con cá, cờ đỏ, cái cốc, con cua."
          },
          {
            icon: "🔑",
            title: "Quy tắc viết g / gh và ng / ngh",
            content: "• Đứng trước <strong>e, ê, i</strong> ➔ Bắt buộc phải thêm chữ 'h' thành <strong>gh</strong> và <strong>ngh</strong>.<br/>  <em>Ví dụ:</em> ghế gỗ, ghi nhớ, ghé thăm, nghề nghiệp, suy nghĩ, ngắm nghía.<br/>• Đứng trước các âm còn lại ➔ Viết là <strong>g</strong> và <strong>ng</strong>.<br/>  <em>Ví dụ:</em> con gà, gối ôm, ngôi nhà, ngủ say, ngô ngọt."
          },
          {
            icon: "🎯",
            title: "Phân biệt ch / tr và s / x",
            content: "• <strong>ch / tr:</strong> cây tre, con trâu, mặt trời, trung thực; quả chuối, con chim, chăm chỉ, chạy nhảy.<br/>• <strong>s / x:</strong> ngôi sao, dòng sông, hoa sen, chim sẻ; xe đạp, mùa xuân, xinh đẹp, xao xuyến."
          },
          {
            icon: "💡",
            title: "Phân biệt l / n và d / gi / r",
            content: "• <strong>l / n:</strong> nón lá, quả na, nâng niu, năm tháng; bông lúa, lớp học, lung linh, lấp lánh.<br/>• <strong>d / gi / r:</strong> dòng sông, dịu dàng; cơn gió, giúp đỡ; rực rỡ, reo vui."
          }
        ]
      },
      questions: [
        {
          id: "tv2_3_1",
          level: 1,
          question: "Từ nào dưới đây viết <strong>đúng chính tả</strong>?",
          options: ["Cái kẹo", "Con ké", "Quả cam", "Kây cau"],
          correct: 2,
          explanation: "'Quả cam' viết đúng chính tả. 'Cái kẹo' viết sai (phải là cái kẹo? Đứng trước e là k, nên 'kẹo' đúng nhưng 'cái' là c). Chú ý 'Quả cam' đứng trước 'a' viết là 'c' hoàn toàn chính xác."
        },
        {
          id: "tv2_3_2",
          level: 1,
          question: "Điền chữ thích hợp vào chỗ chấm: <em>\"Em ngồi học bài ngay ngắn trên chiếc ...ế tựa.\"</em>",
          options: ["g", "gh", "c", "k"],
          correct: 1,
          explanation: "Đứng trước nguyên âm 'ê', âm g phải viết là 'gh' (chiếc ghế)."
        },
        {
          id: "tv2_3_3",
          level: 2,
          question: "Dãy từ nào dưới đây có từ viết <strong>sai chính tả</strong>?",
          options: [
            "Con nghé, ngày tháng, suy nghĩ",
            "Ghi nhớ, ghế gỗ, ngô ngọt",
            "Nghe ngóng, gập ghềnh, ngiêng ngả",
            "Ngôi sao, con ngỗng, ghé chơi"
          ],
          correct: 2,
          explanation: "Từ 'ngiêng ngả' viết sai chính tả. Đứng trước âm 'i' phải viết là 'ngh' ➔ 'nghiêng ngả'."
        },
        {
          id: "tv2_3_4",
          level: 2,
          question: "Điền <strong>ch</strong> hoặc <strong>tr</strong> vào câu sau: <em>\"Mặt ...ời tỏa ánh nắng sưởi ấm cho đàn ...im non.\"</em>",
          options: ["tr - ch", "ch - tr", "tr - tr", "ch - ch"],
          correct: 0,
          explanation: "Viết đúng là 'Mặt trời' (tr) và 'đàn chim' (ch)."
        },
        {
          id: "tv2_3_5",
          level: 3,
          question: "Chọn từ viết đúng chính tả để điền vào câu: <em>\"Bạn Nam rất ... năng và ngoan ngoãn.\"</em>",
          options: ["siêng", "xiêng", "siên", "xiên"],
          correct: 0,
          explanation: "Từ đúng chính tả miêu tả đức tính chăm chỉ là 'siêng năng' (bắt đầu bằng âm s)."
        },
        {
          id: "tv2_3_6",
          level: 3,
          question: "Cặp từ nào dưới đây có tiếng chứa <strong>dấu hỏi</strong> và <strong>dấu ngã</strong> viết đúng hoàn toàn?",
          options: [
            "Vui vẽ - gọn gàng",
            "Gọn gẽ - chăm chỉ",
            "Vui vẻ - gọn gẽ",
            "Chăm chỉ - sạch sẽ"
          ],
          correct: 3,
          explanation: "'Chăm chỉ' (dấu hỏi ở tiếng 'chỉ') và 'sạch sẽ' (dấu ngã ở tiếng 'sẽ') đều viết hoàn toàn đúng chính tả."
        },
        {
          id: "tv2_3_7",
          level: 4,
          question: "Trong câu: <em>\"Đêm qua, gió mùa đông bắc chàn về làm dung chuyển những cành lá xum xuê.\"</em> có bao nhiêu từ viết sai chính tả?",
          options: ["1 từ", "2 từ", "3 từ", "4 từ"],
          correct: 2,
          explanation: "Có 3 từ viết sai: 'chàn về' (sai, phải là 'tràn về'), 'dung chuyển' (sai, phải là 'rung chuyển'), 'xum xuê' (sai, phải là 'sum sê' hoặc 'sum suê')."
        },
        {
          id: "tv2_3_8",
          level: 4,
          question: "Cần điền lần lượt các chữ cái nào vào chỗ chấm trong câu: <em>\"Bác nông dân đang cày ...uộng trên cánh đồng lúa chín ...àng ...ực.\"</em>?",
          options: ["r - v - r", "r - d - r", "r - gi - r", "d - gi - r"],
          correct: 0,
          explanation: "Các từ viết chuẩn là: 'ruộng' (r), 'vàng' (v), 'rực' (r) ➔ 'cày ruộng', 'chín vàng rực'."
        }
      ]
    },
    {
      id: "tap_lam_van_doan_van",
      name: "Tập Làm Văn: Viết Đoạn Văn Ngắn 4 - 5 Câu",
      icon: "📝",
      desc: "Kỹ năng viết đoạn văn kể về người thân, tả đồ vật, con vật nuôi, giới thiệu bản thân, viết tin nhắn và lời cảm ơn.",
      theory: {
        highlights: [
          {
            icon: "🙋",
            title: "Đoạn văn giới thiệu bản thân",
            content: "• <strong>Câu 1:</strong> Giới thiệu họ tên và tuổi của em.<br/>• <strong>Câu 2:</strong> Em đang học lớp mấy, trường tiểu học nào.<br/>• <strong>Câu 3:</strong> Sở thích của em (thích đọc truyện, vẽ tranh, đá bóng...).<br/>• <strong>Câu 4:</strong> Ước mơ tương lai (làm bác sĩ, cô giáo, phi công...).<br/>• <strong>Câu 5:</strong> Lời hứa cố gắng học giỏi, chăm ngoan."
          },
          {
            icon: "❤️",
            title: "Đoạn văn kể về người thân yêu",
            content: "• Giới thiệu người em muốn kể là ai (bố, mẹ, ông, bà...).<br/>• Người đó bao nhiêu tuổi và làm nghề gì.<br/>• Đặc điểm ngoại hình nổi bật (nụ cười, mái tóc, đôi mắt hiền từ...).<br/>• Người đó yêu thương, chăm sóc em như thế nào.<br/>• Tình cảm và lời hứa của em dành cho người thân."
          },
          {
            icon: "🐱",
            title: "Đoạn văn tả con vật nuôi / đồ vật",
            content: "• Giới thiệu tên con vật hoặc đồ vật (chú mèo mướp, chiếc cặp sách...).<br/>• Miêu tả bao quát (hình dáng, màu sắc, kích thước).<br/>• Miêu tả chi tiết một vài nét đặc sắc (đôi tai, bộ lông, ngăn kéo, quai đeo...).<br/>• Lợi ích của con vật/đồ vật đó đối với cuộc sống của em.<br/>• Em giữ gìn và chăm sóc vật nuôi/đồ dùng cẩn thận."
          },
          {
            icon: "💌",
            title: "Viết tin nhắn & Lời cảm ơn, xin lỗi",
            content: "• <strong>Tin nhắn:</strong> Phải ghi rõ gửi cho ai, nội dung cần nhắn là gì và ký tên người gửi.<br/>• <strong>Lời cảm ơn:</strong> Nói khi nhận được sự giúp đỡ, quà tặng từ người khác với thái độ chân thành.<br/>• <strong>Lời xin lỗi:</strong> Nói khi mình mắc lỗi hoặc vô ý làm phiền người khác, kèm lời hứa không tái phạm."
          }
        ]
      },
      questions: [
        {
          id: "tv2_4_1",
          level: 1,
          question: "Khi vô tình làm rơi chiếc bút mực của bạn cùng bàn xuống đất, em nên làm gì?",
          options: [
            "Bỏ đi coi như không biết",
            "Nhặt bút lên trả bạn và chân thành nói lời xin lỗi",
            "Đổ lỗi cho bạn khác làm rơi",
            "Im lặng không nói gì"
          ],
          correct: 1,
          explanation: "Khi vô ý làm rơi đồ của bạn, hành động lịch sự là nhặt lên trả bạn và nói lời xin lỗi chân thành."
        },
        {
          id: "tv2_4_2",
          level: 1,
          question: "Một đoạn văn giới thiệu bản thân ở lớp 2 thường gồm mấy câu?",
          options: ["1 câu", "4 đến 5 câu", "15 đến 20 câu", "Chỉ cần viết 1 từ"],
          correct: 1,
          explanation: "Theo chuẩn chương trình Tiếng Việt 2 GDPT 2018, học sinh rèn kỹ năng viết đoạn văn ngắn từ 4 đến 5 câu."
        },
        {
          id: "tv2_4_3",
          level: 2,
          question: "Câu nào dưới đây là <strong>câu mở đầu phù hợp nhất</strong> cho đoạn văn kể về mẹ?",
          options: [
            "Mẹ em nấu ăn rất ngon.",
            "Trong gia đình, người em yêu quý và gắn bó nhất là mẹ.",
            "Mẹ thường đi chợ vào mỗi buổi sáng sớm.",
            "Em hứa sẽ luôn vâng lời mẹ."
          ],
          correct: 1,
          explanation: "Câu 'Trong gia đình, người em yêu quý và gắn bó nhất là mẹ' là câu mở đoạn tự nhiên, giới thiệu rõ đối tượng người em muốn kể."
        },
        {
          id: "tv2_4_4",
          level: 2,
          question: "Một mẩu tin nhắn để lại cho bố mẹ khi em sang nhà bạn học nhóm cần có những thông tin cơ bản nào?",
          options: [
            "Chỉ cần viết tên bạn",
            "Gửi cho ai, em đi đâu, làm gì với ai, thời gian về và tên người gửi",
            "Kể lại toàn bộ bài học trên lớp",
            "Chỉ cần viết chữ ký"
          ],
          correct: 1,
          explanation: "Tin nhắn cần ngắn gọn nhưng đủ thông tin: người nhận, địa điểm, mục đích, thời gian về và người gửi."
        },
        {
          id: "tv2_4_5",
          level: 3,
          question: "Sắp xếp các câu sau thành một đoạn văn hoàn chỉnh tả chú cún con:<br/>(1) Em rất yêu quý chú cún và luôn cho chú ăn mỗi ngày.<br/>(2) Chú có bộ lông màu vàng óng và đôi mắt tròn đen láy.<br/>(3) Nhà em có nuôi một chú cún con rất đáng yêu đặt tên là Bông.<br/>(4) Mỗi khi em đi học về, Bông lại chạy ra cửa vẫy đuôi mừng rỡ.",
          options: ["(3) - (2) - (4) - (1)", "(1) - (2) - (3) - (4)", "(3) - (4) - (2) - (1)", "(2) - (3) - (4) - (1)"],
          correct: 0,
          explanation: "Thứ tự hợp lý: (3) Giới thiệu con vật ➔ (2) Tả ngoại hình ➔ (4) Kể hoạt động đáng yêu ➔ (1) Tình cảm gắn bó của em."
        },
        {
          id: "tv2_4_6",
          level: 3,
          question: "Trong đoạn văn tả đồ vật, câu nào dưới đây nêu được <strong>công dụng</strong> của chiếc cặp sách?",
          options: [
            "Chiếc cặp có màu xanh dương rất nổi bật.",
            "Cặp gồm có hai ngăn lớn và một ngăn kéo nhỏ ở phía trước.",
            "Chiếc cặp giúp em đựng sách vở, đồ dùng học tập gọn gàng mỗi ngày đến lớp.",
            "Đó là món quà bố tặng em nhân dịp năm học mới."
          ],
          correct: 2,
          explanation: "Câu 'Chiếc cặp giúp em đựng sách vở...' nêu rõ lợi ích, công dụng thực tế của đồ vật."
        },
        {
          id: "tv2_4_7",
          level: 4,
          question: "Từ ngữ nào dùng để thể hiện cảm xúc chân thành nhất trong câu kết đoạn văn viết về thầy cô giáo?",
          options: [
            "Em thấy thầy cô cũng bình thường.",
            "Em luôn biết ơn và kính trọng thầy cô, em tự hứa sẽ học thật giỏi để thầy cô vui lòng.",
            "Thầy cô có mái tóc hoa râm.",
            "Thầy cô dạy môn Toán và Tiếng Việt."
          ],
          correct: 1,
          explanation: "Câu kết đoạn cần đọng lại cảm xúc biết ơn, tình cảm sâu sắc và lời hứa phấn đấu học tập."
        },
        {
          id: "tv2_4_8",
          level: 4,
          question: "Đọc đoạn văn sau: <em>\"Bé Mai có chiếc bút máy màu tím. Ngòi bút sáng loáng, viết êm ru. Mai luôn giữ gìn cẩn thận, dùng xong đậy nắp ngay.\"</em>. Đoạn văn này khuyên chúng ta điều gì?",
          options: [
            "Nên mua bút màu tím",
            "Biết quý trọng và bảo quản cẩn thận đồ dùng học tập",
            "Chỉ dùng bút máy, không dùng bút chì",
            "Càng nhiều bút càng tốt"
          ],
          correct: 1,
          explanation: "Hành động 'giữ gìn cẩn thận, dùng xong đậy nắp ngay' giáo dục học sinh tính ngăn nắp, biết giữ gìn đồ dùng học tập."
        }
      ]
    },
    {
      id: "doc_hieu_cam_thu",
      name: "Đọc Hiểu Văn Bản & Cảm Thụ Thiếu Nhi",
      icon: "📖",
      desc: "Rèn luyện kỹ năng đọc hiểu câu chuyện thiếu nhi, tìm ý chính, nhân vật, chi tiết và bài học giáo dục sâu sắc.",
      theory: {
        highlights: [
          {
            icon: "📚",
            title: "Kỹ năng đọc hiểu văn bản lớp 2",
            content: "• <strong>Đọc kỹ đầu bài & đoạn văn:</strong> Đọc từ 1 - 2 lần để hiểu nội dung câu chuyện.<br/>• <strong>Xác định nhân vật chính:</strong> Câu chuyện nói về ai? Con vật hay con người nào?<br/>• <strong>Tìm chi tiết:</strong> Các sự việc xảy ra ở đâu, vào lúc nào và diễn biến ra sao."
          },
          {
            icon: "💡",
            title: "Cách trả lời câu hỏi đọc hiểu",
            content: "• Gạch chân từ khóa trong câu hỏi (Ai? Làm gì? Ở đâu? Vì sao?).<br/>• Đối chiếu từ khóa đó vào trong bài đọc để tìm câu trả lời chính xác nhất.<br/>• Trả lời tròn câu, đủ ý và đúng ngữ pháp."
          },
          {
            icon: "🌱",
            title: "Rút ra bài học ý nghĩa",
            content: "• Mỗi câu chuyện đều gửi gắm một thông điệp tốt đẹp: lòng hiếu thảo, tình bạn chân chính, sự siêng năng chăm chỉ, lòng dũng cảm hay tình yêu quê hương đất nước.<br/>• Luôn suy nghĩ: <em>'Qua bài học này, em học tập được điều gì ở nhân vật?'</em>."
          },
          {
            icon: "🌟",
            title: "Cảm thụ vẻ đẹp thơ ca thiếu nhi",
            content: "• Chú ý các hình ảnh so sánh ngộ nghĩnh, từ ngữ gợi tả màu sắc, âm thanh sinh động trong các bài thơ lớp 2."
          }
        ]
      },
      questions: [
        {
          id: "tv2_5_1",
          level: 1,
          question: "Đọc câu thơ: <em>\"Mặt trời gác núi / Bóng tối lan dần / Đàn chim bay về tổ / Sau một ngày kiếm ăn.\"</em>. Đàn chim bay về tổ vào thời gian nào trong ngày?",
          options: ["Buổi sáng sớm", "Buổi trưa", "Buổi chiều tối", "Nửa đêm"],
          correct: 2,
          explanation: "Chi tiết 'Mặt trời gác núi / Bóng tối lan dần' cho thấy thời điểm đàn chim về tổ là buổi chiều tối (hoàng hôn)."
        },
        {
          id: "tv2_5_2",
          level: 1,
          question: "Trong câu chuyện <em>\"Rùa và Thỏ\"</em>, vì sao chú Rùa vốn chậm chạp lại chiến thắng chú Thỏ chạy nhanh?",
          options: [
            "Vì Thỏ kiêu ngạo, mải chơi ngủ quên bên đường",
            "Vì Rùa biết bay",
            "Vì đường đua quá ngắn",
            "Vì Rùa đi nhờ xe của bạn khác"
          ],
          correct: 0,
          explanation: "Thỏ ỷ mình chạy nhanh nên chủ quan, mải đuổi bướm hái hoa rồi ngủ quên. Rùa kiên trì, chăm chỉ từng bước một nên đã về đích trước."
        },
        {
          id: "tv2_5_3",
          level: 2,
          question: "Đọc đoạn văn: <em>\"Cây bàng mùa đông rụng hết lá, cành trơ trụi như những cánh tay khẳng khiu. Nhưng đến mùa xuân, từng búp non xanh mơn mởn nhú lên, tràn đầy sức sống.\"</em>. Câu văn miêu tả điều gì?",
          options: [
            "Sự thay đổi kỳ diệu của cây bàng qua hai mùa đông và xuân",
            "Cách trồng và chăm sóc cây bàng",
            "Hương vị của quả bàng chín",
            "Các trò chơi dưới bóng mát cây bàng"
          ],
          correct: 0,
          explanation: "Đoạn văn so sánh hình ảnh cây bàng khẳng khiu vào mùa đông và sự đâm chồi bừng nở sức sống khi mùa xuân sang."
        },
        {
          id: "tv2_5_4",
          level: 2,
          question: "Đọc câu tục ngữ: <em>\"Học thầy không tày học bạn\"</em>. Câu tục ngữ khuyên chúng ta điều gì?",
          options: [
            "Chỉ nên học bạn bè, không cần nghe thầy cô",
            "Biết học hỏi cả ở thầy cô và học tập những điều hay lẽ phải từ bạn bè xung quanh",
            "Không cần đi học ở trường",
            "Chỉ chơi cùng các bạn giỏi"
          ],
          correct: 1,
          explanation: "Câu tục ngữ nhắc nhở việc bên cạnh việc nghe lời thầy cô giảng dạy thì việc tích cực trao đổi, học tập những đức tính tốt từ bạn bè là rất quý báu."
        },
        {
          id: "tv2_5_5",
          level: 3,
          question: "Đọc đoạn thơ:<br/><em>\"Bàn tay mẹ<br/>Bế chúng con<br/>Bàn tay mẹ<br/>Chăm chúng con<br/>Cơm con ăn<br/>Tay mẹ nấu<br/>Nước con uống<br/>Tay mẹ đun...\"</em><br/>Đoạn thơ trên thể hiện điều gì?",
          options: [
            "Món cơm mẹ nấu rất ngon",
            "Tình thương bao la, sự chăm sóc tận tụy của mẹ dành cho con",
            "Bàn tay mẹ rất to lớn",
            "Trẻ con thích uống nước ngọt"
          ],
          correct: 1,
          explanation: "Hình ảnh đôi bàn tay mẹ nấu cơm, đun nước, bế bồng chăm chút thể hiện tình yêu thương vô bờ bến và sự hi sinh của mẹ."
        },
        {
          id: "tv2_5_6",
          level: 3,
          question: "Trong bài đọc <em>\"Bóp nát quả cam\"</em>, hành động bóp nát quả cam trong tay của người thiếu niên anh hùng Trần Quốc Toản thể hiện tâm trạng gì?",
          options: [
            "Tức giận vì không được ăn cam",
            "Uất ức, căm thù giặc ngoại xâm sục sôi và lòng khao khát ra trận đánh giặc cứu nước",
            "Mừng rỡ vì được vua ban cam quý",
            "Vô ý làm rơi quả cam"
          ],
          correct: 1,
          explanation: "Vì còn nhỏ tuổi không được dự bàn việc quân, Trần Quốc Toản căm thù giặc nghiến răng bóp nát quả cam lúc nào không hay."
        },
        {
          id: "tv2_5_7",
          level: 4,
          question: "Đọc câu chuyện: <em>\"Một chú kiến nhỏ tha mồi nặng gấp đôi cơ thể mình. Dù nhiều lần bị gió thổi ngã, kiến vẫn kiên trì bò dậy tha mồi về tổ an toàn trước cơn mưa bão.\"</em>. Bài học rút ra cho học sinh là:",
          options: [
            "Chỉ nên đi kiếm mồi lúc trời nắng",
            "Phải biết kiên trì, không nản chí trước khó khăn để đạt được mục tiêu",
            "Nên nhờ con vật to lớn hơn làm hộ",
            "Không cần tích trữ thức ăn"
          ],
          correct: 1,
          explanation: "Hình ảnh chú kiến bé nhỏ nhưng đầy nghị lực kiên trì là bài học quý giá về tinh thần bền bỉ vượt khó vươn lên."
        },
        {
          id: "tv2_5_8",
          level: 4,
          question: "Trong hai câu thơ: <em>\"Trẻ em như búp trên cành / Biết ăn ngủ, biết học hành là ngoan.\"</em> của Bác Hồ, hình ảnh <em>\"búp trên cành\"</em> gợi cho em cảm nhận gì về trẻ em?",
          options: [
            "Trẻ em thích leo trèo lên cành cây",
            "Trẻ em non nớt, trong sáng, đáng yêu, là tương lai của đất nước cần được gia đình và xã hội yêu thương chăm sóc",
            "Trẻ em có màu xanh như búp lá",
            "Trẻ em cần phải ra vườn chăm cây"
          ],
          correct: 1,
          explanation: "Bác so sánh trẻ em như búp non trên cành - non tơ, tràn đầy nhựa sống và cần được yêu thương, chăm sóc nâng niu."
        }
      ]
    }
  ]
};
