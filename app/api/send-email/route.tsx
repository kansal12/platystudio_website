import { NextResponse } from "next/server";
import sendEmail from "@/utils/sendEmail";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  const { name, email, message } = await req.json();

  try {
    // Send email to the user
    // await sendEmail({
    //   to: email,
    //   subject: "Thank you for contacting us!",
    //   html: `<p>Hi ${name},</p><p>We have received your message: "${message}".</p><p>We will get back to you soon.</p>`,
    // });

    // Send email to admin
    await sendEmail({
      to: "kansal@platy.studio ",
      subject: "New Contact Form Submission",
      html: `<p>New message from ${name} (${email}):</p><p>${message}</p>`,
    });

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send emails" },
      { status: 500 }
    );
  }
}
