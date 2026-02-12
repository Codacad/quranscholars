import { Link } from "react-router-dom";
import { useEditStudentDetails } from "../hooks/user_info/useEditStudentDetails";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
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
import { cn } from "../lib/utils";

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

  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,_rgba(185,28,28,0.08),_transparent_35%)] pb-12">
      {admissionDetailsLoading && (
        <div className="pointer-events-none fixed inset-0 z-30 grid place-items-center bg-white/60 backdrop-blur">
          <div className="flex items-center gap-3 rounded-full border bg-white px-4 py-2 shadow-md">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            <span className="text-sm text-muted-foreground">
              Loading your dashboard...
            </span>
          </div>
        </div>
      )}

      {!hasData && !admissionDetailsLoading ? (
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-20 text-center">
          <Badge className="bg-primary/10 text-primary">No admission yet</Badge>
          <h1 className="text-3xl font-semibold text-secondary md:text-4xl">
            Join Quran Scholars to unlock your dashboard
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Submit the admission form to personalize your learning path, track
            status, and keep your information up to date in one place.
          </p>
          <Link to="/admission">
            <Button className="mt-2 px-6">Go to Admission</Button>
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
              <Badge variant="secondary" className="capitalize">
                {userDetails.status || "pending"}
              </Badge>
              <Badge variant="outline">
                {selectedCourses.length} course
                {selectedCourses.length !== 1 && "s"}
              </Badge>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <Card className="shadow-lg shadow-primary/5">
              <CardHeader className="pb-3">
                <CardTitle>Profile details</CardTitle>
                <CardDescription>
                  Click the pencil to edit a field. Changes save instantly.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {fields.map((field) => {
                    const value = userDetails?.[field.key] || "";
                    const isEditing = editableFields[field.key];
                    const Icon = field.icon;
                    const isLocked = field.locked;
                    return (
                      <div
                        key={field.key}
                        className={cn(
                          "relative rounded-xl border bg-white p-4 shadow-sm transition hover:shadow",
                          isEditing && "border-primary/60 bg-primary/5",
                        )}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground">
                              {field.label}
                            </p>
                            {field.multiline ? (
                              <Textarea
                                name={field.key}
                                value={value}
                                onChange={handleChange}
                                readOnly={!isEditing || isLocked}
                                rows={3}
                                className={cn(
                                  "text-sm",
                                  !isEditing &&
                                    "border-transparent p-0 shadow-none",
                                )}
                              />
                            ) : (
                              <Input
                                name={field.key}
                                type={field.type || "text"}
                                value={
                                  field.type === "date" && value
                                    ? new Date(value)
                                        .toISOString()
                                        .split("T")[0]
                                    : value
                                }
                                onChange={handleChange}
                                readOnly={!isEditing || isLocked}
                                className={cn(
                                  "text-sm",
                                  !isEditing &&
                                    "border-transparent p-0 shadow-none",
                                )}
                              />
                            )}
                          </div>
                          {!isLocked && (
                            <div className="flex flex-col items-end gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
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
                              </Button>
                              {isEditing && (
                                <Button
                                  size="sm"
                                  className="h-8"
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
                                      <Save className="mr-2 h-4 w-4" />
                                      Save
                                    </>
                                  )}
                                </Button>
                              )}
                            </div>
                          )}
                          {isLocked && <Badge variant="outline">Locked</Badge>}
                        </div>
                        {Icon && !isEditing && (
                          <div className="absolute right-4 bottom-3 text-muted-foreground/60">
                            <Icon className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {error && (
                  <p className="text-sm font-medium text-destructive">
                    {error}
                  </p>
                )}
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card className="shadow-md shadow-primary/5">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookOpenCheck className="h-5 w-5 text-primary" />
                    Selected courses
                  </CardTitle>
                  <CardDescription>
                    These are the tracks you chose in your admission form.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {selectedCourses.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      No courses selected yet. Update your admission to add
                      courses.
                    </p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {selectedCourses.map((course) => (
                        <Badge
                          key={course}
                          className="bg-primary/10 text-primary"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <Separator />
                  <div className="text-xs text-muted-foreground">
                    Need changes? Go to{" "}
                    <Link to="/admission" className="text-primary underline">
                      Admission form
                    </Link>
                    .
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Status</CardTitle>
                  <CardDescription>
                    Stay aware of your application.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-3 py-2">
                    <span>Current</span>
                    <Badge variant="secondary" className="capitalize">
                      {userDetails.status || "pending"}
                    </Badge>
                  </div>
                  <p>
                    Updates typically arrive within 24-48 hours via email or
                    WhatsApp.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentInfo;
