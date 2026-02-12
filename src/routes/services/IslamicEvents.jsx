import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";

const placeholderImage =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='#fee2e2'/>
          <stop offset='50%' stop-color='#fef3c7'/>
          <stop offset='100%' stop-color='#ffffff'/>
        </linearGradient>
      </defs>
      <rect width='1200' height='800' fill='url(#g)'/>
      <rect x='40' y='40' width='1120' height='720' rx='26' fill='none' stroke='#b91c1c' stroke-opacity='0.25' stroke-width='4'/>
      <text x='50%' y='48%' text-anchor='middle' fill='#7f1d1d' font-family='Arial, sans-serif' font-size='46' font-weight='700'>Event Image Placeholder</text>
      <text x='50%' y='56%' text-anchor='middle' fill='#991b1b' font-family='Arial, sans-serif' font-size='24'>Replace in events[] with your real image URL/path</text>
    </svg>
  `);

const events = [
  {
    title: "Ramadan Reflection Night",
    date: "March 10, 2026",
    time: "8:30 PM",
    venue: "Online Live Session",
    category: "Seasonal Program",
    summary:
      "Interactive reminders, Quran reflection points, and family guidance for a spiritually focused Ramadan routine.",
    image: placeholderImage,
  },
  {
    title: "Seerah Story Circle",
    date: "April 04, 2026",
    time: "7:00 PM",
    venue: "Community Hall",
    category: "Educational Gathering",
    summary:
      "Narrative based session on key moments from the life of the Prophet with practical lessons for youth and parents.",
    image: placeholderImage,
  },
  {
    title: "Youth Leadership Meetup",
    date: "April 18, 2026",
    time: "6:00 PM",
    venue: "Hybrid",
    category: "Youth Event",
    summary:
      "Workshops on identity, confidence, team collaboration, and Islamic communication for young Muslim leaders.",
    image: placeholderImage,
  },
  {
    title: "Family Eid Connect",
    date: "June 05, 2026",
    time: "5:30 PM",
    venue: "Main Auditorium",
    category: "Family Celebration",
    summary:
      "Community celebration with activities for children, reminders for parents, and meaningful family networking.",
    image: placeholderImage,
  },
];

const pillars = [
  "Faith-centered gatherings that revive hearts",
  "Age-appropriate educational content for all",
  "Safe community environment with Islamic values",
  "Programs designed for continuity, not one-time inspiration",
];

const IslamicEvents = () => {
  return (
    <div className="relative overflow-hidden pb-6 lg:pb-10">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-red-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-36 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />

      <section className="relative rounded-3xl border border-red-100 bg-white p-5 shadow-sm md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-red-800">
              <CalendarDays className="h-4 w-4" />
              Islamic Events
            </div>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              Inspiring events that connect learning, worship, and community
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
              From seasonal programs to youth and family gatherings, our events
              are designed to strengthen iman, increase beneficial knowledge,
              and build bonds within the ummah.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
              >
                Join Upcoming Events
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services/community-engagement"
                className="inline-flex items-center rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50"
              >
                Community Engagement
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-amber-50 p-5">
            <div className="flex items-center gap-2 text-red-800">
              <Sparkles className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-[0.13em]">
                What Makes Our Events Different
              </p>
            </div>
            <ul className="mt-4 space-y-2">
              {pillars.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white bg-white/90 px-3 py-2 text-sm text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="mt-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-slate-900">Upcoming Event Cards</h2>
          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
            Replace placeholders anytime
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {events.map((event, index) => (
            <motion.article
              key={`${event.title}-${event.date}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.25, delay: index * 0.05, ease: "easeOut" }}
              className="overflow-hidden rounded-3xl border border-red-100 bg-white shadow-sm"
            >
              <div className="relative h-52 bg-slate-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-red-700">
                  {event.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">{event.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {event.summary}
                </p>

                <div className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-2 py-2">
                    <CalendarDays className="h-4 w-4 text-red-700" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-2 py-2">
                    <Clock3 className="h-4 w-4 text-red-700" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-2 py-2">
                    <MapPin className="h-4 w-4 text-red-700" />
                    <span>{event.venue}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-3xl border border-red-200 bg-red-900 px-6 py-7 text-white md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Plan your next event with us</h2>
            <p className="mt-2 max-w-2xl text-sm text-red-100 md:text-base">
              Collaborate for youth circles, family programs, and community
              gatherings that are meaningful and well organized.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-red-900 transition hover:bg-red-100"
            >
              Contact Team
            </Link>
            <Link
              to="/services/youth-programs"
              className="inline-flex items-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Youth Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IslamicEvents;
