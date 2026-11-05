/**
 * it-3-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Tin Học & Công Nghệ Lớp 3
 * Chuẩn Chương trình Giáo dục phổ thông (GDPT) 2018
 * (Kết nối tri thức với cuộc sống, Cánh diều, Chân trời sáng tạo)
 */

window.IT3_DATA = {
  topics: [
    {
      id: "may_tinh_va_em",
      name: "Chủ Đề 1: Máy Tính & Thao Tác Chuột Chuẩn Xác",
      icon: "🖥️",
      desc: "4 bộ phận cơ bản của máy tính để bàn, phân biệt máy tính xách tay & máy tính bảng, tư thế ngồi học khoa học và 5 thao tác chuột máy tính.",
      theory: {
        highlights: [
          {
            icon: "💻",
            title: "4 bộ phận cơ bản của máy tính để bàn",
            content: "• <strong>Thân máy (CPU):</strong> Bộ não của máy tính, chứa các linh kiện xử lý thông tin.<br/>• <strong>Màn hình:</strong> Hiển thị kết quả làm việc của máy tính (chữ, hình ảnh, video).<br/>• <strong>Bàn phím:</strong> Dùng để nhập chữ cái, con số và các ký hiệu vào máy tính.<br/>• <strong>Chuột máy tính:</strong> Giúp điều khiển con trỏ trên màn hình nhanh chóng và thuận tiện."
          },
          {
            icon: "🧘",
            title: "Tư thế ngồi học chuẩn khoa học",
            content: "• Lưng thẳng, hai bàn chân đặt phẳng trên mặt sàn.<br/>• Mắt cách màn hình máy tính từ <strong>50 cm đến 80 cm</strong>.<br/>• Tầm mắt ngang hoặc thấp hơn mép trên màn hình một chút.<br/>• Ánh sáng phòng học phải đủ sáng, không để ánh sáng chói trực tiếp vào màn hình."
          },
          {
            icon: "🖱️",
            title: "5 thao tác cơ bản với chuột máy tính",
            content: "• <strong>Cầm chuột:</strong> Tay phải cầm chuột, ngón trỏ đặt lên nút trái, ngón giữa đặt lên nút phải.<br/>• 1. <em>Di chuyển chuột:</em> Đưa chuột trên mặt phẳng mà không nhấn nút nào.<br/>• 2. <em>Nháy chuột (nhấp chuột trái):</em> Nhấn nhanh nút trái rồi thả ngón tay ra.<br/>• 3. <em>Nháy đúp chuột:</em> Nhấn nút trái hai lần liên tiếp thật nhanh (dùng để mở tệp hoặc phần mềm).<br/>• 4. <em>Nháy nút phải chuột:</em> Nhấn nhanh nút phải rồi thả ra (mở bảng chọn chức năng).<br/>• 5. <em>Kéo thả chuột:</em> Nhấn và giữ nút trái chuột, di chuyển con trỏ đến vị trí mới rồi thả tay ra."
          }
        ]
      },
      questions: [
        {
          id: "it3_1_1",
          level: 1,
          question: "Bộ phận nào của máy tính để bàn được ví như <strong>'bộ não'</strong> xử lý mọi thông tin?",
          options: ["Thân máy (Case/CPU)", "Màn hình", "Bàn phím", "Chuột máy tính"],
          correct: 0,
          explanation: "Thân máy chứa bộ vi xử lý trung tâm (CPU) điều khiển và xử lý toàn bộ hoạt động của máy tính."
        },
        {
          id: "it3_1_2",
          level: 1,
          question: "Để <strong>khởi động (mở)</strong> một phần mềm hoặc trò chơi học tập trên màn hình nền Desktop, em dùng thao tác chuột nào?",
          options: [
            "Nháy nút phải chuột",
            "Nháy đúp chuột (nhấn nhanh 2 lần nút trái)",
            "Chỉ di chuyển chuột",
            "Cuộn nút cuộn chuột"
          ],
          correct: 1,
          explanation: "Nháy đúp chuột trái vào biểu tượng icon là thao tác tiêu chuẩn để mở tệp hoặc chạy ứng dụng trên máy tính."
        },
        {
          id: "it3_1_3",
          level: 2,
          question: "Khi ngồi làm việc với máy tính, khoảng cách an toàn từ mắt đến màn hình nên là khoảng bao nhiêu?",
          options: ["10 cm - 20 cm", "50 cm - 80 cm", "1 m - 2 m", "Càng sát càng tốt"],
          correct: 1,
          explanation: "Khoảng cách tiêu chuẩn từ 50cm đến 80cm (khoảng một sải tay) giúp mắt không bị mỏi và tránh cận thị học đường."
        },
        {
          id: "it3_1_4",
          level: 2,
          question: "Khi cầm chuột bằng bàn tay phải, ngón trỏ của em dùng để nhấn vào nút nào của chuột?",
          options: ["Nút trái chuột", "Nút phải chuột", "Nút cuộn chuột", "Thân chuột"],
          correct: 0,
          explanation: "Tư thế chuẩn: Ngón trỏ đặt trên nút trái chuột, ngón giữa đặt trên nút phải chuột."
        },
        {
          id: "it3_1_5",
          level: 3,
          question: "Muốn di chuyển một thư mục hoặc biểu tượng từ góc này sang góc khác trên màn hình Desktop, em thực hiện thao tác nào?",
          options: [
            "Nháy đúp nút phải chuột",
            "Kéo thả chuột (nhấn giữ nút trái, di chuyển đến vị trí mới rồi thả tay)",
            "Lăn nút cuộn chuột lên xuống",
            "Nhấn phím Enter"
          ],
          correct: 1,
          explanation: "Kéo thả chuột (Drag and Drop) là thao tác di chuyển đối tượng trên giao diện đồ họa máy tính."
        },
        {
          id: "it3_1_6",
          level: 3,
          question: "Máy tính xách tay (Laptop) khác máy tính để bàn ở đặc điểm nổi bật nào?",
          options: [
            "Không có bộ phận xử lý bên trong",
            "Màn hình, thân máy, bàn phím và vùng cảm ứng chuột (touchpad) được tích hợp gọn gàng trong một thân máy duy nhất, có pin sạc dễ mang theo",
            "Không thể kết nối Internet",
            "Chỉ dùng để chơi game, không dùng để học tập được"
          ],
          correct: 1,
          explanation: "Laptop được thiết kế liền khối mỏng nhẹ, có pin dự phòng và bàn di chuột cảm ứng linh hoạt cho người dùng di chuyển."
        },
        {
          id: "it3_1_7",
          level: 4,
          question: "Bạn Nam ngồi học máy tính trong tư thế gù lưng, mắt dí sát vào màn hình 20cm và ngồi liên tục 4 tiếng không nghỉ. Thói quen này dẫn đến hậu quả nguy hại nào?",
          options: [
            "Giúp học giỏi tin học hơn",
            "Gây cong vẹo cột sống, đau mỏi cổ vai gáy và nguy cơ cao bị cận thị, suy giảm thị lực",
            "Máy tính sẽ chạy nhanh hơn",
            "Không có tác hại gì cả"
          ],
          correct: 1,
          explanation: "Ngồi sai tư thế và dán mắt quá lâu vào màn hình gây tổn thương nghiêm trọng đến cột sống và điều tiết của mắt."
        },
        {
          id: "it3_1_8",
          level: 4,
          question: "Khi kết thúc buổi học tin học ở phòng máy của trường, quy trình tắt máy tính để bàn nào sau đây là <strong>đúng kỹ thuật và bảo vệ máy tốt nhất</strong>?",
          options: [
            "Rút phích cắm điện ngay lập tức khỏi ổ cắm",
            "Nhấn nút Start trên màn hình -> Chọn nút Nguồn (Power) -> Chọn Shut down, đợi máy tắt hẳn rồi tắt công tắc màn hình",
            "Nhấn giữ nút nguồn trên thân máy thật mạnh 10 giây",
            "Cứ để nguyên máy bật sáng rồi đi về"
          ],
          correct: 1,
          explanation: "Lệnh Shut down giúp hệ điều hành lưu trữ dữ liệu an toàn và đóng các tiến trình trước khi ngắt nguồn điện."
        }
      ]
    },
    {
      id: "ban_phim_hang_co_so",
      name: "Chủ Đề 2: Bàn Phím Máy Tính & Hàng Phím Cơ Sở",
      icon: "⌨️",
      desc: "Khu vực phím chính, nhận biết phím F và J có gờ nổi định vị, phân công 8 ngón tay trên hàng phím cơ sở và các phím chức năng đặc biệt.",
      theory: {
        highlights: [
          {
            icon: "🔤",
            title: "Các hàng phím ở khu vực chính",
            content: "• <strong>Hàng phím số:</strong> 1, 2, 3, 4, 5, 6, 7, 8, 9, 0...<br/>• <strong>Hàng phím trên:</strong> Q, W, E, R, T, Y, U, I, O, P...<br/>• <strong>Hàng phím cơ sở:</strong> A, S, D, F, G, H, J, K, L, ;... (hàng phím quan trọng nhất!).<br/>• <strong>Hàng phím dưới:</strong> Z, X, C, V, B, N, M...<br/>• <strong>Hàng phím chứa phím cách (Space bar):</strong> Dưới cùng, có phím cách dài nhất bàn phím."
          },
          {
            icon: "👆",
            title: "Hai phím có gờ F và J - Mốc định vị",
            content: "• Trên phím <strong>F</strong> và phím <strong>J</strong> luôn có một <em>gờ nổi nhỏ</em>.<br/>• <strong>Quy tắc đặt tay:</strong><br/>- Ngón trỏ tay trái đặt lên phím <strong>F</strong>.<br/>- Ngón trỏ tay phải đặt lên phím <strong>J</strong>.<br/>• Các ngón tay còn lại tự động thả lỏng nhẹ nhàng lên các phím liền kề trên hàng phím cơ sở."
          },
          {
            icon: "🖐️",
            title: "Phân công 8 ngón tay trên hàng phím cơ sở",
            content: "• <strong>Tay trái:</strong> Ngón út đặt phím <code>A</code>, ngón áp út đặt phím <code>S</code>, ngón giữa đặt phím <code>D</code>, ngón trỏ đặt phím <code>F</code>.<br/>• <strong>Tay phải:</strong> Ngón trỏ đặt phím <code>J</code>, ngón giữa đặt phím <code>K</code>, ngón áp út đặt phím <code>L</code>, ngón út đặt phím <code>;</code>.<br/>• <strong>Hai ngón tay cái:</strong> Đặt trên phím cách dài (Space)."
          },
          {
            icon: "⭐",
            title: "Các phím đặc biệt cần nhớ",
            content: "• <strong>Phím Space (phím cách):</strong> Tạo khoảng cách giữa các từ.<br/>• <strong>Phím Enter:</strong> Xuống dòng mới hoặc thực thi lệnh.<br/>• <strong>Phím Backspace (<-):</strong> Xóa ký tự ở bên <em>trái</em> con trỏ soạn thảo.<br/>• <strong>Phím Delete:</strong> Xóa ký tự ở bên <em>phải</em> con trỏ soạn thảo.<br/>• <strong>Phím Shift:</strong> Nhấn giữ Shift để gõ chữ hoa hoặc ký tự phía trên."
          }
        ]
      },
      questions: [
        {
          id: "it3_2_1",
          level: 1,
          question: "Hai phím nào trên hàng phím cơ sở luôn có <strong>gờ nổi định vị</strong> ngón tay?",
          options: ["Phím A và L", "Phím F và J", "Phím G và H", "Phím D và K"],
          correct: 1,
          explanation: "Phím F (dành cho ngón trỏ trái) và phím J (dành cho ngón trỏ phải) có gờ xúc giác giúp người gõ định vị vị trí tay mà không cần nhìn bàn phím."
        },
        {
          id: "it3_2_2",
          level: 1,
          question: "Phím dài nhất trên bàn phím máy tính là phím nào?",
          options: ["Phím Enter", "Phím Shift", "Phím Cách (Space bar)", "Phím Caps Lock"],
          correct: 2,
          explanation: "Phím cách (Space bar) nằm ở hàng phím dưới cùng là phím dài nhất trên mọi bàn phím tiêu chuẩn."
        },
        {
          id: "it3_2_3",
          level: 2,
          question: "Trên hàng phím cơ sở, ngón <strong>út tay trái</strong> được phân công phụ trách phím nào?",
          options: ["Phím A", "Phím S", "Phím D", "Phím F"],
          correct: 0,
          explanation: "Thứ tự bàn tay trái trên hàng cơ sở từ ngón út đến ngón trỏ tương ứng là: A - S - D - F."
        },
        {
          id: "it3_2_4",
          level: 2,
          question: "Để xóa ký tự nằm ngay ở <strong>bên trái</strong> con trỏ soạn thảo văn bản, em nhấn phím nào?",
          options: ["Phím Backspace (<-)", "Phím Delete", "Phím Enter", "Phím Esc"],
          correct: 0,
          explanation: "Phím Backspace xóa lùi ký tự đứng trước (bên trái) con trỏ, còn phím Delete xóa ký tự đứng sau (bên phải)."
        },
        {
          id: "it3_2_5",
          level: 3,
          question: "Khi luyện tập gõ bàn phím bằng 10 ngón, hai ngón <strong>tay cái</strong> có nhiệm vụ gõ phím nào?",
          options: ["Phím Enter", "Phím Space (phím cách)", "Phím Shift", "Hàng phím số"],
          correct: 1,
          explanation: "Hai ngón tay cái luôn thường trực đặt trên phím cách dài để tạo dấu cách giữa các từ khi gõ văn bản."
        },
        {
          id: "it3_2_6",
          level: 3,
          question: "Muốn gõ một chữ cái viết hoa (ví dụ chữ cái <strong>H</strong>), em cần kết hợp thao tác nào?",
          options: [
            "Nhấn giữ phím Shift đồng thời gõ phím chữ H",
            "Nhấn phím Backspace đồng thời gõ chữ H",
            "Nhấn phím Space hai lần rồi gõ chữ H",
            "Nhấn chuột phải rồi gõ chữ H"
          ],
          correct: 0,
          explanation: "Tổ hợp phím Shift + chữ cái giúp gõ nhanh một ký tự viết hoa hoặc ký tự trên của phím hai tầng."
        },
        {
          id: "it3_2_7",
          level: 4,
          question: "Lợi ích lớn nhất của việc kiên trì luyện tập gõ bàn phím bằng đúng <strong>10 ngón tay</strong> là gì?",
          options: [
            "Làm bàn phím đỡ bị bụi bẩn",
            "Gõ chữ nhanh hơn, chuẩn xác hơn mà không cần nhìn vào bàn phím, mắt tập trung vào màn hình giúp tăng hiệu suất học tập và làm việc",
            "Để bàn tay trông đẹp hơn",
            "Không có lợi ích gì so với gõ 'mổ cò' 2 ngón"
          ],
          correct: 1,
          explanation: "Kỹ năng gõ 10 ngón (touch typing) dựa trên phản xạ trí nhớ cơ bắp, giúp tốc độ soạn thảo tăng gấp nhiều lần và giảm mỏi mắt mỏi cổ."
        },
        {
          id: "it3_2_8",
          level: 4,
          question: "Trong phần mềm luyện gõ phím, sau khi gõ xong một phím bất kỳ ở hàng trên hoặc hàng dưới (ví dụ phím R hoặc phím V), các ngón tay phải ngay lập tức làm gì?",
          options: [
            "Để nguyên ngón tay ở phím vừa gõ",
            "Thu ngón tay quay trở về vị trí xuất phát ban đầu trên hàng phím cơ sở",
            "Rút cả hai tay ra khỏi bàn phím",
            "Nhấn phím Enter ngay lập tức"
          ],
          correct: 1,
          explanation: "Hàng phím cơ sở là 'ngôi nhà' xuất phát và trở về của mọi ngón tay sau mỗi thao tác gõ phím."
        }
      ]
    },
    {
      id: "thong_tin_va_an_toan_internet",
      name: "Chủ Đề 3: Thông Tin, Tệp, Thư Mục & An Toàn Internet",
      icon: "🌐",
      desc: "3 dạng thông tin cơ bản; Cách sắp xếp tệp và thư mục ngăn nắp trong máy tính; Quy tắc vàng bảo vệ thông tin cá nhân trên mạng.",
      theory: {
        highlights: [
          {
            icon: "📊",
            title: "3 dạng thông tin thường gặp",
            content: "• <strong>Dạng chữ viết (văn bản):</strong> Sách báo, bài thơ, chữ cái, con số trên trang vở...<br/>• <strong>Dạng hình ảnh:</strong> Bức ảnh chụp, bức tranh vẽ, biển báo giao thông, bản đồ...<br/>• <strong>Dạng âm thanh:</strong> Tiếng trống trường, tiếng chim hót, bài hát, lời cô giảng bài..."
          },
          {
            icon: "📁",
            title: "Tệp và Thư mục (Files & Folders)",
            content: "• <strong>Thư mục (Folder):</strong> Giống như một chiếc kẹp tài liệu hoặc ngăn tủ (biểu tượng màu vàng), dùng để chứa các thư mục con và các tệp.<br/>• <strong>Tệp (File):</strong> Chứa dữ liệu cụ thể như bài viết Word, tranh vẽ Paint, bài hát, video...<br/>• <em>Lợi ích của việc tổ chức thư mục:</em> Giúp thông tin được lưu trữ khoa học, dễ dàng tìm kiếm nhanh chóng khi cần."
          },
          {
            icon: "🛡️",
            title: "Quy tắc vàng an toàn trên Internet cho học sinh",
            content: "• <strong>Bảo mật thông tin:</strong> Tuyệt đối không chia sẻ họ tên đầy đủ, địa chỉ nhà, số điện thoại, tên trường lớp hoặc mật khẩu cho người lạ trên mạng.<br/>• <strong>Không tự ý bấm vào link lạ:</strong> Cảnh giác với các đường link quảng cáo trúng thưởng hoặc yêu cầu tải file không rõ nguồn gốc.<br/>• <strong>Chia sẻ với người lớn:</strong> Khi gặp thông tin xấu xí, lời đe dọa hoặc nội dung độc hại trên mạng, phải báo ngay cho bố mẹ hoặc thầy cô giáo."
          }
        ]
      },
      questions: [
        {
          id: "it3_3_1",
          level: 1,
          question: "Tiếng còi xe cứu thương hụ trên đường thuộc dạng thông tin nào?",
          options: ["Dạng chữ viết", "Dạng hình ảnh", "Dạng âm thanh", "Dạng số"],
          correct: 2,
          explanation: "Tiếng còi xe truyền qua sóng âm thanh tác động vào tai nghe, thuộc dạng thông tin âm thanh."
        },
        {
          id: "it3_3_2",
          level: 1,
          question: "Biểu tượng của một <strong>Thư mục (Folder)</strong> trong hệ điều hành Windows thường có màu gì đặc trưng?",
          options: ["Màu vàng hình chiếc kẹp giấy", "Màu đỏ", "Màu tím", "Màu đen"],
          correct: 0,
          explanation: "Thư mục trong Windows được thiết kế theo biểu tượng chiếc kẹp hồ sơ màu vàng trực quan."
        },
        {
          id: "it3_3_3",
          level: 2,
          question: "Biển báo giao thông có hình tròn viền đỏ, nền trắng, bên trong có hình chiếc xe đạp gạch chéo cung cấp cho em thông tin gì?",
          options: [
            "Được phép đi xe đạp tốc độ cao",
            "Cấm xe đạp đi vào đoạn đường này",
            "Nơi sửa chữa xe đạp",
            "Cửa hàng bán xe đạp trẻ em"
          ],
          correct: 1,
          explanation: "Biển báo giao thông truyền đạt thông tin trực quan dạng hình ảnh báo hiệu cấm người đi xe đạp đi vào."
        },
        {
          id: "it3_3_4",
          level: 2,
          question: "Khi một người lạ trên mạng xã hội hoặc trong game online nhắn tin hỏi: <em>'Nhà bạn ở đâu? Bố mẹ bạn tên gì và số điện thoại là mấy?'</em>, em nên làm gì?",
          options: [
            "Trả lời đầy đủ và gửi ảnh thẻ học sinh cho họ xem",
            "Tuyệt đối không cung cấp thông tin cá nhân và báo ngay cho bố mẹ hoặc thầy cô biết",
            "Hẹn gặp người lạ đó ngoài công viên để nói chuyện",
            "Cung cấp mật khẩu tài khoản của mình cho họ"
          ],
          correct: 1,
          explanation: "Nguyên tắc bảo vệ an toàn trên mạng: Không bao giờ tiết lộ thông tin cá nhân cho người lạ để phòng tránh kẻ xấu lợi dụng."
        },
        {
          id: "it3_3_5",
          level: 3,
          question: "Bạn Lan có các tệp: <em>Toan3_Bai1.doc</em>, <em>TiengViet3_Bai1.doc</em>, <em>HinhVeConMeo.png</em>, <em>HinhVeBongHoa.png</em>. Cách sắp xếp thư mục nào dưới đây là khoa học nhất?",
          options: [
            "Để bừa bãi tất cả các tệp ngoài màn hình Desktop",
            "Tạo 2 thư mục: 'BaiTap' (chứa 2 tệp doc) và 'TranhVe' (chứa 2 tệp png)",
            "Đổi tên tất cả các tệp thành số 1, 2, 3 rồi vứt vào thùng rác",
            "Chỉ tạo 1 thư mục chứa tệp vẽ, còn tệp học thì xóa đi"
          ],
          correct: 1,
          explanation: "Phân loại tệp theo chủ đề và mục đích sử dụng vào các thư mục riêng giúp quản lý dữ liệu ngăn nắp, dễ tìm kiếm."
        },
        {
          id: "it3_3_6",
          level: 3,
          question: "Mật khẩu nào sau đây là <strong>mật khẩu mạnh và an toàn nhất</strong> cho tài khoản học trực tuyến?",
          options: [
            "123456",
            "bom2018",
            "BomHocGioi@2026!",
            "00000000"
          ],
          correct: 2,
          explanation: "Mật khẩu mạnh cần có độ dài từ 8 ký tự trở lên, kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt (@, !)."
        },
        {
          id: "it3_3_7",
          level: 4,
          question: "Khi lướt web học tập, một trang web bỗng hiện thông báo nhấp nháy: <em>'Chúc mừng bạn đã trúng thưởng iPhone 16! Bấm vào đây để nhận thưởng ngay!'</em>. Hành động đúng đắn nhất của em là gì?",
          options: [
            "Bấm ngay vào đường link để nhận điện thoại miễn phí",
            "Đây là trò lừa đảo (quảng cáo mã độc hại), không bấm vào bất kỳ nút nào và nhờ người lớn đóng trang web đó lại",
            "Gửi đường link đó cho tất cả các bạn trong lớp cùng nhận",
            "Nhập số tài khoản ngân hàng của bố mẹ vào đó"
          ],
          correct: 1,
          explanation: "Các thông báo trúng thưởng giả mạo chứa liên kết lừa đảo hoặc virus nguy hiểm đánh cắp thông tin thiết bị."
        },
        {
          id: "it3_3_8",
          level: 4,
          question: "Internet mang lại rất nhiều lợi ích cho học tập, nhưng việc sử dụng Internet quá 3 giờ mỗi ngày để xem video nhảm nhí sẽ gây ra tác hại gì?",
          options: [
            "Lãng phí thời gian, sa sút việc học, giảm thị lực và hạn chế các hoạt động giao tiếp thực tế với gia đình bạn bè",
            "Giúp trở thành kỹ sư công nghệ tương lai",
            "Tăng cường sức khỏe thể chất",
            "Không có tác hại nào"
          ],
          correct: 0,
          explanation: "Nghiện Internet và thiết bị điện tử làm giảm chú ý, gây lười vận động và ảnh hưởng xấu đến tâm lý lứa tuổi học sinh."
        }
      ]
    },
    {
      id: "su_dung_thiet_bi_dien_an_toan",
      name: "Chủ Đề 4: Tự Nhiên & Công Nghệ - Thiết Bị Điện Gia Đình",
      icon: "🔌",
      desc: "Phân biệt sản phẩm tự nhiên và công nghệ; Quy tắc sử dụng đèn học, quạt điện, tivi, radio an toàn và tiết kiệm điện năng.",
      theory: {
        highlights: [
          {
            icon: "🌲",
            title: "Sản phẩm tự nhiên và sản phẩm công nghệ",
            content: "• <strong>Sản phẩm tự nhiên:</strong> Có sẵn trong tự nhiên, không do con người làm ra (cây cối, đất đá, sông suối, ánh nắng mặt trời, các loài động vật hoang dã...).<br/>• <strong>Sản phẩm công nghệ:</strong> Do con người sáng tạo và sản xuất ra để phục vụ cuộc sống (quạt điện, đèn bàn, tivi, ô tô, nhà ở, điện thoại...)."
          },
          {
            icon: "💡",
            title: "Sử dụng đèn học đúng cách bảo vệ mắt",
            content: "• Bật đèn phòng học kết hợp với đèn bàn chiếu sáng để không bị chênh lệch ánh sáng quá lớn.<br/>• Điều chỉnh chụp đèn sao cho ánh sáng chiếu thẳng vào vở, không chiếu thẳng vào mắt gây chói lóa.<br/>• Đèn bàn nên đặt ở phía tay nghịch (nếu viết tay phải thì đặt đèn bên tay trái) để bóng bàn tay không che khuất chữ viết.<br/>• Tắt đèn khi không sử dụng để tiết kiệm điện."
          },
          {
            icon: "⚡",
            title: "Quy tắc sống còn về an toàn điện",
            content: "• <strong>Tuyệt đối không:</strong> Chạm tay ướt vào công tắc, phích cắm; chọc que sắt, que gỗ vào ổ điện; kéo giật dây điện khi rút phích cắm.<br/>• Khi thấy dây điện bị hở, đứt hoặc có tia lửa xẹt ra: Không lại gần và báo ngay cho người lớn xử lý."
          }
        ]
      },
      questions: [
        {
          id: "it3_4_1",
          level: 1,
          question: "Vật nào dưới đây là <strong>sản phẩm công nghệ</strong> do con người sáng chế ra?",
          options: ["Chiếc quạt điện", "Dòng sông Hồng", "Quả núi đá vôi", "Con chim bồ câu"],
          correct: 0,
          explanation: "Quạt điện là sản phẩm công nghệ do con người chế tạo phục vụ nhu cầu làm mát trong đời sống."
        },
        {
          id: "it3_4_2",
          level: 1,
          question: "Khi viết bài bằng tay phải, em nên đặt đèn học ở phía bên nào để bóng tay không che lấp chữ viết?",
          options: ["Phía bên tay trái", "Phía bên tay phải", "Đặt ngay sát cổ tay", "Đặt sau lưng"],
          correct: 0,
          explanation: "Đặt đèn bên trái giúp ánh sáng chiếu thuận, bóng của bàn tay phải nghiêng sang phải và không che khuất dòng chữ đang viết."
        },
        {
          id: "it3_4_3",
          level: 2,
          question: "Hành động nào dưới đây là <strong>vô cùng nguy hiểm có thể bị điện giật chết người</strong>?",
          options: [
            "Bật công tắc quạt điện khi tay đang khô ráo",
            "Dùng tay ướt sũng nước để cắm phích điện vào ổ cắm trên tường",
            "Nhờ người lớn cắm hộ dây sạc máy tính",
            "Tắt đèn học trước khi đi ngủ"
          ],
          correct: 1,
          explanation: "Nước là chất dẫn điện cực mạnh; chạm tay ướt vào ổ điện khiến dòng điện dễ dàng phóng qua cơ thể gây nguy hiểm tính mạng."
        },
        {
          id: "it3_4_4",
          level: 2,
          question: "Để tiết kiệm điện năng cho gia đình và bảo vệ tài nguyên quốc gia, học sinh cần làm gì?",
          options: [
            "Bật tất cả quạt và đèn trong nhà cả ngày lẫn đêm",
            "Tắt đèn học, quạt điện và máy tính ngay khi rời khỏi phòng học",
            "Mở toang cửa tủ lạnh để làm mát phòng",
            "Bật điều hòa ở mức 16 độ C suốt mùa đông"
          ],
          correct: 1,
          explanation: "Tắt các thiết bị điện khi không sử dụng là hành động văn minh, giúp tiết kiệm chi phí cho gia đình và bảo vệ môi trường."
        },
        {
          id: "it3_4_5",
          level: 3,
          question: "Khi quạt điện đang quay với tốc độ cao, hành vi nào dưới đây là <strong>sai quy tắc an toàn</strong>?",
          options: [
            "Thò ngón tay hoặc chọc bút chì vào lồng quạt",
            "Điều chỉnh nút xoay túp-năng để quạt quay đảo gió",
            "Để quạt cách người một khoảng vừa phải",
            "Bấm nút hẹn giờ tắt quạt"
          ],
          correct: 0,
          explanation: "Cánh quạt đang quay có lực rất mạnh, chọc tay hoặc vật dụng vào lồng quạt sẽ gây gãy cánh quạt và đứt tay chảy máu."
        },
        {
          id: "it3_4_6",
          level: 3,
          question: "Máy thu thanh (radio) mang lại thông tin chủ yếu ở dạng nào cho người nghe?",
          options: ["Dạng chữ viết", "Dạng hình ảnh chuyển động", "Dạng âm thanh (tiếng nói, âm nhạc, tin tức thời sự)", "Dạng mùi vị"],
          correct: 2,
          explanation: "Máy thu thanh thu nhận sóng radio và phát ra thông tin hoàn toàn bằng âm thanh qua loa phát."
        },
        {
          id: "it3_4_7",
          level: 4,
          question: "Khi muốn rút phích cắm của quạt điện ra khỏi ổ cắm tường, thao tác chuẩn xác an toàn nhất là gì?",
          options: [
            "Đứng từ xa cầm dây điện giật mạnh thật nhanh",
            "Dùng một tay giữ chặt mặt ổ cắm, tay kia cầm chắc vào phần vỏ nhựa cách điện của phích cắm và kéo thẳng dứt khoát ra",
            "Lấy kéo cắt đứt dây điện",
            "Dùng que sắt cạy phích cắm ra"
          ],
          correct: 1,
          explanation: "Cầm trực tiếp vào vỏ cách điện của phích cắm để tránh làm đứt lõi đồng bên trong dây và không gây hở điện."
        },
        {
          id: "it3_4_8",
          level: 4,
          question: "Gia đình bạn Tuấn mua một chiếc tivi thông minh mới. Để xem tivi bảo vệ thị lực và thắt chặt tình cảm gia đình, các bạn nên làm theo lời khuyên nào?",
          options: [
            "Ngồi sát màn hình 50cm và xem liên tục 8 tiếng mỗi ngày",
            "Cùng xem các chương trình khoa học, khám phá bổ ích cùng bố mẹ ở khoảng cách từ 2m đến 3m, không xem trong phòng tối om",
            "Vừa ăn cơm vừa dán mắt vào tivi không nói chuyện với ai",
            "Mở âm lượng tivi to hết cỡ vào ban đêm"
          ],
          correct: 1,
          explanation: "Khoảng cách xem hợp lý và chương trình chọn lọc giúp thư giãn lành mạnh mà không ảnh hưởng tiêu cực đến mắt và lối sống."
        }
      ]
    },
    {
      id: "thu_cong_sang_tao_do_choi",
      name: "Chủ Đề 5: Thủ Công Kỹ Thuật & Sáng Tạo Đồ Chơi",
      icon: "✂️",
      desc: "Sử dụng dụng cụ thủ công an toàn (kéo, hồ dán, thước kẻ); Quy trình làm đồ dùng học tập và đồ chơi sáng tạo từ vật liệu tái chế.",
      theory: {
        highlights: [
          {
            icon: "✂️",
            title: "Quy tắc an toàn khi dùng kéo và dao trổ",
            content: "• Cầm kéo đúng cách: Ngón cái luồn vào một quai, ngón giữa và áp út vào quai còn lại, ngón trỏ đỡ phía dưới.<br/>• Khi đưa kéo cho bạn: Phải thu lưỡi kéo lại, cầm vào phần lưỡi kéo và đưa <strong>phần cán kéo</strong> về phía bạn.<br/>• Không vừa đi vừa cầm kéo chạy nhảy; cất kéo cẩn thận vào hộp sau khi sử dụng xong."
          },
          {
            icon: "📦",
            title: "Làm ống đựng bút từ lõi giấy và bìa carton",
            content: "• <strong>Vật liệu:</strong> Lõi giấy vệ sinh hoặc ống nhựa sạch, bìa carton cứng, giấy màu thủ công, hồ dán, bút màu trang trí.<br/>• <strong>Các bước thực hiện:</strong><br/>1. Cắt đáy tròn bằng bìa cứng dán cố định vào một đầu ống.<br/>2. Cắt giấy màu bọc xung quanh thân ống bút.<br/>3. Vẽ trang trí hình con vật (tai thỏ, gấu, mèo) gắn lên thân ống.<br/>4. Hoàn thiện và đặt thước kẻ, bút viết vào ngăn nắp."
          },
          {
            icon: "♻️",
            title: "Ý nghĩa của việc tái chế vật liệu thủ công",
            content: "• Giúp tiết kiệm chi phí mua đồ chơi.<br/>• Giảm thiểu rác thải nhựa và giấy ra môi trường tự nhiên.<br/>• Rèn luyện đôi bàn tay khéo léo, óc sáng tạo và tinh thần yêu lao động."
          }
        ]
      },
      questions: [
        {
          id: "it3_5_1",
          level: 1,
          question: "Khi chuyền kéo cắt giấy cho bạn bè mượn, cách làm nào là <strong>đúng quy tắc an toàn</strong>?",
          options: [
            "Chĩa mũi kéo nhọn thẳng về phía mặt bạn",
            "Cầm gọn phần lưỡi kéo trong tay và đưa phần cán kéo hướng về phía bạn",
            "Ném chiếc kéo qua bàn cho bạn bắt",
            "Mở rộng hai lưỡi kéo rồi đưa cho bạn"
          ],
          correct: 1,
          explanation: "Đưa phần cán kéo giúp người nhận cầm chắc tay cầm mà không bị mũi kéo nhọn đâm trúng vào tay."
        },
        {
          id: "it3_5_2",
          level: 1,
          question: "Vật liệu nào sau đây là <strong>vật liệu tái chế</strong> thân thiện với môi trường có thể dùng làm đồ chơi thủ công?",
          options: ["Lõi cuộn giấy và vỏ hộp sữa giấy sạch", "Bình ắc quy hỏng", "Mảnh thủy tinh sắc nhọn", "Dây điện trần"],
          correct: 0,
          explanation: "Lõi giấy và hộp sữa sạch là vật liệu nhẹ, an toàn, dễ cắt dán sáng tạo đồ chơi cho học sinh."
        },
        {
          id: "it3_5_3",
          level: 2,
          question: "Để làm một chiếc ống đựng bút hình chú thỏ xinh xắn từ lõi giấy carton, bước đầu tiên cần làm là gì?",
          options: [
            "Cắt một hình tròn bằng bìa cứng để dán làm đáy kín cho ống",
            "Đổ bút vào ống ngay lập tức",
            "Lấy búa đập bẹp lõi giấy",
            "Bôi keo dán khắp bàn học"
          ],
          correct: 0,
          explanation: "Cần làm đáy kín trước để các đồ vật như bút chì, thước kẻ khi cắm vào không bị rơi tụt xuống dưới."
        },
        {
          id: "it3_5_4",
          level: 2,
          question: "Sau khi bôi hồ dán (keo dán giấy) lên các mép giấy thủ công, em nên làm gì để giấy dính chắc và phẳng phiu?",
          options: [
            "Dùng ngón tay miết nhẹ nhàng đều từ giữa ra ngoài mép và chờ vài phút cho keo khô",
            "Lấy nước hắt vào chỗ dán keo",
            "Kéo căng giấy thật mạnh cho rách",
            "Vò nát tờ giấy rồi vứt đi"
          ],
          correct: 0,
          explanation: "Miết nhẹ đều tay giúp loại bỏ bọt khí, keo dán bám đều giúp sản phẩm phẳng và chắc chắn."
        },
        {
          id: "it3_5_5",
          level: 3,
          question: "Em muốn làm một chiếc chong chóng quay bằng giấy màu, ngoài giấy thủ công và que cầm, dụng cụ không thể thiếu để chong chóng quay tròn là gì?",
          options: ["Một chiếc đinh gút (hoặc ghim nhọn có chốt xoay) và hạt cườm đệm", "Một cuộn chỉ", "Một cục tẩy chì", "Một chiếc compa"],
          correct: 0,
          explanation: "Đinh gút xỏ qua tâm chong chóng và có hạt cườm ngăn cách tạo trục quay tự do khi có gió thổi."
        },
        {
          id: "it3_5_6",
          level: 3,
          question: "Sau khi hoàn thành sản phẩm cắt dán thủ công trong tiết học Công nghệ, em cần làm gì trước khi ra chơi?",
          options: [
            "Bỏ mặc giấy vụn và keo dán trên sàn nhà rồi chạy ra ngoài",
            "Thu dọn toàn bộ giấy vụn bỏ vào thùng rác, đậy nắp lọ keo dán, cất kéo vào hộp và rửa sạch tay",
            "Lấy kéo cắt vào áo bạn",
            "Đổ nước lau bảng ra sàn nhà"
          ],
          correct: 1,
          explanation: "Giữ gìn vệ sinh lớp học và bàn học sau giờ thực hành là tiêu chuẩn đạo đức và kỹ năng sống cần thiết."
        },
        {
          id: "it3_5_7",
          level: 4,
          question: "Tại sao việc tận dụng các chai nhựa bỏ đi để tự chế thành chậu trồng cây cảnh nhỏ lại có ý nghĩa to lớn với môi trường?",
          options: [
            "Vì làm vậy vừa có đồ dùng trang trí đẹp mắt, vừa giảm lượng rác thải nhựa khó phân hủy ra ngoài tự nhiên, góp phần bảo vệ hành tinh xanh",
            "Vì chai nhựa rất đắt tiền",
            "Vì không ai bán chậu hoa bằng sứ nữa",
            "Chỉ để cho vui không có ý nghĩa gì"
          ],
          correct: 0,
          explanation: "Nhựa mất hàng trăm năm mới phân hủy; việc tái chế sáng tạo kéo dài vòng đời vật liệu và lan tỏa lối sống xanh."
        },
        {
          id: "it3_5_8",
          level: 4,
          question: "Để làm một chiếc xe đồ chơi chuyển động được bằng nắp chai nhựa và que tre, nguyên lý kỹ thuật nào là quan trọng nhất?",
          options: [
            "Xe phải được sơn màu thật rực rỡ",
            "Các lỗ khoan ở tâm 4 nắp chai phải chính xác và trục bánh xe bằng que tre phải quay trơn tru trong ống hút cố định dưới gầm xe",
            "Xe phải càng nặng càng tốt",
            "Dán chết cứng bánh xe vào thân xe không cho quay"
          ],
          correct: 1,
          explanation: "Bánh xe phải đồng tâm và trục quay tự do bên trong ống dẫn hướng thì lực đẩy mới làm chiếc xe lăn bánh được."
        }
      ]
    }
  ]
};
