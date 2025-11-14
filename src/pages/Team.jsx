import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useState, useEffect } from 'react';
export default function Team() {

  const teamMembers = [
    { name: 'Sophia Bennett', role: 'Hacking specialist', img: 'team-1.jpg' },
    { name: 'Darrell steward', role: 'Attack specialist', img: 'team-2.jpg' },
    { name: 'Ava mitchell', role: 'Cyber Expert', img: 'team-3.jpg' },
    { name: 'Ethan carter', role: 'Penetration Tester', img: 'team-4.jpg' },
    { name: 'Olivia Carter', role: 'Security Analyst', img: 'team-5.jpg' },
    { name: 'Ethan Cooper', role: 'Security Analyst', img: 'team-6.jpg' },
    { name: 'Emma Hayes', role: 'Cyber Expert', img: 'team-7.jpg' },
    { name: 'Liam Parker', role: 'Penetration Tester', img: 'team-8.jpg' },
  ];
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
            Our <span className="text-indigo-600">team</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-indigo-600">team</span>
          </nav>
        </div>
      </section>

      {/* Team Grid */}
      <section className="page-team py-20 bg-white">
        <div className="container mx-auto px-4">
          <PhotoProvider>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Image with Lightbox */}
                  <PhotoView src={`/images/${member.img}`}>
                    <img
                      src={`/images/${member.img}`}
                      alt={member.name}
                      className="h-72 w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </PhotoView>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-bold">
                        <Link to="/team-single" className="hover:underline">
                          {member.name}
                        </Link>
                      </h3>
                      <p className="text-sm opacity-90">{member.role}</p>
                    </div>

                    {/* Social Icons */}
                    <div className="absolute bottom-6 right-6 flex space-x-2">
                      {['facebook-f', 'instagram', 'pinterest-p'].map((icon) => (
                        <a
                          key={icon}
                          href="#"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white hover:text-indigo-600"
                        >
                          <i className={`fa-brands fa-${icon} text-sm`}></i>
                        </a>
                      ))}
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