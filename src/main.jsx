import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { store } from "./state/store.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import NotLoggedIn from "./components/NotLoggedIn.jsx";

const Home = lazy(() => import("./routes/Home"));
const Services = lazy(() => import("./routes/Services"));
const About = lazy(() => import("./routes/About"));
const Contact = lazy(() => import("./routes/Contact"));
const Donate = lazy(() => import("./routes/Donate"));
const Mission = lazy(() => import("./routes/Mission"));
const Admission = lazy(() => import("./routes/Admission"));
const CourseOverview = lazy(() => import("./components/CourseOverview"));
const Login = lazy(() => import("./routes/Login"));
const Register = lazy(() => import("./routes/Register"));
const Courses = lazy(() => import("./routes/Courses"));
const PrivacyPolicy = lazy(() => import("./routes/PrivacyPolicy.jsx"));
const Profile = lazy(() => import("./routes/Profile.jsx"));
const StudentInfo = lazy(() => import("./routes/StudentInfo.jsx"));
const TestPage = lazy(() => import("./routes/TestPage.jsx"));
const InteractiveLesson = lazy(() => import("./routes/services/InteractiveLesson.jsx"));
const EducationalResources = lazy(() => import("./routes/services/EducationalResources.jsx"));
const SpiritualDevelopment = lazy(() => import("./routes/services/SpiritualDevelopment.jsx"));
const CommunityEngagements = lazy(() => import("./routes/services/CommunityEngagements.jsx"));
const PersonalGuidance = lazy(() => import("./routes/services/PersonalGuidance.jsx"));
const LanguageSupport = lazy(() => import("./routes/services/LanguageSupport.jsx"));
const FamilyFocused = lazy(() => import("./routes/services/FamilyFocused.jsx"));
const IslamicEvents = lazy(() => import("./routes/services/IslamicEvents.jsx"));
const YouthPrograms = lazy(() => import("./routes/services/YouthPrograms.jsx"));
const AccountDeleted = lazy(() => import("./routes/AccountDeleted.jsx"));
const Blogs = lazy(() => import("./routes/blogs/Blogs.jsx"));
const AdminAdmissions = lazy(() => import("./routes/AdminAdmissions.jsx"));

const withSuspense = (node) => (
  <Suspense
    fallback={
      <div className="grid min-h-[40vh] place-items-center text-sm text-slate-500">
        Loading...
      </div>
    }
  >
    {node}
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: withSuspense(<Home />),
      },
      {
        path: "courses",
        element: withSuspense(<Courses />),
      },
      {
        path: "courses/:slug",
        element: withSuspense(<CourseOverview />),
      },
      {
        path: "services",
        element: withSuspense(<Services />),
        children: [
          { index: true, element: withSuspense(<Courses />) },
          {
            path: "courses",
            element: withSuspense(<Courses />),
          },
          { path: "courses/:slug", element: withSuspense(<CourseOverview />) },
          {
            path: "interactive-lessons",
            element: withSuspense(<InteractiveLesson />),
          },
          {
            path: "educational-resources",
            element: withSuspense(<EducationalResources />),
          },
          {
            path: "spiritual-development",
            element: withSuspense(<SpiritualDevelopment />),
          },
          {
            path: "community-engagement",
            element: withSuspense(<CommunityEngagements />),
          },
          {
            path: "personal-guidance",
            element: withSuspense(<PersonalGuidance />),
          },
          {
            path: "language-support",
            element: withSuspense(<LanguageSupport />),
          },
          {
            path: "family-focused-services",
            element: withSuspense(<FamilyFocused />),
          },
          {
            path: "islamic-events",
            element: withSuspense(<IslamicEvents />),
          },
          {
            path: "youth-programs",
            element: withSuspense(<YouthPrograms />),
          },
        ],
      },
      {
        path: "blogs",
        element: withSuspense(<Blogs />),
      },
      { path: "about", element: withSuspense(<About />) },
      { path: "mission", element: withSuspense(<Mission />) },
      { path: "contact", element: withSuspense(<Contact />) },
      { path: "donate", element: withSuspense(<Donate />) },
      {
        path: "account-deleted",
        element: withSuspense(<AccountDeleted />),
      },
      {
        path: "admission",
        element: (
          <ProtectedRoute>
            {withSuspense(<Admission />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: (
          <NotLoggedIn>
            {withSuspense(<Login />)}
          </NotLoggedIn>
        ),
      },
      {
        path: "register",
        element: (
          <NotLoggedIn>
            {withSuspense(<Register />)}
          </NotLoggedIn>
        ),
      },

      { path: "/privacy", element: withSuspense(<PrivacyPolicy />) },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            {withSuspense(<Profile />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            {withSuspense(<StudentInfo />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/admissions",
        element: (
          <AdminRoute>
            {withSuspense(<AdminAdmissions />)}
          </AdminRoute>
        ),
      },
      { path: "/test", element: withSuspense(<TestPage />) },
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
  </React.StrictMode>,
);
