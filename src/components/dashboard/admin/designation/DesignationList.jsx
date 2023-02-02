import React, { useState, useCallback } from "react";

import {
 
  BsFillPlusCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoSyncCircle } from "react-icons/io5";
import DesignationTable from "./DesignationTable";
import DesignationModal from "./DesignationModal";
import { useGetDesignationListQuery } from "../../../../services/designationApi";
import PageTopHeader from "../../../common/PageTopHeader";

const DesignationList = () => {
 
  const get = useGetDesignationListQuery ();
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
      <PageTopHeader title="Designation"/>
      <div className="card shadow mb-4">
        <div className="card-header py-3 ">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">All Designation List</h6>
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
                  className="btn btn-primary "
                  onClick={() => {
                    handleShow();
                    handelClickValue("Add Designation Information");
                  }}
                >
                  <BsFillPlusCircleFill className="mb-1 mr-1" /> New
                </Link>
              </div>
            </div>
          </div>
          <div>
            <DesignationTable />
          </div>
        </div>
      </div>
      <DesignationModal
        show={show}
        handleClose={handleClose}
        clickValue={clickValue}
      />
    </>
  );
};

export default React.memo(DesignationList);
