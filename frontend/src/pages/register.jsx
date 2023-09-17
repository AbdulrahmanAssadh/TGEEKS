import Footer from "components/footers/Footer";
import Light from "components/headers/light";
import RegisterContainer from "components/registerFroms/registerContainer";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import { Suspense } from "react";
import LazyLoadingSpinner from "../components/animations/lazy_loading_spinner";

export default function Register() {
  return (
    <Suspense fallback={<LazyLoadingSpinner />}>
      <AnimationRevealPage>
        <Light />
        <RegisterContainer />
        <Footer />
      </AnimationRevealPage>
    </Suspense>
  );
}
