import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const TestimonialCard = ({ testimonial, index }) => {
  return (
    <div className="relative h-full rounded-3xl border border-white/15 bg-white/80 backdrop-blur shadow-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-100/60 via-white to-amber-100/50 opacity-80" />
      <div className="relative p-6 space-y-4 h-full flex flex-col">
        <div className="flex items-center gap-4">
          <img
            src={`https://i.pravatar.cc/150?img=${index + 10}`}
            alt={`${testimonial.name} avatar`}
            className="h-14 w-14 rounded-2xl object-cover border border-white/50 shadow-sm"
          />
          <div>
            <p className="text-lg font-bold text-slate-900">
              {testimonial.name}
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-red-800">
              {testimonial.role}
            </p>
          </div>
        </div>

        <div className="text-red-900">
          <FaQuoteLeft size={24} />
        </div>

        <p className="text-slate-700 text-base leading-7 flex-1">
          {testimonial.quote}
        </p>

        <div className="text-red-900 self-end">
          <FaQuoteRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
