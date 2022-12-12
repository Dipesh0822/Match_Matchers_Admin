// assets
import {
  IconDashboard as DashboardIcon,
  IconSettings as ConfigIcon,
} from "@tabler/icons";

// submenu items
import { configurationMenuItems } from "./submenu-items";

// constant
const icons = {
  DashboardIcon,
  ConfigIcon,
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: "dashboard",
  title: "Dashboard",
  type: "group",
  children: [
    {
      id: "default",
      title: "Dashboard",
      type: "item",
      url: "/dashboard",
      icon: icons.DashboardIcon,
      breadcrumbs: false,
    },
    {
      id: "users",
      title: "Users",
      type: "item",
      url: "/users/userList",
      icon: icons.ConfigIcon,
      breadcrumbs: false,
    },
    {
      id: "perk",
      title: "Perk",
      type: "item",
      url: "/perk/perkList",
      breadcrumbs: false,
      icon: icons.ConfigIcon,
    },
  ],
};

export default dashboard;
