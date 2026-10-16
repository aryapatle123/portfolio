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
    <footer className="border-t border-[#1C3670]/40 bg-[#000133] py-12 text-[#FCF1D1]/65">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#051540] border border-[#1C3670] flex items-center justify-center text-[#FCF1D1]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#FCF1D1]">
                {PORTFOLIO_DATA.personal.name}
              </p>
              <p className="text-xs text-[#FCF1D1]/50 font-mono">
                Computer Science & Machine Learning Portfolio
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#FCF1D1]/70">
            <a href="#about" className="hover:text-[#FCF1D1] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#FCF1D1] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#FCF1D1] transition-colors">Skills</a>
            <a href="#experience" className="hover:text-[#FCF1D1] transition-colors">Experience</a>
            <a href="#education" className="hover:text-[#FCF1D1] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#FCF1D1] transition-colors">Contact</a>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PORTFOLIO_DATA.socials.email}`}
              className="p-2 rounded-lg bg-[#051540] border border-[#1C3670] text-[#FCF1D1] hover:border-[#FCF1D1]/50 transition-all"
              aria-label="Email Arya Patle"
              title="Email Arya Patle"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#051540] border border-[#1C3670] text-[#FCF1D1] hover:border-[#FCF1D1]/50 transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-[#FCF1D1]" />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#051540] border border-[#1C3670] text-[#FCF1D1] hover:border-[#FCF1D1]/50 transition-all"
              aria-label="GitHub Repository"
              title="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4 text-[#FCF1D1]" />
            </a>

            {PORTFOLIO_DATA.socials.instagram && (
              <a
                href={PORTFOLIO_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#051540] border border-[#1C3670] text-[#FCF1D1] hover:border-[#FCF1D1]/50 transition-all"
                aria-label="bloomi_15 on Instagram"
                title="bloomi_15 on Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-[#FCF1D1]" />
              </a>
            )}

            <a
              href="#home"
              className="p-2 rounded-lg bg-[#051540] border border-[#1C3670] text-[#FCF1D1] hover:border-[#FCF1D1]/50 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 pt-6 border-t border-[#1C3670]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FCF1D1]/45 font-mono">
          <p>© {currentYear} {PORTFOLIO_DATA.personal.name}. Verified projects & implementations.</p>
          <p>Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
