'use client';

import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Header } from './header';
import { Footer } from './footer';
import { HeroSection } from './hero-section';
import Link from 'next/link';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const includedFeatures = [
  "16 Weeks of Pre-recorded Video Classes",
  "3 Days/Week Live Trading Support (12:00 PM to 2:00 PM via Zoom) – Lifetime",
  "3 Months Video Access Only",
  "Live Online Classes with Interaction",
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
  "3 Months Recording Access",
  "Weekly Doubt Sessions",
  "Community Group Access (Lifetime)",
  "Certificate of Completion",
  "Scholarship Offer (Limited)",
];

const notIncludedFeatures = [
  "Offline Class Access",
  "Full-day Live Trading (only 2 hrs/day online)",
];

const chartData = {
  labels: ['Video Access (Months)', 'Live Support (hrs/week)', 'Total Topics Covered'],
  datasets: [
    {
      label: 'Plan Metrics',
      data: [3, 6, 12],
      backgroundColor: ['#2563eb', '#10b981', '#f59e0b'],
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
      text: 'Offline Class Plan Metrics Overview',
      font: { size: 16 },
    },
  },
};

export default function OfflineClassPage() {
  return (
    <>
    <Header/>
    {/* <HeroSection/> */}
    <div className="min-h-screen bg-gray-50 py-12 mt-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-3" variant="outline">Plan 3: Offline Master Class</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">Offline Master Class – ₹19999</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive hybrid plan combining advanced strategy, market exposure, and community mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Features Section */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A2342] mb-4">Included Features</h2>
            <ul className="space-y-3">
              {includedFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="text-green-500 mt-1 w-4 h-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-[#b91c1c] mt-8 mb-4">Not Included</h2>
            <ul className="space-y-3">
              {notIncludedFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <XCircle className="text-red-500 mt-1 w-4 h-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
  <Link href="/#contact" passHref>
    <Button className="bg-[#0A2342] hover:bg-[#0A4223] text-white">
      Buy Now
    </Button>
  </Link>
</div>
          </div>

          {/* Chart Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
}
