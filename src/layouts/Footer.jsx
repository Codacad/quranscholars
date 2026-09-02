import Logo from "/images/Logo-2.svg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { to: "/courses", label: "Courses" },
      { to: "/services", label: "Services" },
      { to: "/admission", label: "Admission" },
      { to: "/blogs", label: "Blogs" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/mission", label: "Mission" },
      { to: "/donate", label: "Donate" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Account",
    links: [
      { to: "/login", label: "Login" },
      { to: "/register", label: "Register" },
      { to: "/privacy", label: "Privacy" },
    ],
  },
];

const socialLinks = [
  { icon: FaFacebook, label: "Facebook" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaTwitter, label: "Twitter" },
  { icon: FaYoutube, label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface text-foreground">
      <div className="page-container">
        <div className="flex flex-col gap-6 border-b border-border py-8 lg:flex-row lg:items-center lg:justify-between">
          <Link
            to="/"
            aria-label="QuranScholars home"
            className="flex min-w-0 items-center gap-4 no-underline"
          >
            <img className="h-auto w-36 shrink-0 object-contain" src={Logo} alt="" />
            <span className="hidden h-8 w-px bg-border sm:block" />
            <span className="max-w-sm text-sm font-medium leading-6 text-muted-foreground">
              Online Quran and Islamic learning with guided admissions,
              structured courses, and trusted teacher support.
            </span>
          </Link>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:min-w-[30rem]">
            <label className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-lg border border-input bg-background px-3 transition focus-within:border-primary focus-within:ring-3 focus-within:ring-primary/20">
              <Mail className="size-4 shrink-0 text-muted-foreground" />
              <input
                placeholder="Get weekly learning updates"
                type="email"
                className="h-full min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </label>
            <button
              type="button"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
            >
              Subscribe
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-8 py-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="grid gap-8 sm:grid-cols-3 lg:min-w-[34rem]">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="text-sm font-bold text-foreground">
                  {column.title}
                </h2>
                <div className="mt-3 grid gap-2">
                  {column.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="w-fit text-sm font-medium leading-6 text-muted-foreground no-underline transition hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
            ))}
          </div>

          <div className="grid gap-5 lg:justify-items-end">
            <div className="grid gap-2 text-sm font-medium text-muted-foreground sm:grid-cols-3 lg:grid-cols-1 lg:text-right">
              <p className="inline-flex items-center gap-2 lg:justify-end">
                <Mail className="size-4 text-primary" />
                support@quranscholars.com
              </p>
              <p className="inline-flex items-center gap-2 lg:justify-end">
                <Phone className="size-4 text-primary" />
                Student support by appointment
              </p>
              <p className="inline-flex items-center gap-2 lg:justify-end">
                <MapPin className="size-4 text-primary" />
                Online classes worldwide
              </p>
            </div>

            <div className="flex items-center gap-2 lg:justify-end">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    to="#"
                    aria-label={item.label}
                    className="grid size-10 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="size-4" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} QuranScholars. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              to="/privacy"
              className="font-semibold no-underline transition hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="font-semibold no-underline transition hover:text-primary"
            >
              Support
            </Link>
            <Link
              to="/courses"
              className="font-semibold no-underline transition hover:text-primary"
            >
              Courses
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
