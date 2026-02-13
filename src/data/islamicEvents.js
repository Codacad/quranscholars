export const placeholderImage =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='#fee2e2'/>
          <stop offset='50%' stop-color='#fef3c7'/>
          <stop offset='100%' stop-color='#ffffff'/>
        </linearGradient>
      </defs>
      <rect width='1200' height='800' fill='url(#g)'/>
      <rect x='40' y='40' width='1120' height='720' rx='26' fill='none' stroke='#b91c1c' stroke-opacity='0.25' stroke-width='4'/>
      <text x='50%' y='48%' text-anchor='middle' fill='#7f1d1d' font-family='Arial, sans-serif' font-size='46' font-weight='700'>Event Image Placeholder</text>
      <text x='50%' y='56%' text-anchor='middle' fill='#991b1b' font-family='Arial, sans-serif' font-size='24'>Replace in events[] with your real image URL/path</text>
    </svg>
  `);
export const events = [
    {
        title: "Ramadan Reflection Night",
        date: "March 10, 2026",
        time: "8:30 PM",
        venue: "Online Live Session",
        category: "Seasonal Program",
        summary:
            "Interactive reminders, Quran reflection points, and family guidance for a spiritually focused Ramadan routine.",
        image: placeholderImage,
    },
    {
        title: "Seerah Story Circle",
        date: "April 04, 2026",
        time: "7:00 PM",
        venue: "Community Hall",
        category: "Educational Gathering",
        summary:
            "Narrative based session on key moments from the life of the Prophet with practical lessons for youth and parents.",
        image: placeholderImage,
    },
    {
        title: "Youth Leadership Meetup",
        date: "April 18, 2026",
        time: "6:00 PM",
        venue: "Hybrid",
        category: "Youth Event",
        summary:
            "Workshops on identity, confidence, team collaboration, and Islamic communication for young Muslim leaders.",
        image: placeholderImage,
    },
    {
        title: "Family Eid Connect",
        date: "June 05, 2026",
        time: "5:30 PM",
        venue: "Main Auditorium",
        category: "Family Celebration",
        summary:
            "Community celebration with activities for children, reminders for parents, and meaningful family networking.",
        image: placeholderImage,
    },
];

export const pillars = [
    "Faith-centered gatherings that revive hearts",
    "Age-appropriate educational content for all",
    "Safe community environment with Islamic values",
    "Programs designed for continuity, not one-time inspiration",
];