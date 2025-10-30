// app/api/upload-csv/route.ts
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { Client } from "basic-ftp";
import os from "os";

export async function POST(req: Request) {
  const { email } = await req.json();
  // console.log("email", email);
  // Format CSV content
  const csv = `email: ${email}`;
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
