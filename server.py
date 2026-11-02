# -*- coding: utf-8 -*-
"""
server.py - Web Server cục bộ phục vụ trò chơi Ghép Hình Bản Đồ Việt Nam.
Chạy file này để mở game trên trình duyệt hoặc chia sẻ qua mạng nội bộ / Wifi lớp học.
"""
import http.server
import socketserver
import webbrowser
import socket
import os
import sys

PORT = 8080

def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # Connect to public DNS address without sending data
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = '127.0.0.1'
    finally:
        s.close()
    return ip

class UTF8HTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    local_ip = get_local_ip()
    handler = UTF8HTTPRequestHandler
    
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        local_url = f"http://localhost:{PORT}/index.html"
        wifi_url = f"http://{local_ip}:{PORT}/index.html"
        game_url = f"http://localhost:{PORT}/game.html"
        
        print("=" * 70)
        print("  🇻🇳 CỔNG HỌC LIỆU SỐ TƯƠNG TÁC LỚP 1 - 12 (BẢN ĐỒ VIỆT NAM) 🇻🇳")
        print("=" * 70)
        print(f" 💻 Mở Cổng Học Tập Chính (Lớp 1 - 12):")
        print(f"    👉 {local_url}")
        print(f" 🗺️ Mở Trực Tiếp Trò Chơi Bản Đồ 34 Tỉnh Thành:")
        print(f"    👉 {game_url}")
        print("-" * 70)
        print(f" 📱 CHIA SẺ VỚI HỌC SINH / ĐIỆN THOẠI / IPAD (CÙNG MẠNG WIFI):")
        print(f"    👉 {wifi_url}")
        print("=" * 70)
        print(" * Lưu ý: Học sinh / thiết bị khác chỉ cần kết nối cùng Wifi với máy này")
        print("          và gõ địa chỉ trên vào trình duyệt (Chrome, Safari, Cốc Cốc, Edge).")
        print(" * Nhấn Ctrl+C để dừng server.")
        print("=" * 70)
        
        try:
            webbrowser.open(local_url)
        except Exception:
            pass
            
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nĐã dừng server. Tạm biệt!")
            sys.exit(0)

if __name__ == '__main__':
    main()
