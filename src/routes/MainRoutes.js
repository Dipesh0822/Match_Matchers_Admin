import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";

// main routing
const DashboardDefault = Loadable(
  lazy(() => import("views/dashboard/Default"))
);

const ChangePassword = Loadable(
  lazy(() => import("views/pages/changePassword"))
);

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "/dashboard",
      element: <DashboardDefault />,
    },

    {
      path: "/password",
      element: <ChangePassword />,
    },
    {
      path: "*",
      element: <DashboardDefault />,
    },
  ],
};

export default MainRoutes;
