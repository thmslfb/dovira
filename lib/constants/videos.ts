export const PORTFOLIO_VIDEOS = [
  {
    id: 1,
    thumbnail: '/images/video-thumbnail-3.png',
    vimeoId: '1102202699',
    alt: 'Video DOVIRA',
  },
  {
    id: 2,
    thumbnail: '/images/video-thumbnail-1.png',
    vimeoId: '1108016789',
    alt: 'Video 1',
  },
  {
    id: 3,
    thumbnail: '/images/video-thumbnail-2.png',
    vimeoId: '1102200706',
    alt: 'Video 2',
  },
  {
    id: 4,
    thumbnail: '/images/video-thumbnail-5.png',
    vimeoId: '1108015936',
    alt: 'Video 3',
  },
  {
    id: 5,
    thumbnail: '/images/video-thumbnail-4.png',
    vimeoId: '1107823882',
    alt: 'Video 4',
  },
] as const

export type VideoCategory =
  | 'e-commerce'
  | 'formation'
  | 'motion-design'
  | 'vsl'
  | 'social-media'
export type PackType = 'starter' | 'growth' | 'pro'
