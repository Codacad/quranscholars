import React, { useState } from "react";
import { CourseContext } from "./CourseContext";
const CourseContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([
    {
      course_id: 1,
      course_name: "Quran with Tajweed",
      instructor: "Maulana Farman Farooqi",
      category: "Quran",
      level: "Intermediate",
      fee: 1200,
      discount: 300,
      duration: "6 Months",
      rating: 4.5,
      reviews: 80,
      students: 150,
      course_image: "/courses/quran-with-tajweed.svg",
      course_overview: {
        course_name: "Quran with Tajweed",
        instructor: "Maulana Farman Farooqi",
        category: "Quran",
        level: "Intermediate",
        fee: 1200,
        discount: 300,
        duration: "6 Months",
        course_image: "/courses/quran-with-tajweed.svg",
        rating: 4.5,
        reviews: 80,
        students: 150,
        what_to_learn: [
          "Master the basic principles of tajweed, including proper articulation points (makharij), characteristics of letters (sifat), and rules of recitation.",
          " Improve your Quranic recitation by learning correct pronunciation and application of tajweed rules.",
          "Understand the rules governing elongation (madd) and proper pauses (waqf) during Quranic recitation.",
          "Identify common mistakes in Quranic recitation and learn how to correct them according to tajweed rules.",
          "Develop fluency in recitation and enhance the beauty of your recitation through the application of tajweed principles.",
        ],
        course_format: [
          "Online Class in Zoom, Meet or Team",
          "24 Week Duration",
          "10 Hours of Consultation",
          "5 Hours Webinar",
          "Teaching Male to Male & Female to Female"
        ],
      },
    },
    {
      course_id: 2,
      course_name: "Noorani Qaida",
      instructor: "Maulana Farman Farooqi",
      category: "Hadith",
      level: "Intermediate",
      fee: 1200,
      discount: 300,
      duration: "3 Months",
      rating: 4.2,
      reviews: 68,
      students: 115,
      course_image: "/courses/hadith.svg",
      course_overview: {
        course_name: "Noorani Qaida",
        instructor: "Maulana Farman Farooqi",
        category: "Hadith",
        level: "Intermediate",
        fee: 1200,
        discount: 300,
        duration: "3 Months",
        course_image: "/courses/hadith.svg",
        rating: 4.2,
        "what-to_learn": [
          "Understand the significance, sources, and classification of Hadith literature.",
          "Explore key Hadith collections and their compilers, such as Sahih Bukhari, Sahih Muslim, and others.",
          "Learn about the principles and methodologies used to authenticate Hadith narrations.",
          "Explore the biographies of prominent Hadith narrators and their contributions to the preservation of Hadith.",
          "Learn about the practical application of Hadith in Islamic jurisprudence, ethics, and personal conduct.",
        ],
        course_format: [
          "Online Class in Zoom, Meet or Team",
          "12 Week Duration",
          "5 Hours of Consultation",
          "2.5 Hours Webinar",
          "Cheking the task",
        ],
      },
    },
    {
      course_id: 3,
      course_name: "Hadith",
      instructor: "Maulana Farman Farooqi",
      category: "Hadith",
      level: "Intermediate",
      fee: 1200,
      discount: 300,
      duration: "3 Months",
      rating: 4.2,
      reviews: 68,
      students: 115,
      course_image: "/courses/hadith.svg",
      course_overview: {
        course_name: "Hadith",
        instructor: "Maulana Farman Farooqi",
        category: "Hadith",
        level: "Intermediate",
        fee: 1200,
        discount: 300,
        duration: "3 Months",
        course_image: "/courses/hadith.svg",
        rating: 4.2,
        "what-to_learn": [
          "Understand the significance, sources, and classification of Hadith literature.",
          "Explore key Hadith collections and their compilers, such as Sahih Bukhari, Sahih Muslim, and others.",
          "Learn about the principles and methodologies used to authenticate Hadith narrations.",
          "Explore the biographies of prominent Hadith narrators and their contributions to the preservation of Hadith.",
          "Learn about the practical application of Hadith in Islamic jurisprudence, ethics, and personal conduct.",
        ],
        course_format: [
          "Online Class in Zoom, Meet or Team",
          "12 Week Duration",
          "5 Hours of Consultation",
          "2.5 Hours Webinar",
          "Cheking the task",
        ],
      },
    },
  ]);
  return (
    <>
      <CourseContext.Provider value={{ courses, setCourses }}>
        {children}
      </CourseContext.Provider>
    </>
  );
};

export default CourseContextProvider;
