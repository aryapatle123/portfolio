"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, ArrowUpRight, Send, Check, Copy } from "lucide-react";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import InstagramIcon from "./InstagramIcon";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.message.trim()) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", subject: "", message: "" });
    }, 4500);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-[#1C3670]/40 bg-[#000133]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="badge-pill mb-3">
              <Mail className="w-3.5 h-3.5 text-[#FCF1D1]" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FCF1D1]">
              Contact & Connections
            </h2>
            <p className="text-[#FCF1D1]/65 mt-2 text-sm sm:text-base">
              Verified communication channels, professional profiles, and direct email.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Verified Profiles */}
          <div className="lg:col-span-5 editorial-card rounded-2xl p-7 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#FCF1D1] mb-1">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-[#FCF1D1]/65 leading-relaxed">
                Connect via LinkedIn, send an email, explore my GitHub repositories, or visit my creative craft venture.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {/* Email Card */}
              <div className="p-3.5 rounded-xl bg-[#000133] border border-[#1C3670] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#051540] text-[#FCF1D1] border border-[#1C3670]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-[#FCF1D1]/60 block">Email Address</span>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.socials.email}`}
                        className="text-xs font-semibold text-[#FCF1D1] hover:underline"
                      >
                        {PORTFOLIO_DATA.socials.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.socials.email}`}
                    className="flex-1 text-center py-1.5 px-3 rounded-lg bg-[#051540] hover:bg-[#071D57] border border-[#1C3670] text-xs font-mono text-[#FCF1D1] transition-colors"
                  >
                    Open Mail App
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="py-1.5 px-3 rounded-lg bg-[#051540] hover:bg-[#071D57] border border-[#1C3670] text-xs font-mono text-[#FCF1D1] transition-colors inline-flex items-center gap-1.5"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#FCF1D1]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href={PORTFOLIO_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#000133] border border-[#1C3670] hover:border-[#FCF1D1]/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#051540] text-[#FCF1D1] border border-[#1C3670]">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#FCF1D1] block">
                      LinkedIn Profile
                    </span>
                    <span className="text-xs font-mono text-[#FCF1D1]/60">
                      arya-patle-273823320
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#FCF1D1]/60 group-hover:text-[#FCF1D1] transition-colors" />
              </a>

              {/* GitHub Card */}
              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#000133] border border-[#1C3670] hover:border-[#FCF1D1]/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#051540] text-[#FCF1D1] border border-[#1C3670]">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#FCF1D1] block">
                      GitHub Repositories
                    </span>
                    <span className="text-xs font-mono text-[#FCF1D1]/60">
                      github.com/aryapatle123
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#FCF1D1]/60 group-hover:text-[#FCF1D1] transition-colors" />
              </a>

              {/* Instagram Card for bloomi_15 */}
              {PORTFOLIO_DATA.socials.instagram && (
                <a
                  href={PORTFOLIO_DATA.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-[#000133] border border-[#1C3670] hover:border-[#FCF1D1]/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#051540] text-[#FCF1D1] border border-[#1C3670]">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#FCF1D1] block">
                        bloomi_15 (Craft Venture)
                      </span>
                      <span className="text-xs font-mono text-[#FCF1D1]/60">
                        instagram.com/bloomii_15
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#FCF1D1]/60 group-hover:text-[#FCF1D1] transition-colors" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Inquiry Message Form */}
          <div className="lg:col-span-7 editorial-card rounded-2xl p-7 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-4 h-4 text-[#FCF1D1]" />
              <h3 className="text-lg font-semibold text-[#FCF1D1]">
                Send a Message or Project Inquiry
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-[#FCF1D1]/80">Your Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Collaborator or Recruiter"
                  className="w-full rounded-xl bg-[#000133] border border-[#1C3670] p-3 text-sm text-[#FCF1D1] focus:border-[#FCF1D1] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[#FCF1D1]/80">Subject</label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Machine Learning, Internship, or Project inquiry"
                  className="w-full rounded-xl bg-[#000133] border border-[#1C3670] p-3 text-sm text-[#FCF1D1] focus:border-[#FCF1D1] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[#FCF1D1]/80">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Write your note or question here..."
                  className="w-full rounded-xl bg-[#000133] border border-[#1C3670] p-3 text-sm text-[#FCF1D1] focus:border-[#FCF1D1] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-[#000133] bg-[#FCF1D1] hover:bg-[#F5E6BD] shadow-md transition-all active:scale-[0.99]"
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-4 h-4 text-[#000133]" />
                    <span>Message Registered Locally</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#000133]" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
