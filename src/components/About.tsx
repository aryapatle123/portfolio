import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FFF8DF] border-b border-[#ABC5F5]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Architectural Accent */}
        <div className="flex items-center space-x-3 mb-8">
          <span className="w-2 h-6 bg-[#8DAAFF]" />
          <span className="font-mono text-xs tracking-widest text-[#2E4069] uppercase font-bold">
            ABOUT ME
          </span>
          <span className="font-mono text-xs text-[#5C729E] uppercase font-semibold">
            ENGINEERING PROFILE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Focused Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A1329]">
              Building intelligent systems, not just code.
            </h2>

            <div className="space-y-4 text-[#2E4069] text-base sm:text-lg leading-relaxed font-light">
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

            <div className="p-4 bg-[#FFF2C7] border border-[#ABC5F5] flex flex-col sm:flex-row justify-between gap-4 font-mono text-xs rounded-xl shadow-sm">
              <div>
                <span className="text-[#5C729E] block uppercase font-semibold">DEGREE PROGRAM</span>
                <span className="text-[#0A1329] font-bold block mt-0.5">
                  B.Tech in Computer Science and Engineering
                </span>
              </div>
              <div>
                <span className="text-[#5C729E] block uppercase font-semibold">ACADEMIC STATUS</span>
                <span className="text-[#0A1329] font-bold block mt-0.5">
                  5th Semester // Section B
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Telemetry Metrics & Operational Status */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-[#ABC5F5] bg-[#FFF2C7] p-6 telemetry-bracket rounded-2xl shadow-md">
              
              <div className="flex items-center justify-between border-b border-[#ABC5F5]/70 pb-3 mb-6 font-mono text-xs text-[#2E4069]">
                <span className="text-[#0A1329] font-bold">HIGHLIGHTS &amp; METRICS</span>
                <span className="text-[#5C729E] font-semibold">STATUS: ACTIVE</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#FFF8DF] border border-[#ABC5F5] rounded-xl">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#0A1329] block">
                    03+
                  </span>
                  <span className="font-mono text-[11px] tracking-wider text-[#2E4069] uppercase font-bold mt-1 block">
                    ML SYSTEMS
                  </span>
                  <span className="text-[11px] text-[#5C729E] block mt-1">
                    NLP, Anomaly, Classification
                  </span>
                </div>

                <div className="p-4 bg-[#FFF8DF] border border-[#ABC5F5] rounded-xl">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#0A1329] block">
                    01
                  </span>
                  <span className="font-mono text-[11px] tracking-wider text-[#2E4069] uppercase font-bold mt-1 block">
                    INTERNSHIP
                  </span>
                  <span className="text-[11px] text-[#5C729E] block mt-1">
                    CodSoft Machine Learning
                  </span>
                </div>

                <div className="p-4 bg-[#FFF8DF] border border-[#ABC5F5] rounded-xl">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#0A1329] block">
                    5TH
                  </span>
                  <span className="font-mono text-[11px] tracking-wider text-[#2E4069] uppercase font-bold mt-1 block">
                    SEMESTER
                  </span>
                  <span className="text-[11px] text-[#5C729E] block mt-1">
                    Undergraduate B.Tech CSE
                  </span>
                </div>

                <div className="p-4 bg-[#FFF8DF] border border-[#ABC5F5] rounded-xl">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#0A1329] block">
                    01
                  </span>
                  <span className="font-mono text-[11px] tracking-wider text-[#2E4069] uppercase font-bold mt-1 block">
                    STARTUP
                  </span>
                  <span className="text-[11px] text-[#5C729E] block mt-1">
                    bloomi_15 Craft Venture
                  </span>
                </div>
              </div>

              {/* Operational Status Checklist */}
              <div className="mt-6 pt-4 border-t border-[#ABC5F5]/70 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between text-[#2E4069]">
                  <span>MACHINE LEARNING &amp; NLP PIPELINES</span>
                  <span className="text-[#0A1329] font-bold">OPERATIONAL</span>
                </div>
                <div className="flex items-center justify-between text-[#2E4069]">
                  <span>FEATURE EXTRACTION &amp; TF-IDF</span>
                  <span className="text-[#0A1329] font-bold">OPERATIONAL</span>
                </div>
                <div className="flex items-center justify-between text-[#2E4069]">
                  <span>DATA WRANGLING &amp; PYTHON</span>
                  <span className="text-[#0A1329] font-bold">OPERATIONAL</span>
                </div>
                <div className="flex items-center justify-between text-[#2E4069]">
                  <span>MODEL EVALUATION &amp; SERIALIZATION</span>
                  <span className="text-[#0A1329] font-bold">OPERATIONAL</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
