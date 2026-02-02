'use client';

import dynamic from 'next/dynamic';
import { videos } from '@/components/carousel/videos-data';
import { SectionTitle } from '@/components/ui';

const VideoCarousel = dynamic(
  () => import('@/components/carousel/VideoCarousel').then(mod => ({ default: mod.VideoCarousel })),
  { ssr: false }
);

export function VideoCarouselSection() {
  return (
    <div className="flex flex-col items-center w-full">
      <SectionTitle level="h2" className="flex flex-col items-center mt-8 lg:mt-4" noGlow>
        Nos réalisations
      </SectionTitle>
      <VideoCarousel videos={videos} />
    </div>
  );
}