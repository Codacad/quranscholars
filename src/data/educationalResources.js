import {
    FiBookOpen,
    FiDownload,
    FiGlobe,
    FiFileText,
    FiFilm,
    FiLayers,

} from "react-icons/fi";
export const resourceSections = [
    {
        title: "Qur'an & Tafsir",
        desc: "Classical and contemporary exegesis, thematic charts, and memorization planners.",
        icon: FiBookOpen,
        badge: "PDF + Slides",
    },
    {
        title: "Hadith & Seerah",
        desc: "Curated narrations with commentary, Seerah timelines, and quick-reference cards.",
        icon: FiFileText,
        badge: "Guides",
    },
    {
        title: "Fiqh & Practical Rulings",
        desc: "Case studies, madhhab comparisons, and step-by-step worship checklists.",
        icon: FiLayers,
        badge: "Checklists",
    },
    {
        title: "Arabic & Tajweed",
        desc: "Grammar primers, morphology drills, tajweed rule sheets, and recitation trackers.",
        icon: FiGlobe,
        badge: "Workbooks",
    },
    {
        title: "Media Library",
        desc: "Short explainer videos, audio recitations, and annotated slides for visual learners.",
        icon: FiFilm,
        badge: "Audio/Video",
    },
    {
        title: "Templates & Tools",
        desc: "Flashcards, spaced-repetition decks, reflection journals, and syllabus templates.",
        icon: FiDownload,
        badge: "Templates",
    },
];