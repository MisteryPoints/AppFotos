import { useEffect, useState } from 'react';
import axios from 'axios';
import { VideoGrid } from './components/VideoGrid';
import { Photo } from './types/video';
import { Video as VideoIcon } from 'lucide-react';

function App() {
  const [image, setImage] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    if (loading) return;
    
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos?per_page=15&page=${page}&client_id=o8xMPg4F1AoT_GWLO-VWvjyI5qKVfwYtsA42xJxiNQk`, 
      );
      const fetchedImages: Photo[] = response.data.map((item) => ({
        id: item.id,
        width: item.width,
        height: item.height,
        url: item.urls.full,
        image: item.urls.regular,
        user: {
          id: item.user.id,
          name: item.user.name,
          username: item.user.username,
          url: item.user.links.html,
          portfolio_url: item.user.portfolio_url,
          bio: item.user.bio || '',
          location: item.user.location || '',
        },
        tags: item.tags || [],
        created_at: item.created_at,
        updated_at: item.updated_at,
        blur_hash: item.blur_hash,
        cover_photo: {
          id: item.cover_photo ? item.cover_photo.id : '',
          alt_description: item.cover_photo ? item.cover_photo.alt_description : '',
          urls: item.cover_photo ? item.cover_photo.urls : {},
        },
        links: {
          self: item.links.self,
          html: item.links.html,
          download: item.links.download,
          download_location: item.links.download_location,
        },
      }));
      setImage(prev => [...prev, ...fetchedImages]); // Unsplash returns images, not videos
      setPage(prev => prev + 1);
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <VideoIcon className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Victor Taller Programacion IV App</h1>
          </div>
          <p className="mt-2 text-gray-600">Descubre Imagenes Increibles de Diferentes Creadores</p>
        </div>
      </header>

      <main>
        <VideoGrid
          photos={image}
          onLoadMore={fetchImages}
          loading={loading}
        />
      </main>

      <footer className="bg-white border-t mt-8">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>Impulsado por el API de Unsplash</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
 