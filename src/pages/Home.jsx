import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import '../css/Home.css';

export default function Home() {
  console.log('Home component rendering');
  const [isReady, setIsReady] = useState(false);
  const counterRefs = useRef([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    if (!isLoading && !isReady) {
      console.log('Component is ready to render content');
      setIsReady(true);
    }
  }, [isLoading, isReady]);

  // Counter Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const countTo = parseInt(target.getAttribute('data-count'), 10);
            const suffix = target.getAttribute('data-suffix') || '';
            let count = 0;
            const increment = Math.ceil(countTo / 75);
            const timer = setInterval(() => {
              count += increment;
              if (count >= countTo) {
                target.textContent = countTo + suffix;
                clearInterval(timer);
              } else {
                target.textContent = count + suffix;
              }
            }, 20);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projects = [
    { id: 1, title: 'Success Stories AI In Action', category: 'Data Analytics' },
    { id: 2, title: 'AI Innovations Unleashed', category: 'Machine Learning' },
    { id: 3, title: 'Transforming Industries AI', category: 'Automation' },
    { id: 4, title: 'AI at the Forefront of Change', category: 'Deep Learning' },
    { id: 5, title: 'Revolutionizing Business AI', category: 'NLP' },
    { id: 6, title: 'Smart Solutions Delivered', category: 'Computer Vision' },
    { id: 7, title: 'AI-Powered Innovation', category: 'Predictive Analytics' },
    { id: 8, title: 'Next-Gen Intelligence', category: 'Neural Networks' },
  ];

  const blogPosts = [
    {
      date: 'May 28, 2025',
      title: 'Ethical AI Balancing Innovation and Responsibility',
      excerpt: 'As AI continues to evolve, ensuring ethical use is more important than ever. This article explores how businesses can innovate responsibly.',
      category: 'AI Ethics',
    },
    {
      date: 'April 22, 2025',
      title: "Machine Learning Demystified: A Beginner's Guide",
      excerpt: 'Understand the fundamentals of machine learning and how it\'s transforming industries worldwide with practical examples.',
      category: 'Education',
    },
    {
      date: 'April 17, 2025',
      title: 'How AI is Transforming Modern Businesses',
      excerpt: 'Discover real-world applications of AI in business operations, from automation to predictive analytics and beyond.',
      category: 'Business',
    },
  ];

  const images = Array.from({ length: 6 }, (_, i) => `/images/gallery-${i + 1}.jpg`);

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-700 border-t-indigo-500"></div>
            <img src="/images/loader.svg" alt="Aeravionix" className="absolute inset-0 m-auto h-8 w-8" />
          </div>
        </div>
      )}

<section className="hero relative overflow-hidden bg-black py-20">
  {/* GIF Background - Desktop */}
  <div className="absolute inset-0 hidden md:block">
    <video 
      src="/gif/space_gif2.mp4" 
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover opacity-90"
    />
    {/* Overlay gradient for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
  </div>

  {/* GIF Background - Mobile */}
  <div className="absolute inset-0 md:hidden">
    <img 
      src="/images/space/hero-mobile.gif" 
      alt="Space Background Mobile" 
      className="w-full h-full object-cover opacity-40"
    />
    {/* Overlay gradient for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
  </div>

  {/* Content */}
  <div className="container relative z-14 mx-auto px-4 text-center">
    <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-6xl fade-in-up">
      Transform your business with the <span className="holographic">power of AI</span>
    </h1>
    <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300">
      In a world where cyberattacks are becoming more sophisticated, your business deserves the best protection. Our expert team leverages cutting-edge technology.
    </p>
    <div className="flex flex-col justify-center gap-4 sm:flex-row">
      <Link
        to="/contact"
        className="btn-glossy rounded-lg bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-700"
      >
        Get Started Today
      </Link>
      <Link
        to="/contact"
        className="rounded-lg border-2 border-indigo-400 px-8 py-3 font-semibold text-indigo-400 transition hover:bg-indigo-900/30 neon-glow"
      >
        Join Now
      </Link>
    </div>
  </div>
