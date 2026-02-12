import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  useGetMyAdmissionQuery,
  useJoinMutation,
  useUpdateMutation,
} from "../state/userApis/admissionApis";
import { toast, Toaster } from "sonner";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { ScrollArea } from "../components/ui/scroll-area";
import { cn } from "../lib/utils";
import {
  CalendarClock,
  CheckCircle2,
  Loader2,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const courseOptions = [
  {
    name: "Quran with Tajweed",
    detail: "Recitation, Makharij, daily feedback",
  },
  { name: "Madani Qaida", detail: "Foundations for beginners" },
  { name: "Farz Uloom", detail: "Core obligations and fiqh basics" },
  { name: "Hadith", detail: "Selections with commentary" },
  { name: "Tafseer", detail: "Context and reflections" },
  { name: "Fiqh (Hanafi)", detail: "Applied jurisprudence" },
  { name: "Urdu", detail: "Language immersion" },
  { name: "Prophet's Stories", detail: "Seerah narratives" },
  { name: "Masnoon Duayen", detail: "Daily duas with meaning" },
  { name: "Sarf & Nahv", detail: "Arabic morphology & grammar" },
];

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
  email: z.string().email("Valid email required"),
  contactNumber: z.string().min(8, "Contact number required"),
  dob: z.string().min(1, "Date of birth is required"),
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

const Admission = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { data: admission, isFetching: isAdmissionLoading } =
    useGetMyAdmissionQuery();
  const [join, { isLoading: isJoining }] = useJoinMutation();
  const [update, { isLoading: isUpdating }] = useUpdateMutation();

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

  const form = useForm({
    resolver: zodResolver(admissionSchema),
    defaultValues,
    mode: "onBlur",
  });

  useEffect(() => {
    form.reset(defaultValues);
  }, [defaultValues, form]);

  const isSubmitting = isJoining || isUpdating;

  const handleSubmit = async (values) => {
    const payload = {
      ...values,
      selectedCourses: Array.from(new Set(values.selectedCourses)),
      notes: values.notes?.trim() || undefined,
    };

    // Backend forbids changing email; strip it from update payloads
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
        navigate("/");
      }
    } catch (error) {
      const message =
        error?.data?.message || "Unable to save admission at the moment.";
      toast.error(message);
    }
  };

  const selectedCount = form.watch("selectedCourses")?.length || 0;
  const completenessScore =
    (selectedCount ? 1 : 0) +
    (form.watch("fullName") ? 1 : 0) +
    (form.watch("contactNumber") ? 1 : 0) +
    (form.watch("dob") ? 1 : 0) +
    (form.watch("address") ? 1 : 0) +
    (form.watch("city") ? 1 : 0) +
    (form.watch("country") ? 1 : 0);
  const completeness = Math.min(100, Math.round((completenessScore / 7) * 100));

  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,_rgba(185,28,28,0.08),_transparent_35%)] pb-12 pt-10">
      <Toaster richColors />
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
                clarity, so you can track status, refine your preferences, and
                get started faster.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="capitalize">
                {admission?.status || "not submitted"}
              </Badge>
              <Badge variant="outline">
                {admission ? "Editing existing profile" : "New admission"}
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1.1fr]">
          <Card className="shadow-lg shadow-primary/5">
            <CardHeader className="pb-4">
              <CardTitle>Primary details</CardTitle>
              <CardDescription>
                We pre-fill what we can. Only fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  className="space-y-8"
                  onSubmit={form.handleSubmit(handleSubmit)}
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name*</FormLabel>
                          <FormControl>
                            <Input placeholder="Your legal name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email (locked)</FormLabel>
                          <FormControl>
                            <Input {...field} readOnly />
                          </FormControl>
                          <FormDescription>
                            We use your account email for verification.
                          </FormDescription>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="contactNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact number*</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+1 555 123 4567"
                              type="tel"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            WhatsApp number preferred for quick coordination.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dob"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of birth*</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-4">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address*</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Street, building, area"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-4 md:grid-cols-4">
                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Zip / Postal</FormLabel>
                            <FormControl>
                              <Input placeholder="00000" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City*</FormLabel>
                            <FormControl>
                              <Input placeholder="City" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State / Province*</FormLabel>
                            <FormControl>
                              <Input placeholder="State" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country*</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value || undefined}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Choose" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {countryOptions.map((country) => (
                                  <SelectItem key={country} value={country}>
                                    {country}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="grid gap-6">
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Gender*</FormLabel>
                          <FormControl>
                            <RadioGroup
                              className="grid grid-cols-3 gap-3"
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              {["male", "female", "other"].map((option) => (
                                <FormItem
                                  key={option}
                                  className={cn(
                                    "flex items-center gap-3 rounded-lg border px-3 py-3 transition hover:border-primary/50",
                                    field.value === option &&
                                      "border-primary bg-primary/5",
                                  )}
                                >
                                  <FormControl>
                                    <RadioGroupItem value={option} />
                                  </FormControl>
                                  <FormLabel className="capitalize">
                                    {option}
                                  </FormLabel>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="selectedCourses"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Choose course(s)*</FormLabel>
                          <ScrollArea className="max-h-[380px] rounded-xl border bg-white/70 px-3">
                            <div className="grid gap-3 py-4 sm:grid-cols-2">
                              {courseOptions.map((course) => {
                                const checked = field.value?.includes(
                                  course.name,
                                );
                                return (
                                  <FormItem
                                    key={course.name}
                                    className={cn(
                                      "group relative flex flex-col gap-2 rounded-2xl border px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
                                      checked && "border-primary bg-primary/5",
                                    )}
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={checked}
                                        onCheckedChange={(value) => {
                                          const current = field.value || [];
                                          if (value) {
                                            field.onChange([
                                              ...current,
                                              course.name,
                                            ]);
                                          } else {
                                            field.onChange(
                                              current.filter(
                                                (c) => c !== course.name,
                                              ),
                                            );
                                          }
                                        }}
                                      />
                                    </FormControl>
                                    <div className="space-y-1">
                                      <FormLabel className="leading-none">
                                        {course.name}
                                      </FormLabel>
                                      <p className="text-xs text-muted-foreground">
                                        {course.detail}
                                      </p>
                                    </div>
                                    {checked && (
                                      <div className="absolute right-3 top-3 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-primary">
                                        Selected
                                      </div>
                                    )}
                                  </FormItem>
                                );
                              })}
                            </div>
                          </ScrollArea>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional notes</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your goals, timing preferences, or any accommodations you need."
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <CardFooter className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                    <div className="text-sm text-muted-foreground">
                      {selectedCount ? (
                        <>
                          {selectedCount} course{selectedCount > 1 ? "s" : ""}{" "}
                          selected · You can update anytime.
                        </>
                      ) : (
                        "Select at least one course to continue."
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="min-w-[180px]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      {admission ? "Save updates" : "Submit admission"}
                      {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="h-full shadow-lg shadow-primary/5">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  Application Snapshot
                </CardTitle>
                <CardDescription>
                  Instant overview of what we will review on our side.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>{admission?.status || "pending review"}</Badge>
                  <Badge variant="outline">
                    {selectedCount || admission?.selectedCourses?.length || 0}{" "}
                    course choices
                  </Badge>
                  <Badge variant="secondary">
                    {admission?.city || "City TBD"},{" "}
                    {admission?.country || "Country"}
                  </Badge>
                </div>
                <div className="rounded-lg border bg-muted/20 p-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Profile completeness</span>
                    <span>{completeness}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-muted">
                    <div
                      className="h-2 rounded-full bg-primary transition-all"
                      style={{ width: `${completeness}%` }}
                    />
                  </div>
                </div>
                <div className="grid gap-3 rounded-lg border bg-background p-3">
                  <div className="flex items-center gap-3">
                    <CalendarClock className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <p className="font-semibold">Expected review</p>
                      <p className="text-muted-foreground">
                        24-48 hours after submission. We contact via WhatsApp
                        and email.
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
              </CardContent>
              <CardFooter className="flex items-center gap-2 border-t bg-muted/30 px-6 py-4 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Your information is only visible to the admissions team.
              </CardFooter>
            </Card>

            <Card className="shadow-md shadow-primary/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">How it works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex gap-3 rounded-lg border bg-primary/5 p-3">
                  <div className="mt-0.5 h-6 w-6 rounded-full bg-primary text-center text-xs font-semibold leading-6 text-white">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">
                      Submit details
                    </p>
                    <p>
                      Complete the form and choose your desired study tracks.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-lg border bg-secondary/5 p-3">
                  <div className="mt-0.5 h-6 w-6 rounded-full bg-secondary text-center text-xs font-semibold leading-6 text-white">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">
                      Match & schedule
                    </p>
                    <p>
                      We pair you with a mentor and set orientation within two
                      days.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-lg border bg-muted/50 p-3">
                  <div className="mt-0.5 h-6 w-6 rounded-full border border-muted-foreground text-center text-xs font-semibold leading-6 text-muted-foreground">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">
                      Start learning
                    </p>
                    <p>Track your classes and adjust preferences anytime.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {(isAdmissionLoading || isSubmitting) && (
        <div className="pointer-events-none fixed inset-0 z-30 grid place-items-center bg-white/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-full border bg-white px-4 py-2 shadow-md">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            <span className="text-sm text-muted-foreground">
              {isAdmissionLoading
                ? "Loading your admission..."
                : "Saving changes..."}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admission;
