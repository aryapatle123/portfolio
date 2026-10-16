"use client";

import React, { useState } from "react";
import { X, Play, AlertTriangle, CheckCircle, ShieldCheck, Film, MessageSquare, Terminal } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function InteractiveDemoModal({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000133]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="editorial-card rounded-2xl w-full max-w-2xl border border-[#1C3670] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#1C3670]/40 bg-[#000133]">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-[#051540] text-[#FCF1D1] border border-[#1C3670]">
              <Terminal className="w-4 h-4" />
            </span>
            <div>
              <h3 id="modal-title" className="text-base font-semibold text-[#FCF1D1]">
                Interactive Simulation: {project.title}
              </h3>
              <p className="text-xs text-[#FCF1D1]/60 font-mono">
                Model logic simulation inspired by Arya&apos;s project code
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#FCF1D1]/60 hover:text-[#FCF1D1] hover:bg-[#1C3670]/30 transition-colors"
            aria-label="Close interactive demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 bg-[#051540]">
          {project.interactiveDemoType === "sms" && <SmsDemo />}
          {project.interactiveDemoType === "fraud" && <FraudDemo />}
          {project.interactiveDemoType === "genre" && <GenreDemo />}
          {project.interactiveDemoType === "ledger" && <LedgerDemo />}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#1C3670]/40 bg-[#000133] flex items-center justify-between text-xs text-[#FCF1D1]/60 font-mono">
          <span>Accuracy benchmark: {project.metrics?.[0]?.value || "Verified"}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#1C3670] text-[#FCF1D1] hover:bg-[#1C3670]/80 transition-colors font-sans font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Sub-demo: SMS Classifier
// -------------------------------------------------------------
function SmsDemo() {
  const [text, setText] = useState(
    "URGENT: You have won a 1000 cash prize or free vacation! Call 0800 now to claim your reward."
  );
  const [result, setResult] = useState<{ isSpam: boolean; confidence: number; tokens: string[] }>({
    isSpam: true,
    confidence: 96.86,
    tokens: ["urgent", "won", "cash prize", "free vacation", "claim", "reward"]
  });

  const analyze = (sample: string) => {
    setText(sample);
    const lower = sample.toLowerCase();
    const spamWords = ["win", "won", "urgent", "prize", "free", "cash", "claim", "reward", "congratulations", "lottery"];
    const matched = spamWords.filter((w) => lower.includes(w));
    const isSpam = matched.length > 0;
    setResult({
      isSpam,
      confidence: isSpam ? 96.86 : 98.4,
      tokens: matched.length > 0 ? matched : ["legitimate conversation syntax"]
    });
  };

  return (
    <div className="space-y-4 text-xs font-mono">
      <div className="flex items-center gap-2 text-[#FCF1D1] font-semibold text-sm">
        <MessageSquare className="w-4 h-4 text-[#FCF1D1]" />
        <span>Spam SMS Text Classification (TF-IDF + Naive Bayes)</span>
      </div>

      <div>
        <label className="text-[#FCF1D1]/80 block mb-1">Input SMS Message:</label>
        <textarea
          rows={3}
          value={text}
          onChange={(e) => analyze(e.target.value)}
          className="w-full rounded-xl bg-[#000133] border border-[#1C3670] p-3 text-[#FCF1D1] focus:border-[#FCF1D1] focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap gap-2 text-[11px]">
        <span className="text-[#FCF1D1]/50 self-center">Presets:</span>
        <button
          onClick={() =>
            analyze("URGENT: You have won a 1000 cash prize or free vacation! Call 0800 now to claim your reward.")
          }
          className="px-2.5 py-1 rounded bg-[#000133] border border-[#1C3670] text-[#FCF1D1] hover:bg-[#1C3670]/40"
        >
          Spam Sample
        </button>
        <button
          onClick={() =>
            analyze("Hey Arya, are you free this afternoon to review the machine learning lecture notes?")
          }
          className="px-2.5 py-1 rounded bg-[#000133] border border-[#1C3670] text-[#FCF1D1] hover:bg-[#1C3670]/40"
        >
          Legitimate (Ham)
        </button>
      </div>

      <div className="p-4 rounded-xl bg-[#000133] border border-[#1C3670] flex items-center justify-between">
        <div className="flex items-center gap-3">
          {result.isSpam ? (
            <AlertTriangle className="w-5 h-5 text-[#FCF1D1]" />
          ) : (
            <CheckCircle className="w-5 h-5 text-[#FCF1D1]" />
          )}
          <div>
            <div className="text-sm font-bold text-[#FCF1D1]">
              Prediction: {result.isSpam ? "SPAM DETECTED" : "LEGITIMATE (HAM)"}
            </div>
            <div className="text-[11px] text-[#FCF1D1]/60">
              Matched Tokens: {result.tokens.join(", ")}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-base font-bold text-[#FCF1D1]">{result.confidence}%</div>
          <div className="text-[10px] text-[#FCF1D1]/50">Reported Metric</div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Sub-demo: Fraud Detection
// -------------------------------------------------------------
function FraudDemo() {
  const [amount, setAmount] = useState(2500);
  const [isAbroad, setIsAbroad] = useState(true);
  const [unusualTime, setUnusualTime] = useState(true);

  const riskScore = Math.min(
    Math.round((amount / 5000) * 40 + (isAbroad ? 35 : 0) + (unusualTime ? 25 : 0)),
    99
  );
  const isHighRisk = riskScore > 65;

  return (
    <div className="space-y-4 text-xs font-mono">
      <div className="flex items-center gap-2 text-[#FCF1D1] font-semibold text-sm">
        <ShieldCheck className="w-4 h-4 text-[#FCF1D1]" />
        <span>Credit Card Fraud Anomaly Sensitivity Matrix</span>
      </div>

      <div className="p-3.5 rounded-xl bg-[#000133] border border-[#1C3670] space-y-3">
        <div>
          <div className="flex justify-between text-[#FCF1D1] mb-1">
            <span>Transaction Amount ($):</span>
            <span className="font-bold">${amount}</span>
          </div>
          <input
            type="range"
            min="10"
            max="10000"
            step="50"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full accent-[#FCF1D1]"
          />
        </div>

        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-[#FCF1D1]/80 cursor-pointer">
            <input
              type="checkbox"
              checked={isAbroad}
              onChange={(e) => setIsAbroad(e.target.checked)}
              className="accent-[#FCF1D1]"
            />
            <span>Foreign IP / Geolocation</span>
          </label>

          <label className="flex items-center gap-2 text-[#FCF1D1]/80 cursor-pointer">
            <input
              type="checkbox"
              checked={unusualTime}
              onChange={(e) => setUnusualTime(e.target.checked)}
              className="accent-[#FCF1D1]"
            />
            <span>Unusual Timestamp (3:00 AM)</span>
          </label>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-[#000133] border border-[#1C3670] flex items-center justify-between">
        <div>
          <div className="text-sm font-bold text-[#FCF1D1]">
            Classification: {isHighRisk ? "FLAGGED AS SUSPICIOUS" : "NORMAL TRANSACTION"}
          </div>
          <div className="text-[11px] text-[#FCF1D1]/60">
            Anomaly Probability Score: {riskScore}%
          </div>
        </div>
        <div className="text-right">
          <div className="text-base font-bold text-[#FCF1D1]">99.74%</div>
          <div className="text-[10px] text-[#FCF1D1]/50">Reported Benchmark</div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Sub-demo: Movie Genre
// -------------------------------------------------------------
function GenreDemo() {
  const [plot, setPlot] = useState(
    "A deep-space expedition investigates an abandoned vessel orbiting Saturn, uncovering a sentient alien anomaly."
  );
  const [prediction, setPrediction] = useState("Sci-Fi / Space Thriller");

  const analyze = (synopsis: string) => {
    setPlot(synopsis);
    const lower = synopsis.toLowerCase();
    if (lower.includes("space") || lower.includes("alien") || lower.includes("orbit")) {
      setPrediction("Sci-Fi / Space");
    } else if (lower.includes("murder") || lower.includes("detective") || lower.includes("killer")) {
      setPrediction("Crime / Mystery Noir");
    } else if (lower.includes("love") || lower.includes("wedding") || lower.includes("romance")) {
      setPrediction("Romance / Drama");
    } else {
      setPrediction("Action / Adventure");
    }
  };

  return (
    <div className="space-y-4 text-xs font-mono">
      <div className="flex items-center gap-2 text-[#FCF1D1] font-semibold text-sm">
        <Film className="w-4 h-4 text-[#FCF1D1]" />
        <span>Movie Genre Classification from Plot Summary (TF-IDF + Logistic Regression)</span>
      </div>

      <div>
        <label className="text-[#FCF1D1]/80 block mb-1">Film Plot Synopsis:</label>
        <textarea
          rows={3}
          value={plot}
          onChange={(e) => analyze(e.target.value)}
          className="w-full rounded-xl bg-[#000133] border border-[#1C3670] p-3 text-[#FCF1D1] focus:border-[#FCF1D1] focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap gap-2 text-[11px]">
        <span className="text-[#FCF1D1]/50 self-center">Presets:</span>
        <button
          onClick={() =>
            analyze("A deep-space expedition investigates an abandoned vessel orbiting Saturn, uncovering a sentient alien anomaly.")
          }
          className="px-2.5 py-1 rounded bg-[#000133] border border-[#1C3670] text-[#FCF1D1] hover:bg-[#1C3670]/40"
        >
          Sci-Fi
        </button>
        <button
          onClick={() =>
            analyze("A veteran detective pieces together clues across Chicago to catch a clandestine jewel thief.")
          }
          className="px-2.5 py-1 rounded bg-[#000133] border border-[#1C3670] text-[#FCF1D1] hover:bg-[#1C3670]/40"
        >
          Mystery
        </button>
      </div>

      <div className="p-4 rounded-xl bg-[#000133] border border-[#1C3670] flex items-center justify-between">
        <div>
          <div className="text-sm font-bold text-[#FCF1D1]">Predicted Genre: {prediction}</div>
          <div className="text-[11px] text-[#FCF1D1]/60">Vector representation: Sparse TF-IDF tokens</div>
        </div>
        <div className="text-right">
          <div className="text-base font-bold text-[#FCF1D1]">97.00%</div>
          <div className="text-[10px] text-[#FCF1D1]/50">Reported Benchmark</div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Sub-demo: CA Work Ease
// -------------------------------------------------------------
function LedgerDemo() {
  return (
    <div className="space-y-4 text-xs font-mono">
      <div className="flex items-center gap-2 text-[#FCF1D1] font-semibold text-sm">
        <Terminal className="w-4 h-4 text-[#FCF1D1]" />
        <span>CA Work Ease System Pipeline Concept</span>
      </div>

      <p className="text-[#FCF1D1]/70 leading-relaxed">
        Academic project architecture conceptualized to help accounting professionals analyze CSV records and automate duplicate audit checks.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center">
        <div className="p-3 rounded-xl bg-[#000133] border border-[#1C3670]">
          <div className="text-xs font-bold text-[#FCF1D1]">Step 1</div>
          <div className="text-[11px] text-[#FCF1D1]/60 mt-1">CSV Ingestion</div>
        </div>
        <div className="p-3 rounded-xl bg-[#000133] border border-[#1C3670]">
          <div className="text-xs font-bold text-[#FCF1D1]">Step 2</div>
          <div className="text-[11px] text-[#FCF1D1]/60 mt-1">Pandas Cleaning</div>
        </div>
        <div className="p-3 rounded-xl bg-[#000133] border border-[#1C3670]">
          <div className="text-xs font-bold text-[#FCF1D1]">Step 3</div>
          <div className="text-[11px] text-[#FCF1D1]/60 mt-1">Audit Engine</div>
        </div>
        <div className="p-3 rounded-xl bg-[#000133] border border-[#1C3670]">
          <div className="text-xs font-bold text-[#FCF1D1]">Step 4</div>
          <div className="text-[11px] text-[#FCF1D1]/60 mt-1">Summary View</div>
        </div>
      </div>
    </div>
  );
}
