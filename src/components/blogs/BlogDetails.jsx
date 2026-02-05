// import { Link, useParams } from "react-router-dom";
// // import Steps from "../../assets/images/blog/steps.jpg"; // use relevant featured image
// // Import other images if needed

// const blogData = {
//   "quran-learning": {
//     title: "5 Simple Steps to Start Learning the Quran",
//     author: "Admin",
//     date: "June 1, 2025",
//     // image: Steps,
//     content: `<p>Begin your Quranic journey with intention (niyyah)...</p>
//     <h2>1. Renew Your Intention</h2>
//     <p>...</p>
//     <blockquote class="italic text-red-900 border-l-4 border-red-700 pl-4 my-6">
//       "The seeking of knowledge is obligatory..." - Prophet 
//     </blockquote>
//     <h2>2. Start with Small Portions</h2><p>...</p>
//     <!-- add more paragraphs -->
//     `,
//     tags: ["Beginner", "Quran", "Tips"],
//     category: "Quran Learning",
//   },
//   // Add more entries for other slugs...
// };

// const BlogDetail = () => {
//   const { slug } = useParams();
//   const post = blogData[slug];
//   if (!post) return <p className="p-8">Post not found</p>;

//   return (
//     <section className="bg-gradient-to-br from-red-50 via-white to-red-100 py-16 px-4 md:px-20">
//       <div className="max-w-4xl mx-auto">
//         {/* Back Link */}
//         <Link to="/blogs" className="text-red-900 font-medium hover:underline">
//           <- Back to Articles
//         </Link>

//         {/* Title & Meta */}
//         <h1 className="text-4xl font-extrabold text-red-900 mt-4">
//           {post.title}
//         </h1>
//         <p className="text-gray-600 italic mb-6">
//           By {post.author} * {post.date}
//         </p>

//         {/* Featured Image */}
//         <img
//           src={post.image}
//           alt={post.title}
//           className="w-full h-auto rounded-lg shadow-lg mb-8"
//         />

//         <div className="md:flex md:gap-8">
//           {/* Main Content */}
//           <article className="prose prose-red max-w-none flex-1">
//             <div dangerouslySetInnerHTML={{ __html: post.content }} />
//             {/* Tags */}
//             <div className="mt-8">
//               {post.tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           </article>

//           {/* Sidebar */}
//           <aside className="mt-12 md:mt-0 w-full md:w-1/3 flex-shrink-0">
//             <div className="bg-white border border-red-100 shadow-sm rounded-xl p-6 mb-8">
//               <h3 className="text-xl font-semibold text-red-900 mb-4">
//                 About the Author
//               </h3>
//               <p className="text-gray-700">Admin * Lead Instructor</p>
//             </div>

//             <div className="bg-white border border-red-100 shadow-sm rounded-xl p-6">
//               <h3 className="text-xl font-semibold text-red-900 mb-4">
//                 Related Articles
//               </h3>
//               {/* Example related links */}
//               <ul className="space-y-3">
//                 <li>
//                   <Link
//                     to="/blog/tajweed-importance"
//                     className="text-red-900 hover:underline"
//                   >
//                     Importance of Tajweed in Daily Recitation
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/blog/daily-sunnahs"
//                     className="text-red-900 hover:underline"
//                   >
//                     Daily Sunnahs to Revive in Your Routine
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/blog/virtue-of-knowledge"
//                     className="text-red-900 hover:underline"
//                   >
//                     Virtues of Seeking Knowledge in Islam
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </aside>
//         </div>

//         {/* Comments Section */}
//         <div className="mt-16 bg-white border border-red-100 shadow-sm rounded-xl p-6">
//           <h3 className="text-2xl font-semibold text-red-900 mb-4">
//             Comments
//           </h3>
//           <p className="text-gray-500">Comments functionality coming soon...</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogDetail;
