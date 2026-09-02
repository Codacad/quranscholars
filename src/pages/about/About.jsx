import { Link } from "react-router-dom";
import ChildWithQuran from "/child-with-quran.svg";
import {
  ArrowRight,
  BookOpen,
  CircleCheckBig,
  Clock3,
  Globe,
  GraduationCap,
  Handshake,
  Heart,
  ShieldCheck,
  Sparkles,
  Users } from
"lucide-react";

const impactStats = [
{
  label: "Live Mentorship",
  value: "1:1 + Group",
  detail: "Flexible sessions for kids and adults",
  icon: Users
},
{
  label: "Global Access",
  value: "Across Time Zones",
  detail: "Structured classes that fit family routines",
  icon: Globe
},
{
  label: "Review Cycle",
  value: "24-48 Hours",
  detail: "Admission review and onboarding response",
  icon: Clock3
},
{
  label: "Learning Tracks",
  value: "10+ Courses",
  detail: "Quran, Hadith, Fiqh, language, and more",
  icon: GraduationCap
}];


const pillars = [
{
  title: "Authentic Knowledge",
  text: "Curriculum is built around Quran and Sunnah with practical, age-appropriate delivery.",
  icon: ShieldCheck
},
{
  title: "Human-Centered Teaching",
  text: "Teachers focus on tajweed quality, confidence, and spiritual growth at a sustainable pace.",
  icon: Heart
},
{
  title: "Clear Progress Path",
  text: "Students follow structured tracks with checkpoints, revision plans, and actionable feedback.",
  icon: CircleCheckBig
},
{
  title: "Family-Friendly Flexibility",
  text: "Online scheduling and guided plans help parents and working students stay consistent.",
  icon: Handshake
}];


const studyTracks = [
"Quran Reading with Tajweed",
"Quran Memorization (Hifz)",
"Farz Uloom and Fiqh Basics",
"Hadith and Seerah Studies",
"Arabic (Sarf and Nahv)",
"Masnoon Duayen and Daily Adab"];


const onboardingSteps = [
{
  title: "Submit Admission",
  detail:
  "Fill your profile, choose your courses, and share your study goals in one place."
},
{
  title: "Mentor Matching",
  detail:
  "We review your details and align you with a suitable instructor and class format."
},
{
  title: "Start Your Routine",
  detail:
  "Begin classes with clear milestones, revision flow, and regular feedback."
}];


const missionFocusAreas = [
"Deep Islamic learning: Quran, Hadith, Fiqh, Seerah, adab, and character.",
"World-ready learning: language, analytical thinking, communication, and responsible technology use.",
"A unified model where deen and dunya are studied together with purpose and discipline."];


const goldenAgeContributions = [
"Algebra and algorithmic foundations (Al-Khwarizmi)",
"Optics and experimental method (Ibn al-Haytham)",
"Advanced medicine and clinical texts (Ibn Sina, Al-Razi)",
"Surgical instruments and procedures (Al-Zahrawi)",
"Astronomical observatories and precise star catalogs",
"Navigation tools including improved astrolabe systems",
"Early engineering automation and mechanical design (Al-Jazari)",
"Chemistry and laboratory process refinement"];


const quranLearningVerses = [
{
  arabic: "اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
  urdu: "پڑھیے اپنے رب کے نام سے جس نے پیدا کیا۔",
  meaning:
  "Revelation began with the command to read, establishing learning as a sacred act.",
  reference: "Surah Al-Alaq (96:1)"
},
{
  arabic: "وَقُلْ رَبِّ زِدْنِي عِلْمًا",
  urdu: "اور دعا کریں: اے میرے رب! میرے علم میں اضافہ فرما۔",
  meaning:
  "A believer is taught to keep asking Allah for growth in beneficial knowledge.",
  reference: "Surah Taha (20:114)"
},
{
  arabic:
  "قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ",
  urdu: "کہہ دیجیے: کیا جاننے والے اور نہ جاننے والے برابر ہو سکتے ہیں؟",
  meaning:
  "The Quran highlights the elevated rank of people who seek and live by knowledge.",
  reference: "Surah Az-Zumar (39:9)"
}];


