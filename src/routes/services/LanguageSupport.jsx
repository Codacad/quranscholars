import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Languages, Sparkles, Users } from "lucide-react";
import {
  languageTracks,
  outcomes,
  learningFlow,
} from "../../data/languageSupport";
import ServiceBreadcrumb from "../../components/navigation/ServiceBreadcrumb";
const LanguageSupport = () => {
  return (
    <div className="relative pb-6 lg:pb-10">
      <div className="pointer-events-none absolute -left-24 top-16 hidden h-72 w-72 rounded-full bg-red-100/60 blur-3xl md:block" />
      <div className="pointer-events-none absolute -right-20 top-40 hidden h-72 w-72 rounded-full bg-amber-100/60 blur-3xl md:block" />

      <section className="relative mt-2 rounded-3xl bg-white p-4 md:p-5">
        <ServiceBreadcrumb />
        <div className="mt-3 grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-red-800">
              <Languages className="h-4 w-4" />
              Language Support
            </div>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              Multilingual Islamic learning with depth, clarity, and confidence
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Our language pathways help learners connect directly with Islamic
              sources while improving communication. Arabic, Urdu, and English
              support is designed for practical learning and long term growth.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                to="/services/courses"
                className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
              >
                Explore Tracks
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/admission"
                className="inline-flex items-center rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50"
              >
                Start Admission
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-white p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-red-700">
                Delivery Mode
              </p>
              <p className="mt-1 text-2xl font-bold text-red-900">
                Live + Guided
              </p>
              <p className="text-xs text-slate-600">
                Teacher feedback with weekly revision
              </p>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-amber-700">
                Learner Types
              </p>
              <p className="mt-1 text-2xl font-bold text-amber-900">All Ages</p>
              <p className="text-xs text-slate-600">
                Kids, youth, adults, and family groups
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.1em] text-slate-600">
                Learning Philosophy
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Language is treated as a gateway to understanding deen, not just
                memorizing terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {languageTracks.map(
          ({ title, subtitle, detail, icon: Icon, tone }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.28, delay: i * 0.04, ease: "easeOut" }}
              className={`rounded-2xl border border-red-100 bg-gradient-to-br ${tone} p-5`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-red-700">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                  {subtitle}
                </span>
              </div>
              <h2 className="mt-4 text-lg font-bold text-slate-900">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {detail}
              </p>
            </motion.article>
          ),
        )}
      </section>

      <section className="mt-6 rounded-3xl border border-red-100 bg-white p-5 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-slate-900">How We Teach</h2>
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
            <Sparkles className="h-4 w-4" />
            Practical Learning Flow
          </span>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {learningFlow.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
            >
              <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-700 text-xs font-bold text-white">
                {index + 1}
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-3xl border border-red-100 bg-white p-5 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-slate-900">Why It Matters</h2>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
            <Users className="h-4 w-4" />
            Student Outcomes
          </span>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {outcomes.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-3xl border border-red-200 bg-red-900 px-6 py-7 text-white md:px-8">
        <h2 className="text-2xl font-bold">
          Build your language foundation today
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-red-100 md:text-base">
          Choose your preferred language path and begin a guided journey toward
          stronger Islamic understanding and communication.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to="/admission"
            className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-red-900 transition hover:bg-red-100"
          >
            Start Admission
          </Link>
          <Link
            to="/services/personal-guidance"
            className="inline-flex items-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Personal Guidance
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LanguageSupport;
