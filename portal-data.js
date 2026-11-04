/**
 * portal-data.js - Dữ liệu Khối Lớp 1 - 12 và Các Môn Học Theo Chương Trình GDPT
 * Định hình thư mục các môn học và gắn kết app Ghép Hình Bản Đồ Việt Nam vào môn Lịch sử và Địa lý.
 */

window.PORTAL_DATA = {
  levels: [
    { id: "tieu_hoc", name: "Tiểu Học", grades: [1, 2, 3, 4, 5], badge: "🎒" },
    { id: "thcs", name: "Trung Học Cơ Sở (THCS)", grades: [6, 7, 8, 9], badge: "🏫" },
    { id: "thpt", name: "Trung Học Phổ Thông (THPT)", grades: [10, 11, 12], badge: "🏛️" }
  ],

  // Chi tiết từng khối lớp từ Lớp 1 đến Lớp 12
  grades: {
    1: {
      title: "Lớp 1",
      level: "tieu_hoc",
      desc: "Khởi đầu hành trình học tập với những con số, chữ cái và thế giới xung quanh.",
      subjects: [
        { id: "toan", name: "Toán Học", icon: "📐", color: "#3b82f6", desc: "Làm quen với các số từ 1 đến 100, phép cộng trừ đơn giản." },
        { id: "tieng_viet", name: "Tiếng Việt", icon: "📖", color: "#ec4899", desc: "Học bảng chữ cái, đánh vần, tập đọc và viết chữ đẹp." },
        { id: "tnxh", name: "Tự Nhiên & Xã Hội", icon: "🌱", color: "#10b981", desc: "Khám phá bản thân, gia đình, trường học và thiên nhiên." },
        { id: "tieng_anh", name: "Tiếng Anh", icon: "🌍", color: "#f59e0b", desc: "Từ vựng tiếng Anh vui nhộn qua bài hát và trò chơi." },
        { id: "nghe_thuat", name: "Âm Nhạc & Mỹ Thuật", icon: "🎨", color: "#8b5cf6", desc: "Vẽ tranh sắc màu và hát ca theo từng nốt nhạc." }
      ]
    },
    2: {
      title: "Lớp 2",
      level: "tieu_hoc",
      desc: "Chương trình cốt lõi GDPT 2018 - Đầy đủ 5 môn học tích hợp các ứng dụng số hóa & thi đấu tương tác!",
      subjects: [
        {
          id: "toan",
          name: "Toán Học",
          icon: "📐",
          color: "#3b82f6",
          hasApp: true,
          badge: "🔥 ĐÃ CÓ APP ÔN TẬP",
          desc: "Bảng nhân chia 2 và 5, số trong phạm vi 1000, cộng trừ có nhớ, hình gấp khúc & toán đố nhiều hơn - ít hơn.",
          apps: [
            {
              id: "math_2",
              title: "Đấu Trí Toán Lớp 2",
              subtitle: "Lý thuyết trọng tâm, bài tập phân hóa 4 mức độ & đề thi thử tự động chấm điểm",
              icon: "🧮",
              url: "math-2.html",
              cardTheme: "math-featured-card",
              buttonSub: "5 Chủ đề & Thi thử định kỳ",
              tags: ["Toán 2 GDPT 2018", "Bảng Nhân Chia 2 & 5", "Phạm Vi 1000", "Phân Hóa 4 Mức Độ"],
              learningGoal: "Nắm vững cấu tạo số đến 1000, thuộc lòng bảng nhân chia 2 và 5, đo lường đại lượng, tính độ dài đường gấp khúc và giải bài toán nhiều hơn ít hơn.",
              features: [
                "🔢 Cấu tạo số & Cộng trừ có nhớ đến 1000",
                "✖️ Thuộc làu bảng nhân & chia 2, 5",
                "📏 Đo lường dm, m, km, kg, lít & xem giờ",
                "⏱️ Đề thi thử Toán 2 bấm giờ tự động chấm"
              ]
            }
          ]
        },
        {
          id: "tieng_viet",
          name: "Tiếng Việt",
          icon: "📖",
          color: "#db2777",
          hasApp: true,
          badge: "✨ ĐÃ CÓ APP TƯƠNG TÁC",
          desc: "Từ chỉ sự vật - hoạt động - đặc điểm; 3 kiểu câu Ai là gì - Ai làm gì - Ai thế nào; quy tắc chính tả & tập làm văn.",
          apps: [
            {
              id: "vietnamese_2",
              title: "Đấu Trí Tiếng Việt Lớp 2",
              subtitle: "Hành trình chinh phục ngôn từ, phân biệt từ ngữ, mẫu câu chuẩn & đề thi thử định kỳ",
              icon: "📖",
              url: "vietnamese-2.html",
              cardTheme: "vietnamese-featured-card",
              buttonSub: "5 Chủ đề & Luyện viết văn",
              tags: ["Tiếng Việt 2 GDPT 2018", "Từ Loại Cơ Bản", "3 Kiểu Câu Chuẩn", "Quy Tắc Chính Tả"],
              learningGoal: "Phân biệt từ chỉ sự vật, hoạt động, đặc điểm; sử dụng thành thạo câu Ai là gì, Ai làm gì, Ai thế nào; chuẩn quy tắc chính tả c/k, g/gh, ng/ngh và đọc hiểu cảm thụ thơ ca thiếu nhi.",
              features: [
                "🔤 Từ chỉ sự vật, hoạt động & đặc điểm",
                "❓ Ba kiểu câu: Ai là gì? Ai làm gì? Ai thế nào?",
                "✍️ Quy tắc chính tả c/k, g/gh, ng/ngh, s/x",
                "⏱️ Đề thi thử Tiếng Việt 2 tự động chấm điểm"
              ]
            }
          ]
        },
        {
          id: "tnxh",
          name: "Tự Nhiên & Xã Hội",
          icon: "🌱",
          color: "#10b981",
          hasApp: true,
          badge: "✨ ĐÃ CÓ APP TƯƠNG TÁC",
          desc: "Gia đình & an toàn tại nhà, trường học thân thiện, giao thông an toàn, sinh vật quanh em, cơ thể khỏe mạnh & bầu trời 4 mùa.",
          apps: [
            {
              id: "tnxh_2",
              title: "Khám Phá Tự Nhiên & Xã Hội Lớp 2",
              subtitle: "Phòng thí nghiệm thực tế, 6 chủ đề chuẩn GDPT 2018 & kỹ năng an toàn cuộc sống",
              icon: "🌱",
              url: "tnxh-2.html",
              cardTheme: "tnxh-featured-card",
              buttonSub: "6 Chủ đề & Kỹ năng sống",
              tags: ["TN&XH 2 GDPT 2018", "6 Chủ Đề Chuẩn", "An Toàn Giao Thông", "Cơ Thể Khỏe Mạnh"],
              learningGoal: "Hiểu biết về gia đình và trường học, nhận biết biển báo giao thông cơ bản, môi trường sống của động thực vật, giữ tư thế ngồi học chống cong vẹo cột sống và nhận biết hiện tượng thời tiết 4 mùa.",
              features: [
                "🏡 Gia đình & Phòng tránh bỏng, ngộ độc tại nhà",
                "🚦 Giao thông an toàn & Nhận biết biển báo",
                "🦴 Cơ quan vận động, tiêu hóa & bài tiết",
                "⛅ Bầu trời ngày đêm & Phòng tránh mưa dông bão"
              ]
            }
          ]
        },
        {
          id: "tieng_anh",
          name: "Tiếng Anh (English)",
          icon: "🌍",
          color: "#6366f1",
          hasApp: true,
          badge: "🔊 CÓ PHÁT ÂM BẢN XỨ",
          desc: "Từ vựng số đếm 1-20, màu sắc & hình khối, gia đình & cơ thể, động vật thú cưng, thức ăn & đồ chơi kèm phát âm bản xứ.",
          apps: [
            {
              id: "english_2",
              title: "English 2 Explorer",
              subtitle: "Interactive Global Success & Family and Friends with Native AI Speech Pronunciation",
              icon: "🌍",
              url: "english-2.html",
              cardTheme: "english-featured-card",
              buttonSub: "Vocabulary, Phonics & Audio",
              tags: ["English 2 Global Success", "Text-To-Speech 🔊", "Phonics & Rhymes", "Mock Semester Exam"],
              learningGoal: "Phát triển phản xạ nghe - nói tiếng Anh cơ bản, ghi nhớ từ vựng qua âm thanh chuẩn bản xứ và tự tin giao tiếp qua các câu hỏi - đáp quen thuộc hàng ngày.",
              features: [
                "🔊 Phát âm chuẩn bản xứ Text-to-Speech từng từ",
                "📚 5 Unit chủ điểm cốt lõi chuẩn GDPT 2018",
                "🎯 Luyện tập phân hóa 4 cấp độ quốc tế",
                "⏱️ Bài thi thử học kỳ 20 phút chấm điểm tự động"
              ]
            }
          ]
        },
        {
          id: "dao_duc",
          name: "Đạo Đức & Kỹ Năng Sống",
          icon: "❤️",
          color: "#d97706",
          hasApp: true,
          badge: "✨ ĐÃ CÓ APP TƯƠNG TÁC",
          desc: "Quý trọng thời gian, dũng cảm nhận lỗi & sửa lỗi, bảo quản đồ dùng, kính trọng thầy cô và bộ quy tắc 5 ngón tay phòng chống xâm hại.",
          apps: [
            {
              id: "ethics_2",
              title: "Đạo Đức & Kỹ Năng Sống Lớp 2",
              subtitle: "Vườn ươm nhân cách, ứng xử văn minh & bộ quy tắc 5 ngón tay tự bảo vệ bản thân",
              icon: "❤️",
              url: "ethics-2.html",
              cardTheme: "ethics-featured-card",
              buttonSub: "Tình huống & Giá trị sống",
              tags: ["Đạo Đức 2 GDPT 2018", "Quy Tắc 5 Ngón Tay", "Quý Trọng Thời Gian", "Dũng Cảm Nhận Lỗi"],
              learningGoal: "Bồi dưỡng nhân cách trung thực, dũng cảm nhận lỗi, thói quen quý trọng thời gian, giữ gìn tài sản cá nhân và trang bị kỹ năng sinh tồn, tự bảo vệ trước nguy cơ bị xâm hại hoặc đi lạc.",
              features: [
                "⏳ Lập thời gian biểu & Không trì hoãn",
                "🤝 Dũng cảm nhận lỗi & Nói lời xin lỗi chân thành",
                "🖐️ Quy tắc 5 ngón tay phòng chống xâm hại",
                "🚨 Nhớ 4 số điện thoại cứu hộ khẩn cấp 111-113-114-115"
              ]
            }
          ]
        }
      ]
    },
    3: {
      title: "Lớp 3",
      level: "tieu_hoc",
      desc: "Phát triển tư duy logic, khám phá quê hương và làm quen Tin học.",
      subjects: [
        { id: "toan", name: "Toán Học", icon: "📐", color: "#3b82f6", desc: "Các số trong phạm vi 100.000, tính chu vi diện tích hình vuông, chữ nhật." },
        { id: "tieng_viet", name: "Tiếng Việt", icon: "📖", color: "#ec4899", desc: "Mở rộng vốn từ về quê hương đất nước, viết đoạn văn ngắn." },
        { id: "tnxh", name: "Tự Nhiên & Xã Hội", icon: "🌱", color: "#10b981", desc: "Làng xóm, quê hương Việt Nam và hệ thống mặt trời." },
        { id: "tin_hoc", name: "Tin Học & Công Nghệ", icon: "💻", color: "#06b6d4", desc: "Làm quen với chuột, bàn phím và máy tính an toàn." },
        { id: "tieng_anh", name: "Tiếng Anh", icon: "🌍", color: "#f59e0b", desc: "Luyện phát âm chuẩn và các chủ đề giao tiếp thường ngày." }
      ]
    },
    4: {
      title: "Lớp 4",
      level: "tieu_hoc",
      desc: "Chương trình cốt lõi GDPT 2018 - Đầy đủ 7 môn học tích hợp các ứng dụng số hóa & thi đấu tương tác!",
      subjects: [
        {
          id: "lich_su_dia_ly",
          name: "Lịch Sử và Địa Lý",
          icon: "🇻🇳",
          color: "#ea580c",
          hasApp: true,
          badge: "⭐ ĐÃ CÓ APP TƯƠNG TÁC",
          desc: "Tìm hiểu vị trí địa lý, thiên nhiên, con người các vùng miền và lịch sử dựng nước của dân tộc Việt Nam.",
          apps: [
            {
              id: "vn_map_puzzle",
              title: "Em Yêu Bản Đồ Việt Nam",
              subtitle: "Game Ghép Hình 34 Tỉnh Thành & Biển Đảo Quê Hương",
              icon: "vietnam-icon.svg",
              url: "game.html",
              tags: ["Game Tương Tác", "34 Tỉnh Mới", "Hoàng Sa & Trường Sa", "Có Tính Điểm"],
              learningGoal: "Giúp học sinh Lớp 4 nhận biết hình dáng, vị trí địa lý, đặc sản và danh lam thắng cảnh các vùng miền trên bản đồ Việt Nam."
            }
          ]
        },
        {
          id: "toan",
          name: "Toán Học",
          icon: "📐",
          color: "#3b82f6",
          hasApp: true,
          badge: "🔥 ĐÃ CÓ APP ÔN TẬP",
          desc: "Phân số, hình bình hành, hình thoi, đại lượng và 5 dạng toán đố có lời văn.",
          apps: [
            {
              id: "math_4_review",
              title: "Đấu Trí Toán Lớp 4 - Ôn Tập & Thi Thử",
              subtitle: "Hệ thống lý thuyết, bài tập phân hóa 4 mức độ & đề thi thử tự động chấm điểm",
              icon: "🧮",
              url: "math-4.html",
              tags: ["Toán 4 GDPT 2018", "Số Liệu Random 🎲", "6 Chủ Đề Trọng Tâm", "Thi Thử Có Chấm Điểm"],
              learningGoal: "Củng cố vững chắc toàn bộ kiến thức Số tự nhiên, Phân số, Hình học, Đại lượng đo lường và rèn luyện kỹ năng giải toán có lời văn từ cơ bản đến nâng cao."
            }
          ]
        },
        {
          id: "tieng_viet",
          name: "Tiếng Việt",
          icon: "📖",
          color: "#db2777",
          hasApp: true,
          badge: "✨ ĐÃ CÓ APP TƯƠNG TÁC",
          desc: "Danh từ, động từ, tính từ; biện pháp so sánh, nhân hóa; đọc hiểu văn bản & tập làm văn miêu tả.",
          apps: [
            {
              id: "vietnamese_4",
              title: "Đấu Trí Tiếng Việt Lớp 4",
              subtitle: "Hành trình chinh phục ngôn từ, mẹo phân biệt từ loại & đề thi thử định kỳ",
              icon: "📖",
              url: "vietnamese-4.html",
              cardTheme: "vietnamese-featured-card",
              buttonSub: "5 Chủ đề & Thi thử định kỳ",
              tags: ["Tiếng Việt 4 GDPT 2018", "Từ Loại Cốt Lõi", "Biện Pháp Tu Từ", "Phân Hóa 4 Mức Độ"],
              learningGoal: "Làm chủ từ loại (Danh từ, Động từ, Tính từ), biện pháp nghệ thuật (So sánh, Nhân hóa), rèn luyện kỹ năng viết văn miêu tả và đọc hiểu cảm thụ văn học.",
              features: [
                "🔤 Nắm chắc Danh từ, Động từ, Tính từ",
                "✨ Biện pháp tu từ So sánh & Nhân hóa",
                "✍️ Rèn luyện mở bài & kết bài miêu tả",
                "⏱️ Đề thi thử Tiếng Việt bấm giờ có chấm điểm"
              ]
            }
          ]
        },
        {
          id: "khoa_hoc",
          name: "Khoa Học",
          icon: "🔬",
          color: "#059669",
          hasApp: true,
          badge: "✨ ĐÃ CÓ APP TƯƠNG TÁC",
          desc: "Nước & không khí, năng lượng ánh sáng - âm thanh - nhiệt, thế giới thực vật & sức khỏe dinh dưỡng.",
          apps: [
            {
              id: "science_4",
              title: "Khám Phá Khoa Học Lớp 4",
              subtitle: "Phòng thí nghiệm ảo, chuỗi thức ăn tự nhiên & đề thi thử chuẩn GDPT 2018",
              icon: "🔬",
              url: "science-4.html",
              cardTheme: "science-featured-card",
              buttonSub: "4 Chủ đề & Thí nghiệm",
              tags: ["Khoa Học 4 GDPT 2018", "Nước & Không Khí", "Năng Lượng & Ánh Sáng", "Dinh Dưỡng Cân Bằng"],
              learningGoal: "Hiểu sâu sắc tính chất của nước và không khí, 3 thể và vòng tuần hoàn, quy luật năng lượng, chuỗi thức ăn và kiến thức bảo vệ sức khỏe qua 4 nhóm dưỡng chất.",
              features: [
                "💧 Khám phá 3 thể & Vòng tuần hoàn của nước",
                "⚡ Bí ẩn ánh sáng, âm thanh & dẫn nhiệt",
                "🌱 Chuỗi thức ăn & Thế giới nấm tự nhiên",
                "🥗 Tháp dinh dưỡng 4 nhóm chất khoa học"
              ]
            }
          ]
        },
        {
          id: "tin_hoc",
          name: "Tin Học & Công Nghệ",
          icon: "💻",
          color: "#0891b2",
          hasApp: true,
          badge: "✨ ĐÃ CÓ APP TƯƠNG TÁC",
          desc: "Gõ phím 10 ngón, soạn thảo Word, thiết kế trình chiếu PowerPoint, trồng hoa & lắp ghép mô hình.",
          apps: [
            {
              id: "it_4",
              title: "Hiệp Sĩ Tin Học & Sáng Tạo Công Nghệ",
              subtitle: "Thực hành gõ 10 ngón, kỹ năng số an toàn, kỹ thuật trồng hoa & lắp ráp mô hình",
              icon: "💻",
              url: "it-4.html",
              cardTheme: "it-featured-card",
              buttonSub: "Kỹ năng số & Lắp ghép",
              tags: ["Tin Học 4", "Công Nghệ 4", "Gõ 10 Ngón", "An Toàn Internet"],
              learningGoal: "Trang bị kỹ năng số thực tiễn: định vị hàng phím cơ sở gõ 10 ngón, soạn thảo Telex chuẩn, kỹ năng an toàn mạng cùng kiến thức công nghệ trồng cây và an toàn điện gia đình.",
              features: [
                "⌨️ Quy tắc gõ 10 ngón hàng phím cơ sở",
                "📑 Kỹ năng Word & PowerPoint trực quan",
                "🌸 Quy trình trồng hoa & cây cảnh trong chậu",
                "🔌 An toàn điện & Kỹ thuật lắp ghép mô hình"
              ]
            }
          ]
        },
        {
          id: "tieng_anh",
          name: "Tiếng Anh (English)",
          icon: "🌍",
          color: "#6366f1",
          hasApp: true,
          badge: "🔊 CÓ PHÁT ÂM BẢN XỨ",
          desc: "Luyện 4 kỹ năng theo khung Global Success, flashcards ngữ pháp và luyện phát âm chuẩn AI.",
          apps: [
            {
              id: "english_4",
              title: "English 4 Explorer",
              subtitle: "Interactive Global Success Learning & Native English Voice Pronunciation",
              icon: "🌍",
              url: "english-4.html",
              cardTheme: "english-featured-card",
              buttonSub: "Vocabulary, Grammar & AI Audio",
              tags: ["English 4 Global Success", "Text-To-Speech 🔊", "Grammar & Phonics", "Mock Semester Exam"],
              learningGoal: "Phát triển toàn diện vốn từ vựng theo chủ điểm (Quốc gia, Thời gian, Môn học, Đồ ăn, Động vật, Thời tiết) và phản xạ giao tiếp tiếng Anh tự tin chuẩn bản xứ.",
              features: [
                "🔊 Phát âm chuẩn Text-to-Speech từng từ vựng",
                "📚 Ôn tập ngữ pháp & Mẫu câu hỏi đáp",
                "🎯 Luyện tập phân hóa 4 cấp độ quốc tế",
                "⏱️ Bài thi thử học kỳ 20 phút chấm điểm tự động"
              ]
            }
          ]
        },
        {
          id: "dao_duc",
          name: "Đạo Đức & Kỹ Năng Sống",
          icon: "❤️",
          color: "#d97706",
          hasApp: true,
          badge: "✨ ĐÃ CÓ APP TƯƠNG TÁC",
          desc: "Biết ơn thầy cô, tôn trọng sự khác biệt, tự lập vượt khó, bảo vệ của công và kỹ năng phòng chống xâm hại.",
          apps: [
            {
              id: "ethics_4",
              title: "Đạo Đức & Kỹ Năng Sống Lớp 4",
              subtitle: "Vườn ươm nhân cách, xử lý tình huống thực tế & bộ quy tắc 5 ngón tay an toàn",
              icon: "❤️",
              url: "ethics-4.html",
              cardTheme: "ethics-featured-card",
              buttonSub: "Tình huống & Giá trị sống",
              tags: ["Đạo Đức 4 GDPT 2018", "Quy Tắc 5 Ngón Tay", "Kỹ Năng Sống", "Tự Lập Vượt Khó"],
              learningGoal: "Bồi dưỡng nhân cách, lòng biết ơn, tinh thần tự lập vượt khó, ý thức bảo vệ tài sản công và trang bị kỹ năng sinh tồn, phòng chống bạo lực, xâm hại.",
              features: [
                "❤️ Bồi dưỡng lòng biết ơn & Tôn sư trọng đạo",
                "🧗 Tinh thần tự lập & Ý chí vượt khó vươn lên",
                "🖐️ Quy tắc 5 ngón tay phòng chống xâm hại",
                "🔥 Kỹ năng thoát hiểm hỏa hoạn & An toàn sông nước"
              ]
            }
          ]
        }
      ]
    },
    5: {
      title: "Lớp 5",
      level: "tieu_hoc",
      desc: "Hoàn thiện cấp Tiểu học - Nắm vững địa lý các vùng miền kinh tế và các mốc son lịch sử.",
      subjects: [
        {
          id: "lich_su_dia_ly",
          name: "Lịch Sử và Địa Lý",
          icon: "🇻🇳",
          color: "#ea580c",
          desc: "Đặc điểm địa hình, khí hậu, sông ngòi, các vùng kinh tế Việt Nam và các cuộc kháng chiến vệ quốc vĩ đại."
        },
        { id: "toan", name: "Toán Học", icon: "📐", color: "#3b82f6", desc: "Số thập phân, hình tròn, hình hộp chữ nhật, vận tốc - quãng đường - thời gian." },
        { id: "tieng_viet", name: "Tiếng Việt", icon: "📖", color: "#ec4899", desc: "Văn tả cảnh quê hương, mở rộng vốn từ về bảo vệ môi trường và hòa bình." },
        { id: "khoa_hoc", name: "Khoa Học", icon: "🔬", color: "#10b981", desc: "Sự sinh sản của thực vật, động vật; sử dụng năng lượng mặt trời, gió và nước." },
        { id: "tin_hoc", name: "Tin Học", icon: "💻", color: "#06b6d4", desc: "Lập trình khối lệnh Scratch vui nhộn và thiết kế trình chiếu." },
        { id: "tieng_anh", name: "Tiếng Anh", icon: "🌍", color: "#f59e0b", desc: "Giao tiếp tự tin và làm quen với bài thi tiếng Anh chuyển cấp." }
      ]
    },
    6: {
      title: "Lớp 6",
      level: "thcs",
      desc: "Bước sang cấp THCS với môn Lịch sử và Địa lý tích hợp và các kiến thức khoa học tự nhiên.",
      subjects: [
        {
          id: "lich_su_dia_ly",
          name: "Lịch Sử và Địa Lý",
          icon: "🇻🇳",
          color: "#ea580c",
          desc: "Bản đồ và phương pháp sử dụng bản đồ, các chuyển động của Trái Đất, lịch sử thế giới cổ đại và dựng nước Văn Lang - Âu Lạc."
        },
        { id: "toan", name: "Toán Học", icon: "📐", color: "#3b82f6", desc: "Tập hợp số tự nhiên, số nguyên, phân số, hình học trực quan." },
        { id: "ngu_van", name: "Ngữ Văn", icon: "📚", color: "#ec4899", desc: "Truyền thuyết, truyện cổ tích, thơ lục bát và văn bản thông tin." },
        { id: "khtn", name: "Khoa Học Tự Nhiên", icon: "🔬", color: "#10b981", desc: "Các phép đo, chất và sự biến đổi của chất, tế bào - đơn vị cơ bản của sự sống." },
        { id: "tin_hoc", name: "Tin Học", icon: "💻", color: "#06b6d4", desc: "Thông tin và biểu diễn thông tin, mạng máy tính và an toàn Internet." },
        { id: "tieng_anh", name: "Tiếng Anh", icon: "🌍", color: "#f59e0b", desc: "Chương trình Tiếng Anh Global Success chuẩn THCS." }
      ]
    },
    7: {
      title: "Lớp 7",
      level: "thcs",
      desc: "Khám phá địa lý các châu lục trên thế giới và lịch sử Việt Nam thời kỳ phong kiến độc lập.",
      subjects: [
        {
          id: "lich_su_dia_ly",
          name: "Lịch Sử và Địa Lý",
          icon: "🇻🇳",
          color: "#ea580c",
          hasApp: true,
          badge: "⭐ ĐÃ CÓ APP TƯƠNG TÁC",
          desc: "Đặc điểm tự nhiên các châu lục, lịch sử Việt Nam thời Đinh, Tiền Lê, Lý, Trần, Hồ và khởi nghĩa Lam Sơn.",
          apps: [
            {
              id: "world_map_puzzle",
              title: "Em Khám Phá Bản Đồ Thế Giới",
              subtitle: "Trò Chơi Ghép Hình 5 Châu Lục & Khám Phá Quốc Kỳ",
              icon: "🌍",
              url: "world-game.html",
              tags: ["Trọng Tâm Lớp 7", "5 Châu Lục", "Quốc Kỳ & Kỳ Quan", "Bách Khoa Toàn Thư"],
              learningGoal: "Học sinh Lớp 7 nắm vững vị trí địa lý của 5 châu lục trên thế giới, nhận diện quốc kỳ và các kỳ quan nổi tiếng của các quốc gia tiêu biểu.",
              buttonSub: "Khám phá 5 Châu lục thế giới",
              features: [
                "🌍 Khám Phá 5 Châu Lục Lớn",
                "🚩 Đố Vui Quốc Kỳ & Kỳ Quan Thế Giới",
                "🧲 Kéo - Thả - Bắt Dính Tự Động (Snap)",
                "📖 Bách Khoa Toàn Thư Quốc Gia Chi Tiết"
              ]
            }
          ]
        },
        { id: "toan", name: "Toán Học", icon: "📐", color: "#3b82f6", desc: "Số hữu tỉ, số thực, góc và đường thẳng song song, tam giác bằng nhau." },
        { id: "ngu_van", name: "Ngữ Văn", icon: "📚", color: "#ec4899", desc: "Thơ bốn chữ, năm chữ; văn nghị luận xã hội và tùy bút tản văn." },
        { id: "khtn", name: "Khoa Học Tự Nhiên", icon: "🔬", color: "#10b981", desc: "Bảng tuần hoàn các nguyên tố hóa học, tốc độ chuyển động, âm thanh và ánh sáng." },
        { id: "tin_hoc", name: "Tin Học", icon: "💻", color: "#06b6d4", desc: "Phần mềm bảng tính Excel, đồ họa và truyền thông số." }
      ]
    },
    8: {
      title: "Lớp 8",
      level: "thcs",
      desc: "Trọng tâm Địa lý tự nhiên Việt Nam: Địa hình, khoáng sản, khí hậu, sông ngòi và biển đảo.",
      subjects: [
        {
          id: "lich_su_dia_ly",
          name: "Lịch Sử và Địa Lý",
          icon: "🇻🇳",
          color: "#ea580c",
          desc: "Đặc điểm địa hình, khí hậu, tài nguyên khoáng sản, các hệ thống sông lớn và vùng biển đảo Việt Nam."
        },
        { id: "toan", name: "Toán Học", icon: "📐", color: "#3b82f6", desc: "Hằng đẳng thức đáng nhớ, phân thức đại số, định lí Thalès, tứ giác đặc biệt." },
        { id: "ngu_van", name: "Ngữ Văn", icon: "📚", color: "#ec4899", desc: "Văn bản văn học hiện thực, truyện lịch sử và thơ tự do hiện đại." },
        { id: "khtn", name: "Khoa Học Tự Nhiên", icon: "🔬", color: "#10b981", desc: "Phản ứng hóa học, acid - base - muối, áp suất, lực đẩy Archimedes." },
        { id: "tin_hoc", name: "Tin Học", icon: "💻", color: "#06b6d4", desc: "Lập trình thuật toán cơ bản và xử lý dữ liệu số." }
      ]
    },
    9: {
      title: "Lớp 9",
      level: "thcs",
      desc: "Địa lý kinh tế - xã hội các vùng kinh tế Việt Nam và lịch sử Việt Nam hiện đại.",
      subjects: [
        {
          id: "lich_su_dia_ly",
          name: "Lịch Sử và Địa Lý",
          icon: "🇻🇳",
          color: "#ea580c",
          desc: "Nghiên cứu kinh tế - xã hội các vùng miền: Trung du miền núi Bắc Bộ, Đồng bằng sông Hồng, Bắc Trung Bộ & Duyên hải miền Trung, Tây Nguyên, Đông Nam Bộ, ĐBSCL."
        },
        { id: "toan", name: "Toán Học", icon: "📐", color: "#3b82f6", desc: "Phương trình bậc hai, hệ thức Viète, đường tròn và hình trụ - nón - cầu (trọng tâm ôn thi vào 10)." },
        { id: "ngu_van", name: "Ngữ Văn", icon: "📚", color: "#ec4899", desc: "Tác phẩm văn học trung đại và hiện đại kinh điển, kỹ năng viết bài văn nghị luận sâu sắc." },
        { id: "khtn", name: "Khoa Học Tự Nhiên", icon: "🔬", color: "#10b981", desc: "Điện học, từ học, hóa học hữu cơ, di truyền học và biến dị Mendel." },
        { id: "tieng_anh", name: "Tiếng Anh", icon: "🌍", color: "#f59e0b", desc: "Luyện đề thi tuyển sinh vào lớp 10 các trường THPT." }
      ]
    },
    10: {
      title: "Lớp 10",
      level: "thpt",
      desc: "Bắt đầu cấp THPT với các môn học chuyên sâu theo định hướng nghề nghiệp.",
      subjects: [
        {
          id: "dia_ly",
          name: "Địa Lý",
          icon: "🌐",
          color: "#ea580c",
          desc: "Bản đồ học hiện đại, các quy luật địa lý tự nhiên, địa lý dân cư và địa lý các ngành kinh tế toàn cầu."
        },
        { id: "lich_su", name: "Lịch Sử", icon: "🏛️", color: "#d97706", desc: "Lịch sử và văn hóa nhân loại, các nền văn minh cổ đại và bản sắc văn hóa Việt Nam." },
        { id: "toan", name: "Toán Học", icon: "📐", color: "#3b82f6", desc: "Mệnh đề tập hợp, hàm số bậc hai, vectơ, thống kê và xác suất." },
        { id: "ngu_van", name: "Ngữ Văn", icon: "📚", color: "#ec4899", desc: "Sử thi anh hùng, thần thoại và kịch bản văn học kinh điển." },
        { id: "vat_li", name: "Vật Lí", icon: "⚡", color: "#06b6d4", desc: "Chuyển động thẳng biến đổi, ba định luật Newton, năng lượng và công." },
        { id: "hoa_hoc", name: "Hóa Học", icon: "🧪", color: "#10b981", desc: "Cấu tạo nguyên tử, liên kết hóa học và phản ứng oxi hóa - khử." }
      ]
    },
    11: {
      title: "Lớp 11",
      level: "thpt",
      desc: "Địa lý khu vực và các cường quốc trên thế giới; lịch sử bang giao quốc tế.",
      subjects: [
        {
          id: "dia_ly",
          name: "Địa Lý",
          icon: "🌐",
          color: "#ea580c",
          desc: "Địa lý kinh tế khu vực Đông Nam Á, Hoa Kỳ, Liên minh châu Âu (EU), Nhật Bản, Trung Quốc và vị thế Việt Nam."
        },
        { id: "lich_su", name: "Lịch Sử", icon: "🏛️", color: "#d97706", desc: "Các cuộc cách mạng tư sản, lịch sử chủ quyền biển đảo Việt Nam thời cận - hiện đại." },
        { id: "toan", name: "Toán Học", icon: "📐", color: "#3b82f6", desc: "Lượng giác, cấp số cộng, cấp số nhân, giới hạn, đạo hàm và hình học không gian." },
        { id: "ngu_van", name: "Ngữ Văn", icon: "📚", color: "#ec4899", desc: "Văn học lãng mạn, thơ mới 1932 - 1945 và văn tế, phóng sự." },
        { id: "vat_li", name: "Vật Lí", icon: "⚡", color: "#06b6d4", desc: "Dao động cơ học, sóng cơ, sóng ánh sáng và điện trường." }
      ]
    },
    12: {
      title: "Lớp 12",
      level: "thpt",
      desc: "Khóa học tốt nghiệp THPT và ôn thi Đại học: Trọng tâm Địa lý Việt Nam toàn diện!",
      subjects: [
        {
          id: "dia_ly",
          name: "Địa Lý",
          icon: "🇻🇳",
          color: "#ea580c",
          desc: "Toàn cảnh Địa lý Việt Nam: Tự nhiên, dân cư, đô thị hóa, chuyển dịch cơ cấu kinh tế, các vùng kinh tế trọng điểm và chiến lược biển Đông."
        },
        { id: "lich_su", name: "Lịch Sử", icon: "🏛️", color: "#d97706", desc: "Lịch sử Việt Nam từ 1919 đến nay: Các cuộc kháng chiến chống Pháp, Mỹ và công cuộc Đổi mới." },
        { id: "toan", name: "Toán Học", icon: "📐", color: "#3b82f6", desc: "Khảo sát hàm số, nguyên hàm - tích phân, số phức và hình học giải tích Oxyz trong không gian." },
        { id: "ngu_van", name: "Ngữ Văn", icon: "📚", color: "#ec4899", desc: "Các kiệt tác thơ văn kháng chiến: Tây Tiến, Việt Bắc, Đất Nước, Sóng, Người lái đò Sông Đà..." },
        { id: "tieng_anh", name: "Tiếng Anh", icon: "🌍", color: "#f59e0b", desc: "Luyện đề thi tốt nghiệp THPT Quốc gia đạt điểm 9-10." }
      ]
    }
  }
};
