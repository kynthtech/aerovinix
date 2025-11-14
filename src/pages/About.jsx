import { useEffect, useRef , useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';

export default function About() {
  const counterRefs = useRef([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  setTimeout(() => setIsLoading(false), 1000);
}, []);
  // Counter Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const countTo = parseFloat(target.getAttribute('data-count'));
            const suffix = target.getAttribute('data-suffix') || '';
            let count = 0;
            const increment = countTo / 75;
            const timer = setInterval(() => {
              count += increment;
              if (count >= countTo) {
                target.textContent = countTo.toFixed(1).replace(/\.0$/, '') + suffix;
                clearInterval(timer);
              } else {
                target.textContent = count.toFixed(1).replace(/\.0$/, '') + suffix;
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

  return (
    <>
      {/* Preloader */}
 {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600"></div>
            <div className="absolute inset-0 m-auto flex h-8 w-8 items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-indigo-600"></div>
            </div>
          </div>
        </div>
      )}


    
      {/* Page Header */}
      <section className="page-header bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            About <span className="text-indigo-600">us</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-indigo-600">about us</span>
          </nav>
        </div>
      </section>

      {/* About Us Stats */}
      <section className="about-us py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-600">About Us</h3>
          <h2 className="mx-auto mb-12 max-w-4xl text-4xl font-bold text-gray-900">
            Our team of data scientists, engineers, and designers work at the intersection of technology and strategy turning complex challenges into simple, AI-powered solutions.
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Seamless Integration', count: 298, suffix: '+', icon: 'icon-about-item-1.svg', img: 'about-item-image-1.png' },
              { title: 'AI Projects Delivered', count: 978, suffix: '+', icon: 'icon-about-item-2.svg', img: 'about-item-image-2.png' },
              { title: 'Handled by AI Bots', count: 300, suffix: '%', icon: 'icon-about-item-3.svg', img: 'about-item-image-3.png' },
              { title: 'Faster Time to Market', count: 95, suffix: 'X', icon: 'icon-about-item-4.svg', img: 'about-item-image-4.png' },
            ].map((item, i) => (
              <div key={i} className="group rounded-xl bg-white p-6 shadow-lg transition hover:shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700">{item.title}</h3>
                    <p className="text-3xl font-bold text-indigo-600">
                      <span
                        ref={(el) => (counterRefs.current[i] = el)}
                        data-count={item.count}
                        data-suffix={item.suffix}
                      >
                        0{item.suffix}
                      </span>
                    </p>
                  </div>
                  <img src={`/images/${item.icon}`} alt="" className="h-10 w-10" />
                </div>
                <img src={`/images/${item.img}`} alt="" className="mx-auto mt-4 h-32 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="our-approach py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-600">Our mission</h3>
            <h2 className="text-4xl font-bold text-gray-900">
              Driving innovation through intelligent <span className="text-indigo-600">technology</span>
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
                  <img src={`/images/${item.icon}`} alt="" className="h-12 w-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">
                      Our mission is to harness the power of AI to solve real-world problems. From automating tasks to delivering data-driven insights.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img src="/images/approach-image.jpg" alt="Our Approach" className="w-full rounded-xl shadow-xl" />
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

      {/* Facts */}
      <section className="our-facts py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-600">Our facts</h3>
          <h2 className="mx-auto mb-12 max-w-4xl text-4xl font-bold text-gray-900">
            Why leading brands trust us to deliver smart <span className="text-indigo-600">AI solutions</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: 'Proven Technical Expertise', count: 15, suffix: '+', desc: 'Years of AI-Driven Design', text: 'Our team brings deep experience in machine learning, data engineering, and full-stack development.' },
              { title: 'Highly customizable solutions', count: 200, suffix: '+', desc: 'Projects Successfully Delivered', text: "We don't believe in one size fits all. Every solution is tailored to your business needs and workflows." },
              { title: 'Focus on real results', count: 95, suffix: '%', desc: 'Client Satisfaction Rate', text: "We build AI that's safe, transparent, and responsible designed with security & compliance from day one." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-gray-50 p-6 shadow-md">
                <h3 className="mb-3 text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="mb-2 text-4xl font-bold text-indigo-600">
                  <span ref={(el) => (counterRefs.current[6 + i] = el)} data-count={item.count} data-suffix={item.suffix}>
                    0{item.suffix}
                  </span>
                </p>
                <p className="mb-3 text-sm text-gray-600">{item.desc}</p>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-lg text-gray-700">
            <span className="font-bold text-indigo-600">Free</span> Let's make something great work together.{' '}
            <Link to="/contact" className="text-indigo-600 hover:underline">Get Free Quote</Link>
          </p>
        </div>
      </section>

      {/* Our Solution */}
      <section className="our-solution py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-600">all in one solution</h3>
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                Delivering real-world impact <span className="text-indigo-600">solution</span>
              </h2>
              <p className="text-gray-600">
                We envision a world where artificial intelligence transforms lives, industries, and possibilities. Our goal is to lead this evolution by creating intuitive, ethical.
              </p>
            </div>
            <div className="space-y-6">
              {[
                'Custom AI Development', 'Custom AI Solutions', 'Automated Intelligence', 'Scalable Infrastructure'
              ].map((title, i) => (
                <div key={i} className="flex gap-4">
                  <img src={`/images/icon-solution-${i + 1}.svg`} alt="" className="h-10 w-10 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <p className="text-gray-600">We dive deep into your goals challenges to uncover high-impact AI opportunities.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="cta-box bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-2 text-sm font-semibold uppercase">our facts</h3>
          <h2 className="mb-4 text-4xl font-bold">
            Ready to build smarter, faster, & more intelligently <span>with AI?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg">
            Ready to innovate with AI model? Whether you have an idea, a challenge, or a full roadmap we'd love to help bring it to life.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="rounded bg-white px-8 py-3 font-semibold text-indigo-600 transition hover:bg-gray-100">
              Get Started Today
            </Link>
            <Link to="/contact" className="rounded border border-white px-8 py-3 font-semibold transition hover:bg-white hover:text-indigo-600">
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="our-team py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-600">our team</h3>
          <h2 className="mx-auto mb-12 max-w-3xl text-4xl font-bold text-gray-900">
            The human intelligence powering <span className="text-indigo-600">our AI</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Sophia Bennett', role: 'Hacking specialist', img: 'team-1.jpg' },
              { name: 'Darrell steward', role: 'Attack specialist', img: 'team-2.jpg' },
              { name: 'Ava mitchell', role: 'Cyber Expert', img: 'team-3.jpg' },
              { name: 'Ethan carter', role: 'Penetration Tester', img: 'team-4.jpg' },
            ].map((member, i) => (
              <div key={i} className="group rounded-xl bg-white shadow-lg transition hover:shadow-xl">
                <Link to="/team-single" className="block">
                  <img src={`/images/${member.img}`} alt={member.name} className="h-64 w-full rounded-t-xl object-cover" />
                </Link>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    <Link to="/team-single" className="hover:text-indigo-600">{member.name}</Link>
                  </h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <div className="mt-4 flex justify-center space-x-3">
                    <a href="#" className="text-gray-500 hover:text-indigo-600"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-gray-500 hover:text-indigo-600"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-gray-500 hover:text-indigo-600"><i className="fab fa-pinterest-p"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="what-we-do py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-8 text-4xl font-bold text-gray-900">
                We fuse AI and creativity to deliver intelligent, personalized, and future-ready design experiences that inspire.
              </h3>
              <img src="/images/what-we-do-img.png" alt="" className="mb-6 w-full rounded-xl shadow-lg" />
              <ul className="grid grid-cols-2 gap-3 text-sm">
                {['UI/UX Design', 'Chatbot Design', 'Predictive', 'Design Automation', 'Generative Branding'].map((item) => (
                  <li key={item} className="rounded bg-white px-4 py-2 shadow">{item}</li>
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
                    <span className="h-2 w-2 rounded-full bg-indigo-600"></span> {item}
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
      <section className="our-testimonials py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
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
                  <p className="text-4xl font-bold text-indigo-600">
                    <span ref={(el) => (counterRefs.current[9] = el)} data-count="200" data-suffix="+">0+</span>
                  </p>
                  <p className="text-sm text-gray-600">projects successfully</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-indigo-600">
                    <span ref={(el) => (counterRefs.current[10] = el)} data-count="600" data-suffix="+">0+</span>
                  </p>
                  <p className="text-sm text-gray-600">projects successfully</p>
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
                  { name: 'Jenny W', role: 'fintech startup', img: 'author-1.jpg' },
                  { name: 'jason m', role: 'hardware Technician', img: 'author-2.jpg' },
                  { name: 'Lauren M', role: 'hardware Technician', img: 'author-3.jpg' },
                ].map((t, i) => (
                  <SwiperSlide key={i}>
                    <div className="rounded-xl bg-gray-50 p-6 shadow-md">
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex gap-3">
                          <img src={`/images/${t.img}`} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                          <div>
                            <h4 className="font-semibold text-gray-800">{t.name}</h4>
                            <p className="text-sm text-gray-600">{t.role}</p>
                          </div>
                        </div>
                        <img src="/images/testimonials-quotes-img.svg" alt="" className="h-8 w-8" />
                      </div>
                      <p className="text-gray-700">
                        "Working with this team we game-changer. The AI-enhanced they delivered helped reduce bounce rates by 40% engagement like never before."
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="our-faqs py-20 bg-gray-50">
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
              {[
                'What services does your AI agency offer?',
                'Do I need a large amount of data to use AI?',
                'How long does it take to develop an AI solution?',
                'Is my data secure with you?',
                'Can you integrate AI into our existing systems?',
              ].map((q, i) => (
                <details key={i} className="rounded-lg bg-white p-4 shadow-sm" open={i === 1}>
                  <summary className="cursor-pointer font-medium text-gray-800">{i + 1}. {q}</summary>
                  <p className="mt-2 text-gray-600">
                    Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}