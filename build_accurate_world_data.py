# -*- coding: utf-8 -*-
"""
build_accurate_world_data.py
Tạo bản đồ thế giới CHUẨN ĐỊA LÝ (thay cho dạng schematic/sơ lược)
từ tập dữ liệu ranh giới quốc tế chính xác (GeoJSON).
"""
import json, math

with open('world_raw.geojson', 'r', encoding='utf-8') as f:
    geojson = json.load(f)

features_by_code = {}
for f in geojson['features']:
    code = f['properties'].get('ISO3166-1-Alpha-2')
    if code:
        features_by_code[code.upper()] = f

def rdp(points, epsilon=0.5):
    if len(points) < 3:
        return points
    first, last = points[0], points[-1]
    dx, dy = last[0] - first[0], last[1] - first[1]
    denom = math.hypot(dx, dy)
    max_d, idx = 0.0, 0
    for i in range(1, len(points) - 1):
        p = points[i]
        d = math.hypot(p[0] - first[0], p[1] - first[1]) if denom == 0 else abs(dy * p[0] - dx * p[1] + last[0] * first[1] - last[1] * first[0]) / denom
        if d > max_d:
            max_d, idx = d, i
    if max_d > epsilon:
        return rdp(points[:idx+1], epsilon)[:-1] + rdp(points[idx:], epsilon)
    return [first, last]

def project(lon, lat, code=None):
    if code == 'RU' and lon < -100:
        lon += 360.0
    lat = max(-65.0, min(84.0, lat))
    lat_rad = lat * math.pi / 180.0
    x = (lon + 180.0) / 360.0 * 1140.0 + 30.0
    y_val = 1.25 * math.log(math.tan(math.pi / 4.0 + 0.4 * lat_rad))
    y = 330.0 - y_val * 115.0
    return round(x, 1), round(y, 1)

def extract_country_path(code, geom, epsilon=0.45):
    coords = geom['coordinates']
    gtype = geom['type']
    polys = [coords] if gtype == 'Polygon' else coords

    path_parts = []
    all_pts = []

    for poly in polys:
        outer_ring = poly[0]
        if len(outer_ring) < 4:
            continue

        lats = [pt[1] for pt in outer_ring]
        lons = [pt[0] for pt in outer_ring]

        # Filter overseas territories
        if code == 'FR' and max(lats) < 35.0:
            continue
        if code == 'US' and max(lons) > 160: # Exclude Aleutian date line wrap
            continue
        if code == 'ES' and min(lats) < 26.0: # Canary islands distant
            pass

        pts = [project(pt[0], pt[1], code) for pt in outer_ring]
        pts = rdp(pts, epsilon)
        if len(pts) < 3:
            continue

        all_pts.extend(pts)
        part = f"M{pts[0][0]},{pts[0][1]}"
        for pt in pts[1:]:
            part += f"L{pt[0]},{pt[1]}"
        part += "Z"
        path_parts.append(part)

    d = "".join(path_parts)
    if not all_pts:
        return "", [0, 0, 0, 0], [0, 0]

    xs = [p[0] for p in all_pts]
    ys = [p[1] for p in all_pts]
    min_x, max_x = min(xs), max(xs)
    min_y, max_y = min(ys), max(ys)
    bbox = [round(min_x, 1), round(min_y, 1), round(max_x - min_x, 1), round(max_y - min_y, 1)]
    center = [round((min_x + max_x) / 2, 1), round((min_y + max_y) / 2, 1)]

    # Special visual center adjustments for countries with distant territories
    if code == 'US': # Center on contiguous 48 states
        center = [296.0, 270.0]
    elif code == 'FR':
        center = [607.0, 230.0]
    elif code == 'RU':
        center = [850.0, 160.0]
    elif code == 'CA':
        center = [265.0, 160.0]

    return d, bbox, center

# 1. Generate full authentic world background path
print("Generating full authentic world background landmasses...")
bg_parts = []
for f in geojson['features']:
    props = f['properties']
    c_code = props.get('ISO3166-1-Alpha-2', '')
    geom = f['geometry']
    polys = [geom['coordinates']] if geom['type'] == 'Polygon' else geom['coordinates']
    for poly in polys:
        ring = poly[0]
        if len(ring) < 4:
            continue
        lons = [p[0] for p in ring]
        if c_code == 'US' and max(lons) > 160:
            continue
        pts = [project(p[0], p[1], c_code) for p in ring]
        pts = rdp(pts, epsilon=0.85)
        if len(pts) < 3:
            continue
        part = f"M{pts[0][0]},{pts[0][1]}"
        for pt in pts[1:]:
            part += f"L{pt[0]},{pt[1]}"
        part += "Z"
        bg_parts.append(part)

