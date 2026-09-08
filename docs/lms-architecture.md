# QuranScholar learning architecture

## Product vocabulary

- **Subject** is a shared discovery category, such as Tajweed or Quranic Arabic.
- **Course** is an instructor-created video learning product. It owns its details, outcomes, requirements, sections, video lessons, resources, price and access terms.
- **Live class** is an independently published teaching offering. It owns its subject, topics, requirements, instructor, enrollment rules, capacity, timezone and pricing.
- **Session** is one scheduled meeting belonging to a live class. A one-time class has one session; a recurring class has multiple sessions.
- **Classroom** is the learning workspace for an enrolled class, not a public catalog or course player.

A live class does not require a video course. An optional related course link is a recommendation, not an access entitlement or mandatory purchase. Bundles require explicit inclusions and pricing.

## Navigation and routes

| Destination             | Canonical route                | Purpose                                           |
| ----------------------- | ------------------------------ | ------------------------------------------------- |
| Courses                 | `/courses`                     | Searchable video catalog                          |
| Course details          | `/courses/:slug`               | Curriculum, previews, instructor, price and terms |
| Live Classes            | `/live-classes`                | Scheduled teaching catalog                        |
| Class details           | `/live-classes/:slug`          | Topics, requirements, schedule and pricing        |
| My Learning             | `/dashboard/learning`          | Separate Courses and Live Classes views           |
| Course player           | `/learn/:courseSlug/:lessonId` | Recorded lesson playback                          |
| Classroom               | `/classroom/:liveClassSlug`    | Sessions, class outline and class materials       |
| Instructor courses      | `/instructor/courses`          | Video-course management                           |
| Instructor live classes | `/instructor/live-classes`     | Live-class management                             |

`/courses/self-paced` and `/recorded-courses` redirect to `/courses`, including detail URLs. `/courses/live` and `/services/courses` redirect directly to `/live-classes`. Redirects preserve search and hash. Legacy live slugs require a verified migration map when persistent live-class data replaces the fixtures; do not silently resolve unrelated offerings.

Catalog filters use URL state so shared links and browser navigation preserve the selection. Courses navigation must only use the video-course repository, never the legacy live-course API.

## Domain contracts for backend integration

Use stable IDs for relationships and slugs for public URLs. Keep persistence naming migrations separate from public vocabulary changes.

| Entity                | Principal fields / relationships                                                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Subject               | ID, name, slug                                                                                                                                                 |
| Course                | Instructor ID, subject ID, title, description, level, language, outcomes, prerequisites, media, publication status, price, access terms                        |
| Course section        | Course ID, title, ordered lessons                                                                                                                              |
| Video lesson          | Section ID, title, description, order, video asset ID, duration, preview flag, processing status                                                               |
| Live class            | Instructor ID, subject ID, optional related course ID, topics, requirements, language, level, timezone, capacity, enrollment window, price, publication status |
| Session               | Class ID, title, UTC start/end instants, scheduled/completed/cancelled status, private access reference                                                        |
| Enrollment            | Learner ID, offering type and ID, enrollment state, access start/end, purchase reference                                                                       |
| Resource / assignment | Explicit course or class parent ID; optional lesson or session ID                                                                                              |
| Progress / attendance | Learner enrollment ID plus lesson ID / session ID                                                                                                              |

Store session instants in UTC and display them in the class IANA timezone. Recurrence rules generate explicit sessions with stable IDs; topic outline entries are never interpreted as dates. Rescheduling preserves session identity. Cancellation does not delete attendance history.

Course completion is lesson progress; live-class participation is session attendance. Neither implies the other.

## Instructor authoring

Courses: Basics → Course Details → Media → Curriculum → Content → Pricing → Review.

Live classes: Basics → Topics & Requirements → Sessions & Schedule → Class Resources → Enrollment → Pricing → Review.

Live-class authoring must support one session or a recurring schedule without requiring video uploads. Use real subject, language and level options. Publishing requires valid details and price terms; courses additionally require ready video content and classes require a valid schedule and capacity. Use draft → published → archived as the basic lifecycle. Add a separate review state only if editorial approval is a product requirement.

Course pricing must describe the purchase and access duration. Class pricing must explicitly identify total, per-session or recurring tuition, currency, and any admission fee. Never label every class as monthly tuition. Existing demo fixtures currently represent monthly tuition plus admission fees.

## Current implementation and remaining work

Implemented in this architecture pass: video-only catalog and explanatory copy, canonical course links and compatibility redirects, separate navigation, shared My Learning screen with working learning-type selection, live-class outlines separated from demo session records, timezone-aware session display, and distinct instructor authoring labels.

The recorded-course repository, live-class catalog, live enrollments and sessions still use demo data. Existing video enrollment/progress uses browser storage. The instructor wizard remains a UI scaffold; its labels do not constitute persisted creation or publishing. No payment, publishing, backend data migration or authorization implementation is included in this pass.

Before production release, wire these boundaries to persisted APIs, scope resources/assignments to their actual parent IDs, implement server-side pricing and entitlement handling, and verify legacy slug mappings. Public catalog reads must only return published public data. Session meeting credentials must never be included in public class responses.

Authorization is intentionally deferred: public discovery; signed-in personal workspaces; enrolled learning access; owning-instructor management; explicit administrator capabilities. Enforce these rules in APIs as well as route navigation when that phase begins.

## Review checklist

- `/courses` contains video content only; its navigation does not fetch the old live-course API.
- Course links resolve directly to `/courses/:slug`; compatibility routes retain query/hash.
- Search, subject, level, sort and pagination survive URL navigation.
- My Learning shows course progress separately from enrolled live classes.
- Classroom sessions have independent IDs/dates; the class outline has topic descriptions.
- Create course and Create live class are explicit separate actions.
- No screen claims that local/demo authoring is a functioning publishing backend.
