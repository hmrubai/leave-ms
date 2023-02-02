import React from "react";
import { Link } from "react-router-dom";
import error from "../../../assets/images/error.png";
const Error = () => {
  return (
    <>
      <div class="container-fluid">
        {/* <!-- 404 Error Text --> */}
        <div class="text-center">
          <img width="500px" src={error} alt="" />
        </div>

        <div class="text-center">
          <Link to="dashboard">&larr; Back to Dashboard</Link>
        </div>
      </div>
    </>
  );
};

export default Error;
