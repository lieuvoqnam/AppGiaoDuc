/**
 * ethics-3-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Đạo Đức & Kỹ Năng Sống Lớp 3
 * Chuẩn Chương trình Giáo dục phổ thông (GDPT) 2018
 * (Kết nối tri thức với cuộc sống, Cánh diều, Chân trời sáng tạo)
 */

window.ETHICS3_DATA = {
  topics: [
    {
      id: "kinh_yeu_bac_ho",
      name: "Chủ Đề 1: Kính Yêu Bác Hồ & Làm Theo 5 Điều Bác Dạy",
      icon: "🌟",
      desc: "Tình cảm bao la của Bác Hồ với thiếu niên nhi đồng, ghi nhớ và thực hành 5 điều Bác dạy trong học tập và rèn luyện đạo đức.",
      theory: {
        highlights: [
          {
            icon: "❤️",
            title: "Bác Hồ với thiếu niên nhi đồng",
            content: "• Chủ tịch Hồ Chí Minh là vị lãnh tụ vĩ đại của dân tộc Việt Nam, người luôn dành tình yêu thương đặc biệt nhất cho các cháu thiếu nhi.<br/>• <strong>Câu thơ của Bác:</strong> <em>'Trẻ em như búp trên cành / Biết ăn ngủ, biết học hành là ngoan'</em>.<br/>• Dù bận trăm công nghìn việc nước, Bác vẫn luôn gửi thư, gửi quà chia vui với các cháu mỗi dịp Tết Trung thu, ngày Quốc tế Thiếu nhi 1/6 hay ngày khai giảng."
          },
          {
            icon: "📜",
            title: "5 điều Bác Hồ dạy thiếu niên nhi đồng",
            content: "• <strong>Điều 1:</strong> Yêu Tổ quốc, yêu đồng bào.<br/>• <strong>Điều 2:</strong> Học tập tốt, lao động tốt.<br/>• <strong>Điều 3:</strong> Đoàn kết tốt, kỷ luật tốt.<br/>• <strong>Điều 4:</strong> Giữ gìn vệ sinh thật tốt.<br/>• <strong>Điều 5:</strong> Khiêm tốn, thật thà, dũng cảm."
          },
          {
            icon: "🌱",
            title: "Hành động thiết thực của học sinh lớp 3",
            content: "• Nghiêm trang khi chào cờ và hát Quốc ca.<br/>• Chăm ngoan học tập, tự giác làm bài tập về nhà và giúp đỡ bạn cùng tiến bộ.<br/>• Giữ gìn vệ sinh thân thể, lớp học và nơi ở luôn sạch đẹp, ngăn nắp."
          }
        ]
      },
      questions: [
        {
          id: "et3_1_1",
          level: 1,
          question: "Điều thứ nhất trong <strong>5 điều Bác Hồ dạy</strong> thiếu niên nhi đồng là gì?",
          options: [
            "Yêu Tổ quốc, yêu đồng bào",
            "Học tập tốt, lao động tốt",
            "Đoàn kết tốt, kỷ luật tốt",
            "Khiêm tốn, thật thà, dũng cảm"
          ],
          correct: 0,
          explanation: "Điều 1 mở đầu 5 điều Bác Hồ dạy là: 'Yêu Tổ quốc, yêu đồng bào'."
        },
        {
          id: "et3_1_2",
          level: 1,
          question: "Khi tham gia lễ chào cờ đầu tuần ở trường, học sinh cần có tư thế như thế nào?",
          options: [
            "Đứng nghiêm trang, mắt hướng về lá cờ Tổ quốc và hát vang bài Quốc ca",
            "Vừa đứng vừa nói chuyện riêng và ăn quà vặt",
            "Ngồi bệt xuống sân trường che nắng",
            "Quay lưng lại với cột cờ"
          ],
          correct: 0,
          explanation: "Tư thế đứng nghiêm trang hát Quốc ca thể hiện lòng tôn kính Quốc kỳ và lòng yêu nước sâu sắc."
        },
        {
          id: "et3_1_3",
          level: 2,
          question: "Việc làm nào dưới đây thể hiện đúng điều Bác dạy: <strong>'Học tập tốt, lao động tốt'</strong>?",
          options: [
            "Chỉ thích chơi game, không chịu làm bài tập",
            "Chăm chú lắng nghe cô giáo giảng bài và tự giác quét dọn phòng học khi đến lượt trực nhật",
            "Nhờ bạn làm bài hộ để đi đá bóng",
            "Xé giấy vở vứt bừa bãi xuống sân trường"
          ],
          correct: 1,
          explanation: "Chăm học tập và tích cực tham gia lao động vệ sinh lớp học chính là thực hiện tốt điều Bác dạy."
        },
        {
          id: "et3_1_4",
          level: 2,
          question: "Thực hiện điều thứ 4: <strong>'Giữ gìn vệ sinh thật tốt'</strong>, em nên làm gì mỗi ngày?",
          options: [
            "Không đánh răng rửa mặt trước khi đến lớp",
            "Tắm rửa sạch sẽ, rửa tay bằng xà phòng trước khi ăn và sau khi đi vệ sinh, giữ bàn học ngăn nắp",
            "Vứt rác ra gầm bàn học ở lớp",
            "Mặc quần áo lấm lem bùn đất đi học"
          ],
          correct: 1,
          explanation: "Giữ vệ sinh cá nhân và môi trường sống sạch sẽ giúp phòng ngừa bệnh tật và cơ thể khỏe mạnh."
        },
        {
          id: "et3_1_5",
          level: 3,
          question: "Hành động nào dưới đây thể hiện phẩm chất <strong>'Khiêm tốn, thật thà, dũng cảm'</strong>?",
          options: [
            "Khi đạt điểm 10, khoe khoang và chê bai các bạn điểm kém",
            "Khi lỡ làm rách sách của bạn, em dũng cảm nhận lỗi và xin lỗi bạn chân thành",
            "Giấu bài kiểm tra điểm kém không cho bố mẹ biết",
            "Thấy bạn bị bắt nạt thì đứng ngoài hò reo"
          ],
          correct: 1,
          explanation: "Dũng cảm nhận lỗi khi mình làm sai và nói thật là biểu hiện sáng ngời của lòng thật thà, dũng cảm."
        },
        {
          id: "et3_1_6",
          level: 3,
          question: "Câu chuyện nào dưới đây kể về tấm gương Bác Hồ rèn luyện sức khỏe và yêu thương các cháu nhỏ?",
          options: [
            "Bác Hồ tắm suối và tập thể dục thể thao buổi sáng ở chiến khu Việt Bắc",
            "Thỏ và Rùa chạy thi",
            "Ba lưỡi rìu",
            "Cây tre trăm đốt"
          ],
          correct: 0,
          explanation: "Bác Hồ luôn là tấm gương sáng ngời về tinh thần tự giác tập luyện thể dục nâng cao sức khỏe phục vụ nhân dân."
        },
        {
          id: "et3_1_7",
          level: 4,
          question: "Để xứng đáng là cháu ngoan Bác Hồ, khi gặp một bài toán khó trong sách giáo khoa, thái độ đúng đắn nhất của em là gì?",
          options: [
            "Bỏ cuộc ngay lập tức và gấp sách lại đi ngủ",
            "Kiên trì đọc kỹ lại đề bài, suy nghĩ tìm cách giải, nếu chưa hiểu thì mạnh dạn hỏi thầy cô hoặc bố mẹ giảng giải",
            "Chép luôn phần lời giải của bạn bên cạnh",
            "Xé trang sách đó đi"
          ],
          correct: 1,
          explanation: "Tinh thần vượt khó, ham học hỏi và không giấu dốt là phẩm chất cao đẹp của người đội viên thiếu niên tiền phong."
        },
        {
          id: "et3_1_8",
          level: 4,
          question: "Ý nghĩa sâu xa của việc thiếu nhi Việt Nam noi gương và học tập theo tấm gương đạo đức Bác Hồ là gì?",
          options: [
            "Chỉ để được cô giáo khen thưởng cuối năm",
            "Giúp mỗi bạn nhỏ nuôi dưỡng nhân cách cao đẹp, trở thành người công dân có ích, đem tài năng xây dựng đất nước Việt Nam giàu mạnh, sánh vai với các cường quốc năm châu",
            "Để được đi chơi nhiều hơn",
            "Không mang ý nghĩa gì lớn lao"
          ],
          correct: 1,
          explanation: "Bác Hồ từng căn dặn non sông Việt Nam có trở nên tươi đẹp hay không chính là nhờ một phần lớn ở công học tập rèn luyện của các em."
        }
      ]
    },
    {
      id: "giu_loi_hua_va_trung_thuc",
      name: "Chủ Đề 2: Giữ Lời Hứa & Trung Thực",
      icon: "🤝",
      desc: "Trọng chữ tín, tại sao cần giữ đúng lời đã hứa; Trung thực trong học tập, dũng cảm nhận lỗi và sửa sai khi mắc khuyết điểm.",
      theory: {
        highlights: [
          {
            icon: "💎",
            title: "Ý nghĩa của việc giữ lời hứa",
            content: "• Giữ lời hứa là thực hiện đúng những gì mình đã nói, đã cam kết với người khác.<br/>• <strong>Người biết giữ lời hứa:</strong> Được mọi người tin cậy, tôn trọng và yêu mến.<br/>• <strong>Nếu không giữ lời:</strong> Sẽ đánh mất lòng tin, bị coi là người thất tín và khi gặp khó khăn sẽ không ai tin tưởng giúp đỡ nữa.<br/>• <em>Tục ngữ:</em> <strong>'Nói lời phải giữ lấy lời / Đừng như con bướm đậu rồi lại bay'</strong>."
          },
          {
            icon: "🛡️",
            title: "Trung thực trong học tập và cuộc sống",
            content: "• Tự giác làm bài, không quay cóp bài của bạn hay mang tài liệu vào phòng thi.<br/>• Nhặt được của rơi biết tìm trả lại người mất.<br/>• Khi lỡ làm vỡ đồ đạc hoặc mắc lỗi: Không đổ lỗi cho người khác, dũng cảm nhận trách nhiệm và tìm cách khắc phục."
          },
          {
            icon: "💡",
            title: "Làm gì khi không thể thực hiện lời hứa?",
            content: "• Nếu vì lý do bất khả kháng (ốm đau, việc đột xuất) không thực hiện được: Phải báo trước kịp thời, giải thích rõ lý do và nói lời xin lỗi chân thành."
          }
        ]
      },
      questions: [
        {
          id: "et3_2_1",
          level: 1,
          question: "Câu tục ngữ nào dưới đây khuyên chúng ta phải <strong>biết giữ lời hứa</strong>?",
          options: [
            "Nói lời phải giữ lấy lời, đừng như con bướm đậu rồi lại bay",
            "Gần mực thì đen, gần đèn thì rạng",
            "Học thầy không tày học bạn",
            "Ăn quả nhớ kẻ trồng cây"
          ],
          correct: 0,
          explanation: "Câu tục ngữ ví người không giữ lời như con bướm bay lượn vô định, khuyên con người phải coi trọng chữ tín."
        },
        {
          id: "et3_2_2",
          level: 1,
          question: "Trong giờ kiểm tra Toán, bạn bên cạnh muốn chép bài của em. Em nên xử lý thế nào là <strong>trung thực</strong>?",
          options: [
            "Đưa luôn bài cho bạn chép để bạn được điểm 10",
            "Che bài lại, nhẹ nhàng nhắc bạn tự làm bài và sau giờ kiểm tra sẽ hướng dẫn lại cho bạn hiểu",
            "Hò hét ầm ĩ cho cả lớp nghe",
            "Bảo bạn cho tiền thì mới cho xem bài"
          ],
          correct: 1,
          explanation: "Không cho bạn chép bài trong giờ thi và sẵn sàng giảng lại cho bạn sau giờ học là giúp bạn tiến bộ chân chính."
        },
        {
          id: "et3_2_3",
          level: 2,
          question: "Hành động nào dưới đây là <strong>không giữ lời hứa</strong>?",
          options: [
            "Hứa với mẹ 5 giờ chiều đi đá bóng về và về đúng 5 giờ",
            "Hứa mang truyện cho bạn mượn vào thứ Hai nhưng lại vứt ở nhà chơi game và quên bẵng đi không xin lỗi",
            "Hứa chủ nhật sang nhà bà và đến đúng hẹn",
            "Hứa cố gắng đạt điểm 10 và chăm chỉ ôn tập"
          ],
          correct: 1,
          explanation: "Quên lời hứa mà không có lý do chính đáng và không xin lỗi là hành vi thất hứa, làm mất lòng tin của bạn."
        },
        {
          id: "et3_2_4",
          level: 2,
          question: "Khi đang chơi đuổi bắt ở sân trường, em vô tình va vào làm ngã một em học sinh lớp 1. Em nên làm gì?",
          options: [
            "Bỏ chạy thật nhanh để không ai biết mình là người gây ra",
            "Đỡ em dậy, hỏi thăm xem em có bị đau ở đâu không, xin lỗi em và đưa em vào phòng y tế nếu bị trầy xước",
            "Quát mắng em nhỏ sao không biết tránh đường",
            "Đứng cười trêu chọc em"
          ],
          correct: 1,
          explanation: "Dũng cảm nhận trách nhiệm và chăm sóc người bị va chạm thể hiện sự nhân văn và lòng dũng cảm của người anh/chị lớp lớn."
        },
        {
          id: "et3_2_5",
          level: 3,
          question: "Trên đường đi học về, em nhặt được một chiếc ví rơi bên trong có tiền và nhiều giấy tờ tùy thân quan trọng. Em nên làm gì?",
          options: [
            "Lấy tiền tiêu xài và vứt ví vào thùng rác",
            "Mang đến đồn công an gần nhất hoặc báo cho thầy cô giáo, bác trưởng thôn để tìm trả lại cho người đánh rơi",
            "Mang về nhà cất giấu trong tủ riêng",
            "Chia tiền cho các bạn cùng lớp"
          ],
          correct: 1,
          explanation: "Nhặt được của rơi trả người đánh mất là nét đẹp đạo đức truyền thống 'đói cho sạch, rách cho thơm'."
        },
        {
          id: "et3_2_6",
          level: 3,
          question: "Tuấn đã hứa chủ nhật sẽ cùng Nam đi thư viện mượn sách. Nhưng sáng chủ nhật Tuấn bị sốt cao. Tuấn nên làm gì?",
          options: [
            "Cứ im lặng nằm ở nhà không cần nói gì",
            "Nhờ mẹ gọi điện thoại hoặc nhắn tin sớm cho Nam, giải thích lý do bị ốm, xin lỗi bạn và hẹn dịp khác",
            "Bắt mẹ phải chở mình đi thư viện bằng được",
            "Tức giận đập phá đồ đạc"
          ],
          correct: 1,
          explanation: "Khi có lý do bất khả kháng, việc thông báo sớm và nói lời xin lỗi thể hiện sự tôn trọng bạn bè và giữ uy tín."
        },
        {
          id: "et3_2_7",
          level: 4,
          question: "Vì sao người xưa có câu: <em>'Một lần bất tín, vạn lần bất tin'</em>?",
          options: [
            "Vì chỉ cần nói dối hoặc thất hứa một lần, người khác sẽ mất lòng tin và rất khó tin tưởng mình ở những lần sau",
            "Vì chỉ được phép thất hứa đúng một lần duy nhất trong đời",
            "Vì người ta sẽ phạt một vạn đồng",
            "Không có căn cứ gì"
          ],
          correct: 0,
          explanation: "Lòng tin xây dựng rất khó nhưng đánh mất rất dễ; một lần dối trá sẽ khiến lời nói sau này không còn giá trị."
        },
        {
          id: "et3_2_8",
          level: 4,
          question: "Trong giờ học, cô giáo hỏi cả lớp bài tập về nhà. Em quên chưa làm bài. Em nên trả lời thế nào là <strong>trung thực và dũng cảm</strong>?",
          options: [
            "Nói dối là em để quên vở bài tập ở nhà nhưng thực ra chưa làm",
            "Đổ lỗi cho em nhỏ nghịch làm mất vở",
            "Đứng dậy lễ phép thưa thật với cô là tối qua em mải chơi quên chưa làm bài, xin lỗi cô và hứa sẽ hoàn thành ngay trong giờ ra chơi",
            "Ngồi im giả vờ như không nghe thấy câu hỏi"
          ],
          correct: 2,
          explanation: "Thẳng thắn nhận lỗi và cam kết khắc phục bài tập là hành động trung thực được thầy cô ghi nhận và tôn trọng."
        }
      ]
    },
    {
      id: "quan_tam_cham_soc_nguoi_than",
      name: "Chủ Đề 3: Quan Tâm & Chăm Sóc Người Thân",
      icon: "❤️",
      desc: "Lòng hiếu thảo với ông bà cha mẹ; Nhường nhịn giúp đỡ em nhỏ; Chăm sóc người thân khi bị ốm và chia sẻ công việc nhà vừa sức.",
      theory: {
        highlights: [
          {
            icon: "👵",
            title: "Hiếu thảo với ông bà, cha mẹ",
            content: "• Công ơn sinh thành, nuôi dưỡng của ông bà cha mẹ to lớn như trời biển.<br/>• <strong>Biểu hiện hiếu thảo:</strong> Lễ phép chào hỏi khi đi thưa về gửi; rót nước mời ông bà; đấm lưng cho ông bà khi mỏi; vâng lời cha mẹ dặn.<br/>• <em>Tục ngữ:</em> <strong>'Công cha như núi Thái Sơn / Nghĩa mẹ như nước trong nguồn chảy ra'</strong>."
          },
          {
            icon: "👶",
            title: "Nhường nhịn và chăm sóc em nhỏ",
            content: "• Là anh chị lớn trong nhà, cần biết nhường nhịn đồ chơi, đồ ăn ngon cho em nhỏ.<br/>• Hướng dẫn em học bài, chơi cùng em an toàn và dỗ dành khi em khóc.<br/>• <em>Tục ngữ:</em> <strong>'Anh em như thể tay chân / Rách lành đùm bọc dở hay đỡ đần'</strong>."
          },
          {
            icon: "🍵",
            title: "Chăm sóc khi người thân bị ốm",
            content: "• Đi lại nhẹ nhàng, giữ không gian yên tĩnh cho người bệnh nghỉ ngơi.<br/>• Lấy nước ấm, lấy thuốc (theo hướng dẫn của người lớn), đắp khăn mát khi người thân bị sốt.<br/>• Hỏi thăm ân cần, bóp tay bóp chân giúp người thân cảm thấy ấm áp, mau lành bệnh."
          }
        ]
      },
      questions: [
        {
          id: "et3_3_1",
          level: 1,
          question: "Khi đi học về đến nhà, hành động lễ phép đầu tiên của một người con ngoan là gì?",
          options: [
            "Vứt cặp sách ra giữa nhà rồi chạy đi chơi",
            "Khoanh tay lễ phép chào ông bà, cha mẹ",
            "Mở tủ lạnh tìm đồ ăn vặt",
            "Bật tivi xem hoạt hình"
          ],
          correct: 1,
          explanation: "Chào hỏi người lớn khi đi thưa về gửi là nét đẹp văn hóa lễ nghi cơ bản trong gia đình Việt Nam."
        },
        {
          id: "et3_3_2",
          level: 1,
          question: "Khi em trai nhỏ muốn mượn bộ đồ chơi lắp ráp của em để chơi cùng, em nên xử lý thế nào?",
          options: [
            "Giật lại đồ chơi và mắng mỏ em",
            "Vui vẻ rủ em cùng ngồi lắp ráp và hướng dẫn em chơi an toàn",
            "Đánh em thật đau",
            "Đem giấu đồ chơi vào gầm giường"
          ],
          correct: 1,
          explanation: "Chia sẻ đồ chơi và chơi cùng em nhỏ thể hiện tình cảm anh em gắn bó, biết nhường nhịn."
        },
        {
          id: "et3_3_3",
          level: 2,
          question: "Mẹ đi làm về mệt mỏi, em có thể làm việc gì vừa sức để giúp mẹ đỡ mệt?",
          options: [
            "Đòi mẹ phải nấu món ăn đắt tiền ngay lập tức",
            "Rót một cốc nước ấm mời mẹ uống, cất giày dép giúp mẹ và hỏi thăm mẹ",
            "Tiếp tục nằm xem điện thoại và giục mẹ dọn cơm",
            "Bày bừa đồ chơi ra sàn nhà"
          ],
          correct: 1,
          explanation: "Một cốc nước mát và lời hỏi thăm ấm áp của con là liều thuốc tinh thần quý giá xua tan mọi mệt nhọc của cha mẹ."
        },
        {
          id: "et3_3_4",
          level: 2,
          question: "Bà nội đang bị cảm sốt nằm nghỉ trên giường. Em nên làm gì để thể hiện sự quan tâm chăm sóc bà?",
          options: [
            "Mở nhạc thật to và rủ bạn bè vào phòng nhảy múa",
            "Đi lại nhẹ nhàng, giữ trật tự, lấy nước ấm cho bà uống và hỏi thăm sức khỏe của bà",
            "Đóng chặt cửa bỏ đi chơi",
            "Cằn nhằn vì bà không nấu cơm cho mình ăn"
          ],
          correct: 1,
          explanation: "Giữ không gian yên tĩnh và ân cần chăm sóc giúp người già cảm nhận được tình thương yêu và nhanh bình phục."
        },
        {
          id: "et3_3_5",
          level: 3,
          question: "Học sinh lớp 3 có thể tự giác làm những công việc nhà nào sau đây để chia sẻ với bố mẹ?",
          options: [
            "Tự dọn dẹp bàn học, gấp quần áo của mình, quét nhà và rửa cốc chén",
            "Trèo lên mái nhà sửa bồn nước",
            "Sử dụng dao nhọn chặt củi to",
            "Tự ý tháo lắp các ổ cắm điện bị hỏng"
          ],
          correct: 0,
          explanation: "Học sinh lớp 3 nên làm các công việc vừa sức như quét nhà, gấp quần áo, giữ góc học tập gọn gàng."
        },
        {
          id: "et3_3_6",
          level: 3,
          question: "Câu ca dao: <em>'Khôn ngoan đối đáp người ngoài / Gà cùng một mẹ chớ hoài đá nhau'</em> khuyên dạy bài học gì?",
          options: [
            "Cách nuôi gà lấy thịt",
            "Anh chị em ruột trong gia đình phải biết yêu thương, hòa thuận, đùm bọc lẫn nhau, không được tranh giành cãi vã",
            "Không được nói chuyện với người lạ",
            "Chỉ được chơi với anh chị em họ"
          ],
          correct: 1,
          explanation: "Hình ảnh ẩn dụ đàn gà cùng một mẹ nhắc nhở đạo lý anh em ruột thịt phải hòa thuận, đoàn kết một lòng."
        },
        {
          id: "et3_3_7",
          level: 4,
          question: "Bố mẹ đi làm vất vả để lo cho em ăn học. Một số bạn đua đòi đòi bố mẹ phải mua điện thoại đắt tiền để bằng bạn bằng bè. Em có suy nghĩ gì về hành vi này?",
          options: [
            "Hành vi đó là đúng vì phải có điện thoại xịn mới học giỏi",
            "Hành vi đó là chưa biết thương bố mẹ, thiếu hiểu biết và đua đòi lãng phí, làm bố mẹ thêm gánh nặng lo toan",
            "Ai cũng nên đua đòi như vậy",
            "Bố mẹ có nghĩa vụ phải mua mọi thứ con đòi"
          ],
          correct: 1,
          explanation: "Người con ngoan phải biết thấu hiểu nỗi vất vả mưu sinh của cha mẹ, sống giản dị và tập trung vào việc học."
        },
        {
          id: "et3_3_8",
          level: 4,
          question: "Vào ngày sinh nhật của bà hoặc mẹ, món quà nào dưới đây mang ý nghĩa tinh thần sâu sắc và quý giá nhất do chính tay em làm?",
          options: [
            "Vòi tiền bố để đi mua đồ đắt tiền",
            "Tự tay vẽ một tấm thiệp sắc màu nắn nót ghi những lời chúc yêu thương và đạt một điểm 10 dâng tặng",
            "Không cần làm gì cả",
            "Yêu cầu mẹ phải tổ chức tiệc lớn ở nhà hàng"
          ],
          correct: 1,
          explanation: "Tấm thiệp tự làm chứa chan tấm lòng hiếu thảo cùng bông hoa điểm 10 là món quà vô giá khiến bà và mẹ xúc động nhất."
        }
      ]
    },
    {
      id: "ham_hoc_hoi_va_tu_lap",
      name: "Chủ Đề 4: Ham Học Hỏi & Rèn Luyện Tự Lập",
      icon: "📖",
      desc: "Tinh thần chủ động tìm tòi tri thức; Mạnh dạn hỏi thầy cô bạn bè khi chưa hiểu; Tự giác làm bài tập và chuẩn bị đồ dùng đi học.",
      theory: {
        highlights: [
          {
            icon: "🔍",
            title: "Tinh thần ham học hỏi",
            content: "• Tri thức là vô tận, người ham học hỏi là người luôn khao khát tìm hiểu những điều mới lạ quanh mình.<br/>• <strong>Biểu hiện:</strong> Thích đọc sách khoa học, hay đặt câu hỏi 'Tại sao?', quan sát thế giới tự nhiên.<br/>• <strong>Không giấu dốt:</strong> Điều gì chưa hiểu thì mạnh dạn hỏi thầy cô, bố mẹ hoặc bạn bè.<br/>• <em>Tục ngữ:</em> <strong>'Học thầy không tày học bạn'</strong>; <strong>'Muốn biết phải hỏi, muốn giỏi phải học'</strong>."
          },
          {
            icon: "🎒",
            title: "Ý thức tự lập của học sinh lớp 3",
            content: "• Tự giác thức dậy đúng giờ theo chuông báo thức, không để bố mẹ gọi nhiều lần.<br/>• Tự vệ sinh cá nhân, tự mặc đồng phục sạch sẽ.<br/>• Xem thời khóa biểu tối hôm trước để tự sắp xếp sách vở, đồ dùng học tập vào cặp."
          },
          {
            icon: "🌟",
            title: "Lợi ích của tính tự lập",
            content: "• Giúp em tự tin, chủ động trong cuộc sống.<br/>• Giúp bố mẹ yên tâm, tự hào về sự trưởng thành của con cái."
          }
        ]
      },
      questions: [
        {
          id: "et3_4_1",
          level: 1,
          question: "Câu tục ngữ nào nói về tinh thần <strong>ham học hỏi, không ngại thắc mắc</strong>?",
          options: [
            "Muốn biết phải hỏi, muốn giỏi phải học",
            "Uống nước nhớ nguồn",
            "Lá lành đùm lá rách",
            "Có công mài sắt có ngày nên kim"
          ],
          correct: 0,
          explanation: "'Muốn biết phải hỏi, muốn giỏi phải học' khuyên ta phải chủ động hỏi han tìm tòi thì mới mở mang kiến thức."
        },
        {
          id: "et3_4_2",
          level: 1,
          question: "Hành động nào dưới đây thể hiện tính <strong>tự lập</strong> của học sinh lớp 3?",
          options: [
            "Để mẹ phải xúc cơm cho ăn từng thìa",
            "Tự nhìn thời khóa biểu để xếp sách vở và đồ dùng vào cặp trước khi đi ngủ",
            "Sáng ngủ nướng để bố mẹ phải bế dậy",
            "Nhờ anh chị mang cặp sách đến tận lớp cho mình"
          ],
          correct: 1,
          explanation: "Tự chuẩn bị sách vở theo thời khóa biểu là kỹ năng tự lập cơ bản nhất của học sinh tiểu học."
        },
        {
          id: "et3_4_3",
          level: 2,
          question: "Trong giờ học môn Toán, cô giáo giảng một dạng bài mới nhưng em chưa hiểu rõ. Em nên làm gì?",
          options: [
            "Giơ tay lễ phép xin cô giảng lại phần mình chưa hiểu",
            "Cứ im lặng giấu dốt để bạn bè tưởng mình giỏi",
            "Bỏ mặc không thèm học nữa",
            "Quay sang nói chuyện làm ồn lớp"
          ],
          correct: 0,
          explanation: "Mạnh dạn giơ tay hỏi bài thể hiện tinh thần cầu tiến, giúp em nắm vững kiến thức ngay tại lớp."
        },
        {
          id: "et3_4_4",
          level: 2,
          question: "Khi gặp một câu hỏi hay về thế giới tự nhiên mà chưa có câu trả lời, bạn Nam có thói quen tìm đọc trong sách Bách khoa toàn thư ở thư viện. Việc làm đó thể hiện phẩm chất gì?",
          options: ["Ham học hỏi và yêu thích đọc sách", "Lãng phí thời gian", "Lười biếng", "Kiêu ngạo"],
          correct: 0,
          explanation: "Chủ động tra cứu sách báo để mở rộng hiểu biết là biểu hiện tuyệt vời của tinh thần hiếu học."
        },
        {
          id: "et3_4_5",
          level: 3,
          question: "Tự lập <strong>không có nghĩa</strong> là hành động nào dưới đây?",
          options: [
            "Tự làm những việc vừa sức của mình",
            "Cố chấp làm những việc nguy hiểm vượt quá khả năng mà không chịu lắng nghe lời khuyên của người lớn",
            "Chủ động hoàn thành bài tập về nhà",
            "Tự giác giữ gìn đồ dùng cá nhân"
          ],
          correct: 1,
          explanation: "Tự lập là làm việc vừa sức một cách có trách nhiệm, không đồng nghĩa với liều lĩnh làm việc nguy hại."
        },
        {
          id: "et3_4_6",
          level: 3,
          question: "Bạn Hoa luôn lập thời gian biểu học tập và sinh hoạt mỗi ngày, tự giác ngồi vào bàn học đúng 7 giờ 30 tối mà không cần bố mẹ nhắc nhở. Kết quả bạn Hoa đạt được sẽ là gì?",
          options: [
            "Bạn sẽ có kết quả học tập xuất sắc và hình thành nếp sống khoa học, tự chủ suốt đời",
            "Bạn sẽ bị mệt mỏi và bạn bè xa lánh",
            "Không đem lại lợi ích gì",
            "Bạn sẽ trở nên nhút nhát"
          ],
          correct: 0,
          explanation: "Thói quen tự giác và kỷ luật giúp xây dựng bản lĩnh tự tin và nền tảng thành công bền vững."
        },
        {
          id: "et3_4_7",
          level: 4,
          question: "Tục ngữ có câu: <em>'Dốt đến đâu học lâu cũng biết'</em> muốn gửi gắm lời khuyên gì đến các bạn học sinh?",
          options: [
            "Không cần cố gắng vì ai cũng dốt",
            "Khuyên học sinh cần kiên trì, nhẫn nại, không nản lòng trước bài khó, chỉ cần chăm chỉ học hỏi thì việc gì cũng sẽ thành công",
            "Chỉ cần ngồi chờ thời gian trôi qua là tự giỏi",
            "Học lâu quá sẽ bị đau đầu"
          ],
          correct: 1,
          explanation: "Câu tục ngữ khẳng định sức mạnh của sự cần cù, chăm chỉ sẽ chiến thắng mọi sự kém cỏi ban đầu."
        },
        {
          id: "et3_4_8",
          level: 4,
          question: "Nếu một người từ nhỏ luôn ỷ lại, dựa dẫm vào bố mẹ từ việc nhỏ nhất đến việc lớn, khi lớn lên người đó sẽ gặp khó khăn gì?",
          options: [
            "Sẽ trở thành người rất tài giỏi và giàu có",
            "Sẽ trở nên thụ động, thiếu kỹ năng sinh tồn, dễ vấp ngã thất bại và khó hòa nhập với xã hội hiện đại",
            "Không gặp khó khăn nào cả",
            "Được mọi người tôn trọng hơn"
          ],
          correct: 1,
          explanation: "Tính ỷ lại biến con người thành kẻ yếu đuối, không có năng lực tự quyết và tự chịu trách nhiệm cho tương lai của mình."
        }
      ]
    },
    {
      id: "ton_trong_su_khac_biet_va_hoa_giai",
      name: "Chủ Đề 5: Tôn Trọng Sự Khác Biệt & Kỹ Năng Hòa Giải",
      icon: "🤝",
      desc: "Tôn trọng bạn bè về ngoại hình, sở thích, hoàn cảnh; Kỹ năng lắng nghe, kiểm soát tức giận và giải quyết hòa bình các xích mích học đường.",
      theory: {
        highlights: [
          {
            icon: "🌈",
            title: "Mỗi người là một bông hoa độc đáo",
            content: "• Mỗi người sinh ra đều có ngoại hình, tính cách, sở thích và hoàn cảnh gia đình khác nhau.<br/>• <strong>Tôn trọng sự khác biệt:</strong> Không trêu chọc bạn bị khuyết tật, bạn nói ngọng, bạn có màu da ngăm đen hay hoàn cảnh gia đình khó khăn.<br/>• Luôn đối xử bình đẳng, hòa đồng và thân thiện với tất cả bạn bè trong lớp."
          },
          {
            icon: "🕊️",
            title: "Kỹ năng giải quyết bất hòa hòa bình",
            content: "• <strong>Khi tức giận:</strong> Hít thở sâu 3 lần, đếm từ 1 đến 10 để bình tĩnh lại, tuyệt đối không dùng lời lẽ xúc phạm hay đánh nhau.<br/>• <strong>Lắng nghe:</strong> Cho bạn cơ hội được trình bày suy nghĩ của mình.<br/>• <strong>Tìm giải pháp:</strong> Cùng thương lượng để đưa ra cách giải quyết công bằng cho cả hai bên.<br/>• Nếu không tự giải quyết được: Nhờ thầy cô giáo hoặc cán sự lớp đứng ra hòa giải."
          },
          {
            icon: "🌷",
            title: "Hai từ kỳ diệu trong cuộc sống",
            content: "• <strong>Cảm ơn:</strong> Khi nhận được sự giúp đỡ, quà tặng hay lời khen từ người khác.<br/>• <strong>Xin lỗi:</strong> Khi mình vô tình hoặc cố ý làm tổn thương, làm phiền người khác."
          }
        ]
      },
      questions: [
        {
          id: "et3_5_1",
          level: 1,
          question: "Trong lớp có một bạn học sinh mới chuyển từ vùng quê khác đến, giọng nói của bạn mang âm điệu địa phương lạ tai. Em nên cư xử thế nào?",
          options: [
            "Nhại lại giọng nói của bạn để cười đùa chế giễu",
            "Lắng nghe, tôn trọng và thân thiện trò chuyện giúp bạn nhanh chóng hòa nhập với lớp",
            "Rủ các bạn tẩy chay không chơi với bạn mới",
            "Cấm bạn không được phát biểu bài"
          ],
          correct: 1,
          explanation: "Mỗi vùng miền đều có nét đặc trưng ngôn ngữ riêng; tôn trọng và đón nhận bạn mới thể hiện văn hóa ứng xử văn minh."
        },
        {
          id: "et3_5_2",
          level: 1,
          question: "Khi vô tình giẫm phải chân bạn trong lúc xếp hàng, câu nói nào dưới đây là <strong>lịch sự và chuẩn mực nhất</strong>?",
          options: [
            "Mắt bạn để đâu mà chìa chân ra thế?",
            "Ôi, mình xin lỗi bạn nhé! Bạn có bị đau lắm không?",
            "Có mỗi thế mà cũng kêu!",
            "Cứ đứng im coi như không biết gì"
          ],
          correct: 1,
          explanation: "Nói lời xin lỗi chân thành ngay khi làm đau người khác là biểu hiện của người có văn hóa và lòng nhân ái."
        },
        {
          id: "et3_5_3",
          level: 2,
          question: "Khi em và bạn cùng bàn có ý kiến tranh cãi trái ngược nhau về một bài tập nhóm, cách giải quyết tốt nhất là gì?",
          options: [
            "Hét to vào mặt bạn và đập bàn bỏ đi",
            "Bình tĩnh lắng nghe lý lẽ của bạn, cùng nhau trao đổi phân tích nhẹ nhàng hoặc hỏi ý kiến cô giáo",
            "Đánh bạn để bắt bạn phải theo ý mình",
            "Nói xấu bạn với cả lớp"
          ],
          correct: 1,
          explanation: "Lắng nghe đa chiều và trao đổi ôn hòa là chìa khóa giải quyết mọi mâu thuẫn một cách dân chủ, khoa học."
        },
        {
          id: "et3_5_4",
          level: 2,
          question: "Hành động nào dưới đây là biểu hiện của việc <strong>kỳ thị, không tôn trọng sự khác biệt</strong>?",
          options: [
            "Mời bạn bị khuyết tật chân cùng tham gia trò chơi cờ vua",
            "Đặt biệt danh xấu xí giễu cợt ngoại hình mập/gầy của bạn bè",
            "Chúc mừng bạn đạt giải cao trong kỳ thi vẽ",
            "Chia sẻ sách hay với bạn"
          ],
          correct: 1,
          explanation: "Body shaming (miệt thị ngoại hình) là hành vi xấu làm tổn thương tinh thần bạn bè, cần phải chấm dứt."
        },
        {
          id: "et3_5_5",
          level: 3,
          question: "Khi cảm thấy cơn tức giận bốc lên dữ dội vì bị bạn trêu đùa, kỹ năng kiểm soát cảm xúc nào dưới đây là <strong>khoa học và hiệu quả nhất</strong>?",
          options: [
            "Lấy compa hoặc thước sắt đâm bạn",
            "Dừng lại, hít thở thật sâu vài nhịp, đếm thầm từ 1 đến 10, uống một ngụm nước mát và bình tĩnh nói với bạn rằng mình không thích trò đùa đó",
            "Đập phá bàn ghế trong lớp học",
            "Khóc lóc lăn ra sàn nhà ăn vạ"
          ],
          correct: 1,
          explanation: "Hít thở sâu và đếm nhịp giúp não bộ hạ nhiệt cơn giận tức thì, tránh dẫn đến các hành vi bạo lực bốc đồng."
        },
        {
          id: "et3_5_6",
          level: 3,
          question: "Nếu chứng kiến hai bạn trong lớp xô xát, đánh nhau trong giờ ra chơi, em nên hành động thế nào?",
          options: [
            "Đứng reo hò cổ vũ và quay video",
            "Nhảy vào đánh hùa theo một bạn",
            "Hô to khuyên hai bạn dừng tay và chạy ngay đi báo cho thầy cô giáo hoặc bác bảo vệ đến can thiệp kịp thời",
            "Bỏ chạy đi trốn không quan tâm"
          ],
          correct: 2,
          explanation: "Báo ngay cho người lớn có thẩm quyền là cách bảo vệ an toàn cho cả hai bạn và ngăn chặn hậu quả đáng tiếc."
        },
        {
          id: "et3_5_7",
          level: 4,
          question: "Vì sao tôn trọng sự khác biệt lại giúp tập thể lớp học trở nên đoàn kết và vững mạnh hơn?",
          options: [
            "Vì mỗi bạn đều có thế mạnh riêng (bạn giỏi toán, bạn vẽ đẹp, bạn hát hay, bạn nhiệt tình), khi tôn trọng nhau các bạn sẽ cùng hợp tác bổ sung cho nhau tạo nên sức mạnh chung",
            "Để không ai phải làm bài tập nữa",
            "Để cả lớp chỉ chơi một trò chơi duy nhất",
            "Không có tác dụng gì đối với tập thể"
          ],
          correct: 0,
          explanation: "Sự đa dạng tạo nên sức mạnh; khi mỗi cá nhân được tôn trọng và tỏa sáng, tập thể lớp sẽ gắn kết như một gia đình hạnh phúc."
        },
        {
          id: "et3_5_8",
          level: 4,
          question: "Em hiểu thế nào về câu nói: <em>'Hòa bình bắt đầu từ một nụ cười và lời xin lỗi chân thành'</em>?",
          options: [
            "Chỉ cần cười là không bao giờ bị phạt",
            "Sự bao dung, nụ cười thân thiện và lòng dũng cảm nhận lỗi là liều thuốc kỳ diệu hóa giải mọi hiểu lầm, mang lại sự bình yên trong tâm hồn và trường học hạnh phúc",
            "Cười to để trêu chọc đối phương",
            "Người xin lỗi là người yếu thế hèn nhát"
          ],
          correct: 1,
          explanation: "Nói lời xin lỗi và mỉm cười đòi hỏi sự dũng cảm và trưởng thành lớn về mặt đạo đức nhân cách."
        }
      ]
    },
    {
      id: "bao_ve_moi_truong_an_toan_cong_cong",
      name: "Chủ Đề 6: Bảo Vệ Môi Trường & An Toàn Công Cộng",
      icon: "🌳",
      desc: "Phân loại rác thải, tiết kiệm năng lượng; Quy tắc ứng xử văn minh nơi công cộng và ghi nhớ các số điện thoại khẩn cấp bảo vệ trẻ em.",
      theory: {
        highlights: [
          {
            icon: "♻️",
            title: "Phân loại rác thải tại nguồn",
            content: "• <strong>Rác hữu cơ dễ phân hủy:</strong> Thức ăn thừa, vỏ rau củ quả, lá cây... (dùng làm phân bón hữu cơ).<br/>• <strong>Rác tái chế:</strong> Giấy báo, chai nhựa, lon nhôm, hộp kim loại... (thu gom để tái chế thành đồ dùng mới).<br/>• <strong>Rác còn lại / Rác nguy hại:</strong> Túi ni-lông bẩn, pin cũ, bóng đèn vỡ... (xử lý theo quy trình đặc biệt)."
          },
          {
            icon: "🚶",
            title: "Văn hóa ứng xử nơi công cộng",
            content: "• <strong>Xếp hàng văn minh:</strong> Không chen lấn xô đẩy khi mua vé, khi lên xe buýt hay khi vào thang máy.<br/>• <strong>Nhường ghế:</strong> Nhường chỗ ngồi cho người già, phụ nữ mang thai, em nhỏ và người khuyết tật trên các phương tiện công cộng.<br/>• <strong>Nói khẽ, đi nhẹ:</strong> Giữ trật tự trong bệnh viện, thư viện, viện bảo tàng và nơi tôn nghiêm."
          },
          {
            icon: "🚨",
            title: "4 số điện thoại khẩn cấp quốc gia cần thuộc lòng",
            content: "• <strong>111:</strong> Tổng đài Quốc gia Bảo vệ Trẻ em (hoàn toàn miễn phí, hỗ trợ khi trẻ em bị xâm hại, bạo lực hay gặp nguy hiểm).<br/>• <strong>113:</strong> Cảnh sát phản ứng nhanh (an ninh trật tự, tội phạm).<br/>• <strong>114:</strong> Cứu hỏa và cứu nạn cứu hộ.<br/>• <strong>115:</strong> Cấp cứu y tế."
          }
        ]
      },
      questions: [
        {
          id: "et3_6_1",
          level: 1,
          question: "Số điện thoại của <strong>Tổng đài Quốc gia Bảo vệ Trẻ em</strong> tại Việt Nam là số nào?",
          options: ["111", "113", "114", "115"],
          correct: 0,
          explanation: "111 là đường dây nóng quốc gia bảo vệ quyền lợi trẻ em, hoạt động 24/7 và hoàn toàn miễn phí cước gọi."
        },
        {
          id: "et3_6_2",
          level: 1,
          question: "Khi đi xe buýt công cộng, thấy một cụ già bước lên xe mà không còn chỗ ngồi, em nên làm gì?",
          options: [
            "Giả vờ nhắm mắt ngủ để không phải đứng dậy",
            "Đứng dậy lễ phép mời cụ ngồi vào chỗ của mình",
            "Chiếm thêm ghế bên cạnh để hành lý",
            "Cười đùa trêu chọc cụ già"
          ],
          correct: 1,
          explanation: "Nhường ghế cho người già và phụ nữ mang thai là nét đẹp văn minh cơ bản của người tham gia giao thông công cộng."
        },
        {
          id: "et3_6_3",
          level: 2,
          question: "Loại rác nào dưới đây thuộc nhóm <strong>rác tái chế</strong> cần thu gom riêng?",
          options: [
            "Vỏ lon nước ngọt bằng nhôm và giấy báo cũ",
            "Cơm thừa canh cặn",
            "Lá cây khô trong vườn",
            "Vỏ chuối chín"
          ],
          correct: 0,
          explanation: "Lon nhôm và giấy vụn có thể tái chế lại nhiều lần thành các sản phẩm mới, giúp tiết kiệm tài nguyên thiên nhiên."
        },
        {
          id: "et3_6_4",
          level: 2,
          question: "Sau khi rửa tay bằng xà phòng xong ở trường học, em cần làm gì?",
          options: [
            "Cứ để vòi nước chảy tự do rồi bỏ đi",
            "Khóa chặt vòi nước ngay để không gây lãng phí nguồn nước sạch",
            "Tạt nước ướt hết sàn nhà vệ sinh",
            "Bẻ gãy vòi nước"
          ],
          correct: 1,
          explanation: "Khóa vòi nước sau khi dùng là hành động tiết kiệm nước sạch - tài nguyên quý giá của Trái Đất."
        },
        {
          id: "et3_6_5",
          level: 3,
          question: "Vì sao các loại pin cũ đã qua sử dụng <strong>tuyệt đối không được vứt chung vào thùng rác thông thường hay đốt</strong>?",
          options: [
            "Vì pin cũ có thể phát nổ ngay lập tức",
            "Vì trong pin chứa các kim loại nặng độc hại (thủy ngân, chì...) ngấm vào đất và nguồn nước gây ô nhiễm nghiêm trọng và ung thư cho con người",
            "Vì pin cũ rất đắt tiền",
            "Chỉ vì pin có màu đen xấu xí"
          ],
          correct: 1,
          explanation: "Chất độc kim loại nặng trong 1 cục pin nhỏ có thể làm ô nhiễm 500 lít nước; cần gom pin cũ chuyển tới điểm thu hồi chuyên biệt."
        },
        {
          id: "et3_6_6",
          level: 3,
          question: "Khi vào tham quan Thư viện hoặc Viện bảo tàng, quy tắc ứng xử nào sau đây là <strong>bắt buộc phải tuân thủ</strong>?",
          options: [
            "Đi lại nhẹ nhàng, giữ trật tự im lặng, không ăn quà vặt và không sờ tay vào các hiện vật trưng bày",
            "Hò hét chạy nhảy tự do khắp các phòng",
            "Dùng bút sáp màu vẽ lên các bức tranh cổ",
            "Bật loa điện thoại mở nhạc to"
          ],
          correct: 0,
          explanation: "Thư viện và bảo tàng là không gian văn hóa học thuật, đòi hỏi sự tôn nghiêm và bảo quản hiện vật nghiêm ngặt."
        },
        {
          id: "et3_6_7",
          level: 4,
          question: "Một bạn nhỏ bị người lớn lạ mặt đe dọa, bắt nạt hoặc có hành vi đụng chạm bất thường vào cơ thể. Bạn nhỏ đó cần làm gì ngay lập tức?",
          options: [
            "Sợ hãi im lặng chịu đựng một mình",
            "Hét thật to cầu cứu người xung quanh, bỏ chạy tới chỗ đông người và gọi ngay đến số 111 hoặc báo cho bố mẹ, thầy cô giáo biết",
            "Giữ bí mật không nói cho ai",
            "Lấy tiền đưa cho kẻ xấu"
          ],
          correct: 1,
          explanation: "Quy tắc an toàn thân thể: Hét to, chạy trốn và thông báo ngay cho người lớn đáng tin cậy hoặc tổng đài 111 để được bảo vệ."
        },
        {
          id: "et3_6_8",
          level: 4,
          question: "Thông điệp: <em>'Hãy để lại những dấu chân, đừng để lại những túi rác'</em> khi đi dã ngoại du lịch mang ý nghĩa gì?",
          options: [
            "Chỉ nên đi bộ bằng chân đất",
            "Kêu gọi mọi người tận hưởng vẻ đẹp thiên nhiên nhưng phải có ý thức bảo vệ môi trường, mang toàn bộ rác thải về nơi xử lý, giữ gìn cảnh quan nguyên vẹn",
            "Không được phép chụp ảnh",
            "Chỉ được đi du lịch ở những nơi có biển báo"
          ],
          correct: 1,
          explanation: "Du lịch có trách nhiệm là giữ gìn thiên nhiên hoang sơ sạch đẹp cho các thế hệ mai sau cùng chiêm ngưỡng."
        }
      ]
    }
  ]
};
