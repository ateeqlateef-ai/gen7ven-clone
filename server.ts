import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

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

  const port = parseInt(process.env.SMTP_PORT || "465", 10);
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

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Standard middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API health check
  app.get("/api/health", (_req: Request, res: Response) => {
    const isSmtpConfigured = Boolean(
      process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
    );

    res.json({
      status: "ok",
      agency: "Novexa Solutions",
      smtpConfigured: isSmtpConfigured,
      targetRecipient: process.env.CONTACT_RECIPIENT_EMAIL || "contact@novexasolutions.uk"
    });
  });

  // SMTP configuration check endpoint (for verification without leaking secrets)
  app.get("/api/contact/status", (_req: Request, res: Response) => {
    const hasHost = Boolean(process.env.SMTP_HOST?.trim());
    const hasUser = Boolean(process.env.SMTP_USER?.trim());
    const hasPass = Boolean(process.env.SMTP_PASS?.trim());
    const isConfigured = hasHost && hasUser && hasPass;

    res.json({
      smtpConfigured: isConfigured,
      details: {
        hostSet: hasHost,
        userSet: hasUser,
        passSet: hasPass,
        port: process.env.SMTP_PORT || "465 (default)",
        recipient: process.env.CONTACT_RECIPIENT_EMAIL || "contact@novexasolutions.uk"
      },
      message: isConfigured
        ? "SMTP credentials are fully detected in server environment."
        : "SMTP credentials not yet set. Add SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in Settings > Secrets."
    });
  });

  // Contact form submission endpoint (Server-side SMTP dispatch)
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { fullName, email, company, service, budget, message } = req.body;

      // Validation
      if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
        return res.status(400).json({ error: "Full Name is required" });
      }

      if (!email || typeof email !== "string" || !/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ error: "A valid email address is required" });
      }

      if (!service || typeof service !== "string" || !service.trim()) {
        return res.status(400).json({ error: "Service selection is required" });
      }

      if (!message || typeof message !== "string" || !message.trim()) {
        return res.status(400).json({ error: "Project description/message is required" });
      }

      const cleanName = fullName.trim();
      const cleanEmail = email.trim();
      const cleanCompany = company ? String(company).trim() : "Not specified";
      const cleanService = service.trim();
      const cleanBudget = budget ? String(budget).trim() : "Not specified";
      const cleanMessage = message.trim();
      const timestamp = new Date().toUTCString();
      const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "contact@novexasolutions.uk";

      console.log(`[Novexa Lead] Incoming inquiry for ${recipient}:`, {
        timestamp,
        cleanName,
        cleanEmail,
        cleanCompany,
        cleanService,
        cleanBudget
      });

      const transporter = getMailTransporter();

      if (transporter) {
        // Build professional HTML email for delivery
        const fromAddress = process.env.SMTP_FROM || `"Novexa Solutions Website" <${process.env.SMTP_USER}>`;

        const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Project Inquiry - Novexa Solutions</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #f1f5f9; padding: 24px 0; margin: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #111827; border: 1px solid #1f2937; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #1e3a8a, #0ea5e9); padding: 32px 24px; text-align: left; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em; }
    .header p { margin: 6px 0 0 0; font-size: 14px; color: #bae6fd; }
    .content { padding: 28px 24px; }
    .badge { display: inline-block; padding: 4px 10px; background: #0369a1; color: #ffffff; border-radius: 6px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 16px; }
    .table-info { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .table-info td { padding: 10px 12px; border-bottom: 1px solid #1f2937; font-size: 14px; }
    .table-info td.label { width: 32%; color: #94a3b8; font-weight: 600; }
    .table-info td.value { color: #f8fafc; font-weight: 500; }
    .message-box { background: #0b0f19; border: 1px solid #1e293b; border-radius: 8px; padding: 18px; margin-top: 8px; }
    .message-box h3 { margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #38bdf8; }
    .message-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #cbd5e1; white-space: pre-wrap; }
    .footer { padding: 20px 24px; background: #0b0f19; border-top: 1px solid #1f2937; font-size: 12px; color: #64748b; text-align: center; }
    .footer a { color: #38bdf8; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Novexa Solutions — New Lead</h1>
      <p>Direct submission from https://novexasolutions.uk</p>
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
          <td class="value"><a href="mailto:${escapeHtml(cleanEmail)}" style="color: #38bdf8; text-decoration: none;">${escapeHtml(cleanEmail)}</a></td>
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
          <td class="label">Received At</td>
          <td class="value">${escapeHtml(timestamp)}</td>
        </tr>
      </table>

      <div class="message-box">
        <h3>Project Description &amp; Scope</h3>
        <p>${escapeHtml(cleanMessage)}</p>
      </div>
    </div>
    <div class="footer">
      <p>You can reply directly to this email to respond to <strong>${escapeHtml(cleanName)}</strong> (${escapeHtml(cleanEmail)}).</p>
      <p>&copy; ${new Date().getFullYear()} Novexa Solutions &bull; <a href="https://novexasolutions.uk">novexasolutions.uk</a></p>
    </div>
  </div>
</body>
</html>
        `;

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
Reply directly to this email to contact the prospective client.
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
        console.log(`[Novexa SMTP] Email successfully dispatched to ${recipient}:`, info.messageId);

        return res.status(200).json({
          success: true,
          message: "Message sent successfully. We'll get back to you soon.",
          deliveredVia: "smtp"
        });
      } else {
        // SMTP credentials not yet added in server environment
        console.warn(
          `[Novexa SMTP] Notice: SMTP credentials not set in server environment. Lead from ${cleanEmail} logged to server console.`
        );

        return res.status(200).json({
          success: true,
          message: "Message sent successfully. We'll get back to you soon.",
          deliveredVia: "server_log",
          notice: "SMTP credentials pending configuration in server environment."
        });
      }
    } catch (error: any) {
      console.error("[Novexa SMTP Error]: Failed to send contact email:", error?.message || error);
      return res.status(500).json({
        error: "We encountered an issue transmitting your message via SMTP. Please check SMTP settings or email us directly at contact@novexasolutions.uk."
      });
    }
  });

  // Vite middleware for development vs static build in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Novexa Solutions server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();

