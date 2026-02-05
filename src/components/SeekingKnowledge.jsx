import SeekingKnowledgeImg from "../assets/images/seeking-knowledge.svg";
import "../css/SeekingKnowledge.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const SeekingKnowledge = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 text-slate-50 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,113,113,0.18),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(251,191,36,0.16),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(14,165,233,0.14),transparent_36%)]" />
      <div className="relative w-full px-4 md:px-8 space-y-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start w-full">
          {/* Left: Narrative + CTAs */}
          <div className="space-y-6 w-full">
            <div className="inline-flex items-center gap-3 rounded-full bg-red-700/25 text-red-100 px-4 py-2 text-sm font-semibold shadow-sm">
              <span className="h-2 w-2 rounded-full bg-amber-300 animate-pulse" />
              Seeking Knowledge
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Learn with <span className="text-amber-300">ihsān</span>, act with
              humility, and pass it on.
            </h1>

            <p className="text-lg leading-8 text-slate-200">
              The first command revealed was{" "}
              <strong className="text-amber-200">“Iqra” (Read)</strong>. The
              Qur’an and Sunnah call every believer to pursue knowledge that
              illuminates the heart and benefits creation. Join live circles,
              reflect with mentors, and serve by teaching what you learn.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 py-5 shadow-lg space-y-2">
              <p className="text-sm uppercase tracking-[0.18em] text-amber-200 font-semibold">
                Prophetic Guidance
              </p>
              <p className="text-lg text-slate-50 leading-8">
                “Seeking knowledge is an obligation upon every Muslim.” — Hadith
                (Ibn Mājah)
              </p>
              <p className="text-slate-300 text-sm">
                We weave every module around actionable sunnahs, adab of
                learning, and daily adhkār.
              </p>
            </div>

            {
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Qur'an First",
                    body: "Tajwīd labs, word-by-word reading, and thematic tafsir.",
                  },
                  {
                    title: "Sunnah Alive",
                    body: "Fiqh for prayer, family, finance, and modern dilemmas.",
                  },
                  {
                    title: "Heart Work",
                    body: "Tazkiyah routines, reflection prompts, and dhikr trackers.",
                  },
                  {
                    title: "Serve & Share",
                    body: "Teach a sibling, mentor peers, and lead micro-projects.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 shadow-sm"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-200">
                      {item.title}
                    </p>
                    <p className="text-slate-200 text-sm leading-6">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            }

            <div className="flex flex-wrap gap-3">
              <Link
                to="/register"
                className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
              >
                Start Learning
              </Link>
              {/* <button
                // onClick={() => setReadMore(!readMore)}
                className="border border-amber-300/60 text-amber-200 hover:border-amber-200 hover:text-white px-5 py-3 rounded-full font-semibold transition"
              >
                {readMore ? "Show less" : "See curriculum highlights"}
              </button> */}
            </div>
          </div>

          {/* Right: Visual + Milestones */}
          <div className="relative flex flex-col gap-4 w-full h-full">
            <div className="absolute -inset-4 bg-gradient-to-br from-red-500/25 via-amber-400/10 to-cyan-300/10 blur-3xl" />

            {/* Card 1: Hero visual */}
            <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="p-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-red-700 text-white flex items-center justify-center text-xl font-black shadow-md">
                    IQRA
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-amber-200 font-semibold">
                      Live & Guided
                    </p>
                    <p className="text-lg font-bold text-white">
                      Knowledge Capsule
                    </p>
                  </div>
                </div>

                <img
                  className="w-full rounded-2xl border border-white/10 shadow-sm object-cover"
                  src={SeekingKnowledgeImg}
                  alt="Interactive learning illustration"
                />
              </div>
            </div>

            {/* Card 2: Milestones + stats + verse */}
            {/* <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="p-6 space-y-5">
                <div className="grid gap-3">
                  {[
                    { label: "Intention", note: "Make niyyah, set your rhythm, log dua goals." },
                    { label: "Learn", note: "Live cohorts, Q&A, concise summaries after class." },
                    { label: "Reflect", note: "Journals, adhkar trackers, action items for family/work." },
                    { label: "Share", note: "Teach one lesson forward to cement your learning." },
                  ].map((step, idx) => (
                    <div
                      key={step.label}
                      className="flex items-start gap-3 rounded-2xl bg-white/8 border border-white/10 px-4 py-3"
                    >
                      <div className="h-9 w-9 rounded-full bg-white/20 text-amber-200 font-black flex items-center justify-center shadow-sm">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{step.label}</p>
                        <p className="text-sm text-slate-200 leading-6">{step.note}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "18k+", label: "Active learners" },
                    { value: "42", label: "Countries" },
                    { value: "160", label: "Live sessions/week" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-slate-900/70 text-white px-4 py-4 shadow-md text-center"
                    >
                      <p className="text-2xl font-black">{stat.value}</p>
                      <p className="text-xs uppercase tracking-[0.14em] mt-1 text-slate-200/80">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.16em] text-amber-200 font-semibold">Verse to anchor</p>
                  <p className="text-base leading-7 text-slate-100 mt-1">
                    “Allah will raise those who have believed among you and those who were given knowledge, by degrees.”
                    (Qur'an 58:11)
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeekingKnowledge;
