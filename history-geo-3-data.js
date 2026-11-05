/**
 * history-geo-3-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Lịch Sử & Địa Lý Lớp 3
 * Chương trình Giáo dục Phổ thông (GDPT) 2018
 * Biên soạn chuẩn mực, trực quan, phân hóa 4 cấp độ nhận thức & lời giải chi tiết.
 */

window.HISTORY_GEO3_DATA = {
  topics: [
    {
      id: "chu_de_phuong_huong_trai_dat",
      name: "Chủ Đề 1: Phương Hướng, Bản Đồ & Trái Đất",
      icon: "🧭",
      desc: "Cách xác định 4 phương hướng chính, sử dụng la bàn, đọc bản đồ cơ bản và khám phá Trái Đất, 3 đới khí hậu.",
      theory: {
        highlights: [
          {
            icon: "☀️",
            title: "Bốn phương hướng chính trong không gian",
            content: "• Có <strong>4 phương hướng chính</strong> trong không gian gồm: <strong>Đông, Tây, Nam, Bắc</strong>.<br/>• <strong>Quy luật tự nhiên:</strong> Mặt Trời luôn mọc ở hướng <em>Đông</em> vào buổi sáng và lặn ở hướng <em>Tây</em> vào buổi chiều muộn.<br/>• <strong>Cách xác định phương hướng bằng Mặt Trời:</strong> Buổi sáng, em đứng thẳng dang rộng hai tay, tay phải hướng về phía Mặt Trời mọc (hướng Đông) thì tay trái là hướng Tây, trước mặt em là hướng Bắc và sau lưng em là hướng Nam."
          },
          {
            icon: "🧭",
            title: "La bàn & Kỹ năng xác định phương hướng",
            content: "• <strong>La bàn</strong> là dụng cụ chuyên dùng để xác định phương hướng một cách chính xác mọi lúc mọi nơi.<br/>• <strong>Cấu tạo cốt lõi:</strong> Kim la bàn được làm bằng nam châm, luôn tự động định vị theo trục <em>Bắc - Nam</em>. Đầu kim màu đỏ (hoặc có chữ N - North) luôn chỉ về <strong>hướng Bắc</strong>, đầu đối diện (chữ S - South) chỉ về <strong>hướng Nam</strong>.<br/>• <strong>Ứng dụng:</strong> Giúp các bác thuyền trưởng lái tàu trên đại dương, phi công lái máy bay và các nhà thám hiểm leo núi không bao giờ bị lạc."
          },
          {
            icon: "🗺️",
            title: "Làm quen với Bản đồ & Lược đồ địa lý",
            content: "• <strong>Bản đồ</strong> là hình vẽ thu nhỏ một khu vực hoặc toàn bộ bề mặt Trái Đất lên mặt phẳng theo tỉ lệ nhất định.<br/>• <strong>Quy ước phương hướng trên bản đồ:</strong> Phía <em>trên</em> là hướng <strong>Bắc</strong>, phía <em>dưới</em> là hướng <strong>Nam</strong>, bên <em>phải</em> là hướng <strong>Đông</strong>, bên <em>trái</em> là hướng <strong>Tây</strong>.<br/>• <strong>Bảng chú giải:</strong> Giải thích ý nghĩa của các ký hiệu trên bản đồ (ngôi sao đỏ là Thủ đô, chấm tròn là thành phố, đường màu xanh là sông ngòi, màu nâu là đồi núi...)."
          },
          {
            icon: "🌍",
            title: "Trái Đất hình cầu & Ba đới khí hậu",
            content: "• <strong>Hình dạng:</strong> Trái Đất có dạng <em>hình cầu</em> (hơi dẹt ở hai cực). <em>Quả địa cầu</em> chính là mô hình thu nhỏ chính xác nhất của Trái Đất.<br/>• <strong>Hiện tượng ngày và đêm:</strong> Do Trái Đất tự quay quanh trục từ Tây sang Đông, phần được Mặt Trời chiếu sáng là ban ngày, phần bị khuất trong bóng tối là ban đêm.<br/>• <strong>3 đới khí hậu chính:</strong><br/>  - <em>Đới nóng (Nhiệt đới):</em> Nằm ở khu vực xích đạo, quanh năm nóng bức. Việt Nam nằm trong đới khí hậu này.<br/>  - <em>Hai đới ôn hòa (Ôn đới):</em> Khí hậu mát mẻ, có 4 mùa Xuân - Hạ - Thu - Đông rõ rệt.<br/>  - <em>Hai đới lạnh (Hàn đới):</em> Nằm ở hai vùng cực Bắc và Nam, băng giá quanh năm."
          }
        ]
      },
      questions: [
        {
          id: "hg3_1_1",
          level: 1,
          question: "Mặt Trời mọc vào buổi sáng ở hướng nào và lặn vào buổi chiều ở hướng nào?",
          options: [
            "Mọc ở hướng Tây, lặn ở hướng Đông",
            "Mọc ở hướng Đông, lặn ở hướng Tây",
            "Mọc ở hướng Bắc, lặn ở hướng Nam",
            "Mọc ở hướng Nam, lặn ở hướng Bắc"
          ],
          correct: 1,
          explanation: "Mặt Trời luôn mọc ở hướng Đông vào buổi sáng và lặn ở hướng Tây vào buổi chiều."
        },
        {
          id: "hg3_1_2",
          level: 1,
          question: "Trên bản đồ địa lý thông thường, phía <strong>trên cùng</strong> của bản đồ quy ước là hướng nào?",
          options: ["Hướng Nam", "Hướng Đông", "Hướng Bắc", "Hướng Tây"],
          correct: 2,
          explanation: "Theo quy ước quốc tế về bản đồ: phía trên là hướng Bắc, phía dưới là hướng Nam, bên phải là hướng Đông và bên trái là hướng Tây."
        },
        {
          id: "hg3_1_3",
          level: 2,
          question: "Đầu kim sơn màu đỏ có chữ <strong>N</strong> của chiếc la bàn luôn luôn chỉ về hướng nào?",
          options: ["Hướng Bắc (North)", "Hướng Nam (South)", "Hướng Đông (East)", "Hướng Tây (West)"],
          correct: 0,
          explanation: "Chữ N viết tắt của North trong tiếng Anh nghĩa là hướng Bắc. Đầu kim la bàn luôn bị hút về cực Bắc từ trường Trái Đất."
        },
        {
          id: "hg3_1_4",
          level: 2,
          question: "Nước Việt Nam chúng ta nằm trong đới khí hậu nào trên Trái Đất?",
          options: [
            "Đới lạnh (Hàn đới)",
            "Đới ôn hòa (Ôn đới)",
            "Đới nóng (Nhiệt đới)",
            "Khu vực băng tuyết vĩnh cửu"
          ],
          correct: 2,
          explanation: "Việt Nam nằm ở khu vực gần xích đạo thuộc đới nóng (nhiệt đới gió mùa), có lượng ánh sáng dồi dào và nhiệt độ cao quanh năm."
        },
        {
          id: "hg3_1_5",
          level: 3,
          question: "Vào một buổi sáng nắng đẹp, Nam đứng dang hai tay sao cho tay phải chỉ thẳng về phía Mặt Trời mọc. Hỏi hướng trước mặt của Nam là hướng nào?",
          options: ["Hướng Đông", "Hướng Tây", "Hướng Bắc", "Hướng Nam"],
          correct: 2,
          explanation: "Khi tay phải chỉ hướng Đông (Mặt Trời mọc), tay trái sẽ là hướng Tây, hướng trước mặt Nam là hướng Bắc và sau lưng là hướng Nam."
        },
        {
          id: "hg3_1_6",
          level: 3,
          question: "Bộ phận nào trên bản đồ giúp em đọc hiểu ý nghĩa của các màu sắc, đường nét và ký hiệu hình vẽ?",
          options: [
            "Tên của bản đồ",
            "Bảng chú giải",
            "Tỉ lệ số của bản đồ",
            "Khung viền bao quanh bản đồ"
          ],
          correct: 1,
          explanation: "Bảng chú giải giải thích ý nghĩa các ký hiệu quy ước trên bản đồ (như ký hiệu thủ đô, sân bay, sông ngòi, độ cao núi...)."
        },
        {
          id: "hg3_1_7",
          level: 4,
          question: "Vì sao trên Trái Đất lại có hiện tượng ngày và đêm luân phiên nhau liên tục mà không phải sáng mãi hay tối mãi?",
          options: [
            "Vì Mặt Trời quay quanh Trái Đất mỗi ngày một vòng",
            "Vì Trái Đất có hình cầu và tự quay quanh trục của mình từ Tây sang Đông",
            "Vì Mặt Trăng bay che khuất ánh sáng Mặt Trời",
            "Vì các đám mây khổng lồ che phủ bầu trời"
          ],
          correct: 1,
          explanation: "Do Trái Đất có hình cầu và luôn tự quay quanh trục từ Tây sang Đông, nên một nửa luôn được Mặt Trời chiếu sáng (ngày) và một nửa nằm trong bóng tối (đêm)."
        },
        {
          id: "hg3_1_8",
          level: 4,
          question: "Một nhóm bạn đi cắm trại trong rừng, không may làm rơi mất la bàn và điện thoại hết pin. Khi đó là buổi chiều hoàng hôn trời nắng ráo, nhóm nên làm thế nào để tìm hướng Tây và trở về bìa rừng?",
          options: [
            "Đi theo hướng ngọn gió đang thổi",
            "Quan sát vị trí Mặt Trời đang lặn dần về phía chân trời, đó chính là hướng Tây",
            "Ngồi yên một chỗ đợi trăng lên để xem bóng cây",
            "Cứ đi thẳng về hướng bóng của mình đổ trên mặt đất"
          ],
          correct: 1,
          explanation: "Buổi chiều tà, Mặt Trời lặn về hướng Tây. Việc quan sát điểm lặn của Mặt Trời là cách định vị tự nhiên chính xác và nhanh nhất."
        }
      ]
    },
    {
      id: "chu_de_dat_nuoc_bien_dao",
      name: "Chủ Đề 2: Đất Nước, Biển Đảo & Con Người Việt Nam",
      icon: "🇻🇳",
      desc: "Hình dáng chữ S, các nước láng giềng, Thủ đô Hà Nội, TP.HCM, Biển Đông và chủ quyền Hoàng Sa - Trường Sa.",
      theory: {
        highlights: [
          {
            icon: "🗺️",
            title: "Hình dáng và vị trí địa lý của Việt Nam",
            content: "• Đất nước Việt Nam nằm ở <strong>bán đảo Đông Dương</strong>, thuộc khu vực <strong>Đông Nam Á</strong> của châu Á.<br/>• Phần đất liền của nước ta có hình dáng uốn lượn cong cong như <strong>hình chữ S</strong>.<br/>• <strong>Các nước láng giềng tiếp giáp đất liền:</strong> Phía Bắc giáp <em>Trung Quốc</em>; phía Tây giáp <em>Lào</em> và <em>Campuchia</em>; phía Đông và phía Nam giáp <em>Biển Đông</em> rộng lớn."
          },
          {
            icon: "🏛️",
            title: "Hai trung tâm lớn: Hà Nội & TP. Hồ Chí Minh",
            content: "• <strong>Thủ đô Hà Nội:</strong> Trái tim của cả nước, ngàn năm văn hiến, nơi đặt các cơ quan đầu não của Đảng và Nhà nước; có Hồ Gươm, Lăng Bác, Chùa Một Cột, Cầu Long Biên...<br/>• <strong>Thành phố Hồ Chí Minh:</strong> Đô thị đông dân và sầm uất nhất cả nước, trung tâm kinh tế, văn hóa, khoa học kỹ thuật sôi động bậc nhất phía Nam; có chợ Bến Thành, Dinh Độc Lập, Bến Nhà Rồng..."
          },
          {
            icon: "🌊",
            title: "Biển Đông & Quần đảo Hoàng Sa, Trường Sa",
            content: "• Đường bờ biển Việt Nam dài hơn <strong>3.260 km</strong>, trải dài từ Móng Cái (Quảng Ninh) đến Hà Tiên (Kiên Giang).<br/>• <strong>Biển Đông</strong> giàu tài nguyên: Cung cấp hàng triệu tấn tôm, cá, mực mỗi năm; mỏ dầu khí dưới thềm lục địa; cảnh đẹp du lịch (Hạ Long, Nha Trang, Phú Quốc...).<br/>• Hai quần đảo <strong>Hoàng Sa</strong> và <strong>Trường Sa</strong> là một phần máu thịt thiêng liêng, bất khả xâm phạm của Tổ quốc Việt Nam từ bao đời nay."
          },
          {
            icon: "🤝",
            title: "Đại gia đình 54 dân tộc anh em",
            content: "• Nước ta có <strong>54 dân tộc anh em</strong> cùng chung sống chan hòa, đoàn kết dưới một mái nhà Tổ quốc Việt Nam.<br/>• Dân tộc <em>Kinh (Việt)</em> có số dân đông nhất, sinh sống trên khắp mọi miền đất nước.<br/>• Các dân tộc anh em khác (Tày, Thái, Mường, H'Mông, Dao, Ê Đê, Ba Na, Chăm, Khmer...) chủ yếu sinh sống ở vùng núi, trung du và Tây Nguyên, tạo nên bức tranh văn hóa đa dạng, rực rỡ sắc màu."
          }
        ]
      },
      questions: [
        {
          id: "hg3_2_1",
          level: 1,
          question: "Phần đất liền của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam có hình dáng giống chữ cái nào?",
          options: ["Chữ C", "Chữ S", "Chữ L", "Chữ V"],
          correct: 1,
          explanation: "Đất nước Việt Nam trên bản đồ địa lý thế giới có hình dáng thon dài uốn cong giống hình chữ S."
        },
        {
          id: "hg3_2_2",
          level: 1,
          question: "Trái tim của cả nước, trung tâm chính trị - hành chính quốc gia của Việt Nam là thành phố nào?",
          options: ["Thành phố Đà Nẵng", "Thủ đô Hà Nội", "Thành phố Hải Phòng", "Thành phố Cần Thơ"],
          correct: 1,
          explanation: "Hà Nội là Thủ đô của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam, trung tâm chính trị, văn hóa của cả nước."
        },
        {
          id: "hg3_2_3",
          level: 2,
          question: "Phía <strong>Đông</strong> và phía <strong>Nam</strong> của phần đất liền nước ta tiếp giáp với vùng biển nào?",
          options: ["Biển Đen", "Biển Đỏ", "Biển Đông", "Biển Ban-tích"],
          correct: 2,
          explanation: "Toàn bộ dải bờ biển phía Đông và phía Nam của Việt Nam mở rộng hướng ra Biển Đông."
        },
        {
          id: "hg3_2_4",
          level: 2,
          question: "Hai quần đảo nào sau đây thuộc chủ quyền thiêng liêng, bất khả xâm phạm của đất nước Việt Nam?",
          options: [
            "Quần đảo Hoàng Sa và Quần đảo Trường Sa",
            "Quần đảo Ha-oai và Quần đảo Phú Quốc",
            "Quần đảo Côn Lôn và Quần đảo Phi-líp-pin",
            "Quần đảo Mã Lai và Quần đảo In-đô-nê-xi-a"
          ],
          correct: 0,
          explanation: "Quần đảo Hoàng Sa (thuộc TP. Đà Nẵng) và Trường Sa (thuộc tỉnh Khánh Hòa) là lãnh thổ chủ quyền biển đảo thiêng liêng của Việt Nam."
        },
        {
          id: "hg3_2_5",
          level: 3,
          question: "Những quốc gia nào dưới đây có chung đường biên giới trên đất liền với đất nước Việt Nam?",
          options: [
            "Trung Quốc, Lào và Campuchia",
            "Thái Lan, Lào và Mi-an-ma",
            "Trung Quốc, Nhật Bản và Hàn Quốc",
            "Mã Lai, In-đô-nê-xi-a và Xin-ga-po"
          ],
          correct: 0,
          explanation: "Việt Nam có chung đường biên giới trên đất liền với 3 nước: Phía Bắc giáp Trung Quốc, phía Tây giáp Lào và Campuchia."
        },
        {
          id: "hg3_2_6",
          level: 3,
          question: "Đất nước Việt Nam là ngôi nhà chung của bao nhiêu dân tộc anh em?",
          options: ["50 dân tộc", "52 dân tộc", "54 dân tộc", "63 dân tộc"],
          correct: 2,
          explanation: "Đất nước Việt Nam có 54 dân tộc anh em, trong đó người Kinh chiếm số lượng đông nhất."
        },
        {
          id: "hg3_2_7",
          level: 4,
          question: "Bờ biển dài hơn 3.260 km và vùng Biển Đông rộng lớn mang lại cho đất nước ta những lợi ích to lớn nào?",
          options: [
            "Cung cấp nguồn thủy hải sản dồi dào, khoáng sản dầu khí, phát triển du lịch và giao thương hàng hải quốc tế",
            "Chỉ dùng để lấy cát xây nhà và tắm biển vào mùa hè",
            "Chỉ cung cấp muối ăn cho các gia đình nông thôn",
            "Không mang lại giá trị kinh tế nào đáng kể"
          ],
          correct: 0,
          explanation: "Biển Đông mang lại nguồn lợi vô cùng đa dạng: hải sản phong phú, dầu khí thềm lục địa, du lịch biển đảo nổi tiếng và các tuyến hàng hải tấp nập kết nối toàn cầu."
        },
        {
          id: "hg3_2_8",
          level: 4,
          question: "Để khẳng định tình yêu và trách nhiệm đối với chủ quyền biển đảo quê hương, một học sinh lớp 3 như em có thể làm việc gì thiết thực nhất?",
          options: [
            "Tích cực học tập, tìm hiểu lịch sử địa lý, giữ gìn môi trường biển sạch đẹp và gửi thư, tranh vẽ động viên các chú bộ đội hải quân",
            "Chờ đến khi học đại học mới quan tâm đến biển đảo",
            "Chỉ cần đi du lịch tắm biển nhiều lần trong năm",
            "Không xả rác ở lớp học còn ra bãi biển thì xả rác thoải mái"
          ],
          correct: 0,
          explanation: "Học sinh lớp 3 thể hiện tình yêu biển đảo qua việc chăm chỉ học tập, hiểu biết về Hoàng Sa - Trường Sa, giữ gìn môi trường biển và tri ân các chú bộ đội nơi đầu sóng ngọn gió."
        }
      ]
    },
    {
      id: "chu_de_dia_phuong_lang_nghe",
      name: "Chủ Đề 3: Địa Phương Em - Sản Xuất & Làng Nghề Truyền Thống",
      icon: "🌾",
      desc: "Địa lý quê hương, hoạt động nông nghiệp trồng trọt chăn nuôi và các làng nghề thủ công nổi tiếng 3 miền.",
      theory: {
        highlights: [
          {
            icon: "🏡",
            title: "Khám phá địa phương nơi em đang sinh sống",
            content: "• Mỗi học sinh cần nắm rõ <strong>địa chỉ quê hương</strong> của mình: Tên xóm/thôn/tổ dân phố, xã/phường, quận/huyện và tỉnh/thành phố trực thuộc.<br/>• Mỗi vùng quê có nét đặc trưng riêng về địa hình (đồng bằng màu mỡ, miền núi non cao, hay duyên hải ven biển), phong tục tập quán và sản vật truyền thống.<br/>• Tình yêu quê hương, đất nước được bắt đầu từ tình cảm gắn bó với ngôi nhà, trường học, thầy cô bạn bè và bà con chòm xóm."
          },
          {
            icon: "🌾",
            title: "Hoạt động sản xuất nông nghiệp trù phú",
            content: "• <strong>Trồng trọt:</strong> Cây <em>lúa nước</em> là cây lương thực chính nuôi sống toàn dân (Đồng bằng sông Hồng và Đồng bằng sông Cửu Long là hai vựa lúa lớn nhất); ngoài ra còn có ngô, khoai, cây ăn quả (cam, bưởi, thanh long, sầu riêng) và cây chè, cà phê.<br/>• <strong>Chăn nuôi:</strong> Nuôi trâu, bò, lợn, gà, vịt để lấy thịt, trứng, sữa và hỗ trợ cày cấy.<br/>• <strong>Thủy hải sản:</strong> Nuôi tôm sú, cá tra, cá basa và đánh bắt xa bờ trên biển."
          },
          {
            icon: "🏺",
            title: "Những làng nghề thủ công truyền thống rực rỡ",
            content: "• <strong>Gốm Bát Tràng (Hà Nội) & Gốm Chu Đậu (Hải Dương):</strong> Nghệ nhân nặn đất sét, tráng men và nung lò tạo nên những chiếc bình, bát đĩa tuyệt đẹp.<br/>• <strong>Lụa Vạn Phúc (Hà Đông - Hà Nội):</strong> Dệt nên những dải lụa tơ tằm óng ả, mềm mại, mát rượi mùa hè, ấm áp mùa đông.<br/>• <strong>Tranh dân gian Đông Hồ (Bắc Ninh):</strong> In bằng bản khắc gỗ trên giấy điệp quét vỏ sò điệp óng ánh, dùng màu tự nhiên từ lá cây, than tre.<br/>• <strong>Chiếu cói Nga Sơn (Thanh Hóa):</strong> Sợi cói bền dẻo dệt thành những chiếc chiếu hoa rực rỡ.<br/>• <strong>Nón lá làng Chuông (Hà Nội) & Nón bài thơ xứ Huế:</strong> Chiếc nón che mưa che nắng duyên dáng của người Việt Nam."
          },
          {
            icon: "🌱",
            title: "Ý thức bảo vệ môi trường trong sản xuất",
            content: "• Không vứt bao bì phân bón, vỏ chai thuốc bảo vệ thực vật bừa bãi xuống mương nước ruộng đồng.<br/>• Sử dụng nguồn nước tiết kiệm, xử lý rác thải và nước thải chăn nuôi qua hầm khí sinh học bioga.<br/>• Tự hào quảng bá các sản phẩm nông sản sạch và làng nghề thủ công của quê hương đến bạn bè khắp nơi."
          }
        ]
      },
      questions: [
        {
          id: "hg3_3_1",
          level: 1,
          question: "Cây trồng nào là cây lương thực chủ đạo và quan trọng nhất đối với đời sống người dân Việt Nam?",
          options: ["Cây lúa nước", "Cây cà phê", "Cây mía đường", "Cây cao su"],
          correct: 0,
          explanation: "Cây lúa nước cung cấp hạt gạo là nguồn lương thực chính trong bữa ăn hàng ngày của người dân Việt Nam."
        },
        {
          id: "hg3_3_2",
          level: 1,
          question: "Làng nghề thủ công Bát Tràng (thuộc Thủ đô Hà Nội) nổi tiếng khắp cả nước và thế giới với sản phẩm truyền thống nào?",
          options: ["Đúc đồng", "Làm đồ gốm sứ", "Dệt vải lụa tơ tằm", "Chạm khắc gỗ"],
          correct: 1,
          explanation: "Làng gốm Bát Tràng có lịch sử hàng trăm năm bên bờ sông Hồng, nổi tiếng với các sản phẩm gốm sứ tinh xảo."
        },
        {
          id: "hg3_3_3",
          level: 2,
          question: "Hai vùng đồng bằng châu thổ nào là hai 'vựa lúa gạo' lớn nhất của đất nước Việt Nam?",
          options: [
            "Đồng bằng sông Hồng và Đồng bằng sông Cửu Long",
            "Đồng bằng sông Mã và Đồng bằng sông Hương",
            "Đồng bằng duyên hải miền Trung và Tây Nguyên",
            "Đồng bằng sông Cả và Thung lũng Mường Thanh"
          ],
          correct: 0,
          explanation: "Đồng bằng sông Cửu Long (Nam Bộ) và Đồng bằng sông Hồng (Bắc Bộ) là hai vựa lúa trù phú lớn nhất của nước ta."
        },
        {
          id: "hg3_3_4",
          level: 2,
          question: "Dòng tranh dân gian truyền thống nào được in trên giấy điệp bằng bản khắc gỗ với màu sắc tự nhiên từ hoa hòe, than tre, rơm nếp?",
          options: [
            "Tranh sơn dầu hiện đại",
            "Tranh dân gian Đông Hồ (Bắc Ninh)",
            "Tranh cát biểu diễn",
            "Tranh thủy mặc Trung Hoa"
          ],
          correct: 1,
          explanation: "Tranh Đông Hồ (xã Song Hồ, huyện Thuận Thành, Bắc Ninh) in trên giấy dó quét điệp lấp lánh mang đậm tâm hồn làng quê Việt Nam."
        },
        {
          id: "hg3_3_5",
          level: 3,
          question: "Làng Vạn Phúc ở quận Hà Đông (Hà Nội) từ lâu đời đã nức tiếng với nghề thủ công truyền thống nào?",
          options: [
            "Làm bánh chưng, bánh giầy",
            "Dệt lụa tơ tằm mềm mại, óng ả",
            "Rèn dao kéo kim loại",
            "Làm tranh thêu chữ thập"
          ],
          correct: 1,
          explanation: "Lụa Vạn Phúc (lụa Hà Đông) là niềm tự hào của nghề dệt lụa cổ truyền Việt Nam, nức tiếng mềm mại và thoáng mát."
        },
        {
          id: "hg3_3_6",
          level: 3,
          question: "Sau mùa gặt lúa, hành động nào dưới đây của người nông dân là đúng đắn và bảo vệ môi trường sống tốt nhất?",
          options: [
            "Chất đống rơm rạ đốt ngay ngoài đường gây khói mịt mù làm cản trở giao thông",
            "Thu gom rơm rạ để ủ làm phân hữu cơ, trồng nấm rơm hoặc làm thức ăn cho trâu bò",
            "Gạt toàn bộ rơm rạ xuống mương máng tưới tiêu",
            "Đốt rơm rạ cạnh trạm xăng dầu"
          ],
          correct: 1,
          explanation: "Đốt rơm rạ bừa bãi gây ô nhiễm không khí; tận dụng rơm rạ làm phân sinh học, trồng nấm hoặc thức ăn gia súc vừa bảo vệ môi trường vừa mang lại hiệu quả kinh tế."
        },
        {
          id: "hg3_3_7",
          level: 4,
          question: "Việc giữ gìn và phát triển các làng nghề thủ công truyền thống ở các địa phương mang lại ý nghĩa to lớn nào?",
          options: [
            "Tạo việc làm cho người dân, bảo tồn nét đẹp văn hóa dân tộc và thu hút khách du lịch trong nước, quốc tế",
            "Chỉ để người già làm cho đỡ buồn trong lúc rảnh rỗi",
            "Làm mất nhiều thời gian hơn là mua hàng hóa từ nước ngoài",
            "Không mang lại giá trị kinh tế nào cho địa phương"
          ],
          correct: 0,
          explanation: "Làng nghề thủ công vừa giải quyết việc làm, tăng thu nhập cho nhân dân, vừa gìn giữ di sản văn hóa quý báu và phát triển du lịch bền vững."
        },
        {
          id: "hg3_3_8",
          level: 4,
          question: "Nếu có dịp giới thiệu về quê hương của mình với một người bạn nước ngoài, em sẽ tự hào chia sẻ điều gì đầu tiên?",
          options: [
            "Tên địa phương, những danh lam thắng cảnh, món ăn đặc sản truyền thống và con người quê em thân thiện, mến khách",
            "Nói rằng quê mình không có gì đặc sắc cả",
            "Chỉ khoe về những trò chơi điện tử em hay chơi",
            "Bảo bạn tự tra cứu trên mạng mà không muốn nói chuyện"
          ],
          correct: 0,
          explanation: "Giới thiệu cảnh đẹp, nét đẹp lịch sử, đặc sản và lòng mến khách là hành động thể hiện tình yêu quê hương và tinh thần hiếu khách của người Việt Nam."
        }
      ]
    },
    {
      id: "chu_de_di_tich_danh_thang",
      name: "Chủ Đề 4: Di Tích Lịch Sử & Danh Lam Thắng Cảnh Non Nước",
      icon: "🏛️",
      desc: "Phân biệt di tích và danh lam thắng cảnh; khám phá Đền Hùng, Văn Miếu, Vịnh Hạ Long, Cố đô Huế, Phong Nha...",
      theory: {
        highlights: [
          {
            icon: "📜",
            title: "Phân biệt Di tích lịch sử và Danh lam thắng cảnh",
            content: "• <strong>Di tích lịch sử - văn hóa:</strong> Là công trình xây dựng, địa điểm hoặc hiện vật có giá trị gắn liền với các sự kiện lịch sử, các vị anh hùng dân tộc hoặc danh nhân văn hóa (ví dụ: Đền Hùng, Văn Miếu, Cổ Loa, Địa đạo Củ Chi).<br/>• <strong>Danh lam thắng cảnh:</strong> Là cảnh quan thiên nhiên đẹp hoặc cảnh quan có sự kết hợp giữa thiên nhiên kỳ vĩ và công trình kiến trúc độc đáo (ví dụ: Vịnh Hạ Long, Động Phong Nha, Núi Fansipan, Hồ Ba Bể)."
          },
          {
            icon: "⛩️",
            title: "Những di tích lịch sử ngàn năm văn hiến tiêu biểu",
            content: "• <strong>Khu di tích Đền Hùng (Phú Thọ):</strong> Tọa lạc trên núi Nghĩa Lĩnh, nơi thờ các Vua Hùng có công dựng nước Văn Lang, cội nguồn của dân tộc Việt.<br/>• <strong>Văn Miếu - Quốc Tử Giám (Hà Nội):</strong> Xây dựng từ thời nhà Lý (năm 1070), là trường Đại học đầu tiên của nước ta, nơi lưu giữ 82 tấm Bia Tiến sĩ vinh danh truyền thống hiếu học.<br/>• <strong>Cố đô Huế (Thừa Thiên Huế):</strong> Quần thể thành quách, cung điện nguy nga của triều Nguyễn bên dòng sông Hương, được UNESCO công nhận là Di sản văn hóa thế giới.<br/>• <strong>Phố cổ Hội An (Quảng Nam):</strong> Đô thị cổ rêu phong với chùa Cầu, nhà cổ hàng trăm năm tuổi."
          },
          {
            icon: "🏞️",
            title: "Kỳ quan danh lam thắng cảnh non nước hữu tình",
            content: "• <strong>Vịnh Hạ Long (Quảng Ninh):</strong> Kỳ quan thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi nhấp nhô muôn hình vạn trạng trên làn nước xanh màu ngọc bích (hòn Trống Mái, hang Sửng Sốt, động Thiên Cung).<br/>• <strong>Vườn quốc gia Phong Nha - Kẻ Bàng (Quảng Bình):</strong> Được mệnh danh là 'Vương quốc hang động' với dòng sông ngầm kỳ vĩ và những khối thạch nhũ lung linh tuyệt tác.<br/>• <strong>Hồ Hoàn Kiếm (Hà Nội):</strong> Trái tim của Thủ đô, gắn liền với truyền thuyết vua Lê Lợi trả gươm báu cho Rùa Vàng sau khi đánh đuổi quân Minh."
          },
          {
            icon: "🌸",
            title: "Quy tắc ứng xử văn minh khi đến thăm di tích",
            content: "• Ăn mặc gọn gàng, trang nghiêm, lịch sự khi bước vào các di tích, đền đài tưởng niệm.<br/>• Đi nhẹ, nói khẽ, không hò hét cười đùa xô đẩy làm ảnh hưởng đến không gian tôn nghiêm.<br/>• <em>Tuyệt đối không:</em> Viết, vẽ bậy lên tường, cột gỗ, bia đá hoặc sờ tay vào các hiện vật quý.<br/>• Luôn giữ gìn vệ sinh chung, bỏ rác đúng nơi quy định để bảo vệ cảnh quan di sản."
          }
        ]
      },
      questions: [
        {
          id: "hg3_4_1",
          level: 1,
          question: "Nơi nào được coi là trường Đại học đầu tiên của đất nước Việt Nam, biểu tượng cho truyền thống hiếu học của dân tộc?",
          options: [
            "Trường Quốc Học Huế",
            "Văn Miếu - Quốc Tử Giám (Hà Nội)",
            "Hoàng thành Thăng Long",
            "Đền Đô (Bắc Ninh)"
          ],
          correct: 1,
          explanation: "Văn Miếu - Quốc Tử Giám xây dựng từ thế kỷ 11 thời nhà Lý, là trường đại học đầu tiên đào tạo hiền tài cho đất nước."
        },
        {
          id: "hg3_4_2",
          level: 1,
          question: "Vịnh Hạ Long - kỳ quan thiên nhiên thế giới với hàng ngàn đảo đá vôi kỳ vĩ nằm ở tỉnh nào của nước ta?",
          options: ["Tỉnh Hải Phòng", "Tỉnh Quảng Ninh", "Tỉnh Nam Định", "Tỉnh Thanh Hóa"],
          correct: 1,
          explanation: "Vịnh Hạ Long thuộc tỉnh Quảng Ninh, hai lần được UNESCO công nhận là Di sản thiên nhiên thế giới."
        },
        {
          id: "hg3_4_3",
          level: 2,
          question: "Khu di tích lịch sử Đền Hùng - nơi con cháu muôn phương tụ hội về Giỗ Tổ tọa lạc tại tỉnh nào?",
          options: ["Tỉnh Tuyên Quang", "Tỉnh Phú Thọ", "Tỉnh Vĩnh Phúc", "Tỉnh Bắc Giang"],
          correct: 1,
          explanation: "Khu di tích Đền Hùng nằm trên núi Nghĩa Lĩnh, thành phố Việt Trì, tỉnh Phú Thọ."
        },
        {
          id: "hg3_4_4",
          level: 2,
          question: "Địa danh nào sau đây là <strong>Danh lam thắng cảnh</strong> do thiên nhiên ban tặng cho đất nước ta?",
          options: [
            "Địa đạo Củ Chi",
            "Động Phong Nha (Quảng Bình)",
            "Chùa Một Cột",
            "Lăng Chủ tịch Hồ Chí Minh"
          ],
          correct: 1,
          explanation: "Động Phong Nha là danh lam thắng cảnh hang động karst tự nhiên tuyệt đẹp; các địa điểm còn lại là di tích lịch sử do con người xây dựng."
        },
        {
          id: "hg3_4_5",
          level: 3,
          question: "Địa danh Hồ Gươm (Hồ Hoàn Kiếm) ở Thủ đô Hà Nội gắn liền với truyền thuyết lịch sử hào hùng nào?",
          options: [
            "Thánh Gióng cưỡi ngựa sắt bay về trời",
            "Vua Lê Lợi trả gươm thần cho Rùa Vàng sau khi đánh tan giặc Minh",
            "Sơn Tinh đánh thắng Thủy Tinh dâng nước",
            "An Dương Vương xây thành Cổ Loa hình ốc"
          ],
          correct: 1,
          explanation: "Sau khi lãnh đạo khởi nghĩa Lam Sơn thắng lợi, vua Lê Lợi dạo thuyền trên hồ Tả Vọng đã trả lại gươm báu 'Thuận Thiên' cho Rùa Vàng, từ đó hồ đổi tên là Hồ Hoàn Kiếm."
        },
        {
          id: "hg3_4_6",
          level: 3,
          question: "Khi cùng bố mẹ và các bạn đến tham quan Văn Miếu - Quốc Tử Giám, hành động nào dưới đây là văn minh và đúng đắn nhất?",
          options: [
            "Trèo qua hàng rào xoa đầu rùa trên các Bia Tiến sĩ để mong thi được điểm cao",
            "Đi nhẹ, nói khẽ, chăm chú đọc bảng thuyết minh và không chạm tay vào các hiện vật",
            "Dùng bút mực khắc tên của mình lên cột gỗ để kỷ niệm",
            "Vứt que kem và vỏ chai nước ngọt xuống bãi cỏ"
          ],
          correct: 1,
          explanation: "Giữ trật tự trang nghiêm, không chạm tay hay sờ đầu rùa bia đá là cách bảo vệ di sản văn hóa trường tồn cho đời sau."
        },
        {
          id: "hg3_4_7",
          level: 4,
          question: "Điểm khác biệt cốt lõi giữa <strong>Di tích lịch sử</strong> và <strong>Danh lam thắng cảnh</strong> là gì?",
          options: [
            "Di tích lịch sử luôn có giá trị gắn với sự kiện và nhân vật lịch sử; còn Danh lam thắng cảnh nổi bật về vẻ đẹp cảnh quan thiên nhiên",
            "Di tích lịch sử chỉ có ở nông thôn còn Danh lam thắng cảnh chỉ có ở thành phố",
            "Danh lam thắng cảnh không cần được bảo vệ còn Di tích lịch sử mới cần bảo vệ",
            "Cả hai hoàn toàn giống nhau không có điểm gì khác biệt"
          ],
          correct: 0,
          explanation: "Di tích lịch sử gắn liền với dấu ấn lịch sử, con người và sự kiện dựng giữ nước; còn danh lam thắng cảnh đề cao giá trị thẩm mỹ, cảnh quan thiên nhiên kỳ thú."
        },
        {
          id: "hg3_4_8",
          level: 4,
          question: "Tại sao Nhà nước và toàn dân ta phải đặc biệt coi trọng việc bảo tồn, tôn tạo các di tích lịch sử và danh lam thắng cảnh?",
          options: [
            "Vì đó là tài sản vô giá lưu giữ cội nguồn lịch sử dân tộc, giáo dục truyền thống yêu nước cho thế hệ trẻ và niềm tự hào của Việt Nam",
            "Vì chỉ để bán vé thu tiền vào cửa của khách du lịch",
            "Vì không muốn người dân xây nhà mới ở khu vực đó",
            "Vì các di tích này không có người trông nom quản lý"
          ],
          correct: 0,
          explanation: "Di tích lịch sử và danh thắng là kết tinh trí tuệ, máu xương của tiền nhân và vẻ đẹp gấm vóc non sông, giáo dục lòng yêu nước nồng nàn cho muôn đời sau."
        }
      ]
    },
    {
      id: "chu_de_thoi_ky_hao_hung",
      name: "Chủ Đề 5: Thời Kỳ Dựng Nước & Giữ Nước Hào Hùng",
      icon: "👑",
      desc: "Thời đại Vua Hùng dựng nước Văn Lang, Hai Bà Trưng phất cờ khởi nghĩa, Ngô Quyền đại phá quân Nam Hán trên sông Bạch Đằng.",
      theory: {
        highlights: [
          {
            icon: "🏰",
            title: "Thời đại các Vua Hùng dựng nước Văn Lang",
            content: "• Khoảng thế kỷ thứ 7 trước Công nguyên, nhà nước đầu tiên của dân tộc ta ra đời mang tên là <strong>Văn Lang</strong>, do các <strong>Vua Hùng</strong> đứng đầu, đóng đô tại <em>Phong Châu</em> (thuộc tỉnh Phú Thọ ngày nay).<br/>• Đời sống người Việt cổ: Ở nhà sàn tránh thú dữ, ăn cơm nếp, bánh chưng bánh giầy, mặc áo váy bằng vải sợi, đúc trống đồng tinh xảo (Trống đồng Đông Sơn).<br/>• Câu nói bất hủ của Bác Hồ: <em>'Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước.'</em>"
          },
          {
            icon: "🐘",
            title: "Cuộc khởi nghĩa Hai Bà Trưng quật khởi (Năm 40)",
            content: "• Căm thù ách thống trị tàn bạo của quan lại nhà Hán (thái thú Tô Định tham lam tàn ác, giết hại Thi Sách), mùa xuân năm 40, hai chị em <strong>Trưng Trắc</strong> và <strong>Trưng Nhị</strong> đã dựng cờ khởi nghĩa tại cửa sông Hát Môn.<br/>• Hai Bà Trưng uy nghi cưỡi voi dẫn đầu đoàn nghĩa quân đánh chiếm các thành trì. Thái thú Tô Định hoảng sợ cạo râu cắt tóc trà trộn tháo chạy về nước.<br/>• Cuộc khởi nghĩa toàn thắng, Trưng Trắc lên làm vua (Trưng Nữ Vương), khẳng định ý chí quật cường của phụ nữ Việt Nam."
          },
          {
            icon: "⚔️",
            title: "Chiến thắng Bạch Đằng oanh liệt của Ngô Quyền (Năm 938)",
            content: "• Cuối năm 938, tướng Lưu Hoằng Tháo chỉ huy thủy quân Nam Hán kéo vào xâm lược nước ta theo đường sông Bạch Đằng.<br/>• <strong>Kế sách thiên tài:</strong> Ngô Quyền cho quân đốn gỗ rừng, vót nhọn, bịt sắt cắm xuống lòng sông Bạch Đằng. Khi thủy triều dâng ngập bãi cọc, thuyền ta khiêu chiến rồi vờ rút lui nhử giặc vào hiểm địa.<br/>• Khi thủy triều rút nhanh, cọc nhọn nhô lên, thuyền lớn của giặc đâm vào cọc vỡ toác chìm đắm vô số, tướng giặc tử trận. Chiến thắng vang dội chấm dứt hơn <strong>1.000 năm Bắc thuộc</strong>, mở ra kỷ nguyên độc lập tự chủ lâu dài cho non sông."
          },
          {
            icon: "⭐",
            title: "Đinh Bộ Lĩnh cờ lau tập trận & Bác Hồ kính yêu",
            content: "• <strong>Đinh Bộ Lĩnh:</strong> Thuở nhỏ chăn trâu ở Hoa Lư (Ninh Bình), lấy hoa lau làm cờ tập trận cùng bạn bè; lớn lên tài đức phi thường đã dẹp tan loạn 12 sứ quân, thống nhất đất nước, xưng là Đinh Tiên Hoàng, đặt tên nước là <em>Đại Cồ Việt</em>.<br/>• <strong>Bác Hồ kính yêu:</strong> Năm 1911, từ Bến Nhà Rồng, chàng thanh niên Nguyễn Tất Thành ra đi tìm đường cứu nước; lãnh đạo Cách mạng Tháng Tám thành công và đọc <em>Tuyên ngôn Độc lập</em> ngày 2/9/1945 khai sinh nước Việt Nam Dân chủ Cộng hòa."
          }
        ]
      },
      questions: [
        {
          id: "hg3_5_1",
          level: 1,
          question: "Tên gọi nhà nước đầu tiên trong lịch sử dựng nước của dân tộc Việt Nam ta là gì?",
          options: ["Nhà nước Âu Lạc", "Nhà nước Văn Lang", "Nhà nước Đại Việt", "Nhà nước Đại Cồ Việt"],
          correct: 1,
          explanation: "Nhà nước Văn Lang do các Vua Hùng đứng đầu là nhà nước đầu tiên trong lịch sử dân tộc ta."
        },
        {
          id: "hg3_5_2",
          level: 1,
          question: "Hai nữ anh hùng dân tộc đầu tiên đã phất cờ khởi nghĩa cưỡi voi ra trận đánh đuổi giặc ngoại xâm phương Bắc vào mùa xuân năm 40 là ai?",
          options: ["Hai Bà Trưng", "Bà Triệu Thị Trinh", "Bà Lê Chân", "Bà Nguyễn Thị Định"],
          correct: 0,
          explanation: "Hai Bà Trưng (Trưng Trắc và Trưng Nhị) lãnh đạo cuộc khởi nghĩa mùa xuân năm 40 giành lại nền độc lập cho đất nước."
        },
        {
          id: "hg3_5_3",
          level: 2,
          question: "Năm 938, anh hùng dân tộc Ngô Quyền đã lãnh đạo nhân dân đánh tan quân xâm lược Nam Hán trên con sông lịch sử nào?",
          options: ["Sông Hồng", "Sông Cửu Long", "Sông Bạch Đằng", "Sông Hương"],
          correct: 2,
          explanation: "Trận đại thắng Bạch Đằng năm 938 của Ngô Quyền đã chôn vùi toàn bộ đoàn chiến thuyền của quân Nam Hán."
        },
        {
          id: "hg3_5_4",
          level: 2,
          question: "Ai là vị anh hùng thuở nhỏ chăn trâu thường lấy bông lau làm cờ tập trận, về sau có công dẹp loạn 12 sứ quân thống nhất đất nước?",
          options: ["Lý Công Uẩn", "Đinh Bộ Lĩnh", "Trần Hưng Đạo", "Lê Lợi"],
          correct: 1,
          explanation: "Đinh Bộ Lĩnh dẹp loạn 12 sứ quân, lên ngôi vua lấy hiệu Đinh Tiên Hoàng, đặt quốc hiệu là Đại Cồ Việt."
        },
        {
          id: "hg3_5_5",
          level: 3,
          question: "Ngô Quyền đã vận dụng quy luật tự nhiên và mưu kế tài tình nào để đánh thắng giặc Nam Hán trên sông Bạch Đằng?",
          options: [
            "Cắm cọc gỗ nhọn bịt sắt xuống lòng sông và lợi dụng hiện tượng thủy triều lên xuống để nhử thuyền giặc đâm vào cọc",
            "Đào đường hầm bí mật xuyên qua đáy sông",
            "Dùng tên lửa hiện đại bắn chìm chiến thuyền giặc từ xa",
            "Chờ mùa đông đóng băng mặt sông rồi cho quân tiến đánh"
          ],
          correct: 0,
          explanation: "Ngô Quyền nắm vững thủy triều sông Bạch Đằng, cắm cọc nhọn bịt sắt đón lõng thuyền giặc, tạo nên kỳ tích lịch sử."
        },
        {
          id: "hg3_5_6",
          level: 3,
          question: "Câu nói nổi tiếng: <em>'Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước'</em> là lời căn dặn của ai và ở đâu?",
          options: [
            "Của Chủ tịch Hồ Chí Minh tại Đền Hùng",
            "Của Đại tướng Võ Nguyên Giáp tại Điện Biên Phủ",
            "Của Vua Quang Trung tại gò Đống Đa",
            "Của Vua Lê Lợi tại Lam Sơn"
          ],
          correct: 0,
          explanation: "Ngày 19/9/1954, tại Đền Hùng (Phú Thọ), Bác Hồ kính yêu đã căn dặn cán bộ, chiến sĩ Đại đoàn Quân Tiên Phong lời dạy thiêng liêng này."
        },
        {
          id: "hg3_5_7",
          level: 4,
          question: "Chiến thắng Bạch Đằng năm 938 của Ngô Quyền có ý nghĩa lịch sử vô cùng to lớn nào đối với dân tộc ta?",
          options: [
            "Chấm dứt hoàn toàn hơn 1.000 năm đô hộ của phong kiến phương Bắc, mở ra kỷ nguyên độc lập tự chủ lâu dài cho Tổ quốc",
            "Chỉ giúp ta thu được nhiều chiến lợi phẩm từ giặc",
            "Chỉ là một trận thủy chiến nhỏ không mang tính quyết định",
            "Khiến nước ta phải sáp nhập vào lãnh thổ phương Bắc"
          ],
          correct: 0,
          explanation: "Chiến thắng Bạch Đằng năm 938 là mốc son chói lọi, chấm dứt thời kỳ nghìn năm Bắc thuộc tăm tối, mở ra thời kỳ độc lập tự chủ rực rỡ của đất nước ta."
        },
        {
          id: "hg3_5_8",
          level: 4,
          question: "Noi gương tinh thần yêu nước và lòng dũng cảm của các vị tiền nhân đi trước, học sinh tiểu học ngày nay cần thể hiện lòng yêu nước bằng cách nào?",
          options: [
            "Chăm ngoan, học giỏi, rèn luyện thân thể khỏe mạnh, nghe lời thầy cô cha mẹ và biết yêu thương giúp đỡ mọi người xung quanh",
            "Chỉ cần nói miệng yêu nước mà không cần học tập",
            "Chờ đến khi có chiến tranh mới thể hiện tình cảm của mình",
            "Xem các trò chơi bạo lực trên mạng Internet"
          ],
          correct: 0,
          explanation: "Yêu nước thời bình bắt đầu từ việc học tập tốt, rèn luyện đạo đức, giữ gìn môi trường và trở thành công dân có ích cho xã hội."
        }
      ]
    },
    {
      id: "chu_de_le_hoi_van_hoa",
      name: "Chủ Đề 6: Lễ Hội Truyền Thống, Phong Tục & Văn Hóa 3 Miền",
      icon: "🎉",
      desc: "Lễ hội Giỗ Tổ Hùng Vương, Hội Gióng, Cồng chiêng Tây Nguyên, phong tục ngày Tết, trang phục và tình đoàn kết dân tộc.",
      theory: {
        highlights: [
          {
            icon: "🥁",
            title: "Lễ hội Giỗ Tổ Hùng Vương & Hội Gióng thiêng liêng",
            content: "• <strong>Giỗ Tổ Hùng Vương:</strong> Diễn ra vào ngày <strong>mùng 10 tháng 3 Âm lịch</strong> hàng năm tại Đền Hùng (Phú Thọ). Câu ca dao lưu truyền ngàn đời: <em>'Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba.'</em><br/>• <strong>Hội Gióng đền Phù Đổng và đền Sóc (Hà Nội):</strong> Di sản văn hóa phi vật thể của nhân loại, tôn vinh người anh hùng làng Gióng dũng cảm nhổ tre đằng ngà đánh tan giặc Ân cứu nước thuở nhỏ."
          },
          {
            icon: "🌊",
            title: "Bản sắc lễ hội miền Trung, Tây Nguyên & Miền Nam",
            content: "• <strong>Lễ hội Cầu Ngư vùng ven biển Trung Bộ:</strong> Tỏ lòng biết ơn cá Voi (cá Ông) cứu giúp ngư dân khi gặp sóng to gió lớn, cầu mong mưa thuận gió hòa, ra khơi bình an, tôm cá đầy thuyền.<br/>• <strong>Không gian Văn hóa Cồng chiêng Tây Nguyên:</strong> Âm vang trầm hùng của cồng chiêng giữa đại ngàn xanh, gắn liền với lễ mừng lúa mới, lễ thổi tai, lễ cúng bến nước.<br/>• <strong>Lễ hội Đua ghe Ngo & Ok Om Bok (Nam Bộ):</strong> Lễ hội tưng bừng của đồng bào Khmer, những chiếc ghe ngo dài vút như mũi tên lướt sóng trên sông trăng trong tiếng reo hò cổ vũ náo nức."
          },
          {
            icon: "🧧",
            title: "Phong tục ngày Tết cổ truyền & Ẩm thực 3 miền",
            content: "• <strong>Tết Nguyên Đán:</strong> Dịp sum họp gia đình thiêng liêng nhất trong năm. Con cháu quây quần gói <em>bánh chưng</em> (miền Bắc, Trung) hoặc <em>bánh tét</em> (miền Nam), bày mâm ngũ quả, đi chúc Tết ông bà cha mẹ và nhận bao lì xì đỏ chúc may mắn.<br/>• <strong>Tết Trung Thu (Rằm tháng Tám):</strong> Đêm hội trăng rằm của thiếu nhi với đèn lồng ông sao lấp lánh, múa lân sư rồng, phá cỗ trông trăng cùng chú Cuội, chị Hằng.<br/>• <strong>Trang phục truyền thống:</strong> Áo dài Việt Nam duyên dáng, trang phục thổ cẩm rực rỡ sắc hoa của các bạn nhỏ vùng cao."
          },
          {
            icon: "❤️",
            title: "Đạo lý tốt đẹp & Tình đoàn kết Lạc Hồng",
            content: "• Truyền thống đạo lý ngàn đời: <strong>'Uống nước nhớ nguồn'</strong>, <strong>'Ăn quả nhớ kẻ trồng cây'</strong>, kính trên nhường dưới, hiếu thảo với cha mẹ, tôn sư trọng đạo.<br/>• Tinh thần nhân ái: <strong>'Lá lành đùm lá rách'</strong>, <strong>'Thương người như thể thương thân'</strong>, cùng chia sẻ với đồng bào khó khăn vùng bão lũ.<br/>• 54 dân tộc anh em trên dải đất chữ S tuy khác nhau về ngôn ngữ, phong tục nhưng đều chung một cội nguồn dòng dõi 'con Rồng cháu Tiên'."
          }
        ]
      },
      questions: [
        {
          id: "hg3_6_1",
          level: 1,
          question: "Ngày Quốc lễ Giỗ Tổ Hùng Vương được toàn thể nhân dân cả nước tổ chức vào ngày nào hàng năm?",
          options: [
            "Ngày mùng 1 tháng 1 Âm lịch",
            "Ngày mùng 10 tháng 3 Âm lịch",
            "Ngày rằm tháng 8 Âm lịch",
            "Ngày 2 tháng 9 Dương lịch"
          ],
          correct: 1,
          explanation: "Ngày mùng 10 tháng 3 Âm lịch là ngày Giỗ Tổ Hùng Vương, ngày toàn dân hướng về cội nguồn dựng nước."
        },
        {
          id: "hg3_6_2",
          level: 1,
          question: "Món bánh truyền thống hình vuông có màu xanh của lá dong, gắn liền với sự tích Lang Liêu thời Hùng Vương trong ngày Tết cổ truyền miền Bắc là gì?",
          options: ["Bánh chưng", "Bánh giầy", "Bánh gai", "Bánh pía"],
          correct: 0,
          explanation: "Bánh chưng hình vuông tượng trưng cho Đất, là món ăn truyền thống không thể thiếu trong mâm cỗ Tết Nguyên Đán."
        },
        {
          id: "hg3_6_3",
          level: 2,
          question: "Lễ hội Cầu Ngư là lễ hội truyền thống đặc sắc của người dân sinh sống ở vùng nào?",
          options: [
            "Cư dân vùng cao Tây Bắc",
            "Ngư dân các làng chài ven biển miền Trung và Nam Trung Bộ",
            "Cư dân vùng đồi núi Tây Nguyên",
            "Người dân vùng đồng bằng sông Hồng"
          ],
          correct: 1,
          explanation: "Lễ hội Cầu Ngư gắn liền với tục thờ cá Ông (cá Voi) của ngư dân vùng biển miền Trung để cầu sóng yên biển lặng và mùa màng bội thu."
        },
        {
          id: "hg3_6_4",
          level: 2,
          question: "Loại nhạc cụ truyền thống bằng đồng nào gắn liền với đời sống tâm linh và văn hóa của đồng bào các dân tộc ở vùng đại ngàn Tây Nguyên?",
          options: ["Đàn ghi-ta", "Cồng, chiêng", "Kèn đồng phương Tây", "Đàn pi-a-nô"],
          correct: 1,
          explanation: "Không gian văn hóa Cồng chiêng Tây Nguyên là kiệt tác di sản truyền khẩu và phi vật thể của nhân loại."
        },
        {
          id: "hg3_6_5",
          level: 3,
          question: "Ngày Tết nào trong năm dành riêng cho thiếu nhi với các hoạt động rước đèn ông sao, ngắm trăng, múa lân và phá cỗ bánh dẻo bánh nướng?",
          options: [
            "Tết Đoan Ngọ (mùng 5 tháng 5 Âm lịch)",
            "Tết Trung Thu (rằm tháng 8 Âm lịch)",
            "Tết Hàn Thực (mùng 3 tháng 3 Âm lịch)",
            "Tết Trùng Cửu (mùng 9 tháng 9 Âm lịch)"
          ],
          correct: 1,
          explanation: "Rằm tháng Tám Âm lịch là Tết Trung Thu - ngày hội trăng rằm tưng bừng của thiếu nhi Việt Nam."
        },
        {
          id: "hg3_6_6",
          level: 3,
          question: "Trong ngày Tết cổ truyền, hành động nào dưới đây của các bạn nhỏ thể hiện nét đẹp văn hóa văn minh và lòng hiếu thảo?",
          options: [
            "Đòi bố mẹ mua thật nhiều pháo nổ về nghịch",
            "Mặc quần áo chỉnh tề, khoanh tay kính cẩn chúc Tết ông bà, bố mẹ những lời chúc an khang sức khỏe",
            "Mở phong bao lì xì ra trước mặt khách rồi chê ít tiền",
            "Chỉ mải mê dán mắt vào điện thoại chơi game không chào hỏi ai"
          ],
          correct: 1,
          explanation: "Chúc Tết lễ phép, kính trọng ông bà cha mẹ và cảm ơn khi nhận bao lì xì là nét đẹp văn hóa truyền thống thanh lịch của người Việt."
        },
        {
          id: "hg3_6_7",
          level: 4,
          question: "Câu thành ngữ, tục ngữ nào sau đây thể hiện rõ nhất truyền thống nhân ái, sẵn sàng giúp đỡ, sẻ chia của nhân dân ta khi đồng bào gặp hoạn nạn, thiên tai?",
          options: [
            "Ăn chắc mặc bền",
            "Lá lành đùm lá rách",
            "Uống nước nhớ nguồn",
            "Nhất tự vi sư, bán tự vi sư"
          ],
          correct: 1,
          explanation: "'Lá lành đùm lá rách' là bài học sâu sắc về tinh thần đùm bọc, tương thân tương ái, giúp đỡ người hoạn nạn của dân tộc ta."
        },
        {
          id: "hg3_6_8",
          level: 4,
          question: "Ý nghĩa thiêng liêng nhất của câu ca dao: <em>'Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba'</em> là gì?",
          options: [
            "Nhắc nhở mỗi người con đất Việt luôn khắc ghi đạo lý Uống nước nhớ nguồn, hướng về cội nguồn dân tộc và giữ gìn tình đoàn kết keo sơn",
            "Chỉ nhắc nhở mọi người đi mua sắm quà cáp cho gia đình",
            "Để mọi người cùng đi du lịch leo núi Nghĩa Lĩnh",
            "Chỉ là lời nhắc về thời gian nghỉ lễ trong năm"
          ],
          correct: 0,
          explanation: "Câu ca dao là lời nhắc nhở thiêng liêng về cội nguồn chung, bồi đắp lòng tự hào dân tộc và tình đoàn kết sắt son của người Việt Nam."
        }
      ]
    }
  ]
};
