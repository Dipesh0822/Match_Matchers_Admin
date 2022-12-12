import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";

const Boosts = Loadable(lazy(() => import("views/pages/Boosts")));

// ==============================|| MAIN ROUTING ||============================== //

const BoostsRoute = {
  path: "/boosts",
  element: <MainLayout />,
  children: [
    {
      path: "/boostsList",
      element: <Boosts />,
    },
  ],
};

export default BoostsRoute;
