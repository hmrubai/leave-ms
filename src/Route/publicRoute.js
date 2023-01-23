import Error from "../components/pages/commonViews/Error";
import Services from "../components/client/views/Services";
import Contact from "../components/client/views/Contact";
import Home from "../components/client/views/Home";
import NotAccess from "../components/pages/commonViews/NotAccess";
import Login from "../components/pages/login/Login";
import Signup from "./../components/pages/signup/Signup";
import { authUser, authUserToken } from "./../utils/Auth";
import { Navigate } from "react-router-dom";
import Layout from "../components/layout/clientLayout/Layout";



export const publicRoute = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element:
      authUser !== "" && authUserToken !== "" ? <Navigate to={"/dashboard"} replace /> : <Login />,
  },
  {
    path: "/signup",
    element:
    authUser !== "" && authUserToken !== "" ? <Navigate to={"/dashboard"} replace /> : <Signup />,
  },

  {
    path: "/not-access",
    element: <NotAccess />,
  },
  {
    path: "*",
    element: <Error />,
  },
];
