import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B3D2E] via-[#0A5730] to-[#0F6B38] z-0"></div>

      {/* Overlay pattern */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Master The Markets with{" "}
              <span className="text-[#E6AF2E]">Confidence</span>
            </h1>
            <p className="max-w-prose text-white text-base leading-relaxed tracking-wide text-justify border-l-4 border-[#E6AF2E] pl-4  rounded-md shadow-sm mb-6">
              Learn how the stock market really works — from someone who’s been
              there. Our practical, no-fluff training helps beginners grow into
              confident traders. Over 2,250 students have already taken the
              leap. Ready to join them?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#E6AF2E] hover:bg-[#D4A429] text-[#0A2342]"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-black hover:text-white border-white hover:bg-white/10"
              >
                Free Webinar
              </Button>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2">
                <div className="bg-blue-500/20 rounded-full p-2">
                  <BarChart2 className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-gray-300">10,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-500/20 rounded-full p-2">
                  <BarChart2 className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-gray-300">92% Success Rate</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/IMG1.webp"
                alt="TradingWalla Professional"
                width={500}
                height={400}
                className="rounded-lg object-cover max-h-[550px] w-full"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-24 w-24 h-24 bg-[#E6AF2E] rounded-full opacity-50 blur-lg"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-full opacity-30 blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
