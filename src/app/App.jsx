import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/layouts/Navbar.jsx";
import Footer from "@/layouts/Footer.jsx";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "@/store/slices/userSlice.js";
import { useMeQuery } from "@/services/api/user/userAuthApis.js";
import AppLoader from "@/components/feedback/AppLoader.jsx";
function App() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const pathName = useLocation();
  const isWorkspace =
    pathName.pathname.startsWith("/learn/") ||
    pathName.pathname.startsWith("/classroom/") ||
    pathName.pathname.startsWith("/dashboard") ||
    pathName.pathname.startsWith("/instructor/");
  const navigation = useNavigation();
  const [isAppBooting, setIsAppBooting] = useState(true);
  const {
    data: currentUser,
    isLoading: isUserSyncLoading,
    isSuccess: isUserSyncSuccess,
    isError: isUserSyncError,
    error: userSyncError,
  } = useMeQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  useEffect(() => {
    const finishBoot = () => setIsAppBooting(false);
    if (document.readyState === "complete") {
      const timer = setTimeout(finishBoot, 120);
      return () => clearTimeout(timer);
    }
    window.addEventListener("load", finishBoot);
    return () => window.removeEventListener("load", finishBoot);
  }, []);

  useEffect(() => {
    if (isUserSyncSuccess && currentUser) {
      dispatch(setUser(currentUser));
      return;
    }
    if (isUserSyncError) {
      if (userSyncError?.status === 401 || userSyncError?.status === 403) {
        dispatch(setUser(null));
      }
    }
  }, [
    currentUser,
    dispatch,
    isUserSyncError,
    isUserSyncSuccess,
    userSyncError?.status,
  ]);

  const useSessionTimeout = (user) => {
    const navigate = useNavigate();
    useEffect(() => {
      if (!user?.expires || typeof user.expires !== "number") return; // Ensure expires is present
      const handleSessionExpire = () => {
        localStorage.removeItem("user");
        dispatch(setUser(null));
        navigate("/", { replace: true });
      };
      const remainingTime = user.expires - Date.now();
      if (remainingTime <= 0) {
        handleSessionExpire();
        return;
      }
      const timeoutId = setTimeout(handleSessionExpire, remainingTime);
      return () => clearTimeout(timeoutId); // Cleanup to prevent memory leaks
    }, [user, navigate, dispatch]);
  };

  useSessionTimeout(user);

  return (
    <>
      <div>
        {!isWorkspace && <Navbar />}
        <Outlet />
        {!isWorkspace && <Footer />}
      </div>
    </>
  );
}

export default App;
