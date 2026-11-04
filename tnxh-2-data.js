/**
 * tnxh-2-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Tự Nhiên & Xã Hội Lớp 2
 * Chuẩn Chương trình Giáo dục phổ thông (GDPT) 2018
 * (Kết nối tri thức với cuộc sống, Cánh diều, Chân trời sáng tạo)
 */

window.TNXH2_DATA = {
  topics: [
    {
      id: "chu_de_gia_dinh",
      name: "Chủ Đề 1: Gia Đình & An Toàn Tại Nhà",
      icon: "🏡",
      desc: "Các thế hệ trong gia đình, nghề nghiệp người thân, phòng tránh ngộ độc thuốc men và phòng chống bỏng, cháy nổ, điện giật.",
      theory: {
        highlights: [
          {
            icon: "👨‍👩‍👧‍👦",
            title: "Các thế hệ trong gia đình",
            content: "• <strong>Gia đình hai thế hệ:</strong> Gồm có bố mẹ và các con.<br/>• <strong>Gia đình ba thế hệ:</strong> Gồm có ông bà, bố mẹ và các con cùng chung sống yêu thương, gắn bó.<br/>• Bổn phận của con cháu là lễ phép, kính trọng ông bà cha mẹ và giúp đỡ làm việc nhà vừa sức."
          },
          {
            icon: "💼",
            title: "Nghề nghiệp & Công việc của người lớn",
            content: "• Mỗi người trong gia đình đều làm các công việc có ích: công nhân, bác sĩ, giáo viên, nông dân, kỹ sư, thợ may...<br/>• Mọi nghề nghiệp chân chính đều đáng quý và cần được tôn trọng."
          },
          {
            icon: "💊",
            title: "Phòng tránh ngộ độc tại nhà",
            content: "• <strong>Thuốc chữa bệnh:</strong> Phải để trong tủ thuốc cao ngoài tầm với trẻ em; chỉ uống khi có sự chỉ dẫn của bố mẹ hoặc bác sĩ.<br/>• <strong>Hóa chất tẩy rửa:</strong> Nước lau sàn, nước xả vải, thuốc diệt côn trùng phải có nhãn mác rõ ràng, tuyệt đối không được nếm thử.<br/>• Tuyệt đối không ăn đồ ăn ôi thiu, nấm lạ mọc trong vườn."
          },
          {
            icon: "⚡",
            title: "Phòng tránh bỏng, cháy nổ & Điện giật",
            content: "• Không nghịch bật lửa, que diêm, bếp gas.<br/>• Tránh xa phích nước sôi, nồi canh nóng, bàn là đang cắm điện.<br/>• Tuyệt đối không dùng tay ướt cắm phích điện hoặc chọc que kim loại vào ổ cắm điện."
          }
        ]
      },
      questions: [
        {
          id: "tnxh_1_1",
          level: 1,
          question: "Gia đình có <strong>ông bà, bố mẹ và con cái</strong> cùng chung sống là gia đình có mấy thế hệ?",
          options: ["Một thế hệ", "Hai thế hệ", "Ba thế hệ", "Bốn thế hệ"],
          correct: 2,
          explanation: "Thế hệ thứ nhất là ông bà, thế hệ thứ hai là bố mẹ, thế hệ thứ ba là các con. Đó là gia đình ba thế hệ."
        },
        {
          id: "tnxh_1_2",
          level: 1,
          question: "Đồ vật nào dưới đây trong nhà có thể gây ra <strong>bỏng nặng</strong> cho trẻ em nếu không cẩn thận?",
          options: ["Quyển sách", "Phích nước sôi", "Gấu bông", "Chiếc quạt nhựa"],
          correct: 1,
          explanation: "Phích nước sôi chứa nước nóng nhiệt độ cao, nếu làm đổ sẽ gây bỏng da rất nguy hiểm."
        },
        {
          id: "tnxh_1_3",
          level: 2,
          question: "Để phòng tránh bị <strong>ngộ độc thuốc chữa bệnh</strong> tại nhà, em cần làm gì?",
          options: [
            "Tự ý lấy thuốc uống khi thấy ngon ngọt",
            "Chỉ uống thuốc khi có người lớn (bố mẹ, bác sĩ) hướng dẫn",
            "Uống thật nhiều viên thuốc để nhanh khỏi ốm",
            "Uống thuốc quá hạn sử dụng"
          ],
          correct: 1,
          explanation: "Trẻ em tuyệt đối không được tự ý uống thuốc mà phải có sự cho phép và hướng dẫn liều lượng từ bố mẹ hoặc bác sĩ."
        },
        {
          id: "tnxh_1_4",
          level: 2,
          question: "Hành động nào dưới đây là <strong>an toàn khi sử dụng điện</strong> trong gia đình?",
          options: [
            "Dùng tay ướt cắm dây điện quạt máy",
            "Chọc que sắt vào lỗ ổ cắm điện",
            "Nhờ người lớn cắm hoặc rút phích điện khi tay khô ráo",
            "Kéo mạnh dây điện để rút phích cắm"
          ],
          correct: 2,
          explanation: "Nhờ người lớn cắm điện và chỉ chạm vào thiết bị điện khi tay khô ráo là biện pháp phòng chống điện giật chuẩn xác."
        },
        {
          id: "tnxh_1_5",
          level: 3,
          question: "Khi ngửi thấy <strong>mùi khí gas nồng nặc</strong> bốc ra từ phòng bếp, việc đầu tiên em nên làm là gì?",
          options: [
            "Bật công tắc đèn điện lên để nhìn cho rõ",
            "Lấy bật lửa châm thử xem gas rò rỉ ở đâu",
            "Chạy ra chỗ thoáng, báo ngay cho bố mẹ hoặc người lớn biết và không bật bất kỳ công tắc điện nào",
            "Đóng chặt tất cả các cửa sổ lại"
          ],
          correct: 2,
          explanation: "Khi có mùi gas rò rỉ, bật công tắc điện hoặc quẹt lửa sẽ tạo tia lửa gây phát nổ ngay lập tức. Cần giữ bình tĩnh, báo ngay cho người lớn và mở thông thoáng các cửa sổ."
        },
        {
          id: "tnxh_1_6",
          level: 3,
          question: "Việc làm nào thể hiện em là một người con <strong>hiếu thảo và biết chia sẻ công việc gia đình</strong>?",
          options: [
            "Đi học về vứt cặp sách bừa bãi ra sàn nhà",
            "Tự giác quét nhà, gấp quần áo và lau bàn ăn giúp mẹ",
            "Chỉ ngồi xem tivi và đòi ăn quà vặt",
            "Tranh giành đồ chơi với em nhỏ"
          ],
          correct: 1,
          explanation: "Tự giác phụ giúp công việc nhà vừa sức như quét nhà, gấp quần áo thể hiện tình yêu thương và sự hiếu thảo với cha mẹ."
        },
        {
          id: "tnxh_1_7",
          level: 4,
          question: "Nếu không may bị <strong>nước sôi bắn vào mu bàn tay</strong>, thao tác sơ cứu đúng và nhanh nhất là:",
          options: [
            "Ngâm ngay vùng tay bị bỏng dưới vòi nước sạch mát trong khoảng 15-20 phút rồi báo người lớn",
            "Bôi kem đánh răng hoặc mỡ trăn ngay lên vết bỏng",
            "Chọc vỡ các bọng nước phồng rộp",
            "Đắp đá lạnh tảng trực tiếp lên vết thương"
          ],
          correct: 0,
          explanation: "Xả nước mát sạch (nước máy thông thường) từ 15-20 phút giúp hạ nhiệt vết bỏng nhanh, giảm đau rát và tránh tổn thương sâu mô da."
        },
        {
          id: "tnxh_1_8",
          level: 4,
          question: "Vì sao chúng ta tuyệt đối <strong>không được dùng chai nước ngọt, lon bia rỗng</strong> để đựng hóa chất như xăng, dầu hỏa hoặc nước tẩy bồn cầu?",
          options: [
            "Vì chai nước ngọt nhìn không đẹp",
            "Vì người khác (đặc biệt là trẻ em) rất dễ nhìn nhầm là nước uống và uống phải dẫn đến ngộ độc tử vong",
            "Vì hóa chất sẽ làm bẩn chai nhựa",
            "Vì giá chai nước ngọt quá đắt"
          ],
          correct: 1,
          explanation: "Đựng hóa chất vào chai nước ngọt khiến trẻ em và người già dễ nhầm lẫn là đồ uống giải khát, gây ngộ độc đường tiêu hóa cực kỳ nguy hiểm."
        }
      ]
    },
    {
      id: "chu_de_truong_hoc",
      name: "Chủ Đề 2: Trường Học & An Toàn Học Đường",
      icon: "🏫",
      desc: "Các thành viên nhà trường, các phòng chức năng, giữ vệ sinh trường lớp và phòng tránh tai nạn thương tích học đường.",
      theory: {
        highlights: [
          {
            icon: "👩‍🏫",
            title: "Các thành viên trong trường học",
            content: "• <strong>Thầy/Cô Hiệu trưởng:</strong> Quản lý chung mọi hoạt động giáo dục của nhà trường.<br/>• <strong>Thầy cô giáo:</strong> Giảng dạy kiến thức, rèn luyện đạo đức cho học sinh.<br/>• <strong>Cô nhân viên y tế:</strong> Chăm sóc sức khỏe, sơ cứu ban đầu khi học sinh ốm đau hoặc bị thương.<br/>• <strong>Bác bảo vệ & cô lao công:</strong> Giữ gìn an ninh trật tự và dọn dẹp trường lớp luôn sạch đẹp."
          },
          {
            icon: "🏢",
            title: "Các khu vực & Phòng chức năng",
            content: "• Lớp học, Thư viện (đọc sách giữ yên lặng), Phòng Tin học (thực hành máy tính), Phòng Y tế, Nhà đa năng (tập thể dục thể thao), Sân trường (vui chơi giờ ra chơi)."
          },
          {
            icon: "🛡️",
            title: "Vui chơi an toàn giờ ra chơi",
            content: "• Đi lại trật tự bên phải cầu thang, không xô đẩy bạn.<br/>• Tuyệt đối không ngồi lên lan can hoặc trượt trên tay vịn cầu thang.<br/>• Không chơi các trò chơi bạo lực, ném đá, dùng que nhọn đuổi bắt nhau."
          },
          {
            icon: "🧹",
            title: "Giữ gìn vệ sinh trường lớp",
            content: "• Bỏ rác đúng nơi quy định, phân loại rác tái chế.<br/>• Đi vệ sinh đúng cách, giật nước sạch sẽ và rửa tay bằng xà phòng.<br/>• Không vẽ bậy lên bàn ghế, tường lớp học."
          }
        ]
      },
      questions: [
        {
          id: "tnxh_2_1",
          level: 1,
          question: "Ai là người trực tiếp giảng dạy kiến thức các môn học cho em mỗi ngày trên lớp?",
          options: ["Bác bảo vệ", "Thầy cô giáo", "Cô thủ thư", "Bác tài xế"],
          correct: 1,
          explanation: "Thầy cô giáo là người trực tiếp đứng lớp truyền thụ kiến thức và dạy dỗ học sinh."
        },
        {
          id: "tnxh_2_2",
          level: 1,
          question: "Khi ở trong <strong>Thư viện nhà trường</strong>, em cần tuân thủ quy định nào?",
          options: [
            "Chạy nhảy đuổi bắt nhau",
            "Nói chuyện to và ăn quà vặt",
            "Giữ trật tự yên lặng, đọc sách nhẹ nhàng và cất sách đúng vị trí",
            "Xé tranh ảnh trong sách mang về"
          ],
          correct: 2,
          explanation: "Quy định quan trọng nhất ở thư viện là giữ im lặng để mọi người cùng tập trung đọc sách, đọc xong xếp sách ngay ngắn vào giá."
        },
        {
          id: "tnxh_2_3",
          level: 2,
          question: "Hành động nào dưới đây là <strong>nguy hiểm, dễ gây ngã gãy xương</strong> tại trường học?",
          options: [
            "Tập thể dục nhịp điệu giữa giờ",
            "Đọc báo Đội dưới bóng cây",
            "Trượt trên tay vịn cầu thang và xô đẩy bạn khi xuống lớp",
            "Chơi nhảy dây trên sân trường bằng phẳng"
          ],
          correct: 2,
          explanation: "Trượt trên tay vịn cầu thang rất dễ mất thăng bằng ngã từ trên cao xuống đất, gây chấn thương sọ não và gãy xương."
        },
        {
          id: "tnxh_2_4",
          level: 2,
          question: "Khi thấy một bạn cùng lớp bị đau bụng hoặc trầy xước chân chảy máu, em nên làm gì?",
          options: [
            "Đứng nhìn và trêu chọc bạn",
            "Báo ngay cho thầy cô giáo hoặc đưa bạn vào phòng Y tế của trường",
            "Kéo bạn ra sân trường tiếp tục chạy",
            "Bỏ mặc bạn một mình trong lớp"
          ],
          correct: 1,
          explanation: "Khi bạn gặp vấn đề sức khỏe hoặc tai nạn, cần báo ngay cho thầy cô hoặc cô y tế nhà trường để được hỗ trợ sơ cứu kịp thời."
        },
        {
          id: "tnxh_2_5",
          level: 3,
          question: "Để giữ gìn nhà vệ sinh trường học luôn thơm tho, sạch sẽ, mỗi học sinh cần làm gì?",
          options: [
            "Sau khi đi vệ sinh phải xả nước sạch sẽ và rửa tay bằng xà phòng",
            "Vứt giấy rác bừa bãi xuống sàn nhà",
            "Dẫm cả hai chân lên bồn cầu bệt",
            "Nghịch nước tạt lung tung"
          ],
          correct: 0,
          explanation: "Xả nước sau khi đi vệ sinh và rửa tay sạch bằng xà phòng giúp bảo vệ môi trường chung và phòng ngừa dịch bệnh lây lan."
        },
        {
          id: "tnxh_2_6",
          level: 3,
          question: "Trò chơi nào dưới đây là <strong>lành mạnh và an toàn</strong> cho học sinh lớp 2 trong giờ ra chơi?",
          options: [
            "Ném đá vào đàn chim trên cây",
            "Chơi trò đánh nhau giả vờ bằng cành cây nhọn",
            "Nhảy dây, đá cầu, chơi cờ vua hoặc chuyền bóng nhẹ nhàng",
            "Leo trèo lên tường rào cổng trường"
          ],
          correct: 2,
          explanation: "Nhảy dây, đá cầu, đánh cờ vua giúp rèn luyện thể chất dẻo dai và trí tuệ, an toàn cho lứa tuổi học sinh."
        },
        {
          id: "tnxh_2_7",
          level: 4,
          question: "Em phát hiện ổ cắm điện ở góc lớp học bị vỡ vỏ nhựa, hở dây đồng bên trong. Em nên xử lý như thế nào?",
          options: [
            "Lấy tay sờ thử xem có điện hay không",
            "Báo ngay cho thầy cô giáo hoặc bác bảo vệ để ngắt cầu dao sửa chữa và nhắc các bạn không lại gần",
            "Lấy bút chì chọc vào lỗ cắm",
            "Lấy khăn ướt lau cho sạch bụi"
          ],
          correct: 1,
          explanation: "Báo ngay cho người có trách nhiệm (thầy cô, bác bảo vệ) ngắt điện sửa chữa kịp thời và cảnh báo bạn bè tránh xa để phòng tránh điện giật."
        },
        {
          id: "tnxh_2_8",
          level: 4,
          question: "Nhận định nào dưới đây là <strong>chính xác nhất</strong> về việc bảo vệ tài sản trường học?",
          options: [
            "Bàn ghế ở trường là của nhà trường nên vẽ bậy hay khắc chữ lên cũng không sao",
            "Chỉ cần giữ gìn đồ dùng trong cặp của mình, đồ của trường thì mặc kệ",
            "Giữ gìn bàn ghế sạch đẹp, tắt quạt và bóng điện trước khi ra về là trách nhiệm của mỗi học sinh",
            "Làm hỏng cây cảnh ở trường thì không ai phát hiện"
          ],
          correct: 2,
          explanation: "Tài sản công của trường học phục vụ cho việc học tập của tất cả học sinh, mỗi bạn đều có nghĩa vụ giữ gìn, bảo quản và tiết kiệm điện nước."
        }
      ]
    },
    {
      id: "chu_de_cong_dong_giao_thong",
      name: "Chủ Đề 3: Cộng Đồng & Giao Thông An Toàn",
      icon: "🚦",
      desc: "4 loại hình giao thông, nhận biết các nhóm biển báo, quy tắc đi bộ an toàn và đội mũ bảo hiểm chuẩn.",
      theory: {
        highlights: [
          {
            icon: "🚗",
            title: "4 loại hình giao thông & Phương tiện",
            content: "• <strong>Giao thông đường bộ:</strong> Ô tô, xe máy, xe đạp, xe buýt... di chuyển trên đường phố.<br/>• <strong>Giao thông đường sắt:</strong> Tàu hỏa (xe lửa) di chuyển trên đường ray sắt chuyên dụng.<br/>• <strong>Giao thông đường thủy:</strong> Tàu thuyền, ca nô, phà, xà lan trên sông, biển.<br/>• <strong>Giao thông đường hàng không:</strong> Máy bay, trực thăng bay lượn trên bầu trời."
          },
          {
            icon: "🛑",
            title: "3 nhóm biển báo giao thông cơ bản",
            content: "• <strong>Biển báo CẤM:</strong> Hình <em>tròn, viền đỏ, nền trắng</em> (báo điều cấm người tham gia giao thông không được làm).<br/>• <strong>Biển báo NGUY HIỂM:</strong> Hình <em>tam giác đều, viền đỏ, nền vàng</em> (cảnh báo nguy hiểm phía trước).<br/>• <strong>Biển HIỆU LỆNH / CHỈ DẪN:</strong> Hình <em>tròn hoặc chữ nhật, nền xanh lam</em> (chỉ dẫn hướng đi hoặc làn đường quy định)."
          },
          {
            icon: "🚶",
            title: "Quy tắc đi bộ an toàn",
            content: "• Đi bộ trên vỉa hè; ở nơi không có vỉa hè thì phải đi sát lề đường bên tay phải.<br/>• Sang đường tại nơi có vạch kẻ trắng dành cho người đi bộ, quan sát kỹ hai bên đường.<br/>• Học sinh tiểu học khi qua đường lớn cần có người lớn dắt tay."
          },
          {
            icon: "🛵",
            title: "An toàn khi ngồi trên xe máy, xe buýt",
            content: "• <strong>Xe máy:</strong> Bắt buộc đội mũ bảo hiểm đạt chuẩn, cài quai chắc chắn, ngồi ngay ngắn ôm eo người lớn.<br/>• <strong>Xe buýt:</strong> Đợi xe dừng hẳn mới lên xuống, không thò đầu, thò tay ra ngoài cửa sổ xe."
          }
        ]
      },
      questions: [
        {
          id: "tnxh_3_1",
          level: 1,
          question: "Phương tiện nào dưới đây tham gia <strong>giao thông đường hàng không</strong>?",
          options: ["Tàu hỏa", "Máy bay", "Ca nô", "Xe buýt"],
          correct: 1,
          explanation: "Máy bay di chuyển trên bầu trời thuộc loại hình giao thông đường hàng không."
        },
        {
          id: "tnxh_3_2",
          level: 1,
          question: "Tín hiệu đèn giao thông màu nào báo hiệu người đi đường <strong>phải dừng lại</strong>?",
          options: ["Đèn xanh", "Đèn vàng", "Đèn đỏ", "Đèn tím"],
          correct: 2,
          explanation: "Đèn đỏ: Dừng lại. Đèn xanh: Được phép đi. Đèn vàng: Đi chậm lại và dừng trước vạch sơn."
        },
        {
          id: "tnxh_3_3",
          level: 2,
          question: "Biển báo giao thông có hình <strong>tròn, viền đỏ, nền trắng</strong> thuộc nhóm biển báo nào?",
          options: [
            "Biển báo nguy hiểm",
            "Biển báo cấm",
            "Biển chỉ dẫn",
            "Biển hiệu lệnh"
          ],
          correct: 1,
          explanation: "Biển hình tròn viền đỏ nền trắng là nhóm biển báo cấm (ví dụ: cấm đi ngược chiều, cấm người đi bộ)."
        },
        {
          id: "tnxh_3_4",
          level: 2,
          question: "Khi ngồi sau xe máy của bố mẹ đưa đến trường, học sinh cần phải làm gì?",
          options: [
            "Đứng nhấp nhổm trên yên xe",
            "Đội mũ bảo hiểm đạt chuẩn, cài quai đúng cách và ngồi ngay ngắn",
            "Cầm ô che nắng xòe rộng",
            "Giang hai tay hai bên như chim bay"
          ],
          correct: 1,
          explanation: "Đội mũ bảo hiểm và cài quai đúng cách bảo vệ vùng đầu não của trẻ khi có va chạm giao thông."
        },
        {
          id: "tnxh_3_5",
          level: 3,
          question: "Ở đường làng quê không có vỉa hè dành cho người đi bộ, em phải đi như thế nào cho an toàn?",
          options: [
            "Đi hàng ba giữa lòng đường",
            "Đi sát lề đường bên tay phải của mình",
            "Đi sát mép đường bên trái ngược chiều xe máy",
            "Vừa đi vừa đá bóng dưới lòng đường"
          ],
          correct: 1,
          explanation: "Khi đường không có vỉa hè, người đi bộ phải đi sát mép đường bên phải theo chiều đi của mình."
        },
        {
          id: "tnxh_3_6",
          level: 3,
          question: "Khi đi trên <strong>thuyền hoặc ca nô qua sông</strong>, hành động bắt buộc nào giúp bảo vệ tính mạng của em?",
          options: [
            "Mặc áo phao đúng quy cách trong suốt chuyến đi",
            "Nghiêng người sang một bên nghịch nước sông",
            "Nhảy nhót trên mạn thuyền",
            "Đứng lên chụp ảnh"
          ],
          correct: 0,
          explanation: "Mặc áo phao giúp cơ thể nổi trên mặt nước phòng trường hợp lật thuyền hoặc ngã xuống nước."
        },
        {
          id: "tnxh_3_7",
          level: 4,
          question: "Biển báo hình tam giác đều, viền đỏ, nền màu vàng có hình hai bạn nhỏ dắt tay nhau báo hiệu điều gì?",
          options: [
            "Cấm trẻ em đi bộ",
            "Báo trước đoạn đường nguy hiểm gần trường học, thường có trẻ em đi ngang qua đường",
            "Nơi cho phép trẻ em đá bóng dưới lòng đường",
            "Khu vực vui chơi giải trí"
          ],
          correct: 1,
          explanation: "Đó là biển báo nguy hiểm số W.225 'Trẻ em', cảnh báo các lái xe giảm tốc độ vì sắp đến khu vực trường học."
        },
        {
          id: "tnxh_3_8",
          level: 4,
          question: "Khi đèn tín hiệu dành cho người đi bộ chuyển sang màu xanh nhưng vẫn có xe rẽ phải tiến tới, em nên xử lý thế nào?",
          options: [
            "Cứ nhắm mắt lao thật nhanh qua đường vì đèn của mình đã xanh",
            "Dừng lại trên vạch kẻ, quan sát chiếc xe xem lái xe có nhường đường không rồi mới bước tiếp an toàn",
            "Ném cặp sách vào đầu xe ô tô",
            "Quay lưng chạy ngược lại không quan sát"
          ],
          correct: 1,
          explanation: "Dù đèn xanh, luôn cần quan sát thực tế xung quanh để đảm bảo an toàn tuyệt đối trước khi bước tiếp qua đường."
        }
      ]
    },
    {
      id: "chu_de_thuc_vat_dong_vat",
      name: "Chủ Đề 4: Thực Vật & Động Vật Quanh Em",
      icon: "🌱",
      desc: "Môi trường sống của cây cối và con vật (trên cạn, dưới nước, trên không); chăm sóc bảo vệ thực vật và thú cưng.",
      theory: {
        highlights: [
          {
            icon: "🌳",
            title: "Môi trường sống của Thực Vật",
            content: "• <strong>Sống trên cạn:</strong> Cây bàng, cây chuối, cây cam, hoa hồng, cây xương rồng... bám rễ sâu vào đất lấy dinh dưỡng.<br/>• <strong>Sống dưới nước:</strong> Cây hoa sen, cây hoa súng, bèo tây (lục bình), rong rêu...<br/>• <strong>Sống nhờ trên thân cây khác:</strong> Cây phong lan, cây tầm gửi bám vào thân cây gỗ lớn lấy ánh sáng."
          },
          {
            icon: "🐾",
            title: "Môi trường sống của Động Vật",
            content: "• <strong>Sống trên cạn:</strong> Con chó, con mèo, con voi, con hươu cao cổ, gà, vịt...<br/>• <strong>Sống dưới nước:</strong> Cá chép, tôm, cua, mực, cá voi, rùa biển...<br/>• <strong>Vừa sống trên cạn vừa dưới nước:</strong> Con ếch, con nhái, con cá sấu...<br/>• <strong>Bay lượn trên không:</strong> Chim bồ câu, chim én, ong, bướm..."
          },
          {
            icon: "🪴",
            title: "Chăm sóc & Bảo vệ cây xanh",
            content: "• Tưới nước đều đặn, nhổ cỏ dại, bắt sâu, bón phân hợp lý.<br/>• Không bẻ cành bứt lá, không giẫm đạp lên bồn hoa công viên.<br/>• Trồng nhiều cây xanh giúp điều hòa không khí và tạo bóng mát."
          },
          {
            icon: "🐕",
            title: "Yêu thương & Giữ an toàn với động vật",
            content: "• Cho thú cưng (chó, mèo) ăn uống sạch sẽ, tắm rửa và tiêm phòng vắc-xin dại định kỳ.<br/>• Không trêu chọc chó lạ đang ăn, đang ngủ hoặc đang chăm con.<br/>• Rửa tay bằng xà phòng sau khi tiếp xúc với vật nuôi."
          }
        ]
      },
      questions: [
        {
          id: "tnxh_4_1",
          level: 1,
          question: "Loài cây nào dưới đây có môi trường sống <strong>dưới nước</strong>?",
          options: ["Cây xương rồng", "Cây hoa sen", "Cây bàng", "Cây ngô"],
          correct: 1,
          explanation: "Cây hoa sen sống trong bùn nước ở ao hồ, cuống lá và hoa vươn lên khỏi mặt nước."
        },
        {
          id: "tnxh_4_2",
          level: 1,
          question: "Con vật nào dưới đây thuộc nhóm động vật <strong>sống dưới nước</strong> thở bằng mang?",
          options: ["Con thỏ", "Con chim sẻ", "Con cá chép", "Con khỉ"],
          correct: 2,
          explanation: "Cá chép sống hoàn toàn dưới nước và hô hấp lấy ô-xi hòa tan qua mang cá."
        },
        {
          id: "tnxh_4_3",
          level: 2,
          question: "Cây hoa phong lan thường sống bám vào đâu để sinh trưởng trong tự nhiên?",
          options: [
            "Chìm sâu dưới đáy hồ nước",
            "Bám trên thân cây gỗ lớn khác trên cao",
            "Chôn sâu rễ dưới lòng đất cát",
            "Nổi lững lờ trên mặt biển"
          ],
          correct: 1,
          explanation: "Phong lan là loài thực vật phụ sinh, rễ của chúng bám vào thân vỏ cây to trên cao để đón ánh sáng và hút ẩm không khí."
        },
        {
          id: "tnxh_4_4",
          level: 2,
          question: "Động vật nào vừa có thể <strong>sống được trên cạn vừa bơi lặn dưới nước</strong>?",
          options: ["Con ếch đồng", "Con mèo", "Con hươu", "Con chim bồ câu"],
          correct: 0,
          explanation: "Con ếch là động vật lưỡng cư: lúc nhỏ là nòng nọc bơi dưới nước, khi trưởng thành thở bằng phổi và qua da, sống cả trên cạn lẫn dưới nước."
        },
        {
          id: "tnxh_4_5",
          level: 3,
          question: "Hành động nào dưới đây là <strong>bảo vệ và chăm sóc cây xanh</strong> đúng cách?",
          options: [
            "Rút hết nước trong chậu cây cảnh",
            "Tưới lượng nước vừa đủ và để cây ở nơi có đủ ánh sáng mặt trời",
            "Ngắt hết các búp hoa non để cây lớn nhanh",
            "Đổ nước xà phòng giặt vào gốc cây"
          ],
          correct: 1,
          explanation: "Cây cần nước và ánh sáng mặt trời để quang hợp tạo chất dinh dưỡng nuôi cây phát triển khỏe mạnh."
        },
        {
          id: "tnxh_4_6",
          level: 3,
          question: "Để phòng tránh bị <strong>chó mèo cắn gây bệnh dại</strong> nguy hiểm, điều gì em TUYỆT ĐỐI không nên làm?",
          options: [
            "Đứng yên không la hét khi gặp chó dữ",
            "Trêu chọc, ném đá hoặc cướp thức ăn của chó đang ăn",
            "Đưa thú cưng đi tiêm phòng vắc-xin dại",
            "Rửa tay sạch sau khi vuốt ve mèo con"
          ],
          correct: 1,
          explanation: "Trêu chọc hoặc cướp thức ăn khi chó đang ăn sẽ kích động bản năng tự vệ dữ dội của chó, khiến chúng tấn công cắn người."
        },
        {
          id: "tnxh_4_7",
          level: 4,
          question: "Cây xương rồng có lá biến thành <strong>gai nhọn</strong> và thân mọng nước. Đặc điểm này giúp cây thích nghi với môi trường sống nào?",
          options: [
            "Đầm lầy ngập úng",
            "Rừng mưa nhiệt đới ẩm ướt",
            "Sa mạc cát khô hạn, thiếu nước",
            "Vùng núi tuyết phủ quanh năm"
          ],
          correct: 2,
          explanation: "Lá biến thành gai giúp giảm tối đa sự thoát hơi nước, còn thân mọng nước giúp dự trữ nước trong môi trường sa mạc khô cằn nắng nóng."
        },
        {
          id: "tnxh_4_8",
          level: 4,
          question: "Nếu không may bị <strong>chó cắn chảy máu</strong>, việc xử lý khẩn cấp quan trọng nhất là:",
          options: [
            "Lấy tro bếp đắp vào vết thương rồi giấu kín bố mẹ",
            "Rửa ngay vết thương dưới vòi nước sạch xà phòng 15 phút, sát trùng và đưa đến cơ sở y tế tiêm vắc-xin phòng dại ngay",
            "Bôi dầu gió cay vào vết thương",
            "Đập chết con chó ngay lập tức"
          ],
          correct: 1,
          explanation: "Rửa xà phòng dưới vòi nước chảy giúp loại bỏ bớt virus dại từ nước bọt của chó, sau đó phải tiêm vắc-xin phòng dại càng sớm càng tốt để cứu tính mạng."
        }
      ]
    },
    {
      id: "chu_de_con_nguoi_suc_khoe",
      name: "Chủ Đề 5: Cơ Quan Vận Động, Tiêu Hóa & Bài Tiết",
      icon: "💪",
      desc: "Xương và cơ bắp, cơ quan tiêu hóa, cơ quan bài tiết nước tiểu, tư thế ngồi học đúng chống vẹo cột sống.",
      theory: {
        highlights: [
          {
            icon: "🦴",
            title: "Cơ quan Vận động (Xương & Cơ)",
            content: "• Gồm có <strong>bộ xương</strong> và <strong>hệ cơ</strong> (cơ bắp).<br/>• Bộ xương nâng đỡ cơ thể và bảo vệ các nội tạng bên trong (hộp sọ bảo vệ não, lồng ngực bảo vệ tim phổi).<br/>• Nhờ sự co giãn của cơ bắp và các khớp xương, cơ thể ta mới có thể đi, đứng, chạy, nhảy, cầm bút viết."
          },
          {
            icon: "🪑",
            title: "Tư thế ngồi học đúng cách",
            content: "• Lưng thẳng, ngực không tì vào mép bàn.<br/>• Hai chân đặt vuông góc thoải mái chạm sàn nhà.<br/>• Mắt cách mặt bàn khoảng <strong>25 - 30 cm</strong>.<br/>• <em>Tác dụng:</em> Phòng chống cong vẹo cột sống và tật cận thị học đường."
          },
          {
            icon: "🍎",
            title: "Cơ quan Tiêu hóa",
            content: "• <strong>Các bộ phận:</strong> Miệng (răng, lưỡi) ➔ Thực quản ➔ Dạ dày (bao tử) ➔ Ruột non ➔ Ruột già ➔ Hậu môn.<br/>• <em>Thói quen tốt:</em> Ăn chậm nhai kỹ, ăn đúng bữa, không vận động mạnh ngay sau khi vừa ăn no."
          },
          {
            icon: "💧",
            title: "Cơ quan Bài tiết nước tiểu",
            content: "• <strong>Các bộ phận:</strong> Hai quả thận, hai ống dẫn nước tiểu, bóng đái (bàng quang) và ống đái.<br/>• <em>Chăm sóc:</em> Uống đủ nước mỗi ngày (khoảng 1 - 1.5 lít nước sạch), tuyệt đối <strong>không nhịn tiểu</strong> để phòng tránh sỏi thận và viêm đường tiết niệu."
          }
        ]
      },
      questions: [
        {
          id: "tnxh_5_1",
          level: 1,
          question: "Cơ quan nào trong cơ thể giúp chúng ta có thể <strong>cử động, đi đứng, chạy nhảy</strong>?",
          options: ["Cơ quan tiêu hóa", "Cơ quan vận động (xương và cơ)", "Cơ quan hô hấp", "Cơ quan bài tiết"],
          correct: 1,
          explanation: "Cơ quan vận động gồm bộ xương và hệ cơ phối hợp nhịp nhàng giúp cơ thể thực hiện mọi cử động vận động."
        },
        {
          id: "tnxh_5_2",
          level: 1,
          question: "Nước tiểu sau khi được lọc ở thận sẽ chảy theo ống dẫn xuống tích trữ tại bộ phận nào?",
          options: ["Dạ dày", "Bóng đái (bàng quang)", "Ruột già", "Tim"],
          correct: 1,
          explanation: "Bóng đái là cơ quan rỗng có tính đàn hồi dùng để chứa nước tiểu trước khi được bài tiết ra ngoài qua ống đái."
        },
        {
          id: "tnxh_5_3",
          level: 2,
          question: "Khoảng cách an toàn từ <strong>mắt đến mặt bàn hoặc trang sách</strong> khi ngồi học là bao nhiêu?",
          options: ["10 - 15 cm", "25 - 30 cm", "50 - 60 cm", "Càng gần càng tốt"],
          correct: 1,
          explanation: "Khoảng cách tiêu chuẩn từ mắt đến sách vở là 25 - 30 cm giúp mắt không bị điều tiết quá độ dẫn đến cận thị."
        },
        {
          id: "tnxh_5_4",
          level: 2,
          question: "Thức ăn sau khi được nhai và nuốt ở miệng sẽ đi qua cơ quan nào trước khi xuống đến dạ dày?",
          options: ["Thực quản", "Khí quản", "Ruột non", "Gan"],
          correct: 0,
          explanation: "Thực quản là đoạn ống cơ nối từ khoang miệng/họng xuống tới dạ dày để vận chuyển thức ăn."
        },
        {
          id: "tnxh_5_5",
          level: 3,
          question: "Thói quen nào dưới đây gây hại nghiêm trọng cho <strong>cột sống</strong> của học sinh tiểu học?",
          options: [
            "Đeo cặp sách trên cả 2 vai cân đối",
            "Ngồi học cúi gập người, nằm bò ra bàn hoặc vẹo người sang một bên",
            "Tập thể dục vươn vai sau giờ học",
            "Ngồi ghế có chiều cao phù hợp với bàn"
          ],
          correct: 1,
          explanation: "Ngồi cong vẹo hoặc nằm bò ra bàn khiến các đốt sống bị lệch trục, lâu ngày dẫn đến gù lưng và cong vẹo cột sống vĩnh viễn."
        },
        {
          id: "tnxh_5_6",
          level: 3,
          question: "Vì sao chúng ta <strong>không nên nhịn tiểu</strong> khi cơ thể có nhu cầu đi vệ sinh?",
          options: [
            "Vì làm cho cơ thể bị béo phì",
            "Vì nhịn tiểu khiến bóng đái bị căng giãn quá mức, dễ gây viêm nhiễm bàng quang và đọng cặn thành sỏi thận",
            "Vì nhịn tiểu làm cho răng bị sâu",
            "Vì nhịn tiểu làm đau chân"
          ],
          correct: 1,
          explanation: "Thường xuyên nhịn tiểu làm đọng cặn khoáng chất ở đường tiết niệu sinh sỏi thận và tạo điều kiện cho vi khuẩn phát triển gây viêm bàng quang."
        },
        {
          id: "tnxh_5_7",
          level: 4,
          question: "Để bảo vệ <strong>dạ dày và hệ tiêu hóa khỏe mạnh</strong>, bác sĩ khuyên em nên thực hiện chế độ sinh hoạt nào?",
          options: [
            "Vừa ăn cơm vừa chạy nhảy chơi đùa để tiêu hóa nhanh",
            "Ăn chậm nhai kỹ, ăn uống đúng giờ giấc, không ăn đồ quá cay nóng hay uống nhiều nước ngọt có ga",
            "Nhịn ăn bữa sáng để bụng đói đến trưa",
            "Uống thật nhiều nước đá lạnh trong bữa ăn"
          ],
          correct: 1,
          explanation: "Ăn chậm nhai kỹ giúp thức ăn được nghiền nhỏ tẩm đều nước bọt, giảm gánh nặng co bóp cho dạ dày và giúp hấp thụ chất dinh dưỡng tốt nhất."
        },
        {
          id: "tnxh_5_8",
          level: 4,
          question: "Khi tập thể thao hoặc chạy nhảy mạnh, cơ quan nào trong cơ thể hoạt động nhiều nhất giúp chân tay cử động?",
          options: [
            "Cơ bắp co giãn kéo các khớp xương di chuyển linh hoạt",
            "Chỉ có bộ xương di chuyển tự do",
            "Cơ quan tiêu hóa co bóp",
            "Cơ quan bài tiết co bóp"
          ],
          correct: 0,
          explanation: "Cơ bắp bám vào hai đầu xương, khi cơ bắp co và duỗi sẽ kéo các đòn bẩy xương di chuyển tại các khớp nối tạo thành bước chạy."
        }
      ]
    },
    {
      id: "chu_de_trai_dat_bau_troi",
      name: "Chủ Đề 6: Bầu Trời, Thời Tiết & Các Mùa",
      icon: "⛅",
      desc: "Hiện tượng thời tiết nắng, mưa, gió bão; Mặt Trời, Mặt Trăng, bốn mùa trong năm và trang phục giữ ấm.",
      theory: {
        highlights: [
          {
            icon: "☀️",
            title: "Mặt Trời & Ban Ngày",
            content: "• Ban ngày có Mặt Trời chiếu ánh sáng chói chang và tỏa nhiệt ấm áp sưởi ấm vạn vật.<br/>• <strong>Quy luật phương hướng:</strong> Mặt Trời luôn mọc ở <strong>hướng Đông</strong> vào buổi sáng sớm và lặn ở <strong>hướng Tây</strong> vào buổi chiều tà.<br/>• Tuyệt đối không nhìn trực tiếp vào Mặt Trời vì tia cực tím sẽ làm hỏng giác mạc mắt."
          },
          {
            icon: "🌙",
            title: "Mặt Trăng & Ban Đêm",
            content: "• Ban đêm Mặt Trời lặn, bầu trời tối dần xuất hiện Mặt Trăng và hàng triệu vì sao lấp lánh.<br/>• Hình dạng Mặt Trăng thay đổi theo chu kỳ ngày trong tháng: Trăng khuyết hình lưỡi liềm (đầu tháng) ➔ Trăng tròn vành vạnh (rằm giữa tháng) ➔ Trăng khuyết dần (cuối tháng)."
          },
          {
            icon: "🌦️",
            title: "Các hiện tượng thời tiết",
            content: "• <strong>Nắng:</strong> Trời trong xanh, nhiều ánh nắng, nhiệt độ cao.<br/>• <strong>Mưa:</strong> Bầu trời nhiều mây đen xám xịt, có những giọt nước mưa rơi xuống.<br/>• <strong>Gió bão & sấm sét:</strong> Gió giật mạnh làm nghiêng ngả cây cối, có tia chớp lóe sáng kèm tiếng sấm rền vang."
          },
          {
            icon: "❄️",
            title: "Bốn mùa & Phòng tránh thời tiết cực đoan",
            content: "• Miền Bắc có 4 mùa rõ rệt: <em>Xuân</em> (ấm áp mưa phùn), <em>Hạ</em> (nắng gắt oi ả), <em>Thu</em> (mát mẻ lá vàng), <em>Đông</em> (giá rét hanh khô).<br/>• Miền Nam có 2 mùa: <em>Mùa mưa</em> và <em>Mùa khô</em>.<br/>• Khi có mưa dông sấm sét: Không trú mưa dưới gốc cây to hoặc cột điện ngoài trời."
          }
        ]
      },
      questions: [
        {
          id: "tnxh_6_1",
          level: 1,
          question: "Mặt Trời mọc ở hướng nào vào mỗi buổi sáng sớm?",
          options: ["Hướng Tây", "Hướng Đông", "Hướng Nam", "Hướng Bắc"],
          correct: 1,
          explanation: "Theo quy luật tự nhiên của Trái Đất, Mặt Trời luôn luôn mọc ở hướng Đông và lặn ở hướng Tây."
        },
        {
          id: "tnxh_6_2",
          level: 1,
          question: "Vào những ngày <strong>rằm giữa tháng âm lịch (ngày 15)</strong>, Mặt Trăng thường có hình dạng như thế nào?",
          options: ["Hình lưỡi liềm mỏng", "Hình chiếc thuyền", "Tròn vành vạnh sáng tỏ", "Không nhìn thấy trăng"],
          correct: 2,
          explanation: "Vào ngày rằm (15 âm lịch hàng tháng), Mặt Trăng tròn vẹn và sáng nhất trên bầu trời đêm."
        },
        {
          id: "tnxh_6_3",
          level: 2,
          question: "Dấu hiệu nào dưới đây báo hiệu <strong>sắp có cơn mưa dông lớn</strong> đổ xuống?",
          options: [
            "Bầu trời trong xanh không một gợn mây",
            "Mây đen ùn ùn kéo đến tối sầm bầu trời, gió giật mạnh và có chuồn chuồn bay là sát mặt đất",
            "Nắng chang chang gay gắt",
            "Sương mù mỏng tan dần"
          ],
          correct: 1,
          explanation: "Mây đen dày đặc tầng thấp, gió nổi to và chuồn chuồn bay thấp ('chuồn chuồn bay thấp thì mưa') là dấu hiệu đặc trưng báo hiệu cơn dông sắp tới."
        },
        {
          id: "tnxh_6_4",
          level: 2,
          question: "Miền Bắc nước ta có <strong>4 mùa</strong> trong năm lần lượt theo thứ tự nào?",
          options: [
            "Xuân - Hạ (Hè) - Thu - Đông",
            "Hạ - Xuân - Đông - Thu",
            "Đông - Thu - Hạ - Xuân",
            "Xuân - Thu - Hạ - Đông"
          ],
          correct: 0,
          explanation: "Trình tự 4 mùa trong năm ở miền Bắc là: Mùa xuân ➔ Mùa hạ (hè) ➔ Mùa thu ➔ Mùa đông."
        },
        {
          id: "tnxh_6_5",
          level: 3,
          question: "Khi đang đi trên đường mà trời bất ngờ nổi cơn <strong>mưa dông có sấm chớp dữ dội</strong>, nơi nào TUYỆT ĐỐI KHÔNG NÊN trú mưa?",
          options: [
            "Dưới hiên nhà kiên cố của người dân ven đường",
            "Dưới gốc cây to đứng đơn độc giữa đồng hoặc cạnh cột điện cao thế",
            "Trong nhà chờ xe buýt",
            "Trong cửa hàng bách hóa"
          ],
          correct: 1,
          explanation: "Cây to và cột điện cao thế dễ bị sét đánh trúng nhất. Đứng dưới gốc cây to khi có sấm sét có nguy cơ bị sét đánh tử vong cực cao."
        },
        {
          id: "tnxh_6_6",
          level: 3,
          question: "Vào những ngày mùa đông giá rét căm căm, em cần mặc trang phục như thế nào để <strong>bảo vệ đường hô hấp và không bị cảm lạnh</strong>?",
          options: [
            "Mặc áo phông cộc tay và quần ngố",
            "Mặc áo khoác ấm, quàng khăn len giữ ấm cổ, đi tất chân và đội mũ len che kín tai",
            "Đi chân đất trên nền gạch đá hoa",
            "Tắm nước đá lạnh"
          ],
          correct: 1,
          explanation: "Giữ ấm cổ, ngực, bàn chân và tai bằng áo ấm, khăn len và bít tất giúp phòng tránh viêm họng, viêm phổi vào mùa đông."
        },
        {
          id: "tnxh_6_7",
          level: 4,
          question: "Vì sao người xưa có câu tục ngữ: <em>\"Cầu vồng mống cụt, không mưa cũng bão\"</em>?",
          options: [
            "Vì cầu vồng làm cho mặt trời biến mất",
            "Vì hiện tượng khúc xạ ánh sáng qua các giọt nước trong không khí báo hiệu độ ẩm rất cao, thường liên quan đến áp thấp nhiệt đới và bão",
            "Vì cầu vồng có nhiều màu sắc",
            "Vì người ta thích nhìn cầu vồng"
          ],
          correct: 1,
          explanation: "Cầu vồng xuất hiện khi có sự khúc xạ và phản xạ ánh sáng qua hơi nước. Mống cụt ngắn báo hiệu sự xáo trộn khí quyển mạnh mẽ thường dẫn đến mưa bão."
        },
        {
          id: "tnxh_6_8",
          level: 4,
          question: "Vào mùa hè trời nắng chang chang, nếu phải đi ra ngoài đường, em cần chuẩn bị những đồ dùng gì?",
          options: [
            "Đội mũ nón rộng vành, mặc áo chống nắng, đeo kính râm và mang theo chai nước lọc",
            "Chạy đầu trần ngoài trời nắng gắt",
            "Uống liên tục thật nhiều nước ngọt có ga",
            "Không cần che chắn gì"
          ],
          correct: 0,
          explanation: "Đội mũ nón rộng vành và mặc áo dài tay chống nắng ngăn ngừa say nắng, bỏng rát da và mất nước khi nhiệt độ môi trường lên cao."
        }
      ]
    }
  ]
};
