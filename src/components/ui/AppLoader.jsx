const AppLoader = ({ overlay = false, label = "Loading..." }) => {
  return (
    <div
      className={
        overlay
          ? "fixed inset-0 z-[120] flex items-center justify-center bg-white/70 backdrop-blur-sm"
          : "flex w-full items-center justify-center py-14"
      }
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-red-100 bg-white/90 px-6 py-5 shadow-sm">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-red-200 border-t-red-600" />
        <p className="text-sm font-semibold text-slate-700">{label}</p>
      </div>
    </div>
  );
};

export default AppLoader;
