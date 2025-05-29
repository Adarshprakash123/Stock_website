"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

export function MasterclassSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Payment gateway integration will be added here
  }

  return (
    <section id="masterclass" className="py-20 bg-gradient-to-b from-[#0A2342] to-[#13315C]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-3 bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">Live Masterclass</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">2-Hour Trading Masterclass</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join our intensive masterclass to learn proven trading strategies from industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">What You'll Learn</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Market Analysis Techniques</h4>
                  <p className="text-gray-300">Learn to identify profitable trading opportunities</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Risk Management</h4>
                  <p className="text-gray-300">Master the art of protecting your capital</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Live Trading Demo</h4>
                  <p className="text-gray-300">Watch expert traders in action</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-center">
              <div className="flex-1 bg-white/5 rounded-lg p-4">
                <Clock className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white">Duration</h4>
                <p className="text-gray-300">2 Hours</p>
              </div>
              
              <div className="flex-1 bg-white/5 rounded-lg p-4">
                <Users className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white">Batch Size</h4>
                <p className="text-gray-300">Limited Seats</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-white">
            <h3 className="text-2xl font-bold text-[#0A2342] mb-6">Register Now</h3>
            <p className="text-gray-600 mb-6">
              Secure your spot in our upcoming masterclass. After registration, you'll be added to our exclusive WhatsApp group.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                  WhatsApp Number
                </label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <Button type="submit" className="w-full bg-[#0A2342] hover:bg-[#0D2E5A] text-white">
                Proceed to Payment
              </Button>

              <p className="text-sm text-gray-500 text-center mt-4">
                By registering, you agree to our terms and conditions.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}