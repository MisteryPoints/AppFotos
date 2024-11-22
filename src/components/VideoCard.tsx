import type { Photo } from '../types/video';  // Import the Photo interface
import { Play, User, Download } from 'lucide-react';

interface PhotoCardProps {
  photo: Photo;
}

export function VideoCard({ photo }: PhotoCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative aspect-video group">
        <img
          src={photo.image}   
          alt={`Photo by ${photo.user.name}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={photo.url}   
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300"
          >
            <Play className="w-8 h-8 text-white" />   
          </a>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <User className="w-4 h-4 text-gray-600" />
          <a
            href={photo.user.portfolio_url}   
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            {photo.user.name}
          </a>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <a className='flex justify-between bg-blue-500 text-white font-bold rounded-3xl p-2' href={photo.links.download} target='_blank'><Download/></a>   
          <span>{photo.width}x{photo.height}</span>   
        </div>
      </div>
    </div>
  );
}
