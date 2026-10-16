"use client";

import React from "react";
import { Play, ShieldCheck, Film, MessageSquare, Cpu } from "lucide-react";
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
        return <MessageSquare className="w-4 h-4 text-[#0A1329]" />;
      case "fraud":
        return <ShieldCheck className="w-4 h-4 text-[#0A1329]" />;
      case "genre":
        return <Film className="w-4 h-4 text-[#0A1329]" />;
      default:
        return <Cpu className="w-4 h-4 text-[#0A1329]" />;
    }
  };

  return (
    <article
      className="rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between p-6 sm:p-7 bg-[#FFF2C7] border border-[#ABC5F5] telemetry-bracket hover:border-[#8DAAFF] shadow-md"
    >
      <div>
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#ABC5F5]/70 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#FFF8DF] border border-[#ABC5F5]">
              {getIcon()}
            </span>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#2E4069] font-bold block">
                TOP 0{index + 1} // {project.category}
              </span>
            </div>
          </div>

          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 bg-[#FFF8DF] border border-[#ABC5F5] text-[#0A1329] font-semibold rounded">
            {project.badge}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#0A1329] tracking-tight mb-2">
          {project.title}
        </h3>

        {/* Short Summary */}
        <p className="text-xs sm:text-sm text-[#2E4069] leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Engineering Specifications / Approach */}
        <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-[#FFF8DF] border border-[#ABC5F5]/70 text-xs font-mono shadow-xs">
          <div className="flex items-start gap-2 text-[#0A1329]">
            <span className="text-[#8DAAFF] font-bold">/</span>
            <span className="text-[#2E4069]">Problem: {project.problemSolved}</span>
          </div>
          <div className="flex items-start gap-2 text-[#0A1329]">
            <span className="text-[#8DAAFF] font-bold">/</span>
            <span className="text-[#2E4069]">Method: {project.methodology}</span>
          </div>
        </div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg bg-[#FFF8DF] border border-[#ABC5F5] shadow-xs"
              >
                <div className="text-base font-bold font-mono text-[#0A1329]">
                  {metric.value}
                </div>
                <div className="text-[9px] uppercase font-mono text-[#5C729E] font-semibold">
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
              className="px-2 py-0.5 rounded bg-[#FFF8DF] border border-[#ABC5F5] text-[10px] font-mono text-[#2E4069] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-[#ABC5F5]/70 flex items-center justify-between gap-3 font-mono text-xs">
        <button
          onClick={() => onOpenDemo(project)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#8DAAFF] text-[#0A1329] font-bold hover:bg-[#789BFF] transition-all shadow-xs"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>RUN SIMULATION</span>
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#FFF8DF] border border-[#ABC5F5] text-[#0A1329] font-semibold hover:border-[#8DAAFF] transition-colors shadow-xs"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#0A1329]" />
            <span>VIEW CODE</span>
          </a>
        )}
      </div>
    </article>
  );
}
