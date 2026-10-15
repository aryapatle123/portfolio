"use client";

import React, { useState } from "react";
import { Mail, Send, MessageSquare, Check, Copy, ArrowUpRight, ShieldCheck } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    // Copies message content formatted for Arya
    const textToCopy = `Hi Arya,\n\nName: ${formData.name}\nSubject: ${formData.subject || "Project / Opportunity"}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.06] bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="badge-pill mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Connect with Arya Patle
          </h2>
          <p className="text-zinc-400 mt-2 text-sm sm:text-base">
            Open to technical discussions, internships, machine learning research projects, and software collaborations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Verified Social & Channels Card */}
          <div className="md:col-span-5 space-y-4">
            <div className="editorial-card rounded-2xl p-6 border border-white/[0.08] space-y-4">
              <h3 className="text-base font-semibold text-white tracking-tight">
                Verified Channels
              </h3>
              
              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-white block">
                      GitHub Repositories
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      aryapatle123 / CODESOFT
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Privacy & Authenticity</span>
                </div>
                <p className="leading-relaxed">
                  Additional contact links (LinkedIn, institutional email, resume) will be linked once verified. You can update them anytime in <code className="text-emerald-300 font-mono text-[11px]">portfolioData.ts</code>.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="editorial-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-4"
            >
              <h3 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Send a Message</span>
              </h3>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-300">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Johnson"
                  className="w-full rounded-xl bg-black/50 border border-white/10 p-3 text-sm text-zinc-100 focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-300">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Internship Opportunity / Collaboration"
                  className="w-full rounded-xl bg-black/50 border border-white/10 p-3 text-sm text-zinc-100 focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-300">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note or project inquiry here..."
                  className="w-full rounded-xl bg-black/50 border border-white/10 p-3 text-sm text-zinc-100 focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-emerald-500/20"
              >
                <Send className="w-4 h-4" />
                <span>Prepare & Copy Message</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Message copied to your clipboard! Ready to send to Arya Patle.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