const About = () => {
  return (
    <div>
      <div />
      <div />

      <section>
        <div>
          <div>
            <Sparkles />
            About Quran Scholars
          </div>

          <h1>
            A modern Islamic learning platform rooted in Quran and Sunnah
          </h1>

          <p>
            Quran Scholars helps families and individuals build a disciplined
            learning routine through live teaching, guided revision, and clear
            progress tracking. We are building a generation that is grounded in
            Quran and Sunnah while fully prepared to contribute to the modern
            world with knowledge, ethics, and skill.
          </p>

          <div>
            <Link
              to="/admission">

              
              Start Admission
              <ArrowRight />
            </Link>
            <Link
              to="/courses">

              
              Explore Courses
            </Link>
          </div>
        </div>

        <div>
          <img
            src={ChildWithQuran}
            alt="Student learning Quran" />

          
          <div>
            <div>
              <p>
                Teaching Style
              </p>
              <p>
                Live, guided, feedback-focused
              </p>
            </div>
            <div>
              <p>
                Core Focus
              </p>
              <p>
                Tajweed, understanding, character
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          {impactStats.map(({ icon: Icon, label, value, detail }) =>
          <article
            key={label}>

            
              <Icon />
              <p>
                {label}
              </p>
              <p>{value}</p>
              <p>{detail}</p>
            </article>
          )}
        </div>
      </section>

      <section>
        <div>
          <div>
            <ShieldCheck />
            Mission and Legacy
          </div>

          <h2>
            Strong Islamic foundation with world-ready excellence
          </h2>
          <p>
            For decades, many Muslims rightly focused on Islamic instruction and
            protected faith, identity, and character. Today, the world has
            changed. In the age of technology and global knowledge systems, we
            believe students should receive deep Islamic scholarship together
            with high-quality contemporary education. The Islamic Golden Age
            shows that this combined model is part of our true heritage.
          </p>

          <div>
            <article>
              <h3>
                Our Education Focus
              </h3>
              <ul>
                {missionFocusAreas.map((item) =>
                <li key={item}>
                    <CircleCheckBig />
                    <span>{item}</span>
                  </li>
                )}
              </ul>
            </article>

            <article>
              <h3>
                Islamic Golden Age Contributions
              </h3>
              <ul>
                {goldenAgeContributions.map((item) =>
                <li key={item}>
                    <CircleCheckBig />
                    <span>{item}</span>
                  </li>
                )}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <BookOpen />
            Quran and Learning
          </div>
          <h2>
            Islamic foundations for education
          </h2>
          <p

            dir="rtl"
            lang="ur">
            
            علم اسلام میں عبادت کا راستہ ہے۔ ہمارا مقصد یہی ہے کہ سیکھنے کا سفر
            قرآن و سنت کی روشنی میں مضبوط اور باعمل بنے۔
          </p>

          <div>
            {quranLearningVerses.map((verse) =>
            <article
              key={verse.reference}>

              
                <p

                dir="rtl">
                
                  {verse.arabic}
                </p>
                <p

                dir="rtl">
                
                  {verse.urdu}
                </p>
                <p>
                  {verse.meaning}
                </p>
                <p>
                  {verse.reference}
                </p>
              </article>
            )}
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <BookOpen />
            What Makes Us Different
          </div>
          <div>
            {pillars.map(({ icon: Icon, title, text }) =>
            <article
              key={title}>

              
                <div>
                  <Icon />
                  <div>
                    <h3>
                      {title}
                    </h3>
                    <p>
                      {text}
                    </p>
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>

        <div>
          <div>
            <GraduationCap />
            Popular Learning Tracks
          </div>

          <div>
            {studyTracks.map((course) =>
            <div
              key={course}>

              
                <CircleCheckBig />
                <span>
                  {course}
                </span>
              </div>
            )}
          </div>

          <div>
            These tracks align with our admission flow and can be customized by
            age, level, and learning goal.
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>
            Your Journey with Quran Scholars
          </h2>
          <p>
            A straightforward workflow designed to keep learning smooth from
            first application to regular classes.
          </p>

          <div>
            {onboardingSteps.map((step, index) =>
            <article
              key={step.title}>

              
                <div>
                  {index + 1}
                </div>
                <h3>
                  {step.title}
                </h3>
                <p>{step.detail}</p>
              </article>
            )}
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>
            Ready to begin your learning plan?
          </h2>
          <p>
            Submit your admission profile and we will help you choose the best
            track for your schedule, level, and goals.
          </p>
          <div>
            <Link
              to="/admission">

              
              Apply Now
            </Link>
            <Link
              to="/contact">

              
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>);

};

export default About;
