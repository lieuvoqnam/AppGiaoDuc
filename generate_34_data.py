# -*- coding: utf-8 -*-
"""
generate_34_data.py - Generator for the updated 34 provinces/cities of Vietnam dataset.
"""
import json
import re

with open('province_paths.json', 'r', encoding='utf-8') as f:
    paths_63 = json.load(f)

REGIONS_34 = [
    {
        "id": "bac_bo",
        "name": "Trung du & Miền núi phía Bắc",
        "badge": "🏔️",
        "count": 9,
        "color": "#0284c7",
        "desc": "Vùng non cao kỳ vĩ với đỉnh Fansipan, đèo Ô Quy Hồ, Thác Bản Giốc và cội nguồn Đền Hùng."
    },
    {
        "id": "song_hong",
        "name": "Đồng bằng Sông Hồng",
        "badge": "🌾",
        "count": 6,
        "color": "#059669",
        "desc": "Thủ đô Hà Nội nghìn năm văn hiến, cảng biển Hải Phòng, kỳ quan Vịnh Hạ Long và di sản Tràng An."
    },
    {
        "id": "mien_trung_tay_nguyen",
        "name": "Bắc Trung Bộ, Duyên hải Miền Trung & Tây Nguyên",
        "badge": "🌊",
        "count": 11,
        "color": "#ea580c",
        "desc": "Dải đất nối liền từ quê Bác Nghệ An, Cố đô Huế, Đà Nẵng, biển đảo Hoàng Sa - Trường Sa đến đại ngàn cồng chiêng Tây Nguyên và ngàn hoa Đà Lạt."
    },
    {
        "id": "dong_nam_bo",
        "name": "Đông Nam Bộ",
        "badge": "🏙️",
        "count": 3,
        "color": "#db2777",
        "desc": "Đầu tàu kinh tế sôi động nhất nước với Siêu đô thị TP. Hồ Chí Minh, đại sân bay Long Thành và núi Bà Đen."
    },
    {
        "id": "song_cuu_long",
        "name": "Đồng bằng Sông Cửu Long",
        "badge": "🛶",
        "count": 5,
        "color": "#0d9488",
        "desc": "Vựa lúa miền Tây trù phú, thành phố đảo ngọc Phú Quốc, chợ nổi rộn ràng và đất Mũi Cà Mau Cực Nam."
    }
]

