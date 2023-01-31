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
          {clickValue === "Branch Information" && <BranchDetails item={paramId} />}
          {clickValue === "Add Branch Information" && <CreateBranch/>}
          {clickValue === "Edit Branch Information" && <EditBranch item={paramId} />}
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

export default React.memo(BranchModal);
