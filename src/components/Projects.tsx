"use client";

import React, { useState } from "react";
import { FolderGit2, ExternalLink } from "lucide-react";
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
    <section id="projects" className="py-24 relative border-t border-[#1C3670]/40 bg-[#000133]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="badge-pill mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-[#FCF1D1]" />
              <span>Verified Portfolios & Experiments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FCF1D1]">
              Featured Projects
            </h2>
            <p className="text-[#FCF1D1]/65 mt-2 text-sm sm:text-base max-w-xl">
              Authentic machine learning projects with real evaluation metrics, Python implementations, and direct GitHub links.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#051540] border border-[#1C3670] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-[#1C3670] text-[#FCF1D1] font-semibold border border-[#FCF1D1]/30"
                    : "text-[#FCF1D1]/60 hover:text-[#FCF1D1]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Informative Methodology Banner */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-[#051540] border border-[#1C3670] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#000133] border border-[#1C3670] text-[#FCF1D1] shrink-0 font-mono text-xs">
              01
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#FCF1D1]">
                Interactive Model Demonstrations Available
              </h3>
              <p className="text-xs text-[#FCF1D1]/65">
                Click <strong>"Test Simulation"</strong> on any project to try an interactive in-browser simulation of Arya&apos;s classification logic and feature extraction.
              </p>
            </div>
          </div>

          <a
            href={PORTFOLIO_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#FCF1D1] hover:text-[#FCF1D1]/80 flex items-center gap-1.5 self-start sm:self-auto shrink-0 bg-[#000133] px-3 py-1.5 rounded-lg border border-[#1C3670]"
          >
            <span>aryapatle123 / CODESOFT</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDemo={setSelectedProject}
              index={idx}
            />
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      <InteractiveDemoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
