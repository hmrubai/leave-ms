import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CompanyDetails from "./CompanyDetails";
import CreateCompany from "./CreateCompany";
import EditCompany from "./EditCompany";


const CompanyModal = ({ handleClose, show, clickValue,paramId }) => {


 
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{clickValue}</Modal.Title>
          
        </Modal.Header >
        <Modal.Body>
          {clickValue === "Company Information" && <CompanyDetails item={paramId} />}
          {clickValue === "Add Company Information" && <CreateCompany />}
          {clickValue === "Edit Company Information" && <EditCompany item={paramId} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default React.memo(CompanyModal);
