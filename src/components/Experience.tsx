import React from "react";
import { CheckCircle2, Calendar, Building, ArrowUpRight } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-[#ABC5F5]/60 bg-[#FFF8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-2 h-6 bg-[#8DAAFF]" />
              <span className="font-mono text-xs tracking-widest text-[#2E4069] uppercase font-bold">
                EXPERIENCE LOG
              </span>
              <span className="font-mono text-xs text-[#5C729E] uppercase font-semibold">
                INDUSTRY CONTRIBUTIONS &amp; INTERNSHIP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1329]">
              Work Experience
            </h2>
          </div>
        </div>

        {/* Timeline / Editorial Card */}
        <div className="max-w-4xl mx-auto">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <div
              key={index}
              className="bg-[#FFF2C7] border border-[#ABC5F5] rounded-2xl p-6 sm:p-9 relative overflow-hidden telemetry-bracket space-y-6 shadow-md"
            >
              {/* Top Row: Role & Organization */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ABC5F5]/70 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="p-1.5 rounded-lg bg-[#FFF8DF] text-[#0A1329] border border-[#ABC5F5]">
                      <Building className="w-4 h-4 text-[#8DAAFF]" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A1329] tracking-tight">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-[#0A1329] font-medium text-sm flex items-center gap-2">
                    <span className="font-semibold">{exp.organization}</span>
                    <span className="text-[#ABC5F5]">•</span>
                    <span className="text-[#5C729E] font-mono text-xs font-semibold">{exp.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#0A1329] bg-[#FFF8DF] px-3.5 py-1.5 rounded-lg border border-[#ABC5F5] w-fit shadow-xs">
                  <Calendar className="w-3.5 h-3.5 text-[#8DAAFF]" />
                  <span>Duration: {exp.duration}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#2E4069] text-sm sm:text-base leading-relaxed font-light">
                {exp.description}
              </p>

              {/* Key Deliverables & Contributions */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#5C729E] font-bold block">
                  ENGINEERING DELIVERABLES &amp; RESPONSIBILITIES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {exp.keyContributions.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFF8DF] border border-[#ABC5F5]/70 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#8DAAFF] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#2E4069] leading-normal font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Links */}
              {(exp.verifiedRepo || PORTFOLIO_DATA.socials.github) && (
                <div className="pt-4 border-t border-[#ABC5F5]/70 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#5C729E] font-semibold">Verified Repository Artifacts</span>
                  <a
                    href={exp.verifiedRepo || PORTFOLIO_DATA.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFF8DF] border border-[#ABC5F5] text-[#0A1329] font-bold hover:border-[#8DAAFF] transition-colors shadow-xs"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#0A1329]" />
                    <span>INSPECT REPO</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#5C729E]" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
