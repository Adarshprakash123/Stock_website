'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Header } from './header';
import { Footer } from './footer';
import { HeroSection } from './hero-section';
import Link from 'next/link';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const chartData = {
  labels: ['Class Hours', 'Live Support (Online)', 'Live Support (Offline)'],
  datasets: [
    {
      label: 'Hours per Week',
      data: [10, 6, 27],
      backgroundColor: ['#0A2342', '#1E90FF', '#28a745'],
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
      text: 'Live Training & Support Comparison',
      font: {
        size: 16,
      },
    },
  },
};

const features = [
  "✅ Everything in Online Plan + Full Offline Access",
  "✅ Full-Day Live Trading Room (Hands-on Market Training)",
  "✅ In-Class Practice, Strategy Drills, Instant Feedback",
  "✅ Real-time Mentorship with Faculty",
  "✅ Performance Tracking & Analysis",
  "✅ Group Discussions, Case Studies",
  "✅ Personalised Trading System Creation",
  "✅ Lifetime Community Access",
  "✅ Certificate of Completion",
  "✅ Scholarship Offer (Limited Seats)",
];

export default function OnlineClass() {
  return (
    <>
    <Header/>
    {/* <HeroSection/> */}
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-4" variant="outline">Online + Offline Class</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">The Most Complete Trading Plan</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Includes full online access, lifetime mentorship, offline support, and hands-on market training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-[#0A2342] mb-2">Timing & Access</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Live Class Timing:</strong> Mon–Fri (5:30 PM – 7:30 PM)</li>
                <li><strong>Live Trading Support:</strong> 3 Days/Week (12:00 PM – 2:00 PM via Zoom) – <strong>Lifetime</strong></li>
                <li><strong>Video Access:</strong> 3 Months</li>
                <li><strong>Offline Live Trading:</strong> Mon–Fri (10:30 AM – 5:00 PM)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#0A2342] mb-2">Included Features</h2>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700 gap-2">
                    <CheckCircle className="text-green-500 mt-1 w-4 h-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-red-600 italic mt-4">
              Note: Only Offline Batch includes daily full-time live trading support (10:30 AM – 5:00 PM).
              Online batch includes 3 days/week live trading for 2 hours.
            </p>

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
    <Footer/>
    </>
  );
}
