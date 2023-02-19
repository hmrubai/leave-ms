import React, { useState, useCallback } from "react";
import CalenderSetupModal from "./CalenderSetupModal";
import CalenderSetupTable from "./CalenderSetupTable";
import { useGetdepartmentListQuery } from "../../../../../services/departmentApi";
import PageTopHeader from './../../../../common/PageTopHeader';

const CalenderSetupList = () => {
  const get = useGetdepartmentListQuery();
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
      <PageTopHeader title="Leave Balance" />
      <div className="card shadow mb-4">
        <div className="card-header py-3 ">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">
              All Leave Balance List
            </h6>
          </div>
        </div>

        <div className="card-body">
          <div>
            <CalenderSetupTable />
          </div>
        </div>
      </div>
      <CalenderSetupModal
        show={show}
        handleClose={handleClose}
        clickValue={clickValue}
      />
    </>
  );
};

export default React.memo(CalenderSetupList);

