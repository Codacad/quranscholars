import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import {
  useUploadProfilePictureMutation,
  useGetProfilePicutreUrlQuery,
} from "../state/userApis/fileUploadApis";
import {
  faUpload,
  faEdit,
  faTrash,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import InlineSpinner from "../components/InlineSpinner";
import ProfileDeleteModal from "../components/Modals/ProfileDeleteModal";
const ProfilePage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    data,
    isLoading: isImageLoading,
    error: imageLoadingError,
  } = useGetProfilePicutreUrlQuery();
  const [uploadProfilePicture, { isLoading }] =
    useUploadProfilePictureMutation();
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState(null);
  const { user } = useSelector((state) => state.user);
  const [profileImage, setProfileImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
  );
  const [error, setError] = useState(null);
  const [saveButtonHide, setSaveButtonHide] = useState(true);
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [userDetails, setUserDetails] = useState({
    fullname: user?.fullname,
    email: user?.email,
  });
  // HandleImageChange
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      // setError("Please select a file");
      setProfileImage(
        "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
      );
      setIsImageSelected(false);
      return;
    }
    if (!allowedTypes.includes(selectedFile.type)) {
      setError(`${selectedFile.type} is not a valid image type`);
      setProfileImage(
        "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
      );
      setIsImageSelected(false);

      return;
    }
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setProfileImage(imageUrl);
      setIsImageSelected(true);
      setSaveButtonHide(false);
      setError(null);
      setFile(selectedFile);
    }
  };

  // Handle Image Upload
  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("No file, please select the file");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await uploadProfilePicture(formData).unwrap();
      setMessage(response.message);
      setSaveButtonHide(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Hhandle cancel image Upload
  const handelCancelUpload = () => {
    setSaveButtonHide(true);
    setIsImageSelected(false);
  };
  const handleProfileEditChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleProfileEdit = () => {
    console.log(userDetails);
  };

  const modalRef = useRef();
  const handleModalToggle = (toggle) => {
    setModalVisible(toggle);
  };
  useEffect(() => {
    if (modalVisible && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        {
          opacity: 0,
        },
        { opacity: 1, duration: .2 }
      );
    }
  }, [modalVisible]);
  const handleClose = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: .2,
        onComplete: () => setModalVisible(false),
      });
    } else {
      setModalVisible(false);
    }
  };
  return (
    <div className="bg-gray-50 mx-auto p-6 space-y-6">
      {/* Profile Delete Modal */}
      {modalVisible && (
        <ProfileDeleteModal ref={modalRef} onClose={handleClose} />
      )}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white  p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={(data && data.url) || profileImage}
                alt="Profile"
                className="md:w-24 md:h-24 w-16 h-16 rounded-full object-cover"
              />
              <label
                className={`absolute bottom-1 right-1 bg-red-900 text-white md:w-8 md:h-8 w-4 h-4 text-sm flex items-center justify-center p-1 rounded-full cursor-pointer`}
              >
                <FontAwesomeIcon
                  icon={faUpload}
                  className="max-md:w-2 max-md:h-2"
                />
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <div>
              <h2 className="md:text-2xl text-xl font-bold">
                {user?.fullname || "User Name"}
              </h2>
              <p className="text-gray-600">{user?.email}</p>
              <p className="text-sm text-red-900 font-semibold">{user?.role}</p>
            </div>
          </div>
          <div className="upload-actions flex items-center gap-2">
            <span className="mt-4 text-red-500">{error}</span>
            <button
              onClick={handleImageUpload}
              className={`bg-red-900 ${
                isImageSelected && !saveButtonHide ? "block" : "hidden"
              } flex items-center gap-2 text-white hover:opacity-95 px-2 py-1 mt-4 rounded-sm shadow-sm`}
            >
              {isLoading ? (
                <>
                  <InlineSpinner w={16} h={16} />
                  <span className="text-sm">Uploading...</span>
                </>
              ) : (
                "Save"
              )}
            </button>
            <button
              onClick={handelCancelUpload}
              className={`${
                isImageSelected && !saveButtonHide ? "block" : "hidden"
              } bg-gray-200 px-2 hover:opacity-80 py-1 mt-4 rounded-sm shadow-sm text-red-900`}
            >
              Cancel Upload
            </button>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block font-medium">Full Name</label>
              <input
                type="text"
                value={userDetails?.fullname}
                name="fullname"
                disabled={editMode ? false : true}
                className={`w-full p-2 border rounded ${
                  editMode
                    ? "bg-yellow-50 border-amber-500 focus:ring-amber-400 text-gray-800"
                    : "bg-gray-50"
                }`}
                onChange={handleProfileEditChange}
              />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                value={userDetails.email}
                name="email"
                disabled={editMode ? false : true}
                className={`w-full p-2 border rounded ${
                  editMode
                    ? "bg-yellow-50 border-amber-500 focus:ring-amber-400 text-gray-800"
                    : "bg-gray-50"
                }`}
                onChange={handleProfileEditChange}
              />
            </div>
            <div>
              <label className="block font-medium">Role</label>
              <input
                type="text"
                value={user?.role}
                disabled
                className={`w-full p-2 border rounded bg-gray-50`}
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-lg font-semibold">
            Islamic Education Subscription
          </h3>
          <p className="text-gray-600 mt-2">
            You are enrolled in the{" "}
            <strong className="text-red-900">Premium Plan</strong>.
          </p>
          <p className="text-gray-600">
            Access to Quran & Hadith lessons, Fiqh, and Tafsir.
          </p>
          <button className="mt-4 p-2 bg-red-900 text-white rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400 font-semibold transition">
            Upgrade Plan
          </button>
        </div>

        <div className="flex justify-between mt-4">
          <div className="edit-actions">
            {editMode ? (
              <div className="flex gap-3">
                <button
                  onClick={() => setEditMode(true)}
                  className="flex items-center gap-2 px-4 py-2 border bg-red-900 text-white rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                >
                  <FontAwesomeIcon icon={faSave} /> Save
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-900 border border-red-200 rounded-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 transition"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="enable-edit-mode">
                <button
                  onClick={() => setEditMode(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-900 border border-red-200 rounded-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
                >
                  <FontAwesomeIcon icon={faEdit} /> Edit Profile
                </button>
              </div>
            )}
          </div>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-900 border border-red-200 rounded-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            onClick={() => handleModalToggle(true)}
          >
            <FontAwesomeIcon icon={faTrash} /> Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
