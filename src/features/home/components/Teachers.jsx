import { motion } from "framer-motion";
import { teachers } from "@/data/teachers.js";

function Teachers() {
  return (
    <section>
      <div>
        <div>
          <div>
            <div>
              <span />
              Our Mentors
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>

              
              Meet the teachers who light your path.
            </motion.h2>
            <p>
              Certified scholars who blend classical tradition with modern
              pedagogy, live feedback, reflective prompts, and pastoral care.
            </p>
          </div>
          <div>
            <div>
              <p>24</p>
              <p>
                Instructors
              </p>
            </div>
            <div>
              <p>12</p>
              <p>
                Countries
              </p>
            </div>
          </div>
        </div>

        <div>
          {teachers.map((teacher, idx) =>
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
              delay: idx * 0.04
            }}>

            
              <div />
              <div>
                <div>
                  <img
                  src={teacher.image}
                  alt={teacher.name} />

                
                  <div>
                    <p>
                      {teacher.name}
                    </p>
                    <p>
                      {teacher.focus}
                    </p>
                  </div>
                </div>

                <p>
                  {teacher.bio}
                </p>

                <div>
                  <div>
                    <span>Modality</span>
                    <span>Availability</span>
                  </div>
                  <div>
                    <span>Live, 1:1, Cohort</span>
                    <span>
                      Sat-Thu (07 AM - 10 PM)
                    </span>
                  </div>
                </div>
                <button>
                  Book a trial
                  <span>-&gt;</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}

export default Teachers;
