import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const fd = await req.formData();
  const name    = fd.get('name')    || '';
  const email   = fd.get('email')   || '';
  const phone   = fd.get('phone')   || '';
  const company = fd.get('company') || '';
  const service = fd.get('service') || '';
  const message = fd.get('message') || '';

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
  }

  const html = `
    <h2>New Enquiry — R.K Digital Media</h2>
    <table cellpadding="8" style="border-collapse:collapse">
      <tr><td><b>Name</b></td><td>${name}</td></tr>
      <tr><td><b>Email</b></td><td>${email}</td></tr>
      <tr><td><b>Phone</b></td><td>${phone}</td></tr>
      <tr><td><b>Company</b></td><td>${company}</td></tr>
      <tr><td><b>Service</b></td><td>${service}</td></tr>
      <tr><td><b>Message</b></td><td>${message}</td></tr>
    </table>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    },
     body: JSON.stringify({
      from: 'RK Digital Media <onboarding@resend.dev>',
      to: 'info@rkdigitalmedia.in',
      reply_to: String(email),
      subject: `New Enquiry from ${name} — ${service}`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Resend error:', err);
    return NextResponse.json({ error: 'Failed to send email', details: err }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}