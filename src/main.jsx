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
import InteractiveLesson from "./routes/services/InteractiveLesson.jsx";
import ServicesList from "./routes/ServicesList.jsx";
import EducationalResources from "./routes/services/EducationalResources.jsx";
import SpiritualDevelopment from "./routes/services/SpiritualDevelopment.jsx";
import CommunityEngagements from "./routes/services/CommunityEngagements.jsx";
import PersonalGuidance from "./routes/services/PersonalGuidance.jsx";
import LanguageSupport from "./routes/services/LanguageSupport.jsx";
import FamilyFocused from "./routes/services/FamilyFocused.jsx";
import IslamicEvents from "./routes/services/IslamicEvents.jsx";
import YouthPrograms from "./routes/services/YouthPrograms.jsx";
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
        path:"courses",
        element: <Courses />,
      },
      {
        path: "services",
        element: <Services />,
        children: [
          { index: true, element: <ServicesList /> },
          {
            path: "courses",
            element: <Courses />,
          },
          { path: "courses/:courseName", element: <CourseOverview /> },
          {
            path: "interactive-lesson",
            element: <InteractiveLesson />,
          },
          {
            path: "educational-resources",
            element: <EducationalResources />,
          },
          {
            path: "spiritual-development",
            element: <SpiritualDevelopment />,
          },
          {
            path: "community-engagements",
            element: <CommunityEngagements />,
          },
          {
            path: "personal-guidance",
            element: <PersonalGuidance />,
          },
          {
            path: "language-support",
            element: <LanguageSupport />,
          },
          {
            path: "family-focused-services",
            element: <FamilyFocused />,
          },
           {
            path: "islamic-events",
            element: <IslamicEvents />,
          },
           {
            path: "youth-programs",
            element: <YouthPrograms />,
          },
        ],
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
