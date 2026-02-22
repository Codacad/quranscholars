import { forwardRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AlertTriangle, CheckCircle2, Loader2, X } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { setUser } from "../../state/slices/userSlice";
import {
  useDeleteProfileMutation,
  useLogoutMutation,
} from "../../state/userApis/userAuthApis";

const overlayMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.22, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.18, ease: "easeInOut" } },
};

const panelMotion = {
  initial: { opacity: 0, y: 18, scale: 0.98, filter: "blur(2px)" },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.99,
    filter: "blur(1px)",
    transition: { duration: 0.18, ease: "easeInOut" },
  },
};

const ProfileDeleteModal = forwardRef(({ onClose }, ref) => {
  const [password, setPassword] = useState("");
  const [deleteProfile, { isLoading }] = useDeleteProfileMutation();
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showToast = ({ variant, title, description }) => {
    const isError = variant === "error";
    const containerClasses = isError
      ? "pointer-events-auto w-full max-w-sm rounded-xl border border-red-200 bg-red-50 p-3 "
      : "pointer-events-auto w-full max-w-sm rounded-xl border border-green-200 bg-green-50 p-3 ";
    const titleClasses = isError ? "text-red-900" : "text-green-900";
    const descClasses = isError ? "text-red-800/90" : "text-green-800/90";

    toast.custom((toastId) => (
      <div className={containerClasses}>
        <div className="flex items-start gap-2">
          {isError ? (
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />
          ) : (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />
          )}
          <div className="min-w-0">
            <p className={`text-sm font-semibold ${titleClasses}`}>{title}</p>
            <p className={`text-xs ${descClasses}`}>{description}</p>
          </div>
          <button
            type="button"
            className="ml-auto rounded p-1 text-muted-foreground transition hover:bg-black/5"
            onClick={() => toast.dismiss(toastId)}
            aria-label="Dismiss toast"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && !isLoading) {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isLoading, onClose]);

  const handleDeleteProfile = async () => {
    if (!password.trim()) {
      showToast({
        variant: "error",
        title: "Password required",
        description: "Enter your password to confirm profile deletion.",
      });
      return;
    }

    try {
      const response = await deleteProfile({ password }).unwrap();
      await logout().unwrap();

      localStorage.removeItem("user");
      dispatch(setUser(null));
      showToast({
        variant: "success",
        title: "Profile deleted",
        description:
          response?.message ||
          "Your account and profile data have been removed successfully.",
      });
      onClose();
      navigate("/", { state: { message: response?.message } });
    } catch (apiError) {
      showToast({
        variant: "error",
        title: "Delete failed",
        description:
          apiError?.data?.message || "Unable to delete profile right now.",
      });
    }
  };

  const modalContent = (
    <motion.div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-profile-title"
      className="fixed inset-0 z-[200] grid place-items-center bg-black/45 p-4 backdrop-blur-[2px]"
      onClick={() => {
        if (!isLoading) onClose();
      }}
      variants={overlayMotion}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="w-full max-w-md rounded-2xl border border-red-100 bg-white p-5 "
        onClick={(event) => event.stopPropagation()}
        variants={panelMotion}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-red-100 p-2 text-red-700">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <h2 id="delete-profile-title" className="text-lg font-semibold text-secondary">
                Delete profile
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                This action is permanent and all account data will be removed.
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close modal"
            className="rounded-md p-1 text-muted-foreground transition hover:bg-gray-100 hover:text-secondary"
            onClick={onClose}
            disabled={isLoading}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-3">
          <label htmlFor="delete-profile-password" className="text-sm font-medium text-secondary">
            Confirm with your password
          </label>
          <input
            id="delete-profile-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={isLoading}
            autoFocus
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800  outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15 disabled:bg-slate-50"
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-70"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDeleteProfile}
            disabled={isLoading}
            className="inline-flex items-center rounded-xl bg-red-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-70"
          >
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Delete permanently
          </button>
        </div>
      </motion.div>
    </motion.div>
  );

  if (typeof document === "undefined") return modalContent;
  return createPortal(modalContent, document.body);
});

ProfileDeleteModal.displayName = "ProfileDeleteModal";

export default ProfileDeleteModal;