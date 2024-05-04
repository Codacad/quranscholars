import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Home from "./routes/Home";
import Services from "./routes/Services";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Donate from "./routes/Donate";
import Navbar from "./components/Navbar";
import Admission from "./routes/Admission";
import Sidenav from "./components/Sidenav";
import CourseOverview from "./components/CourseOverview";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useLocation } from "react-router-dom";
import Register from "./routes/Register";
import Courses from "./routes/Courses";
import CardButton from "./components/cart/CardButton";
function App() {
  const pathName = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  const rotuer = [
    { path: "/", element: <Home /> },
    { path: "/services", element: <Services /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/donate", element: <Donate /> },
    { path: "/admission", element: <Admission /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    {
      path: "/courses",
      element: <Courses />,
    },
    { path: "/courses/:courseName", element: <CourseOverview /> },
  ];

  return (
    <>
      <div className="app relative">
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
        <Sidenav />
        <CardButton />
      </div>
    </>
  );
}

export default App;
