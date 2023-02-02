import React, { useState } from "react";
import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";
import { navItem } from "./../../../Nav/NavItem";
import { user } from "../../../Route/utils";
import Sidebar from "./Sidebar";
import logo_sm from "../../../assets/logo/sm_logo.png";
import "./Dashboard.css";
import ScrollToTop from "react-scroll-to-top";
// import { HiBars3BottomLeft } from "react-icons/hi2";
// import { useSelector } from './../../../store/index';
import { useDispatch } from "react-redux";
import { logout } from "../../../features/authSlice";
import { toast, ToastContainer } from "react-toastify";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelLogout = () => {
    dispatch(logout());
    navigate("/login");
    toast.success('Logout Successfully');
    window.location.reload(false);

  };

  const [style, setStyle] = useState(
    "navbar-nav bg-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style === "navbar-nav bg-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-primary sidebar sidebar-dark accordion");
    }
  };
  const changeStyle1 = () => {
    if (
      style === "navbar-nav bg-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-primary sidebar sidebar-dark accordion");
    }
  };

  return (
    <div>
      <ToastContainer/>
      {/*  <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/*  <!-- Sidebar --> */}

        <ul className={style} id="accordionSidebar">
          {/*  <!-- Sidebar - Brand --> */}
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center "
            href="#"
          >
            <Link to="/" className="sidebar-brand-icon rotate-n-15">
              <img src={logo_sm} width="30" alt="" />
            </Link>
            <div className="sidebar-brand-text mx-3">LMS</div>
            <div className="text-center d-none d-md-inline">
              <i onClick={changeStyle} className="fas fa-bars ml-3"></i>
            </div>
          </Link>

          {/*   <!-- Divider --> */}
          {/* <hr className="sidebar-divider my-0" /> */}

          {/*  <!-- Nav Item - Dashboard --> */}
          <li className="nav-item active ">
            <div className="nav-link shadow-lg  d-flex flex-wrap justify-content-center">
              <div>
                <img
                  className="img-profile rounded-circle "
                  src="img/undraw_profile.svg"
                  alt=""
                />
              </div>

              <div className="mt-1 ">
                <span className="d-none d-lg-inline text-light-600 small ml-2 font-weight-bold ">
                  Arfin Foysal
                </span>
              </div>
            </div>
          </li>
          <li className="nav-item active mt-3">
            <NavLink className="nav-link nav-hover" to="/dashboard">
              <i className="fas fa-fw fa-home"></i>
              <span>Dashboard</span>
            </NavLink>
            {/* <div className="text-center d-none d-md-inline">
                          <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                      </div> */}
          </li>

          {/*  <!-- Divider --> */}
          {/* <hr className="sidebar-divider" /> */}

          {navItem.map(
            (n, i) => n.role === user.role && <Sidebar item={n} key={i} />
          )}
          {/* <!-- Divider --> */}
          {/* <hr className="sidebar-divider d-none d-md-block" /> */}

          {/* <!-- Sidebar Toggler (Sidebar) --> */}
          {/* <div className="text-center d-none d-md-inline">
                          <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                      </div> */}
        </ul>
        {/*  <!-- End of Sidebar --> */}

        {/*  <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/*  <!-- Main Content --> */}
          <div id="content">
            {/*  <!-- Topbar --> */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/*  <!-- Sidebar Toggle (Topbar) --> */}
              <button
                id="sidebarToggleTop"
                className="btn btn-link  d-md-none  rounded-circle mr-3 ml-2"
                onClick={changeStyle1}
              >
                <i className="fa fa-bars"></i>
              </button>

              {/*  <!-- Topbar Search --> */}
              <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>

              {/*  <!-- Topbar Navbar --> */}
              <ul className="navbar-nav ml-auto">
                {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-search fa-fw"></i>
                  </Link>
                  {/*   <!-- Dropdown - Messages --> */}
                  <div
                    className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                {/*  <!-- Nav Item - Alerts --> */}
                <li className="nav-item dropdown no-arrow mx-1">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="alertsDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-bell fa-fw"></i>
                    {/*  <!-- Counter - Alerts --> */}
                    <span className="badge badge-danger badge-counter">3+</span>
                  </Link>
                  {/*   <!-- Dropdown - Alerts --> */}
                  <div
                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="alertsDropdown"
                  >
                    <h6 className="dropdown-header">Alerts Center</h6>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="mr-3">
                        <div className="icon-circle bg-primary">
                          <i className="fas fa-file-alt text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">
                          December 12, 2019
                        </div>
                        <span className="font-weight-bold">
                          A new monthly report is ready to download!
                        </span>
                      </div>
                    </Link>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="mr-3">
                        <div className="icon-circle bg-success">
                          <i className="fas fa-donate text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">
                          December 7, 2019
                        </div>
                        $290.29 has been deposited into your account!
                      </div>
                    </Link>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="mr-3">
                        <div className="icon-circle bg-warning">
                          <i className="fas fa-exclamation-triangle text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">
                          December 2, 2019
                        </div>
                        Spending Alert: We've noticed unusually high spending
                        for your account.
                      </div>
                    </Link>
                    <Link
                      className="dropdown-item text-center small text-gray-500"
                      href="#"
                    >
                      Show All Alerts
                    </Link>
                  </div>
                </li>

                {/*  <!-- Nav Item - Messages --> */}
                <li className="nav-item dropdown no-arrow mx-1">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="messagesDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-envelope fa-fw"></i>
                    {/*  <!-- Counter - Messages --> */}
                    <span className="badge badge-danger badge-counter">7</span>
                  </Link>
                  {/*   <!-- Dropdown - Messages --> */}
                  <div
                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="messagesDropdown"
                  >
                    <h6 className="dropdown-header">Message Center</h6>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="img/undraw_profile_1.svg"
                          alt="..."
                        />
                        <div className="status-indicator bg-success"></div>
                      </div>
                      <div className="font-weight-bold">
                        <div className="text-truncate">
                          Hi there! I am wondering if you can help me with a
                          problem I've been having.
                        </div>
                        <div className="small text-gray-500">
                          Emily Fowler · 58m
                        </div>
                      </div>
                    </Link>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="img/undraw_profile_2.svg"
                          alt="..."
                        />
                        <div className="status-indicator"></div>
                      </div>
                      <div>
                        <div className="text-truncate">
                          I have the photos that you ordered last month, how
                          would you like them sent to you?
                        </div>
                        <div className="small text-gray-500">Jae Chun · 1d</div>
                      </div>
                    </Link>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="img/undraw_profile_3.svg"
                          alt="..."
                        />
                        <div className="status-indicator bg-warning"></div>
                      </div>
                      <div>
                        <div className="text-truncate">
                          Last month's report looks great, I am very happy with
                          the progress so far, keep up the good work!
                        </div>
                        <div className="small text-gray-500">
                          Morgan Alvarez · 2d
                        </div>
                      </div>
                    </Link>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                          alt="..."
                        />
                        <div className="status-indicator bg-success"></div>
                      </div>
                      <div>
                        <div className="text-truncate">
                          Am I a good boy? The reason I ask is because someone
                          told me that people say this to all dogs, even if they
                          aren't good...
                        </div>
                        <div className="small text-gray-500">
                          Chicken the Dog · 2w
                        </div>
                      </div>
                    </Link>
                    <Link
                      className="dropdown-item text-center small text-gray-500"
                      href="#"
                    >
                      Read More Messages
                    </Link>
                  </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Arfin Foysal
                      {/* <div>
                        Admin
                      </div> */}
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="img/undraw_profile.svg"
                      alt=""
                    />
                  </Link>
                  {/*  <!-- Dropdown - User Information --> */}
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <Link className="dropdown-item" href="#">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </Link>
                    <Link className="dropdown-item" href="#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                    </Link>
                    <Link className="dropdown-item" href="#">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      Activity Log
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={() => handelLogout()}
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
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
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Arfin Foysal 2023</span>
              </div>
            </div>
          </footer>
          {/* <!-- End of Footer --> */}
        </div>
        {/*  <!-- End of Content Wrapper --> */}
      </div>
      {/*  <!-- End of Page Wrapper -->

                              <!-- Scroll to Top Button--> */}

      {/*  <!-- Logout Modal--> */}

      <ScrollToTop smooth />
    </div>
  );
};

export default Layout;
