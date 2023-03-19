import React, { useState } from "react";
import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";
import { navItem } from "./../../../Nav/NavItem";
import { user } from "../../../Route/utils";
import Sidebar from "./Sidebar";
import sm_logo_white from "../../../assets/logo/sm_logo_white.png";
import logo_white from "../../../assets/logo/logo_white.png";
import "./Dashboard.css";
import ScrollToTop from "react-scroll-to-top";
import { BiHomeAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../features/authSlice";
import { toast, ToastContainer } from "react-toastify";
import profilePicture from "../../../assets/images/profile-picture.png";
import reset from "../../../assets/images/reset.png";
import { FaBars } from "react-icons/fa";
import sm_logo from "../../../assets/logo/sm_logo.png";


import { BsFillPersonFill } from "react-icons/bs";

import { RiLockPasswordFill, RiLogoutCircleRFill } from "react-icons/ri";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.auth.user);

  const handelLogout = () => {
    dispatch(logout());
    navigate("/login");
    toast.success("Logout Successfully");
    window.location.reload(false);
  };

  const refresh = () => {
    window.location.reload(false);
  };

  const [style, setStyle] = useState(
    "navbar-nav bg-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (style === "navbar-nav bg-primary sidebar sidebar-dark accordion") {
      setStyle("navbar-nav bg-primary sidebar sidebar-dark accordion toggled");
    } else {
      setStyle("navbar-nav bg-primary sidebar sidebar-dark accordion");
    }
  };
  const changeStyle1 = () => {
    if (style === "navbar-nav bg-primary sidebar sidebar-dark accordion") {
      setStyle("navbar-nav bg-primary sidebar sidebar-dark accordion toggled1");
    } else {
      setStyle("navbar-nav bg-primary sidebar sidebar-dark accordion");
    }
  };

  return (
    <div>
      <ToastContainer />
      {/*  <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/*  <!-- Sidebar --> */}

        <ul className={style} id="accordionSidebar">
          {/*  <!-- Sidebar - Brand --> */}
          <Link
            className="sidebar-brand  d-flex align-items-center justify-content-center "
            to="#"
          >
            <Link to="/" className="sidebar-brand-icon rotate-n-15">
              <img src={sm_logo_white} width="30" alt="" />
            </Link>
            <div className="sidebar-brand-text mx-3">
              <img src={logo_white} width={70} alt="" />
            
            </div>
            <div className="text-center d-none d-md-inline">
              <FaBars onClick={changeStyle} className="ml-3 " />
            </div>
          </Link>

          <li className="nav-item active ">
            <div className="nav-link shadow-lg   d-flex flex-wrap justify-content-center">
              <div>
                {authUser && authUser.image ? (
                  <img
                    className="img-profile rounded-circle "
                    src={`${process.env.REACT_APP_FILE_URL}${authUser.image}`}
                    alt=""
                  />
                ) : (
                  <img
                    className="img-profile rounded-circle "
                    src={profilePicture}
                    alt=""
                  />
                )}
              </div>

              <div className="mt-1 ">
                <span className=" name-font-size d-none d-lg-inline text-light-600 small ml-2 font-weight-bold ">
                  {authUser && authUser.name}
                </span>
              </div>
            </div>
          </li>
          <li className="nav-item active mt-3">
            <NavLink className="nav-link nav-hover" to="/dashboard">
              <BiHomeAlt size={18} />
              <span className="ms-1">Dashboard</span>
            </NavLink>
            {/* <div className="text-center d-none d-md-inline">
                          <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                      </div> */}
          </li>

          {navItem.map(
            (n, i) => n.role === user.role && <Sidebar item={n} key={i} />
          )}
        </ul>
        {/*  <!-- End of Sidebar --> */}

        {/*  <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/*  <!-- Main Content --> */}
          <div id="content">
            {/*  <!-- Topbar --> */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                className="btn btn-link  d-md-none  rounded-circle mr-3  ml-2"
                onClick={changeStyle1}
              >
                <FaBars value={{ style: { verticalAlign: "middle" } }} />
              </button>

              <span className="cursor reset ms-auto" onClick={refresh}>
                <img src={reset} alt="" width={22} />
              </span>
              <span className=" d-none d-md-block fw-bold">Refresh</span>

              <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="mr-2 d-none d-lg-inline text-gray-600 small">
                      {authUser && authUser.name}
                      <div className="text-end text-info fw-bold">
                        {authUser && authUser.designation}
                      </div>
                    </div>

                    {authUser && authUser.image ? (
                      <img
                        className="img-profile rounded-circle "
                        src={`${process.env.REACT_APP_FILE_URL}${authUser.image}`}
                        alt=""
                      />
                    ) : (
                      <img
                        className="img-profile rounded-circle "
                        src={profilePicture}
                        alt=""
                      />
                    )}
                  </Link>
                  {/*  <!-- Dropdown - User Information --> */}
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <Link className="dropdown-item" to="#">
                      <BsFillPersonFill size={15} className="mr-1" />
                      Profile
                    </Link>

                    {authUser && authUser.user_type === "ApprovalAuthority" && (
                      <Link
                        className="dropdown-item"
                        to="approval-authority/change-password"
                      >
                        <RiLockPasswordFill size={15} className="mr-1" />
                        Change Password
                      </Link>
                    )}
                    {authUser && authUser.user_type === "Employee" && (
                      <Link
                        className="dropdown-item"
                        to="employee/change-password"
                      >
                        <RiLockPasswordFill size={15} className="mr-1" />
                        Change Password
                      </Link>
                    )}

                    <div className="dropdown-divider"></div>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={() => handelLogout()}
                    >
                      <RiLogoutCircleRFill size={15} className="mr-1 mb-1" />
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>
            {/*  <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              <Outlet />
            </div>
            {/*   <!-- /.container-fluid --> */}
          </div>
          {/*   <!-- End of Main Content -->

                                      <!-- Footer --> */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto d-flex justify-content-between">
               
                <div>
                  <span className="text-info font-weight-bold">Developed by </span>
                  <img src={sm_logo} width={12}  alt="" />
                  <a
                    className="text-info text-decoration-none"
                    href="https://bacbonltd.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    BacBon Limited.
                  </a>
                </div>
                <div>
                  <span className=" font-weight-bold">
                    &copy; BacBon Limited {new Date().getFullYear()}
                  </span>
                </div>
              </div>
            </div>
          </footer>
          {/* <!-- End of Footer --> */}
        </div>
        {/*  <!-- End of Content Wrapper --> */}
      </div>
      {/*  <!-- End of Page Wrapper -->

     <!-- Scroll to Top Button--> */}

      <ScrollToTop smooth />
    </div>
  );
};

export default Layout;
