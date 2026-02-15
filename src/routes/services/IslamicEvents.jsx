import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";
import { placeholderImage, events, pillars } from "../../data/islamicEvents";
import ServiceBreadcrumb from "../../components/navigation/ServiceBreadcrumb";
const IslamicEvents = () => {
  return (
    <div className="relative pb-6 lg:pb-10">
      <div className="pointer-events-none absolute -left-24 top-16 hidden h-72 w-72 rounded-full bg-red-100/60 blur-3xl md:block" />
      <div className="pointer-events-none absolute -right-20 top-40 hidden h-72 w-72 rounded-full bg-amber-100/60 blur-3xl md:block" />

      <section className="relative mt-2 rounded-3xl bg-white p-4 md:p-5">
        <ServiceBreadcrumb />
        <div className="mt-3 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
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
          <h2 className="text-2xl font-bold text-slate-900">Upcoming Event</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {events.map((event, index) => (
            <motion.article
              key={`${event.title}-${event.date}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.25,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="overflow-hidden rounded-3xl border border-red-100 bg-white"
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
                <h3 className="text-xl font-bold text-slate-900">
                  {event.title}
                </h3>
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
