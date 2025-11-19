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
    { q: 'What services does your AI agency offer?', a: 'We offer a wide range of dermatology treatments...' },
    { q: 'Do I need a large amount of data to use AI?', a: 'We offer a wide range of dermatology treatments...' },
    { q: 'How long does it take to develop an AI solution?', a: 'We offer a wide range of dermatology treatments...' },
    { q: 'Is my data secure with you?', a: 'We offer a wide range of dermatology treatments...' },
    { q: 'Can you integrate AI into our existing systems?', a: 'We offer a wide range of dermatology treatments...' },
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
      {/* PAGE HEADER */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-white md:text-6xl">
            Success stories AI <span className="text-indigo-500">in action</span>
          </h1>

          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-300 hover:text-indigo-400">home</Link>
            <span className="text-gray-500">/</span>
            <Link to="/projects" className="text-gray-300 hover:text-indigo-400">projects</Link>
            <span className="text-gray-500">/</span>
            <span className="text-indigo-400">Success stories AI in action</span>
          </nav>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section
        className="relative py-20 bg-black bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

            {/* SIDEBAR */}
            <div className="lg:col-span-4 space-y-8">
              <div className="rounded-xl bg-gray-900 p-6 border border-gray-800 shadow-lg text-gray-300">
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between"><span className="font-medium text-white">Project name:</span> <span>{project.name}</span></li>
                  <li className="flex justify-between"><span className="font-medium text-white">Company:</span> <span>{project.company}</span></li>
                  <li className="flex justify-between"><span className="font-medium text-white">Client:</span> <span>{project.client}</span></li>
                  <li className="flex justify-between"><span className="font-medium text-white">Date:</span> <span>{project.date}</span></li>
                  <li className="flex justify-between"><span className="font-medium text-white">Duration:</span> <span>{project.duration}</span></li>
                </ul>

                <h3 className="mt-6 mb-3 text-lg font-bold text-white">Share:</h3>
                <div className="flex space-x-3">
                  {[
                    { name: 'Instagram', color: 'text-pink-500' },
                    { name: 'Facebook', color: 'text-blue-500' },
                    { name: 'Twitter', color: 'text-gray-300' },
                    { name: 'Dribbble', color: 'text-pink-400' }
                  ].map((s, i) => (
                    <a
                      key={i}
                      href="#"
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition shadow ${s.color}`}
                    >
                      {s.name[0]}
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA BOX */}
              <div className="rounded-xl bg-gradient-to-br from-purple-700 to-indigo-700 p-6 text-white shadow-xl">
                <img src="/images/sidebar-cta-logo.svg" alt="" className="mb-4 h-12" />
                <h3 className="mb-2 text-xl font-bold">We're here to help!</h3>
                <p className="mb-6 text-sm text-gray-200">
                  Need assistance? We're here to help with support, guidance, and resources. Reach out anytime.
                </p>

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

            {/* MAIN CONTENT */}
            <div className="lg:col-span-8 text-gray-300">
              <img
                src={`/images/${project.image}`}
                alt={project.name}
                className="mb-8 w-full rounded-xl shadow-xl"
              />

              {/* OVERVIEW */}
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Project <span className="text-indigo-500">overview</span>
                </h2>
                <p className="mb-4">
                  Integrating AI technologies seamlessly into your business infrastructure...
                </p>
                <p>
                  Once integration is complete, we focus on deploying AI models at scale...
                </p>
              </div>

              {/* REQUIREMENTS */}
              <div className="mb-12 rounded-xl bg-gray-900 p-8 border border-gray-800">
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Client challenges & <span className="text-indigo-500">requirements</span>
                </h2>

                <p className="mb-6">
                  Integrating AI technologies seamlessly into your business infrastructure...
                </p>

                <ul className="space-y-3">
                  {[
                    'Machine learning models help forecast trends...',
                    'Retail, healthcare, finance — ML fits everywhere...',
                    'Real-time data insights allow smarter decisions...'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* SOLUTION COUNTERS */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Project <span className="text-indigo-500">solution</span>
                </h2>

                <p className="mb-8">
                  Integrating AI technologies seamlessly into your business infrastructure...
                </p>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  {counters.map((c, i) => (
                    <div key={i} className="text-center">
                      <h2 className="text-4xl font-bold text-indigo-500">
                        <Counter value={c.value} suffix={c.suffix} />
                      </h2>
                      <p className="text-sm text-gray-400">{c.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Your complete FAQ guide to <span className="text-indigo-500">cybersecurity</span>
                </h2>

                <p className="mb-8">
                  Welcome to our comprehensive FAQ guide on cybersecurity solutions...
                </p>

                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="rounded-lg bg-gray-900 border border-gray-800">
                      <button
                        onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                        className="flex w-full items-center justify-between px-6 py-4 font-semibold text-white"
                      >
                        {i + 1}. {faq.q}
                        <ChevronDown className={`h-5 w-5 transform transition ${openIndex === i ? 'rotate-180' : ''}`} />
                      </button>

                      {openIndex === i && (
                        <div className="border-t border-gray-700 px-6 py-4 text-gray-300">
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
    </>
  );
}
