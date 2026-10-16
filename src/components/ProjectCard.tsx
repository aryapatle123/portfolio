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
        return <MessageSquare className="w-4 h-4 text-[#FCF1D1]" />;
      case "fraud":
        return <ShieldCheck className="w-4 h-4 text-[#FCF1D1]" />;
      case "genre":
        return <Film className="w-4 h-4 text-[#FCF1D1]" />;
      default:
        return <Cpu className="w-4 h-4 text-[#FCF1D1]" />;
    }
  };

  return (
    <article
      className="rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between p-6 sm:p-7 bg-[#051540] border border-[#1C3670] telemetry-bracket hover:border-[#FCF1D1]/40"
    >
      <div>
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1C3670]/60 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#000133] border border-[#1C3670]">
              {getIcon()}
            </span>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FCF1D1] font-bold block">
                TOP 0{index + 1} // {project.category}
              </span>
            </div>
          </div>

          <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#000133] border border-[#1C3670] text-[#FCF1D1]">
            {project.badge}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#FCF1D1] tracking-tight mb-2">
          {project.title}
        </h3>

        {/* Short Summary */}
        <p className="text-xs sm:text-sm text-[#FCF1D1]/75 leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Engineering Specifications / Approach */}
        <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-[#000133] border border-[#1C3670]/60 text-xs font-mono">
          <div className="flex items-start gap-2 text-[#FCF1D1]">
            <span className="text-[#FCF1D1]/50">/</span>
            <span className="text-[#FCF1D1]/80">Problem: {project.problemSolved}</span>
          </div>
          <div className="flex items-start gap-2 text-[#FCF1D1]">
            <span className="text-[#FCF1D1]/50">/</span>
            <span className="text-[#FCF1D1]/80">Method: {project.methodology}</span>
          </div>
        </div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg bg-[#000133] border border-[#1C3670]"
              >
                <div className="text-base font-bold font-mono text-[#FCF1D1]">
                  {metric.value}
                </div>
                <div className="text-[9px] uppercase font-mono text-[#FCF1D1]/60">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-[#000133] border border-[#1C3670] text-[10px] font-mono text-[#FCF1D1]/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-[#1C3670]/60 flex items-center justify-between gap-3 font-mono text-xs">
        <button
          onClick={() => onOpenDemo(project)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#FCF1D1] text-[#000133] font-bold hover:bg-[#F5E6BD] transition-all"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>RUN SIMULATION</span>
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#000133] border border-[#1C3670] text-[#FCF1D1] hover:border-[#FCF1D1]/60 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#FCF1D1]" />
            <span>VIEW CODE</span>
          </a>
        )}
      </div>
    </article>
  );
}
