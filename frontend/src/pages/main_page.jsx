import Footer from "components/footers/Footer";
import CoursesSection from "components/mainPageComponents/courses_section";
import ArticleSection from "components/mainPageComponents/article_section";
import HeaderSecation from "components/mainPageComponents/header_section";
import RoadmapSection from "components/mainPageComponents/roadmap_section";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import React, { Suspense } from "react";
import LazyLoadingSpinner from "../components/animations/lazy_loading_spinner";
import Light from "../components/headers/light";
import CoursesHeader from "../components/MainCoursesComponent/CoursesHeader";

const Main_page = () => {
  return (
    <Suspense fallback={<LazyLoadingSpinner />}>
      <AnimationRevealPage>
        <Light />
        <CoursesHeader />
        {/* <HeaderSecation /> */}
        <RoadmapSection />
        <CoursesSection />
        <ArticleSection />
        <Footer />
      </AnimationRevealPage>
    </Suspense>
  );
};

export default Main_page;