base_world_path = "".join(bg_parts)
print(f"Base world map path generated: {len(base_world_path)} characters.")

# Continents configuration with precise viewboxes
continents = [
    {
        "id": "asia",
        "name": "Châu Á",
        "icon": "🌏",
        "desc": "Châu lục rộng lớn và đông dân nhất thế giới, cái nôi của nhiều nền văn minh cổ đại.",
        "color": "#f59e0b",
        "viewBox": "730 170 380 200"
    },
    {
        "id": "europe",
        "name": "Châu Âu",
        "icon": "🏰",
        "desc": "Lục địa cổ kính với bề dày lịch sử, kiến trúc tráng lệ và các cường quốc phát triển.",
        "color": "#3b82f6",
        "viewBox": "530 135 220 145"
    },
    {
        "id": "americas",
        "name": "Châu Mỹ",
        "icon": "🗽",
        "desc": "Tân Thế Giới gồm Bắc Mỹ, Trung Mỹ và Nam Mỹ với cảnh quan thiên nhiên kỳ vĩ.",
        "color": "#ef4444",
        "viewBox": "150 90 380 390"
    },
    {
        "id": "africa",
        "name": "Châu Phi",
        "icon": "🦁",
        "desc": "Lục địa huyền bí với sa mạc Sahara bạt ngàn, dòng sông Nin và động vật hoang dã trù phú.",
        "color": "#10b981",
        "viewBox": "510 220 280 210"
    },
    {
        "id": "oceania",
        "name": "Châu Đại Dương",
        "icon": "🦘",
        "desc": "Xứ sở của những hòn đảo san hô, rạn san hô Great Barrier và loài chuột túi Kangaroo.",
        "color": "#8b5cf6",
        "viewBox": "930 325 245 140"
    }
]

