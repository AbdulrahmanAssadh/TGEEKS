import React, { Suspense } from "react";
import Light from "components/headers/light";
import Footer from "components/footers/Footer";
import { useParams } from "react-router-dom";
import RenderPostHtml from "../components/artical/render_lesson_html";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import LazyLoadingSpinner from "../components/animations/lazy_loading_spinner";

const ShowArticle = () => {
  const params = useParams();

  return (
    <Suspense fallback={<LazyLoadingSpinner />}>
      <AnimationRevealPage>
        <Light />
        <RenderPostHtml id={params.id} />
        <Footer />
      </AnimationRevealPage>
    </Suspense>
  );
};

export default ShowArticle;
