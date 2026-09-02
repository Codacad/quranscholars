import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Languages, Sparkles, Users } from "lucide-react";
import {
  languageTracks,
  outcomes,
  learningFlow } from
"@/data/languageSupport.js";
import ServiceBreadcrumb from "@/components/navigation/ServiceBreadcrumb.jsx";
const LanguageSupport = () => {
  return (
    <div>
      <div />
      <div />

      <section>
        <ServiceBreadcrumb />
        <div>
          <div>
            <div>
              <Languages />
              Language Support
            </div>
            <h1>
              Multilingual Islamic learning with depth, clarity, and confidence
            </h1>
            <p>
              Our language pathways help learners connect directly with Islamic
              sources while improving communication. Arabic, Urdu, and English
              support is designed for practical learning and long term growth.
            </p>
            <div>
              <Link
                to="/services/courses">

                
                Explore Tracks
                <ArrowRight />
              </Link>
              <Link
                to="/admission">

                
                Start Admission
              </Link>
            </div>
          </div>

          <div>
            <div>
              <p>
                Delivery Mode
              </p>
              <p>
                Live + Guided
              </p>
              <p>
                Teacher feedback with weekly revision
              </p>
            </div>
            <div>
              <p>
                Learner Types
              </p>
              <p>All Ages</p>
              <p>
                Kids, youth, adults, and family groups
              </p>
            </div>
            <div>
              <p>
                Learning Philosophy
              </p>
              <p>
                Language is treated as a gateway to understanding deen, not just
                memorizing terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        {languageTracks.map(
          ({ title, subtitle, detail, icon: Icon, tone }, i) =>
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.28, delay: i * 0.04, ease: "easeOut" }}>

            
              <div>
                <span>
                  <Icon />
                </span>
                <span>
                  {subtitle}
                </span>
              </div>
              <h2>{title}</h2>
              <p>
                {detail}
              </p>
            </motion.article>

        )}
      </section>

      <section>
        <div>
          <h2>How We Teach</h2>
          <span>
            <Sparkles />
            Practical Learning Flow
          </span>
        </div>

        <div>
          {learningFlow.map((item, index) =>
          <article
            key={item.title}>

            
              <div>
                {index + 1}
              </div>
              <h3>
                {item.title}
              </h3>
              <p>
                {item.detail}
              </p>
            </article>
          )}
        </div>
      </section>

      <section>
        <div>
          <h2>Why It Matters</h2>
          <span>
            <Users />
            Student Outcomes
          </span>
        </div>

        <div>
          {outcomes.map((item) =>
          <article
            key={item.title}>

            
              <h3>
                {item.title}
              </h3>
              <p>
                {item.detail}
              </p>
            </article>
          )}
        </div>
      </section>

      <section>
        <h2>
          Build your language foundation today
        </h2>
        <p>
          Choose your preferred language path and begin a guided journey toward
          stronger Islamic understanding and communication.
        </p>
        <div>
          <Link
            to="/admission">

            
            Start Admission
          </Link>
          <Link
            to="/services/personal-guidance">

            
            Personal Guidance
          </Link>
        </div>
      </section>
    </div>);

};

export default LanguageSupport;
