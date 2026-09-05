import type { IncomingMessage, ServerResponse } from "http";

interface VercelRequest extends IncomingMessage {
  method?: string;
}

interface VercelResponse extends ServerResponse {
  status: (code: number) => VercelResponse;
  json: (data: any) => void;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const isSmtpConfigured = Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
  );

  return res.status(200).json({
    status: "ok",
    agency: "Novexa Solutions",
    smtpConfigured: isSmtpConfigured,
    targetRecipient: process.env.CONTACT_RECIPIENT_EMAIL || "contact@novexasolutions.uk"
  });
}
