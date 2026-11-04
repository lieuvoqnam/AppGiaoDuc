/**
 * ethics-2-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Đạo Đức & Kỹ Năng Sống Lớp 2
 * Chuẩn Chương trình Giáo dục phổ thông (GDPT) 2018
 * (Kết nối tri thức với cuộc sống, Cánh diều, Chân trời sáng tạo)
 */

window.ETHICS2_DATA = {
  topics: [
    {
      id: "quy_trong_thoi_gian",
      name: "Chủ Đề 1: Quý Trọng Thời Gian & Lập Thời Gian Biểu",
      icon: "⏳",
      desc: "Ý nghĩa của thời gian, tác hại của sự lề mề chậm trễ, biết lập và thực hiện thời gian biểu 'giờ nào việc nấy'.",
      theory: {
        highlights: [
          {
            icon: "💎",
            title: "Thời gian là vàng bạc",
            content: "• Thời gian trôi qua không bao giờ quay trở lại được.<br/>• Người biết quý trọng thời gian là người biết làm việc đúng giờ, không để người khác phải chờ đợi mình.<br/>• <strong>Tục ngữ:</strong> <em>'Thời giờ là vàng ngọc'</em>."
          },
          {
            icon: "🐢",
            title: "Tác hại của sự lề mề, trì hoãn",
            content: "• Ngủ nướng, vừa học vừa chơi điện thoại làm mất nhiều thời gian mà bài tập vẫn chưa xong.<br/>• Đi học muộn làm ảnh hưởng đến cả lớp và bị thầy cô nhắc nhở.<br/>• Thói quen trì hoãn khiến công việc dồn ứ, dễ gây căng thẳng, mệt mỏi."
          },
          {
            icon: "📅",
            title: "Lập thời gian biểu khoa học",
            content: "• <strong>Thời gian biểu:</strong> Là bản phân chia thời gian cho các công việc trong ngày từ sáng đến tối.<br/>• <em>Nguyên tắc:</em> Giờ nào việc nấy, cân đối hợp lý giữa học tập, giúp việc nhà, rèn luyện thể thao và nghỉ ngơi ngủ đủ 8-9 tiếng mỗi ngày."
          },
          {
            icon: "🌟",
            title: "Thực hiện thời gian biểu",
            content: "• Dán thời gian biểu ở góc học tập dễ nhìn thấy.<br/>• Tự giác thực hiện nghiêm túc, không cần bố mẹ phải nhắc nhở nhiều lần."
          }
        ]
      },
      questions: [
        {
          id: "eth2_1_1",
          level: 1,
          question: "Câu thành ngữ nào dưới đây nói về <strong>giá trị quý báu của thời gian</strong>?",
          options: [
            "Thời giờ là vàng ngọc",
            "Nước chảy đá mòn",
            "Lá lành đùm lá rách",
            "Có công mài sắt có ngày nên kim"
          ],
          correct: 0,
          explanation: "Câu 'Thời giờ là vàng ngọc' nhắc nhở thời gian trôi qua rất nhanh và vô cùng quý giá, không gì mua lại được."
        },
        {
          id: "eth2_1_2",
          level: 1,
          question: "Hành động nào dưới đây là biểu hiện của người <strong>biết quý trọng thời gian</strong>?",
          options: [
            "Buổi sáng thức dậy đúng giờ chuông báo thức, nhanh nhẹn vệ sinh cá nhân đến trường",
            "Vừa ngồi ăn cơm vừa xem hoạt hình đến cả tiếng đồng hồ",
            "Ngủ nướng đến gần giờ vào lớp mới cuống cuồng dậy",
            "Để bài tập hôm nay sang tận tuần sau mới làm"
          ],
          correct: 0,
          explanation: "Thức dậy đúng giờ và nhanh nhẹn chuẩn bị đến trường thể hiện nếp sống khoa học, biết quý trọng thời gian."
        },
        {
          id: "eth2_1_3",
          level: 2,
          question: "Bạn Nam có thói quen vừa học bài vừa nghịch đồ chơi lego, kết quả là đến 10 giờ đêm vẫn chưa làm xong bài tập. Em sẽ khuyên Nam điều gì?",
          options: [
            "Bảo Nam cất bài tập đi ngủ, mai đến lớp chép bài của bạn",
            "Khuyên Nam nên tập trung hoàn thành dứt điểm bài tập trước, sau đó mới dành thời gian chơi đồ chơi",
            "Bảo Nam chơi tiếp cho vui rồi mai hãy học",
            "Khuyên Nam bảo mẹ làm hộ bài tập"
          ],
          correct: 1,
          explanation: "Tập trung học bài dứt điểm ('giờ nào việc nấy') giúp làm bài nhanh, chính xác và có thời gian thư giãn thoải mái sau đó."
        },
        {
          id: "eth2_1_4",
          level: 2,
          question: "Lợi ích lớn nhất của việc lập và thực hiện theo <strong>thời gian biểu</strong> mỗi ngày là gì?",
          options: [
            "Giúp em làm việc khoa học, không bị quên việc và có sức khỏe tốt",
            "Để khoe với bạn bè",
            "Để không phải làm việc nhà nữa",
            "Để có thể thức khuya chơi game"
          ],
          correct: 0,
          explanation: "Thời gian biểu giúp sắp xếp công việc hợp lý, hoàn thành nhiệm vụ đúng hạn và duy trì nhịp sống khỏe mạnh."
        },
        {
          id: "eth2_1_5",
          level: 3,
          question: "Chủ nhật, Hùng định sang nhà rủ Tuấn đi đá bóng lúc 8 giờ sáng như đã hẹn. Tuy nhiên, đến 8 giờ Tuấn vẫn đang nằm ngủ nướng. Hành vi của Tuấn là:",
          options: [
            "Đúng, vì ngày nghỉ thích ngủ lúc nào cũng được",
            "Sai, vì Tuấn đã không giữ đúng lời hẹn, làm lãng phí thời gian chờ đợi của bạn Hùng",
            "Rất tốt vì ngủ nhiều sẽ khỏe",
            "Bình thường không có gì đáng trách"
          ],
          correct: 1,
          explanation: "Không đúng hẹn làm lãng phí thời gian của người khác và thể hiện sự thiếu tôn trọng bạn bè."
        },
        {
          id: "eth2_1_6",
          level: 3,
          question: "Trường hợp nào dưới đây cho thấy học sinh biết <strong>chủ động sử dụng thời gian rảnh rỗi</strong> có ích?",
          options: [
            "Ngồi lì xem tivi suốt cả buổi chiều",
            "Sau khi học xong bài, em giúp mẹ nhặt rau, lau bàn ăn và đọc một cuốn sách thiếu nhi",
            "Nằm bấm điện thoại chơi điện tử trong bóng tối",
            "Gây ồn ào lúc người lớn đang nghỉ trưa"
          ],
          correct: 1,
          explanation: "Giúp việc nhà và đọc sách giúp rèn luyện kỹ năng sống, mở mang kiến thức và gắn kết tình cảm gia đình."
        },
        {
          id: "eth2_1_7",
          level: 4,
          question: "Ngày mai lớp 2A có bài kiểm tra môn Toán. Tối nay trên tivi có chiếu bộ phim hoạt hình bạn Lan rất thích. Theo em, Lan nên chọn cách xử lý nào là hợp lý nhất?",
          options: [
            "Xem hết bộ phim rồi đi ngủ, sáng mai tính sau",
            "Ôn tập kỹ bài kiểm tra Toán trước; nếu còn thời gian thì xem một đoạn phim ngắn và đi ngủ sớm để có tinh thần minh mẫn làm bài",
            "Vừa mở sách vừa dán mắt vào tivi xem phim",
            "Bỏ học ngày mai để ở nhà xem lại phim"
          ],
          correct: 1,
          explanation: "Học sinh cần biết ưu tiên việc học tập quan trọng trước, kiểm soát sở thích cá nhân và đảm bảo giấc ngủ để hôm sau làm bài tốt."
        },
        {
          id: "eth2_1_8",
          level: 4,
          question: "Có bạn nói: <em>'Hôm nay không làm thì ngày mai làm, ngày nào chẳng như nhau.'</em>. Nhận định này:",
          options: [
            "Rất đúng vì thời gian là vô tận",
            "Hoàn toàn sai, vì việc hôm nay chớ để ngày mai; thói quen trì hoãn sẽ biến chúng ta thành người lười biếng và thất bại",
            "Đúng với những ngày nghỉ hè",
            "Đúng với trẻ em tiểu học"
          ],
          correct: 1,
          explanation: "Câu châm ngôn 'Việc hôm nay chớ để ngày mai' nhắc nhở phải hoàn thành trách nhiệm mỗi ngày, không ỷ lại và trì hoãn."
        }
      ]
    },
    {
      id: "nhan_loi_va_sua_loi",
      name: "Chủ Đề 2: Dũng Cảm Nhận Lỗi & Sửa Lỗi",
      icon: "🤝",
      desc: "Biết nhận ra lỗi sai của bản thân, nói lời xin lỗi chân thành, không đổ lỗi cho người khác và hành động sửa sai thiết thực.",
      theory: {
        highlights: [
          {
            icon: "💪",
            title: "Dũng cảm nhận lỗi là đức tính tốt",
            content: "• Ai cũng có lúc mắc phải sai lầm hoặc vô ý làm hỏng việc.<br/>• Người dũng cảm là người dám đứng ra nhận lỗi về mình, không tìm cách giấu giếm, chối cãi hay nói dối."
          },
          {
            icon: "🗣️",
            title: "Cách nói lời xin lỗi chân thành",
            content: "• Mắt nhìn thẳng vào người đối diện với thái độ hối lỗi, chân thành.<br/>• Xưng hô lễ phép: <em>'Con xin lỗi bố/mẹ...', 'Tớ xin lỗi bạn...'</em>.<br/>• Nói rõ việc mình làm sai và nói lời cam kết: <em>'Lần sau con/tớ sẽ cẩn thận hơn, không tái phạm nữa.'</em>"
          },
          {
            icon: "🛠️",
            title: "Hành động sửa sai thiết thực",
            content: "• Xin lỗi phải đi đôi với hành động sửa chữa lỗi lầm.<br/>• Vô ý làm đổ nước ➔ Lấy khăn lau sạch sàn nhà.<br/>• Làm rách sách của bạn ➔ Dán lại cẩn thận hoặc đền lại sách mới cho bạn.<br/>• Chưa học bài ➔ Tự giác học bù ngay."
          },
          {
            icon: "🚫",
            title: "Những hành vi xấu cần tránh",
            content: "• Nói dối để trốn tránh trách nhiệm.<br/>• Đổ oan tội lỗi cho bạn khác hoặc em nhỏ.<br/>• Tức giận, cãi lại khi được người lớn nhắc nhở."
          }
        ]
      },
      questions: [
        {
          id: "eth2_2_1",
          level: 1,
          question: "Khi lỡ tay làm vỡ chiếc cốc uống nước của mẹ, em nên làm gì?",
          options: [
            "Giấu các mảnh vỡ vào gầm giường",
            "Chạy đi nói lời xin lỗi mẹ, nhận lỗi và nhờ mẹ hướng dẫn dọn dẹp an toàn",
            "Đổ lỗi cho con mèo nhảy làm vỡ",
            "Khóc to để mẹ không mắng"
          ],
          correct: 1,
          explanation: "Chân thành nhận lỗi với mẹ và nhờ dọn dẹp các mảnh vỡ sắc nhọn giúp mẹ yên tâm và tránh bị đứt tay."
        },
        {
          id: "eth2_2_2",
          level: 1,
          question: "Hành động nào dưới đây là biểu hiện của sự <strong>hèn nhát, không trung thực</strong>?",
          options: [
            "Tự giác nhận điểm kém với bố mẹ và hứa cố gắng",
            "Làm bẩn vở của bạn rồi đổ thừa cho bạn ngồi cạnh làm",
            "Xin lỗi cô giáo vì đi học muộn",
            "Trả lại đồ nhặt được cho bạn"
          ],
          correct: 1,
          explanation: "Đổ lỗi cho người khác khi chính mình làm sai là hành vi không trung thực, hèn nhát đáng lên án."
        },
        {
          id: "eth2_2_3",
          level: 2,
          question: "Trong giờ ra chơi, Minh vô ý va vào làm bạn An ngã trầy xước đầu gối. Minh nên làm gì?",
          options: [
            "Cười to rồi bỏ chạy thật nhanh",
            "Đứng lại đỡ bạn An dậy, chân thành xin lỗi và đưa bạn vào phòng y tế để sát trùng vết thương",
            "Quát mắng An vì không chịu nhìn đường",
            "Kéo bạn bè lại trêu chọc An"
          ],
          correct: 1,
          explanation: "Đỡ bạn dậy, nói lời xin lỗi và đưa bạn vào phòng y tế thể hiện trách nhiệm và sự quan tâm đến bạn bè."
        },
        {
          id: "eth2_2_4",
          level: 2,
          question: "Thái độ chuẩn mực khi nói lời xin lỗi thầy cô giáo là:",
          options: [
            "Đứng ngay ngắn, hai tay để trước ngực hoặc xuôi chỉn chu, mắt nhìn cô và nói nhẹ nhàng, lễ phép",
            "Vừa gãi đầu vừa cười đùa cợt nhả",
            "Mặt kênh kiệu, cãi lại lời cô",
            "Vừa nói vừa quay lưng đi ra chỗ khác"
          ],
          correct: 0,
          explanation: "Tư thế ngay ngắn, ánh mắt chân thành và giọng nói lễ phép thể hiện sự tôn sư trọng đạo và nhận lỗi thật lòng."
        },
        {
          id: "eth2_2_5",
          level: 3,
          question: "Bình mượn quyển truyện tranh của Mai nhưng lỡ làm rách một trang. Bình nên giải quyết thế nào?",
          options: [
            "Lén nhét lại vào cặp của Mai để Mai không biết ai làm",
            "Chân thành xin lỗi Mai, dùng băng dính trong khéo léo dán lại trang rách và hứa giữ gìn cẩn thận hơn",
            "Vứt luôn cuốn truyện đi",
            "Bảo Mai rằng sách đã rách từ trước khi mượn"
          ],
          correct: 1,
          explanation: "Nhận lỗi và tìm cách sửa chữa (dán lại trang sách) là hành động văn minh của một người bạn tốt."
        },
        {
          id: "eth2_2_6",
          level: 3,
          question: "Khi bạn mắc lỗi và đã chân thành nói lời xin lỗi với em, thái độ của em nên như thế nào?",
          options: [
            "Cố tình giận dỗi và bắt bạn phải đền thật nhiều tiền",
            "Sẵn sàng tha thứ cho bạn, động viên bạn và tiếp tục chơi hòa đồng cùng bạn",
            "Kể xấu bạn với tất cả các bạn trong lớp",
            "Đánh lại bạn cho bõ tức"
          ],
          correct: 1,
          explanation: "Lòng khoan dung, sẵn sàng tha thứ cho người biết nhận lỗi giúp tình bạn ngày càng thêm bền chặt."
        },
        {
          id: "eth2_2_7",
          level: 4,
          question: "Viết cam kết 'sửa lỗi' có ý nghĩa gì đối với học sinh?",
          options: [
            "Là một hình phạt bắt buộc vô ích",
            "Giúp học sinh tự nhắc nhở bản thân, rèn luyện ý chí và quyết tâm không lặp lại sai lầm trong tương lai",
            "Để nộp cho xong chuyện",
            "Để thầy cô không chấm điểm kém"
          ],
          correct: 1,
          explanation: "Lời hứa sửa sai giúp học sinh nhận thức sâu sắc về hành vi và hình thành ý thức kỷ luật tự giác tiến bộ."
        },
        {
          id: "eth2_2_8",
          level: 4,
          question: "Bố nhắc: <em>'Con chưa rửa tay trước khi ngồi vào bàn ăn.'</em>. Phản ứng nào dưới đây của em là đúng đắn nhất?",
          options: [
            "Vui vẻ nói: 'Dạ, con quên mất, con xin lỗi bố ạ!' rồi nhanh nhẹn đi rửa tay bằng xà phòng",
            "Bảo tay mình sạch rồi không cần rửa",
            "Khóc lóc hờn dỗi không ăn cơm nữa",
            "Lén lấy khăn lau tay vào quần"
          ],
          correct: 0,
          explanation: "Lắng nghe lời dạy bảo của cha mẹ, nhận lỗi lễ phép và thực hiện ngay hành động đúng là người con ngoan."
        }
      ]
    },
    {
      id: "bao_quan_do_dung",
      name: "Chủ Đề 3: Bảo Quản Đồ Dùng Cá Nhân & Gia Đình",
      icon: "🎒",
      desc: "Giữ gìn sách vở đồ dùng học tập, sắp xếp đồ chơi ngăn nắp, tiết kiệm điện nước và bảo vệ tài sản chung.",
      theory: {
        highlights: [
          {
            icon: "📚",
            title: "Bảo quản đồ dùng học tập & Sách vở",
            content: "• Bọc bìa, dán nhãn vở ghi rõ họ tên trường lớp.<br/>• Viết nắn nót, không xé giấy gấp máy bay, không vẽ bậy vào sách.<br/>• Dùng xong bút, thước kẻ thì cất ngay vào hộp bút; xếp sách vở ngăn nắp vào cặp sách."
          },
          {
            icon: "🧸",
            title: "Bảo quản đồ dùng cá nhân & Đồ chơi",
            content: "• Giữ gìn quần áo, giày dép sạch sẽ; đi học về thay quần áo treo lên móc hoặc để vào giỏ giặt.<br/>• Chơi đồ chơi xong phải tự giác gom cất vào thùng đựng đồ chơi gọn gàng."
          },
          {
            icon: "💡",
            title: "Tiết kiệm & Bảo vệ tài sản gia đình",
            content: "• Tắt quạt, tắt đèn khi bước ra khỏi phòng.<br/>• Khóa vòi nước chặt sau khi sử dụng, không mở nước chảy tràn trề.<br/>• Giữ gìn bàn ghế, tủ lạnh, tivi; không dùng vật nhọn cào xước đồ gỗ."
          },
          {
            icon: "💖",
            title: "Ý nghĩa của việc biết giữ gìn đồ dùng",
            content: "• Thể hiện lòng biết ơn công sức lao động vất vả của cha mẹ kiếm tiền mua sắm cho em.<br/>• Giúp đồ dùng luôn bền đẹp, tiết kiệm chi phí cho gia đình và tạo nếp sống ngăn nắp, văn minh."
          }
        ]
      },
      questions: [
        {
          id: "eth2_3_1",
          level: 1,
          question: "Hành động nào dưới đây giúp <strong>bảo quản sách giáo khoa</strong> được bền đẹp suốt năm học?",
          options: [
            "Bọc bìa cẩn thận, dán nhãn vở, lật mở nhẹ nhàng và không bẻ gập mép trang sách",
            "Xé trang sách làm đồ chơi gấp thuyền",
            "Dùng bút mực vẽ râu ria vào các hình vẽ trong sách",
            "Vứt sách bừa bãi dưới sàn nhà"
          ],
          correct: 0,
          explanation: "Bọc bìa, giữ phẳng trang sách và giữ sách sạch sẽ giúp sách luôn như mới và có thể tặng lại cho các em khóa sau."
        },
        {
          id: "eth2_3_2",
          level: 1,
          question: "Sau khi chơi xong bộ đồ chơi lắp ráp lego ở phòng khách, em nên làm gì?",
          options: [
            "Bỏ mặc đồ chơi vương vãi trên sàn nhà để mẹ dọn",
            "Thu dọn toàn bộ các chi tiết xếp gọn vào hộp và cất về vị trí quy định",
            "Đá đồ chơi vào gầm ghế sô-pha",
            "Ném đồ chơi lung tung sang phòng khác"
          ],
          correct: 1,
          explanation: "Tự giác thu dọn đồ chơi rèn luyện tính tự lập, ngăn nắp và tránh người khác dẫm phải bị ngã đau."
        },
        {
          id: "eth2_3_3",
          level: 2,
          question: "Khi cả nhà chuẩn bị ra ngoài đi siêu thị, việc làm nào dưới đây thể hiện <strong>ý thức tiết kiệm điện và an toàn</strong>?",
          options: [
            "Bật hết quạt và tivi cho nhà có tiếng vui vẻ",
            "Kiểm tra và tắt hết đèn điện, quạt máy, tivi và các thiết bị điện không dùng đến",
            "Bật điều hòa để khi về phòng mát sẵn",
            "Mở toang tủ lạnh"
          ],
          correct: 1,
          explanation: "Tắt các thiết bị điện trước khi ra khỏi nhà giúp tiết kiệm điện năng và phòng ngừa chập cháy nổ bất ngờ."
        },
        {
          id: "eth2_3_4",
          level: 2,
          question: "Đang đánh răng, bạn Tuấn để vòi nước chảy xối xả tràn bồn rửa mặt. Hành động của Tuấn là:",
          options: [
            "Rất tốt vì nhiều nước",
            "Lãng phí nguồn nước sạch, cần phải lấy cốc hứng nước và khóa vòi lại trong lúc chải răng",
            "Bình thường không ai để ý",
            "Đáng khen ngợi"
          ],
          correct: 1,
          explanation: "Nước sạch là tài nguyên quý giá. Hứng nước vào cốc và tắt vòi khi chải răng giúp tiết kiệm hàng lít nước mỗi ngày."
        },
        {
          id: "eth2_3_5",
          level: 3,
          question: "Vì sao chúng ta cần phải giữ gìn và bảo quản tốt đồ dùng cá nhân của mình?",
          options: [
            "Vì đồ dùng là do công sức lao động mồ hôi nước mắt của bố mẹ mua cho, giữ gìn tốt thể hiện sự hiếu thảo và tính tiết kiệm",
            "Để khỏi bị cô giáo phạt",
            "Để bán lại lấy tiền chơi game",
            "Chỉ để người khác nhìn vào khen"
          ],
          correct: 0,
          explanation: "Bảo quản đồ dùng thể hiện lòng biết ơn cha mẹ và hình thành thói quen quý trọng tài sản lao động."
        },
        {
          id: "eth2_3_6",
          level: 3,
          question: "Em gái nhỏ 3 tuổi đang cầm bút sáp màu vẽ lên mặt bàn ăn gỗ của gia đình. Em sẽ làm gì?",
          options: [
            "Cổ vũ em vẽ thêm lên tường nhà",
            "Nhẹ nhàng giữ tay em lại, giải thích cho em hiểu không được vẽ lên bàn và đưa cho em tờ giấy trắng để em vẽ",
            "Đánh em thật đau",
            "Bỏ đi coi như không nhìn thấy"
          ],
          correct: 1,
          explanation: "Nhẹ nhàng nhắc nhở em nhỏ và đưa giấy cho em vẽ là cách xử lý vừa bảo vệ đồ dùng gia đình vừa khéo léo dạy em."
        },
        {
          id: "eth2_3_7",
          level: 4,
          question: "Cuối năm học, những cuốn sách giáo khoa lớp 2 còn nguyên vẹn, sạch đẹp, em nên làm gì có ý nghĩa nhất?",
          options: [
            "Bán cho người gom đồng nát vứt đi",
            "Giữ gìn cẩn thận để quyên tặng thư viện trường hoặc gửi tặng các bạn học sinh có hoàn cảnh khó khăn vùng sâu vùng xa",
            "Xé làm đồ chơi",
            "Vứt ra thùng rác"
          ],
          correct: 1,
          explanation: "Quyên tặng sách cho bạn nghèo lan tỏa tình yêu thương, tinh thần tương thân tương ái và giúp bảo vệ môi trường."
        },
        {
          id: "eth2_3_8",
          level: 4,
          question: "Bạn Hưng có chiếc cặp sách mới bị tuột đường chỉ ở quai đeo một đoạn ngắn. Hưng nên làm gì?",
          options: [
            "Vứt cặp cũ đi đòi mẹ mua ngay chiếc cặp mới đắt tiền",
            "Nhờ mẹ hoặc bà lấy kim chỉ khâu lại chắc chắn để tiếp tục sử dụng",
            "Lấy kéo cắt nốt quai còn lại",
            "Ném cặp sách xuống cống"
          ],
          correct: 1,
          explanation: "Khâu sửa lại đồ dùng bị hư hỏng nhỏ để tiếp tục dùng thể hiện đức tính tiết kiệm giản dị, không đòi hỏi lãng phí."
        }
      ]
    },
    {
      id: "kinh_trong_thay_co_ban_be",
      name: "Chủ Đề 4: Kính Trọng Thầy Cô & Yêu Quý Bạn Bè",
      icon: "💐",
      desc: "Tôn sư trọng đạo, lễ phép chào hỏi, đoàn kết chia sẻ với bạn bè, ứng xử lịch sự văn minh nơi công cộng.",
      theory: {
        highlights: [
          {
            icon: "👩‍🏫",
            title: "Kính trọng và biết ơn thầy cô giáo",
            content: "• Thầy cô như người cha, người mẹ thứ hai dạy dỗ chúng ta nên người.<br/>• <strong>Lễ phép:</strong> Gặp thầy cô phải khoanh tay cúi đầu chào; trong lớp chú ý nghe giảng, hăng hái phát biểu.<br/>• <em>'Tôn sư trọng đạo'</em>, <em>'Không thầy đố mày làm nên'</em>."
          },
          {
            icon: "🤝",
            title: "Yêu quý & Đoàn kết với bạn bè",
            content: "• Đối xử chan hòa, không phân biệt giàu nghèo hay ngoại hình.<br/>• Chia sẻ đồ dùng, giúp đỡ bạn có học lực yếu cùng tiến bộ.<br/>• Không trêu chọc, đặt biệt danh xấu xí, không xô xát đánh nhau."
          },
          {
            icon: "🚌",
            title: "Lịch sự & Văn minh nơi công cộng",
            content: "• Xếp hàng trật tự khi mua vé, khi vào thang máy, khi lên xe buýt.<br/>• Nhường chỗ ngồi cho người già, người khuyết tật, phụ nữ mang thai hoặc bế con nhỏ.<br/>• Giữ trật tự, nói khẽ ở bệnh viện, rạp chiếu phim, nơi tôn nghiêm."
          },
          {
            icon: "🕊️",
            title: "Tinh thần tương thân tương ái",
            content: "• <em>'Lá lành đùm lá rách'</em>: Biết quan tâm, giúp đỡ những người có hoàn cảnh khó khăn xung quanh ta."
          }
        ]
      },
      questions: [
        {
          id: "eth2_4_1",
          level: 1,
          question: "Khi đi trên đường gặp thầy cô giáo dạy trường mình, em cần làm gì?",
          options: [
            "Quay mặt đi coi như không quen biết",
            "Dừng lại, đứng nghiêm túc, khoanh tay và lễ phép chào: 'Em chào thầy/cô ạ!'",
            "Chỉ tay vào thầy cô rồi cười nói to",
            "Chạy trốn thật nhanh"
          ],
          correct: 1,
          explanation: "Khoanh tay cúi đầu chào thầy cô thể hiện sự lễ phép và đạo lý tôn sư trọng đạo của học sinh Việt Nam."
        },
        {
          id: "eth2_4_2",
          level: 1,
          question: "Hành động nào thể hiện sự <strong>đoàn kết, yêu quý bạn bè</strong>?",
          options: [
            "Chia sẻ chiếc bút chì dự phòng cho bạn khi bạn bị gãy ngòi",
            "Giấu cặp sách của bạn để bạn khóc",
            "Cô lập không chơi với một bạn trong lớp",
            "Đẩy bạn ngã khi xếp hàng"
          ],
          correct: 0,
          explanation: "Giúp đỡ bạn đồ dùng học tập khi bạn cần là hành động chia sẻ thân thiện, ấm áp tình bạn."
        },
        {
          id: "eth2_4_3",
          level: 2,
          question: "Trên xe buýt đông người, thấy một cụ già bước lên xe nhưng hết ghế ngồi, em nên làm gì?",
          options: [
            "Nhắm mắt vờ ngủ say để không phải đứng dậy",
            "Đứng dậy lễ phép mời cụ già ngồi vào vị trí của mình",
            "Ngồi cười đùa coi như không liên quan",
            "Bảo cụ già xuống xe khác"
          ],
          correct: 1,
          explanation: "Nhường ghế cho người già trên xe công cộng là nét đẹp văn hóa văn minh, thể hiện sự kính trên nhường dưới."
        },
        {
          id: "eth2_4_4",
          level: 2,
          question: "Trong giờ học, bạn ngồi bên cạnh liên tục rủ em nói chuyện và chơi trò chơi. Em nên xử lý thế nào?",
          options: [
            "Nói chuyện rôm rả cùng bạn cho vui",
            "Nhẹ nhàng ra hiệu nhắc bạn tập trung nghe cô giảng bài, giờ ra chơi sẽ nói chuyện sau",
            "Đứng dậy quát to giữa lớp",
            "Cùng bạn ném phấn vào các bạn khác"
          ],
          correct: 1,
          explanation: "Khuyên bạn tập trung học bài vừa giữ kỷ luật lớp học vừa giúp bạn không bị hổng kiến thức."
        },
        {
          id: "eth2_4_5",
          level: 3,
          question: "Trong lớp có một bạn khuyết tật đi lại khó khăn. Thái độ đúng đắn của các bạn trong lớp là:",
          options: [
            "Bắt chước dáng đi của bạn để trêu chọc cười cợt",
            "Tôn trọng bạn, chủ động giúp đỡ bạn xách cặp và dắt bạn mỗi khi di chuyển lên lớp hay ra sân chơi",
            "Xa lánh không muốn ngồi cùng bàn với bạn",
            "Không cho bạn tham gia hoạt động tập thể"
          ],
          correct: 1,
          explanation: "Yêu thương, hỗ trợ bạn kém may mắn giúp bạn hòa nhập vui tươi và thể hiện tấm lòng nhân ái cao đẹp."
        },
        {
          id: "eth2_4_6",
          level: 3,
          question: "Khi đến bệnh viện thăm người ốm, em cần chú ý điều gì?",
          options: [
            "Chạy nhảy nô đùa dọc hành lang bệnh viện",
            "Đi nhẹ, nói khẽ, giữ yên tĩnh tuyệt đối cho các bệnh nhân nghỉ ngơi hồi phục",
            "Hát hò ầm ĩ trong phòng bệnh",
            "Nghịch các thiết bị y tế"
          ],
          correct: 1,
          explanation: "Bệnh viện cần sự yên tĩnh để người bệnh nghỉ ngơi và bác sĩ làm việc cấp cứu người bệnh."
        },
        {
          id: "eth2_4_7",
          level: 4,
          question: "Ngày 20 tháng 11 là ngày gì của nước ta?",
          options: [
            "Ngày Quốc tế Thiếu nhi",
            "Ngày Nhà giáo Việt Nam - ngày tri ân các thầy giáo, cô giáo",
            "Ngày Phụ nữ Việt Nam",
            "Ngày Tết Trung Thu"
          ],
          correct: 1,
          explanation: "Ngày 20/11 hàng năm là Ngày Nhà giáo Việt Nam, dịp để toàn xã hội và các thế hệ học trò bày tỏ lòng biết ơn sâu sắc tới thầy cô."
        },
        {
          id: "eth2_4_8",
          level: 4,
          question: "Món quà ý nghĩa và quý giá nhất mà học sinh có thể dâng tặng thầy cô giáo nhân ngày Nhà giáo Việt Nam là gì?",
          options: [
            "Những món quà đắt tiền mua ở cửa hàng sang trọng",
            "Chăm ngoan, học giỏi, đạt nhiều hoa điểm 10 và rèn luyện đạo đức thật tốt",
            "Không cần làm gì cả",
            "Chỉ cần gửi một tin nhắn"
          ],
          correct: 1,
          explanation: "Sự tiến bộ, chăm ngoan và những điểm số xuất sắc của học sinh chính là niềm vui, niềm tự hào và món quà lớn nhất đối với người thầy."
        }
      ]
    },
    {
      id: "tu_bao_ve_ban_than",
      name: "Chủ Đề 5: Kỹ Năng Tự Bảo Vệ & Ứng Phó Nguy Hiểm",
      icon: "🖐️",
      desc: "Quy tắc 5 ngón tay phòng chống xâm hại, xử lý khi bị lạc, cảnh giác người lạ và nhớ 4 số điện thoại khẩn cấp quốc gia.",
      theory: {
        highlights: [
          {
            icon: "🖐️",
            title: "Quy tắc 5 Ngón Tay An Toàn",
            content: "• <strong>Ngón cái (Gần nhất):</strong> Ôm hôn với cha mẹ, anh chị em ruột, ông bà ruột.<br/>• <strong>Ngón trỏ:</strong> Nắm tay với thầy cô giáo, bạn bè, họ hàng thân thích.<br/>• <strong>Ngón giữa:</strong> Bắt tay chào với người quen, hàng xóm.<br/>• <strong>Ngón áp út:</strong> Vẫy tay chào với người mới gặp lần đầu.<br/>• <strong>Ngón út (Xa nhất):</strong> <em>Xua tay, hét to, bỏ chạy và kể lại ngay</em> khi người lạ có ý định đụng chạm vào <strong>vùng đồ bơi (vùng kín)</strong> của em!"
          },
          {
            icon: "🚨",
            title: "4 số điện thoại khẩn cấp quốc gia (Ghi nhớ suốt đời)",
            content: "• <strong>111:</strong> Tổng đài Quốc gia Bảo vệ Trẻ em (hoạt động 24/7, miễn phí).<br/>• <strong>113:</strong> Cảnh sát phản ứng nhanh (báo án, cướp giật, bạo lực).<br/>• <strong>114:</strong> Cứu hỏa & Cứu hộ cứu nạn (cháy nổ, mắc kẹt tai nạn).<br/>• <strong>115:</strong> Cấp cứu y tế (tai nạn nguy kịch, ngộ độc)."
          },
          {
            icon: "🛒",
            title: "Xử lý khi bị lạc ở nơi đông người",
            content: "• Đứng yên tại vị trí phát hiện mình bị lạc, không chạy lung tung.<br/>• Tìm kiếm sự giúp đỡ từ: Chú công an, bác bảo vệ có đồng phục, cô nhân viên thu ngân tại quầy lễ tân siêu thị.<br/>• Nhớ rõ họ tên bố mẹ, số điện thoại của bố/mẹ và địa chỉ nhà."
          },
          {
            icon: "🍬",
            title: "Cảnh giác với người lạ đáng ngờ",
            content: "• Tuyệt đối không nhận kẹo bánh, đồ chơi, tiền bạc từ người lạ.<br/>• Không đi theo người lạ dù họ nói: <em>'Bố mẹ nhờ cô/chú đến đón con'</em> mà bố mẹ chưa dặn trước.<br/>• Khi bị lôi kéo: Hãy hét thật to: <em>'Cứu cháu với! Cháu không quen người này!'</em> để mọi người xung quanh ứng cứu."
          }
        ]
      },
      questions: [
        {
          id: "eth2_5_1",
          level: 1,
          question: "Số điện thoại của <strong>Tổng đài Quốc gia Bảo vệ Trẻ em</strong> là số nào?",
          options: ["111", "113", "114", "115"],
          correct: 0,
          explanation: "Số 111 là đường dây nóng miễn phí bảo vệ quyền lợi và an toàn của trẻ em trên toàn quốc."
        },
        {
          id: "eth2_5_2",
          level: 1,
          question: "Theo <strong>Quy tắc 5 ngón tay</strong>, ngón tay út (ngón xa nhất) đại diện cho đối tượng nào?",
          options: [
            "Bố mẹ ruột",
            "Thầy cô giáo",
            "Người hoàn toàn xa lạ hoặc người có hành vi xấu khiến em cảm thấy sợ hãi, khó chịu",
            "Bạn thân cùng lớp"
          ],
          correct: 2,
          explanation: "Ngón út đại diện cho người lạ. Tuyệt đối không cho người lạ đụng chạm vào cơ thể và vùng nhạy cảm."
        },
        {
          id: "eth2_5_3",
          level: 2,
          question: "Vùng nào trên cơ thể được gọi là <strong>'vùng đồ bơi / vùng kín'</strong> mà tuyệt đối không ai được phép chạm vào hoặc bắt em xem?",
          options: [
            "Bàn tay và cánh tay",
            "Vùng ngực, giữa hai đùi (bộ phận sinh dục) và mông",
            "Bàn chân",
            "Khuỷu tay"
          ],
          correct: 1,
          explanation: "Vùng đồ bơi là vùng riêng tư bất khả xâm phạm của mỗi người. Bất kỳ ai cố tình chạm vào đều là hành vi xâm hại."
        },
        {
          id: "eth2_5_4",
          level: 2,
          question: "Khi tan học đứng ở cổng trường chờ mẹ đón, một người lạ mặt đi xe máy đến bảo: <em>'Mẹ cháu bị tai nạn, bảo chú đến đón cháu đến viện ngay'</em>. Em nên làm gì?",
          options: [
            "Lên xe đi theo người lạ ngay lập tức",
            "Không lên xe, quay chạy vào trong trường báo ngay cho thầy cô giáo hoặc bác bảo vệ để gọi điện xác minh với mẹ",
            "Đứng khóc một mình ngoài đường",
            "Đi theo người lạ đến một nơi vắng vẻ"
          ],
          correct: 1,
          explanation: "Đây là thủ đoạn bắt cóc nguy hiểm của kẻ xấu. Phải lập tức chạy vào trường nhờ thầy cô, bảo vệ liên lạc với cha mẹ."
        },
        {
          id: "eth2_5_5",
          level: 3,
          question: "Khi không may bị lạc bố mẹ trong một siêu thị lớn, hành động ĐÚNG NHẤT của em là:",
          options: [
            "Chạy thẳng ra ngoài đường lớn tìm đường về nhà",
            "Đứng yên tại chỗ hoặc tìm đến quầy thu ngân / quầy dịch vụ khách hàng nhờ các cô chú phát loa thông báo tìm bố mẹ",
            "Đi theo một người lạ rủ về nhà họ",
            "Chui vào góc tối ngồi khóc"
          ],
          correct: 1,
          explanation: "Nhờ nhân viên siêu thị có đeo thẻ hoặc bảo vệ phát loa tìm kiếm là cách an toàn và nhanh nhất để gặp lại cha mẹ."
        },
        {
          id: "eth2_5_6",
          level: 3,
          question: "Số điện thoại gọi khẩn cấp khi xảy ra <strong>hỏa hoạn, cháy nổ</strong> là số nào?",
          options: ["113", "114", "115", "111"],
          correct: 1,
          explanation: "Số 114 là số điện thoại báo cháy khẩn cấp cho lực lượng Cảnh sát Phòng cháy chữa cháy và Cứu nạn cứu hộ."
        },
        {
          id: "eth2_5_7",
          level: 4,
          question: "Nếu có người lạ cố tình túm tay lôi kéo em đi, phản xạ thoát thân đúng nhất là:",
          options: [
            "Im lặng đi theo vì sợ bị đánh",
            "Vùng vẫy, cắn mạnh hoặc ngồi thụt xuống, đồng thời hét thật to: 'Cứu cháu với! Cháu không quen người này!' để thu hút sự chú ý của người xung quanh",
            "Chỉ nói nhỏ 'chú thả cháu ra'",
            "Ngoan ngoãn nghe theo lời người lạ"
          ],
          correct: 1,
          explanation: "Hét to 'Cháu không quen người này!' giúp mọi người xung quanh phân biệt được đây là bắt cóc chứ không phải bố mẹ đang mắng con, từ đó sẽ can thiệp giải cứu ngay."
        },
        {
          id: "eth2_5_8",
          level: 4,
          question: "Kẻ xấu dọa: <em>'Nếu mày nói chuyện này cho bố mẹ mày biết thì tao sẽ làm hại cả nhà mày!'</em>. Trong tình huống bị đe dọa như vậy, em phải làm gì?",
          options: [
            "Sợ hãi và giấu kín mãi mãi một mình",
            "Không tin lời đe dọa của kẻ xấu, phải dũng cảm kể lại toàn bộ sự việc cho bố mẹ hoặc thầy cô giáo tin cậy nhất để người lớn bảo vệ em",
            "Bỏ nhà đi bụi",
            "Tự đi tìm kẻ xấu để nói chuyện"
          ],
          correct: 1,
          explanation: "Kẻ xấu luôn dùng lời đe dọa để nạn nhân sợ hãi giấu kín. Kể ngay cho bố mẹ là cách duy nhất để kẻ xấu bị pháp luật trừng trị và bảo vệ an toàn cho em."
        }
      ]
    }
  ]
};
