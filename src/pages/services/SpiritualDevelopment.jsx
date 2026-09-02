import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { pillars, steps } from "@/data/spiritaulDevelopment.js";
import ServiceBreadcrumb from "@/components/navigation/ServiceBreadcrumb.jsx";
const SpiritualDevelopment = () => {
  const serviceContentRef = useRef();
  const location = useLocation();
  useEffect(() => {
    if (serviceContentRef.current) {
      gsap.fromTo(
        serviceContentRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [location.pathname]);

  return (
    <div ref={serviceContentRef}>
      <div>
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}>

          
          <ServiceBreadcrumb />
          <div>
            <div>
              <span>
                Tazkiyah Pathway
              </span>
              <h1>
                Spiritual Development
              </h1>
              <p>
                Build a heart-centered life with guided dhikr, reflective
                journaling, and Sunnah-rooted habits supported by mentors and a
                like-hearted community.
              </p>
              <div>
                <span>
                  6 tracks
                </span>
                <span>
                  Live circles weekly
                </span>
              </div>
            </div>
            <div>
              <p>
                Pulse stats
              </p>
              <div>
                <div>
                  <p>92%</p>
                  <p>report calmer Salah</p>
                </div>
                <div>
                  <p>5k</p>
                  <p>weekly adhkar</p>
                </div>
                <div>
                  <p>4.9</p>
                  <p>mentor rating</p>
                </div>
              </div>
              <div>
                <div />
              </div>
              <p>
                Most learners feel a focus lift within the first 10 days of
                guided dhikr.
              </p>
            </div>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}>

          
          {pillars.map((item, idx) =>
          <div
            key={idx}>

            
              <div>
                <span>
                  <item.icon />
                </span>
                <p>{item.title}</p>
              </div>
              <p>
                {item.desc}
              </p>
            </div>
          )}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}>

          
          <div>
            <h3>Why it matters</h3>
            <p>
              Spiritual growth is heart-work: resilience, clarity, and mercy.
              Presence in Salah, gentleness in speech, and consistency in
              remembrance flow from a nurtured heart.
            </p>
            <ul>
              <li>� Inner sakinah and mental clarity</li>
              <li>� Steadier khushu in prayer</li>
              <li>� Ethical reflexes in daily interactions</li>
              <li>� Habit of gratitude and tawakkul</li>
            </ul>
          </div>
          <div>
            <h3>
              How it works (4 steps)
            </h3>
            <ol>
              {steps.map((step, i) =>
              <li
                key={i}>

                
                  <span>
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              )}
            </ol>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}>

          
          <div>
            <div>
              <h3>
                Weekly focus packs
              </h3>
              <p>
                Download dhikr cards, dua collections, reflection prompts, and
                micro-habit trackers. Reset every Jumu'ah with a new focus pack.
              </p>
            </div>
            <div>
              <FiDownload /> PDF + mobile sheets
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}>

          
          <blockquote>
            �Verily, in the remembrance of Allah do hearts find rest.� � Surah
            Ar-Ra'd (13:28)
          </blockquote>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}>

          
          <h2>
            Start your tazkiyah journey
          </h2>
          <p>
            Join live circles, download focus packs, and receive gentle
            reminders to keep your heart engaged.
          </p>
          <button>
            Enroll Now
            <span>
              <FiArrowRight />
            </span>
          </button>
        </motion.section>
      </div>
    </div>);

};

export default SpiritualDevelopment;
