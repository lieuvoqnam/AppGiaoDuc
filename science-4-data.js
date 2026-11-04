/**
 * science-4-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Khoa Học Lớp 4
 * Chuẩn Chương trình Giáo dục phổ thông (GDPT) 2018
 * (Kết nối tri thức, Chân trời sáng tạo, Cánh diều)
 */

window.SCIENCE4_DATA = {
  topics: [
    {
      id: "chat_nuoc_khong_khi",
      name: "Chất: Nước & Không Khí",
      icon: "💧",
      desc: "Tính chất của nước, 3 thể của nước, vòng tuần hoàn của nước và thành phần của không khí.",
      theory: {
        highlights: [
          {
            icon: "🌊",
            title: "Tính chất của Nước",
            content: "• Nước là chất lỏng trong suốt, không màu, không mùi, không vị, không có hình dạng nhất định (mang hình dạng của vật chứa nó).<br/>• Nước chảy từ cao xuống thấp, lan ra khắp mọi phía.<br/>• Nước có thể thấm qua một số vật (vải, giấy, đất bông) và không thấm qua một số vật (thủy tinh, nilông, kim loại).<br/>• Nước hòa tan được muối, đường, cồn... nhưng không hòa tan dầu mỡ, cát sét."
          },
          {
            icon: "🔄",
            title: "Ba thể của Nước & Vòng tuần hoàn",
            content: "• <strong>3 thể:</strong> Thể lỏng (nước), Thể rắn (băng, đá tuyết), Thể khí/hơi (hơi nước).<br/>• <strong>Vòng tuần hoàn:</strong> Nước ở ao hồ, sông biển bay hơi do sức nóng Mặt Trời ➔ Lên cao gặp lạnh ngưng tụ thành mây ➔ Các giọt nước nhỏ hợp thành hạt mưa rơi xuống đất ➔ Chảy về sông biển, tiếp tục vòng tuần hoàn."
          },
          {
            icon: "🌬️",
            title: "Không Khí và Thành phần",
            content: "• Không khí có ở xung quanh ta và trong mọi chỗ rỗng của các vật.<br/>• Không khí trong suốt, không màu, không mùi, không vị, có thể bị nén lại hoặc giãn ra.<br/>• <strong>Thành phần chính:</strong> Khí Nitơ (khoảng 78%), Khí Ô-xi (khoảng 21% - duy trì sự cháy và sự sống của con người, động thực vật), Khí Cac-bô-níc và các chất khác (khoảng 1%)."
          },
          {
            icon: "🛡️",
            title: "Bảo vệ Môi trường",
            content: "• Tiết kiệm nước sạch, không xả rác bẩn, nước thải sinh hoạt và hóa chất chưa qua xử lý ra sông suối.<br/>• Trồng nhiều cây xanh, hạn chế khói bụi xe cộ và nhà máy để giữ bầu không khí trong lành."
          }
        ]
      },
      questions: [
        {
          id: "kh_1",
          level: 1,
          question: "Nước ở thể lỏng có tính chất nào dưới đây?",
          options: [
            "Có màu trắng sữa, vị ngọt, có hình dạng nhất định",
            "Trong suốt, không màu, không mùi, không vị, không có hình dạng nhất định",
            "Chỉ chảy từ thấp lên cao, không thấm qua vải",
            "Có hình tròn cố định, hòa tan được dầu ăn"
          ],
          correct: 1,
          explanation: "Nước nguyên chất là chất lỏng trong suốt, không màu, không mùi, không vị, không có hình dạng cố định và chảy từ cao xuống thấp."
        },
        {
          id: "kh_2",
          level: 1,
          question: "Khí nào trong không khí có vai trò duy trì sự cháy và sự hô hấp của con người và sinh vật?",
          options: ["Khí Nitơ", "Khí Ô-xi", "Khí Các-bô-níc", "Khí Hi-đrô"],
          correct: 1,
          explanation: "Khí Ô-xi (O2) chiếm khoảng 21% thể tích không khí, là dưỡng khí duy trì sự sống và sự cháy."
        },
        {
          id: "kh_3",
          level: 2,
          question: "Hiện tượng nào dưới đây chứng minh nước có thể chuyển từ <strong>thể lỏng sang thể khí</strong>?",
          options: [
            "Cho nước vào ngăn đá tủ lạnh đóng thành đá tảng",
            "Đun sôi nước trong ấm, thấy khói hơi nước bốc lên từ vòi ấm",
            "Nước đá tan chảy thành nước trong cốc",
            "Hòa tan đường vào trong cốc nước"
          ],
          correct: 1,
          explanation: "Khi đun sôi, nước lỏng nhận nhiệt và sôi sùng sục, biến thành hơi nước (thể khí) bốc lên không khí."
        },
        {
          id: "kh_4",
          level: 2,
          question: "Dùng một chiếc bơm kim tiêm bịt kín đầu dưới rồi ấn pít-tông xuống, ta thấy pít-tông đi xuống một đoạn rồi bật ngược lại. Thí nghiệm này chứng minh điều gì về không khí?",
          options: [
            "Không khí có màu xanh nhạt",
            "Không khí có thể bị nén lại và có tính đàn hồi giãn ra",
            "Không khí không chiếm chỗ trong không gian",
            "Không khí có trọng lượng bằng không"
          ],
          correct: 1,
          explanation: "Không khí bên trong xilanh có thể bị nén lại khi chịu lực nén của pít-tông và giãn nở đẩy ngược lại."
        },
        {
          id: "kh_5",
          level: 3,
          question: "Vào mùa hè, khi rót nước đá lạnh vào cốc thủy tinh khô ráo, một lúc sau ta thấy mặt ngoài thành cốc đọng những giọt nước li ti. Những giọt nước đó từ đâu mà có?",
          options: [
            "Do nước từ bên trong thấm qua thành cốc thủy tinh ra ngoài",
            "Do hơi nước có sẵn trong không khí xung quanh gặp lạnh ở thành cốc nên ngưng tụ lại",
            "Do nước đá bốc hơi thành nước lỏng",
            "Do đá lạnh sinh ra nước ở ngoài"
          ],
          correct: 1,
          explanation: "Thủy tinh không thấm nước. Mặt ngoài cốc bị lạnh khiến hơi nước vô hình trong không khí va vào thành cốc bị giảm nhiệt độ và ngưng tụ thành các giọt nước li ti."
        },
        {
          id: "kh_6",
          level: 3,
          question: "Để dập tắt một ngọn lửa nhỏ đang cháy (như cháy giẻ lau hoặc củi khô), người ta có thể trùm một tấm chăn ướt lên đám cháy. Cách làm này dựa trên nguyên lý khoa học nào?",
          options: [
            "Cung cấp thêm khí ô-xi cho đám cháy",
            "Cách ly đám cháy với khí ô-xi trong không khí và làm giảm nhiệt độ",
            "Làm tăng nồng độ khí nitơ",
            "Giúp ngọn lửa cháy đều hơn rồi tự tắt"
          ],
          correct: 1,
          explanation: "Chăn ướt trùm lên sẽ ngăn cản khí ô-xi tiếp xúc với vật cháy, đồng thời nước bốc hơi hút bớt nhiệt độ, khiến đám cháy bị dập tắt."
        },
        {
          id: "kh_7",
          level: 4,
          question: "Tại sao trong các đầm nuôi tôm cá chuyên canh, người nông dân thường phải lắp đặt hệ thống quạt nước quay liên tục trên mặt nước?",
          options: [
            "Để tạo cảnh quan đẹp mắt cho đầm tôm",
            "Để xua đuổi các loài chim ăn cá",
            "Để xáo trộn nước, tăng cường lượng khí ô-xi hòa tan trong nước giúp tôm cá hô hấp tốt hơn",
            "Để giữ cho nước luôn ở thể rắn"
          ],
          correct: 2,
          explanation: "Quạt nước liên tục khuấy động mặt nước giúp tăng diện tích tiếp xúc với không khí, hòa tan nhiều ô-xi hơn vào nước để tôm cá không bị ngạt thở."
        },
        {
          id: "kh_8",
          level: 4,
          question: "Trong vòng tuần hoàn của nước trong tự nhiên, thứ tự diễn ra các quá trình nào dưới đây là <strong>đúng nhất</strong>?",
          options: [
            "Mưa ➔ Bốc hơi ➔ Ngưng tụ ➔ Chảy ra sông",
            "Bốc hơi (từ sông biển) ➔ Ngưng tụ (tạo mây) ➔ Mưa (rơi xuống đất) ➔ Trở về nguồn nước mặt và nước ngầm",
            "Ngưng tụ ➔ Bốc hơi ➔ Mưa ➔ Mây",
            "Mưa ➔ Nước đá ➔ Hơi nước ➔ Biển"
          ],
          correct: 1,
          explanation: "Nhiệt mặt trời làm bốc hơi nước ➔ lên cao gặp lạnh ngưng tụ thành mây ➔ nặng hạt tạo thành mưa rơi xuống ➔ thấm vào đất và chảy về sông biển tạo thành vòng tuần hoàn khép kín."
        }
      ]
    },
    {
      id: "nang_luong_anh_sang_nhiet",
      name: "Năng Lượng: Ánh Sáng, Âm Thanh & Nhiệt",
      icon: "⚡",
      desc: "Vật phát sáng, sự truyền âm, ô nhiễm tiếng ồn, vật dẫn nhiệt và an toàn năng lượng.",
      theory: {
        highlights: [
          {
            icon: "💡",
            title: "Ánh Sáng & Bóng Tối",
            content: "• <strong>Vật tự phát sáng:</strong> Mặt Trời, ngọn lửa, đèn điện đang bật, con đom đóm...<br/>• <strong>Vật được chiếu sáng:</strong> Mặt Trăng (phản chiếu ánh sáng mặt trời), bàn ghế, quyển sách...<br/>• Ánh sáng truyền theo <strong>đường thẳng</strong>.<br/>• Bóng tối xuất hiện phía sau vật cản sáng khi vật đó được chiếu sáng."
          },
          {
            icon: "🔊",
            title: "Âm Thanh & Sự lan truyền",
            content: "• Mọi âm thanh đều được phát ra từ các <strong>vật rung động</strong>.<br/>• Âm thanh lan truyền qua chất rắn, chất lỏng và chất khí (không truyền được qua chân không).<br/>• Âm thanh truyền qua chất rắn tốt nhất, rồi đến chất lỏng, chậm nhất là chất khí.<br/>• <strong>Ô nhiễm tiếng ồn:</strong> Tiếng còi xe inh ỏi, máy khoan bê tông... gây hại màng nhĩ, đau đầu và giảm thính lực."
          },
          {
            icon: "🌡️",
            title: "Nhiệt độ & Vật dẫn nhiệt",
            content: "• Dùng <strong>nhiệt kế</strong> để đo nhiệt độ. Nhiệt độ cơ thể người khỏe mạnh là khoảng 36.5°C - 37°C.<br/>• <strong>Vật dẫn nhiệt tốt:</strong> Các kim loại như nhôm, đồng, sắt, inox (dùng làm xoong nồi đun nấu mau chín).<br/>• <strong>Vật dẫn nhiệt kém (cách nhiệt tốt):</strong> Gỗ, nhựa, xốp, len dạ, bông thủy tinh (dùng làm quai nồi, áo ấm mùa đông, thùng giữ nhiệt)."
          }
        ]
      },
      questions: [
        {
          id: "nl_1",
          level: 1,
          question: "Vật nào dưới đây là <strong>vật tự phát sáng</strong>?",
          options: ["Mặt Trăng", "Mặt Trời", "Tấm gương soi", "Quyển vở học sinh"],
          correct: 1,
          explanation: "Mặt Trời là ngôi sao tự phát ra ánh sáng rực rỡ. Mặt Trăng không tự phát sáng mà chỉ phản chiếu ánh sáng từ Mặt Trời."
        },
        {
          id: "nl_2",
          level: 1,
          question: "Âm thanh được phát ra khi nào?",
          options: [
            "Khi vật được bôi trơn",
            "Khi vật bị nung nóng",
            "Khi vật rung động",
            "Khi vật đứng yên tuyệt đối"
          ],
          correct: 2,
          explanation: "Mọi âm thanh (dây đàn, mặt trống, dây thanh quản cổ họng) đều sinh ra do sự rung động của vật thể."
        },
        {
          id: "nl_3",
          level: 2,
          question: "Khi gõ nhẹ một chiếc thìa kim loại vào thành bể cá, những chú cá lập tức giật mình bơi tản ra xa. Hiện tượng này chứng minh điều gì?",
          options: [
            "Cá có mắt nhìn rất tinh tường trong bóng tối",
            "Âm thanh có thể lan truyền qua chất lỏng (nước bể cá)",
            "Nước bể cá tự phát ra âm thanh",
            "Kim loại không thể tạo ra rung động"
          ],
          correct: 1,
          explanation: "Sóng âm truyền từ thành bể qua môi trường nước đến tai cá, chứng tỏ âm thanh lan truyền tốt trong chất lỏng."
        },
        {
          id: "nl_4",
          level: 2,
          question: "Tại sao phần quai của chiếc xoong, chảo kim loại thường được bọc bằng nhựa cứng hoặc gỗ?",
          options: [
            "Để làm tăng trọng lượng của xoong nồi",
            "Vì nhựa và gỗ dẫn nhiệt kém, giúp người nấu không bị bỏng tay khi bưng bê",
            "Để xoong nồi truyền nhiệt nhanh hơn vào thức ăn",
            "Để quai nồi phát ra ánh sáng trong bóng tối"
          ],
          correct: 1,
          explanation: "Gỗ và nhựa là vật dẫn nhiệt kém (vật cách nhiệt), giúp bảo vệ tay người đầu bếp không bị truyền nhiệt gây bỏng."
        },
        {
          id: "nl_5",
          level: 3,
          question: "Tại sao vào mùa đông giá rét, mặc nhiều lớp áo mỏng lại cảm thấy ấm áp hơn là chỉ mặc một chiếc áo thật dày?",
          options: [
            "Vì các lớp áo mỏng có nhiều màu sắc đẹp hơn",
            "Vì giữa các lớp áo mỏng có các lớp không khí dẫn nhiệt kém, giúp giữ nhiệt cơ thể không bị thoát ra ngoài",
            "Vì áo mỏng nặng hơn áo dày",
            "Vì áo mỏng tự sinh ra nhiệt lượng sưởi ấm"
          ],
          correct: 1,
          explanation: "Không khí giữa các lớp áo là chất dẫn nhiệt rất kém, tạo thành nhiều tầng lớp đệm giữ ấm thân nhiệt tối ưu."
        },
        {
          id: "nl_6",
          level: 3,
          question: "Tại sao các bác sĩ thường khuyên chúng ta không nên đeo tai nghe (headphone) với âm lượng tối đa trong nhiều giờ liên tục?",
          options: [
            "Vì làm cho tai nghe bị nhanh hết pin",
            "Vì cường độ âm thanh quá lớn trong thời gian dài sẽ làm tổn thương các tế bào thính giác màng nhĩ, gây giảm thính lực hoặc điếc tai",
            "Vì âm thanh trong tai nghe truyền nhanh hơn ngoài trời",
            "Vì sẽ làm giảm thị lực của mắt"
          ],
          correct: 1,
          explanation: "Âm thanh quá lớn phát sát màng nhĩ là nguyên nhân hàng đầu gây chấn thương âm và điếc thính giác ở trẻ em và học sinh."
        },
        {
          id: "nl_7",
          level: 4,
          question: "Tại sao các chú phi hành gia khi làm việc bên ngoài không gian vũ trụ (chân không) dù đứng rất gần nhau cũng không thể nói chuyện trực tiếp bằng miệng mà phải qua bộ đàm vô tuyến?",
          options: [
            "Vì trong vũ trụ quá lạnh không thể há miệng",
            "Vì môi trường chân không không có các phân tử vật chất để truyền rung động âm thanh",
            "Vì mũ bảo hộ làm méo tiếng nói",
            "Vì phi hành gia không được phép nói chuyện"
          ],
          correct: 1,
          explanation: "Chân không không có chất rắn, lỏng, khí nên sóng âm không thể lan truyền. Bộ đàm sử dụng sóng điện từ (có thể truyền trong chân không) để liên lạc."
        },
        {
          id: "nl_8",
          level: 4,
          question: "Trong thí nghiệm tạo bóng tối: Chiếu đèn pin vào một quả bóng bàn đặt trước một bức tường trắng. Nếu ta di chuyển quả bóng bàn lại <strong>gần chiếc đèn pin hơn</strong> thì bóng của quả bóng trên tường sẽ thay đổi như thế nào?",
          options: [
            "Bóng trên tường sẽ nhỏ đi",
            "Bóng trên tường sẽ to hơn (lớn hơn)",
            "Bóng trên tường biến mất hoàn toàn",
            "Bóng trên tường chuyển sang màu đỏ"
          ],
          correct: 1,
          explanation: "Khi vật cản sáng lại gần nguồn sáng, góc chắn sáng rộng hơn khiến bóng tối đổ trên màn chắn phía sau to hơn."
        }
      ]
    },
    {
      id: "thuc_vat_dong_vat_chuoi_thuc_an",
      name: "Thực Vật, Động Vật & Chuỗi Thức Ăn",
      icon: "🌱",
      desc: "Quá trình quang hợp của cây xanh, nhu cầu sống của động vật, chuỗi thức ăn và thế giới nấm.",
      theory: {
        highlights: [
          {
            icon: "☀️",
            title: "Quá trình Quang Hợp",
            content: "• Dưới tác dụng của <strong>ánh sáng Mặt Trời</strong>, lá cây (chất diệp lục) hấp thụ <strong>nước + khí Các-bô-níc</strong> từ môi trường ➔ Tạo ra chất dinh dưỡng nuôi cây và thải ra <strong>khí Ô-xi</strong> trong lành cho muôn loài thở.<br/>• Cây xanh được mệnh danh là <em>lá phổi xanh</em> của Trái Đất."
          },
          {
            icon: "🔗",
            title: "Chuỗi Thức Ăn trong Tự nhiên",
            content: "• Chuỗi thức ăn chỉ ra mối quan hệ dinh dưỡng giữa các loài sinh vật.<br/>• Mắt xích đầu tiên thường là <strong>Thực vật</strong> (sinh vật tự dưỡng sản xuất thức ăn).<br/>• Ví dụ: <em>Cỏ (thực vật) ➔ Sâu ăn lá (động vật ăn thực vật) ➔ Chim sâu (động vật ăn thịt) ➔ Vi sinh vật phân giải</em>."
          },
          {
            icon: "🍄",
            title: "Thế giới Nấm",
            content: "• Nấm không phải là thực vật (không có chất diệp lục, không quang hợp).<br/>• <strong>Nấm có ích:</strong> Nấm ăn (nấm rơm, nấm hương, mộc nhĩ, nấm đùi gà), Nấm men (lên men làm bánh mì nở xốp, làm sữa chua).<br/>• <strong>Nấm có hại:</strong> Nấm mốc (làm ôi thiu bánh trái, ngộ độc), Nấm độc (nấm tán trắng, nấm có màu sắc sặc sỡ chứa độc tố chết người - tuyệt đối không hái ăn trong rừng)."
          }
        ]
      },
      questions: [
        {
          id: "tv_1",
          level: 1,
          question: "Để cây xanh quang hợp và phát triển tươi tốt, yếu tố nào dưới đây là <strong>bắt buộc phải có</strong>?",
          options: [
            "Ánh sáng Mặt Trời, nước, không khí (khí các-bô-níc) và chất khoáng",
            "Bóng tối hoàn toàn và không khí ngột ngạt",
            "Chỉ cần dầu ăn và muối ăn",
            "Nhiệt độ đóng băng dưới 0°C"
          ],
          correct: 0,
          explanation: "Cây xanh cần đủ ánh sáng, nước, không khí và khoáng chất trong đất để thực hiện quang hợp và tổng hợp chất sống."
        },
        {
          id: "tv_2",
          level: 1,
          question: "Trong chuỗi thức ăn: <strong>Cây ngô ➔ Châu chấu ➔ Ếch đồng ➔ Rắn hổ mang</strong>, sinh vật nào là mắt xích khởi đầu (sinh vật sản xuất)?",
          options: ["Châu chấu", "Ếch đồng", "Cây ngô", "Rắn hổ mang"],
          correct: 2,
          explanation: "Cây ngô là thực vật tự tổng hợp chất hữu cơ qua quang hợp, là thức ăn khởi đầu nuôi dưỡng các bậc dinh dưỡng tiếp theo."
        },
        {
          id: "tv_3",
          level: 2,
          question: "Tại sao ban đêm người ta khuyên <strong>không nên đặt nhiều chậu hoa, cây cảnh lớn trong phòng ngủ đóng kín cửa</strong>?",
          options: [
            "Vì cây cảnh phát ra ánh sáng chói mắt gây mất ngủ",
            "Vì ban đêm cây không quang hợp mà chỉ hô hấp (hút khí ô-xi và thải ra khí các-bô-níc), dễ gây ngạt thở cho người ngủ",
            "Vì cây sẽ hút hết nước trong cốc",
            "Vì rễ cây sẽ làm hỏng sàn nhà"
          ],
          correct: 1,
          explanation: "Ban đêm không có ánh sáng, cây chỉ hô hấp lấy ô-xi và nhả khí cacbonic. Trong phòng kín, lượng ô-xi sẽ sụt giảm nhanh khiến người ngủ bị ngạt thở mệt mỏi."
        },
        {
          id: "tv_4",
          level: 2,
          question: "Loại nấm nào dưới đây được con người sử dụng làm nguyên liệu lên men giúp bánh mì nở phồng xốp mềm ngon?",
          options: ["Nấm mốc đen", "Nấm men (yeast)", "Nấm độc tán trắng", "Nấm phát quang"],
          correct: 1,
          explanation: "Nấm men sinh ra khí cacbonic trong quá trình lên men bột mì, tạo thành các bọt khí làm bánh mì nở xốp khi nướng."
        },
        {
          id: "tv_5",
          level: 3,
          question: "Nếu trong một cánh đồng lúa, người ta săn bắt triệt để loài rắn và chim săn mồi thì điều gì rất có thể sẽ xảy ra sau đó?",
          options: [
            "Năng suất lúa sẽ tăng vọt gấp mười lần",
            "Đàn chuột đồng và sâu bọ sẽ bùng phát số lượng dữ dội, cắn phá nghiêm trọng mùa màng",
            "Cây lúa sẽ biến thành cây ngô",
            "Không có bất kỳ sự thay đổi nào"
          ],
          correct: 1,
          explanation: "Rắn và chim săn mồi là thiên địch kìm hãm chuột và côn trùng gây hại. Mất đi thiên địch, chuột đồng sẽ sinh sôi phá hoại toàn bộ ruộng lúa."
        },
        {
          id: "tv_6",
          level: 3,
          question: "Khi đi dã ngoại trong rừng nguyên sinh, em nhìn thấy một cụm nấm màu đỏ rực rỡ có các đốm trắng trông rất đẹp mắt. Hành động nào dưới đây là <strong>đúng đắn và an toàn nhất</strong>?",
          options: [
            "Hái ngay mang về nấu canh bồi bổ sức khỏe",
            "Nếm thử một góc nhỏ xem có ngọt không",
            "Tuyệt đối không hái, không ăn và nhắc nhở các bạn tránh xa vì nấm rừng sặc sỡ thường là nấm kịch độc",
            "Hái cho thú cưng ăn thử trước"
          ],
          correct: 2,
          explanation: "Rất nhiều loài nấm độc trong tự nhiên có hình thù bắt mắt nhưng chứa độc tố gây suy gan thận cấp và tử vong. Tuyệt đối không tự tiện hái nấm dại."
        },
        {
          id: "tv_7",
          level: 4,
          question: "Đọc chuỗi thức ăn sau: <em>Tảo biển ➔ Tôm nhỏ ➔ Cá hồi ➔ Gấu xám</em>. Nếu nguồn nước biển bị ô nhiễm thuốc trừ sâu hóa học khó phân hủy thì loài sinh vật nào trong chuỗi trên sẽ tích tụ nồng độ chất độc cao nhất trong mô mỡ cơ thể?",
          options: [
            "Tảo biển (vì sống dưới đáy)",
            "Tôm nhỏ",
            "Cá hồi",
            "Gấu xám (sinh vật ở bậc dinh dưỡng cao nhất của chuỗi)"
          ],
          correct: 3,
          explanation: "Theo quy luật tích lũy sinh học, chất độc khó phân hủy truyền qua các bậc dinh dưỡng và sẽ cô đặc với nồng độ cao nhất ở loài thú ăn thịt đầu bảng (gấu xám)."
        },
        {
          id: "tv_8",
          level: 4,
          question: "Hai cây đậu xanh giống nhau được trồng trong hai chậu đất giàu dinh dưỡng như nhau. Cây A để ngoài sân ngập tràn nắng ấm và tưới nước hàng ngày. Cây B để trong tủ kín tối om và cũng tưới nước hàng ngày. Sau 2 tuần, cây B sẽ như thế nào?",
          options: [
            "Cây B sẽ nở hoa kết trái to hơn cây A",
            "Cây B sẽ còi cọc, thân vống dài khẳng khiu, lá vàng úa và dần chết do không có ánh sáng để quang hợp",
            "Cây B sẽ biến thành cây nấm",
            "Cả hai cây sinh trưởng giống hệt nhau"
          ],
          correct: 1,
          explanation: "Không có ánh sáng, cây không thể quang hợp tạo chất bột đường để nuôi cơ thể, diệp lục không hình thành khiến lá vàng vọt và cây lụi tàn dần."
        }
      ]
    },
    {
      id: "dinh_duong_suc_khoe",
      name: "Con Người & Dinh Dưỡng Sức Khỏe",
      icon: "🥗",
      desc: "4 nhóm chất dinh dưỡng cốt lõi, phòng bệnh suy dinh dưỡng, béo phì và an toàn thực phẩm.",
      theory: {
        highlights: [
          {
            icon: "🍱",
            title: "4 Nhóm Chất Dinh Dưỡng",
            content: "• <strong>Chất bột đường (Gluxit):</strong> Cơm, bắp, khoai, bánh mì ➔ Cung cấp năng lượng chính cho cơ thể hoạt động.<br/>• <strong>Chất đạm (Protein):</strong> Thịt, cá, trứng, sữa, tôm, đậu nành ➔ Xây dựng cơ bắp, giúp cơ thể lớn lên và tái tạo tế bào.<br/>• <strong>Chất béo (Lipit):</strong> Dầu thực vật, mỡ động vật, bơ, lạc (đậu phộng) ➔ Dự trữ năng lượng, giúp hấp thụ vitamin tan trong dầu (A, D, E, K).<br/>• <strong>Vitamin & Khoáng chất:</strong> Rau xanh, củ quả ➔ Tăng sức đề kháng, sáng mắt (vitamin A), chắc xương (canxi, vitamin D)."
          },
          {
            icon: "⚖️",
            title: "Chế độ Dinh Dưỡng Cân Bằng",
            content: "• Cần ăn phối hợp nhiều loại thức ăn khác nhau mỗi ngày.<br/>• Uống đủ 1.5 - 2 lít nước sạch mỗi ngày.<br/>• Hạn chế ăn quá nhiều đồ ngọt, đồ chiên rán nhiều dầu mỡ và nước ngọt có ga."
          },
          {
            icon: "🏥",
            title: "Phòng Bệnh Dinh Dưỡng",
            content: "• <strong>Thiếu i-ốt:</strong> Dễ mắc bệnh bướu cổ và chậm phát triển trí tuệ ➔ Dùng muối có bổ sung i-ốt.<br/>• <strong>Thiếu vitamin A:</strong> Mắt quáng gà, khô giác mạc ➔ Ăn đu đủ, cà rốt, gấc.<br/>• <strong>Béo phì:</strong> Do thừa năng lượng, ít vận động ➔ Tăng cường tập thể dục, ăn nhiều rau củ."
          }
        ]
      },
      questions: [
        {
          id: "dd_1",
          level: 1,
          question: "Thực phẩm nào dưới đây chứa nhiều <strong>chất bột đường</strong> nhất?",
          options: ["Gạo, ngô, khoai lang", "Thịt bò, cá hồi", "Dầu mè, mỡ heo", "Rau muống, bắp cải"],
          correct: 0,
          explanation: "Gạo, ngô, khoai, bột mì là các loại lương thực chứa hàm lượng tinh bột đường dồi dào nhất."
        },
        {
          id: "dd_2",
          level: 1,
          question: "Chất đạm (protein) có vai trò quan trọng nhất là gì đối với cơ thể lứa tuổi học sinh lớp 4?",
          options: [
            "Làm cho răng chuyển sang màu vàng",
            "Xây dựng và tái tạo tế bào, giúp cơ thể phát triển chiều cao và cơ bắp",
            "Chỉ có tác dụng tích tụ mỡ dưới da",
            "Làm giảm thân nhiệt xuống mức 0°C"
          ],
          correct: 1,
          explanation: "Chất đạm là vật liệu xây dựng nền tảng của mọi tế bào, cơ bắp, kháng thể và hormone giúp trẻ lớn nhanh."
        },
        {
          id: "dd_3",
          level: 2,
          question: "Để phòng tránh bệnh <strong>bướu cổ</strong> và giúp trí não phát triển khỏe mạnh, chúng ta nên sử dụng loại gia vị nào trong nấu ăn hàng ngày?",
          options: ["Muối ăn có trộn I-ốt", "Đường cát trắng", "Bột ngọt (mì chính)", "Ớt cay"],
          correct: 0,
          explanation: "Vi chất I-ốt là thành phần cấu tạo tuyến giáp. Thiếu i-ốt gây bệnh bướu cổ và thiểu năng trí tuệ, do đó nhà nước khuyến cáo dùng muối i-ốt."
        },
        {
          id: "dd_4",
          level: 2,
          question: "Bạn An rất thích ăn gà rán, khoai tây chiên, uống nước ngọt có ga và suốt ngày ngồi xem tivi, lười chơi thể thao. Thói quen này kéo dài sẽ dẫn tới nguy cơ mắc bệnh gì?",
          options: ["Bệnh suy dinh dưỡng thấp còi", "Bệnh thừa cân, béo phì", "Bệnh còi xương do thiếu canxi", "Bệnh bướu cổ"],
          correct: 1,
          explanation: "Thức ăn nhanh giàu chất béo và đường kết hợp lối sống thụ động không tiêu hao calo là nguyên nhân trực tiếp dẫn tới thừa cân béo phì."
        },
        {
          id: "dd_5",
          level: 3,
          question: "Trước khi chế biến món ăn và trước mỗi bữa ăn, việc làm nào dưới đây là <strong>bắt buộc</strong> để đảm bảo vệ sinh an toàn thực phẩm?",
          options: [
            "Chỉ cần lau tay vào gấu áo",
            "Rửa tay sạch bằng xà phòng dưới vòi nước chảy ít nhất 30 giây",
            "Xịt nước hoa vào tay cho thơm",
            "Rửa tay qua một chậu nước dùng chung của cả lớp"
          ],
          correct: 1,
          explanation: "Rửa tay bằng xà phòng dưới vòi nước chảy giúp rửa trôi vi khuẩn và giun sán gây bệnh đường ruột."
        },
        {
          id: "dd_6",
          level: 3,
          question: "Khi mua một hộp sữa chua hoặc bánh ngọt ở siêu thị, thông tin quan trọng đầu tiên mà em cần kiểm tra trên vỏ bao bì là gì?",
          options: [
            "Màu sắc bao bì có sặc sỡ không",
            "Hạn sử dụng (EXP / HSD) và ngày sản xuất",
            "Tên nhân vật hoạt hình in trên vỏ",
            "Hình dạng chiếc thìa đính kèm"
          ],
          correct: 1,
          explanation: "Hạn sử dụng cho biết thực phẩm còn an toàn hay đã quá đát. Ăn đồ hết hạn có nguy cơ ngộ độc thực phẩm cấp tính."
        },
        {
          id: "dd_7",
          level: 4,
          question: "Tháp dinh dưỡng hợp lý dành cho trẻ em khuyến cáo chúng ta nên ăn thực phẩm ở tầng đáy tháp nhiều nhất và tầng đỉnh tháp ít nhất. Hai nhóm thực phẩm đó lần lượt là:",
          options: [
            "Đáy tháp: Muối và đường / Đỉnh tháp: Rau xanh",
            "Đáy tháp: Lương thực (ngũ cốc) và Nước sạch / Đỉnh tháp: Muối và đường ngọt",
            "Đáy tháp: Mỡ động vật / Đỉnh tháp: Cơm trắng",
            "Đáy tháp: Thịt bò / Đỉnh tháp: Nước lọc"
          ],
          correct: 1,
          explanation: "Lương thực và nước uống là nền tảng cần tiêu thụ nhiều nhất, trong khi muối và đường ở đỉnh tháp chỉ nên ăn hạn chế có chừng mực."
        },
        {
          id: "dd_8",
          level: 4,
          question: "Một bạn học sinh bị chảy máu chân răng và thường xuyên bị cảm cúm khi giao mùa. Bác sĩ khuyên bạn nên bổ sung thêm loại vitamin nào có nhiều trong cam, bưởi, ổi, chanh?",
          options: ["Vitamin C", "Vitamin D", "Vitamin K", "Vitamin B12"],
          correct: 0,
          explanation: "Vitamin C có tác dụng tăng cường thành mạch máu, chống chảy máu chân răng (bệnh Scorbut) và nâng cao sức đề kháng hệ miễn dịch."
        }
      ]
    }
  ]
};
