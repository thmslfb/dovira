'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';

interface VideoCardProps {
  videoPath: string;
  title: string;
  subtitle: string;
  poster?: string;
  onHoverChange: (isHovered: boolean) => void;
}

export function VideoCard({ videoPath, title, subtitle, poster, onHoverChange }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showControls, setShowControls] = useState(false); // État pour les contrôles
  const [isPlaying, setIsPlaying] = useState(false); // État de lecture
  const videoRef = useRef<HTMLVideoElement>(null); // Référence à l'élément vidéo

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange(false);
  };

  // Gestion du clic sur la vidéo
  const handleVideoClick = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (isPlaying) {
        await video.pause();
        setIsPlaying(false);
      } else {
        await video.play();
        setIsPlaying(true);
        setShowControls(true); // Afficher les contrôles après le premier clic
      }
    } catch (error) {
      console.log('Erreur lors de la lecture vidéo:', error);
    }
  };

  // Gestion des événements vidéo natifs
  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);

  return (
    <motion.div
      className="relative flex-shrink-0 overflow-hidden"
      style={{
        width: '320px',
        height: '568px',
        borderRadius: '16px',
      }}
      whileHover={{ scale: 1.02 }} // Réduit de 1.03 à 1.02
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Effet de lumière en background très subtil */}
      <div
        className={`absolute -inset-2 rounded-[20px] pointer-events-none transition-all duration-500 ${
          isHovered ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(ellipse 120% 80% at 50% 50%, rgba(180, 120, 255, 0.15) 0%, rgba(200, 140, 255, 0.08) 40%, transparent 70%)',
          filter: 'blur(20px)',
          zIndex: -1,
        }}
      />

      {/* Effet de lumière au hover */}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-10 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle at center, rgba(180, 120, 255, 0.2) 0%, rgba(180, 120, 255, 0.1) 40%, transparent 70%)',
          boxShadow: isHovered 
            ? '0 0 30px rgba(180, 120, 255, 0.3), inset 0 0 30px rgba(180, 120, 255, 0.1)' 
            : 'none',
        }}
      />
      {/* Video HTML5 avec gestion des contrôles */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-2xl cursor-pointer"
        controls={showControls} // Contrôles conditionnels
        preload="metadata"
        poster={poster}
        playsInline
        muted // Nécessaire pour l'autoplay sur mobile
        onClick={handleVideoClick}
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={videoPath} type="video/mp4" />
        {/* Sécurisation du replace pour éviter les erreurs */}
        {videoPath && videoPath.includes('.mp4') && (
          <source src={videoPath.replace('.mp4', '.webm')} type="video/webm" />
        )}
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

      {/* Overlay de lecture personnalisé (visible seulement si pas de contrôles) */}
      {!showControls && (
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer rounded-2xl"
          onClick={handleVideoClick}
        >
          <div className="bg-black/50 rounded-full p-4 transition-transform hover:scale-110">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

    </motion.div>
  );
}