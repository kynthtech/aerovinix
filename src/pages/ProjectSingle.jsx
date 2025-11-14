import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

export default function ProjectSingle() {

  const project = {
    name: 'Data Analytics',
    company: 'AI Agency',
    client: 'Josefin H. Smith',
    date: '25 January, 2025',
    duration: '6 month',
    image: 'project-2.jpg',
  };

  const counters = [
    { value: 2500, suffix: '+', label: 'Success rate' },
    { value: 120, suffix: '+', label: 'Team members' },
    { value: 95, suffix: '%', label: 'AI Consultancy' },
    { value: 10, suffix: '+', label: 'Years of experience' },
  ];

  const faqs = [
    { q: 'What services does your AI agency offer?', a: 'We offer a wide range of dermatology treatments, including acne care, psoriasis management, skin cancer screening, cosmetic procedures like Botox etc.' },
    { q: 'Do I need a large amount of data to use AI?', a: 'We offer a wide range of dermatology treatments, including acne care, psoriasis management, skin cancer screening, cosmetic procedures like Botox etc.', open: true },
    { q: 'How long does it take to develop an AI solution?', a: 'We offer a wide range of dermatology treatments, including acne care, psoriasis management, skin cancer screening, cosmetic procedures like Botox etc.' },
    { q: 'Is my data secure with you?', a: 'We offer a wide range of dermatology treatments, including acne care, psoriasis management, skin cancer screening, cosmetic procedures like Botox etc.' },
    { q: 'Can you integrate AI into our existing systems?', a: 'We offer a wide range of dermatology treatments, including acne care, psoriasis management, skin cancer screening, cosmetic procedures like Botox etc.' },
  ];

  const [openIndex, setOpenIndex] = useState(1);

  const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
      if (inView) {
        let start = 0;
        const end = parseInt(value);
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start > end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
      }
    }, [inView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
  };
  

  return (
    <>
      {/* Header */}
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
              <button className={`font-medium transition ${isActive('/project-single') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>
                Pages
              </button>
              <div className="absolute left-0 mt-2 hidden w-56 rounded bg-white shadow-lg group-hover:block">
                <Link to="/service-single" className="block px-4 py-2 hover:bg-indigo-50">Service Details</Link>
                <Link to="/blog-single" className="block px-4 py-2 hover:bg-indigo-50">Blog Details</Link>
                <Link to="/projects" className="block px-4 py-2 hover:bg-indigo-50">Projects</Link>
                <Link to="/project-single" className="block px-4 py-2 bg-indigo-100 text-indigo-700">Project Details</Link>
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
            Success stories ai <span className="text-indigo-600">in action</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/projects" className="text-gray-600 hover:text-indigo-600">projects</Link>
            <span className="text-gray-400">/</span>
            <span className="text-indigo-600">Success stories ai in action</span>
          </nav>
        </div>
      </section>

      {/* Project Single */}
      <section className="page-project-single py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-lg">
                <div className="mb-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between"><span className="font-medium">Project name:</span> <span>{project.name}</span></li>
                    <li className="flex justify-between"><span className="font-medium">Company:</span> <span>{project.company}</span></li>
                    <li className="flex justify-between"><span className="font-medium">Client:</span> <span>{project.client}</span></li>
                    <li className="flex justify-between"><span className="font-medium">Date:</span> <span>{project.date}</span></li>
                    <li className="flex justify-between"><span className="font-medium">Duration:</span> <span>{project.duration}</span></li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-bold">Share:</h3>
                  <div className="flex space-x-3">
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-pink-600 shadow transition hover:bg-pink-50">
                      Instagram
                    </a>
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow transition hover:bg-blue-50">
                      Facebook
                    </a>
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow transition hover:bg-gray-100">
                      Twitter
                    </a>
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-pink-500 shadow transition hover:bg-pink-50">
                      Dribbble
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-700 p-6 text-white shadow-xl">
                <img src="/images/sidebar-cta-logo.svg" alt="" className="mb-4 h-12" />
                <h3 className="mb-2 text-xl font-bold">We're here help!</h3>
                <p className="mb-6 text-sm">Need assistance? We're here to help with support, guidance, and resources. Reach out to us anytime.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <img src="/images/icon-phone-gradiant.svg" alt="" className="h-5 w-5" />
                    <a href="tel:+00152885253" className="hover:underline">+(00) - 152 885 253</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <img src="/images/icon-mail-gradiant.svg" alt="" className="h-5 w-5" />
                    <a href="mailto:support@aeravionix.com" className="hover:underline">support@aeravionix.com</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8">
              <img src={`/images/${project.image}`} alt={project.name} className="mb-8 w-full rounded-xl shadow-lg" />

              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Project <span className="text-indigo-600">overview</span>
                </h2>
                <p className="mb-4 text-gray-700">
                  Integrating AI technologies seamlessly into your business infrastructure is key to unlocking new levels of efficiency, innovation, and growth. Our AI integration services ensure that advanced machine learning models, natural language processing, and intelligent automation tools are tailored to your specific needs. We work closely with your team to align AI solutions with your workflows, maximizing their impact across operations, customer service, and decision-making processes.
                </p>
                <p className="text-gray-700">
                  Once integration is complete, we focus on deploying AI models at scale with precision and security. Our deployment strategies are designed for flexibility, whether on cloud, on-premises, or hybrid environments. We provide continuous monitoring, performance optimization, and maintenance to ensure that your AI systems adapt and evolve along with your business goals, delivering long-term value and a sustainable competitive edge.
                </p>
              </div>

              <div className="mb-12 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Client challenges & <span className="text-indigo-600">requirements</span>
                </h2>
                <p className="mb-6 text-gray-700">
                  Integrating AI technologies seamlessly into your business infrastructure is key to unlocking new levels of efficiency, innovation, and growth. Our AI integration services ensure that advanced machine learning models, natural language processing, and intelligent automation tools are tailored to your specific needs. We work closely with your team to align AI solutions with your workflows, maximizing their impact across operations, customer service, and decision-making processes.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
                    Our machine learning models help forecast trend identify patterns & predict future outcomes with.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
                    Whether you're in retail, healthcare, finance, or any other industry, our machine learning solutions.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
                    With our advanced analytics tools, you can access real-time data insights, allowing you to make.
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Project <span className="text-indigo-600">solution</span>
                </h2>
                <p className="mb-8 text-gray-700">
                  Integrating AI technologies seamlessly into your business infrastructure is key to unlocking new levels of efficiency, innovation, and growth. Our AI integration services ensure that advanced machine learning models, natural language processing, and intelligent automation tools are tailored to your specific needs. We work closely with your team to align AI solutions with your workflows, maximizing their impact across operations, customer service, and decision-making processes.
                </p>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  {counters.map((c, i) => (
                    <div key={i} className="text-center">
                      <h2 className="text-4xl font-bold text-indigo-600">
                        <Counter value={c.value} suffix={c.suffix} />
                      </h2>
                      <p className="text-sm text-gray-600">{c.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Your complete FAQ guide to <span className="text-indigo-600">cybersecurity solutions</span>
                </h2>
                <p className="mb-8 text-gray-700">
                  Welcome to our comprehensive FAQ guide on cybersecurity solutions. Here we answer the most common questions about protecting your business from cyber threats understanding the latest security.
                </p>

                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="rounded-lg bg-white shadow-md">
                      <button
                        onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                        className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-gray-900"
                      >
                        {i + 1}. {faq.q}
                        <ChevronDown className={`h-5 w-5 transform transition ${openIndex === i ? 'rotate-180' : ''}`} />
                      </button>
                      {openIndex === i && (
                        <div className="border-t border-gray-200 px-6 py-4 text-gray-700">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="main-footer bg-gray-900 py-16 text-white">
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
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-l border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <button className="rounded-r bg-indigo-600 px-4 py-2 transition hover:bg-indigo-700">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
            <p>Copyright © 2025 Aeravionix. All Rights Reserved.</p>
          </div>
        </div>
      </footer> */}
    </>
  );
}