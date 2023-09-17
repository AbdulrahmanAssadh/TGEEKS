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
// import { lazy } from "react";
import LazyLoadingSpinner from "@/widgets/animations/lazy_loading_spinner.jsx";
export function Auth() {
  const navigator = useNavigate();
  const [controller, dispatch] = useMaterialTailwindController();
  const { account } = controller;

  useEffect(() => {
    if (account === null) {
      navigator("/", NavigationType.Replace);
    }
  }, []);

  return account !== null ? (
    <Suspense fallback={<LazyLoadingSpinner />}>
      <div className="min-h-screen bg-blue-gray-50/50">
        <Sidenav routes={routes} />
        <div className="p-4 xl:mr-80">
          <DashboardNavbar />
          <Configurator />
          <Routes>
            {routes.map(
              ({ layout, pages }) =>
                layout === "auth" &&
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
  ) : null;
}

Auth.displayName = "/src/layout/auth.jsx";

export default Auth;
