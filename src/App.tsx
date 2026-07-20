import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider'
import { BrandStatistics } from '@/components/sections/BrandStatistics'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Hero } from '@/components/sections/Hero'
import { MembershipPlans } from '@/components/sections/MembershipPlans'
import { RecoveryExperience } from '@/components/sections/RecoveryExperience'
import { Testimonials } from '@/components/sections/Testimonials'
import { TransformationStories } from '@/components/sections/TransformationStories'
import { WhyEasyFitness } from '@/components/sections/WhyEasyFitness'

function App() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <main>
        <Hero />
        <BrandStatistics />
        <WhyEasyFitness />
        <TransformationStories />
        <RecoveryExperience />
        <MembershipPlans />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScrollProvider>
  )
}

export default App
