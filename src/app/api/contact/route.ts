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

  // Bots fill the hidden field; answer like a success without forwarding anything.
  if (clean(fd.get('hp'), 200)) {
    return NextResponse.json({ success: true });
  }

  // Send to both the lead sheet/alerts webhook and the inbox; the enquiry counts as sent if either works.
  const [savedToSheet, emailed] = await Promise.all([
    forwardToWebhook({ name, email, phone, company, service, message, page: req.headers.get('referer') || '' }),
    sendEmail({ name, email, phone, company, service, message }),
  ]);

  if (!savedToSheet && !emailed) {
    return NextResponse.json({ error: 'Failed to send enquiry. Please use WhatsApp instead.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

type Lead = { name: string; email: string; phone: string; company: string; service: string; message: string };

async function forwardToWebhook(lead: Lead & { page: string }) {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) {
    console.error('CONTACT_WEBHOOK_URL not configured');
    return false;
  }
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...lead, source: 'contact_form' }),
      signal: AbortSignal.timeout(10000),
      cache: 'no-store',
    });
    const data = await res.json().catch(() => null);
    if (!res.ok || data?.ok !== true) console.error('Contact webhook did not confirm; status:', res.status);
    return res.ok && data?.ok === true;
  } catch (error) {
    console.error('Contact webhook failed:', error instanceof Error ? error.message : 'unknown error');
    return false;
  }
}

async function sendEmail({ name, email, phone, company, service, message }: Lead) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    return false;
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
    console.error('Resend error:', await res.text());
    return false;
  }
  return true;
}
