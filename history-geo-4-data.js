/**
 * history-geo-4-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Lịch Sử & Địa Lý Lớp 4
 * Chuẩn Chương trình Giáo dục phổ thông (GDPT) 2018
 * (Kết nối tri thức, Chân trời sáng tạo, Cánh diều)
 * Biên soạn công phu, phân hóa 4 cấp độ nhận thức & lời giải chi tiết.
 */

window.HISTORY_GEO4_DATA = {
  topics: [
    {
      id: "phuong_tien_hoc_tap",
      name: "Chủ Đề 1: Phương Tiện Học Tập Lịch Sử & Địa Lý",
      icon: "🧭",
      desc: "Làm quen bản đồ, lược đồ địa lý, tranh ảnh, hiện vật lịch sử và trục thời gian (TCN, SCN, cách tính thế kỉ).",
      theory: {
        highlights: [
          {
            icon: "🗺️",
            title: "Các yếu tố cơ bản của Bản đồ",
            content: "• <strong>Tên bản đồ:</strong> Cho biết nội dung và khu vực địa lý thể hiện trên bản đồ.<br/>• <strong>Phương hướng:</strong> Quy ước phía <em>trên</em> là hướng Bắc, phía <em>dưới</em> là hướng Nam, bên <em>phải</em> là hướng Đông, bên <em>trái</em> là hướng Tây.<br/>• <strong>Tỉ lệ bản đồ:</strong> Cho biết mức độ thu nhỏ khoảng cách trên bản đồ so với khoảng cách thực tế trên thực địa (ví dụ 1 : 100 000 tức 1 cm trên bản đồ bằng 100 000 cm = 1 km ngoài đời).<br/>• <strong>Bảng chú giải:</strong> Giải thích ý nghĩa của màu sắc, đường nét và các ký hiệu quy ước (ngôi sao đỏ: Thủ đô, chấm tròn: đô thị, nét xanh: sông ngòi...)."
          },
          {
            icon: "📜",
            title: "Lược đồ, Tranh ảnh & Hiện vật lịch sử",
            content: "• <strong>Lược đồ:</strong> Là hình vẽ thu nhỏ tương đối một khu vực, tập trung thể hiện một chủ đề cụ thể (như lược đồ trận đánh Bạch Đằng, lược đồ địa hình).<br/>• <strong>Tranh ảnh lịch sử:</strong> Tái hiện chân thực chân dung nhân vật, quang cảnh sự kiện hoặc đời sống xã hội trong quá khứ.<br/>• <strong>Hiện vật lịch sử:</strong> Những đồ vật do con người xưa chế tác còn lưu giữ đến ngày nay (như trống đồng Đông Sơn, mũi tên đồng Cổ Loa, cọc gỗ Bạch Đằng) là bằng chứng xác thực giúp chúng ta hiểu rõ cuộc sống của tổ tiên."
          },
          {
            icon: "⏱️",
            title: "Trục thời gian lịch sử & Công nguyên",
            content: "• <strong>Trục thời gian:</strong> Là đường thẳng nằm ngang có mũi tên hướng từ trái sang phải, biểu diễn chuỗi các sự kiện lịch sử theo thứ tự trước sau.<br/>• <strong>Công nguyên:</strong> Lấy năm Chúa Giê-su ra đời làm mốc khởi đầu (năm 1 Công nguyên).<br/>• <strong>Trước Công nguyên (TCN):</strong> Thời gian trước năm 1, đếm lùi dần theo thời gian (ví dụ: năm 179 TCN xảy ra trước năm 40 TCN).<br/>• <strong>Sau Công nguyên (SCN hoặc Công nguyên):</strong> Thời gian từ năm 1 trở đi, tính tiến dần đến ngày nay."
          },
          {
            icon: "💡",
            title: "Mẹo tính Thế kỉ siêu nhanh & chính xác",
            content: "• <strong>Quy tắc 1 thế kỉ = 100 năm.</strong> Thế kỉ được viết bằng chữ số La Mã (I, II, III... X, XI... XX, XXI).<br/>• <em>Trường hợp 1 (Năm tận cùng bằng 00):</em> Bỏ hai số 0 ở cuối, số còn lại chính là thế kỉ. Ví dụ: Năm 100 là thế kỉ I; năm 1000 là thế kỉ X; năm 2000 là thế kỉ XX.<br/>• <em>Trường hợp 2 (Năm không tận cùng bằng 00):</em> Bỏ hai chữ số cuối cùng, lấy các chữ số còn lại <strong>cộng thêm 1</strong>.<br/>  - Năm 938 (bỏ 38, còn 9): 9 + 1 = 10 ➔ <strong>Thế kỉ X</strong>.<br/>  - Năm 1010 (bỏ 10, còn 10): 10 + 1 = 11 ➔ <strong>Thế kỉ XI</strong>.<br/>  - Năm 1954 (bỏ 54, còn 19): 19 + 1 = 20 ➔ <strong>Thế kỉ XX</strong>.<br/>  - Năm 2026 (bỏ 26, còn 20): 20 + 1 = 21 ➔ <strong>Thế kỉ XXI</strong>."
          }
        ]
      },
      questions: [
        {
          id: "hg4_1_1",
          level: 1,
          question: "Yếu tố nào trên bản đồ giúp em biết kích thước trên bản đồ đã được thu nhỏ bao nhiêu lần so với kích thước thực tế ngoài thực địa?",
          options: [
            "Tỉ lệ bản đồ",
            "Tên của bản đồ",
            "Bảng chú giải",
            "Màu sắc đường biên giới"
          ],
          correct: 0,
          explanation: "Tỉ lệ bản đồ chỉ rõ mức độ thu nhỏ khoảng cách được vẽ trên bản đồ so với khoảng cách thực tế trên mặt đất."
        },
        {
          id: "hg4_1_2",
          level: 1,
          question: "Theo quy ước lịch sử, một thế kỉ gồm có bao nhiêu năm?",
          options: ["10 năm", "50 năm", "100 năm", "1000 năm"],
          correct: 2,
          explanation: "Một thế kỉ gồm tròn 100 năm. Ví dụ: Thế kỉ I bắt đầu từ năm 1 đến hết năm 100."
        },
        {
          id: "hg4_1_3",
          level: 2,
          question: "Năm 938, Ngô Quyền chỉ huy nhân dân đánh tan quân Nam Hán trên sông Bạch Đằng. Sự kiện lịch sử này diễn ra vào thế kỉ thứ mấy?",
          options: ["Thế kỉ IX", "Thế kỉ X", "Thế kỉ XI", "Thế kỉ VIII"],
          correct: 1,
          explanation: "Năm 938 có chữ số hàng trăm là 9 (không tròn trăm). Ta lấy 9 + 1 = 10, tức là thuộc Thế kỉ X (thế kỉ thứ mười)."
        },
        {
          id: "hg4_1_4",
          level: 2,
          question: "Mùa thu năm 1010, vua Lý Thái Tổ quyết định dời đô từ Hoa Lư về thành Đại La và đổi tên là Thăng Long. Năm 1010 thuộc thế kỉ nào?",
          options: ["Thế kỉ X", "Thế kỉ XI", "Thế kỉ XII", "Thế kỉ IX"],
          correct: 1,
          explanation: "Năm 1010 bỏ hai chữ số cuối (10) còn 10. Ta lấy 10 + 1 = 11, tức là Thế kỉ XI."
        },
        {
          id: "hg4_1_5",
          level: 3,
          question: "Trên một bản đồ có tỉ lệ 1 : 100 000, khoảng cách đo được giữa hai điểm A và B là 5 cm. Hỏi khoảng cách thực tế giữa hai địa điểm đó ngoài đời là bao nhiêu?",
          options: ["500 mét", "5 ki-lô-mét (5 km)", "50 ki-lô-mét (50 km)", "500 ki-lô-mét (500 km)"],
          correct: 1,
          explanation: "Khoảng cách thực tế = 5 cm × 100 000 = 500 000 cm. Đổi: 500 000 cm = 5 000 m = 5 km."
        },
        {
          id: "hg4_1_6",
          level: 3,
          question: "Trống đồng Đông Sơn và hàng vạn mũi tên đồng Cổ Loa được các nhà khảo cổ tìm thấy dưới lòng đất thuộc loại tư liệu lịch sử nào sau đây?",
          options: [
            "Tư liệu truyền miệng (câu chuyện dân gian)",
            "Tư liệu chữ viết (sách sử ghi chép)",
            "Tư liệu hiện vật (đồ vật xưa còn lưu lại)",
            "Tư liệu truyền hình mô phỏng"
          ],
          correct: 2,
          explanation: "Hiện vật lịch sử là những di vật, đồ vật do con người thời kỳ trước làm ra và còn lưu giữ lại cho đến ngày nay."
        },
        {
          id: "hg4_1_7",
          level: 4,
          question: "Năm 2026 hiện nay thuộc thế kỉ thứ mấy và thiên niên kỉ thứ mấy?",
          options: [
            "Thế kỉ XX và thiên niên kỉ thứ 2",
            "Thế kỉ XXI và thiên niên kỉ thứ 3",
            "Thế kỉ XXI và thiên niên kỉ thứ 2",
            "Thế kỉ XXII và thiên niên kỉ thứ 3"
          ],
          correct: 1,
          explanation: "Năm 2026: Lấy 20 + 1 = 21 (Thế kỉ XXI). Thiên niên kỉ gồm 1000 năm: Năm 2026 nằm trong khoảng từ 2001 đến 3000 nên thuộc Thiên niên kỉ thứ 3."
        },
        {
          id: "hg4_1_8",
          level: 4,
          question: "Khi đọc một bản đồ lịch sử trận đánh, để hiểu rõ diễn biến các mũi tiến công của quân ta và đường rút chạy của quân giặc, em cần quan sát kỹ bộ phận nào nhất?",
          options: [
            "Khung viền trang trí của bản đồ",
            "Bảng chú giải ký hiệu mũi tên và các đường hành quân",
            "Năm xuất bản của tấm bản đồ",
            "Kích thước chiều dài và chiều rộng của trang sách"
          ],
          correct: 1,
          explanation: "Bảng chú giải giải thích màu sắc, mũi tên quy ước (mũi tên đỏ là hướng tấn công của quân ta, mũi tên đen/đứt đoạn là hướng rút lui của địch...)."
        }
      ]
    },

    {
      id: "trung_du_mien_nui_bac_bo",
      name: "Chủ Đề 2: Thiên Nhiên & Lịch Sử Vùng Trung Du & Miền Núi Bắc Bộ",
      icon: "🏔️",
      desc: "Dãy Hoàng Liên Sơn, Phan-xi-păng, ruộng bậc thang, Đền Hùng giỗ Tổ, chiến thắng Bạch Đằng & chiến dịch Điện Biên Phủ.",
      theory: {
        highlights: [
          {
            icon: "🏔️",
            title: "Thiên nhiên Hoàng Liên Sơn & Vùng đồi Trung du",
            content: "• <strong>Dãy Hoàng Liên Sơn:</strong> Dãy núi cao đồ sộ nhất Việt Nam, dài khoảng 180 km, có nhiều đỉnh cao trên 2000m.<br/>• <strong>Đỉnh Phan-xi-păng (Fansipan):</strong> Cao 3.143m, là đỉnh núi cao nhất nước ta và được mệnh danh là <em>'Nóc nhà Đông Dương'</em>.<br/>• <strong>Vùng đồi trung du:</strong> Nằm chuyển tiếp giữa miền núi và đồng bằng, có những đồi hình bát úp thoải sườn, là xứ sở của những đồi chè xanh mướt (Thái Nguyên, Phú Thọ) và cây ăn quả (vải thiều Bắc Giang, cam mận Sơn La)."
          },
          {
            icon: "🌾",
            title: "Ruộng bậc thang & Đời sống đồng bào",
            content: "• <strong>Ruộng bậc thang:</strong> Do địa hình sườn núi dốc, đồng bào các dân tộc (Mông, Dao, Tày, Nùng...) đã san sườn núi thành từng bậc phẳng để giữ nước mưa và phù sa cấy lúa nước. Nổi tiếng nhất là Mù Cang Chải (Yên Bái) và Hoàng Su Phì (Hà Giang).<br/>• <strong>Nhà sàn:</strong> Làm bằng gỗ, tre nứa gác cao hơn mặt đất, giúp tránh ẩm ướt, thú dữ và côn trùng độc hại.<br/>• <strong>Lễ hội truyền thống:</strong> Hội Lồng Tồng (xuống đồng), chợ phiên vùng cao rực rỡ sắc màu thổ cẩm."
          },
          {
            icon: "👑",
            title: "Khu di tích Đền Hùng & Lễ Giỗ Tổ",
            content: "• <strong>Vị trí:</strong> Tọa lạc trên núi Nghĩa Lĩnh, thành phố Việt Trì, tỉnh Phú Thọ - vùng đất kinh đô Phong Châu của nhà nước Văn Lang thuở xưa.<br/>• <strong>Ngày Giỗ Tổ Hùng Vương:</strong> Tổ chức vào ngày <strong>mùng 10 tháng 3 âm lịch</strong> hàng năm để tưởng nhớ công ơn 18 đời vua Hùng đã có công dựng nước.<br/>• Câu ca dao thiêng liêng: <em>'Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba'</em>."
          },
          {
            icon: "⚔️",
            title: "Mốc son Bạch Đằng giang & Điện Biên Phủ",
            content: "• <strong>Chiến thắng Bạch Đằng năm 938:</strong> Ngô Quyền lợi dụng hiện tượng thủy triều lên xuống, cắm cọc gỗ đầu bịt sắt dưới lòng sông Bạch Đằng, nhử thuyền giặc vào bãi cọc lúc triều rút để tiêu diệt quân Nam Hán, chấm dứt hơn 1000 năm Bắc thuộc.<br/>• <strong>Chiến thắng Điện Biên Phủ năm 1954:</strong> Sau 56 ngày đêm 'khoét núi, ngủ hầm, mưa dầm, cơm vắt', quân và dân ta đã tiêu diệt hoàn toàn tập đoàn cứ điểm Điện Biên Phủ, lập nên kỳ tích <em>'lừng lẫy năm châu, chấn động địa cầu'</em>."
          }
        ]
      },
      questions: [
        {
          id: "hg4_2_1",
          level: 1,
          question: "Đỉnh núi cao nhất Việt Nam (3.143 m) và được mệnh danh là 'Nóc nhà Đông Dương' thuộc dãy Hoàng Liên Sơn có tên là gì?",
          options: ["Đỉnh Phan-xi-păng (Fansipan)", "Đỉnh Mẫu Sơn", "Đỉnh Tây Côn Lĩnh", "Đỉnh Bạch Mộc Lương Tử"],
          correct: 0,
          explanation: "Phan-xi-păng cao 3.143 mét thuộc dãy Hoàng Liên Sơn, là ngọn núi cao nhất của 3 nước Đông Dương (Việt Nam, Lào, Cam-pu-chia)."
        },
        {
          id: "hg4_2_2",
          level: 1,
          question: "Ngày Quốc lễ Giỗ Tổ Hùng Vương được tổ chức trọng thể tại tỉnh Phú Thọ vào ngày nào hàng năm?",
          options: [
            "Mùng 1 tháng Giêng âm lịch",
            "Mùng 10 tháng 3 âm lịch",
            "Ngày 2 tháng 9 dương lịch",
            "Ngày 15 tháng 8 âm lịch"
          ],
          correct: 1,
          explanation: "Lễ Giỗ Tổ Hùng Vương diễn ra vào ngày mùng 10 tháng 3 âm lịch hàng năm tại Khu di tích lịch sử Đền Hùng (Phú Thọ)."
        },
        {
          id: "hg4_2_3",
          level: 2,
          question: "Vì sao đồng bào các dân tộc vùng núi cao Tây Bắc lại sáng tạo ra hình thức canh tác 'ruộng bậc thang' trên các sườn đồi dốc?",
          options: [
            "Để tạo cảnh quan đẹp cho khách du lịch đến chụp ảnh",
            "Để giữ lại nước mưa, chống xói mòn đất và lấy chỗ cấy lúa nước",
            "Vì sườn đồi núi không có đất màu mỡ",
            "Để ngăn chặn gia súc ăn lúa"
          ],
          correct: 1,
          explanation: "Ruộng bậc thang giúp giữ nước mưa không bị trôi tuột xuống vực, ngăn đất xói mòn và tạo mặt bằng để đồng bào gieo cấy lúa nước."
        },
        {
          id: "hg4_2_4",
          level: 2,
          question: "Kế sách quân sự độc đáo và sáng tạo nhất của Ngô Quyền trong chiến thắng Bạch Đằng năm 938 là gì?",
          options: [
            "Đóng cọc gỗ vót nhọn đầu dưới lòng sông và lợi dụng thủy triều lên xuống",
            "Dùng voi chiến tấn công bất ngờ trong đêm tối",
            "Đắp đập chặn dòng nước rồi phá đập cho nước lũ cuốn trôi thuyền giặc",
            "Dùng tên lửa bắn cháy toàn bộ đoàn thuyền giặc từ xa"
          ],
          correct: 0,
          explanation: "Ngô Quyền đã cho đẽo cọc gỗ nhọn cắm ngầm dưới lòng sông Bạch Đằng, nhử giặc vào khi triều dâng rồi phản công khi triều rút, thuyền giặc va vào cọc bị đắm vỡ."
        },
        {
          id: "hg4_2_5",
          level: 3,
          question: "Chiến dịch lịch sử nào của quân và dân ta năm 1954 diễn ra tại vùng rừng núi Tây Bắc đã kết thúc thắng lợi cuộc kháng chiến chống Pháp, được ví là 'lừng lẫy năm châu, chấn động địa cầu'?",
          options: [
            "Chiến dịch Việt Bắc thu - đông 1947",
            "Chiến dịch Biên giới thu - đông 1950",
            "Chiến dịch Điện Biên Phủ 1954",
            "Chiến dịch Hồ Chí Minh 1975"
          ],
          correct: 2,
          explanation: "Chiến dịch Điện Biên Phủ kết thúc thắng lợi ngày 7/5/1954 sau 56 ngày đêm chiến đấu ngoan cường, đánh bại tập đoàn cứ điểm mạnh nhất của thực dân Pháp."
        },
        {
          id: "hg4_2_6",
          level: 3,
          question: "Địa hình vùng trung du Bắc Bộ với những đồi thoải dạng 'bát úp' rất thuận lợi nhất để trồng loại cây nào sau đây?",
          options: [
            "Cây cao su và cà phê Robusta",
            "Cây chè (trà) và các loại cây ăn quả (vải thiều, cam, bưởi)",
            "Cây lúa nước chuyên canh 3 vụ quanh năm",
            "Cây dừa xiêm và hồ tiêu"
          ],
          correct: 1,
          explanation: "Vùng trung du Bắc Bộ (Phú Thọ, Thái Nguyên, Bắc Giang...) nổi tiếng khắp cả nước với các đồi chè xanh bạt ngàn và vải thiều, bưởi Đoan Hùng."
        },
        {
          id: "hg4_2_7",
          level: 4,
          question: "Vào mùa mưa bão, vùng Trung du và Miền núi Bắc Bộ thường hay xảy ra lũ quét, sạt lở đất đá gây thiệt hại lớn. Biện pháp bền vững và hiệu quả nhất để phòng chống thiên tai này là gì?",
          options: [
            "Di dời toàn bộ người dân miền núi xuống sinh sống ở đồng bằng",
            "Xây dựng tường bao bằng bê tông bao quanh tất cả các ngọn núi",
            "Bảo vệ rừng tự nhiên và tích cực trồng rừng phòng hộ đầu nguồn",
            "Chặt hết cây to trên sườn núi để tránh cây bị đổ gãy"
          ],
          correct: 2,
          explanation: "Rễ cây rừng giữ đất, tán lá rừng cản bớt sức nước mưa rơi trực tiếp xuống mặt đất, giúp giữ nước ngầm và hạn chế tối đa nguy cơ lũ ống, lũ quét, sạt lở đất."
        },
        {
          id: "hg4_2_8",
          level: 4,
          question: "Bác Hồ từng căn dặn các chiến sĩ tại Đền Hùng (năm 1954): <em>'Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước'</em>. Lời dạy này nhắc nhở chúng ta điều gì?",
          options: [
            "Phải luôn nhớ ơn tổ tiên và có trách nhiệm gìn giữ, bảo vệ nền độc lập tự do của Tổ quốc",
            "Chỉ cần đi thăm Đền Hùng vào tháng 3 âm lịch là đủ",
            "Phải xây dựng thêm nhiều đền thờ trên các ngọn núi cao",
            "Chỉ các chú bộ đội mới có nhiệm vụ bảo vệ đất nước"
          ],
          correct: 0,
          explanation: "Lời dạy bất hủ của Bác Hồ nhắc nhở mọi thế hệ người Việt Nam về lòng biết ơn các Vua Hùng và nghĩa vụ thiêng liêng cùng chung tay bảo vệ, xây dựng non sông gấm vóc."
        }
      ]
    },

    {
      id: "dong_bang_bac_bo",
      name: "Chủ Đề 3: Thiên Nhiên & Lịch Sử Vùng Đồng Bằng Bắc Bộ",
      icon: "🌾",
      desc: "Đồng bằng sông Hồng, hệ thống đê ngăn lũ, Thăng Long - Hà Nội nghìn năm văn hiến, Văn Miếu - Quốc Tử Giám.",
      theory: {
        highlights: [
          {
            icon: "🌾",
            title: "Thiên nhiên Đồng bằng sông Hồng",
            content: "• <strong>Vị trí & Hình dạng:</strong> Đồng bằng có dạng hình tam giác với đỉnh ở thành phố Việt Trì, cạnh đáy là đường bờ biển vịnh Bắc Bộ.<br/>• <strong>Sự hình thành:</strong> Do phù sa màu mỡ của hai hệ thống sông lớn là <strong>sông Hồng</strong> và <strong>sông Thái Bình</strong> bồi đắp qua hàng ngàn năm.<br/>• <strong>Quy mô:</strong> Là vùng đồng bằng châu thổ rộng lớn thứ hai ở nước ta (sau Đồng bằng sông Cửu Long)."
          },
          {
            icon: "🧱",
            title: "Kỳ tích Đê sông Hồng ngăn lũ",
            content: "• <strong>Lịch sử đắp đê:</strong> Từ xa xưa, để ngăn chặn nước sông dâng cao vào mùa mưa lũ làm ngập làng mạc, tổ tiên ta đã kiên trì đắp nên hệ thống đê dài hàng nghìn kilômét dọc theo đôi bờ sông Hồng.<br/>• <strong>Đặc điểm đất đai:</strong><br/>  - <em>Vùng đất ngoài đê:</em> Hàng năm vẫn được nước lũ bồi đắp thêm lớp phù sa mới màu mỡ.<br/>  - <em>Vùng đất trong đê:</em> Không còn được phù sa bồi đắp tự nhiên, hình thành nên các ô trũng thường phải dùng phân bón bổ sung."
          },
          {
            icon: "🐉",
            title: "Thăng Long - Hà Nội nghìn năm văn hiến",
            content: "• <strong>Chiếu dời đô (1010):</strong> Mùa thu năm Canh Tuất (1010), vua Lý Thái Tổ (Lý Công Uẩn) nhận thấy thành Hoa Lư chật hẹp nên quyết định dời kinh đô về thành Đại La. Thấy hình ảnh rồng vàng bay lên, vua đổi tên thành là <strong>Thăng Long</strong> ('rồng bay lên').<br/>• <strong>Thủ đô Hà Nội ngày nay:</strong> Trải qua hơn 1000 năm lịch sử, Thăng Long xưa nay là Thủ đô Hà Nội - trung tâm chính trị, văn hóa, kinh tế và khoa học đầu não của cả nước."
          },
          {
            icon: "🏛️",
            title: "Văn Miếu - Quốc Tử Giám & 82 Bia Tiến sĩ",
            content: "• <strong>Văn Miếu (1070):</strong> Được vua Lý Thánh Tông cho xây dựng để thờ Khổng Tử và tôn vinh đạo học.<br/>• <strong>Quốc Tử Giám (1076):</strong> Được vua Lý Nhân Tông cho lập nên ngay sau Văn Miếu, được xem là <strong>trường đại học đầu tiên</strong> của Việt Nam.<br/>• <strong>82 tấm Bia Tiến sĩ:</strong> Khắc tên các bậc hiền tài đỗ đạt qua các khoa thi triều Lê - Mạc, đặt trên lưng những cụ rùa đá uy nghiêm, là Di sản tư liệu thế giới được UNESCO công nhận."
          }
        ]
      },
      questions: [
        {
          id: "hg4_3_1",
          level: 1,
          question: "Đồng bằng Bắc Bộ được bồi đắp bởi phù sa màu mỡ của hai hệ thống sông lớn nào sau đây?",
          options: [
            "Sông Hồng và sông Thái Bình",
            "Sông Tiền và sông Hậu",
            "Sông Đồng Nai và sông Sài Gòn",
            "Sông Mã và sông Lam"
          ],
          correct: 0,
          explanation: "Đồng bằng Bắc Bộ (Đồng bằng sông Hồng) được bồi đắp chủ yếu từ phù sa của sông Hồng và sông Thái Bình qua hàng ngàn năm."
        },
        {
          id: "hg4_3_2",
          level: 1,
          question: "Mùa thu năm 1010, vị vua nào đã ban hành 'Chiếu dời đô' chuyển kinh đô từ Hoa Lư về thành Đại La và đặt tên là Thăng Long?",
          options: ["Vua Đinh Tiên Hoàng", "Vua Lý Thái Tổ (Lý Công Uẩn)", "Vua Lê Hoàn", "Vua Trần Nhân Tông"],
          correct: 1,
          explanation: "Vua Lý Thái Tổ là người sáng lập triều Lý và có công dời đô về Thăng Long năm 1010."
        },
        {
          id: "hg4_3_3",
          level: 2,
          question: "Công trình lịch sử nào được xây dựng từ năm 1076 thời nhà Lý và được coi là trường đại học đầu tiên của nước ta?",
          options: ["Quốc Tử Giám", "Chùa Một Cột", "Kinh thành Thăng Long", "Hoàng thành Thăng Long"],
          correct: 0,
          explanation: "Năm 1076, vua Lý Nhân Tông cho xây dựng Quốc Tử Giám bên cạnh Văn Miếu để dạy học cho con em hoàng gia và người tài trong nước, trở thành trường đại học đầu tiên của nước ta."
        },
        {
          id: "hg4_3_4",
          level: 2,
          question: "Tác dụng to lớn nhất của hệ thống đê kiên cố dọc theo đôi bờ sông Hồng là gì?",
          options: [
            "Làm đường cho xe cộ đi lại ngắm cảnh sông nước",
            "Ngăn chặn nước lũ tràn vào đồng ruộng, bảo vệ mùa màng và tính mạng của nhân dân",
            "Để nuôi thả các loài cá nước ngọt",
            "Để làm đẹp cảnh quan làng quê"
          ],
          correct: 1,
          explanation: "Đê sông Hồng là công trình thủy lợi đồ sộ hàng nghìn năm của cha ông ta nhằm ngăn nước lũ sông Hồng dâng cao tàn phá làng mạc vào mùa mưa."
        },
        {
          id: "hg4_3_5",
          level: 3,
          question: "Tên gọi 'Thăng Long' do vua Lý Thái Tổ đặt cho kinh đô mới của đất nước mang ý nghĩa gì?",
          options: [
            "Rồng đang cuộn mình ngủ yên",
            "Rồng vàng bay lên, tượng trưng cho khí thế vươn lên mạnh mẽ của đất nước",
            "Dòng sông rộng lớn có cá chép hóa rồng",
            "Ngôi thành lũy kiên cố bằng đá"
          ],
          correct: 1,
          explanation: "Thăng Long nghĩa là 'Rồng bay lên', thể hiện ước vọng về một đất nước độc lập, hưng thịnh và ngày càng phát triển phồn vinh."
        },
        {
          id: "hg4_3_6",
          level: 3,
          question: "Điểm khác biệt rõ rệt nhất giữa vùng đất ngoài đê và vùng đất trong đê ở Đồng bằng sông Hồng hiện nay là gì?",
          options: [
            "Đất ngoài đê hàng năm vẫn được phù sa sông Hồng bồi đắp màu mỡ khi có lũ, còn đất trong đê không được bồi đắp",
            "Đất ngoài đê khô cằn toàn sỏi đá",
            "Đất trong đê chỉ để trồng rừng ngập mặn",
            "Đất ngoài đê không ai dám trồng trọt bất kỳ cây gì"
          ],
          correct: 0,
          explanation: "Do có đê ngăn nước lũ nên vùng đất bên trong đê không còn nhận được phù sa sông bồi đắp hàng năm như vùng đất ngoài bãi đê."
        },
        {
          id: "hg4_3_7",
          level: 4,
          question: "Trong Văn Miếu - Quốc Tử Giám, việc các triều đại phong kiến cho dựng 82 tấm Bia Tiến sĩ đặt trên lưng rùa đá thể hiện truyền thống đạo lý tốt đẹp nào của dân tộc ta?",
          options: [
            "Truyền thống yêu thích điêu khắc đá mỹ nghệ",
            "Truyền thống hiếu học, tôn sư trọng đạo và trân trọng hiền tài của đất nước",
            "Truyền thống nuôi dưỡng các loài rùa quý hiếm",
            "Truyền thống ghi nhớ năm sinh của nhà vua"
          ],
          correct: 1,
          explanation: "Thân Nhân Trung từng viết trên bia tiến sĩ: 'Hiền tài là nguyên khí của quốc gia'. Khắc bia vinh danh tiến sĩ thể hiện sự trân trọng đạo học và người tài."
        },
        {
          id: "hg4_3_8",
          level: 4,
          question: "Làng gốm Bát Tràng (thuộc huyện Gia Lâm, Hà Nội) là làng nghề truyền thống nổi tiếng ven sông Hồng phát triển nhờ lợi thế tự nhiên nào?",
          options: [
            "Có nguồn đất sét trắng mịn, chất lượng cao và sông Hồng thuận tiện giao thương vận chuyển",
            "Có nguồn than đá dồi dào khai thác tại chỗ",
            "Có nguồn gỗ rừng nguyên sinh bạt ngàn",
            "Nằm cạnh bờ biển có cát trắng tinh khiết"
          ],
          correct: 0,
          explanation: "Làng Bát Tràng có nguồn đất sét dẻo đặc trưng rất tốt để làm gốm và nằm ngay bên bờ sông Hồng, giúp việc vận chuyển gốm sứ đi khắp nơi rất thuận tiện."
        }
      ]
    },

    {
      id: "duyen_hai_mien_trung",
      name: "Chủ Đề 4: Thiên Nhiên & Lịch Sử Vùng Duyên Hải Miền Trung",
      icon: "🏰",
      desc: "Dải đất hẹp ngang, cồn cát biển, Cố đô Huế, Phố cổ Hội An và Khởi nghĩa Lam Sơn hào hùng.",
      theory: {
        highlights: [
          {
            icon: "🌊",
            title: "Thiên nhiên & Địa hình Duyên hải miền Trung",
            content: "• <strong>Địa hình hẹp ngang:</strong> Dải đất miền Trung có lưng tựa vào dãy Trường Sơn hùng vĩ, mặt hướng ra Biển Đông mênh mông; các nhánh núi đâm ngang ra sát biển chia cắt dải đồng bằng thành nhiều vùng nhỏ hẹp.<br/>• <strong>Đặc điểm sông ngòi:</strong> Các con sông thường ngắn, dốc, vào mùa mưa lũ nước dâng nhanh và chảy xiết.<br/>• <strong>Cồn cát ven biển:</strong> Thường có những cồn cát cao, hiện tượng cát bay, cát lấn ảnh hưởng ruộng đồng nên nhân dân thường trồng các rặng phi lao chắn gió cát."
          },
          {
            icon: "🧂",
            title: "Kinh tế biển & Nghề làm Muối",
            content: "• <strong>Nắng gió & Làm muối:</strong> Khí hậu miền Trung nắng nhiều, nhiệt độ cao, độ mặn nước biển thích hợp cho nghề làm muối hạt (nổi tiếng nhất là đồng muối Sa Huỳnh ở Quảng Ngãi, Cà Ná ở Ninh Thuận).<br/>• <strong>Bãi tắm danh tiếng:</strong> Bờ biển dài với hàng loạt bãi tắm đẹp thu hút du khách trong và ngoài nước như Sầm Sơn (Thanh Hóa), Cửa Lò (Nghệ An), Lăng Cô (Thừa Thiên Huế), Mỹ Khê (Đà Nẵng), Nha Trang (Khánh Hòa)..."
          },
          {
            icon: "🏰",
            title: "Quần thể Di tích Cố đô Huế",
            content: "• <strong>Kinh đô nhà Nguyễn:</strong> Từ năm 1802 đến 1945, Huế là kinh đô của triều đại phong kiến nhà Nguyễn - triều đại cuối cùng trong lịch sử Việt Nam.<br/>• <strong>Kiến trúc & Cảnh quan:</strong> Quần thể di tích Cố đô Huế gồm Hoàng thành, Tử Cấm Thành, lăng tẩm các vua, chùa Thiên Mụ soi bóng bên dòng sông Hương thơ mộng và núi Ngự Bình.<br/>• <strong>Di sản thế giới:</strong> Quần thể di tích Cố đô Huế và <strong>Nhã nhạc cung đình Huế</strong> đều được UNESCO công nhận là Di sản văn hóa thế giới."
          },
          {
            icon: "🏮",
            title: "Phố cổ Hội An & Khởi nghĩa Lam Sơn",
            content: "• <strong>Phố cổ Hội An (Quảng Nam):</strong> Thế kỉ XVII - XVIII từng là thương cảng quốc tế sầm uất bậc nhất Đông Nam Á. Ngày nay vẫn lưu giữ vẹn nguyên kiến trúc nhà cổ mái ngói rêu phong, Chùa Cầu cổ kính và lễ hội đèn lồng lung linh.<br/>• <strong>Khởi nghĩa Lam Sơn (1418 - 1427):</strong> Do người anh hùng áo vải Lê Lợi dấy binh tại Lam Sơn (Thanh Hóa), cùng quân sư lỗi lạc Nguyễn Trãi kiên trì kháng chiến 10 năm, đánh tan 15 vạn quân Minh xâm lược, giành lại giang sơn."
          }
        ]
      },
      questions: [
        {
          id: "hg4_4_1",
          level: 1,
          question: "Quần thể di tích lịch sử Cố đô Huế từng là kinh đô của triều đại phong kiến nào ở nước ta suốt 143 năm (1802 - 1945)?",
          options: ["Triều đại nhà Nguyễn", "Triều đại nhà Lý", "Triều đại nhà Trần", "Triều đại nhà Hậu Lê"],
          correct: 0,
          explanation: "Huế từng là kinh đô của triều đại nhà Nguyễn từ thời vua Gia Long (1802) đến khi vua Bảo Đại thoái vị (1945)."
        },
        {
          id: "hg4_4_2",
          level: 1,
          question: "Đô thị cổ kính với những ngôi nhà mái ngói âm dương phủ rêu phong, tường quét vôi vàng và chiếc Chùa Cầu độc đáo ở miền Trung thuộc tỉnh nào?",
          options: ["Tỉnh Thừa Thiên Huế", "Tỉnh Quảng Nam (Hội An)", "Tỉnh Bình Định", "Tỉnh Quảng Ngãi"],
          correct: 1,
          explanation: "Phố cổ Hội An nằm bên bờ sông Hoài, thuộc tỉnh Quảng Nam, là di sản văn hóa thế giới nổi tiếng."
        },
        {
          id: "hg4_4_3",
          level: 2,
          question: "Duyên hải miền Trung có điều kiện tự nhiên nào rất thuận lợi để người dân phát triển nghề làm muối hạt từ nước biển?",
          options: [
            "Nhiệt độ cao, nhiều nắng gắt, số giờ nắng trong năm lớn và có gió biển giúp nước bốc hơi nhanh",
            "Mưa quanh năm làm nước biển luôn mát lạnh",
            "Có nhiều cánh rừng ngập mặn rậm rạp",
            "Biển miền Trung không hề có sóng"
          ],
          correct: 0,
          explanation: "Nghề làm muối cần nhiều nắng và gió để nước biển trên ruộng muối bốc hơi nhanh, để lại các hạt muối kết tinh trắng ngần."
        },
        {
          id: "hg4_4_4",
          level: 2,
          question: "Vị anh hùng dân tộc nào đã dấy cờ dựng binh khởi nghĩa tại vùng Lam Sơn (Thanh Hóa) đánh tan quân xâm lược nhà Minh?",
          options: ["Lê Lợi (Bình Định Vương)", "Quang Trung (Nguyễn Huệ)", "Trần Hưng Đạo", "Ngô Quyền"],
          correct: 0,
          explanation: "Lê Lợi là người khởi xướng cuộc khởi nghĩa Lam Sơn (1418 - 1427) đánh đuổi giặc Minh xâm lược và lập ra triều Hậu Lê."
        },
        {
          id: "hg4_4_5",
          level: 3,
          question: "Vì sao các con sông ở vùng Duyên hải miền Trung thường ngắn, dốc và nước lũ dâng lên rất nhanh vào mùa mưa?",
          options: [
            "Vì địa hình miền Trung hẹp ngang, dãy Trường Sơn sát biển nên khoảng cách từ nguồn núi ra biển rất ngắn",
            "Vì miền Trung không hề có núi cao",
            "Vì các con sông ở đây đều được đào nhân tạo",
            "Vì sông miền Trung chảy ngược từ biển vào lục địa"
          ],
          correct: 0,
          explanation: "Do dải đất miền Trung hẹp ngang, núi đồi lan sát ra biển nên sông ngòi có độ dốc lớn, quãng đường chảy ngắn khiến nước lũ dâng nhanh và chảy xiết."
        },
        {
          id: "hg4_4_6",
          level: 3,
          question: "Loại hình âm nhạc cung đình truyền thống đặc sắc dưới triều Nguyễn được UNESCO vinh danh là Di sản văn hóa phi vật thể của nhân loại có tên là gì?",
          options: [
            "Hát Xoan Phú Thọ",
            "Nhã nhạc cung đình Huế",
            "Hát Quan họ Bắc Ninh",
            "Đờn ca tài tử Nam Bộ"
          ],
          correct: 1,
          explanation: "Nhã nhạc cung đình Huế là thể loại âm nhạc trang trọng của triều đình phong kiến nhà Nguyễn, được UNESCO công nhận năm 2003."
        },
        {
          id: "hg4_4_7",
          level: 4,
          question: "Để ngăn chặn hiện tượng cát bay, cát chảy lấn chiếm ruộng đồng và làng mạc ven biển miền Trung, biện pháp sinh học hữu hiệu nhất là gì?",
          options: [
            "Đào mương dẫn nước mặn vào làng",
            "Trồng các dải rừng chắn gió cát ven biển, chủ yếu là cây phi lao",
            "Xúc hết cát biển đổ đi nơi khác",
            "Dùng bạt nilon che phủ toàn bộ các cồn cát"
          ],
          correct: 1,
          explanation: "Rừng phi lao có rễ bám sâu, chịu được hạn và gió bão, giúp giữ cát không bay lấn vào làng mạc, ruộng vườn của nhân dân ven biển."
        },
        {
          id: "hg4_4_8",
          level: 4,
          question: "Danh nhân văn hóa thế giới nào đã kề vai sát cánh cùng Lê Lợi trong cuộc khởi nghĩa Lam Sơn và là tác giả của áng thiên cổ hùng văn 'Bình Ngô đại cáo'?",
          options: ["Nguyễn Trãi", "Chu Văn An", "Lê Văn Hưu", "Nguyễn Du"],
          correct: 0,
          explanation: "Nguyễn Trãi (hiệu Ức Trai) là quân sư lỗi lạc của Lê Lợi, soạn thảo 'Bình Ngô đại cáo' tổng kết thắng lợi huy hoàng của khởi nghĩa Lam Sơn."
        }
      ]
    },

    {
      id: "tay_nguyen",
      name: "Chủ Đề 5: Thiên Nhiên & Lịch Sử Vùng Tây Nguyên",
      icon: "🪵",
      desc: "Các cao nguyên xếp tầng đất bazan, cây công nghiệp lâu năm, Không gian văn hóa Cồng chiêng & Anh hùng Núp.",
      theory: {
        highlights: [
          {
            icon: "🌋",
            title: "Cao nguyên xếp tầng & Đất đỏ Bazan",
            content: "• <strong>Các cao nguyên xếp tầng:</strong> Địa hình Tây Nguyên đặc trưng bởi các bề mặt cao nguyên rộng lớn có độ cao khác nhau như cao nguyên Kon Tum, Pleiku, Đắk Lắk, Lâm Viên, Di Linh...<br/>• <strong>Đất đỏ bazan màu mỡ:</strong> Được hình thành từ dung nham núi lửa phun trào hàng triệu năm trước. Đất có màu đỏ tơi xốp, tầng đất dày, giữ nước tốt, rất thích hợp cho cây công nghiệp sinh trưởng.<br/>• <strong>Hai mùa mưa - khô:</strong> Mùa mưa (từ tháng 5 đến tháng 10) mưa nhiều; mùa khô (từ tháng 11 đến tháng 4 năm sau) nắng hạn kéo dài."
          },
          {
            icon: "☕",
            title: "Thủ phủ Cây công nghiệp & Thủy điện",
            content: "• <strong>Cây công nghiệp lâu năm:</strong> Tây Nguyên là vùng chuyên canh cây công nghiệp lớn nhất cả nước, nổi bật là <strong>cà phê</strong> (đặc biệt là cà phê Buôn Ma Thuột), <strong>hồ tiêu, cao su, chè</strong>.<br/>• <strong>Trữ năng thủy điện phong phú:</strong> Sông ngòi chảy qua các bậc địa hình cao nguyên tạo nên nhiều thác ghềnh hùng vĩ (thác Dray Nur, Dray Sap, thác Yaly), thuận lợi xây dựng các nhà máy thủy điện lớn như Yaly, Sê San, Buôn Kuốp."
          },
          {
            icon: "🛖",
            title: "Nhà Rông & Lễ hội buôn làng",
            content: "• <strong>Nhà Rông:</strong> Là ngôi nhà chung to lớn nhất buôn làng Tây Nguyên, mái nhà cao vút như mũi thuyền hoặc lưỡi rìu ngửa lên trời. Là nơi hội họp việc làng, tiếp khách quý, tổ chức các nghi lễ thiêng liêng.<br/>• <strong>Đời sống đồng bào:</strong> Các dân tộc Gia-rai, Ba-na, Ê-đê, Mơ-nông... sống chan hòa gắn bó với thiên nhiên núi rừng, giỏi nghề dệt thổ cẩm và thuần dưỡng voi (nổi tiếng nhất là Bản Đôn)."
          },
          {
            icon: "🔔",
            title: "Không gian Cồng chiêng & Anh hùng Núp",
            content: "• <strong>Cồng chiêng Tây Nguyên:</strong> Là nhạc cụ bằng hợp kim đồng, âm thanh ngân vang như tiếng sấm rền, tiếng suối reo. <em>Không gian văn hóa Cồng chiêng Tây Nguyên</em> đã được UNESCO công nhận là Kiệt tác di sản truyền khẩu và phi vật thể của nhân loại.<br/>• <strong>Anh hùng Núp (Đinh Núp):</strong> Người con ưu tú của dân tộc Ba-na ở làng Kông Hoa (Gia Lai), đã lãnh đạo dân làng đứng lên đánh giặc Pháp bằng cung nỏ, bẫy đá, bẫy chông, là biểu tượng bất khuất của Tây Nguyên."
          }
        ]
      },
      questions: [
        {
          id: "hg4_5_1",
          level: 1,
          question: "Đất đỏ màu mỡ ở vùng Tây Nguyên được hình thành từ loại đá nào do núi lửa phun trào từ xa xưa?",
          options: ["Đất đỏ ba-zan (Bazan)", "Đất cát pha biển", "Đất đá vôi trắng", "Đất sét xám"],
          correct: 0,
          explanation: "Đất bazan được hình thành do sự phong hóa của đá núi lửa bazan phun trào, là loại đất rất màu mỡ thích hợp cho các loại cây công nghiệp lâu năm."
        },
        {
          id: "hg4_5_2",
          level: 1,
          question: "Di sản văn hóa phi vật thể đặc sắc của đồng bào các dân tộc Tây Nguyên được UNESCO vinh danh là gì?",
          options: [
            "Hát Ca trù",
            "Không gian văn hóa Cồng chiêng Tây Nguyên",
            "Múa rối nước truyền thống",
            "Hát Then người Tày"
          ],
          correct: 1,
          explanation: "Không gian văn hóa Cồng chiêng Tây Nguyên được UNESCO công nhận là Kiệt tác di sản truyền khẩu và phi vật thể nhân loại năm 2005."
        },
        {
          id: "hg4_5_3",
          level: 2,
          question: "Ngôi nhà chung truyền thống có mái nhọn vươn cao sừng sững giữa buôn làng Tây Nguyên, dùng làm nơi hội họp cộng đồng được gọi là gì?",
          options: ["Nhà rông", "Nhà trình tường", "Nhà biệt thự", "Nhà lầu"],
          correct: 0,
          explanation: "Nhà rông là trái tim của buôn làng Tây Nguyên, nơi già làng họp bàn việc chung và tổ chức các lễ hội truyền thống."
        },
        {
          id: "hg4_5_4",
          level: 2,
          question: "Tây Nguyên là vùng đứng đầu cả nước ta về diện tích và sản lượng của loại cây công nghiệp nào sau đây?",
          options: ["Cây cà phê", "Cây lúa mì", "Cây dừa", "Cây củ cải đường"],
          correct: 0,
          explanation: "Tây Nguyên là thủ phủ cà phê của Việt Nam, đưa nước ta trở thành một trong những quốc gia xuất khẩu cà phê lớn nhất thế giới."
        },
        {
          id: "hg4_5_5",
          level: 3,
          question: "Người anh hùng dân tộc Ba-na ở làng Kông Hoa (Gia Lai) đã lãnh đạo dân làng dùng nỏ, bẫy đá đánh đuổi thực dân Pháp là ai?",
          options: ["Anh hùng Đinh Núp (Anh hùng Núp)", "Anh hùng La Văn Cầu", "Anh hùng Kim Đồng", "Anh hùng Bế Văn Đàn"],
          correct: 0,
          explanation: "Anh hùng Đinh Núp (thường gọi là Bác Núp) là tấm gương sáng ngời của đồng bào Tây Nguyên trong cuộc kháng chiến chống thực dân Pháp."
        },
        {
          id: "hg4_5_6",
          level: 3,
          question: "Khí hậu vùng Tây Nguyên trong một năm được chia làm hai mùa rõ rệt, đó là hai mùa nào?",
          options: [
            "Mùa xuân và mùa đông buốt giá",
            "Mùa mưa và mùa khô",
            "Mùa thu mát mẻ và mùa bão tuyết",
            "Mùa nắng và mùa lạnh"
          ],
          correct: 1,
          explanation: "Khí hậu Tây Nguyên mang tính chất cận xích đạo gồm 2 mùa phân hóa sâu sắc: mùa mưa (tháng 5-10) và mùa khô (tháng 11-4 năm sau)."
        },
        {
          id: "hg4_5_7",
          level: 4,
          question: "Vì sao các nhà máy thủy điện công suất lớn (như Yaly, Sê San) lại được xây dựng nhiều trên sông ngòi vùng Tây Nguyên?",
          options: [
            "Vì sông ngòi chảy qua các bậc địa hình cao nguyên dốc đứng tạo ra thác ghềnh có trữ năng thủy điện lớn",
            "Vì ở đây có rất nhiều than đá để đốt phát điện",
            "Vì sông ngòi Tây Nguyên quanh năm phẳng lặng như mặt hồ",
            "Vì người dân ở đây không có nhu cầu dùng điện"
          ],
          correct: 0,
          explanation: "Địa hình bậc thang phân tầng tạo cho các dòng sông Tây Nguyên độ dốc lớn, dòng nước chảy xiết qua các hẻm vực hiểm trở nên có tiềm năng thủy điện rất dồi dào."
        },
        {
          id: "hg4_5_8",
          level: 4,
          question: "Khó khăn lớn nhất về tự nhiên đối với hoạt động trồng trọt và đời sống của người dân Tây Nguyên vào mùa khô là gì?",
          options: [
            "Hiện tượng băng giá tuyết rơi dày",
            "Tình trạng thiếu nước tưới tiêu và sinh hoạt, nguy cơ hạn hán và cháy rừng",
            "Nước lũ ngập chìm toàn bộ các bản làng",
            "Sương muối bao phủ phá hủy hoàn toàn cây cối"
          ],
          correct: 1,
          explanation: "Vào mùa khô, nắng nóng kéo dài nhiều tháng không có mưa khiến mực nước sông suối hạ thấp, gây hạn hán nghiêm trọng và thiếu nước tưới cho cây cà phê, hồ tiêu."
        }
      ]
    },

    {
      id: "nam_bo",
      name: "Chủ Đề 6: Thiên Nhiên & Lịch Sử Vùng Nam Bộ",
      icon: "🛶",
      desc: "Đồng bằng sông Cửu Long sông nước, vựa lúa trái cây, Bến Nhà Rồng nơi Bác Hồ ra đi tìm đường cứu nước & Địa đạo Củ Chi.",
      theory: {
        highlights: [
          {
            icon: "🌾",
            title: "Thiên nhiên Vùng Nam Bộ & Đồng bằng sông Cửu Long",
            content: "• <strong>Địa hình & Đất đai:</strong> Vùng đất bằng phẳng, rộng lớn nhất nước ta; được bồi đắp bởi dòng sông Mê Công (chảy vào nước ta chia làm hai nhánh là <strong>sông Tiền</strong> và <strong>sông Hậu</strong>, đổ ra biển qua 9 cửa sông nên gọi là Cửu Long).<br/>• <strong>Mạng lưới sông ngòi:</strong> Kênh rạch chằng chịt, giao thông đường thủy bằng xuồng ghe rất phát triển.<br/>• <strong>Mùa nước nổi:</strong> Hàng năm vào khoảng tháng 8 đến tháng 11, nước sông dâng cao đem lại phù sa màu mỡ và tôm cá dồi dào cho đồng bằng."
          },
          {
            icon: "🍎",
            title: "Vựa Lúa & Vựa Trái cây lớn nhất cả nước",
            content: "• <strong>Vựa lúa số 1:</strong> Sản xuất lúa gạo nhiều nhất Việt Nam, đảm bảo an ninh lương thực quốc gia và đưa nước ta thành cường quốc xuất khẩu gạo hàng đầu thế giới.<br/>• <strong>Vựa trái cây trù phú:</strong> Nhiều loại trái cây nhiệt đới thơm ngon nổi tiếng như xoài cát Hòa Lộc, sầu riêng Cái Mơn, vú sữa Lò Rèn, bưởi Năm Roi...<br/>• <strong>Chợ nổi trên sông:</strong> Nét văn hóa mua bán trên sông độc đáo (chợ nổi Cái Răng ở Cần Thơ, chợ nổi Ngã Năm ở Sóc Trăng). Người bán treo mặt hàng nông sản lên một cây sào tre gọi là <em>cây bẹo</em> để khách mua dễ nhìn từ xa."
          },
          {
            icon: "⚓",
            title: "Bến cảng Nhà Rồng & Người thanh niên Nguyễn Tất Thành",
            content: "• <strong>Sự kiện lịch sử 5/6/1911:</strong> Tại Bến cảng Nhà Rồng (Sài Gòn - nay là TP. Hồ Chí Minh), người thanh niên yêu nước <strong>Nguyễn Tất Thành</strong> (Bác Hồ kính yêu, lúc đó mang tên Văn Ba) đã lên con tàu Đô đốc Latouche-Tréville ra đi tìm đường cứu nước.<br/>• <strong>Ý nghĩa trọng đại:</strong> Mở ra con đường cứu nước giải phóng dân tộc Việt Nam thoát khỏi ách đô hộ của thực dân, đế quốc."
          },
          {
            icon: "🕳️",
            title: "Địa đạo Củ Chi - Thành phố ngầm trong lòng đất",
            content: "• <strong>Hệ thống kỳ vĩ:</strong> Nằm ở huyện Củ Chi, TP. Hồ Chí Minh; là hệ thống đường hầm bí mật đào sâu trong lòng đất với tổng chiều dài hơn 200 km.<br/>• <strong>Công trình kháng chiến:</strong> Có nhiều tầng hầm, bên trong có đầy đủ phòng họp, trạm xá, kho lương thảo, bếp Hoàng Cầm giấu khói... Là căn cứ kiên cường của quân dân miền Nam thời kỳ kháng chiến chống Mỹ cứu nước, được mệnh danh là 'Đất thép thành đồng'."
          }
        ]
      },
      questions: [
        {
          id: "hg4_6_1",
          level: 1,
          question: "Vùng đồng bằng châu thổ lớn nhất nước ta, được mệnh danh là vựa lúa gạo và vựa trái cây lớn nhất Việt Nam là đồng bằng nào?",
          options: [
            "Đồng bằng sông Cửu Long (Nam Bộ)",
            "Đồng bằng sông Hồng",
            "Đồng bằng duyên hải miền Trung",
            "Đồng bằng Thanh Hóa"
          ],
          correct: 0,
          explanation: "Đồng bằng sông Cửu Long có diện tích gần 40.000 km2, đất đai phì nhiêu, là vựa lúa và vựa trái cây lớn nhất cả nước."
        },
        {
          id: "hg4_6_2",
          level: 1,
          question: "Vào ngày 5 tháng 6 năm 1911, tại Bến cảng Nhà Rồng (TP. Hồ Chí Minh), sự kiện lịch sử trọng đại nào đã diễn ra?",
          options: [
            "Bác Hồ đọc Tuyên ngôn Độc lập",
            "Người thanh niên yêu nước Nguyễn Tất Thành ra đi tìm đường cứu nước",
            "Chiến thắng lịch sử Điện Biên Phủ",
            "Đoàn quân giải phóng tiến vào Dinh Độc Lập"
          ],
          correct: 1,
          explanation: "Ngày 5/6/1911, người thanh niên Nguyễn Tất Thành đã rời Bến Nhà Rồng trên con tàu Amiral Latouche-Tréville bắt đầu hành trình bôn ba tìm con đường cứu nước cho dân tộc."
        },
        {
          id: "hg4_6_3",
          level: 2,
          question: "Phương tiện đi lại và vận chuyển hàng hóa truyền thống, phổ biến và đặc trưng nhất của người dân vùng sông nước Nam Bộ là gì?",
          options: ["Xuồng, ghe, thuyền", "Xe trượt tuyết", "Lạc đà", "Xe lửa ngầm"],
          correct: 0,
          explanation: "Do mạng lưới sông rạch chằng chịt, xuồng ghe là phương tiện giao thông gắn liền với đời sống hàng ngày của người dân Tây Nam Bộ."
        },
        {
          id: "hg4_6_4",
          level: 2,
          question: "Khu di tích lịch sử 'Địa đạo Củ Chi' ở Thành phố Hồ Chí Minh nổi tiếng với danh xưng nào trong lịch sử đấu tranh của dân tộc?",
          options: [
            "'Thành phố ngầm trong lòng đất' - Đất thép thành đồng",
            "Cung điện mùa hè trên núi cao",
            "Ngôi thành lũy bằng đá ong kiên cố nhất",
            "Cảng biển sầm uất nhất châu Á"
          ],
          correct: 0,
          explanation: "Địa đạo Củ Chi là hệ thống đường ngầm kỳ vĩ hơn 200 km trong lòng đất, thể hiện ý chí quật cường chống giặc ngoại xâm của quân dân vùng 'Đất thép thành đồng'."
        },
        {
          id: "hg4_6_5",
          level: 3,
          question: "Tại các chợ nổi ở miền Tây Nam Bộ, người bán hàng thường treo loại nông sản mình bán lên một cây sào tre ở mũi thuyền (gọi là cây 'bẹo') nhằm mục đích gì?",
          options: [
            "Để xua đuổi chim chóc không đến phá quả",
            "Để khách từ xa dễ dàng nhìn thấy thuyền mình đang bán mặt hàng gì mà ghé mua",
            "Để thờ cúng thần sông nước",
            "Để làm cột buồm đón gió"
          ],
          correct: 1,
          explanation: "Ở chợ nổi sóng nước ồn ào không thể rao hàng, 'treo gì bán nấy' lên cây bẹo giúp người mua từ xa nhìn thấy rõ mặt hàng cần mua."
        },
        {
          id: "hg4_6_6",
          level: 3,
          question: "Dòng sông Mê Công hùng vĩ khi chảy vào lãnh thổ miền Nam nước ta đã chia thành hai nhánh sông lớn là những con sông nào?",
          options: [
            "Sông Tiền và Sông Hậu",
            "Sông Đồng Nai và Sông Sài Gòn",
            "Sông Hồng và Sông Đuống",
            "Sông Hương và Sông Thạch Hãn"
          ],
          correct: 0,
          explanation: "Sông Mê Công vào Việt Nam tách thành sông Tiền và sông Hậu, mang theo lượng phù sa khổng lồ bồi đắp cho vựa lúa miền Tây."
        },
        {
          id: "hg4_6_7",
          level: 4,
          question: "Mùa nước nổi hàng năm ở Đồng bằng sông Cửu Long (khoảng tháng 8 đến tháng 11) mang lại những lợi ích tự nhiên to lớn nào cho người dân địa phương?",
          options: [
            "Bồi đắp lớp phù sa màu mỡ cho đồng ruộng, thau chua rửa mặn đất và mang lại nguồn lợi tôm cá tự nhiên dồi dào",
            "Làm cuốn trôi hết nhà cửa và hủy hoại đất đai vĩnh viễn",
            "Khiến đồng bằng biến thành sa mạc cát",
            "Làm cạn kiệt toàn bộ nguồn nước ngọt"
          ],
          correct: 0,
          explanation: "Khác với lũ lụt tàn phá ở nơi khác, mùa nước nổi ở miền Tây là 'món quà thiên nhiên' mang phù sa bồi đắp đất, tiêu diệt mầm bệnh và cung cấp nguồn thủy sản dồi dào."
        },
        {
          id: "hg4_6_8",
          level: 4,
          question: "Tên con tàu buôn của Pháp mà người thanh niên Văn Ba (Nguyễn Tất Thành) nhận làm phụ bếp để rời Tổ quốc vào ngày 5/6/1911 là gì?",
          options: [
            "Tàu Đô đốc La-tu-sơ Tơ-rê-vin (Amiral Latouche-Tréville)",
            "Tàu Titanic",
            "Tàu Victoria",
            "Tàu Tuần dương Rạng Đông"
          ],
          correct: 0,
          explanation: "Người thanh niên Nguyễn Tất Thành nhận làm phụ bếp trên tàu Đô đốc Latouche-Tréville của hãng vận tải Hợp thành để bắt đầu hành trình sang phương Tây tìm đường cứu nước."
        }
      ]
    },

    {
      id: "bien_dao_viet_nam",
      name: "Chủ Đề 7: Biển, Đảo Việt Nam & Bảo Vệ Chủ Quyền",
      icon: "🏝️",
      desc: "Đường bờ biển 3.260 km, quần đảo Hoàng Sa và Trường Sa thiêng liêng, đảo Phú Quốc & trách nhiệm bảo vệ biển đảo quê hương.",
      theory: {
        highlights: [
          {
            icon: "🌊",
            title: "Vùng biển Việt Nam trên Biển Đông",
            content: "• <strong>Bờ biển dài:</strong> Việt Nam có đường bờ biển dài hơn <strong>3.260 km</strong> cong hình chữ S uốn lượn từ Móng Cái (Quảng Ninh) đến Hà Tiên (Kiên Giang).<br/>• <strong>Vị trí chiến lược:</strong> Vùng biển nước ta thuộc Biển Đông - một trong những vùng biển có tuyến hàng hải quốc tế tấp nập nhất thế giới.<br/>• <strong>Tài nguyên phong phú:</strong> Trữ lượng hải sản dồi dào, thềm lục địa giàu tài nguyên dầu khí và khoáng sản, nhiều vịnh biển kín gió thuận lợi xây dựng cảng biển nước sâu."
          },
          {
            icon: "🇻🇳",
            title: "Chủ quyền Hoàng Sa & Trường Sa thiêng liêng",
            content: "• <strong>Hai quần đảo xa bờ:</strong> Quần đảo <strong>Hoàng Sa</strong> (thuộc huyện Hoàng Sa, thành phố Đà Nẵng) và quần đảo <strong>Trường Sa</strong> (thuộc huyện Trường Sa, tỉnh Khánh Hòa) là phần lãnh thổ thiêng liêng bất khả xâm phạm của Tổ quốc Việt Nam.<br/>• <strong>Chứng cứ lịch sử:</strong> Từ nhiều thế kỉ trước (thời các Chúa Nguyễn), Nhà nước Việt Nam đã thành lập <em>Đội Hoàng Sa</em> và <em>Đội Bắc Hải</em> để định kỳ giong buồm ra biển đo đạc hải trình, thu lượm hải vật, cắm mốc và thực thi chủ quyền liên tục, hòa bình."
          },
          {
            icon: "🏝️",
            title: "Các hòn đảo lớn & Kinh tế biển",
            content: "• <strong>Đảo Phú Quốc (Kiên Giang):</strong> Là hòn đảo có diện tích tự nhiên lớn nhất Việt Nam (khoảng 589 km²), được mệnh danh là <em>'Đảo Ngọc'</em> với nghề làm nước mắm, trồng hồ tiêu và du lịch biển đảo cao cấp.<br/>• <strong>Các đảo tiền tiêu tiêu biểu:</strong> Côn Đảo (Bà Rịa - Vũng Tàu), Cát Bà, Bạch Long Vĩ (Hải Phòng), Cồn Cỏ (Quảng Trị), Lý Sơn (Quảng Ngãi), Phú Quý (Bình Thuận)..."
          },
          {
            icon: "🛡️",
            title: "Trách nhiệm của thế hệ trẻ với biển đảo",
            content: "• <strong>Gìn giữ chủ quyền:</strong> Luôn ghi nhớ biển đảo là một phần máu thịt của non sông đất nước mà cha ông đã bao đời gìn giữ, hy sinh xương máu bảo vệ.<br/>• <strong>Bảo vệ môi trường biển:</strong> Không xả rác thải nhựa, bao nilon ra bãi biển và đại dương; kiên quyết lên án các hành vi đánh bắt hải sản hủy diệt (dùng mìn nổ, xung điện...).<br/>• <strong>Hành động của em:</strong> Ra sức học tập chăm ngoan, tìm hiểu kiến thức lịch sử, địa lý và lan tỏa niềm tự hào dân tộc."
          }
        ]
      },
      questions: [
        {
          id: "hg4_7_1",
          level: 1,
          question: "Chiều dài đường bờ biển của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam (tính từ Móng Cái đến Hà Tiên) khoảng bao nhiêu ki-lô-mét?",
          options: ["Khoảng 1.000 km", "Khoảng 2.000 km", "Khoảng 3.260 km", "Khoảng 5.000 km"],
          correct: 2,
          explanation: "Việt Nam có đường bờ biển dài trên 3.260 km chạy dọc suốt chiều dài đất nước, mở ra tiềm năng kinh tế biển vô cùng rộng lớn."
        },
        {
          id: "hg4_7_2",
          level: 1,
          question: "Hai quần đảo xa bờ thiêng liêng thuộc chủ quyền lãnh thổ lâu đời và bất khả xâm phạm của nước ta trên Biển Đông là gì?",
          options: [
            "Quần đảo Hoàng Sa và Quần đảo Trường Sa",
            "Quần đảo Cát Bà và Côn Đảo",
            "Quần đảo Phú Quốc và Nam Du",
            "Quần đảo Hawaii và Philippines"
          ],
          correct: 0,
          explanation: "Hoàng Sa và Trường Sa là hai quần đảo thiêng liêng thuộc chủ quyền trọn vẹn của Việt Nam đã được khẳng định trong lịch sử và luật pháp quốc tế."
        },
        {
          id: "hg4_7_3",
          level: 2,
          question: "Về mặt hành chính của Nhà nước Việt Nam, huyện đảo Hoàng Sa trực thuộc sự quản lý của tỉnh/thành phố nào?",
          options: ["Thành phố Đà Nẵng", "Tỉnh Quảng Nam", "Thành phố Hải Phòng", "Tỉnh Khánh Hòa"],
          correct: 0,
          explanation: "Quần đảo Hoàng Sa được tổ chức thành huyện đảo Hoàng Sa, trực thuộc Thành phố Đà Nẵng."
        },
        {
          id: "hg4_7_4",
          level: 2,
          question: "Về mặt hành chính của Nhà nước Việt Nam, huyện đảo Trường Sa trực thuộc sự quản lý của tỉnh nào?",
          options: ["Tỉnh Khánh Hòa", "Tỉnh Bình Thuận", "Tỉnh Ninh Thuận", "Tỉnh Phú Yên"],
          correct: 0,
          explanation: "Quần đảo Trường Sa được tổ chức thành đơn vị hành chính cấp huyện là huyện đảo Trường Sa, trực thuộc tỉnh Khánh Hòa."
        },
        {
          id: "hg4_7_5",
          level: 3,
          question: "Hòn đảo có diện tích tự nhiên lớn nhất Việt Nam, nổi tiếng với nghề làm nước mắm cá cơm và được mệnh danh là 'Đảo Ngọc' thuộc tỉnh nào?",
          options: [
            "Đảo Phú Quốc (tỉnh Kiên Giang)",
            "Đảo Cát Bà (thành phố Hải Phòng)",
            "Đảo Lý Sơn (tỉnh Quảng Ngãi)",
            "Côn Đảo (tỉnh Bà Rịa - Vũng Tàu)"
          ],
          correct: 0,
          explanation: "Đảo Phú Quốc nằm trong vịnh Thái Lan thuộc tỉnh Kiên Giang là hòn đảo lớn nhất Việt Nam với diện tích gần 590 km2."
        },
        {
          id: "hg4_7_6",
          level: 3,
          question: "Từ thế kỉ XVII thời các Chúa Nguyễn, tổ chức nào của Nhà nước ta đã được lập ra để hàng năm giong buồm ra quần đảo Hoàng Sa và Trường Sa đo đạc hải trình và cắm mốc khẳng định chủ quyền?",
          options: [
            "Đội Hoàng Sa và Đội Bắc Hải",
            "Đội Thám hiểm Biển Đông",
            "Hội Thủy quân Đại Việt",
            "Ty Khảo sát Hàng hải"
          ],
          correct: 0,
          explanation: "Nhà nước phong kiến Việt Nam thời các Chúa Nguyễn đã thành lập Đội Hoàng Sa và Đội Bắc Hải thực thi chủ quyền liên tục và hòa bình trên 2 quần đảo."
        },
        {
          id: "hg4_7_7",
          level: 4,
          question: "Để bảo vệ nguồn lợi thủy sản biển phát triển bền vững cho tương lai, ngư dân chúng ta tuyệt đối KHÔNG ĐƯỢC sử dụng hình thức đánh bắt nào sau đây?",
          options: [
            "Sử dụng thuốc nổ, hóa chất độc hại hoặc xung điện đánh bắt kiểu tận diệt",
            "Đánh bắt hải sản xa bờ bằng tàu vỏ thép hiện đại",
            "Tuân thủ đúng ngư trường quy định theo mùa sinh sản của cá",
            "Thả lưới có kích thước mắt lưới lớn theo đúng tiêu chuẩn"
          ],
          correct: 0,
          explanation: "Đánh bắt bằng thuốc nổ và xung điện giết chết cả san hô, sinh vật phù du và cá con non nớt, làm hủy diệt môi trường sinh thái biển một cách không thể phục hồi."
        },
        {
          id: "hg4_7_8",
          level: 4,
          question: "Là một học sinh lớp 4, việc làm thiết thực và ý nghĩa nhất mà em có thể thực hiện để thể hiện tình yêu và trách nhiệm bảo vệ biển đảo Tổ quốc là gì?",
          options: [
            "Chăm ngoan học giỏi, tìm hiểu sâu sắc lịch sử địa lý dân tộc, bảo vệ môi trường không xả rác thải nhựa và tự hào giới thiệu chủ quyền biển đảo quê hương",
            "Tự ý chèo thuyền một mình ra biển Đông",
            "Không cần quan tâm vì việc bảo vệ biển đảo là của người lớn",
            "Chỉ đi tắm biển mà không cần học tập lịch sử địa lý"
          ],
          correct: 0,
          explanation: "Tuổi nhỏ làm việc nhỏ, học tập tốt kiến thức văn hóa, bảo vệ môi trường xanh sạch và lan tỏa lòng yêu nước chính là hành động thiết thực nhất của học sinh."
        }
      ]
    }
  ]
};
