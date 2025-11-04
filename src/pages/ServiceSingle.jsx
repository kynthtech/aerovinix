import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ServiceSingle() {
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState(1); // FAQ #2 open by default

  const isActive = (path) => location.pathname === path;

  const services = [
    'AI Strategy & Consulting',
    'AI Integration & Deployment',
    'Custom AI Solutions',
    'Data-Driven Insights',
    'Intelligent Data Solutions'
  ];

  const steps = [
    { step: '01', title: 'Discovery & Strategy', icon: 'icon-how-work-step-1.svg' },
    { step: '02', title: 'Data & Infrastructure Assessment', icon: 'icon-how-work-step-2.svg' },
    { step: '03', title: 'Custom AI Development', icon: 'icon-how-work-step-3.svg' },
  ];

  const impacts = [
    { title: 'AI Strategy', icon: 'icon-approach-1.svg' },
    { title: 'Smart AI', icon: 'icon-approach-2.svg' },
    { title: 'AI Solutions', icon: 'icon-approach-3.svg' },
  ];

  const faqs = [
    { q: 'What services does your AI agency offer?', a: 'We offer a wide range of dermatology treatments, including acne care, psoriasis management, skin cancer screening, cosmetic procedures like Botox etc.' },
    { q: 'Do I need a large amount of data to use AI?', a: 'We offer a wide range of dermatology treatments, including acne care, psoriasis management, skin cancer screening, cosmetic procedures like Botox etc.' },
    { q: 'How long does it take to develop an AI solution?', a: 'We offer a wide range of dermatology treatments, including acne care, psoriasis management, skin cancer screening, cosmetic procedures like Botox etc.' },
    { q: 'Is my data secure with you?', a: 'We offer a wide range of dermatology treatments, including acne care, psoriasis management, skin cancer screening, cosmetic procedures like Botox etc.' },
    { q: 'Can you integrate AI into our existing systems?', a: 'We offer a wide range of dermatology treatments, including acne care, psoriasis management, skin cancer screening, cosmetic procedures like Botox etc.' },
  ];

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
              <button className={`font-medium transition ${isActive('/service-single') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>
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
      </header>

      {/* Page Header */}
      <section className="page-header bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            AI integration <span className="text-indigo-600">deployment</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="text-gray-600 hover:text-indigo-600">services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-indigo-600">AI integration deployment</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="page-service-single py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="space-y-8">
                {/* Services List */}
                <div className="rounded-xl bg-gray-50 p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">What We Offer</h3>
                  <ul className="space-y-2">
                    {services.map((s, i) => (
                      <li key={i}>
                        <Link
                          to="/service-single"
                          className={`block rounded p-2 text-gray-700 transition hover:bg-indigo-50 hover:text-indigo-600 ${
                            s === 'AI Integration & Deployment' ? 'bg-indigo-100 text-indigo-700' : ''
                          }`}
                        >
                          {s}
                        </Link>
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

            {/* Main Content */}
            <main className="lg:col-span-8">
              {/* Hero Image */}
              <img src="/images/service-single-img.jpg" alt="AI Integration" className="mb-8 w-full rounded-xl shadow-lg" />

              {/* Intro */}
              <div className="prose prose-lg mb-12 max-w-none">
                <p className="text-gray-700">
                  Integrating AI technologies seamlessly into your business infrastructure is key to unlocking new levels of efficiency, innovation, and growth. Our AI integration services ensure that advanced machine learning models, natural language processing, and intelligent automation tools are tailored to your specific needs.
                </p>
                <p className="text-gray-700">
                  Once integration is complete, we focus on deploying AI models at scale with precision and security. Our deployment strategies are designed for flexibility, whether on cloud, on-premises, or hybrid environments.
                </p>
              </div>

              {/* Solution Steps */}
              <div className="mb-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  AI Integration & <span className="text-indigo-600">solution</span>
                </h2>
                <div className="space-y-6">
                  {steps.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <img src={`/images/${step.icon}`} alt="" className="h-12 w-12" />
                        <p className="mt-1 text-sm font-bold text-indigo-600">step {step.step}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                        <p className="text-gray-600">We dive deep into your goals and challenges to uncover high-impact AI opportunities and craft a clear.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="mb-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Seamless implementation for maximum <span className="text-indigo-600">Impact</span>
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {impacts.map((item, i) => (
                    <div key={i} className="flex gap-4 rounded-xl bg-gray-50 p-4">
                      <img src={`/images/${item.icon}`} alt="" className="h-12 w-12 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-600">Our mission is to the power of AI to solve real.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Innovation */}
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Powering innovation through <span className="text-indigo-600">AI</span>
                </h2>
                <p className="mb-6 text-gray-700">
                  We harness the capabilities of artificial intelligence to drive innovation, streamline processes, and create smarter business solutions.
                </p>
                <ul className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                  {['capability of artificial cutt', 'AI technologies with your', 'Our approach focuses edg', 'AI technologies with your', 'Our approach focuses edg', 'capability of artificial cutt'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Building Smarter */}
              <div className="mb-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Building smarter futures <span className="text-indigo-600">with AI</span>
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="space-y-6">
                    {[
                      { no: '01', title: 'Data-Driven Insights', desc: 'Our mission is to harness the power of AI to solve real-world problems.' },
                      { no: '02', title: 'Evidence-Based Insights', desc: 'Our mission is to harness the power of AI to solve real-world problems.' },
                      { no: '03', title: 'Intelligence-Led Decisions', desc: 'Our mission is to harness the power of AI to solve real-world problems.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-2xl font-bold text-indigo-600">
                          {item.no}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <img src="/images/building-smarter-image.jpg" alt="" className="rounded-xl shadow-lg" />
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Your complete FAQ guide to <span className="text-indigo-600">cybersecurity solutions</span>
                </h2>
                <p className="mb-8 text-gray-600">
                  Welcome to our comprehensive FAQ guide on cybersecurity solutions. Here we answer the most common questions about protecting your business from cyber threats understanding the latest security.
                </p>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="rounded-xl border border-gray-200 bg-white">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="flex w-full items-center justify-between p-5 text-left font-medium text-gray-800"
                      >
                        {i + 1}. {faq.q}
                        <span className={`transform transition ${openFaq === i ? 'rotate-180' : ''}`}>Down Arrow</span>
                      </button>
                      {openFaq === i && (
                        <div className="border-t border-gray-200 p-5 text-gray-600">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
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