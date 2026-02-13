import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Atom,
  BookOpenCheck,
  Brain,
  Compass,
  ExternalLink,
  FlaskConical,
  Microscope,
  Orbit,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const missionPillars = [
  {
    title: "Integrated Education Model",
    detail:
      "We develop students who are grounded in Quran and Sunnah and also equipped for modern academic and professional excellence.",
    icon: BookOpenCheck,
  },
  {
    title: "Confident Muslim Contribution",
    detail:
      "Our goal is to produce people who can lead with ethics, solve real-world problems, and contribute positively to society.",
    icon: Brain,
  },
  {
    title: "Legacy to Leadership",
    detail:
      "We revive the spirit of the Islamic Golden Age by pairing disciplined faith with scientific curiosity, innovation, and service.",
    icon: Sparkles,
  },
];

const inventions = [
  {
    name: "Algebra (Al-Jabr)",
    inventor: "Muhammad ibn Musa al-Khwarizmi",
    period: "c. 820 CE",
    todayUse:
      "Core of engineering, computer science, encryption, data analysis, finance, and school mathematics worldwide.",
    importance:
      "Algebra gives the language of modern problem-solving and quantitative reasoning across nearly every technical field.",
    references: [
      {
        label: "Wikipedia: Al-Khwarizmi",
        url: "https://en.wikipedia.org/wiki/Al-Khwarizmi",
      },
      {
        label: "Wikipedia: Al-Jabr",
        url: "https://en.wikipedia.org/wiki/Al-Jabr",
      },
      {
        label: "Britannica: al-Khwarizmi",
        url: "https://www.britannica.com/biography/al-Khwarizmi",
      },
    ],
    icon: Atom,
  },
  {
    name: "Algorithmic Method",
    inventor: "Muhammad ibn Musa al-Khwarizmi",
    period: "9th century CE",
    todayUse:
      "Foundation of software, search engines, AI systems, navigation apps, and digital automation.",
    importance:
      "Algorithms power modern computing. Without them, scalable software, AI, and digital infrastructure cannot function.",
    references: [
      {
        label: "Wikipedia: Al-Khwarizmi",
        url: "https://en.wikipedia.org/wiki/Al-Khwarizmi",
      },
      {
        label: "Britannica: al-Khwarizmi",
        url: "https://www.britannica.com/biography/al-Khwarizmi",
      },
    ],
    icon: Brain,
  },
  {
    name: "Camera Obscura and Experimental Optics",
    inventor: "Hasan Ibn al-Haytham",
    period: "c. 1021 CE",
    todayUse:
      "Principles used in modern cameras, optical engineering, imaging devices, and scientific experimentation.",
    importance:
      "His optics work strengthened the scientific method and transformed how vision, light, and imaging are understood today.",
    references: [
      {
        label: "Wikipedia: Ibn al-Haytham",
        url: "https://en.wikipedia.org/wiki/Ibn_al-Haytham",
      },
    ],
    icon: Microscope,
  },
  {
    name: "Canon of Medicine",
    inventor: "Ibn Sina (Avicenna)",
    period: "c. 1025 CE",
    todayUse:
      "Influenced medical education, diagnostics, and clinical organization in hospitals and universities.",
    importance:
      "It helped standardize medical teaching and clinical structure, shaping long-term development of formal medicine.",
    references: [
      {
        label: "Wikipedia: The Canon of Medicine",
        url: "https://en.wikipedia.org/wiki/The_Canon_of_Medicine",
      },
      {
        label: "Wikipedia: Avicenna",
        url: "https://en.wikipedia.org/wiki/Avicenna",
      },
    ],
    icon: ShieldCheck,
  },
  {
    name: "Surgical Instruments and Procedures",
    inventor: "Abu al-Qasim al-Zahrawi",
    period: "c. 1000 CE",
    todayUse:
      "Basis for many modern surgical tools and practical surgical training methods.",
    importance:
      "Systematic surgical instruments and method-based training are central to safe surgery even now.",
    references: [
      {
        label: "Wikipedia: Al-Zahrawi",
        url: "https://en.wikipedia.org/wiki/Al-Zahrawi",
      },
      {
        label: "Wikipedia: Al-Tasrif",
        url: "https://en.wikipedia.org/wiki/Al-Tasrif",
      },
    ],
    icon: FlaskConical,
  },
  {
    name: "Hospital Clinical Practice and Case Methods",
    inventor: "Al-Razi (Rhazes)",
    period: "9th-10th century CE",
    todayUse:
      "Clinical observation, case documentation, and evidence-guided treatment in modern medicine.",
    importance:
      "Case-based observation remains one of the strongest foundations for diagnosis and treatment quality.",
    references: [
      {
        label: "Britannica: al-Razi",
        url: "https://www.britannica.com/biography/al-Razi",
      },
      {
        label: "Wikipedia: Al-Razi",
        url: "https://en.wikipedia.org/wiki/Al-Razi",
      },
    ],
    icon: BookOpenCheck,
  },
  {
    name: "Mechanical Automation and Programmable Devices",
    inventor: "Al-Jazari",
    period: "1206 CE",
    todayUse:
      "Conceptual roots for robotics, automation systems, mechanical engineering, and control mechanisms.",
    importance:
      "Automation design principles from this tradition continue into robotics, manufacturing, and control systems.",
    references: [
      {
        label: "Wikipedia: Ismail al-Jazari",
        url: "https://en.wikipedia.org/wiki/Ismail_al-Jazari",
      },
      {
        label: "National Geographic: Al-Jazari",
        url: "https://www.nationalgeographic.com/history/history-magazine/article/ismail-al-jazari-muslim-inventor-called-father-robotics",
      },
    ],
    icon: Orbit,
  },
  {
    name: "Astrolabe Advancements and Precise Navigation Tools",
    inventor: "Developed by multiple Muslim scholars",
    period: "8th-13th centuries CE",
    todayUse:
      "Contributed to celestial navigation, mapping, surveying, and later global maritime travel.",
    importance:
      "Precise navigation tools were essential for astronomy, travel, trade, and timekeeping development.",
    references: [
      {
        label: "Wikipedia: Astrolabe",
        url: "https://en.wikipedia.org/wiki/Astrolabe",
      },
    ],
    icon: Compass,
  },
];

