'use client';

import { useRef, useEffect } from 'react';
import { VideoCard } from '@/components/ui/video-card';
import { SectionTitle } from '@/components/ui/section-title'; // Import du composant de titre

interface Video {
  id: string;
  videoPath: string;
  title: string;
  subtitle: string;
  poster?: string;
}

interface VideoCarouselProps {
  videos: Video[];
  autoPlay?: boolean;
  scrollSpeed?: number;
  backgroundColor?: string; // Couleur de fond pour les effets de flou
}

export function VideoCarousel({ 
  videos, 
  autoPlay = true,
  scrollSpeed = 1.5,
  backgroundColor = 'rgba(255, 255, 255, 1)' // Blanc par défaut
}: VideoCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isHoveringCard = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Auto-scroll animation
  useEffect(() => {
    if (!autoPlay) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;

    const autoScroll = () => {
      if (container && !isDragging.current && !isHoveringCard.current) {
        container.scrollLeft += scrollSpeed;
        
        // Reset infini
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [autoPlay, scrollSpeed]);

  // Gestion du hover sur les cartes
  const handleCardHoverChange = (isHovered: boolean) => {
    isHoveringCard.current = isHovered;
  };

  // Gestion du drag
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    isDragging.current = true;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX.current) * 2;
      container.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      {/* Titre de section centré */}
      <div className="mx-auto w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mb-12 md:mb-16 flex justify-center">
        <div className="custom-section-title">
          <SectionTitle level="h2" showAccent={true}>
            Nos réalisations
          </SectionTitle>
        </div>
      </div>

      {/* Container responsive - 80% sur desktop, plus large sur mobile */}
      <div className="mx-auto w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] relative">
        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing scrollbar-hide"
          style={{
            scrollBehavior: 'auto',
            scrollbarWidth: 'none',
          }}
          onMouseDown={handleMouseDown}
        >
          {/* Tripler les vidéos pour scroll infini */}
          {[...videos, ...videos, ...videos].map((video, index) => (
            <VideoCard
              key={`${video.id}-${index}`}
              videoPath={video.videoPath}
              title={video.title}
              subtitle={video.subtitle}
              poster={video.poster}
              onHoverChange={handleCardHoverChange}
            />
          ))}
        </div>

        {/* Gradient Fade - Bordure Gauche */}
        <div
          className="absolute top-0 bottom-4 left-0 w-8 md:w-12 pointer-events-none z-10" // Réduit de w-10/w-16 à w-8/w-12
          style={{
            background: `linear-gradient(to right, 
              ${backgroundColor} 0%, 
              ${backgroundColor.replace('1)', '0.9)')} 20%,
              ${backgroundColor.replace('1)', '0.6)')} 50%,
              rgba(10, 10, 10, 0.3) 70%,
              transparent 100%
            )`,
            backdropFilter: 'blur(6px)', // Flou plus prononcé
          }}
        />

        {/* Gradient Fade - Bordure Droite */}
        <div
          className="absolute top-0 bottom-4 right-0 w-8 md:w-12 pointer-events-none z-10" // Réduit de w-10/w-16 à w-8/w-12
          style={{
            background: `linear-gradient(to left, 
              ${backgroundColor} 0%, 
              ${backgroundColor.replace('1)', '0.9)')} 20%,
              ${backgroundColor.replace('1)', '0.6)')} 50%,
              rgba(10, 10, 10, 0.3) 70%,
              transparent 100%
            )`,
            backdropFilter: 'blur(6px)', // Flou plus prononcé
          }}
        />
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Centrer l'accent décoratif uniquement pour ce titre */
        .custom-section-title :global(.relative.mt-4) {
          justify-content: center;
        }
      `}</style>
    </section>
  );
}