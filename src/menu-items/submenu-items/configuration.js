import {
  IconSitemap as RoleIcon,
  IconPackage as GamePackIcon,
} from "@tabler/icons";

const icons = {
  RoleIcon,
  GamePackIcon,
};

const configurationMenuItems = [
  {
    id: "agent_type",
    title: "Agent Type",
    type: "item",
    url: "/configuration/roles",
    breadcrumbs: false,
    icon: icons.RoleIcon,
  },
  {
    id: "game_pack",
    title: "Game Pack",
    type: "item",
    url: "/configuration/game-pack",
    breadcrumbs: false,
    icon: icons.GamePackIcon,
  },
];

export default configurationMenuItems;
