/**
 * it-4-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Tin Học & Công Nghệ Lớp 4
 * Chuẩn Chương trình Giáo dục phổ thông (GDPT) 2018
 * (Kết nối tri thức, Chân trời sáng tạo, Cánh diều)
 */

window.IT4_DATA = {
  topics: [
    {
      id: "may_tinh_va_em",
      name: "Máy Tính & Em: Phần Cứng & Gõ 10 Ngón",
      icon: "💻",
      desc: "Thiết bị vào - ra, tư thế ngồi học máy tính đúng cách, hàng phím cơ sở và an toàn Internet.",
      theory: {
        highlights: [
          {
            icon: "🖥️",
            title: "Các bộ phận của Máy tính",
            content: "• <strong>Thiết bị vào (Input):</strong> Bàn phím (gõ ký tự), chuột (điều khiển con trỏ), micro (thu âm), máy quét scanner.<br/>• <strong>Thiết bị ra (Output):</strong> Màn hình (hiển thị hình ảnh, chữ viết), máy in (in ra giấy), loa / tai nghe (phát âm thanh).<br/>• <strong>Thân máy:</strong> Chứa bộ vi xử lý (CPU) - được ví như bộ não điều khiển mọi hoạt động của máy tính."
          },
          {
            icon: "⌨️",
            title: "Quy tắc Gõ 10 ngón chuẩn",
            content: "• <strong>Hàng phím cơ sở:</strong> A - S - D - F - G - H - J - K - L - ;<br/>• <strong>2 phím có gờ định vị:</strong> Phím <strong>F</strong> (ngón trỏ tay trái đặt lên) và phím <strong>J</strong> (ngón trỏ tay phải đặt lên).<br/>• 2 ngón tay cái luôn đặt hờ trên phím Cách (Spacebar).<br/>• Luyện gõ đúng ngón giúp gõ nhanh, không cần nhìn bàn phím và không bị mỏi tay."
          },
          {
            icon: "💺",
            title: "Tư thế ngồi học máy tính",
            content: "• Lưng thẳng, vai thả lỏng, hai bàn chân đặt phẳng trên sàn nhà.<br/>• Mắt cách màn hình từ 50cm đến 70cm, tầm mắt hơi thấp hơn cạnh trên màn hình một chút.<br/>• Không ngồi học liên tục quá 30 - 45 phút, cần đứng dậy vận động nhẹ và nhìn ra xa để thư giãn mắt."
          },
          {
            icon: "🛡️",
            title: "An toàn & Văn hóa Internet",
            content: "• Không chia sẻ mật khẩu, số điện thoại, địa chỉ nhà cho người lạ trên mạng.<br/>• Tôn trọng bản quyền tác giả: ghi rõ nguồn gốc khi sử dụng hình ảnh, bài viết của người khác.<br/>• Khi gặp nội dung xấu hoặc bị bắt nạt trên mạng, hãy báo ngay cho cha mẹ hoặc thầy cô."
          }
        ]
      },
      questions: [
        {
          id: "it_1",
          level: 1,
          question: "Bộ phận nào của máy tính có chức năng đưa dữ liệu hình ảnh, video và chữ viết ra ngoài cho người dùng nhìn thấy?",
          options: ["Bàn phím", "Màn hình", "Con chuột", "Máy quét (Scanner)"],
          correct: 1,
          explanation: "Màn hình (Monitor) là thiết bị ra quan trọng nhất, hiển thị trực quan thông tin kết quả xử lý của máy tính."
        },
        {
          id: "it_2",
          level: 1,
          question: "Trên hàng phím cơ sở của bàn phím máy tính, hai phím nào có <strong>gờ nổi định vị</strong> giúp ngón trỏ nhận biết vị trí chuẩn?",
          options: ["Phím G và H", "Phím F và J", "Phím A và L", "Phím D và K"],
          correct: 1,
          explanation: "Phím F (ngón trỏ trái) và phím J (ngón trỏ phải) luôn có gờ nổi nhỏ để người gõ định vị vị trí tay mà không cần nhìn xuống."
        },
        {
          id: "it_3",
          level: 2,
          question: "Khoảng cách an toàn từ mắt đến màn hình máy tính được các bác sĩ khuyên dùng là bao nhiêu?",
          options: [
            "10 cm - 20 cm (càng gần càng rõ)",
            "50 cm - 70 cm (khoảng một sải tay)",
            "1.5 mét - 2 mét",
            "Không cần giữ khoảng cách"
          ],
          correct: 1,
          explanation: "Khoảng cách 50 - 70 cm giúp mắt không bị điều tiết quá độ, chống cận thị và khô mỏi mắt."
        },
        {
          id: "it_4",
          level: 2,
          question: "Khi một người lạ trên mạng xã hội nhắn tin hỏi địa chỉ nhà riêng, số điện thoại của bố mẹ và hẹn gặp riêng ngoài công viên, em nên xử lý như thế nào?",
          options: [
            "Cung cấp ngay và đi gặp một mình",
            "Tuyệt đối không cung cấp thông tin cá nhân và báo ngay cho bố mẹ, thầy cô biết",
            "Đăng thông tin đó lên nhóm chat của lớp",
            "Gửi mật khẩu tài khoản cho người đó"
          ],
          correct: 1,
          explanation: "Bảo vệ thông tin cá nhân là nguyên tắc vàng khi dùng Internet để phòng tránh kẻ xấu lừa đảo hoặc bắt cóc."
        },
        {
          id: "it_5",
          level: 3,
          question: "Bộ phận nào trong thân máy vi tính được xem là <strong>\"bộ não\"</strong> chịu trách nhiệm xử lý mọi tính toán và điều khiển hoạt động của toàn hệ thống?",
          options: [
            "Bộ xử lý trung tâm (CPU)",
            "Bộ nguồn máy tính (Power Supply)",
            "Ổ đĩa quang CD/DVD",
            "Vỏ thùng máy (Case)"
          ],
          correct: 0,
          explanation: "CPU (Central Processing Unit) là bộ não của máy vi tính, thực hiện các phép tính logic và điều phối dữ liệu."
        },
        {
          id: "it_6",
          level: 3,
          question: "Khi làm bài tập tìm kiếm tư liệu trên Internet để làm bài thuyết trình, hành động nào dưới đây thể hiện <strong>sự tôn trọng bản quyền thông tin</strong>?",
          options: [
            "Tải hình ảnh của tác giả khác về và xóa tên tác giả, ghi tên mình vào",
            "Sao chép nguyên văn cả bài viết và tự nhận là bài tự làm",
            "Trích dẫn nguồn tác giả hoặc đường link trang web nguồn nơi đã tìm kiếm thông tin",
            "Bán bài viết của người khác lấy tiền"
          ],
          correct: 2,
          explanation: "Ghi rõ tác giả và nguồn gốc tài liệu là văn hóa sử dụng thông tin văn minh, tôn trọng luật sở hữu trí tuệ."
        },
        {
          id: "it_7",
          level: 4,
          question: "Trong khi luyện gõ 10 ngón tay, ngón tay út của bàn tay trái phụ trách quản lý phím nào trên hàng phím cơ sở?",
          options: ["Phím A", "Phím S", "Phím D", "Phím F"],
          correct: 0,
          explanation: "Bàn tay trái trên hàng cơ sở: ngón út (A), ngón áp út (S), ngón giữa (D), ngón trỏ (F và G)."
        },
        {
          id: "it_8",
          level: 4,
          question: "Một bạn học sinh bị đau mỏi lưng và mờ mắt sau 2 giờ liên tục ngồi chơi game trước máy tính. Nguyên nhân chính dẫn đến tình trạng này là gì?",
          options: [
            "Do chuột máy tính bị hết pin",
            "Do ngồi sai tư thế, cúi gập lưng quá sát màn hình và không cho mắt nghỉ ngơi định kỳ",
            "Do bàn phím máy tính gõ quá nhẹ",
            "Do máy tính nối mạng Internet tốc độ cao"
          ],
          correct: 1,
          explanation: "Ngồi khom lưng, dí sát mắt vào màn hình và không nghỉ ngơi sau mỗi 30-45 phút gây cong vẹo cột sống và hội chứng mỏi thị giác màn hình."
        },
        {
          id: "it4_1_9",
          level: 1,
          question: "Thiết bị nào sau đây là thiết bị đưa thông tin vào máy tính (Thiết bị vào - Input device)?",
          options: ["Bàn phím và Chuột", "Màn hình", "Máy in", "Loa máy tính"],
          correct: 0,
          explanation: "Bàn phím và chuột giúp người dùng nhập văn bản và điều khiển lệnh vào máy tính (thiết bị vào)."
        },
        {
          id: "it4_1_10",
          level: 2,
          question: "Tư thế ngồi học máy tính nào sau đây là đúng khoa học giúp bảo vệ mắt và cột sống?",
          options: ["Lưng thẳng, mắt ngang tầm đỉnh màn hình và cách màn hình khoảng 50 - 70 cm, hai bàn chân đặt bằng phẳng trên sàn", "Nằm ngửa trên giường kê máy tính lên bụng", "Ghé sát mắt cách màn hình 10 cm để nhìn rõ", "Ngồi vẹo sang một bên và bắt chéo chân liên tục"],
          correct: 0,
          explanation: "Tư thế ngồi chuẩn công thái học giúp bảo vệ thị lực, chống gù lưng vẹo cột sống và giảm mỏi cổ vai gáy."
        },
        {
          id: "it4_1_11",
          level: 2,
          question: "Bộ phận nào được coi là 'Bộ não' của máy tính, thực hiện các phép tính và điều khiển mọi hoạt động của hệ thống?",
          options: ["Bộ vi xử lý (CPU)", "Thanh RAM", "Ổ đĩa cứng", "Chuột quang"],
          correct: 0,
          explanation: "CPU (Central Processing Unit) là bộ xử lý trung tâm, đóng vai trò như bộ não điều khiển máy tính."
        },
        {
          id: "it4_1_12",
          level: 3,
          question: "Hành vi nào sau đây là NGUY HIỂM và tuyệt đối không được làm trong phòng máy tính của trường?",
          options: ["Dùng tay hoặc kim loại chọc vào ổ cắm điện, dây điện và vừa ăn uống vừa dùng bàn phím", "Bật máy tính bằng nút nguồn theo hướng dẫn của thầy cô", "Dùng chuột rê nhẹ nhàng trên bàn di chuột", "Tắt máy tính bằng lệnh Shut down sau khi học xong"],
          correct: 0,
          explanation: "Chọc vào dây điện gây nguy cơ giật điện chết người; ăn uống trong phòng máy dễ làm đổ nước chập cháy mạch điện tử."
        },
        {
          id: "it4_1_13",
          level: 3,
          question: "Phần mềm máy tính (Software) khác với phần cứng máy tính (Hardware) ở đặc điểm nào?",
          options: ["Phần mềm là các chương trình, dữ liệu chạy trong máy tính (không cầm nắm được); phần cứng là các thiết bị vật lý cụ thể", "Phần mềm là vỏ ngoài của máy tính", "Phần cứng là hình ảnh hiển thị trên màn hình", "Cả hai là một không có gì khác nhau"],
          correct: 0,
          explanation: "Phần cứng là các linh kiện vật lý (màn hình, chuột, bàn phím); phần mềm là các chương trình (Windows, Word, game học tập)."
        },
        {
          id: "it4_1_14",
          level: 4,
          question: "Quy trình tắt máy tính an toàn, đúng chuẩn sau khi kết thúc buổi học là gì?",
          options: ["Lưu lại bài làm ➔ Đóng các phần mềm đang mở ➔ Bấm nút Start chọn Power chọn Shut down", "Rút phích cắm điện ra khỏi ổ ngay lập tức", "Bấm giữ nút nguồn trên thùng máy 10 giây", "Chỉ cần tắt màn hình và bỏ đi"],
          correct: 0,
          explanation: "Tắt máy tính qua lệnh 'Shut down' giúp hệ điều hành lưu trữ dữ liệu an toàn, bảo vệ tuổi thọ ổ cứng."
        }
      ]
    },
    {
      id: "soan_thao_van_ban",
      name: "Soạn Thảo Văn Bản & Bài Trình Chiếu",
      icon: "📑",
      desc: "Kiểu gõ tiếng Việt Telex, định dạng văn bản Word và thiết kế bài trình chiếu PowerPoint.",
      theory: {
        highlights: [
          {
            icon: "🔤",
            title: "Quy tắc gõ tiếng Việt kiểu Telex",
            content: "• <strong>Các chữ có dấu mũ:</strong> aa ➔ â | ee ➔ ê | oo ➔ ô | aw ➔ ă | ow ➔ ơ | uw ➔ ư | dd ➔ đ.<br/>• <strong>Các dấu thanh:</strong> s (dấu sắc), f (dấu huyền), r (dấu hỏi), x (dấu ngã), j (dấu nặng).<br/>• <em>Mẹo nhớ:</em> Sắc - S, Huyền - F, Hỏi - R, Ngã - X, Nặng - J."
          },
          {
            icon: "🖌️",
            title: "Định dạng Văn bản trong Word",
            content: "• <strong>Ctrl + B:</strong> In đậm chữ (Bold).<br/>• <strong>Ctrl + I:</strong> In nghiêng chữ (Italic).<br/>• <strong>Ctrl + U:</strong> Gạch chân dưới chữ (Underline).<br/>• <strong>Căn lề đoạn văn:</strong> Căn trái (Ctrl + L), Căn giữa (Ctrl + E), Căn phải (Ctrl + R), Căn đều 2 bên (Ctrl + J)."
          },
          {
            icon: "📽️",
            title: "Bài trình chiếu (PowerPoint)",
            content: "• Mỗi trang trình chiếu gọi là một <strong>Slide</strong>.<br/>• Để tạo một bài trình chiếu hấp dẫn: Chọn màu nền trang nhã, phông chữ to rõ ràng, hình ảnh minh họa sắc nét và số lượng chữ ngắn gọn súc tích.<br/>• Tạo hiệu ứng chuyển trang (Transitions) và hiệu ứng chuyển động cho đối tượng (Animations) vừa phải, không làm rối mắt người xem."
          }
        ]
      },
      questions: [
        {
          id: "st_1",
          level: 1,
          question: "Để gõ được từ <strong>\"VIỆT NAM\"</strong> theo kiểu gõ Telex, em cần gõ chuỗi phím nào dưới đây?",
          options: [
            "V i e e j t   N a m",
            "V i e r t   N a m",
            "V i e e s t   N a m",
            "V i e e f t   N a m"
          ],
          correct: 0,
          explanation: "ee tạo thành chữ 'ê', j tạo thành dấu 'nặng' ➔ 'Việt'."
        },
        {
          id: "st_2",
          level: 1,
          question: "Tổ hợp phím tắt nào dưới đây dùng để <strong>in đậm (Bold)</strong> một đoạn văn bản đã chọn trong phần mềm Word?",
          options: ["Ctrl + I", "Ctrl + B", "Ctrl + U", "Ctrl + S"],
          correct: 1,
          explanation: "Ctrl + B (Bold) là phím tắt in đậm, Ctrl + I là in nghiêng, Ctrl + U là gạch chân."
        },
        {
          id: "st_3",
          level: 2,
          question: "Trong phần mềm trình chiếu PowerPoint, một trang trình chiếu đơn lẻ được gọi là gì?",
          options: ["Document", "Slide (Trang chiếu)", "Table", "Sheet"],
          correct: 1,
          explanation: "Một file trình chiếu gồm nhiều trang chiếu, mỗi trang được gọi là một Slide."
        },
        {
          id: "st_4",
          level: 2,
          question: "Muốn chèn một bức ảnh đẹp từ máy tính vào trang văn bản Word, em chọn thẻ lệnh nào trên thanh công cụ?",
          options: ["Thẻ Home", "Thẻ Insert ➔ Pictures", "Thẻ View", "Thẻ Layout"],
          correct: 1,
          explanation: "Thẻ Insert (Chèn) chứa các công cụ chèn đối tượng: Pictures (ảnh), Shapes (hình khối), Table (bảng)."
        },
        {
          id: "st_5",
          level: 3,
          question: "Khi gõ văn bản tiếng Việt, quy tắc đặt dấu câu (dấu phẩy, dấu chấm, dấu chấm hỏi) nào dưới đây là <strong>đúng chuẩn quốc tế</strong>?",
          options: [
            "Dấu câu viết cách chữ phía trước một khoảng trắng , rồi viết tiếp.",
            "Dấu câu phải viết sát vào từ đứng trước nó, tiếp theo là một dấu cách (khoảng trắng) rồi mới viết từ tiếp theo.",
            "Cách chữ phía trước một khoảng trắng và cách chữ phía sau một khoảng trắng .",
            "Không bao giờ dùng dấu cách sau dấu chấm."
          ],
          correct: 1,
          explanation: "Quy tắc chính tả văn bản: dấu câu viết liền sát ký tự trước nó (không có khoảng cách), sau dấu câu bắt buộc phải có một dấu cách (space)."
        },
        {
          id: "st_6",
          level: 3,
          question: "Khi thiết kế một bài thuyết trình về bảo vệ môi trường trên PowerPoint, cách trình bày nào dưới đây được đánh giá là <strong>chuyên nghiệp và dễ nhìn nhất</strong>?",
          options: [
            "Chép kín cả trang slide một đoạn văn dài 50 dòng chữ nhỏ xíu không có hình ảnh",
            "Chọn màu chữ màu vàng trên nền màu trắng tinh khiến khán giả không đọc được chữ",
            "Mỗi slide chỉ nêu 3-4 ý chính ngắn gọn, chữ to rõ ràng kèm theo hình ảnh hoặc sơ đồ minh họa sinh động",
            "Cài đặt hiệu ứng chữ bay lượn nhấp nháy liên tục 10 lần một giây"
          ],
          correct: 2,
          explanation: "Slide thuyết trình hiệu quả cần cô đọng, tương phản màu sắc tốt và có hình ảnh minh họa trực quan."
        },
        {
          id: "st_7",
          level: 4,
          question: "Em đang gõ kiểu Telex, làm thế nào để gõ được chữ <strong>\"ĐƯỜNG PHỐ\"</strong>?",
          options: [
            "dduowngf phoos",
            "duongf phos",
            "dduwongf phoox",
            "dduowngr phoor"
          ],
          correct: 0,
          explanation: "dd (đ) + uow (ươ) + ng + f (huyền) = đường; ph + oo (ô) + s (sắc) = phố ➔ dduowngf phoos."
        },
        {
          id: "st_8",
          level: 4,
          question: "Để bắt đầu trình chiếu toàn màn hình bài thuyết trình PowerPoint từ trang đầu tiên, ta có thể nhấn phím nào trên hàng phím chức năng?",
          options: ["Phím Esc", "Phím Enter", "Phím F5", "Phím F1"],
          correct: 2,
          explanation: "Phím F5 là phím tắt tiêu chuẩn để bắt đầu trình chiếu Slide Show từ slide đầu tiên."
        },
        {
          id: "it4_2_9",
          level: 1,
          question: "Hàng phím cơ sở (Home row) trên bàn phím máy tính có hai phím có gờ định vị cho ngón trỏ của hai bàn tay là hai phím nào?",
          options: ["Phím F và phím J", "Phím A và phím L", "Phím G và phím H", "Phím Space và phím Enter"],
          correct: 0,
          explanation: "Phím F (ngón trỏ tay trái) và phím J (ngón trỏ tay phải) có gờ nổi nhỏ giúp định vị bàn tay gõ 10 ngón không cần nhìn."
        },
        {
          id: "it4_2_10",
          level: 2,
          question: "Phím dài nhất nằm ở hàng phím dưới cùng của bàn phím dùng để tạo khoảng cách giữa các từ là phím gì?",
          options: ["Phím Space (phím cách)", "Phím Enter", "Phím Shift", "Phím Backspace"],
          correct: 0,
          explanation: "Phím Space bar (phím cách) do hai ngón tay cái phụ trách dùng để gõ dấu cách giữa các từ."
        },
        {
          id: "it4_2_11",
          level: 2,
          question: "Trong phần mềm gõ tiếng Việt kiểu Telex, để gõ được chữ 'Ô' và dấu 'Hỏi' ta gõ theo quy tắc nào?",
          options: ["Gõ 'oo' ra chữ 'ô' và gõ chữ 'r' ra dấu hỏi", "Gõ 'o7' ra chữ 'ô'", "Gõ 'ow' ra chữ 'ô'", "Gõ 'os' ra chữ 'ô'"],
          correct: 0,
          explanation: "Kiểu Telex: oo ➔ ô, aa ➔ â, ee ➔ ê; s: sắc, f: huyền, r: hỏi, x: ngã, j: nặng."
        },
        {
          id: "it4_2_12",
          level: 3,
          question: "Tổ hợp phím tắt nào trong phần mềm soạn thảo văn bản Word dùng để Lưu bài (Save) nhanh nhất?",
          options: ["Ctrl + S", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
          correct: 0,
          explanation: "Ctrl + S (Save) là phím tắt tiêu chuẩn quốc tế để lưu tệp văn bản."
        },
        {
          id: "it4_2_13",
          level: 3,
          question: "Để xóa một ký tự đứng ngay PHÍA TRƯỚC con trỏ soạn thảo văn bản, ta nhấn phím nào?",
          options: ["Phím Backspace (←)", "Phím Delete", "Phím Enter", "Phím Tab"],
          correct: 0,
          explanation: "Backspace xóa ký tự bên trái (phía trước) con trỏ; Delete xóa ký tự bên phải (phía sau) con trỏ."
        },
        {
          id: "it4_2_14",
          level: 4,
          question: "Quy tắc đặt dấu thanh tiếng Việt chuẩn trong soạn thảo văn bản quy định như thế nào?",
          options: ["Gõ hết các chữ cái của tiếng trước rồi mới gõ phím dấu thanh ở cuối tiếng", "Gõ dấu thanh trước rồi mới gõ chữ cái", "Gõ dấu thanh ở bất cứ vị trí nào cũng được", "Chỉ gõ dấu thanh sau khi kết thúc cả câu dài"],
          correct: 0,
          explanation: "Quy tắc gõ chuẩn: Gõ liền các chữ cái rồi gõ dấu thanh ở cuối từ (ví dụ: t-o-a-n-s ➔ toán)."
        }
      ]
    },
    {
      id: "trong_hoa_cay_canh",
      name: "Công Nghệ: Trồng Hoa & Cây Cảnh",
      icon: "🌸",
      desc: "Quy trình chọn chậu, chuẩn bị đất và giá thể, gieo hạt, trồng cây con và kỹ thuật chăm sóc tưới tiêu.",
      theory: {
        highlights: [
          {
            icon: "🪴",
            title: "Dụng cụ & Vật liệu trồng cây",
            content: "• <strong>Chậu trồng:</strong> Chậu đất nung, chậu gốm sứ hoặc chậu nhựa (đáy chậu bắt buộc phải có lỗ thoát nước để tránh cây bị úng rễ).<br/>• <strong>Giá thể / Đất trồng:</strong> Hỗn hợp đất màu mỡ, xơ dừa, tro trấu và phân trùn quế tơi xốp, giàu dinh dưỡng.<br/>• <strong>Dụng cụ chăm sóc:</strong> Xẻng nhỏ xúc đất, bình tưới hoa sen / bình xịt phun sương, kéo tỉa cành."
          },
          {
            icon: "🌱",
            title: "Quy trình Trồng cây trong chậu",
            content: "• <strong>Bước 1:</strong> Đặt mảnh sành nhỏ hoặc lưới che lỗ thoát nước đáy chậu.<br/>• <strong>Bước 2:</strong> Cho một lớp giá thể vào khoảng 1/2 chậu.<br/>• <strong>Bước 3:</strong> Đặt cây con đứng thẳng vào giữa chậu.<br/>• <strong>Bước 4:</strong> Cho thêm giá thể xung quanh gốc cây, ấn nhẹ tay quanh gốc để giữ cây đứng vững.<br/>• <strong>Bước 5:</strong> Tưới đẫm nước bằng bình hoa sen và đặt chậu nơi râm mát trong 2-3 ngày đầu."
          },
          {
            icon: "🚿",
            title: "Chăm sóc & Phòng trừ sâu bệnh",
            content: "• Tưới nước đều đặn vào buổi sáng sớm hoặc chiều mát (tránh tưới giữa trưa nắng gắt).<br/>• Bắt sâu bọ, ngắt bỏ lá úa, lá héo vàng để tránh lây lan nấm bệnh.<br/>• Bón phân định kỳ theo hướng dẫn an toàn."
          }
        ]
      },
      questions: [
        {
          id: "thc_1",
          level: 1,
          question: "Tại sao ở đáy các chậu trồng hoa và cây cảnh luôn cần phải có một hoặc nhiều <strong>lỗ nhỏ thoát nước</strong>?",
          options: [
            "Để rễ cây chui ra ngoài đất",
            "Để thoát nước thừa khi tưới, tránh làm ngập úng thối rễ cây",
            "Để làm nhẹ bớt trọng lượng của chậu",
            "Để côn trùng chui vào làm tổ"
          ],
          correct: 1,
          explanation: "Lỗ thoát nước giúp nước dư thừa chảy ra ngoài, tạo độ thoáng khí cho đất, ngăn ngừa rễ cây bị nghẹt thở và thối rễ."
        },
        {
          id: "thc_2",
          level: 1,
          question: "Thời điểm nào trong ngày là <strong>thích hợp nhất</strong> để tưới nước cho cây hoa trong chậu?",
          options: [
            "Vào giữa trưa nắng gắt 12 giờ trưa",
            "Buổi sáng sớm hoặc chiều mát",
            "Chỉ tưới vào lúc nửa đêm",
            "Lúc trời đang có mưa to"
          ],
          correct: 1,
          explanation: "Tưới cây buổi sáng sớm hoặc chiều mát giúp cây hấp thụ nước tối ưu mà không bị sốc nhiệt cháy lá do nắng gắt."
        },
        {
          id: "thc_3",
          level: 2,
          question: "Khi trồng một cây hoa hồng con vào chậu mới, bước nào dưới đây cần được thực hiện <strong>ngay sau khi</strong> lấp đất quanh gốc?",
          options: [
            "Bón một lượng lớn thuốc trừ sâu hóa học",
            "Tưới nhẹ nước ẩm đều quanh gốc cây và để nơi râm mát",
            "Đem chậu ra phơi ngay dưới trời nắng chang chang 40°C",
            "Cắt trụi toàn bộ cành và lá cây"
          ],
          correct: 1,
          explanation: "Sau khi trồng cần tưới nước để rễ tiếp xúc chặt chẽ với đất mới và để nơi thoáng mát để cây con mau hồi sức."
        },
        {
          id: "thc_4",
          level: 2,
          question: "Giá thể trồng hoa chất lượng tốt thường là sự kết hợp của những thành phần nào?",
          options: [
            "Cát mịn và sỏi đá cứng",
            "Đất thịt tơi xốp, xơ dừa, tro trấu và phân hữu cơ hoai mục",
            "Xi măng và vôi sống",
            "Đất sét dính quánh không thoát nước"
          ],
          correct: 1,
          explanation: "Hỗn hợp đất thịt, xơ dừa, tro trấu cung cấp đầy đủ độ ẩm, độ thoáng khí và khoáng chất dinh dưỡng cho rễ cây."
        },
        {
          id: "thc_5",
          level: 3,
          question: "Nếu phát hiện trên cây hoa cúc có một vài chiếc lá bị sâu cắn thủng lỗ chỗ và có lá vàng úa, biện pháp xử lý an toàn và thân thiện với môi trường nhất là gì?",
          options: [
            "Phun thật nhiều thuốc trừ sâu hóa học nồng độ đậm đặc",
            "Nhổ vứt cả cây hoa đi",
            "Dùng tay bắt sâu (hoặc dùng nhíp) và ngắt bỏ các lá hỏng mang đi tiêu hủy",
            "Đổ nước sôi vào gốc cây"
          ],
          correct: 2,
          explanation: "Bắt sâu thủ công và ngắt bỏ lá bệnh là phương pháp sinh học an toàn cho sức khỏe gia đình và bảo vệ môi trường."
        },
        {
          id: "thc_6",
          level: 3,
          question: "Tại sao không nên dùng vòi nước có áp lực quá mạnh xịt thẳng trực tiếp vào gốc của một cây con mới trồng?",
          options: [
            "Vì làm tốn quá nhiều nước",
            "Vì tia nước mạnh sẽ xói mòn làm trơ gốc, gãy dập thân lá và đứt rễ non của cây",
            "Vì cây con thích nước nóng hơn",
            "Vì nước sẽ làm vỡ chậu sứ"
          ],
          correct: 1,
          explanation: "Cây con còn rất non yếu, dòng nước mạnh dễ làm bung rễ, trôi đất và dập nát mầm non. Nên dùng bình xịt hoa sen tưới hạt mịn."
        },
        {
          id: "thc_7",
          level: 4,
          question: "Một bạn học sinh trồng cây hoa mười giờ trong chậu kín không có lỗ đáy và ngày nào cũng tưới 3 lần nước ngập sũng. Sau 1 tuần, cây bị rũ lá, vàng úa và bốc mùi hôi ở gốc. Nguyên nhân chính là gì?",
          options: [
            "Cây bị thiếu nước",
            "Cây bị ngập úng nước lâu ngày khiến rễ bị ngạt thiếu không khí và bị thối rữa",
            "Cây hoa mười giờ không thích đất trồng",
            "Cây mọc quá nhiều hoa"
          ],
          correct: 1,
          explanation: "Nước ứ đọng không thoát được đẩy hết không khí ra khỏi các khe hở trong đất, khiến rễ cây thiếu dưỡng khí và chết ngạt sinh thối rễ."
        },
        {
          id: "thc_8",
          level: 4,
          question: "Việc trồng và tự tay chăm sóc hoa, cây cảnh xung quanh không gian lớp học và ngôi nhà đem lại những lợi ích to lớn nào?",
          options: [
            "Chỉ làm mất thời gian học tập",
            "Thanh lọc không khí, làm đẹp cảnh quan môi trường sống, bồi dưỡng tình yêu thiên nhiên và rèn luyện tính kiên nhẫn, chăm chỉ",
            "Thu hút nhiều loài rắn rết độc hại",
            "Làm tăng nhiệt độ phòng ở"
          ],
          correct: 1,
          explanation: "Cây xanh làm mát dịu mắt, lọc bụi bẩn, đem lại năng lượng tích cực và rèn luyện đức tính lao động tự giác cho học sinh."
        },
        {
          id: "it4_3_9",
          level: 1,
          question: "Dưới đáy chậu trồng hoa, cây cảnh thường được đục một hoặc vài lỗ nhỏ nhằm mục đích chính là gì?",
          options: ["Thoát nước thừa để tránh ngập úng rễ cây", "Cho rễ cây thò ra ngoài hóng gió", "Tiết kiệm đất trồng", "Trang trí cho đáy chậu đẹp hơn"],
          correct: 0,
          explanation: "Lỗ thoát nước ở đáy chậu giúp nước tưới thừa thoát ra, ngăn ngừa rễ cây bị thối ủng do thiếu khí."
        },
        {
          id: "it4_3_10",
          level: 2,
          question: "Giá thể (đất) dùng để trồng hoa trong chậu cần đảm bảo các điều kiện kỹ thuật cơ bản nào?",
          options: ["Tơi xốp, giữ ẩm tốt, giàu chất dinh dưỡng hữu cơ và sạch mầm bệnh", "Cát vàng tinh khiết không có chất khoáng", "Đất sét đặc quánh không thoát nước", "Đá cuội khô ráo hoàn toàn"],
          correct: 0,
          explanation: "Đất trồng cây cảnh trong chậu cần độ tơi xốp (trộn xơ dừa, trấu hun, phân trùn quế) để rễ phát triển hô hấp tốt."
        },
        {
          id: "it4_3_11",
          level: 2,
          question: "Thời điểm lý tưởng nhất trong ngày để tưới nước cho hoa và cây cảnh là lúc nào?",
          options: ["Sáng sớm hoặc chiều mát", "Giữa trưa nắng gắt 12 giờ trưa", "Ban đêm lúc nửa đêm", "Lúc nào cây cũng phải ngập trong nước"],
          correct: 0,
          explanation: "Tưới cây lúc sáng sớm hoặc chiều mát giúp cây hấp thụ nước từ từ; tưới lúc trưa nắng gắt làm cây bị 'sốc nhiệt' rụng lá."
        },
        {
          id: "it4_3_12",
          level: 3,
          question: "Các bước trồng cây con vào chậu theo đúng quy trình công nghệ gồm thứ tự nào sau đây?",
          options: ["Lót lưới/sỏi đáy chậu ➔ Cho đất vào 1/2 chậu ➔ Đặt bầu cây ngay ngắn ➔ Bổ sung đất xung quanh và nén nhẹ ➔ Tưới nước ẩm đất", "Cho cây vào trước rồi đổ đất lên ngọn", "Tưới nước đầy chậu rồi mới thả rễ cây vào", "Đổ đầy đất đến miệng chậu rồi cắm cành cây vào"],
          correct: 0,
          explanation: "Quy trình trồng cây khoa học đảm bảo gốc cây đứng vững, rễ tiếp xúc tốt với đất tơi xốp mà không bị dập nát."
        },
        {
          id: "it4_3_13",
          level: 3,
          question: "Khi chăm sóc cây hoa trong chậu, việc thường xuyên tỉa bỏ cành khô, lá vàng úa có lợi ích gì cho cây?",
          options: ["Giúp cây thông thoáng, tập trung dinh dưỡng nuôi chồi non và phòng ngừa sâu bệnh hại trú ngụ", "Làm cho cây trụi lá mau già", "Để cây không bao giờ nở hoa", "Chỉ để lấy cành khô làm củi đun"],
          correct: 0,
          explanation: "Tỉa bỏ cành lá sâu bệnh giúp cây khỏe mạnh, đón ánh sáng tốt và kích thích nụ hoa đâm chồi."
        },
        {
          id: "it4_3_14",
          level: 4,
          question: "Việc học sinh tự tay trồng và chăm sóc một chậu hoa nhỏ ở góc học tập hoặc hành lang trường mang lại ý nghĩa giáo dục gì?",
          options: ["Bồi dưỡng tình yêu thiên nhiên, rèn luyện tính kiên nhẫn, tinh thần trách nhiệm và tạo không gian xanh thư thái", "Để bán hoa kiếm thật nhiều tiền", "Để đỡ phải học bài môn khác", "Không có ý nghĩa gì đối với việc học"],
          correct: 0,
          explanation: "Trồng cây giáo dục lòng yêu lao động, trân trọng sự sống và ý thức bảo vệ môi trường sinh thái xanh."
        }
      ]
    },
    {
      id: "lap_ghep_mo_hinh",
      name: "Lắp Ghép Mô Hình Kỹ Thuật & Đồ Dùng Điện",
      icon: "⚙️",
      desc: "Chi tiết bộ lắp ghép mô hình kỹ thuật, an toàn sử dụng đồ điện gia đình (quạt, nồi cơm điện, đèn bàn).",
      theory: {
        highlights: [
          {
            icon: "🔩",
            title: "Bộ Lắp Ghép Kỹ Thuật Lớp 4",
            content: "• <strong>Các chi tiết chính:</strong> Tấm lớn, thanh thẳng nhiều lỗ, thanh chữ U, bánh xe, trục xe, ốc và vít.<br/>• <strong>Dụng cụ lắp ráp:</strong> Cờ-lê (giữ đai ốc) và Tua-vít (vặn siết đinh vít theo chiều kim đồng hồ).<br/>• <strong>Quy trình lắp ráp:</strong><br/>1. Quan sát hình mẫu và chuẩn bị đủ các chi tiết.<br/>2. Lắp từng bộ phận của mô hình (khung xe, sàn xe, trục bánh xe...).<br/>3. Lắp ráp các bộ phận lại với nhau thành mô hình hoàn chỉnh.<br/>4. Kiểm tra sự chuyển động nhịp nhàng và độ chắc chắn."
          },
          {
            icon: "🔌",
            title: "An Toàn Điện trong Gia Đình",
            content: "• Tuyệt đối <strong>không chạm tay ướt</strong> vào công tắc điện, phích cắm hoặc ổ cắm điện.<br/>• Không tự ý tháo dỡ, cắm que kim loại vào các lỗ ổ điện.<br/>• Khi dây điện bị hở lớp vỏ bọc cách điện, phải báo ngay cho người lớn xử lý.<br/>• Tắt các thiết bị điện (đèn, quạt, tivi) khi ra khỏi phòng để tiết kiệm điện năng."
          },
          {
            icon: "💡",
            title: "Đồ Dùng Điện Học Tập: Đèn bàn",
            content: "• Đặt đèn bàn ở phía tay không thuận (nếu viết tay phải thì đặt đèn bên trái) để bóng của tay không che khuất trang vở.<br/>• Điều chỉnh chụp đèn hướng ánh sáng xuống mặt bàn, không chiếu thẳng vào mắt gây lóa mắt."
          }
        ]
      },
      questions: [
        {
          id: "lg_1",
          level: 1,
          question: "Dụng cụ nào trong bộ lắp ghép kỹ thuật dùng để vặn và siết chặt các đinh ốc vít?",
          options: ["Thước kẻ", "Tua-vít và Cờ-lê", "Cây kéo bấm", "Kim khâu"],
          correct: 1,
          explanation: "Tua-vít dùng để vặn đầu vít, cờ-lê dùng để giữ và siết đai ốc (ecu)."
        },
        {
          id: "lg_2",
          level: 1,
          question: "Hành động nào dưới đây là <strong>nguy hiểm tuyệt đối không được làm</strong> khi sử dụng các thiết bị điện?",
          options: [
            "Dùng tay ướt cắm phích cắm vào ổ điện",
            "Bật công tắc đèn khi tay khô ráo",
            "Tắt quạt điện khi không dùng nữa",
            "Nhờ người lớn cắm hộ nồi cơm điện"
          ],
          correct: 0,
          explanation: "Nước là chất dẫn điện rất tốt. Tay ướt chạm vào phích cắm sẽ tạo dòng rò truyền điện qua cơ thể gây điện giật chết người."
        },
        {
          id: "lg_3",
          level: 2,
          question: "Khi ngồi học bài vào buổi tối, bạn Nam viết bằng tay phải thì nên đặt đèn học ở vị trí nào để không bị bóng của bàn tay che khuất chữ viết?",
          options: [
            "Đặt đèn ở phía bên tay trái",
            "Đặt đèn sát mép bên phải bàn tay",
            "Đặt đèn ngay dưới gầm bàn",
            "Chiếu thẳng chụp đèn vào mắt mình"
          ],
          correct: 0,
          explanation: "Đặt đèn bên trái (đối diện tay viết) giúp ánh sáng rọi đều lên trang giấy mà không bị bóng bàn tay phải chắn sáng."
        },
        {
          id: "lg_4",
          level: 2,
          question: "Để tháo một đinh vít đã siết chặt ra khỏi mô hình kỹ thuật, em cần xoay tua-vít theo chiều nào?",
          options: [
            "Xoay theo chiều kim đồng hồ",
            "Xoay ngược chiều kim đồng hồ",
            "Giữ nguyên không xoay",
            "Ấn mạnh xuống không vặn"
          ],
          correct: 1,
          explanation: "Quy tắc vặn ốc ren thuận: vặn theo chiều kim đồng hồ là siết chặt vào, vặn ngược chiều kim đồng hồ là nới lỏng tháo ra."
        },
        {
          id: "lg_5",
          level: 3,
          question: "Trong quy trình lắp ráp mô hình chiếc xe nôi (hoặc xe kéo có bạt), sau khi đã lắp xong khung xe và bánh xe, bước kiểm tra kỹ thuật nào là <strong>quan trọng nhất</strong>?",
          options: [
            "Sơn màu lên toàn bộ xe",
            "Đẩy nhẹ xe chạy thử trên mặt bàn phẳng xem các trục bánh xe có quay trơn tru và các ốc vít có chắc chắn không",
            "Cân xe xem nặng bao nhiêu gram",
            "Tháo rời các bộ phận ra cất đi"
          ],
          correct: 1,
          explanation: "Kiểm tra chuyển động quay của bánh xe và độ siết chặt của các mối ghép ốc vít đảm bảo mô hình hoạt động trơn tru an toàn."
        },
        {
          id: "lg_6",
          level: 3,
          question: "Khi thấy dây điện của chiếc quạt máy bị chuột cắn hở lộ phần lõi đồng sáng bóng ra ngoài, em cần làm gì ngay lập tức?",
          options: [
            "Lấy tay trần túm lấy chỗ hở kéo quạt lại gần",
            "Không được chạm vào dây điện, rút phích cắm nguồn (hoặc dập cầu dao) và báo ngay cho người lớn quấn băng dính cách điện sửa chữa",
            "Dội nước vào chỗ dây hở",
            "Lấy kéo cắt dây điện khi quạt đang cắm điện"
          ],
          correct: 1,
          explanation: "Dây điện hở có điện thế nguy hiểm 220V. Tuyệt đối không chạm tay và phải báo người lớn ngắt điện để xử lý an toàn."
        },
        {
          id: "lg_7",
          level: 4,
          question: "Tại sao khi lắp ghép các bộ phận chuyển động (như trục bánh xe với thanh chữ U), người ta không siết đai ốc ép quá chặt vào thanh chữ U?",
          options: [
            "Vì sợ làm hỏng tua-vít",
            "Vì nếu siết quá chặt, đai ốc sẽ kẹp cứng trục xe khiến bánh xe không thể quay tự do được",
            "Vì các đai ốc rất đắt tiền",
            "Vì thanh chữ U quá mềm"
          ],
          correct: 1,
          explanation: "Trục quay cần có khe hở cơ học nhỏ vừa đủ để các chi tiết quay trơn tru mà không bị bó kẹt cơ học."
        },
        {
          id: "lg_8",
          level: 4,
          question: "Gia đình bạn Lan có thói quen bật quạt và đèn điện ở tất cả các phòng dù không có ai ở nhà. Thói quen này gây ra tác hại gì?",
          options: [
            "Làm tăng tuổi thọ của bóng đèn",
            "Lãng phí điện năng quốc gia, làm tăng chi phí tiền điện của gia đình và tăng nguy cơ chập cháy điện",
            "Làm mát cả khu phố",
            "Giúp nhà máy điện phát nhiều điện hơn"
          ],
          correct: 1,
          explanation: "Sử dụng điện lãng phí làm tốn kém chi phí, gây quá tải lưới điện và gia tăng lượng khí thải nhà kính trong sản xuất điện."
        },
        {
          id: "it4_4_9",
          level: 1,
          question: "Dụng cụ dùng để vặn siết chặt ốc vít và đai ốc trong bộ lắp ghép mô hình kỹ thuật là gì?",
          options: ["Cờ-lê và tua-vít (vít)", "Kéo cắt giấy", "Kim chỉ khâu", "Búa tạ đập đá"],
          correct: 0,
          explanation: "Tua-vít và cờ-lê là hai dụng cụ chuyên dụng dùng để giữ và siết chặt mối ghép ren ốc vít kỹ thuật."
        },
        {
          id: "it4_4_10",
          level: 2,
          question: "Khi lắp ghép một chi tiết bằng vít và đai ốc, trình tự thao tác an toàn và chuẩn xác là gì?",
          options: ["Xâu vít qua lỗ của hai chi tiết ➔ Vặn đai ốc vào ren vít bằng tay ➔ Dùng tua-vít và cờ-lê siết chặt mối ghép", "Lấy búa đóng mạnh vít vào lỗ", "Bôi keo dán sắt vào ren ốc rồi ép lại", "Dùng răng cắn chặt đai ốc"],
          correct: 0,
          explanation: "Quy trình vặn ren chuẩn: định vị ốc vít, mồi ren bằng tay cho khớp bước ren rồi dùng cờ-lê siết chặt."
        },
        {
          id: "it4_4_11",
          level: 2,
          question: "Trong bộ lắp ghép mô hình kỹ thuật lớp 4, chi tiết nào dùng để làm trục quay giúp bánh xe quay trơn tru?",
          options: ["Thanh trục kim loại dài tròn và vòng hãm", "Tấm chữ U", "Thanh thẳng 11 lỗ", "Bánh đai cố định"],
          correct: 0,
          explanation: "Trục quay kim loại kết hợp vòng hãm định vị giúp bánh xe hoặc cánh quạt quay êm ái."
        },
        {
          id: "it4_4_12",
          level: 3,
          question: "Khi lắp ghép mô hình 'Chiếc xe nôi' hoặc 'Cái đu', bước lắp ráp nào cần thực hiện trước tiên?",
          options: ["Lắp ráp từng bộ phận riêng lẻ (như khung giá, bánh xe, tay đẩy) rồi mới ghép nối các bộ phận lại với nhau", "Lắp các chi tiết nhỏ nhất trước", "Lắp ráp hoàn thiện ngay từ bước 1 mà không cần theo thứ tự", "Bao giờ cũng lắp bánh xe sau cùng"],
          correct: 0,
          explanation: "Nguyên tắc kỹ thuật: Lắp ráp các cụm chi tiết/bộ phận cơ bản trước, sau đó lắp ráp tổng thành thành mô hình hoàn chỉnh."
        },
        {
          id: "it4_4_13",
          level: 3,
          question: "Sau khi kết thúc tiết thực hành lắp ghép mô hình, quy tắc an toàn và ngăn nắp đòi hỏi học sinh phải làm gì?",
          options: ["Tháo rời từng chi tiết cẩn thận, đếm đủ số lượng và xếp ngay ngắn vào từng ô của hộp đồ nghề", "Vứt bừa bãi ốc vít trên sàn nhà", "Đem ốc vít về nhà chơi bắn bi", "Để nguyên mô hình bẻ gãy thanh sắt"],
          correct: 0,
          explanation: "Thu dọn cẩn thận, phân loại ốc vít vào đúng ngăn giúp bảo quản bộ đồ dùng không bị rơi mất và đảm bảo an toàn phòng học."
        },
        {
          id: "it4_4_14",
          level: 4,
          question: "Môn học Công nghệ và Lắp ghép mô hình kỹ thuật rèn luyện cho học sinh những phẩm chất tư duy quý báu nào?",
          options: ["Tư duy logic, óc quan sát không gian, tính cẩn thận, khéo léo và khả năng sáng tạo kỹ thuật", "Thói quen làm ẩu làm nhanh", "Chỉ biết làm theo máy móc không suy nghĩ", "Không mang lại lợi ích gì cho việc học"],
          correct: 0,
          explanation: "Lắp ghép kỹ thuật khơi dậy niềm đam mê STEM, khả năng sáng chế và tính kiên nhẫn, tỉ mỉ cho học sinh."
        }
      ]
    }
  ]
};
