import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    const { name, email, message, company, phone } = await req.json();

    // --- Read & validate envs
    const host = requireEnv("SMTP_HOST");          // e.g. mail.bizcompl.com
    const port = Number(requireEnv("SMTP_PORT"));  // 465 or 587 typically
    const user = requireEnv("SMTP_USER");          // sales@bizcompl.com
    const pass = requireEnv("SMTP_PASS");          // your mailbox password

    // --- secure=true for 465 (implicit TLS), false for 587/25 (STARTTLS)
    const secure = port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      // If your provider uses a self-signed cert, uncomment the next line
      // (ONLY for testing; remove in production):
      // tls: { rejectUnauthorized: false },
    });

    // Quick connectivity check — throws with a clear message if misconfigured
    await transporter.verify();

    await transporter.sendMail({
      from: `"Website Contact" <${user}>`,
      to: "sales@bizcompl.com",
      replyTo: email, // so you can reply directly to the sender
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}
Email: ${email}
Company: ${company ?? ""}
Phone: ${phone ?? ""}
Message:
${message}
`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${(message || "").replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    // Log full error for the server console
    console.error("[contact] SMTP error:", err);

    // Return a short message to the client to help you diagnose
    const msg =
      err?.message ||
      err?.response ||
      "Failed to send email. Check SMTP settings and network connectivity.";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}