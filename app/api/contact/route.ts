import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Namn, e-post och meddelande är obligatoriska' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Kontaktformulär <onboarding@resend.dev>', // Change this to your verified domain
      to: process.env.CONTACT_EMAIL || 'kontakt@bataksolutions.se',
      subject: `Ny förfrågan från ${name}${company ? ` - ${company}` : ''}`,
      html: `
        <h2>Ny kontaktförfrågan från webbplatsen</h2>
        <p><strong>Namn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        ${company ? `<p><strong>Företag:</strong> ${company}</p>` : ''}
        <p><strong>Meddelande:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        Ny kontaktförfrågan från webbplatsen

        Namn: ${name}
        E-post: ${email}
        ${company ? `Företag: ${company}` : ''}

        Meddelande:
        ${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Ett fel uppstod vid skickandet. Försök igen senare.' },
      { status: 500 }
    );
  }
}
