import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

export function middleware(request: NextRequest) {
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const ip = forwarded?.split(",")[0]?.trim() || realIp || "anonymous";

    const result = rateLimit(ip);

    if (!result.success) {
        const retryAfter = Math.ceil(result.resetIn / 1000);

        return new NextResponse(
            `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>429 - Too Many Requests</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0a0a0a;
      color: #ededed;
      font-family: system-ui, -apple-system, sans-serif;
    }
    .container {
      text-align: center;
      padding: 2rem;
      max-width: 480px;
    }
    .shield {
      font-size: 4rem;
      margin-bottom: 1rem;
      animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(0.95); }
    }
    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
      background: linear-gradient(135deg, #ff6b6b, #ee5a24);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    p {
      color: #888;
      line-height: 1.6;
      font-size: 0.95rem;
    }
    .timer {
      display: inline-block;
      margin-top: 1.5rem;
      padding: 0.5rem 1.5rem;
      border: 1px solid #333;
      border-radius: 999px;
      font-size: 0.85rem;
      color: #aaa;
    }
    .timer span {
      color: #ff6b6b;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="shield">🛡️</div>
    <h1>Too Many Requests</h1>
    <p>Kamu sudah mengirim terlalu banyak request. Silakan tunggu sebentar sebelum mencoba lagi.</p>
    <div class="timer">Coba lagi dalam <span id="countdown">${retryAfter}</span> detik</div>
  </div>
  <script>
    let seconds = ${retryAfter};
    const el = document.getElementById('countdown');
    const interval = setInterval(() => {
      seconds--;
      if (el) el.textContent = seconds;
      if (seconds <= 0) {
        clearInterval(interval);
        window.location.reload();
      }
    }, 1000);
  </script>
</body>
</html>`,
            {
                status: 429,
                headers: {
                    "Content-Type": "text/html; charset=utf-8",
                    "Retry-After": retryAfter.toString(),
                    "X-RateLimit-Limit": result.limit.toString(),
                    "X-RateLimit-Remaining": "0",
                },
            }
        );
    }

    const response = NextResponse.next();
    response.headers.set("X-RateLimit-Limit", result.limit.toString());
    response.headers.set("X-RateLimit-Remaining", result.remaining.toString());

    return response;
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};
