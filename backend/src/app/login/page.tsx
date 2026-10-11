"use client";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setLoading(true);
    try {
      const response = await fetch("/api/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ password }) });
      if (!response.ok) { setError(response.status === 429 ? "Too many attempts. Please wait a few minutes." : "That password was not accepted."); return; }
      window.location.assign("/");
    } catch { setError("Unable to sign in. Please try again."); }
    finally { setLoading(false); }
  }
  return <main className="login-wrap"><section className="login-card"><div className="brand" style={{padding:0}}><div className="brand-mark">RK</div><div><div className="brand-name">R.K DIGITAL MEDIA</div><div className="brand-sub">Private operations workspace</div></div></div><div className="eyebrow" style={{marginTop:34}}>ADMIN ACCESS</div><h1>Welcome back.</h1><p>Sign in to manage your website operations, content workflow, SEO checks, and incoming leads.</p><form onSubmit={submit}><label className="field-label" htmlFor="password">Admin password</label><input className="password-input" id="password" type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} required minLength={12} autoFocus/><button className="login-submit" type="submit" disabled={loading}>{loading ? "Verifying…" : "Sign in securely →"}</button>{error && <div className="login-error" role="alert">{error}</div>}</form><div className="login-small">Protected admin area · Sessions expire after 12 hours · Never share your password.</div></section></main>;
}
