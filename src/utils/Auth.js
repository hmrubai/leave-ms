import Cookies from "js-cookie";
const role = JSON.parse(localStorage.getItem("leave_user_role"));
export const authUser = localStorage.getItem("leave_user_role")
  ? role.toLowerCase()
  : "";

export const authUserToken = Cookies.get("leave_user_token") ? "token" : "";

