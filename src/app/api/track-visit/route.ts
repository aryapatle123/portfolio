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
  location: string;
  status: string;
}

interface VisitsStore {
  totalVisits: number;
  lastUpdated: string;
  recentVisits: VisitRecord[];
}

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
      referrer: "Direct Visit",
      ip: "103.177.237.130",
      location: "Pune, Maharashtra, India",
      status: "Logged & Notified",
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

async function resolveIpAndLocation(req: NextRequest): Promise<{ ip: string; location: string }> {
  let ip = "127.0.0.1";
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    ip = forwarded.split(",")[0].trim();
  } else {
    const realIp = req.headers.get("x-real-ip");
    if (realIp) ip = realIp.trim();
  }

  const isLocal =
    !ip ||
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip === "localhost" ||
    ip.startsWith("192.168.") ||
    ip.startsWith("10.") ||
    ip.startsWith("172.");

  let location = "India";

  try {
    const targetUrl = isLocal ? "http://ip-api.com/json/" : `http://ip-api.com/json/${ip}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(targetUrl, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data.status === "success") {
        const city = data.city || "";
        const region = data.regionName ? `, ${data.regionName}` : "";
        const country = data.country || "India";
        location = city ? `${city}${region}, ${country}` : country;

        if (isLocal && data.query) {
          ip = data.query;
        }
      }
    }
  } catch (lookupErr) {
    console.log("IP Geolocation lookup note:", lookupErr);
  }

  return { ip, location };
}

export async function GET() {
  const store = loadVisits();
  return NextResponse.json({
    success: true,
    totalVisits: store.totalVisits,
    lastUpdated: store.lastUpdated,
    recentVisits: store.recentVisits.slice(0, 20),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const ua = req.headers.get("user-agent") || "";
    const { device, os, browser } = parseUserAgent(ua);

    // Resolve IP address and geographic location
    const { ip, location } = await resolveIpAndLocation(req);

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
      location,
      status: "Logged & Notified",
    };

    store.recentVisits = [newRecord, ...(store.recentVisits || [])].slice(0, 40);
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

        const mailSubject = `[Portfolio Alert] New Visitor from ${location} (${device} - ${browser})`;
        const textContent = `New Portfolio Visitor Alert\n\nDate and Time: ${formattedDate} IST\nLocation: ${location}\nIP Address: ${ip}\nDevice: ${device}\nOperating System: ${os}\nBrowser: ${browser}\nTraffic Origin: ${referrer}\nTotal Visits: ${store.totalVisits}\n\nView live portfolio: http://localhost:3000`;

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
                  <td style="padding: 8px 0; color: #5C729E; font-weight: 500;">Location:</td>
                  <td style="padding: 8px 0; color: #0A1329; font-weight: bold;">${location}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #5C729E; font-weight: 500;">IP Address:</td>
                  <td style="padding: 8px 0; color: #0A1329; font-family: monospace; font-weight: bold;">${ip}</td>
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
