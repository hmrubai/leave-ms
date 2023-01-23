import { privateRoute } from "./privateRoute";
import Layout from "../components/dashboardLayout/Layout";
import { user } from "./utils";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ r, children }) => {
  if (user.token === "" || user.role === "") {
    // return <Navigate to={"/login"} replace />;
    return window.location.replace(`${process.env.REACT_APP_FONTEND_URL}login`);
  }

  if (user) {
    if (r.role === user.role || r.role === "all") {
      return children;
    } else {
      return <Navigate to={"/not-access"} />;
    }
  } else {
    return <Navigate to={"/login"} replace />;
  }
};

export const getRoute = () => {
  const filterRoute = [];

  privateRoute.map((r) => {
    r.element = <ProtectRoute r={r}>{r.element}</ProtectRoute>;
    filterRoute.push(r);
  });
  return {
    path: "/dashboard",
    element: <Layout />,
    children: filterRoute,
  };
};
