import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Play } from 'lucide-react';
import 'react-photo-view/dist/react-photo-view.css';
import { useState, useEffect } from 'react';

export default function VideoGallery() {
  const videos = [
    { img: 'gallery-3.jpg', youtubeId: 'Y-x0efG1seA' },
    { img: 'gallery-5.jpg', youtubeId: 'Y-x0efG1seA' },
    { img: 'gallery-2.jpg', youtubeId: 'Y-x0efG1seA' },
    { img: 'gallery-1.jpg', youtubeId: 'Y-x0efG1seA' },
    { img: 'gallery-4.jpg', youtubeId: 'Y-x0efG1seA' },
    { img: 'gallery-9.jpg', youtubeId: 'Y-x0efG1seA' },
    { img: 'gallery-6.jpg', youtubeId: 'Y-x0efG1seA' },
    { img: 'gallery-8.jpg', youtubeId: 'Y-x0efG1seA' },
    { img: 'gallery-7.jpg', youtubeId: 'Y-x0efG1seA' },
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-700 border-t-indigo-500"></div>
            <img
              src="/images/loader.svg"
              alt="Aerovionix"
              className="absolute inset-0 m-auto h-8 w-8 opacity-90"
            />
          </div>
        </div>
      )}

      {/* Header */}
      <section className="page-header bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-white md:text-6xl">
            Aerovionix <span className="text-indigo-400">videos</span>
          </h1>

          <nav className="flex justify-center space-x-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-indigo-400">home</Link>
            <span>/</span>
            <span className="text-indigo-400">video gallery</span>
          </nav>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <PhotoProvider maskOpacity={0.7} maskClassName="backdrop-blur">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((video, i) => (
                <PhotoView
                  key={i}
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                >
                  <div
                    className="relative overflow-hidden rounded-xl shadow-xl cursor-pointer group"
                  >
                    {/* Thumbnail */}
                    <img
                      src={`/images/${video.img}`}
                      alt={`Video ${i + 1}`}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-indigo-600 shadow-lg group-hover:bg-white group-hover:text-indigo-700 transition">
                        <Play className="h-10 w-10" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </section>
    </>
  );
}
