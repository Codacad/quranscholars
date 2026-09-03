import { LoaderCircle } from "lucide-react";
const AppLoader = () => {
  return (
    <main
      className="
        flex min-h-dvh items-center justify-center
        bg-background px-6
      "
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center text-center">
        <div
          className="
            mb-6 flex size-16 items-center justify-center
            rounded-2xl
            bg-card
          "
        >
          <LoaderCircle
            className="
              size-7 animate-spin
              text-primary
              motion-reduce:animate-none
            "
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        <p className="mt-1.5 text-sm text-muted-foreground">
          Preparing your learning experience...
        </p>

        <span className="sr-only">QuranScholar is loading. Please wait.</span>
      </div>
    </main>
  );
};

export default AppLoader;
