import { DocumentTextIcon, ArchiveBoxIcon } from "@heroicons/react/24/solid";
import {
  MdHome,
  MdPerson,
  MdNotifications,
  MdTableChart,
  MdLogin,
  MdSupervisorAccount,
} from "react-icons/md";
import { lazy } from "react";
import Membsers from "./pages/auth/membars";
import Admins from "./pages/auth/admins";
const Home = lazy(() => import("@/pages/dashboard/home"));
const Profile = lazy(() => import("@/pages/dashboard/profile"));
const Tables = lazy(() => import("@/pages/dashboard/tables"));
const Notifications = lazy(() => import("@/pages/dashboard/notifications"));
const Lessons = lazy(() => import("@/pages/content/lessons"));
const Courses = lazy(() => import("@/pages/content/courses"));
const Posts = lazy(() => import("@/pages/post/posts"));
const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    // title: "الرئيسية",
    layout: "dashboard",
    pages: [
      {
        icon: <MdHome {...icon} />,
        name: "لوحة التحكم",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <MdPerson {...icon} />,
        name: "الملف الشخصي",
        path: "/profile",
        element: <Profile />,
      },
      // {
      //   icon: <MdTableChart {...icon} />,
      //   name: "الجداول",
      //   path: "/tables",
      //   element: <Tables />,
      // },
      // {
      //   icon: <MdNotifications {...icon} />,
      //   name: "الأشعارات",
      //   path: "/notifactions",
      //   element: <Notifications />,
      // },
    ],
  },
  {
    title: "صفحات إدارة الأعضاء",
    layout: "auth",
    pages: [
      {
        icon: <MdLogin {...icon} />,
        name: "إدارة الأعضاء",
        path: "/members",
        element: <Membsers />,
      },
      {
        icon: <MdSupervisorAccount {...icon} />,
        name: "إدارة المشرفين",
        path: "/admins",
        element: <Admins />,
      },
    ],
  },
  {
    title: "إدارة محتوى المشرفيين",
    layout: "content",
    pages: [
      {
        icon: <ArchiveBoxIcon {...icon} />,
        name: "الكورسات",
        path: "/course",
        element: <Courses />,
      },
      {
        icon: <DocumentTextIcon {...icon} />,
        name: "الدروس",
        path: "/lesson",
        element: <Lessons />,
      },
      // {
      //   icon: <ArchiveBoxIcon {...icon} />,
      //   name: "المسارات",
      //   path: "/roadmap",
      //   // element: <SignUp />,
      // },
    ],
  },
  {
    title: "إدارة محتوى الاعضاء",
    layout: "post",
    pages: [
      {
        icon: <DocumentTextIcon {...icon} />,
        name: "المنشورات",
        path: "/posts",
        element: <Posts />,
      },
      {
        icon: <DocumentTextIcon {...icon} />,
        name: "التعليقات والطلبات",
        path: "/orders",
        // element: <Posts />,
      },
    ],
  },
];

export default routes;
