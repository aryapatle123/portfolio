"use client";

import { Play, ArrowUpRight, ShieldCheck, Film, MessageSquare, Cpu } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { Project } from "@/data/portfolioData";

interface Props {
  project: Project;
  onOpenDemo: (project: Project) => void;
  index: number;
}

export default function ProjectCard({ project, onOpenDemo, index }: Props) {
  const getIcon = () => {
    switch (project.interactiveDemoType) {
      case "sms":
        return <MessageSquare className="w-5 h-5 text-[#FCF1D1]" />;
      case "fraud":
        return <ShieldCheck className="w-5 h-5 text-[#FCF1D1]" />;
      case "genre":
        return <Film className="w-5 h-5 text-[#FCF1D1]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#FCF1D1]" />;
    }
  };

  return (
    <article
      className={`rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
        project.featured
          ? "editorial-card-highlight p-6 sm:p-8"
          : "editorial-card p-6 sm:p-7"
      }`}
    >
      {/* Top Meta Bar */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-[#000133] border border-[#1C3670]">
              {getIcon()}
            </span>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FCF1D1] block">
                {project.category}
              </span>
              <span className="text-xs text-[#FCF1D1]/45 font-mono">
                Project #{String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          <span className="badge-pill text-[10px]">
            {project.badge}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#FCF1D1] tracking-tight mb-3">
          {project.title}
        </h3>

        {/* Short Summary */}
        <p className="text-sm text-[#FCF1D1]/75 leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Problem & Approach */}
        <div className="space-y-2 mb-5 p-3.5 rounded-xl bg-[#000133] border border-[#1C3670]">
          <div className="text-xs">
            <span className="font-semibold text-[#FCF1D1]">Problem: </span>
            <span className="text-[#FCF1D1]/65">{project.problemSolved}</span>
          </div>
          <div className="text-xs">
            <span className="font-semibold text-[#FCF1D1]">Methodology: </span>
            <span className="text-[#FCF1D1]/65 font-mono text-[11px]">{project.methodology}</span>
          </div>
        </div>

        {/* Reported Evaluation Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg bg-[#000133] border border-[#1C3670]"
              >
                <div className="text-lg font-bold font-mono text-[#FCF1D1]">
                  {metric.value}
                </div>
                <div className="text-[10px] uppercase font-mono text-[#FCF1D1]/70">
                  {metric.label}
                </div>
                <div className="text-[9px] text-[#FCF1D1]/45 truncate" title={metric.note}>
                  {metric.note}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#000133] border border-[#1C3670] text-[#FCF1D1]/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-[#1C3670]/40 flex flex-wrap items-center justify-between gap-3">
        {project.interactiveDemoType && (
          <button
            onClick={() => onOpenDemo(project)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#000133] bg-[#FCF1D1] hover:bg-[#F5E6BD] shadow-md transition-all active:scale-[0.98]"
          >
            <Play className="w-3.5 h-3.5 fill-[#000133]" />
            <span>Test Simulation</span>
          </button>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FCF1D1] hover:text-[#FCF1D1]/80 bg-[#000133] hover:bg-[#051540] px-3 py-2 rounded-lg border border-[#1C3670] transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#FCF1D1]" />
            <span>View Source Notebook</span>
            <ArrowUpRight className="w-3 h-3 text-[#FCF1D1]/60" />
          </a>
        )}

        {!project.githubUrl && (
          <span className="text-[11px] font-mono text-[#FCF1D1]/50">
            Academic Concept Specification
          </span>
        )}
      </div>
    </article>
  );
}
