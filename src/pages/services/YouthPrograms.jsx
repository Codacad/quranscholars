import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  youthChallenges,
  growthTracks,
  timeline } from
"@/data/youthPrograms.js";
import ServiceBreadcrumb from "@/components/navigation/ServiceBreadcrumb.jsx";
const YouthPrograms = () => {
  return (
    <div>
      <div />
      <div />

      <section>
        <ServiceBreadcrumb />
        <div>
          <div>
            <div>
              <Sparkles />
              Youth Programs
            </div>
            <h1>
              Youth development that blends Islamic identity, confidence, and
              real world skills
            </h1>
            <p>
              Our programs prepare young Muslims to handle modern challenges
              with clarity, strong values, and purposeful action. This is not
              passive learning. It is guided growth through mentorship,
              discussion, projects, and service.
            </p>
            <div>
              <Link
                to="/admission">

                
                Enroll in Youth Program
                <ArrowRight />
              </Link>
              <Link
                to="/services/community-engagement">

                
                Community Engagement
              </Link>
            </div>
          </div>

          <div>
            <p>
              Program Snapshot
            </p>
            <div>
              <div>
                <p>Mentor Format</p>
                <p>
                  Small Cohorts
                </p>
              </div>
              <div>
                <p>Cadence</p>
                <p>Weekly</p>
              </div>
              <div>
                <p>Core Outcome</p>
                <p>
                  Balanced youth who can learn, lead, and serve with Islamic
                  character.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>
          Challenge to Solution Matrix
        </h2>
        <p>
          We address current youth realities directly with practical, faith-led
          responses.
        </p>

        <div>
          {youthChallenges.map(({ challenge, response, icon: Icon }) =>
          <article
            key={challenge}>

            
              <div>
                <Icon />
                <span>
                  Challenge
                </span>
              </div>
              <div>
                <p>
                  {challenge}
                </p>
                <p>
                  {response}
                </p>
              </div>
            </article>
          )}
        </div>
      </section>

      <section>
        <div>
          <h2>Growth Journey Timeline</h2>
          <div>
            {timeline.map((step, index) =>
            <div
              key={step}>

              
                <span>
                  {index + 1}
                </span>
                <p>{step}</p>
              </div>
            )}
          </div>
        </div>

        <div>
          {growthTracks.map(({ title, text, icon: Icon }, i) =>
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.24, delay: i * 0.04 }}>

            
              <span>
                <Icon />
              </span>
              <h3>
                {title}
              </h3>
              <p>
                {text}
              </p>
            </motion.article>
          )}
        </div>
      </section>
    </div>);

};

export default YouthPrograms;
