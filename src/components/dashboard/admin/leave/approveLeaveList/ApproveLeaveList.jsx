import React from "react";

import { Link, useParams } from "react-router-dom";

import Moment from "react-moment";
import Loader from "../../../../common/Loader";
import { useGetApprovedApplicationListQuery } from "../../../../../services/leaveApplication";
import PageTopHeader from "../../../../common/PageTopHeader";
import { BsFillEyeFill } from "react-icons/bs";

const ApproveLeaveList = () => {
  const res = useGetApprovedApplicationListQuery();
  const { data } = res;

  return (
    <>
      <PageTopHeader title="Approved List" />
      <div className="card shadow mb-4">
        <div className="card-header py-3 n">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">
              Approved Leave List
            </h6>
          </div>
        </div>

        {res.isFetching && <Loader />}

        <div className="card-body">
          <div className=" table-responsive">
            <table class="table ">
            <thead
              className=" text-light"
              style={{
                backgroundColor: "#0D6EFD",
              }}
            >
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
              {res.isFetching && <Loader />}
              {res.isError && <p>{res.error.message}</p>}
              {data?.data?.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center">
                    No Data Found
                  </td>
                </tr>
              )}

              {data?.data?.map((item, i) => (
                <tr key={i}>
                  <td>{item.leave_title}</td>
                  <td>
                    <Moment format="YYYY/MM/DD">{item.start_date}</Moment>
                  </td>
                  <td>
                    <Moment format="YYYY/MM/DD">{item.end_date}</Moment>
                  </td>
                  <td>{item.total_applied_days} Dayes</td>

                  {item.is_half_day ? (
                    <td>
                      <span className="badge rounded-pill bg-success mt-1 text-white">
                        Yes ({item.half_day})
                      </span>
                    </td>
                  ) : (
                    <td>
                      <span className="text-white badge rounded-pill bg-info mt-1">
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
    </>
  );
};

export default ApproveLeaveList;
