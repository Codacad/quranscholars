import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircleHeart,
  Sparkles,
  UserRoundCheck } from
"lucide-react";
import {
  guidancePaths,
  processSteps,
  moralsFocus,
  islamicMotivation } from
"@/data/personalGuidance.js";
import ServiceBreadcrumb from "@/components/navigation/ServiceBreadcrumb.jsx";

const PersonalGuidance = () => {
  return (
    <div>
      <div />
      <div />

      <section>
        <ServiceBreadcrumb />
        <div>
          <div>
            <div>
              <MessageCircleHeart />
              Personal Guidance
            </div>
            <h1>
              One to one Islamic mentoring for knowledge, character, and
              consistency
            </h1>
            <p>
              Personal guidance is for learners who need focused support beyond
              general classes. Our mentors help students and families translate
              Islamic knowledge into daily practice with clarity and compassion.
            </p>
            <div>
              <Link
                to="/admission">

                
                Request Guidance
                <ArrowRight />
              </Link>
              <Link
                to="/student-info">

                
                Open Dashboard
              </Link>
            </div>
          </div>

          <div>
            <div>
              <p>
                Session Format
              </p>
              <p>1:1 Live</p>
              <p>
                Structured plans with mentor check-ins
              </p>
            </div>
            <div>
              <p>
                Moral Focus
              </p>
              <p>Adab</p>
              <p>
                Character and discipline in daily life
              </p>
            </div>
            <div>
              <p>
                Confidentiality
              </p>
              <p>
                Sensitive matters are handled with privacy, empathy, and Islamic
                ethics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        {guidancePaths.map(({ title, detail, icon: Icon, tone }, i) =>
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
              <div>
                <h2>{title}</h2>
                <p>
                  {detail}
                </p>
              </div>
            </div>
          </motion.article>
        )}
      </section>

      <section>
        <div>
          <h2>
            How Guidance Works
          </h2>
          <span>
            <Sparkles />
            Structured and Practical
          </span>
        </div>

        <div>
          {processSteps.map((step, index) =>
          <article
            key={step.title}>

            
              <div>
                {index + 1}
              </div>
              <h3>
                {step.title}
              </h3>
              <p>
                {step.detail}
              </p>
            </article>
          )}
        </div>
      </section>

      <section>
        <div>
          <UserRoundCheck />
          Islamic Morals and Motivation
        </div>

        <p

          dir="rtl"
          lang="ur">
          
          ??????? ?? ??? ???? ??? ??????? ???? ???? ???? ?????? ???? ??? ??? ??
          ????? ???? ?? ???? ????? ??? ??? ?? ????? ??? ???? ?? ????
        </p>

        <div>
          {islamicMotivation.map((item) =>
          <article
            key={item.ref}>

            
              <p

              dir="rtl"
              lang="ar">
              
                {item.arabic}
              </p>
              <p

              dir="rtl"
              lang="ur">
              
                {item.urdu}
              </p>
              <p>{item.insight}</p>
              <p>
                {item.ref}
              </p>
            </article>
          )}
        </div>

        <div>
          {moralsFocus.map((item) =>
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
        <h2>Start your personal growth plan</h2>
        <p>
          Book a guidance pathway and receive focused mentorship for your
          learning, worship routine, and character development.
        </p>
        <div>
          <Link
            to="/admission">

            
            Start Admission
          </Link>
          <Link
            to="/services/language-support">

            
            Language Support
          </Link>
        </div>
      </section>
    </div>);

};

export default PersonalGuidance;
