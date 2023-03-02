import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ApplyForLeaveDetails from './ApplyForLeaveDetails';
import CreateApplyForLeave from './CreateApplyForLeave';
import EditApplyForLeave from './EditApplyForLeave';

const ApplyForLeaveModal = ({ handleClose, show, clickValue,paramId }) => {


  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{clickValue}</Modal.Title>
        
        </Modal.Header>
        <Modal.Body>
          {clickValue === "Leave Information" && <ApplyForLeaveDetails item={paramId} handleClose={handleClose}/>}
          {clickValue === "Apply Leave" && <CreateApplyForLeave handleClose={handleClose}/>}
          {clickValue === "Edit Leave" && <EditApplyForLeave item={paramId} handleClose={handleClose} />}
        </Modal.Body>
     
      </Modal>
    </>
  );
};

export default React.memo(ApplyForLeaveModal);
