import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircleHeart,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import {
  guidancePaths,
  processSteps,
  moralsFocus,
  islamicMotivation,
} from "../../data/personalGuidance";

const PersonalGuidance = () => {
  return (
    <div className="relative overflow-hidden pb-6 lg:pb-10">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-red-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-32 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />

      <section className="relative rounded-3xl bg-white p-4 shadow-sm">
        <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-red-800">
              <MessageCircleHeart className="h-4 w-4" />
              Personal Guidance
            </div>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              One to one Islamic mentoring for knowledge, character, and
              consistency
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Personal guidance is for learners who need focused support beyond
              general classes. Our mentors help students and families translate
              Islamic knowledge into daily practice with clarity and compassion.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
              >
                Request Guidance
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/student-info"
                className="inline-flex items-center rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50"
              >
                Open Dashboard
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-white p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-red-700">
                Session Format
              </p>
              <p className="mt-1 text-2xl font-bold text-red-900">1:1 Live</p>
              <p className="text-xs text-slate-600">
                Structured plans with mentor check-ins
              </p>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-amber-700">
                Moral Focus
              </p>
              <p className="mt-1 text-2xl font-bold text-amber-900">Adab</p>
              <p className="text-xs text-slate-600">
                Character and discipline in daily life
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.1em] text-slate-600">
                Confidentiality
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Sensitive matters are handled with privacy, empathy, and Islamic
                ethics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        {guidancePaths.map(({ title, detail, icon: Icon, tone }, i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.28, delay: i * 0.04, ease: "easeOut" }}
            className={`rounded-2xl border border-red-100 bg-gradient-to-br ${tone} p-5 shadow-sm`}
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-red-700 shadow-sm">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-slate-900">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {detail}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="mt-6 rounded-3xl border border-red-100 bg-white p-5 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-slate-900">
            How Guidance Works
          </h2>
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
            <Sparkles className="h-4 w-4" />
            Structured and Practical
          </span>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
            >
              <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-700 text-xs font-bold text-white">
                {index + 1}
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-3xl border border-red-100 bg-white p-5 md:p-7">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-amber-700">
          <UserRoundCheck className="h-4 w-4" />
          Islamic Morals and Motivation
        </div>

        <p
          className="font-urdu-script mt-4 text-right text-xl leading-[2.8rem] text-slate-800 md:text-2xl md:leading-[3rem]"
          dir="rtl"
          lang="ur"
        >
          رہنمائی کا اصل مقصد صرف معلومات دینا نہیں بلکہ اخلاق، نیت، اور عمل کی
          اصلاح کرنا ہے تاکہ طالبِ علم دین کو زندگی میں نافذ کر سکے۔
        </p>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {islamicMotivation.map((item) => (
            <article
              key={item.ref}
              className="rounded-2xl border border-red-100 bg-gradient-to-b from-white to-red-50/30 p-5"
            >
              <p
                className="font-arabic-script text-right text-3xl leading-[2.9rem] text-slate-900 md:text-4xl md:leading-[3.4rem]"
                dir="rtl"
                lang="ar"
              >
                {item.arabic}
              </p>
              <p
                className="font-urdu-script mt-3 text-right text-xl leading-[2.8rem] text-slate-700 md:text-2xl md:leading-[3rem]"
                dir="rtl"
                lang="ur"
              >
                {item.urdu}
              </p>
              <p className="mt-3 text-sm text-slate-600">{item.insight}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.13em] text-red-700">
                {item.ref}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {moralsFocus.map((item) => (
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
        <h2 className="text-2xl font-bold">Start your personal growth plan</h2>
        <p className="mt-2 max-w-2xl text-sm text-red-100 md:text-base">
          Book a guidance pathway and receive focused mentorship for your
          learning, worship routine, and character development.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to="/admission"
            className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-red-900 transition hover:bg-red-100"
          >
            Start Admission
          </Link>
          <Link
            to="/services/language-support"
            className="inline-flex items-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Language Support
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PersonalGuidance;
