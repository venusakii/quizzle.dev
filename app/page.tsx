import { HeroSection } from "@/components/hero-section"
import { WhatIsQuizzle } from "@/components/what-is-quizzle"
import { ModesSection } from "@/components/modes-section"
import { InteractiveDemo } from "@/components/interactive-demo"
import { AIPowered } from "@/components/ai-powered"
import { UseCases } from "@/components/use-cases"
import { DailyChallenge } from "@/components/daily-challenge"
import { Testimonials } from "@/components/testimonials"
import { Community } from "@/components/community"
import { BlogSection } from "@/components/blog-section"
import { ContactFooter } from "@/components/contact-footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatIsQuizzle />
      <ModesSection />
      <InteractiveDemo />
      <AIPowered />
      <UseCases />
      <DailyChallenge />
      <Testimonials />
      <Community />
      <BlogSection />
      <ContactFooter />
      <CookieBanner />
    </main>
  )
}
