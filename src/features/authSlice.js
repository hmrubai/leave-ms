import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: localStorage.getItem("leave_user")
    ? JSON.parse(localStorage.getItem("leave_user"))
    : null,
  permissions: localStorage.getItem("leave_permissions")
    ? JSON.parse(localStorage.getItem("leave_permissions"))
    : null,
  token: Cookies.get("leave_user_token")
    ? Cookies.get("leave_user_token")
    : null,
  role: localStorage.getItem("leave_user_role")
    ? JSON.parse(localStorage.getItem("leave_user_role"))
    : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authToken: (state, action) => {
      Cookies.set("leave_user_token", action.payload);
    },

    authUser: (state, action) => {
      localStorage.setItem("leave_user", JSON.stringify(action.payload));
    },

    userRole: (state, action) => {
      localStorage.setItem("leave_user_role", JSON.stringify(action.payload));
    },

    userPermission: (state, action) => {
      localStorage.setItem("leave_permissions", JSON.stringify(action.payload));
    },

    logout: (state) => {
      Cookies.remove("leave_user_token");
      localStorage.removeItem("leve_user");
      localStorage.removeItem("leave_permissions");
      localStorage.removeItem("leave_user_role");
      
      state.user = null;
      state.Permissions = null;
      state.token = null;
    },
  },
});

export const { authUser, userPermission, userRole, authToken,logout} =
  authSlice.actions;
export default authSlice.reducer;
