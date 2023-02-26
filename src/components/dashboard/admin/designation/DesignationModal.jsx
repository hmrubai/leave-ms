import React from "react";
import Modal from "react-bootstrap/Modal";


import CreateDesignation from "./CreateDesignation";
import DesignationDetails from './DesignationDetails';
import EditDesignation from './EditDesignation';

const DesignationModal = ({ handleClose, show, clickValue,paramId }) => {
  


  return (
    <>
    <Modal show={show} onHide={handleClose} size="md">
      <Modal.Header closeButton>
        <Modal.Title>{clickValue}</Modal.Title>
      
      </Modal.Header>
      <Modal.Body>
        {clickValue === "Designation Information" && <DesignationDetails item={paramId} handleClose={handleClose}/>}
        {clickValue === "Add Designation Information" && <CreateDesignation handleClose={handleClose}/>}
        {clickValue === "Edit Designation Information" && <EditDesignation item={paramId} handleClose={handleClose} />}
      </Modal.Body>
   
    </Modal>
  </>
  );
};

export default React.memo(DesignationModal);
