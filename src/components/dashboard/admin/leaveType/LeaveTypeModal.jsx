import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiFillCloseCircle } from "react-icons/ai";
import LeaveTypeDetails from './LeaveTypeDetails';
import CreateLeaveType from './CreateLeaveType';
import EditLeaveType from './EditLeaveType';
const LeaveTypeModal = ({ handleClose, show, clickValue,paramId }) => {


 
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{clickValue}</Modal.Title>
          <AiFillCloseCircle onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          {clickValue === "Company Information" && <LeaveTypeDetails paramId={paramId} />}
          {clickValue === "Add Company Information" && <CreateLeaveType />}
          {clickValue === "Edit Company Information" && <EditLeaveType paramId={paramId} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default React.memo(LeaveTypeModal);
