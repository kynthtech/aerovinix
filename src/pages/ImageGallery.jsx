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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600"></div>
            <img src="/images/loader.svg" alt="Aeravionix" className="absolute inset-0 m-auto h-8 w-8" />
          </div>
        </div>
      )}
    


      {/* Page Header */}
      <section className="page-header bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            Our <span className="text-indigo-600">gallery</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-indigo-600">our gallery</span>
          </nav>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="page-gallery py-20 bg-white">
        <div className="container mx-auto px-4">
          <PhotoProvider>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <PhotoView src={src}>
                    <img
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      className="h-64 w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </PhotoView>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-50">
                    <span className="translate-y-4 text-lg font-semibold text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
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