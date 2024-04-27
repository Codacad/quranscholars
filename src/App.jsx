import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import Home from "./routes/Home";
import Services from "./routes/Services";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Donate from "./routes/Donate";
import Navbar from "./components/Navbar";
import Admission from "./routes/Admission";
import Sidenav from "./components/Sidenav";
import { SidenavContext } from "./context/sidenavContext/SidenavContext";
import Footer from "./components/Footer";
import Login from "./components/Login";
function App() {
  const rotuer = [
    { path: "/", element: <Home /> },
    { path: "/services", element: <Services /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/donate", element: <Donate /> },
    { path: "/admission", element: <Admission /> },
    { path: "/login", element: <Login /> },
  ];

  const { showSideNav, setShowSideNav } = useContext(SidenavContext);
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("sidenav")) {
      setShowSideNav(!showSideNav);
    }
  });

  return (
    <>
      <div className="app relative">
        <Sidenav />
        <Navbar />
        <Routes>
          {rotuer.map((route) => {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            );
          })}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
