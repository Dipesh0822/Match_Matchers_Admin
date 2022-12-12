import { createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("MATCH_MASTER"));
export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ name, age, mobile_number }) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify({
        name: name,
        mobile_number: mobile_number,
        age: age,
      }),
    };
    return requestOptions.body;
    // fetch(`${API_URL}${InternalAPI.COINPACK}`, requestOptions).then(
    //   (res) => res.json()
    // );
  }
);
