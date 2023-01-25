import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import DepartmentTable from "./DepartmentTable";
import { useNavigate } from "react-router-dom";

const DepartmentList = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">Department</h6>
          </div>
          <div>
            <BsFillArrowLeftCircleFill
              onClick={() => navigate(-1)}
              className="cursor"
              color="black"
              size={20}
            />
          </div>
        </div>
        <div className="card-body">
          <div className="py-1 text-right mr-1">
            <Link
              to={`/dashboard/admin/create-department`}
              className="btn btn-success"
            >
              {" "}
              <BsFillPlusCircleFill /> Add Department
            </Link>
          </div>
          <div>
            <DepartmentTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentList;
