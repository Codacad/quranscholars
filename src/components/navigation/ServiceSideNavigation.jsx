import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiBookOpen,
  FiLayers,
  FiCompass,
  FiHeart,
  FiUsers,
  FiHeadphones,
  FiGlobe,
  FiHome,
  FiSun,
  FiStar } from
"react-icons/fi";
import { motion } from "framer-motion";

const links = [
{ to: "/services/courses", label: "Courses", icon: FiBookOpen },
{
  to: "/services/interactive-lessons",
  label: "Interactive Lessons",
  icon: FiLayers
},
{
  to: "/services/educational-resources",
  label: "Educational Resources",
  icon: FiCompass
},
{
  to: "/services/spiritual-development",
  label: "Spiritual Development",
  icon: FiHeart
},
{
  to: "/services/community-engagement",
  label: "Community Engagement",
  icon: FiUsers
},
{
  to: "/services/personal-guidance",
  label: "Personal Guidance",
  icon: FiHeadphones
},
{
  to: "/services/language-support",
  label: "Language Support",
  icon: FiGlobe
},
{
  to: "/services/family-focused-services",
  label: "Family Focused Services",
  icon: FiHome
},
{
  to: "/services/youth-programs",
  label: "Youth Programs",
  icon: FiSun
},
{ to: "/services/islamic-events", label: "Islamic Events", icon: FiStar }];


const ServiceSideNavigation = ({ layout = "sidebar" }) => {
  const { pathname } = useLocation();
  const itemRefs = useRef({});
  const isTop = layout === "top";

  useEffect(() => {
    if (!isTop) return;
    const activeEl = itemRefs.current[pathname];
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [isTop, pathname]);

  return (
    <div>
      <nav

        aria-label="Services navigation">
        
        <div>
          <h2>Services</h2>
          {!isTop &&
          <span>
              Navigation
            </span>
          }
        </div>
        <ul>

          
          {links.map(({ to, label, icon: Icon }) =>
          <li
            key={to}

            ref={(el) => {
              itemRefs.current[to] = el;
            }}>
            
              <NavLink
              to={to}>

              
                {({ isActive }) =>
              <motion.div





                transition={{ duration: 0.16, ease: "easeOut" }}>
                
                    {isActive &&
                <motion.span
                  layoutId={isTop ? "services-active-pill-top" : "services-active-pill-sidebar"}

                  transition={{
                    type: "tween",
                    duration: 0.17,
                    ease: "easeOut"
                  }} />

                }
                    <span>



                  
                      <Icon />

                  
                    </span>
                    <span>{label}</span>
                  </motion.div>
              }
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>);

};

export default ServiceSideNavigation;
