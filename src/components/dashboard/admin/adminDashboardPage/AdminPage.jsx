import React from "react";
import { Link } from "react-router-dom";
import TopBox from "./TopBox";
import { GiSandsOfTime } from "react-icons/gi";
import { FcApproval } from "react-icons/fc";
import { ImCross } from "react-icons/im";
import { BsStack } from "react-icons/bs";
import Calender from "../calender/academicCalendar/Calender";
import { useGetAcadamicCalenderQuery } from "../../../../services/calenderApi";
import Moment from "react-moment";
import Loader from "../../../common/Loader";

const AdminPage = () => {
  const res = useGetAcadamicCalenderQuery();
  const { data, error, isLoading,isFetching } = res;


  return (
    <>
      {/*  <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <Link
          to="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </Link>
      </div>

      {isFetching && <Loader />}
      
      {/*  <!-- Content Row --> */}
      <div className="row">
        {/*  <!-- Earnings (Monthly) Card Example --> */}
        <TopBox
          name="Pending Leave"
          color="#FFCC00"
          icon={<GiSandsOfTime color="#FFCC00" size={35} />}
          item={40}
        />

        {/*  <!-- Earnings (Monthly) Card Example --> */}
        <TopBox
          name="Approved Leave"
          color="green"
          icon={<FcApproval size={35} />}
          item={40}
        />

        {/*  <!-- Earnings (Monthly) Card Example --> */}
        <TopBox
          name="Rejected Leave"
          color="red"
          icon={<ImCross color="red" size={25} />}
          item={40}
        />

        {/*  <!-- Pending Requests Card Example --> */}
        <TopBox
          name="Total Leave"
          color="blue"
          icon={<BsStack color="blue" size={25} />}
          item={40}
        />
      </div>

      {/*  <!-- Content Row --> */}

      <div className="row">
        {/*   <!-- Area Chart --> */}
        <div className=" ">
          <div className="card border-0 shadow mb-4">
            {/*  <!-- Card Header - Dropdown --> */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Leave Application List
              </h6>
            </div>
            {/*  <!-- Card Body --> */}
            <div className="card-body table-responsive">
              <table class="table table-striped">
                <thead
                  className=" text-light"
                  style={{
                    backgroundColor: "#0D6EFD",
                  }}
                >
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Start</th>
                    <th scope="col">End</th>
                    <th scope="col">Days</th>
                    <th scope="col">Is Half Day</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading && <Loader />}
                  {error && <h1>Something went wrong</h1>}
                  {data?.data?.leave_list.length === 0 && (
                    <h5>No Leave Application</h5>
                  )}
                  {data?.data?.leave_list?.map((item) => {
                    return (
                      <tr>
                        <td>{item.leave_title}</td>
                        <td>
                          <Moment format="YYYY/MM/DD">{item.startDate}</Moment>
                        </td>
                        <td>
                          <Moment format="YYYY/MM/DD">{item.endDate}</Moment>
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
                            <span className="badge rounded-pill bg-warning text-light">
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
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/*  <!-- Pie Chart --> */}
      </div>

      {/*   <!-- Content Row --> */}
      <div className="row">
        <div className="col-lg-6 mb-4">
          {/* <!-- Illustrations --> */}
          <div className="card shadow mb-4 border-0">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Calender</h6>
            </div>
            <div className="card-body">
              <Calender />
            </div>
          </div>

          {/* <!-- Approach --> */}
        </div>
        {/*   <!-- Content Column --> */}
        <div className="col-lg-6 mb-4">
          {/* <!-- Project Card Example --> */}
          <div className="card shadow mb-4 border-0">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                {" "}
                Leave Balance
              </h6>
            </div>
            <div className="card-body table-responsive">
              <table class="table table-striped">
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
                {isLoading && <Loader />}
                  {error && <h1>Something went wrong</h1>}
                  {data?.data?.balance_list.length === 0 && (
                  <h5>No Leave Balance
                    </h5>
                  )}
                <tbody>
                  {data?.data?.balance_list?.map((item, i) => (
                    <tr key={i}>
                      <td>
                        {item.leave_title}({item.leave_short_code})
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

          {/* <!-- Color System --> */}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
