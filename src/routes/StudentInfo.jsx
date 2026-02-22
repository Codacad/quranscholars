import { Link } from "react-router-dom";
import { useEditStudentDetails } from "../hooks/user_info/useEditStudentDetails";
import {
  Edit3,
  Save,
  X,
  Loader2,
  Mail,
  Phone,
  MapPin,
  BookOpenCheck,
  ShieldCheck,
} from "lucide-react";

const fields = [
  { key: "fullName", label: "Full name", icon: ShieldCheck },
  { key: "email", label: "Email", icon: Mail, locked: true },
  { key: "contactNumber", label: "Contact number", icon: Phone },
  { key: "dob", label: "Date of birth", type: "date" },
  { key: "address", label: "Address" },
  { key: "city", label: "City", icon: MapPin },
  { key: "state", label: "State / Province" },
  { key: "country", label: "Country" },
  { key: "zipCode", label: "Postal / Zip" },
  { key: "gender", label: "Gender" },
  { key: "status", label: "Application status", locked: true },
  { key: "notes", label: "Notes / Preferences", multiline: true },
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white/95 px-3 py-2.5 text-sm text-slate-800  outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";

const badgeClass = "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold";

const toDateInputValue = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().split("T")[0];
};

const StudentInfo = () => {
  const {
    userDetails,
    editableFields,
    handleEdit,
    handleChange,
    handleCancel,
    handleSave,
    error,
    admissionDetailsLoading,
    saveLoading,
  } = useEditStudentDetails();

  const hasData = Object.keys(userDetails || {}).length > 0;
  const selectedCourses = userDetails?.selectedCourses || [];
  const selectedCourseLabels = selectedCourses
    .map((course) => {
      if (typeof course === "string") return course;
      if (course && typeof course === "object") {
        return course.title || course.name || course._id || "";
      }
      return "";
    })
    .filter(Boolean);

  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,_rgba(185,28,28,0.08),_transparent_35%)] pb-12">
      {admissionDetailsLoading && (
        <div className="pointer-events-none fixed inset-0 z-40 grid place-items-center bg-white/60 backdrop-blur">
          <div className="flex items-center gap-3 rounded-full border bg-white px-4 py-2 ">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            <span className="text-sm text-muted-foreground">
              Loading your dashboard...
            </span>
          </div>
        </div>
      )}

      {!hasData && !admissionDetailsLoading ? (
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-20 text-center">
          <span className={`${badgeClass} border-primary/30 bg-primary/10 text-primary`}>
            No admission yet
          </span>
          <h1 className="text-3xl font-semibold text-secondary md:text-4xl">
            Join Quran Scholars to unlock your dashboard
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Submit the admission form to personalize your learning path, track
            status, and keep your information up to date in one place.
          </p>
          <Link to="/admission">
            <button
              type="button"
              className="mt-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Go to Admission
            </button>
          </Link>
        </div>
      ) : (
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pt-10 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Dashboard
              </div>
              <h1 className="mt-2 text-3xl font-bold text-secondary md:text-4xl">
                Your learning profile
              </h1>
              <p className="text-sm text-muted-foreground md:text-base">
                Edit your details, review course selections, and track admission
                status.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className={`${badgeClass} border-slate-300 bg-slate-100 capitalize text-slate-700`}>
                {userDetails.status || "pending"}
              </span>
              <span className={`${badgeClass} border-slate-300 bg-white text-slate-700`}>
                {selectedCourseLabels.length} course
                {selectedCourseLabels.length !== 1 && "s"}
              </span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <section className="rounded-3xl border border-slate-200 bg-white/90 p-6  ">
              <div className="mb-6 border-b border-slate-100 pb-3">
                <h2 className="text-xl font-semibold text-secondary">Profile details</h2>
                <p className="text-sm text-muted-foreground">
                  Click the pencil to edit a field. Changes save instantly.
                </p>
              </div>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {fields.map((field) => {
                    const value = userDetails?.[field.key] || "";
                    const isEditing = editableFields[field.key];
                    const Icon = field.icon;
                    const isLocked = field.locked;
                    return (
                      <div
                        key={field.key}
                        className={`relative rounded-xl border p-4  transition  ${
                          isEditing
                            ? "border-primary/60 bg-primary/5"
                            : "border-slate-200 bg-white"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="w-full space-y-1">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground">
                              {field.label}
                            </p>
                            {field.multiline ? (
                              <textarea
                                name={field.key}
                                value={value}
                                onChange={handleChange}
                                readOnly={!isEditing || isLocked}
                                rows={3}
                                className={`${inputClass} ${!isEditing ? "border-transparent p-0  focus:ring-0" : ""}`}
                              />
                            ) : (
                              <input
                                name={field.key}
                                type={field.type || "text"}
                                value={
                                  field.type === "date" && value
                                    ? toDateInputValue(value)
                                    : value
                                }
                                onChange={handleChange}
                                readOnly={!isEditing || isLocked}
                                className={`${inputClass} ${!isEditing ? "border-transparent p-0  focus:ring-0" : ""}`}
                              />
                            )}
                          </div>
                          {!isLocked && (
                            <div className="flex flex-col items-end gap-2">
                              <button
                                type="button"
                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50"
                                onClick={() =>
                                  isEditing
                                    ? handleCancel(field.key)
                                    : handleEdit(field.key)
                                }
                              >
                                {isEditing ? (
                                  <X className="h-4 w-4" />
                                ) : (
                                  <Edit3 className="h-4 w-4" />
                                )}
                              </button>
                              {isEditing && (
                                <button
                                  type="button"
                                  className="inline-flex h-8 items-center rounded-lg bg-primary px-3 text-xs font-semibold text-white transition hover:bg-primary/90 disabled:opacity-70"
                                  onClick={() =>
                                    handleSave(
                                      field.key,
                                      userDetails[field.key],
                                    )
                                  }
                                  disabled={saveLoading}
                                >
                                  {saveLoading ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                  ) : (
                                    <>
                                      <Save className="mr-1 h-4 w-4" />
                                      Save
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                          )}
                          {isLocked && (
                            <span className={`${badgeClass} border-slate-300 bg-white text-slate-600`}>
                              Locked
                            </span>
                          )}
                        </div>
                        {Icon && !isEditing && (
                          <div className="absolute bottom-3 right-4 text-muted-foreground/60">
                            <Icon className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {error && (
                  <p className="text-sm font-medium text-destructive">{error}</p>
                )}
              </div>
            </section>

            <div className="space-y-4">
              <section className="rounded-3xl border border-slate-200 bg-white/90 p-6  ">
                <div className="mb-4 border-b border-slate-100 pb-3">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-secondary">
                    <BookOpenCheck className="h-5 w-5 text-primary" />
                    Selected courses
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    These are the tracks you chose in your admission form.
                  </p>
                </div>
                <div className="space-y-3">
                  {selectedCourseLabels.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      No courses selected yet. Update your admission to add
                      courses.
                    </p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {selectedCourseLabels.map((course, index) => (
                        <span
                          key={`${course}-${index}`}
                          className={`${badgeClass} border-primary/30 bg-primary/10 text-primary`}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="h-px w-full bg-slate-200" />
                  <div className="text-xs text-muted-foreground">
                    Need changes? Go to{" "}
                    <Link to="/admission" className="text-primary underline">
                      Admission form
                    </Link>
                    .
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 ">
                <div className="mb-3 border-b border-slate-100 pb-2">
                  <h3 className="text-lg font-semibold text-secondary">Status</h3>
                  <p className="text-sm text-muted-foreground">
                    Stay aware of your application.
                  </p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-3 py-2">
                    <span>Current</span>
                    <span className={`${badgeClass} border-slate-300 bg-slate-100 capitalize text-slate-700`}>
                      {userDetails.status || "pending"}
                    </span>
                  </div>
                  <p>
                    Updates typically arrive within 24-48 hours via email or
                    WhatsApp.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentInfo;