</section>
<div className="page-bg">

      {/* About Us */}
      <section className="about-us py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">About Us</h3>
          <h2 className="mx-auto mb-12 max-w-4xl text-4xl font-bold text-white">
            Our team of data scientists, engineers, and designers work at the intersection of technology and strategy turning complex challenges into simple, AI-powered solutions.
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Seamless Integration', count: 298, suffix: '+', icon: 'icon-about-item-1.svg', img: 'about-item-image-1.png' },
              { title: 'AI Projects Delivered', count: 978, suffix: '+', icon: 'icon-about-item-2.svg', img: 'about-item-image-2.png' },
              { title: 'Handled by AI Bots', count: 300, suffix: '%', icon: 'icon-about-item-3.svg', img: 'about-item-image-3.png' },
              { title: 'Faster Time to Market', count: 95, suffix: 'X', icon: 'icon-about-item-4.svg', img: 'about-item-image-4.png' },
            ].map((item, idx) => (
              <div key={idx} className="group glossy-card rounded-xl p-6 transition hover:shadow-2xl hover:shadow-indigo-500/20">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">{item.title}</h3>
                    <p className="text-3xl font-bold text-indigo-400">
                      <span
                        ref={(el) => (counterRefs.current[idx] = el)}
                        data-count={item.count}
                        data-suffix={item.suffix}
                      >
                        0{item.suffix}
                      </span>
                    </p>
                  </div>
                  <img src={`/images/${item.icon}`} alt="" className="h-10 w-10 brightness-110" />
                </div>
                <img src={`/images/${item.img}`} alt="" className="mx-auto mt-4 h-32 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="our-approach py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">Our mission</h3>
            <h2 className="text-4xl font-bold text-white">
              Driving innovation through intelligent <span className="text-indigo-400">technology</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              {[
                { title: 'Our Mission', icon: 'icon-approach-1.svg' },
                { title: 'Our Vision', icon: 'icon-approach-2.svg' },
                { title: 'Our Goal', icon: 'icon-approach-3.svg' },
              ].map((item, i) => (
                <div key={i} className="mb-8 flex gap-4">
                  <img src={`/images/${item.icon}`} alt="" className="h-12 w-12 flex-shrink-0 brightness-110" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-400">
                      Our mission is to harness the power of AI to solve real-world problems. From automating tasks to delivering data-driven insights.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img src="/images/approach-image.jpg" alt="Our Approach" className="w-full rounded-xl shadow-xl ring-1 ring-gray-700" />
              <div className="absolute bottom-6 left-6 flex gap-6 text-white">
                <div className="rounded bg-indigo-600 p-4 text-center">
                  <p className="text-3xl font-bold">
                    <span ref={(el) => (counterRefs.current[4] = el)} data-count="15" data-suffix="+">0+</span>
                  </p>
                  <p className="text-sm">Business problem</p>
                </div>
                <div className="rounded bg-purple-600 p-4 text-center">
                  <p className="text-3xl font-bold">
                    <span ref={(el) => (counterRefs.current[5] = el)} data-count="2.3" data-suffix="+">0+</span>
                  </p>
                  <p className="text-sm">Business setup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="our-services py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">Our Services</h3>
          <h2 className="mx-auto mb-12 max-w-3xl text-4xl font-bold text-white">
            AI-driven design services for future <span className="text-indigo-400">innovations</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {['AI Strategy & Consulting', 'AI Integration & Deployment', 'Custom AI Solutions'].map((title, i) => (
              <div key={`service-${title}`} className="group rounded-xl bg-gray-800 border border-gray-700 p-6 shadow-md transition hover:shadow-2xl hover:shadow-indigo-500/20">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  <Link to="/service-single" className="hover:text-indigo-400">{title}</Link>
                </h3>
                <p className="mb-6 text-gray-400">
                  We assess your business, identify high impact AI opportunities, and guide you with a clear roadmap for implementation.
                </p>
                <img src={`/images/service-item-${i + 1}.png`} alt="" className="mx-auto h-48 object-contain" />
              </div>
            ))}
          </div>

          <div className="mt-12">
            <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              {['AI UI/UX Design', 'Chatbot Design', 'Design Automation', 'Predictive UX', 'Personalized Experiences', 'Generative Branding', 'AI Analysis'].map((item, index) => (
                <li key={`tech-tag-${index}-${item}`} className="rounded-full bg-gray-800 border border-gray-700 px-4 py-2 shadow hover:bg-gray-700 transition">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-work py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">How It Works</h3>
              <h2 className="mb-8 text-4xl font-bold text-white">
                Our process for smarter <span className="text-indigo-400">AI solutions</span>
              </h2>
              {[
                { step: '01', title: 'Discovery & Strategy', icon: 'icon-how-work-step-1.svg' },
                { step: '02', title: 'Data & Infrastructure Assessment', icon: 'icon-how-work-step-2.svg' },
                { step: '03', title: 'Custom AI Development', icon: 'icon-how-work-step-3.svg' },
                { step: '04', title: 'Optimization & Support', icon: 'icon-how-work-step-4.svg' },
              ].map((item) => (
                <div key={`step-${item.step}`} className="mb-8 flex gap-4">
                  <div className="flex-shrink-0">
                    <img src={`/images/${item.icon}`} alt="" className="h-12 w-12 brightness-110" />
                    <p className="mt-1 text-sm font-bold text-indigo-400">step {item.step}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-400">We dive deep into your goals and challenges to uncover high-impact AI opportunities and craft a clear.</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <video autoPlay muted loop className="w-full rounded-xl shadow-xl ring-1 ring-gray-700">
                <source src="https://demo.awaikenthemes.com/assets/videos/nextmind-how-work-video.mp4" type="video/mp4" />
              </video>
              <p className="mt-6 text-lg text-gray-300">
                We help businesses design, build, and deploy intelligent solutions that drive real results. <Link to="/contact" className="text-indigo-400 hover:underline">Contact Now</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Portfolio */}
      <section className="our-projects py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">Our Projects</h3>
            <h2 className="mx-auto max-w-3xl text-4xl font-bold text-white">
              Innovative AI solutions we've <span className="text-indigo-400">delivered</span>
            </h2>
          </div>

          <PhotoProvider>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {projects.slice(0, 8).map((project,) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-2xl hover:shadow-indigo-500/20"
                >
                  <PhotoView src={`/images/project-${project.id}.jpg`}>
                    <img
                      src={`/images/project-${project.id}.jpg`}
                      alt={project.title}
                      className="h-64 w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </PhotoView>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute bottom-6 left-6 text-white">
                      <span className="text-xs font-semibold text-indigo-300 uppercase block mb-1">{project.category}</span>
                      <h3 className="text-lg font-semibold">
                        <Link to="/project-single" className="hover:underline">
                          {project.title}
                        </Link>
                      </h3>
                    </div>
                    <Link
                      to="/project-single"
                      className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </PhotoProvider>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-block rounded bg-gray-800 border border-gray-700 px-8 py-3 font-semibold text-white transition hover:bg-gray-700"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Facts/Stats Section */}
      <section className="facts py-20 bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '1200+', label: 'Projects Completed' },
              { number: '98%', label: 'Success Rate' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, idx) => (
              <div key={idx} className="p-6">
                <h3 className="text-5xl font-extrabold text-white mb-2">{stat.number}</h3>
                <p className="text-indigo-200 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="what-we-do py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-8 text-4xl font-bold text-white">
                We fuse AI and creativity to deliver intelligent, personalized, and future-ready design experiences that inspire.
              </h3>
              <img src="/images/what-we-do-img.png" alt="" className="mb-6 w-full rounded-xl shadow-lg ring-1 ring-gray-700" />
              <ul className="grid grid-cols-2 gap-3 text-sm">
                {['UI/UX Design', 'Chatbot Design', 'Predictive', 'Design Automation', 'Generative Branding'].map((item) => (
                  <li key={item} className="rounded bg-gray-800 border border-gray-700 px-4 py-2 shadow text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">what we do</h3>
              <h2 className="mb-4 text-4xl font-bold text-white">
                Innovative AI services, real-world <span className="text-indigo-400">results</span>
              </h2>
              <p className="mb-6 text-gray-400">
                We craft cutting-edge AI solutions tailored to your business needs—driving smarter decisions, streamlined operations.
              </p>
              <ul className="mb-8 space-y-2 text-gray-300">
                {['Computer Vision', 'AI Integration', 'Ongoing Support', 'AI Strategy', 'Custom AI Development'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-indigo-400"></span> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="rounded bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
                contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">testimonials</h3>
              <h2 className="mb-4 text-4xl font-bold text-white">
                Powering innovation with data-driven <span className="text-indigo-400">design</span>
              </h2>
              <p className="mb-8 text-gray-400">
                Crafting intuitive, user-first interfaces by intelligence for smarter, faster, and more personalized digital artificial intelligence experiences.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-4xl font-bold text-indigo-400">
                    <span ref={(el) => (counterRefs.current[9] = el)} data-count="200" data-suffix="+">0+</span>
                  </p>
                  <p className="text-sm text-gray-400">projects successfully</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-indigo-400">
                    <span ref={(el) => (counterRefs.current[10] = el)} data-count="600" data-suffix="+">0+</span>
                  </p>
                  <p className="text-sm text-gray-400">satisfied clients</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop
                autoplay={{ delay: 4000 }}
              >
                {[
                  { name: 'Jenny W', role: 'FinTech Startup', img: 'author-1.jpg' },
                  { name: 'Jason M', role: 'Hardware Technician', img: 'author-2.jpg' },
                  { name: 'Lauren M', role: 'Marketing Director', img: 'author-3.jpg' },
                ].map((t, i) => (
                  <SwiperSlide key={i}>
                    <div className="rounded-xl bg-gray-800 border border-gray-700 p-6 shadow-md">
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex gap-3">
                          <img src={`/images/${t.img}`} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                          <div>
                            <h4 className="font-semibold text-white">{t.name}</h4>
                            <p className="text-sm text-gray-400">{t.role}</p>
                          </div>
                        </div>
                        <img src="/images/testimonials-quotes-img.svg" alt="" className="h-8 w-8 opacity-50" />
                      </div>
                      <p className="text-gray-300">
                        "Working with this team was a game-changer. The AI-enhanced solutions they delivered helped reduce bounce rates by 40% and engagement like never before."
                      </p>
                      <div className="flex mt-4 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="gallery py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">Our Gallery</h3>
            <h2 className="mx-auto max-w-3xl text-4xl font-bold text-white">
              Behind the scenes of <span className="text-indigo-400">innovation</span>
            </h2>
          </div>

          <PhotoProvider>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-md transition-all hover:shadow-2xl hover:shadow-indigo-500/20"
                >
                  <PhotoView src={src}>
                    <img
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      className="h-64 w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </PhotoView>

                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-50">
                    <span className="translate-y-4 text-lg font-semibold text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      View Image
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </PhotoProvider>

          <div className="text-center mt-12">
            <Link
              to="/image-gallery"
              className="inline-block rounded bg-gray-800 border border-gray-700 px-8 py-3 font-semibold text-white transition hover:bg-gray-700"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">FAQ</h3>
            <h2 className="mx-auto max-w-3xl text-4xl font-bold text-white">
              Frequently Asked <span className="text-indigo-400">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'What AI services do you offer?',
                answer: 'We offer comprehensive AI solutions including strategy consulting, custom AI development, machine learning models, chatbots, predictive analytics, and AI integration services.',
              },
              {
                question: 'How long does it take to implement an AI solution?',
                answer: 'Implementation timelines vary based on project complexity. Simple chatbots can be deployed in 2-4 weeks, while enterprise-level AI systems may take 3-6 months.',
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes! We provide 24/7 monitoring, regular updates, performance optimization, and dedicated support teams for all our AI solutions.',
              },
              {
                question: 'What industries do you work with?',
                answer: 'We serve various industries including healthcare, finance, e-commerce, manufacturing, retail, and technology sectors with tailored AI solutions.',
              },
              {
                question: 'How do you ensure data security?',
                answer: 'We implement enterprise-grade security measures, encryption, compliance with GDPR/HIPAA, regular security audits, and follow best practices for data protection.',
              },
              {
                question: 'What is the pricing model?',
                answer: 'We offer flexible pricing including project-based, subscription, and custom enterprise packages. Contact us for a detailed quote based on your specific needs.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="rounded-xl bg-gray-800 border border-gray-700 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-700/50 transition"
                >
                  <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-indigo-400 flex-shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-400">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/faqs"
              className="inline-block rounded bg-gray-800 border border-gray-700 px-8 py-3 font-semibold text-white transition hover:bg-gray-700"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">Our Blog</h3>
            <h2 className="mx-auto max-w-3xl text-4xl font-bold text-white">
              Latest insights and <span className="text-indigo-400">updates</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, idx) => (
              <article key={idx} className="group rounded-xl bg-gray-800 border border-gray-700 overflow-hidden shadow-lg transition hover:shadow-2xl hover:shadow-indigo-500/20">
                <div className="aspect-video bg-gradient-to-br from-indigo-900 to-purple-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                    📝
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-indigo-400 uppercase">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition">
                    <Link to="/blog-single">{post.title}</Link>
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  <Link to="/blog-single" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 text-sm font-semibold">
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-block rounded bg-gray-800 border border-gray-700 px-8 py-3 font-semibold text-white transition hover:bg-gray-700"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Let's build the future together. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="rounded bg-white px-8 py-4 font-semibold text-indigo-900 transition hover:bg-gray-100 shadow-xl"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/projects"
              className="rounded border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
</div>

    </>
  );
}