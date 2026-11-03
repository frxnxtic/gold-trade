import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const MAX_NAME = 100;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function fail(error: string, status: number) {
    return NextResponse.json({ ok: false, error }, { status });
}

// Odstráni zalomenia riadkov, aby sa nedali podstrčiť ďalšie hlavičky e-mailu
function oneLine(value: string) {
    return value.replace(/[\r\n]+/g, ' ').trim();
}

export async function POST(request: NextRequest) {
    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return fail('Neplatná požiadavka.', 400);
    }

    const name = oneLine(String(body.name ?? ''));
    const email = oneLine(String(body.email ?? ''));
    const message = String(body.message ?? '').trim();
    const website = String(body.website ?? '');

    // Skryté pole (honeypot) – vyplnia ho len roboty. Tvárime sa, že je všetko OK.
    if (website) {
        return NextResponse.json({ ok: true });
    }

    if (!name || name.length > MAX_NAME) {
        return fail('Zadajte prosím meno (max. 100 znakov).', 400);
    }
    if (!EMAIL_RE.test(email) || email.length > MAX_EMAIL) {
        return fail('Zadajte prosím platný e-mail.', 400);
    }
    if (!message || message.length > MAX_MESSAGE) {
        return fail('Napíšte prosím správu (max. 5000 znakov).', 400);
    }

    const user = process.env.MY_EMAIL;
    const pass = process.env.MY_PASSWORD;
    if (!user || !pass) {
        console.error('Contact form: MY_EMAIL or MY_PASSWORD is not set');
        return fail('Správu sa nepodarilo odoslať.', 500);
    }

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: { user, pass },
    });

    try {
        await transport.sendMail({
            from: user,
            to: user,
            replyTo: email,
            subject: `Message from ${name} (${email})`,
            text: message,
        });
        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error('Contact form: sending failed', err);
        return fail('Správu sa nepodarilo odoslať.', 500);
    }
}
