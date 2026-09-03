import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils.js";

const normalizeOptions = (options) =>
  options.map((option) =>
    typeof option === "string"
      ? { value: option, label: option }
      : option,
  );

const CustomSelect = ({
  label,
  value,
  options = [],
  onChange,
  placeholder = "Select an option",
  className,
  menuAlign = "left",
  disabled = false,
}) => {
  const reactId = useId();
  const listboxId = `${reactId}-listbox`;
  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);
  const listboxRef = useRef(null);
  const searchBufferRef = useRef("");
  const searchTimerRef = useRef(null);
  const normalizedOptions = useMemo(() => normalizeOptions(options), [options]);
  const selectedIndex = normalizedOptions.findIndex((option) => option.value === value);
  const selectedOption = normalizedOptions[selectedIndex];
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(Math.max(0, selectedIndex));

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    setHighlightedIndex(Math.max(0, selectedIndex));
    const frame = window.requestAnimationFrame(() => listboxRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen, selectedIndex]);

  useEffect(
    () => () => {
      if (searchTimerRef.current) window.clearTimeout(searchTimerRef.current);
    },
    [],
  );

  const closeMenu = (restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    }
  };

  const selectOption = (option) => {
    if (!option || option.disabled) return;
    onChange(option.value);
    closeMenu(true);
  };

  const moveHighlight = (direction) => {
    if (!normalizedOptions.length) return;
    let nextIndex = highlightedIndex;
    do {
      nextIndex = (nextIndex + direction + normalizedOptions.length) % normalizedOptions.length;
    } while (normalizedOptions[nextIndex]?.disabled && nextIndex !== highlightedIndex);
    setHighlightedIndex(nextIndex);
    document.getElementById(`${reactId}-option-${nextIndex}`)?.scrollIntoView({ block: "nearest" });
  };

  const handleTriggerKeyDown = (event) => {
    if (disabled) return;
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
      event.preventDefault();
      setIsOpen(true);
      if (event.key === "ArrowUp") setHighlightedIndex(Math.max(0, selectedIndex >= 0 ? selectedIndex : normalizedOptions.length - 1));
    }
  };

  const handleTypeahead = (key) => {
    searchBufferRef.current += key.toLowerCase();
    if (searchTimerRef.current) window.clearTimeout(searchTimerRef.current);
    searchTimerRef.current = window.setTimeout(() => {
      searchBufferRef.current = "";
    }, 550);
    const matchIndex = normalizedOptions.findIndex(
      (option) => !option.disabled && option.label.toLowerCase().startsWith(searchBufferRef.current),
    );
    if (matchIndex >= 0) setHighlightedIndex(matchIndex);
  };

  const handleListboxKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveHighlight(1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      moveHighlight(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      setHighlightedIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setHighlightedIndex(normalizedOptions.length - 1);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectOption(normalizedOptions[highlightedIndex]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
    } else if (event.key === "Tab") {
      closeMenu();
    } else if (event.key.length === 1 && /\S/.test(event.key)) {
      handleTypeahead(event.key);
    }
  };

  return (
    <div ref={wrapperRef} className={cn("relative min-w-0", className)}>
      <button
        ref={triggerRef}
        type="button"
        className={cn(
          "flex min-h-11 w-full items-center justify-between gap-3 rounded-lg border border-[#d8e1dc] bg-white px-3 text-left text-[#31443d] outline-none transition hover:border-[#bdccc5] focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/10 disabled:cursor-not-allowed disabled:bg-[#f3f6f4] disabled:opacity-60",
          isOpen && "border-primary ring-3 ring-primary/10",
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? listboxId : undefined}
        disabled={disabled}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className="min-w-0">
          {label && <span className="mr-1.5 text-xs font-extrabold text-[#718078]">{label}:</span>}
          <span className={cn("truncate text-sm font-bold", !selectedOption && "text-[#8a9791]")}>{selectedOption?.label || placeholder}</span>
        </span>
        <ChevronDown className={cn("size-4 shrink-0 text-[#7b8983] transition-transform duration-200", isOpen && "rotate-180")} aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          ref={listboxRef}
          id={listboxId}
          role="listbox"
          tabIndex={-1}
          aria-label={label || placeholder}
          aria-activedescendant={`${reactId}-option-${highlightedIndex}`}
          onKeyDown={handleListboxKeyDown}
          className={cn(
            "absolute top-[calc(100%+0.45rem)] z-50 max-h-72 min-w-full overflow-y-auto overscroll-contain rounded-xl border border-[#d8e1dc] bg-white p-1.5 shadow-[0_18px_45px_rgba(19,51,42,.16)] outline-none",
            menuAlign === "right" ? "right-0" : "left-0",
          )}
        >
          {normalizedOptions.map((option, index) => {
            const selected = option.value === value;
            const highlighted = index === highlightedIndex;
            return (
              <button
                type="button"
                role="option"
                tabIndex={-1}
                id={`${reactId}-option-${index}`}
                key={option.value}
                aria-selected={selected}
                disabled={option.disabled}
                onMouseEnter={() => setHighlightedIndex(index)}
                onClick={() => selectOption(option)}
                className={cn(
                  "flex min-h-10 w-full items-center gap-3 rounded-lg border-0 px-3 py-2 text-left text-sm font-bold text-[#40544c] outline-none transition",
                  highlighted && "bg-[#edf5f1] text-[#173f36]",
                  selected && "text-primary",
                  option.disabled && "cursor-not-allowed opacity-45",
                )}
              >
                <span className="min-w-0 flex-1">
                  <span className="block truncate">{option.label}</span>
                  {option.description && <span className="mt-0.5 block text-xs font-medium leading-4 text-[#7b8983]">{option.description}</span>}
                </span>
                <Check className={cn("size-4 shrink-0 text-primary", selected ? "opacity-100" : "opacity-0")} aria-hidden="true" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
