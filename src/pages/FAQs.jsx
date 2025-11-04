import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function FAQs() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(0); // Default to first section
  const [openFaqs, setOpenFaqs] = useState({}); // Track open FAQs per section

  const isActive = (path) => location.pathname === path;

  const sections = [
    {
      id: 'faq_1',
      title: 'AI solutions',
      faqs: [
        { q: 'What types of AI solutions do you offer?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'How can AI solutions benefit my business?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Are your AI solutions customizable to specific business needs?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'How long does it take to implement an AI solution?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Is technical expertise required to manage your AI solutions?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
      ],
    },
    {
      id: 'faq_2',
      title: 'Integration & deployment',
      faqs: [
        { q: 'What is the process for integrating AI solutions into existing systems?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'How long does the deployment of an AI solution typically take?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Will there be any downtime during integration and deployment?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Can your AI solutions scale as our business grows?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Do you provide support after integration and deployment?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
      ],
    },
    {
      id: 'faq_3',
      title: 'Technical support',
      faqs: [
        { q: 'What kind of technical support do you offer for AI solutions?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'How quickly can I expect a response to a technical issue?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Do you offer remote assistance for technical problems?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'What happens if an AI system update causes a technical problem?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Is there a dedicated account manager or support specialist assigned?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
      ],
    },
    {
      id: 'faq_4',
      title: 'Pricing & plans',
      faqs: [
        { q: 'What is the process for integrating AI solutions into existing systems?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'How long does the deployment of an AI solution typically take?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Will there be any downtime during integration and deployment?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Can your AI solutions scale as our business grows?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Do you provide support after integration and deployment?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
      ],
    },
  ];

  const toggleFaq = (sectionIndex, faqIndex) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex] === faqIndex ? null : faqIndex,
    }));
  };

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
              <button className="font-medium text-gray-700 hover:text-indigo-600 transition">
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
                <Link to="/faqs" className="block px-4 py-2 bg-indigo-100 text-indigo-700">FAQs</Link>
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
            Frequently asked <span className="text-indigo-600">question</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-indigo-600">FAQs</span>
          </nav>
        </div>
      </section>

      {/* FAQs Content */}
      <section className="page-faqs py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="space-y-8">
                {/* FAQ Categories */}
                <div className="rounded-xl bg-gray-50 p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">FAQ Categories</h3>
                  <ul className="space-y-2">
                    {sections.map((section, i) => (
                      <li key={i}>
                        <button
                          onClick={() => setActiveSection(i)}
                          className={`w-full rounded p-3 text-left transition ${
                            activeSection === i
                              ? 'bg-indigo-600 text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {section.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Box */}
                <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 p-6 text-white">
                  <img src="/images/sidebar-cta-logo.svg" alt="" className="mb-4 h-12" />
                  <h3 className="mb-2 text-xl font-bold">We're here to help!</h3>
                  <p className="mb-6 text-sm">
                    Need assistance? We're here to help with support, guidance, and resources. Reach out to us anytime.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <img src="/images/icon-phone-gradiant.svg" alt="" className="h-5 w-5" />
                      <a href="tel:+00152885253" className="hover:underline">+(00) - 152 885 253</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <img src="/images/icon-mail-gradiant.svg" alt="" className="h-5 w-5" />
                      <a href="mailto:support@aeravionix.com" className="hover:underline">support@aeravionix.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main FAQs */}
            <main className="lg:col-span-3">
              {sections.map((section, sectionIndex) => (
                <div
                  key={section.id}
                  className={`mb-12 rounded-xl bg-gray-50 p-6 transition-all ${
                    activeSection === sectionIndex ? 'ring-2 ring-indigo-200' : ''
                  }`}
                >
                  <div className="section-title mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {section.title.split(' & ')[0]} <span className="text-indigo-600">{section.title.split(' & ')[1]}</span>
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {section.faqs.map((faq, faqIndex) => {
                      const isOpen = openFaqs[sectionIndex] === faqIndex;
                      return (
                        <div key={faqIndex} className="rounded-lg bg-white shadow-sm">
                          <button
                            onClick={() => toggleFaq(sectionIndex, faqIndex)}
                            className="flex w-full items-center justify-between p-5 text-left font-medium text-gray-800 transition hover:bg-gray-50"
                          >
                            <span>{faqIndex + 1}. {faq.q}</span>
                            <span className={`transform transition ${isOpen ? 'rotate-180' : ''}`}>
                              <i className="fa-solid fa-chevron-down text-indigo-600"></i>
                            </span>
                          </button>
                          {isOpen && (
                            <div className="border-t border-gray-200 p-5 text-gray-600">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </main>
          </div>
        </div>
      </section>

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