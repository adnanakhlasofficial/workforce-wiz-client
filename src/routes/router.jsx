import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import SignIn from "../pages/SignIn/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <h2>dashboard</h2>,
  },
]);
