"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
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
    <section id="skills" className="py-24 relative border-t border-[#ABC5F5]/60 bg-[#FFF8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-2 h-6 bg-[#8DAAFF]" />
              <span className="font-mono text-xs tracking-widest text-[#2E4069] uppercase font-bold">
                CORE COMPETENCIES
              </span>
              <span className="font-mono text-xs text-[#5C729E] uppercase font-semibold">
                TELEMETRY &amp; TOOLING
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1329]">
              Technical Skills &amp; Stack
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#FFF2C7] border border-[#ABC5F5] self-start md:self-auto font-mono text-xs shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg uppercase tracking-wider transition-all font-semibold ${
                  selectedCategory === cat
                    ? "bg-[#8DAAFF] text-[#0A1329] border border-[#8DAAFF] shadow-xs"
                    : "text-[#2E4069] hover:text-[#0A1329]"
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
              className="p-6 rounded-2xl bg-[#FFF2C7] border border-[#ABC5F5] telemetry-bracket space-y-4 hover:border-[#8DAAFF] transition-colors shadow-md"
            >
              <div className="border-b border-[#ABC5F5]/70 pb-3">
                <span className="text-[10px] font-mono uppercase text-[#5C729E] font-bold tracking-wider block">
                  CATEGORY // SPEC
                </span>
                <h3 className="text-lg font-bold text-[#0A1329] mt-0.5">
                  {category.title}
                </h3>
                <p className="text-xs text-[#2E4069] mt-1 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFF8DF] border border-[#ABC5F5] text-xs font-mono text-[#0A1329] shadow-xs"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#8DAAFF] font-bold" />
                    <span className="font-medium">{skill.name}</span>
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
