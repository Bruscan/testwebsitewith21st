import { Resend } from 'resend';
import { NextResponse } from 'next/server';

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

    // Initialize Resend at runtime (not build time)
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Professional email template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Ny förfrågan från ${name}</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(to bottom, #000000, #171717, #000000); border-radius: 16px; overflow: hidden; border: 1px solid #262626;">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(to bottom, rgba(0,0,0,0.3), transparent); padding: 40px 40px 30px; text-align: center; border-bottom: 1px solid #262626;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                        Batak Solutions
                      </h1>
                      <p style="margin: 10px 0 0; color: #a3a3a3; font-size: 14px;">
                        AI & Automation
                      </p>
                    </td>
                  </tr>

                  <!-- Title -->
                  <tr>
                    <td style="padding: 30px 40px 20px;">
                      <h2 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 600;">
                        🔔 Ny kontaktförfrågan
                      </h2>
                      <p style="margin: 8px 0 0; color: #a3a3a3; font-size: 14px;">
                        Från webbplatsen bataksolutions.se
                      </p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 20px 40px;">
                      <!-- Name -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                        <tr>
                          <td style="padding: 16px; background-color: rgba(38, 38, 38, 0.5); border-radius: 8px; border: 1px solid #262626;">
                            <p style="margin: 0 0 4px; color: #a3a3a3; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                              Namn
                            </p>
                            <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 500;">
                              ${name}
                            </p>
                          </td>
                        </tr>
                      </table>

                      <!-- Email -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                        <tr>
                          <td style="padding: 16px; background-color: rgba(38, 38, 38, 0.5); border-radius: 8px; border: 1px solid #262626;">
                            <p style="margin: 0 0 4px; color: #a3a3a3; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                              E-post
                            </p>
                            <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 500;">
                              <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">
                                ${email}
                              </a>
                            </p>
                          </td>
                        </tr>
                      </table>

                      ${company ? `
                      <!-- Company -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                        <tr>
                          <td style="padding: 16px; background-color: rgba(38, 38, 38, 0.5); border-radius: 8px; border: 1px solid #262626;">
                            <p style="margin: 0 0 4px; color: #a3a3a3; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                              Företag
                            </p>
                            <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 500;">
                              ${company}
                            </p>
                          </td>
                        </tr>
                      </table>
                      ` : ''}

                      <!-- Message -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding: 16px; background-color: rgba(38, 38, 38, 0.5); border-radius: 8px; border: 1px solid #262626;">
                            <p style="margin: 0 0 12px; color: #a3a3a3; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                              Meddelande
                            </p>
                            <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
${message}
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px 40px; text-align: center; border-top: 1px solid #262626;">
                      <p style="margin: 0; color: #737373; font-size: 13px;">
                        Detta meddelande skickades från kontaktformuläret på
                      </p>
                      <p style="margin: 4px 0 0; color: #a3a3a3; font-size: 13px;">
                        <a href="https://bataksolutions.se" style="color: #60a5fa; text-decoration: none;">
                          bataksolutions.se
                        </a>
                      </p>
                      <p style="margin: 16px 0 0; color: #525252; font-size: 12px;">
                        © 2025 Batak Solutions AB
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // Confirmation email template for the sender
    const confirmationHtml = `
      <!DOCTYPE html>
      <html lang="sv">
        <head>
          <meta charset="UTF-8" />
          <title>Tack för din förfrågan</title>
        </head>
        <body style="margin:0; padding:0; background-color:#f4f4f4;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td align="center" style="padding:20px 0;">
                <table cellpadding="0" cellspacing="0" width="600" style="background-color:#ffffff; border-radius:8px; overflow:hidden; font-family:Arial, sans-serif;">

                  <!-- Header -->
                  <tr>
                    <td style="background-color:#111827; padding:16px 24px; color:#ffffff; font-size:20px; font-weight:bold;">
                      Batak Solutions
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:24px; color:#111827; font-size:15px; line-height:1.6;">
                      <p>Hej ${name.split(' ')[0]},</p>
                      <p>
                        Tack för att du kontaktar oss! Vi har tagit emot din förfrågan och
                        <strong>återkommer till dig inom 48 timmar</strong>.
                      </p>
                      <p style="margin-top:16px;">
                        Vänliga hälsningar,<br/>
                        Batak Solutions AB<br/>
                        <a href="https://bataksolutions.se" style="color:#2563eb; text-decoration:none;">bataksolutions.se</a>
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color:#f3f4f6; padding:12px 24px; font-size:12px; color:#6b7280;">
                      Detta är ett automatiskt svar – du behöver inte svara på detta mejl.
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // Send both emails using batch
    const data = await resend.batch.send([
      // 1. Notification email to company
      {
        from: 'Kontaktformulär <noreply@bataksolutions.se>',
        to: process.env.CONTACT_EMAIL || 'kontakt@bataksolutions.se',
        subject: `Ny förfrågan från ${name}${company ? ` - ${company}` : ''}`,
        html: emailHtml,
        text: `
Ny kontaktförfrågan från webbplatsen

Namn: ${name}
E-post: ${email}
${company ? `Företag: ${company}` : ''}

Meddelande:
${message}

---
Detta meddelande skickades från bataksolutions.se
        `.trim(),
      },
      // 2. Confirmation email to sender
      {
        from: 'Batak Solutions <noreply@bataksolutions.se>',
        to: email,
        subject: 'Tack för din förfrågan - Batak Solutions',
        html: confirmationHtml,
        text: `
Hej ${name.split(' ')[0]},

Tack för att du kontaktar oss! Vi har tagit emot din förfrågan och återkommer till dig inom 48 timmar.

Vänliga hälsningar,
Batak Solutions AB
bataksolutions.se

---
Detta är ett automatiskt svar – du behöver inte svara på detta mejl.
        `.trim(),
      },
    ]);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Ett fel uppstod vid skickandet. Försök igen senare.' },
      { status: 500 }
    );
  }
}
