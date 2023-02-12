import React from "react";

import EmployeeTable from "./EmployeeTable";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { IoSyncCircle } from "react-icons/io5";
import PageTopHeader from "../../../common/PageTopHeader";
import { useGetEmployeeListQuery } from "../../../../services/employeeApi";

const EmployeeList = () => {
  const get = useGetEmployeeListQuery();

  const refatchClick = () => {
    get.refetch();
  };
  return (
    <>
      <PageTopHeader title="Employee" />
      <div className="card shadow mb-4">
        <div className="card-header py-3 ">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">
              All Employee List{" "}
            </h6>
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
                  className="btn btn-primary"
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
