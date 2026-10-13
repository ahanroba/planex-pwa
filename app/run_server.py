import http.server
import socketserver
import os
import sys

DIRECTORY = "/app/applet/public"
PORT = 3000

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        sys.stderr.write("%s - - [%s] %s\n" % (self.address_string(), self.log_date_time_string(), format % args))
        sys.stderr.flush()

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

class ThreadingServer(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True

def main():
    os.chdir(DIRECTORY)
    with ThreadingServer(("", PORT), QuietHandler) as httpd:
        print(f"PlanEx Server running on port {PORT}...", flush=True)
        httpd.serve_forever()

if __name__ == "__main__":
    while True:
        try:
            main()
        except Exception as e:
            sys.stderr.write(f"Server restart due to: {e}\n")
            sys.stderr.flush()
