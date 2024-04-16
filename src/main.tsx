import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Home from "./routes/Home.tsx";
import AboutUs from "./routes/AboutUs.tsx";
import Subscribe from "./routes/Subscribe.tsx";
import Checkout from "./routes/Checkout.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/subscribe",
        element: <Subscribe />,
      },
      { path: "checkout", element: <Checkout /> },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
