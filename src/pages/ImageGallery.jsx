import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useState, useEffect } from 'react';

export default function ImageGallery() {
  const images = Array.from({ length: 9 }, (_, i) => `/images/gallery-${i + 1}.jpg`);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-700 border-t-indigo-500"></div>
            <img src="/images/loader.svg" alt="Aeravionix" className="absolute inset-0 m-auto h-8 w-8" />
          </div>
        </div>
      )}

      {/* Page Header */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-white md:text-6xl">
            Our <span className="text-indigo-500">Gallery</span>
          </h1>

          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-300 hover:text-indigo-400">home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-indigo-400">gallery</span>
          </nav>
        </div>
      </section>

      {/* Image Gallery */}
      <section
        className="py-20 bg-black bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative container mx-auto px-4">
          <PhotoProvider>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg border border-gray-800 transition-all hover:shadow-indigo-900/40"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <PhotoView src={src}>
                    <img
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      className="h-64 w-full cursor-pointer object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </PhotoView>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/60">
                    <span className="translate-y-4 text-lg font-semibold text-white opacity-0 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                      View
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </section>
    </>
  );
}
