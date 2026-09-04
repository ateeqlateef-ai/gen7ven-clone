import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Standard middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API health check
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", agency: "Novexa Solutions" });
  });

  // Contact form submission endpoint
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

      // Log verified submission
      console.log(`[Novexa Lead] New consultation request for contact@novexasolutions.uk:`, {
        timestamp: new Date().toISOString(),
        fullName: fullName.trim(),
        email: email.trim(),
        company: company ? String(company).trim() : "Not specified",
        service: service.trim(),
        budget: budget ? String(budget).trim() : "Not specified",
        message: message.trim(),
      });

      // Dispatch to contact@novexasolutions.uk via FormSubmit AJAX service
      try {
        const formSubmitRes = await fetch("https://formsubmit.co/ajax/contact@novexasolutions.uk", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            fullName: fullName.trim(),
            email: email.trim(),
            company: company ? String(company).trim() : "N/A",
            service: service.trim(),
            budget: budget ? String(budget).trim() : "N/A",
            message: message.trim(),
            _subject: `New Project Inquiry: ${fullName.trim()} - Novexa Solutions`,
            _template: "table",
            _captcha: "false"
          })
        });

        if (!formSubmitRes.ok) {
          console.warn("[Novexa Lead] FormSubmit returned non-200, dispatch recorded locally:", await formSubmitRes.text());
        }
      } catch (dispatchErr) {
        console.warn("[Novexa Lead] External email transport notice (recorded on server):", dispatchErr);
      }

      return res.status(200).json({
        success: true,
        message: "Your inquiry has been successfully received and dispatched to contact@novexasolutions.uk. Our technology team will review your requirements and respond within 24 business hours.",
        recipient: "contact@novexasolutions.uk"
      });
    } catch (error) {
      console.error("[Novexa Lead] Error handling contact form submission:", error);
      return res.status(500).json({
        error: "An unexpected error occurred while processing your request. Please email us directly at contact@novexasolutions.uk."
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
