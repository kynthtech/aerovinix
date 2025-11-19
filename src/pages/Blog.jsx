import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const posts = [
    {
      date: "Jan 12, 2025",
      title: "Designing Reliable Flight Computers for Small Rockets",
      excerpt:
        "How modern avionics survive vibration, thermal stress, high-G loads, and rapid control loops during launch.",
      image: "/images/blog/flight-computer.jpg",
      body: `
        Building avionics for small rockets is far more than choosing a microcontroller.
        Launch vibration, EMI, thermal cycles, and extreme G-forces destroy weak systems.

        At Aerovionix, we engineer flight computers with hardened sensor pipelines,
        redundant IMUs, stable power rails, and deterministic firmware architectures.

        Every module undergoes vibration testing, thermal stress screening, and
        high-rate simulation long before flight.
      `,
    },
    {
      date: "Jan 05, 2025",
      title: "Sensor Fusion for UAV Stability: IMU + GPS + Barometer Explained",
      excerpt:
        "How Kalman filtering blends noisy sensor inputs into a clean, stable flight-state estimate.",
      image: "/images/blog/sensor-fusion.jpg",
      body: `
        UAV stability depends on good state estimation. Accelerometers drift,
        gyros accumulate bias, GPS jumps, and barometers fluctuate.

        Advanced Kalman filtering pipelines merge this data into clean, reliable
        attitude estimates—even under aggressive maneuvers or GPS dropout.
      `,
    },
    {
      date: "Dec 28, 2024",
      title: "Telemetry Systems for Rockets: Designing Links That Never Drop",
      excerpt:
        "Why antenna placement, RF noise immunity, and data framing matter during launch.",
      image: "/images/blog/telemetry.jpg",
      body: `
        Rocket telemetry is unforgiving. Rapid rotation, ascent speed,
        and structural interference create hostile RF conditions.

        Our telemetry systems use noise-resilient modulation, smart packet
        framing, and optimized antenna placement to maintain a stable link
        from launch to apogee.
      `,
    },
    {
      date: "Dec 20, 2024",
      title: "Testing Avionics for Extreme Launch Conditions",
      excerpt:
        "Environmental stress testing, vibration rigs, EMI screening—why aerospace hardware needs all of it.",
      image: "/images/blog/testing.jpg",
      body: `
        Aerospace hardware must survive far more than bench tests.
        We run vibration profiling, thermal shock cycles, and EMI screening
        to expose weaknesses in electronics and firmware behavior.
      `,
    },
    {
      date: "Dec 15, 2024",
      title: "Guidance Algorithms for Small Launch Vehicles",
      excerpt:
        "How PID tuning, control theory, and nonlinear dynamics shape rocket trajectories.",
      image: "/images/blog/guidance.jpg",
      body: `
        Guidance software keeps rockets stable under rapidly changing aerodynamic
        conditions. Our control stack uses tuned PID loops and adaptive filtering
        to maintain trajectory accuracy through ascent.
      `,
    },
    {
      date: "Dec 10, 2024",
      title: "Inside Aerovionix: Our Avionics Design Philosophy",
      excerpt:
        "The engineering mindset behind building mission-ready aerospace electronics.",
      image: "/images/blog/philosophy.jpg",
      body: `
        Aerovionix builds avionics meant for real-world launch environments.
        We combine embedded engineering, control theory, hardware simulation,
        and aggressive field testing to produce systems that simply don't fail.
      `,
    },
  ];

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-700 border-t-indigo-500"></div>
            <img
              src="/images/loader.svg"
              alt="Aeravionix"
              className="absolute inset-0 m-auto h-8 w-8"
            />
          </div>
        </div>
      )}

      {/* Page Header */}
      <section
        className="page-header py-20 bg-black bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-white md:text-6xl">
            Aerovionix <span className="text-indigo-500">Blog</span>
          </h1>

          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-400 hover:text-indigo-400">
              home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-indigo-500">blog</span>
          </nav>
        </div>
      </section>

      {/* Blog Grid */}
      <section
        className="page-blog py-20 bg-black bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <article
                key={i}
                className="group overflow-hidden rounded-xl bg-gray-900 shadow-lg transition-all hover:shadow-xl hover:scale-[1.015]"
              >
                {/* Image */}
                <Link to="/blog-single" state={{ post }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* Meta */}
                <div className="border-b border-gray-700 p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <i className="fa-solid fa-calendar-days text-indigo-500"></i>
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="mb-3 text-xl font-bold text-white group-hover:text-indigo-400 transition">
                    <Link to="/blog-single" state={{ post }}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mb-4 text-gray-400 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    to="/blog-single"
                    state={{ post }}
                    className="inline-flex items-center text-indigo-400 font-medium hover:text-indigo-300 transition"
                  >
                    read more
                    <i className="ml-1 fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
