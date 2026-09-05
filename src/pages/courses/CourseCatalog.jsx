import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarCheck,
  Check,
  Clock3,
  PlayCircle,
  Radio,
} from "lucide-react";
import Course from "@/features/courses/components/Course.jsx";
import RecordedCourseCard from "@/features/recorded-courses/components/RecordedCourseCard.jsx";
import RecordedCourseSkeleton from "@/features/recorded-courses/components/RecordedCourseSkeleton.jsx";
import { getFeaturedRecordedCourses } from "@/features/recorded-courses/services/recordedCoursesRepository.js";
import { useGetCoursesQuery } from "@/services/api/courses/courses.api.js";
import UrduCompanion from "@/components/marketing/UrduCompanion.jsx";

const featuredSelfPacedCourses = getFeaturedRecordedCourses(3);

const learningFormats = [
  {
    title: "Self-paced courses",
    eyebrow: "Learn on demand",
    description:
      "Start immediately and follow structured video lessons whenever your schedule allows.",
    icon: PlayCircle,
    to: "/courses/self-paced",
    action: "Explore self-paced courses",
    points: ["Instant course access", "Saved lesson progress", "Learn across devices"],
  },
  {
    title: "Live courses",
    eyebrow: "Learn with an instructor",
    description:
      "Join scheduled classes, ask questions, and grow through direct teacher guidance.",
    icon: Radio,
    to: "/courses/live",
    action: "Explore live courses",
    points: ["Scholar-led sessions", "Accountable study rhythm", "Guided admission pathway"],
  },
];

const CourseCatalog = () => {
  const { data, isLoading, isError } = useGetCoursesQuery({
    page: 1,
    limit: 3,
    sort: "featured",
  });
  const liveCourses = data?.data || [];

  return (
    <main className="bg-[#fbfcfa] text-[#172b24]">
      <section className="relative isolate overflow-hidden bg-[#082f2b] px-4 py-16 text-white sm:px-6 sm:py-22">
        <div className="absolute inset-0 -z-10 opacity-55 [background-image:radial-gradient(circle_at_85%_15%,rgba(122,198,176,.3),transparent_26%),radial-gradient(circle_at_10%_90%,rgba(244,201,93,.13),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,.72fr)] lg:items-center lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#9ed6c8]"><BookOpenCheck className="size-4 text-[#f4c95d]" />QuranScholar course catalog</p>
            <h1 className="mt-5 max-w-4xl text-balance font-display text-[clamp(2.7rem,6vw,5.2rem)] font-black leading-[1.01] tracking-[-0.05em]">One platform. Two ways to learn.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70 sm:text-lg">Choose flexible self-paced study or live instructor guidance. Both experiences follow the same trusted learning standards and stay connected through your QuranScholar account.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/courses/self-paced" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#f4c95d] px-5 text-sm font-black text-[#11342e] no-underline transition hover:bg-[#ffda79]">Browse self-paced <ArrowRight className="size-4" /></Link>
              <Link to="/courses/live" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 text-sm font-black text-white no-underline transition hover:bg-white/15">View live courses <Radio className="size-4 text-[#9ed6c8]" /></Link>
            </div>
          </div>
          <UrduCompanion
            title="ایک ہی پلیٹ فارم، سیکھنے کے دو آسان طریقے"
            description="اپنی سہولت کے مطابق خود رفتار کورس شروع کریں یا استاد کی براہِ راست رہنمائی کے لیے لائیو کلاس منتخب کریں۔ دونوں طریقوں میں منظم اور قابلِ اعتماد تعلیم کو بنیادی اہمیت دی جاتی ہے۔"
          />
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-18" aria-labelledby="choose-format-title">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.16em] text-primary">Choose your learning format</p><h2 id="choose-format-title" className="mt-2 font-display text-3xl font-black tracking-[-0.04em] sm:text-4xl">Learn in the way that fits your life.</h2></div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {learningFormats.map(({ title, eyebrow, description, icon: Icon, to, action, points }) => (
              <article key={title} className="group overflow-hidden rounded-2xl border border-[#dfe6e2] bg-white p-6 shadow-[0_10px_34px_rgba(21,54,44,.055)] transition hover:-translate-y-1 hover:border-[#bfd1c9] hover:shadow-[0_20px_48px_rgba(21,54,44,.1)] sm:p-8">
                <div className="flex items-start gap-4"><span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#e7f3ee] text-primary"><Icon className="size-5" /></span><div><p className="text-[0.68rem] font-black uppercase tracking-[0.13em] text-primary">{eyebrow}</p><h3 className="mt-1 font-display text-2xl font-black tracking-[-0.03em]">{title}</h3></div></div>
                <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-[#65756e]">{description}</p>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">{points.map((point) => <li key={point} className="flex items-start gap-2 text-xs font-bold leading-5 text-[#53665e]"><Check className="mt-0.5 size-3.5 shrink-0 text-primary" strokeWidth={3} />{point}</li>)}</ul>
                <Link to={to} className="mt-7 inline-flex items-center gap-2 text-sm font-black text-primary no-underline">{action}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e1e7e3] bg-white px-4 py-14 sm:px-6 sm:py-18" aria-labelledby="self-paced-featured-title">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-primary">Start immediately</p><h2 id="self-paced-featured-title" className="mt-2 font-display text-3xl font-black tracking-[-0.04em]">Featured self-paced courses</h2></div><Link to="/courses/self-paced" className="inline-flex items-center gap-2 text-sm font-black text-primary no-underline">View all self-paced courses <ArrowRight className="size-4" /></Link></div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{featuredSelfPacedCourses.map((course) => <RecordedCourseCard key={course.id} course={course} />)}</div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-18" aria-labelledby="live-featured-title">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-primary"><CalendarCheck className="size-4" />Scheduled guidance</p><h2 id="live-featured-title" className="mt-2 font-display text-3xl font-black tracking-[-0.04em]">Live instructor-led courses</h2></div><Link to="/courses/live" className="inline-flex items-center gap-2 text-sm font-black text-primary no-underline">View all live courses <ArrowRight className="size-4" /></Link></div>
          {isLoading ? <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 3 }, (_, index) => <RecordedCourseSkeleton key={index} />)}</div> : isError ? <div className="mt-8 rounded-xl border border-[#e1e7e3] bg-white p-7 text-center"><p className="font-black">Live courses are temporarily unavailable.</p><Link to="/courses/live" className="mt-3 inline-flex text-sm font-black text-primary">Open the live catalog</Link></div> : liveCourses.length ? <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{liveCourses.map((course) => <Course key={course._id || course.slug} course={course} />)}</div> : <div className="mt-8 rounded-xl border border-dashed border-[#ccd8d2] bg-white p-8 text-center"><Clock3 className="mx-auto size-6 text-primary" /><p className="mt-3 font-black">New live cohorts are being prepared.</p><p className="mt-1 text-sm font-medium text-[#68766f]">Visit the live catalog for the latest availability.</p></div>}
        </div>
      </section>
    </main>
  );
};

export default CourseCatalog;
