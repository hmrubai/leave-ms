import React from "react";

import { Link, useParams } from "react-router-dom";

import Moment from "react-moment";
import Loader from "../../../../common/Loader";
import { useGetApprovalPendingApplicationListQuery } from "../../../../../services/leaveApplication";
import PageTopHeader from "../../../../common/PageTopHeader";
import { BsFillEyeFill } from "react-icons/bs";

const PendingLeaveList = () => {
  const res = useGetApprovalPendingApplicationListQuery();
  const { data } = res;

  console.log(data);

  return (
    <>
      <PageTopHeader title="Pending List" />
      <div className="card shadow mb-4">
        <div className="card-header py-3 n">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">
              Pending Leave List
            </h6>
          </div>
        </div>

        {res.isFetching && <Loader />}

        <div className="card-body">
          <div className="py-2 text-right mr-1">
            <div className="d-flex justify-content-end">
              <div className="mt-1"></div>
            </div>
          </div>

          <div className=" row ">
            <div className="col-12">
              <div className=" card card shadow mb-4">
                <div className="card-header py-3 n">
                  <div>
                    <h6 className="m-0 font-weight-bold text-primary">
                      Pending Leave List
                    </h6>
                  </div>
                </div>
                <div className="card-body">
                {res.isFetching && <Loader />}
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Leave Type</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Applied For</th>
                        <th scope="col">Is Half Day</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    
                      {res.isError && <>{res.error.message}</>
                      }
                      {
                        data?.data?.length === 0 && (
                          <tr>
                            <td colSpan="7" className="text-center">
                              No Pending leave application found!
                            </td>
                            </tr>
                      )}

                    

                      {data?.data?.map((item, i) => (
                        <tr key={i}>
                          <td>{item.leave_title}</td>
                          <td>
                            <Moment format="YYYY/MM/DD">
                              {item.start_date}
                            </Moment>
                          </td>
                          <td>
                            <Moment format="YYYY/MM/DD">{item.end_date}</Moment>
                          </td>
                          <td>{item.total_applied_days} Dayes</td>

                          {item.is_half_day ? (
                            <td>
                              <span className="badge rounded-pill bg-success">
                                Yes ({item.half_day})
                              </span>
                            </td>
                          ) : (
                            <td className=" mt-1">
                              <span className="badge rounded-pill bg-info">
                                No
                              </span>
                            </td>
                          )}
                        
                          {item.leave_status === "Pending" ? (
                            <td>
                              <span className="badge rounded-pill bg-warning text-dark">
                                {item.leave_status}
                              </span>
                            </td>
                          ) : (
                            <td>
                              <span className="badge rounded-pill bg-success">
                                {item.leave_status}
                              </span>
                            </td>
                          )}
                           
                      
                          <td>
                            {" "}
                            <Link
                              to={`/dashboard/approval-authority/leave-details/${item.id}`}
                            >
                              <BsFillEyeFill color="black" size={24} />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingLeaveList;