const Mission = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-rose-50 pb-16 pt-12">
      <div className="pointer-events-none absolute -left-28 top-8 h-80 w-80 rounded-full bg-red-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl" />

      <section className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl border border-red-100 bg-white/90 p-6 shadow-sm backdrop-blur md:p-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-red-800">
            <Sparkles className="h-4 w-4" />
            Our Mission
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Rebuilding an Ummah that leads in deen and in the modern world
          </h1>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 md:text-base">
            For decades, many Muslims rightly prioritized Islamic learning and
            preserved deen with sincerity. That was a noble and important path.
            Today, in an era of technology and global systems, our mission is to
            carry that same Islamic strength while adding excellence in
            language, science, technology, and professional education. We teach
            Quran, Sunnah, and Islamic character with depth, alongside
            world-ready knowledge, so students can live faithfully and lead
            confidently.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl gap-4 px-4 md:grid-cols-3 md:px-6">
        {missionPillars.map(({ title, detail, icon: Icon }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.35,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm"
          >
            <Icon className="h-5 w-5 text-red-700" />
            <h2 className="mt-3 text-lg font-bold text-slate-900">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {detail}
            </p>
          </motion.article>
        ))}
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl border border-red-100 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Islamic Golden Age Inventions and Their Impact Today
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            The Islamic Golden Age was not symbolic history. It produced
            practical breakthroughs that still shape modern life.
          </p>

          <div className="mt-6 grid gap-4">
            {inventions.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.32,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4 md:p-5"
              >
                <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-start">
                  <div>
                    <h3 className="flex items-center gap-2 text-base font-bold text-slate-900 md:text-lg">
                      <item.icon className="h-5 w-5 text-red-700" />
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-700">
                      <span className="font-semibold">Inventor:</span>{" "}
                      {item.inventor}
                    </p>
                    <p className="text-sm text-slate-700">
                      <span className="font-semibold">Period:</span>{" "}
                      {item.period}
                    </p>
                  </div>
                  <span className="inline-flex h-fit rounded-full border border-red-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-red-700">
                    Still used today
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-slate-800">
                    Modern use:
                  </span>{" "}
                  {item.todayUse}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-slate-800">
                    Why important:
                  </span>{" "}
                  {item.importance}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.references.map((reference) => (
                    <a
                      key={reference.url}
                      href={reference.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-red-200 hover:text-red-700"
                    >
                      {reference.label}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl border border-red-200 bg-red-900 px-6 py-8 text-white md:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Join this mission of education, dignity, and contribution
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-red-100 md:text-base">
            We are committed to producing Muslims who are spiritually grounded,
            intellectually strong, and socially useful. Build this future with
            us through learning, support, and action.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/admission"
              className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-red-900 transition hover:bg-red-100"
            >
              Start Learning
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Support the Mission
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
