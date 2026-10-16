"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Eye, ShieldCheck, Mail, RefreshCw, Activity, Laptop } from "lucide-react";

interface VisitRecord {
  id: string;
  timestamp: string;
  device: string;
  os: string;
  browser: string;
  referrer: string;
  ip: string;
  status: string;
}

export default function VisitorActivity() {
  const [totalVisits, setTotalVisits] = useState<number>(1);
  const [recentVisits, setRecentVisits] = useState<VisitRecord[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentSessionLogged, setCurrentSessionLogged] = useState<boolean>(false);

  const fetchStats = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/track-visit");
      const data = await res.json();
      if (data.success) {
        setTotalVisits(data.totalVisits || 1);
        if (data.recentVisits) {
          setRecentVisits(data.recentVisits);
        }
      }
    } catch (err) {
      console.error("Failed to load visitor statistics:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const recordVisit = useCallback(async () => {
    if (typeof window === "undefined") return;

    const alreadyLogged = sessionStorage.getItem("arya_portfolio_visit_logged");
    if (alreadyLogged) {
      setCurrentSessionLogged(true);
      fetchStats();
      return;
    }

    try {
      const res = await fetch("/api/track-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          referrer: document.referrer || "Direct Visit",
          screen: `${window.innerWidth}x${window.innerHeight}`,
          language: navigator.language || "en",
        }),
      });
      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem("arya_portfolio_visit_logged", "true");
        setCurrentSessionLogged(true);
        if (data.totalVisits) setTotalVisits(data.totalVisits);
        fetchStats();
      }
    } catch (err) {
      console.error("Failed to record visit:", err);
      fetchStats();
    }
  }, [fetchStats]);

  useEffect(() => {
    recordVisit();
  }, [recordVisit]);

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleString("en-IN", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return isoString;
    }
  };

  return (
    <section id="activity" className="py-20 relative bg-[#FFF8DF] border-t border-[#ABC5F5]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF2C7] border border-[#ABC5F5] text-[#0A1329] text-xs font-mono uppercase tracking-wider mb-3">
              <Activity className="w-3.5 h-3.5 text-[#8DAAFF]" />
              Visitor Telemetry
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1329] tracking-tight">
              Live Visitor Activity
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#2E4069] max-w-2xl">
              Real-time traffic telemetry. Every unique portfolio visit is recorded and generates an instant email notification to Arya Patle.
            </p>
          </div>

          <button
            onClick={fetchStats}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFF2C7] border border-[#ABC5F5] text-xs font-semibold text-[#0A1329] hover:bg-[#8DAAFF] transition-all shadow-sm w-fit"
            title="Refresh visitor telemetry"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
            <span>{isLoading ? "Updating..." : "Refresh Activity"}</span>
          </button>
        </div>

        {/* Telemetry Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          
          <div className="p-6 rounded-xl bg-[#FFF2C7] border border-[#ABC5F5] shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#5C729E]">
                Total Site Visits
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#FFF8DF] border border-[#ABC5F5] flex items-center justify-center text-[#0A1329]">
                <Eye className="w-4 h-4 text-[#8DAAFF]" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-[#0A1329] font-mono">
                {totalVisits}
              </span>
              <span className="text-xs text-[#2E4069] font-medium">recorded sessions</span>
            </div>
            <p className="mt-3 text-xs text-[#5C729E]">
              Counter increments automatically on unique visitor access.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#FFF2C7] border border-[#ABC5F5] shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#5C729E]">
                Email Alert System
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#FFF8DF] border border-[#ABC5F5] flex items-center justify-center text-[#0A1329]">
                <Mail className="w-4 h-4 text-[#8DAAFF]" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-bold text-[#0A1329]">
                Active (Gmail SMTP)
              </span>
            </div>
            <p className="mt-3 text-xs text-[#5C729E]">
              Instant email notification dispatched directly to aryapatle2704@gmail.com.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#FFF2C7] border border-[#ABC5F5] shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#5C729E]">
                Your Current Session
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#FFF8DF] border border-[#ABC5F5] flex items-center justify-center text-[#0A1329]">
                <Laptop className="w-4 h-4 text-[#8DAAFF]" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-bold text-[#0A1329]">
                {currentSessionLogged ? "Session Verified" : "Tracking..."}
              </span>
            </div>
            <p className="mt-3 text-xs text-[#5C729E]">
              Protected against spamming via session-based verification.
            </p>
          </div>

        </div>

        {/* Visitor Activity Log List */}
        <div className="rounded-xl bg-[#FFF2C7] border border-[#ABC5F5] shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#ABC5F5]/60 bg-[#FFF8DF]/70 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#8DAAFF]" />
              <h3 className="text-sm font-bold text-[#0A1329] uppercase tracking-wider font-mono">
                Recent Traffic Telemetry Log
              </h3>
            </div>
            <span className="text-xs font-mono text-[#5C729E]">
              Showing {recentVisits.length} latest events
            </span>
          </div>

          {recentVisits.length === 0 ? (
            <div className="p-8 text-center text-sm text-[#5C729E]">
              No visitor events recorded yet.
            </div>
          ) : (
            <div className="divide-y divide-[#ABC5F5]/40 overflow-x-auto">
              <table className="min-w-full text-left text-xs font-medium">
                <thead className="bg-[#FFF8DF]/40 text-[#5C729E] font-mono uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3">Timestamp</th>
                    <th className="px-6 py-3">Device / OS</th>
                    <th className="px-6 py-3">Browser</th>
                    <th className="px-6 py-3">Traffic Origin</th>
                    <th className="px-6 py-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ABC5F5]/30 text-[#0A1329]">
                  {recentVisits.map((visit) => (
                    <tr key={visit.id} className="hover:bg-[#FFF8DF]/50 transition-colors">
                      <td className="px-6 py-3.5 whitespace-nowrap font-mono text-[#2E4069]">
                        {formatDate(visit.timestamp)}
                      </td>
                      <td className="px-6 py-3.5 whitespace-nowrap font-semibold">
                        {visit.device} ({visit.os})
                      </td>
                      <td className="px-6 py-3.5 whitespace-nowrap text-[#2E4069]">
                        {visit.browser}
                      </td>
                      <td className="px-6 py-3.5 whitespace-nowrap text-[#5C729E] font-mono">
                        {visit.referrer}
                      </td>
                      <td className="px-6 py-3.5 whitespace-nowrap text-right">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                          {visit.status || "Logged"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
