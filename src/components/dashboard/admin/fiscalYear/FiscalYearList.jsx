import React, { useState, useCallback } from "react";

import {

  BsFillPlusCircleFill,
} from "react-icons/bs";
import { Link,  } from "react-router-dom";


import { IoSyncCircle } from "react-icons/io5";

import FiscalYearModal from "./FiscalYearModal";
import FiscalYearTable from "./FiscalYearTable";
import { useGetFiscalYearListQuery } from "../../../../services/fiscalyearApi";
import PageTopHeader from "../../../common/PageTopHeader";

const FiscalYearList = () => {

  const get= useGetFiscalYearListQuery();
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
      <PageTopHeader title="Fiscal Year" />
      <div className="card shadow mb-4">
        <div className="card-header py-3 ">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">Fiscal Year Information</h6>
          </div>
     
        </div>

        <div className="card-body">
          <div className="pb-3 text-right mr-1">
            <div className="d-flex justify-content-end">
              <div className="mt-1">
                <IoSyncCircle
                  className="cursor "
                  color="black"
                  size={25}
                  onClick={() => refatchClick()}
                />
              </div>
              <div >
                <Link
                  to="#"
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    handleShow();
                    handelClickValue("Add Fiscal Year Information");
                  }}
                >
                  <BsFillPlusCircleFill className="mb-1 mr-1" />Add New Fiscal Year
                </Link>
              </div>
            </div>
          </div>
          <div>
            <FiscalYearTable />
          </div>
        </div>
      </div>
      <FiscalYearModal
        show={show}
        handleClose={handleClose}
        clickValue={clickValue}
      />
    </>
  );
};

export default React.memo(FiscalYearList);
