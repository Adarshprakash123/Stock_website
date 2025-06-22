import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { HeroSection } from "@/components/site/hero-section";
import { CoursesSection } from "@/components/site/courses-section";
import { AboutSection } from "@/components/site/about-section";
import { TestimonialsSection } from "@/components/site/testimonials-section";
import { FaqSection } from "@/components/site/faq-section";
import { ContactSection } from "@/components/site/contact-section";
import { PopupForm } from "@/components/site/popup-form";
import { MasterclassSection } from "@/components/site/masterclass-section";
import { PaymentSuccessMessage } from "@/components/PaymentSuccessMessage";
import FloatingContactButtons from "@/components/ui/FloatingContactButtons"

 
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <PaymentSuccessMessage />
      <HeroSection />
      <CoursesSection />
      <AboutSection />
      <TestimonialsSection />
      <MasterclassSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <PopupForm />
      <FloatingContactButtons/>
      
    </main>
  );
}
