import React from 'react'
import PageTopHeader from '../../../common/PageTopHeader';
import { IoSyncCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import CreateLeaveApprovalFlow from './CreateLeaveApprovalFlow';



const LeaveApprovalFlowList = () => {



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
          <div className="py-2 text-right mr-1">
            <div className="d-flex justify-content-end">
              <div className="mt-1">
                {/* <IoSyncCircle
                  className="cursor "
                  color="black"
                  size={25}
                //   onClick={() => refatchClick()}
                /> */}
              </div>
            </div>
          </div>
          <CreateLeaveApprovalFlow/>
                  


        </div>
      </div>

    </>
  )
}

export default LeaveApprovalFlowList