# -*- coding: utf-8 -*-
"""
Script to generate provinces data and package everything cleanly.
"""
import json

PROVINCES_DATA = [
    # 1. TÂY BẮC BỘ (6 tỉnh)
    {
        "id": "laichau", "name": "Lai Châu", "regionId": "tay_bac", "regionName": "Tây Bắc Bộ",
        "color": "#0284c7", "capital": "TP. Lai Châu",
        "landmark": "Đèo Ô Quy Hồ, Cao nguyên Sìn Hồ", "specialty": "Thịt lợn cắp nách, Cá suối nướng",
        "funFact": "Có đỉnh Pu Si Lung và Putaleng - những đỉnh núi cao bậc nhất Việt Nam!",
        "hint": "Nằm ở phía Tây Bắc, có đường biên giới giáp Trung Quốc."
    },
    {
        "id": "dienbien", "name": "Điện Biên", "regionId": "tay_bac", "regionName": "Tây Bắc Bộ",
        "color": "#0284c7", "capital": "TP. Điện Biên Phủ",
        "landmark": "Đồi A1, Hầm Đờ Cát, Cực Tây A Pa Chải", "specialty": "Gạo Tám Điện Biên, Thịt trâu gác bếp",
        "funFact": "Nơi gắn liền với Chiến thắng Điện Biên Phủ lẫy lừng năm 1954 và ngã ba biên giới Việt - Lào - Trung!",
        "hint": "Nơi một tiếng gà gáy cả 3 nước (Việt - Lào - Trung) đều nghe thấy."
    },
    {
        "id": "sonla", "name": "Sơn La", "regionId": "tay_bac", "regionName": "Tây Bắc Bộ",
        "color": "#0284c7", "capital": "TP. Sơn La",
        "landmark": "Cao nguyên Mộc Châu, Nhà máy Thuỷ điện Sơn La", "specialty": "Sữa tươi Mộc Châu, Chè Shan tuyết",
        "funFact": "Có nhà máy thuỷ điện lớn nhất Đông Nam Á và những đồi chè, vườn mận bạt ngàn!",
        "hint": "Tỉnh có diện tích lớn thứ ba cả nước, nổi tiếng với cao nguyên Mộc Châu."
    },
    {
        "id": "hoabinh", "name": "Hoà Bình", "regionId": "tay_bac", "regionName": "Tây Bắc Bộ",
        "color": "#0284c7", "capital": "TP. Hoà Bình",
        "landmark": "Thuỷ điện Hoà Bình, Thung lũng Mai Châu", "specialty": "Cơm lam, Rượu cần Mường",
        "funFact": "Cái nôi của nền 'Văn hoá Hoà Bình' thời tiền sử và thuỷ điện đầu tiên trên sông Đà.",
        "hint": "Cửa ngõ nối liền thủ đô Hà Nội với vùng núi Tây Bắc hùng vĩ."
    },
    {
        "id": "laocai", "name": "Lào Cai", "regionId": "tay_bac", "regionName": "Tây Bắc Bộ",
        "color": "#0284c7", "capital": "TP. Lào Cai",
        "landmark": "Đỉnh Fansipan, Thị xã Sa Pa mù sương", "specialty": "Thắng cố, Mận Bắc Hà, Cá hồi Sa Pa",
        "funFact": "Nơi có đỉnh Fansipan (3.143m) - được mệnh danh là 'Nóc nhà Đông Dương'!",
        "hint": "Nơi có thị xã du lịch Sa Pa quanh năm mây mù che phủ."
    },
    {
        "id": "yenbai", "name": "Yên Bái", "regionId": "tay_bac", "regionName": "Tây Bắc Bộ",
        "color": "#0284c7", "capital": "TP. Yên Bái",
        "landmark": "Ruộng bậc thang Mù Cang Chải, Hồ Thác Bà", "specialty": "Nếp nương Tú Lệ, Chè tuyết Suối Giàng",
        "funFact": "Ruộng bậc thang Mù Cang Chải là di tích quốc gia đặc biệt tuyệt đẹp!",
        "hint": "Nằm giữa Tây Bắc và Đông Bắc, nổi tiếng với ruộng bậc thang vàng óng mùa lúa chín."
    },

    # 2. ĐÔNG BẮC BỘ (9 tỉnh)
    {
        "id": "hagiang", "name": "Hà Giang", "regionId": "dong_bac", "regionName": "Đông Bắc Bộ",
        "color": "#0369a1", "capital": "TP. Hà Giang",
        "landmark": "Cột cờ Lũng Cú, Đèo Mã Pí Lèng, Cao nguyên đá Đồng Văn", "specialty": "Bánh tam giác mạch, Thắng cố",
        "funFact": "Nơi địa đầu Cực Bắc của Tổ quốc, có hẻm vực Tu Sản sâu nhất Đông Nam Á!",
        "hint": "Mảnh đất địa đầu cực Bắc, nơi hoa tam giác mạch nở hồng sườn núi đá."
    },
    {
        "id": "caobang", "name": "Cao Bằng", "regionId": "dong_bac", "regionName": "Đông Bắc Bộ",
        "color": "#0369a1", "capital": "TP. Cao Bằng",
        "landmark": "Thác Bản Giốc, Hang Pác Bó, Suối Lê-nin", "specialty": "Hạt dẻ Trùng Khánh, Bánh cuốn Cao Bằng",
        "funFact": "Thác Bản Giốc là một trong những thác nước biên giới tự nhiên lớn và đẹp nhất thế giới!",
        "hint": "Nơi Bác Hồ về nước năm 1941 và có thác Bản Giốc hùng vĩ bên biên cương."
    },
    {
        "id": "backan", "name": "Bắc Kạn", "regionId": "dong_bac", "regionName": "Đông Bắc Bộ",
        "color": "#0369a1", "capital": "TP. Bắc Kạn",
        "landmark": "Hồ Ba Bể, Vườn quốc gia Ba Bể", "specialty": "Miến dong Na Rì, Tôm chua Ba Bể",
        "funFact": "Hồ Ba Bể là một trong 20 hồ nước ngọt tự nhiên trên núi lớn nhất thế giới cần được bảo vệ!",
        "hint": "Tỉnh miền núi có hồ Ba Bể trong xanh phẳng lặng giữa núi đá vôi."
    },
    {
        "id": "tuyenquang", "name": "Tuyên Quang", "regionId": "dong_bac", "regionName": "Đông Bắc Bộ",
        "color": "#0369a1", "capital": "TP. Tuyên Quang",
        "landmark": "Khu di tích Tân Trào, Hồ Na Hang", "specialty": "Bánh gai Chiêm Hoá, Cam sành Hàm Yên",
        "funFact": "Được mệnh danh là 'Thủ đô Kháng chiến' trong thời kỳ kháng chiến chống Pháp!",
        "hint": "Mảnh đất chiến khu Tân Trào với cây đa lịch sử và lán Nà Nưa."
    },
    {
        "id": "langson", "name": "Lạng Sơn", "regionId": "dong_bac", "regionName": "Đông Bắc Bộ",
        "color": "#0369a1", "capital": "TP. Lạng Sơn",
        "landmark": "Ải Chi Lăng, Động Tam Thanh, Đỉnh Mẫu Sơn", "specialty": "Vịt quay Thất Khê, Khâu nhục",
        "funFact": "Cửa ngõ biên mậu sầm uất với đỉnh núi Mẫu Sơn đôi khi có tuyết rơi vào mùa đông!",
        "hint": "Có câu ca dao: 'Đồng Đăng có phố Kỳ Lừa, có nàng Tô Thị, có chùa Tam Thanh'."
    },
    {
        "id": "thainguyen", "name": "Thái Nguyên", "regionId": "dong_bac", "regionName": "Đông Bắc Bộ",
        "color": "#0369a1", "capital": "TP. Thái Nguyên",
        "landmark": "Hồ Núi Cốc, Vùng chè Tân Cương, ATK Định Hóa", "specialty": "Trà Tân Cương thượng hạng",
        "funFact": "Được tôn vinh là 'Thủ đô Đệ nhất danh trà' của cả nước!",
        "hint": "Tỉnh trung du nổi tiếng với những nương chè xanh mướt và huyền thoại Hồ Núi Cốc."
    },
    {
        "id": "bacgiang", "name": "Bắc Giang", "regionId": "dong_bac", "regionName": "Đông Bắc Bộ",
        "color": "#0369a1", "capital": "TP. Bắc Giang",
        "landmark": "Tây Yên Tử, Suối Mỡ, Chùa Vĩnh Nghiêm", "specialty": "Vải thiều Lục Ngạn, Mỳ Chũ",
        "funFact": "Vải thiều Lục Ngạn nức tiếng ngon ngọt, được xuất khẩu tới Nhật Bản, Mỹ, EU!",
        "hint": "Xứ sở của những đồi vải thiều đỏ rực khi đất trời vào hè."
    },
    {
        "id": "quangninh", "name": "Quảng Ninh", "regionId": "dong_bac", "regionName": "Đông Bắc Bộ",
        "color": "#0369a1", "capital": "TP. Hạ Long",
        "landmark": "Vịnh Hạ Long, Bán đảo Tuần Châu, Đất thiêng Yên Tử", "specialty": "Chả mực Hạ Long, Sá sùng Quan Lạn",
        "funFact": "Vịnh Hạ Long 2 lần được UNESCO công nhận là Di sản Thiên nhiên Thế giới!",
        "hint": "Tỉnh có nhiều thành phố trực thuộc nhất Việt Nam và sở hữu kỳ quan Vịnh Hạ Long."
    },
    {
        "id": "phutho", "name": "Phú Thọ", "regionId": "dong_bac", "regionName": "Đông Bắc Bộ",
        "color": "#0369a1", "capital": "TP. Việt Trì",
        "landmark": "Khu Di tích Đền Hùng, Đồi chè Long Cốc", "specialty": "Bưởi Đoan Hùng, Thịt chua Thanh Sơn",
        "funFact": "Mảnh đất cội nguồn của dân tộc Việt Nam, nơi các Vua Hùng dựng nên nhà nước Văn Lang!",
        "hint": "Nơi diễn ra ngày Quốc giỗ Mùng 10 tháng 3 âm lịch: 'Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba'."
    },

    # 3. ĐỒNG BẰNG SÔNG HỒNG (10 tỉnh/thành)
    {
        "id": "hanoi", "name": "Hà Nội", "regionId": "song_hong", "regionName": "Đồng bằng Sông Hồng",
        "color": "#059669", "capital": "Thủ đô Hà Nội",
        "landmark": "Hồ Hoàn Kiếm, Hoàng thành Thăng Long, Văn Miếu Quốc Tử Giám", "specialty": "Phở Hà Nội, Bún chả, Cốm Làng Vòng",
        "funFact": "Thủ đô ngàn năm văn hiến với 36 phố phường rêu phong cổ kính!",
        "hint": "Trái tim của cả nước, nơi có Tháp Rùa và Cột cờ Hà Nội kiêu hãnh."
    },
    {
        "id": "haiphong", "name": "Hải Phòng", "regionId": "song_hong", "regionName": "Đồng bằng Sông Hồng",
        "color": "#059669", "capital": "Thành phố Cảng Hải Phòng",
        "landmark": "Quần đảo Cát Bà, Bãi biển Đồ Sơn, Cầu Hoàng Văn Thụ", "specialty": "Bánh đa cua, Bánh mì cay, Nem cua bể",
        "funFact": "Thành phố Hoa Phượng Đỏ, cửa ngõ cảng biển quốc tế lớn nhất miền Bắc!",
        "hint": "Thành phố Hoa Phượng Đỏ rực rỡ và bến cảng biển sôi động."
    },
    {
        "id": "vinhphuc", "name": "Vĩnh Phúc", "regionId": "song_hong", "regionName": "Đồng bằng Sông Hồng",
        "color": "#059669", "capital": "TP. Vĩnh Yên",
        "landmark": "Thị trấn Tam Đảo trên mây, Danh thắng Tây Thiên", "specialty": "Ngọn su su Tam Đảo, Cá thính Lập Thạch",
        "funFact": "Tam Đảo được ví như 'Đà Lạt của miền Bắc' với khí hậu mát lạnh 4 mùa hội tụ trong ngày!",
        "hint": "Tỉnh nằm sát phía Bắc Hà Nội, có dãy Tam Đảo ẩn hiện trong sương mờ."
    },
    {
        "id": "bacninh", "name": "Bắc Ninh", "regionId": "song_hong", "regionName": "Đồng bằng Sông Hồng",
        "color": "#059669", "capital": "TP. Bắc Ninh",
        "landmark": "Chùa Dâu cổ kính, Chùa Phật Tích, Đền Đô thờ 8 vị vua Lý", "specialty": "Bánh phu thê Đình Bảng, Nem bùi Ninh Xá",
        "funFact": "Tỉnh có diện tích nhỏ nhất cả nước nhưng là cái nôi Dân ca Quan họ di sản phi vật thể thế giới!",
        "hint": "Tỉnh có diện tích nhỏ nhất Việt Nam, quê hương của làn điệu Quan họ ngọt ngào."
    },
    {
        "id": "haiduong", "name": "Hải Dương", "regionId": "song_hong", "regionName": "Đồng bằng Sông Hồng",
        "color": "#059669", "capital": "TP. Hải Dương",
        "landmark": "Quần thể Côn Sơn - Kiếp Bạc, Đảo Cò Chi Lăng Nam", "specialty": "Bánh đậu xanh, Bánh gai Ninh Giang, Rươi Tứ Kỳ",
        "funFact": "Gắn liền với những danh nhân lịch sử vĩ đại: Trần Hưng Đạo, Nguyễn Trãi, Chu Văn An!",
        "hint": "Nổi tiếng với bánh đậu xanh vàng óng thơm ngon và quần thể di tích Côn Sơn - Kiếp Bạc."
    },
    {
        "id": "hungyen", "name": "Hưng Yên", "regionId": "song_hong", "regionName": "Đồng bằng Sông Hồng",
        "color": "#059669", "capital": "TP. Hưng Yên",
        "landmark": "Phố Hiến xưa, Đền Chử Đồng Tử", "specialty": "Nhãn lồng tiến vua ngọt mọng, Gà Đông Tảo",
        "funFact": "Xưa kia từng có câu 'Thứ nhất Kinh Kỳ, thứ nhì Phố Hiến' ca ngợi sự sầm uất bậc nhất!",
        "hint": "Xứ sở nhãn lồng tiến vua và giống gà chân voi Đông Tảo quý hiếm."
    },
    {
        "id": "thaibinh", "name": "Thái Bình", "regionId": "song_hong", "regionName": "Đồng bằng Sông Hồng",
        "color": "#059669", "capital": "TP. Thái Bình",
        "landmark": "Chùa Keo gỗ cổ kính, Bãi biển Cồn Vành", "specialty": "Bánh cáy Làng Nguyễn, Canh cá Quỳnh Côi",
        "funFact": "Quê hương của 'Chị Hai năm tấn' - vựa lúa phù sa trù phú hàng đầu miền Bắc!",
        "hint": "Tỉnh duy nhất miền Bắc hoàn toàn không có núi non, nổi tiếng với cánh đồng lúa năm tấn."
    },
    {
        "id": "hanam", "name": "Hà Nam", "regionId": "song_hong", "regionName": "Đồng bằng Sông Hồng",
        "color": "#059669", "capital": "TP. Phủ Lý",
        "landmark": "Chùa Tam Chúc, Núi Đọi Sông Châu", "specialty": "Cá kho làng Vũ Đại, Chuối ngự Đại Hoàng",
        "funFact": "Quần thể tâm linh Tam Chúc là một trong những ngôi chùa lớn nhất thế giới!",
        "hint": "Quê hương của nhà văn Nam Cao và món cá kho niêu đất làng Vũ Đại trứ danh."
    },
    {
        "id": "namdinh", "name": "Nam Định", "regionId": "song_hong", "regionName": "Đồng bằng Sông Hồng",
        "color": "#059669", "capital": "TP. Nam Định",
        "landmark": "Đền Trần, Chùa Phổ Minh, Nhà thờ đổ Hải Hậu", "specialty": "Phở bò Nam Định, Kẹo sìu châu, Bánh xíu páo",
        "funFact": "Mảnh đất phát tích của triều đại nhà Trần - ba lần đại thắng giặc Nguyên Mông hiển hách!",
        "hint": "Cái nôi vương triều Trần và lễ hội Khai ấn Đền Trần trang nghiêm đầu xuân."
    },
    {
        "id": "ninhbinh", "name": "Ninh Bình", "regionId": "song_hong", "regionName": "Đồng bằng Sông Hồng",
        "color": "#059669", "capital": "TP. Ninh Bình",
        "landmark": "Tràng An, Hang Múa, Cố đô Hoa Lư, Chùa Bái Đính", "specialty": "Cơm cháy ruốc thơm giòn, Thịt dê núi",
        "funFact": "Quần thể Tràng An là Di sản Văn hóa và Thiên nhiên Thế giới HỖN HỢP đầu tiên tại Đông Nam Á!",
        "hint": "Cố đô Hoa Lư lịch sử với cảnh sắc non nước Tràng An kỳ vĩ như tranh thuỷ mặc."
    },

    # 4. BẮC TRUNG BỘ (6 tỉnh)
    {
        "id": "thanhhoa", "name": "Thanh Hoá", "regionId": "bac_trung_bo", "regionName": "Bắc Trung Bộ",
        "color": "#d97706", "capital": "TP. Thanh Hoá",
        "landmark": "Thành nhà Hồ, Bãi biển Sầm Sơn, Khu bảo tồn Pù Luông", "specialty": "Nem chua Thanh Hoá, Bánh gai Tứ Trụ",
        "funFact": "Thành nhà Hồ là công trình kiến trúc bằng đá nguyên khối độc nhất vô nhị ở Đông Nam Á!",
        "hint": "Cầu nối giữa miền Bắc và miền Trung, tỉnh có dân số đứng thứ 3 cả nước."
    },
    {
        "id": "nghean", "name": "Nghệ An", "regionId": "bac_trung_bo", "regionName": "Bắc Trung Bộ",
        "color": "#d97706", "capital": "TP. Vinh",
        "landmark": "Khu di tích Kim Liên Nam Đàn, Bãi biển Cửa Lò, Đảo chè Thanh Chương", "specialty": "Cháo lươn xứ Nghệ, Cam Xã Đoài",
        "funFact": "Tỉnh có diện tích tự nhiên lớn nhất Việt Nam (16.490 km²) và là quê hương Bác Hồ vĩ đại!",
        "hint": "Tỉnh có diện tích rộng nhất Việt Nam, mảnh đất địa linh nhân kiệt sinh ra Chủ tịch Hồ Chí Minh."
    },
    {
        "id": "hatinh", "name": "Hà Tĩnh", "regionId": "bac_trung_bo", "regionName": "Bắc Trung Bộ",
        "color": "#d97706", "capital": "TP. Hà Tĩnh",
        "landmark": "Ngã ba Đồng Lộc anh hùng, Khu lưu niệm Đại thi hào Nguyễn Du", "specialty": "Kẹo cu đơ giòn thơm, Bưởi Phúc Trạch",
        "funFact": "Quê hương của Đại thi hào Nguyễn Du - tác giả kiệt tác Truyện Kiều bất hủ!",
        "hint": "Mảnh đất kiên cường với núi Hồng Lĩnh 99 đỉnh và dòng sông La trong xanh."
    },
    {
        "id": "quangbinh", "name": "Quảng Bình", "regionId": "bac_trung_bo", "regionName": "Bắc Trung Bộ",
        "color": "#d97706", "capital": "TP. Đồng Hới",
        "landmark": "Vườn quốc gia Phong Nha - Kẻ Bàng, Hang Sơn Đoòng, Động Thiên Đường", "specialty": "Khoai gieo, Cháo canh, Bánh bột lọc",
        "funFact": "Được mệnh danh là 'Vương quốc hang động' thế giới với Sơn Đoòng - hang tự nhiên lớn nhất trái đất!",
        "hint": "Nơi có bề ngang lãnh thổ đất liền hẹp nhất Việt Nam (chỉ khoảng 50km)."
    },
    {
        "id": "quangtri", "name": "Quảng Trị", "regionId": "bac_trung_bo", "regionName": "Bắc Trung Bộ",
        "color": "#d97706", "capital": "TP. Đông Hà",
        "landmark": "Thành cổ Quảng Trị, Sông Bến Hải - Cầu Hiền Lương, Địa đạo Vịnh Mốc", "specialty": "Thịt trâu lá trơng, Tiêu Cùa",
        "funFact": "Cầu Hiền Lương và sông Bến Hải từng là giới tuyến quân sự tạm thời vĩ tuyến 17 chia cắt non sông hơn 20 năm.",
        "hint": "Mảnh đất anh hùng với dòng sông Bến Hải và cây cầu Hiền Lương lịch sử."
    },
    {
        "id": "tthue", "name": "Thừa Thiên Huế", "regionId": "bac_trung_bo", "regionName": "Bắc Trung Bộ",
        "color": "#d97706", "capital": "TP. Huế",
        "landmark": "Đại Nội Huế, Sông Hương - Núi Ngự, Chùa Thiên Mụ, Lăng Khải Định", "specialty": "Bún bò Huế, Cơm hến, Mè xửng",
        "funFact": "Cố đô của triều Nguyễn với Nhã nhạc Cung đình Huế được UNESCO vinh danh Di sản thế giới!",
        "hint": "Cố đô trầm mặc bên dòng sông Hương thơ mộng với tà áo dài tím thướt tha."
    },

    # 5. DUYÊN HẢI NAM TRUNG BỘ & BIỂN ĐẢO (8 tỉnh/thành + 2 quần đảo)
    {
        "id": "danang", "name": "Đà Nẵng", "regionId": "nam_trung_bo", "regionName": "Duyên hải Nam Trung Bộ",
        "color": "#ea580c", "capital": "Thành phố Đà Nẵng",
        "landmark": "Cầu Vàng Bà Nà Hills, Cầu Rồng phun lửa, Danh thắng Ngũ Hành Sơn", "specialty": "Mì Quảng, Bánh tráng cuốn thịt heo",
        "funFact": "Được vinh danh là một trong những thành phố biển đáng sống nhất Việt Nam và khu vực!",
        "hint": "Thành phố hiện đại bên bờ sông Hàn, nổi tiếng với Cầu Rồng và Cầu Vàng."
    },
    {
        "id": "quangnam", "name": "Quảng Nam", "regionId": "nam_trung_bo", "regionName": "Duyên hải Nam Trung Bộ",
        "color": "#ea580c", "capital": "TP. Tam Kỳ",
        "landmark": "Phố cổ Hội An, Thánh địa Mỹ Sơn, Đảo Cù Lao Chàm", "specialty": "Cao lầu Hội An, Bê thui Cầu Mống, Gà đèo Le",
        "funFact": "Tỉnh đặc biệt sở hữu cùng lúc 2 Di sản Văn hóa Thế giới: Phố cổ Hội An và Thánh địa Mỹ Sơn!",
        "hint": "Xứ Quảng thân thương với những con hẻm vàng rực đèn lồng Hội An hoài niệm."
    },
    {
        "id": "quangngai", "name": "Quảng Ngãi", "regionId": "nam_trung_bo", "regionName": "Duyên hải Nam Trung Bộ",
        "color": "#ea580c", "capital": "TP. Quảng Ngãi",
        "landmark": "Đảo núi lửa Lý Sơn, Núi Thiên Ấn sông Trà Khúc, Dung Quất", "specialty": "Tỏi Lý Sơn, Kẹo gương, Mạch nha Mộ Đức, Don",
        "funFact": "Huyện đảo Lý Sơn được xem là bảo tàng sống động về chủ quyền Hoàng Sa - Trường Sa thiêng liêng!",
        "hint": "Vương quốc tỏi đảo Lý Sơn nổi tiếng và ngọn núi Thiên Ấn soi bóng sông Trà Khúc."
    },
    {
        "id": "binhdinh", "name": "Bình Định", "regionId": "nam_trung_bo", "regionName": "Duyên hải Nam Trung Bộ",
        "color": "#ea580c", "capital": "TP. Quy Nhơn",
        "landmark": "Kỳ Co - Eo Gió, Tháp Đôi Chăm Pa, Bảo tàng Hoàng đế Quang Trung", "specialty": "Bánh ít lá gai, Bún chả cá Quy Nhơn, Rượu Bàu Đá",
        "funFact": "Vùng đất võ Tây Sơn huyền thoại của vị anh hùng áo vải cờ đào Quang Trung - Nguyễn Huệ!",
        "hint": "Đất võ trời văn Bình Định với bãi biển Quy Nhơn hiền hòa."
    },
    {
        "id": "phuyen", "name": "Phú Yên", "regionId": "nam_trung_bo", "regionName": "Duyên hải Nam Trung Bộ",
        "color": "#ea580c", "capital": "TP. Tuy Hoà",
        "landmark": "Gành Đá Đĩa kỳ quan, Hải đăng Mũi Đại Lãnh (Mũi Điện)", "specialty": "Mắt cá ngừ đại dương, Bánh canh hẹ, Bò một nắng",
        "funFact": "Mũi Đại Lãnh là một trong những điểm đón ánh bình minh đầu tiên trên dải đất liền Việt Nam!",
        "hint": "Xứ sở hoa vàng trên cỏ xanh với kiệt tác đá xếp bazan Gành Đá Đĩa ven biển."
    },
    {
        "id": "khanhhoa", "name": "Khánh Hoà", "regionId": "nam_trung_bo", "regionName": "Duyên hải Nam Trung Bộ",
        "color": "#ea580c", "capital": "TP. Nha Trang",
        "landmark": "Vịnh Nha Trang, Tháp Bà Ponagar, Viện Hải dương học", "specialty": "Yến sào Khánh Hoà, Nem nướng Ninh Hoà, Chả cá",
        "funFact": "Được ca ngợi là 'Xứ trầm biển yến' với Vịnh Nha Trang nằm trong câu lạc bộ những vịnh đẹp nhất thế giới!",
        "hint": "Thành phố biển Nha Trang xinh đẹp với những bãi cát mịn và các đảo yến kỳ thú."
    },
    {
        "id": "ninhthuan", "name": "Ninh Thuận", "regionId": "nam_trung_bo", "regionName": "Duyên hải Nam Trung Bộ",
        "color": "#ea580c", "capital": "TP. Phan Rang - Tháp Chàm",
        "landmark": "Vịnh Vĩnh Hy tuyệt mỹ, Đồi cát Nam Cương, Tháp Po Klong Garai", "specialty": "Nho Ninh Thuận giòn ngọt, Táo xanh, Bánh căn",
        "funFact": "Nơi có nhiều giờ nắng nhất cả nước, thủ phủ nho và năng lượng xanh điện mặt trời!",
        "hint": "Thủ phủ nho xanh trĩu cành và những cụm tháp Chăm cổ kính giữa vùng nắng gió."
    },
    {
        "id": "binhthuan", "name": "Bình Thuận", "regionId": "nam_trung_bo", "regionName": "Duyên hải Nam Trung Bộ",
        "color": "#ea580c", "capital": "TP. Phan Thiết",
        "landmark": "Đồi cát bay Mũi Né, Hải đăng Kê Gà, Trường Dục Thanh", "specialty": "Thanh long ruột đỏ, Nước mắm Phan Thiết truyền thống",
        "funFact": "Thủ phủ thanh long lớn nhất Việt Nam và là kinh đô resort Mũi Né nổi danh thế giới!",
        "hint": "Nơi thầy giáo Nguyễn Tất Thành từng dạy học tại Trường Dục Thanh trước khi ra đi tìm đường cứu nước."
    },
    {
        "id": "hoangsa", "name": "Quần đảo Hoàng Sa", "regionId": "bien_dao", "regionName": "Biển Đảo Việt Nam",
        "color": "#dc2626", "capital": "Huyện đảo Hoàng Sa (TP. Đà Nẵng)",
        "landmark": "Đảo Hoàng Sa, Đảo Tri Tôn, Đá Bắc, Bãi Cát Vàng", "specialty": "Hải sản biển sâu, Chim hải âu biển",
        "funFact": "Phần lãnh thổ thiêng liêng bất khả xâm phạm của Tổ quốc Việt Nam ngàn đời giữa Biển Đông!",
        "hint": "Quần đảo thiêng liêng ở phía Bắc Biển Đông, trực thuộc thành phố Đà Nẵng."
    },
    {
        "id": "truongsa", "name": "Quần đảo Trường Sa", "regionId": "bien_dao", "regionName": "Biển Đảo Việt Nam",
        "color": "#dc2626", "capital": "Huyện đảo Trường Sa (Tỉnh Khánh Hoà)",
        "landmark": "Cột mốc chủ quyền Trường Sa Lớn, Đảo Song Tử Tây, Nhà giàn DK1", "specialty": "Cây bàng vuông, Ốc tai tượng",
        "funFact": "Nơi các chiến sĩ Hải quân kiên cường ngày đêm canh giữ vùng trời, vùng biển đảo thiêng liêng!",
        "hint": "Quần đảo thiêng liêng ở phía Nam Biển Đông, với biểu tượng cây phong ba và bàng vuông kiên cường."
    },

    # 6. TÂY NGUYÊN (5 tỉnh)
    {
        "id": "kontum", "name": "Kon Tum", "regionId": "tay_nguyen", "regionName": "Tây Nguyên",
        "color": "#65a30d", "capital": "TP. Kon Tum",
        "landmark": "Nhà thờ Gỗ Kon Tum hơn 100 tuổi, Cầu treo Kon Klor, Thị trấn Măng Đen", "specialty": "Gỏi lá Kon Tum, Rượu cần men lá",
        "funFact": "Thị trấn Măng Đen được ví như 'Đà Lạt thứ hai' với những cánh rừng thông nguyên sinh bạt ngàn!",
        "hint": "Tỉnh cực Bắc Tây Nguyên, nơi có ngã ba Đông Dương tiếp giáp Lào và Campuchia."
    },
    {
        "id": "gialai", "name": "Gia Lai", "regionId": "tay_nguyen", "regionName": "Tây Nguyên",
        "color": "#65a30d", "capital": "TP. Pleiku",
        "landmark": "Biển Hồ T’Nưng (Đôi mắt Pleiku), Núi lửa Chư Đăng Ya hoa dã quỳ", "specialty": "Phở hai tô Pleiku, Bò một nắng Krông Pa",
        "funFact": "Biển Hồ T’Nưng thực chất là miệng núi lửa bazan đã ngưng hoạt động hàng triệu năm trước!",
        "hint": "Nơi có 'Đôi mắt Pleiku Biển Hồ đầy' trong câu hát nổi tiếng làm say lòng người."
    },
    {
        "id": "daklak", "name": "Đắk Lắk", "regionId": "tay_nguyen", "regionName": "Tây Nguyên",
        "color": "#65a30d", "capital": "TP. Buôn Ma Thuột",
        "landmark": "Bản Đôn voi rừng, Bảo tàng Thế giới Cà phê, Hồ Lắk", "specialty": "Cà phê Buôn Ma Thuột số 1, Cơm lam gà nướng",
        "funFact": "Được tôn vinh là 'Thủ phủ Cà phê của Việt Nam' và cái nôi Không gian Văn hóa Cồng chiêng Tây Nguyên!",
        "hint": "Thủ phủ cà phê ngát hương và huyền thoại voi rừng Bản Đôn thuần dưỡng."
    },
    {
        "id": "daknong", "name": "Đắk Nông", "regionId": "tay_nguyen", "regionName": "Tây Nguyên",
        "color": "#65a30d", "capital": "TP. Gia Nghĩa",
        "landmark": "Công viên Địa chất Toàn cầu UNESCO, Thác Liêng Nung, Hồ Tà Đùng", "specialty": "Hồ tiêu Đắk Nông, Bơ sáp thơm ngậy",
        "funFact": "Hồ Tà Đùng được mệnh danh là 'Vịnh Hạ Long trên cao nguyên' với hơn 40 đảo lớn nhỏ nhấp nhô!",
        "hint": "Nổi tiếng với hệ thống hang động núi lửa dài nhất Đông Nam Á và Hồ Tà Đùng tuyệt sắc."
    },
    {
        "id": "lamdong", "name": "Lâm Đồng", "regionId": "tay_nguyen", "regionName": "Tây Nguyên",
        "color": "#65a30d", "capital": "TP. Đà Lạt",
        "landmark": "Hồ Xuân Hương, Thung lũng Tình Yêu, Đỉnh Langbiang huyền thoại", "specialty": "Dâu tây Đà Lạt, Mứt hoa quả, Trà Atiso",
        "funFact": "Đà Lạt nổi danh là 'Thành phố Ngàn hoa' trên cao nguyên mát lạnh quanh năm không khí trong lành!",
        "hint": "Thành phố mộng mơ trên cao nguyên Lâm Viên, bốn mùa hoa nở thắm tươi."
    },

    # 7. ĐÔNG NAM BỘ (6 tỉnh/thành)
    {
        "id": "hcm", "name": "TP. Hồ Chí Minh", "regionId": "dong_nam_bo", "regionName": "Đông Nam Bộ",
        "color": "#db2777", "capital": "Thành phố Hồ Chí Minh",
        "landmark": "Bến Nhà Rồng, Chợ Bến Thành, Dinh Độc Lập, Toà tháp Landmark 81", "specialty": "Cơm tấm Sài Gòn, Hủ tiếu Nam Vang, Bánh mì kẹp",
        "funFact": "Đô thị lớn nhất Việt Nam, trung tâm kinh tế, tài chính năng động và sôi động hàng đầu cả nước!",
        "hint": "Hòn ngọc Viễn Đông, nơi Bác Hồ ra đi tìm đường cứu nước năm 1911 từ Bến Nhà Rồng."
    },
    {
        "id": "binhphuoc", "name": "Bình Phước", "regionId": "dong_nam_bo", "regionName": "Đông Nam Bộ",
        "color": "#db2777", "capital": "TP. Đồng Xoài",
        "landmark": "Trảng cỏ Bù Lạch xanh mướt, Rừng cao su Bù Đăng, Thác Mơ", "specialty": "Hạt điều rang muối bùi béo",
        "funFact": "Được xem là thủ phủ cây Điều lớn nhất cả nước, chiếm hơn 50% sản lượng hạt điều Việt Nam!",
        "hint": "Tỉnh có diện tích lớn nhất miền Đông Nam Bộ với những cánh rừng cao su bạt ngàn."
    },
    {
        "id": "tayninh", "name": "Tây Ninh", "regionId": "dong_nam_bo", "regionName": "Đông Nam Bộ",
        "color": "#db2777", "capital": "TP. Tây Ninh",
        "landmark": "Núi Bà Đen linh thiêng, Toà thánh Tây Ninh, Hồ Dầu Tiếng", "specialty": "Bánh tráng phơi sương Trảng Bàng, Muối tôm Tây Ninh",
        "funFact": "Núi Bà Đen cao 986m được mệnh danh là 'Nóc nhà Đông Nam Bộ' với tượng Phật Bà bằng đồng kỷ lục!",
        "hint": "Mảnh đất có ngọn núi Bà Đen cao nhất Đông Nam Bộ và Tòa thánh Cao Đài uy nghiêm."
    },
    {
        "id": "binhduong", "name": "Bình Dương", "regionId": "dong_nam_bo", "regionName": "Đông Nam Bộ",
        "color": "#db2777", "capital": "TP. Thủ Dầu Một",
        "landmark": "Khu du lịch Đại Nam, Vườn cây ăn trái Lái Thiêu, Chùa Bà", "specialty": "Bánh bèo bì, Măng cụt Lái Thiêu",
        "funFact": "Thủ phủ công nghiệp hàng đầu Việt Nam với các khu công nghiệp thông minh và làng nghề gốm sứ lâu đời!",
        "hint": "Vườn trái cây Lái Thiêu sum suê và những khu đô thị công nghiệp hiện đại bậc nhất."
    },
    {
        "id": "dongnai", "name": "Đồng Nai", "regionId": "dong_nam_bo", "regionName": "Đông Nam Bộ",
        "color": "#db2777", "capital": "TP. Biên Hoà",
        "landmark": "Vườn quốc gia Cát Tiên, Hồ Trị An, Thác Giang Điền", "specialty": "Bưởi Tân Triều mọng nước, Sầu riêng Long Khánh",
        "funFact": "Vườn quốc gia Cát Tiên là Khu Dự trữ Sinh quyển Thế giới với thảm động thực vật quý hiếm!",
        "hint": "Cửa ngõ phía Đông của TP.HCM, nơi đang xây dựng Đại sân bay Quốc tế Long Thành tầm cỡ quốc tế."
    },
    {
        "id": "baria", "name": "Bà Rịa - Vũng Tàu", "regionId": "dong_nam_bo", "regionName": "Đông Nam Bộ",
        "color": "#db2777", "capital": "TP. Bà Rịa",
        "landmark": "Tượng Chúa Kitô Vua, Bãi Sau - Bãi Trước Vũng Tàu, Quần đảo Côn Đảo", "specialty": "Bánh khọt Vũng Tàu giòn rụm, Gỏi cá mai",
        "funFact": "Côn Đảo thuộc tỉnh là vùng đất di tích lịch sử thiêng liêng và thiên đường sinh thái bảo tồn rùa biển!",
        "hint": "Thành phố biển du lịch thân quen và trung tâm khai thác dầu khí thềm lục địa quan trọng."
    },

    # 8. ĐỒNG BẰNG SÔNG CỬU LONG (13 tỉnh/thành)
    {
        "id": "longan", "name": "Long An", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Tân An",
        "landmark": "Làng nổi Tân Lập, Rừng tràm Đồng Tháp Mười", "specialty": "Gạo Nàng Thơm Chợ Đào thơm dẻo, Thanh long Châu Thành",
        "funFact": "Cửa ngõ huyết mạch kết nối TP. Hồ Chí Minh với toàn bộ vùng đồng bằng Tây Nam Bộ bao la!",
        "hint": "Tỉnh cửa ngõ nối TP.HCM với 12 tỉnh miền Tây sông nước Cửu Long."
    },
    {
        "id": "tiengiang", "name": "Tiền Giang", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Mỹ Tho",
        "landmark": "Cù lao Thới Sơn, Chợ nổi Cái Bè trên sông, Chùa Vĩnh Tràng", "specialty": "Hủ tiếu Mỹ Tho, Xoài cát Hoà Lộc ngọt lịm",
        "funFact": "Xứ sở cây lành trái ngọt với những cù lao trĩu quả bên dòng sông Tiền hiền hòa!",
        "hint": "Bên bờ bắc sông Tiền, nổi tiếng với món hủ tiếu Mỹ Tho đậm đà hương vị."
    },
    {
        "id": "bentre", "name": "Bến Tre", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Bến Tre",
        "landmark": "Cồn Phụng Đạo Dừa, Làng nghề cây giống hoa kiểng Chợ Lách", "specialty": "Kẹo dừa Bến Tre béo ngậy, Bánh tráng Mỹ Lồng",
        "funFact": "Được tôn vinh là 'Xứ sở Dừa' của Việt Nam, cái nôi của phong trào Đồng Khởi hào hùng năm 1960!",
        "hint": "Xứ dừa bạt ngàn với những rặng dừa nghiêng bóng soi dòng kênh xanh."
    },
    {
        "id": "travinh", "name": "Trà Vinh", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Trà Vinh",
        "landmark": "Thắng cảnh Ao Bà Om, Chùa Hang, Chùa Âng cổ kính", "specialty": "Bánh tét Trà Cuôn, Dừa sáp Cầu Kè độc nhất",
        "funFact": "Có hơn 140 ngôi chùa Khmer cổ kính với kiến trúc độc đáo và giống Dừa sáp quý hiếm!",
        "hint": "Mảnh đất giao thoa văn hoá Kinh - Khmer - Hoa với danh thắng Ao Bà Om rợp bóng sao dầu cổ thụ."
    },
    {
        "id": "vinhlong", "name": "Vĩnh Long", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Vĩnh Long",
        "landmark": "Cầu Mỹ Thuận dây văng, Cù lao An Bình, Vương quốc gốm đỏ Mang Thít", "specialty": "Bưởi năm roi Bình Minh, Cam sành Tam Bình mọng nước",
        "funFact": "Nằm giữa hai nhánh sông Tiền và sông Hậu, sở hữu những lò nung gốm đỏ gạch Mang Thít tựa cổ tích!",
        "hint": "Trái tim miền Tây nằm giữa hai con sông lớn Tiền Giang và Hậu Giang, nơi có cây cầu Mỹ Thuận."
    },
    {
        "id": "dongthap", "name": "Đồng Tháp", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Cao Lãnh",
        "landmark": "Vườn quốc gia Tràm Chim, Làng hoa Sa Đéc trăm tuổi, Khu di tích Cụ Phó bảng Nguyễn Sinh Sắc", "specialty": "Nem Lai Vung chua ngọt, Hủ tiếu Sa Đéc",
        "funFact": "Được mệnh danh là 'Thủ phủ Sen hồng' và nơi cư ngụ của loài Sếu đầu đỏ quý hiếm tại Tràm Chim!",
        "hint": "Xứ sở sen hồng: 'Tháp Mười đẹp nhất bông sen / Việt Nam đẹp nhất có tên Bác Hồ'."
    },
    {
        "id": "angiang", "name": "An Giang", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Long Xuyên",
        "landmark": "Rừng tràm Trà Sư xanh ngút ngàn, Miếu Bà Chúa Xứ Núi Sam, Dãy Thất Sơn Bảy Núi", "specialty": "Mắm Châu Đốc nức tiếng, Bò bảy món Núi Sam",
        "funFact": "Vùng Bảy Núi kỳ vĩ huyền bí và lễ hội Vía Bà Chúa Xứ thu hút hàng triệu lượt đồng bào hành hương mỗi năm!",
        "hint": "Nơi dòng sông Mê Kông hùng vĩ bắt đầu chảy vào lòng đất mẹ Việt Nam."
    },
    {
        "id": "kiengiang", "name": "Kiên Giang", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Rạch Giá",
        "landmark": "Thành phố Đảo Ngọc Phú Quốc, Quần đảo Nam Du hoang sơ, Hòn Phụ Tử", "specialty": "Nước mắm Phú Quốc truyền thống, Tiêu Phú Quốc thơm nồng",
        "funFact": "Phú Quốc là thành phố đảo đầu tiên của Việt Nam với các bãi biển cát trắng nước trong vắt lọt top thế giới!",
        "hint": "Tỉnh có diện tích lớn nhất miền Tây Nam Bộ, sở hữu thành phố Đảo Ngọc Phú Quốc xinh đẹp."
    },
    {
        "id": "cantho", "name": "Cần Thơ", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "Thành phố Cần Thơ",
        "landmark": "Bến Ninh Kiều lung linh, Chợ nổi Cái Răng tấp nập, Nhà cổ Bình Thuỷ", "specialty": "Bánh xèo miền Tây giòn rụm, Lẩu mắm, Bánh tét lá cẩm",
        "funFact": "Được mệnh danh là 'Tây Đô' - thủ phủ trung tâm kinh tế, văn hoá, giáo dục của toàn vùng Đồng bằng sông Cửu Long!",
        "hint": "'Cần Thơ gạo trắng nước trong / Ai đi đến đó lòng không muốn về'."
    },
    {
        "id": "haugiang", "name": "Hậu Giang", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Vị Thanh",
        "landmark": "Chợ nổi Ngã Bảy Phụng Hiệp, Khu bảo tồn thiên nhiên Lung Ngọc Hoàng", "specialty": "Khóm Cầu Đúc ngọt thanh, Chả cá thát lát rút xương",
        "funFact": "Chợ nổi Ngã Bảy là nơi hội tụ 7 nhánh kênh rạch sông nước, đi vào bài vọng cổ 'Tình anh bán chiếu' nổi tiếng!",
        "hint": "Nổi tiếng với câu chuyện chợ nổi Ngã Bảy và khu bảo tồn thiên nhiên đầm lầy Lung Ngọc Hoàng."
    },
    {
        "id": "soctrang", "name": "Sóc Trăng", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Sóc Trăng",
        "landmark": "Chùa Dơi kỳ thú, Chùa Chén Kiểu lộng lẫy, Lễ hội đua ghe Ngo Oóc Om Bóc", "specialty": "Bánh pía Sóc Trăng sầu riêng, Bún nước lèo đậm đà",
        "funFact": "Chùa Dơi là nơi trú ngụ tự nhiên của hàng vạn cá thể dơi ngựa quý hiếm suốt hàng trăm năm qua!",
        "hint": "Xứ sở của bánh pía thơm bùi và tiếng còi thúc giục trong ngày hội đua ghe Ngo sôi động."
    },
    {
        "id": "baclieu", "name": "Bạc Liêu", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Bạc Liêu",
        "landmark": "Dinh thự Công tử Bạc Liêu, Cánh đồng quạt gió ven biển, Đền thờ Cố nhạc sĩ Cao Văn Lầu", "specialty": "Bánh tằm Ngan Dừa, Bún bò cay, Nhãn da bò",
        "funFact": "Cái nôi của bản 'Dạ Cổ Hoài Lang' bất hủ - khởi nguồn cho nghệ thuật Đờn ca tài tử Nam Bộ di sản thế giới!",
        "hint": "Quê hương của bản Dạ Cổ Hoài Lang và giai thoại lịch sử Công tử Bạc Liêu nức tiếng."
    },
    {
        "id": "camau", "name": "Cà Mau", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Cà Mau",
        "landmark": "Mốc tọa độ quốc gia Đất Mũi, Rừng ngập mặn U Minh Hạ, Mũi Cà Mau", "specialty": "Cua Cà Mau chắc nịch, Tôm khô Rạch Gốc",
        "funFact": "Mảnh đất Cực Nam của Tổ quốc, nơi duy nhất trên đất liền có thể ngắm mặt trời mọc ở biển Đông và lặn ở biển Tây!",
        "hint": "Điểm cực Nam thiêng liêng của Tổ quốc: 'Tổ quốc tôi như một con tàu / Mũi thuyền ta đó - Mũi Cà Mau'."
    }
]

