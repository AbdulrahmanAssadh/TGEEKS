import SingleCol from "components/ContactUsPagecomponent/SingleCol";
import TwoColContactUsWithIllustrationFullForm from "components/ContactUsPagecomponent/TwoColContactUsWithIllustrationFullForm";
import Footer from "components/footers/Footer";
import Light from "components/headers/light";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import React, { Suspense } from "react";
import LazyLoadingSpinner from "../components/animations/lazy_loading_spinner";

const ContactUs = () => {
  return (
    <Suspense fallback={<LazyLoadingSpinner />}>
      <AnimationRevealPage>
        <Light />
        <TwoColContactUsWithIllustrationFullForm />
        <SingleCol />
        <Footer />
      </AnimationRevealPage>
    </Suspense>
  );
};

export default ContactUs;
