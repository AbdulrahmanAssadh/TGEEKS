import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "@/context/user";
import "@/css/tailwind.css";
import LazyLoadingSpinner from "@/widgets/animations/lazy_loading_spinner.jsx";
import { HelmetProvider } from "react-helmet-async";

const helmetContext = {}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<LazyLoadingSpinner />}>
      <HelmetProvider context={helmetContext}>
        <BrowserRouter>
          <ThemeProvider>
            <MaterialTailwindControllerProvider>
              <App />
            </MaterialTailwindControllerProvider>
          </ThemeProvider>
        </BrowserRouter>
      </HelmetProvider>
    </Suspense>
  </React.StrictMode>
);
