'use client'

import { ScrollAnimated } from '@/components/animations'
import { SectionTitle } from '@/components/ui/section-title'
import { Play } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

type VideoTestimonial = {
  id: number
  thumbnail: string
} & (
    | { type: 'vimeo'; vimeoId: string }
    | { type: 'youtube'; youtubeId: string }
  )

const videoTestimonials: VideoTestimonial[] = [
  // YouTube videos
  { id: 1, type: 'youtube', youtubeId: 'D50lwVVygZc', thumbnail: '/images/yt-thumbnail-1.jpg' },
  { id: 2, type: 'youtube', youtubeId: 'fKgSJpFlSto', thumbnail: '/images/yt-thumbnail-2.jpg' },
  { id: 3, type: 'youtube', youtubeId: 'VdVaVYDhLNU', thumbnail: '/images/yt-thumbnail-3.jpg' },
  { id: 4, type: 'youtube', youtubeId: 'ZyxpD_YuuzI', thumbnail: '/images/yt-thumbnail-4.jpg' },
  // Vimeo videos
  { id: 5, type: 'vimeo', vimeoId: '1101502548', thumbnail: '/images/thumbnail-5.png' },
  { id: 6, type: 'vimeo', vimeoId: '1101502877', thumbnail: '/images/thumbnail-6.png' },
  { id: 7, type: 'vimeo', vimeoId: '1107019725', thumbnail: '/images/thumbnail-7.png' },
]

const getVideoId = (video: VideoTestimonial): string => {
  return video.type === 'vimeo' ? video.vimeoId : video.youtubeId
}

const getEmbedUrl = (video: VideoTestimonial): string => {
  if (video.type === 'vimeo') {
    return `https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&color=b478ff&title=0&byline=0&portrait=0`
  }
  return `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
}

const getFallbackThumbnail = (video: VideoTestimonial): string => {
  if (video.type === 'vimeo') {
    return `https://vumbnail.com/${video.vimeoId}.jpg`
  }
  return `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
}

export const TestimonialsVideo = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideo(videoId)
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
            <div className="relative flex justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap z-10">
              {videoTestimonials.map((video) => {
                const videoId = getVideoId(video)
                return (
                  <div
                    key={video.id}
                    className="cursor-pointer group"
                    onClick={() => handlePlayVideo(videoId)}
                  >
                    <div className="relative rounded-xl overflow-hidden bg-[rgb(229,208,255)]/10 border border-[rgb(229,208,255)]/20 shadow-lg backdrop-blur-sm p-1 hover:scale-[1.02] transition-transform duration-300 w-[200px] h-[340px] md:w-[220px] md:h-[380px] lg:w-[240px] lg:h-[400px]">
                      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/8 via-[#0f0f0f]/30 to-[rgb(160,100,255)]/10 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/3 to-transparent pointer-events-none" />

                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        {playingVideo === videoId ? (
                          <div className="relative w-full h-full rounded-xl overflow-hidden bg-[rgb(229,208,255)]/10 border border-[rgb(229,208,255)]/20 shadow-lg backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/8 via-[#0f0f0f]/30 to-[rgb(160,100,255)]/10 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/3 to-transparent pointer-events-none" />
                            <iframe
                              src={getEmbedUrl(video)}
                              className="absolute inset-0 w-full h-full rounded-xl object-cover"
                              style={{ border: 'none', objectFit: 'cover' }}
                              allow={video.type === 'vimeo'
                                ? "autoplay; fullscreen; picture-in-picture"
                                : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              }
                              allowFullScreen
                              title={`Témoignage client Dovira – ${video.type === 'vimeo' ? 'Vimeo' : 'YouTube'} ${videoId}`}
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
                                  className="relative w-10 h-10 md:w-12 md:h-12 rounded-full cursor-pointer group-hover/play:scale-110 transition-all duration-500 backdrop-blur-md border border-white/30 shadow-2xl overflow-hidden"
                                  style={{
                                    background:
                                      'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                                    boxShadow:
                                      '0 8px 32px rgba(180,120,255,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)',
                                  }}
                                >
                                  <div
                                    className="absolute inset-0 rounded-full opacity-0 group-hover/play:opacity-100 transition-opacity duration-300"
                                    style={{
                                      background:
                                        'linear-gradient(135deg, rgba(180,120,255,0.1) 0%, rgba(200,140,255,0.15) 50%, rgba(160,100,255,0.1) 100%)',
                                    }}
                                  />
                                  <div
                                    className="absolute top-0 left-0 w-full h-1/2 rounded-t-full opacity-40 group-hover/play:opacity-60 transition-opacity duration-300"
                                    style={{
                                      background:
                                        'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
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
                              src={video.thumbnail || getFallbackThumbnail(video)}
                              alt={`Témoignage client – Agence de montage vidéo Dovira – ${video.type === 'vimeo' ? 'Vimeo' : 'YouTube'} ${videoId}`}
                              fill
                              className="object-cover rounded-xl"
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </ScrollAnimated>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none z-20" />
    </section>
  )
}

