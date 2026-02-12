import Logo from "/images/Logo.svg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  const columns = [
    {
      title: "Explore",
      links: [
        { to: "/services", label: "Services" },
        { to: "/courses", label: "Courses" },
        { to: "/blogs", label: "Blogs" },
        { to: "/about", label: "About" },
      ],
    },
    {
      title: "Support",
      links: [
        { to: "/contact", label: "Contact" },
        { to: "/privacy", label: "Privacy Policy" },
        { to: "/donate", label: "Donate" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white via-white to-primary/5 text-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3" aria-label="QuranScholars home">
              <img src={Logo} alt="Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Personalized Quran and Islamic learning guided by trusted scholars. Stay
              curious, stay consistent.
            </p>
            <div className="flex items-center gap-3">
              {[FaFacebook, FaInstagram, FaTwitter, FaYoutube].map((Icon, idx) => (
                <Link
                  key={idx}
                  to="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-primary/40 hover:text-primary"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary">
                {col.title}
              </h3>
              <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
                {col.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="rounded-lg px-2 py-1 transition hover:bg-primary/10 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Stay Updated
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Get class openings, events, and study tips once a week. No spam.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Input placeholder="you@example.com" type="email" className="bg-white" />
              <Button className="whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} QuranScholars. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
