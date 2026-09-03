import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLoader from "@/components/feedback/AppLoader.jsx";
import { Provider } from "react-redux";
import App from "@/app/App.jsx";
import "@/styles/globals.css";
import { store } from "@/app/store.js";
import ProtectedRoute from "@/components/guards/ProtectedRoute.jsx";
import AdminRoute from "@/components/guards/AdminRoute.jsx";
import NotLoggedIn from "@/components/guards/NotLoggedIn.jsx";
import WebSocketClient from "@/realtime/WebSocketClient.jsx";
import BerrySandLmsDemo from "./assets/example themes/berry-sand-lms";
const Home = lazy(() => import("@/pages/home/Home.jsx"));
const Services = lazy(() => import("@/pages/services/Services.jsx"));
const About = lazy(() => import("@/pages/about/About.jsx"));
const Contact = lazy(() => import("@/pages/contact/Contact.jsx"));
const Donate = lazy(() => import("@/pages/donate/Donate.jsx"));
const Mission = lazy(() => import("@/pages/about/Mission.jsx"));
const Admission = lazy(() => import("@/pages/admissions/Admission.jsx"));
const CourseOverview = lazy(() => import("@/pages/courses/CourseOverview.jsx"));
const Login = lazy(() => import("@/pages/auth/Login.jsx"));
const Register = lazy(() => import("@/pages/auth/Register.jsx"));
const Courses = lazy(() => import("@/pages/courses/Courses.jsx"));
const RecordedCourses = lazy(
  () => import("@/pages/recorded-courses/RecordedCourses.jsx"),
);
const RecordedCourseDetails = lazy(
  () => import("@/pages/recorded-courses/RecordedCourseDetails.jsx"),
);
const RecordedCoursePlayer = lazy(
  () => import("@/pages/recorded-courses/RecordedCoursePlayer.jsx"),
);
const MyLearning = lazy(() => import("@/pages/account/MyLearning.jsx"));
const PrivacyPolicy = lazy(() => import("@/pages/legal/PrivacyPolicy.jsx"));
const Profile = lazy(() => import("@/pages/account/Profile.jsx"));
const StudentInfo = lazy(() => import("@/pages/account/StudentInfo.jsx"));
const TestPage = lazy(() => import("@/pages/dev/TestPage.jsx"));

const InteractiveLesson = lazy(
  () => import("@/pages/services/InteractiveLesson.jsx"),
);
const EducationalResources = lazy(
  () => import("@/pages/services/EducationalResources.jsx"),
);
const SpiritualDevelopment = lazy(
  () => import("@/pages/services/SpiritualDevelopment.jsx"),
);
const CommunityEngagements = lazy(
  () => import("@/pages/services/CommunityEngagements.jsx"),
);
const PersonalGuidance = lazy(
  () => import("@/pages/services/PersonalGuidance.jsx"),
);
const LanguageSupport = lazy(
  () => import("@/pages/services/LanguageSupport.jsx"),
);
const FamilyFocused = lazy(() => import("@/pages/services/FamilyFocused.jsx"));
const IslamicEvents = lazy(() => import("@/pages/services/IslamicEvents.jsx"));
const YouthPrograms = lazy(() => import("@/pages/services/YouthPrograms.jsx"));
const AccountDeleted = lazy(() => import("@/pages/account/AccountDeleted.jsx"));
const Blogs = lazy(() => import("@/pages/blog/Blogs.jsx"));

const AdminAdmissions = lazy(
  () => import("@/pages/admissions/AdminAdmissions.jsx"),
);

const WithSuspense = (node) => (
  <Suspense fallback={<AppLoader />}>{node}</Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: WithSuspense(<App />),
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "example-theme",
        element: <BerrySandLmsDemo />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "courses/:slug",
        element: <CourseOverview />,
      },
      {
        path: "recorded-courses",
        element: <RecordedCourses />,
      },
      {
        path: "recorded-courses/:slug",
        element: <RecordedCourseDetails />,
      },
      {
        path: "my-learning",
        element: <ProtectedRoute>{<MyLearning />}</ProtectedRoute>,
      },
      {
        path: "learn/:slug/:lessonId",
        element: <ProtectedRoute>{<RecordedCoursePlayer />}</ProtectedRoute>,
      },
      {
        path: "services",
        element: <Services />,
        children: [
          { index: true, element: <Courses /> },
          {
            path: "courses",
            element: <Courses />,
          },
          { path: "courses/:slug", element: <CourseOverview /> },
          {
            path: "interactive-lessons",
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
            path: "community-engagement",
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
      {
        path: "websocket-test",
        element: <WebSocketClient />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      { path: "about", element: <About /> },
      { path: "mission", element: <Mission /> },
      { path: "contact", element: <Contact /> },
      { path: "donate", element: <Donate /> },
      {
        path: "account-deleted",
        element: <AccountDeleted />,
      },
      {
        path: "admission",
        element: <ProtectedRoute>{<Admission />}</ProtectedRoute>,
      },
      {
        path: "login",
        element: <NotLoggedIn>{<Login />}</NotLoggedIn>,
      },
      {
        path: "register",
        element: <NotLoggedIn>{<Register />}</NotLoggedIn>,
      },

      { path: "/privacy", element: <PrivacyPolicy /> },
      {
        path: "/profile",
        element: <ProtectedRoute>{<Profile />}</ProtectedRoute>,
      },
      {
        path: "/dashboard",
        element: <ProtectedRoute>{<StudentInfo />}</ProtectedRoute>,
      },
      {
        path: "/admin/admissions",
        element: <AdminRoute>{<AdminAdmissions />}</AdminRoute>,
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
  </React.StrictMode>,
);
