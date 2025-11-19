import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useState, useEffect } from 'react';

export default function Projects() {
  const projects = [
    { id: 1, title: 'Success Stories AI In Action', category: 'Data Analytics' },
    { id: 2, title: 'Success Stories AI In Action', category: 'Data Analytics' },
    { id: 3, title: 'Success Stories AI In Action', category: 'Data Analytics' },
    { id: 4, title: 'Success Stories AI In Action', category: 'Data Analytics' },
    { id: 5, title: 'AI Innovations Unleashed', category: 'Data Analytics' },
    { id: 6, title: 'Transforming Industries AI', category: 'Data Analytics' },
    { id: 7, title: 'AI at the Forefront of Change', category: 'Data Analytics' },
    { id: 8, title: 'Revolutionizing Business AI', category: 'Data Analytics' },
  ];

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
            <img
              src="/images/loader.svg"
              alt="Aeravionix"
              className="absolute inset-0 m-auto h-8 w-8"
            />
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
            Our <span className="text-indigo-500">projects</span>
          </h1>

          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-300 hover:text-indigo-400">home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-indigo-400">projects</span>
          </nav>
        </div>
      </section>

      {/* Projects Grid */}
      <section
        className="py-20 bg-black bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative container-fluid px-4">
          <PhotoProvider>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl border border-gray-800 shadow-lg transition-all hover:shadow-indigo-900/40"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <PhotoView src={`/images/project-${project.id}.jpg`}>
                    <img
                      src={`/images/project-${project.id}.jpg`}
                      alt={project.title}
                      className="h-64 w-full object-cover rounded-xl cursor-pointer transition-transform duration-500 group-hover:scale-110"
                    />
                  </PhotoView>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="mb-1 text-lg font-semibold">
                        <Link to="/project-single" className="hover:text-indigo-300">
                          {project.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-300">{project.category}</p>
                    </div>

                    <Link
                      to="/project-single"
                      className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
                    >
                      <img src="/images/arrow-white.svg" alt="View" className="h-5 w-5" />
                    </Link>
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
