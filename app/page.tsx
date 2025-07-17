import {
  FAQ,
  Header,
  Hero,
  Pricing,
  Stats,
  Steps,
  Testimonials,
  TestimonialsVideo,
  WhyChooseUs,
  WorkWithMe,
} from '@/components/sections'
import { StructuredData } from '@/components/seo'

export default function Home() {
  return (
    <>
      <StructuredData />

      <div className="fixed inset-0 bg-[#0a0a0a] z-[-2]" />
      <div className="absolute top-0 z-[-1] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(229,208,255,0.3),rgba(255,255,255,0))]" />

      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Stats />
        <WorkWithMe />
        <Testimonials />
        <TestimonialsVideo />
        <Steps />
        <Pricing />
        <FAQ />
      </main>
    </>
  )
}
