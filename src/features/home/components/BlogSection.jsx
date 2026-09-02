import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts.js";

const BlogSection = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <div>
              <span />
              Islamic Resources & Blog
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>

              
              Latest reflections, how-tos, and Sunnah spotlights.
            </motion.h2>
            <p>
              Dive into concise guides, tajwid tips, family-friendly sunnahs,
              and seerah stories curated by our teachers.
            </p>
          </div>
          <Link
            to="/blogs">

            
            See all blogs
            <span>{"->"}</span>
          </Link>
        </div>

        <div>
          {blogPosts.map((post, index) =>
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.05
            }}>

            
              <div />
              <div>
                <img
                src={post.image}
                alt={post.title} />

              
                <div>
                  Featured
                </div>
              </div>
              <div>
                <h3>
                  {post.title}
                </h3>
                <p>
                  {post.description}
                </p>
                <div>
                  <Link
                  to={post.link}>

                  
                    Read blog
                    <span>
                      {"->"}
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

};

export default BlogSection;
