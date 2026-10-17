import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const CITY_OPTIONS = new Set(['Mumbai/MMR', 'Pune', 'Bengaluru', 'Hyderabad', 'Delhi NCR', 'Chennai', 'Ahmedabad', 'Other']);
const clean = (value: unknown, max = 500) => typeof value === 'string' ? value.trim().slice(0, max) : '';
const rawString = (value: unknown) => typeof value === 'string' ? value : '';
const validPhone = (value: string) => {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 8 && digits.length <= 15;
};

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: ['request'] }, { status: 400 });
  }

  const step = body.step === 'details' ? 'details' : 'initial';
  const hp = rawString(body.hp);
  // Return the same shape as a successful submission, without forwarding bot data.
  if (hp !== '') {
    return NextResponse.json({ ok: true, id: 'enq-' + crypto.randomUUID() }, { status: 200 });
  }

  const name = clean(body.name, 120);
  const company = clean(body.company, 180);
  const whatsapp = clean(body.whatsapp, 40);
  const project = clean(body.project, 180);
  const email = clean(body.email, 254);
  const stage = clean(body.stage, 120);
  const budget = clean(body.budget, 100);
  const message = clean(body.message, 2000);
  // Preserve the cold-email lead id exactly as supplied; do not trim, decode, or truncate it.
  const ref = rawString(body.ref);
  const utm_source = clean(body.utm_source, 120);
  const utm_medium = clean(body.utm_medium, 120);
  const utm_campaign = clean(body.utm_campaign, 160);
  const page = clean(body.page, 2000);
  const consent = body.consent === true;
  const city = clean(body.city, 80);

  const errors: string[] = [];
  if (!name) errors.push('name');
  if (!company) errors.push('company');
  if (!whatsapp || !validPhone(whatsapp)) errors.push('whatsapp');
  if (step === 'initial') {
    if (!CITY_OPTIONS.has(city)) errors.push('city');
    if (!consent) errors.push('consent');
  } else {
    if (!stage) errors.push('stage');
    if (!budget) errors.push('budget');
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('email');
  if (errors.length) return NextResponse.json({ ok: false, errors }, { status: 400 });

  const webhookUrl = process.env.BUILDERS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('BUILDERS_WEBHOOK_URL is not configured');
    return NextResponse.json({ ok: false, error: 'The request form is temporarily unavailable. Please use WhatsApp instead.' }, { status: 500 });
  }

  const payload = {
    name, company, whatsapp, city: step === 'initial' ? city : '',
    consent: step === 'initial' ? consent : false,
    project, email, stage, budget, message, ref,
    utm_source, utm_medium, utm_campaign, page, hp: '', step,
  };

  try {
    const destination = new URL(webhookUrl);
    if (destination.protocol !== 'https:') {
      return NextResponse.json({ ok: false, error: 'The request form is temporarily unavailable. Please use WhatsApp instead.' }, { status: 500 });
    }
    const response = await fetch(destination.toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000),
      cache: 'no-store',
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || !result || result.ok !== true || typeof result.id !== 'string') {
      console.error('Builders webhook did not confirm a saved enquiry; status:', response.status);
      return NextResponse.json({ ok: false, error: typeof result?.error === 'string' ? result.error : 'We could not save your request. Please try WhatsApp instead.' }, { status: 500 });
    }
    return NextResponse.json({ ok: true, id: result.id }, { status: 200 });
  } catch (error) {
    console.error('Builders enquiry forwarding failed:', error instanceof Error ? error.message : 'unknown error');
    return NextResponse.json({ ok: false, error: 'We could not save your request. Please try WhatsApp instead.' }, { status: 500 });
  }
}
