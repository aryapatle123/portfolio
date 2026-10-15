"use client";

import React, { useState } from "react";
import { ArrowDown, Terminal, Sparkles, CheckCircle2, Copy, Check } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import NeuralCanvas from "./NeuralCanvas";

export default function Hero() {
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const samplePipelineSnippet = `# Arya Patle — Verified NLP Classification Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline

# Text Preprocessing & Vectorization
pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(stop_words='english', max_features=5000)),
    ('classifier', MultinomialNB())
])

pipeline.fit(X_train, y_train)
# Reported test accuracy: 96.86%`;

  const copyCode = () => {
    navigator.clipboard.writeText(samplePipelineSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden tech-grid-bg">
      {/* Dynamic Background Neural Network Canvas */}
      <NeuralCanvas />

      {/* Atmospheric radial gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-950/20 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Introduction */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status / Academic Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>B.Tech CSE • Semester IV (Sec B) • Machine Learning Focus</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-zinc-400 font-mono text-sm tracking-wider uppercase">
                Hello, I am <span className="text-white font-medium">{PORTFOLIO_DATA.personal.name}</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Building Intelligent Solutions with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300">
                  Python & ML
                </span>
                .
              </h1>
            </div>

            {/* Supporting Intro Text */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
              {PORTFOLIO_DATA.personal.subheadline}
            </p>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">96.86%</div>
                <div className="text-xs text-zinc-400">Spam SMS Accuracy*</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xl sm:text-2xl font-bold font-mono text-teal-400">99.77%</div>
                <div className="text-xs text-zinc-400">Fraud Detection*</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] col-span-2 sm:col-span-1">
                <div className="text-xl sm:text-2xl font-bold font-mono text-lime-400">97.00%</div>
                <div className="text-xs text-zinc-400">Movie Genre NLP*</div>
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 font-mono">
              *Previously reported metrics from academic & internship project evaluations.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-medium text-zinc-200 bg-white/[0.04] border border-white/[0.09] hover:border-emerald-500/40 hover:bg-white/[0.07] hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4 text-emerald-400" />
                <span>Verified GitHub Repo</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Card */}
          <div className="lg:col-span-5">
            <div className="editorial-card rounded-2xl p-5 border border-white/[0.08] shadow-2xl relative group">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-zinc-400">
                    arya_nlp_pipeline.py
                  </span>
                </div>
                
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-emerald-300 transition-colors p-1"
                  aria-label="Copy code snippet"
                >
                  {copiedSnippet ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Snippet Body */}
              <pre className="font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto p-2 bg-black/40 rounded-lg border border-white/[0.03]">
                <code>{samplePipelineSnippet}</code>
              </pre>

              {/* Verification & Architecture Highlights */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Model Artifacts Serialized:
                  </span>
                  <span className="font-mono text-emerald-300 text-[11px]">
                    .pkl (Pickle)
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                    Internship Experience:
                  </span>
                  <span className="text-zinc-200 text-[11px]">
                    CodSoft ML Intern
                  </span>
                </div>
              </div>

              {/* Interactive badge at bottom */}
              <div className="mt-4 p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs text-zinc-300 font-mono">Interactive Demos Below</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded">
                  4 Live Prototypes
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
