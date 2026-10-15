import React from "react";
import { Sparkles, Palette, Clock, CheckCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Entrepreneurship() {
  const e = PORTFOLIO_DATA.entrepreneurship;

  return (
    <section className="py-20 relative border-t border-white/[0.06] bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto editorial-card rounded-2xl p-7 sm:p-9 border border-white/[0.08] relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div>
              <div className="badge-pill mb-2">
                <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                <span>Initiative & Creative Venture</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {e.title}
              </h3>
              <p className="text-xs font-mono text-emerald-400 mt-1">
                {e.role} • {e.type}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06] w-fit">
              <Clock className="w-3.5 h-3.5 text-lime-400" />
              <span>Concurrent with CSE Studies</span>
            </div>
          </div>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
            {e.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/[0.06]">
            {e.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1"
              >
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <CheckCircle className="w-3.5 h-3.5 text-lime-400" />
                  <span>Real-World Balance</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
