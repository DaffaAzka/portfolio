import { middleware } from "@/proxy";
import type { NextRequest } from "next/server";

/**
 * Next.js Middleware
 * Dijalankan di Edge tapi sudah dioptimasi untuk minimal logic
 */
export function middleware(request: NextRequest) {
  return middleware(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|api/rate-limit).*)",
  ],
};