# 2. Rich Metadata for Playable Countries
countries_meta = [
    # --- CHÂU Á ---
    {
        "code": "VN", "name": "Việt Nam", "flag": "🇻🇳", "continent": "asia",
        "capital": "Hà Nội", "area": "331.690 km²", "population": "100+ triệu",
        "landmark": "Vịnh Hạ Long & Quần thể Tràng An",
        "funFact": "Việt Nam có đường bờ biển dài 3.260 km hình chữ S và là nước xuất khẩu gạo, cà phê hàng đầu thế giới.",
        "color": "#ef4444"
    },
    {
        "code": "CN", "name": "Trung Quốc", "flag": "🇨🇳", "continent": "asia",
        "capital": "Bắc Kinh", "area": "9.596.960 km²", "population": "1,4 tỷ",
        "landmark": "Vạn Lý Trường Thành & Tử Cấm Thành",
        "funFact": "Quốc gia có diện tích lớn nhất châu Á với nền văn hóa hơn 5.000 năm lịch sử.",
        "color": "#dc2626"
    },
    {
        "code": "JP", "name": "Nhật Bản", "flag": "🇯🇵", "continent": "asia",
        "capital": "Tokyo", "area": "377.975 km²", "population": "125 triệu",
        "landmark": "Núi Phú Sĩ & Hoa Anh Đào",
        "funFact": "Được mệnh danh là 'Đất nước Mặt Trời Mọc' với hơn 6.800 hòn đảo lớn nhỏ.",
        "color": "#f43f5e"
    },
    {
        "code": "KR", "name": "Hàn Quốc", "flag": "🇰🇷", "continent": "asia",
        "capital": "Seoul", "area": "100.363 km²", "population": "51 triệu",
        "landmark": "Cung điện Gyeongbokgung & Đảo Jeju",
        "funFact": "Xứ sở kim chi với nền công nghiệp công nghệ cao và làn sóng văn hóa Hallyu lan tỏa toàn cầu.",
        "color": "#3b82f6"
    },
    {
        "code": "IN", "name": "Ấn Độ", "flag": "🇮🇳", "continent": "asia",
        "capital": "New Delhi", "area": "3.287.263 km²", "population": "1,42 tỷ",
        "landmark": "Lăng mộ Taj Mahal & Sông Hằng",
        "funFact": "Cái nôi của Phật giáo và Ấn Độ giáo, quốc gia đông dân nhất hành tinh hiện nay.",
        "color": "#f97316"
    },
    {
        "code": "TH", "name": "Thái Lan", "flag": "🇹🇭", "continent": "asia",
        "capital": "Bangkok", "area": "513.120 km²", "population": "71 triệu",
        "landmark": "Chùa Phật Ngọc (Wat Phra Kaew) & Cung điện Hoàng Gia",
        "funFact": "Xứ sở nụ cười và là quốc gia duy nhất ở Đông Nam Á chưa từng bị thực dân phương Tây xâm lược.",
        "color": "#eab308"
    },
    {
        "code": "ID", "name": "Indonesia", "flag": "🇮🇩", "continent": "asia",
        "capital": "Jakarta (Nusantara)", "area": "1.904.569 km²", "population": "278 triệu",
        "landmark": "Đền Borobudur & Đảo Thiên Đường Bali",
        "funFact": "Quốc gia quần đảo lớn nhất thế giới với hơn 17.000 hòn đảo và rừng nhiệt đới trù phú.",
        "color": "#06b6d4"
    },
    {
        "code": "PH", "name": "Philippines", "flag": "🇵🇭", "continent": "asia",
        "capital": "Manila", "area": "300.000 km²", "population": "115 triệu",
        "landmark": "Đồi Socola Bohol & Ruộng bậc thang Banaue",
        "funFact": "Quốc gia vạn đảo ở Tây Thái Bình Dương nổi tiếng với những bãi biển cát trắng tuyệt đẹp.",
        "color": "#0284c7"
    },
    {
        "code": "SA", "name": "Ả Rập Xê Út", "flag": "🇸🇦", "continent": "asia",
        "capital": "Riyadh", "area": "2.149.690 km²", "population": "36 triệu",
        "landmark": "Thánh địa Mecca & Tháp Kingdom Centre",
        "funFact": "Cái nôi của đạo Hồi và là quốc gia có trữ lượng dầu mỏ dồi dào bậc nhất hành tinh.",
        "color": "#16a34a"
    },
    {
        "code": "MY", "name": "Malaysia", "flag": "🇲🇾", "continent": "asia",
        "capital": "Kuala Lumpur", "area": "330.803 km²", "population": "33 triệu",
        "landmark": "Tháp đôi Petronas & Động Batu",
        "funFact": "Đất nước đa dạng văn hóa độc đáo gồm 2 phần tách biệt: bán đảo Tây Malaysia và Đông Malaysia trên đảo Borneo.",
        "color": "#10b981"
    },
    {
        "code": "LA", "name": "Lào", "flag": "🇱🇦", "continent": "asia",
        "capital": "Vientiane (Viêng Chăn)", "area": "236.800 km²", "population": "7,5 triệu",
        "landmark": "Thạt Luông & Cố đô Luang Prabang",
        "funFact": "Đất nước triệu voi thanh bình, quốc gia không giáp biển duy nhất ở Đông Nam Á và người bạn láng giềng chí thiết của Việt Nam.",
        "color": "#e11d48"
    },
    {
        "code": "KH", "name": "Campuchia", "flag": "🇰🇭", "continent": "asia",
        "capital": "Phnom Penh", "area": "181.035 km²", "population": "17 triệu",
        "landmark": "Quần thể Di tích Đền Angkor Wat",
        "funFact": "Đất nước Chùa Tháp với kỳ quan Angkor Wat vĩ đại - công trình tôn giáo lớn nhất thế giới.",
        "color": "#8b5cf6"
    },

    # --- CHÂU ÂU ---
    {
        "code": "FR", "name": "Pháp", "flag": "🇫🇷", "continent": "europe",
        "capital": "Paris", "area": "551.695 km²", "population": "68 triệu",
        "landmark": "Tháp Eiffel & Bảo tàng Louvre",
        "funFact": "Kinh đô ánh sáng, thời trang và ẩm thực, quốc gia thu hút lượng khách du lịch đông nhất thế giới.",
        "color": "#3b82f6"
    },
    {
        "code": "DE", "name": "Đức", "flag": "🇩🇪", "continent": "europe",
        "capital": "Berlin", "area": "357.588 km²", "population": "84 triệu",
        "landmark": "Cổng Brandenburg & Lâu đài Neuschwanstein",
        "funFact": "Nền kinh tế lớn nhất châu Âu, nổi tiếng thế giới về kỹ thuật cơ khí chính xác và xe hơi hàng đầu.",
        "color": "#eab308"
    },
    {
        "code": "GB", "name": "Vương quốc Anh", "flag": "🇬🇧", "continent": "europe",
        "capital": "London", "area": "243.610 km²", "population": "67 triệu",
        "landmark": "Đồng hồ Big Ben & Vòng tròn đá Stonehenge",
        "funFact": "Xứ sở sương mù gồm 4 vùng: Anh, Scotland, Wales và Bắc Ireland, quê hương của ngôn ngữ toàn cầu tiếng Anh.",
        "color": "#ef4444"
    },
    {
        "code": "IT", "name": "Ý (Italia)", "flag": "🇮🇹", "continent": "europe",
        "capital": "Rome", "area": "301.340 km²", "population": "59 triệu",
        "landmark": "Đấu trường La Mã Colosseum & Tháp nghiêng Pisa",
        "funFact": "Đất nước hình chiếc ủng, quê hương của Pizza, Pasta và cái nôi phong trào Phục Hưng rực rỡ.",
        "color": "#10b981"
    },
    {
        "code": "ES", "name": "Tây Ban Nha", "flag": "🇪🇸", "continent": "europe",
        "capital": "Madrid", "area": "505.990 km²", "population": "48 triệu",
        "landmark": "Thánh đường Sagrada Família & Điệu nhảy Flamenco",
        "funFact": "Xứ sở bò tót trên bán đảo Iberia với nền bóng đá hàng đầu thế giới (La Liga).",
        "color": "#f97316"
    },
    {
        "code": "RU", "name": "Nga", "flag": "🇷🇺", "continent": "europe",
        "capital": "Moskva", "area": "17.098.242 km²", "population": "144 triệu",
        "landmark": "Điện Kremlin & Quảng trường Đỏ",
        "funFact": "Quốc gia có diện tích lớn nhất thế giới, trải dài trên 11 múi giờ và nối liền cả châu Âu lẫn châu Á.",
        "color": "#8b5cf6"
    },
    {
        "code": "GR", "name": "Hy Lạp", "flag": "🇬🇷", "continent": "europe",
        "capital": "Athens", "area": "131.957 km²", "population": "10 triệu",
        "landmark": "Đền Parthenon & Đảo Santorini",
        "funFact": "Cái nôi của nền dân chủ, triết học phương Tây và nơi khởi nguồn của Thế vận hội Olympic.",
        "color": "#0284c7"
    },
    {
        "code": "NL", "name": "Hà Lan", "flag": "🇳🇱", "continent": "europe",
        "capital": "Amsterdam", "area": "41.543 km²", "population": "18 triệu",
        "landmark": "Cối xay gió Zaanse Schans & Vườn hoa Tulip Keukenhof",
        "funFact": "Xứ sở hoa tulip và cối xay gió, nổi tiếng với hệ thống đê biển chống ngập vĩ đại khi hơn 1/4 diện tích nằm dưới mực nước biển.",
        "color": "#f97316"
    },
    {
        "code": "SE", "name": "Thụy Điển", "flag": "🇸🇪", "continent": "europe",
        "capital": "Stockholm", "area": "450.295 km²", "population": "10,5 triệu",
        "landmark": "Bảo tàng tàu chiến Vasa & Cung điện Hoàng gia",
        "funFact": "Quốc gia Bắc Âu hòa bình, quê hương của giải thưởng Nobel danh giá và tập đoàn nội thất IKEA.",
        "color": "#0ea5e9"
    },

    # --- CHÂU MỸ ---
    {
        "code": "US", "name": "Hoa Kỳ (Mỹ)", "flag": "🇺🇸", "continent": "americas",
        "capital": "Washington D.C.", "area": "9.833.517 km²", "population": "335 triệu",
        "landmark": "Tượng Nữ Thần Tự Do & Đại Vực Grand Canyon",
        "funFact": "Cường quốc kinh tế, khoa học kỹ thuật số 1 thế giới với 50 tiểu bang và kinh đô điện ảnh Hollywood.",
        "color": "#2563eb"
    },
    {
        "code": "CA", "name": "Canada", "flag": "🇨🇦", "continent": "americas",
        "capital": "Ottawa", "area": "9.984.670 km²", "population": "40 triệu",
        "landmark": "Thác Niagara & Rừng Lá Phong",
        "funFact": "Quốc gia lớn thứ nhì thế giới, xứ sở lá phong với hàng triệu hồ nước ngọt và Bắc Cực quang kỳ thú.",
        "color": "#dc2626"
    },
    {
        "code": "BR", "name": "Brazil", "flag": "🇧🇷", "continent": "americas",
        "capital": "Brasília", "area": "8.515.767 km²", "population": "216 triệu",
        "landmark": "Tượng Chúa Kitô Cứu Thế & Rừng rậm Amazon",
        "funFact": "Quốc gia lớn nhất Nam Mỹ, sở hữu lá phổi xanh Amazon, điệu nhảy Samba rực lửa và 5 lần vô địch World Cup.",
        "color": "#16a34a"
    },
    {
        "code": "MX", "name": "Mexico", "flag": "🇲🇽", "continent": "americas",
        "capital": "Thành phố Mexico", "area": "1.964.375 km²", "population": "128 triệu",
        "landmark": "Kim tự tháp Chichen Itza của người Maya",
        "funFact": "Cái nôi của nền văn minh Maya và Aztec cổ đại, nổi tiếng với món bánh Tacos và lễ hội người chết Día de los Muertos.",
        "color": "#059669"
    },
    {
        "code": "AR", "name": "Argentina", "flag": "🇦🇷", "continent": "americas",
        "capital": "Buenos Aires", "area": "2.780.400 km²", "population": "46 triệu",
        "landmark": "Thác Iguazu & Điệu nhảy Tango",
        "funFact": "Vùng đất của thảo nguyên Pampas, điệu Tango quyến rũ và quê hương của những huyền thoại bóng đá thế giới.",
        "color": "#0284c7"
    },
    {
        "code": "CU", "name": "Cuba", "flag": "🇨🇺", "continent": "americas",
        "capital": "La Habana", "area": "109.884 km²", "population": "11 triệu",
        "landmark": "Phố cổ La Habana & Bãi biển Varadero",
        "funFact": "Hòn đảo ngọc Caribe với nền y học tiên tiến, âm nhạc salsa sôi động và tình hữu nghị keo sơn với Việt Nam.",
        "color": "#e11d48"
    },
    {
        "code": "CL", "name": "Chile", "flag": "🇨🇱", "continent": "americas",
        "capital": "Santiago", "area": "756.102 km²", "population": "19,5 triệu",
        "landmark": "Đảo Phục Sinh (Moai) & Sa mạc Atacama",
        "funFact": "Quốc gia dài và hẹp nhất hành tinh, trải dài hơn 4.300 km dọc theo sườn Tây dãy Andes hùng vĩ.",
        "color": "#d97706"
    },

    # --- CHÂU PHI ---
    {
        "code": "EG", "name": "Ai Cập", "flag": "🇪🇬", "continent": "africa",
        "capital": "Cairo", "area": "1.010.408 km²", "population": "105 triệu",
        "landmark": "Đại Kim Tự Tháp Giza & Tượng Nhân Sư",
        "funFact": "Một trong những nền văn minh lâu đời nhất nhân loại gắn liền với dòng sông Nin huyền bí.",
        "color": "#f59e0b"
    },
    {
        "code": "ZA", "name": "Nam Phi", "flag": "🇿🇦", "continent": "africa",
        "capital": "Pretoria (Hành pháp)", "area": "1.221.037 km²", "population": "60 triệu",
        "landmark": "Núi Bàn (Table Mountain) & Mũi Hảo Vọng",
        "funFact": "Quốc gia duy nhất trên thế giới có tới 3 thủ đô và là mỏ vàng, kim cương trù phú của địa cầu.",
        "color": "#10b981"
    },
    {
        "code": "NG", "name": "Nigeria", "flag": "🇳🇬", "continent": "africa",
        "capital": "Abuja", "area": "923.768 km²", "population": "220 triệu",
        "landmark": "Tảng đá Zuma Rock & Rừng nhiệt đới",
        "funFact": "Quốc gia đông dân nhất châu Phi với biệt danh 'Người khổng lồ châu Phi' và nền công nghiệp điện ảnh Nollywood.",
        "color": "#15803d"
    },
    {
        "code": "MG", "name": "Madagascar", "flag": "🇲🇬", "continent": "africa",
        "capital": "Antananarivo", "area": "587.041 km²", "population": "30 triệu",
        "landmark": "Đại lộ cây Baobab & Động vật Vượn cáo",
        "funFact": "Hòn đảo lớn thứ tư thế giới ngoài khơi Ấn Độ Dương, nơi có hơn 90% động thực vật không nơi nào có.",
        "color": "#f97316"
    },
    {
        "code": "KE", "name": "Kenya", "flag": "🇰🇪", "continent": "africa",
        "capital": "Nairobi", "area": "580.367 km²", "population": "55 triệu",
        "landmark": "Vườn quốc gia Maasai Mara & Đỉnh Kenya",
        "funFact": "Thánh địa của những cuộc đại di cư của hàng triệu động vật hoang dã và quê hương các vận động viên điền kinh cự phách.",
        "color": "#d97706"
    },
    {
        "code": "MA", "name": "Morocco (Ma-rốc)", "flag": "🇲🇦", "continent": "africa",
        "capital": "Rabat", "area": "446.550 km²", "population": "37 triệu",
        "landmark": "Thành phố xanh Chefchaouen & Cổng Sa mạc Sahara",
        "funFact": "Cửa ngõ Tây Bắc châu Phi nằm sát eo biển Gibraltar, giao thoa rực rỡ giữa văn hóa Ả Rập và Berber.",
        "color": "#c2410c"
    },

    # --- CHÂU ĐẠI DƯƠNG ---
    {
        "code": "AU", "name": "Úc (Australia)", "flag": "🇦🇺", "continent": "oceania",
        "capital": "Canberra", "area": "7.692.024 km²", "population": "26 triệu",
        "landmark": "Nhà hát Con Sò Sydney & Chuột túi Kangaroo",
        "funFact": "Quốc gia duy nhất chiếm trọn một châu lục, nổi tiếng với rạn san hô Great Barrier lớn nhất hành tinh.",
        "color": "#eab308"
    },
    {
        "code": "NZ", "name": "New Zealand", "flag": "🇳🇿", "continent": "oceania",
        "capital": "Wellington", "area": "268.021 km²", "population": "5 triệu",
        "landmark": "Vịnh hẹp Milford Sound & Loài chim Kiwi",
        "funFact": "Xứ sở mây trắng dài, cảnh quan thiên nhiên kỳ vĩ được chọn làm phim trường 'Chúa tể những chiếc nhẫn'.",
        "color": "#06b6d4"
    },
    {
        "code": "PG", "name": "Papua New Guinea", "flag": "🇵🇬", "continent": "oceania",
        "capital": "Port Moresby", "area": "462.840 km²", "population": "10 triệu",
        "landmark": "Rừng mưa nhiệt đới & Loài Chim Thiên Đường",
        "funFact": "Đất nước đa dạng ngôn ngữ nhất thế giới với hơn 840 ngôn ngữ bản địa cùng hệ sinh thái nguyên sinh trù phú.",
        "color": "#84cc16"
    }
]

