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
  UserCheck,
} from "lucide-react";

const informationGroups = [
  {
    title: "Identity and Contact Details",
    items: [
      "Full name",
      "Email address",
      "Phone or WhatsApp number",
      "Country and city",
    ],
  },
  {
    title: "Enrollment and Service Data",
    items: [
      "Selected courses and class preferences",
      "Learning progress and attendance",
      "Payment and billing references",
      "Support requests and communication logs",
    ],
  },
  {
    title: "Technical and Usage Data",
    items: [
      "Device and browser type",
      "IP address and approximate location",
      "Session activity and pages visited",
      "Performance and error diagnostics",
    ],
  },
];

const usagePurposes = [
  "Deliver classes, assessments, and student support",
  "Manage admissions, payments, and account security",
  "Send essential service updates and learning reminders",
  "Improve platform quality, accessibility, and performance",
  "Comply with legal obligations and prevent fraud or misuse",
];

const userRights = [
  "Request access to your personal data",
  "Request correction of inaccurate or outdated records",
  "Request deletion of data where legally applicable",
  "Withdraw consent for non-essential communication",
  "Ask for information about how your data is processed",
];

const securityControls = [
  "Encrypted data transmission (HTTPS/SSL)",
  "Role-based restricted access to sensitive records",
  "Security monitoring and routine audit checks",
  "Trusted third-party processors for secure operations",
];

const policySections = [
  {
    title: "1. Scope of This Policy",
    body: "This Privacy Policy explains how Quran Scholar collects, uses, stores, and protects personal information when you use our website, services, and related communication channels.",
  },
  {
    title: "2. Legal Basis and Consent",
    body: "We process data to provide requested educational services, fulfill contractual obligations, comply with applicable legal requirements, and based on consent where required.",
  },
  {
    title: "3. Data Retention",
    body: "We retain personal information only for as long as necessary to deliver services, maintain records, resolve disputes, and meet legal or regulatory obligations.",
  },
  {
    title: "4. Children's Privacy",
    body: "For minors, we expect parent or guardian involvement. We collect only essential data for educational delivery and provide guardian support for account-related requests.",
  },
  {
    title: "5. Policy Updates",
    body: "We may update this policy from time to time. Material updates are communicated through official platform channels and become effective on the published revision date.",
  },
];

const PrivacyPolicy = () => {
  const updatedOn = new Date().toLocaleDateString();

  return (
    <div className="relative overflow-hidden bg-slate-50 pb-8 lg:pb-12">
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-red-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-36 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />

      <section className="relative rounded-3xl border border-red-100 bg-white p-5 shadow-sm md:p-8">
        <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-red-800">
              <ShieldCheck className="h-4 w-4" />
              Privacy and Data Protection
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Quran Scholar is committed to handling personal information with
              transparency, accountability, and care. This page explains what
              we collect, why we collect it, and the rights you have over your
              data.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
              >
                Contact Privacy Team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <article className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-white p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-red-700">
                Last Updated
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-900">
                <CalendarClock className="h-4 w-4 text-red-700" />
                {updatedOn}
              </p>
            </article>

            <article className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-amber-700">
                Response Time
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Privacy requests are typically handled within 7-14 business
                days.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.1em] text-slate-600">
                Policy Coverage
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Web experience, admissions, learning services, communications,
                and support operations.
              </p>
            </article>
          </div>
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-6">
          <section className="rounded-3xl border border-red-100 bg-white p-5 md:p-7">
            <h2 className="text-2xl font-bold text-slate-900">
              Information We Collect
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              We collect only data that helps us provide secure and effective
              educational services.
            </p>

            <div className="mt-5 grid gap-3">
              {informationGroups.map((group, index) => (
                <motion.article
                  key={group.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.28,
                    delay: index * 0.04,
                    ease: "easeOut",
                  }}
                  className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {group.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-red-100 bg-white p-5 md:p-7">
            <h2 className="text-2xl font-bold text-slate-900">
              How We Use Your Data
            </h2>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {usagePurposes.map((item) => (
                <article
                  key={item}
                  className="rounded-2xl border border-red-100 bg-gradient-to-br from-white to-red-50/40 p-4"
                >
                  <p className="text-sm leading-relaxed text-slate-700">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-red-100 bg-white p-5 md:p-7">
            <h2 className="text-2xl font-bold text-slate-900">
              Core Policy Clauses
            </h2>

            <div className="mt-4 space-y-3">
              {policySections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {section.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-3xl border border-red-100 bg-white p-5 md:p-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-red-700">
              <Lock className="h-4 w-4" />
              Security Controls
            </div>

            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {securityControls.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-red-100 bg-white p-5 md:p-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-amber-700">
              <UserCheck className="h-4 w-4" />
              Your Rights
            </div>

            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {userRights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-red-200 bg-red-900 p-5 text-white md:p-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-red-100">
              <Cookie className="h-4 w-4" />
              Cookie Notice
            </div>
            <p className="mt-4 text-sm leading-relaxed text-red-100">
              We use essential and analytics cookies to maintain sessions,
              remember preferences, and improve platform reliability. You can
              manage cookie settings in your browser.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6">
            <h2 className="text-lg font-bold text-slate-900">
              Privacy Contact
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              For access, correction, or deletion requests, contact us through
              the details below.
            </p>

            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-700" />
                <a href="mailto:contact@quranscholar.in" className="hover:underline">
                  contact@quranscholar.in
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-700" /> +91-805-712-1113
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-700" /> Moradabad, Uttar Pradesh, India
              </p>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
