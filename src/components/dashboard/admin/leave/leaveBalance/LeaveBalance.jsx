import React from "react";
import { useMyLeaveBalanceListQuery } from "../../../../../services/leaveApplication";
import Loader from "../../../../common/Loader";

const LeaveBalance = () => {
  const res = useMyLeaveBalanceListQuery();
  const { data } = res;
  console.log(data);
  return (
    <div className="col-12">
      <div className=" card card shadow mb-4">
        <div className="card-header py-3 n">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">Leave Balance</h6>
          </div>
        </div>
        <div className="card-body">
          {res.isFetching && <Loader />}
          <table class="table">
            <thead
              className=" text-light"
              style={{
                backgroundColor: "#0D6EFD",
              }}
            >
              <tr>
                <th scope="col">Leave Type</th>
                <th scope="col">Total Days</th>
                <th scope="col">Avail Days</th>
                <th scope="col">Remmaining</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.balance_list.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center">
                    No Data Found
                  </td>
                </tr>
                
              )}
             

              {data?.data?.balance_list?.map((item, i) => (
                <tr key={i}>
                  <td>
                    {item.leave_title} ({item.leave_short_code})
                  </td>
                  <td>{item.total_days}</td>
                  <td>{item.availed_days}</td>
                  <td>{item.remaining_days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveBalance;
