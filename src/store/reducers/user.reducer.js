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
      "/boosts/boostsList",
    ],
  },
});

export default userReducer.reducer;
