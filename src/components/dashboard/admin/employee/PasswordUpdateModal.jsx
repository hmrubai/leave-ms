import React from "react";
import Modal from "react-bootstrap/Modal";

const PasswordUpdateModal = ({ handleClose, show, clickValue, paramId }) => {
    console.log(paramId)
  return (
    <>
      <Modal show={show} onHide={handleClose} size="sm">
        <Modal.Header closeButton>
          <Modal.Title>{clickValue}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PasswordUpdateModal;
