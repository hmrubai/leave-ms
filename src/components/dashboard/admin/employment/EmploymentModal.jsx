import React from "react";

import Modal from "react-bootstrap/Modal";
import CreateEmployment from "./CreateEmployment";
import EmploymentDetails from './EmploymentDetails';
import EditEmployment from './EditEmployment';
const EmploymentModal = ({ handleClose, show, clickValue,paramId }) => {


 
  return (
    <>
      <Modal show={show} onHide={handleClose} size="sm">
        <Modal.Header closeButton className=" bg-primary text-white">
          <Modal.Title className="fs-6">{clickValue}</Modal.Title>
        
        </Modal.Header>
        <Modal.Body>
          {clickValue === "Employment Information" && <EmploymentDetails item={paramId} handleClose={handleClose}/>}
          {clickValue === "Add Employment Information" && <CreateEmployment handleClose={handleClose}/>}
          {clickValue === "Edit Employment Information" && <EditEmployment item={paramId} handleClose={handleClose} />}
        </Modal.Body>
     
      </Modal>
    </>
  );
};

export default React.memo(EmploymentModal);
