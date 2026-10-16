"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, ArrowUpRight, Send, Check, Copy, ExternalLink, Loader2, Sparkles } from "lucide-react";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import InstagramIcon from "./InstagramIcon";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const recipientEmail = PORTFOLIO_DATA.socials.email; // aryapatle2704@gmail.com

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    const emailSubject = `[Portfolio Inquiry] ${formState.subject || "Collaboration"} from ${formState.name}`;
    const emailBody = `Sender Name: ${formState.name}\nSender Email: ${formState.email}\nSubject: ${formState.subject}\n\nMessage:\n${formState.message}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
        setStatusMessage("Message delivered directly to Arya's inbox via Gmail SMTP!");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else if (data.needsConfig) {
        setStatusMessage("Google App Password pending in .env.local. Opened mail draft as fallback!");
        window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        setIsSubmitted(true);
      } else {
        throw new Error(data.error || "Email delivery failed");
      }
    } catch {
      window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      setIsSubmitted(true);
      setStatusMessage("Opened your default mail app to send directly to aryapatle2704@gmail.com.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setStatusMessage(null);
      }, 7000);
    }
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(
    formState.subject ? `[Portfolio Inquiry] ${formState.subject}` : "Portfolio Inquiry for Arya Patle"
  )}&body=${encodeURIComponent(
    formState.message
      ? `Hi Arya,\n\n${formState.message}\n\nFrom: ${formState.name || "A collaborator"}`
      : "Hi Arya,\n\nI came across your developer portfolio and would like to connect.\n"
  )}`;

  return (
    <section id="contact" className="py-24 relative border-t border-[#ABC5F5]/60 bg-[#FFF8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-2 h-6 bg-[#8DAAFF]" />
              <span className="font-mono text-xs tracking-widest text-[#2E4069] uppercase font-bold">
                RADIO // DIRECT COMM
              </span>
              <span className="font-mono text-xs text-[#5C729E] uppercase font-semibold">
                SMTP INBOX DISPATCH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1329]">
              Get in Touch
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Profiles */}
          <div className="lg:col-span-5 bg-[#FFF2C7] border border-[#ABC5F5] telemetry-bracket rounded-2xl p-7 space-y-4 shadow-md">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#5C729E] font-bold tracking-wider block">
                CHANNELS // VERIFIED
              </span>
              <h3 className="text-lg font-bold text-[#0A1329] mt-0.5">
                Direct Contact Channels
              </h3>
            </div>

            <div className="space-y-2.5 pt-2 font-mono">
              {/* Email Card */}
              <div className="p-3.5 rounded-xl bg-[#FFF8DF] border border-[#ABC5F5] space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#FFF2C7] text-[#0A1329] border border-[#ABC5F5]">
                      <Mail className="w-4 h-4 text-[#8DAAFF]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#5C729E] font-bold block">GMAIL INBOX</span>
                      <a
                        href={`mailto:${recipientEmail}`}
                        className="text-xs font-bold text-[#0A1329] hover:underline"
                      >
                        {recipientEmail}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={`mailto:${recipientEmail}`}
                    className="flex-1 text-center py-1.5 px-3 rounded-lg bg-[#FFF2C7] hover:bg-white border border-[#ABC5F5] text-xs font-mono text-[#0A1329] font-semibold transition-colors shadow-xs"
                  >
                    Open Mail App
                  </a>
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-3 rounded-lg bg-[#FFF2C7] hover:bg-white border border-[#ABC5F5] text-xs font-mono text-[#0A1329] font-semibold transition-colors inline-flex items-center gap-1 shadow-xs"
                    title="Open in Gmail Web"
                  >
                    <span>Gmail</span>
                    <ExternalLink className="w-3 h-3 text-[#5C729E]" />
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="py-1.5 px-3 rounded-lg bg-[#FFF2C7] hover:bg-white border border-[#ABC5F5] text-xs font-mono text-[#0A1329] font-semibold transition-colors inline-flex items-center gap-1.5 shadow-xs"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#8DAAFF]" /> : <Copy className="w-3.5 h-3.5 text-[#0A1329]" />}
                    <span>{copiedEmail ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href={PORTFOLIO_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#FFF8DF] border border-[#ABC5F5] hover:border-[#8DAAFF] transition-all shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#FFF2C7] text-[#0A1329] border border-[#ABC5F5]">
                    <LinkedinIcon className="w-4 h-4 text-[#8DAAFF]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0A1329] block">
                      LINKEDIN PROFILE
                    </span>
                    <span className="text-[11px] font-mono text-[#5C729E] font-medium">
                      arya-patle-273823320
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#5C729E] group-hover:text-[#0A1329] transition-colors" />
              </a>

              {/* GitHub Card */}
              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#FFF8DF] border border-[#ABC5F5] hover:border-[#8DAAFF] transition-all shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#FFF2C7] text-[#0A1329] border border-[#ABC5F5]">
                    <GithubIcon className="w-4 h-4 text-[#0A1329]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0A1329] block">
                      GITHUB REPOSITORIES
                    </span>
                    <span className="text-[11px] font-mono text-[#5C729E] font-medium">
                      github.com/aryapatle123
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#5C729E] group-hover:text-[#0A1329] transition-colors" />
              </a>

              {/* Instagram Card for bloomi_15 */}
              {PORTFOLIO_DATA.socials.instagram && (
                <a
                  href={PORTFOLIO_DATA.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-[#FFF8DF] border border-[#ABC5F5] hover:border-[#8DAAFF] transition-all shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#FFF2C7] text-[#0A1329] border border-[#ABC5F5]">
                      <InstagramIcon className="w-4 h-4 text-[#8DAAFF]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#0A1329] block">
                        BLOOMI_15 (INSTAGRAM)
                      </span>
                      <span className="text-[11px] font-mono text-[#5C729E] font-medium">
                        instagram.com/bloomii_15
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#5C729E] group-hover:text-[#0A1329] transition-colors" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Inquiry Message Form */}
          <div className="lg:col-span-7 bg-[#FFF2C7] border border-[#ABC5F5] telemetry-bracket rounded-2xl p-7 sm:p-8 shadow-md">
            <div className="flex items-center justify-between gap-2 mb-4 border-b border-[#ABC5F5]/70 pb-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#8DAAFF]" />
                <h3 className="text-base font-bold font-mono text-[#0A1329] uppercase">
                  Direct Message Dispatch
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[#2E4069] bg-[#FFF8DF] px-2.5 py-1 rounded border border-[#ABC5F5] flex items-center gap-1.5 font-bold shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8DAAFF] animate-pulse" />
                <span>SMTP ACTIVE</span>
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-[#2E4069] font-bold block mb-1 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Collaborator or Recruiter"
                    className="w-full rounded-xl bg-[#FFF8DF] border border-[#ABC5F5] p-3 text-sm text-[#0A1329] focus:border-[#8DAAFF] focus:outline-none transition-colors shadow-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-[#2E4069] font-bold block mb-1 uppercase tracking-wider">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="yourname@domain.com"
                    className="w-full rounded-xl bg-[#FFF8DF] border border-[#ABC5F5] p-3 text-sm text-[#0A1329] focus:border-[#8DAAFF] focus:outline-none transition-colors shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-[#2E4069] font-bold block mb-1 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Machine Learning, Internship, or Project inquiry"
                  className="w-full rounded-xl bg-[#FFF8DF] border border-[#ABC5F5] p-3 text-sm text-[#0A1329] focus:border-[#8DAAFF] focus:outline-none transition-colors shadow-xs"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-[#2E4069] font-bold block mb-1 uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Write your note or question here..."
                  className="w-full rounded-xl bg-[#FFF8DF] border border-[#ABC5F5] p-3 text-sm text-[#0A1329] focus:border-[#8DAAFF] focus:outline-none resize-none transition-colors shadow-xs"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-mono uppercase tracking-wider font-bold text-[#0A1329] bg-[#8DAAFF] hover:bg-[#789BFF] shadow-md transition-all active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#0A1329]" />
                    <span>Sending via Gmail SMTP...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="w-4 h-4 text-[#0A1329]" />
                    <span>Dispatched to {recipientEmail}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#0A1329]" />
                    <span>Send Message via Mail Service</span>
                  </>
                )}
              </button>

              {statusMessage && (
                <div className="p-3 rounded-xl bg-[#FFF8DF] border border-[#ABC5F5] text-xs text-[#0A1329] flex items-center gap-2 font-mono shadow-xs">
                  <Sparkles className="w-4 h-4 text-[#8DAAFF] shrink-0" />
                  <span className="font-medium">{statusMessage}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-[11px] text-[#5C729E] pt-1 font-mono">
                <span>Direct delivery to aryapatle2704@gmail.com</span>
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A1329] hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Compose in Gmail Web</span>
                  <ExternalLink className="w-3 h-3 text-[#5C729E]" />
                </a>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
