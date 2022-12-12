import { configureStore } from "@reduxjs/toolkit";

// Reducers
import customizationReducer from "./customizationReducer";
import userReducer from "./reducers/user.reducer";
import userListReducer from "./reducers/userList.reducer";
import daashboardReducer from "./reducers/daashboard.reducer";

// ==============================|| REDUX - MAIN STORE ||============================== //

export default configureStore({
  reducer: {
    customization: customizationReducer,
    user: userReducer,
    users: userListReducer,
    dashboard: daashboardReducer,
  },
});
