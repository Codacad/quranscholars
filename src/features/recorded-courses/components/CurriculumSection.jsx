import { useState } from "react";
import { Check, ChevronDown, Circle, Clock3, Lock, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils.js";

const LessonRow = ({ lesson, active = false, completed = false, locked = false, onSelect }) => {
  const content = (
    <>
      <span className={cn("mt-0.5 grid size-5 shrink-0 place-items-center rounded-full", completed ? "bg-primary text-white" : "text-[#819089]")}>
        {completed ? <Check className="size-3.5" strokeWidth={3} /> : locked ? <Lock className="size-3.5" /> : <Circle className="size-3.5" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold leading-5">{lesson.title}</span>
        <span className="mt-1 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#7a8781]">
          <span className="inline-flex items-center gap-1"><Clock3 className="size-3" />{lesson.durationLabel}</span>
          {lesson.previewable && <span className="inline-flex items-center gap-1 text-primary"><PlayCircle className="size-3" />Preview</span>}
        </span>
      </span>
    </>
  );

  if (onSelect && !locked) {
    return <button type="button" onClick={() => onSelect(lesson)} className={cn("flex w-full items-start gap-3 border-0 px-4 py-3 text-left transition hover:bg-[#f3f7f5]", active && "bg-[#eaf4f0] text-primary")}>{content}</button>;
  }
  return <div className={cn("flex items-start gap-3 px-4 py-3", active && "bg-[#eaf4f0] text-primary")}>{content}</div>;
};

const CurriculumSection = ({ section, defaultOpen = false, activeLessonId, completedLessonIds = [], locked = false, onSelectLesson }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || section.lessons.some((lesson) => lesson.id === activeLessonId));
  const totalSeconds = section.lessons.reduce((sum, lesson) => sum + lesson.durationSeconds, 0);
  const minutes = Math.round(totalSeconds / 60);

  return (
    <section className="overflow-hidden border-b border-[#e8eeeb] last:border-b-0">
      <h3>
        <button type="button" className="flex w-full items-center justify-between gap-4 border-0 bg-[#f7f9f8] px-4 py-4 text-left" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen}>
          <span>
            <span className="block text-sm font-black text-[#1c332b]">{section.title}</span>
            <span className="mt-1 block text-xs font-semibold text-[#718079]">{section.lessons.length} lessons · {minutes} min</span>
          </span>
          <ChevronDown className={cn("size-4 shrink-0 text-[#65756e] transition-transform", isOpen && "rotate-180")} />
        </button>
      </h3>
      {isOpen && (
        <div className="divide-y divide-[#eef2f0] bg-white">
          {section.lessons.map((lesson) => <LessonRow key={lesson.id} lesson={lesson} active={lesson.id === activeLessonId} completed={completedLessonIds.includes(lesson.id)} locked={locked && !lesson.previewable} onSelect={onSelectLesson} />)}
        </div>
      )}
    </section>
  );
};

export { LessonRow };
export default CurriculumSection;
