import React from "react";
import { BookOpen, Brain, Code2, Database, ShieldAlert, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const highlights = [
    {
      icon: <Brain className="w-5 h-5 text-[#FCF1D1]" />,
      title: "Machine Learning & NLP",
      desc: "Text classification, TF-IDF vectorization, feature extraction, and algorithm tuning using Scikit-Learn."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-[#FCF1D1]" />,
      title: "Fraud Detection & Analytics",
      desc: "Anomaly detection and binary classification tackling severe class imbalance in transaction logs."
    },
    {
      icon: <Code2 className="w-5 h-5 text-[#FCF1D1]" />,
      title: "Python Software Development",
      desc: "Writing modular scripts, Jupyter data exploration, and Flask web backend prototypes for data analysis."
    },
    {
      icon: <Database className="w-5 h-5 text-[#FCF1D1]" />,
      title: "Core Computer Science",
      desc: "Coursework in Database Management Systems (DBMS), Operating Systems, and Compiler Design."
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-[#1C3670]/40 bg-[#000133]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="badge-pill mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#FCF1D1]" />
              <span>Background & Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FCF1D1]">
              About Arya Patle
            </h2>
          </div>
          <p className="text-[#FCF1D1]/65 max-w-md text-sm sm:text-base leading-relaxed">
            Hands-on machine learning, authentic academic foundations, and practical problem-solving.
          </p>
        </div>

        {/* Narrative & Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Column */}
          <div className="lg:col-span-7 editorial-card rounded-2xl p-7 sm:p-9 space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#FCF1D1] tracking-tight flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#FCF1D1]" />
              <span>Bridging Theory with Practical Implementation</span>
            </h3>

            <div className="space-y-4 text-[#FCF1D1]/75 leading-relaxed text-sm sm:text-base font-light">
              {PORTFOLIO_DATA.personal.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Academic Status Callout */}
            <div className="pt-4 border-t border-[#1C3670]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-[#FCF1D1]/65">
                <span className="text-[#FCF1D1]/45 font-mono">Current Status:</span>{" "}
                <span className="text-[#FCF1D1] font-medium">{PORTFOLIO_DATA.education.degree}</span>
              </div>
              <div className="font-mono text-[#FCF1D1] bg-[#000133] px-3 py-1 rounded-full border border-[#1C3670] w-fit">
                {PORTFOLIO_DATA.education.details}
              </div>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#051540] border border-[#1C3670] hover:border-[#FCF1D1]/40 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#000133] border border-[#1C3670]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#FCF1D1] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#FCF1D1]/65 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
