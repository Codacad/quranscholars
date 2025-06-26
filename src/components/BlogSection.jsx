import Steps from '../assets/images/blog/steps.jpg'
import Tajweed from '../assets/images/blog/tajweed.jpg'
import Sunnah from '../assets/images/blog/sunnah.jpg'
const blogPosts = [
  {
    title: "5 Simple Steps to Start Learning the Quran",
    description:
      "Embark on your Quranic journey with these five easy, practical tips designed for beginners. Start with intention, and let the light of knowledge guide you.",
    image: Steps,
    link: "/blog/quran-learning",
  },
  {
    title: "Importance of Tajweed in Daily Recitation",
    description:
      "Discover why Tajweed isn’t just for scholars. Learn how correct pronunciation transforms your connection with the Quran and enhances your spiritual presence.",
    image: Tajweed,
    link: "/blog/tajweed-importance",
  },
  {
    title: "Daily Sunnahs to Revive in Your Routine",
    description:
      "Incorporate powerful Sunnahs into your day from waking up to sleeping and bring the teachings of Prophet Muhammad ﷺ into every moment.",
    image: Sunnah,
    link: "/blog/daily-sunnahs",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-red-50 py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-red-900 text-center mb-12 uppercase tracking-wide">
          Islamic Resources & Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-bold text-red-900">
                  {post.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {post.description}
                </p>
                <a
                  href={post.link}
                  className="text-red-900 font-semibold hover:underline mt-auto"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
