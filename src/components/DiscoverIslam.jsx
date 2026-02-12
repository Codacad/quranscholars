import { Link } from "react-router-dom";
import WelcomeImgTeaching from "../assets/images/teaching.svg";
import WelcomeImgPhone from "../assets/images/phone-inhand.png";
import "../css/Welcome.css";
import { highlights, milestones, stats } from "../data/discoverIslam";
const DiscoverIslam = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-rose-50" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-red-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-12 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />

      {/* Contents (Foreground) */}
      <div className="relative mx-auto max-w-6xl px-4 md:px-10 py-14">
        <div className="w-full flex justify-center mb-8">
          <div className="h-12 w-36 rounded-2xl text-red-900 flex items-center justify-center text-4xl font-[800]">
            ﷽
          </div>
        </div>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          {/* Left: Text and feature stack */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              Illuminating hearts with authentic scholarship
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Discover Islam with depth, beauty, and practice.
              </h2>
              <p className="text-lg text-slate-700 leading-8">
                Quran Scholar brings live, mentor-led learning that blends
                Qur'an, Sunnah, adab, and spiritual refinement. Study in small
                cohorts, follow curated study plans, and witness your iman grow
                in community.
              </p>
            </div>
            {/* Highligths */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/50 bg-white/70 backdrop-blur shadow-md px-5 py-4 space-y-1"
                >
                  <div className="flex items-center gap-3 text-red-900 text-xl font-semibold">
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-slate-700 text-sm leading-6">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-gradient-to-br from-red-900 to-red-700 text-white px-4 py-5 shadow-lg"
                >
                  <p className="text-3xl font-black">{stat.value}</p>
                  <p className="text-sm uppercase tracking-[0.14em] mt-1 text-white/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-red-100 bg-white/80 backdrop-blur px-6 py-5 shadow-md space-y-3">
              <p className="text-sm uppercase tracking-[0.18em] text-red-800 font-semibold">
                Qur'an & Sunnah Spotlight
              </p>
              <p className="text-lg text-slate-800 leading-8">
                "The best among you are those who learn the Qur'an and teach
                it." - Prophetic tradition (Bukhari)
              </p>
              <p className="text-slate-600 text-sm">
                Weekly reflections on verses and hadith with practical action
                points for family, work, and community life.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/courses"
                  className="bg-red-900 hover:bg-red-700 transition-all px-6 py-3 rounded-full text-white text-center shadow-lg"
                >
                  Explore Courses
                </Link>
                <Link
                  to="/register"
                  className="text-red-900 font-semibold border border-red-200 hover:border-red-400 px-5 py-3 rounded-full bg-white transition-all"
                >
                  Start My Plan
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Visual panel */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-red-100 via-white to-amber-50 blur-xl" />
            <div className="relative rounded-3xl border border-white/60 bg-white/80 backdrop-blur-lg shadow-2xl overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-red-800 font-semibold">
                      Live & Guided
                    </p>
                    <p className="text-lg font-bold text-slate-900">
                      Immersive Learning Capsule
                    </p>
                  </div>
                </div>

                <img
                  src={WelcomeImgTeaching}
                  alt="Interactive teaching"
                  className="w-full rounded-2xl border border-red-100 shadow-sm"
                />

                <div className="grid gap-3">
                  {milestones.map((step, idx) => (
                    <div
                      key={step.label}
                      className="flex items-start gap-3 rounded-2xl bg-red-50/70 border border-red-100 px-4 py-3"
                    >
                      <div className="h-9 w-9 rounded-full bg-white text-red-900 font-black flex items-center justify-center shadow-sm">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-red-900">
                          {step.label}
                        </p>
                        <p className="text-sm text-slate-700 leading-6">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-slate-900 text-white px-5 py-4 shadow-md">
                  <p className="text-sm uppercase tracking-[0.18em] text-amber-200">
                    Verse to Live By
                  </p>
                  <p className="text-base leading-7 mt-1">
                    "Indeed, in the remembrance of Allah do hearts find rest."
                    (Qur'an 13:28)
                  </p>
                </div>

                <div className="flex items-center gap-3 text-slate-600 text-sm">
                  <img
                    src={WelcomeImgPhone}
                    alt="Learning on phone"
                    className="h-12 w-12 rounded-xl border border-red-100 shadow-sm object-cover"
                  />
                  <p>
                    Mobile-friendly classrooms, downloadable notes, and session
                    replays so you never miss a khayr-filled moment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverIslam;
