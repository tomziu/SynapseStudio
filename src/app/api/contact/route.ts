import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// API key loaded securely from .env.local (never commit secrets to source code)
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kacper.tomzik1@gmail.com',
      subject: `Nowe zapytanie od: ${name}`,
      html: `
        <h2>Nowe zapytanie z formularza kontaktowego</h2>
        <p><strong>Imię i nazwisko / Firma:</strong> ${name}</p>
        <p><strong>Adres E-mail:</strong> ${email}</p>
        <p><strong>Wiadomość rzucona do Synapse Studio:</strong></p>
        <blockquote style="border-left: 4px solid #f43f5e; padding-left: 10px; margin-left: 0;">
          ${message}
        </blockquote>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
