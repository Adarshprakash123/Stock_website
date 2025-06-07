import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  TrendingUp,
  Award,
  Clock,
  BadgeCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white mx-9">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="order-2 lg:order-1">
            <Badge className="mb-3" variant="outline">
              About Us
            </Badge>
            <h2 className="text-3xl md:text-3xl font-bold mb-6">
              We Transform <span className="text-yellow-600">Beginners </span>
              Into Skilled Traders
            </h2>
            <p className="max-w-prose text-gray-700 text-base leading-relaxed tracking-wide text-justify border-l-4 border-[#E6AF2E] pl-4 bg-yellow-50/40 rounded-md shadow-sm mb-6">
              I’m Sudhanshu Raj — the founder of TRADINGWALLA™, a trademarked
              brand built to simplify trading education in India.
            </p>
            <p className="max-w-prose text-gray-700 text-base leading-relaxed tracking-wide text-justify border-l-4 border-[#E6AF2E] pl-4 bg-yellow-50/40 rounded-md shadow-sm mb-6">
              Like many, I started with a regular 9–5 job. But in 2020, during
              the lockdown, I made a decision that changed everything. I left my
              job and took a deep dive into the stock market — not just to
              trade, but to truly understand it.
            </p>

            <p className="max-w-prose text-gray-700 text-base leading-relaxed tracking-wide text-justify border-l-4 border-[#E6AF2E] pl-4 bg-yellow-50/40 rounded-md shadow-sm mb-6">
              It wasn’t easy. I studied hard, enrolled in courses from top
              academies, and spent countless hours learning from both wins and
              losses. Over time, trading became more than a source of income —
              it became a passion and a purpose.
            </p>

            <p className="max-w-prose text-gray-700 text-base leading-relaxed tracking-wide text-justify border-l-4 border-[#E6AF2E] pl-4 bg-yellow-50/40 rounded-md shadow-sm mb-6">
              As I grew, so did the desire to teach. I’ve trained over 2,250
              students so far, both online and offline. I’m also an NISM
              certified trainer and have worked as a faculty member at some of
              India’s top trading academies. For the last two years, I’ve
              partnered with Trading Bulls Academy to deliver high-quality
              education to aspiring traders.
            </p>

            <p className="max-w-prose text-gray-700 text-base leading-relaxed tracking-wide text-justify border-l-4 border-[#E6AF2E] pl-4 bg-yellow-50/40 rounded-md shadow-sm mb-6">
              My journey — from a labourer to a full-time mentor and
              entrepreneur — has also been featured in 20+ leading media
              platforms, including Attention India, Forbes of India,
              StartupStory18, News18Nation, Zee News World, and more, under the
              title “From Labourer to Mentor: A Story of Struggles, Survival &
              Self-Belief.”
            </p>

            <p className="max-w-prose text-gray-700 text-base leading-relaxed tracking-wide text-justify border-l-4 border-[#E6AF2E] pl-4 bg-yellow-50/40 rounded-md shadow-sm mb-6">
              TRADINGWALLA™ is more than just a brand—it’s a mission to bring
              clear, practical, and no-fluff stock market education to every
              corner of India. From course structure to mentorship, everything
              here is designed to help you trade like a professional — with
              discipline, strategy, and diversification.
            </p>

            <div className="grid grid-cols-1   md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-green-200 rounded-full p-2 mt-1">
                  <BadgeCheck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 mt-2">Equity</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-200 rounded-full p-2 mt-1">
                  <BadgeCheck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 mt-2">
                    MTF (Margin Trading Facility)
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-200 rounded-full p-2 mt-1">
                  <BadgeCheck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 mt-2">ETFs</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-200 rounded-full p-2 mt-1">
                  <BadgeCheck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 mt-2">
                    Swing & Long-Term Investments
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-200 rounded-full p-2 mt-1">
                  <BadgeCheck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 mt-2">Crypto</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-200 rounded-full p-2 mt-1">
                  <BadgeCheck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 mt-2">U.S. Markets</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-200 rounded-full p-2 mt-1">
                  <BadgeCheck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 mt-2">MCX</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-200 rounded-full p-2 mt-1">
                  <BadgeCheck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 mt-2">Forex</h4>
                </div>
              </div>
            </div>

            <Button className="bg-[#0A4223] hover:bg-[#0D2E5A]">
              Learn Our Story
            </Button>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <div className="relative w-full h-[290px] sm:h-[340px] md:h-[440px] lg:h-[700px] xl:h-[640px] rounded-lg overflow-hidden border-4 border-[#0A4223] shadow-2xl">
                <Image
                  src="/IMG2.JPG"
                  alt="Trading Expert"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Stats card overlay */}
              {/* <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 max-w-xs border-t-4 border-[#E6AF2E]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#E6AF2E] rounded-full p-3 shadow-md">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">10,000+</h4>
                    <p className="text-sm text-gray-600">Students Trained</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#0A2342] rounded-full p-3 shadow-md">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">5+ Years</h4>
                    <p className="text-sm text-gray-600">Industry Experience</p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#E6AF2E] rounded-full opacity-10"></div>
            <div className="absolute -bottom-10 right-20 w-20 h-20 bg-[#0D2E5A] rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
