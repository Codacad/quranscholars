import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  useGetMyAdmissionQuery,
  useJoinMutation,
  useUpdateMutation,
} from "../state/userApis/admissionApis";
import { toast, Toaster } from "sonner";
import {
  CalendarClock,
  CheckCircle2,
  Loader2,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import DobPicker from "../hooks/useDobPicker";
import { useGetCoursesQuery } from "../state/courseApis/courses.api";

const countryOptions = [
  "United States",
  "United Kingdom",
  "Canada",
  "Saudi Arabia",
  "United Arab Emirates",
  "Pakistan",
  "India",
  "Bangladesh",
  "Malaysia",
  "Qatar",
  "Other",
];

const admissionSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  email: z.string(),
  contactNumber: z.string().min(8, "Contact number required"),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date of birth is required"),
  address: z.string().min(5, "Address is required"),
  zipCode: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  country: z.string().min(2, "Country is required"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Gender is required",
  }),
  selectedCourses: z
    .array(z.string())
    .min(1, "Select at least one course")
    .refine((val) => new Set(val).size === val.length, "Duplicate courses"),
  notes: z.string().max(500, "Keep notes under 500 characters").optional(),
});

const normalizeDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().split("T")[0];
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2.5 text-sm text-slate-800 shadow-[0_1px_2px_rgba(15,23,42,0.04)] outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";

const labelClass = "mb-1 block text-sm font-semibold text-secondary";

const errorClass = "mt-1 text-xs font-medium text-destructive";

const badgeClass = "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold";

const getStatusBadgeClass = (status) => {
  const normalized = String(status || "").toLowerCase();
  if (normalized === "accepted") {
    return "border-emerald-300 bg-emerald-50 text-emerald-700";
  }
  if (normalized === "rejected") {
    return "border-red-300 bg-red-50 text-red-700";
  }
  if (normalized === "in-review") {
    return "border-sky-300 bg-sky-50 text-sky-700";
  }
  if (normalized === "pending") {
    return "border-amber-300 bg-amber-50 text-amber-700";
  }
  return "border-slate-300 bg-slate-100 text-slate-700";
};

