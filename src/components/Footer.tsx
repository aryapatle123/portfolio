"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Terminal, Mail } from "lucide-react";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import InstagramIcon from "./InstagramIcon";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-[#ABC5F5]/60 bg-[#FFF8DF] py-12 text-[#2E4069]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FFF2C7] border border-[#ABC5F5] flex items-center justify-center text-[#0A1329] shadow-sm">
              <Terminal className="w-4 h-4 text-[#0A1329]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0A1329]">
                {PORTFOLIO_DATA.personal.name}
              </p>
              <p className="text-xs text-[#5C729E] font-mono">
                Computer Science & Machine Learning Portfolio
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#2E4069]">
            <a href="#about" className="hover:text-[#0A1329] hover:underline underline-offset-4 transition-colors">About</a>
            <a href="#projects" className="hover:text-[#0A1329] hover:underline underline-offset-4 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#0A1329] hover:underline underline-offset-4 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-[#0A1329] hover:underline underline-offset-4 transition-colors">Experience</a>
            <a href="#education" className="hover:text-[#0A1329] hover:underline underline-offset-4 transition-colors">Education</a>
            <a href="#activity" className="hover:text-[#0A1329] hover:underline underline-offset-4 transition-colors">Activity</a>
            <a href="#contact" className="hover:text-[#0A1329] hover:underline underline-offset-4 transition-colors">Contact</a>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PORTFOLIO_DATA.socials.email}`}
              className="p-2 rounded-lg bg-[#FFF2C7] border border-[#ABC5F5] text-[#0A1329] hover:bg-[#8DAAFF] hover:border-[#8DAAFF] transition-all shadow-sm"
              aria-label="Email Arya Patle"
              title="Email Arya Patle"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#FFF2C7] border border-[#ABC5F5] text-[#0A1329] hover:bg-[#8DAAFF] hover:border-[#8DAAFF] transition-all shadow-sm"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0A1329]" />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#FFF2C7] border border-[#ABC5F5] text-[#0A1329] hover:bg-[#8DAAFF] hover:border-[#8DAAFF] transition-all shadow-sm"
              aria-label="GitHub Repository"
              title="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4 text-[#0A1329]" />
            </a>

            {PORTFOLIO_DATA.socials.instagram && (
              <a
                href={PORTFOLIO_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#FFF2C7] border border-[#ABC5F5] text-[#0A1329] hover:bg-[#8DAAFF] hover:border-[#8DAAFF] transition-all shadow-sm"
                aria-label="bloomi_15 on Instagram"
                title="bloomi_15 on Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-[#0A1329]" />
              </a>
            )}

            <a
              href="#home"
              className="p-2 rounded-lg bg-[#FFF2C7] border border-[#ABC5F5] text-[#0A1329] hover:bg-[#8DAAFF] hover:border-[#8DAAFF] transition-all shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 pt-6 border-t border-[#ABC5F5]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5C729E] font-mono">
          <p>© {currentYear} {PORTFOLIO_DATA.personal.name}. Verified projects & implementations.</p>
          <p>Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
