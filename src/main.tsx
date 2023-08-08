import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider/AuthProvider.tsx";
import { router } from "./Routes/Router.tsx";
import { RouterProvider } from "react-router";
import React from "react";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
