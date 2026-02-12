import { useState, useEffect, useRef } from "react";
import {
  useUploadProfilePictureMutation,
  useGetProfilePicutreUrlQuery,
} from "../state/userApis/fileUploadApis";
import { useSelector } from "react-redux";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import InlineSpinner from "../components/InlineSpinner";
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
  User,
  X,
} from "lucide-react";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

const ProfilePage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalRef = useRef();
  const { data } = useGetProfilePicutreUrlQuery();
  const [uploadProfilePicture, { isLoading: isUploading }] = useUploadProfilePictureMutation();
  const { user } = useSelector((state) => state.user);

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const [userDetails, setUserDetails] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    bio: "Committed to consistent Quran study and deeper understanding.",
    location: "—",
    phone: "—",
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
    // Hooked to future profile save endpoint
    setMessage("Profile details saved.");
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(185,28,28,0.06),_transparent_35%)] px-4 pb-12 pt-8">
      {modalVisible && <ProfileDeleteModal ref={modalRef} onClose={() => setModalVisible(false)} />}

      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <Badge className="bg-primary/10 text-primary">Profile</Badge>
            <h1 className="mt-2 text-3xl font-bold text-secondary md:text-4xl">
              Your personal workspace
            </h1>
            <p className="text-sm text-muted-foreground md:text-base">
              Manage your identity, contact info, and learning preferences.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="capitalize">
              {user?.role || "student"}
            </Badge>
            <Badge variant="outline">
              <CheckCircle2 className="mr-1 h-3 w-3 text-primary" />
              Verified
            </Badge>
          </div>
        </div>

        <Card className="shadow-lg shadow-primary/5">
          <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:gap-10">
            <div className="relative h-28 w-28 shrink-0">
              <img
                src={file ? URL.createObjectURL(file) : data?.url}
                alt="Profile"
                className="h-full w-full rounded-2xl object-cover border border-gray-100 shadow-sm"
              />
              <label className="absolute -bottom-3 -right-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary/90">
                <Camera className="h-4 w-4" />
                <input type="file" className="hidden" onChange={handleImageChange} />
              </label>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl font-semibold text-secondary">{userDetails.fullname}</h2>
                <Badge variant="outline">{userDetails.email}</Badge>
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
                  <Button size="sm" onClick={handleImageUpload} disabled={isUploading}>
                    {isUploading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Save photo
                  </Button>
                )}
                {file && (
                  <Button variant="ghost" size="sm" onClick={() => setFile(null)}>
                    Cancel
                  </Button>
                )}
                {error && <p className="text-sm font-medium text-destructive">{error}</p>}
                {message && <p className="text-sm text-primary">{message}</p>}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md shadow-primary/5">
          <CardHeader className="pb-3">
            <CardTitle>Profile details</CardTitle>
            <CardDescription>Update how we reach you and what others see.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Full name</label>
                <Input
                  name="fullname"
                  value={userDetails.fullname}
                  onChange={handleFieldChange}
                  disabled={!editMode}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={userDetails.email}
                  onChange={handleFieldChange}
                  disabled
                  className="bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Phone</label>
                <Input
                  name="phone"
                  placeholder="Add phone"
                  value={userDetails.phone}
                  onChange={handleFieldChange}
                  disabled={!editMode}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Location</label>
                <Input
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
              <Textarea
                name="bio"
                rows={3}
                value={userDetails.bio}
                onChange={handleFieldChange}
                disabled={!editMode}
              />
            </div>

            <Separator />
            <div className="flex flex-wrap gap-3">
              {editMode ? (
                <>
                  <Button onClick={handleSaveProfile} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Save changes
                  </Button>
                  <Button variant="ghost" onClick={() => setEditMode(false)} className="flex items-center gap-2">
                    <X className="h-4 w-4" />
                    Cancel
                  </Button>
                </>
              ) : (
                <Button variant="outline" onClick={() => setEditMode(true)} className="flex items-center gap-2">
                  <Edit3 className="h-4 w-4" />
                  Edit profile
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle>Security & access</CardTitle>
            <CardDescription>Keep your account protected.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-3 py-3">
              <div className="flex items-center gap-3">
                <Shield className="h-4 w-4 text-primary" />
                <div>
                  <p className="font-semibold text-secondary">Two-factor (coming soon)</p>
                  <p className="text-xs text-muted-foreground">
                    Add an extra layer of security to your sign-in.
                  </p>
                </div>
              </div>
              <Badge variant="outline">Planned</Badge>
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
              <Badge variant="secondary">Enabled</Badge>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm">
          <div className="space-y-1">
            <p className="font-semibold text-red-800">Need to leave QuranScholars?</p>
            <p className="text-red-700/80">
              Deleting your profile removes all data permanently. This action cannot be undone.
            </p>
          </div>
          <Button
            variant="destructive"
            className="bg-red-600 hover:bg-red-700"
            onClick={() => setModalVisible(true)}
          >
            Delete profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
