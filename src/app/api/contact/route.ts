import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || "aryapatle2704@gmail.com";
    const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");

    if (!gmailPass) {
      return NextResponse.json(
        {
          success: false,
          needsConfig: true,
          error: "GMAIL_APP_PASSWORD is not configured in .env.local yet.",
        },
        { status: 503 }
      );
    }

    // Configure Gmail SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailSubject = `[Portfolio Inquiry] ${subject || "New Message"} from ${name}`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #000133; color: #FCF1D1; border-radius: 16px; overflow: hidden; border: 1px solid #1C3670;">
        <div style="background-color: #051540; padding: 24px 32px; border-bottom: 1px solid #1C3670;">
          <h2 style="margin: 0; color: #FCF1D1; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">
            Arya Patle &bull; Portfolio Inquiry
          </h2>
          <p style="margin: 4px 0 0 0; color: #FCF1D1; opacity: 0.7; font-size: 13px;">
            New message submitted through your developer portfolio
          </p>
        </div>
        
        <div style="padding: 32px;">
          <div style="background-color: #051540; border-radius: 12px; padding: 20px; border: 1px solid #1C3670; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; color: #FCF1D1; opacity: 0.6; width: 100px;">Sender:</td>
                <td style="padding: 6px 0; color: #FCF1D1; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #FCF1D1; opacity: 0.6;">Email:</td>
                <td style="padding: 6px 0;">
                  <a href="mailto:${email}" style="color: #FCF1D1; text-decoration: underline;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #FCF1D1; opacity: 0.6;">Subject:</td>
                <td style="padding: 6px 0; color: #FCF1D1;">${subject || "General Inquiry"}</td>
              </tr>
            </table>
          </div>

          <h3 style="margin: 0 0 12px 0; color: #FCF1D1; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8;">
            Message Content:
          </h3>
          <div style="background-color: #000133; border: 1px solid #1C3670; border-radius: 12px; padding: 20px; color: #FCF1D1; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
${message}
          </div>

          <div style="margin-top: 32px; text-align: center;">
            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(mailSubject)}" style="display: inline-block; background-color: #FCF1D1; color: #000133; font-weight: 600; font-size: 14px; padding: 12px 24px; border-radius: 10px; text-decoration: none;">
              Reply Directly to ${name}
            </a>
          </div>
        </div>

        <div style="background-color: #051540; padding: 16px 32px; border-top: 1px solid #1C3670; text-align: center; font-size: 12px; color: #FCF1D1; opacity: 0.5;">
          Delivered directly via Gmail SMTP to aryapatle2704@gmail.com
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Arya Patle Portfolio" <${gmailUser}>`,
      to: gmailUser,
      replyTo: `"${name}" <${email}>`,
      subject: mailSubject,
      text: `Sender Name: ${name}\nSender Email: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Email delivered successfully via Gmail SMTP.",
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : "Internal Server Error";
    console.error("Nodemailer SMTP Error:", error);
    return NextResponse.json(
      { success: false, error: errorMsg },
      { status: 500 }
    );
  }
}
