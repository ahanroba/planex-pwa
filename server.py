import http.server
import socketserver
import os
import sys
import time

PORT = 3000
DIRECTORY = "/app/applet/dist" if os.path.isdir("/app/applet/dist") else "/app/applet/public"


class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        pass

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

class ThreadingHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    allow_reuse_address = True
    daemon_threads = True

def run():
    print(f"Starting server on port {PORT}...", flush=True)
    while True:
        try:
            server = ThreadingHTTPServer(("0.0.0.0", PORT), CustomHandler)
            server.serve_forever()
        except KeyboardInterrupt:
            break
        except Exception:
            time.sleep(1)

if __name__ == '__main__':
    run()
