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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="relative">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600"></div>
          <img src="/images/loader.svg" alt="Aeravionix" className="absolute inset-0 m-auto h-8 w-8" />
        </div>
      </div>)}

      {/* Header with Active Nav */}
      {/* <header className="sticky top-0 z-40 bg-white shadow-md">
        <nav className="container mx-auto flex flex-wrap items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.svg" alt="Aeravionix Logo" className="h-10" />
          </Link>

          <div className="hidden space-x-8 lg:flex">
            <div className="group relative">
              <button className={`font-medium transition ${isActive('/') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>
                Home
              </button>
              <div className="absolute left-0 mt-2 hidden w-48 rounded bg-white shadow-lg group-hover:block">
                <Link to="/" className="block px-4 py-2 hover:bg-indigo-50">Home - Main</Link>
                <Link to="/home-image" className="block px-4 py-2 hover:bg-indigo-50">Home - Image</Link>
                <Link to="/home-video" className="block px-4 py-2 hover:bg-indigo-50">Home - Video</Link>
              </div>
            </div>

            <Link to="/about" className={`font-medium transition ${isActive('/about') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>About Us</Link>
            <Link to="/services" className={`font-medium transition ${isActive('/services') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>Services</Link>
            <Link to="/blog" className={`font-medium transition ${isActive('/blog') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>Blog</Link>

            <div className="group relative">
              <button className={`font-medium transition ${isActive('/projects') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>
                Pages
              </button>
              <div className="absolute left-0 mt-2 hidden w-56 rounded bg-white shadow-lg group-hover:block">
                <Link to="/service-single" className="block px-4 py-2 hover:bg-indigo-50">Service Details</Link>
                <Link to="/blog-single" className="block px-4 py-2 hover:bg-indigo-50">Blog Details</Link>
                <Link to="/projects" className="block px-4 py-2 bg-indigo-100 text-indigo-700">Projects</Link>
                <Link to="/project-single" className="block px-4 py-2 hover:bg-indigo-50">Project Details</Link>
                <Link to="/team" className="block px-4 py-2 hover:bg-indigo-50">Our Team</Link>
                <Link to="/team-single" className="block px-4 py-2 hover:bg-indigo-50">Team Details</Link>
                <Link to="/testimonials" className="block px-4 py-2 hover:bg-indigo-50">Testimonials</Link>
                <Link to="/image-gallery" className="block px-4 py-2 hover:bg-indigo-50">Image Gallery</Link>
                <Link to="/video-gallery" className="block px-4 py-2 hover:bg-indigo-50">Video Gallery</Link>
                <Link to="/faqs" className="block px-4 py-2 hover:bg-indigo-50">FAQs</Link>
                <Link to="/404" className="block px-4 py-2 hover:bg-indigo-50">404</Link>
              </div>
            </div>

            <Link to="/contact" className={`font-medium transition ${isActive('/contact') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>Contact Us</Link>
          </div>

          <Link to="/contact" className="rounded bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700">
            Get Started
          </Link>
        </nav>
      </header> */}

      {/* Page Header */}
      <section className="page-header bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            Our <span className="text-indigo-600">projects</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-indigo-600">projects</span>
          </nav>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="our-projects page-projects py-20 bg-white">
        <div className="container-fluid px-4">
          <PhotoProvider>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <PhotoView src={`/images/project-${project.id}.jpg`}>
                    <img
                      src={`/images/project-${project.id}.jpg`}
                      alt={project.title}
                      className="h-64 w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </PhotoView>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="mb-1 text-lg font-semibold">
                        <Link to="/project-single" className="hover:underline">
                          {project.title}
                        </Link>
                      </h3>
                      <p className="text-sm opacity-90">{project.category}</p>
                    </div>
                    <Link
                      to="/project-single"
                      className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30"
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