import { LiaRupeeSignSolid } from "react-icons/lia";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdOutlineWatchLater, MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const Course = ({ course, index = 0 }) => {
  const { pathname } = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const priceAmount = course?.price?.amount || 0;
  const discount = course?.price?.discount || 0;
  const finalPrice = Math.max(0, priceAmount - discount);
  const durationText =
  course?.duration?.value && course?.duration?.unit ?
  `${course.duration.value} ${course.duration.unit}` :
  "Self-paced";
  const detailsPath = pathname.startsWith("/services") ?
  `/services/courses/${course?.slug || ""}` :
  `/courses/${course?.slug || ""}`;

  return (
    <motion.div
      variants={
      shouldReduceMotion ?
      { hidden: { opacity: 1 }, visible: { opacity: 1 } } :
      {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }
      }
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}>

      
      <div />

      <div>
        <div>
          <img

            src={course?.thumbnail}
            alt={course?.title || "Course thumbnail"}
            loading="lazy"
            decoding="async" />
          
          <div />
          <div>
            <SiLevelsdotfyi />
            {course?.level || "All levels"}
          </div>
        </div>

        <div>
          <div>
            <span>
              {course?.category || "General"}
            </span>

            <div>
              <div>
                <LiaRupeeSignSolid />
                {finalPrice}
              </div>
              {discount > 0 &&
              <div>
                  <LiaRupeeSignSolid />
                  {priceAmount}
                </div>
              }
            </div>
          </div>

          <h3>
            {course?.title || "Course"}
          </h3>
          <p>
            {course?.description ||
            "Engaging, instructor-led lessons with live Q and A and practice assignments."}
          </p>

          <div>
            <div>
              <MdOutlineWatchLater />
              <span>{durationText}</span>
            </div>
            <div>
              <MdOutlineStarPurple500 />
              <span>{course?.rating || "4.8"} rating</span>
            </div>
            <div>
              <FaArrowRight />
              <span>{course?.lessons || "12"} lessons</span>
            </div>
          </div>
        </div>

        <div>
          <div>
            {[0, 1, 2].map((i) =>
            <div
              key={i}>

              
                <span>{i}</span>
              </div>
            )}
            <span>
              Cohort {index + 1} - New seats
            </span>
          </div>

          <Link
            to={detailsPath}>

            
            <span>View Course</span>
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>);

};

export default Course;
