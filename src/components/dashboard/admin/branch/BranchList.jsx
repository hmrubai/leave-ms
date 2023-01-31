import React, { useState, useCallback } from "react";

import {
  BsFillArrowLeftCircleFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";


import { IoSyncCircle } from "react-icons/io5";
import CompanyTable from "./BranchTable";
import CompanyModal from "./BranchModal";
import { useGetCompanyListQuery } from "../../../../services/companyApi";
import BranchModal from "./BranchModal";
import BranchTable from "./BranchTable";


const BranchList = () => {
  const navigate = useNavigate();
  const getCompanyList = useGetCompanyListQuery();
  const [clickValue, setClickValue] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelClickValue = useCallback((value) => {
    setClickValue(value);
  }, []);

  const refatchClick = () => {
    getCompanyList.refetch();
  };


  return (
    <>
  
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">All Branch List</h6>


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
                  className="btn btn-primary "
                  onClick={() => {
                    handleShow();
                    handelClickValue("Add Branch Information");
                  }}
                >
                  <BsFillPlusCircleFill className="mb-1 mr-1" /> New
                </Link>
              </div>
            </div>
          </div>
          <div>
            <BranchTable />
          </div>
        </div>
      </div>
      <BranchModal
        show={show}
        handleClose={handleClose}
        clickValue={clickValue}
  
      />
    </>
  );
};

export default React.memo(BranchList);
