import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { useEditStudentDetails } from "../hooks/user_info/useEditStudentDetails";
import { Link } from "react-router-dom";
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
  const keys = Object.keys(userDetails).length;
  return (
    <>
      {admissionDetailsLoading ? (
        <div className="non-position-spinner-wrapper">
          <div className="spinner"></div>
        </div>
      ) : keys === 0 ? (
        <div className="w-full p-8 bg-red-100 flex justify-center items-center min-h-[80vh]">
          <div className="md:w-[70%] text-center flex flex-col gap-4">
            <h2 className="text-red-600 text-4xl">Join us right now</h2>
            <p className="text-2xl text-red-400">
              Our online Islamic learning platform is here to help you. You can
              submit your details to get you admission for you beatiful jounry
            </p>
            <Link
              to={"/admission"}
              className="p-2 rounded-md w-16 bg-red-600 mx-auto text-white"
            >
              Join
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 transition-all">
          <div className="md:w-[70%] mx-auto p-4 md:py-12">
            <div className="profile-header flex justify-between items-center border-b pb-4">
              <div>
                <h1 className="profile-title text-2xl mb-1 text-red-600">
                  Dashboard
                </h1>
                <p className="text-sm text-gray-400">
                  Real time acount information, you can update your details here
                </p>
              </div>
              {/* <button className="profile-edit-btn">Logout</button> */}
            </div>
            <div className="profile-details mt-8 grid md:grid-cols-20 gap-8">
              {Object.entries(userDetails).map(([key, value]) => (
                <div className="" key={key}>
                  <div className="grid gap-4 w-full">
                    <div className="details w-full gap-4 flex items-end">
                      <div className="flex flex-col w-full gap-2 relative">
                        {key === "selectedCourses" ? (
                          <label htmlFor={key}>YOUR COURSES</label>
                        ) : key === "zipCode" ? (
                          <label htmlFor={key}>POSTAL CODE</label>
                        ) : key === "contactNumber" ? (
                          <label htmlFor={key}>CONTACT NUMBER</label>
                        ) : (
                          <label htmlFor={key}>{key.toUpperCase()}</label>
                        )}
                        {key !== "selectedCourses" && (
                          <>
                            <input
                              type="text"
                              name={key}
                              value={key == "dob" ? value.split("T")[0] : value}
                              readOnly={!editableFields[key]}
                              id=""
                              onChange={handleChange}
                              autoFocus
                              className={`${
                                !editableFields[key]
                                  ? "bg-gray-100"
                                  : "bg-white border-2 border-red-600"
                              } border-2 w-full text-gray-500 rounded-xl border-gray-100 p-2 px-4 outline-none`}
                            />
                            {!editableFields[key] ? (
                              <button
                                title={`Edit ${
                                  key === "selectedCourses"
                                    ? "Selected Courses"
                                    : key === "fullName"
                                    ? "Full Name"
                                    : key === "zipCode"
                                    ? "Postal Code"
                                    : key === "contactNumber"
                                    ? "Contact Number"
                                    : key
                                }`}
                                className={`absolute ${
                                  key === "email" ? "hidden" : ""
                                } text-gray-400 text-xl right-4 bottom-[6px] profile-edit-btn w-6 h-8 rounded-md`}
                                onClick={() => handleEdit(key)}
                              >
                                <FontAwesomeIcon icon={faPencil} />
                              </button>
                            ) : (
                              <div className="absolute flex items-center justify-center gap-4 text-gray-400 right-2 bottom-[6px] profile-edit-btn w-20 h-8 rounded-md">
                                {saveLoading ? (
                                  <div className="spinner"></div>
                                ) : (
                                  <button
                                    className="profile-save-btn text-xl flex items-center justify-center gap-1"
                                    onClick={() => handleSave(key, value)}
                                  >
                                    <FontAwesomeIcon icon={faCheck} />
                                  </button>
                                )}
                                <button
                                  onClick={() => handleCancel(key)}
                                  className="flex text-xl items-center justify-center gap-1"
                                >
                                  <FontAwesomeIcon icon={faClose} />
                                </button>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    {key === "selectedCourses" && (
                      <div className="flex flex-wrap gap-2">
                        {value.map((course) => (
                          <div
                            key={course}
                            className="bg-red-100 text-red-600 p-2 px-4 rounded-md"
                          >
                            {course}
                          </div>
                        ))}
                      </div>
                    )}
                    {value === "" && error && (
                      <p className="text-red-500">{error}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentInfo;
