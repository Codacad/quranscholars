import { Link } from "react-router-dom";
import ChildWithQuran from "/child-with-quran.svg";
import {
  ArrowRight,
  BookOpen,
  CircleCheckBig,
  Clock3,
  Globe,
  GraduationCap,
  Handshake,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const impactStats = [
  {
    label: "Live Mentorship",
    value: "1:1 + Group",
    detail: "Flexible sessions for kids and adults",
    icon: Users,
  },
  {
    label: "Global Access",
    value: "Across Time Zones",
    detail: "Structured classes that fit family routines",
    icon: Globe,
  },
  {
    label: "Review Cycle",
    value: "24-48 Hours",
    detail: "Admission review and onboarding response",
    icon: Clock3,
  },
  {
    label: "Learning Tracks",
    value: "10+ Courses",
    detail: "Quran, Hadith, Fiqh, language, and more",
    icon: GraduationCap,
  },
];

const pillars = [
  {
    title: "Authentic Knowledge",
    text: "Curriculum is built around Quran and Sunnah with practical, age-appropriate delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Human-Centered Teaching",
    text: "Teachers focus on tajweed quality, confidence, and spiritual growth at a sustainable pace.",
    icon: Heart,
  },
  {
    title: "Clear Progress Path",
    text: "Students follow structured tracks with checkpoints, revision plans, and actionable feedback.",
    icon: CircleCheckBig,
  },
  {
    title: "Family-Friendly Flexibility",
    text: "Online scheduling and guided plans help parents and working students stay consistent.",
    icon: Handshake,
  },
];

const studyTracks = [
  "Quran Reading with Tajweed",
  "Quran Memorization (Hifz)",
  "Farz Uloom and Fiqh Basics",
  "Hadith and Seerah Studies",
  "Arabic (Sarf and Nahv)",
  "Masnoon Duayen and Daily Adab",
];

const onboardingSteps = [
  {
    title: "Submit Admission",
    detail:
      "Fill your profile, choose your courses, and share your study goals in one place.",
  },
  {
    title: "Mentor Matching",
    detail:
      "We review your details and align you with a suitable instructor and class format.",
  },
  {
    title: "Start Your Routine",
    detail:
      "Begin classes with clear milestones, revision flow, and regular feedback.",
  },
];

const missionFocusAreas = [
  "Deep Islamic learning: Quran, Hadith, Fiqh, Seerah, adab, and character.",
  "World-ready learning: language, analytical thinking, communication, and responsible technology use.",
  "A unified model where deen and dunya are studied together with purpose and discipline.",
];

const goldenAgeContributions = [
  "Algebra and algorithmic foundations (Al-Khwarizmi)",
  "Optics and experimental method (Ibn al-Haytham)",
  "Advanced medicine and clinical texts (Ibn Sina, Al-Razi)",
  "Surgical instruments and procedures (Al-Zahrawi)",
  "Astronomical observatories and precise star catalogs",
  "Navigation tools including improved astrolabe systems",
  "Early engineering automation and mechanical design (Al-Jazari)",
  "Chemistry and laboratory process refinement",
];

const quranLearningVerses = [
  {
    arabic: "اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
    urdu: "پڑھیے اپنے رب کے نام سے جس نے پیدا کیا۔",
    meaning:
      "Revelation began with the command to read, establishing learning as a sacred act.",
    reference: "Surah Al-Alaq (96:1)",
  },
  {
    arabic: "وَقُلْ رَبِّ زِدْنِي عِلْمًا",
    urdu: "اور دعا کریں: اے میرے رب! میرے علم میں اضافہ فرما۔",
    meaning:
      "A believer is taught to keep asking Allah for growth in beneficial knowledge.",
    reference: "Surah Taha (20:114)",
  },
  {
    arabic:
      "قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ",
    urdu: "کہہ دیجیے: کیا جاننے والے اور نہ جاننے والے برابر ہو سکتے ہیں؟",
    meaning:
      "The Quran highlights the elevated rank of people who seek and live by knowledge.",
    reference: "Surah Az-Zumar (39:9)",
  },
];

const About = () => {
  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(127,29,29,0.10),_transparent_36%),linear-gradient(180deg,#fff7ed_0%,#ffffff_44%,#fff1f2_100%)] pb-16">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />

      <section className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-14 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-20">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-red-800">
            <Sparkles className="h-4 w-4" />
            About Quran Scholars
          </div>

          <h1 className="text-3xl font-extrabold leading-tight text-red-950 md:text-5xl">
            A modern Islamic learning platform rooted in Quran and Sunnah
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
            Quran Scholars helps families and individuals build a disciplined
            learning routine through live teaching, guided revision, and clear
            progress tracking. We are building a generation that is grounded in
            Quran and Sunnah while fully prepared to contribute to the modern
            world with knowledge, ethics, and skill.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/20 transition hover:bg-red-800"
            >
              Start Admission
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-white px-6 py-3 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-red-100 bg-white/90 p-4 shadow-[0_24px_70px_-35px_rgba(127,29,29,0.55)] backdrop-blur-sm">
          <img
            src={ChildWithQuran}
            alt="Student learning Quran"
            className="h-[320px] w-full rounded-2xl object-cover"
          />
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-red-50 p-3">
              <p className="text-xs uppercase tracking-[0.13em] text-red-700">
                Teaching Style
              </p>
              <p className="mt-1 text-sm font-semibold text-red-900">
                Live, guided, feedback-focused
              </p>
            </div>
            <div className="rounded-xl bg-amber-50 p-3">
              <p className="text-xs uppercase tracking-[0.13em] text-amber-700">
                Core Focus
              </p>
              <p className="mt-1 text-sm font-semibold text-amber-900">
                Tajweed, understanding, character
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-14 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map(({ icon: Icon, label, value, detail }) => (
            <article
              key={label}
              className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm"
            >
              <Icon className="h-5 w-5 text-red-700" />
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-slate-500">
                {label}
              </p>
              <p className="mt-1 text-xl font-bold text-red-950">{value}</p>
              <p className="mt-1 text-sm text-slate-600">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 md:px-6">
        <div className="rounded-3xl border border-red-100 bg-white p-6 md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
            <ShieldCheck className="h-4 w-4" />
            Mission and Legacy
          </div>

          <h2 className="mt-4 text-2xl font-bold text-red-950 md:text-3xl">
            Strong Islamic foundation with world-ready excellence
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-700 md:text-base">
            For decades, many Muslims rightly focused on Islamic instruction and
            protected faith, identity, and character. Today, the world has
            changed. In the age of technology and global knowledge systems, we
            believe students should receive deep Islamic scholarship together
            with high-quality contemporary education. The Islamic Golden Age
            shows that this combined model is part of our true heritage.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <h3 className="text-lg font-bold text-slate-900">
                Our Education Focus
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {missionFocusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-red-100 bg-gradient-to-b from-white to-red-50/40 p-5">
              <h3 className="text-lg font-bold text-slate-900">
                Islamic Golden Age Contributions
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {goldenAgeContributions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 md:px-6">
        <div className="rounded-3xl border border-red-100 bg-white p-6 md:p-8">
          <div className="flex w-60 mx-auto items-center justify-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
            <BookOpen className="h-4 w-4" />
            Quran and Learning
          </div>
          <h2 className="mt-4 text-center text-2xl font-bold text-red-950 md:text-3xl">
            Islamic foundations for education
          </h2>
          <p
            className="font-urdu-script mt-6 text-xl leading-[2.7rem] text-slate-700 md:text-2xl md:leading-[3rem]"
            dir="rtl"
            lang="ur"
          >
            علم اسلام میں عبادت کا راستہ ہے۔ ہمارا مقصد یہی ہے کہ سیکھنے کا سفر
            قرآن و سنت کی روشنی میں مضبوط اور باعمل بنے۔
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {quranLearningVerses.map((verse) => (
              <article
                key={verse.reference}
                className="group rounded-2xl border border-red-100 bg-gradient-to-b from-white to-red-50/30 p-5 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-red-100/60"
              >
                <p
                  className="font-arabic-script text-right text-3xl leading-[2.8rem] text-slate-900 md:text-4xl md:leading-[3.4rem]"
                  dir="rtl"
                >
                  {verse.arabic}
                </p>
                <p
                  className="font-urdu-script mt-3 text-right text-xl leading-[2.8rem] text-slate-700 transition duration-300 group-hover:text-slate-800 md:text-2xl md:leading-[3rem]"
                  dir="rtl"
                >
                  {verse.urdu}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {verse.meaning}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-red-700">
                  {verse.reference}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-14 md:px-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-red-100 bg-white p-6 md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
            <BookOpen className="h-4 w-4" />
            What Makes Us Different
          </div>
          <div className="mt-6 grid gap-4">
            {pillars.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-red-100 p-4"
              >
                <div className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 text-red-700" />
                  <div>
                    <h3 className="text-base font-semibold text-red-950">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-red-100 bg-white p-6 md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
            <GraduationCap className="h-4 w-4" />
            Popular Learning Tracks
          </div>

          <div className="mt-6 grid gap-3">
            {studyTracks.map((course) => (
              <div
                key={course}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-3"
              >
                <CircleCheckBig className="h-4 w-4 text-red-700" />
                <span className="text-sm font-medium text-slate-700">
                  {course}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-red-100 bg-red-50/70 p-4 text-sm leading-relaxed text-slate-700">
            These tracks align with our admission flow and can be customized by
            age, level, and learning goal.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 md:px-6">
        <div className="rounded-3xl border border-red-100 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-bold text-red-950 md:text-3xl">
            Your Journey with Quran Scholars
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600 md:text-base">
            A straightforward workflow designed to keep learning smooth from
            first application to regular classes.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {onboardingSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-red-100 bg-gradient-to-b from-white to-red-50/30 p-5"
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-700 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-base font-semibold text-red-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl border border-red-200 bg-red-900 px-6 py-8 text-white md:px-10 md:py-10">
          <h2 className="text-2xl font-bold md:text-3xl">
            Ready to begin your learning plan?
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-red-100 md:text-base">
            Submit your admission profile and we will help you choose the best
            track for your schedule, level, and goals.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/admission"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-red-900 transition hover:bg-red-100"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
