import React from "react";
import { Button, Modal } from "react-bootstrap";
import PageTopHeader from "./../../../common/PageTopHeader";
import { IoSyncCircle } from "react-icons/io5";

const LeaveDetails = ({ item, handleClose }) => {
  return (
    <>
      <PageTopHeader title="Applied Leave List" />
      <div className="card shadow mb-4">
        <div className="card-header py-3 n">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">
              Applied Leave List
            </h6>
          </div>
        </div>

        <div className="card-body">
          <div className="py-2 text-right mr-1">
            <div className="d-flex justify-content-end">
              <div className="mt-1"></div>
            </div>
          </div>
          <div className=" row d-flex">
                <div className="col-6">
            <div className=" card card shadow mb-4">
              <div className="card-header py-3 n">
                <div>
                  <h6 className="m-0 font-weight-bold text-primary">
                  Employee Information
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className=" card card shadow mb-4">
              <div className="card-header py-3 n">
                <div>
                  <h6 className="m-0 font-weight-bold text-primary">
                  Leave Information
                  </h6>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className=" row ">
                <div className="col-12">
            <div className=" card card shadow mb-4">
              <div className="card-header py-3 n">
                <div>
                  <h6 className="m-0 font-weight-bold text-primary">
                  Leave Status
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className=" card card shadow mb-4">
              <div className="card-header py-3 n">
                <div>
                  <h6 className="m-0 font-weight-bold text-primary">
                  Leave Balance
                  </h6>
                </div>
              </div>
            </div>
          </div>
          </div>

      
        </div>
      </div>
    </>
  );
};

export default LeaveDetails;
