import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./routes/Home";
import Services from "./routes/Services";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Donate from "./routes/Donate";
import Admission from "./routes/Admission";
import CourseOverview from "./components/CourseOverview";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Courses from "./routes/Courses";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state/store.js";
import PrivacyPolicy from "./routes/PrivacyPolicy.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import NotLoggedIn from "./components/NotLoggedIn.jsx";
import HowItWorks from "./routes/HowItWork.jsx";
import Profile from "./routes/Profile.jsx";
import StudentInfo from "./routes/StudentInfo.jsx";
import TestPage from "./routes/TestPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "donate", element: <Donate /> },
      {
        path: "admission",
        element: (
          <ProtectedRoute>
            <Admission />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: (
          <NotLoggedIn>
            <Login />
          </NotLoggedIn>
        ),
      },
      {
        path: "register",
        element: (
          <NotLoggedIn>
            <Register />
          </NotLoggedIn>
        ),
      },
      {
        path: "courses",
        element: <Courses />,
      },
      { path: "courses/:courseName", element: <CourseOverview /> },
      { path: "/privacy", element: <PrivacyPolicy /> },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <StudentInfo />
          </ProtectedRoute>
        ),
      },
      { path: "/test", element: <TestPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
