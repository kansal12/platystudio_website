import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  // service: "gmail",
  // host: "smtp.zoho.com",
  // port: 465, // Use 465 for SSL, 587 for TLS
  // secure: true, // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface MailOptions {
  to: string;
  subject: string;
  html: string;
}

export default async function sendEmail({ to, subject, html }: MailOptions) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  };

  return transporter.sendMail(mailOptions);
}
