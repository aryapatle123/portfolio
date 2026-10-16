"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import NeuralCanvas from "./NeuralCanvas";

export default function Hero() {
  const [imgSrc, setImgSrc] = useState<string>("/profile.jpg");

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#000133]">
      {/* Restrained Neural Mesh Canvas */}
      <NeuralCanvas />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Bio & Headline */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Status / Role Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#051540] border border-[#1C3670] text-xs font-mono tracking-wide text-[#FCF1D1]">
              <span className="w-2 h-2 rounded-full bg-[#FCF1D1]" />
              <span>B.Tech Computer Science & Engineering • 5th Semester</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <p className="text-[#FCF1D1]/65 text-sm font-medium tracking-wide">
                Hi, I am <span className="text-[#FCF1D1] font-semibold">{PORTFOLIO_DATA.personal.name}</span>
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#FCF1D1] leading-[1.12]">
                Building intelligent software with{" "}
                <span className="text-[#FCF1D1] underline decoration-[#1C3670] decoration-2 underline-offset-8">
                  Python & Machine Learning
                </span>
                .
              </h1>
            </div>

            {/* Subtitle / Focus Statement */}
            <p className="text-base sm:text-lg text-[#FCF1D1]/75 max-w-2xl font-light leading-relaxed">
              {PORTFOLIO_DATA.personal.subheadline}
            </p>

            {/* Action Buttons: Featured Work, LinkedIn, Email, GitHub */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#000133] bg-[#FCF1D1] hover:bg-[#F5E6BD] shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View Featured Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-[#FCF1D1] bg-[#051540] border border-[#1C3670] hover:border-[#FCF1D1]/50 hover:bg-[#071D57] transition-all duration-200 hover:-translate-y-0.5"
              >
                <LinkedinIcon className="w-4 h-4 text-[#FCF1D1]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.socials.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-[#FCF1D1] bg-[#051540] border border-[#1C3670] hover:border-[#FCF1D1]/50 hover:bg-[#071D57] transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-[#FCF1D1]" />
                <span>Email</span>
              </a>

              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-[#FCF1D1] bg-[#051540] border border-[#1C3670] hover:border-[#FCF1D1]/50 hover:bg-[#071D57] transition-all duration-200 hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4 text-[#FCF1D1]" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Architectural Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              <div className="relative rounded-2xl p-3 bg-[#051540] border border-[#1C3670] shadow-2xl">
                
                {/* Clean, Unobstructed Portrait Photo */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#000133] border border-[#1C3670]/60 group">
                  <Image
                    src={imgSrc}
                    alt="Arya Patle - Developer Portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={() => setImgSrc("/default-avatar.svg")}
                  />

                  {/* Corner Architectural Crosshairs */}
                  <div className="absolute top-3 left-3 text-[#FCF1D1]/40 font-mono text-[10px] select-none">+</div>
                  <div className="absolute top-3 right-3 text-[#FCF1D1]/40 font-mono text-[10px] select-none">+</div>
                </div>

                {/* Info & Caption Area Below Photo - Face remains 100% visible and unblocked */}
                <div className="mt-3.5 px-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[#FCF1D1] font-semibold text-lg tracking-tight">
                        Arya Patle
                      </h3>
                      <p className="text-xs text-[#FCF1D1]/75 font-light">
                        Machine Learning & NLP Practitioner
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-[#FCF1D1] bg-[#000133] px-2.5 py-1 rounded-md border border-[#1C3670]">
                      <MapPin className="w-3 h-3 text-[#FCF1D1]" />
                      India
                    </span>
                  </div>

                  <div className="border-t border-[#1C3670]/50 pt-2.5 flex items-center justify-between text-xs text-[#FCF1D1]/70 font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FCF1D1] inline-block" />
                      <span>Open to Technical Roles</span>
                    </span>
                    <span className="text-[11px] text-[#FCF1D1]/55 font-medium">
                      B.Tech CSE • Semester V
                    </span>
                  </div>
                </div>

              </div>

              {/* Decorative subtle border frame */}
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl border border-[#1C3670]/40 -z-10 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
