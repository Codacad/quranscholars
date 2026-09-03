import { mockRecordedCourses } from "@/features/recorded-courses/data/mockRecordedCourses.js";
import { adaptRecordedCourse } from "@/features/recorded-courses/model/recordedCourseAdapter.js";

// Temporary data boundary: replace these repository reads with RTK Query hooks
// and keep the adapter as transformResponse when the recorded-course API lands.
const courses = mockRecordedCourses.map(adaptRecordedCourse);

const sortCourses = (items, sort) => {
  const copy = [...items];
  if (sort === "rating") return copy.sort((a, b) => b.rating - a.rating);
  if (sort === "newest") return copy.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  if (sort === "price-low") return copy.sort((a, b) => a.price.current - b.price.current);
  return copy.sort((a, b) => b.totalStudents - a.totalStudents);
};

const getRecordedCourses = ({ search = "", category = "All", level = "All", sort = "popular" } = {}) => {
  const term = search.trim().toLowerCase();
  const filtered = courses.filter((course) => {
    const searchable = [course.title, course.shortDescription, course.category, course.instructor.name, ...course.tags]
      .join(" ")
      .toLowerCase();
    return (
      (!term || searchable.includes(term)) &&
      (category === "All" || course.category === category) &&
      (level === "All" || course.level === level)
    );
  });
  return sortCourses(filtered, sort);
};

const getRecordedCourseBySlug = (slug) => courses.find((course) => course.slug === slug) || null;

const getFeaturedRecordedCourses = (limit = 4) => courses.filter((course) => course.featured).slice(0, limit);

const getRelatedRecordedCourses = (course, limit = 3) =>
  courses
    .filter((item) => item.id !== course?.id)
    .sort((a, b) => Number(b.category === course?.category) - Number(a.category === course?.category))
    .slice(0, limit);

const recordedCourseCategories = ["All", ...new Set(courses.map((course) => course.category))];
const recordedCourseLevels = ["All", "Beginner", "Intermediate", "Advanced", "All levels"];

export {
  getFeaturedRecordedCourses,
  getRecordedCourseBySlug,
  getRecordedCourses,
  getRelatedRecordedCourses,
  recordedCourseCategories,
  recordedCourseLevels,
};
