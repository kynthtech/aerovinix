import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Services() {
  const [openFaq, setOpenFaq] = useState(2);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

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
    { q: 'What services does your AI agency offer?', a: 'Project timelines vary depending...' },
    { q: 'Do I need a large amount of data to use AI?', a: 'Project timelines vary depending...' },
    { q: 'How long does it take to develop an AI solution?', a: 'Project timelines vary depending...' },
    { q: 'Is my data secure with you?', a: 'Project timelines vary depending...' },
    { q: 'Can you integrate AI into our existing systems?', a: 'Project timelines vary depending...' },
  ];

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-700 border-t-indigo-500" />
            <img src="/images/loader.svg" className="absolute inset-0 m-auto h-8 w-8" />
          </div>
        </div>
      )}

      {/* Header */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-white md:text-6xl">
            Our <span className="text-indigo-500">services</span>
          </h1>

          <nav className="mt-2 flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-300 hover:text-indigo-400">home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-indigo-400">services</span>
          </nav>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black bg-cover bg-center relative" style={{ backgroundImage: "url('/images/bg.png')" }}>
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((title, i) => (
              <div
                key={`service-${title}`}
                className="rounded-xl bg-gray-900 p-6 border border-gray-800 shadow hover:shadow-indigo-900 transition"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  <Link to="/service-single" className="hover:text-indigo-400">{title}</Link>
                </h3>
                <p className="text-gray-300 mb-4">
                  We assess your business and identify high-impact AI opportunities...
                </p>
                <img src={`/images/service-item-${i + 1}.png`} className="mx-auto h-48 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">how it works</h3>
            <h2 className="text-4xl font-bold text-white mb-8">Our process for smarter <span className="text-indigo-500">AI solutions</span></h2>

            {steps.map(step => (
              <div key={step.step} className="mb-8 flex gap-4">
                <img src={`/images/${step.icon}`} className="h-12 w-12" />
                <div>
                  <p className="text-indigo-400 font-bold">step {step.step}</p>
                  <h3 className="text-white text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-300">We dive deep into your goals to uncover AI opportunities...</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <video autoPlay muted loop className="rounded-xl shadow-xl w-full">
              <source src="https://demo.awaikenthemes.com/assets/videos/nextmind-how-work-video.mp4" />
            </video>
            <p className="mt-6 text-gray-300 text-lg">
              We help businesses design and deploy intelligent solutions. 
              <Link to="/contact" className="text-indigo-400 hover:underline ml-1">Contact Now</Link>
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-2">

          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              We fuse AI and creativity to deliver future-ready experiences.
            </h3>
            <img src="/images/what-we-do-img.png" className="rounded-xl shadow-xl mb-6" />

            <ul className="flex flex-wrap gap-3">
              {['UI/UX Design', 'Chatbot Design', 'Predictive', 'Design Automation', 'Generative Branding'].map(item => (
                <li className="px-4 py-2 rounded-full bg-indigo-900 text-indigo-300 text-sm">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase text-indigo-400 font-semibold">what we do</h3>
            <h2 className="text-4xl font-bold text-white mb-4">
              Innovative AI services, real-world <span className="text-indigo-500">results</span>
            </h2>

            <p className="text-gray-300 mb-6">
              We craft cutting-edge AI solutions tailored to your business needs...
            </p>

            <ul className="space-y-2 text-gray-300 mb-8">
              {['Computer Vision', 'AI Integration', 'Ongoing Support', 'AI Strategy', 'Custom AI Development'].map(item => (
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-indigo-500 rounded-full"></span>{item}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-semibold">
              Contact Us
            </Link>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-2">

          <div>
            <h3 className="text-sm uppercase text-indigo-400 font-semibold">testimonials</h3>
            <h2 className="text-4xl font-bold text-white mb-4">
              Powering innovation with <span className="text-indigo-500">AI</span>
            </h2>
            <p className="text-gray-300 mb-8">Crafting intuitive and intelligent user experiences...</p>

            <div className="flex gap-8">
              <div>
                <h2 className="text-5xl font-bold text-indigo-500">200+</h2>
                <p className="text-gray-400">projects</p>
              </div>
              <div>
                <h2 className="text-5xl font-bold text-indigo-500">600+</h2>
                <p className="text-gray-400">happy clients</p>
              </div>
            </div>
          </div>

          <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }} className="pb-12">
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="p-6 bg-black border border-gray-800 rounded-xl shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={`/images/${t.img}`} className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <h3 className="text-white font-semibold">{t.name}</h3>
                      <p className="text-gray-400 text-sm">{t.role}</p>
                    </div>
                  </div>

                  <p className="text-gray-300">{t.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-2">

          <div>
            <h3 className="text-sm uppercase text-indigo-400 font-semibold">faq's</h3>
            <h2 className="text-4xl font-bold text-white mb-6">
              Your AI questions, <span className="text-indigo-500">answered</span>
            </h2>

            <Link to="/faqs" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-semibold">
              View all FAQs
            </Link>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-800 bg-gray-900">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left text-white font-medium"
                >
                  {i + 1}. {faq.q}
                  <span className={`transition transform ${openFaq === i ? 'rotate-180' : ''}`}>⌄</span>
                </button>

                {openFaq === i && (
                  <div className="border-t border-gray-700 p-5 text-gray-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