const Admission = () => {
  const [showForm, setShowForm] = useState(false);
  const formSectionRef = useRef(null);
  const { user } = useSelector((state) => state.user);
  const { data } = useGetCoursesQuery();
  const courses = data?.data;
  const { data: admission, isFetching: isAdmissionLoading } =
    useGetMyAdmissionQuery(user?._id, {
      skip: !user?._id,
      refetchOnMountOrArgChange: true,
    });
  const [join, { isLoading: isJoining }] = useJoinMutation();
  const [update, { isLoading: isUpdating }] = useUpdateMutation();
  const hasExistingAdmission = Boolean(admission?._id);

  const defaultValues = useMemo(
    () => ({
      fullName: admission?.fullName || "",
      email: user?.email || "",
      contactNumber: admission?.contactNumber || "",
      dob: normalizeDate(admission?.dob) || "",
      address: admission?.address || "",
      zipCode: admission?.zipCode || "",
      city: admission?.city || "",
      state: admission?.state || "",
      country: admission?.country || "",
      gender: admission?.gender || "",
      selectedCourses: admission?.selectedCourses || [],
      notes: admission?.notes || "",
    }),
    [admission, user?.email],
  );

  const {
    register,
    reset,
    control,
    watch,
    handleSubmit: submitForm,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(admissionSchema),
    defaultValues,
    mode: "onBlur",
  });

  useEffect(() => {
    reset({
      fullName: admission?.fullName || "",
      email: user?.email || "",
      contactNumber: admission?.contactNumber || "",
      dob: normalizeDate(admission?.dob) || "",
      address: admission?.address || "",
      zipCode: admission?.zipCode || "",
      city: admission?.city || "",
      state: admission?.state || "",
      country: admission?.country || "",
      gender: admission?.gender || "",
      selectedCourses:
        admission?.selectedCourses?.map((course) =>
          typeof course === "object" ? course?._id?.toString() : String(course),
        ) || [],
      notes: admission?.notes || "",
    });
  }, [admission, user?.email, reset]);

  const isSubmitting = isJoining || isUpdating;

  useEffect(() => {
    if (hasExistingAdmission) {
      setShowForm(true);
    }
  }, [hasExistingAdmission]);

  const onSubmit = async (values) => {
    const payload = {
      ...values,
      selectedCourses: Array.from(new Set(values.selectedCourses)),
      notes: values.notes?.trim() || undefined,
    };

    if (admission?._id) {
      delete payload.email;
    }

    try {
      if (admission?._id) {
        await update(payload).unwrap();
        toast.success("Admission updated", {
          description: "Your latest details have been saved.",
        });
      } else {
        await join(payload).unwrap();
        toast.success("Admission submitted", {
          description: "We will review and reach out shortly.",
        });
      }
    } catch (error) {
      const message =
        error?.data?.message || "Unable to save admission at the moment.";
      toast.error(message);
    }
  };

  const selectedCount = watch("selectedCourses")?.length || 0;
  const completenessScore =
    (selectedCount ? 1 : 0) +
    (watch("fullName") ? 1 : 0) +
    (watch("contactNumber") ? 1 : 0) +
    (watch("dob") ? 1 : 0) +
    (watch("address") ? 1 : 0) +
    (watch("city") ? 1 : 0) +
    (watch("country") ? 1 : 0);
  const completeness = Math.min(100, Math.round((completenessScore / 7) * 100));

  const handleStartAdmission = () => {
    setShowForm(true);
    window.requestAnimationFrame(() => {
      formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };
  const displayStatus = admission?.status || "not submitted";
  const statusBadgeClass = getStatusBadgeClass(displayStatus);
  const snapshotStatus = admission?.status || "pending";
  const snapshotStatusLabel = admission?.status || "pending review";
  const snapshotStatusBadgeClass = getStatusBadgeClass(snapshotStatus);

  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,_rgba(185,28,28,0.1),_transparent_35%)] pb-12 pt-10">
      <Toaster richColors position="top-center" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:px-6">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            <Sparkles className="h-4 w-4" />
            Admission Center
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-3xl font-bold text-secondary md:text-4xl">
                Your pathway to Quran Scholars
              </h1>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground md:text-base">
                Submit your admission once and keep it updated. We prioritize
                clarity, so you can track status and refine your preferences.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`${badgeClass} capitalize ${statusBadgeClass}`}
              >
                {displayStatus}
              </span>
              <span className={`${badgeClass} border-slate-300 bg-white text-slate-600`}>
                {hasExistingAdmission ? "Editing existing profile" : "New admission"}
              </span>
            </div>
          </div>
        </div>

        {!hasExistingAdmission && !showForm && (
          <section className="relative overflow-hidden rounded-3xl border border-primary/20 bg-white/95 p-6 md:p-8 shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-slate-200/60 blur-3xl" />
            <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center gap-4 text-center">
              <span className={`${badgeClass} border-primary/30 bg-primary/10 text-primary`}>
                No admission submitted yet
              </span>
              <h2 className="text-2xl font-bold text-secondary md:text-3xl">
                Start your admission to unlock your learning journey
              </h2>
              <p className="text-sm text-muted-foreground md:text-base">
                You have not submitted your admission form yet. Complete it once,
                then you can update your details anytime.
              </p>
              <button
                type="button"
                onClick={handleStartAdmission}
                className="inline-flex items-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                Start Admission Form
              </button>
            </div>
          </section>
        )}

        {(hasExistingAdmission || showForm) && (
          <div ref={formSectionRef} className="grid items-start gap-6 lg:grid-cols-[2fr_1.1fr]">
          <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
            <div className="mb-6 border-b border-slate-100 pb-4">
              <h2 className="text-xl font-semibold text-secondary">Primary details</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We pre-fill what we can. Fields marked with * are required.
              </p>
            </div>

            <form className="space-y-8" onSubmit={submitForm(onSubmit)}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="full-name">
                    Full name*
                  </label>
                  <input
                    id="full-name"
                    placeholder="Your legal name"
                    className={inputClass}
                    {...register("fullName")}
                  />
                  {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
                </div>

                <div>
                  <label className={labelClass} htmlFor="email">
                    Email (locked)
                  </label>
                  <input id="email" className={`${inputClass} bg-slate-50`} readOnly {...register("email")} />
                  <p className="mt-1 text-xs text-muted-foreground">
                    We use your account email for verification.
                  </p>
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-number">
                    Contact number*
                  </label>
                  <input
                    id="contact-number"
                    placeholder="+1 555 123 4567"
                    type="tel"
                    className={inputClass}
                    {...register("contactNumber")}
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    WhatsApp number preferred for quick coordination.
                  </p>
                  {errors.contactNumber && (
                    <p className={errorClass}>{errors.contactNumber.message}</p>
                  )}
                </div>

                <div>
                  <label className={labelClass}>Date of birth*</label>
                  <Controller
                    control={control}
                    name="dob"
                    render={({ field }) => (
                      <DobPicker value={field.value} onChange={field.onChange} />
                    )}
                  />
                  {errors.dob && <p className={errorClass}>{errors.dob.message}</p>}
                </div>
              </div>

              <div className="grid gap-4">
                <div>
                  <label className={labelClass} htmlFor="address">
                    Address*
                  </label>
                  <input
                    id="address"
                    placeholder="Street, building, area"
                    className={inputClass}
                    {...register("address")}
                  />
                  {errors.address && <p className={errorClass}>{errors.address.message}</p>}
                </div>

                <div className="grid gap-4 md:grid-cols-4">
                  <div>
                    <label className={labelClass} htmlFor="zip-code">
                      Zip / Postal
                    </label>
                    <input
                      id="zip-code"
                      placeholder="00000"
                      className={inputClass}
                      {...register("zipCode")}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="city">
                      City*
                    </label>
                    <input id="city" placeholder="City" className={inputClass} {...register("city")} />
                    {errors.city && <p className={errorClass}>{errors.city.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="state">
                      State / Province*
                    </label>
                    <input id="state" placeholder="State" className={inputClass} {...register("state")} />
                    {errors.state && <p className={errorClass}>{errors.state.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="country">
                      Country*
                    </label>
                    <Controller
                      control={control}
                      name="country"
                      render={({ field }) => (
                        <select
                          id="country"
                          className={`${inputClass} appearance-none bg-[linear-gradient(45deg,transparent_50%,#64748b_50%),linear-gradient(135deg,#64748b_50%,transparent_50%)] bg-[position:calc(100%-18px)_calc(50%-2px),calc(100%-12px)_calc(50%-2px)] bg-[size:6px_6px,6px_6px] bg-no-repeat pr-8`}
                          value={field.value || ""}
                          onChange={field.onChange}
                        >
                          <option value="">Choose</option>
                          {countryOptions.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                    {errors.country && <p className={errorClass}>{errors.country.message}</p>}
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div>
                  <label className={labelClass}>Gender*</label>
                  <Controller
                    control={control}
                    name="gender"
                    render={({ field }) => (
                      <div className="grid grid-cols-3 gap-3">
                        {["male", "female", "other"].map((option) => {
                          const active = field.value === option;
                          return (
                            <label
                              key={option}
                              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-3 text-sm font-medium capitalize transition ${
                                active
                                  ? "border-primary bg-primary/5 text-primary"
                                  : "border-slate-200 bg-white hover:border-primary/40"
                              }`}
                            >
                              <input
                                type="radio"
                                className="h-4 w-4 accent-primary"
                                value={option}
                                checked={active}
                                onChange={(event) => field.onChange(event.target.value)}
                              />
                              {option}
                            </label>
                          );
                        })}
                      </div>
                    )}
                  />
                  {errors.gender && <p className={errorClass}>{errors.gender.message}</p>}
                </div>

                <div>
                  <label className={labelClass}>Choose course(s)*</label>
                  <Controller
                    control={control}
                    name="selectedCourses"
                    render={({ field }) => (
                      <div className="max-h-[360px] overflow-y-auto rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-3">
                        <div className="grid gap-3 py-4 sm:grid-cols-2">
                          {courses?.map((course) => {
                            const courseId = String(course._id);
                            const checked = field.value?.includes(courseId);
                            return (
                              <label
                                key={course._id}
                              className={`group relative flex cursor-pointer flex-col gap-2 rounded-2xl border px-4 py-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition ${
                                  checked
                                    ? "border-primary/50 bg-primary/5"
                                    : "border-slate-200 bg-white/90"
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  className="h-4 w-4 accent-primary"
                                  checked={checked}
                                  onChange={(event) => {
                                    const current = field.value || [];
                                    if (event.target.checked) {
                                      field.onChange([...current, courseId]);
                                    } else {
                                      field.onChange(current.filter((id) => id !== courseId));
                                    }
                                  }}
                                />
                                <div className="space-y-1">
                                  <p className="text-sm font-semibold text-secondary">{course.title}</p>
                                  <p className="text-xs text-muted-foreground">{course.category}</p>
                                </div>
                                {checked && (
                                  <div className="absolute right-3 top-3 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-primary">
                                    Selected
                                  </div>
                                )}
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  />
                  {errors.selectedCourses && (
                    <p className={errorClass}>{errors.selectedCourses.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="notes">
                  Additional notes
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  className={inputClass}
                  placeholder="Tell us about your goals, timing preferences, or any accommodations you need."
                  {...register("notes")}
                />
                {errors.notes && <p className={errorClass}>{errors.notes.message}</p>}
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                <div className="text-sm text-muted-foreground">
                  {selectedCount ? (
                    <>
                      {selectedCount} course{selectedCount > 1 ? "s" : ""} selected. You can update anytime.
                    </>
                  ) : (
                    "Select at least one course to continue."
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex min-w-[180px] items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {hasExistingAdmission ? "Save updates" : "Submit admission"}
                  {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                </button>
              </div>
            </form>
          </section>

          <div className="space-y-4 lg:self-start">
            <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
              <div className="mb-4 border-b border-slate-100 pb-4">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-secondary">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  Application Snapshot
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Instant overview of what we will review on our side.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className={`${badgeClass} capitalize ${snapshotStatusBadgeClass}`}>
                    {snapshotStatusLabel}
                  </span>
                  <span className={`${badgeClass} border-slate-300 bg-white text-slate-700`}>
                    {selectedCount || admission?.selectedCourses?.length || 0} course choices
                  </span>
                  <span className={`${badgeClass} border-slate-300 bg-slate-100 text-slate-700`}>
                    {admission?.city || "City TBD"}, {admission?.country || "Country"}
                  </span>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Profile completeness</span>
                    <span>{completeness}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-200">
                    <div
                      className="h-2 rounded-full bg-primary transition-all"
                      style={{ width: `${completeness}%` }}
                    />
                  </div>
                </div>
                <div className="grid gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
                  <div className="flex items-center gap-3">
                    <CalendarClock className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <p className="font-semibold">Expected review</p>
                      <p className="text-muted-foreground">
                        24-48 hours after submission. We contact via WhatsApp and email.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <p className="font-semibold">One profile per user</p>
                      <p className="text-muted-foreground">
                        Keep your details updated instead of submitting again.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Your information is only visible to the admissions team.
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
              <h3 className="pb-3 text-lg font-semibold text-secondary">How it works</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex gap-3 rounded-xl border border-primary/20 bg-primary/[0.07] p-3">
                  <div className="mt-0.5 h-6 w-6 rounded-full bg-primary text-center text-xs font-semibold leading-6 text-white">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Submit details</p>
                    <p>Complete the form and choose your desired study tracks.</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <div className="mt-0.5 h-6 w-6 rounded-full bg-secondary text-center text-xs font-semibold leading-6 text-white">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Match and schedule</p>
                    <p>We pair you with a mentor and set orientation within two days.</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3">
                  <div className="mt-0.5 h-6 w-6 rounded-full border border-muted-foreground text-center text-xs font-semibold leading-6 text-muted-foreground">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Start learning</p>
                    <p>Track your classes and adjust preferences anytime.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          </div>
        )}
      </div>
      {(isAdmissionLoading || isSubmitting) && (
        <div className="pointer-events-none fixed inset-0 z-40 grid place-items-center bg-white/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-full border bg-white px-4 py-2">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            <span className="text-sm text-muted-foreground">
              {isAdmissionLoading ? "Loading your admission..." : "Saving changes..."}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admission;
