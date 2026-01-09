import {
  FAQ,
  Header,
  Hero,
  Stats,
  Steps,
  Testimonials,
  TestimonialsVideo,
  WhyChooseUs,
  WorkWithMe,
} from '@/components/sections'
import { StructuredData } from '@/components/seo'
import { VideoCarousel } from '@/components/sections/video-carousel'

const videos = [
  {
    id: '1',
    videoPath: '/videos/video1.mp4',
    poster: '/videos/video1-poster.jpg',
    title: 'Vidéo 1',
    videoId: 'video1',
    subtitle: 'Sous-titre 1',
  },
  {
    id: '2',
    videoPath: '/videos/video2.mp4',
    poster: '/videos/video2-poster.jpg',
    title: 'Vidéo 2',
    videoId: 'video2',
    subtitle: 'Sous-titre 2',
  },
  {
    id: '3',
    videoPath: '/videos/video3.mp4',
    poster: '/videos/video3-poster.jpg',
    title: 'Vidéo 3',
    videoId: 'video3',
    subtitle: 'Sous-titre 3',
  },
  {
    id: '4',
    videoPath: '/videos/video4.mp4',
    poster: '/videos/video4-poster.jpg',
    title: 'Vidéo 4',
    videoId: 'video4',
    subtitle: 'Sous-titre 4',
  },
  {
    id: '5',
    videoPath: '/videos/video5.mp4',
    poster: '/videos/video5-poster.jpg',
    title: 'Vidéo 5',
    videoId: 'video5',
    subtitle: 'Sous-titre 5',
  },
];

export default function Home() {
  return (
    <>
      <StructuredData />

      <div className="fixed inset-0 bg-[#0a0a0a] z-[-2]" />
      <div className="absolute top-0 z-[-1] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(229,208,255,0.3),rgba(255,255,255,0))]" />

      <Header />
      <main>
        <Hero />
        <VideoCarousel 
          videos={videos}
          backgroundColor="rgba(10, 10, 10, 1)" // Couleur sombre du site au lieu du blanc
        />
        <WhyChooseUs />
        <Stats />
        <WorkWithMe />
        <Testimonials />
        <Steps />
        {/* <Pricing /> */}
        <FAQ />
        <TestimonialsVideo />
      </main>
    </>
  )
}
