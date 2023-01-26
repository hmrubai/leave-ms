import React, { useState, useCallback } from "react";

import {
  BsFillArrowLeftCircleFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useGetEmpoyeeQuery } from "../../../../services/employeeApi";

import { IoSyncCircle } from "react-icons/io5";
import CompanyTable from "./CompanyTable";
import CompanyModal from "./CompanyModal";

const CompanyList = () => {
  const navigate = useNavigate();
  const getEmpoyee = useGetEmpoyeeQuery();
  const [clickValue, setClickValue] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelClickValue = useCallback((value) => {
    setClickValue(value);
  }, []);

  const refatchClick = () => {
    getEmpoyee.refetch();
  };
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">All Company List</h6>
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
                  to="#"
                  className="btn btn-success "
                  onClick={() => {
                    handleShow();
                    handelClickValue("Add Company Information");
                  }}
                >
                  <BsFillPlusCircleFill className="mb-1 mr-1" /> New
                </Link>
              </div>
            </div>
          </div>
          <div>
            <CompanyTable />
          </div>
        </div>
      </div>
      <CompanyModal
        show={show}
        handleClose={handleClose}
        clickValue={clickValue}
      />
    </>
  );
};

export default React.memo(CompanyList);
