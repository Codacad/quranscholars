import React from "react";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="group relative rounded-3xl border border-white/60 bg-white/80 backdrop-blur shadow-lg overflow-hidden transition-transform duration-200 hover:-translate-y-1">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-br from-red-100/60 via-white to-amber-100/60" />
      <div className="relative p-6 space-y-4 h-full flex flex-col">
        <div className="h-12 w-12 rounded-2xl bg-red-100 text-red-900 flex items-center justify-center shadow-sm">
          <Icon className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
          <p className="text-gray-700 text-sm leading-6">
            {service.description}
          </p>
        </div>
        <div className="flex-1" />
        <Link
          to={service.link}
          className="inline-flex items-center gap-2 text-red-900 font-semibold hover:text-red-700"
        >
          Learn More →
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            ↗
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Service;
