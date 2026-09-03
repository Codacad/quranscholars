import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

const LearningCourseCard = ({ course, enrollment }) => {
  const completed = enrollment?.completedLessonIds?.length || 0;
  const percentage = course.totalLessons ? Math.round((completed / course.totalLessons) * 100) : 0;
  const lessonId = enrollment?.lastLessonId || course.lessons?.[0]?.id;

  return (
    <article className="overflow-hidden rounded-2xl border border-[#dfe6e2] bg-white shadow-[0_8px_30px_rgba(21,54,44,.055)] sm:grid sm:grid-cols-[15rem_1fr]">
      <div className="aspect-[16/9] bg-[#e4f0eb] sm:aspect-auto">
        {course.thumbnail ? <img src={course.thumbnail} alt={`${course.title} course thumbnail`} className="size-full object-contain p-5" /> : <div className="grid size-full place-items-center"><BookOpen /></div>}
      </div>
      <div className="flex min-w-0 flex-col p-5 sm:p-6">
        <p className="text-[0.68rem] font-black uppercase tracking-[0.12em] text-primary">Self-paced · {course.category}</p>
        <h2 className="mt-2 font-display text-xl font-black leading-tight text-[#192e27]">{course.title}</h2>
        <p className="mt-2 text-sm font-semibold text-[#718079]">{course.instructor.name}</p>
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between gap-4 text-xs font-bold text-[#65756e]">
            <span>{completed} of {course.totalLessons} lessons</span>
            <span>{percentage}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#e8eeeb]" role="progressbar" aria-label={`${course.title} progress`} aria-valuemin="0" aria-valuemax="100" aria-valuenow={percentage}>
            <div className="h-full rounded-full bg-primary transition-[width]" style={{ width: `${percentage}%` }} />
          </div>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#718079]"><CheckCircle2 className="size-4 text-primary" />{percentage === 100 ? "Course complete" : "Progress saved"}</span>
          <Link to={`/learn/${course.slug}/${lessonId}`} className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-black text-white no-underline transition hover:bg-[#0b655e]">
            {percentage ? "Continue learning" : "Start course"}<ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default LearningCourseCard;
