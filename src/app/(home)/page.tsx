import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CounterSection } from "@/components/counter-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CTASection } from "@/components/cta-section"
import PortfolioSection from "@/components/portfolio-section"

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <CounterSection />
        <TestimonialSection />
        <CTASection />
        <PortfolioSection />
      </main>
    </>
  )
}