REGIONS = [
    {
        "id": "tay_bac",
        "name": "Tây Bắc Bộ",
        "badge": "🏔️",
        "count": 6,
        "color": "#0284c7",
        "desc": "Vùng núi cao hùng vĩ với đỉnh Fansipan, đèo Ô Quy Hồ và thiên nhiên kỳ thú."
    },
    {
        "id": "dong_bac",
        "name": "Đông Bắc Bộ",
        "badge": "🏞️",
        "count": 9,
        "color": "#0369a1",
        "desc": "Vùng đất cội nguồn Đền Hùng, non nước Cao Bằng, Vịnh Hạ Long kỳ quan."
    },
    {
        "id": "song_hong",
        "name": "Đồng bằng Sông Hồng",
        "badge": "🌾",
        "count": 10,
        "color": "#059669",
        "desc": "Trái tim Thủ đô Hà Nội ngàn năm văn hiến, phù sa châu thổ trù phú."
    },
    {
        "id": "bac_trung_bo",
        "name": "Bắc Trung Bộ",
        "badge": "🏛️",
        "count": 6,
        "color": "#d97706",
        "desc": "Dải đất kiên cường với quê Bác Nghệ An, vương quốc hang động Quảng Bình và Cố đô Huế."
    },
    {
        "id": "nam_trung_bo",
        "name": "Duyên hải Nam Trung Bộ",
        "badge": "⛵",
        "count": 8,
        "color": "#ea580c",
        "desc": "Bờ biển xanh ngọc, Đà Nẵng năng động, phố cổ Hội An và vịnh Nha Trang."
    },
    {
        "id": "bien_dao",
        "name": "Biển Đảo Việt Nam",
        "badge": "🇻🇳",
        "count": 2,
        "color": "#dc2626",
        "desc": "Hai quần đảo Hoàng Sa và Trường Sa thiêng liêng - chủ quyền thiêng liêng của Tổ quốc."
    },
    {
        "id": "tay_nguyen",
        "name": "Tây Nguyên",
        "badge": "☕",
        "count": 5,
        "color": "#65a30d",
        "desc": "Đất đỏ bazan, bạt ngàn nương cà phê, cồng chiêng đại ngàn và Đà Lạt mộng mơ."
    },
    {
        "id": "dong_nam_bo",
        "name": "Đông Nam Bộ",
        "badge": "🏙️",
        "count": 6,
        "color": "#db2777",
        "desc": "Đầu tàu kinh tế hiện đại với TP. Hồ Chí Minh sôi động và núi Bà Đen hùng vĩ."
    },
    {
        "id": "song_cuu_long",
        "name": "Đồng bằng Sông Cửu Long",
        "badge": "🛶",
        "count": 13,
        "color": "#0d9488",
        "desc": "Miền Tây sông nước mênh mông, vườn cây trĩu quả và đất Mũi Cà Mau cực Nam Tổ quốc."
    }
]