# Process and extract accurate SVG paths for all countries
final_countries = []
for c_meta in countries_meta:
    code = c_meta["code"]
    feat = features_by_code.get(code)
    if not feat:
        print(f"Warning: Missing geometry for {code}")
        continue
    d, bbox, center = extract_country_path(code, feat["geometry"], epsilon=0.42)
    final_countries.append({
        "id": code.lower(),
        "code": code,
        "name": c_meta["name"],
        "flag": c_meta["flag"],
        "continent": c_meta["continent"],
        "capital": c_meta["capital"],
        "area": c_meta["area"],
        "population": c_meta["population"],
        "landmark": c_meta["landmark"],
        "funFact": c_meta["funFact"],
        "color": c_meta["color"],
        "center": center,
        "bbox": bbox,
        "d": d
    })

print(f"Successfully processed {len(final_countries)} authentic countries!")

# Build complete world-data.js
output_js = f"""/**
 * world-data.js - Dữ liệu Bản Đồ Thế Giới CHUẨN ĐỊA LÝ QUỐC TẾ
 * Chiết xuất từ dữ liệu ranh giới quốc tế chính xác (Natural Earth / Geo-Countries),
 * thay thế hoàn toàn dạng sơ lược (schematic).
 */

window.WORLD_DATA = {{
  baseWorldPath: {json.dumps(base_world_path)},
  continents: {json.dumps(continents, ensure_ascii=False, indent=2)},
  countries: {json.dumps(final_countries, ensure_ascii=False, indent=2)}
}};
"""

with open('world-data.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print("Saved world-data.js successfully!")
