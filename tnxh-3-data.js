/**
 * tnxh-3-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Tự Nhiên & Xã Hội Lớp 3
 * Chuẩn Chương trình Giáo dục phổ thông (GDPT) 2018
 * (Kết nối tri thức với cuộc sống, Cánh diều, Chân trời sáng tạo)
 */

window.TNXH3_DATA = {
  topics: [
    {
      id: "chu_de_gia_dinh",
      name: "Chủ Đề 1: Gia Đình & Phòng Tránh Hỏa Hoạn",
      icon: "🏡",
      desc: "Họ hàng nội, ngoại, các thế hệ trong gia đình; Nguyên nhân gây cháy nổ và kỹ năng thoát hiểm khi có hỏa hoạn.",
      theory: {
        highlights: [
          {
            icon: "👨‍👩‍👧‍👦",
            title: "Họ hàng nội, họ hàng ngoại",
            content: "• <strong>Họ nội:</strong> Những người có quan hệ ruột thịt với bố em (ông nội, bà nội, bác trai, bác gái, chú, cô, thím...).<br/>• <strong>Họ ngoại:</strong> Những người có quan hệ ruột thịt với mẹ em (ông ngoại, bà ngoại, bác, cậu, mợ, dì, dượng...).<br/>• Con cái của anh, chị, em ruột của bố mẹ là <em>anh, chị, em họ</em> của em. Cần yêu thương, quý trọng và gắn bó với cả hai bên nội ngoại."
          },
          {
            icon: "🔥",
            title: "Phòng tránh hỏa hoạn khi ở nhà",
            content: "• <strong>Nguyên nhân gây cháy:</strong> Để các vật dễ cháy gần bếp lửa, chập điện, quên tắt bếp ga sau khi nấu, nghịch diêm, bật lửa, nến...<br/>• <strong>Biện pháp phòng ngừa:</strong> Khóa bình ga khi không dùng, không cắm quá nhiều thiết bị vào một ổ điện, để xa tầm tay trẻ em những vật dễ bắt lửa."
          },
          {
            icon: "🚨",
            title: "Kỹ năng thoát hiểm khi có cháy",
            content: "• Gọi ngay số điện thoại <strong>114</strong> để báo cháy khẩn cấp.<br/>• Dùng khăn ướt bịt mũi miệng để tránh hít phải khói độc.<br/>• Đi khom lưng hoặc bò sát mặt đất men theo tường để tìm lối thoát hiểm.<br/>• Tuyệt đối không dùng thang máy khi xảy ra hỏa hoạn."
          }
        ]
      },
      questions: [
        {
          id: "tx3_1_1",
          level: 1,
          question: "Những người có mối quan hệ ruột thịt với <strong>bố</strong> được gọi là:",
          options: ["Họ ngoại", "Họ nội", "Hàng xóm", "Bạn bè"],
          correct: 1,
          explanation: "Những người thuộc dòng họ ruột thịt của bố được gọi là họ nội."
        },
        {
          id: "tx3_1_2",
          level: 1,
          question: "Số điện thoại khẩn cấp để gọi <strong>Cứu hỏa và Cứu nạn cứu hộ</strong> tại Việt Nam là:",
          options: ["113", "114", "115", "111"],
          correct: 1,
          explanation: "114 là số tổng đài khẩn cấp điều động lực lượng Cảnh sát Phòng cháy, chữa cháy và Cứu nạn cứu hộ."
        },
        {
          id: "tx3_1_3",
          level: 2,
          question: "Em gọi em gái ruột của <strong>mẹ</strong> bằng gì?",
          options: ["Cô", "Bác", "Dì", "Thím"],
          correct: 2,
          explanation: "Em gái ruột của mẹ thuộc họ ngoại và được gọi là Dì."
        },
        {
          id: "tx3_1_4",
          level: 2,
          question: "Hành động nào dưới đây có nguy cơ gây ra <strong>hỏa hoạn</strong> tại gia đình?",
          options: [
            "Cắm quạt điện trong phòng khách",
            "Nghịch bật lửa và đốt giấy gần rèm cửa sổ",
            "Tắt bếp ga sau khi đun nấu xong",
            "Bật đèn học khi ngồi làm bài tập"
          ],
          correct: 1,
          explanation: "Đốt giấy gần rèm cửa và các vật liệu bắt lửa là hành vi vô cùng nguy hiểm, dễ gây cháy nhà lan rộng."
        },
        {
          id: "tx3_1_5",
          level: 3,
          question: "Khi phát hiện có cháy và nhiều khói độc bốc lên trong nhà, em cần làm gì để tự thoát hiểm an toàn?",
          options: [
            "Trèo lên tầng cao nhất và đứng đợi",
            "Lấy khăn thấm nước bịt mũi miệng, cúi khom người hoặc bò sát sàn nhà men theo tường tìm lối thoát",
            "Nhảy ngay xuống từ cửa sổ tầng hai",
            "Chui vào gầm giường hoặc tủ quần áo để trốn"
          ],
          correct: 1,
          explanation: "Khói độc nhẹ hơn không khí nên sẽ bốc lên trần nhà; bò sát sàn nhà và dùng khăn ướt giúp lọc không khí, duy trì oxy thở."
        },
        {
          id: "tx3_1_6",
          level: 3,
          question: "Gia đình gồm có ông bà, bố mẹ và hai con cùng chung sống dưới một mái nhà là gia đình có mấy thế hệ?",
          options: ["1 thế hệ", "2 thế hệ", "3 thế hệ", "4 thế hệ"],
          correct: 2,
          explanation: "Gồm 3 thế hệ: Thế hệ 1 là ông bà, thế hệ 2 là bố mẹ, thế hệ 3 là hai người con."
        },
        {
          id: "tx3_1_7",
          level: 4,
          question: "Bố mẹ đi làm vắng, ở nhà một mình em ngửi thấy mùi khí ga nồng nặc trong bếp. Em nên xử lý theo thứ tự nào sau đây là an toàn nhất?",
          options: [
            "Bật quạt hút mùi ngay lập tức và bật bếp lên kiểm tra",
            "Tuyệt đối không bật công tắc điện hay đánh lửa, mở toang cửa sổ thông gió, khóa van bình ga (nếu biết cách) và chạy ra ngoài hô hoán người lớn giúp đỡ",
            "Đóng chặt tất cả các cửa lại rồi đi ngủ tiếp",
            "Lấy chăn trùm kín bếp ga"
          ],
          correct: 1,
          explanation: "Khí ga rất dễ bắt tia lửa điện từ công tắc đèn/quạt gây nổ; việc mở cửa thông thoáng và không tạo tia lửa là nguyên tắc sống còn."
        },
        {
          id: "tx3_1_8",
          level: 4,
          question: "Ý nghĩa của việc ghi nhớ ngày giỗ tổ tiên và tham gia các buổi họp mặt họ hàng hai bên nội ngoại là gì?",
          options: [
            "Để được ăn nhiều món ngon và nhận tiền mừng",
            "Bày tỏ lòng hiếu thảo, nhớ ơn cội nguồn tổ tiên và thắt chặt tình đoàn kết, gắn bó giữa các thành viên trong gia tộc",
            "Để so sánh mức độ giàu nghèo của các gia đình",
            "Chỉ là phong tục bắt buộc không mang ý nghĩa gì"
          ],
          correct: 1,
          explanation: "Đó là nét đẹp văn hóa đạo lý 'Uống nước nhớ nguồn', gắn kết yêu thương giữa các thế hệ trong dòng tộc."
        }
      ]
    },
    {
      id: "chu_de_truong_hoc",
      name: "Chủ Đề 2: Trường Học Thân Thiện & Kết Nối Xã Hội",
      icon: "🏫",
      desc: "Lịch sử và truyền thống nhà trường, các hoạt động kết nối với cộng đồng, xây dựng trường lớp an toàn và thân thiện.",
      theory: {
        highlights: [
          {
            icon: "📜",
            title: "Truyền thống của nhà trường",
            content: "• Mỗi ngôi trường đều có lịch sử hình thành, mang tên danh nhân lịch sử hoặc địa danh quê hương.<br/>• <strong>Truyền thống tốt đẹp:</strong> Tinh thần tôn sư trọng đạo, hiếu học, phong trào vượt khó học tốt, phong trào Đôi bạn cùng tiến, gìn giữ vệ sinh trường lớp xanh - sạch - đẹp."
          },
          {
            icon: "🤝",
            title: "Hoạt động kết nối xã hội của trường",
            content: "• Tham gia phong trào 'Kế hoạch nhỏ' (thu gom giấy vụn, vỏ lon gây quỹ đội).<br/>• Thăm và tặng quà các Mẹ Việt Nam Anh hùng, gia đình thương binh liệt sĩ.<br/>• Quyên góp sách vở, quần áo ủng hộ học sinh vùng sâu vùng xa, vùng bị bão lũ."
          },
          {
            icon: "🛡️",
            title: "An toàn trong trường học",
            content: "• Không leo trèo lan can, bờ tường rào.<br/>• Không rượt đuổi, xô đẩy nhau trên cầu thang.<br/>• Không chơi những trò chơi nguy hiểm như bắn súng cao su, ném đất đá vào bạn bè."
          }
        ]
      },
      questions: [
        {
          id: "tx3_2_1",
          level: 1,
          question: "Phong trào thu gom giấy vụn gây quỹ giúp đỡ bạn nghèo của Đội Thiếu niên Tiền phong có tên là gì?",
          options: ["Nghìn việc tốt", "Kế hoạch nhỏ", "Đôi bạn cùng tiến", "Tuổi trẻ sáng tạo"],
          correct: 1,
          explanation: "Phong trào 'Kế hoạch nhỏ' là hoạt động truyền thống thu gom giấy phế liệu, vỏ lon gây quỹ Đội của thiếu nhi cả nước."
        },
        {
          id: "tx3_2_2",
          level: 1,
          question: "Hành động nào sau đây là <strong>mất an toàn</strong> ở trường học?",
          options: [
            "Đọc sách trong thư viện",
            "Ngồi trượt trên tay vịn cầu thang",
            "Tưới cây ở vườn trường",
            "Xếp hàng vào lớp ngay ngắn"
          ],
          correct: 1,
          explanation: "Trượt tay vịn cầu thang rất dễ trượt ngã từ trên cao, gây chấn thương nguy hiểm."
        },
        {
          id: "tx3_2_3",
          level: 2,
          question: "Để thể hiện lòng biết ơn thầy cô giáo, việc làm nào dưới đây là thiết thực nhất?",
          options: [
            "Mua những món quà đắt tiền để tặng",
            "Chăm chỉ học tập, lễ phép vâng lời và nỗ lực đạt nhiều điểm tốt",
            "Chỉ chào thầy cô khi nhìn thấy cô chủ nhiệm",
            "Đi học muộn và không làm bài tập về nhà"
          ],
          correct: 1,
          explanation: "Món quà quý giá và ý nghĩa nhất dâng tặng thầy cô chính là sự tiến bộ, chăm ngoan và lễ phép của học trò."
        },
        {
          id: "tx3_2_4",
          level: 2,
          question: "Hoạt động nào dưới đây là hoạt động <strong>kết nối xã hội</strong> của học sinh tiểu học?",
          options: [
            "Tham gia quyên góp sách vở ủng hộ bạn nhỏ vùng chịu thiên tai bão lũ",
            "Chơi game một mình trong phòng riêng",
            "Ngủ trưa ở nhà",
            "Làm bài kiểm tra môn Toán"
          ],
          correct: 0,
          explanation: "Quyên góp ủng hộ đồng bào khó khăn là hành động chia sẻ trách nhiệm và lan tỏa tình yêu thương tới cộng đồng."
        },
        {
          id: "tx3_2_5",
          level: 3,
          question: "Trong giờ ra chơi, em nhìn thấy một bạn học sinh chạy nhảy xô xát làm vỡ chậu cây của lớp. Em nên làm gì?",
          options: [
            "Đứng nhìn và reo hò cổ vũ",
            "Khuyên bạn dừng lại và báo ngay cho thầy cô giáo hoặc bác bảo vệ để dọn mảnh vỡ tránh đứt tay chân",
            "Cùng bạn đá vỡ thêm các chậu cây khác",
            "Bỏ chạy đi chỗ khác coi như không biết gì"
          ],
          correct: 1,
          explanation: "Cần nhắc nhở bạn giữ an toàn và báo người lớn xử lý dọn dẹp để không gây nguy hiểm cho người khác."
        },
        {
          id: "tx3_2_6",
          level: 3,
          question: "Ý nghĩa của việc nhà trường thường được đặt theo tên của các vị anh hùng dân tộc (như Võ Thị Sáu, Kim Đồng, Chu Văn An...) là gì?",
          options: [
            "Để nhắc nhở thế hệ học sinh ghi nhớ công ơn tiền nhân và noi theo tấm gương sáng của các bậc danh nhân",
            "Để tên trường nghe thật dài và hay",
            "Chỉ để người đi đường dễ tìm địa chỉ",
            "Không có ý nghĩa gì đặc biệt"
          ],
          correct: 0,
          explanation: "Đặt tên trường theo danh nhân nhằm giáo dục lòng tự hào dân tộc và truyền cảm hứng học tập rèn luyện cho các em."
        },
        {
          id: "tx3_2_7",
          level: 4,
          question: "Em và các bạn muốn xây dựng lớp học trở thành 'Lớp học Xanh', việc làm nào dưới đây là phù hợp và sáng tạo nhất?",
          options: [
            "Yêu cầu nhà trường sơn lại toàn bộ tường phòng học thành màu xanh lá cây",
            "Cùng nhau chăm sóc góc cây cảnh của lớp, phân loại rác tái chế và trang trí khẩu hiệu giữ gìn môi trường",
            "Mang tất cả các cành cây ngoài vườn bẻ vào cắm trong lớp",
            "Đóng kín cửa sổ suốt cả ngày để tránh bụi"
          ],
          correct: 1,
          explanation: "Lớp học Xanh là mô hình trồng cây xanh thân thiện, giảm rác thải nhựa và hình thành lối sống xanh bảo vệ thiên nhiên."
        },
        {
          id: "tx3_2_8",
          level: 4,
          question: "Vì sao mỗi học sinh đều có quyền tham gia đóng góp ý kiến xây dựng nội quy và các hoạt động của trường lớp?",
          options: [
            "Vì học sinh là trung tâm của nhà trường, việc lắng nghe ý kiến giúp môi trường học tập ngày càng an toàn, hạnh phúc và dân chủ hơn",
            "Để học sinh không phải làm bài kiểm tra nữa",
            "Để được miễn đi học vào các ngày thứ Hai",
            "Để học sinh tự do làm bất kỳ điều gì mình thích"
          ],
          correct: 0,
          explanation: "Quyền tham gia giúp trẻ em phát huy tinh thần trách nhiệm, tự giác thực hiện nội quy do chính mình góp phần xây dựng."
        }
      ]
    },
    {
      id: "chu_de_cong_dong_dia_phuong",
      name: "Chủ Đề 3: Hoạt Động Sản Xuất & Di Tích Làng Nghề",
      icon: "🌾",
      desc: "Các hoạt động sản xuất nông nghiệp, công nghiệp, dịch vụ và thủ công truyền thống; Giữ gìn di tích lịch sử và an toàn giao thông.",
      theory: {
        highlights: [
          {
            icon: "🚜",
            title: "Các hoạt động sản xuất ở địa phương",
            content: "• <strong>Sản xuất nông nghiệp:</strong> Trồng lúa, trồng hoa quả, rau củ, nuôi lợn, bò, gà, cá, tôm... tạo ra lương thực, thực phẩm nuôi sống con người.<br/>• <strong>Sản xuất công nghiệp:</strong> Nhà máy chế biến thực phẩm, dệt may, sản xuất linh kiện điện tử, cơ khí chế tạo máy...<br/>• <strong>Hoạt động dịch vụ:</strong> Chợ, siêu thị, ngân hàng, bệnh viện, trường học, bưu điện, du lịch..."
          },
          {
            icon: "🏺",
            title: "Làng nghề thủ công truyền thống",
            content: "• Làng gốm Bát Tràng (Hà Nội), Làng lụa Vạn Phúc (Hà Nội), Làng tranh Đông Hồ (Bắc Ninh), Chiếu cói Nga Sơn (Thanh Hóa), Làng đá mỹ nghệ Non Nước (Đà Nẵng)...<br/>• Thể hiện tài hoa và bản sắc văn hóa lâu đời của người dân Việt Nam."
          },
          {
            icon: "🚦",
            title: "An toàn giao thông trong cộng đồng",
            content: "• <strong>Đi bộ an toàn:</strong> Đi trên vỉa hè hoặc sát mép đường bên phải; qua đường tại vạch kẻ dành cho người đi bộ hoặc cầu vượt, hầm bộ hành.<br/>• <strong>Đi xe máy:</strong> Đội mũ bảo hiểm cài quai đúng cách, bám chắc vào người lớn lái xe.<br/>• Tuân thủ nghiêm ngặt hiệu lệnh đèn tín hiệu và biển báo giao thông."
          }
        ]
      },
      questions: [
        {
          id: "tx3_3_1",
          level: 1,
          question: "Làng gốm <strong>Bát Tràng</strong> nổi tiếng của Việt Nam thuộc tỉnh/thành phố nào?",
          options: ["Hà Nội", "Hải Phòng", "Đà Nẵng", "TP. Hồ Chí Minh"],
          correct: 0,
          explanation: "Làng gốm sứ truyền thống Bát Tràng nằm bên bờ sông Hồng thuộc huyện Gia Lâm, thủ đô Hà Nội."
        },
        {
          id: "tx3_3_2",
          level: 1,
          question: "Đèn tín hiệu giao thông bật <strong>màu đỏ</strong> báo hiệu điều gì?",
          options: [
            "Được phép đi tiếp tốc độ nhanh",
            "Tất cả các phương tiện phải dừng lại trước vạch dừng",
            "Đi chậm lại và chú ý quan sát",
            "Chỉ dành riêng cho người đi bộ sang đường"
          ],
          correct: 1,
          explanation: "Quy chuẩn giao thông: Đèn đỏ báo hiệu dừng lại, đèn vàng đi chậm lại chuẩn bị dừng, đèn xanh được phép đi."
        },
        {
          id: "tx3_3_3",
          level: 2,
          question: "Hoạt động nào dưới đây thuộc ngành <strong>sản xuất nông nghiệp</strong>?",
          options: [
            "Bác nông dân cấy lúa và gặt thóc trên cánh đồng",
            "Kỹ sư lắp ráp điện thoại trong nhà máy",
            "Bác tài xế lái xe buýt đưa đón hành khách",
            "Bác sĩ khám bệnh tại bệnh viện"
          ],
          correct: 0,
          explanation: "Trồng trọt lúa gạo là hoạt động sản xuất nông nghiệp tiêu biểu, cung cấp nguồn lương thực thiết yếu."
        },
        {
          id: "tx3_3_4",
          level: 2,
          question: "Khi tham quan các di tích lịch sử và danh lam thắng cảnh, hành vi nào dưới đây là <strong>sai trái và đáng phê phán</strong>?",
          options: [
            "Lắng nghe thuyết minh về lịch sử di tích",
            "Bỏ rác vào đúng thùng rác quy định",
            "Dùng bút hoặc gạch đá khắc tên mình lên tường bia di tích",
            "Giữ trật tự, đi lại nhẹ nhàng"
          ],
          correct: 2,
          explanation: "Viết vẽ bậy lên di tích lịch sử là hành vi phá hoại di sản văn hóa dân tộc, bị pháp luật nghiêm cấm."
        },
        {
          id: "tx3_3_5",
          level: 3,
          question: "Trẻ em khi ngồi sau xe máy tham gia giao thông cần thực hiện quy định nào bắt buộc?",
          options: [
            "Chỉ cần đội mũ vải che nắng",
            "Đội mũ bảo hiểm đạt chuẩn và cài quai đúng quy cách",
            "Đứng lên yên xe máy cho thoáng gió",
            "Mang theo ô che mưa khi xe đang chạy"
          ],
          correct: 1,
          explanation: "Đội mũ bảo hiểm cài quai đúng cách giúp bảo vệ vùng đầu an toàn tuyệt đối trước mọi rủi ro va chạm."
        },
        {
          id: "tx3_3_6",
          level: 3,
          question: "Vì sao các sản phẩm thủ công làng nghề truyền thống (gốm, lụa, tranh dân gian) cần được gìn giữ và quảng bá rộng rãi?",
          options: [
            "Vì đó là tinh hoa nghệ thuật, lưu giữ tâm hồn và bản sắc truyền thống ngàn đời của dân tộc ta",
            "Vì chỉ người già mới thích dùng đồ gốm",
            "Vì không còn nhà máy nào khác sản xuất",
            "Chỉ để trang trí bảo tàng không đem bán được"
          ],
          correct: 0,
          explanation: "Làng nghề thủ công kết tinh trí tuệ cha ông, mang giá trị văn hóa và kinh tế du lịch lớn cho đất nước."
        },
        {
          id: "tx3_3_7",
          level: 4,
          question: "Để giúp đỡ các cô chú công nhân vệ sinh môi trường tại địa phương, học sinh lớp 3 có thể làm gì cụ thể?",
          options: [
            "Vứt rác tùy tiện xuống vỉa hè để các cô chú có việc làm",
            "Tự giác bỏ rác đúng nơi quy định, phân loại rác thải nhựa và nhắc nhở người thân không xả rác bừa bãi",
            "Đốt toàn bộ túi ni-lông trước cửa nhà",
            "Quét rác từ trong nhà đẩy hết ra lòng đường"
          ],
          correct: 1,
          explanation: "Hành động bỏ rác đúng chỗ và phân loại rác giúp giảm tải gánh nặng công việc cho công nhân và giữ sạch phố phường."
        },
        {
          id: "tx3_3_8",
          level: 4,
          question: "Một ngã tư đường phố không có đèn tín hiệu giao thông, có một cụ già đang muốn sang đường. Em nên làm gì?",
          options: [
            "Đứng nhìn và tiếp tục chơi với bạn",
            "Hỏi xin phép người lớn đi cùng để dắt tay cụ già qua đường an toàn khi đường vắng xe",
            "Chạy vội qua đường một mình trước mặt cụ",
            "Hét to bảo cụ tự đi nhanh lên"
          ],
          correct: 1,
          explanation: "Biết quan sát giúp đỡ người già và người tàn tật qua đường an toàn là nghĩa cử cao đẹp của người công dân nhỏ tuổi."
        }
      ]
    },
    {
      id: "chu_de_thuc_vat_va_dong_vat",
      name: "Chủ Đề 4: Thế Giới Thực Vật & Động Vật",
      icon: "🌱",
      desc: "Chức năng của rễ, thân, lá, hoa, quả; Môi trường sống và sự thích nghi của động vật; Ý thức bảo vệ sự đa dạng sinh học.",
      theory: {
        highlights: [
          {
            icon: "🌿",
            title: "Các bộ phận của cây và chức năng",
            content: "• <strong>Rễ cây:</strong> Hút nước và muối khoáng trong lòng đất để nuôi cây; bám chặt vào đất giúp cây đứng vững.<br/>• <strong>Thân cây:</strong> Vận chuyển nước và chất dinh dưỡng từ rễ lên lá và từ lá đi khắp các bộ phận của cây; nâng đỡ cành lá.<br/>• <strong>Lá cây:</strong> Thực hiện quá trình quang hợp (nhờ chất diệp lục hấp thụ ánh sáng mặt trời để tạo chất dinh dưỡng và thải khí oxy), hô hấp và thoát hơi nước.<br/>• <strong>Hoa và Quả:</strong> Cơ quan sinh sản của cây; quả chứa hạt để duy trì nòi giống."
          },
          {
            icon: "🐾",
            title: "Môi trường sống của động vật",
            content: "• <strong>Sống trên cạn:</strong> Chó, mèo, hươu, voi, chim, hổ...<br/>• <strong>Sống dưới nước:</strong> Cá, tôm, cua, mực, cá voi, san hô... (nước ngọt, nước mặn).<br/>• <strong>Sống cả trên cạn và dưới nước (lưỡng cư):</strong> Ếch, nhái, cóc, rùa, cá sấu...<br/>• <strong>Sống trong lòng đất:</strong> Giun đất, dế chũi, chuột chũi..."
          },
          {
            icon: "🦋",
            title: "Sự thích nghi kỳ diệu",
            content: "• Lạc đà có bướu chứa mỡ và móng chân bè rộng để đi trên cát sa mạc khô cằn.<br/>• Gấu bắc cực có bộ lông dày màu trắng và lớp mỡ dày giữ ấm giữa băng tuyết.<br/>• Tắc kè hoa biết đổi màu da để ngụy trang trốn kẻ thù."
          }
        ]
      },
      questions: [
        {
          id: "tx3_4_1",
          level: 1,
          question: "Bộ phận nào của cây làm nhiệm vụ <strong>hút nước và chất khoáng</strong> từ đất để nuôi cây?",
          options: ["Thân cây", "Rễ cây", "Lá cây", "Hoa"],
          correct: 1,
          explanation: "Rễ cây cắm sâu vào lòng đất, hút nước và muối khoáng hòa tan cung cấp cho toàn bộ cây."
        },
        {
          id: "tx3_4_2",
          level: 1,
          question: "Loài động vật nào dưới đây thuộc nhóm động vật <strong>sống dưới nước</strong>?",
          options: ["Cá chép", "Hươu cao cổ", "Chim bồ câu", "Thỏ trắng"],
          correct: 0,
          explanation: "Cá chép hô hấp bằng mang và bơi lội sinh sống hoàn toàn trong môi trường nước ngọt."
        },
        {
          id: "tx3_4_3",
          level: 2,
          question: "Lá cây quang hợp vào ban ngày sẽ thải ra môi trường chất khí nào có lợi cho sự sống của con người?",
          options: ["Khí các-bô-níc", "Khí ô-xy", "Khí ni-tơ", "Khí hy-đrô"],
          correct: 1,
          explanation: "Nhờ ánh sáng mặt trời, lá cây quang hợp hấp thụ khí CO2 và thải ra khí O2 trong lành cho sự thở."
        },
        {
          id: "tx3_4_4",
          level: 2,
          question: "Con vật nào dưới đây có khả năng sống được <strong>cả trên cạn và dưới nước</strong>?",
          options: ["Con ếch", "Con hổ", "Con khỉ", "Con cá heo"],
          correct: 0,
          explanation: "Ếch là động vật lưỡng cư, lúc nhỏ là nòng nọc thở bằng mang dưới nước, lớn lên thở bằng phổi và qua da ẩm trên cạn."
        },
        {
          id: "tx3_4_5",
          level: 3,
          question: "Nếu cạo bỏ một khoanh vỏ quanh thân cây thân gỗ, sau một thời gian phần thân phía trên chỗ cạo sẽ bị phình to ra. Hiện tượng này chứng minh điều gì?",
          options: [
            "Rễ cây đang hút quá nhiều nước",
            "Mạch rây ở lớp vỏ bị đứt làm chất dinh dưỡng hữu cơ do lá chế tạo dồn ứ lại ở mép trên",
            "Cây bị sâu đục khoét làm phồng vỏ",
            "Cây chuẩn bị ra hoa"
          ],
          correct: 1,
          explanation: "Lớp vỏ cây chứa các ống dẫn chất dinh dưỡng từ lá xuống rễ; khi bị cắt khoanh thì chất dinh dưỡng bị chặn lại gây phình to mép cắt."
        },
        {
          id: "tx3_4_6",
          level: 3,
          question: "Loài chim cánh cụt thích nghi với cái lạnh khắc nghiệt ở vùng Nam Cực nhờ đặc điểm cơ thể nào?",
          options: [
            "Có lớp mỡ dưới da rất dày và lớp lông ngắn rậm không thấm nước",
            "Biết bay lượn trên tầng mây cao",
            "Có sừng nhọn trên đầu",
            "Chỉ thích ăn cỏ khô mùa đông"
          ],
          correct: 0,
          explanation: "Lớp mỡ dày giữ thân nhiệt và bộ lông không thấm nước giúp chim cánh cụt lặn dưới biển băng giá mà không bị cóng rét."
        },
        {
          id: "tx3_4_7",
          level: 4,
          question: "Vì sao chúng ta không nên để quá nhiều chậu cây xanh trong phòng ngủ đóng kín cửa vào ban đêm?",
          options: [
            "Vì cây ban đêm thải ra khí độc hại giết chết muỗi",
            "Vì vào ban đêm cây không quang hợp mà chỉ hô hấp: hút khí ô-xy và thải ra nhiều khí các-bô-níc, gây ngột ngạt khó thở cho con người",
            "Vì rễ cây sẽ mọc dài làm vỡ nền nhà",
            "Vì cây ban đêm sẽ phát sáng làm mất ngủ"
          ],
          correct: 1,
          explanation: "Ban đêm không có ánh sáng, cây ngừng quang hợp và hô hấp lấy O2, nhả CO2, trong phòng kín dễ gây thiếu hụt oxy cho người ngủ."
        },
        {
          id: "tx3_4_8",
          level: 4,
          question: "Hành động nào dưới đây thể hiện việc <strong>sử dụng hợp lý và bảo vệ động thực vật</strong>?",
          options: [
            "Săn bắt chim non trong mùa sinh sản",
            "Khai thác gỗ rừng đầu nguồn vô tội vạ",
            "Trồng rừng ngập mặn, không sử dụng các sản phẩm làm từ ngà voi, vảy tê tê và tích cực bảo vệ động vật hoang dã",
            "Đổ hóa chất độc hại xuống ao hồ để bắt cá nhanh"
          ],
          correct: 2,
          explanation: "Không tiêu thụ động vật hoang dã và trồng rừng ngập mặn là hành động thiết thực gìn giữ cân bằng sinh thái."
        }
      ]
    },
    {
      id: "chu_de_con_nguoi_va_suc_khoe",
      name: "Chủ Đề 5: Cơ Quan Tuần Hoàn, Thần Kinh & Bài Tiết",
      icon: "❤️",
      desc: "Cấu tạo và chức năng của tim mạch, não bộ, tủy sống, cơ quan bài tiết nước tiểu; Thói quen sống lành mạnh bảo vệ cơ thể.",
      theory: {
        highlights: [
          {
            icon: "🫀",
            title: "Cơ quan tuần hoàn (Tim và Mạch máu)",
            content: "• <strong>Gồm có:</strong> Tim và các mạch máu (động mạch, tĩnh mạch, mao mạch).<br/>• <strong>Chức năng:</strong> Tim co bóp như một chiếc bơm, liên tục đẩy máu giàu oxy và chất dinh dưỡng đi nuôi toàn cơ thể, đồng thời đưa máu chứa khí carbonic về phổi để lọc sạch.<br/>• <strong>Bảo vệ tim mạch:</strong> Tập thể dục đều đặn, không mặc quần áo quá chật, ăn nhiều rau xanh, hạn chế ăn mỡ động vật và thức ăn quá mặn."
          },
          {
            icon: "🧠",
            title: "Cơ quan thần kinh (Não và Tủy sống)",
            content: "• <strong>Gồm có:</strong> Não (nằm trong hộp sọ), tủy sống (nằm trong cột sống) và các dây thần kinh.<br/>• <strong>Chức năng:</strong> Điều khiển, phối hợp mọi hoạt động, cảm xúc, suy nghĩ và học tập của cơ thể.<br/>• <strong>Chăm sóc:</strong> Ngủ đủ 8-9 tiếng mỗi ngày, không thức quá khuya, giải tỏa căng thẳng bằng âm nhạc, không sử dụng chất kích thích."
          },
          {
            icon: "💧",
            title: "Cơ quan bài tiết nước tiểu",
            content: "• <strong>Gồm có:</strong> Hai quả thận, hai ống dẫn nước tiểu, bóng đái (bàng quang) và ống đái.<br/>• <strong>Chức năng:</strong> Thận lọc các chất cặn bã và chất độc trong máu tạo thành nước tiểu, đưa xuống bóng đái và thải ra ngoài.<br/>• <strong>Lời khuyên:</strong> Uống đủ nước sạch (1,5 - 2 lít/ngày), tuyệt đối <em>không nhịn tiểu</em> để phòng tránh sỏi thận và viêm đường tiết niệu."
          }
        ]
      },
      questions: [
        {
          id: "tx3_5_1",
          level: 1,
          question: "Cơ quan nào trong cơ thể hoạt động như một chiếc máy bơm, liên tục co bóp để đẩy máu đi nuôi cơ thể?",
          options: ["Dạ dày", "Trái tim", "Phổi", "Bóng đái"],
          correct: 1,
          explanation: "Trái tim co bóp nhịp nhàng suốt cuộc đời để bơm máu lưu thông qua hệ thống mạch máu."
        },
        {
          id: "tx3_5_2",
          level: 1,
          question: "Cơ quan bài tiết nước tiểu của con người gồm có bao nhiêu <strong>quả thận</strong>?",
          options: ["1 quả", "2 quả", "3 quả", "4 quả"],
          correct: 1,
          explanation: "Cơ thể con người bình thường có 2 quả thận (thận trái và thận phải) hình hạt đậu nằm ở vùng thắt lưng."
        },
        {
          id: "tx3_5_3",
          level: 2,
          question: "Bộ phận nào đóng vai trò là 'trung tâm chỉ huy', điều khiển mọi suy nghĩ, lời nói và hành vi của con người?",
          options: ["Bộ não", "Bàn tay", "Đôi mắt", "Quả tim"],
          correct: 0,
          explanation: "Não bộ nằm trong hộp sọ là cơ quan trung ương thần kinh tiếp nhận và phát lệnh điều khiển mọi hoạt động."
        },
        {
          id: "tx3_5_4",
          level: 2,
          question: "Thói quen nào dưới đây gây hại nghiêm trọng cho <strong>thận và cơ quan bài tiết nước tiểu</strong>?",
          options: [
            "Uống đủ nước lọc mỗi ngày",
            "Thói quen thường xuyên nhịn tiểu và ăn quá mặn",
            "Tập thể dục buổi sáng",
            "Ăn nhiều rau củ quả tươi"
          ],
          correct: 1,
          explanation: "Nhịn tiểu làm lắng đọng cặn dễ tạo sỏi thận; ăn mặn khiến thận phải làm việc quá tải, lâu ngày gây suy thận."
        },
        {
          id: "tx3_5_5",
          level: 3,
          question: "Khi em chạm tay vào một vật rất nóng, tay em lập tức rụt lại ngay trước khi em kịp suy nghĩ. Hiện tượng này do bộ phận nào điều khiển?",
          options: [
            "Tủy sống (phản xạ tự nhiên bảo vệ cơ thể)",
            "Dạ dày",
            "Hai quả thận",
            "Mạch máu dưới da"
          ],
          correct: 0,
          explanation: "Tủy sống điều khiển các phản xạ không điều kiện nhằm bảo vệ cơ thể tránh bị bỏng tức thì."
        },
        {
          id: "tx3_5_6",
          level: 3,
          question: "Để có một trái tim khỏe mạnh, học sinh lớp 3 nên duy trì lối sống nào dưới đây?",
          options: [
            "Thức đêm chơi điện tử đến sáng",
            "Chỉ ăn thịt mỡ và đồ chiên rán ngập dầu",
            "Tích cực chạy nhảy vui chơi vận động ngoài trời, ăn uống cân đối đủ 4 nhóm chất và ngủ đủ giấc",
            "Uống thật nhiều nước ngọt có ga"
          ],
          correct: 2,
          explanation: "Vận động hợp lý và dinh dưỡng lành mạnh giúp cơ tim dẻo dai và lòng mạch máu luôn thông thoáng."
        },
        {
          id: "tx3_5_7",
          level: 4,
          question: "Vì sao việc đội mũ bảo hiểm khi đi xe máy lại có ý nghĩa sống còn đối với <strong>cơ quan thần kinh</strong>?",
          options: [
            "Để che mưa che nắng cho mái tóc",
            "Để bảo vệ hộp sọ và não bộ tránh khỏi các chấn thương sọ não nguy hiểm khi không may xảy ra va quệt giao thông",
            "Để cảnh sát giao thông không xử phạt",
            "Để nhìn trông đẹp mắt hơn"
          ],
          correct: 1,
          explanation: "Não bộ rất mềm và dễ bị tổn thương vĩnh viễn; mũ bảo hiểm hấp thụ xung lực bảo vệ hộp sọ an toàn."
        },
        {
          id: "tx3_5_8",
          level: 4,
          question: "Sau khi chạy bền 500m trong tiết Thể dục, nhịp thở và nhịp tim của em đập nhanh hơn bình thường rất nhiều. Điều này chứng tỏ điều gì về cơ thể?",
          options: [
            "Cơ thể đang bị bệnh tim nguy hiểm cần đi viện cấp cứu",
            "Cơ bắp cần nhiều năng lượng và ô-xy hơn khi vận động mạnh, nên tim phải đập nhanh hơn để tăng cường bơm máu và phổi thở nhanh hơn để cung cấp đủ oxy",
            "Cơ quan bài tiết bị ngừng hoạt động",
            "Não bộ bị mất kiểm soát"
          ],
          correct: 1,
          explanation: "Đây là phản ứng sinh lý thích nghi hoàn toàn tự nhiên của hệ tuần hoàn và hô hấp đáp ứng nhu cầu tiêu thụ oxy cao của cơ bắp."
        }
      ]
    },
    {
      id: "chu_de_trai_dat_va_bau_troi",
      name: "Chủ Đề 6: Bầu Trời, Trái Đất & Các Đới Khí Hậu",
      icon: "🌍",
      desc: "Xác định 4 phương hướng chính; Mặt Trời, Trái Đất, Mặt Trăng; 3 đới khí hậu cơ bản và kỹ năng phòng chống thiên tai.",
      theory: {
        highlights: [
          {
            icon: "🧭",
            title: "Phương hướng trong không gian (4 phương chính)",
            content: "• <strong>4 phương chính:</strong> <strong>Đông, Tây, Nam, Bắc</strong>.<br/>• <strong>Quy tắc xác định theo Mặt Trời:</strong> Buổi sáng Mặt Trời mọc ở hướng <em>Đông</em>, buổi chiều Mặt Trời lặn ở hướng <em>Tây</em>.<br/>• Nếu dang hai tay, tay phải chỉ hướng Đông (mặt trời mọc) -> tay trái chỉ hướng Tây -> trước mặt là hướng <strong>Bắc</strong> -> sau lưng là hướng <strong>Nam</strong>.<br/>• Dụng cụ chuyên dụng để tìm phương hướng là <strong>la bàn</strong> (kim nam châm luôn chỉ hướng Bắc - Nam)."
          },
          {
            icon: "☀️",
            title: "Hệ Mặt Trời & Chuyển động của Trái Đất",
            content: "• Mặt Trời là một ngôi sao tự phát sáng tỏa nhiệt.<br/>• Trái Đất là một hành tinh quay xung quanh Mặt Trời (mất 1 năm = 365 ngày 6 giờ).<br/>• Trái Đất tự quay quanh trục từ Tây sang Đông sinh ra <strong>ngày và đêm</strong> luân phiên.<br/>• Mặt Trăng là vệ tinh tự nhiên quay xung quanh Trái Đất."
          },
          {
            icon: "❄️",
            title: "Các đới khí hậu trên Trái Đất",
            content: "• <strong>Đới nóng (Nhiệt đới):</strong> Nằm ở khu vực xích đạo, nóng quanh năm, mưa nhiều (Việt Nam nằm trong đới này).<br/>• <strong>Hai đới ôn hòa (Ôn đới):</strong> Khí hậu ôn hòa, thời tiết 4 mùa (Xuân, Hạ, Thu, Đông) phân biệt rất rõ rệt.<br/>• <strong>Hai đới lạnh (Hàn đới):</strong> Nằm ở hai vùng cực Bắc và Cực Nam, băng giá lạnh buốt quanh năm."
          }
        ]
      },
      questions: [
        {
          id: "tx3_6_1",
          level: 1,
          question: "Mặt Trời buổi sáng luôn mọc ở hướng nào?",
          options: ["Hướng Tây", "Hướng Đông", "Hướng Nam", "Hướng Bắc"],
          correct: 1,
          explanation: "Do chiều tự quay của Trái Đất từ Tây sang Đông nên buổi sáng ta luôn thấy Mặt Trời mọc ở hướng Đông."
        },
        {
          id: "tx3_6_2",
          level: 1,
          question: "Việt Nam nằm trong đới khí hậu nào trên Trái Đất?",
          options: ["Đới lạnh (Hàn đới)", "Đới nóng (Nhiệt đới)", "Đới ôn hòa (Ôn đới)", "Đới địa cực"],
          correct: 1,
          explanation: "Nước Việt Nam nằm trọn vẹn trong vùng nhiệt đới gió mùa của bán cầu Bắc (đới nóng), nhận nhiều ánh sáng mặt trời."
        },
        {
          id: "tx3_6_3",
          level: 2,
          question: "Dụng cụ có kim nam châm chuyên dùng để xác định chính xác phương hướng khi đi biển hoặc trong rừng rậm là:",
          options: ["Nhiệt kế", "La bàn", "Đồng hồ cát", "Thước đo góc"],
          correct: 1,
          explanation: "La bàn sử dụng từ tính của Trái Đất, kim la bàn có đầu sơn màu luôn chỉ thẳng về hướng Bắc từ trường."
        },
        {
          id: "tx3_6_4",
          level: 2,
          question: "Hiện tượng ngày và đêm luân phiên nhau trên Trái Đất là do nguyên nhân nào?",
          options: [
            "Do Mặt Trời lúc bật đèn lúc tắt đèn",
            "Do Trái Đất có hình cầu và tự quay quanh trục của mình từ Tây sang Đông",
            "Do Mặt Trăng che khuất Mặt Trời",
            "Do Trái Đất đứng yên một chỗ"
          ],
          correct: 1,
          explanation: "Trái Đất hình cầu nên một nửa được chiếu sáng là ngày, nửa kia trong bóng tối là đêm; việc tự quay làm 2 nửa luân phiên nhận ánh sáng."
        },
        {
          id: "tx3_6_5",
          level: 3,
          question: "Vào một buổi sáng nắng ráo, bạn Hùng đứng dang hai tay, tay phải chỉ về phía Mặt Trời mọc. Hỏi hướng <strong>trước mặt</strong> của bạn Hùng là hướng nào?",
          options: ["Hướng Đông", "Hướng Tây", "Hướng Bắc", "Hướng Nam"],
          correct: 2,
          explanation: "Quy tắc: Tay phải hướng Đông -> tay trái hướng Tây -> trước mặt là hướng Bắc -> sau lưng là hướng Nam."
        },
        {
          id: "tx3_6_6",
          level: 3,
          question: "Đới khí hậu nào trên Trái Đất có đặc điểm: quanh năm băng tuyết bao phủ, nhiệt độ luôn dưới 0°C và là nơi sinh sống của gấu trắng, chim cánh cụt?",
          options: ["Đới nóng", "Đới ôn hòa", "Đới lạnh (Hàn đới)", "Đới cận xích đạo"],
          correct: 2,
          explanation: "Hai đới lạnh ở hai vùng cực Bắc và Nam nhận được rất ít nhiệt lượng mặt trời nên lạnh giá quanh năm."
        },
        {
          id: "tx3_6_7",
          level: 4,
          question: "Khi đang đi trên đường gặp trời mưa dông bão tố sấm sét đùng đoàng, nơi nào dưới đây là <strong>nguy hiểm nhất tuyệt đối không được trú ẩn</strong>?",
          options: [
            "Vào trong một ngôi nhà kiên cố bên đường",
            "Đứng trú dưới gốc cây to trơ trọi giữa cánh đồng hoặc bãi đất trống",
            "Vào trong xe ô tô đóng kín cửa kính",
            "Vào trong siêu thị hoặc trạm xăng kiên cố"
          ],
          correct: 1,
          explanation: "Cây to cao đứng độc lập giữa bãi đất trống là vật dẫn sét nguy hiểm số 1, rất dễ bị sét đánh trực tiếp trúng người trú ẩn."
        },
        {
          id: "tx3_6_8",
          level: 4,
          question: "Hiện tượng Trái Đất nóng lên toàn cầu làm băng tan ở hai cực bắt nguồn từ hoạt động tiêu cực nào của con người?",
          options: [
            "Trồng thêm nhiều cây xanh và hoa",
            "Xả quá nhiều khí thải công nghiệp, chặt phá rừng bừa bãi và lạm dụng nhiên liệu hóa thạch gây hiệu ứng nhà kính",
            "Thu gom rác tái chế và sử dụng năng lượng mặt trời",
            "Tập thể dục đi bộ nhiều hơn"
          ],
          correct: 1,
          explanation: "Khí thải CO2 tích tụ trong khí quyển giữ nhiệt lại làm Trái Đất nóng lên, đe dọa môi trường sống của toàn nhân loại."
        }
      ]
    }
  ]
};
