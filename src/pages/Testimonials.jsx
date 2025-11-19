import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Arjun M',
      role: 'Launch Operations – Small Rocket Lab',
      img: 'author-1.jpg',
      text: '“Aerovionix helped us stabilise flight telemetry during high-vibration stages. Their avionics stack reduced packet loss by 68%, allowing us to finally complete a full sub-orbital flight test without blind spots.”'
    },
    {
      name: 'Jason M',
      role: 'Hardware Technician – Aerospace R&D',
      img: 'author-2.jpg',
      active: true,
      text: '“Their embedded firmware tuning literally saved us weeks of debugging. Ultra-low-latency sensor fusion? Delivered. Clean signal acquisition? Delivered. These guys know their flight electronics.”'
    },
    {
      name: 'Lauren M',
      role: 'Systems Engineer – UAV Manufacturing',
      img: 'author-3.jpg',
      text: '“Aerovionix redesigned our power distribution board to handle dynamic loads in extreme conditions. Zero brownouts since implementation. Truly mission-critical engineering.”'
    },
    {
      name: 'Mason D',
      role: 'Drone Startup Founder',
      img: 'author-4.jpg',
      text: '“Their custom autopilot logic improved our drone hover stability by over 40%. Honestly, this is the level of engineering you expect from aerospace labs, not startups.”'
    },
    {
      name: 'Ethan R',
      role: 'Telemetry Lead – High-Power Rocketry',
      img: 'author-5.jpg',
      text: '“Our long-range RF link finally works as intended. Aerovionix helped us optimise antenna geometry and signal processing. Range increased from 1.2 km to 6.8 km.”'
    },
    {
      name: 'Logan P',
      role: 'Prototype Lab Technician',
      img: 'author-6.jpg',
      text: '“Their deep understanding of microcontrollers + sensors + protocol tuning helped us push our product from ‘prototype’ to ‘field-ready hardware’. Highly recommended.”'
    }
  ];

  const facts = [
    {
      title: 'Flight-Ready Engineering',
      count: 15,
      suffix: '+',
      desc: 'Years Combined Experience',
      content: 'Our team has worked across avionics, embedded systems, real-time firmware, and aerospace test environments.'
    },
    {
      title: 'Mission-Critical Builds',
      count: 120,
      suffix: '+',
      desc: 'Hardware / Firmware Projects Delivered',
      content: 'From custom autopilots to RF telemetry systems, our builds are tailored for real-world performance.'
    },
    {
      title: 'System Reliability',
      count: 98,
      suffix: '%',
      desc: 'Client Success Rate',
      content: 'Every Aerovionix system is tested for stability, noise resistance, and extreme-condition reliability.'
    }
  ];

  const faqs = [
    {
      q: 'Can Aerovionix build custom avionics hardware?',
      a: 'Yes. We design flight computers, sensor boards, power systems, telemetry modules, and embedded control units from scratch.'
    },
    {
      q: 'Do you support rocket, drone, and robotics projects?',
      a: 'Absolutely. Our team has experience in UAVs, model rockets, sounding rockets, autonomous rovers, and industrial robotics.',
      open: true
    },
    {
      q: 'Can Aerovionix optimise existing hardware?',
      a: 'Yes — we tune firmware, stabilise sensor outputs, reduce noise, improve RF range, and debug failing PCB designs.'
    },
    {
      q: 'Do you work with startups?',
      a: 'Most of our clients are startups or research teams building new aerospace hardware.'
    },
    {
      q: 'Can you integrate Aerovionix systems into existing platforms?',
      a: 'Yes — we integrate with CAN, UART, MAVLink, SBUS, custom protocols, and proprietary vendor APIs.'
    }
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  return (
    <>
      {/* PRELOADER */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-700 border-t-indigo-500"></div>
            <img src="/images/loader.svg" alt="Aerovionix" className="absolute inset-0 m-auto h-8 w-8" />
          </div>
        </div>
      )}

      {/* HEADER */}
      <section className="page-header bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-white md:text-6xl">
            Aerovionix <span className="text-indigo-400">testimonials</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-indigo-400">home</Link>
            <span>/</span>
            <span className="text-indigo-400">testimonials</span>
          </nav>
        </div>
      </section>

      {/* TESTIMONIAL CARDS */}
      <section className="page-testimonials py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg transition-all ${
                  t.active ? 'ring-2 ring-indigo-500' : 'hover:shadow-xl'
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <PhotoProvider>
                      <PhotoView src={`/images/${t.img}`}>
                        <img
                          src={`/images/${t.img}`}
                          alt={t.name}
                          className="h-14 w-14 rounded-full object-cover cursor-pointer"
                        />
                      </PhotoView>
                    </PhotoProvider>

                    <div>
                      <h3 className="font-bold text-white capitalize">{t.name}</h3>
                      <p className="text-sm text-gray-400">{t.role}</p>
                    </div>
                  </div>

                  <img
                    src="/images/testimonials-quotes-img.svg"
                    alt=""
                    className="h-10 w-10 opacity-40"
                  />
                </div>

                <p className="text-gray-300">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="our-facts py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-2 text-xl font-semibold text-indigo-400">Our Numbers</h3>
          <h2 className="mb-12 text-3xl font-bold text-white">
            Why aerospace teams trust <span className="text-indigo-400">Aerovionix</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {facts.map((fact, i) => (
              <div key={i} className="rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-white">{fact.title}</h3>
                <div className="mb-4 text-5xl font-bold text-indigo-400">
                  <Counter value={fact.count} suffix={fact.suffix} />
                </div>
                <p className="mb-2 text-sm text-gray-400">{fact.desc}</p>
                <p className="text-gray-300">{fact.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="our-faqs py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-indigo-400">faq's</h3>
              <h2 className="mb-6 text-3xl font-bold text-white">
                Aerovionix technical <span className="text-indigo-400">FAQ</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-lg bg-gray-900 shadow-md">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-white"
                  >
                    {i + 1}. {faq.q}
                    <span className={`transform transition ${openIndex === i ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
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
      </section>
    </>
  );
}
