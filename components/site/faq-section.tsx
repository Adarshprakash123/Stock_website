"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    question: "Do I need prior trading experience to join your courses?",
    answer: "No, our courses are designed for all levels. We have beginner programs that start with the fundamentals and gradually progress to more advanced concepts. Each course clearly indicates the experience level required."
  },
  {
    question: "How long will it take to see results from the strategies I learn?",
    answer: "Results vary based on your dedication, learning pace, and market conditions. Most students begin to see improvement in their trading decisions within 4-8 weeks of consistent practice. However, becoming a consistently profitable trader typically takes 6-12 months of dedicated effort."
  },
  {
    question: "Do you offer any guarantees on trading performance?",
    answer: "While we provide high-quality education and proven strategies, we cannot guarantee specific trading results as market conditions change and individual implementation varies. Trading involves risk, and past performance is not indicative of future results."
  },
  {
    question: "What support do I get after purchasing a course?",
    answer: "All courses include access to our private community forum, regular Q&A sessions, and 6 months of email support. Premium courses also include weekly live trading sessions and personal strategy reviews with our instructors."
  },
  {
    question: "Can I access the course content forever?",
    answer: "Yes, once you purchase a course, you have lifetime access to the course materials, including any future updates we make to keep the content current with evolving market conditions."
  },
  {
    question: "Do you offer any free resources to get started?",
    answer: "Yes! We offer a free beginner's guide to trading, weekly market analysis newsletter, and regular webinars. These resources will give you a good taste of our teaching style before committing to a full course."
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-3" variant="outline">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our trading education programs.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 px-6 py-2 bg-white shadow-sm">
              <AccordionTrigger className="text-left font-medium text-[#0A2342] hover:text-[#0D2E5A] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center bg-[#0A4223] rounded-lg p-8 shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-gray-300 mb-6">
            Our team is ready to help you with any other questions you might have about our courses.
          </p>
          <div className="inline-block">
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 rounded-lg bg-[#E6AF2E] text-[#0A2342] font-medium hover:bg-[#D4A429] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}