import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const testimonials = [
  {
  id: 1,
  name: "Karan",
  role: "Full-time Trader",
  content: " Sudhanshu Sir is one of the finest trading coaches, known for his highly accurate trade strategies. Thank you, Sir, for opening a class in our town, Sasaram!",
  image: "/karan.webp",
  rating: 5
}
,
  {
  id: 2,
  name: "Prateek",
  role: "Full-time Trader",
  content: "I learned Forex trading from Sudhanshu Sir in July 2024. He provided me with a solid strategy and effective risk management formulas for trading. Thanks to Sudhanshu Sir and TradingWalla Academy!",
  image: "/prateek.webp",
  rating: 5
},

  {
  id: 3,
  name: "Shagun",
  role: "Full-time Trader",
  content: "After exploring many courses available in the market, TradingWala has offered the most valuable and reliable content, especially considering the price. It's a wholesome package that covers stock market concepts from basics to advanced levels. I no longer need to search for any other courses. All thanks to my mentor, Sudhanshu Sir — such a skilled and dedicated person. My recommendation is absolutely at the top!",
  image: "/shagun.webp",
  rating: 4
}

]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[#0A4223] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-3 bg-green-500/20 text-green-300 hover:bg-green/30 border-green-500/50">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories From Our Students</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from traders who have transformed their financial futures with our educational programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={cn(
                "bg-white/5 backdrop-blur-sm rounded-lg p-8 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] border border-white/10",
                index === 1 ? "md:-mt-8" : ""
              )}
            >
              <div className="absolute top-6 right-8 text-[#E6AF2E] opacity-20">
                <Quote className="h-16 w-16" />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-14 w-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < testimonial.rating ? "text-[#E6AF2E] fill-[#E6AF2E]" : "text-gray-500"
                    )}
                  />
                ))}
              </div>
              
              <p className="text-gray-300 relative z-10">
                "{testimonial.content}"
              </p>
              
              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}