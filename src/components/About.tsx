import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#000133] border-b border-[#1C3670]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Sparsh-style Architectural Accent */}
        <div className="flex items-center space-x-3 mb-8">
          <span className="w-2 h-6 bg-[#FCF1D1]" />
          <span className="font-mono text-xs tracking-widest text-[#FCF1D1] uppercase font-bold">
            ABOUT ME
          </span>
          <span className="font-mono text-xs text-[#FCF1D1]/60 uppercase">
            ENGINEERING PROFILE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Focused Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FCF1D1]">
              Building intelligent systems, not just code.
            </h2>

            <div className="space-y-4 text-[#FCF1D1]/80 text-base sm:text-lg leading-relaxed font-light">
              <p>
                I am a Computer Science student focused on machine learning, natural language processing, and practical software development. I specialize in building data pipelines, NLP text classification models, and anomaly detection algorithms designed to solve concrete operational problems.
              </p>
              <p>
                Through academic projects and an industry internship at CodSoft, I have engineered TF-IDF feature extraction pipelines, trained Naive Bayes and Logistic Regression classifiers, tackled severe minority-class imbalance in credit card fraud detection, and serialized model artifacts for deployment.
              </p>
              <p>
                Alongside engineering, I independently founded bloomi_15, a small handmade floral craft venture where I balance creative artisan design with real-world execution, client communication, and order fulfillment.
              </p>
            </div>

            <div className="p-4 bg-[#051540] border border-[#1C3670] flex flex-col sm:flex-row justify-between gap-4 font-mono text-xs">
              <div>
                <span className="text-[#FCF1D1]/60 block uppercase">DEGREE PROGRAM</span>
                <span className="text-[#FCF1D1] font-semibold block mt-0.5">
                  B.Tech in Computer Science and Engineering
                </span>
              </div>
              <div>
                <span className="text-[#FCF1D1]/60 block uppercase">ACADEMIC STATUS</span>
                <span className="text-[#FCF1D1] font-semibold block mt-0.5">
                  5th Semester // Section B
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Telemetry Metrics & Operational Status */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-[#1C3670] bg-[#051540] p-6 telemetry-bracket">
              
              <div className="flex items-center justify-between border-b border-[#1C3670] pb-3 mb-6 font-mono text-xs text-[#FCF1D1]/70">
                <span className="text-[#FCF1D1] font-bold">HIGHLIGHTS &amp; METRICS</span>
                <span>STATUS: ACTIVE</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#000133] border border-[#1C3670]">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#FCF1D1] block">
                    03+
                  </span>
                  <span className="font-mono text-[11px] tracking-wider text-[#FCF1D1] uppercase font-bold mt-1 block">
                    ML SYSTEMS
                  </span>
                  <span className="text-[11px] text-[#FCF1D1]/60 block mt-1">
                    NLP, Anomaly, Classification
                  </span>
                </div>

                <div className="p-4 bg-[#000133] border border-[#1C3670]">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#FCF1D1] block">
                    01
                  </span>
                  <span className="font-mono text-[11px] tracking-wider text-[#FCF1D1] uppercase font-bold mt-1 block">
                    INTERNSHIP
                  </span>
                  <span className="text-[11px] text-[#FCF1D1]/60 block mt-1">
                    CodSoft Machine Learning
                  </span>
                </div>

                <div className="p-4 bg-[#000133] border border-[#1C3670]">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#FCF1D1] block">
                    5TH
                  </span>
                  <span className="font-mono text-[11px] tracking-wider text-[#FCF1D1] uppercase font-bold mt-1 block">
                    SEMESTER
                  </span>
                  <span className="text-[11px] text-[#FCF1D1]/60 block mt-1">
                    Undergraduate B.Tech CSE
                  </span>
                </div>

                <div className="p-4 bg-[#000133] border border-[#1C3670]">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#FCF1D1] block">
                    01
                  </span>
                  <span className="font-mono text-[11px] tracking-wider text-[#FCF1D1] uppercase font-bold mt-1 block">
                    STARTUP
                  </span>
                  <span className="text-[11px] text-[#FCF1D1]/60 block mt-1">
                    bloomi_15 Craft Venture
                  </span>
                </div>
              </div>

              {/* Operational Status Checklist */}
              <div className="mt-6 pt-4 border-t border-[#1C3670] space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between text-[#FCF1D1]/70">
                  <span>MACHINE LEARNING &amp; NLP PIPELINES</span>
                  <span className="text-[#FCF1D1] font-semibold">OPERATIONAL</span>
                </div>
                <div className="flex items-center justify-between text-[#FCF1D1]/70">
                  <span>FEATURE EXTRACTION &amp; TF-IDF</span>
                  <span className="text-[#FCF1D1] font-semibold">OPERATIONAL</span>
                </div>
                <div className="flex items-center justify-between text-[#FCF1D1]/70">
                  <span>DATA WRANGLING &amp; PYTHON</span>
                  <span className="text-[#FCF1D1] font-semibold">OPERATIONAL</span>
                </div>
                <div className="flex items-center justify-between text-[#FCF1D1]/70">
                  <span>MODEL EVALUATION &amp; SERIALIZATION</span>
                  <span className="text-[#FCF1D1] font-semibold">OPERATIONAL</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
