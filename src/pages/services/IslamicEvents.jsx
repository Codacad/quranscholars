import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles } from
"lucide-react";
import { placeholderImage, events, pillars } from "@/data/islamicEvents.js";
import ServiceBreadcrumb from "@/components/navigation/ServiceBreadcrumb.jsx";
const IslamicEvents = () => {
  return (
    <div>
      <div />
      <div />

      <section>
        <ServiceBreadcrumb />
        <div>
          <div>
            <div>
              <CalendarDays />
              Islamic Events
            </div>
            <h1>
              Inspiring events that connect learning, worship, and community
            </h1>
            <p>
              From seasonal programs to youth and family gatherings, our events
              are designed to strengthen iman, increase beneficial knowledge,
              and build bonds within the ummah.
            </p>
            <div>
              <Link
                to="/admission">

                
                Join Upcoming Events
                <ArrowRight />
              </Link>
              <Link
                to="/services/community-engagement">

                
                Community Engagement
              </Link>
            </div>
          </div>

          <aside>
            <div>
              <Sparkles />
              <p>
                What Makes Our Events Different
              </p>
            </div>
            <ul>
              {pillars.map((item) =>
              <li
                key={item}>

                
                  {item}
                </li>
              )}
            </ul>
          </aside>
        </div>
      </section>

      <section>
        <div>
          <h2>Upcoming Event</h2>
        </div>

        <div>
          {events.map((event, index) =>
          <motion.article
            key={`${event.title}-${event.date}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.25,
              delay: index * 0.05,
              ease: "easeOut"
            }}>

            
              <div>
                <img
                src={event.image}
                alt={event.title}

                loading="lazy" />
              
                <div />
                <span>
                  {event.category}
                </span>
              </div>

              <div>
                <h3>
                  {event.title}
                </h3>
                <p>
                  {event.summary}
                </p>

                <div>
                  <div>
                    <CalendarDays />
                    <span>{event.date}</span>
                  </div>
                  <div>
                    <Clock3 />
                    <span>{event.time}</span>
                  </div>
                  <div>
                    <MapPin />
                    <span>{event.venue}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          )}
        </div>
      </section>

      <section>
        <div>
          <div>
            <h2>Plan your next event with us</h2>
            <p>
              Collaborate for youth circles, family programs, and community
              gatherings that are meaningful and well organized.
            </p>
          </div>
          <div>
            <Link
              to="/contact">

              
              Contact Team
            </Link>
            <Link
              to="/services/youth-programs">

              
              Youth Programs
            </Link>
          </div>
        </div>
      </section>
    </div>);

};

export default IslamicEvents;
