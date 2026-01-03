import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import TestimonialsSection from '@/components/testimonials-section'
import StatsSection from '@/components/stats-section'
import CTASection from '@/components/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
