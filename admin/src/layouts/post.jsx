import { Routes, Route, useNavigate, NavigationType } from "react-router-dom";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController } from "@/context/user";
import { Suspense, useEffect } from "react";
import LazyLoadingSpinner from "@/widgets/animations/lazy_loading_spinner.jsx";
export function Post() {
  const navigator = useNavigate();
  const [controller, dispatch] = useMaterialTailwindController();
  const { account } = controller;

  useEffect(() => {
    if (account === null) {
      navigator("/", NavigationType.Replace);
    }
  }, []);

  return (
    <Suspense fallback={<LazyLoadingSpinner />}>
      <div className="min-h-screen bg-blue-gray-50/50">
        <Sidenav routes={routes} />
        <div className="p-4 xl:mr-80">
          <DashboardNavbar />
          <Configurator />
          <Routes>
            {routes.map(
              ({ layout, pages }) =>
                layout === "post" &&
                pages.map(({ path, element }) => (
                  <Route exact path={path} element={element} />
                ))
            )}
          </Routes>
          <div className="text-blue-gray-600">
            <Footer />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

Post.displayName = "/src/layout/post.jsx";

export default Post;
