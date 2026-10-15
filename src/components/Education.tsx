import React from "react";
import { GraduationCap, BookOpen, Layers, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-24 relative border-t border-white/[0.06] bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="badge-pill mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Education & Coursework
            </h2>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-xl">
              Formal computer science and engineering coursework reinforcing algorithmic thinking and systems design.
            </p>
          </div>
        </div>

        {/* Education Editorial Box */}
        <div className="max-w-4xl mx-auto editorial-card rounded-2xl p-7 sm:p-9 border border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                Undergraduate Degree Program
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {PORTFOLIO_DATA.education.degree}
              </h3>
            </div>

            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-300 font-mono text-xs w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{PORTFOLIO_DATA.education.details}</span>
            </div>
          </div>

          {/* Curriculum Subjects */}
          <div className="py-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Key Academic Subjects & Focus Areas:</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {PORTFOLIO_DATA.education.coreFocus.map((subj, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-zinc-300 font-medium">{subj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Note regarding verification */}
          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500 font-mono">
            <span>{PORTFOLIO_DATA.education.note}</span>
            <span className="text-zinc-400">Institutional records verified</span>
          </div>
        </div>

      </div>
    </section>
  );
}
