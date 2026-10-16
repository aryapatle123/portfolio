import React from "react";
import { CheckCircle2, Calendar, Building, ArrowUpRight } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-[#1C3670]/40 bg-[#000133]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Sparsh Accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-2 h-6 bg-[#FCF1D1]" />
              <span className="font-mono text-xs tracking-widest text-[#FCF1D1] uppercase font-bold">
                EXPERIENCE LOG
              </span>
              <span className="font-mono text-xs text-[#FCF1D1]/60 uppercase">
                INDUSTRY CONTRIBUTIONS &amp; INTERNSHIP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FCF1D1]">
              Work Experience
            </h2>
          </div>
        </div>

        {/* Timeline / Editorial Card */}
        <div className="max-w-4xl mx-auto">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <div
              key={index}
              className="bg-[#051540] border border-[#1C3670] rounded-2xl p-6 sm:p-9 relative overflow-hidden telemetry-bracket space-y-6"
            >
              {/* Top Row: Role & Organization */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1C3670]/60 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="p-1.5 rounded-lg bg-[#000133] text-[#FCF1D1] border border-[#1C3670]">
                      <Building className="w-4 h-4" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#FCF1D1] tracking-tight">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-[#FCF1D1] font-medium text-sm flex items-center gap-2">
                    <span>{exp.organization}</span>
                    <span className="text-[#1C3670]">•</span>
                    <span className="text-[#FCF1D1]/60 font-mono text-xs">{exp.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#FCF1D1] bg-[#000133] px-3.5 py-1.5 rounded-lg border border-[#1C3670] w-fit">
                  <Calendar className="w-3.5 h-3.5 text-[#FCF1D1]" />
                  <span>Duration: {exp.duration}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#FCF1D1]/80 text-sm sm:text-base leading-relaxed font-light">
                {exp.description}
              </p>

              {/* Key Deliverables & Contributions */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FCF1D1]/60 block">
                  ENGINEERING DELIVERABLES &amp; RESPONSIBILITIES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {exp.keyContributions.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-[#000133] border border-[#1C3670]/50"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FCF1D1] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#FCF1D1]/80 leading-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Links */}
              {(exp.verifiedRepo || PORTFOLIO_DATA.socials.github) && (
                <div className="pt-4 border-t border-[#1C3670]/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#FCF1D1]/60">Verified Repository Artifacts</span>
                  <a
                    href={exp.verifiedRepo || PORTFOLIO_DATA.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#000133] border border-[#1C3670] text-[#FCF1D1] hover:border-[#FCF1D1]/60 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#FCF1D1]" />
                    <span>INSPECT REPO</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FCF1D1]/60" />
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
