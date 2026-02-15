import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  youthChallenges,
  growthTracks,
  timeline,
} from "../../data/youthPrograms";
import ServiceBreadcrumb from "../../components/navigation/ServiceBreadcrumb";
const YouthPrograms = () => {
  return (
    <div className="relative pb-6 lg:pb-10">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-red-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />
      <ServiceBreadcrumb />

      <section className="relative mt-2 rounded-3xl bg-white p-4">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-red-800">
              <Sparkles className="h-4 w-4" />
              Youth Programs
            </div>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              Youth development that blends Islamic identity, confidence, and
              real world skills
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
              Our programs prepare young Muslims to handle modern challenges
              with clarity, strong values, and purposeful action. This is not
              passive learning. It is guided growth through mentorship,
              discussion, projects, and service.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
              >
                Enroll in Youth Program
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

          <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-amber-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-red-700">
              Program Snapshot
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white p-3 shadow-sm">
                <p className="text-xs text-slate-500">Mentor Format</p>
                <p className="text-lg font-bold text-slate-900">
                  Small Cohorts
                </p>
              </div>
              <div className="rounded-xl bg-white p-3 shadow-sm">
                <p className="text-xs text-slate-500">Cadence</p>
                <p className="text-lg font-bold text-slate-900">Weekly</p>
              </div>
              <div className="rounded-xl bg-white p-3 shadow-sm col-span-2">
                <p className="text-xs text-slate-500">Core Outcome</p>
                <p className="text-sm font-semibold text-slate-900">
                  Balanced youth who can learn, lead, and serve with Islamic
                  character.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-3xl border border-red-100 bg-white p-5 md:p-7">
        <h2 className="text-2xl font-bold text-slate-900">
          Challenge to Solution Matrix
        </h2>
        <p className="mt-2 text-sm text-slate-600 md:text-base">
          We address current youth realities directly with practical, faith-led
          responses.
        </p>

        <div className="mt-5 space-y-3">
          {youthChallenges.map(({ challenge, response, icon: Icon }) => (
            <article
              key={challenge}
              className="grid gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 md:grid-cols-[220px_1fr] md:items-center"
            >
              <div className="flex items-center gap-2 text-red-800">
                <Icon className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.12em]">
                  Challenge
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {challenge}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {response}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-red-100 bg-red-900 p-6 text-white">
          <h2 className="text-2xl font-bold">Growth Journey Timeline</h2>
          <div className="mt-5 space-y-3">
            {timeline.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 p-3"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-red-900">
                  {index + 1}
                </span>
                <p className="text-sm text-red-50">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {growthTracks.map(({ title, text, icon: Icon }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.24, delay: i * 0.04 }}
              className="rounded-2xl border border-red-100 bg-gradient-to-b from-white to-red-50/30 p-4"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-700">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="mt-3 text-base font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default YouthPrograms;
