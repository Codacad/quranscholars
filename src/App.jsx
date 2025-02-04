import { Routes, Route, Outlet } from "react-router-dom";
import { useCallback, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import CardButton from "./components/cart/CardButton";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const { user } = useSelector((state) => state.user);
  const pathName = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  console.log(user)
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
