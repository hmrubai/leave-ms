import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { AiFillCloseCircle } from "react-icons/ai";
import BranchDetails from './BranchDetails';
import CreateBranch from "./CreateBranch";
import EditBranch from './EditBranch';
const BranchModal = ({ handleClose, show, clickValue }) => {


  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{clickValue}</Modal.Title>
          <AiFillCloseCircle onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          {clickValue === "Branch Information" && <BranchDetails />}
          {clickValue === "Add Branch Information" && <CreateBranch/>}
          {clickValue === "Edit Branch Information" && <EditBranch/>}
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
