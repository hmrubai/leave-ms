import React from "react";

import EmployeeTable from "./EmployeeTable";
import {
  BsFillArrowLeftCircleFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useGetEmpoyeeQuery } from "../../../../services/employeeApi";

import { IoSyncCircle } from "react-icons/io5";

const EmployeeList = () => {
  const navigate = useNavigate();

  const getEmpoyee = useGetEmpoyeeQuery();

  const refatchClick = () => {
    getEmpoyee.refetch();
  };
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">All Employee List </h6>
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
            <div className="d-flex justify-content-end">
              <div className="mt-1">
                <IoSyncCircle
                  className="cursor "
                  color="black"
                  size={25}
                  onClick={() => refatchClick()}
                />
              </div>
              <div>
                <Link
                  to={`/dashboard/admin/create-employee`}
                  className="btn btn-success"
                >
                  <BsFillPlusCircleFill /> New
                </Link>
              </div>
            </div>
          </div>
          <div>
            <EmployeeTable />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default EmployeeList;
