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
  { value: "12", label: "December" },
];

const getDaysInMonth = (year, month) => {
  if (!year || !month) return 31;
  return new Date(Number(year), Number(month), 0).getDate();
};

const toTwoDigits = (value) => String(value).padStart(2, "0");

const selectClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800  outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";

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
    [maxDays],
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
    <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
      <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <CalendarDays className="h-4 w-4 text-primary" />
        Pick date of birth
      </div>
      <div className="grid gap-2 sm:grid-cols-3">
        <select
          className={selectClass}
          value={parts.month}
          onChange={(event) => updatePart("month", event.target.value)}
        >
          <option value="">Month</option>
          {DOB_MONTHS.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>

        <select
          className={selectClass}
          value={parts.day}
          onChange={(event) => updatePart("day", event.target.value)}
        >
          <option value="">Day</option>
          {dayOptions.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <select
          className={selectClass}
          value={parts.year}
          onChange={(event) => updatePart("year", event.target.value)}
        >
          <option value="">Year</option>
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DobPicker;