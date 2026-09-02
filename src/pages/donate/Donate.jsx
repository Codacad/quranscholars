import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpenCheck,
  Building2,
  Coins,
  HandHeart,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  Users } from
"lucide-react";

const charityPrograms = [
{
  title: "Free Education for Students",
  detail:
  "Support tuition assistance, digital classroom access, and sponsored learning kits for students who cannot afford Islamic education.",
  icon: BookOpenCheck,
  tone: "from-red-50 to-rose-50"
},
{
  title: "Mosque Development Support",
  detail:
  "Contribute to mosque maintenance, prayer space improvements, and community worship facilities in underserved areas.",
  icon: Landmark,
  tone: "from-amber-50 to-orange-50"
},
{
  title: "Madrasa Strengthening",
  detail:
  "Fund classroom materials, teacher support, and curriculum resources that help madrasas sustain quality education.",
  icon: Building2,
  tone: "from-sky-50 to-cyan-50"
},
{
  title: "Help for Poor Families",
  detail:
  "Provide food support, emergency aid, and essential needs assistance for vulnerable families facing hardship.",
  icon: HandHeart,
  tone: "from-emerald-50 to-teal-50"
}];


const allocation = [
{ name: "Education Sponsorship", value: "40%" },
{ name: "Mosque and Madrasa Support", value: "30%" },
{ name: "Poor Relief Programs", value: "25%" },
{ name: "Operations and Transparency", value: "5%" }];


const impactPoints = [
{
  title: "Student Scholarships",
  detail: "Enable access to structured Islamic learning for deserving students."
},
{
  title: "Community Worship Spaces",
  detail: "Strengthen mosque services and prayer environments with dignity."
},
{
  title: "Immediate Family Relief",
  detail: "Respond to urgent needs quickly through focused aid efforts."
}];


const Donate = () => {
  return (
    <div>
      <div />
      <div />

      <div>
        <section>
          <div>
            <div>
              <span>
                <HeartHandshake />
                Charity and Donation Programs
              </span>
              <h1>
                Support meaningful causes with your donation
              </h1>
              <p>
                Your contribution helps us provide free education, strengthen
                mosques and madrasas, and assist poor families with dignity,
                care, and accountability.
              </p>

              <div>
                <Link
                  to="/contact">

                  
                  Donate Now
                  <ArrowRight />
                </Link>
                <Link
                  to="/mission">

                  
                  See Our Mission
                </Link>
              </div>
            </div>

            <div>
              <article>
                <p>
                  Main Focus
                </p>
                <p>
                  Education, mosques, madrasas, and poor relief programs.
                </p>
              </article>
              <article>
                <p>
                  Transparency
                </p>
                <p>
                  Donation allocation and impact reporting with clear priorities.
                </p>
              </article>
              <article>
                <p>
                  Why Donate
                </p>
                <p>
                  Small, consistent charity can create lasting transformation in
                  knowledge, worship, and social welfare.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section>
          {charityPrograms.map(({ title, detail, icon: Icon, tone }, idx) =>
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: idx * 0.05, ease: "easeOut" }}>

            
              <div>
                <span>
                  <Icon />
                </span>
                <div>
                  <h2>{title}</h2>
                  <p>
                    {detail}
                  </p>
                </div>
              </div>
            </motion.article>
          )}
        </section>

        <section>
          <div>
            <div>
              <h2>Impact Areas</h2>
              <span>
                <Users />
                Community Benefit
              </span>
            </div>

            <div>
              {impactPoints.map((item) =>
              <article
                key={item.title}>

                
                  <h3>
                    {item.title}
                  </h3>
                  <p>
                    {item.detail}
                  </p>
                </article>
              )}
            </div>
          </div>

          <div>
            <div>
              <Coins />
              Fund Allocation
            </div>

            <div>
              {allocation.map((item) =>
              <div
                key={item.name}>

                
                  <div>
                    <span>{item.name}</span>
                    <span>{item.value}</span>
                  </div>
                  <div>
                    <div />


                  
                  </div>
                </div>
              )}
            </div>

            <div>
              <p>
                <ShieldCheck />
                Donations are directed to approved charity programs with
                periodic accountability updates.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Be a source of benefit today</h2>
          <p>
            Help us educate students, support mosques and madrasas, and provide
            urgent aid to poor families through consistent charitable giving.
          </p>
          <div>
            <Link
              to="/contact">

              
              Start Donation
            </Link>
            <Link
              to="/admission">

              
              Sponsor a Student
            </Link>
          </div>
        </section>
      </div>
    </div>);

};

export default Donate;
