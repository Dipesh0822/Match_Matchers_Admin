import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";

// Users routing
const UsersList = Loadable(lazy(() => import("views/pages/Users")));

// ==============================|| MAIN ROUTING ||============================== //

const UsersRoutes = {
  path: "/users",
  element: <MainLayout />,
  children: [
    {
      path: "/userList",
      element: <UsersList />,
    },
  ],
};

export default UsersRoutes;
