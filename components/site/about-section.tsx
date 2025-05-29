import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, TrendingUp, Award, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Badge className="mb-3" variant="outline">About Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We Transform Beginners Into Skilled Traders</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2018, TradePro has been at the forefront of trading education, helping thousands of students achieve financial independence through strategic market trading.
            </p>
            <p className="text-gray-600 mb-6">
              Our expert instructors bring decades of real-world trading experience to provide you with practical, actionable strategies that work in today's markets.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Market Expertise</h4>
                  <p className="text-sm text-gray-600">Industry-leading analysis and insights</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Proven Results</h4>
                  <p className="text-sm text-gray-600">92% student success rate</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Flexible Learning</h4>
                  <p className="text-sm text-gray-600">Learn at your own pace</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Community Support</h4>
                  <p className="text-sm text-gray-600">Join our trading community</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-[#0A2342] hover:bg-[#0D2E5A]">
              Learn Our Story
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Trading Expert"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Stats card overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-6 max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#E6AF2E] rounded-full p-3">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">10,000+</h4>
                    <p className="text-sm text-gray-600">Students Trained</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#0A2342] rounded-full p-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">5+ Years</h4>
                    <p className="text-sm text-gray-600">Industry Experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#E6AF2E] rounded-full opacity-10"></div>
            <div className="absolute -bottom-10 right-20 w-20 h-20 bg-blue-600 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}