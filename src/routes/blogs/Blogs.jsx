import { Link } from "react-router-dom";
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
    image: "/blog/khushu-salah.png",
    link: KhushuSalah,
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
  return (
    <section className="bg-gradient-to-br from-red-100 via-white to-red-50 py-16 px-4 md:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-red-900 text-center mb-4 uppercase tracking-wide">
          Islamic Blog & Articles
        </h1>
        <p className="text-center text-red-800 text-lg max-w-2xl mx-auto mb-12">
          Read our reflections, tips, and insights rooted in Quran, Sunnah, and
          classical Islamic wisdom written to nurture your mind, soul, and
          family.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gradient-to-tl from-red-200 via-white to-red-100 border border-red-100 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col gap-4 flex-grow text-red-900">
                <span className="bg-red-300 text-white text-xs font-semibold uppercase px-3 py-1 rounded-full w-fit">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-red-800 text-base leading-relaxed">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white text-red-800 border border-red-300 text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={post.title}
                  className="text-red-900 font-semibold hover:underline mt-2"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
