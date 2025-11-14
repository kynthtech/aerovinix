import { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function TeamSingle() {


  // Skills Progress Animation
  const SkillBar = ({ label, percent }) => {
    const [width, setWidth] = useState(0);
    const { ref, inView } = inView({ triggerOnce: true });

    useEffect(() => {
      if (inView) {
        const timer = setTimeout(() => setWidth(percent), 300);
        return () => clearTimeout(timer);
      }
    }, [inView, percent]);

    return (
      <div ref={ref} className="mb-6">
        <div className="flex justify-between mb-1 text-sm">
          <span className="font-medium">{label}</span>
          <span className="font-bold text-indigo-600">{percent}%</span>
        </div>
        <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-1000"
            style={{ width: `${width}%` }}
          />
        </div>
      </div>
    );
  };

  // Contact Form State
  const [formData, setFormData] = useState({
    fname: '', lname: '', phone: '', email: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Demo)');
    console.log(formData);
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



      {/* Page Header */}
      <section className="page-header bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            Darrell <span className="text-indigo-600">steward</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/team" className="text-gray-600 hover:text-indigo-600">team</Link>
            <span className="text-gray-400">/</span>
            <span className="text-indigo-600">Darrell steward</span>
          </nav>
        </div>
      </section>

      {/* Team Single Content */}
      <section className="page-team-single py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <PhotoProvider>
                <PhotoView src="/images/team-1.jpg">
                  <img src="/images/team-1.jpg" alt="Darrell Steward" className="w-full rounded-xl shadow-lg cursor-pointer transition hover:shadow-2xl" />
                </PhotoView>
              </PhotoProvider>

              {/* CTA Box */}
              <div className="mt-8 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white shadow-xl">
                <img src="/images/sidebar-cta-logo.svg" alt="" className="mb-4 h-12" />
                <h3 className="mb-2 text-xl font-bold">We're here help!</h3>
                <p className="mb-6 text-sm">
                  Need assistance? We're here to help with support, guidance, and resources. Reach out to us anytime.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <img src="/images/icon-phone-gradiant.svg" alt="" className="h-5 w-5" />
                    <a href="tel:+00152885253">+(00) - 152 885 253</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/images/icon-mail-gradiant.svg" alt="" className="h-5 w-5" />
                    <a href="mailto:support@aeravionix.com">support@aeravionix.com</a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-8">
              {/* About Me */}
              <div>
                <h3 className="mb-2 text-xl font-semibold text-indigo-600">Hacking specialist</h3>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  About <span className="text-indigo-600">me</span>
                </h2>
                <p className="mb-6 text-gray-600">
                  Integrating AI technologies seamlessly into your business infrastructure is key to unlocking new levels of efficiency, innovation, and growth.
                </p>

                {/* Social Links */}
                <div className="flex space-x-3">
                  {['pinterest-p', 'x-twitter', 'facebook-f', 'instagram'].map((icon) => (
                    <a
                      key={icon}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-indigo-600 hover:text-white"
                    >
                      <i className={`fa-brands fa-${icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                {[
                  { label: 'phone', value: <a href="tel:+00152885253">+(00) - 152 885 253</a> },
                  { label: 'email', value: <a href="mailto:info@aeravionix.com">info@aeravionix.com</a> },
                  { label: 'location', value: 'Glenholme street, USA' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
                    <h3 className="mb-1 text-sm font-semibold uppercase text-gray-500">{item.label}</h3>
                    <p className="text-lg font-medium text-indigo-700">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="mt-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  My <span className="text-indigo-600">expertise</span>
                </h2>
                <div className="space-y-6">
                  <SkillBar label="AI Development" percent={95} />
                  <SkillBar label="Data Analytics" percent={80} />
                  <SkillBar label="Machine Learning" percent={85} />
                  <SkillBar label="Automation Solutions" percent={62} />
                </div>
              </div>

              {/* Career Guidelines */}
              <div className="mt-12 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Career <span className="text-indigo-600">guidelines</span>
                </h2>
                <ul className="space-y-3 text-gray-700">
                  {[
                    'We help you map out a career path that align ai',
                    'We provide expert advice to craft compelling',
                    'Our guidance emphasizes building critical skills',
                    'Stay updated with the latest industry trends',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Form */}
              <div className="mt-12">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Contact <span className="text-indigo-600">form</span>
                </h2>
                <p className="mb-8 text-gray-600">
                  I'm here to guide you on your AI journey and help you unlock transformative results. Whether you're aiming to optimize processes, enhance decision-making, or drive innovation, I'll support you every step of the way.
                </p>

                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Have any <span className="text-indigo-600">questions?</span>
                </h3>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    required
                    className="rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    required
                    className="rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone No."
                    required
                    className="rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Write Message..."
                    className="col-span-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="col-span-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
            </main>
          </div>
        </div>
      </section>

    
    </>
  );
}