import nodemailer from "nodemailer";

export const runtime = "nodejs";

type EnquiryPayload = {
  names?: unknown;
  email?: unknown;
  date?: unknown;
  venue?: unknown;
  message?: unknown;
  source?: unknown;
};

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_TO"];

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function missingSmtpVariables() {
  return requiredEnv.filter((key) => !process.env[key]);
}

export async function POST(request: Request) {
  let payload: EnquiryPayload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Invalid enquiry request." }, { status: 400 });
  }

  const names = clean(payload.names);
  const email = clean(payload.email);
  const date = clean(payload.date);
  const venue = clean(payload.venue);
  const message = clean(payload.message);
  const source = clean(payload.source) || "Website enquiry form";

  if (!names || !email || !message) {
    return Response.json(
      { message: "Please add your names, email, and message." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return Response.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const missing = missingSmtpVariables();

  if (missing.length > 0) {
    console.error(`Missing SMTP environment variables: ${missing.join(", ")}`);
    return Response.json(
      { message: "Email is not configured yet." },
      { status: 500 },
    );
  }

  const port = Number(process.env.SMTP_PORT);
  const secure =
    process.env.SMTP_SECURE === "true" ||
    (process.env.SMTP_SECURE !== "false" && port === 465);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const subjectPrefix = process.env.SMTP_SUBJECT_PREFIX || "New Wedding Enquiry";
  const subject = `${subjectPrefix}: ${names}`;
  const rows = [
    ["Names", names],
    ["Email", email],
    ["Wedding date", date || "Not provided"],
    ["Venue", venue || "Not provided"],
    ["Source", source],
    ["Message", message],
  ];

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #171717; line-height: 1.55;">
          <h2 style="margin: 0 0 16px;">${subject}</h2>
          ${rows
            .map(
              ([label, value]) => `
                <p style="margin: 0 0 12px;">
                  <strong>${escapeHtml(label)}:</strong><br />
                  ${escapeHtml(value).replace(/\n/g, "<br />")}
                </p>
              `,
            )
            .join("")}
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send enquiry email:", error);
    return Response.json(
      { message: "We could not send your enquiry right now." },
      { status: 500 },
    );
  }

  return Response.json({ message: "Enquiry sent successfully." });
}
