export const liveClasses = [
  {
    id: "live-quran-reading",
    slug: "quran-reading-for-beginners",
    title: "Quran Reading for Beginners",
    shortDescription: "Build confident Quran reading through a guided, instructor-led twelve-week program.",
    category: "Quran Reading",
    level: "Beginner",
    language: "English & Arabic",
    instructorSlug: "abdullah-al-makki",
    instructor: "Sh. Abdullah Al-Makki",
    rating: 4.9,
    students: 28,
    capacity: 32,
    schedule: "Tuesdays & Thursdays",
    time: "7:00 PM",
    timezone: "Asia/Riyadh",
    duration: "60 minutes",
    startDate: "15 September 2026",
    admissionFee: 100,
    monthlyTuition: 250,
    status: "Enrollment Open",
    accessMode: "platform",
    outcomes: ["Read connected Arabic letters with confidence", "Apply harakat and basic elongation", "Recognize common Quranic reading patterns", "Build a consistent teacher-guided practice routine"],
    requirements: ["No prior Arabic study required", "A printed or digital mushaf", "Two hours of weekly practice"],
    curriculum: [
      { week: "Week 1", title: "Arabic letter foundations", topics: ["Letter forms", "Articulation warm-up"], state: "completed" },
      { week: "Week 2", title: "Harakat and connecting letters", topics: ["Short vowels", "Beginning, medial and final forms"], state: "today" },
      { week: "Week 3", title: "Sukoon and basic reading", topics: ["Joining sounds", "Guided Quran reading"], state: "upcoming" },
      { week: "Week 4", title: "Madd foundations", topics: ["Natural elongation", "Practice passages"], state: "upcoming" },
    ],
  },
  {
    id: "live-tajweed-weekly", slug: "weekly-tajweed-class", title: "Weekly Tajweed Circle", shortDescription: "Refine recitation with weekly correction, focused practice and personal feedback.", category: "Tajweed", level: "Intermediate", language: "English", instructorSlug: "maryam-al-hanafi", instructor: "Ustadha Maryam Al-Hanafi", rating: 4.8, students: 18, capacity: 24, schedule: "Saturdays", time: "10:00 AM", timezone: "Asia/Riyadh", duration: "75 minutes", startDate: "19 September 2026", admissionFee: 75, monthlyTuition: 190, status: "Enrollment Open", accessMode: "external", outcomes: ["Recognize recurring recitation errors", "Apply core rules in connected recitation", "Develop confident practice habits"], requirements: ["Comfort reading Arabic text", "Headphones and microphone recommended"], curriculum: [{ week: "Module 1", title: "Makharij review", topics: ["Tongue letters", "Throat letters"], state: "upcoming" }, { week: "Module 2", title: "Noon sakinah", topics: ["Izhar", "Idgham"], state: "upcoming" }],
  },
  {
    id: "live-arabic", slug: "quranic-arabic-live-program", title: "Quranic Arabic Live Program", shortDescription: "Understand high-frequency Quranic vocabulary and foundational sentence patterns with a scholar.", category: "Quranic Arabic", level: "Beginner", language: "English", instructorSlug: "yusuf-rahman", instructor: "Dr. Yusuf Rahman", rating: 4.9, students: 36, capacity: 40, schedule: "Mondays & Wednesdays", time: "8:30 PM", timezone: "Asia/Riyadh", duration: "60 minutes", startDate: "21 September 2026", admissionFee: 150, monthlyTuition: 300, status: "Few Seats", accessMode: "platform", outcomes: ["Recognize common Quranic vocabulary", "Understand basic nominal sentences", "Use morphology patterns as reading tools"], requirements: ["Ability to read Arabic script"], curriculum: [{ week: "Week 1", title: "Words and roots", topics: ["High-frequency words", "Three-letter roots"], state: "upcoming" }],
  },
];

export const instructors = [
  { slug: "abdullah-al-makki", name: "Sh. Abdullah Al-Makki", initials: "AA", title: "Quran & Tajweed Instructor", bio: "An experienced Quran educator focused on clear foundations, careful recitation and sustainable learning habits.", specializations: ["Quran Reading", "Tajweed", "Hifz"], languages: ["Arabic", "English"], experience: "12 years", students: 1240, rating: 4.9, courses: 4 },
  { slug: "maryam-al-hanafi", name: "Ustadha Maryam Al-Hanafi", initials: "MA", title: "Tajweed & Islamic Studies Educator", bio: "Maryam teaches women and families through supportive, structured programs grounded in traditional study.", specializations: ["Tajweed", "Islamic Studies", "Women’s Learning"], languages: ["English", "Arabic", "Urdu"], experience: "9 years", students: 860, rating: 4.8, courses: 3 },
  { slug: "yusuf-rahman", name: "Dr. Yusuf Rahman", initials: "YR", title: "Quranic Arabic Lecturer", bio: "A specialist in making Quranic Arabic accessible through vocabulary, morphology and guided reflection.", specializations: ["Quranic Arabic", "Tafsir", "Arabic Grammar"], languages: ["English", "Arabic"], experience: "15 years", students: 2100, rating: 4.9, courses: 6 },
];

export const assignments = [
  { id: "as-1", title: "Harakat reading practice", context: "Quran Reading for Beginners", type: "Live class", due: "8 Sep, 7:00 PM", status: "Due soon", instructions: "Record a two-minute reading of the assigned practice sheet and attach it for review." },
  { id: "as-2", title: "Makharij reflection", context: "Tajweed Foundations", type: "Recorded course", due: "12 Sep", status: "In progress", instructions: "Identify three articulation points that need focused practice this week." },
  { id: "as-3", title: "Lesson 3 vocabulary", context: "Quranic Arabic Live Program", type: "Live class", due: "16 Sep", status: "Submitted", instructions: "Complete the vocabulary worksheet and use five words in short phrases." },
];

export const resources = [
  { id: "r-1", title: "Arabic letter practice sheet", type: "PDF", size: "1.8 MB", context: "Quran Reading for Beginners" },
  { id: "r-2", title: "Makharij audio guide", type: "Audio", size: "8 min", context: "Tajweed Foundations" },
  { id: "r-3", title: "Weekly study plan", type: "Document", size: "4 pages", context: "Quranic Arabic Live Program" },
];

export const getLiveClass = (slug) => liveClasses.find((item) => item.slug === slug);
export const getInstructor = (slug) => instructors.find((item) => item.slug === slug);
