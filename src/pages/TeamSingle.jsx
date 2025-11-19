import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useInView } from "react-intersection-observer";
import "react-photo-view/dist/react-photo-view.css";

export default function TeamSingle() {
  const { state } = useLocation();
  const member = state?.member;

  // If opened manually, you can fallback or redirect
  if (!member) {
    return (
      <div className="text-center text-white p-20 bg-black">
        <h2>No Team Member Selected</h2>
        <Link to="/team" className="text-indigo-400 underline">Back to Team</Link>
      </div>
    );
  }

  // Skill Bar Component
  const SkillBar = ({ label, percent }) => {
    const [width, setWidth] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
      if (inView) {
        const timer = setTimeout(() => setWidth(percent), 300);
        return () => clearTimeout(timer);
      }
    }, [inView, percent]);

    return (
      <div ref={ref} className="mb-6">
        <div className="flex justify-between mb-1 text-sm text-gray-300">
          <span>{label}</span>
          <span className="font-bold text-indigo-400">{percent}%</span>
        </div>
        <div className="h-3 rounded-full bg-gray-700 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-1000"
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Preloader */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="relative">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-800 border-t-indigo-500"></div>
          <img
            src="/images/loader.svg"
            alt="loading"
            className="absolute inset-0 m-auto h-8 w-8"
          />
        </div>
      </div>

      {/* Header */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            {member.name} <span className="text-indigo-400">Profile</span>
          </h1>

          <nav className="flex justify-center space-x-2 text-sm mt-4">
            <Link to="/" className="text-gray-400 hover:text-indigo-400">
              home
            </Link>
            <span>/</span>
            <Link to="/team" className="text-gray-400 hover:text-indigo-400">
              team
            </Link>
            <span>/</span>
            <span className="text-indigo-400">{member.name}</span>
          </nav>
        </div>
      </section>

      {/* Page Content */}
      <section className="py-20 bg-[#0b0f17] text-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

            {/* Sidebar Image */}
            <aside className="lg:col-span-4">
              <PhotoProvider>
                <PhotoView src={`/images/${member.img}`}>
                  <img
                    src={`/images/${member.img}`}
                    className="rounded-xl shadow-xl cursor-pointer border border-gray-700 hover:border-indigo-500 transition"
                  />
                </PhotoView>
              </PhotoProvider>

              {/* CTA Box */}
              <div className="mt-8 rounded-xl bg-gradient-to-br from-indigo-700 to-purple-900 p-6 text-white shadow-xl">
                <img src="/images/sidebar-cta-logo.svg" className="h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Need Assistance?</h3>
                <p className="text-sm mb-6 text-indigo-100">
                  For avionics inquiries, collaborations, or technical support –
                  reach out anytime.
                </p>

                <ul className="text-sm space-y-3">
                  <li>
                    <a href="tel:+00152885253" className="hover:text-indigo-300">
                      📞 +1 528 885 253
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@aerovionix.com" className="hover:text-indigo-300">
                      ✉ support@aerovionix.com
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-8">

              {/* About */}
              <h3 className="text-indigo-400 text-xl font-semibold">
                {member.role}
              </h3>

              <h2 className="text-3xl text-white font-bold mt-2 mb-6">
                About <span className="text-indigo-400">Engineer</span>
              </h2>

              <p className="leading-relaxed text-gray-300 mb-6">
                {member.role} at Aerovionix, specializing in mission-critical
                avionics, sensor fusion, embedded flight-control systems,
                high-reliability hardware, and aerospace-grade firmware.
              </p>

              {/* Social */}
              <div className="flex space-x-3 mb-12">
                {["linkedin-in", "github", "x-twitter"].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-indigo-600 hover:text-white transition"
                  >
                    <i className={`fa-brands fa-${icon}`}></i>
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { label: "phone", value: "+1 528 885 253" },
                  { label: "email", value: "info@aerovionix.com" },
                  { label: "location", value: "AeroVionix HQ — Bengaluru" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-6 rounded-xl bg-[#111726] border border-gray-700"
                  >
                    <h4 className="uppercase text-sm text-gray-400">{item.label}</h4>
                    <p className="text-indigo-400 text-lg">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Expertise */}
              <h2 className="text-3xl text-white font-bold mb-6">
                Engineering <span className="text-indigo-400">Expertise</span>
              </h2>

              <SkillBar label="Embedded Avionics Firmware" percent={92} />
              <SkillBar label="Flight Computer Architecture" percent={88} />
              <SkillBar label="Telemetry & RF Systems" percent={78} />
              <SkillBar label="Sensor Fusion / GNC" percent={84} />

              {/* Guidelines / Description */}
              <div className="mt-12 p-8 bg-[#111726] rounded-xl border border-gray-700">
                <h2 className="text-3xl text-white font-bold mb-4">
                  Engineering <span className="text-indigo-400">Focus Areas</span>
                </h2>

                <ul className="space-y-3 text-gray-300">
                  <li>• High-reliability embedded avionics systems</li>
                  <li>• Multi-sensor fusion (IMU, GPS, Baro, Magnetometer)</li>
                  <li>• Rocket telemetry & low-latency RF links</li>
                  <li>• GNC algorithms for micro-launch vehicles</li>
                  <li>• Flight-computer hardware validation</li>
                  <li>• Aerospace firmware stress testing</li>
                </ul>
              </div>

              {/* Contact Form */}
              <h2 className="text-3xl text-white font-bold mt-16 mb-6">
                Contact <span className="text-indigo-400">Engineer</span>
              </h2>

              <p className="text-gray-400 mb-8">
                For avionics consultation, collaborations, or technical discussions—reach out below.
              </p>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 bg-[#0f141d] border border-gray-700 rounded-lg text-gray-300 focus:border-indigo-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 bg-[#0f141d] border border-gray-700 rounded-lg text-gray-300 focus:border-indigo-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="p-3 bg-[#0f141d] border border-gray-700 rounded-lg text-gray-300 focus:border-indigo-500 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 bg-[#0f141d] border border-gray-700 rounded-lg text-gray-300 focus:border-indigo-500 outline-none"
                />

                <textarea
                  placeholder="Your Message…"
                  rows="4"
                  className="col-span-full p-3 bg-[#0f141d] border border-gray-700 rounded-lg text-gray-300 focus:border-indigo-500 outline-none"
                />

                <button className="col-span-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition">
                  Send Message
                </button>
              </form>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
