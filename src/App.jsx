import { Routes, Route, Outlet } from "react-router-dom";
import { useCallback, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import CardButton from "./components/cart/CardButton";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./state/slices/useSlice";
function App() {
  const { user } = useSelector((state) => state.user);
  const pathName = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  const useSessionTimeout = (user) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      if (!user?.expires) return; // Ensure expires is present

      const remainingTime = user.expires - Date.now();
      if (remainingTime <= 0) {
        handleSessionExpire();
        return;
      }

      const timeoutId = setTimeout(() => {
        handleSessionExpire();
      }, remainingTime);

      return () => clearTimeout(timeoutId); // Cleanup to prevent memory leaks
    }, [user, navigate, dispatch]);

    const handleSessionExpire = () => {
      localStorage.removeItem("user");
      dispatch(setUser(null));
      navigate("/");
    };
  };
  useSessionTimeout(user);
  return (
    <>
      <div className="app relative grotesk">
        <Navbar />
        <Outlet />
        <Footer />
        <CardButton />
      </div>
    </>
  );
}

export default App;
