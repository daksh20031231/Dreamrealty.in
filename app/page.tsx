'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Stats } from '@/components/stats'
import { Services } from '@/components/services'
import { FeaturedProperties } from '@/components/featured-properties'
import { ChannelPartnerProjects } from '@/components/channel-partner-projects'
import { RegionsServed } from '@/components/regions-served'
import { WhyChooseUs } from '@/components/why-choose-us'
import { JoinUs } from '@/components/join-us'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ListPropertyPopup } from '@/components/list-property-popup'
import { SeoJsonLd } from '@/components/seo-json-ld'
import { LocalSeoContent } from '@/components/local-seo-content'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoJsonLd />
      <Navbar />
      <Hero />
      <RegionsServed />
      <ChannelPartnerProjects />
      <FeaturedProperties />
      <About />
      <Services />
      <LocalSeoContent />
      <WhyChooseUs />
      <Stats />
      <JoinUs />
      <Contact />
      <Footer />
      <ListPropertyPopup />
    </div>
  )
}
