"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["about", "projects", "skills", "experience", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#000133]/92 backdrop-blur-md border-b border-[#1C3670]/40 shadow-lg shadow-black/30 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Personal Brand */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 text-[#FCF1D1] group transition-opacity hover:opacity-90"
          >
            <div className="w-8 h-8 rounded-lg bg-[#051540] border border-[#1C3670] flex items-center justify-center text-[#FCF1D1] group-hover:border-[#FCF1D1]/60 transition-colors">
              <Terminal className="w-4 h-4 text-[#FCF1D1]" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-[#FCF1D1]">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#FCF1D1]/60">
                Machine Learning & Python
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-[#051540]/80 p-1 rounded-full border border-[#1C3670]/60 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#1C3670] text-[#FCF1D1] font-semibold border border-[#FCF1D1]/20 shadow-sm"
                      : "text-[#FCF1D1]/70 hover:text-[#FCF1D1] hover:bg-[#1C3670]/30"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Verified Repository & Social Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PORTFOLIO_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-[#FCF1D1] bg-[#051540] hover:bg-[#071D57] border border-[#1C3670] hover:border-[#FCF1D1]/40 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#FCF1D1]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-[#FCF1D1] bg-[#051540] hover:bg-[#071D57] border border-[#1C3670] hover:border-[#FCF1D1]/40 transition-all"
              aria-label="Verified GitHub Repository"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#FCF1D1]" />
              <span>CODESOFT</span>
              <ArrowUpRight className="w-3 h-3 text-[#FCF1D1]/60" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#000133] bg-[#FCF1D1] hover:bg-[#F5E6BD] shadow-sm transition-all"
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#051540] border border-[#1C3670] text-[#FCF1D1] hover:bg-[#1C3670]/40 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#051540] border border-[#1C3670] shadow-xl space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-[#FCF1D1]/80 hover:text-[#FCF1D1] hover:bg-[#1C3670]/30 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#1C3670]/40 flex flex-col gap-2">
              <a
                href={PORTFOLIO_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 p-2.5 rounded-lg text-xs font-mono text-[#FCF1D1] bg-[#000133] border border-[#1C3670]"
              >
                <LinkedinIcon className="w-4 h-4 text-[#FCF1D1]" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 p-2.5 rounded-lg text-xs font-mono text-[#FCF1D1] bg-[#000133] border border-[#1C3670]"
              >
                <GithubIcon className="w-4 h-4 text-[#FCF1D1]" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
