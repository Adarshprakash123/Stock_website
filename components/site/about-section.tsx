import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white mx-4 sm:mx-6 md:mx-9">
      <div className="container mx-auto px-4">
        {/* First Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section - First on mobile */}
          <div className="order-1 lg:order-2">
            <Badge className="mb-3" variant="outline">
              About Us
            </Badge>
            <h2 className="text-3xl md:text-3xl font-bold mb-6">
              We Transform <span className="text-yellow-600">Beginners </span>
              Into Skilled Traders
            </h2>
            <p className="max-w-prose text-gray-700 text-base leading-relaxed tracking-wide text-justify px-2 py-1 rounded-md shadow-sm mb-6">
              Tradingwalla™ is a registered and trademarked stock market
              education brand built to simplify and professionalize trading
              education in India. We specialize in delivering practical,
              ethical, and skill-based learning to individuals who want to
              become confident and independent traders. From beginners who are
              just starting out to those who want to refine their strategies,
              Tradingwalla offers structured programs that focus on real-world
              applications — not just theory. What sets us apart is our emphasis
              on clarity, consistency, and mindset development. We train our
              students with live market examples, strategy-based sessions,
              psychology modules, and risk management frameworks. Tradingwalla
              is proud to serve not just individual learners, but also
              contribute to the education ecosystem as a content and training
              partner. We are currently an official education partner of Trading
              Bulls Academy and collaborate with multiple reputed academies
              across India by designing content, delivering faculty training,
              and taking classes under their brand umbrellas. Our mission is
              simple: To bring transparent, practical, and high-quality stock
              market education to every serious learner in the country — online
              and offline. We operate fully equipped classroom centers, including
              our newly launched branch in Sasaram, and continue to expand
              across India.
            </p>
          </div>

          {/* Image Section - Second on mobile */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative z-10">
              <div className="relative w-full h-[300px] sm:h-[360px] md:h-[440px] lg:h-[600px] xl:h-[640px] rounded-lg overflow-hidden border-4 border-[#0A4223] shadow-2xl">
                <Image
                  src="/IMG3.webp"
                  alt="Trading Expert"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#E6AF2E] rounded-full opacity-10"></div>
            <div className="absolute -bottom-10 right-20 w-20 h-20 bg-[#0D2E5A] rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          {/* Text Section - First on mobile */}
          <div className="order-1 lg:order-1">
            <h2 className="text-3xl md:text-3xl font-bold mb-6 mt-14">
              Building Markets: The Story Behind{" "}
              <span className="text-3xl font-bold text-yellow-600">
                Sudhanshu Raj’s
              </span>{" "}
              Trading Empire
            </h2>
            <p className="max-w-prose text-gray-700 text-base leading-relaxed tracking-wide text-justify pl-4 rounded-md shadow-sm mb-6">
              I’m Sudhanshu Raj — the founder of TRADINGWALLA™, a trademarked
              brand built to simplify trading education in India. Like many, I
              started with a regular 9–5 job. But in 2020, during the lockdown,
              I made a decision that changed everything. I left my job and took
              a deep dive into the stock market — not just to trade, but to
              truly understand it. It wasn’t easy. I studied hard, enrolled in
              courses from top academies, and spent countless hours learning
              from both wins and losses. Over time, trading became more than a
              source of income — it became a passion and a purpose. As I grew,
              so did the desire to teach. I’ve trained over 2,250 students so
              far, both online and offline. I’m also an NISM certified trainer
              and have worked as a faculty member at some of India’s top trading
              academies. For the last two years, I’ve partnered with Trading
              Bulls Academy to deliver high-quality education to aspiring
              traders. My journey — from a labourer to a full-time mentor and
              entrepreneur — has also been featured in 20+ leading media
              platforms, including Attention India, Forbes of India,
              StartupStory18, News18Nation, Zee News World, and more, under the
              title “From Labourer to Mentor: A Story of Struggles, Survival &
              Self-Belief.” TRADINGWALLA™ is more than just a brand—it’s a
              mission to bring clear, practical, and no-fluff stock market
              education to every corner of India. From course structure to
              mentorship, everything here is designed to help you trade like a
              professional — with discipline, strategy, and diversification.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Equity",
                "MTF (Margin Trading Facility)",
                "ETFs",
                "Swing & Long-Term Investments",
                "Crypto",
                "U.S. Markets",
                "MCX",
                "Forex",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-green-200 rounded-full p-2 mt-1">
                    <BadgeCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 mt-2">{item}</h4>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-[#0A4223] hover:bg-[#0D2E5A]">
              Learn Our Story
            </Button>
          </div>

          {/* Image Section - Second on mobile */}
          <div className="order-2 lg:order-2 relative">
            <div className="relative z-10">
              <div className="relative w-full h-[300px] sm:h-[360px] md:h-[440px] lg:h-[600px] xl:h-[640px] rounded-lg overflow-hidden border-4 border-[#0A4223] shadow-2xl">
                <Image
                  src="/IMG2.webp"
                  alt="Trading Expert"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#E6AF2E] rounded-full opacity-10"></div>
            <div className="absolute -bottom-10 right-20 w-20 h-20 bg-[#0D2E5A] rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
