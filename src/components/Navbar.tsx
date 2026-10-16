"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "BLOOMI", href: "#entrepreneurship" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["about", "projects", "skills", "experience", "entrepreneurship", "education", "contact"];
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
          ? "bg-[#FFF8DF]/95 backdrop-blur-md border-b border-[#ABC5F5]/60 shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Architectural Dev Brand */}
          <Link
            href="#home"
            className="flex items-center space-x-3 group focus:outline-none"
          >
            <div className="w-2.5 h-7 bg-[#8DAAFF] transition-transform duration-200 group-hover:scale-y-110" />
            <div>
              <span className="font-mono text-[10px] tracking-widest text-[#5C729E] font-bold block uppercase">
                AP // DEV CONTROL
              </span>
              <span className="font-mono text-sm tracking-tight text-[#0A1329] font-bold block">
                ARYA PATLE
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-1.5 ml-3 pl-3 border-l border-[#ABC5F5]">
              <span className="w-2 h-2 rounded-full bg-[#8DAAFF] animate-pulse inline-block" />
              <span className="font-mono text-[10px] tracking-wider text-[#5C729E] uppercase font-semibold">
                SYS: 5TH SEM
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 font-mono text-xs tracking-wider">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 transition-colors duration-150 border-b-2 ${
                    isActive
                      ? "border-[#8DAAFF] text-[#0A1329] font-bold"
                      : "border-transparent text-[#2E4069] hover:text-[#0A1329] hover:border-[#ABC5F5]"
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wider uppercase px-3 py-1.5 border border-[#ABC5F5] text-[#0A1329] hover:border-[#8DAAFF] transition-colors flex items-center gap-1.5 bg-[#FFF2C7]"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#0A1329]" />
              <span>GITHUB</span>
            </a>

            <a
              href="#contact"
              className="font-mono text-xs tracking-wider uppercase px-4 py-1.5 bg-[#8DAAFF] text-[#0A1329] font-bold hover:bg-[#789BFF] transition-colors flex items-center space-x-1.5 shadow-sm"
            >
              <span>CONTACT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A1329] animate-pulse" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0A1329] border border-[#ABC5F5] bg-[#FFF2C7] hover:border-[#8DAAFF] transition-colors rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-xl bg-[#FFF2C7] border border-[#ABC5F5] shadow-lg space-y-2 font-mono text-xs">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-[#0A1329] hover:bg-[#FFF8DF] rounded transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

      </div>
    </header>
  );
}
