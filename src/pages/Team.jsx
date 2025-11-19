import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useState, useEffect } from "react";

export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Rhea Varma",
      role: "Lead Avionics Engineer",
      img: "team-1.jpg",
    },
    {
      name: "Arjun Desai",
      role: "Embedded Systems Architect",
      img: "team-2.jpg",
    },
    {
      name: "Sophia Liang",
      role: "GNC (Guidance & Control) Specialist",
      img: "team-3.jpg",
    },
    {
      name: "Ethan Rao",
      role: "Flight Computer Hardware Designer",
      img: "team-4.jpg",
    },
    {
      name: "Mira Khandelwal",
      role: "RF & Telemetry Systems Engineer",
      img: "team-5.jpg",
    },
    {
      name: "Liam Jackson",
      role: "Aerospace Software Engineer",
      img: "team-6.jpg",
    },
    {
      name: "Aarav Patel",
      role: "Simulation & Dynamics Analyst",
      img: "team-7.jpg",
    },
    {
      name: "Elena Costa",
      role: "Propulsion Sensor Integration Engineer",
      img: "team-8.jpg",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-800 border-t-indigo-500"></div>
            <img
              src="/images/loader.svg"
              alt="Loading"
              className="absolute inset-0 m-auto h-8 w-8"
            />
          </div>
        </div>
      )}

      {/* Page Header */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-white md:text-6xl">
            Meet the minds behind{" "}
            <span className="text-indigo-500">Aerovionix</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Our engineering team designs, builds, and validates mission-critical
            avionics and intelligent flight systems for modern aerospace
            vehicles.
          </p>

          <nav className="flex justify-center space-x-2 text-sm mt-4">
            <Link to="/" className="text-gray-300 hover:text-indigo-400">
              home
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-indigo-400">team</span>
          </nav>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-[#0b0f17]">
        <div className="container mx-auto px-4">
          <PhotoProvider>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-[#111726] shadow-lg hover:shadow-2xl transition-all"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Image */}
                  <PhotoView src={`/images/${member.img}`}>
                    <img
                      src={`/images/${member.img}`}
                      alt={member.name}
                      className="h-72 w-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
                    />
                  </PhotoView>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-bold">
                        <Link
                          to="/team-single"
                          className="hover:text-indigo-400"
                        >
                          {member.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-indigo-300">{member.role}</p>
                    </div>

                    {/* Social Icons */}
                    <div className="absolute bottom-6 right-6 flex space-x-2">
                      {["facebook-f", "instagram", "linkedin-in"].map(
                        (icon) => (
                          <a
                            key={icon}
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-indigo-500 hover:text-white"
                          >
                            <i className={`fab fa-${icon} text-sm`}></i>
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </section>
    </>
  );
}