PROVINCES_34 = [
    # 1. HÀ NỘI
    {
        "id": "ha_noi", "name": "Thành phố Hà Nội", "shortName": "Hà Nội",
        "type": "thành phố", "regionId": "song_hong", "regionName": "Đồng bằng Sông Hồng",
        "color": "#059669", "capital": "Thủ đô Hà Nội",
        "mergedFrom": ["Hà Nội"],
        "pathIds": ["hanoi"],
        "landmark": "Hồ Hoàn Kiếm, Hoàng thành Thăng Long, Văn Miếu Quốc Tử Giám",
        "specialty": "Phở Hà Nội, Bún chả, Cốm Làng Vòng",
        "funFact": "Thủ đô ngàn năm văn hiến, trung tâm đầu não chính trị - hành chính quốc gia!",
        "hint": "Trái tim của cả nước, nơi có Tháp Rùa và Cột cờ Hà Nội kiêu hãnh."
    },
    # 2. BẮC NINH (Bắc Ninh + Bắc Giang)
    {
        "id": "bac_ninh", "name": "Tỉnh Bắc Ninh", "shortName": "Bắc Ninh",
        "type": "tỉnh", "regionId": "song_hong", "regionName": "Đồng bằng Sông Hồng",
        "color": "#059669", "capital": "TP. Bắc Ninh",
        "mergedFrom": ["Bắc Ninh", "Bắc Giang"],
        "pathIds": ["bacninh", "bacgiang"],
        "landmark": "Chùa Dâu, Đền Đô thờ 8 vua Lý, Vải thiều Lục Ngạn, Tây Yên Tử",
        "specialty": "Bánh phu thê Đình Bảng, Nem bùi, Mỳ Chũ",
        "funFact": "Cái nôi Dân ca Quan họ di sản thế giới kết hợp với thủ phủ vải thiều Lục Ngạn ngọt lịm xuất khẩu quốc tế!",
        "hint": "Hợp nhất Bắc Ninh và Bắc Giang, quê hương của những canh Quan họ trữ tình và vải thiều trứ danh."
    },
    # 3. QUẢNG NINH
    {
        "id": "quang_ninh", "name": "Tỉnh Quảng Ninh", "shortName": "Quảng Ninh",
        "type": "tỉnh", "regionId": "song_hong", "regionName": "Đồng bằng Sông Hồng",
        "color": "#059669", "capital": "TP. Hạ Long",
        "mergedFrom": ["Quảng Ninh"],
        "pathIds": ["quangninh"],
        "landmark": "Vịnh Hạ Long kỳ quan, Đất thiêng Yên Tử, Bán đảo Tuần Châu",
        "specialty": "Chả mực Hạ Long, Sá sùng Quan Lạn",
        "funFact": "Sở hữu Di sản Thiên nhiên Thế giới Vịnh Hạ Long và vùng than tài nguyên lớn nhất Đông Nam Á!",
        "hint": "Tỉnh ven biển có kỳ quan thiên nhiên thế giới Vịnh Hạ Long."
    },
    # 4. HẢI PHÒNG (Hải Phòng + Hải Dương)
    {
        "id": "hai_phong", "name": "Thành phố Hải Phòng", "shortName": "Hải Phòng",
        "type": "thành phố", "regionId": "song_hong", "regionName": "Đồng bằng Sông Hồng",
        "color": "#059669", "capital": "TP. Hải Phòng",
        "mergedFrom": ["Hải Phòng", "Hải Dương"],
        "pathIds": ["haiphong", "haiduong"],
        "landmark": "Quần đảo Cát Bà, Biển Đồ Sơn, Quần thể Côn Sơn - Kiếp Bạc",
        "specialty": "Bánh đa cua, Bánh mì que cay, Bánh đậu xanh Hải Dương",
        "funFact": "Cửa ngõ cảng biển lớn nhất miền Bắc hợp nhất cùng vùng đất địa linh nhân kiệt Côn Sơn - Kiếp Bạc của anh hùng Nguyễn Trãi!",
        "hint": "Thành phố Hoa Phượng Đỏ kết hợp với xứ sở bánh đậu xanh trứ danh."
    },
    # 5. HƯNG YÊN (Hưng Yên + Thái Bình)
    {
        "id": "hung_yen", "name": "Tỉnh Hưng Yên", "shortName": "Hưng Yên",
        "type": "tỉnh", "regionId": "song_hong", "regionName": "Đồng bằng Sông Hồng",
        "color": "#059669", "capital": "TP. Hưng Yên",
        "mergedFrom": ["Hưng Yên", "Thái Bình"],
        "pathIds": ["hungyen", "thaibinh"],
        "landmark": "Phố Hiến cổ kính, Chùa Keo trăm tuổi, Đền Chử Đồng Tử",
        "specialty": "Nhãn lồng tiến vua, Gà Đông Tảo, Bánh cáy Làng Nguyễn",
        "funFact": "Vựa lúa phù sa châu thổ trù phú bậc nhất miền Bắc và cái nôi 'Thứ nhất Kinh kỳ, thứ nhì Phố Hiến' lẫy lừng!",
        "hint": "Hợp nhất Hưng Yên và Thái Bình, quê hương của nhãn lồng tiến vua và cánh đồng năm tấn."
    },
    # 6. NINH BÌNH (Ninh Bình + Nam Định + Hà Nam)
    {
        "id": "ninh_binh", "name": "Tỉnh Ninh Bình", "shortName": "Ninh Bình",
        "type": "tỉnh", "regionId": "song_hong", "regionName": "Đồng bằng Sông Hồng",
        "color": "#059669", "capital": "TP. Ninh Bình",
        "mergedFrom": ["Ninh Bình", "Nam Định", "Hà Nam"],
        "pathIds": ["ninhbinh", "namdinh", "hanam"],
        "landmark": "Quần thể Tràng An, Chùa Tam Chúc, Cố đô Hoa Lư, Đền Trần Nam Định",
        "specialty": "Cơm cháy dê núi, Phở bò Nam Định, Cá kho Vũ Đại",
        "funFact": "Sở hữu Di sản hỗn hợp thế giới Tràng An, siêu chùa Tam Chúc và mảnh đất phát tích vương triều Trần 3 lần đại thắng Nguyên Mông!",
        "hint": "Hợp nhất Ninh Bình, Nam Định, Hà Nam - vùng đất non nước Tràng An và Cố đô Hoa Lư."
    },

    # 7. CAO BẰNG
    {
        "id": "cao_bang", "name": "Tỉnh Cao Bằng", "shortName": "Cao Bằng",
        "type": "tỉnh", "regionId": "bac_bo", "regionName": "Trung du & Miền núi phía Bắc",
        "color": "#0284c7", "capital": "TP. Cao Bằng",
        "mergedFrom": ["Cao Bằng"],
        "pathIds": ["caobang"],
        "landmark": "Thác Bản Giốc, Hang Pác Bó, Suối Lê-nin trong vắt",
        "specialty": "Hạt dẻ Trùng Khánh, Bánh cuốn Cao Bằng",
        "funFact": "Thác Bản Giốc là một trong những thác nước biên giới tự nhiên đẹp nhất thế giới!",
        "hint": "Tỉnh biên cương phía Bắc có Thác Bản Giốc hùng vĩ và Khu di tích Pác Bó cội nguồn cách mạng."
    },
    # 8. TUYÊN QUANG (Tuyên Quang + Hà Giang)
    {
        "id": "tuyen_quang", "name": "Tỉnh Tuyên Quang", "shortName": "Tuyên Quang",
        "type": "tỉnh", "regionId": "bac_bo", "regionName": "Trung du & Miền núi phía Bắc",
        "color": "#0284c7", "capital": "TP. Tuyên Quang",
        "mergedFrom": ["Tuyên Quang", "Hà Giang"],
        "pathIds": ["tuyenquang", "hagiang"],
        "landmark": "Cột cờ Lũng Cú (Cực Bắc), Đèo Mã Pí Lèng, Chiến khu Tân Trào, Hồ Na Hang",
        "specialty": "Bánh tam giác mạch, Thắng cố, Cam sành Hàm Yên",
        "funFact": "Ôm trọn điểm Cực Bắc Tổ quốc tại Lũng Cú và Thủ đô Kháng chiến Tân Trào lịch sử!",
        "hint": "Hợp nhất Hà Giang và Tuyên Quang - mảnh đất địa đầu Cực Bắc với cao nguyên đá Đồng Văn hùng vĩ."
    },
    # 9. LÀO CAI (Lào Cai + Yên Bái)
    {
        "id": "lao_cai", "name": "Tỉnh Lào Cai", "shortName": "Lào Cai",
        "type": "tỉnh", "regionId": "bac_bo", "regionName": "Trung du & Miền núi phía Bắc",
        "color": "#0284c7", "capital": "TP. Lào Cai",
        "mergedFrom": ["Lào Cai", "Yên Bái"],
        "pathIds": ["laocai", "yenbai"],
        "landmark": "Đỉnh Fansipan (3.143m), Thị xã Sa Pa mù sương, Ruộng bậc thang Mù Cang Chải",
        "specialty": "Thắng cố, Mận Bắc Hà, Cá hồi Sa Pa, Nếp nương Tú Lệ",
        "funFact": "Sở hữu 'Nóc nhà Đông Dương' đỉnh Fansipan và danh thắng ruộng bậc thang Mù Cang Chải vàng óng mùa lúa chín!",
        "hint": "Hợp nhất Lào Cai và Yên Bái - xứ sở mây mù Sa Pa và những thung lũng ruộng bậc thang kỳ vĩ."
    },
    # 10. THÁI NGUYÊN (Thái Nguyên + Bắc Kạn)
    {
        "id": "thai_nguyen", "name": "Tỉnh Thái Nguyên", "shortName": "Thái Nguyên",
        "type": "tỉnh", "regionId": "bac_bo", "regionName": "Trung du & Miền núi phía Bắc",
        "color": "#0284c7", "capital": "TP. Thái Nguyên",
        "mergedFrom": ["Thái Nguyên", "Bắc Kạn"],
        "pathIds": ["thainguyen", "backan"],
        "landmark": "Hồ Ba Bể trên núi, Hồ Núi Cốc, Vùng chè Tân Cương, ATK Định Hóa",
        "specialty": "Trà Tân Cương thượng hạng, Miến dong Na Rì",
        "funFact": "Sự kết hợp giữa 'Thủ đô Đệ nhất danh trà' và thắng cảnh Hồ Ba Bể - một trong 20 hồ nước ngọt tự nhiên trên núi lớn nhất hành tinh!",
        "hint": "Hợp nhất Thái Nguyên và Bắc Kạn - xứ sở đệ nhất danh trà và hồ Ba Bể xanh biếc."
    },
    # 11. LẠNG SƠN
    {
        "id": "lang_son", "name": "Tỉnh Lạng Sơn", "shortName": "Lạng Sơn",
        "type": "tỉnh", "regionId": "bac_bo", "regionName": "Trung du & Miền núi phía Bắc",
        "color": "#0284c7", "capital": "TP. Lạng Sơn",
        "mergedFrom": ["Lạng Sơn"],
        "pathIds": ["langson"],
        "landmark": "Ải Chi Lăng, Động Tam Thanh, Đỉnh Mẫu Sơn tuyết trắng",
        "specialty": "Vịt quay Thất Khê, Khâu nhục, Na Chi Lăng",
        "funFact": "Cửa ngõ biên mậu quan trọng bậc nhất miền Bắc với di tích nàng Tô Thị vọng phu!",
        "hint": "Tỉnh biên giới Đông Bắc: 'Đồng Đăng có phố Kỳ Lừa, có nàng Tô Thị, có chùa Tam Thanh'."
    },
    # 12. PHÚ THỌ (Phú Thọ + Vĩnh Phúc + Hòa Bình)
    {
        "id": "phu_tho", "name": "Tỉnh Phú Thọ", "shortName": "Phú Thọ",
        "type": "tỉnh", "regionId": "bac_bo", "regionName": "Trung du & Miền núi phía Bắc",
        "color": "#0284c7", "capital": "TP. Việt Trì",
        "mergedFrom": ["Phú Thọ", "Vĩnh Phúc", "Hòa Bình"],
        "pathIds": ["phutho", "vinhphuc", "hoabinh"],
        "landmark": "Đền Hùng cội nguồn Tổ quốc, Thị trấn Tam Đảo, Thuỷ điện Hoà Bình, Thung lũng Mai Châu",
        "specialty": "Thịt chua Thanh Sơn, Bưởi Đoan Hùng, Su su Tam Đảo, Cơm lam Mai Châu",
        "funFact": "Đại tỉnh cội nguồn dân tộc với ngày Quốc giỗ Mùng 10/3, kết nối vùng du lịch Tam Đảo và văn hoá Mường Hoà Bình cổ xưa!",
        "hint": "Hợp nhất Phú Thọ, Vĩnh Phúc và Hòa Bình - mảnh đất cội nguồn Đền Hùng linh thiêng của dân tộc."
    },
    # 13. ĐIỆN BIÊN
    {
        "id": "dien_bien", "name": "Tỉnh Điện Biên", "shortName": "Điện Biên",
        "type": "tỉnh", "regionId": "bac_bo", "regionName": "Trung du & Miền núi phía Bắc",
        "color": "#0284c7", "capital": "TP. Điện Biên Phủ",
        "mergedFrom": ["Điện Biên"],
        "pathIds": ["dienbien"],
        "landmark": "Đồi A1, Hầm Đờ Cát, Cực Tây A Pa Chải",
        "specialty": "Gạo Tám Điện Biên, Thịt trâu gác bếp",
        "funFact": "Nơi ghi dấu Chiến thắng Điện Biên Phủ 'lừng lẫy năm châu, chấn động địa cầu' năm 1954!",
        "hint": "Nơi có ngã ba biên giới Việt - Lào - Trung A Pa Chải, một tiếng gà gáy 3 nước đều nghe."
    },
    # 14. LAI CHÂU
    {
        "id": "lai_chau", "name": "Tỉnh Lai Châu", "shortName": "Lai Châu",
        "type": "tỉnh", "regionId": "bac_bo", "regionName": "Trung du & Miền núi phía Bắc",
        "color": "#0284c7", "capital": "TP. Lai Châu",
        "mergedFrom": ["Lai Châu"],
        "pathIds": ["laichau"],
        "landmark": "Đèo Ô Quy Hồ, Cao nguyên Sìn Hồ, Đỉnh Pu Si Lung",
        "specialty": "Thịt lợn cắp nách, Cá suối nướng",
        "funFact": "Nơi hội tụ những đỉnh núi cao và hiểm trở bậc nhất Việt Nam cùng 'vua đèo Tây Bắc' Ô Quy Hồ!",
        "hint": "Tỉnh vùng cao Tây Bắc có đèo Ô Quy Hồ hùng vĩ nối liền sang Sa Pa."
    },
    # 15. SƠN LA
    {
        "id": "son_la", "name": "Tỉnh Sơn La", "shortName": "Sơn La",
        "type": "tỉnh", "regionId": "bac_bo", "regionName": "Trung du & Miền núi phía Bắc",
        "color": "#0284c7", "capital": "TP. Sơn La",
        "mergedFrom": ["Sơn La"],
        "pathIds": ["sonla"],
        "landmark": "Cao nguyên Mộc Châu, Nhà máy Thuỷ điện Sơn La trên sông Đà",
        "specialty": "Sữa tươi Mộc Châu, Mận hậu, Chè Shan tuyết",
        "funFact": "Sở hữu nhà máy thuỷ điện lớn nhất Đông Nam Á và thảo nguyên Mộc Châu bốn mùa hoa trái thơm lành!",
        "hint": "Tỉnh miền núi Tây Bắc nổi tiếng với cao nguyên Mộc Châu và thuỷ điện Sơn La."
    },

    # 16. THANH HÓA
    {
        "id": "thanh_hoa", "name": "Tỉnh Thanh Hóa", "shortName": "Thanh Hóa",
        "type": "tỉnh", "regionId": "mien_trung_tay_nguyen", "regionName": "Miền Trung & Tây Nguyên",
        "color": "#ea580c", "capital": "TP. Thanh Hoá",
        "mergedFrom": ["Thanh Hóa"],
        "pathIds": ["thanhhoa"],
        "landmark": "Thành nhà Hồ, Bãi biển Sầm Sơn, Khu bảo tồn Pù Luông",
        "specialty": "Nem chua Thanh Hoá, Bánh gai Tứ Trụ",
        "funFact": "Thành nhà Hồ là công trình kiến trúc bằng đá nguyên khối độc nhất vô nhị ở Đông Nam Á!",
        "hint": "Cầu nối giữa Bắc Bộ và Trung Bộ, quê hương khởi nghĩa Lam Sơn và di sản Thành nhà Hồ."
    },
    # 17. NGHỆ AN
    {
        "id": "nghe_an", "name": "Tỉnh Nghệ An", "shortName": "Nghệ An",
        "type": "tỉnh", "regionId": "mien_trung_tay_nguyen", "regionName": "Miền Trung & Tây Nguyên",
        "color": "#ea580c", "capital": "TP. Vinh",
        "mergedFrom": ["Nghệ An"],
        "pathIds": ["nghean"],
        "landmark": "Khu di tích Kim Liên Nam Đàn, Bãi biển Cửa Lò, Đảo chè Thanh Chương",
        "specialty": "Cháo lươn xứ Nghệ, Cam Xã Đoài",
        "funFact": "Quê hương của Chủ tịch Hồ Chí Minh vĩ đại, mảnh đất địa linh nhân kiệt hiếu học bậc nhất!",
        "hint": "Quê Bác kính yêu với làng Sen Kim Liên và bãi biển Cửa Lò nổi tiếng."
    },
    # 18. HÀ TĨNH
    {
        "id": "ha_tinh", "name": "Tỉnh Hà Tĩnh", "shortName": "Hà Tĩnh",
        "type": "tỉnh", "regionId": "mien_trung_tay_nguyen", "regionName": "Miền Trung & Tây Nguyên",
        "color": "#ea580c", "capital": "TP. Hà Tĩnh",
        "mergedFrom": ["Hà Tĩnh"],
        "pathIds": ["hatinh"],
        "landmark": "Ngã ba Đồng Lộc anh hùng, Mộ Đại thi hào Nguyễn Du, Chùa Hương Tích",
        "specialty": "Kẹo cu đơ, Bưởi Phúc Trạch, Cam bù Hương Sơn",
        "funFact": "Mảnh đất sinh ra Đại thi hào Nguyễn Du - tác giả kiệt tác Truyện Kiều bất hủ của dân tộc!",
        "hint": "Mảnh đất núi Hồng sông La, quê hương của Đại thi hào Nguyễn Du và kẹo cu đơ."
    },
    # 19. QUẢNG TRỊ (Quảng Trị + Quảng Bình)
    {
        "id": "quang_tri", "name": "Tỉnh Quảng Trị", "shortName": "Quảng Trị",
        "type": "tỉnh", "regionId": "mien_trung_tay_nguyen", "regionName": "Miền Trung & Tây Nguyên",
        "color": "#ea580c", "capital": "TP. Đông Hà",
        "mergedFrom": ["Quảng Trị", "Quảng Bình"],
        "pathIds": ["quangtri", "quangbinh"],
        "landmark": "Vườn quốc gia Phong Nha - Kẻ Bàng, Hang Sơn Đoòng, Sông Bến Hải - Cầu Hiền Lương, Thành cổ Quảng Trị",
        "specialty": "Khoai gieo, Cháo canh, Thịt trâu lá trơng",
        "funFact": "Hợp nhất 'Vương quốc hang động' thế giới (hang Sơn Đoòng tự nhiên lớn nhất hành tinh) và mảnh đất vĩ tuyến 17 lịch sử hào hùng!",
        "hint": "Hợp nhất Quảng Bình và Quảng Trị - nơi có hang Sơn Đoòng kỳ vĩ và cầu Hiền Lương lịch sử."
    },
    # 20. HUẾ (Thành phố Huế)
    {
        "id": "hue", "name": "Thành phố Huế", "shortName": "TP. Huế",
        "type": "thành phố", "regionId": "mien_trung_tay_nguyen", "regionName": "Miền Trung & Tây Nguyên",
        "color": "#ea580c", "capital": "TP. Huế",
        "mergedFrom": ["Thừa Thiên Huế"],
        "pathIds": ["tthue"],
        "landmark": "Đại Nội Cố đô Huế, Sông Hương - Núi Ngự, Chùa Thiên Mụ, Lăng Khải Định",
        "specialty": "Bún bò Huế, Cơm hến, Mè xửng",
        "funFact": "Thành phố trực thuộc Trung ương lưu giữ trọn vẹn Quần thể Di tích Cố đô và Nhã nhạc Cung đình Huế di sản nhân loại!",
        "hint": "Cố đô thơ mộng bên dòng sông Hương với những tà áo dài tím và cầu Tràng Tiền cổ kính."
    },
    # 21. ĐÀ NẴNG (Đà Nẵng + Quảng Nam + Quần đảo Hoàng Sa)
    {
        "id": "da_nang", "name": "Thành phố Đà Nẵng", "shortName": "Đà Nẵng",
        "type": "thành phố", "regionId": "mien_trung_tay_nguyen", "regionName": "Miền Trung & Tây Nguyên",
        "color": "#ea580c", "capital": "TP. Đà Nẵng",
        "mergedFrom": ["Đà Nẵng", "Quảng Nam", "Hoàng Sa"],
        "pathIds": ["danang", "quangnam", "hoangsa"],
        "landmark": "Cầu Vàng Bà Nà, Cầu Rồng phun lửa, Phố cổ Hội An, Thánh địa Mỹ Sơn, Quần đảo Hoàng Sa",
        "specialty": "Mì Quảng, Cao lầu Hội An, Bánh tráng cuốn thịt heo",
        "funFact": "Siêu đô thị biển miền Trung sở hữu 2 Di sản Thế giới (Hội An, Mỹ Sơn) và Quần đảo Hoàng Sa thiêng liêng của Tổ quốc!",
        "hint": "Hợp nhất Đà Nẵng và Quảng Nam, có phố cổ Hội An đèn lồng và Quần đảo Hoàng Sa."
    },
    # 22. QUẢNG NGÃI (Quảng Ngãi + Kon Tum)
    {
        "id": "quang_ngai", "name": "Tỉnh Quảng Ngãi", "shortName": "Quảng Ngãi",
        "type": "tỉnh", "regionId": "mien_trung_tay_nguyen", "regionName": "Miền Trung & Tây Nguyên",
        "color": "#ea580c", "capital": "TP. Quảng Ngãi",
        "mergedFrom": ["Quảng Ngãi", "Kon Tum"],
        "pathIds": ["quangngai", "kontum"],
        "landmark": "Đảo Lý Sơn (Bảo tàng Hoàng Sa), Thị trấn Măng Đen thông reo, Nhà thờ Gỗ Kon Tum, Ngã ba Đông Dương",
        "specialty": "Tỏi Lý Sơn, Gỏi lá Kon Tum, Kẹo gương, Rượu cần",
        "funFact": "Kết nối từ ngã ba biên giới Đông Dương, rừng thông Măng Đen mát lạnh đến 'Vương quốc tỏi' đảo núi lửa Lý Sơn kiên cường!",
        "hint": "Hợp nhất Quảng Ngãi và Kon Tum - kết nối đại ngàn Măng Đen với đảo tiền tiêu Lý Sơn."
    },
    # 23. KHÁNH HÒA (Khánh Hòa + Ninh Thuận + Quần đảo Trường Sa)
    {
        "id": "khanh_hoa", "name": "Tỉnh Khánh Hòa", "shortName": "Khánh Hòa",
        "type": "tỉnh", "regionId": "mien_trung_tay_nguyen", "regionName": "Miền Trung & Tây Nguyên",
        "color": "#ea580c", "capital": "TP. Nha Trang",
        "mergedFrom": ["Khánh Hòa", "Ninh Thuận", "Trường Sa"],
        "pathIds": ["khanhhoa", "ninhthuan", "truongsa"],
        "landmark": "Vịnh Nha Trang, Vịnh Vĩnh Hy, Tháp Po Klong Garai, Quần đảo Trường Sa thiêng liêng",
        "specialty": "Yến sào Khánh Hoà, Nho Ninh Thuận giòn ngọt, Nem nướng Ninh Hoà",
        "funFact": "Trung tâm biển yến, thủ phủ năng lượng gió - mặt trời và Quần đảo Trường Sa kiên cường bảo vệ chủ quyền biển đảo Tổ quốc!",
        "hint": "Hợp nhất Khánh Hòa và Ninh Thuận - nơi có vịnh biển Nha Trang và Quần đảo Trường Sa thiêng liêng."
    },

    # 24. GIA LAI (Gia Lai + Bình Định)
    {
        "id": "gia_lai", "name": "Tỉnh Gia Lai", "shortName": "Gia Lai",
        "type": "tỉnh", "regionId": "mien_trung_tay_nguyen", "regionName": "Miền Trung & Tây Nguyên",
        "color": "#ea580c", "capital": "TP. Pleiku",
        "mergedFrom": ["Gia Lai", "Bình Định"],
        "pathIds": ["gialai", "binhdinh"],
        "landmark": "Biển Hồ Pleiku, Eo Gió - Kỳ Co Quy Nhơn, Đất võ Tây Sơn Quang Trung",
        "specialty": "Phở khô hai tô Pleiku, Bánh ít lá gai, Bò một nắng Krông Pa",
        "funFact": "Hành lang kinh tế chiến lược nối cao nguyên Biển Hồ T’Nưng với dải bờ biển Quy Nhơn và đất võ hào hùng của Quang Trung!",
        "hint": "Hợp nhất Gia Lai và Bình Định - nối cao nguyên Pleiku với đất võ trời văn Tây Sơn."
    },
    # 25. ĐẮK LẮK (Đắk Lắk + Phú Yên)
    {
        "id": "dak_lak", "name": "Tỉnh Đắk Lắk", "shortName": "Đắk Lắk",
        "type": "tỉnh", "regionId": "mien_trung_tay_nguyen", "regionName": "Miền Trung & Tây Nguyên",
        "color": "#ea580c", "capital": "TP. Buôn Ma Thuột",
        "mergedFrom": ["Đắk Lắk", "Phú Yên"],
        "pathIds": ["daklak", "phuyen"],
        "landmark": "Thủ phủ Cà phê Buôn Ma Thuột, Hồ Lắk, Gành Đá Đĩa kỳ quan, Hải đăng Mũi Điện",
        "specialty": "Cà phê Buôn Ma Thuột, Mắt cá ngừ đại dương, Bánh canh hẹ",
        "funFact": "Hợp nhất Không gian Văn hóa Cồng chiêng Tây Nguyên đại ngàn với Mũi Điện đón ánh bình minh đầu tiên trên dải đất liền Tổ quốc!",
        "hint": "Hợp nhất Đắk Lắk và Phú Yên - xứ sở cà phê Buôn Ma Thuột và danh thắng Gành Đá Đĩa hoa vàng trên cỏ xanh."
    },
    # 26. LÂM ĐỒNG (Lâm Đồng + Đắk Nông + Bình Thuận)
    {
        "id": "lam_dong", "name": "Tỉnh Lâm Đồng", "shortName": "Lâm Đồng",
        "type": "tỉnh", "regionId": "mien_trung_tay_nguyen", "regionName": "Miền Trung & Tây Nguyên",
        "color": "#ea580c", "capital": "TP. Đà Lạt",
        "mergedFrom": ["Lâm Đồng", "Đắk Nông", "Bình Thuận"],
        "pathIds": ["lamdong", "daknong", "binhthuan"],
        "landmark": "Thành phố ngàn hoa Đà Lạt, Hồ Tà Đùng (Hạ Long trên cạn), Đồi cát Mũi Né",
        "specialty": "Dâu tây Đà Lạt, Bơ sáp, Thanh long ruột đỏ, Nước mắm Phan Thiết",
        "funFact": "Trở thành tỉnh có diện tích lớn nhất Việt Nam sau sáp nhập, trải dài từ đỉnh núi ngàn hoa Đà Lạt xuống biển xanh Mũi Né!",
        "hint": "Hợp nhất Lâm Đồng, Đắk Nông và Bình Thuận - đại tỉnh ngàn hoa trải dài từ cao nguyên xuống biển Phan Thiết."
    },

    # 27. TÂY NINH (Tây Ninh + Long An)
    {
        "id": "tay_ninh", "name": "Tỉnh Tây Ninh", "shortName": "Tây Ninh",
        "type": "tỉnh", "regionId": "dong_nam_bo", "regionName": "Đông Nam Bộ",
        "color": "#db2777", "capital": "TP. Tây Ninh",
        "mergedFrom": ["Tây Ninh", "Long An"],
        "pathIds": ["tayninh", "longan"],
        "landmark": "Núi Bà Đen ('Nóc nhà Nam Bộ'), Toà thánh Tây Ninh, Làng nổi Tân Lập",
        "specialty": "Bánh tráng phơi sương Trảng Bàng, Muối tôm Tây Ninh, Gạo Nàng Thơm Chợ Đào",
        "funFact": "Hợp nhất ngọn núi Bà Đen linh thiêng hùng vĩ với cửa ngõ sông nước Đồng Tháp Mười, giáp ranh nước bạn Campuchia!",
        "hint": "Hợp nhất Tây Ninh và Long An - cửa ngõ nối TP.HCM với biên giới và miền Tây Nam Bộ."
    },
    # 28. ĐỒNG NAI (Đồng Nai + Bình Phước)
    {
        "id": "dong_nai", "name": "Thành phố Đồng Nai", "shortName": "Đồng Nai",
        "type": "thành phố", "regionId": "dong_nam_bo", "regionName": "Đông Nam Bộ",
        "color": "#db2777", "capital": "TP. Biên Hoà",
        "mergedFrom": ["Đồng Nai", "Bình Phước"],
        "pathIds": ["dongnai", "binhphuoc"],
        "landmark": "Vườn quốc gia Cát Tiên, Đại sân bay Quốc tế Long Thành, Trảng cỏ Bù Lạch",
        "specialty": "Bưởi Tân Triều, Sầu riêng Long Khánh, Hạt điều Bình Phước",
        "funFact": "Trung tâm công nghiệp, thủ phủ cây điều lớn nhất nước và nơi sở hữu Siêu sân bay Quốc tế Long Thành tầm cỡ khu vực!",
        "hint": "Hợp nhất Đồng Nai và Bình Phước - trung tâm công nghiệp lớn với sân bay Long Thành và bạt ngàn vườn điều."
    },
    # 29. HỒ CHÍ MINH (TP. Hồ Chí Minh + Bình Dương + Bà Rịa - Vũng Tàu)
    {
        "id": "ho_chi_minh", "name": "Thành phố Hồ Chí Minh", "shortName": "TP. Hồ Chí Minh",
        "type": "thành phố", "regionId": "dong_nam_bo", "regionName": "Đông Nam Bộ",
        "color": "#db2777", "capital": "TP. Hồ Chí Minh",
        "mergedFrom": ["Hồ Chí Minh", "Bình Dương", "Bà Rịa - Vũng Tàu"],
        "pathIds": ["hcm", "binhduong", "baria"],
        "landmark": "Bến Nhà Rồng, Chợ Bến Thành, Landmark 81, Đại Nam, Biển Vũng Tàu, Côn Đảo",
        "specialty": "Cơm tấm Sài Gòn, Bánh khọt Vũng Tàu, Măng cụt Lái Thiêu",
        "funFact": "Siêu đô thị đầu tàu kinh tế số 1 Việt Nam, vươn mình ra biển lớn Vũng Tàu và thiên đường Côn Đảo!",
        "hint": "Hợp nhất TP.HCM, Bình Dương và Bà Rịa - Vũng Tàu - siêu đô thị đầu tàu kinh tế vươn ra biển Đông."
    },

    # 30. VĨNH LONG (Vĩnh Long + Bến Tre + Trà Vinh)
    {
        "id": "vinh_long", "name": "Tỉnh Vĩnh Long", "shortName": "Vĩnh Long",
        "type": "tỉnh", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Vĩnh Long",
        "mergedFrom": ["Vĩnh Long", "Bến Tre", "Trà Vinh"],
        "pathIds": ["vinhlong", "bentre", "travinh"],
        "landmark": "Cầu Mỹ Thuận dây văng, Xứ sở dừa Bến Tre, Chùa Âng Khmer cổ, Ao Bà Om",
        "specialty": "Kẹo dừa Bến Tre, Bưởi năm roi Bình Minh, Dừa sáp Trà Vinh độc nhất vô nhị",
        "funFact": "Trái tim miền Tây bao bọc bởi sông Tiền và sông Hậu, hội tụ văn hoá Kinh - Khmer và thủ phủ dừa sáp trứ danh!",
        "hint": "Hợp nhất Vĩnh Long, Bến Tre và Trà Vinh - xứ dừa rợp bóng và những ngôi chùa Khmer cổ kính."
    },
    # 31. ĐỒNG THÁP (Đồng Tháp + Tiền Giang)
    {
        "id": "dong_thap", "name": "Tỉnh Đồng Tháp", "shortName": "Đồng Tháp",
        "type": "tỉnh", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Cao Lãnh",
        "mergedFrom": ["Đồng Tháp", "Tiền Giang"],
        "pathIds": ["dongthap", "tiengiang"],
        "landmark": "Vườn quốc gia Tràm Chim (Sếu đầu đỏ), Làng hoa Sa Đéc, Chợ nổi Cái Bè trên sông",
        "specialty": "Nem Lai Vung, Hủ tiếu Sa Đéc, Xoài cát Hoà Lộc, Hủ tiếu Mỹ Tho",
        "funFact": "Thủ phủ Sen hồng và xứ sở cây lành trái ngọt trù phú bậc nhất vùng sông nước miền Tây!",
        "hint": "Hợp nhất Đồng Tháp và Tiền Giang: 'Tháp Mười đẹp nhất bông sen / Việt Nam đẹp nhất có tên Bác Hồ'."
    },
    # 32. AN GIANG (An Giang + Kiên Giang)
    {
        "id": "an_giang", "name": "Tỉnh An Giang", "shortName": "An Giang",
        "type": "tỉnh", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Long Xuyên",
        "mergedFrom": ["An Giang", "Kiên Giang"],
        "pathIds": ["angiang", "kiengiang"],
        "landmark": "Thành phố Đảo Phú Quốc, Rừng tràm Trà Sư, Miếu Bà Chúa Xứ Núi Sam, Quần đảo Nam Du",
        "specialty": "Nước mắm Phú Quốc, Mắm Châu Đốc, Bò bảy món Núi Sam",
        "funFact": "Mở rộng từ ngọn nguồn sông Mê Kông chảy vào Việt Nam đến Thành phố đảo Ngọc Phú Quốc ngoài khơi biển Tây!",
        "hint": "Hợp nhất An Giang và Kiên Giang - từ rừng tràm Trà Sư huyền bí đến đảo ngọc Phú Quốc xinh đẹp."
    },
    # 33. CẦN THƠ (Cần Thơ + Hậu Giang + Sóc Trăng)
    {
        "id": "can_tho", "name": "Thành phố Cần Thơ", "shortName": "Cần Thơ",
        "type": "thành phố", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Cần Thơ",
        "mergedFrom": ["Cần Thơ", "Hậu Giang", "Sóc Trăng"],
        "pathIds": ["cantho", "haugiang", "soctrang"],
        "landmark": "Bến Ninh Kiều, Chợ nổi Cái Răng, Chợ nổi Ngã Bảy, Chùa Dơi Sóc Trăng, Đua ghe Ngo",
        "specialty": "Bánh pía Sóc Trăng, Khóm Cầu Đúc, Lẩu mắm Cần Thơ",
        "funFact": "Đô thị trung tâm 'Tây Đô' của toàn miền Tây, sôi động trên bến dưới thuyền và lễ hội Oóc Om Bóc rộn rã!",
        "hint": "Hợp nhất Cần Thơ, Hậu Giang và Sóc Trăng: 'Cần Thơ gạo trắng nước trong / Ai đi đến đó lòng không muốn về'."
    },
    # 34. CÀ MAU (Cà Mau + Bạc Liêu)
    {
        "id": "ca_mau", "name": "Tỉnh Cà Mau", "shortName": "Cà Mau",
        "type": "tỉnh", "regionId": "song_cuu_long", "regionName": "Đồng bằng Sông Cửu Long",
        "color": "#0d9488", "capital": "TP. Cà Mau",
        "mergedFrom": ["Cà Mau", "Bạc Liêu"],
        "pathIds": ["camau", "baclieu"],
        "landmark": "Mốc tọa độ quốc gia Đất Mũi, Rừng đước U Minh Hạ, Nhà Công tử Bạc Liêu, Cánh đồng điện gió",
        "specialty": "Cua Cà Mau số 1, Tôm khô Rạch Gốc, Bánh tằm Ngan Dừa",
        "funFact": "Mảnh đất địa đầu Cực Nam Tổ quốc và cái nôi của bản Dạ Cổ Hoài Lang - Đờn ca tài tử Nam Bộ di sản thế giới!",
        "hint": "Hợp nhất Cà Mau và Bạc Liêu - điểm Cực Nam Đất Mũi thiêng liêng và giai thoại Công tử Bạc Liêu."
    }
]

