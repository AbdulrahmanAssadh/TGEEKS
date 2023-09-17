import Footer from "components/footers/Footer";
import Light from "components/headers/light";
import CourseCategories from "components/MainCoursesComponent/CourseCategories";
import CoursesHeader from "components/MainCoursesComponent/CoursesHeader";
import CoursesSection from "components/MainCoursesComponent/CoursesSection";
import FreeCourses from "components/MainCoursesComponent/FreeCourses";
// import OurCourses from "components/MainCoursesComponent/OurCourses";
// import AuthContext from "context/auth_provider";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import { Suspense } from "react";
import LazyLoadingSpinner from "../components/animations/lazy_loading_spinner";

const CoursesPage = () => {
  // const { auth } = useContext(AuthContext);
  // const [state, setState] = useState(false);

  // const block = <h1>لا يمكن الوصول الى هذه الصفحة الا من قبل الاعضاء</h1>;

  // const content = <></>;

  // useEffect(() => {
  //   if (auth == null) setState(true);
  //   else setState(false);
  // }, [auth]);

  return (
      // <StartTra/>
    <Suspense fallback={<LazyLoadingSpinner />}>
      <AnimationRevealPage>
        <Light />
        {/*<CoursesHeader />*/}
        <CoursesSection />
        <CourseCategories />
        <FreeCourses />
        <Footer />
      </AnimationRevealPage>
    </Suspense>
  );
};

export default CoursesPage;
