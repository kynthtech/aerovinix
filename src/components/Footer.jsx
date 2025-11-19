import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="relative py-16 text-white bg-cover bg-center bg-black"
  
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative container mx-auto px-4">
        {/* Top CTA Section */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Let's build <span className="text-indigo-400">flight systems</span> that perform.
            </h2>
            <p className="mb-6">
              Partner with Aerovionix to develop avionics, guidance systems, and mission-ready embedded hardware.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Link
              to="/contact"
              className="rounded bg-indigo-600 px-6 py-3 font-semibold transition hover:bg-indigo-700"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo */}
          <div>
            <img src="/images/footer-logo.svg" alt="Aerovionix" className="mb-4 h-12" />
            <p className="text-sm text-gray-300">
              Engineering reliable avionics and flight-critical software for next-gen aerospace.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-2 text-lg font-semibold">Get In Touch</h3>
            <p className="mb-1">
              <a href="tel:+00152885253" className="hover:text-indigo-400">
                +(00) - 152 885 253
              </a>
            </p>
            <p>
              <a href="mailto:info@aerovionix.com" className="hover:text-indigo-400">
                info@aerovionix.com
              </a>
            </p>

            <h3 className="mt-6 mb-2 text-lg font-semibold">HQ Location</h3>
            <p className="text-gray-300">
              123 Falcon Drive,
              <br />
              Aerospace Tech Park,
              <br />
              London, UK SW1A 1AA
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-2 text-lg font-semibold">Subscribe to Updates</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l border border-gray-600 bg-black/40 px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <button className="rounded-r bg-indigo-600 px-4 py-2 transition hover:bg-indigo-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-300">
          <p>© 2025 Aerovionix. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
