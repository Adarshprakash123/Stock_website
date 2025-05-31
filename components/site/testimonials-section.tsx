import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Full-time Trader",
    content: "The technical analysis course completely transformed my trading approach. I went from struggling to identify profitable setups to consistently finding high-probability trades. Within three months, I was able to quit my day job and trade full-time.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Part-time Investor",
    content: "As a working professional, I needed something flexible that could fit my schedule. TradePro's courses were perfect - I could learn at my own pace and the strategies were easy to implement even with limited time. My portfolio has grown 32% since completing the program.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Retired Finance Professional",
    content: "After 30 years in finance, I thought I knew everything about the markets. TradePro's options course proved me wrong. Their innovative strategies have helped me generate consistent monthly income to supplement my retirement.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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