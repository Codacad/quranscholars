import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, BookOpen, Grid3X3, Radio, Search, Sparkles, X } from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect.jsx";
import RecordedCourseCard from "@/features/recorded-courses/components/RecordedCourseCard.jsx";
import RecordedCourseSkeleton from "@/features/recorded-courses/components/RecordedCourseSkeleton.jsx";
import UrduCompanion from "@/components/marketing/UrduCompanion.jsx";
import {
  getRecordedCourses,
  recordedCourseCategories,
  recordedCourseLevels,
} from "@/features/recorded-courses/services/recordedCoursesRepository.js";

const PAGE_SIZE = 8;
const levelOptions = recordedCourseLevels.map((item) => ({
  value: item,
  label: item === "All" ? "All levels" : item,
}));
const sortOptions = [
  { value: "popular", label: "Most popular" },
  { value: "rating", label: "Highest rated" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: low to high" },
];

const RecordedCourses = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get("search") || "");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);
  const isLoading = false;
  const hasError = false;

  const filteredCourses = useMemo(
    () => getRecordedCourses({ search, category, level, sort }),
    [search, category, level, sort],
  );
  const pageCount = Math.max(1, Math.ceil(filteredCourses.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visibleCourses = filteredCourses.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const selectFilter = (setter) => (nextValue) => {
    setter(nextValue);
    setPage(1);
  };

  const hasActiveFilters =
    search || category !== "All" || level !== "All" || sort !== "popular";

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setLevel("All");
    setSort("popular");
    setPage(1);
  };

  return (
    <main className="bg-[#fbfcfa] text-[#172b24]">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#082f2b] px-4 py-16 text-white sm:px-6 sm:py-20">
        <div className="absolute inset-0 -z-10 opacity-50 [background-image:radial-gradient(circle_at_82%_18%,rgba(122,198,176,.28),transparent_27%),radial-gradient(circle_at_15%_80%,rgba(244,201,93,.12),transparent_25%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,.72fr)] lg:items-center lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#9ed6c8]"><Sparkles className="size-4 text-[#f4c95d]" />On-demand learning</div>
            <h1 className="mt-5 max-w-4xl text-balance font-display text-[clamp(2.65rem,5.5vw,5rem)] font-black leading-[1.02] tracking-[-0.045em]">Learn deeply, on your schedule.</h1>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/70 sm:text-lg">Professional self-paced courses in Quran, Tajweed, Hadith, Arabic, and Islamic studies—with structured lessons and progress that is ready when you return.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#self-paced-catalog" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#f4c95d] px-5 text-sm font-black text-[#11342e] no-underline transition hover:bg-[#ffda79]">Browse self-paced courses <ArrowRight className="size-4" /></a>
              <Link to="/courses/live" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 text-sm font-black text-white no-underline transition hover:bg-white/15"><Radio className="size-4 text-[#9ed6c8]" />View live courses</Link>
            </div>
          </div>
          <UrduCompanion
            title="اپنی رفتار سے، اپنے وقت کے مطابق دینی تعلیم حاصل کریں"
            description="قرآن، تجوید، حدیث، عربی اور اسلامی علوم کے منظم اسباق جب چاہیں شروع کریں اور اپنی پیش رفت محفوظ رکھتے ہوئے مسلسل آگے بڑھیں۔"
          />
        </div>
      </section>

      <section id="self-paced-catalog" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">Self-paced course library</p>
              <h2 className="mt-2 font-display text-3xl font-black tracking-[-0.035em] sm:text-4xl">Find your next course</h2>
            </div>
            <p className="inline-flex items-center gap-2 text-sm font-bold text-[#68766f]" aria-live="polite"><Grid3X3 className="size-4 text-primary" />Showing {visibleCourses.length} of {filteredCourses.length} courses</p>
          </div>

          <div className="mt-8 border-y border-[#dfe6e2] py-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <label className="relative min-w-0 flex-1 md:max-w-2xl">
                <span className="sr-only">Search the self-paced course catalog</span>
                <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#718078]" />
                <input
                  className="h-11 w-full rounded-lg border border-[#d8e1dc] bg-white py-2 pl-10 pr-11 text-sm font-semibold text-[#20332c] outline-none transition placeholder:font-medium placeholder:text-[#95a19c] hover:border-[#bdccc5] focus:border-primary focus:ring-3 focus:ring-primary/10"
                  type="search"
                  value={search}
                  onChange={handleSearchChange}
                  placeholder="Search courses, subjects, or instructors"
                />
                {search && (
                  <button type="button" onClick={() => selectFilter(setSearch)("")} className="absolute right-2 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-md border-0 bg-transparent text-[#75837d] transition hover:bg-[#edf2ef] hover:text-[#243a32]" aria-label="Clear search">
                    <X className="size-4" />
                  </button>
                )}
              </label>
              <CustomSelect
                className="w-full md:ml-auto md:w-52"
                menuAlign="right"
                label="Sort"
                value={sort}
                options={sortOptions}
                onChange={selectFilter(setSort)}
              />
            </div>

            <div className="mt-4 flex min-w-0 flex-col gap-3 lg:flex-row lg:items-center">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <span className="shrink-0 text-xs font-extrabold text-[#718078]">Subject:</span>
                <div className="flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {recordedCourseCategories.map((item) => {
                    const isActive = category === item;
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => selectFilter(setCategory)(item)}
                        aria-pressed={isActive}
                        className={`min-h-8 shrink-0 rounded-full border px-3.5 text-xs font-extrabold transition ${isActive ? "border-[#174d42] bg-[#174d42] text-white" : "border-transparent text-[#586861] hover:border-[#d7e0dc] hover:bg-white"}`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center gap-2 sm:justify-end">
                <CustomSelect
                  className="w-full sm:w-48"
                  menuAlign="right"
                  label="Level"
                  value={level}
                  options={levelOptions}
                  onChange={selectFilter(setLevel)}
                />
                {hasActiveFilters && (
                  <button type="button" onClick={clearFilters} className="min-h-11 shrink-0 border-0 bg-transparent px-2 text-xs font-extrabold text-primary transition hover:text-primary-hover">Clear filters</button>
                )}
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{Array.from({ length: 8 }, (_, index) => <RecordedCourseSkeleton key={index} />)}</div>
          ) : hasError ? (
            <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-8 text-center"><h3 className="font-display text-xl font-black text-red-900">We could not load self-paced courses</h3><p className="mt-2 text-sm font-medium text-red-700">Please refresh the page or try again shortly.</p></div>
          ) : visibleCourses.length ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{visibleCourses.map((course) => <RecordedCourseCard key={course.id} course={course} />)}</div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-[#cbd8d1] bg-white p-10 text-center">
              <span className="mx-auto grid size-12 place-items-center rounded-xl bg-[#e8f4f0] text-primary"><BookOpen className="size-5" /></span>
              <h3 className="mt-4 font-display text-xl font-black">No courses match those filters</h3>
              <p className="mt-2 text-sm font-medium text-[#718079]">Try a broader search or clear the selected filters.</p>
              <button type="button" onClick={clearFilters} className="mt-5 min-h-10 rounded-lg border border-[#cfd9d4] bg-white px-4 text-sm font-black text-primary transition hover:bg-[#f1f7f4]">Clear filters</button>
            </div>
          )}

          {pageCount > 1 && (
            <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Self-paced course pages">
              <button type="button" disabled={currentPage === 1} onClick={() => setPage((value) => Math.max(1, value - 1))} className="min-h-10 rounded-lg border border-[#d5ded9] bg-white px-4 text-sm font-black text-[#43554d] disabled:cursor-not-allowed disabled:opacity-45">Previous</button>
              <span className="px-2 text-sm font-bold text-[#68766f]">Page {currentPage} of {pageCount}</span>
              <button type="button" disabled={currentPage === pageCount} onClick={() => setPage((value) => Math.min(pageCount, value + 1))} className="min-h-10 rounded-lg border border-[#d5ded9] bg-white px-4 text-sm font-black text-[#43554d] disabled:cursor-not-allowed disabled:opacity-45">Next</button>
            </nav>
          )}
        </div>
      </section>

      <section className="border-t border-[#dfe6e2] bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-2xl bg-[#0b3e38] p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div><p className="text-xs font-black uppercase tracking-[0.15em] text-[#9ed6c8]">Need direct guidance?</p><h2 className="mt-2 font-display text-2xl font-black">Learn live with a QuranScholar instructor.</h2><p className="mt-2 text-sm font-medium text-white/65">Instructor-led courses use the existing admission and scheduling pathway.</p></div>
          <Link to="/courses/live" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-black text-[#123a33] no-underline">Explore live courses <ArrowRight className="size-4" /></Link>
        </div>
      </section>
    </main>
  );
};

export default RecordedCourses;
