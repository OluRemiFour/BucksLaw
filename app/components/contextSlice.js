const { createSlice } = require("@reduxjs/toolkit");

const contextSlice = createSlice({
  name: "context",
  initialState: {
    isActive: false,
    isLogin: false,
  },
  reducers: {
    toggleActive: (state) => {
      state.isActive = !state.isActive;
    },
    toggleLogin: (state) => {
      state.isLogin = !state.isLogin;
    },
  },
});

export const { toggleActive, toggleLogin } = contextSlice.actions;

export default contextSlice.reducer;
