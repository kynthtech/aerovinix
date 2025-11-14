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
  setTimeout(() => setIsLoading(false), 1000);
}, []);
  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600"></div>
            <img src="/images/loader.svg" alt="Aeravionix" className="absolute inset-0 m-auto h-8 w-8" />
          </div>
        </div>
      )}

\

      {/* Page Header */}
      <section className="page-header bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            Our <span className="text-indigo-600">video</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-indigo-600">our video</span>
          </nav>
        </div>
      </section>

      {/* Video Gallery Grid */}
      <section className="page-video-gallery py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-2xl"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <PhotoProvider>
                  <PhotoView
                    src={`/images/${video.img}`}
                    render={({ scale, onScale }) => (
                      <div className="relative">
                        <img
                          src={`/images/${video.img}`}
                          alt={`Video ${i + 1}`}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                          <button
                            onClick={() => onScale(scale + 1)}
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-indigo-600 shadow-lg transition hover:bg-white hover:text-indigo-700"
                          >
                            <Play className="h-8 w-8" fill="currentColor" />
                          </button>
                        </div>
                      </div>
                    )}
                  />
                </PhotoProvider>

                {/* YouTube iframe in lightbox */}
                <div className="hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`Video ${i + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}