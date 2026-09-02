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
  Sparkles } from
"lucide-react";

const missionPillars = [
{
  title: "Integrated Education Model",
  detail:
  "We develop students who are grounded in Quran and Sunnah and also equipped for modern academic and professional excellence.",
  icon: BookOpenCheck
},
{
  title: "Confident Muslim Contribution",
  detail:
  "Our goal is to produce people who can lead with ethics, solve real-world problems, and contribute positively to society.",
  icon: Brain
},
{
  title: "Legacy to Leadership",
  detail:
  "We revive the spirit of the Islamic Golden Age by pairing disciplined faith with scientific curiosity, innovation, and service.",
  icon: Sparkles
}];


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
    url: "https://en.wikipedia.org/wiki/Al-Khwarizmi"
  },
  {
    label: "Wikipedia: Al-Jabr",
    url: "https://en.wikipedia.org/wiki/Al-Jabr"
  },
  {
    label: "Britannica: al-Khwarizmi",
    url: "https://www.britannica.com/biography/al-Khwarizmi"
  }],

  icon: Atom
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
    url: "https://en.wikipedia.org/wiki/Al-Khwarizmi"
  },
  {
    label: "Britannica: al-Khwarizmi",
    url: "https://www.britannica.com/biography/al-Khwarizmi"
  }],

  icon: Brain
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
    url: "https://en.wikipedia.org/wiki/Ibn_al-Haytham"
  }],

  icon: Microscope
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
    url: "https://en.wikipedia.org/wiki/The_Canon_of_Medicine"
  },
  {
    label: "Wikipedia: Avicenna",
    url: "https://en.wikipedia.org/wiki/Avicenna"
  }],

  icon: ShieldCheck
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
    url: "https://en.wikipedia.org/wiki/Al-Zahrawi"
  },
  {
    label: "Wikipedia: Al-Tasrif",
    url: "https://en.wikipedia.org/wiki/Al-Tasrif"
  }],

  icon: FlaskConical
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
    url: "https://www.britannica.com/biography/al-Razi"
  },
  {
    label: "Wikipedia: Al-Razi",
    url: "https://en.wikipedia.org/wiki/Al-Razi"
  }],

  icon: BookOpenCheck
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
    url: "https://en.wikipedia.org/wiki/Ismail_al-Jazari"
  },
  {
    label: "National Geographic: Al-Jazari",
    url: "https://www.nationalgeographic.com/history/history-magazine/article/ismail-al-jazari-muslim-inventor-called-father-robotics"
  }],

  icon: Orbit
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
    url: "https://en.wikipedia.org/wiki/Astrolabe"
  }],

  icon: Compass
}];


const Mission = () => {
  return (
    <div>
      <div />
      <div />

      <section>
        <div>
          <span>
            <Sparkles />
            Our Mission
          </span>
          <h1>
            Rebuilding an Ummah that leads in deen and in the modern world
          </h1>
          <p>
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

      <section>
        {missionPillars.map(({ title, detail, icon: Icon }, index) =>
        <motion.article
          key={title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.35,
            delay: index * 0.05,
            ease: "easeOut"
          }}>

          
            <Icon />
            <h2>{title}</h2>
            <p>
              {detail}
            </p>
          </motion.article>
        )}
      </section>

      <section>
        <div>
          <h2>
            Islamic Golden Age Inventions and Their Impact Today
          </h2>
          <p>
            The Islamic Golden Age was not symbolic history. It produced
            practical breakthroughs that still shape modern life.
          </p>

          <div>
            {inventions.map((item, index) =>
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.32,
                delay: index * 0.04,
                ease: "easeOut"
              }}>

              
                <div>
                  <div>
                    <h3>
                      <item.icon />
                      {item.name}
                    </h3>
                    <p>
                      <span>Inventor:</span>{" "}
                      {item.inventor}
                    </p>
                    <p>
                      <span>Period:</span>{" "}
                      {item.period}
                    </p>
                  </div>
                  <span>
                    Still used today
                  </span>
                </div>
                <p>
                  <span>
                    Modern use:
                  </span>{" "}
                  {item.todayUse}
                </p>
                <p>
                  <span>
                    Why important:
                  </span>{" "}
                  {item.importance}
                </p>
                <div>
                  {item.references.map((reference) =>
                <a
                  key={reference.url}
                  href={reference.url}
                  target="_blank"
                  rel="noreferrer noopener">

                  
                      {reference.label}
                      <ExternalLink />
                    </a>
                )}
                </div>
              </motion.article>
            )}
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>
            Join this mission of education, dignity, and contribution
          </h2>
          <p>
            We are committed to producing Muslims who are spiritually grounded,
            intellectually strong, and socially useful. Build this future with
            us through learning, support, and action.
          </p>
          <div>
            <Link
              to="/admission">

              
              Start Learning
            </Link>
            <Link
              to="/donate">

              
              Support the Mission
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>);

};

export default Mission;
