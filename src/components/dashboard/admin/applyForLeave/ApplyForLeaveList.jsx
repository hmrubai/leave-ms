import React, { useState, useCallback } from "react";

import {
  BsFillPlusCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoSyncCircle } from "react-icons/io5";

import { useGetBranchListQuery } from "../../../../services/branchApi";
import PageTopHeader from "../../../common/PageTopHeader";
import ApplyForLeaveTable from "./ApplyForLeaveTable";
import ApplyForLeaveModal from "./ApplyForLeaveModal";
// import { useSelector } from "react-redux";


const ApplyForLeaveList = () => {

//  const user= useSelector((state) => state.auth.role);

// console.log(user);

  const get = useGetBranchListQuery();
  const [clickValue, setClickValue] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelClickValue = useCallback((value) => {
    setClickValue(value);
  }, []);

  const refatchClick = () => {
    get.refetch();
  };


  return (
    <>
  <PageTopHeader title="Apply Leave"/>
      <div className="card shadow mb-4">
        <div className="card-header py-3 n">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">Applyed Leave List</h6>


          </div>

        </div>

        <div className="card-body">
          <div className="py-2 text-right mr-1">
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
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    handleShow();
                    handelClickValue("Apply Leave");
                  }}
                >
                  <BsFillPlusCircleFill className="mb-1 mr-1" /> Apply Leave
                </Link>
              </div>
            </div>
          </div>
          <div>
            <ApplyForLeaveTable />
          </div>
        </div>
      </div>
      <ApplyForLeaveModal
        show={show}
        handleClose={handleClose}
        clickValue={clickValue}
      />
    </>
  );
};

export default React.memo(ApplyForLeaveList);
