import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Blog', path: '/blog' },
    {
      label: 'Pages',
      submenu: [
        '/service-single', '/blog-single', '/projects', '/project-single',
        '/team', '/team-single', '/testimonials', '/image-gallery',
        '/video-gallery', '/faqs', '/404'
      ]
    },
    { label: 'Contact Us', path: '/contact' },
  ];

  const submenuLabels = {
    '/service-single': 'Service Details',
    '/blog-single': 'Blog Details',
    '/projects': 'Projects',
    '/project-single': 'Project Details',
    '/team': 'Our Team',
    '/team-single': 'Team Details',
    '/testimonials': 'Testimonials',
    '/image-gallery': 'Image Gallery',
    '/video-gallery': 'Video Gallery',
    '/faqs': 'FAQs',
    '/404': '404 Page',
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 shadow-xl shadow-black/20">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src="/images/logo.svg" 
            alt="Aeravionix Logo" 
            className="h-10 transition-transform group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden space-x-8 lg:flex items-center">
          {menuItems.map((item) => (
            item.submenu ? (
              <div key={item.label} className="group relative">
                <button
                  className={`font-medium transition flex items-center gap-1 ${
                    item.submenu.includes(location.pathname)
                      ? 'text-indigo-400'
                      : 'text-gray-300 hover:text-indigo-400'
                  }`}
                >
                  {item.label}
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-3 hidden w-56 rounded-xl bg-gray-800 border border-gray-700 shadow-2xl shadow-black/40 group-hover:block overflow-hidden">
                  {item.submenu.map((sub) => (
                    <Link
                      key={`${item.label}-${sub}`}
                      to={sub}
                      className={`block px-5 py-3 text-sm transition ${
                        isActive(sub) 
                          ? 'bg-indigo-600 text-white' 
                          : 'text-gray-300 hover:bg-gray-700 hover:text-indigo-400'
                      }`}
                    >
                      {submenuLabels[sub]}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition relative ${
                  isActive(item.path)
                    ? 'text-indigo-400'
                    : 'text-gray-300 hover:text-indigo-400'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-indigo-400"></span>
                )}
              </Link>
            )
          ))}
        </div>

        {/* CTA Button + Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:inline-block rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/50"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-indigo-400 transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 border-t border-gray-700 shadow-xl">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              item.submenu ? (
                <details key={item.label} className="group">
                  <summary className="cursor-pointer font-medium text-gray-300 hover:text-indigo-400 py-2 flex items-center justify-between">
                    {item.label}
                    <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="pl-4 mt-2 space-y-1">
                    {item.submenu.map((sub) => (
                      <Link
                        key={`mobile-${sub}`}
                        to={sub}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 text-sm transition ${
                          isActive(sub)
                            ? 'text-indigo-400 font-medium'
                            : 'text-gray-400 hover:text-indigo-400'
                        }`}
                      >
                        {submenuLabels[sub]}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 font-medium transition ${
                    isActive(item.path)
                      ? 'text-indigo-400'
                      : 'text-gray-300 hover:text-indigo-400'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center rounded-lg bg-indigo-600 px-6 py-2.5 mt-4 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}