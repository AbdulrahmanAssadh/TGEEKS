import React, { Suspense } from "react";
import Light from "components/headers/light";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Footer from "components/footers/Footer";
import PostWriter from "components/editor/post_writer";
import LazyLoadingSpinner from "../components/animations/lazy_loading_spinner";

function WritePostPage({ index = 0 }) {
  return (
    <Suspense fallback={<LazyLoadingSpinner />}>
      <AnimationRevealPage>
        <Light />
        <PostWriter />
        <Footer />
      </AnimationRevealPage>
    </Suspense>
  );
}

export default WritePostPage;
