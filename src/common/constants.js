/* eslint:disable:max-classes-per-file */

const API_URL = "http://143.110.183.1:3003/admin";
const IMAGE_URL = "http://143.110.183.1:3003";
// const API_URL = "http://192.168.29.78:3003/admin";
// const IMAGE_URL = "http://192.168.29.78:3003";

class InternalAPI {
  static AGENTTYPE = "/agenttype";
  static AGENT = "/agent";
  static AGENTTREE = "/agenttree";
  static GAMEGROUP = "/gametype";
  static FAQ = "/faq";
  static COINPACK = "/coinpack";
  static LOYALTYPACK = "/loyalty";
  static SETTINGS = "/setting";
  static GAMES = "/game";
  static SLIDER = "/slider";
  static PERMISSIONS = "/permission";
  static MENU = "/menu";
  static MENUPERMISSIONS = "/menupermission";
  static PLAYER = "/player";
  static DASHBOARD = "/dashboard";
  static CONSTANTS = "/const";
  static LOGIN = "/login";
  static LOYALTYREDEEM = "/redeem";
  static PASSWORDCHANGE = "/password";
  static AGENTTRANSACTION = "/agent-transaction";
  static PLAYERTRANSACTION = "/player-transaction";
}

class SubRoutes {
  static LIST = "/list";
  static FILE = "/file";
  static GAMETYPE = "/gametypes";
  static AGENTLIST = "/agenttypes";
  static AGENTS = "/agents";
  static GETPLAYER = "/getplayer";
  static GETAGENT = "/getagent";
}

export { API_URL, IMAGE_URL, InternalAPI, SubRoutes };
