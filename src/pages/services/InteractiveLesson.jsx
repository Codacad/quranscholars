import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { featureCards, steps } from "@/data/interactiveLessons.js";
import ServiceBreadcrumb from "@/components/navigation/ServiceBreadcrumb.jsx";
const InteractiveLesson = () => {
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

      
      <div />
      <div />
      <div>
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}>

          
          <ServiceBreadcrumb />
          <div>
            <div>
              <span>
                Live & collaborative
              </span>
              <h1>
                Interactive Lessons
              </h1>
              <p>
                Active learning built on Quran & Sunnah: discussion pods,
                real-time Q&A, and guided practice that turns understanding into
                lived action.
              </p>
              <div>
                <span>
                  Avg engagement 87%
                </span>
                <span>
                  Cohorts weekly
                </span>
              </div>
            </div>
            <div>
              <div>
                <p>
                  Snapshot
                </p>
                <div>
                  <div>
                    <p>120+</p>
                    <p>live sessions</p>
                  </div>
                  <div>
                    <p>4.8</p>
                    <p>learner rating</p>
                  </div>
                  <div>
                    <p>15</p>
                    <p>breakout pods</p>
                  </div>
                </div>
                <div>
                  <div />
                </div>
                <p>
                  76% finish within planned pace. Join the next cohort.
                </p>
              </div>
            </div>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}>

          
          <div>
            <h2>
              Why interactive
            </h2>
            <p>
              Passive lectures fade fast. We anchor concepts through dialogue,
              reflection, and doing—so you retain more, apply faster, and feel
              connected to the material.
            </p>
            <p>
              Live prompts, polls, and micro-challenges turn every session into
              an experience, not just a class.
            </p>
          </div>
          <div>
            <h3>Who it suits</h3>
            <ul>
              <li>• Teens & adults seeking structured, social learning</li>
              <li>• Reverts building foundations with guidance</li>
              <li>• Intermediate learners wanting tafsir/fiqh depth</li>
              <li>• Busy professionals needing focused, high-yield sessions</li>
              <li>
                • Non-native Arabic/Urdu speakers preferring English-led live
              </li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}>

          
          <h2>What you get</h2>
          <div>
            {featureCards.map((item, idx) =>
            <div
              key={idx}>

              
                <div>
                  <span>
                    <item.icon />
                  </span>
                  <p>{item.title}</p>
                </div>
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
              Benefits you feel
            </h3>
            <ul>
              <li>• Sharper retention with active recall</li>
              <li>• Confidence speaking and teaching others</li>
              <li>• Safe space to ask nuanced questions</li>
              <li>• Stronger bonds with peers pursuing the same goals</li>
              <li>• Barakah of learning together as a jama'ah</li>
            </ul>
          </div>
          <div>
            <h3>
              How to join (4 steps)
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

          
          <blockquote>
            “Tell me and I forget, teach me and I may remember, involve me and I
            learn.” Learning the Deen thrives when we’re involved together.
          </blockquote>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}>

          
          <h2>
            Ready to learn differently?
          </h2>
          <p>
            Join a live, interactive cohort and experience discussion-led,
            practice-driven sessions that stick.
          </p>
          <button>
            Register for an Interactive Class
            <span>
              <FiArrowRight />
            </span>
          </button>
        </motion.section>
      </div>
    </div>);

};

export default InteractiveLesson;
