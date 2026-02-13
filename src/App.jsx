import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import CardButton from "./components/cart/CardButton";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./state/slices/userSlice";
import AppLoader from "./components/ui/AppLoader";
// import Spinner from "./components/Spinner";
function App() {
  const { user } = useSelector((state) => state.user);
  const pathName = useLocation();
  const navigation = useNavigation();
  const [isAppBooting, setIsAppBooting] = useState(true);

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

  const useSessionTimeout = (user) => {
    const dispatch = useDispatch();
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

  const showGlobalLoader = isAppBooting || navigation.state === "loading";

  return (
    <>
      <div className="app relative">
        {showGlobalLoader && <AppLoader overlay label="Loading page..." />}
        <Navbar />
        <Outlet />
        <Footer />
        <CardButton />
      </div>
    </>
  );
}

export default App;
