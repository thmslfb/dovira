export const PORTFOLIO_VIDEOS = [
  {
    id: 1,
    thumbnail: '/images/video-thumbnail-3-new.png',
    vimeoId: '1118019433',
    alt: 'Agence de montage vidéo – Vidéo 16/9 – Portfolio Dovira #1',
  },
  {
    id: 2,
    thumbnail: '/images/video-thumbnail-1.png',
    vimeoId: '1108016789',
    alt: 'Agence de montage vidéo – Vidéo 16/9 – Portfolio Dovira #2',
  },
  {
    id: 3,
    thumbnail: '/images/video-thumbnail-2.png',
    vimeoId: '1102200706',
    alt: 'Agence de montage vidéo – Vidéo 16/9 – Portfolio Dovira #3',
  },
  {
    id: 4,
    thumbnail: '/images/video-thumbnail-5.png',
    vimeoId: '1108015936',
    alt: 'Agence de montage vidéo – Vidéo 16/9 – Portfolio Dovira #4',
  },
  {
    id: 5,
    thumbnail: '/images/video-thumbnail-4.png',
    vimeoId: '1107823882',
    alt: 'Agence de montage vidéo – Vidéo 16/9 – Portfolio Dovira #5',
  },
] as const

export type VideoCategory =
  | 'e-commerce'
  | 'formation'
  | 'motion-design'
  | 'vsl'
  | 'social-media'
export type PackType = 'starter' | 'growth' | 'pro'
