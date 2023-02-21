import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import Buy from "../components/Buy";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Root from "../layout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "buy",
        element: <Buy></Buy>,
      },
      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);
