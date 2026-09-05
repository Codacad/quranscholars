import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpenCheck,
  HeartHandshake,
  Laptop2,
  Radio,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import MarketingHero from "@/components/marketing/MarketingHero.jsx";
import SectionIntro from "@/components/marketing/SectionIntro.jsx";
import learningIllustration from "@/assets/images/seeking-knowledge.svg";

const principles = [
  {
    title: "Faithful foundations",
    description: "Learning is rooted in the Quran, authentic Sunnah, sound scholarship, and respectful student conduct.",
    icon: BookOpenCheck,
  },
  {
    title: "Clear teaching",
    description: "Complex subjects are organised into understandable lessons, practice, and practical next steps.",
    icon: Sparkles,
  },
  {
    title: "Human support",
    description: "Students can access guidance when choosing a path and accountability while progressing through it.",
    icon: HeartHandshake,
  },
  {
    title: "Safe learning",
    description: "Respect, privacy, age-aware experiences, and transparent expectations shape every program.",
    icon: ShieldCheck,
  },
];

const journey = [
  { step: "01", title: "Choose a goal", detail: "Explore the catalog or ask our learner-support team for guidance." },
  { step: "02", title: "Select your format", detail: "Learn independently or proceed with scheduled teacher-led study." },
  { step: "03", title: "Build consistency", detail: "Follow a clear sequence, keep progress visible, and use support when needed." },
];

const About = () => (
  <main className="bg-[#fbfcfa] text-[#172b24]">
    <MarketingHero
      eyebrow="About QuranScholar"
      title="Islamic learning designed for real life."
      description="QuranScholar is an online learning platform for students and families who want trustworthy Islamic education with modern structure, flexible access, and meaningful teacher support."
      urdu={{
        title: "اسلامی تعلیم جو آج کی زندگی اور ضروریات کے لیے ترتیب دی گئی ہے",
        description: "قرآن اسکالر طلبہ اور خاندانوں کے لیے ایک آن لائن تعلیمی پلیٹ فارم ہے، جہاں معتبر اسلامی علوم کو منظم نصاب، آسان رسائی اور اساتذہ کی رہنمائی کے ساتھ پیش کیا جاتا ہے۔",
      }}
      icon={BookOpenCheck}
      primaryAction={{ to: "/courses", label: "Explore courses" }}
      secondaryAction={{ to: "/mission", label: "Read our mission" }}
      highlights={[
        { label: "Study your way", value: "Self-paced lessons and live instructor-led cohorts" },
        { label: "Learn with purpose", value: "Quran, Tajweed, Islamic studies, and family learning" },
        { label: "Stay supported", value: "Admissions guidance and learner-focused services" },
      ]}
      labelledBy="about-title"
    />

    <section className="px-4 py-14 sm:px-6 sm:py-18" aria-labelledby="about-platform-title">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(18rem,.72fr)_minmax(0,1.28fr)] lg:items-center">
        <div className="relative overflow-hidden rounded-2xl bg-[#e6f2ed] p-8 sm:p-10">
          <div className="absolute -right-16 -top-16 size-44 rounded-full bg-[#f4c95d]/20" aria-hidden="true" />
          <img src={learningIllustration} alt="Student building knowledge through online learning" className="relative mx-auto max-h-[24rem] w-full object-contain" />
        </div>
        <div>
          <SectionIntro
            id="about-platform-title"
            eyebrow="The platform"
            title="A focused place to learn, practise, and progress."
            description="We bring course discovery, structured lessons, live learning, and learner support into one clear experience. The aim is simple: make beneficial knowledge easier to begin and easier to sustain."
          />
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-[#dfe6e2] bg-white p-5">
              <Laptop2 className="size-5 text-primary" />
              <h3 className="mt-4 font-black">Self-paced study</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-[#687970]">Start immediately, follow lessons in order, and return when your schedule allows.</p>
            </article>
            <article className="rounded-2xl border border-[#dfe6e2] bg-white p-5">
              <Radio className="size-5 text-primary" />
              <h3 className="mt-4 font-black">Live guided study</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-[#687970]">Join scheduled cohorts for direct teaching, questions, and accountable progress.</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-[#e1e7e3] bg-white px-4 py-14 sm:px-6 sm:py-18" aria-labelledby="principles-title">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          id="principles-title"
          eyebrow="What guides us"
          title="Standards learners should be able to feel."
          description="A professional LMS needs more than polished screens. These principles shape our content, programs, and support decisions."
        />
        <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-[#dfe6e2] bg-[#dfe6e2] sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ title, description, icon: Icon }) => (
            <article key={title} className="bg-[#fbfcfa] p-6 sm:p-7">
              <span className="grid size-11 place-items-center rounded-xl bg-[#e5f2ed] text-primary"><Icon className="size-5" /></span>
              <h3 className="mt-5 text-lg font-black tracking-[-0.02em]">{title}</h3>
              <p className="mt-2 text-sm font-medium leading-7 text-[#687970]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="px-4 py-14 sm:px-6 sm:py-18" aria-labelledby="journey-title">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,.75fr)_minmax(22rem,1.25fr)]">
        <div>
          <SectionIntro
            id="journey-title"
            eyebrow="From intention to routine"
            title="A simpler way to start learning."
            description="Students should understand what happens next. Our course and support pathways are designed to keep each decision clear."
          />
          <Link to="/services" className="group mt-6 inline-flex items-center gap-2 text-sm font-black text-primary no-underline">Explore learner services <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
        <ol className="grid gap-4">
          {journey.map(({ step, title, detail }) => (
            <li key={step} className="grid grid-cols-[2.75rem_1fr] gap-4 rounded-2xl border border-[#dfe6e2] bg-white p-5 sm:p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-[#0f766e] text-xs font-black text-white">{step}</span>
              <div><h3 className="text-lg font-black tracking-[-0.02em]">{title}</h3><p className="mt-1.5 text-sm font-medium leading-6 text-[#687970]">{detail}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-2xl bg-[#0b3e38] p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#9ed6c8]"><UsersRound className="size-4 text-[#f4c95d]" />Built around learners</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-black tracking-[-0.04em]">Find a learning path you can stay committed to.</h2>
          <p className="mt-3 text-sm font-medium leading-7 text-white/70">Compare both course formats, or speak with us if you need help choosing.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/courses" className="group inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#f4c95d] px-5 text-sm font-black text-[#11342e] no-underline">Browse courses <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
          <Link to="/contact" className="inline-flex min-h-12 items-center rounded-lg border border-white/20 bg-white/10 px-5 text-sm font-black text-white no-underline">Contact us</Link>
        </div>
      </div>
    </section>
  </main>
);

export default About;
