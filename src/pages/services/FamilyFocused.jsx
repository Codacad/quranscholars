import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Baby, Heart, Shield, Users } from "lucide-react";
import {
  stageTimeline,
  familyPrograms,
  trustPoints } from
"@/data/familyFocused.js";
import ServiceBreadcrumb from "@/components/navigation/ServiceBreadcrumb.jsx";
const FamilyFocused = () => {
  return (
    <div>
      <div />
      <div />

      <section>
        <ServiceBreadcrumb />
        <div>
          <div>
            <div>
              <Users />
              Family Focused Services
            </div>
            <h1>
              Building homes of mercy, adab, and lifelong Islamic learning
            </h1>
            <p>
              We help families turn Islamic values into daily habits through
              shared learning, clear routines, and personal mentorship for each
              stage of family life.
            </p>
            <div>
              <Link
                to="/admission">

                
                Join Family Program
                <ArrowRight />
              </Link>
              <Link
                to="/services/personal-guidance">

                
                Personal Guidance
              </Link>
            </div>
          </div>

          <div>
            <p>
              Family Priority Areas
            </p>
            <div>
              <div>
                <span>
                  <Baby />
                </span>
                <p>
                  Tarbiyah with gentleness and discipline
                </p>
              </div>
              <div>
                <span>
                  <Heart />
                </span>
                <p>
                  Emotional support rooted in prophetic mercy
                </p>
              </div>
              <div>
                <span>
                  <Shield />
                </span>
                <p>
                  Healthy boundaries for digital and social life
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>
            Family Journey Timeline
          </h2>
          <p>
            Structured support for different stages so each household receives
            relevant guidance instead of generic advice.
          </p>

          <div>
            {stageTimeline.map((item, index) =>
            <motion.article
              key={item.stage}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}>

              
                <span>
                  {index + 1}
                </span>
                <p>
                  {item.audience}
                </p>
                <h3>
                  {item.stage}
                </h3>
                <p>
                  {item.focus}
                </p>
              </motion.article>
            )}
          </div>
        </div>

        <aside>
          <h3>
            Why families trust this
          </h3>
          <ul>
            {trustPoints.map((point) =>
            <li
              key={point}>

              
                {point}
              </li>
            )}
          </ul>

          <div>
            <p>
              Sunnah Reminder
            </p>
            <p>
              The best among you are those who are best to their families.
            </p>
          </div>
        </aside>
      </section>

      <section>
        <h2>Program Formats</h2>
        <div>
          {familyPrograms.map(({ title, summary, icon: Icon }) =>
          <article
            key={title}>

            
              <span>
                <Icon />
              </span>
              <h3>
                {title}
              </h3>
              <p>
                {summary}
              </p>
            </article>
          )}
        </div>
      </section>
    </div>);

};

export default FamilyFocused;
