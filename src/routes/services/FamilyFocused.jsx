import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Baby, Heart, Shield, Users } from "lucide-react";
import {
  stageTimeline,
  familyPrograms,
  trustPoints,
} from "../../data/familyFocused";
import ServiceBreadcrumb from "../../components/navigation/ServiceBreadcrumb";
const FamilyFocused = () => {
  return (
    <div className="relative pb-6 lg:pb-10">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-red-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />
      <ServiceBreadcrumb />

      <section className="relative mt-2 rounded-3xl bg-white p-4">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-red-800">
              <Users className="h-4 w-4" />
              Family Focused Services
            </div>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              Building homes of mercy, adab, and lifelong Islamic learning
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              We help families turn Islamic values into daily habits through
              shared learning, clear routines, and personal mentorship for each
              stage of family life.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
              >
                Join Family Program
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services/personal-guidance"
                className="inline-flex items-center rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50"
              >
                Personal Guidance
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-amber-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-700">
              Family Priority Areas
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-700">
                  <Baby className="h-4 w-4" />
                </span>
                <p className="text-sm font-medium text-slate-700">
                  Tarbiyah with gentleness and discipline
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <Heart className="h-4 w-4" />
                </span>
                <p className="text-sm font-medium text-slate-700">
                  Emotional support rooted in prophetic mercy
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                  <Shield className="h-4 w-4" />
                </span>
                <p className="text-sm font-medium text-slate-700">
                  Healthy boundaries for digital and social life
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="rounded-3xl border border-red-100 bg-white p-5 md:p-7">
          <h2 className="text-2xl font-bold text-slate-900">
            Family Journey Timeline
          </h2>
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Structured support for different stages so each household receives
            relevant guidance instead of generic advice.
          </p>

          <div className="mt-6 space-y-4">
            {stageTimeline.map((item, index) => (
              <motion.article
                key={item.stage}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                className="relative rounded-2xl border border-slate-100 bg-slate-50/80 p-4 pl-12"
              >
                <span className="absolute left-4 top-5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-700 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-red-700">
                  {item.audience}
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {item.stage}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.focus}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 h-fit rounded-3xl border border-red-100 bg-white p-5 md:p-6">
          <h3 className="text-lg font-bold text-slate-900">
            Why families trust this
          </h3>
          <ul className="mt-4 space-y-3">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700"
              >
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-2xl border border-red-100 bg-red-50 p-4">
            <p className="text-xs uppercase tracking-[0.12em] text-red-700">
              Sunnah Reminder
            </p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-red-900">
              The best among you are those who are best to their families.
            </p>
          </div>
        </aside>
      </section>

      <section className="mt-6 rounded-3xl border border-red-100 bg-white p-5 md:p-7">
        <h2 className="text-2xl font-bold text-slate-900">Program Formats</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {familyPrograms.map(({ title, summary, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-red-100 bg-gradient-to-b from-white to-red-50/30 p-4"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-700">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {summary}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FamilyFocused;
