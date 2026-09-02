import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { FiSearch, FiTag, FiClock, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Steps from "@/assets/images/blog/steps.jpg";
import Tajweed from "@/assets/images/blog/tajweed.jpg";
import Sunnah from "@/assets/images/blog/sunnah.jpg";
import RighteousKids from "@/assets/images/blog/righteous-kids.webp";
import PillarsOfIslam from "@/assets/images/blog/pillars-of-islam.webp";
import VirtueOfKnowledge from "@/assets/images/blog/virtue-of-knowledge.jpg";
import HifzTips from "@/assets/images/blog/hifz-tips.jpg";
import KhushuSalah from "@/assets/images/blog/khushu-salah.jpg";
import AllahNames from "@/assets/images/blog/names-of-Allah.webp";
import OnlineClass from "@/assets/images/blog/online-class.jpeg";

const blogPosts = [
{
  title: "5 Simple Steps to Start Learning the Quran",
  description:
  "Start your Quranic journey with practical steps to build consistency, connection, and comprehension - even as a beginner.",
  image: Steps,
  link: "/blog/quran-learning",
  category: "Quran Learning",
  tags: ["Beginner", "Quran", "Tips"]
},
{
  title: "Importance of Tajweed in Daily Recitation",
  description:
  "Understand how Tajweed rules not only improve recitation but deepen your spiritual experience with the Quran.",
  image: Tajweed,
  link: "/blog/tajweed-importance",
  category: "Quran Recitation",
  tags: ["Tajweed", "Pronunciation", "Worship"]
},
{
  title: "Daily Sunnahs to Revive in Your Routine",
  description:
  "Discover practical daily Sunnahs of the Prophet you can bring into your life for blessings and barakah.",
  image: Sunnah,
  link: "/blog/daily-sunnahs",
  category: "Sunnah & Lifestyle",
  tags: ["Sunnah", "Daily Life", "Habits"]
},
{
  title: "Raising Righteous Children in Today's World",
  description:
  "Explore key Islamic parenting principles to help raise confident, faith-based children in modern society.",
  image: RighteousKids,
  link: "/blog/raising-righteous-children",
  category: "Family & Parenting",
  tags: ["Parenting", "Children", "Family"]
},
{
  title: "Virtues of Seeking Knowledge in Islam",
  description:
  "Uncover the significance of 'Ilm in Islam and how every Muslim is commanded to seek beneficial knowledge.",
  image: VirtueOfKnowledge,
  link: "/blog/virtue-of-knowledge",
  category: "Islamic Values",
  tags: ["Knowledge", "Hadith", "Learning"]
},
{
  title: "How to Memorize the Quran Effectively",
  description:
  "Strategies and advice for developing discipline, consistency, and love for Hifz from teachers and huffaz.",
  image: HifzTips,
  link: "/blog/quran-memorization",
  category: "Hifz & Memorization",
  tags: ["Hifz", "Memorization", "Discipline"]
},
{
  title: "Etiquettes of Attending Online Islamic Classes",
  description:
  "Adab for students learning remotely: how to maintain respect, focus, and spiritual readiness online.",
  image: OnlineClass,
  link: "/blog/online-class-etiquette",
  category: "Student Manners",
  tags: ["Adab", "Online Learning", "Students"]
},
{
  title: "Understanding the Pillars of Islam",
  description:
  "An overview of the five pillars that shape the Muslim's relationship with Allah and the community.",
  image: PillarsOfIslam,
  link: "/blog/pillars-of-islam",
  category: "Aqidah & Basics",
  tags: ["Islam Basics", "Pillars", "Foundations"]
},
{
  title: "How to Develop Khushu in Salah",
  description:
  "Tips and heart-softeners to improve focus, awareness, and humility in your daily prayers.",
  image: KhushuSalah,
  link: "/blog/khushu-salah",
  category: "Worship & Salah",
  tags: ["Salah", "Khushu", "Spirituality"]
},
{
  title: "Exploring Names and Attributes of Allah (Asma'ul Husna)",
  description:
  "Get closer to Allah by learning and reflecting on His beautiful names and their meanings.",
  image: AllahNames,
  link: "/blog/names-of-allah",
  category: "Aqidah & Theology",
  tags: ["Asmaul Husna", "Aqidah", "Faith"]
}];


const Blogs = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const set = new Set();
    blogPosts.forEach((post) => set.add(post.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredPosts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
      const haystack =
      `${post.title} ${post.description} ${post.tags.join(" ")}`.toLowerCase();
      const matchesTerm = term ? haystack.includes(term) : true;
      return matchesCategory && matchesTerm;
    });
  }, [search, activeCategory]);

  return (
    <section>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}>

          
          <div />
          <div>
            <div>
              <FiTag />
              Insights & Reflections
            </div>
            <h1>
              Islamic Blog & Articles
            </h1>
            <p>
              Practical guidance, reflections, and study notes rooted in Quran
              and Sunnah, curated to nurture your heart, habits, and family.
            </p>
            <div>
              <div>
                <FiSearch />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search topics, tags, or keywords..." />

                
              </div>
              <div>
                {categories.map((cat) =>
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}>





                  
                    {cat}
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          {filteredPosts.map((post, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            whileHover={{ y: -6, scale: 1.01 }}>

            
              <div>
                <img
                src={post.image}
                alt={post.title} />

              
                <div />
                <span>
                  <FiClock />
                  {post.category}
                </span>
              </div>

              <div>
                <h2>
                  {post.title}
                </h2>
                <p>
                  {post.description}
                </p>

                <div>
                  {post.tags.map((tag, i) =>
                <span
                  key={i}>

                  
                      #{tag}
                    </span>
                )}
                </div>

                <div>
                  <span>
                    Read article
                  </span>
                  <Link
                  to={post.link}>

                  
                    Explore
                    <span>
                      <FiArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default Blogs;
