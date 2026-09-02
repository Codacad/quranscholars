import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  engagementPrograms,
  outcomes,
  motivationTexts } from
"@/data/communityEngagement.js";
import {
  CalendarDays,
  HeartHandshake,
  ArrowRight,
  BookOpenCheck } from
"lucide-react";
import ServiceBreadcrumb from "@/components/navigation/ServiceBreadcrumb.jsx";

const CommunityEngagements = () => {
  return (
    <div>
      <div />
      <div />

      <section>
        <ServiceBreadcrumb />
        <div>
          <div>
            <div>
              <HeartHandshake />
              Community Engagements
            </div>
            <h1>
              Learning communities that nurture knowledge, service, and unity
            </h1>
            <p>
              We design structured community experiences where Islamic education
              leads to service, discipline, and real social impact. Each program
              is built to strengthen faith while developing character and
              responsibility.
            </p>
            <div>
              <Link
                to="/admission">

                
                Join a Program
                <ArrowRight />
              </Link>
              <Link
                to="/contact">

                
                Partner with Us
              </Link>
            </div>
          </div>

          <div>
            <div>
              <p>
                Weekly Halqahs
              </p>
              <p>Live</p>
              <p>
                Moderated learning and reflection circles
              </p>
            </div>
            <div>
              <p>
                Active Families
              </p>
              <p>Growing</p>
              <p>
                Shared routines for parents and children
              </p>
            </div>
            <div>
              <p>
                Community Focus
              </p>
              <p>
                Education that builds commitment to adab, khidmah, and ummah
                responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        {engagementPrograms.map(
          ({ title, description, icon: Icon, tone }, i) =>
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
                    {description}
                  </p>
                </div>
              </div>
            </motion.article>

        )}
      </section>

      <section>
        <div>
          <h2>
            Why This Matters
          </h2>
          <span>
            <BookOpenCheck />
            Education with Impact
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
        <div>
          <CalendarDays />
          Quran and Motivation
        </div>

        <p

          dir="rtl"
          lang="ur">
          
          ????? ???? ?? ?? ???? ???? ??? ???? ??? ????? ?? ??? ???? ???? ??
          ??????? ?????? ?? ?? ????? ?????? ????
        </p>

        <div>
          {motivationTexts.map((item) =>
          <article
            key={item.reference}>

            
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
                {item.reference}
              </p>
            </article>
          )}
        </div>
      </section>

      <section>
        <h2>
          Be part of a beneficial community
        </h2>
        <p>
          Join our programs to study together, serve together, and grow together
          with purpose.
        </p>
        <div>
          <Link
            to="/admission">

            
            Start Admission
          </Link>
          <Link
            to="/services/islamic-events">

            
            Explore Events
          </Link>
        </div>
      </section>
    </div>);

};

export default CommunityEngagements;
