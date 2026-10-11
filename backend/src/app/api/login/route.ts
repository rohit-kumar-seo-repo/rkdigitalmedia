import { createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 8;
const attempts = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const record = attempts.get(ip);
  if (record && record.resetAt > now && record.count >= MAX_ATTEMPTS) return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  let body: { password?: string };
  try { body = await request.json(); } catch { return NextResponse.json({ error: "invalid_request" }, { status: 400 }); }
  const expected = process.env.ADMIN_PASSWORD;
  const secret = process.env.SESSION_SECRET;
  if (!expected || !secret) return NextResponse.json({ error: "auth_not_configured" }, { status: 503 });
  const provided = typeof body.password === "string" ? body.password : "";
  const providedBuffer = Buffer.from(provided);
  const expectedBuffer = Buffer.from(expected);
  const valid = providedBuffer.length === expectedBuffer.length && timingSafeEqual(providedBuffer, expectedBuffer);
  if (!valid) {
    const next = !record || record.resetAt <= now ? { count: 1, resetAt: now + WINDOW_MS } : { ...record, count: record.count + 1 };
    attempts.set(ip, next);
    return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
  }
  attempts.delete(ip);
  const expiresAt = now + 12 * 60 * 60 * 1000;
  const payload = String(expiresAt);
  const signature = createHmac("sha256", secret).update(payload).digest("base64url");
  const response = NextResponse.json({ success: true });
  response.cookies.set("rk_admin_session", payload + "." + signature, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", expires: new Date(expiresAt) });
  return response;
}
