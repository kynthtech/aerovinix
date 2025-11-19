import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BlogSingle() {
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useLocation();
  const navigate = useNavigate();

  const post = state?.post;

  // Redirect if opened directly
  useEffect(() => {
    if (!post) navigate("/blog");
  }, [post]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  if (!post) return null;

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-700 border-t-indigo-500"></div>
            <img
              src="/images/loader.svg"
              alt="loading"
              className="absolute inset-0 m-auto h-8 w-8"
            />
          </div>
        </div>
      )}

      {/* Background */}
      <div
        className="min-h-screen w-full bg-black bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* PAGE CONTENT */}
        <div className="relative z-10">
          
          {/* Header */}
          <section className="py-20 text-center text-white">
            <h1 className="mb-4 text-5xl font-extrabold md:text-6xl leading-tight">
              {post.title}
            </h1>

            <div className="flex justify-center gap-6 text-sm text-gray-300 mt-2">
              <span className="flex items-center gap-2">
                <i className="fa-regular fa-user"></i> Aerovionix
              </span>
              <span className="flex items-center gap-2">
                <i className="fa-regular fa-clock"></i> {post.date}
              </span>
            </div>
          </section>

          {/* Article */}
          <article className="py-12">
            <div className="container mx-auto px-4 max-w-4xl text-white">
              
              {/* Featured Image */}
              <div className="mb-12 overflow-hidden rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.7)]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full object-cover rounded-xl"
                />
              </div>

              {/* Body */}
              <div className="prose prose-lg prose-invert max-w-none whitespace-pre-line leading-relaxed text-gray-200">
                {post.body}
              </div>

              {/* Tags & Share */}
              <div className="mt-16 flex flex-col items-center gap-8 border-t border-white/20 pt-10 md:flex-row md:justify-between">
                
                {/* Tags */}
                <div className="flex items-center gap-3 text-sm text-white">
                  <span className="font-medium text-gray-300">Tags:</span>
                  <div className="flex flex-wrap gap-2">
                    {["Avionics", "Aerospace", "Guidance"].map((tag) => (
                      <Link
                        key={tag}
                        to={`/blog?tag=${tag.toLowerCase()}`}
                        className="rounded-full bg-white/10 px-4 py-1.5 text-gray-200 hover:bg-indigo-600 hover:text-white transition"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div className="flex gap-3">
                  {[
                    { icon: "fa-brands fa-facebook-f" },
                    { icon: "fa-brands fa-linkedin-in" },
                    { icon: "fa-brands fa-instagram" },
                    { icon: "fa-brands fa-x-twitter" },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-indigo-600 transition shadow-inner"
                    >
                      <i className={s.icon}></i>
                    </a>
                  ))}
                </div>

              </div>
            </div>
          </article>

        </div>
      </div>
    </>
  );
}
