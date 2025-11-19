import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function NotFound() {
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
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-white md:text-6xl">
            Page not <span className="text-indigo-500">found</span>
          </h1>

          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-300 hover:text-indigo-400">home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-indigo-400">404 Error page</span>
          </nav>
        </div>
      </section>

      {/* 404 Content */}
      <section
        className="relative py-20 bg-black bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative container mx-auto px-4 text-center">
          <img
            src="/images/404-error-img.png"
            alt="404 Not Found"
            className="mx-auto mb-8 max-w-md drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]"
          />

          <h2 className="mb-4 text-5xl font-bold text-white">
            Oops! page not <span className="text-indigo-500">found</span>
          </h2>

          <p className="mb-8 text-lg text-gray-300">
            The page you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="inline-block rounded bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
