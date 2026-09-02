import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Cookie,
  Lock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserCheck } from
"lucide-react";

const informationGroups = [
{
  title: "Identity and Contact Details",
  items: [
  "Full name",
  "Email address",
  "Phone or WhatsApp number",
  "Country and city"]

},
{
  title: "Enrollment and Service Data",
  items: [
  "Selected courses and class preferences",
  "Learning progress and attendance",
  "Payment and billing references",
  "Support requests and communication logs"]

},
{
  title: "Technical and Usage Data",
  items: [
  "Device and browser type",
  "IP address and approximate location",
  "Session activity and pages visited",
  "Performance and error diagnostics"]

}];


const usagePurposes = [
"Deliver classes, assessments, and student support",
"Manage admissions, payments, and account security",
"Send essential service updates and learning reminders",
"Improve platform quality, accessibility, and performance",
"Comply with legal obligations and prevent fraud or misuse"];


const userRights = [
"Request access to your personal data",
"Request correction of inaccurate or outdated records",
"Request deletion of data where legally applicable",
"Withdraw consent for non-essential communication",
"Ask for information about how your data is processed"];


const securityControls = [
"Encrypted data transmission (HTTPS/SSL)",
"Role-based restricted access to sensitive records",
"Security monitoring and routine audit checks",
"Trusted third-party processors for secure operations"];


const policySections = [
{
  title: "1. Scope of This Policy",
  body: "This Privacy Policy explains how Quran Scholar collects, uses, stores, and protects personal information when you use our website, services, and related communication channels."
},
{
  title: "2. Legal Basis and Consent",
  body: "We process data to provide requested educational services, fulfill contractual obligations, comply with applicable legal requirements, and based on consent where required."
},
{
  title: "3. Data Retention",
  body: "We retain personal information only for as long as necessary to deliver services, maintain records, resolve disputes, and meet legal or regulatory obligations."
},
{
  title: "4. Children's Privacy",
  body: "For minors, we expect parent or guardian involvement. We collect only essential data for educational delivery and provide guardian support for account-related requests."
},
{
  title: "5. Policy Updates",
  body: "We may update this policy from time to time. Material updates are communicated through official platform channels and become effective on the published revision date."
}];


const PrivacyPolicy = () => {
  const updatedOn = new Date().toLocaleDateString();

  return (
    <div>
      <div />
      <div />

      <section>
        <div>
          <div>
            <span>
              <ShieldCheck />
              Privacy and Data Protection
            </span>
            <h1>
              Privacy Policy
            </h1>
            <p>
              Quran Scholar is committed to handling personal information with
              transparency, accountability, and care. This page explains what we
              collect, why we collect it, and the rights you have over your
              data.
            </p>

            <div>
              <Link
                to="/contact">

                
                Contact Privacy Team
                <ArrowRight />
              </Link>
              <Link
                to="/">

                
                Back to Home
              </Link>
            </div>
          </div>

          <div>
            <article>
              <p>
                Last Updated
              </p>
              <p>
                <CalendarClock />
                {updatedOn}
              </p>
            </article>

            <article>
              <p>
                Response Time
              </p>
              <p>
                Privacy requests are typically handled within 7-14 business
                days.
              </p>
            </article>

            <article>
              <p>
                Policy Coverage
              </p>
              <p>
                Web experience, admissions, learning services, communications,
                and support operations.
              </p>
            </article>
          </div>
        </div>
      </section>

      <div>
        <div>
          <section>
            <h2>
              Information We Collect
            </h2>
            <p>
              We collect only data that helps us provide secure and effective
              educational services.
            </p>

            <div>
              {informationGroups.map((group, index) =>
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.28,
                  delay: index * 0.04,
                  ease: "easeOut"
                }}>

                
                  <h3>
                    {group.title}
                  </h3>
                  <ul>
                    {group.items.map((item) =>
                  <li key={item}>
                        <CheckCircle2 />
                        <span>{item}</span>
                      </li>
                  )}
                  </ul>
                </motion.article>
              )}
            </div>
          </section>

          <section>
            <h2>
              How We Use Your Data
            </h2>

            <div>
              {usagePurposes.map((item) =>
              <article
                key={item}>

                
                  <p>
                    {item}
                  </p>
                </article>
              )}
            </div>
          </section>

          <section>
            <h2>
              Core Policy Clauses
            </h2>

            <div>
              {policySections.map((section) =>
              <article
                key={section.title}>

                
                  <h3>
                    {section.title}
                  </h3>
                  <p>
                    {section.body}
                  </p>
                </article>
              )}
            </div>
          </section>
        </div>

        <aside>
          <section>
            <div>
              <Lock />
              Security Controls
            </div>

            <ul>
              {securityControls.map((item) =>
              <li key={item}>
                  <ShieldCheck />
                  <span>{item}</span>
                </li>
              )}
            </ul>
          </section>

          <section>
            <div>
              <UserCheck />
              Your Rights
            </div>

            <ul>
              {userRights.map((item) =>
              <li key={item}>
                  <CheckCircle2 />
                  <span>{item}</span>
                </li>
              )}
            </ul>
          </section>

          <section>
            <div>
              <Cookie />
              Cookie Notice
            </div>
            <p>
              We use essential and analytics cookies to maintain sessions,
              remember preferences, and improve platform reliability. You can
              manage cookie settings in your browser.
            </p>
          </section>

          <section>
            <h2>
              Privacy Contact
            </h2>
            <p>
              For access, correction, or deletion requests, contact us through
              the details below.
            </p>

            <div>
              <p>
                <Mail />
                <a
                  href="mailto:contact@quranscholar.in">

                  
                  contact@quranscholar.in
                </a>
              </p>
              <p>
                <Phone /> +91-805-712-1113
              </p>
              <p>
                <MapPin /> Moradabad, Uttar
                Pradesh, India
              </p>
            </div>
          </section>
        </aside>
      </div>
    </div>);

};

export default PrivacyPolicy;
