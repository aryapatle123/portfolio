"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowDown, Camera, Check, MapPin, Sparkles, UploadCloud } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import NeuralCanvas from "./NeuralCanvas";

export default function Hero() {
  const [imgSrc, setImgSrc] = useState<string>("/profile.jpg");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Check if profile.jpg exists, otherwise use default
  useEffect(() => {
    const testImg = new window.Image();
    testImg.src = "/profile.jpg";
    testImg.onload = () => setImgSrc(`/profile.jpg?v=${Date.now()}`);
    testImg.onerror = () => setImgSrc("/default-avatar.svg");
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show instant local preview
    const localUrl = URL.createObjectURL(file);
    setImgSrc(localUrl);

    // Save to server
    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload-photo", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    } catch (err) {
      console.error("Failed to upload photo:", err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#08090D]">
      {/* Subtle Atmospheric Neural Mesh Canvas */}
      <NeuralCanvas />

      {/* Ambient lighting (soft, non-distracting) */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/[0.05] blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] bg-emerald-950/[0.1] blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Human Editorial Bio & Headline */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Status / Role Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono tracking-wide text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>B.Tech Computer Science & Engineering • 4th Semester</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <p className="text-zinc-400 text-sm font-medium tracking-wide">
                Hi, I'm <span className="text-white font-semibold">{PORTFOLIO_DATA.personal.name}</span>
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.12]">
                Building intelligent software with{" "}
                <span className="text-emerald-400 underline decoration-emerald-500/30 decoration-2 underline-offset-8">
                  Python & Machine Learning
                </span>
                .
              </h1>
            </div>

            {/* Subtitle / Focus Statement */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-light leading-relaxed">
              {PORTFOLIO_DATA.personal.subheadline}
            </p>

            {/* Verified Project Accuracy Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-1 max-w-xl">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                <div className="text-2xl font-bold font-mono text-white">96.86%</div>
                <div className="text-[11px] text-zinc-400 font-medium mt-0.5">Spam SMS Model*</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                <div className="text-2xl font-bold font-mono text-white">99.77%</div>
                <div className="text-[11px] text-zinc-400 font-medium mt-0.5">Fraud Detection*</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                <div className="text-2xl font-bold font-mono text-white">97.00%</div>
                <div className="text-[11px] text-zinc-400 font-medium mt-0.5">Movie Genre NLP*</div>
              </div>
            </div>
            
            <p className="text-[11px] text-zinc-500 font-mono -mt-2">
              *Documented evaluation benchmarks from CodSoft internship and academic research repositories.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Featured Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-medium text-zinc-200 bg-white/[0.03] border border-white/[0.09] hover:border-emerald-500/40 hover:bg-white/[0.06] hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4 text-emerald-400" />
                <span>GitHub Repositories</span>
              </a>
            </div>

          </div>

          {/* Right Column: Editorial Portrait Frame (Replaces generic AI code editor) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Architectural Frame */}
              <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/[0.1] shadow-2xl backdrop-blur-md">
                
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#0C0E14] border border-white/[0.06] group">
                  <Image
                    src={imgSrc}
                    alt="Arya Patle - Developer Portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={() => setImgSrc("/default-avatar.svg")}
                  />

                  {/* Subtle Gradient Vignette at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Architectural Crosshairs */}
                  <div className="absolute top-3 left-3 text-white/40 font-mono text-[10px] select-none">+</div>
                  <div className="absolute top-3 right-3 text-white/40 font-mono text-[10px] select-none">+</div>

                  {/* Image Upload Trigger Overlay */}
                  <div className="absolute top-3 right-3 z-20">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 hover:bg-black/90 text-white border border-white/20 text-[11px] font-mono backdrop-blur-md transition-all shadow-md active:scale-95"
                      title="Upload your photo"
                    >
                      <Camera className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{uploadSuccess ? "Saved!" : "Change Photo"}</span>
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      aria-label="Upload profile image"
                    />
                  </div>

                  {/* Portrait Caption Overlay at Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold text-base tracking-tight">
                        Arya Patle
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        <MapPin className="w-3 h-3" />
                        India
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 font-light">
                      Machine Learning & NLP Practitioner
                    </p>
                  </div>
                </div>

                {/* Status Bar below portrait */}
                <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    <span>Open to Technical Roles</span>
                  </span>
                  <span className="text-[11px] text-zinc-500">
                    SIT CSE • 2024–2028
                  </span>
                </div>

              </div>

              {/* Decorative accent element behind portrait */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-white/[0.04] -z-10 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
