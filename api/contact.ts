import type { IncomingMessage, ServerResponse } from "http";
import nodemailer from "nodemailer";

interface VercelRequest extends IncomingMessage {
  body?: any;
  query?: { [key: string]: string | string[] };
  cookies?: { [key: string]: string };
  method?: string;
}

interface VercelResponse extends ServerResponse {
  status: (code: number) => VercelResponse;
  json: (data: any) => void;
  send: (data: any) => void;
}

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getMailTransporter() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  if (!host || !user || !pass) {
    return null;
  }

  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const isSecure = process.env.SMTP_SECURE !== undefined
    ? process.env.SMTP_SECURE === "true"
    : (port === 465);

  return nodemailer.createTransport({
    host,
    port,
    secure: isSecure,
    auth: {
      user,
      pass,
    },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS if accessed from configured domains
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).json({ ok: true });
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      error: `Method ${req.method} not allowed. Please use POST.`
    });
  }

  try {
    // Parse request body safely (Vercel automatically parses JSON bodies, but handle fallback)
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ error: "Invalid JSON in request body." });
      }
    }

    if (!body || typeof body !== "object") {
      return res.status(400).json({ error: "Request body must be a JSON object." });
    }

    const { fullName, email, company, service, budget, message } = body;

    // Validation
    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      return res.status(400).json({ error: "Full Name is required." });
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ error: "A valid email address is required." });
    }

    if (!service || typeof service !== "string" || !service.trim()) {
      return res.status(400).json({ error: "Service selection is required." });
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return res.status(400).json({ error: "Message must be at least 10 characters." });
    }

    const cleanName = fullName.trim();
    const cleanEmail = email.trim();
    const cleanCompany = company ? String(company).trim() : "Not specified";
    const cleanService = service.trim();
    const cleanBudget = budget ? String(budget).trim() : "Not specified";
    const cleanMessage = message.trim();
    const timestamp = new Date().toUTCString();
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "contact@novexasolutions.uk";

    const transporter = getMailTransporter();

    if (!transporter) {
      console.error("[Novexa SMTP] Error: SMTP configuration missing in server environment variables (SMTP_HOST, SMTP_USER, SMTP_PASS).");
      return res.status(500).json({
        error: "SMTP service is not configured on the server. Please ensure SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS are set in environment variables."
      });
    }

    // Professional clean HTML email format
    const fromAddress = process.env.SMTP_FROM || `"Novexa Solutions Website" <${process.env.SMTP_USER}>`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Project Inquiry - Novexa Solutions</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FAFC; color: #0F172A; padding: 24px 0; margin: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
    .header { background: linear-gradient(135deg, #0284C7, #2563EB); padding: 32px 24px; text-align: left; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.02em; }
    .header p { margin: 6px 0 0 0; font-size: 14px; color: #E0F2FE; }
    .content { padding: 28px 24px; }
    .badge { display: inline-block; padding: 4px 12px; background: #E0F2FE; color: #0284C7; border: 1px solid #BAE6FD; border-radius: 9999px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 16px; }
    .table-info { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .table-info td { padding: 12px 8px; border-bottom: 1px solid #F1F5F9; font-size: 14px; }
    .table-info td.label { width: 34%; color: #64748B; font-weight: 600; }
    .table-info td.value { color: #0F172A; font-weight: 600; }
    .message-box { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px; margin-top: 8px; }
    .message-box h3 { margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #0284C7; font-weight: 800; }
    .message-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
    .footer { padding: 20px 24px; background: #F8FAFC; border-top: 1px solid #E2E8F0; font-size: 12px; color: #64748B; text-align: center; }
    .footer a { color: #2563EB; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Novexa Solutions &mdash; New Lead</h1>
      <p>Direct project scoping submission from https://novexasolutions.uk</p>
    </div>
    <div class="content">
      <span class="badge">${escapeHtml(cleanService)}</span>
      <table class="table-info">
        <tr>
          <td class="label">Full Name</td>
          <td class="value"><strong>${escapeHtml(cleanName)}</strong></td>
        </tr>
        <tr>
          <td class="label">Work Email</td>
          <td class="value"><a href="mailto:${escapeHtml(cleanEmail)}" style="color: #2563EB; text-decoration: none;">${escapeHtml(cleanEmail)}</a></td>
        </tr>
        <tr>
          <td class="label">Company / Brand</td>
          <td class="value">${escapeHtml(cleanCompany)}</td>
        </tr>
        <tr>
          <td class="label">Selected Service</td>
          <td class="value">${escapeHtml(cleanService)}</td>
        </tr>
        <tr>
          <td class="label">Project Budget</td>
          <td class="value">${escapeHtml(cleanBudget)}</td>
        </tr>
        <tr>
          <td class="label">Submission Timestamp</td>
          <td class="value">${escapeHtml(timestamp)}</td>
        </tr>
      </table>

      <div class="message-box">
        <h3>Project Description &amp; Objectives</h3>
        <p>${escapeHtml(cleanMessage)}</p>
      </div>
    </div>
    <div class="footer">
      <p>Reply directly to this email to contact <strong>${escapeHtml(cleanName)}</strong> at <a href="mailto:${escapeHtml(cleanEmail)}">${escapeHtml(cleanEmail)}</a>.</p>
      <p>&copy; ${new Date().getFullYear()} Novexa Solutions &bull; <a href="https://novexasolutions.uk">novexasolutions.uk</a></p>
    </div>
  </div>
</body>
</html>
    `.trim();

    const plainTextContent = `
NOVEXA SOLUTIONS — NEW PROJECT INQUIRY
=======================================
Service: ${cleanService}
From: ${cleanName} (${cleanEmail})
Company: ${cleanCompany}
Budget: ${cleanBudget}
Received: ${timestamp}

PROJECT DESCRIPTION:
--------------------
${cleanMessage}

--------------------
Reply directly to this email to contact the prospective client: ${cleanEmail}
    `.trim();

    const mailOptions = {
      from: fromAddress,
      to: recipient,
      replyTo: `"${cleanName}" <${cleanEmail}>`,
      subject: `[Novexa Lead] ${cleanService} inquiry: ${cleanName}`,
      text: plainTextContent,
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[Novexa SMTP] Successfully sent lead email to ${recipient}: messageId=${info.messageId}`);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully. We'll get back to you soon.",
      deliveredVia: "smtp"
    });
  } catch (error: any) {
    console.error("[Novexa SMTP Error] Failed to send email:", error?.message || error);
    return res.status(500).json({
      error: "We encountered an issue transmitting your message via SMTP. Please try again or email us directly at contact@novexasolutions.uk."
    });
  }
}
