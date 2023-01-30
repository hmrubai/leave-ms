import { authUser, authUserToken } from "../utils/Auth";

export const user = {
  name: "Arfin Foysal",
  role: authUser ? authUser : "all",
  token: authUserToken ? authUserToken : "",
};

export const routes = [
  {
    path: "/dashboard/admin",
    role: "admin",
  },
  {
    path: "/dashboard/employee",
    role: "employee",
  },
  {
    path: "/dashboard/approval-authority",
    role: "approvalauthority",
  },
  {
    path: "/dashboard/others",
    role: "others",
  },
  {
    path: "/login",
    role: "all",
  },
];

export const getPath = () => {
  const route = routes.find((r) => r.role === user.role);
  return route.path;
};
