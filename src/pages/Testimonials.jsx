import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function Testimonials() {


  const testimonials = [
    { name: 'Jenny W', role: 'fintech startup', img: 'author-1.jpg' },
    { name: 'jason m', role: 'hardware Technician', img: 'author-2.jpg', active: true },
    { name: 'Lauren M', role: 'hardware Technician', img: 'author-3.jpg' },
    { name: 'Mason D', role: 'fintech startup', img: 'author-4.jpg' },
    { name: 'Ethan R', role: 'fintech startup', img: 'author-5.jpg' },
    { name: 'Logan P', role: 'fintech startup', img: 'author-6.jpg' },
  ];

  const facts = [
    { title: 'Proven Technical Expertise', count: 15, suffix: '+', desc: 'Years of AI-Driven Design', content: 'Our team brings deep experience in machine learning, data engineering, and full-stack development.' },
    { title: 'Highly customizable solutions', count: 200, suffix: '+', desc: 'Projects Successfully Delivered', content: 'We don\'t believe in one size fits all. Every solution is tailored to your business needs and workflows.' },
    { title: 'Focus on real results', count: 95, suffix: '%', desc: 'Client Satisfaction Rate', content: 'We build AI that\'s safe, transparent, and responsible designed with security & compliance from day one.' },
  ];

  const faqs = [
    { q: 'What services does your AI agency offer?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
    { q: 'Do I need a large amount of data to use AI?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.', open: true },
    { q: 'How long does it take to develop an AI solution?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
    { q: 'Is my data secure with you?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
    { q: 'Can you integrate AI into our existing systems?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
  ];

  const [openIndex, setOpenIndex] = useState(1);

  const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    // eslint-disable-next-line no-undef
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


      {/* Page Header */}
      <section className="page-header bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            Our <span className="text-indigo-600">testimonials</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-indigo-600">testimonials</span>
          </nav>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="page-testimonials py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-lg transition-all ${t.active ? 'ring-2 ring-indigo-600' : 'hover:shadow-xl'}`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <PhotoProvider>
                      <PhotoView src={`/images/${t.img}`}>
                        <img src={`/images/${t.img}`} alt={t.name} className="h-14 w-14 rounded-full object-cover cursor-pointer" />
                      </PhotoView>
                    </PhotoProvider>
                    <div>
                      <h3 className="font-bold capitalize">{t.name}</h3>
                      <p className="text-sm text-gray-600">{t.role}</p>
                    </div>
                  </div>
                  <img src="/images/testimonials-quotes-img.svg" alt="" className="h-10 w-10 opacity-50" />
                </div>
                <p className="text-gray-700">
                  "Working with this team we game-changer. The AI-enhanced they delivered helped reduce bounce rates by 40% engagement like never before."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="what-we-do bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-indigo-600">
                We fuse AI and creativity to deliver intelligent, personalized, and future-ready design experiences that inspire.
              </h3>
              <img src="/images/what-we-do-img.png" alt="" className="mb-6 w-full rounded-xl shadow-lg" />
              <ul className="grid grid-cols-2 gap-3 text-sm font-medium">
                {['UI/UX Design', 'Chatbot Design', 'Predictive', 'Design Automation', 'Generative Branding'].map((item) => (
                  <li key={item} className="rounded bg-white px-4 py-2 text-center shadow">{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-2 text-xl font-semibold text-indigo-600">what we do</h3>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Innovative AI services, real-world <span className="text-indigo-600">results</span>
              </h2>
              <p className="mb-8 text-gray-600">
                We craft cutting-edge AI solutions tailored to your business needs—driving smarter decisions, streamlined operations.
              </p>
              <ul className="mb-8 space-y-2 text-lg font-medium">
                {['Computer Vision', 'AI Integration', 'Ongoing Support', 'AI Strategy', 'Custom AI Development'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-block rounded bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
                contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facts */}
      <section className="our-facts py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-2 text-xl font-semibold text-indigo-600">Our facts</h3>
          <h2 className="mb-12 text-3xl font-bold text-gray-900">
            Why leading brands trust us to deliver smart <span className="text-indigo-600">AI solutions</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {facts.map((fact, i) => (
              <div key={i} className="rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold">{fact.title}</h3>
                <div className="mb-4 text-5xl font-bold text-indigo-600">
                  <Counter value={fact.count} suffix={fact.suffix} />
                </div>
                <p className="mb-2 text-sm text-gray-600">{fact.desc}</p>
                <p className="text-gray-700">{fact.content}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-lg">
            <span className="font-bold text-indigo-600">Free</span> Let's make something great work together.{' '}
            <Link to="/contact" className="font-bold text-indigo-600 underline">Get Free Quote</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="our-faqs py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-indigo-600">faq's</h3>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Your AI questions, expertly <span className="text-indigo-600">answered here</span>
              </h2>
              <Link to="/faqs" className="inline-block rounded bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
                View all faqs
              </Link>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-lg bg-white shadow-md">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-gray-900"
                  >
                    {i + 1}. {faq.q}
                    <span className={`transform transition ${openIndex === i ? 'rotate-180' : ''}`}>Down Arrow</span>
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
      </section>

    </>
  );
}