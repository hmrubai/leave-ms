import Cookies from "js-cookie";
export const authUser = localStorage.getItem("leave_user_role")
  ? JSON.parse(localStorage.getItem("leave_user_role"))
  : "";

export const authUserToken = Cookies.get("leave_user_token")
  ? JSON.parse(Cookies.get("leave_user_token"))
  : "token";
