import { Link } from "react-router-dom";
import { ArrowRight, UserRoundX } from "lucide-react";
const AccountDeleted = () => {
  return (
    <main className="grid min-h-[65vh] place-items-center bg-[#fbfcfa] px-4 py-16 text-[#172b24] sm:px-6">
      <section className="w-full max-w-xl rounded-2xl border border-[#dfe6e2] bg-white p-7 text-center shadow-[0_20px_55px_rgba(21,54,44,.08)] sm:p-10" aria-labelledby="deleted-title">
        <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#edf4f1] text-primary"><UserRoundX className="size-6" /></span>
        <p className="mt-6 text-xs font-black uppercase tracking-[0.15em] text-primary">Account closed</p>
        <h1 id="deleted-title" className="mt-2 text-balance font-display text-3xl font-black tracking-[-0.04em]">Your account has been deleted.</h1>
        <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-7 text-[#687970]">You have been signed out and can return to the public platform at any time. If you believe this happened in error, contact learner support.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3"><Link to="/" className="group inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#0f766e] px-4 text-sm font-black text-white no-underline">Return home <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link><Link to="/contact" className="inline-flex min-h-11 items-center rounded-lg border border-[#d7e2dc] bg-white px-4 text-sm font-black text-[#385248] no-underline">Contact support</Link></div>
      </section>
    </main>);

};

export default AccountDeleted;
