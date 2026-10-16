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
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center tech-grid-bg border-b border-[#ABC5F5]/60 overflow-hidden bg-[#FFF8DF]">
      {/* Restrained Periwinkle Neural Mesh Canvas */}
      <NeuralCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Bold Presentation */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Telemetry Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#FFF2C7] border border-[#ABC5F5] rounded-none">
              <span className="w-2 h-2 rounded-full bg-[#8DAAFF] animate-pulse" />
              <span className="font-mono text-xs tracking-wider text-[#0A1329] uppercase font-semibold">
                5TH SEMESTER B.TECH // COMPUTER SCIENCE &amp; ENGINEERING
              </span>
            </div>

            {/* Massive Headline in High-Contrast Navy & Cornflower Accent */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#0A1329] uppercase leading-[0.92]">
                ARYA{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A1329] via-[#2E4069] to-[#8DAAFF]">
                  PATLE
                </span>
              </h1>
              <p className="font-mono text-xs sm:text-sm tracking-widest text-[#2E4069] uppercase font-bold pt-1">
                MACHINE LEARNING // NLP // SOFTWARE ENGINEERING
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#8DAAFF] hover:bg-[#789BFF] text-[#0A1329] font-mono text-xs tracking-wider uppercase font-bold transition-all shadow-md inline-flex items-center gap-2 border border-[#8DAAFF] hover:-translate-y-0.5"
              >
                <span>VIEW PROJECTS</span>
                <ArrowDown className="w-4 h-4 text-[#0A1329]" />
              </a>

              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-[#ABC5F5] hover:border-[#8DAAFF] text-[#0A1329] font-mono text-xs tracking-wider uppercase transition-all inline-flex items-center gap-2 bg-[#FFF2C7] hover:bg-white hover:-translate-y-0.5 shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-[#0A1329]" />
                <span>GITHUB</span>
              </a>

              <a
                href={PORTFOLIO_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-[#ABC5F5] hover:border-[#8DAAFF] text-[#0A1329] font-mono text-xs tracking-wider uppercase transition-all inline-flex items-center gap-2 bg-[#FFF2C7] hover:bg-white hover:-translate-y-0.5 shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0A1329]" />
                <span>LINKEDIN</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-3 border border-[#ABC5F5] hover:border-[#8DAAFF] text-[#0A1329] font-mono text-xs tracking-wider uppercase transition-all inline-flex items-center gap-2 bg-[#FFF2C7] hover:bg-white hover:-translate-y-0.5 shadow-sm"
              >
                <Mail className="w-4 h-4 text-[#0A1329]" />
                <span>CONTACT</span>
              </a>
            </div>

          </div>

          {/* Right Column: Architectural Centered Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              <div className="relative rounded-2xl p-3 bg-[#FFF2C7] border border-[#ABC5F5] shadow-xl telemetry-bracket">
                
                {/* Clean, Unobstructed Portrait Photo */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#FFF8DF] border border-[#ABC5F5]/70 group">
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
                  <div className="absolute top-3 left-3 text-[#8DAAFF] font-mono text-[10px] select-none font-bold">+</div>
                  <div className="absolute top-3 right-3 text-[#8DAAFF] font-mono text-[10px] select-none font-bold">+</div>
                </div>

                {/* Info Area Below Photo */}
                <div className="mt-3.5 px-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[#0A1329] font-bold text-lg tracking-tight font-mono">
                        ARYA PATLE
                      </h3>
                      <p className="text-xs text-[#2E4069] font-mono">
                        ML &amp; NLP Practitioner
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-[#0A1329] bg-[#FFF8DF] px-2.5 py-1 rounded border border-[#ABC5F5]">
                      <MapPin className="w-3 h-3 text-[#8DAAFF]" />
                      India
                    </span>
                  </div>

                  <div className="border-t border-[#ABC5F5]/60 pt-2.5 flex items-center justify-between text-xs text-[#2E4069] font-mono">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8DAAFF] inline-block" />
                      <span>OPEN TO TECHNICAL ROLES</span>
                    </span>
                    <span className="text-[11px] text-[#5C729E] font-semibold">
                      B.TECH CSE // SEM V
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 3 Telemetry Summary Brackets */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-12 mt-12 border-t border-[#ABC5F5]/60">
          
          <div className="p-5 bg-[#FFF2C7] border border-[#ABC5F5] telemetry-bracket hover:border-[#8DAAFF] transition-colors shadow-sm">
            <span className="font-mono text-[10px] tracking-wider text-[#5C729E] font-bold uppercase block">
              01 // CORE FOCUS
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0A1329] font-mono mt-2">
              ML &amp; NLP
            </div>
            <div className="text-xs font-bold font-mono text-[#2E4069] uppercase mt-1">
              TEXT &amp; FRAUD CLASSIFICATION
            </div>
            <p className="text-xs text-[#2E4069]/85 mt-2 font-sans leading-relaxed">
              TF-IDF vectorization, Naive Bayes, Logistic Regression, and imbalanced anomaly detection.
            </p>
          </div>

          <div className="p-5 bg-[#FFF2C7] border border-[#ABC5F5] telemetry-bracket hover:border-[#8DAAFF] transition-colors shadow-sm">
            <span className="font-mono text-[10px] tracking-wider text-[#5C729E] font-bold uppercase block">
              02 // INDUSTRY EXPERIENCE
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0A1329] font-mono mt-2">
              CODSOFT
            </div>
            <div className="text-xs font-bold font-mono text-[#2E4069] uppercase mt-1">
              MACHINE LEARNING INTERN
            </div>
            <p className="text-xs text-[#2E4069]/85 mt-2 font-sans leading-relaxed">
              1-Month verified internship delivering preprocessing, model training, evaluation, and .pkl artifacts.
            </p>
          </div>

          <div className="p-5 bg-[#FFF2C7] border border-[#ABC5F5] telemetry-bracket hover:border-[#8DAAFF] transition-colors shadow-sm">
            <span className="font-mono text-[10px] tracking-wider text-[#5C729E] font-bold uppercase block">
              03 // ACADEMIC STANDING
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0A1329] font-mono mt-2">
              5TH SEM
            </div>
            <div className="text-xs font-bold font-mono text-[#2E4069] uppercase mt-1">
              B.TECH CSE (SECTION B)
            </div>
            <p className="text-xs text-[#2E4069]/85 mt-2 font-sans leading-relaxed">
              Algorithms, Database Management Systems, Operating Systems, and Compiler Design.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
