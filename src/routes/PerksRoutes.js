import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";

const Perks = Loadable(lazy(() => import("views/pages/Perks")));

// ==============================|| MAIN ROUTING ||============================== //

const PerksRoute = {
  path: "/perk",
  element: <MainLayout />,
  children: [
    {
      path: "/perkList",
      element: <Perks />,
    },
  ],
};

export default PerksRoute;
