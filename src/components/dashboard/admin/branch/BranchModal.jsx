import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BranchDetails from './BranchDetails';
import CreateBranch from "./CreateBranch";
import EditBranch from './EditBranch';
const BranchModal = ({ handleClose, show, clickValue,paramId }) => {


  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{clickValue}</Modal.Title>
        
        </Modal.Header>
        <Modal.Body>
          {clickValue === "Branch Information" && <BranchDetails item={paramId} handleClose={handleClose}/>}
          {clickValue === "Add Branch Information" && <CreateBranch handleClose={handleClose}/>}
          {clickValue === "Edit Branch Information" && <EditBranch item={paramId} handleClose={handleClose} />}
        </Modal.Body>
     
      </Modal>
    </>
  );
};

export default React.memo(BranchModal);
