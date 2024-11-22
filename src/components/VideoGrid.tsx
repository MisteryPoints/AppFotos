import { useInView } from 'react-intersection-observer';
import { VideoCard } from './VideoCard';
import type { Photo } from '../types/video';  

interface VideoGridProps {
  photos: Photo[];   
  onLoadMore: () => void;
  loading: boolean;
}

export function VideoGrid({ photos, onLoadMore, loading }: VideoGridProps) {
  const { ref, inView } = useInView({
    threshold: 0,
    onChange: (inView) => {
      if (inView && !loading) {
        onLoadMore();
      }
    },
  });
  
  const uniquePhotos = [...new Map(photos?.map((photo) => [photo.id, photo])).values()];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {uniquePhotos?.map((photo) => (
          <VideoCard key={photo.id} photo={photo} />
        ))}
      </div>
      <div ref={ref} className="h-20 flex items-center justify-center mt-8">
        {loading && (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        )}
      </div>
    </div>
  );
}
