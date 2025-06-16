"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Button } from "@/components/ui/button";
import { Header } from "./header";
import { Footer } from "./footer";
import { HeroSection } from "./hero-section";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const strategyData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Learning Progress",
      data: [10, 30, 60, 100],
      fill: true,
      borderColor: "#4F46E5",
      backgroundColor: "rgba(79,70,229,0.2)",
      tension: 0.4,
    },
  ],
};

export default function RecordedCourse() {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto p-6 text-gray-800 dark:text-gray-100 mt-20">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          📚 Course Offerings
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Recorded Course */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold text-indigo-500">
              🟦 Plan 1: Recorded Course – ₹5999
            </h2>
            <ul className="space-y-2 text-sm">
              <li>✅ 16 Weeks of Pre-recorded Video Classes</li>
              <li>✅ 3 Days/Week Live Trading Support (12:00 PM to 2:00 PM via Zoom) – Lifetime</li>
              <li>✅ 3 Months Video Access Only</li>
              <li className="mt-2 font-semibold">✅ Coverage of:</li>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Indian Equity Market</li>
                <li>F&O (Futures & Options)</li>
                <li>MCX (Gold, Silver, Crude)</li>
                <li>Currency Market</li>
                <li>US Stocks & Market Basics</li>
                <li>Crypto & Forex Overview</li>
                <li>Intraday Strategies (Basic)</li>
                <li>Swing Trading Strategy</li>
                <li>Investment Strategy</li>
                <li>Risk & Money Management</li>
                <li>Trading Plan & System</li>
              </ul>
              <li className="mt-4 font-semibold text-red-600">❌ Not Included:</li>
              <ul className="list-disc ml-6 text-sm space-y-1 text-red-500">
                <li>Live Online Classes</li>
                <li>Offline Classroom Access</li>
                <li>Community Group Access</li>
                <li>Life Management & Meditation</li>
                <li>Certification</li>
                <li>Scholarship Offer</li>
                <li>Weekly Performance Review or Doubt Solving</li>
              </ul>
            </ul>
          </div>

          {/* Strategy Graph */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6">
            <h3 className="text-lg font-semibold text-indigo-500 mb-4">📊 Strategy Progress Graph</h3>
            <Line data={strategyData} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
