import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { FiSearch, FiTag, FiClock, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Steps from "../../assets/images/blog/steps.jpg";
import Tajweed from "../../assets/images/blog/tajweed.jpg";
import Sunnah from "../../assets/images/blog/sunnah.jpg";
import RighteousKids from "../../assets/images/blog/righteous-kids.webp";
import PillarsOfIslam from "../../assets/images/blog/pillars-of-islam.webp";
import VirtueOfKnowledge from "../../assets/images/blog/virtue-of-knowledge.jpg";
import HifzTips from "../../assets/images/blog/hifz-tips.jpg";
import KhushuSalah from "../../assets/images/blog/khushu-salah.jpg";
import AllahNames from "../../assets/images/blog/names-of-Allah.webp";
import OnlineClass from "../../assets/images/blog/online-class.jpeg";

const blogPosts = [
  {
    title: "5 Simple Steps to Start Learning the Quran",
    description:
      "Start your Quranic journey with practical steps to build consistency, connection, and comprehension - even as a beginner.",
    image: Steps,
    link: "/blog/quran-learning",
    category: "Quran Learning",
    tags: ["Beginner", "Quran", "Tips"],
  },
  {
    title: "Importance of Tajweed in Daily Recitation",
    description:
      "Understand how Tajweed rules not only improve recitation but deepen your spiritual experience with the Quran.",
    image: Tajweed,
    link: "/blog/tajweed-importance",
    category: "Quran Recitation",
    tags: ["Tajweed", "Pronunciation", "Worship"],
  },
  {
    title: "Daily Sunnahs to Revive in Your Routine",
    description:
      "Discover practical daily Sunnahs of the Prophet  you can bring into your life for blessings and barakah.",
    image: Sunnah,
    link: "/blog/daily-sunnahs",
    category: "Sunnah & Lifestyle",
    tags: ["Sunnah", "Daily Life", "Habits"],
  },
  {
    title: "Raising Righteous Children in Today's World",
    description:
      "Explore key Islamic parenting principles to help raise confident, faith-based children in modern society.",
    image: RighteousKids,
    link: "/blog/raising-righteous-children",
    category: "Family & Parenting",
    tags: ["Parenting", "Children", "Family"],
  },
  {
    title: "Virtues of Seeking Knowledge in Islam",
    description:
      "Uncover the significance of 'Ilm in Islam and how every Muslim is commanded to seek beneficial knowledge.",
    image: VirtueOfKnowledge,
    link: "/blog/virtue-of-knowledge",
    category: "Islamic Values",
    tags: ["Knowledge", "Hadith", "Learning"],
  },
  {
    title: "How to Memorize the Quran Effectively",
    description:
      "Strategies and advice for developing discipline, consistency, and love for Hifz from teachers and huffaz.",
    image: HifzTips,
    link: "/blog/quran-memorization",
    category: "Hifz & Memorization",
    tags: ["Hifz", "Memorization", "Discipline"],
  },
  {
    title: "Etiquettes of Attending Online Islamic Classes",
    description:
      "Adab for students learning remotely: how to maintain respect, focus, and spiritual readiness online.",
    image: OnlineClass,
    link: "/blog/online-class-etiquette",
    category: "Student Manners",
    tags: ["Adab", "Online Learning", "Students"],
  },
  {
    title: "Understanding the Pillars of Islam",
    description:
      "An overview of the five pillars that shape the Muslim's relationship with Allah and the community.",
    image: PillarsOfIslam,
    link: "/blog/pillars-of-islam",
    category: "Aqidah & Basics",
    tags: ["Islam Basics", "Pillars", "Foundations"],
  },
  {
    title: "How to Develop Khushu in Salah",
    description:
      "Tips and heart-softeners to improve focus, awareness, and humility in your daily prayers.",
    image: KhushuSalah,
    link: "/blog/khushu-salah",
    category: "Worship & Salah",
    tags: ["Salah", "Khushu", "Spirituality"],
  },
  {
    title: "Exploring Names and Attributes of Allah (Asma'ul Husna)",
    description:
      "Get closer to Allah by learning and reflecting on His beautiful names and their meanings.",
    image: AllahNames,
    link: "/blog/names-of-allah",
    category: "Aqidah & Theology",
    tags: ["Asmaul Husna", "Aqidah", "Faith"],
  },
];

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const set = new Set();
    blogPosts.forEach((p) => set.add(p.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredPosts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const haystack = `${post.title} ${post.description} ${post.tags.join(" ")}`.toLowerCase();
      const matchesTerm = term ? haystack.includes(term) : true;
      return matchesCategory && matchesTerm;
    });
  }, [search, activeCategory]);

  return (
    <section className="bg-gradient-to-br from-amber-50 via-white to-rose-50 py-16 px-4 md:px-10 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-red-100 bg-white shadow-lg p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(248,113,113,0.15),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.18),transparent_35%)] pointer-events-none" />
          <div className="relative space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-800 border border-red-100">
              <FiTag />
              Insights & Reflections
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Islamic Blog & Articles
            </h1>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Practical guidance, reflections, and study notes rooted in Quran
              and Sunnah—curated to nurture your heart, habits, and family.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-3">
              <div className="relative w-full md:w-96">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search topics, tags, or keywords..."
                  className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-gray-200 shadow-sm focus:border-red-300 focus:ring-2 focus:ring-red-100 outline-none transition"
                />
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-2 rounded-full text-sm font-semibold border transition ${
                      activeCategory === cat
                        ? "bg-red-600 text-white border-red-600 shadow-sm"
                        : "bg-white text-gray-700 border-gray-200 hover:border-red-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl border border-red-100 bg-white shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="relative h-52">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-90 group-hover:opacity-100 transition" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-red-700">
                  <FiClock className="text-red-600" />
                  {post.category}
                </span>
              </div>

              <div className="p-5 space-y-3 flex flex-col h-full">
                <h2 className="text-lg font-bold text-slate-900 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700 border border-red-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Read article
                  </span>
                  <Link
                    to={post.link}
                    className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition"
                  >
                    Explore
                    <span className="h-8 w-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center">
                      <FiArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
