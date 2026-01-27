'use client'; // Important pour Next.js App Router

import { useRef, useEffect, useState } from 'react';
import { VideoCard } from './VideoCard';
import { Dialog } from '@/components/ui/dialog';
import { X } from 'lucide-react';

export type Video = {
  id: string;
  videoPath: string;
  poster: string;
};

export type VideoCarouselProps = {
  videos: Video[];
};

export function VideoCarousel({ videos }: VideoCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const stopAutoScroll = useRef(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const carouselVideosRef = useRef<HTMLVideoElement[]>([]);
  const translateXRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setMounted(true);
  }, []);

  // Effet pour pauser/reprendre les vidéos du carousel quand la modale s'ouvre/ferme
  useEffect(() => {
    if (selectedVideo) {
      // Modale ouverte : pauser toutes les vidéos du carousel
      carouselVideosRef.current.forEach(video => {
        if (video) video.pause();
      });
    } else {
      // Modale fermée : les vidéos reprendront via l'Intersection Observer
      stopAutoScroll.current = false;
    }
  }, [selectedVideo]);

  // Fonction d'auto-scroll
  const startAutoScroll = (element: HTMLDivElement) => {
    const autoScroll = () => {
      const currentContent = contentRef.current;
      if (currentContent && !isDragging.current && !stopAutoScroll.current) {
        // Détecter isMobile à chaque frame pour être sûr
        const currentIsMobile = window.innerWidth < 768;
        const scrollSpeed = currentIsMobile ? 0.8 : 1.5;
        
        translateXRef.current -= scrollSpeed;
        
        // Calculer la largeur totale d'un set de vidéos (incluant les gaps)
        const cardWidth = currentIsMobile ? 180 + 24 : 320 + 24; // width + gap
        const totalWidth = cardWidth * videos.length;
        
        // Boucle infinie : quand on a scrollé d'un set complet, on reset
        if (Math.abs(translateXRef.current) >= totalWidth) {
          translateXRef.current = 0;
        }
        
        // Appliquer la transformation CSS (fonctionne sur Safari iOS)
        currentContent.style.transform = `translateX(${translateXRef.current}px)`;
      }
      animationFrameIdRef.current = requestAnimationFrame(autoScroll);
    };

    // Démarrer immédiatement
    animationFrameIdRef.current = requestAnimationFrame(autoScroll);
  };

  // Callback ref pour démarrer l'animation dès que le DOM est prêt
  const setContentRef = (element: HTMLDivElement | null) => {
    contentRef.current = element;
    
    if (element && !animationFrameIdRef.current) {
      startAutoScroll(element);
    }
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // Effet pour gérer la lecture de la vidéo en modal
  useEffect(() => {
    if (selectedVideo && modalVideoRef.current) {
      // Déterminer la bonne version de la vidéo
      const videoSrc = isMobile 
        ? selectedVideo.videoPath.replace('.mp4', '-mobile.mp4')
        : selectedVideo.videoPath.replace('.mp4', '-desktop.mp4');
      
      // Mettre à jour la source et relancer
      modalVideoRef.current.src = videoSrc;
      modalVideoRef.current.currentTime = 0;
      modalVideoRef.current.load(); // Important : recharger la vidéo
      modalVideoRef.current.play().catch(() => {
        // Ignorer les erreurs de lecture automatique
      });
    }
  }, [selectedVideo, isMobile]);

  return (
    <div
      className="min-h-[500px] sm:min-h-[700px] lg:min-h-[800px] flex items-center justify-center px-4 sm:px-8 relative overflow-hidden w-full"
      style={{
        backgroundColor: '#0a0a0a',
      }}
    >
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(180, 120, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180, 120, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Glows */}
      <div
        className="absolute"
        style={{
          width: '400px', 
          height: '400px', 
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180, 120, 255, 0.08) 0%, transparent 60%)', // opacité 
          filter: 'blur(40px)', // blur 
          pointerEvents: 'none',
          top: '-80px',   
          left: '-80px',   
        }}
      />
      <div
        className="absolute"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180, 120, 255, 0.15) 0%, transparent 60%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          bottom: '-150px',
          right: '-150px',
        }}
      />

      <div className="relative z-10 w-full px-0">
        <div className="relative max-w-[1600px] mx-auto overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="py-12 sm:py-16 px-4 cursor-grab active:cursor-grabbing overflow-hidden"
            onMouseDown={(e) => {
              const content = contentRef.current;
              if (!content) return;

              isDragging.current = true;
              const startX = e.pageX;
              const startTranslate = translateXRef.current;

              const handleMouseMove = (e: MouseEvent) => {
                const x = e.pageX;
                const walk = (x - startX);
                translateXRef.current = startTranslate + walk;
                content.style.transform = `translateX(${translateXRef.current}px)`;
              };

              const handleMouseUp = () => {
                isDragging.current = false;
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };

              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
            onTouchStart={(e) => {
              const content = contentRef.current;
              if (!content) return;

              isDragging.current = true;
              const startX = e.touches[0].clientX;
              const startTranslate = translateXRef.current;

              const handleTouchMove = (e: TouchEvent) => {
                const x = e.touches[0].clientX;
                const walk = (x - startX);
                translateXRef.current = startTranslate + walk;
                content.style.transform = `translateX(${translateXRef.current}px)`;
              };

              const handleTouchEnd = () => {
                isDragging.current = false;
                document.removeEventListener('touchmove', handleTouchMove);
                document.removeEventListener('touchend', handleTouchEnd);
              };

              document.addEventListener('touchmove', handleTouchMove, { passive: true });
              document.addEventListener('touchend', handleTouchEnd);
            }}
          >
            <div 
              ref={setContentRef}
              className="flex gap-6"
              style={{
                willChange: 'transform',
              }}
            >
              {/* Tripler les vidéos pour scroll infini */}
              {[...videos, ...videos, ...videos].map((video, index) => (
                <VideoCard
                  key={`${video.id}-${index}`}
                  videoPath={video.videoPath}
                  poster={video.poster}
                  onVideoClick={() => {
                    stopAutoScroll.current = true;
                    setSelectedVideo(video);
                  }}
                  onVideoRef={(videoEl) => {
                    if (videoEl && !carouselVideosRef.current.includes(videoEl)) {
                      carouselVideosRef.current.push(videoEl);
                    }
                  }}
                />
              ))}
            </div>
          </div>

          {/* Gradient Fade Edges */}
          <div
            className="absolute top-0 bottom-0 left-0 w-24 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.12) 60%, transparent 100%)',
              filter: 'blur(6px)', // adoucit le contour
              opacity: 0.7, // plus discret
            }}
          />
          <div
            className="absolute top-0 bottom-0 right-0 w-24 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to left, #0a0a0a 0%, rgba(10,10,10,0.12) 60%, transparent 100%)',
              filter: 'blur(6px)',
              opacity: 0.7,
            }}
          />
        </div>
      </div>

      {/* Transition Top */}
      <div
        className="absolute left-0 right-0 top-0 h-16 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, #0a0a0a 70%, transparent 100%)',
          filter: 'blur(8px)',
        }}
      />
      {/* Transition Bottom */}
      <div
        className="absolute left-0 right-0 bottom-0 h-16 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, #0a0a0a 70%, transparent 100%)',
          filter: 'blur(8px)',
        }}
      />

      {/* Modal Dialog pour vidéo agrandie */}
      {selectedVideo && (
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            {/* Bouton fermer */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
              aria-label="Fermer"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Container vidéo */}
            <div 
              className="relative w-full max-w-[90vw] max-h-[90vh] flex items-center justify-center"
              onClick={() => setSelectedVideo(null)}
            >
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  maxHeight: '90vh',
                  aspectRatio: '9/16',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Glow effect autour de la vidéo */}
                <div
                  className="absolute -inset-4 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(180, 120, 255, 0.3), rgba(180, 120, 255, 0.1), rgba(180, 120, 255, 0.3))',
                    filter: 'blur(20px)',
                  }}
                />
                
                <video
                  ref={modalVideoRef}
                  poster={selectedVideo.poster}
                  controls
                  className="relative w-full h-full object-contain rounded-2xl"
                  style={{ 
                    maxHeight: '90vh',
                    background: '#000',
                  }}
                />
              </div>
            </div>
          </div>
        </Dialog>
      )}

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}