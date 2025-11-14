import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="main-footer bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Let's start work <span className="text-indigo-400">together!</span>
            </h2>
            <p className="mb-6">Partner with us to create intelligent, impactful, and future-ready AI solutions together.</p>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Link to="/contact" className="rounded bg-indigo-600 px-6 py-3 font-semibold transition hover:bg-indigo-700">
              Let's Work Together
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <img src="/images/footer-logo.svg" alt="Aeravionix" className="mb-4 h-12" />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Get In Touch</h3>
            <p className="mb-1"><a href="tel:+00152885253" className="hover:text-indigo-400">+(00) - 152 885 253</a></p>
            <p><a href="mailto:info@aeravionix.com" className="hover:text-indigo-400">info@aeravionix.com</a></p>
            <h3 className="mt-6 mb-2 text-lg font-semibold">Our Location</h3>
            <p>123 Lorem Street Suite 5B, Ips Park London, UK SW1A 1AA</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Subscribe Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <button className="rounded-r bg-indigo-600 px-4 py-2 transition hover:bg-indigo-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
          <p>Copyright © 2025 Aeravionix. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}