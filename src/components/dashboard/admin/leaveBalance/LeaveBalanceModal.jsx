import React from "react";

import Modal from "react-bootstrap/Modal";
import LeaveBalanceDetails from './LeaveBalanceDetails';
import CreateLeaveBalance from './CreateLeaveBalance';
import EditLeaveBalance from './EditLeaveBalance';
const LeaveBalanceModal = ({ handleClose, show, clickValue,paramId }) => {


 
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{clickValue}</Modal.Title>
        
        </Modal.Header>
        <Modal.Body>
          {clickValue === "Leave Balance Information" && <LeaveBalanceDetails item={paramId} handleClose={handleClose}/>}
          {clickValue === "Add Leave Balance Information" && <CreateLeaveBalance handleClose={handleClose}/>}
          {clickValue === "Edit Leave Balance Information" && <EditLeaveBalance item={paramId} handleClose={handleClose} />}
        </Modal.Body>
     
      </Modal>
    </>
  );
};

export default React.memo(LeaveBalanceModal);
