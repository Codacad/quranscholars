import { BookOpenText } from "lucide-react";

const UrduCompanion = ({ title, description, className = "" }) => (
  <aside
    className={`relative isolate overflow-hidden rounded-2xl border border-[#f4c95d]/25 bg-[linear-gradient(145deg,rgba(255,255,255,.105),rgba(255,255,255,.045))] p-6 text-right text-white shadow-[0_24px_64px_rgba(0,0,0,.2)] backdrop-blur-md sm:p-8 ${className}`}
    lang="ur"
    dir="rtl"
    aria-label="Urdu introduction"
  >
    <div className="absolute -left-16 -top-16 -z-10 size-44 rounded-full border-[36px] border-[#f4c95d]/[.06]" aria-hidden="true" />
    <div className="absolute -bottom-24 -right-20 -z-10 size-52 rounded-full bg-[#72b8a7]/10 blur-2xl" aria-hidden="true" />

    <div className="flex items-center justify-between gap-4 border-b border-white/12 pb-4" dir="ltr">
      <span className="font-body text-[0.62rem] font-black uppercase tracking-[0.15em] text-white/45" dir="ltr">
       
      </span>
      <span className="grid size-9 place-items-center rounded-xl bg-[#f4c95d] text-[#123a33]">
        <BookOpenText className="size-4" />
      </span>
    </div>

    <p className="font-urdu mt-5 text-[1.45rem] font-bold leading-[2.05] text-white sm:text-[1.7rem]">
      {title}
    </p>
    {description && (
      <p className="font-urdu mt-3 text-[0.98rem] font-medium leading-[2.15] text-white/68 sm:text-[1.04rem]">
        {description}
      </p>
    )}

    <div className="mt-6 flex items-center justify-end gap-2 border-t border-white/10 pt-4 font-body text-[0.62rem] font-black uppercase tracking-[0.13em] text-[#9ed6c8]" dir="ltr">
      Aalim Ul Quran <span className="size-1 rounded-full bg-[#f4c95d]" /> Learn with purpose
    </div>
  </aside>
);

export default UrduCompanion;
