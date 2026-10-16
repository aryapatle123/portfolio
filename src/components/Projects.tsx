"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";
import InteractiveDemoModal from "./InteractiveDemoModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "NLP", "Machine Learning", "Web Application"];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "NLP") return p.category.includes("Natural Language") || p.category.includes("Text");
    if (activeFilter === "Machine Learning") return p.category.includes("Binary") || p.category.includes("Machine Learning");
    if (activeFilter === "Web Application") return p.category.includes("Web Application");
    return true;
  });

  return (
    <section id="projects" className="py-24 relative border-t border-[#ABC5F5]/60 bg-[#FFF8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-2 h-6 bg-[#8DAAFF]" />
              <span className="font-mono text-xs tracking-widest text-[#2E4069] uppercase font-bold">
                TOP PROJECTS
              </span>
              <span className="font-mono text-xs text-[#5C729E] uppercase font-semibold">
                FEATURED MACHINE LEARNING SYSTEMS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1329]">
              Featured Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#FFF2C7] border border-[#ABC5F5] self-start md:self-auto font-mono text-xs shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg uppercase tracking-wider transition-all font-semibold ${
                  activeFilter === cat
                    ? "bg-[#8DAAFF] text-[#0A1329] border border-[#8DAAFF] shadow-xs"
                    : "text-[#2E4069] hover:text-[#0A1329]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenDemo={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Modal for interactive simulation */}
        {selectedProject && (
          <InteractiveDemoModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