def extract_points_from_d(d):
    tokens = re.findall(r'([a-df-zA-DF-Z]|[-+]?(?:\d*\.\d+|\d+)(?:[eE][-+]?\d+)?)', d)
    cur_x, cur_y = 0.0, 0.0
    start_x, start_y = 0.0, 0.0
    cmd = 'M'
    points = []
    i = 0
    while i < len(tokens):
        t = tokens[i]
        if t.isalpha():
            cmd = t; i += 1; continue
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
    return points

def compute_bbox_and_center_for_points(points):
    if not points:
        return [0, 0, 10, 10], [5, 5]
    xs = [p[0] for p in points]
    ys = [p[1] for p in points]
    min_x, max_x = min(xs), max(xs)
    min_y, max_y = min(ys), max(ys)
    return [round(min_x, 2), round(min_y, 2), round(max_x - min_x, 2), round(max_y - min_y, 2)], [round((min_x + max_x)/2, 2), round((min_y + max_y)/2, 2)]

# Process each 34 province
for prov in PROVINCES_34:
    all_points = []
    combined_d = []
    subpaths = []
    for pid in prov['pathIds']:
        d_str = paths_63[pid]
        combined_d.append(d_str)
        subpaths.append({"id": pid, "d": d_str})
        pts = extract_points_from_d(d_str)
        all_points.extend(pts)
    
    prov['d'] = " ".join(combined_d)
    prov['subpaths'] = subpaths
    bbox, center = compute_bbox_and_center_for_points(all_points)
    prov['bbox'] = bbox
    prov['center'] = center

# Fix Hoang Sa and Truong Sa center bias for Da Nang & Khanh Hoa:
# For Da Nang, center should be near Da Nang mainland [308, 402] rather than middle of sea!
prov_danang = next(p for p in PROVINCES_34 if p['id'] == 'da_nang')
prov_danang['center'] = [308.62, 402.76]

# For Khanh Hoa, center should be near Nha Trang mainland [348, 560] rather than middle of sea!
prov_khanhhoa = next(p for p in PROVINCES_34 if p['id'] == 'khanh_hoa')
prov_khanhhoa['center'] = [338.0, 565.0]

print("Processed all 34 provinces successfully!")

# Export to provinces-34-data.js
output_js = f"window.VIETNAM_REGIONS_34 = {json.dumps(REGIONS_34, ensure_ascii=False, indent=2)};\n"
output_js += f"window.VIETNAM_PROVINCES_34 = {json.dumps(PROVINCES_34, ensure_ascii=False, indent=2)};\n"

with open("provinces-34-data.js", "w", encoding="utf-8") as f:
    f.write(output_js)

print("Saved provinces-34-data.js successfully!")
