import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
};

export default createSlice({
  name: "auth",
  initialState,
  reducers: {
    setDemoLogin(state) {
      state.isLoggedIn = true;
    },
  },
});
