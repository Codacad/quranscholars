import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faCheck } from "@fortawesome/free-solid-svg-icons";

const ProfilePage = () => {
  const [userDetails, setUserDetails] = useState({
    fullName: "Mohd Rizwan",
    email: "iamrizwan40@gmail.com",
    contactNumber: "8979074004",
    dob: "1996-08-01",
    address: "Faridnagar, Thakurdwara, Moradabad",
    zipCode: "244601",
    city: "Moradabad",
    state: "Uttar Pradesh",
    country: "India",
    gender: "female",
    selectedCourses: ["Quran Basics", "Hadith Studies", "Islamic History"],
  });

  const handleEdit = (field) => {
    // setEditableFields(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSave = (field) => {
    // setEditableFields(prev => ({ ...prev, [field]: false }));
    // Add PATCH request logic here
  };

  return (
    <>
      <div className="profile md:w-[70%] mx-auto p-4 md:py-12">
        <div className="profile-header flex justify-between items-center border-b-2 pb-4">
          <div>
            <h1 className="profile-title text-xl text-red-600">Account</h1>
            <p className="text-sm text-gray-400">
              Real time acount information, can be updated
            </p>
          </div>
          <button className="profile-edit-btn">Logout</button>
        </div>

        <div className="flex col-span-1 items-center gap-4 w-full md:my-12 my-8">
          <img
            className="w-24 h-24"
            src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png"
            alt="Picture"
          />
          <div className="name-email">
            <h3 className="text-lg font-bold">{userDetails.fullName}</h3>
            <p className="text-gray-400">{userDetails.email}</p>
          </div>
          <div className="edit-profile-picture ml-auto">
            <button className="bg-gray-100 shadow-sm text-gray-700 px-4 py-2 rounded-md">
              Edit Profile Picture
            </button>
          </div>
        </div>

        <div className="profile-details grid md:grid-cols-20 gap-8">
          {Object.entries(userDetails).map(([key, value]) => (
            <>
              <div className="grid gap-4 w-full" key={key}>
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
                          value={value}
                          readOnly
                          id=""
                          className={`bg-gray-100 border-2 w-full rounded-xl border-gray-100 p-2 px-2 outline-none`}
                        />
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
                          className="absolute text-gray-400 right-2 bottom-[6px] profile-edit-btn w-6 h-8 rounded-md"
                          onClick={() => handleEdit(key)}
                        >
                          <FontAwesomeIcon icon={faPencil} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* <button
                      className="profile-save-btn"
                      onClick={() => handleSave(key)}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button> */}
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
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
