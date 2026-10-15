"use client";

import React, { useState } from "react";
import { X, Play, RefreshCw, AlertTriangle, CheckCircle, ShieldCheck, FileSpreadsheet, Film, MessageSquare, Terminal } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function InteractiveDemoModal({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="editorial-card rounded-2xl w-full max-w-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/[0.08] bg-black/40">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Terminal className="w-4 h-4" />
            </span>
            <div>
              <h3 id="modal-title" className="text-base font-semibold text-white">
                Interactive Simulation: {project.title}
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                Model logic simulation inspired by Arya's project code
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Close interactive demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {project.interactiveDemoType === "sms" && <SmsDemo />}
          {project.interactiveDemoType === "fraud" && <FraudDemo />}
          {project.interactiveDemoType === "genre" && <GenreDemo />}
          {project.interactiveDemoType === "ledger" && <LedgerDemo />}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-black/40 flex items-center justify-between text-xs text-zinc-400 font-mono">
          <span>Accuracy benchmark: {project.metrics?.[0]?.value || "Verified"}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/[0.08] text-white hover:bg-white/[0.12] transition-colors"
          >
            Close Demo
          </button>
        </div>
      </div>
    </div>
  );
}

// 1. SMS Spam Detection Interactive Simulator
function SmsDemo() {
  const [inputText, setInputText] = useState(
    "URGENT! You have won a 1 week FREE vacation to Bahamas! Reply CLAIM to 88888 now to collect your cash prize."
  );
  const [result, setResult] = useState<{ isSpam: boolean; score: number; tokens: string[] } | null>(null);

  const samples = [
    {
      label: "Spam Sample 1",
      text: "URGENT! You have won a 1 week FREE vacation to Bahamas! Reply CLAIM to 88888 now to collect your cash prize.",
    },
    {
      label: "Ham (Legit) Sample",
      text: "Hey Arya, let me know when you are free to review the CSE machine learning notes for tomorrow's lab.",
    },
    {
      label: "Spam Sample 2",
      text: "Congratulations! Your credit card has been pre-approved for $5,000 cash bonus. Call immediately.",
    },
  ];

  const runClassification = () => {
    const text = inputText.toLowerCase();
    const spamKeywords = [
      "urgent", "won", "free", "vacation", "claim", "prize", "cash", "bonus", "call",
      "pre-approved", "credit", "88888", "congratulations", "guaranteed", "selected"
    ];

    const detectedWords: string[] = [];
    let spamScore = 0.05;

    spamKeywords.forEach((kw) => {
      if (text.includes(kw)) {
        detectedWords.push(kw);
        spamScore += 0.22;
      }
    });

    const finalScore = Math.min(Math.max(spamScore, 0.02), 0.99);
    setResult({
      isSpam: finalScore >= 0.45,
      score: finalScore,
      tokens: detectedWords,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
        <span>Algorithm: Multinomial Naive Bayes + TF-IDF Vectorization</span>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-zinc-300">
          Test SMS Message Input:
        </label>
        <textarea
          rows={3}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full rounded-xl bg-black/50 border border-white/10 p-3 text-sm text-zinc-100 font-mono focus:border-emerald-400 focus:outline-none"
          placeholder="Type an SMS message to test..."
        />
      </div>

      {/* Preset samples */}
      <div className="flex flex-wrap gap-2">
        <span className="text-xs text-zinc-500 py-1">Quick Presets:</span>
        {samples.map((s, idx) => (
          <button
            key={idx}
            onClick={() => {
              setInputText(s.text);
              setResult(null);
            }}
            className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:text-emerald-300 hover:border-emerald-500/30 transition-colors"
          >
            {s.label}
          </button>
        ))}
      </div>

      <button
        onClick={runClassification}
        className="w-full py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-sm flex items-center justify-center gap-2 transition-transform active:scale-[0.99]"
      >
        <Play className="w-4 h-4 fill-black" />
        <span>Run TF-IDF & Naive Bayes Inference</span>
      </button>

      {/* Inference Output */}
      {result && (
        <div
          className={`p-4 rounded-xl border ${
            result.isSpam
              ? "bg-red-950/20 border-red-500/40 text-red-200"
              : "bg-emerald-950/20 border-emerald-500/40 text-emerald-200"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-sm flex items-center gap-1.5">
              {result.isSpam ? (
                <>
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  Classification: SPAM (High Risk)
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Classification: HAM (Legitimate)
                </>
              )}
            </span>
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-black/40">
              Spam Probability: {(result.score * 100).toFixed(1)}%
            </span>
          </div>

          <div className="text-xs text-zinc-400">
            <span>High-TFIDF Indicative Tokens: </span>
            {result.tokens.length > 0 ? (
              <span className="font-mono text-white">
                {result.tokens.map((t) => `"${t}"`).join(", ")}
              </span>
            ) : (
              <span className="font-mono text-zinc-500">None detected</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// 2. Fraud Detection Simulator
function FraudDemo() {
  const [amount, setAmount] = useState<number>(1450);
  const [isForeignLocation, setIsForeignLocation] = useState<boolean>(true);
  const [isOddHours, setIsOddHours] = useState<boolean>(true);
  const [result, setResult] = useState<{ isFraud: boolean; score: number } | null>(null);

  const calculateFraud = () => {
    let risk = 0.05;
    if (amount > 1000) risk += 0.35;
    if (amount > 3000) risk += 0.35;
    if (isForeignLocation) risk += 0.3;
    if (isOddHours) risk += 0.15;

    const finalRisk = Math.min(risk, 0.99);
    setResult({
      isFraud: finalRisk >= 0.55,
      score: finalRisk,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
        <span>Algorithm: Random Forest Classifier (Pickle Serialized)</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-medium text-zinc-300">
            Transaction Amount ($):
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full rounded-xl bg-black/50 border border-white/10 p-2.5 text-sm font-mono text-white focus:border-teal-400 focus:outline-none"
          />
        </div>

        <div className="space-y-3 pt-2">
          <label className="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer">
            <input
              type="checkbox"
              checked={isForeignLocation}
              onChange={(e) => setIsForeignLocation(e.target.checked)}
              className="rounded accent-teal-400"
            />
            <span>Unrecognized / Foreign IP or Location</span>
          </label>

          <label className="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer">
            <input
              type="checkbox"
              checked={isOddHours}
              onChange={(e) => setIsOddHours(e.target.checked)}
              className="rounded accent-teal-400"
            />
            <span>Unusual Time of Transaction (03:00 AM)</span>
          </label>
        </div>
      </div>

      <button
        onClick={calculateFraud}
        className="w-full py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-black font-semibold text-sm flex items-center justify-center gap-2 transition-transform active:scale-[0.99]"
      >
        <Play className="w-4 h-4 fill-black" />
        <span>Run Anomaly Detection Decision Trees</span>
      </button>

      {result && (
        <div
          className={`p-4 rounded-xl border ${
            result.isFraud
              ? "bg-red-950/20 border-red-500/40 text-red-200"
              : "bg-teal-950/20 border-teal-500/40 text-teal-200"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm">
              Decision: {result.isFraud ? "SUSPICIOUS FRAUD ANOMALY" : "APPROVED NORMAL TRANSACTION"}
            </span>
            <span className="font-mono text-xs">
              Anomaly Risk: {(result.score * 100).toFixed(0)}%
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Confirmed benchmark: 99.77% reported accuracy, 89% precision, 68% recall.
          </p>
        </div>
      )}
    </div>
  );
}

// 3. Movie Genre Classifier Simulator
function GenreDemo() {
  const [plot, setPlot] = useState(
    "A rogue astronaut navigates through an unknown wormhole in deep space to find a habitable planet for humanity."
  );
  const [prediction, setPrediction] = useState<string | null>(null);

  const presets = [
    { label: "Sci-Fi", text: "A rogue astronaut navigates through an unknown wormhole in deep space to find a habitable planet." },
    { label: "Crime / Thriller", text: "A detective tracks a cunning serial killer who leaves cryptic playing cards at midnight crime scenes." },
    { label: "Comedy / Romance", text: "Two rival wedding planners accidentally fall in love while organizing a chaotic celebrity wedding." },
  ];

  const predictGenre = () => {
    const t = plot.toLowerCase();
    if (t.includes("astronaut") || t.includes("space") || t.includes("alien") || t.includes("future") || t.includes("planet")) {
      setPrediction("Science Fiction / Adventure");
    } else if (t.includes("detective") || t.includes("killer") || t.includes("crime") || t.includes("murder") || t.includes("police")) {
      setPrediction("Crime / Mystery Thriller");
    } else if (t.includes("love") || t.includes("wedding") || t.includes("comedy") || t.includes("funny") || t.includes("laugh")) {
      setPrediction("Romantic Comedy / Drama");
    } else {
      setPrediction("Drama / Narrative");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <Film className="w-3.5 h-3.5 text-lime-400" />
        <span>Algorithm: Logistic Regression + TF-IDF Vectorizer</span>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-zinc-300">
          Movie Plot Synopsis:
        </label>
        <textarea
          rows={3}
          value={plot}
          onChange={(e) => setPlot(e.target.value)}
          className="w-full rounded-xl bg-black/50 border border-white/10 p-3 text-sm text-zinc-100 font-mono focus:border-lime-400 focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="text-xs text-zinc-500 py-1">Quick Presets:</span>
        {presets.map((p, idx) => (
          <button
            key={idx}
            onClick={() => {
              setPlot(p.text);
              setPrediction(null);
            }}
            className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:text-lime-300 transition-colors"
          >
            {p.label}
          </button>
        ))}
      </div>

      <button
        onClick={predictGenre}
        className="w-full py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-semibold text-sm flex items-center justify-center gap-2 transition-transform active:scale-[0.99]"
      >
        <Play className="w-4 h-4 fill-black" />
        <span>Predict Film Genre</span>
      </button>

      {prediction && (
        <div className="p-4 rounded-xl bg-lime-950/20 border border-lime-500/40 text-lime-200 flex items-center justify-between">
          <span className="font-semibold text-sm">Predicted Genre:</span>
          <span className="font-mono text-sm px-2.5 py-1 rounded bg-black/60 text-lime-300 border border-lime-500/30">
            {prediction}
          </span>
        </div>
      )}
    </div>
  );
}

// 4. CA Ledger Audit Demo
function LedgerDemo() {
  const sampleTransactions = [
    { id: "TX-101", date: "2026-03-01", desc: "Server Cloud Hosting", amount: "$450.00", status: "Verified" },
    { id: "TX-102", date: "2026-03-02", desc: "Office Equipment Supplier", amount: "$1,200.00", status: "Verified" },
    { id: "TX-103", date: "2026-03-02", desc: "Office Equipment Supplier", amount: "$1,200.00", status: "Duplicate Flagged" },
    { id: "TX-104", date: "2026-03-05", desc: "Uncategorized Wire Transfer", amount: "$15,800.00", status: "High-Value Anomaly" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <FileSpreadsheet className="w-3.5 h-3.5 text-cyan-400" />
        <span>Ledger Pipeline: CSV Parse → Pandas Cleaning → Outlier Detection</span>
      </div>

      <div className="rounded-xl border border-white/10 overflow-hidden bg-black/50">
        <table className="w-full text-left text-xs font-mono">
          <thead className="bg-white/[0.05] text-zinc-400 border-b border-white/10">
            <tr>
              <th className="p-2.5">ID</th>
              <th className="p-2.5">Date</th>
              <th className="p-2.5">Description</th>
              <th className="p-2.5">Amount</th>
              <th className="p-2.5">Audit Flag</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.05] text-zinc-300">
            {sampleTransactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-white/[0.02]">
                <td className="p-2.5 text-zinc-500">{tx.id}</td>
                <td className="p-2.5">{tx.date}</td>
                <td className="p-2.5">{tx.desc}</td>
                <td className="p-2.5 font-bold">{tx.amount}</td>
                <td className="p-2.5">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-sans ${
                      tx.status === "Duplicate Flagged"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                        : tx.status === "High-Value Anomaly"
                        ? "bg-red-500/20 text-red-300 border border-red-500/30"
                        : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs text-zinc-400">
        <span className="text-zinc-200 font-medium">Academic Research Note:</span>{" "}
        This system prototype explores automated reconciliation to assist Chartered Accountants. Not commercially deployed.
      </div>
    </div>
  );
}
