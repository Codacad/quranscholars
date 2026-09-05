import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import UrduCompanion from "@/components/marketing/UrduCompanion.jsx";

const HighlightGrid = ({ highlights, wide = false }) => (
  <dl className={wide ? "grid overflow-hidden rounded-2xl border border-white/12 bg-black/10 backdrop-blur sm:grid-cols-3 lg:col-span-2" : "grid overflow-hidden rounded-2xl border border-white/14 bg-white/[.075] shadow-[0_20px_55px_rgba(0,0,0,.18)] backdrop-blur"}>
    {highlights.map(({ label, value }, index) => (
      <div
        key={label}
        className={wide ? `px-5 py-4 sm:px-6 ${index ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}` : "border-t border-white/12 px-5 py-4 first:border-0 sm:px-6"}
      >
        <dt className="text-[0.67rem] font-black uppercase tracking-[0.15em] text-[#9ed6c8]">{label}</dt>
        <dd className="mt-1 text-sm font-bold leading-6 text-white/88">{value}</dd>
      </div>
    ))}
  </dl>
);

const MarketingHero = ({
  eyebrow,
  title,
  description,
  icon: Icon,
  primaryAction,
  secondaryAction,
  highlights = [],
  urdu,
  children,
  labelledBy = "marketing-hero-title",
}) => (
  <section
    className="relative isolate overflow-hidden bg-[#082f2b] px-4 py-14 text-white sm:px-6 sm:py-18 lg:py-22"
    aria-labelledby={labelledBy}
  >
    <div
      className="absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(circle_at_88%_12%,rgba(116,201,178,.26),transparent_28%),radial-gradient(circle_at_5%_95%,rgba(244,201,93,.12),transparent_30%)]"
      aria-hidden="true"
    />
    <div className={`mx-auto grid max-w-7xl gap-9 lg:gap-12 ${urdu ? "lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,.72fr)] lg:items-center" : "lg:grid-cols-[minmax(0,1.15fr)_minmax(19rem,.65fr)] lg:items-end"}`}>
      <div>
        <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#a6dacf]">
          {Icon && <Icon className="size-4 text-[#f4c95d]" />}
          {eyebrow}
        </p>
        <h1 id={labelledBy} className="mt-5 max-w-4xl text-balance font-display text-[clamp(2.65rem,6vw,5.25rem)] font-black leading-[1.01] tracking-[-0.05em]">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-base font-medium leading-8 text-white/72 sm:text-lg">
          {description}
        </p>
        {(primaryAction || secondaryAction) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryAction && (
              <Link to={primaryAction.to} className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#f4c95d] px-5 text-sm font-black text-[#11342e] no-underline shadow-[0_14px_34px_rgba(0,0,0,.18)] transition hover:-translate-y-0.5 hover:bg-[#ffda79] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4c95d]">
                {primaryAction.label}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
            {secondaryAction && (
              <Link to={secondaryAction.to} className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 text-sm font-black text-white no-underline backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                {secondaryAction.label}
              </Link>
            )}
          </div>
        )}
      </div>

      {urdu ? (
        <UrduCompanion title={urdu.title} description={urdu.description} />
      ) : (
        children || (highlights.length > 0 && <HighlightGrid highlights={highlights} />)
      )}

      {urdu && highlights.length > 0 && <HighlightGrid highlights={highlights} wide />}
    </div>
  </section>
);

export default MarketingHero;
