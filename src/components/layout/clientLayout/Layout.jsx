import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from './../../../store/index';

function Layout() {
  const authUser = useSelector((state) => state.auth.user);
  return (
    <div>
      <div className="text-center text-primary p-5">
        <h4>Leave Managemant System</h4>

        <div className="d-flex justify-content-center">

          {authUser ? (
            <Link to="dashboard" className="btn btn-dark btn-sm ">
              Dashboard <BsArrowRight />
            </Link>
          ) : (
           <Link to="login" className="btn btn-dark btn-sm ">
            Login <BsArrowRight/>
          </Link>
          )
          }

          



        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
