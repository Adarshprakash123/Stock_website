import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, CheckCircle, BookOpen, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Video } from 'lucide-react';


const courses = [
  {
    id: 1,
    title: "Recorded Course Only",
    // description: "Master the basics of stock market investing and build a solid foundation for your trading journey.",
    image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "Rs 5999",
    duration: "16 weeks",
    studentsCount: "1000",
    popular: true,
    features: ["Pre-recorded Classes", "Live Trading Support (3 times/week, 12:00–2:00 PM)", " No Offline Access", "No Live Online Class Access"]
  },
  {
    id: 2,
    title: "Online Live Class",
    // description: "Learn how to read charts, identify patterns and make profitable trading decisions based on technical indicators.",
    image: "https://images.pexels.com/photos/6770609/pexels-photo-6770609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "Rs 8999",
    duration: "Lifetime access",
    studentsCount: "1,800+",
    popular: false,
    features: ["Live Online Classes (Monday to Friday, 5:30–7:30 PM)", "Live Trading Support (12:00–2:00 PM via Zoom, Lifetime access)", "Live Q&A & Doubt Sessions"]
  },
  {
    id: 3,
    title: "Offline Master Class",
    // description: "Discover powerful options trading strategies to generate consistent income and manage risk effectively.",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "Rs 19999",
    duration: "12 weeks",
    studentsCount: "1,200+",
    popular: true,
    features: ["Offline Class (Monday to Friday, 5:30–7:30 PM)", "Includes Online Class Access", "Spread Trading", "Lifetime Access to Online Community Group"]
  }
]

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-3" variant="outline">Our Programs</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformative Trading Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive courses are designed to take you from beginner to expert with practical, actionable trading strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow-md">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {course.popular && (
                  <Badge className="absolute top-4 right-4 bg-[#E6AF2E] hover:bg-[#D4A429] text-black">
                    Popular
                  </Badge>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">{course.title}</h3>
              </CardHeader>
              
              <CardContent>
                {/* <p className="text-gray-600 mb-4">{course.description}</p> */}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{course.studentsCount} Students</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex items-center justify-between border-t pt-4">
                <span className="text-lg font-bold text-[#0A2342]">{course.price}</span>
                <Button size="sm" className="bg-[#0A4223] hover:bg-[#b0b51e]">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-[#0A2342] text-[#0A2342]">
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}