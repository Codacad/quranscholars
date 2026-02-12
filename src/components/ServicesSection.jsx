import { Link } from "react-router-dom";
import { services } from "../data/services.js";
import Service from "./home/Service.jsx";
const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50 py-16 md:py-20 px-4 md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,113,113,0.1),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.12),transparent_30%)]" />
      <div className="relative max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Guided pathways for every seeker.
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Build your journey with Qur'an-first learning, live mentorship,
            family programs, and community khidmah.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Service key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
