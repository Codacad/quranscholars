import React, { useState } from "react";
import { MdClose, MdEmail, MdSupportAgent } from "react-icons/md";
import { FaAddressBook, FaClock, FaGlobe, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const helpTopics = [
{
  title: "Admissions and Course Guidance",
  detail:
  "Get help selecting the right track for age, level, and learning goals."
},
{
  title: "Schedule and Class Timing",
  detail:
  "Share your timezone and preferred timing, and we will suggest suitable slots."
},
{
  title: "Technical and Platform Support",
  detail:
  "Assistance for login, class access, live session issues, and student dashboard help."
},
{
  title: "Parent and Student Counseling",
  detail:
  "Guidance for consistency, motivation, and stronger Islamic learning routines."
}];


const quickStats = [
{ label: "Average Response", value: "Within 24 Hours", icon: FaClock },
{ label: "Support Coverage", value: "Global Time Zones", icon: FaGlobe },
{
  label: "Dedicated Team",
  value: "Admissions + Support",
  icon: MdSupportAgent
}];


const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage(true);
  };

  const handleCloseSubmitMessage = () => {
    setSubmitMessage(false);
  };

  return (
    <>
      <div>



        
        <span>
          Message received. Our team will contact you soon.
        </span>
        <button
          onClick={handleCloseSubmitMessage}>

          
          <MdClose size={16} />
        </button>
      </div>

      <div>
        <div />
        <div />

        <div>
          <div>
            <p>
              Contact Quran Scholars
            </p>

            <h1>
              We are here to support your learning journey
            </h1>

            <p>
              Whether you have questions about Quran classes, Tajweed programs,
              one-to-one sessions, or technical support, our team is ready to
              help with clear and practical guidance.
            </p>

            <div>
              {quickStats.map(({ label, value, icon: Icon }) =>
              <article
                key={label}>

                
                  <Icon size={18} />
                  <p>
                    {label}
                  </p>
                  <p>
                    {value}
                  </p>
                </article>
              )}
            </div>

            <div>
              <div>
                <FaAddressBook size={22} />
                <span>
                  244601, Faridnagar, Thakurdwara, Moradabad, Uttar Pradesh,
                  India
                </span>
              </div>

              <div>
                <FaPhone size={20} />
                <a
                  href="tel:+918057121113">

                  
                  +91 80571 21113
                </a>
              </div>

              <div>
                <MdEmail size={20} />
                <a
                  href="mailto:farman@quranscholar.in">

                  
                  farman@quranscholar.in
                </a>
              </div>
            </div>

            <div>
              <p>
                Working Hours
              </p>
              <p>
                Monday to Saturday: 9:00 AM to 8:00 PM (IST)
              </p>
              <p>
                Sunday: Limited support for urgent learning issues
              </p>
            </div>
          </div>

          <div>
            <div>
              <p>
                Send Us a Message
              </p>
              <h2>
                We will get back to you soon
              </h2>
              <p>
                Share your question in detail so we can guide you faster.
              </p>
            </div>

            <form
              onSubmit={handleContactSubmit}>

              
              <div>
                <label>
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)} />

                
              </div>

              <div>
                <label>
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)} />

                
              </div>

              <div>
                <label>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />

                
              </div>

              <div>
                <label>
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} />

                
              </div>

              <div>
                <button
                  type="submit">

                  
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <section>
          <div>
            <h3>
              What can we help you with?
            </h3>
            <p>
              Reach out for admissions, schedules, technical support, and
              student progress guidance.
            </p>

            <div>
              {helpTopics.map((topic) =>
              <article
                key={topic.title}>

                
                  <h4>
                    {topic.title}
                  </h4>
                  <p>{topic.detail}</p>
                </article>
              )}
            </div>

            <div>
              <Link
                to="/admission">

                
                Start Admission
              </Link>
              <Link
                to="/courses">

                
                Explore Courses
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>);

};

export default Contact;
