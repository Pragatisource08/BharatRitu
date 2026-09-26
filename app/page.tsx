import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import HowItWorks from '@/components/HowItWorks'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <HowItWorks />
      <Footer />
    </main>
  )
}