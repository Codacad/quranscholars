import { Routes, Route, Outlet } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import CardButton from "./components/cart/CardButton";
function App() {
  const pathName = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return (
    <>
      <div className="app relative">
        <Navbar />
        <Outlet />
        <Footer />
        <Sidenav />
        <CardButton />
      </div>
    </>
  );
}

export default App;
