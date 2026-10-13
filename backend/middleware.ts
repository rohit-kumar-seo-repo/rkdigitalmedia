import { NextRequest, NextResponse } from "next/server";

function decodeBase64Url(value: string): Uint8Array {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((value.length + 3) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname === "/login" || pathname === "/api/login" || pathname.startsWith("/_next/") || pathname === "/favicon.ico") return NextResponse.next();
  const token = request.cookies.get("rk_admin_session")?.value;
  const secret = process.env.SESSION_SECRET;
  if (token && secret) {
    const [expiry, signature, extra] = token.split(".");
    const expiryNumber = Number(expiry);
    if (expiry && signature && !extra && Number.isFinite(expiryNumber) && expiryNumber > Date.now()) {
      try {
        const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);
        const valid = await crypto.subtle.verify("HMAC", key, decodeBase64Url(signature).buffer as ArrayBuffer, new TextEncoder().encode(expiry).buffer as ArrayBuffer);
        if (valid) return NextResponse.next();
      } catch { /* Invalid or malformed session fails closed. */ }
    }
  }
  if (pathname.startsWith("/api/")) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const login = request.nextUrl.clone(); login.pathname = "/login"; login.search = "";
  return NextResponse.redirect(login);
}

export const config = { matcher: ["/((?!.*\\.).*)", "/api/:path*"] };
