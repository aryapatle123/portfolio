"use client";

import React, { useState } from "react";
import { Wrench, CheckCircle2 } from "lucide-react";
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
    <section id="skills" className="py-24 relative border-t border-[#1C3670]/40 bg-[#000133]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Sparsh Accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-2 h-6 bg-[#FCF1D1]" />
              <span className="font-mono text-xs tracking-widest text-[#FCF1D1] uppercase font-bold">
                CORE COMPETENCIES
              </span>
              <span className="font-mono text-xs text-[#FCF1D1]/60 uppercase">
                TELEMETRY &amp; TOOLING
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FCF1D1]">
              Technical Skills &amp; Stack
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#051540] border border-[#1C3670] self-start md:self-auto font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-[#1C3670] text-[#FCF1D1] font-bold border border-[#FCF1D1]/30"
                    : "text-[#FCF1D1]/60 hover:text-[#FCF1D1]"
                }`}
              >
                {cat.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-[#051540] border border-[#1C3670] telemetry-bracket space-y-4 hover:border-[#FCF1D1]/40 transition-colors"
            >
              <div className="border-b border-[#1C3670]/60 pb-3">
                <span className="text-[10px] font-mono uppercase text-[#FCF1D1]/60 tracking-wider block">
                  CATEGORY // SPEC
                </span>
                <h3 className="text-lg font-bold text-[#FCF1D1] mt-0.5">
                  {category.title}
                </h3>
                <p className="text-xs text-[#FCF1D1]/65 mt-1 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#000133] border border-[#1C3670] text-xs font-mono text-[#FCF1D1]"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#FCF1D1]/70" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
