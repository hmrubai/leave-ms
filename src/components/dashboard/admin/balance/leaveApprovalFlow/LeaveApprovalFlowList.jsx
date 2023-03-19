import { useState, useCallback } from "react";

import { IoSyncCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import LeaveApprovalFlowTable from "./LeaveApprovalFlowTable";
import { BsFillPlusCircleFill } from "react-icons/bs";
import LeaveApprovalFlowModal from "./LeaveApprovalFlowModal";
import PageTopHeader from "../../../../common/PageTopHeader";

const LeaveApprovalFlowList = () => {
  const [clickValue, setClickValue] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelClickValue = useCallback((value) => {
    setClickValue(value);
  }, []);

  return (
    <>
      <PageTopHeader title="Approval Work Flow Setup" />
      <div className="card shadow mb-4">
        <div className="card-header py-3 ">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">
            Leave Work Flow Setup
            </h6>
          </div>
        </div>

        <div className="card-body  pt-0 ">
          <LeaveApprovalFlowTable />
        </div>
      </div>
    </>
  );
};

export default LeaveApprovalFlowList;
