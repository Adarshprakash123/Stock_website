"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { CheckCircle, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "./header";
import { Footer } from "./footer";
import Link from "next/link";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: ["Class Hours", "Live Support (Online)", "Live Support (Offline)"],
  datasets: [
    {
      label: "Hours per Week",
      data: [10, 6, 0],
      backgroundColor: ["#0A2342", "#1E90FF", "#FF6347"],
      borderRadius: 8,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Live Training & Support Comparison",
      font: {
        size: 16,
      },
    },
  },
};

const includedFeatures = [
  "✅ Live Online Classes with Interaction",
  "✅ Coverage of:",
  "Indian Equity Market",
  "Derivatives: Futures & Options",
  "MCX (Gold, Silver, Crude Oil)",
  "Currency Trading",
  "US Stocks & Markets",
  "Crypto & Forex",
  "Intraday, Swing & Investment Strategies",
  "Price Action, Indicators, Chart Patterns",
  "Risk & Money Management",
  "Trading Plan & System Design",
  "Trading Psychology",
  "Life Management + Meditation",
  "✅ 3 Months Recording Access",
  "✅ Weekly Doubt Sessions",
  "✅ Community Group Access (Lifetime)",
  "✅ Certificate of Completion",
  "✅ Scholarship Offer (Limited)",
];

const notIncluded = [
  "Offline Class Access",
  "Full-day Live Trading (only 2 hrs/day online)",
];

export default function OnlineClass() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <Badge className="mb-4" variant="outline">
              Online Live Class
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">
              🟨 Plan 2: Online Live Class – ₹8999
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from anywhere with interactive live classes, lifetime trading support, and access to our trader community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-[#0A2342] mb-2">
                  Timing & Access
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Live Class Timing:</strong> Mon–Fri (5:30 PM – 7:30 PM)</li>
                  <li><strong>Live Trading Support:</strong> 3 Days/Week (12:00 PM – 2:00 PM via Zoom) – <strong>Lifetime</strong></li>
                  <li><strong>Video Access:</strong> 3 Months</li>
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-[#0A2342] mb-2">
                  Included Features
                </h2>
                <ul className="space-y-2 text-gray-700">
                  {includedFeatures.map((feature, idx) =>
                    feature.startsWith("✅") ? (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 mt-1 w-4 h-4" />
                        <span>{feature.replace("✅ ", "")}</span>
                      </li>
                    ) : (
                      <li key={idx} className="ml-6 list-disc">{feature}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-[#0A2342] mb-2">❌ Not Included</h2>
                <ul className="space-y-2 text-red-600">
                  {notIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Link href="/#contact" passHref>
                  <Button className="bg-[#0A2342] hover:bg-[#0A4223] text-white">
                    Enroll Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
