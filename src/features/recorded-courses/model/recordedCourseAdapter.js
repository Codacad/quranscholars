const formatDuration = (totalSeconds = 0) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.round((totalSeconds % 3600) / 60);
  if (!hours) return `${minutes} min`;
  return minutes ? `${hours}h ${minutes}m` : `${hours}h`;
};

const normalizeLesson = (lesson, sectionId, index) => ({
  id: lesson?.id || `${sectionId}-lesson-${index + 1}`,
  title: lesson?.title || `Lesson ${index + 1}`,
  description: lesson?.description || "",
  durationSeconds: Number(lesson?.durationSeconds || 0),
  durationLabel: formatDuration(Number(lesson?.durationSeconds || 0)),
  order: Number(lesson?.order || index + 1),
  previewable: Boolean(lesson?.previewable),
  videoUrl: lesson?.videoUrl || null,
  resources: Array.isArray(lesson?.resources) ? lesson.resources : [],
});

const adaptRecordedCourse = (record = {}) => {
  const sections = (Array.isArray(record.sections) ? record.sections : []).map(
    (section, index) => {
      const id = section?.id || `section-${index + 1}`;
      return {
        id,
        title: section?.title || `Section ${index + 1}`,
        order: Number(section?.order || index + 1),
        lessons: (Array.isArray(section?.lessons) ? section.lessons : []).map(
          (lesson, lessonIndex) => normalizeLesson(lesson, id, lessonIndex),
        ),
      };
    },
  );
  const lessons = sections.flatMap((section) => section.lessons);
  const originalPrice = Number(record?.price?.original ?? record?.originalPrice ?? 0);
  const saleValue = record?.price?.sale ?? record?.salePrice;
  const salePrice = saleValue === null || saleValue === undefined ? null : Number(saleValue);
  const currentPrice = salePrice === null ? originalPrice : salePrice;

  return {
    id: record?._id || record?.id || record?.slug,
    learningType: "recorded",
    title: record?.title || "Untitled course",
    slug: record?.slug || "",
    shortDescription: record?.shortDescription || record?.description || "",
    description: record?.description || record?.shortDescription || "",
    category: record?.category || "Islamic studies",
    instructor: {
      id: record?.instructor?.id || record?.instructor?._id || "",
      name: record?.instructor?.name || "QuranScholar instructor",
      title: record?.instructor?.title || "Instructor",
      bio: record?.instructor?.bio || "",
    },
    thumbnail: record?.thumbnail || null,
    trailerVideo: record?.trailerVideo || record?.trailer || null,
    language: record?.language || "English",
    level: record?.level || "All levels",
    price: {
      original: originalPrice,
      sale: salePrice,
      current: currentPrice,
      currency: record?.price?.currency || record?.currency || "INR",
      discounted: salePrice !== null && salePrice < originalPrice,
    },
    totalDurationSeconds: Number(record?.totalDuration || 0),
    durationLabel: formatDuration(Number(record?.totalDuration || 0)),
    totalSections: Number(record?.totalSections || sections.length),
    totalLessons: Number(record?.totalLessons || lessons.length),
    rating: Number(record?.averageRating || record?.rating || 0),
    totalReviews: Number(record?.totalReviews || 0),
    totalStudents: Number(record?.totalStudents || 0),
    tags: Array.isArray(record?.tags) ? record.tags : [],
    featured: Boolean(record?.featured),
    bestseller: Boolean(record?.bestseller),
    updatedAt: record?.updatedAt || null,
    outcomes: Array.isArray(record?.outcomes) ? record.outcomes : [],
    requirements: Array.isArray(record?.requirements) ? record.requirements : [],
    audience: Array.isArray(record?.audience) ? record.audience : [],
    sections,
    lessons,
  };
};

export { adaptRecordedCourse, formatDuration };
