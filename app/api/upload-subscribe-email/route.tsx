// app/api/upload-csv/route.ts
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { Client } from "basic-ftp";
import os from "os";

export async function POST(req: Request) {
  let email: string | undefined;

  // 🧩 Safely parse JSON
  try {
    const data = await req.json();
    email = data?.email;
  } catch (err) {
    console.error("Invalid JSON body:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Invalid JSON body. Use application/json format.",
      },
      { status: 400 }
    );
  }

  // 🛡️ Validate email input
  if (!email || typeof email !== "string" || !email.trim()) {
    return NextResponse.json(
      { success: false, error: "Email is required." },
      { status: 400 }
    );
  }

  const trimmedEmail = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(trimmedEmail)) {
    return NextResponse.json(
      { success: false, error: "Invalid email format." },
      { status: 400 }
    );
  }
  // console.log("email", email);
  // Format CSV content
  const csv = `email: ${trimmedEmail}`;
  // console.log("csv", csv);
  // Save CSV temporarily
  const filePath = path.join(os.tmpdir(), `email_${Date.now()}.csv`);
  await writeFile(filePath, csv, "utf-8");

  // Upload to FTP
  const client = new Client();
  client.ftp.verbose = true;
  console.log("FTP config", process.env.FTP_HOST, process.env.FTP_USER);

  try {
    await client.access({
      host: process.env.FTP_HOST!,
      user: process.env.FTP_USER!,
      password: process.env.FTP_PASSWORD!,
      secure: false,
    });

    await client.uploadFrom(filePath, `subscribe/${path.basename(filePath)}`);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("FTP error:", err);
    return NextResponse.json(
      { success: false, error: "FTP upload failed" },
      { status: 500 }
    );
  } finally {
    client.close();
  }
}
