export const courseOverview = (courseName, courses) => {
  let course = courses.find((course) => course.name === courseName);
  if (!course) {
    return {
      error: "Course not found",
    };
  }
  return course;
};
