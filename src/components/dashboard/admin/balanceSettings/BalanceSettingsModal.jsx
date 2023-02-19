import React from "react";

import Modal from "react-bootstrap/Modal";

import CreateBalanceSetup from './../balanceSetup/CreateBalanceSetup';
import EditBalanceSettings from './EditBalanceSettings';
import BalanceSettingsDetails from './BalanceSettingsDetails';

const BalanceSettingsModal = ({ handleClose, show, clickValue,paramId }) => {


 
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{clickValue}</Modal.Title>
        
        </Modal.Header>
        <Modal.Body>
          {clickValue === "Leave Balance Information" && <BalanceSettingsDetails item={paramId} handleClose={handleClose}/>}
          {clickValue === "Add Leave Balance Information" && <CreateBalanceSetup handleClose={handleClose}/>}
          {clickValue === "Edit Leave Balance Information" && <EditBalanceSettings item={paramId} handleClose={handleClose} />}
        </Modal.Body>
     
      </Modal>
    </>
  );
};

export default React.memo(BalanceSettingsModal);
