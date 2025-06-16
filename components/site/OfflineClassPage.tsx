"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
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

const includedFeatures = [
  "Everything in Online Plan + Full Offline Access",
  "Full-Day Live Trading Room (Hands-on Market Training)",
  "In-Class Practice, Strategy Drills, Instant Feedback",
  "Real-time Mentorship with Faculty",
  "Performance Tracking & Analysis",
  "Group Discussions, Case Studies",
  "Personalised Trading System Creation",
  "Lifetime Community Access",
  "Certificate of Completion",
  "Scholarship Offer (Limited Seats)",
];

const chartData = {
  labels: [
    "Class Timing (hrs/day)",
    "Live Trading (hrs/day)",
    "Video Access (months)",
  ],
  datasets: [
    {
      label: "Offline Master Class Metrics",
      data: [2, 6.5, 3],
      backgroundColor: ["#0A2342", "#28a745", "#f59e0b"],
      borderRadius: 10,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: "Offline Master Class – Key Metrics",
      font: { size: 16 },
    },
  },
};

export default function OfflineClassPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12 mt-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-3" variant="outline">
              Plan 3: Offline Master Class
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">
              🟥 Offline Master Class – ₹19999
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This is the most complete plan with maximum access, support, and
              mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-[#0A2342] mb-4">
                Timing & Access
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Class Timing:</strong> Mon–Fri (5:30 PM – 7:30 PM)
                </li>
                <li>
                  <strong>Live Trading (Offline):</strong> Mon–Fri (10:30 AM –
                  5:00 PM) – Full Day
                </li>
                <li>
                  <strong>Video Access:</strong> 3 Months
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#0A2342] mt-8 mb-4">
                Included Features
              </h2>
              <ul className="space-y-3">
                {includedFeatures.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <CheckCircle className="text-green-500 mt-1 w-4 h-4" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-red-600 italic mt-6">
                Note: Only Offline Batch includes daily full-time live trading
                support (10:30 AM – 5:00 PM). Online batch includes 3 days/week
                live trading for 2 hours.
              </p>

              <div className="mt-6">
                <Link href="/#contact" passHref>
                  <Button className="bg-[#0A2342] hover:bg-[#0A4223] text-white">
                    Buy Now
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
