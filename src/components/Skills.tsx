"use client";

import React, { useState } from "react";
import { Wrench } from "lucide-react";
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
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="badge-pill mb-3">
              <Wrench className="w-3.5 h-3.5 text-[#FCF1D1]" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FCF1D1]">
              Skills & Technologies
            </h2>
            <p className="text-[#FCF1D1]/65 mt-2 text-sm sm:text-base max-w-xl">
              Grounded strictly in verified project work and academic coursework. No arbitrary percentage bars or fabricated metrics.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#051540] border border-[#1C3670] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-[#1C3670] text-[#FCF1D1] font-semibold border border-[#FCF1D1]/30"
                    : "text-[#FCF1D1]/60 hover:text-[#FCF1D1]"
                }`}
              >
                {cat.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              className="editorial-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-[#FCF1D1] mb-1.5">
                  {category.title}
                </h3>
                <p className="text-xs text-[#FCF1D1]/60 mb-5 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
                        skill.highlight
                          ? "bg-[#1C3670]/40 border-[#FCF1D1]/40 text-[#FCF1D1] font-semibold"
                          : "bg-[#000133] border-[#1C3670] text-[#FCF1D1]/80 hover:border-[#FCF1D1]/30"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
