import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CompanyDetails from "./CompanyDetails";
import CreateCompany from "./CreateCompany";
import EditCompany from "./EditCompany";

import { AiFillCloseCircle } from "react-icons/ai";
const CompanyModal = ({ handleClose, show, clickValue,paramId }) => {


 
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{clickValue}</Modal.Title>
          <AiFillCloseCircle onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          {clickValue === "Company Information" && <CompanyDetails paramId={paramId} />}
          {clickValue === "Add Company Information" && <CreateCompany />}
          {clickValue === "Edit Company Information" && <EditCompany paramId={paramId} />}
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

export default React.memo(CompanyModal);
