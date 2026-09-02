import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { resourceSections } from "@/data/educationalResources.js";
import ServiceBreadcrumb from "@/components/navigation/ServiceBreadcrumb.jsx";
const EducationalResources = () => {
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
    <div
      ref={serviceContentRef}>

      
      <div>
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}>

          
          <ServiceBreadcrumb />
          <div>
            <div>
              <span>
                Library Hub
              </span>
              <h1>
                Educational Resources
              </h1>
              <p>
                A curated vault of PDFs, workbooks, media, and ready-to-use
                templates built to keep your learning authentic, organized, and
                actionable.
              </p>
              <div>
                <span>
                  350+ assets
                </span>
                <span>
                  New drops monthly
                </span>
              </div>
            </div>
            <div>
              <p>
                Download stats
              </p>
              <div>
                <div>
                  <p>42k</p>
                  <p>downloads</p>
                </div>
                <div>
                  <p>18</p>
                  <p>languages</p>
                </div>
                <div>
                  <p>4.9</p>
                  <p>rating</p>
                </div>
              </div>
              <div>
                <div />
              </div>
              <p>
                72% of learners save 3+ hours weekly using ready-made syllabi.
              </p>
            </div>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}>

          
          <h2>
            Library highlights
          </h2>
          <div>
            {resourceSections.map((item, idx) =>
            <div
              key={idx}>

              
                <div>
                  <span>
                    <item.icon />
                  </span>
                  <span>
                    {item.badge}
                  </span>
                </div>
                <p>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            )}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}>

          
          <div>
            <h3>
              Multilingual & multimedia
            </h3>
            <p>
              English, Urdu, and Arabic resources with audio overlays, diagrams,
              and concise lesson summaries to make complex topics stick.
            </p>
            <p>
              Prefer to listen? Stream recitations and bite-sized explainers
              while following synced notes.
            </p>
          </div>
          <div>
            <h3>Who it serves</h3>
            <ul>
              <li>� Students: supplement courses with ready references.</li>
              <li>
                � Teachers: pull authentic citations and classroom visuals.
              </li>
              <li>� Parents: share age-appropriate summaries at home.</li>
              <li>� Seekers: structured paths without information overload.</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}>

          
          <blockquote>
            �Whoever follows a path in pursuit of knowledge, Allah will make a
            path to Paradise easy for them.�
          </blockquote>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}>

          
          <div>
            <div>
              <h2>
                Start exploring now
              </h2>
              <p>
                Download syllabi, guided notes, and media packs. Save favorites,
                track progress, and get notified when new drops land.
              </p>
            </div>
            <div>
              <button>
                Browse Resources
                <span>
                  <FiArrowRight />
                </span>
              </button>
              <button>
                Download Sample PDF
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>);

};

export default EducationalResources;
