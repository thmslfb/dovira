'use client'; // Important pour Next.js App Router

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export type VideoCardProps = {
  videoPath: string;
  poster: string;
  onVideoClick?: () => void;
};

export function VideoCard({ videoPath, poster, onVideoClick }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      className="relative flex-shrink-0 overflow-hidden
        w-[180px] h-[320px]
        sm:w-[320px] sm:h-[568px]"
      style={{
        borderRadius: '28px',
        border: 'none',
        transition: 'all 350ms ease-out',
        boxShadow: isHovered
          ? '0 25px 50px rgba(180, 120, 255, 0.35), inset 0 0 60px rgba(180, 120, 255, 0.1)'
          : '0 15px 35px rgba(0, 0, 0, 0.6), inset 0 0 30px rgba(180, 120, 255, 0.05)',
      }}
      whileHover={{ 
        scale: 1.06,
        rotate: 1,
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
        {/* Vidéo locale */}
        <video
          width="100%"
          height="100%"
          src={videoPath}
          poster={poster}
          controls={false}
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full rounded-[28px] object-cover cursor-pointer"
          style={{ background: '#000' }}
          onClick={e => {
            e.currentTarget.controls = true;
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