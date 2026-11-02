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
      desc: "Mở rộng vốn từ vựng, tính toán nhanh và tìm hiểu thiên nhiên.",
      subjects: [
        { id: "toan", name: "Toán Học", icon: "📐", color: "#3b82f6", desc: "Phép nhân, chia trong bảng, các hình khối cơ bản." },
        { id: "tieng_viet", name: "Tiếng Việt", icon: "📖", color: "#ec4899", desc: "Tập làm văn, luyện từ và câu, đọc hiểu các câu chuyện." },
        { id: "tnxh", name: "Tự Nhiên & Xã Hội", icon: "🌱", color: "#10b981", desc: "Cây cối, con vật xung quanh ta và giữ gìn sức khỏe." },
        { id: "tieng_anh", name: "Tiếng Anh", icon: "🌍", color: "#f59e0b", desc: "Giao tiếp tiếng Anh cơ bản về bạn bè và đồ vật." }
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
      desc: "Bước vào môn Lịch sử và Địa lý chính thức - Khám phá dải đất hình chữ S Việt Nam!",
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
              icon: "🧩",
              url: "game.html",
              tags: ["Game Tương Tác", "34 Tỉnh Mới", "Hoàng Sa & Trường Sa", "Có Tính Điểm"],
              learningGoal: "Giúp học sinh Lớp 4 nhận biết hình dáng, vị trí địa lý, đặc sản và danh lam thắng cảnh các vùng miền trên bản đồ Việt Nam."
            }
          ]
        },
        { id: "toan", name: "Toán Học", icon: "📐", color: "#3b82f6", desc: "Phân số, hình bình hành, hình thoi và các bài toán đố có lời văn." },
        { id: "tieng_viet", name: "Tiếng Việt", icon: "📖", color: "#ec4899", desc: "Kể chuyện lịch sử, miêu tả đồ vật, cây cối và loài vật." },
        { id: "khoa_hoc", name: "Khoa Học", icon: "🔬", color: "#10b981", desc: "Nước, không khí, ánh sáng, nhiệt độ và sự sống của sinh vật." },
        { id: "tin_hoc", name: "Tin Học", icon: "💻", color: "#06b6d4", desc: "Soạn thảo văn bản và tìm kiếm thông tin bổ ích trên Internet." },
        { id: "tieng_anh", name: "Tiếng Anh", icon: "🌍", color: "#f59e0b", desc: "Luyện 4 kỹ năng Nghe - Nói - Đọc - Viết theo chuẩn tiểu học." }
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
          hasApp: true,
          badge: "⭐ ĐÃ CÓ APP TƯƠNG TÁC",
          desc: "Đặc điểm địa hình, khí hậu, sông ngòi, các vùng kinh tế Việt Nam và các cuộc kháng chiến vệ quốc vĩ đại.",
          apps: [
            {
              id: "vn_map_puzzle",
              title: "Em Yêu Bản Đồ Việt Nam",
              subtitle: "Game Ghép Hình 34 Tỉnh Thành & Biển Đảo Quê Hương",
              icon: "🧩",
              url: "game.html",
              tags: ["Chương Trình Lớp 5", "Địa Lý Vùng Miền", "34 Tỉnh Mới", "Trắc Nghiệm Vị Trí"],
              learningGoal: "Học sinh Lớp 5 ghi nhớ chính xác vị trí các tỉnh thành, trung tâm kinh tế và khẳng định chủ quyền biển đảo Tổ quốc."
            }
          ]
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
          hasApp: true,
          badge: "⭐ ĐÃ CÓ APP TƯƠNG TÁC",
          desc: "Bản đồ và phương pháp sử dụng bản đồ, các chuyển động của Trái Đất, lịch sử thế giới cổ đại và dựng nước Văn Lang - Âu Lạc.",
          apps: [
            {
              id: "vn_map_puzzle",
              title: "Em Yêu Bản Đồ Việt Nam",
              subtitle: "Game Ghép Hình 34 Tỉnh Thành & Biển Đảo Quê Hương",
              icon: "🧩",
              url: "game.html",
              tags: ["Kỹ Năng Bản Đồ", "Tọa Độ Địa Lý", "34 Tỉnh Thành", "Chủ Quyền Biển Đảo"],
              learningGoal: "Rèn luyện kỹ năng đọc bản đồ, xác định phương hướng và định vị các đơn vị hành chính Việt Nam."
            }
          ]
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
              id: "vn_map_puzzle",
              title: "Em Yêu Bản Đồ Việt Nam",
              subtitle: "Game Ghép Hình 34 Tỉnh Thành & Biển Đảo Quê Hương",
              icon: "🧩",
              url: "game.html",
              tags: ["Bản Đồ Hành Chính", "Vùng Miền Địa Lý", "Địa Danh Lịch Sử"],
              learningGoal: "Kết nối các địa danh lịch sử (Ải Chi Lăng, Bạch Đằng, Lam Sơn) với bản đồ các tỉnh thành ngày nay."
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
          hasApp: true,
          badge: "⭐ ĐÃ CÓ APP TƯƠNG TÁC",
          desc: "Đặc điểm địa hình, khí hậu, tài nguyên khoáng sản, các hệ thống sông lớn và vùng biển đảo Việt Nam.",
          apps: [
            {
              id: "vn_map_puzzle",
              title: "Em Yêu Bản Đồ Việt Nam",
              subtitle: "Game Ghép Hình 34 Tỉnh Thành & Biển Đảo Quê Hương",
              icon: "🧩",
              url: "game.html",
              tags: ["Địa Lý Lớp 8", "34 Tỉnh Thành", "Biển Đảo Việt Nam", "Vùng Tự Nhiên"],
              learningGoal: "Nắm vững toàn diện 5 vùng tự nhiên và các tỉnh thành ven biển, khẳng định chủ quyền Hoàng Sa & Trường Sa."
            }
          ]
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
          hasApp: true,
          badge: "⭐ ĐÃ CÓ APP TƯƠNG TÁC",
          desc: "Nghiên cứu kinh tế - xã hội các vùng miền: Trung du miền núi Bắc Bộ, Đồng bằng sông Hồng, Bắc Trung Bộ & Duyên hải miền Trung, Tây Nguyên, Đông Nam Bộ, ĐBSCL.",
          apps: [
            {
              id: "vn_map_puzzle",
              title: "Em Yêu Bản Đồ Việt Nam",
              subtitle: "Game Ghép Hình 34 Tỉnh Thành & Biển Đảo Quê Hương",
              icon: "🧩",
              url: "game.html",
              tags: ["Ôn Thi Vào 10", "Vùng Kinh Tế", "34 Tỉnh Mới", "Thế Mạnh Vùng Miền"],
              learningGoal: "Hiểu rõ thế mạnh kinh tế, nông - lâm - thủy sản, công nghiệp và du lịch của 34 tỉnh thành và các siêu đô thị mới."
            }
          ]
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
          hasApp: true,
          badge: "⭐ ĐÃ CÓ APP TƯƠNG TÁC",
          desc: "Bản đồ học hiện đại, các quy luật địa lý tự nhiên, địa lý dân cư và địa lý các ngành kinh tế toàn cầu.",
          apps: [
            {
              id: "vn_map_puzzle",
              title: "Em Yêu Bản Đồ Việt Nam",
              subtitle: "Game Ghép Hình 34 Tỉnh Thành & Biển Đảo Quê Hương",
              icon: "🧩",
              url: "game.html",
              tags: ["Địa Lý 10", "GIS & Bản Đồ Số", "34 Tỉnh Mới", "Chủ Quyền Quốc Gia"],
              learningGoal: "Ứng dụng công nghệ bản đồ số vector trực quan trong phân tích địa lý hành chính và kinh tế lãnh thổ."
            }
          ]
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
          hasApp: true,
          badge: "⭐ ĐÃ CÓ APP TƯƠNG TÁC",
          desc: "Địa lý kinh tế khu vực Đông Nam Á, Hoa Kỳ, Liên minh châu Âu (EU), Nhật Bản, Trung Quốc và vị thế Việt Nam.",
          apps: [
            {
              id: "vn_map_puzzle",
              title: "Em Yêu Bản Đồ Việt Nam",
              subtitle: "Game Ghép Hình 34 Tỉnh Thành & Biển Đảo Quê Hương",
              icon: "🧩",
              url: "game.html",
              tags: ["Địa Lý 11", "Vị Thế Việt Nam", "34 Tỉnh Mới", "Hội Nhập Quốc Tế"],
              learningGoal: "Định vị vị thế địa kinh tế của Việt Nam trong khu vực Đông Nam Á và quốc tế qua hệ thống bản đồ số."
            }
          ]
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
          hasApp: true,
          badge: "⭐ ĐÃ CÓ APP TƯƠNG TÁC",
          desc: "Toàn cảnh Địa lý Việt Nam: Tự nhiên, dân cư, đô thị hóa, chuyển dịch cơ cấu kinh tế, các vùng kinh tế trọng điểm và chiến lược biển Đông.",
          apps: [
            {
              id: "vn_map_puzzle",
              title: "Em Yêu Bản Đồ Việt Nam",
              subtitle: "Game Ghép Hình 34 Tỉnh Thành & Biển Đảo Quê Hương",
              icon: "🧩",
              url: "game.html",
              tags: ["Ôn Thi THPT Quốc Gia", "Địa Lý Việt Nam", "34 Tỉnh Mới", "Vùng Kinh Tế Trọng Điểm"],
              learningGoal: "Nắm vững toàn diện 34 đơn vị hành chính cấp tỉnh mới, các vùng kinh tế trọng điểm và giải bài thi Địa lý đạt điểm tối đa."
            }
          ]
        },
        { id: "lich_su", name: "Lịch Sử", icon: "🏛️", color: "#d97706", desc: "Lịch sử Việt Nam từ 1919 đến nay: Các cuộc kháng chiến chống Pháp, Mỹ và công cuộc Đổi mới." },
        { id: "toan", name: "Toán Học", icon: "📐", color: "#3b82f6", desc: "Khảo sát hàm số, nguyên hàm - tích phân, số phức và hình học giải tích Oxyz trong không gian." },
        { id: "ngu_van", name: "Ngữ Văn", icon: "📚", color: "#ec4899", desc: "Các kiệt tác thơ văn kháng chiến: Tây Tiến, Việt Bắc, Đất Nước, Sóng, Người lái đò Sông Đà..." },
        { id: "tieng_anh", name: "Tiếng Anh", icon: "🌍", color: "#f59e0b", desc: "Luyện đề thi tốt nghiệp THPT Quốc gia đạt điểm 9-10." }
      ]
    }
  }
};
