import React from "react";

import Modal from "react-bootstrap/Modal";
import FiscalYearDetails from "./FiscalYearDetails";
import CreateFiscalYear from './CreateFiscalYear';
import EditFiscalYear from "./EditFiscalYear";
const FiscalYearModal = ({ handleClose, show, clickValue,paramId }) => {


 
  return (
    <>
      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title>{clickValue}</Modal.Title>
        
        </Modal.Header>
        <Modal.Body>
          {clickValue === "Fiscal Year Information" && <FiscalYearDetails item={paramId} handleClose={handleClose}/>}
          {clickValue === "Add Fiscal Year Information" && <CreateFiscalYear handleClose={handleClose}/>}
          {clickValue === "Edit Fiscal Year Information" && <EditFiscalYear item={paramId} handleClose={handleClose} />}
        </Modal.Body>
     
      </Modal>
    </>
  );
};

export default React.memo(FiscalYearModal);
