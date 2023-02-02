import React from "react";

import Modal from "react-bootstrap/Modal";



import DepartmentDetails from './DepartmentDetails';
import CreateDepartment from './CreateDepartment';
import EditDepartment from './EditDepartment';
const DepartmentModal = ({ handleClose, show, clickValue,paramId }) => {


 
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{clickValue}</Modal.Title>
        
        </Modal.Header>
        <Modal.Body>
          {clickValue === "Department Information" && <DepartmentDetails item={paramId} handleClose={handleClose}/>}
          {clickValue === "Add Department Information" && <CreateDepartment handleClose={handleClose}/>}
          {clickValue === "Edit Department Information" && <EditDepartment item={paramId} handleClose={handleClose} />}
        </Modal.Body>
     
      </Modal>
    </>
  );
};

export default React.memo(DepartmentModal);
