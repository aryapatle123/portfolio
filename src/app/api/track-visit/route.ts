import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

interface VisitRecord {
  id: string;
  timestamp: string;
  device: string;
  os: string;
  browser: string;
  referrer: string;
  ip: string;
  status: string;
}

interface VisitsStore {
  totalVisits: number;
  lastUpdated: string;
  recentVisits: VisitRecord[];
}

// In-memory fallback in case of read-only serverless environment
let inMemoryStore: VisitsStore = {
  totalVisits: 1,
  lastUpdated: new Date().toISOString(),
  recentVisits: [
    {
      id: "init-1",
      timestamp: new Date().toISOString(),
      device: "Desktop",
      os: "Windows",
      browser: "Chrome",
      referrer: "Direct",
      ip: "127.0.0.1",
      status: "Logged",
    },
  ],
};

function getVisitsFilePath(): string {
  return path.join(process.cwd(), "src", "data", "visits.json");
}

function loadVisits(): VisitsStore {
  try {
    const filePath = getVisitsFilePath();
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      const parsed = JSON.parse(data);
      inMemoryStore = parsed;
      return parsed;
    }
  } catch (err) {
    console.error("Failed to read visits file, using memory store:", err);
  }
  return inMemoryStore;
}

function saveVisits(store: VisitsStore): void {
  inMemoryStore = store;
  try {
    const filePath = getVisitsFilePath();
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(store, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to write visits file, kept in memory:", err);
  }
}

function parseUserAgent(uaString: string): { device: string; os: string; browser: string } {
  let os = "Unknown OS";
  let device = "Desktop";
  let browser = "Web Browser";

  if (/windows/i.test(uaString)) os = "Windows";
  else if (/macintosh|mac os x/i.test(uaString)) os = "macOS";
  else if (/android/i.test(uaString)) {
    os = "Android";
    device = "Mobile";
  } else if (/iphone|ipad|ipod/i.test(uaString)) {
    os = "iOS";
    device = /ipad/i.test(uaString) ? "Tablet" : "Mobile";
  } else if (/linux/i.test(uaString)) os = "Linux";

  if (/edg/i.test(uaString)) browser = "Microsoft Edge";
  else if (/chrome|crios/i.test(uaString) && !/opr|opera/i.test(uaString)) browser = "Google Chrome";
  else if (/safari/i.test(uaString) && !/chrome/i.test(uaString)) browser = "Apple Safari";
  else if (/firefox|fxios/i.test(uaString)) browser = "Mozilla Firefox";
  else if (/opera|opr/i.test(uaString)) browser = "Opera";

  return { device, os, browser };
}

export async function GET() {
  const store = loadVisits();
  return NextResponse.json({
    success: true,
    totalVisits: store.totalVisits,
    lastUpdated: store.lastUpdated,
    recentVisits: store.recentVisits.slice(0, 15),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const ua = req.headers.get("user-agent") || "";
    const { device, os, browser } = parseUserAgent(ua);

    // Extract IP safely
    const forwardedFor = req.headers.get("x-forwarded-for");
    const rawIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "Direct / Local";
    const ip = rawIp.replace(/^.*:/, "") || "Localhost";

    const referrer = body.referrer && body.referrer.trim() !== "" ? body.referrer : "Direct Visit";
    const nowIso = new Date().toISOString();
    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const store = loadVisits();
    store.totalVisits = (store.totalVisits || 0) + 1;
    store.lastUpdated = nowIso;

    const newRecord: VisitRecord = {
      id: `visit-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      timestamp: nowIso,
      device,
      os,
      browser,
      referrer,
      ip,
      status: "Logged & Notified",
    };

    store.recentVisits = [newRecord, ...(store.recentVisits || [])].slice(0, 30);
    saveVisits(store);

    // Send email notification to Arya Patle via Gmail SMTP
    const gmailUser = process.env.GMAIL_USER || "aryapatle2704@gmail.com";
    const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");

    let emailSent = false;
    if (gmailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
        });

        const mailSubject = `[Portfolio Alert] New Visitor Detected (${device} - ${browser})`;
        const textContent = `New Portfolio Visitor Alert\n\nDate and Time: ${formattedDate} IST\nDevice: ${device}\nOperating System: ${os}\nBrowser: ${browser}\nReferrer: ${referrer}\nIP Address: ${ip}\nTotal Visits: ${store.totalVisits}\n\nView live portfolio: http://localhost:3000`;

        const htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FFF8DF; color: #0A1329; border: 1px solid #ABC5F5; border-radius: 12px; overflow: hidden;">
            <div style="background-color: #FFF2C7; padding: 20px 24px; border-bottom: 1px solid #ABC5F5;">
              <h2 style="margin: 0; color: #0A1329; font-size: 18px; font-weight: bold;">
                Portfolio Visitor Alert
              </h2>
              <p style="margin: 4px 0 0 0; color: #2E4069; font-size: 13px;">
                A new user just accessed your developer portfolio
              </p>
            </div>
            <div style="padding: 24px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; color: #5C729E; width: 140px; font-weight: 500;">Timestamp:</td>
                  <td style="padding: 8px 0; color: #0A1329; font-weight: 600;">${formattedDate} IST</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #5C729E; font-weight: 500;">Device:</td>
                  <td style="padding: 8px 0; color: #0A1329;">${device}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #5C729E; font-weight: 500;">Operating System:</td>
                  <td style="padding: 8px 0; color: #0A1329;">${os}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #5C729E; font-weight: 500;">Browser:</td>
                  <td style="padding: 8px 0; color: #0A1329;">${browser}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #5C729E; font-weight: 500;">Traffic Origin:</td>
                  <td style="padding: 8px 0; color: #0A1329;">${referrer}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #5C729E; font-weight: 500;">IP Address:</td>
                  <td style="padding: 8px 0; color: #0A1329; font-family: monospace;">${ip}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #5C729E; font-weight: 500;">Total Lifetime Visits:</td>
                  <td style="padding: 8px 0; color: #0A1329; font-weight: bold;">${store.totalVisits}</td>
                </tr>
              </table>
            </div>
            <div style="background-color: #FFF2C7; padding: 12px 24px; border-top: 1px solid #ABC5F5; text-align: center; font-size: 12px; color: #5C729E;">
              Automated visitor notification delivered via Gmail SMTP
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Arya Patle Portfolio" <${gmailUser}>`,
          to: gmailUser,
          subject: mailSubject,
          text: textContent,
          html: htmlContent,
        });

        emailSent = true;
      } catch (mailErr) {
        console.error("Failed to send visit alert email:", mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      totalVisits: store.totalVisits,
      emailNotified: emailSent,
      record: newRecord,
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : "Error recording visit";
    console.error("Track visit error:", error);
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
