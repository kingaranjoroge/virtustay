import HeroSection from "@/components/landing-page/hero-section"
import FeaturesSection from "@/components/landing-page/features-section"
import HowItWorksSection from "@/components/landing-page/how-it-works-section"
import TestimonialsSection from "@/components/landing-page/testimonials-section"
import CTASection from "@/components/landing-page/cta-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}