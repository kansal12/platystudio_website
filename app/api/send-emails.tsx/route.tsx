import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Transporter configuration
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use "smtp.your-email-provider.com"
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your password or app password
      },
    });

    // Email to User
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting us!",
      text: `Hello ${name},\n\nThank you for reaching out. We received your message:\n\n"${message}"\n\nWe will get back to you shortly.\n\nBest regards,\nPlaty Studio`,
    };

    // Email to Owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: "New Contact Form Submission",
      text: `You have received a new message from ${name} (${email}):\n\n"${message}"`,
    };

    // Send both emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(ownerMailOptions);

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { error: "Failed to send emails." },
      { status: 500 }
    );
  }
}
