"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowDown, Mail, MapPin, Terminal, ExternalLink, ArrowUpRight } from "lucide-react";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import NeuralCanvas from "./NeuralCanvas";

export default function Hero() {
  const [imgSrc, setImgSrc] = useState<string>("/profile.jpg");

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center tech-grid-bg border-b border-[#1C3670]/40 overflow-hidden bg-[#000133]">
      {/* Restrained Neural Mesh Canvas */}
      <NeuralCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Bold, High-Impact Engineering Presentation */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Telemetry Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#051540] border border-[#1C3670]">
              <span className="w-2 h-2 rounded-full bg-[#FCF1D1] animate-pulse" />
              <span className="font-mono text-xs tracking-wider text-[#FCF1D1] uppercase font-semibold">
                5TH SEMESTER B.TECH // COMPUTER SCIENCE &amp; ENGINEERING
              </span>
            </div>

            {/* Massive Sparsh-style Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#FCF1D1] uppercase leading-[0.92]">
                ARYA{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCF1D1] via-[#F5E6BD] to-[#FCF1D1]/60">
                  PATLE
                </span>
              </h1>
              <p className="font-mono text-xs sm:text-sm tracking-widest text-[#FCF1D1] uppercase font-bold pt-1">
                MACHINE LEARNING // NLP // SOFTWARE ENGINEERING
              </p>
            </div>



            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#FCF1D1] hover:bg-[#F5E6BD] text-[#000133] font-mono text-xs tracking-wider uppercase font-bold transition-all shadow-md inline-flex items-center gap-2 border border-[#FCF1D1] hover:-translate-y-0.5"
              >
                <span>VIEW PROJECTS</span>
                <ArrowDown className="w-4 h-4 text-[#000133]" />
              </a>

              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-[#1C3670] hover:border-[#FCF1D1]/60 text-[#FCF1D1] font-mono text-xs tracking-wider uppercase transition-all inline-flex items-center gap-2 bg-[#051540] hover:bg-[#071D57] hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4 text-[#FCF1D1]" />
                <span>GITHUB</span>
              </a>

              <a
                href={PORTFOLIO_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-[#1C3670] hover:border-[#FCF1D1]/60 text-[#FCF1D1] font-mono text-xs tracking-wider uppercase transition-all inline-flex items-center gap-2 bg-[#051540] hover:bg-[#071D57] hover:-translate-y-0.5"
              >
                <LinkedinIcon className="w-4 h-4 text-[#FCF1D1]" />
                <span>LINKEDIN</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-3 border border-[#1C3670] hover:border-[#FCF1D1]/60 text-[#FCF1D1] font-mono text-xs tracking-wider uppercase transition-all inline-flex items-center gap-2 bg-[#051540] hover:bg-[#071D57] hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-[#FCF1D1]" />
                <span>CONTACT</span>
              </a>
            </div>

          </div>

          {/* Right Column: Architectural Centered Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              <div className="relative rounded-2xl p-3 bg-[#051540] border border-[#1C3670] shadow-2xl telemetry-bracket">
                
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
                  <div className="absolute top-3 left-3 text-[#FCF1D1]/50 font-mono text-[10px] select-none">+</div>
                  <div className="absolute top-3 right-3 text-[#FCF1D1]/50 font-mono text-[10px] select-none">+</div>
                </div>

                {/* Info & Caption Area Below Photo */}
                <div className="mt-3.5 px-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[#FCF1D1] font-semibold text-lg tracking-tight font-mono">
                        ARYA PATLE
                      </h3>
                      <p className="text-xs text-[#FCF1D1]/75 font-mono">
                        ML &amp; NLP Practitioner
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-[#FCF1D1] bg-[#000133] px-2.5 py-1 rounded border border-[#1C3670]">
                      <MapPin className="w-3 h-3 text-[#FCF1D1]" />
                      India
                    </span>
                  </div>

                  <div className="border-t border-[#1C3670]/50 pt-2.5 flex items-center justify-between text-xs text-[#FCF1D1]/70 font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FCF1D1] inline-block" />
                      <span>OPEN TO TECHNICAL ROLES</span>
                    </span>
                    <span className="text-[11px] text-[#FCF1D1]/60 font-medium">
                      B.TECH CSE // SEM V
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 3 Telemetry Summary Brackets (Inspired by Sparsh Goswami's Telemetry Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-12 mt-12 border-t border-[#1C3670]/60">
          
          <div className="p-5 bg-[#051540] border border-[#1C3670] telemetry-bracket hover:border-[#FCF1D1]/50 transition-colors">
            <span className="font-mono text-[10px] tracking-wider text-[#FCF1D1] font-bold uppercase block">
              01 // CORE FOCUS
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FCF1D1] font-mono mt-2">
              ML &amp; NLP
            </div>
            <div className="text-xs font-bold font-mono text-[#FCF1D1]/90 uppercase mt-1">
              TEXT &amp; FRAUD CLASSIFICATION
            </div>
            <p className="text-xs text-[#FCF1D1]/70 mt-2 font-sans leading-relaxed">
              TF-IDF vectorization, Naive Bayes, Logistic Regression, and imbalanced anomaly detection.
            </p>
          </div>

          <div className="p-5 bg-[#051540] border border-[#1C3670] telemetry-bracket hover:border-[#FCF1D1]/50 transition-colors">
            <span className="font-mono text-[10px] tracking-wider text-[#FCF1D1] font-bold uppercase block">
              02 // INDUSTRY EXPERIENCE
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FCF1D1] font-mono mt-2">
              CODSOFT
            </div>
            <div className="text-xs font-bold font-mono text-[#FCF1D1]/90 uppercase mt-1">
              MACHINE LEARNING INTERN
            </div>
            <p className="text-xs text-[#FCF1D1]/70 mt-2 font-sans leading-relaxed">
              1-Month verified internship delivering preprocessing, model training, evaluation, and .pkl artifacts.
            </p>
          </div>

          <div className="p-5 bg-[#051540] border border-[#1C3670] telemetry-bracket hover:border-[#FCF1D1]/50 transition-colors">
            <span className="font-mono text-[10px] tracking-wider text-[#FCF1D1] font-bold uppercase block">
              03 // ACADEMIC STANDING
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FCF1D1] font-mono mt-2">
              5TH SEM
            </div>
            <div className="text-xs font-bold font-mono text-[#FCF1D1]/90 uppercase mt-1">
              B.TECH CSE (SECTION B)
            </div>
            <p className="text-xs text-[#FCF1D1]/70 mt-2 font-sans leading-relaxed">
              Algorithms, Database Management Systems, Operating Systems, and Compiler Design.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
