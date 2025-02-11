import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faEdit,
  faSignOutAlt,
  faDeleteLeft,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const ProfilePage = () => {
  const { user } = useSelector((state) => state.user);
  const [profileImage, setProfileImage] = useState(
    user?.image || "/default-avatar.png"
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className=" bg-gray-50 mx-auto p-6 space-y-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white  p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
                alt="Profile"
                className="w-24 h-24 rounded-full"
              />
              <label className="absolute bottom-1 right-1 bg-red-600 text-white w-8 h-8 text-sm flex items-center justify-center p-1 rounded-full cursor-pointer">
                <FontAwesomeIcon icon={faUpload} size="lg" />
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                {user?.fullname || "User Name"}
              </h2>
              <p className="text-gray-600">{user?.email}</p>
              <p className="text-sm text-red-600 font-semibold">{user?.role}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block font-medium">Full Name</label>
              <input
                type="text"
                value={user?.fullname}
                disabled
                className="w-full p-2 border rounded bg-gray-50"
              />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                value={user?.email}
                disabled
                className="w-full p-2 border rounded bg-gray-50"
              />
            </div>
            <div>
              <label className="block font-medium">Role</label>
              <input
                type="text"
                value={user?.role}
                disabled
                className="w-full p-2 border rounded bg-gray-50"
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
            <strong className="text-red-600">Premium Plan</strong>.
          </p>
          <p className="text-gray-600">
            Access to Quran & Hadith lessons, Fiqh, and Tafsir.
          </p>
          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
            Upgrade Plan
          </button>
        </div>

        <div className="flex justify-between mt-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded bg-gray-100 hover:bg-gray-50">
            <FontAwesomeIcon icon={faEdit} /> Edit Profile
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded">
            <FontAwesomeIcon icon={faTrash} /> Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
