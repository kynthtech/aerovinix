import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

export default function Blog() {

const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  setTimeout(() => setIsLoading(false), 1000);
}, []);
  const posts = [
    {
      date: 'May 28, 2025',
      title: 'Ethical AI Balancing Innovation and Responsibility',
      excerpt: 'As AI continue to evolve, ensuring use more important than ever this article explores how businesses can innovate',
    },
    {
      date: 'April 22, 2025',
      title: "Machine Learning Demytified A Beginner's Guide",
      excerpt: 'As AI continue to evolve, ensuring use more important than ever this article explores how businesses can innovate',
    },
    {
      date: 'April 17, 2025',
      title: 'How AI is Transforming Modern Businesses',
      excerpt: 'As AI continue to evolve, ensuring use more important than ever this article explores how businesses can innovate',
    },
    {
      date: 'May 13, 2025',
      title: 'Responsible AI Shaping a Better Future Innovation',
      excerpt: 'As AI continue to evolve, ensuring use more important than ever this article explores how businesses can innovate',
    },
    {
      date: 'April 08, 2025',
      title: 'Ethical Intelligence Driving Trust and Progress',
      excerpt: 'As AI continue to evolve, ensuring use more important than ever this article explores how businesses can innovate',
    },
    {
      date: 'April 02, 2025',
      title: 'AI with Integrity Innovation You Can Trust',
      excerpt: 'As AI continue to evolve, ensuring use more important than ever this article explores how businesses can innovate',
    },
  ];

  return (
    <>
      {/* Preloader */}
     {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600"></div>
            <div className="absolute inset-0 m-auto flex h-8 w-8 items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-indigo-600"></div>
            </div>
          </div>
        </div>
      )}


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
            <Link to="/blog" className="font-medium text-indigo-600">Blog</Link>

            <div className="group relative">
              <button className={`font-medium transition ${isActive('/pages') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>
                Pages
              </button>
              <div className="absolute left-0 mt-2 hidden w-56 rounded bg-white shadow-lg group-hover:block">
                <Link to="/service-single" className="block px-4 py-2 hover:bg-indigo-50">Service Details</Link>
                <Link to="/blog-single" className="block px-4 py-2 hover:bg-indigo-50">Blog Details</Link>
                <Link to="/projects" className="block px-4 py-2 hover:bg-indigo-50">Projects</Link>
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
            Our <span className="text-indigo-600">blog</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-indigo-600">blog</span>
          </nav>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="page-blog py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <article
                key={i}
                className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {/* Meta */}
                <div className="border-b border-gray-100 p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <i className="fa-solid fa-calendar-days text-indigo-600"></i>
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition">
                    <Link to="/blog-single">{post.title}</Link>
                  </h2>
                  <p className="mb-4 text-gray-600 line-clamp-3">{post.excerpt}</p>
                  <Link
                    to="/blog-single"
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition"
                  >
                    read more
                    <i className="ml-1 fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-lg shadow-md">
              <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                <i className="fa-solid fa-angle-left"></i>
              </a>
              <a href="#" className="px-4 py-2 border-t border-b border-l border-gray-300 bg-indigo-600 text-white">
                1
              </a>
              <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                3
              </a>
              <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                <i className="fa-solid fa-angle-right"></i>
              </a>
            </nav>
          </div>
        </div>
      </section>

    </>
  );
}