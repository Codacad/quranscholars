import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import {
  useUploadProfilePictureMutation,
  useGetProfilePicutreUrlQuery,
} from "../state/userApis/fileUploadApis";
import { useSelector } from "react-redux";
import ProfileDeleteModal from "../components/Modals/ProfileDeleteModal";
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
  X,
} from "lucide-react";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white/95 px-3 py-2.5 text-sm text-slate-800  outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15 disabled:bg-slate-50 disabled:text-slate-500";

const badgeClass = "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold";

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
    phone: "--",
  });

  useEffect(() => {
    setUserDetails((prev) => ({
      ...prev,
      fullname: user?.fullname || prev.fullname,
      email: user?.email || prev.email,
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(185,28,28,0.08),_transparent_35%)] px-4 pb-12 pt-8">
      <Toaster
        position="top-center"
        visibleToasts={3}
        toastOptions={{ duration: 4500 }}
      />
      <AnimatePresence>
        {modalVisible ? (
          <ProfileDeleteModal onClose={() => setModalVisible(false)} />
        ) : null}
      </AnimatePresence>

      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className={`${badgeClass} border-primary/30 bg-primary/10 text-primary`}>
              Profile
            </span>
            <h1 className="mt-2 text-3xl font-bold text-secondary md:text-4xl">
              Your personal workspace
            </h1>
            <p className="text-sm text-muted-foreground md:text-base">
              Manage your identity, contact info, and learning preferences.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`${badgeClass} border-slate-300 bg-slate-100 capitalize text-slate-700`}>
              {user?.role || "student"}
            </span>
            <span className={`${badgeClass} border-primary/20 bg-white text-slate-700`}>
              <CheckCircle2 className="mr-1 h-3 w-3 text-primary" />
              Verified
            </span>
          </div>
        </div>

        <section className="rounded-3xl border border-slate-200 bg-white/90 p-6  ">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            <div className="relative h-28 w-28 shrink-0">
              <img
                src={file ? URL.createObjectURL(file) : data?.url}
                alt="Profile"
                className="h-full w-full rounded-2xl border border-gray-100 object-cover "
              />
              <label className="absolute -bottom-3 -right-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-white  hover:bg-primary/90">
                <Camera className="h-4 w-4" />
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl font-semibold text-secondary">
                  {userDetails.fullname}
                </h2>
                <span className={`${badgeClass} border-slate-300 bg-white text-slate-600`}>
                  {userDetails.email}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{userDetails.bio}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {userDetails.location || "Add location"}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  {userDetails.phone || "Add phone"}
                </span>
                <span className="flex items-center gap-1">
                  <Globe2 className="h-4 w-4" />
                  Preferred timezone: Auto
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {file && (
                  <button
                    type="button"
                    onClick={handleImageUpload}
                    disabled={isUploading}
                    className="inline-flex items-center rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:opacity-70"
                  >
                    {isUploading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                    Save photo
                  </button>
                )}
                {file && (
                  <button
                    type="button"
                    onClick={() => setFile(null)}
                    className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                )}
                {error && (
                  <p className="text-sm font-medium text-destructive">{error}</p>
                )}
                {message && <p className="text-sm text-primary">{message}</p>}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white/90 p-6  ">
          <div className="mb-6 border-b border-slate-100 pb-3">
            <h3 className="text-xl font-semibold text-secondary">Profile details</h3>
            <p className="text-sm text-muted-foreground">
              Update how we reach you and what others see.
            </p>
          </div>
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Full name</label>
                <input
                  className={inputClass}
                  name="fullname"
                  value={userDetails.fullname}
                  onChange={handleFieldChange}
                  disabled={!editMode}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Email</label>
                <input
                  className={inputClass}
                  name="email"
                  type="email"
                  value={userDetails.email}
                  onChange={handleFieldChange}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Phone</label>
                <input
                  className={inputClass}
                  name="phone"
                  placeholder="Add phone"
                  value={userDetails.phone}
                  onChange={handleFieldChange}
                  disabled={!editMode}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Location</label>
                <input
                  className={inputClass}
                  name="location"
                  placeholder="City, Country"
                  value={userDetails.location}
                  onChange={handleFieldChange}
                  disabled={!editMode}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Bio</label>
              <textarea
                className={inputClass}
                name="bio"
                rows={3}
                value={userDetails.bio}
                onChange={handleFieldChange}
                disabled={!editMode}
              />
            </div>

            <div className="h-px w-full bg-slate-200" />
            <div className="flex flex-wrap gap-3">
              {editMode ? (
                <>
                  <button
                    type="button"
                    onClick={handleSaveProfile}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Save changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditMode(false)}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    <X className="h-4 w-4" />
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setEditMode(true)}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <Edit3 className="h-4 w-4" />
                  Edit profile
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 ">
          <div className="mb-4 border-b border-slate-100 pb-3">
            <h3 className="text-lg font-semibold text-secondary">Security and access</h3>
            <p className="text-sm text-muted-foreground">Keep your account protected.</p>
          </div>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-3 py-3">
              <div className="flex items-center gap-3">
                <Shield className="h-4 w-4 text-primary" />
                <div>
                  <p className="font-semibold text-secondary">
                    Two-factor (coming soon)
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Add an extra layer of security to your sign-in.
                  </p>
                </div>
              </div>
              <span className={`${badgeClass} border-slate-300 bg-white text-slate-700`}>Planned</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-3 py-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <div>
                  <p className="font-semibold text-secondary">Email notifications</p>
                  <p className="text-xs text-muted-foreground">
                    Receive updates about admissions and classes.
                  </p>
                </div>
              </div>
              <span className={`${badgeClass} border-primary/20 bg-primary/10 text-primary`}>Enabled</span>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm">
          <div className="space-y-1">
            <p className="font-semibold text-red-800">Need to leave QuranScholars?</p>
            <p className="text-red-700/80">
              Deleting your profile removes all data permanently. This action
              cannot be undone.
            </p>
          </div>
          <button
            type="button"
            className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
            onClick={() => setModalVisible(true)}
          >
            Delete profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;