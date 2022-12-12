import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    data: [],
    userLoggedIn: false,
    allowedRoutes: [
      "/",
      "/users/userList",
      "/perk/perkList",
      "/dashboard",
      "/password",
    ],
  },
});

export default userReducer.reducer;
