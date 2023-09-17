import React, { lazy } from "react";
import GlobalStyles from "styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "App.css";
const MainPage = lazy(() => import("pages/main_page"));
const CoursesPage = lazy(() => import("pages/courses_page"));
const ContactUs = lazy(() => import("pages/contactUs"));
const Register = lazy(() => import("pages/register"));
const ShowArticle = lazy(() => import("pages/show_article"));
const ListPostsPage = lazy(() => import("pages/list_posts_page"));
const WritePostPage = lazy(() => import("pages/write_post_page"));

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/MainCoursesPage" element={<CoursesPage />} />
          <Route path="/conntactUs" element={<ContactUs />} />
          <Route path="/addPost" element={<WritePostPage />} />
          <Route path="/readPost/:id" element={<ShowArticle />} />
          <Route path="/listPosts" element={<ListPostsPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
