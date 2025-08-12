// IMPORTS
import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { VerificationEmail } from "@/emails/verify-email";

// SEND VERIFICATION EMAIL
export async function sendVerificationEmail(email: string, url: string) {
  const emailHtml = render(<VerificationEmail url={url} />);
  const options = {
    from: "you@example.com",
    to: email,
    subject: "Verify your email",
    html: emailHtml,
  };
}
