import { Briefcase, CheckCircle2, Calendar, Building, ArrowUpRight } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-white/[0.06] bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="badge-pill mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Industry & Internship Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Professional Experience
            </h2>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-xl">
              Verified internship contributions with Scikit-Learn pipelines, text classification, and collaborative version control.
            </p>
          </div>
        </div>

        {/* Timeline / Editorial Card */}
        <div className="max-w-4xl mx-auto">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <div
              key={index}
              className="editorial-card-highlight rounded-2xl p-6 sm:p-9 relative overflow-hidden"
            >
              {/* Top Row: Role & Organization */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Building className="w-4 h-4" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-emerald-400 font-medium text-sm flex items-center gap-2">
                    <span>{exp.organization}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400 font-mono text-xs">{exp.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/[0.08] w-fit">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Duration: {exp.duration}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Key Deliverables & Contributions */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Key Deliverables & Responsibilities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {exp.keyContributions.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-300 leading-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack & Verified Links */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-zinc-500 mr-2 font-mono">Tools:</span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {exp.verifiedRepo && (
                  <a
                    href={exp.verifiedRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository Deliverables</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
