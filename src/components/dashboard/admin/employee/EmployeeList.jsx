import React from "react";

import EmployeeTable from "./EmployeeTable";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const EmployeeList = () => {
  return (
    <>
      <div className="card shadow mb-4">
    
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Employee List</h6>
        </div>
        <div className="card-body">
          <div className="py-1 text-right mr-1">
            <Link to={`/dashboard/admin/create-employee`} className="btn btn-info">
              {" "}
              <BsFillPlusCircleFill /> Create Employee
            </Link>
          </div>
          <div>
            <EmployeeTable />

          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
