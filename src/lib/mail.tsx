// SERVER ACTION
"use server";

// IMPORTS
import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { VerificationEmail } from "@/emails/verify-email";

// TYPE: EMAIL OPTIONS
type EmailOptions = {
  to: string;
  subject: string;
  html: string;
  text?: string;
};

// DEFINE TRANSPORTER
async function createTransporter() {
  // HANDLE TEST ENVIRONMENT
  // if (process.env.NODE_ENV === "test") {
  // }

  // HANDLE DEVELOPMENT ENVIRONMENT
  if (process.env.NODE_ENV === "development") {
    return nodemailer.createTransport({
      service: "Ethereal",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  // RETURN TRANSPORTER
  return nodemailer.createTransport({
    service: "Ethereal",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

// SEND EMAIL
export async function sendEmail(options: EmailOptions): Promise<void> {
  const transporter = await createTransporter();
  const fromEmail = process.env.FROM_EMAIL || "noreply@example.dev";

  try {
    const info = await transporter.sendMail({
      from: fromEmail,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });

    if (process.env.NODE_ENV === "development") {
      if (info.messageId) {
        console.log(
          "[INFO] Preview URL:",
          nodemailer.getTestMessageUrl(info as any),
        );
      }
    } else if (process.env.NODE_ENV === "test") {
      console.log("[INFO] Email Sent Successfully (Mocked)");
      console.log("[INFO] Message ID:", info.messageId);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    // throw error;
  }
}

// SEND VERIFICATION EMAIL
export async function sendVerificationEmail(
  to: string,
  url: string,
  _token: string,
): Promise<void> {
  const subject = "Verify your email address";
  const html = await render(<VerificationEmail url={url} />);
  const text = `

    Welcome to the app!

    To verify your email, please click the link below:

    ${url}

    If you did not request this verification, please ignore this email.

    Cheers,

    The App Team
  `;

  await sendEmail({
    to,
    subject,
    html,
    text,
  });
}
