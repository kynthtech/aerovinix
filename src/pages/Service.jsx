import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Services() {
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState(2); // Open FAQ #2 by default

  const isActive = (path) => location.pathname === path;

  const services = [
    'AI Strategy & Consulting',
    'AI Integration & Deployment',
    'Custom AI Solutions',
    'Data-Driven Insights',
    'Analytics-Powered Decisions',
    'Intelligent Data Solutions'
  ];

  const steps = [
    { step: '01', title: 'Discovery & Strategy', icon: 'icon-how-work-step-1.svg' },
    { step: '02', title: 'Data & Infrastructure Assessment', icon: 'icon-how-work-step-2.svg' },
    { step: '03', title: 'Custom AI Development', icon: 'icon-how-work-step-3.svg' },
    { step: '04', title: 'Optimization & Support', icon: 'icon-how-work-step-4.svg' },
  ];

  const testimonials = [
    { name: 'Jenny W', role: 'fintech startup', img: 'author-1.jpg', text: '"Working with this team was a game-changer. The AI-enhanced design they delivered helped reduce bounce rates by 40% and boost engagement like never before."' },
    { name: 'Jason M', role: 'hardware Technician', img: 'author-2.jpg', text: '"Working with this team was a game-changer. The AI-enhanced design they delivered helped reduce bounce rates by 40% and boost engagement like never before."' },
    { name: 'Lauren M', role: 'hardware Technician', img: 'author-3.jpg', text: '"Working with this team was a game-changer. The AI-enhanced design they delivered helped reduce bounce rates by 40% and boost engagement like never before."' },
  ];

  const faqs = [
    { q: 'What services does your AI agency offer?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
    { q: 'Do I need a large amount of data to use AI?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
    { q: 'How long does it take to develop an AI solution?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
    { q: 'Is my data secure with you?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
    { q: 'Can you integrate AI into our existing systems?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
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
              <button className={`font-medium transition ${isActive('/') || isActive('/home-image') || isActive('/home-video') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>
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
              <button className="text-gray-700 hover:text-indigo-600 font-medium transition">Pages</button>
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
            Our <span className="text-indigo-600">services</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-indigo-600">services</span>
          </nav>
        </div>
      </section>

      {/* Services Grid */}
      <section className="page-services py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((title, i) => (
              <div key={i} className="group rounded-xl bg-gray-50 p-6 shadow-md transition hover:shadow-xl">
                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    <Link to="/service-single" className="hover:text-indigo-600">{title}</Link>
                  </h3>
                  <p className="text-gray-600">
                    We assess your business, identify high impact AI opportunities, and guide you with a clear roadmap for implementation.
                  </p>
                </div>
                <img src={`/images/service-item-${i + 1}.png`} alt={title} className="mx-auto h-48 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-work py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-600">how it work</h3>
              <h2 className="mb-8 text-4xl font-bold text-gray-900">
                Our process for smarter <span className="text-indigo-600">AI solutions</span>
              </h2>
              {steps.map((step, i) => (
                <div key={i} className="mb-8 flex gap-4">
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
            <div className="relative">
              <video autoPlay muted loop className="w-full rounded-xl shadow-xl">
                <source src="https://demo.awaikenthemes.com/assets/videos/nextmind-how-work-video.mp4" type="video/mp4" />
              </video>
              <p className="mt-6 text-lg text-gray-700">
                We help businesses design, build, and deploy intelligent solutions that drive real results.{' '}
                <Link to="/contact" className="text-indigo-600 hover:underline">Contact Now</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="what-we-do py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-3xl font-bold text-gray-900">
                We fuse AI and creativity to deliver intelligent, personalized, and future-ready design experiences that inspire.
              </h3>
              <img src="/images/what-we-do-img.png" alt="" className="mb-6 w-full rounded-xl shadow-lg" />
              <ul className="flex flex-wrap gap-3">
                {['UI/UX Design', 'Chatbot Design', 'Predictive', 'Design Automation', 'Generative Branding'].map((item) => (
                  <li key={item} className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-600">what we do</h3>
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                Innovative AI services, real-world <span className="text-indigo-600">results</span>
              </h2>
              <p className="mb-6 text-gray-600">
                We craft cutting-edge AI solutions tailored to your business needs—driving smarter decisions, streamlined operations.
              </p>
              <ul className="mb-8 space-y-2 text-gray-700">
                {['Computer Vision', 'AI Integration', 'Ongoing Support', 'AI Strategy', 'Custom AI Development'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="rounded bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="our-testimonials py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-600">testimonials</h3>
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                Powering innovation with data-driven <span className="text-indigo-600">design</span>
              </h2>
              <p className="mb-8 text-gray-600">
                Crafting intuitive, user-first interfaces by intelligence for smarter, faster, and more personalized digital artificial intelligence experiences.
              </p>
              <div className="flex gap-8">
                <div>
                  <h2 className="text-5xl font-bold text-indigo-600">200+</h2>
                  <p className="text-gray-600">projects successfully</p>
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-indigo-600">600+</h2>
                  <p className="text-gray-600">projects successfully</p>
                </div>
              </div>
            </div>
            <div>
              <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="pb-12"
              >
                {testimonials.map((t, i) => (
                  <SwiperSlide key={i}>
                    <div className="rounded-xl bg-white p-6 shadow-lg">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={`/images/${t.img}`} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                          <div>
                            <h3 className="font-semibold text-gray-800">{t.name}</h3>
                            <p className="text-sm text-gray-500">{t.role}</p>
                          </div>
                        </div>
                        <img src="/images/testimonials-quotes-img.svg" alt="" className="h-8 w-8" />
                      </div>
                      <p className="text-gray-700">{t.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="our-faqs py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-600">faq's</h3>
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                Your AI questions, expertly <span className="text-indigo-600">answered here</span>
              </h2>
              <Link to="/faqs" className="rounded bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
                View all faqs
              </Link>
            </div>
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