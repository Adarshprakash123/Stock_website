'use client';

import { Footer } from '@/components/site/footer';
import { Header } from '@/components/site/header';
import { Badge } from '@/components/ui/badge';

const blogs = [
  {
    title: '1. What is the Stock Market and How Does it Work in India?',
    intro: 'Still confused about Sensex, Nifty, BSE, and NSE? This guide breaks down exactly how the Indian stock market works — in the simplest way possible.',
    date: '📅 Updated for 2024',
    tag: 'Stock Market Basics',
    content: `The Indian stock market operates on a simple system of buyers and sellers trading ownership in companies through exchanges like NSE and BSE. This blog explains how companies get listed, what indices like Sensex and Nifty represent, how brokers and demat accounts work, and why lakhs of Indians are shifting from savings to equity. Whether you're a student, working professional, or housewife — this is your first step to entering the market with clarity.`,
  },
  {
    title: '2. Intraday Trading vs Swing Trading – Which is Better for You?',
    intro: 'Do you want quick profits by 3:30 PM or relaxed trades held for a few days? Understand the difference between intraday and swing, with real pros and cons from a trader\'s perspective.',
    date: '📅 Trending Comparison',
    tag: 'Trading Styles',
    content: `Intraday trading means entering and exiting positions within the same day, often chasing short-term moves. Swing trading means holding trades for 2–10 days, aiming to catch short-term trends. Intraday offers fast action but demands more screen time and discipline. Swing allows breathing room but needs patience. This blog helps you assess which one fits your personality, capital, and time availability best.`,
  },
  {
    title: '3. Top 5 Mistakes Beginners Make in Trading (and How to Avoid Them)',
    intro: 'Most beginners lose money not because they’re unlucky — but because they repeat these 5 common mistakes. Learn what NOT to do if you want to stay in the game.',
    date: '📅 Every Beginner Must Read',
    tag: 'Beginner Tips',
    content: `From overtrading to not using a stop loss, beginner traders often sabotage their own success. This blog uncovers five major blunders: chasing tips, revenge trading, poor risk management, lack of education, and unrealistic expectations. Plus, you’ll learn practical fixes and mindset shifts to stay safe while learning the ropes.`,
  },
  {
    title: '4. Best Stocks for Beginners in India (2024 Edition)',
    intro: 'If you\'re starting out, avoid risky smallcaps and get these beginner-friendly, steady stocks in your watchlist. Safe doesn’t mean boring!',
    date: '📅 SEBI-friendly picks',
    tag: 'Safe Stocks',
    content: `This article gives you a beginner-friendly stock list that includes companies with strong fundamentals, consistent performance, and low volatility. Learn why stocks like HDFC Bank, TCS, Infosys, and Asian Paints are favorites for new traders. We also explain how to evaluate a stock based on PE ratio, book value, and sector strength.`,
  },
  {
    title: '5. What is Option Trading? A Beginner-Friendly Explanation',
    intro: 'Option trading sounds like rocket science — until you read this blog. Understand calls, puts, premiums, and strike prices without touching a textbook.',
    date: '📅 Explained with examples',
    tag: 'Options',
    content: `Options give you the right (but not the obligation) to buy or sell a stock at a fixed price. This blog explains the difference between call and put options, why people trade them, and how risk/reward is managed. We also include a simple example with Nifty options to help you visualize how a single trade works from entry to exit.`,
  },
  {
    title: '6. Is Stock Market Gambling or a Real Career Option?',
    intro: 'Your relatives may call it “jua,” but this blog explains the real truth — backed by data, logic, and career paths in trading.',
    date: '📅 Break the myth',
    tag: 'Career Advice',
    content: `This blog tackles the biggest myth: "Stock market is gambling." You'll understand how risk in trading is controllable, unlike gambling. We share career paths like trader, analyst, investment advisor, and educator — and how India's financial industry is evolving fast. Also includes interviews from people who turned full-time traders after college or jobs.`,
  },
  {
    title: '7. Risk Management Techniques that Actually Work',
    intro: 'Worried about blowing up your account? These are tested methods for managing capital, setting stop-losses, and surviving red days.',
    date: '📅 Trusted by real traders',
    tag: 'Risk Management',
    content: `This article covers fixed percentage risk, position sizing, stop-loss planning, and risk-to-reward ratio management. It includes real examples like "How to trade with 5L capital and only risk ₹2,000 per day," and how to recover from a loss week. These strategies are beginner-safe and scalable.`,
  },
  {
    title: '8. How to Read Candlestick Charts Like a Pro',
    intro: 'Green, red, wick, body — what does it all mean? Learn how to use candlesticks for entry/exit like professionals do.',
    date: '📅 For Technical Analysis Fans',
    tag: 'Chart Reading',
    content: `Candlestick patterns help you understand market psychology. This blog covers common patterns like Doji, Hammer, Engulfing, and Morning Star — with real chart examples. Learn when to trust a signal, when to avoid traps, and how to combine candles with support/resistance.`,
  },
  {
    title: '9. How Much Capital Do You Need to Start Trading in India?',
    intro: '₹5,000? ₹50,000? ₹5 Lakh? This blog shows you how to start trading with any budget — and where each amount fits.',
    date: '📅 Budget planning blog',
    tag: 'Capital Planning',
    content: `Whether you start with 5K or 5L, this blog shows you how to allocate capital across equity, F&O, and learning. We include setups for beginners using 1x leverage, proper stop-loss rules, and how to grow capital step-by-step instead of trying to double it in one shot.`,
  },
  {
    title: '10. Trading Psychology: Why Your Emotions Control Your P&L',
    intro: 'Fear, greed, FOMO — they’re not just words, they’re why 90% traders fail. Learn how to master your emotions before they master you.',
    date: '📅 Mindset Matters',
    tag: 'Psychology',
    content: `Discipline, patience, and confidence aren’t just buzzwords — they define your trading outcome. This blog shows how to build mental routines, detach from money pressure, and stick to your system even after a loss. Includes breathing exercises, journaling tips, and trader psychology hacks that actually work.`,
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-24 pb-16 text-gray-800 mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <header className="text-center mb-14">
            <Badge variant="outline" className="mb-4 text-sm">📘 Trending Stock Market Blogs (India)</Badge>
            <h1 className="text-4xl font-bold">Ultimate Blog Guide for Indian Traders</h1>
            <p className="mt-4 text-gray-600 text-base max-w-2xl mx-auto">
              Deep-dive articles on stock market education, psychology, strategy, and tools for Indian traders & investors.
            </p>
          </header>

          {blogs.map((blog, index) => (
            <section key={index} className="mb-16 border-b border-gray-200 pb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">{blog.title}</h2>
              <div className="flex flex-wrap items-center text-sm text-gray-500 gap-3 mb-2">
                <Badge variant="secondary">{blog.tag}</Badge>
                <span>{blog.date}</span>
              </div>
              <div className="mb-4">
                <strong>Intro:</strong>
                <p className="text-gray-700">{blog.intro}</p>
              </div>
              <div>
                <strong>Full Content:</strong>
                <p className="text-gray-800 leading-relaxed">{blog.content}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
