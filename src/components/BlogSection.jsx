import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts.js";
const BlogSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50 py-16 md:py-20 px-4 md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(248,113,113,0.12),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.12),transparent_30%)]" />
      <div className="relative max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              Islamic Resources & Blog
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Latest reflections, how-tos, and Sunnah spotlights.
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl">
              Dive into concise guides, tajwid tips, family-friendly sunnahs,
              and seerah stories curated by our teachers.
            </p>
          </div>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 rounded-full bg-red-900 text-white px-2 py-3 font-semibold shadow-md hover:bg-red-700 transition w-48 justify-center"
          >
            See all blogs
            <span className="text-base">↗</span>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group relative rounded-3xl border border-white/50 bg-white shadow-lg overflow-hidden transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-br from-red-100/60 via-white to-amber-100/50" />
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-red-800 shadow-sm">
                  Featured
                </div>
              </div>
              <div className="relative p-6 space-y-3 flex flex-col h-full">
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-700 text-sm leading-6">
                  {post.description}
                </p>
                <div className="relative flex items-center gap-3 flex-wrap">
                  <Link
                    to={post.link}
                    className="inline-flex items-center gap-2 rounded-full bg-red-900 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-red-700 transition"
                  >
                    Read blog
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      ↗
                    </span>
                  </Link>
                  {/* <Link
                    to="/blogs"
                    className="inline-flex items-center gap-2 text-red-900 font-semibold hover:text-red-700 text-sm"
                  >
                    View all
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      ↗
                    </span>
                  </Link> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
