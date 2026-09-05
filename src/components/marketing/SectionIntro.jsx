const SectionIntro = ({ eyebrow, title, description, align = "left", id }) => (
  <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    {eyebrow && (
      <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">
        {eyebrow}
      </p>
    )}
    <h2
      id={id}
      className="mt-2 text-balance font-display text-3xl font-black tracking-[-0.04em] text-[#172b24] sm:text-4xl"
    >
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-pretty text-sm font-medium leading-7 text-[#65756e] sm:text-base">
        {description}
      </p>
    )}
  </div>
);

export default SectionIntro;
