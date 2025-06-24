import { forwardRef, useState } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { setUser } from "../../state/slices/userSlice";
import {
  useDeleteProfileMutation,
  useLoginMutation,
} from "../../state/userApis/userAuthApis";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProfileDeleteModal = forwardRef(({ onClose }, ref) => {
  const [password, setPassword] = useState("");
  const [deleteProfile, { isLoading, isSuccess }] = useDeleteProfileMutation();
  const [logout] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  //   Handle Delete Profile
  const handleDeleteProfile = async () => {
    try {
      const response = await deleteProfile({ password });
      if (response.data) {
        navigate("/", {state:{message:response.data?.message}});
        await logout();
        localStorage.removeItem("user");
        dispatch(setUser(null));
        setSuccess(response.data?.message);
        setError("");
      }
      if (response.error) {
        setError(response.error?.data.message);
        setSuccess("");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div
      ref={ref}
      className="modal-overlay flex justify-center items-center fixed w-full top-0 left-0 h-full bg-[rgba(0,0,0,.2)]"
    >
      <div className="modal-content shadow-md w-[400px] bg-white rounded-lg p-4">
        <div className="header flex justify-end mb-4">
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => onClose(false)}
            className="text-gray-400 cursor-pointer text-xl"
          />
        </div>
        <div className="body flex flex-col gap-4">
          <div className="input-group flex flex-col">
            <label htmlFor="password" className="text-gray-400 mb-2 text-sm">
              Verify Your Password:
            </label>
            <input
              type="password"
              id="passowrd"
              className="px-2 py-2 border border-gray-200 rounded-md text-gray-600 placeholder:text-gray- outline-none focus:marker:ring-1 focus:ring-red-900"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="text-sm text-red-500 mt-1">{error}</span>
            <span className="text-sm text-green-500 mt-1">{success}</span>
          </div>
          <div className="actions flex justify-between">
            <button
              onClick={handleDeleteProfile}
              disabled={isLoading ? true : false}
              className="p-2 scale-1 active:scale-95 transition-all rounded-md text-sm bg-red-900 text-gray-50"
            >
              Confirm
            </button>
          </div>
          <div className="text-sm">
            <strong>Note:</strong> Deleting your profile is permanent and cannot
            be undone. All your data will be permanently removed.
          </div>
        </div>
      </div>
    </div>
  );
});
ProfileDeleteModal.displayName = "ProfileDeleteModal";
export default ProfileDeleteModal;
