import { NextResponse } from 'next/server';

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }[char] || char));
}

function clean(value: FormDataEntryValue | null, max = 2000) {
  return String(value || '').trim().slice(0, max);
}

export async function POST(req: Request) {
  const fd = await req.formData();
  const name = clean(fd.get('name'), 120);
  const email = clean(fd.get('email'), 180);
  const phone = clean(fd.get('phone'), 60);
  const company = clean(fd.get('company'), 160);
  const service = clean(fd.get('service'), 120);
  const message = clean(fd.get('message'), 3000);

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Please complete the required fields.' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    return NextResponse.json({ error: 'Email service is temporarily unavailable.' }, { status: 500 });
  }

  const html = `
    <h2>New Enquiry — R.K Digital Media</h2>
    <table cellpadding="8" style="border-collapse:collapse">
      <tr><td><b>Name</b></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><b>Phone</b></td><td>${escapeHtml(phone)}</td></tr>
      <tr><td><b>Company</b></td><td>${escapeHtml(company)}</td></tr>
      <tr><td><b>Service</b></td><td>${escapeHtml(service)}</td></tr>
      <tr><td><b>Message</b></td><td>${escapeHtml(message).replace(/\n/g, '<br />')}</td></tr>
    </table>
  `;

  const from = process.env.RESEND_FROM_EMAIL || 'R.K Digital Media <info@rkdigitalmedia.in>';

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from,
      to: 'info@rkdigitalmedia.in',
      reply_to: email,
      subject: `New Enquiry from ${name} — ${service || 'Website'}`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Resend error:', err);
    return NextResponse.json({ error: 'Failed to send enquiry. Please use WhatsApp instead.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
