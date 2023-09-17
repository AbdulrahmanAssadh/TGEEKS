import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import { Post } from "./layouts";
// import { Auth, Content } from "@/layouts";
// import { SignIn } from "./pages/auth";
// import Content from "./layouts/content";
// import { SignIn } from "./pages/auth";
const Dashboard = lazy(() => import("@/layouts/dashboard"));
const SignIn = lazy(() => import("@/layouts/sign-in.jsx"));
const Auth = lazy(() => import("@/layouts/auth"));
const Content = lazy(() => import("@/layouts/content"));
const Post = lazy(() => import("@/layouts/post"));
const LessonGenerator = lazy(() =>
  import("@/pages/content/lesson_generator.jsx")
);
const Profile = lazy(()=>import("@/pages/dashboard/profile"))

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/content/*" element={<Content />} />
      <Route path="/post/*" element={<Post />} />
      <Route
        path="/content/lesson/lesson_gen/:index"
        element={<LessonGenerator />}
      />
    </Routes>
  );
}

export default App;
