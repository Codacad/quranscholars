import { Star } from "lucide-react";

const numberFormatter = new Intl.NumberFormat("en-IN", { notation: "compact" });

const CourseRating = ({ rating = 0, reviews = 0, showReviews = true, light = false }) => (
  <span className={`inline-flex items-center gap-1.5 text-xs font-extrabold ${light ? "text-white/80" : "text-[#4f6059]"}`}>
    <Star className="size-3.5 fill-[#e8b339] text-[#e8b339]" aria-hidden="true" />
    <span>{rating.toFixed(1)}</span>
    {showReviews && <span className={light ? "font-semibold text-white/60" : "font-semibold text-[#7a8781]"}>({numberFormatter.format(reviews)})</span>}
    <span className="sr-only">rating from {reviews} reviews</span>
  </span>
);

export default CourseRating;
