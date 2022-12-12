[
  { MENU_NAME: "Dashboard", MENU_SLUG: "/" },
  { MENU_NAME: "Dashboard", MENU_SLUG: "/dashboard" },
  { MENU_NAME: "Agents", MENU_SLUG: "/network/agents" },
  { MENU_NAME: "Agent Tree", MENU_SLUG: "/network/agent-tree" },
  { MENU_NAME: "Players", MENU_SLUG: "/player" },
  { MENU_NAME: "Player Transaction", MENU_SLUG: "/transaction/player" },
  { MENU_NAME: "Agent Transaction", MENU_SLUG: "/transaction/agent" },
  { MENU_NAME: "Agent Type", MENU_SLUG: "/configuration/roles" },
  { MENU_NAME: "Game Pack", MENU_SLUG: "/configuration/game-pack" },
  { MENU_NAME: "Loyalty Points", MENU_SLUG: "/configuration/loyalty-points" },
  { MENU_NAME: "Permissions", MENU_SLUG: "/permission/permissions" },
  { MENU_NAME: "Keywords", MENU_SLUG: "/configuration/constants" },
  { MENU_NAME: "Menu", MENU_SLUG: "/permission/menu" },
  { MENU_NAME: "Menu Permissions", MENU_SLUG: "/permission/menu-permissions" },
  { MENU_NAME: "Slider", MENU_SLUG: "/cms/slider" },
  { MENU_NAME: "Game Types", MENU_SLUG: "/cms/game-group" },
  { MENU_NAME: "Games", MENU_SLUG: "/cms/game" },
  { MENU_NAME: "Terms & Conditions", MENU_SLUG: "/cms/terms-conditions" },
  { MENU_NAME: "Payment Terms", MENU_SLUG: "/cms/payment-terms" },
  { MENU_NAME: "Privacy Policy", MENU_SLUG: "/cms/privacy-policy" },
  { MENU_NAME: "About Us", MENU_SLUG: "/cms/about" },
  { MENU_NAME: "FAQ", MENU_SLUG: "/cms/faq" },
  { MENU_NAME: "Disclaimer", MENU_SLUG: "/cms/disclaimer" },
  { MENU_NAME: "Notifications", MENU_SLUG: "/cms/notification" },
  { MENU_NAME: "Update Password", MENU_SLUG: "/password" },
  {
    MENU_NAME: "Loyalty Points Redeem",
    MENU_SLUG: "/configuration/loyalty-redeem",
  },
];

// AGENT PERMISSIONS
[
  // * DONE
  {
    AGENT_PERMISSION_KEY: "CREATE_CASHIER",
    AGENT_PERMISSION_VALUE: "Can Create Cashiers",
    CREATE_DATE: new Date(),
    UPDATE_DATE: new Date(),
    ROLE_ID: insertSave.dataValues.ROLE_ID,
  },
  // *  DONE
  {
    AGENT_PERMISSION_KEY: "REGISTER_PLAYER",
    AGENT_PERMISSION_VALUE: "Can Register Players",
    CREATE_DATE: new Date(),
    UPDATE_DATE: new Date(),
    ROLE_ID: insertSave.dataValues.ROLE_ID,
  },
  // * DONE
  {
    AGENT_PERMISSION_KEY: "BLOCK_PLAYER",
    AGENT_PERMISSION_VALUE: "Can Block Players",
    CREATE_DATE: new Date(),
    UPDATE_DATE: new Date(),
    ROLE_ID: insertSave.dataValues.ROLE_ID,
  },
  // * DONE
  {
    AGENT_PERMISSION_KEY: "UPDATE_PASSWORD_PLAYER",
    AGENT_PERMISSION_VALUE: "Can Change Player Passwords",
    CREATE_DATE: new Date(),
    UPDATE_DATE: new Date(),
    ROLE_ID: insertSave.dataValues.ROLE_ID,
  },
  // TODO: PENDING
  {
    AGENT_PERMISSION_KEY: "ISACTIVE_GAME",
    AGENT_PERMISSION_VALUE: "Can activate/deactivate games",
    CREATE_DATE: new Date(),
    UPDATE_DATE: new Date(),
    ROLE_ID: insertSave.dataValues.ROLE_ID,
  },
  // * DONE
  {
    AGENT_PERMISSION_KEY: "ISDEPOSIT_PLAYER",
    AGENT_PERMISSION_VALUE: "Can Deposit to Players",
    CREATE_DATE: new Date(),
    UPDATE_DATE: new Date(),
    ROLE_ID: insertSave.dataValues.ROLE_ID,
  },
  // * DONE
  {
    AGENT_PERMISSION_KEY: "ISWITHDRAW_PLAYER",
    AGENT_PERMISSION_VALUE: "Can Withdraw from Players",
    CREATE_DATE: new Date(),
    UPDATE_DATE: new Date(),
    ROLE_ID: insertSave.dataValues.ROLE_ID,
  },
];

const { menupermission } = JSON.parse(localStorage.getItem("MATCH_MASTER"));

const pageUrl = window.location.href.split("/");
const menuPermissions = menupermission.filter(
  (permission) =>
    permission.MENU_SLUG ===
    `/${pageUrl[pageUrl.length - 2]}/${pageUrl[pageUrl.length - 1]}`
)[0];
