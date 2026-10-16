"use client";

import React from "react";
import Image from "next/image";
import { Clock, CheckCircle, ArrowUpRight, Sparkles, Heart } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Entrepreneurship() {
  const e = PORTFOLIO_DATA.entrepreneurship;

  return (
    <section id="entrepreneurship" className="py-20 relative border-t border-[#1C3670]/40 bg-[#000133]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-5xl mx-auto editorial-card rounded-2xl p-6 sm:p-9 border border-[#1C3670] relative overflow-hidden bg-[#051540]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Authentic Handcrafted Bouquet Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl p-2.5 bg-[#000133] border border-[#1C3670] shadow-2xl group">
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#000133] border border-[#1C3670]/60">
                  <Image
                    src="/bloomi-bouquet.jpg"
                    alt="Handcrafted Pipe-Cleaner Flower Bouquet by bloomi_15"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Corner Architectural Crosshairs */}
                  <div className="absolute top-2.5 left-2.5 text-[#FCF1D1]/40 font-mono text-[10px] select-none">+</div>
                  <div className="absolute top-2.5 right-2.5 text-[#FCF1D1]/40 font-mono text-[10px] select-none">+</div>
                </div>

                {/* Subtle caption underneath bouquet */}
                <div className="mt-2.5 px-2 py-1.5 flex items-center justify-between text-xs text-[#FCF1D1]/75 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FCF1D1]" />
                    <span>Handmade Bouquet</span>
                  </span>
                  <span className="text-[11px] text-[#FCF1D1]/60 font-medium">bloomi_15</span>
                </div>
              </div>
            </div>

            {/* Right Column: Venture Context, Highlights & Instagram Link */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              
              {/* Badge & Title */}
              <div>
                <div className="badge-pill mb-2.5">
                  <Heart className="w-3.5 h-3.5 text-[#FCF1D1]" />
                  <span>Startup & Creative Venture</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-[#FCF1D1] tracking-tight">
                  {e.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2.5 mt-2">
                  <p className="text-xs font-mono text-[#FCF1D1]/80">
                    {e.role} • {e.type}
                  </p>
                  <span className="text-[#1C3670]">•</span>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#FCF1D1]/85 bg-[#000133] px-2.5 py-1 rounded-md border border-[#1C3670]">
                    <Clock className="w-3 h-3 text-[#FCF1D1]" />
                    <span>Concurrent with CSE Studies</span>
                  </div>
                </div>
              </div>

              {/* Narrative */}
              <p className="text-[#FCF1D1]/80 text-sm sm:text-base leading-relaxed font-light">
                {e.description}
              </p>

              {/* Strategic Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {e.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-[#000133] border border-[#1C3670]/50 space-y-1.5"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FCF1D1]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#FCF1D1] shrink-0" />
                      <span>
                        {index === 0
                          ? "Custom Floristry"
                          : index === 1
                          ? "Solo Operations"
                          : "Academic Balance"}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#FCF1D1]/65 leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct Instagram Action */}
              {e.instagramUrl && (
                <div className="pt-3 border-t border-[#1C3670]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <span className="text-[#FCF1D1]/60 font-mono">
                    Explore custom arrangements & craft catalog
                  </span>
                  <a
                    href={e.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#000133] bg-[#FCF1D1] hover:bg-[#F5E6BD] shadow-md transition-all duration-200 hover:-translate-y-0.5 w-fit"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-[#000133]" />
                    <span>Visit @bloomii_15 on Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#000133]" />
                  </a>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
