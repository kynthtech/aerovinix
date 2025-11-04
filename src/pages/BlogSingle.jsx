import { Link, useLocation } from 'react-router-dom';

export default function BlogSingle() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Preloader */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="relative">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600"></div>
          <img src="/images/loader.svg" alt="Aeravionix" className="absolute inset-0 m-auto h-8 w-8" />
        </div>
      </div>

      {/* Header with Active Nav */}
      <header className="sticky top-0 z-40 bg-white shadow-md">
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
              <button className="font-medium text-indigo-600">
                Pages
              </button>
              <div className="absolute left-0 mt-2 hidden w-56 rounded bg-white shadow-lg group-hover:block">
                <Link to="/service-single" className="block px-4 py-2 hover:bg-indigo-50">Service Details</Link>
                <Link to="/blog-single" className="block px-4 py-2 bg-indigo-100 text-indigo-700">Blog Details</Link>
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
      </header>

      {/* Page Header */}
      <section className="page-header bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            Machine Learning Demytified ...
          </h1>
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <i className="fa-regular fa-user"></i> Admin
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-regular fa-clock"></i> 30 April, 2025
            </span>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <article className="page-single-post py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Featured Image */}
          <div className="mb-12 overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/post-single-img.jpg"
              alt="Machine Learning"
              className="w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Post Body */}
          <div className="prose prose-lg mx-auto max-w-4xl">
            <p>
              Machine learning no longer needs to feel complex or out of reach. We simplify the concepts and processes behind machine learning, helping you understand how intelligent algorithms can recognize patterns, make predictions, and drive smarter decisions. Our goal is to make AI accessible, clear, and actionable for businesses of all sizes.
            </p>

            <p>
              By breaking down technical barriers, we enable organizations to harness the true power of data-driven innovation. Whether it's automating workflows, enhancing customer experiences, or unlocking new market opportunities, our machine learning solutions are designed to deliver real-world impact with clarity and confidence.
            </p>

            <blockquote className="border-l-4 border-indigo-600 pl-6 italic text-gray-700">
              Our approach to machine learning is built on transparency, collaboration and real-world results. We work closely with you to identify opportunities, train intelligent models, and seamlessly integrate them into your existing systems.
            </blockquote>

            <p>
              As the world becomes more data-driven, machine learning is at the forefront of revolutionizing industries. From predictive analytics to personalized recommendations, our machine learning solutions provide actionable insights that drive growth and innovation. We ensure that every model is optimized for efficiency, scalability, and long-term success, empowering your business to stay ahead of the competition.
            </p>

            <h2 className="text-3xl font-bold text-gray-900">Unlocking the future with data-driven insights</h2>

            <p>
              As the world becomes more data-driven, machine learning is at the forefront of revolutionizing industries. From predictive analytics to personalized recommendations, our machine learning solutions provide actionable insights that drive growth and innovation. We ensure that every model is optimized for efficiency, scalability, and long-term success, empowering your business to stay ahead of the competition.
            </p>

            <ul className="space-y-2">
              {[
                'Our machine learning models help forecast trends, identify patterns, and predict future outcomes with high accuracy',
                "Whether you're in retail, healthcare, finance, or any other industry, our machine learning solutions are customized",
                'With our advanced analytics tools, you can access real-time data insights, allowing you to make informed decisions',
                'We ensure that our machine learning models integrate effortlessly with your current infrastructure, minimizing',
                'Our machine learning solutions are designed to grow with your business, providing the flexibility to scale up as your data',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
                  {item}
                </li>
              ))}
            </ul>

            <p>
              Machine learning no longer needs to feel complex or out of reach. We simplify the concepts and processes behind machine learning, helping you understand how intelligent algorithms can recognize patterns, make predictions, and drive smarter decisions. Our goal is to make AI accessible, clear, and actionable for businesses of all sizes.
            </p>
          </div>

          {/* Tags & Social Share */}
          <div className="mt-16 flex flex-col items-center gap-8 border-t border-gray-200 pt-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 text-sm">
              <span className="font-medium text-gray-700">Tags:</span>
              <div className="flex flex-wrap gap-2">
                {['Analytics', 'Automation', 'Insights'].map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${tag.toLowerCase()}`}
                    className="rounded-full bg-indigo-100 px-4 py-1.5 text-indigo-700 transition hover:bg-indigo-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              {[
                { icon: 'fa-brands fa-facebook-f', name: 'Facebook' },
                { icon: 'fa-brands fa-linkedin-in', name: 'LinkedIn' },
                { icon: 'fa-brands fa-instagram', name: 'Instagram' },
                { icon: 'fa-brands fa-x-twitter', name: 'Twitter' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-indigo-600 hover:text-white"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="main-footer bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h2 className="mb-4 text-3xl font-bold">
                Let's start work <span className="text-indigo-400">together!</span>
              </h2>
              <p className="mb-6">Partner with us to create intelligent, impactful, and future-ready AI solutions together.</p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Link to="/contact" className="rounded bg-indigo-600 px-6 py-3 font-semibold transition hover:bg-indigo-700">
                Let's Work Together
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <img src="/images/footer-logo.svg" alt="Aeravionix" className="mb-4 h-12" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Get In Touch</h3>
              <p className="mb-1"><a href="tel:+00152885253" className="hover:text-indigo-400">+(00) - 152 885 253</a></p>
              <p><a href="mailto:info@aeravionix.com" className="hover:text-indigo-400">info@aeravionix.com</a></p>
              <h3 className="mt-6 mb-2 text-lg font-semibold">Our Location</h3>
              <p>123 Lorem Street Suite 5B, Ips Park London, UK SW1A 1AA</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Subscribe Newsletter</h3>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="w-full rounded-l border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600" />
                <button className="rounded-r bg-indigo-600 px-4 py-2 transition hover:bg-indigo-700">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
            <p>Copyright © 2025 Aeravionix. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}