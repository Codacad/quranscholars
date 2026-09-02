import { useEffect, useMemo, useState } from "react";
import { CalendarDays } from "lucide-react";

const DOB_MIN_YEAR = 1900;
const DOB_MONTHS = [
{ value: "01", label: "January" },
{ value: "02", label: "February" },
{ value: "03", label: "March" },
{ value: "04", label: "April" },
{ value: "05", label: "May" },
{ value: "06", label: "June" },
{ value: "07", label: "July" },
{ value: "08", label: "August" },
{ value: "09", label: "September" },
{ value: "10", label: "October" },
{ value: "11", label: "November" },
{ value: "12", label: "December" }];


const getDaysInMonth = (year, month) => {
  if (!year || !month) return 31;
  return new Date(Number(year), Number(month), 0).getDate();
};

const toTwoDigits = (value) => String(value).padStart(2, "0");




const DobPicker = ({ value, onChange }) => {
  const [parts, setParts] = useState({ year: "", month: "", day: "" });

  useEffect(() => {
    if (!value) {
      setParts({ year: "", month: "", day: "" });
      return;
    }
    const [year = "", month = "", day = ""] = value.split("-");
    setParts({ year, month, day });
  }, [value]);

  const currentYear = new Date().getFullYear();
  const yearOptions = useMemo(() => {
    const years = [];
    for (let year = currentYear; year >= DOB_MIN_YEAR; year -= 1) {
      years.push(String(year));
    }
    return years;
  }, [currentYear]);

  const maxDays = getDaysInMonth(parts.year, parts.month);
  const dayOptions = useMemo(
    () => Array.from({ length: maxDays }, (_, idx) => toTwoDigits(idx + 1)),
    [maxDays]
  );

  const updatePart = (key, partValue) => {
    const next = { ...parts, [key]: partValue };
    if (next.day && Number(next.day) > getDaysInMonth(next.year, next.month)) {
      next.day = "";
    }
    setParts(next);

    if (next.year && next.month && next.day) {
      onChange(`${next.year}-${next.month}-${next.day}`);
      return;
    }
    onChange("");
  };

  return (
    <div className="mt-2 rounded-xl border border-input bg-background p-3 transition focus-within:border-primary focus-within:ring-3 focus-within:ring-primary/15">
      <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
        <CalendarDays className="size-3.5 text-primary" />
        Pick date of birth
      </div>
      <div className="mt-2 grid grid-cols-[1.35fr_0.75fr_0.9fr] gap-2">
        <select
          className="h-10 min-w-0 rounded-lg border border-border bg-surface px-2.5 text-xs font-semibold text-foreground outline-none transition focus:border-primary"
          value={parts.month}
          onChange={(event) => updatePart("month", event.target.value)}>
          
          <option value="">Month</option>
          {DOB_MONTHS.map((month) =>
          <option key={month.value} value={month.value}>
              {month.label}
            </option>
          )}
        </select>

        <select
          className="h-10 min-w-0 rounded-lg border border-border bg-surface px-2.5 text-xs font-semibold text-foreground outline-none transition focus:border-primary"
          value={parts.day}
          onChange={(event) => updatePart("day", event.target.value)}>
          
          <option value="">Day</option>
          {dayOptions.map((day) =>
          <option key={day} value={day}>
              {day}
            </option>
          )}
        </select>

        <select
          className="h-10 min-w-0 rounded-lg border border-border bg-surface px-2.5 text-xs font-semibold text-foreground outline-none transition focus:border-primary"
          value={parts.year}
          onChange={(event) => updatePart("year", event.target.value)}>
          
          <option value="">Year</option>
          {yearOptions.map((year) =>
          <option key={year} value={year}>
              {year}
            </option>
          )}
        </select>
      </div>
    </div>
  );

};

export default DobPicker;
