// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  tls: {
    // vypne kontrolu certifikátu (jen pokud opravdu potřebujete)
    rejectUnauthorized: false,
  },
});

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Chybí parametry' }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Kontakt" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `Nová zpráva od ${name}`,
      text: `
Jméno: ${name}
E-mail: ${email}

Zpráva:
${message}
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Odeslání selhalo' }, { status: 500 });
  }
}
