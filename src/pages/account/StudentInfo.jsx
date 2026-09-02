import { Link } from "react-router-dom";
import { useEditStudentDetails } from "@/hooks/userInfo/useEditStudentDetails.js";
import {
  Edit3,
  Save,
  X,
  Loader2,
  Mail,
  Phone,
  MapPin,
  BookOpenCheck,
  ShieldCheck } from
"lucide-react";

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
{ key: "notes", label: "Notes / Preferences", multiline: true }];







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
    saveLoading
  } = useEditStudentDetails();

  const hasData = Object.keys(userDetails || {}).length > 0;
  const selectedCourses = userDetails?.selectedCourses || [];
  const selectedCourseLabels = selectedCourses.
  map((course) => {
    if (typeof course === "string") return course;
    if (course && typeof course === "object") {
      return course.title || course.name || course._id || "";
    }
    return "";
  }).
  filter(Boolean);

  return (
    <div>
      {admissionDetailsLoading &&
      <div>
          <div>
            <Loader2 />
            <span>
              Loading your dashboard...
            </span>
          </div>
        </div>
      }

      {!hasData && !admissionDetailsLoading ?
      <div>
          <span>
            No admission yet
          </span>
          <h1>
            Join Quran Scholars to unlock your dashboard
          </h1>
          <p>
            Submit the admission form to personalize your learning path, track
            status, and keep your information up to date in one place.
          </p>
          <Link to="/admission">
            <button
            type="button">

            
              Go to Admission
            </button>
          </Link>
        </div> :

      <div>
          <div>
            <div>
              <div>
                Dashboard
              </div>
              <h1>
                Your learning profile
              </h1>
              <p>
                Edit your details, review course selections, and track admission
                status.
              </p>
            </div>
            <div>
              <span>
                {userDetails.status || "pending"}
              </span>
              <span>
                {selectedCourseLabels.length} course
                {selectedCourseLabels.length !== 1 && "s"}
              </span>
            </div>
          </div>

          <div>
            <section>
              <div>
                <h2>Profile details</h2>
                <p>
                  Click the pencil to edit a field. Changes save instantly.
                </p>
              </div>
              <div>
                <div>
                  {fields.map((field) => {
                  const value = userDetails?.[field.key] || "";
                  const isEditing = editableFields[field.key];
                  const Icon = field.icon;
                  const isLocked = field.locked;
                  return (
                    <div
                      key={field.key}>





                      
                        <div>
                          <div>
                            <p>
                              {field.label}
                            </p>
                            {field.multiline ?
                          <textarea
                            name={field.key}
                            value={value}
                            onChange={handleChange}
                            readOnly={!isEditing || isLocked}
                            rows={3} /> :



                          <input
                            name={field.key}
                            type={field.type || "text"}
                            value={
                            field.type === "date" && value ?
                            toDateInputValue(value) :
                            value
                            }
                            onChange={handleChange}
                            readOnly={!isEditing || isLocked} />


                          }
                          </div>
                          {!isLocked &&
                        <div>
                              <button
                            type="button"

                            onClick={() =>
                            isEditing ?
                            handleCancel(field.key) :
                            handleEdit(field.key)
                            }>
                            
                                {isEditing ?
                            <X /> :

                            <Edit3 />
                            }
                              </button>
                              {isEditing &&
                          <button
                            type="button"

                            onClick={() =>
                            handleSave(
                              field.key,
                              userDetails[field.key]
                            )
                            }
                            disabled={saveLoading}>
                            
                                  {saveLoading ?
                            <Loader2 /> :

                            <>
                                      <Save />
                                      Save
                                    </>
                            }
                                </button>
                          }
                            </div>
                        }
                          {isLocked &&
                        <span>
                              Locked
                            </span>
                        }
                        </div>
                        {Icon && !isEditing &&
                      <div>
                            <Icon />
                          </div>
                      }
                      </div>);

                })}
                </div>

                {error &&
              <p>{error}</p>
              }
              </div>
            </section>

            <div>
              <section>
                <div>
                  <h3>
                    <BookOpenCheck />
                    Selected courses
                  </h3>
                  <p>
                    These are the tracks you chose in your admission form.
                  </p>
                </div>
                <div>
                  {selectedCourseLabels.length === 0 ?
                <p>
                      No courses selected yet. Update your admission to add
                      courses.
                    </p> :

                <div>
                      {selectedCourseLabels.map((course, index) =>
                  <span
                    key={`${course}-${index}`}>

                    
                          {course}
                        </span>
                  )}
                    </div>
                }
                  <div />
                  <div>
                    Need changes? Go to{" "}
                    <Link to="/admission">
                      Admission form
                    </Link>
                    .
                  </div>
                </div>
              </section>

              <section>
                <div>
                  <h3>Status</h3>
                  <p>
                    Stay aware of your application.
                  </p>
                </div>
                <div>
                  <div>
                    <span>Current</span>
                    <span>
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
      }
    </div>);

};

export default StudentInfo;
