'use client'; // Important pour Next.js App Router

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export type VideoCardProps = {
  videoPath: string;
  videoPathDesktop?: string;
  videoPathMobile?: string;
  poster: string;
  onVideoClick?: () => void;
  onVideoRef?: (video: HTMLVideoElement | null) => void;
};

export function VideoCard({ videoPath, videoPathDesktop, videoPathMobile, poster, onVideoClick, onVideoRef }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Debug: afficher les props reçues
  useEffect(() => {
    console.log('[VideoCard] Props received:', { videoPath, videoPathDesktop, videoPathMobile });
  }, [videoPath, videoPathDesktop, videoPathMobile]);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Debug: source vidéo utilisée
  const videoSrc = isMobile ? (videoPathMobile || videoPath) : (videoPathDesktop || videoPath);
  useEffect(() => {
    if (mounted) {
      console.log('[VideoCard] Using video src:', videoSrc, 'isMobile:', isMobile);
    }
  }, [mounted, videoSrc, isMobile]);

  // Enregistrer la ref vidéo dans le parent
  useEffect(() => {
    if (onVideoRef && videoRef.current) {
      onVideoRef(videoRef.current);
    }
    return () => {
      if (onVideoRef) {
        onVideoRef(null);
      }
    };
  }, [onVideoRef]);

  // Intersection Observer pour détecter quand la vidéo est visible
  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);

          // Jouer/pauser la vidéo selon la visibilité
          if (videoRef.current) {
            if (entry.isIntersecting) {
              // Attendre que la vidéo ait assez de données avant de jouer
              const video = videoRef.current;

              if (video.readyState >= 3) {
                // HAVE_FUTURE_DATA : assez de données pour jouer
                video.play().catch(() => {
                  // Ignorer les erreurs de lecture
                });
              } else {
                // Attendre que les données soient prêtes
                const canPlayHandler = () => {
                  video.play().catch(() => { });
                  video.removeEventListener('canplay', canPlayHandler);
                };
                video.addEventListener('canplay', canPlayHandler);
              }
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <div
        className="relative flex-shrink-0 overflow-hidden
          w-[180px] h-[320px]
          sm:w-[320px] sm:h-[568px]"
        style={{
          borderRadius: '28px',
          backgroundColor: '#000',
        }}
      />
    );
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative flex-shrink-0 overflow-hidden
        w-[180px] h-[320px]
        sm:w-[320px] sm:h-[568px]"
      style={{
        borderRadius: '28px',
        border: 'none',
        transition: 'all 350ms ease-out',
        boxShadow: isHovered
          ? '0 15px 40px rgba(180, 120, 255, 0.35), inset 0 0 60px rgba(180, 120, 255, 0.1)'
          : '0 15px 35px rgba(0, 0, 0, 0.6), inset 0 0 30px rgba(180, 120, 255, 0.05)',
      }}
      whileHover={{
        scale: 1.06,
      }}
      transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Glow Ring */}
      <div
        className="absolute -inset-1 rounded-[30px] z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(180, 120, 255, 0.4), rgba(180, 120, 255, 0.1), rgba(180, 120, 255, 0.4))',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 350ms ease-out',
          filter: 'blur(8px)',
        }}
      />

      <div
        className="relative overflow-hidden"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '28px',
          backgroundColor: '#000',
        }}
      >
        {/* Vidéo */}
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          src={videoSrc}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          controls={false}
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
          className="absolute top-0 left-0 w-full h-full rounded-[28px] object-cover cursor-pointer"
          style={{ background: '#000' }}
          onClick={e => {
            e.stopPropagation();
            if (onVideoClick) onVideoClick();
          }}
        />

        {/* Animated Corner Borders */}
        <div
          className="absolute top-0 left-0 w-16 h-16 z-10"
          style={{
            borderTop: '3px solid #b478ff',
            borderLeft: '3px solid #b478ff',
            borderTopLeftRadius: '28px',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 350ms ease-out',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-16 h-16 z-10"
          style={{
            borderBottom: '3px solid #b478ff',
            borderRight: '3px solid #b478ff',
            borderBottomRightRadius: '28px',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 350ms ease-out',
          }}
        />
      </div>
    </motion.div>
  );
}