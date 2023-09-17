import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "App";
// import Modal from "react-modal";
import { AuthProvider } from "./context/auth_provider";
import {} from "stylis-plugin-rtl"; // eslint-disable-next-line
import { HelmetProvider } from "react-helmet-async";
import LazyLoadingSpinner from "./components/animations/lazy_loading_spinner";

// Modal.setAppElement("#root");
document.dir = "rtl";
document.title = "T_GEEKS";
const container = document.getElementById("root");
const root = createRoot(container);
const helmetContext = {};
root.render(
  <AuthProvider>
    <Suspense fallback={<LazyLoadingSpinner />}>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </Suspense>
  </AuthProvider>
);
