import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpenCheck,
  Building2,
  Coins,
  HandHeart,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";

const charityPrograms = [
  {
    title: "Free Education for Students",
    detail:
      "Support tuition assistance, digital classroom access, and sponsored learning kits for students who cannot afford Islamic education.",
    icon: BookOpenCheck,
    tone: "from-red-50 to-rose-50",
  },
  {
    title: "Mosque Development Support",
    detail:
      "Contribute to mosque maintenance, prayer space improvements, and community worship facilities in underserved areas.",
    icon: Landmark,
    tone: "from-amber-50 to-orange-50",
  },
  {
    title: "Madrasa Strengthening",
    detail:
      "Fund classroom materials, teacher support, and curriculum resources that help madrasas sustain quality education.",
    icon: Building2,
    tone: "from-sky-50 to-cyan-50",
  },
  {
    title: "Help for Poor Families",
    detail:
      "Provide food support, emergency aid, and essential needs assistance for vulnerable families facing hardship.",
    icon: HandHeart,
    tone: "from-emerald-50 to-teal-50",
  },
];

const allocation = [
  { name: "Education Sponsorship", value: "40%" },
  { name: "Mosque and Madrasa Support", value: "30%" },
  { name: "Poor Relief Programs", value: "25%" },
  { name: "Operations and Transparency", value: "5%" },
];

const impactPoints = [
  {
    title: "Student Scholarships",
    detail: "Enable access to structured Islamic learning for deserving students.",
  },
  {
    title: "Community Worship Spaces",
    detail: "Strengthen mosque services and prayer environments with dignity.",
  },
  {
    title: "Immediate Family Relief",
    detail: "Respond to urgent needs quickly through focused aid efforts.",
  },
];

const Donate = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50 px-4 py-8 md:px-8 md:py-12">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-red-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-amber-100/70 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl space-y-6 md:space-y-8">
        <section className="rounded-3xl border border-red-100 bg-white/90 p-5 shadow-sm backdrop-blur md:p-8">
          <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-red-800">
                <HeartHandshake className="h-4 w-4" />
                Charity and Donation Programs
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
                Support meaningful causes with your donation
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                Your contribution helps us provide free education, strengthen
                mosques and madrasas, and assist poor families with dignity,
                care, and accountability.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
                >
                  Donate Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/mission"
                  className="inline-flex items-center rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50"
                >
                  See Our Mission
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <article className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-white p-4">
                <p className="text-xs uppercase tracking-[0.1em] text-red-700">
                  Main Focus
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Education, mosques, madrasas, and poor relief programs.
                </p>
              </article>
              <article className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-4">
                <p className="text-xs uppercase tracking-[0.1em] text-amber-700">
                  Transparency
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Donation allocation and impact reporting with clear priorities.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.1em] text-slate-600">
                  Why Donate
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Small, consistent charity can create lasting transformation in
                  knowledge, worship, and social welfare.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {charityPrograms.map(({ title, detail, icon: Icon, tone }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.05, ease: "easeOut" }}
              className={`rounded-3xl border border-red-100 bg-gradient-to-br ${tone} p-5 shadow-sm`}
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-red-700 shadow-sm">
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

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-red-100 bg-white p-5 md:p-7">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-slate-900">Impact Areas</h2>
              <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
                <Users className="h-4 w-4" />
                Community Benefit
              </span>
            </div>

            <div className="mt-5 grid gap-3">
              {impactPoints.map((item) => (
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
          </div>

          <div className="rounded-3xl border border-red-100 bg-white p-5 md:p-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-amber-700">
              <Coins className="h-4 w-4" />
              Fund Allocation
            </div>

            <div className="mt-4 space-y-3">
              {allocation.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-3"
                >
                  <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-800">
                    <span>{item.name}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-red-600"
                      style={{ width: item.value }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-800">
              <p className="flex items-center gap-2 font-semibold">
                <ShieldCheck className="h-4 w-4" />
                Donations are directed to approved charity programs with
                periodic accountability updates.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-red-200 bg-red-900 px-6 py-7 text-white md:px-8">
          <h2 className="text-2xl font-bold">Be a source of benefit today</h2>
          <p className="mt-2 max-w-2xl text-sm text-red-100 md:text-base">
            Help us educate students, support mosques and madrasas, and provide
            urgent aid to poor families through consistent charitable giving.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-red-900 transition hover:bg-red-100"
            >
              Start Donation
            </Link>
            <Link
              to="/admission"
              className="inline-flex items-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Sponsor a Student
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Donate;
