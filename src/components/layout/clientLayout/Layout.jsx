import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function Layout() {
  return (
    <div>
      <div className="text-center text-primary p-5">
        <h4>Leave Managemant System</h4>

        <div className="d-flex justify-content-center">
          <Link to="login" className="btn btn-dark btn-sm ">
            Login <BsArrowRight/>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