with open('province_paths.json', 'r', encoding='utf-8') as f:
    svg_paths = json.load(f)

import re

def compute_bbox_and_center(d):
    tokens = re.findall(r'([a-df-zA-DF-Z]|[-+]?(?:\d*\.\d+|\d+)(?:[eE][-+]?\d+)?)', d)
    cur_x, cur_y = 0.0, 0.0
    start_x, start_y = 0.0, 0.0
    cmd = 'M'
    points = []
    i = 0
    while i < len(tokens):
        t = tokens[i]
        if t.isalpha():
            cmd = t
            i += 1
            continue
        if cmd == 'm':
            cur_x += float(tokens[i]); cur_y += float(tokens[i+1])
            start_x, start_y = cur_x, cur_y
            points.append((cur_x, cur_y)); cmd = 'l'; i += 2
        elif cmd == 'M':
            cur_x = float(tokens[i]); cur_y = float(tokens[i+1])
            start_x, start_y = cur_x, cur_y
            points.append((cur_x, cur_y)); cmd = 'L'; i += 2
        elif cmd == 'l':
            cur_x += float(tokens[i]); cur_y += float(tokens[i+1])
            points.append((cur_x, cur_y)); i += 2
        elif cmd == 'L':
            cur_x = float(tokens[i]); cur_y = float(tokens[i+1])
            points.append((cur_x, cur_y)); i += 2
        elif cmd == 'c':
            dx1 = float(tokens[i]); dy1 = float(tokens[i+1])
            dx2 = float(tokens[i+2]); dy2 = float(tokens[i+3])
            dx = float(tokens[i+4]); dy = float(tokens[i+5])
            points.append((cur_x + dx1, cur_y + dy1))
            points.append((cur_x + dx2, cur_y + dy2))
            cur_x += dx; cur_y += dy
            points.append((cur_x, cur_y)); i += 6
        elif cmd.lower() == 'z':
            cur_x, cur_y = start_x, start_y; i += 1
        else:
            i += 1
    if not points:
        return [0, 0, 10, 10], [5, 5]
    xs = [p[0] for p in points]; ys = [p[1] for p in points]
    min_x, max_x = min(xs), max(xs)
    min_y, max_y = min(ys), max(ys)
    w = max_x - min_x
    h = max_y - min_y
    cx = (min_x + max_x) / 2
    cy = (min_y + max_y) / 2
    return [round(min_x, 2), round(min_y, 2), round(w, 2), round(h, 2)], [round(cx, 2), round(cy, 2)]

# Attach path 'd', bbox, center directly to each province object!
for item in PROVINCES_DATA:
    pid = item['id']
    if pid in svg_paths:
        item['d'] = svg_paths[pid]
        bbox, center = compute_bbox_and_center(item['d'])
        item['bbox'] = bbox
        item['center'] = center
    else:
        print(f"Warning: Missing SVG path for {pid}")

print(f"Attached SVG paths, bboxes, centers to all {len(PROVINCES_DATA)} provinces.")

# Save as JavaScript module and JSON
output_js = f"window.VIETNAM_REGIONS = {json.dumps(REGIONS, ensure_ascii=False, indent=2)};\n"
output_js += f"window.VIETNAM_PROVINCES = {json.dumps(PROVINCES_DATA, ensure_ascii=False, indent=2)};\n"

with open("provinces-data.js", "w", encoding="utf-8") as f:
    f.write(output_js)

print("Saved provinces-data.js successfully!")
