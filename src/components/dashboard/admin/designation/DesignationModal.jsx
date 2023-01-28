import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { AiFillCloseCircle } from "react-icons/ai";
import CreateDesignation from "./CreateDesignation";
import DesignationDetails from './DesignationDetails';
import EditDesignation from './EditDesignation';

const DesignationModal = ({ handleClose, show, clickValue,paramId }) => {
  


  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{clickValue}</Modal.Title>
          <AiFillCloseCircle onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          {clickValue === "Branch Information" && <DesignationDetails paramId={paramId} />}
          {clickValue === "Add Branch Information" && <CreateDesignation/>}
          {clickValue === "Edit Branch Information" && <EditDesignation/>}
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

export default React.memo(DesignationModal);
