import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const CITY_OPTIONS = new Set(['Mumbai/MMR', 'Pune', 'Bengaluru', 'Hyderabad', 'Delhi NCR', 'Chennai', 'Ahmedabad', 'Other']);

function clean(value: unknown, max = 500) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function validPhone(value: string) {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 8 && digits.length <= 15;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Please check the form and try again.' }, { status: 400 });
  }

  // Honeypot submissions return a generic success response without forwarding.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const kind = clean(body.kind, 40) || 'buyer_map_request';
  const ref = clean(body.ref, 200);
  const landingCity = clean(body.landingCity, 120) || 'your city';
  const utm_source = clean(body.utm_source, 120);
  const utm_medium = clean(body.utm_medium, 120);
  const utm_campaign = clean(body.utm_campaign, 160);
  const pageUrl = clean(body.pageUrl, 2000);
  const consent = body.consent === true;

  if (kind === 'buyer_map_request') {
    const name = clean(body.name, 120);
    const company = clean(body.company, 180);
    const city = clean(body.city, 80);
    const whatsapp = clean(body.whatsapp, 40);
    if (!name || !company || !CITY_OPTIONS.has(city) || !whatsapp || !consent) {
      return NextResponse.json({ error: 'Please complete all required fields and confirm consent.' }, { status: 400 });
    }
    if (!validPhone(whatsapp)) {
      return NextResponse.json({ error: 'Please enter a valid WhatsApp number.' }, { status: 400 });
    }
  } else if (kind === 'buyer_map_followup') {
    const stage = clean(body.stage, 100);
    const budget = clean(body.budget, 100);
    if (!consent || !stage || !budget) {
      return NextResponse.json({ error: 'Please complete the optional project details and confirm consent.' }, { status: 400 });
    }
  } else {
    return NextResponse.json({ error: 'Unsupported enquiry type.' }, { status: 400 });
  }

  const webhookUrl = process.env.BUILDERS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('BUILDERS_WEBHOOK_URL is not configured');
    return NextResponse.json({ error: 'The request form is temporarily unavailable. Please use WhatsApp instead.' }, { status: 503 });
  }

  try {
    const destination = new URL(webhookUrl);
    if (destination.protocol !== 'https:') {
      return NextResponse.json({ error: 'The request form is temporarily unavailable. Please use WhatsApp instead.' }, { status: 503 });
    }

    const forwarded = {
      ...body,
      kind,
      ref,
      landingCity,
      utm_source,
      utm_medium,
      utm_campaign,
      pageUrl,
      receivedAt: new Date().toISOString(),
    };
    const response = await fetch(destination.toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(forwarded),
      signal: AbortSignal.timeout(8000),
      cache: 'no-store',
    });
    if (!response.ok) {
      console.error('Builders webhook returned status', response.status);
      return NextResponse.json({ error: 'We could not confirm your request. Please try WhatsApp instead.' }, { status: 502 });
    }
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Builders enquiry forwarding failed', error instanceof Error ? error.message : 'unknown error');
    return NextResponse.json({ error: 'We could not send your request. Please try WhatsApp instead.' }, { status: 502 });
  }
}
