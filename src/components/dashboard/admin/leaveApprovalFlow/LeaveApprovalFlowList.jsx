import { useState,useCallback } from 'react';
import PageTopHeader from '../../../common/PageTopHeader';
import { IoSyncCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import LeaveApprovalFlowTable from './LeaveApprovalFlowTable';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import LeaveApprovalFlowModal from './LeaveApprovalFlowModal';


const LeaveApprovalFlowList = () => {

  const [clickValue, setClickValue] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelClickValue = useCallback((value) => {
    setClickValue(value);
  }, []);



  return (
    <>
      <PageTopHeader title="Leave Workflow"/>
      <div className="card shadow mb-4">
        <div className="card-header py-3 ">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">Leave Workflow Setting</h6>
          </div>

        </div>

        <div className="card-body">

         
          <div className="d-flex justify-content-end">
             
              <div>
              <Link
                  to="#"
                  className="btn btn-primary "
                  onClick={() => {
                    handleShow();
                    handelClickValue("Add approval");
                  }}
                >
                  <BsFillPlusCircleFill className="mb-1 mr-1" /> Add Flow
                </Link>
              </div>
            </div>
        

          <LeaveApprovalFlowTable/>
        </div>
      </div>
      <LeaveApprovalFlowModal
        show={show}
        handleClose={handleClose}
        clickValue={clickValue}
      />
    </>
  )
}

export default LeaveApprovalFlowList