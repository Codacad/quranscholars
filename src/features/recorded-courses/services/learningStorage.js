const STORAGE_KEY = "quranscholar-recorded-learning-v1";
const EVENT_NAME = "quranscholar-learning-updated";

// Frontend-only enrollment/progress state. The public functions intentionally
// mirror the operations the future authenticated learning API will provide.
const defaultState = {
  enrollments: {
    "rc-001": { enrolledAt: "2026-08-12", completedLessonIds: ["tajweed-foundations-recite-with-confidence-s1-l1", "tajweed-foundations-recite-with-confidence-s1-l2", "tajweed-foundations-recite-with-confidence-s1-l3", "tajweed-foundations-recite-with-confidence-s2-l1"], lastLessonId: "tajweed-foundations-recite-with-confidence-s2-l2" },
    "rc-003": { enrolledAt: "2026-08-20", completedLessonIds: ["understanding-hadith-practical-introduction-s1-l1"], lastLessonId: "understanding-hadith-practical-introduction-s1-l2" },
    "rc-013": { enrolledAt: "2026-08-28", completedLessonIds: [], lastLessonId: "stories-of-the-prophets-for-families-s1-l1" },
  },
};

const cloneDefaultState = () => JSON.parse(JSON.stringify(defaultState));

const readLearningState = () => {
  if (typeof window === "undefined") return cloneDefaultState();
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value ? JSON.parse(value) : cloneDefaultState();
  } catch {
    return cloneDefaultState();
  }
};

const writeLearningState = (state) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent(EVENT_NAME));
};

const getEnrollment = (courseId) => readLearningState().enrollments?.[courseId] || null;

const enrollInCourse = (course, lessonId) => {
  const state = readLearningState();
  state.enrollments = {
    ...state.enrollments,
    [course.id]: state.enrollments?.[course.id] || {
      enrolledAt: new Date().toISOString(),
      completedLessonIds: [],
      lastLessonId: lessonId || course.lessons?.[0]?.id || null,
    },
  };
  writeLearningState(state);
  return state.enrollments[course.id];
};

const updateCourseProgress = (courseId, lessonId, completed = true) => {
  const state = readLearningState();
  const enrollment = state.enrollments?.[courseId];
  if (!enrollment) return null;
  const completedIds = new Set(enrollment.completedLessonIds || []);
  if (completed) completedIds.add(lessonId);
  else completedIds.delete(lessonId);
  state.enrollments[courseId] = {
    ...enrollment,
    lastLessonId: lessonId,
    completedLessonIds: [...completedIds],
  };
  writeLearningState(state);
  return state.enrollments[courseId];
};

const subscribeToLearning = (listener) => {
  window.addEventListener(EVENT_NAME, listener);
  window.addEventListener("storage", listener);
  return () => {
    window.removeEventListener(EVENT_NAME, listener);
    window.removeEventListener("storage", listener);
  };
};

export { enrollInCourse, getEnrollment, readLearningState, subscribeToLearning, updateCourseProgress };
