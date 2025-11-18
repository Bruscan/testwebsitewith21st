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
                        © 2024 Batak Solutions AB
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

    // Simple confirmation email template for the sender
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

                  <!-- Header -->
                  <tr>
                    <td style="padding: 40px 40px 30px; text-align: center; background-color: #ffffff;">
                      <h1 style="margin: 0; color: #1a1a1a; font-size: 24px; font-weight: 600;">
                        Batak Solutions
                      </h1>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 0 40px 40px; color: #333333; font-size: 16px; line-height: 1.6;">
                      <p style="margin: 0 0 16px;">Hej ${name.split(' ')[0]},</p>

                      <p style="margin: 0 0 16px;">Tack för att du kontaktar oss. Vi har tagit emot din förfrågan och återkommer till dig inom <strong>48 timmar</strong>.</p>

                      <p style="margin: 0 0 16px;">Vi ser fram emot att diskutera hur vi kan hjälpa er organisation med AI och automation.</p>

                      <p style="margin: 0;">Med vänliga hälsningar,<br><strong>Batak Solutions</strong></p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px 40px; text-align: center; background-color: #f9f9f9; border-top: 1px solid #e5e5e5;">
                      <p style="margin: 0 0 8px; color: #666666; font-size: 14px;">
                        <a href="https://bataksolutions.se" style="color: #356fd9; text-decoration: none;">bataksolutions.se</a>
                      </p>
                      <p style="margin: 0; color: #999999; font-size: 12px;">
                        © 2024 Batak Solutions AB
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

Tack för att du kontaktar oss. Vi har tagit emot din förfrågan och återkommer till dig inom 48 timmar.

Vi ser fram emot att diskutera hur vi kan hjälpa er organisation med AI och automation.

Med vänliga hälsningar,
Batak Solutions

---
bataksolutions.se
© 2024 Batak Solutions AB
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
