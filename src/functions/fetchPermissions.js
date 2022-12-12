import { API_URL, InternalAPI } from "common/constants";

const user = JSON.parse(localStorage.getItem("MATCH_MASTER"));

const fetchPermissions = async ({ roleId, agentId }) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ROLE_ID: roleId, AGENT_ID: agentId }),
  };
  const response = await fetch(
    `${API_URL}${InternalAPI.MENUPERMISSIONS}`,
    requestOptions
  );
  if (response.status === 200) {
    const result = await response.json();
    if (result.status === true) {
      const stringifiedData = JSON.stringify({
        ...user,
        menupermission: result.data.menupermission,
        agentpermission: result.data.agentpermission,
      });
      localStorage.setItem("MATCH_MASTER", stringifiedData);
    }
  }
};

export default fetchPermissions;
