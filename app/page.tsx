import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { CareMethodsSection } from "@/components/care-methods-section"
import { AboutPreview } from "@/components/about-preview"
import { FAQSection } from "@/components/faq-section"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <CareMethodsSection />
      <AboutPreview />
      <FAQSection />
      <ContactForm />
    </>
  )
}
