import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const posts = [
    {
      title: "Understanding Technical Analysis",
      excerpt: "Learn the fundamentals of technical analysis and how to read market charts effectively.",
      date: "March 15, 2024",
      category: "Technical Analysis"
    },
    {
      title: "Risk Management Strategies",
      excerpt: "Discover proven risk management techniques used by professional traders.",
      date: "March 12, 2024",
      category: "Trading Strategy"
    },
    {
      title: "Psychology of Trading",
      excerpt: "Master the mental aspects of trading and develop a winning mindset.",
      date: "March 10, 2024",
      category: "Trading Psychology"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge className="mb-3" variant="outline">Blog</Badge>
          <h1 className="text-4xl font-bold mb-4">Trading Insights</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert analysis, trading strategies, and market insights to help you become a better trader.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <Badge className="mb-3" variant="secondary">{post.category}</Badge>
                <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}