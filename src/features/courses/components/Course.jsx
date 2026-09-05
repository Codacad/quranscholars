import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Clock3,
  IndianRupee,
  Star,
} from "lucide-react";

const priceFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("en-IN");

const Course = ({ course }) => {
  const { pathname } = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const priceAmount = Number(course?.price?.amount || 0);
  const discount = Number(course?.price?.discount || 0);
  const finalPrice = Math.max(0, priceAmount - discount);
  const hasPrice = course?.price?.amount !== undefined;
  const durationText =
    course?.duration?.value && course?.duration?.unit
      ? course.duration.value + " " + course.duration.unit
      : "Flexible pace";
  const detailsPath = pathname.startsWith("/services")
    ? "/services/courses/" + (course?.slug || "")
    : "/courses/live/" + (course?.slug || "");
  const description =
    course?.description ||
    course?.overview?.description ||
    "Build understanding through structured lessons, guided practice, and clear learning outcomes.";

  const priceLabel = !hasPrice
    ? "View pricing"
    : finalPrice === 0
      ? "Free"
      : numberFormatter.format(finalPrice);

  return (
    <motion.article
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#dfe6e2] bg-white shadow-[0_10px_32px_rgba(21,54,44,.055)] transition-[border-color,box-shadow] duration-300 hover:border-[#bfd1c9] hover:shadow-[0_22px_52px_rgba(21,54,44,.11)]"
      variants={
        shouldReduceMotion
          ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
          : {
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }
      }
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        className="relative block aspect-[16/10] overflow-hidden bg-[#dfece7] no-underline"
        to={detailsPath}
        aria-label={"View " + (course?.title || "course")}
      >
        {course?.thumbnail ? (
          <img
            className="size-full object-cover transition duration-500 group-hover:scale-[1.035]"
            src={course.thumbnail}
            alt=""
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="grid size-full place-items-center bg-[linear-gradient(135deg,#d8ebe4,#eef4e9)] text-primary">
            <BookOpen className="size-12 opacity-60" />
          </span>
        )}
        <span
          className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(4,29,25,.52)_100%)]"
          aria-hidden="true"
        />
        <span className="absolute left-4 top-4 inline-flex min-h-7 items-center rounded-full border border-white/40 bg-white/90 px-3 text-[0.66rem] font-black uppercase tracking-[0.1em] text-[#204139] shadow-sm backdrop-blur">
          {course?.level || "All levels"}
        </span>
        <span className="absolute right-4 top-4 inline-flex min-h-7 items-center rounded-full bg-[#0b3e38] px-3 text-[0.66rem] font-black uppercase tracking-[0.1em] text-white shadow-sm">
          Live course
        </span>
        {discount > 0 && priceAmount > 0 && (
          <span className="absolute bottom-4 right-4 rounded-full bg-[#f4c95d] px-3 py-1.5 text-[0.68rem] font-black text-[#17372f] shadow-sm">
            Save {priceFormatter.format(discount)}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.13em] text-primary">
            {course?.category || "Islamic studies"}
          </p>
          {course?.rating && (
            <div className="flex shrink-0 items-center gap-1.5 text-xs font-extrabold text-[#485b53]">
              <Star className="size-3.5 fill-[#e9b93f] text-[#e9b93f]" />
              {course.rating}
            </div>
          )}
        </div>

        <h3 className="mt-3 text-balance font-display text-xl font-black leading-[1.25] tracking-[-0.025em] text-[#1b3028]">
          {course?.title || "Untitled course"}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm font-medium leading-6 text-[#6a7872]">
          {description}
        </p>

        <dl className="mt-5 grid grid-cols-2 gap-2 border-y border-[#edf1ef] py-4 text-xs font-bold text-[#68766f]">
          <div className="flex items-center gap-2">
            <Clock3 className="size-4 shrink-0 text-primary" />
            <dt className="sr-only">Duration</dt>
            <dd className="truncate">{durationText}</dd>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 className="size-4 shrink-0 text-primary" />
            <dt className="sr-only">Level</dt>
            <dd className="truncate">{course?.level || "All levels"}</dd>
          </div>
        </dl>

        <div className="mt-auto flex items-end justify-between gap-4 pt-5">
          <div>
            <p className="text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#8a9791]">
              Course fee
            </p>
            <div className="mt-1 flex items-baseline gap-2">
              <p className="flex items-center text-lg font-black text-[#1c342b]">
                {hasPrice && finalPrice > 0 && (
                  <IndianRupee className="size-4" aria-hidden="true" />
                )}
                {priceLabel}
              </p>
              {discount > 0 && priceAmount > finalPrice && (
                <p className="text-xs font-bold text-[#98a39e] line-through">
                  {priceFormatter.format(priceAmount)}
                </p>
              )}
            </div>
          </div>
          <Link
            className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#e8f3ef] px-4 text-xs font-black text-primary no-underline transition group-hover:bg-primary group-hover:text-white"
            to={detailsPath}
          >
            View course
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default Course;
