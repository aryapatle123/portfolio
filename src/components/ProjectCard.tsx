"use client";

import { Play, ArrowUpRight, CheckCircle2, ShieldCheck, Film, MessageSquare, Layers, Cpu } from "lucide-react";
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
        return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      case "fraud":
        return <ShieldCheck className="w-5 h-5 text-teal-400" />;
      case "genre":
        return <Film className="w-5 h-5 text-lime-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
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
            <span className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
              {getIcon()}
            </span>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 block">
                {project.category}
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                Project #{String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          <span className="badge-pill text-[10px]">
            {project.badge}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
          {project.title}
        </h3>

        {/* Short Summary */}
        <p className="text-sm text-zinc-300 leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Problem & Approach */}
        <div className="space-y-2 mb-5 p-3.5 rounded-xl bg-black/40 border border-white/[0.04]">
          <div className="text-xs">
            <span className="font-semibold text-zinc-300">Problem: </span>
            <span className="text-zinc-400">{project.problemSolved}</span>
          </div>
          <div className="text-xs">
            <span className="font-semibold text-zinc-300">Methodology: </span>
            <span className="text-zinc-400 font-mono text-[11px]">{project.methodology}</span>
          </div>
        </div>

        {/* Reported Evaluation Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/20"
              >
                <div className="text-lg font-bold font-mono text-emerald-300">
                  {metric.value}
                </div>
                <div className="text-[10px] uppercase font-mono text-zinc-400">
                  {metric.label}
                </div>
                <div className="text-[9px] text-zinc-500 truncate" title={metric.note}>
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
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
        {project.interactiveDemoType && (
          <button
            onClick={() => onOpenDemo(project)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-black bg-emerald-400 hover:bg-emerald-300 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Play className="w-3.5 h-3.5 fill-black" />
            <span>Test Simulation</span>
          </button>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] px-3 py-2 rounded-lg border border-white/[0.08] transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>View Source Notebook</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
        )}

        {!project.githubUrl && (
          <span className="text-[11px] font-mono text-zinc-500">
            Academic Concept Specification
          </span>
        )}
      </div>
    </article>
  );
}
