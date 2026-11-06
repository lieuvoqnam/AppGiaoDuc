/**
 * vietnamese-4-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Tiếng Việt Lớp 4
 * Chuẩn Chương trình Giáo dục phổ thông (GDPT) 2018
 * (Kết nối tri thức với cuộc sống, Chân trời sáng tạo, Cánh diều)
 */

window.VIETNAMESE4_DATA = {
  topics: [
    {
      id: "tu_loai",
        terms: [1],
      name: "Danh Từ, Động Từ & Tính Từ",
      icon: "🔤",
      desc: "Phân biệt 3 từ loại cốt lõi trong tiếng Việt, quy tắc viết hoa danh từ riêng và mở rộng vốn từ.",
      theory: {
        highlights: [
          {
            icon: "🏷️",
            title: "Danh Từ là gì?",
            content: "• <strong>Khái niệm:</strong> Danh từ là từ chỉ sự vật (người, con vật, đồ vật, cây cối, hiện tượng thiên nhiên, đơn vị, khái niệm...).<br/>• <strong>Danh từ chung:</strong> Tên gọi chung của một loại sự vật (học sinh, con mèo, dòng sông).<br/>• <strong>Danh từ riêng:</strong> Tên riêng của người, địa danh (Bác Hồ, Hà Nội, sông Hồng). <em>Quy tắc: Luôn phải viết hoa chữ cái đầu của mỗi tiếng tạo thành tên riêng đó!</em>"
          },
          {
            icon: "🏃",
            title: "Động Từ là gì?",
            content: "• <strong>Khái niệm:</strong> Động từ là từ chỉ hoạt động, trạng thái của người, động vật hoặc sự vật.<br/>• <strong>Chỉ hoạt động:</strong> chạy, nhảy, đọc, viết, bơi lội, cày cấy...<br/>• <strong>Chỉ trạng thái:</strong> vui, buồn, ngủ, thức, yêu thương, nhớ nhung, bay lượn (trạng thái rơi, lơ lửng)..."
          },
          {
            icon: "🌈",
            title: "Tính Từ là gì?",
            content: "• <strong>Khái niệm:</strong> Tính từ là từ miêu tả đặc điểm hoặc tính chất của sự vật, hoạt động, trạng thái.<br/>• <strong>Chỉ màu sắc:</strong> đỏ thắm, xanh ngắt, vàng rực...<br/>• <strong>Chỉ hình dáng, kích thước:</strong> cao lớn, nhỏ nhắn, tròn xoe, gầy guộc...<br/>• <strong>Chỉ tính nết, phẩm chất:</strong> ngoan ngoãn, chăm chỉ, thật thà, thông minh..."
          },
          {
            icon: "💡",
            title: "Mẹo phân biệt nhanh",
            content: "• Thêm được <em>những, các, một</em> ở phía trước ➔ Thường là <strong>Danh từ</strong> (những bông hoa, các bạn nhỏ).<br/>• Thêm được <em>hãy, đừng, chớ, đang, đã, sẽ</em> ở phía trước ➔ Thường là <strong>Động từ</strong> (đang học, đừng khóc).<br/>• Thêm được <em>rất, quá, lắm</em> ở phía trước hoặc sau ➔ Thường là <strong>Tính từ</strong> (rất đẹp, tốt lắm, quá ngoan)."
          }
        ]
      },
      questions: [
        {
          id: "tl_1",
          level: 1,
          question: "Trong câu: <em>\"Đàn chim én đang chao liệng trên bầu trời xanh thẳm.\"</em>, từ nào là <strong>động từ</strong>?",
          options: ["Đàn chim én", "Chao liệng", "Bầu trời", "Xanh thẳm"],
          correct: 1,
          explanation: "Từ 'chao liệng' chỉ hành động bay lượn liệng cánh của đàn chim trên không trung, do đó là động từ. 'Đàn chim én' và 'bầu trời' là danh từ, 'xanh thẳm' là tính từ."
        },
        {
          id: "tl_2",
          level: 1,
          question: "Dãy từ nào dưới đây gồm toàn các <strong>tính từ</strong> chỉ tính nết, phẩm chất của con người?",
          options: [
            "Chăm chỉ, thật thà, dũng cảm, khiêm tốn",
            "Tròn xoe, đỏ ửng, vuông vắn, xanh biếc",
            "Chạy nhảy, suy nghĩ, yêu thương, hò reo",
            "Bàn ghế, trường lớp, thầy cô, bạn bè"
          ],
          correct: 0,
          explanation: "Chăm chỉ, thật thà, dũng cảm, khiêm tốn đều là tính từ chỉ phẩm chất tốt đẹp của con người. Dãy B chỉ hình dáng, màu sắc; dãy C là động từ; dãy D là danh từ."
        },
        {
          id: "tl_3",
          level: 2,
          question: "Quy tắc viết hoa danh từ riêng nào dưới đây là <strong>đúng</strong> theo quy định chính tả?",
          options: [
            "Võ thị sáu, Sông đà, núi Phan-xi-păng",
            "Võ Thị Sáu, Sông Đà, núi Phan Xi Păng",
            "võ Thị sáu, sông Đà, Núi phan xi păng",
            "Võ Thị Sáu, sông đà, Núi phan Xi Păng"
          ],
          correct: 1,
          explanation: "Khi viết tên người và tên địa lý Việt Nam, cần viết hoa chữ cái đầu của mỗi tiếng tạo thành tên riêng đó (Võ Thị Sáu, Sông Đà, Phan Xi Păng)."
        },
        {
          id: "tl_4",
          level: 2,
          question: "Trong câu: <em>\"Cây gạo sừng sững như một tháp đèn khổng lồ.\"</em>, từ <strong>'khổng lồ'</strong> thuộc từ loại nào?",
          options: ["Danh từ", "Động từ", "Tính từ", "Đại từ"],
          correct: 2,
          explanation: "'Khổng lồ' là tính từ chỉ đặc điểm kích thước vô cùng to lớn của tháp đèn."
        },
        {
          id: "tl_5",
          level: 3,
          question: "Từ <strong>'niềm vui'</strong> trong câu <em>\"Niềm vui ánh lên trong mắt mẹ.\"</em> thuộc từ loại nào?",
          options: [
            "Động từ (vì vui là trạng thái)",
            "Tính từ (vì chỉ cảm xúc vui vẻ)",
            "Danh từ trừu tượng (chỉ khái niệm)",
            "Phó từ bổ nghĩa"
          ],
          correct: 2,
          explanation: "Khi kết hợp từ 'niềm', 'nỗi', 'sự', 'cơn' đứng trước một động từ/tính từ (niềm vui, nỗi buồn, sự kiên trì), ta thu được một Danh từ trừu tượng."
        },
        {
          id: "tl_6",
          level: 3,
          question: "Xác định từ loại của từ gạch chân trong hai câu sau:<br/>(1) Chúng em rất quý mến sự <u>thật thà</u> của Nam.<br/>(2) Nam là một bạn học sinh rất <u>thật thà</u>.",
          options: [
            "(1) là tính từ, (2) là danh từ",
            "(1) là danh từ, (2) là tính từ",
            "Cả hai câu đều là tính từ",
            "Cả hai câu đều là động từ"
          ],
          correct: 1,
          explanation: "Ở câu (1), từ 'thật thà' đi sau từ 'sự' nên đã chuyển hóa thành danh từ trừu tượng. Ở câu (2), 'thật thà' đi sau 'rất' miêu tả phẩm chất tính nết của Nam nên là tính từ."
        },
        {
          id: "tl_7",
          level: 4,
          question: "Trong các nhóm từ sau, nhóm nào có từ <strong>in đậm</strong> KHÔNG CÙNG từ loại với các từ còn lại?",
          options: [
            "Ước mơ, hy vọng, <strong>suy nghĩ</strong>, niềm tin",
            "Tập đọc, đá bóng, <strong>học sinh</strong>, chạy nhảy",
            "Thông minh, cần cù, dũng cảm, <strong>chăm chỉ</strong>",
            "Sách vở, bút chì, thước kẻ, <strong>cặp sách</strong>"
          ],
          correct: 1,
          explanation: "Trong nhóm B: 'Tập đọc', 'đá bóng', 'chạy nhảy' là các động từ chỉ hoạt động, trong khi 'học sinh' là danh từ chỉ người."
        },
        {
          id: "tl_8",
          level: 4,
          question: "Đọc đoạn văn sau: <em>\"Mùa xuân, cây gạo trút hết những chiếc lá già nua, trơ lại những cành khẳng khiu mang đầy những nụ hoa chúm chím.\"</em> Có bao nhiêu <strong>tính từ</strong> trong câu trên?",
          options: [
            "2 tính từ",
            "3 tính từ (già nua, khẳng khiu, chúm chím)",
            "4 tính từ (già nua, trơ, khẳng khiu, chúm chím)",
            "5 tính từ"
          ],
          correct: 1,
          explanation: "Các tính từ trong câu là: 'già nua' (chỉ đặc điểm chiếc lá), 'khẳng khiu' (chỉ hình dáng cành cây), 'chúm chím' (chỉ hình dáng nụ hoa đang hé)."
        },
        {
          id: "vn4_1_9",
          level: 1,
          question: "Từ nào sau đây là Danh từ chỉ hiện tượng thiên nhiên?",
          options: ["Cơn mưa", "Chảy róc rách", "Xanh mướt", "Bay lượn"],
          correct: 0,
          explanation: "'Cơn mưa' là danh từ chỉ hiện tượng tự nhiên. 'Chảy, bay' là động từ, 'xanh mướt' là tính từ."
        },
        {
          id: "vn4_1_10",
          level: 2,
          question: "Dãy từ nào sau đây gồm toàn các Động từ chỉ hoạt động của con người?",
          options: ["Viết, đọc, chạy, nhảy, múa", "Vở, bút, sách, cặp", "Chăm chỉ, cần cù, thật thà", "Ngôi nhà, dòng sông, ngọn núi"],
          correct: 0,
          explanation: "Viết, đọc, chạy, nhảy, múa đều là động từ chỉ hành động vận động của con người."
        },
        {
          id: "vn4_1_11",
          level: 2,
          question: "Trong câu: 'Những đóa hoa sen hồng tỏa hương thơm ngát.', từ 'thơm ngát' thuộc từ loại nào?",
          options: ["Tính từ", "Động từ", "Danh từ", "Đại từ"],
          correct: 0,
          explanation: "'Thơm ngát' là tính từ chỉ đặc điểm mùi hương dịu ngọt lan tỏa của hoa sen."
        },
        {
          id: "vn4_1_12",
          level: 3,
          question: "Tìm danh từ riêng trong câu văn sau: 'Bác Hồ kính yêu đã đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình.'",
          options: ["Bác Hồ, Quảng trường Ba Đình", "Tuyên ngôn", "Đọc", "Kính yêu"],
          correct: 0,
          explanation: "'Bác Hồ' và 'Quảng trường Ba Đình' là danh từ riêng chỉ người và địa danh cụ thể, phải viết hoa chữ cái đầu mỗi tiếng."
        },
        {
          id: "vn4_1_13",
          level: 3,
          question: "Từ 'niềm vui' trong câu: 'Thầy cô mang lại niềm vui cho chúng em.' thuộc từ loại nào?",
          options: ["Danh từ trừu tượng", "Động từ", "Tính từ", "Số từ"],
          correct: 0,
          explanation: "Khi thêm 'niềm, nỗi, sự, cuộc' vào trước động từ/tính từ, ta được danh từ trừu tượng (niềm vui, nỗi buồn, sự kiên trì)."
        },
        {
          id: "vn4_1_14",
          level: 4,
          question: "Xác định từ loại của từ 'ước mơ' trong hai câu sau:
(1) Em ước mơ trở thành phi công.
(2) Ước mơ của em là trở thành bác sĩ.",
          options: ["Câu (1) là động từ; Câu (2) là danh từ", "Cả hai câu đều là động từ", "Cả hai câu đều là danh từ", "Câu (1) là tính từ; Câu (2) là động từ"],
          correct: 0,
          explanation: "Trong câu (1), 'ước mơ' là vị ngữ chỉ hành động ➔ Động từ. Trong câu (2), 'ước mơ' làm chủ ngữ ➔ Danh từ."
        }
      ]
    },
    {
      id: "luyen_tu_va_cau",
        terms: [1],
      name: "Biện Pháp Tu Từ & Dấu Câu",
      icon: "✨",
      desc: "Nắm vững biện pháp So sánh, Nhân hóa và tác dụng của Dấu gạch ngang, Dấu hai chấm, Dấu ngoặc kép.",
      theory: {
        highlights: [
          {
            icon: "🔍",
            title: "Biện pháp So Sánh",
            content: "• <strong>Cấu tạo:</strong> Sự vật A + Từ so sánh (như, là, tựa như, giống như, chẳng bằng...) + Sự vật B.<br/>• <strong>Ví dụ:</strong> <em>\"Mặt trời như một quả cầu lửa đỏ rực rỡ.\"</em><br/>• <strong>Tác dụng:</strong> Giúp hình ảnh trở nên sinh động, cụ thể, gợi cảm và dễ hình dung hơn."
          },
          {
            icon: "🧚",
            title: "Biện pháp Nhân Hóa",
            content: "• Gán cho đồ vật, con vật, cây cối những đặc điểm, cảm xúc, hành động của con người.<br/>• <strong>3 cách nhân hóa thường gặp:</strong><br/>1. Gọi vật bằng từ dùng để gọi người (Bác Cú Mèo, Chị Ong Nâu, Chú Cuội).<br/>2. Tả vật bằng từ ngữ tả người (Bác bàng trầm ngâm suy nghĩ, Chị gió xì xào ca hát).<br/>3. Nói chuyện, xưng hô với vật như với con người (Khế ơi, có nghe tiếng gió không?)."
          },
          {
            icon: "➖",
            title: "Tác dụng của Dấu Gạch Ngang",
            content: "• Đánh dấu chỗ bắt đầu lời nói của nhân vật trong đối thoại.<br/>• Đánh dấu phần chú thích, giải thích thêm trong câu.<br/>• Đánh dấu các ý trong một đoạn liệt kê."
          },
          {
            icon: "💬",
            title: "Dấu Hai Chấm & Dấu Ngoặc Kép",
            content: "• <strong>Dấu hai chấm (:):</strong> Báo hiệu lời nói trực tiếp (thường đi kèm dấu ngoặc kép hoặc gạch đầu dòng) hoặc báo hiệu phần giải thích, thuyết minh.<br/>• <strong>Dấu ngoặc kép (\" \"):</strong> Dùng để đánh dấu lời dẫn trực tiếp, hoặc đánh dấu từ ngữ được dùng với ý nghĩa đặc biệt."
          }
        ]
      },
      questions: [
        {
          id: "ltc_1",
          level: 1,
          question: "Trong câu: <em>\"Trăng tròn như cái mâm bạc lơ lửng giữa trời.\"</em>, tác giả đã sử dụng biện pháp tu từ nào?",
          options: ["Nhân hóa", "So sánh", "Điệp từ", "Đảo ngữ"],
          correct: 1,
          explanation: "Câu văn so sánh 'Trăng tròn' (sự vật A) với 'cái mâm bạc' (sự vật B) qua từ so sánh 'như'."
        },
        {
          id: "ltc_2",
          level: 1,
          question: "Dấu gạch ngang trong câu: <em>\"Hà Nội - thủ đô ngàn năm văn hiến - là trái tim của cả nước.\"</em> có tác dụng gì?",
          options: [
            "Đánh dấu lời đối thoại của nhân vật",
            "Đánh dấu bộ phận chú thích, giải thích trong câu",
            "Đánh dấu các ý liệt kê",
            "Đánh dấu từ ngữ mượn tiếng nước ngoài"
          ],
          correct: 1,
          explanation: "Cụm 'thủ đô ngàn năm văn hiến' được đặt giữa hai dấu gạch ngang nhằm chú thích và làm rõ ý nghĩa cho danh từ riêng Hà Nội."
        },
        {
          id: "ltc_3",
          level: 2,
          question: "Câu thơ nào dưới đây sử dụng biện pháp <strong>nhân hóa</strong>?",
          options: [
            "Đồng lúa chín vàng rực một góc trời.",
            "Bác kim giờ thận trọng nhích từng bước một.",
            "Dòng sông uốn lượn như dải lụa mềm vắt qua cánh đồng.",
            "Mặt trời tròn xoe như chiếc mâm đồng đỏ ối."
          ],
          correct: 1,
          explanation: "Tác giả gọi kim giờ là 'Bác' và gán cho nó hành động 'thận trọng nhích từng bước một' như con người, đó chính là biện pháp nhân hóa."
        },
        {
          id: "ltc_4",
          level: 2,
          question: "Cần điền dấu câu nào vào ô trống trong câu sau: <em>Bác Hồ từng căn dặn các cháu thiếu nhi [ ] \"Non sông Việt Nam có trở nên tươi đẹp hay không... chính là nhờ một phần lớn ở công học tập của các em.\"</em>",
          options: ["Dấu chấm phẩy (;)", "Dấu hai chấm (:)", "Dấu phẩy (,)", "Dấu chấm (.)"],
          correct: 1,
          explanation: "Dấu hai chấm (:) đứng trước dấu ngoặc kép để dẫn lại nguyên văn lời căn dặn của Bác Hồ."
        },
        {
          id: "ltc_5",
          level: 3,
          question: "Biện pháp nhân hóa trong câu: <em>\"Chị gió tung tăng bay qua cánh đồng, khẽ thì thầm đánh thức những mầm non thức giấc.\"</em> đem lại tác dụng gì?",
          options: [
            "Làm cho hình ảnh ngọn gió và mầm non trở nên có hồn, gần gũi và giàu sức sống như con người",
            "Làm cho câu văn trở nên khó hiểu hơn",
            "Chỉ ra chính xác tốc độ thổi của gió",
            "Giải thích hiện tượng thời tiết bão lũ"
          ],
          correct: 0,
          explanation: "Biện pháp nhân hóa giúp ngọn gió biến thành 'chị gió tung tăng thì thầm', mầm non biết 'thức giấc', tạo nên bức tranh thiên nhiên sinh động, đáng yêu và đầy sức sống."
        },
        {
          id: "ltc_6",
          level: 3,
          question: "Dấu ngoặc kép trong câu sau dùng với tác dụng gì?<br/><em>\"Người ta thường gọi cậu bé Nam là một 'nhà thông thái tí hon' của lớp 4A.\"</em>",
          options: [
            "Đánh dấu lời nói trực tiếp của nhân vật",
            "Đánh dấu từ ngữ được dùng với ý nghĩa đặc biệt (khen ngợi sự hiểu biết rộng của bạn Nam)",
            "Đánh dấu tên của một cuốn sách",
            "Đánh dấu câu hỏi cần giải đáp"
          ],
          correct: 1,
          explanation: "Cụm 'nhà thông thái tí hon' được đặt trong ngoặc kép nhằm thể hiện nghĩa biểu cảm đặc biệt: khen ngợi bạn Nam rất am hiểu kiến thức dù còn nhỏ tuổi."
        },
        {
          id: "ltc_7",
          level: 4,
          question: "Trong khổ thơ sau của nhà thơ Trần Đăng Khoa:<br/><em>\"Mưa rơi tí tách<br/>Hạt trước hạt sau<br/>Không xô đẩy nhau<br/>Xếp hàng lần lượt...\"</em><br/>Tác giả đã khéo léo dùng biện pháp nghệ thuật gì để ca ngợi điều gì?",
          options: [
            "Chỉ dùng so sánh để tả hạt mưa to nhỏ",
            "Dùng nhân hóa (không xô đẩy, xếp hàng lần lượt) để biến hạt mưa như những bạn nhỏ trật tự, ngoan ngoãn",
            "Dùng điệp từ để tạo âm vang lớn",
            "Dùng biện pháp nói quá để miêu tả mưa bão dữ dội"
          ],
          correct: 1,
          explanation: "Tác giả nhân hóa những hạt mưa rơi nối tiếp nhau như các em học sinh có ý thức kỷ luật, xếp hàng trật tự không xô đẩy nhau."
        },
        {
          id: "ltc_8",
          level: 4,
          question: "Đoạn văn nào dưới đây kết hợp nhuần nhuyễn cả <strong>so sánh</strong> và <strong>nhân hóa</strong>?",
          options: [
            "Mặt biển buổi sớm lặng như tờ, không một gợn sóng nhỏ.",
            "Cây đa cổ thụ như người lính gác khổng lồ, dang rộng cánh tay lực lưỡng che chở cho đàn chim non ríu rít.",
            "Các em học sinh chăm chú lắng nghe cô giáo giảng bài mới.",
            "Mùa hè đến mang theo những tiếng ve râm ran và những chùm phượng vĩ đỏ rực."
          ],
          correct: 1,
          explanation: "Câu B có so sánh ('như người lính gác khổng lồ') và nhân hóa ('dang rộng cánh tay lực lưỡng che chở cho đàn chim')."
        },
        {
          id: "vn4_2_9",
          level: 1,
          question: "Từ so sánh trong câu thơ: 'Mặt trời đỏ rực như quả cầu lửa' là từ nào?",
          options: ["như", "đỏ rực", "mặt trời", "quả cầu"],
          correct: 0,
          explanation: "'như' là từ nối chỉ quan hệ so sánh ngang bằng giữa hai sự vật."
        },
        {
          id: "vn4_2_10",
          level: 2,
          question: "Câu thơ nào sau đây sử dụng biện pháp nghệ thuật Nhân hóa?",
          options: ["Bác kim giờ thận trọng / Nhích từng bước, từng bước", "Mặt trăng tròn như chiếc đĩa bạc", "Dòng sông dài chảy ra biển cả", "Cánh đồng lúa chín vàng ươm"],
          correct: 0,
          explanation: "Chiếc kim giờ vô tri được gọi là 'Bác' và có hành động 'thận trọng, nhích từng bước' như con người ➔ Biện pháp nhân hóa."
        },
        {
          id: "vn4_2_11",
          level: 2,
          question: "Trong câu: 'Những đám mây trắng xốp dạo chơi trên bầu trời xanh thẳm', tác giả nhân hóa đám mây bằng cách nào?",
          options: ["Dùng từ ngữ tả hoạt động của con người ('dạo chơi')", "Gọi mây bằng đại từ xưng hô", "Trò chuyện trực tiếp với mây", "So sánh mây với đàn cừu"],
          correct: 0,
          explanation: "'Dạo chơi' là hành động của con người được gán cho đám mây ➔ Nhân hóa sinh động."
        },
        {
          id: "vn4_2_12",
          level: 3,
          question: "Dấu ngoặc kép trong câu sau có tác dụng gì: 'Bác Hồ từng căn dặn thiếu nhi: "Non sông Việt Nam có trở nên tươi đẹp hay không... chính là nhờ một phần lớn ở công học tập của các em." '",
          options: ["Dẫn lời nói trực tiếp của Bác Hồ", "Đánh dấu từ ngữ được dùng với ý nghĩa mỉa mai", "Đánh dấu tên một tác phẩm", "Tách các thành phần liệt kê"],
          correct: 0,
          explanation: "Dấu ngoặc kép dùng để dẫn nguyên văn lời căn dặn thiêng liêng của Chủ tịch Hồ Chí Minh."
        },
        {
          id: "vn4_2_13",
          level: 3,
          question: "Dấu hai chấm trong câu sau có tác dụng gì: 'Vườn nhà bà em trồng rất nhiều loại hoa đẹp: hoa hồng, hoa cúc, hoa huệ và hoa mẫu đơn.'",
          options: ["Báo hiệu phần liệt kê các loại hoa chi tiết phía sau", "Báo hiệu lời thoại của bà", "Kết thúc câu kể", "Dùng để hỏi"],
          correct: 0,
          explanation: "Dấu hai chấm dùng để báo hiệu phần liệt kê cụ thể các sự vật giải thích cho bộ phận đứng trước."
        },
        {
          id: "vn4_2_14",
          level: 4,
          question: "Xác định Chủ ngữ của câu sau: 'Dưới ánh trăng rằm vằng vặc, những chú đom đóm thắp đèn bay lập lòe.'",
          options: ["những chú đom đóm", "Dưới ánh trăng rằm vằng vặc", "thắp đèn bay lập lòe", "ánh trăng rằm"],
          correct: 0,
          explanation: "'Dưới ánh trăng rằm vằng vặc' là trạng ngữ chỉ nơi chốn/hoàn cảnh. Ai thắp đèn? ➔ 'những chú đom đóm' là Chủ ngữ."
        }
      ]
    },
    {
      id: "doc_hieu_cam_thu",
        terms: [1, 2],
      name: "Đọc Hiểu Văn Bản & Cảm Thụ Văn Học",
      icon: "📚",
      desc: "Rèn luyện kỹ năng đọc hiểu văn bản, nắm bắt ý chính, tìm chi tiết nghệ thuật và bài học nhân văn sâu sắc.",
      theory: {
        highlights: [
          {
            icon: "📖",
            title: "Kỹ năng Đọc hiểu văn bản",
            content: "• <strong>Bước 1:</strong> Đọc lướt toàn bài để nắm chủ đề chính của câu chuyện hoặc bài thơ.<br/>• <strong>Bước 2:</strong> Gạch chân dưới các từ khóa quan trọng (nhân vật, sự việc mở đầu, diễn biến, cao trào, kết thúc).<br/>• <strong>Bước 3:</strong> Đọc kỹ từng câu hỏi, đối chiếu lại đoạn văn chứa thông tin để chọn đáp án chuẩn xác nhất."
          },
          {
            icon: "🌾",
            title: "Trích đoạn tác phẩm tiêu biểu",
            content: "• <em>Dế Mèn bênh vực kẻ yếu</em> (Tô Hoài): Tinh thần nghĩa hiệp, bảo vệ người yếu đuối trước cường quyền bất công.<br/>• <em>Tre Việt Nam</em> (Nguyễn Duy): Tượng trưng cho phẩm chất kiên cường, bất khuất, đùm bọc, ngay thẳng của con người Việt Nam.<br/>• <em>Tuổi Ngựa</em> (Xuân Quỳnh): Khát vọng tự do, khám phá bốn phương nhưng luôn luôn hướng về mẹ hiền yêu quý."
          },
          {
            icon: "💖",
            title: "Cảm thụ bài học cuộc sống",
            content: "Mỗi câu chuyện trong chương trình lớp 4 đều gửi gắm thông điệp nhân văn: lòng hiếu thảo, tinh thần đoàn kết, ý chí vượt khó và tình yêu thiên nhiên, quê hương đất nước."
          }
        ]
      },
      questions: [
        {
          id: "dh_1",
          level: 1,
          question: "Trong tác phẩm <em>\"Dế Mèn phiêu lưu ký\"</em> (trích đoạn Dế Mèn bênh vực kẻ yếu), Dế Mèn đã ra tay giúp đỡ nhân vật nào?",
          options: ["Chị Nhà Trò", "Dế Choắt", "Bọ Ngựa", "Xiến Tóc"],
          correct: 0,
          explanation: "Dế Mèn đã ra tay nghĩa hiệp giúp đỡ chị Nhà Trò yếu ớt đang bị bọn nhện ức hiếp, đòi nợ."
        },
        {
          id: "dh_2",
          level: 1,
          question: "Trong bài thơ <em>\"Tre Việt Nam\"</em>, cây tre tượng trưng cho những phẩm chất cao đẹp nào của dân tộc Việt Nam?",
          options: [
            "Giàu sang, lộng lẫy và kiêu hãnh",
            "Cần cù, bất khuất, ngay thẳng và yêu thương đùm bọc nhau",
            "Mềm yếu, dễ gãy đổ trước gió bão",
            "Trầm tư, khép kín và xa lánh mọi người"
          ],
          correct: 1,
          explanation: "Hình ảnh cây tre xanh mọc thành lũy tượng trưng cho đức tính cần cù, kiên cường, thẳng thắn và tinh thần đoàn kết keo sơn của người Việt."
        },
        {
          id: "dh_3",
          level: 2,
          question: "Đọc câu thơ sau trong bài <em>\"Hạt gạo làng ta\"</em> của Trần Đăng Khoa:<br/><em>\"Hạt gạo làng ta<br/>Có vị phù sa<br/>Của sông Kinh Thầy<br/>Có hương sen thơm<br/>Trong hồ nước đầy...\"</em><br/>Khổ thơ trên muốn ca ngợi điều gì?",
          options: [
            "Hạt gạo kết tinh từ những hương vị tinh túy của thiên nhiên và đất trời quê hương",
            "Giá trị kinh tế cao của việc xuất khẩu gạo",
            "Vẻ đẹp của hoa sen trong hồ nước",
            "Tốc độ chảy xiết của dòng sông Kinh Thầy"
          ],
          correct: 0,
          explanation: "Nhà thơ nhấn mạnh hạt gạo dẻo thơm không chỉ được nuôi dưỡng bởi phù sa màu mỡ và hương sen thanh khiết, mà còn là giọt ngọc trời ban cho đất mẹ."
        },
        {
          id: "dh_4",
          level: 2,
          question: "Chi tiết Dế Mèn xoè cả hai càng ra, bảo chị Nhà Trò: <em>\"Em đừng sợ. Hãy trở về cùng với tôi đây. Đứa độc ác không thể cậy khỏe bắt nạt kẻ yếu được.\"</em> thể hiện tính cách gì của Dế Mèn?",
          options: [
            "Hung hăng, thích đánh nhau",
            "Kiêu căng, coi thường người khác",
            "Nghĩa hiệp, dũng cảm, ghét sự bất công",
            "Nhút nhát, e dè trước thử thách"
          ],
          correct: 2,
          explanation: "Lời nói và hành động dứt khoát của Dế Mèn thể hiện tinh thần trượng nghĩa, bảo vệ người yếu thế bị ức hiếp."
        },
        {
          id: "dh_5",
          level: 3,
          question: "Trong bài thơ <em>\"Tuổi Ngựa\"</em> của Xuân Quỳnh, dù chú ngựa con có đi khắp muôn phương (ngọn gió, rừng đại ngàn, triền núi tuyết), cuối cùng chú ngựa vẫn nhớ điều gì nhất?",
          options: [
            "Nhớ những cánh đồng cỏ xanh mát",
            "Nhớ ngọn gió thổi vi vu trên đồi",
            "Nhớ đường về với mẹ hiền",
            "Nhớ tiếng hót của những chú chim rừng"
          ],
          correct: 2,
          explanation: "Bài thơ gửi gắm thông điệp sâu sắc: dù tuổi trẻ có bay nhảy bốn phương, bến đỗ bình yên và ấm áp nhất vẫn luôn là người mẹ kính yêu."
        },
        {
          id: "dh_6",
          level: 3,
          question: "Câu ca dao: <em>\"Bầu ơi thương lấy bí cùng / Tuy rằng khác giống nhưng chung một giàn\"</em> khuyên chúng ta điều gì trong cuộc sống?",
          options: [
            "Phải biết chăm sóc cây cảnh trong vườn",
            "Đoàn kết, yêu thương, đùm bọc đồng bào dù khác biệt về hoàn cảnh",
            "Nên trồng nhiều loại cây trên cùng một giàn leo",
            "Tránh xa những người không cùng sở thích"
          ],
          correct: 1,
          explanation: "Câu ca dao dùng hình ảnh ẩn dụ giàn bầu bí để răn dạy con người phải biết đoàn kết, sẻ chia và giúp đỡ lẫn nhau trong hoạn nạn."
        },
        {
          id: "dh_7",
          level: 4,
          question: "Đọc đoạn văn sau: <em>\"Hoa sầu đâu không lộng lẫy kiêu sa như hoa hồng, nhưng khi gió thoảng qua, mùi hương thoang thoảng dịu ngọt lan tỏa khắp vườn, gợi nhớ khôn nguôi hương vị bình dị của chốn thôn quê.\"</em><br/>Nghệ thuật tương phản giữa hoa hồng và hoa sầu đâu làm nổi bật điều gì?",
          options: [
            "Chê bai hoa hồng không có hương thơm",
            "Làm nổi bật nét đẹp mộc mạc, hương thơm thanh khiết gắn liền với hồn quê của hoa sầu đâu",
            "Khẳng định hoa hồng khó trồng hơn hoa sầu đâu",
            "Kêu gọi mọi người nên nhổ bỏ hoa hồng để trồng hoa sầu đâu"
          ],
          correct: 1,
          explanation: "Biện pháp tương phản làm nổi bật vẻ đẹp kín đáo, giản dị nhưng thấm đượm tình quê của hoa sầu đâu."
        },
        {
          id: "dh_8",
          level: 4,
          question: "Qua câu chuyện <em>\"Ba lưỡi rìu\"</em>, bài học đạo đức cao quý nhất mà người tiều phu nghèo để lại cho chúng ta là gì?",
          options: [
            "Cần phải học cách bơi lội giỏi để lặn tìm đồ rơi",
            "Lòng trung thực, không tham lam của cải không thuộc về mình sẽ luôn được đền đáp xứng đáng",
            "Nên chọn lưỡi rìu bằng vàng để bán lấy tiền",
            "Không nên đi đốn củi gần bờ sông sâu"
          ],
          correct: 1,
          explanation: "Chàng tiều phu không nhận lưỡi rìu vàng bạc lấp lánh mà chỉ nhận đúng chiếc rìu sắt của mình, ca ngợi đức tính trung thực, liêm khiết."
        },
        {
          id: "vn4_3_9",
          level: 1,
          question: "Câu tục ngữ 'Uống nước nhớ nguồn' khuyên dạy chúng ta phẩm chất đạo đức gì?",
          options: ["Lòng biết ơn sâu sắc", "Tinh thần dũng cảm", "Tính cẩn thận", "Tính kiên nhẫn"],
          correct: 0,
          explanation: "Câu tục ngữ nhắc nhở chúng ta luôn ghi nhớ, tri ân công ơn của người đã đem lại thành quả, hạnh phúc cho mình."
        },
        {
          id: "vn4_3_10",
          level: 2,
          question: "Trong bài thơ 'Mẹ vắng nhà ngày bão', tình cảm của hai bạn nhỏ dành cho mẹ được thể hiện qua hành động nào?",
          options: ["Tự giác làm việc nhà, chăm đàn lợn và luôn mong ngóng mẹ trở về", "Ngồi chơi điện tử cả ngày", "Khóc nhè và không chịu ăn cơm", "Chạy ra ngoài chơi dưới trời mưa bão"],
          correct: 0,
          explanation: "Các bạn nhỏ thấu hiểu nỗi vất vả của mẹ nên đã ngoan ngoãn chia sẻ công việc nhà và yêu thương mẹ tha thiết."
        },
        {
          id: "vn4_3_11",
          level: 2,
          question: "Hình ảnh 'hạt gạo làng ta' được tác giả Trần Đăng Khoa miêu tả có những hương vị và công sức nào đọng lại?",
          options: ["Có vị phù sa sông Kinh Thầy, có hương sen thơm ngát và bao giọt mồ hôi cay đắng của mẹ cha", "Chỉ là hạt tinh bột thông thường", "Vị đắng của thuốc sâu", "Hương thơm của bánh kẹo hiện đại"],
          correct: 0,
          explanation: "Hạt gạo quý báu kết tinh tinh hoa của trời đất phù sa cùng nỗi vất vả 'một nắng hai sương' của người nông dân."
        },
        {
          id: "vn4_3_12",
          level: 3,
          question: "Chi tiết người em trong truyện cổ tích 'Cây khế' chỉ may túi ba gang đúng lời chim dặn thể hiện phẩm chất gì?",
          options: ["Tính tình thật thà, chất phác và không tham lam", "Sự ngốc nghếch thiếu tính toán", "Sự lười biếng không muốn khâu túi to", "Sự sợ hãi chim đại bàng"],
          correct: 0,
          explanation: "Túi ba gang tượng trưng cho sự biết đủ, tấm lòng chân thật, không tham lam của người em nhân hậu."
        },
        {
          id: "vn4_3_13",
          level: 3,
          question: "Bài học nhân văn sâu sắc nhất rút ra từ truyện cổ tích 'Bút thần' của Mã Lương là gì?",
          options: ["Tài năng chỉ thực sự có ý nghĩa khi phục vụ cho nhân dân lao động nghèo khổ và bảo vệ lẽ phải", "Cứ có bút vẽ đẹp là trở thành trạng nguyên", "Vẽ thuyền ra biển để chôn vùi kẻ thù", "Không nên học vẽ tranh phong cảnh"],
          correct: 0,
          explanation: "Mã Lương chỉ dùng bút thần giúp đỡ dân nghèo (cày cuốc, tưới tiêu) và kiên quyết trừng phạt bọn quan lại tham tàn độc ác."
        },
        {
          id: "vn4_3_14",
          level: 4,
          question: "Muốn đọc hiểu tốt và cảm thụ sâu sắc một văn bản nghệ thuật, em cần rèn luyện phương pháp đọc nào?",
          options: ["Đọc kĩ từng câu chữ, rung cảm trước hình ảnh đẹp, suy ngẫm thông điệp tác giả gửi gắm và liên hệ bài học bản thân", "Đọc lướt thật nhanh để lấy điểm số", "Chỉ đọc câu đầu và câu cuối bài", "Nhờ người khác đọc hộ"],
          correct: 0,
          explanation: "Đọc sâu, kết nối cảm xúc và suy ngẫm ý nghĩa nhân sinh là chìa khóa cảm thụ văn học đích thực."
        }
      ]
    },
    {
      id: "tap_lam_van",
        terms: [2],
      name: "Tập Làm Văn Miêu Tả",
      icon: "✍️",
      desc: "Nắm vững bố cục 3 phần của bài văn miêu tả cây cối, con vật, đồ vật; kỹ năng mở bài gián tiếp và kết bài mở rộng.",
      theory: {
        highlights: [
          {
            icon: "📐",
            title: "Bố cục bài văn Miêu tả",
            content: "• <strong>1. Mở bài:</strong> Giới thiệu sự vật sẽ miêu tả (con vật, cây cối, đồ vật yêu thích).<br/>• <strong>2. Thân bài:</strong><br/>- Tả bao quát (hình dáng, màu sắc, kích thước chung).<br/>- Tả chi tiết từng bộ phận hoặc tả theo từng thời kỳ sinh trưởng.<br/>- Tả hoạt động, thói quen sinh hoạt hoặc kỷ niệm gắn bó.<br/>• <strong>3. Kết bài:</strong> Nêu tình cảm, cảm xúc hoặc sự chăm sóc, bảo vệ sự vật đó."
          },
          {
            icon: "🚪",
            title: "Mở bài Trực tiếp & Gián tiếp",
            content: "• <strong>Mở bài trực tiếp:</strong> Giới thiệu ngay vào sự vật định tả.<br/><em>Ví dụ: Trước sân nhà em có trồng một cây hoa hồng rất đẹp.</em><br/>• <strong>Mở bài gián tiếp:</strong> Nói về chuyện khác (thời tiết, kỉ niệm, bài thơ, mùa trong năm...) rồi mới dẫn dắt vào sự vật định tả.<br/><em>Ví dụ: Mỗi độ xuân về, trăm hoa trong vườn đua nhau khoe sắc. Nhưng trong muôn ngàn đóa hoa rực rỡ ấy, em yêu thích nhất là khóm hoa hồng nhung trước hiên nhà.</em>"
          },
          {
            icon: "🎯",
            title: "Kết bài Không mở rộng & Mở rộng",
            content: "• <strong>Không mở rộng:</strong> Chỉ nêu ngắn gọn tình cảm đối với sự vật.<br/>• <strong>Mở rộng:</strong> Nêu tình cảm, gắn với lời khuyên bảo vệ môi trường, liên hệ mở rộng đến công ơn người chăm sóc hoặc bài học cho bản thân."
          }
        ]
      },
      questions: [
        {
          id: "tlv_1",
          level: 1,
          question: "Bài văn miêu tả gồm có mấy phần chính?",
          options: [
            "2 phần (Mở bài, Thân bài)",
            "3 phần (Mở bài, Thân bài, Kết bài)",
            "4 phần (Mở bài, Miêu tả bao quát, Chi tiết, Kết bài)",
            "5 phần"
          ],
          correct: 1,
          explanation: "Một bài văn hoàn chỉnh luôn có bố cục 3 phần: Mở bài, Thân bài và Kết bài."
        },
        {
          id: "tlv_2",
          level: 1,
          question: "Đoạn văn sau thuộc phần nào của bài văn tả con mèo?<br/><em>\"Mỗi khi đi học về, chú mèo Miu lại chạy ùa ra cửa, cọ chiếc đầu nhỏ vào chân em rồi kêu 'meo meo' như muốn làm nũng.\"</em>",
          options: [
            "Mở bài",
            "Thân bài (tả thói quen, hoạt động của con vật)",
            "Kết bài",
            "Đoạn văn kết bài mở rộng"
          ],
          correct: 1,
          explanation: "Đoạn văn trên miêu tả thói quen mừng rỡ và cử chỉ âu yếm của chú mèo khi chủ về nhà, thuộc phần Thân bài."
        },
        {
          id: "tlv_3",
          level: 2,
          question: "Đoạn mở bài nào dưới đây là <strong>mở bài gián tiếp</strong> cho bài văn tả cây bàng trường em?",
          options: [
            "Sân trường em có trồng một cây bàng rất to.",
            "Em rất thích cây bàng ở góc sân trường.",
            "Trường em có biết bao nhiêu kỷ niệm tuổi thơ với thầy cô, bạn bè. Nhưng thân thương và gần gũi nhất trong những giờ ra chơi râm mát chính là bác bàng già đứng sừng sững giữa sân trường.",
            "Cây bàng trường em lá xanh mơn mởn vào mùa xuân."
          ],
          correct: 2,
          explanation: "Đoạn C không giới thiệu thẳng vào cây bàng mà nhắc tới kỷ niệm sân trường tuổi thơ trước rồi mới khéo léo dẫn vào đối tượng miêu tả, đó là mở bài gián tiếp."
        },
        {
          id: "tlv_4",
          level: 2,
          question: "Khi miêu tả đồ vật (ví dụ: chiếc cặp sách), trình tự miêu tả nào là <strong>hợp lý và khoa học nhất</strong>?",
          options: [
            "Tả ngăn bên trong ➔ Tả tình cảm ➔ Tả chất liệu ➔ Tả quai đeo",
            "Tả bao quát (hình dáng, màu sắc, kích thước) ➔ Tả chi tiết từng bộ phận (nắp cặp, quai đeo, khóa bấm, các ngăn bên trong) ➔ Tả công dụng và cách giữ gìn",
            "Tả khóa bấm trước tiên rồi đến giá tiền mua cặp",
            "Tả chiếc cặp của bạn khác rồi so sánh với cặp của mình"
          ],
          correct: 1,
          explanation: "Trình tự tả bao quát rồi đi sâu vào chi tiết các bộ phận, cuối cùng nêu công dụng và tình cảm là trình tự miêu tả tự nhiên và mạch lạc nhất."
        },
        {
          id: "tlv_5",
          level: 3,
          question: "Đoạn kết bài nào dưới đây là <strong>kết bài mở rộng</strong> cho bài văn tả cây hoa phượng vĩ?",
          options: [
            "Em rất yêu cây hoa phượng trường em.",
            "Cây phượng vĩ nở hoa rất đẹp khi mùa hè sang.",
            "Ngắm nhìn những chùm hoa phượng rực rỡ như đốm lửa bập bùng, lòng em xốn xang nhớ về những ngày hè đầy ắp kỷ niệm. Em tự nhủ sẽ luôn chăm sóc, tưới nước cho cây để mai này khi rời xa mái trường thân yêu, hình bóng hoa phượng vẫn mãi in đậm trong tâm trí em.",
            "Mai sau lớn lên em sẽ không quên cây phượng."
          ],
          correct: 2,
          explanation: "Đoạn C bày tỏ cảm xúc sâu lắng, liên tưởng đến tương lai và nêu ý thức chăm sóc cây, đó là đặc trưng của kết bài mở rộng."
        },
        {
          id: "tlv_6",
          level: 3,
          question: "Từ ngữ nào dưới đây KHÔNG PHÙ HỢP khi miêu tả đôi mắt của chú chó con?",
          options: [
            "Đen láy và ươn ướt",
            "Tròn xoe như hai hòn bi ve",
            "Lấp lánh, tinh ranh và lanh lợi",
            "Vuông vức, xám xịt và khô cứng"
          ],
          correct: 3,
          explanation: "Đôi mắt con vật không thể 'vuông vức' hay 'khô cứng'. Đây là từ ngữ hoàn toàn sai lệch khi miêu tả ánh mắt sinh động của chú cún."
        },
        {
          id: "tlv_7",
          level: 4,
          question: "Để bài văn miêu tả cây cối không bị khô khan như một bản liệt kê đặc điểm sinh học, người viết cần áp dụng phương pháp nào hiệu quả nhất?",
          options: [
            "Viết thật nhiều số đo chính xác về chiều cao và cân nặng của cây",
            "Kết hợp sử dụng các giác quan (thị giác, khứu giác, xúc giác) cùng các biện pháp tu từ so sánh, nhân hóa và bộc lộ cảm xúc gắn bó",
            "Chỉ chép lại sách giáo khoa sinh học lớp 4",
            "Liệt kê tên của 10 loài cây khác trong vườn"
          ],
          correct: 1,
          explanation: "Sử dụng đa giác quan kết hợp so sánh, nhân hóa giúp cảnh vật trở nên sống động, có hồn và chạm đến cảm xúc người đọc."
        },
        {
          id: "tlv_8",
          level: 4,
          question: "Phát hiện lỗi sai trong đoạn văn miêu tả sau:<br/><em>\"Mùa đông, cây bàng đâm chồi nảy lộc mơn mởn, hoa bàng li ti rụng trắng khắp lối đi, che bóng mát rượi cho chúng em vui chơi.\"</em>",
          options: [
            "Đoạn văn không có lỗi gì",
            "Sai thực tế miêu tả theo mùa (Mùa đông cây bàng trút lá trơ cành khẳng khiu, mùa xuân mới đâm chồi nảy lộc, mùa hè mới tỏa bóng mát rượi)",
            "Sai quy tắc viết hoa tên địa danh",
            "Sai vì cây bàng không có hoa"
          ],
          correct: 1,
          explanation: "Đoạn văn nhầm lẫn đặc điểm các mùa: mùa đông cây bàng rụng lá đỏ chỉ còn cành trơ trụi, không thể vừa đâm chồi nảy lộc vừa tỏa bóng mát rượi."
        },
        {
          id: "vn4_4_9",
          level: 1,
          question: "Bố cục chuẩn của một bài văn miêu tả cây cối hoặc con vật gồm có những phần nào?",
          options: ["3 phần: Mở bài, Thân bài, Kết bài", "2 phần: Giới thiệu và Kể chuyện", "4 phần: Tên bài, Lời chào, Tả chi tiết, Cảm nghĩ", "Chỉ cần 1 đoạn văn thật dài"],
          correct: 0,
          explanation: "Mọi bài văn miêu tả đều tuân theo kết cấu 3 phần hoàn chỉnh: Mở bài, Thân bài và Kết bài."
        },
        {
          id: "vn4_4_10",
          level: 2,
          question: "Thế nào là Mở bài gián tiếp trong bài văn miêu tả cây cối?",
          options: ["Nói chuyện khác, cảnh vật khác hoặc kỉ niệm rồi mới dẫn vào giới thiệu cây định tả", "Giới thiệu trực tiếp ngay tên cây định tả ở câu đầu tiên", "Chỉ nêu cảm xúc ở cuối năm học", "Tả quả của cây trước"],
          correct: 0,
          explanation: "Mở bài gián tiếp tạo sự lôi cuốn, mượt mà khi dẫn dắt từ âm thanh, mùa vụ hoặc cảm xúc để vào đề."
        },
        {
          id: "vn4_4_11",
          level: 2,
          question: "Khi miêu tả hình dáng con mèo mướp, chi tiết nào sau đây thể hiện sự quan sát tinh tường?",
          options: ["Bộ lông mềm mượt như tơ màu tro pha sọc vằn, bốn bàn chân có đệm thịt êm ái giúp chú bước đi không hề phát ra tiếng động", "Con mèo có bốn cái chân để đi", "Con mèo kêu meo meo suốt ngày", "Mèo thích ăn cơm với cá rán"],
          correct: 0,
          explanation: "Câu văn miêu tả chi tiết đặc trưng (đệm thịt dưới chân, lông mềm như tơ) làm nổi bật đặc tính của loài mèo."
        },
        {
          id: "vn4_4_12",
          level: 3,
          question: "Thế nào là Kết bài mở rộng trong bài văn miêu tả loài cây em yêu?",
          options: ["Nêu tình cảm, bình luận thêm về ích lợi của cây đối với đời sống, con người và liên hệ ý thức chăm sóc, bảo vệ", "Chỉ kết thúc bằng một câu: Em rất yêu cây này.", "Kể thêm một câu chuyện cổ tích khác", "Liệt kê tên các loại cây khác trong vườn"],
          correct: 0,
          explanation: "Kết bài mở rộng bộc lộ suy nghĩ sâu sắc, liên tưởng rộng mở và gửi gắm tình cảm chân thành của người viết."
        },
        {
          id: "vn4_4_13",
          level: 3,
          question: "Biện pháp tu từ nào thường được vận dụng khéo léo để bài văn miêu tả đồ vật (như chiếc cặp sách, chiếc đồng hồ) trở nên gần gũi, đáng yêu?",
          options: ["Biện pháp Nhân hóa (coi đồ vật như người bạn nhỏ thân thiết)", "Biện pháp Liệt kê số liệu kích thước milimet", "Chỉ dùng các câu cảm thán ngắn", "Không dùng bất kỳ từ ngữ so sánh nào"],
          correct: 0,
          explanation: "Nhân hóa biến đồ vật vô tri thành người bạn tri kỉ đồng hành cùng học sinh mỗi ngày tới lớp."
        },
        {
          id: "vn4_4_14",
          level: 4,
          question: "Đoạn văn nào sau đây tả hoa phượng vĩ mùa hè đặc sắc và giàu sức gợi cảm nhất?",
          options: ["Mỗi độ hè về, từng chùm phượng vĩ bừng nở đỏ rực như những đốm lửa bập bùng thắp sáng cả góc sân trường, xôn xao hòa cùng tiếng ve ngân rộn rã báo hiệu mùa thi.", "Cây phượng ở trường em nở hoa màu đỏ.", "Hoa phượng có cánh màu đỏ và nhị màu vàng.", "Cây phượng rất to và cao lớn trên sân trường."],
          correct: 0,
          explanation: "Đoạn văn kết hợp so sánh 'như những đốm lửa bập bùng', từ gợi tả 'xôn xao', 'rộn rã' gợi không khí mùa hè náo nức."
        }
      ]
    },
    {
      id: "thanh_ngu_chinh_ta",
        terms: [2],
      name: "Thành Ngữ, Tục Ngữ & Chính Tả",
      icon: "📜",
      desc: "Kho tàng thành ngữ, tục ngữ giàu ý nghĩa giáo dục và quy tắc phân biệt lỗi chính tả thường gặp.",
      theory: {
        highlights: [
          {
            icon: "💎",
            title: "Thành ngữ về Ý chí & Nghị lực",
            content: "• <em>Có công mài sắt, có ngày nên kim:</em> Kiên trì, nhẫn nại vượt qua gian khó thì ắt gặt hái thành công.<br/>• <em>Vạn sự khởi đầu nan:</em> Bắt đầu việc gì cũng có khó khăn, không được nản chí.<br/>• <em>Thất bại là mẹ thành công:</em> Rút kinh nghiệm từ sai lầm để đứng dậy mạnh mẽ hơn."
          },
          {
            icon: "🤝",
            title: "Thành ngữ về Lòng nhân ái & Đoàn kết",
            content: "• <em>Lá lành đùm lá rách:</em> Giúp đỡ, sẻ chia với những người có hoàn cảnh kém may mắn.<br/>• <em>Một con ngựa đau, cả tàu bỏ cỏ:</em> Tinh thần đồng đội, đồng cảm trước nỗi đau của người khác.<br/>• <em>Uống nước nhớ nguồn:</em> Biết ơn những người đi trước đã tạo dựng thành quả cho ta hôm nay."
          },
          {
            icon: "✏️",
            title: "Mẹo sửa lỗi chính tả hay mắc",
            content: "• <strong>Phân biệt ch/tr:</strong> Tr thường đi với từ Hán Việt chỉ vị trí, chức vụ (tri huyện, trụ sở); ch thường đi với đồ dùng gia đình (chổi, chảo, chén).<br/>• <strong>Phân biệt s/x:</strong> Tên loài vật, cây cối thường bắt đầu bằng s (sư tử, sóc, sả, sim); đồ dùng thường là x (xe, xẻng, xoong).<br/>• <strong>Quy tắc c/k/q:</strong> Luôn viết là <strong>k</strong> trước <em>e, ê, i</em> (kẻ, kim, kính); viết là <strong>c</strong> trước các âm còn lại (cá, cờ, cua)."
          }
        ]
      },
      questions: [
        {
          id: "ct_1",
          level: 1,
          question: "Điền từ còn thiếu vào câu thành ngữ sau: <em>\"Uống nước nhớ [...]\"</em>",
          options: ["sông", "nguồn", "suối", "biển"],
          correct: 1,
          explanation: "Thành ngữ 'Uống nước nhớ nguồn' khuyên răn đạo lý làm người phải luôn nhớ ơn cội nguồn, tổ tiên."
        },
        {
          id: "ct_2",
          level: 1,
          question: "Từ nào dưới đây viết <strong>đúng</strong> chính tả?",
          options: ["Xắp sếp", "Sắp xếp", "Sắp sếp", "Xắp xếp"],
          correct: 1,
          explanation: "Từ đúng chính tả là 'Sắp xếp' (sắp đặt và xếp gọn)."
        },
        {
          id: "ct_3",
          level: 2,
          question: "Thành ngữ <em>\"Có công mài sắt, có ngày nên kim\"</em> ca ngợi đức tính gì của con người?",
          options: [
            "Sự khéo léo trong nghề làm thợ rèn",
            "Lòng kiên trì, nhẫn nại và quyết tâm vượt qua khó khăn",
            "Tính tiết kiệm kim khâu trong gia đình",
            "Tinh thần yêu thích đồ kim loại"
          ],
          correct: 1,
          explanation: "Câu thành ngữ khuyên con người chỉ cần có lòng quyết tâm và kiên trì rèn luyện thì việc khó đến đâu cũng sẽ làm nên."
        },
        {
          id: "ct_4",
          level: 2,
          question: "Cặp từ nào dưới đây viết <strong>đúng quy tắc chính tả c/k/q</strong>?",
          options: [
            "Cim tiêm, cây keo",
            "Kim tiêm, cây keo",
            "Cim tiêm, cây ceo",
            "Qim tiêm, cây keo"
          ],
          correct: 1,
          explanation: "Theo quy tắc: trước các nguyên âm 'i', 'e', 'ê' phải viết bằng chữ 'k' (kim tiêm, cây keo)."
        },
        {
          id: "ct_5",
          level: 3,
          question: "Câu thành ngữ nào dưới đây đồng nghĩa với câu: <em>\"Thương người như thể thương thân\"</em>?",
          options: [
            "Chân lấm tay bùn",
            "Lá lành đùm lá rách",
            "Học một biết mười",
            "Nước chảy đá mòn"
          ],
          correct: 1,
          explanation: "'Lá lành đùm lá rách' và 'Thương người như thể thương thân' đều ca ngợi tấm lòng nhân ái, tương thân tương ái giữa con người với nhau."
        },
        {
          id: "ct_6",
          level: 3,
          question: "Tìm từ viết <strong>sai chính tả</strong> trong câu văn sau:<br/><em>\"Mỗi buổi sáng, chú chim sơn ca lại cất tiếng hót líu lo, reo dắt khắp cả khu vườn.\"</em>",
          options: ["sơn ca", "líu lo", "reo dắt", "khu vườn"],
          correct: 2,
          explanation: "Từ đúng chính tả phải là 'gieo rắc' hoặc 'réo rắt' (âm thanh réo rắt trong trẻo), viết 'reo dắt' là sai chính tả."
        },
        {
          id: "ct_7",
          level: 4,
          question: "Trong câu chuyện cứu trợ đồng bào bị lũ lụt, việc các bạn học sinh quyên góp sách vở, quần áo ấm để gửi tới vùng cao thể hiện tinh thần nào?",
          options: [
            "Đói cho sạch, rách cho thơm",
            "Nhường cơm sẻ áo, lá lành đùm lá rách",
            "Cây ngay không sợ chết đứng",
            "Ăn quả nhớ kẻ trồng cây"
          ],
          correct: 1,
          explanation: "Hành động sẻ chia lương thực, đồ dùng cho người gặp nạn là biểu hiện cao đẹp của truyền thống 'Nhường cơm sẻ áo, lá lành đùm lá rách'."
        },
        {
          id: "ct_8",
          level: 4,
          question: "Dãy từ nào sau đây gồm các từ viết <strong>hoàn toàn chính xác</strong> về phân biệt âm đầu <em>tr/ch</em> và <em>s/x</em>?",
          options: [
            "Trân trọng, chắt chiu, xuất sắc, sản xuất",
            "Chân trọng, trắt chiu, suất sắc, sản suất",
            "Trân trọng, trắt chiu, xuất xắc, xản xuất",
            "Chân trọng, chắt chiu, xắc xuất, sản xuất"
          ],
          correct: 0,
          explanation: "'Trân trọng', 'chắt chiu', 'xuất sắc', 'sản xuất' đều là những từ viết đúng chuẩn chính tả tiếng Việt."
        },
        {
          id: "vn4_5_9",
          level: 1,
          question: "Thành ngữ nào sau đây mang ý nghĩa ca ngợi sự đoàn kết, đồng lòng vượt qua mọi thử thách?",
          options: ["Đồng tâm hiệp lực (Một cây làm chẳng nên non / Ba cây chụm lại nên hòn núi cao)", "Đứng núi này trông núi nọ", "Được voi đòi tiên", "Mèo khen mèo dài đuôi"],
          correct: 0,
          explanation: "'Đồng tâm hiệp lực' ngợi ca sức mạnh vô địch của tinh thần đoàn kết một lòng."
        },
        {
          id: "vn4_5_10",
          level: 2,
          question: "Điền từ thích hợp vào chỗ trống trong câu thành ngữ: 'Lá lành đùm lá ...'",
          options: ["rách", "xanh", "vàng", "khô"],
          correct: 0,
          explanation: "'Lá lành đùm lá rách' là truyền thống tương thân tương ái, cưu mang giúp đỡ người gặp khó khăn hoạn nạn."
        },
        {
          id: "vn4_5_11",
          level: 2,
          question: "Từ nào sau đây viết ĐÚNG chính tả tiếng Việt?",
          options: ["Xinh xắn", "Sinh xắn", "Xinh sắn", "Sinh sắn"],
          correct: 0,
          explanation: "'Xinh xắn' viết đúng phụ âm đầu 'x'."
        },
        {
          id: "vn4_5_12",
          level: 3,
          question: "Cặp từ nào sau đây là Cặp từ đồng nghĩa chỉ đức tính tốt đẹp của học sinh?",
          options: ["Chăm chỉ - Cần cù", "Thật thà - Gian dối", "Dũng cảm - Nhút nhát", "Nhanh nhẹn - Chậm chạp"],
          correct: 0,
          explanation: "'Chăm chỉ' và 'Cần cù' cùng mang ý nghĩa siêng năng, chịu khó rèn luyện."
        },
        {
          id: "vn4_5_13",
          level: 3,
          question: "Thành ngữ 'Học đi đôi với hành' nhắc nhở chúng ta phương pháp học tập đúng đắn nào?",
          options: ["Kiến thức lý thuyết học được phải luôn gắn liền với thực hành và vận dụng vào thực tế cuộc sống", "Chỉ cần đi học đúng giờ là đủ", "Học xong để đấy không cần làm bài tập", "Vừa đi bộ vừa đọc sách trên đường"],
          correct: 0,
          explanation: "Học phải đi đôi với hành thì kiến thức mới trở nên sống động, thiết thực và biến thành năng lực thật sự."
        },
        {
          id: "vn4_5_14",
          level: 4,
          question: "Trong câu: 'Những đóa hoa sen ... sắc rực rỡ dưới nắng hè.', từ nào viết đúng chính tả điền vào chỗ trống?",
          options: ["khoe", "khoe khoang", "khooe", "khue"],
          correct: 0,
          explanation: "'Khoe sắc' (hoa nở phô vẻ đẹp) viết đúng chính tả là 'khoe'."
        }
      ]
    }
  ]
};
