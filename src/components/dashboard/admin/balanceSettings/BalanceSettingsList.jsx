import React, { useState } from "react";


import PageTopHeader from "../../../common/PageTopHeader";
import LeaveBalanceModal from "./BalanceSettingsModal";
import LeaveBalanceTable from "./BalanceSettingsTable";


const BalanceSettingsList = () => {




  const [clickValue, setClickValue] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <>
      <PageTopHeader title="Leave Balance" />
      <div className="card shadow mb-4">
        <div className="card-header py-3 ">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">
            Leave Balance Settings
            </h6>
          </div>
        </div>

        <div className="card-body  pt-1">
          {/* <div className="pb-3 text-right mr-1">
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
                    handelClickValue("Add Leave Balance Information");
                  }}
                >
                  <BsFillPlusCircleFill className="mb-1 mr-1" /> New
                </Link>
              </div>
            </div>
          </div> */}
        
            <LeaveBalanceTable />
      
        </div>
      </div>
      <LeaveBalanceModal
        show={show}
        handleClose={handleClose}
        clickValue={clickValue}
      />
    </>
  );
};

export default React.memo(BalanceSettingsList);

