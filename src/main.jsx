import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./pages/Login.jsx";
import RegisterPage from "./pages/Register.jsx";
import ProductPage from "./pages/Product.jsx";
import { ErrorPage } from "./pages/404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
