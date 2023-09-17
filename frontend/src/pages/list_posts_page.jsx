import React, { Suspense } from "react";
import Light from "components/headers/light";
import Footer from "components/footers/Footer";
import ListPosts from "../components/artical/list_posts";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import LazyLoadingSpinner from "../components/animations/lazy_loading_spinner";

const ListPostsPage = () => {
  return (
    <Suspense fallback={<LazyLoadingSpinner />}>
      <AnimationRevealPage>
        <Light />
        <ListPosts />
        <Footer />
      </AnimationRevealPage>
    </Suspense>
  );
};

export default ListPostsPage;
