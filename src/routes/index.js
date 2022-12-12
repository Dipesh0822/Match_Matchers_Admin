import { useRoutes } from "react-router-dom";
// routes
import MainRoutes from "./MainRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";
import ErrorRoutes from "./ErrorRoutes";
import UsersRoutes from "./UsersRoutes";
import PerksRoutes from "./PerksRoutes";
import BoostsRoute from "./BoostsRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes(
    localStorage.getItem("MATCH_MASTER") == "undefined" ||
      localStorage.getItem("MATCH_MASTER") == null
      ? [AuthenticationRoutes]
      : [MainRoutes, ErrorRoutes, UsersRoutes, PerksRoutes, BoostsRoute]
  );
  // return useRoutes([
  //     AuthenticationRoutes,
  //     MainRoutes,
  //     NetworkRoutes,
  //     CMSRoutes,
  //     ConfigurationRoutes,
  //     ErrorRoutes,
  //     TransactionRoutes,
  //     PermissionRoutes
  // ]);
}
