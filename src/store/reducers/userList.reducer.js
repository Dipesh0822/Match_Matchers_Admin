import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "store/thunk/user.thunk";

const userListReducer = createSlice({
  name: "users",
  initialState: {
    status: null,
    msg: "",
    totalRecords: 0,
    data: [],
    dataIndex: "",
  },
  reducers: {
    setDataIndex: (state, { payload }) => {
      state.dataIndex = payload;
    },
  },
  extraReducers: {
    // Create Agent Type Reducers
    [createUser.pending]: (state) => {
      state.status = "loading";
    },
    [createUser.fulfilled]: (state, { payload }) => {
      if (payload.status === true) {
        state.msg = payload.msg;
        state.data.unshift(payload.data);
        if (state.data.length >= 10) {
          state.data.pop();
        }
        state.status = "success";
      }
      if (payload.status === false) {
        state.msg = payload.msg || "Network Error";
        state.status = "failed";
      }
    },
    [createUser.rejected]: (state) => {
      state.status = "failed";
      state.msg = "Something went wrong. Please try again.";
    },
  },
});

export const { setDataIndex } = userListReducer.actions;

export default userListReducer.reducer;
