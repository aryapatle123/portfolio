"use client";

import React, { useState } from "react";
import { Wrench, Terminal, Cpu, Database, Binary, GitBranch } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Programming",
    "Data Science & Machine Learning",
    "Natural Language Processing (NLP)",
    "Development Tools & Environment",
    "Computer Science Core"
  ];

  const filteredCategories = PORTFOLIO_DATA.skills.filter((cat) => {
    if (selectedCategory === "All") return true;
    return cat.title === selectedCategory;
  });

  return (
    <section id="skills" className="py-24 relative border-t border-white/[0.06] bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="badge-pill mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Technologies
            </h2>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-xl">
              Grounded strictly in verified project work and academic coursework. No arbitrary percentage bars or fabricated metrics.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-white/[0.02] border border-white/[0.06] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {cat.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="editorial-card rounded-2xl p-6 flex flex-col justify-between border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {cat.title}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">
                    {cat.skills.length} Items
                  </span>
                </div>

                <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                        skill.highlight
                          ? "bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-medium"
                          : "bg-white/[0.03] border border-white/[0.07] text-zinc-300"
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>Verified in code</span>
                <span className="text-emerald-400/80">Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Authentic Context Callout */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Binary className="w-4 h-4 text-emerald-400" />
            <span>Honest representation: All displayed technologies directly reflect Arya's Python notebooks and academic studies.</span>
          </div>
          <span className="font-mono text-zinc-500 hidden sm:inline">CSE B.Tech</span>
        </div>

      </div>
    </section>
  );
}
