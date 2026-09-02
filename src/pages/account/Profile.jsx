import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import {
  useUploadProfilePictureMutation,
  useGetProfilePicutreUrlQuery } from
"@/services/api/user/fileUploadApis.js";
import { useSelector } from "react-redux";
import ProfileDeleteModal from "@/features/profile/components/ProfileDeleteModal.jsx";
import {
  Camera,
  CheckCircle2,
  Edit3,
  Globe2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Shield,
  X } from
"lucide-react";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];






const ProfilePage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { data } = useGetProfilePicutreUrlQuery();
  const [uploadProfilePicture, { isLoading: isUploading }] =
  useUploadProfilePictureMutation();
  const { user } = useSelector((state) => state.user);

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const [userDetails, setUserDetails] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    bio: "Committed to consistent Quran study and deeper understanding.",
    location: "--",
    phone: "--"
  });

  useEffect(() => {
    setUserDetails((prev) => ({
      ...prev,
      fullname: user?.fullname || prev.fullname,
      email: user?.email || prev.email
    }));
  }, [user]);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      setError(`${selectedFile.type} is not a supported image format.`);
      return;
    }
    setFile(selectedFile);
    setError(null);
  };

  const handleImageUpload = async () => {
    if (!file) {
      setError("Please select an image first.");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      await uploadProfilePicture(formData).unwrap();
      setMessage("Profile picture updated!");
      setFile(null);
    } catch (err) {
      setError(err?.data?.message || "Upload failed, try again.");
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    setMessage("Profile details saved.");
    setEditMode(false);
  };

  return (
    <div>
      <Toaster
        position="top-center"
        visibleToasts={3}
        toastOptions={{ duration: 4500 }} />
      
      <AnimatePresence>
        {modalVisible ?
        <ProfileDeleteModal onClose={() => setModalVisible(false)} /> :
        null}
      </AnimatePresence>

      <div>
        <div>
          <div>
            <span>
              Profile
            </span>
            <h1>
              Your personal workspace
            </h1>
            <p>
              Manage your identity, contact info, and learning preferences.
            </p>
          </div>
          <div>
            <span>
              {user?.role || "student"}
            </span>
            <span>
              <CheckCircle2 />
              Verified
            </span>
          </div>
        </div>

        <section>
          <div>
            <div>
              <img
                src={file ? URL.createObjectURL(file) : data?.url}
                alt="Profile" />

              
              <label>
                <Camera />
                <input
                  type="file"

                  onChange={handleImageChange} />
                
              </label>
            </div>
            <div>
              <div>
                <h2>
                  {userDetails.fullname}
                </h2>
                <span>
                  {userDetails.email}
                </span>
              </div>
              <p>{userDetails.bio}</p>
              <div>
                <span>
                  <MapPin />
                  {userDetails.location || "Add location"}
                </span>
                <span>
                  <Phone />
                  {userDetails.phone || "Add phone"}
                </span>
                <span>
                  <Globe2 />
                  Preferred timezone: Auto
                </span>
              </div>
              <div>
                {file &&
                <button
                  type="button"
                  onClick={handleImageUpload}
                  disabled={isUploading}>

                  
                    {isUploading ?
                  <Loader2 /> :
                  null}
                    Save photo
                  </button>
                }
                {file &&
                <button
                  type="button"
                  onClick={() => setFile(null)}>

                  
                    Cancel
                  </button>
                }
                {error &&
                <p>{error}</p>
                }
                {message && <p>{message}</p>}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3>Profile details</h3>
            <p>
              Update how we reach you and what others see.
            </p>
          </div>
          <div>
            <div>
              <div>
                <label>Full name</label>
                <input

                  name="fullname"
                  value={userDetails.fullname}
                  onChange={handleFieldChange}
                  disabled={!editMode} />
                
              </div>
              <div>
                <label>Email</label>
                <input

                  name="email"
                  type="email"
                  value={userDetails.email}
                  onChange={handleFieldChange}
                  disabled />
                
              </div>
              <div>
                <label>Phone</label>
                <input

                  name="phone"
                  placeholder="Add phone"
                  value={userDetails.phone}
                  onChange={handleFieldChange}
                  disabled={!editMode} />
                
              </div>
              <div>
                <label>Location</label>
                <input

                  name="location"
                  placeholder="City, Country"
                  value={userDetails.location}
                  onChange={handleFieldChange}
                  disabled={!editMode} />
                
              </div>
            </div>
            <div>
              <label>Bio</label>
              <textarea

                name="bio"
                rows={3}
                value={userDetails.bio}
                onChange={handleFieldChange}
                disabled={!editMode} />
              
            </div>

            <div />
            <div>
              {editMode ?
              <>
                  <button
                  type="button"
                  onClick={handleSaveProfile}>

                  
                    <CheckCircle2 />
                    Save changes
                  </button>
                  <button
                  type="button"
                  onClick={() => setEditMode(false)}>

                  
                    <X />
                    Cancel
                  </button>
                </> :

              <button
                type="button"
                onClick={() => setEditMode(true)}>

                
                  <Edit3 />
                  Edit profile
                </button>
              }
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3>Security and access</h3>
            <p>Keep your account protected.</p>
          </div>
          <div>
            <div>
              <div>
                <Shield />
                <div>
                  <p>
                    Two-factor (coming soon)
                  </p>
                  <p>
                    Add an extra layer of security to your sign-in.
                  </p>
                </div>
              </div>
              <span>Planned</span>
            </div>
            <div>
              <div>
                <Mail />
                <div>
                  <p>Email notifications</p>
                  <p>
                    Receive updates about admissions and classes.
                  </p>
                </div>
              </div>
              <span>Enabled</span>
            </div>
          </div>
        </section>

        <div>
          <div>
            <p>Need to leave QuranScholars?</p>
            <p>
              Deleting your profile removes all data permanently. This action
              cannot be undone.
            </p>
          </div>
          <button
            type="button"

            onClick={() => setModalVisible(true)}>
            
            Delete profile
          </button>
        </div>
      </div>
    </div>);

};

export default ProfilePage;
