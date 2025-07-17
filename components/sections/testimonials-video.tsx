'use client'

import { ScrollAnimated } from '@/components/animations'
import { SectionTitle } from '@/components/ui/section-title'
import { Play } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const videoTestimonials = [
  { id: 1, vimeoId: "1101502548", thumbnail: "/images/thumbnail-1.png" },
  { id: 2, vimeoId: "1101502877", thumbnail: "/images/thumbnail-2.png" }
]

export const TestimonialsVideo = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  const handlePlayVideo = (vimeoId: string) => {
    setPlayingVideo(vimeoId)
  }

  return (
    <section 
      id="testimonials-video" 
      className="relative py-12 md:py-24 overflow-hidden scroll-mt-12"
    >
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-[#0a0a0a] pointer-events-none z-20" />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[rgb(180,120,255)]/8 blur-3xl animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '8s' }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[rgb(160,100,255)]/6 blur-3xl animate-pulse"
          style={{ animationDelay: '3s', animationDuration: '10s' }}
        />
        <div
          className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[rgb(200,140,255)]/6 blur-3xl animate-pulse"
          style={{ animationDelay: '5s', animationDuration: '7s' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl flex flex-col gap-12 px-9 lg:px-13 z-10">
        <ScrollAnimated delay={0.1}>
          <SectionTitle level="h2">Ils témoignent</SectionTitle>
        </ScrollAnimated>

        <ScrollAnimated delay={0.2}>
          <div className="relative rounded-2xl pt-10 pb-5 md:pb-7 px-5 md:px-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/8 via-black/50 to-[rgb(160,100,255)]/10 rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/5 to-transparent rounded-2xl" />
            <div className="absolute inset-0 border border-[rgb(229,208,255)]/20 rounded-2xl" />
            <div className="relative flex justify-center gap-6 flex-wrap z-10">
            {videoTestimonials.map((video) => (
              <div 
                key={video.id} 
                className="cursor-pointer group" 
                onClick={() => handlePlayVideo(video.vimeoId)}
              >
                <div className="relative rounded-xl overflow-hidden bg-[rgb(229,208,255)]/10 border border-[rgb(229,208,255)]/20 shadow-lg backdrop-blur-sm p-1 hover:scale-[1.02] transition-transform duration-300 w-[240px] h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/8 via-[#0f0f0f]/30 to-[rgb(160,100,255)]/10 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/3 to-transparent pointer-events-none" />

                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    {playingVideo === video.vimeoId ? (
                      <div className="relative w-full h-full rounded-xl overflow-hidden bg-[rgb(229,208,255)]/10 border border-[rgb(229,208,255)]/20 shadow-lg backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/8 via-[#0f0f0f]/30 to-[rgb(160,100,255)]/10 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/3 to-transparent pointer-events-none" />
                        <iframe
                          src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&color=b478ff&title=0&byline=0&portrait=0`}
                          className="absolute inset-0 w-full h-full rounded-xl object-cover"
                          style={{ border: 'none', objectFit: 'cover' }}
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 group-hover:bg-black/50 transition-colors duration-300 rounded-xl">
                          <div className="relative group/play">
                            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[rgb(180,120,255)]/20 via-[rgb(200,140,255)]/30 to-[rgb(160,100,255)]/20 blur-lg opacity-0 group-hover/play:opacity-100 transition-opacity duration-500" />
                            <div className="absolute -inset-1.5 rounded-full border border-white/20 group-hover/play:border-[rgb(180,120,255)]/50 transition-colors duration-300" />
                            <div className="absolute -inset-2 rounded-full border border-white/10 animate-pulse opacity-0 group-hover/play:opacity-100 transition-opacity duration-300" />
                            <div
                              className="relative w-12 h-12 rounded-full cursor-pointer group-hover/play:scale-110 transition-all duration-500 backdrop-blur-md border border-white/30 shadow-2xl overflow-hidden"
                              style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                                boxShadow: '0 8px 32px rgba(180,120,255,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)',
                              }}
                            >
                              <div
                                className="absolute inset-0 rounded-full opacity-0 group-hover/play:opacity-100 transition-opacity duration-300"
                                style={{
                                  background: 'linear-gradient(135deg, rgba(180,120,255,0.1) 0%, rgba(200,140,255,0.15) 50%, rgba(160,100,255,0.1) 100%)',
                                }}
                              />
                              <div
                                className="absolute top-0 left-0 w-full h-1/2 rounded-t-full opacity-40 group-hover/play:opacity-60 transition-opacity duration-300"
                                style={{
                                  background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
                                }}
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Play
                                  className="w-4 h-4 ml-0.5 text-white drop-shadow-lg transition-all duration-300 group-hover/play:text-[rgb(220,180,255)] group-hover/play:scale-110"
                                  fill="currentColor"
                                />
                              </div>
                              <div className="absolute top-1.5 right-2 w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse opacity-0 group-hover/play:opacity-100 transition-opacity duration-300" />
                              <div className="absolute bottom-2 left-1.5 w-0.5 h-0.5 bg-[rgb(180,120,255)]/80 rounded-full animate-pulse opacity-0 group-hover/play:opacity-100 transition-opacity duration-500 delay-150" />
                            </div>
                          </div>
                        </div>
                        <Image 
                          src={video.thumbnail || `https://vumbnail.com/${video.vimeoId}.jpg`}
                          alt="Thumbnail vidéo témoignage"
                          fill
                          className="object-cover rounded-xl"
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </ScrollAnimated>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none z-20" />
    </section>
  )
}