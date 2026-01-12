'use client'; // Important pour Next.js App Router

import { useRef, useEffect } from 'react';
import { VideoCard } from './VideoCard';

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
  const isDragging = useRef(false);
  const stopAutoScroll = useRef(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;

    const autoScroll = () => {
      if (container && !isDragging.current && !stopAutoScroll.current) {
        container.scrollLeft += 1.5; // vitesse du défilement

        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
        <div className="relative max-w-[1600px] mx-auto">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-12 px-4 cursor-grab active:cursor-grabbing"
            style={{
              scrollBehavior: 'auto', // fluidité
              scrollbarWidth: 'none',
            }}
            onMouseDown={(e) => {
              const container = scrollContainerRef.current;
              if (!container) return;

              isDragging.current = true;
              const startX = e.pageX - container.offsetLeft;
              const scrollLeft = container.scrollLeft;

              const handleMouseMove = (e: MouseEvent) => {
                const x = e.pageX - container.offsetLeft;
                const walk = (x - startX) * 2;
                container.scrollLeft = scrollLeft - walk;
              };

              const handleMouseUp = () => {
                isDragging.current = false;
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };

              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
            onMouseEnter={() => {
              isDragging.current = true;
            }}
            onMouseLeave={() => {
              isDragging.current = false;
            }}
          >
            {/* Tripler les vidéos pour scroll infini */}
            {[...videos, ...videos, ...videos].map((video, index) => (
              <VideoCard
                key={`${video.id}-${index}`}
                videoPath={video.videoPath}
                poster={video.poster}
                onVideoClick={() => { stopAutoScroll.current = true; }}
              />
            ))}
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

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}