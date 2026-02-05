import HijabImage from "../assets/images/hijab.png";
import MuslimMan from "../assets/images/muslim.png";

const teachers = [
  {
    name: "Farman Farooqui",
    image: MuslimMan,
    bio: "Qur'an & Tajwīd mentor with 10+ years guiding recitation and memorization.",
    focus: "Tajwīd, Hifz, Makharij",
  },
  {
    name: "Noori Fatima",
    image: HijabImage,
    bio: "Hadith and Fiqh specialist, helping sisters build confidence in ibadah.",
    focus: "Hadith, Fiqh, Adab",
  },
  {
    name: "Rayyan Farooqui",
    image: MuslimMan,
    bio: "Connects teens to Qur'an through stories, reflective journaling, and seerah.",
    focus: "Seerah, Youth Circles",
  },
];

function Teachers() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 text-slate-50 py-16 md:py-20 px-4 md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(248,113,113,0.16),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(251,191,36,0.12),transparent_30%)]" />
      <div className="relative max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3 rounded-full bg-red-700/20 text-red-100 px-4 py-2 text-sm font-semibold shadow-sm">
              <span className="h-2 w-2 rounded-full bg-amber-300 animate-pulse" />
              Our Mentors
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Meet the teachers who light your path.
            </h2>
            <p className="text-slate-200 max-w-3xl">
              Certified scholars who blend classical tradition with modern pedagogy—live feedback, reflective prompts,
              and pastoral care.
            </p>
          </div>
          <div className="flex gap-3 text-sm text-slate-200">
            <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 shadow-sm">
              <p className="text-2xl font-black text-amber-200">24</p>
              <p className="uppercase tracking-[0.14em] text-slate-200/80 text-xs">Instructors</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 shadow-sm">
              <p className="text-2xl font-black text-amber-200">12</p>
              <p className="uppercase tracking-[0.14em] text-slate-200/80 text-xs">Countries</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur shadow-xl overflow-hidden transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-br from-red-500/15 via-white/10 to-amber-400/15" />
              <div className="relative p-6 space-y-4 h-full flex flex-col">
                <div className="flex items-center gap-4">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="h-14 w-14 rounded-2xl object-cover border border-white/20 shadow-sm"
                  />
                  <div>
                    <p className="text-lg font-bold text-white">{teacher.name}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-amber-200">{teacher.focus}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-200 leading-6 flex-1">{teacher.bio}</p>

                <div className="rounded-2xl bg-slate-900/60 border border-white/10 px-4 py-3 text-sm text-slate-200 space-y-1">
                  <div className="flex justify-between text-amber-200 text-xs uppercase tracking-[0.14em]">
                    <span>Modality</span>
                    <span>Availability</span>
                  </div>
                  <div className="flex justify-between text-slate-100">
                    <span>Live · 1:1 · Cohort</span>
                    <span>GMT+0 / +5</span>
                  </div>
                </div>

                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-red-700 text-white px-4 py-2 text-sm font-semibold shadow-md transition hover:bg-red-600">
                  Book a trial
                  <span className="text-base">↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teachers;
