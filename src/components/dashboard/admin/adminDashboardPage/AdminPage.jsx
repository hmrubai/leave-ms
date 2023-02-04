import React from "react";
import { Link } from "react-router-dom";
import TopBox from "./TopBox";
import { GiSandsOfTime } from "react-icons/gi";
import { FcApproval } from "react-icons/fc";
import { ImCross } from "react-icons/im";
import { BsStack } from "react-icons/bs";
import { FaEdit } from 'react-icons/fa';
import { green } from "@mui/material/colors";
import Calender from "./Calender";

const AdminPage = () => {
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

      {/*  <!-- Content Row --> */}
      <div className="row">
        {/*  <!-- Earnings (Monthly) Card Example --> */}
        <TopBox name="Pending Leave" color="#FFCC00" icon={<GiSandsOfTime color="#FFCC00"  size={35}/>}  item={40}/>

        {/*  <!-- Earnings (Monthly) Card Example --> */}
        <TopBox name="Approved Leave" color="green" icon={<FcApproval   size={35}/>}  item={40}/>

        {/*  <!-- Earnings (Monthly) Card Example --> */}
        <TopBox name="Rejected Leave" color="red" icon={ <ImCross  color="red"  size={25} /> }   item={40}/>

        {/*  <!-- Pending Requests Card Example --> */}
              <TopBox name="Total Leave" color="blue" icon={<BsStack color="blue" size={ 25} />} item={40}/>
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
              <div className="dropdown no-arrow">
                <Link
                  className="dropdown-toggle"
                  to="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="dropdown-header">Dropdown Header:</div>
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </div>
              </div>
            </div>
            {/*  <!-- Card Body --> */}
            <div className="card-body table-responsive">
              <table class="table table-striped">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Leave Name</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Availed</th>
                    <th scope="col">Remainning</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>
                      {" "}
                      <Link
                        to={`#`}
                        title=""
                        className="px-2"
                        onClick={() => {}}
                      ></Link>
                      <FaEdit size={22}  />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/*  <!-- Pie Chart --> */}
      </div>
      <div className="row">
        {/*   <!-- Area Chart --> */}
        <div className=" ">
          <div className="card border-0 shadow mb-4">
            {/*  <!-- Card Header - Dropdown --> */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Leave Balance List
              </h6>
              <div className="dropdown no-arrow">
                <Link
                  className="dropdown-toggle"
                  to="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="dropdown-header">Dropdown Header:</div>
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </div>
              </div>
            </div>
            {/*  <!-- Card Body --> */}
            <div className="card-body table-responsive">
              <table class="table table-striped">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Leave Name</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Availed</th>
                    <th scope="col">Remainning</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>
                      {" "}
                      <Link
                        to={`#`}
                        title=""
                        className="px-2"
                        onClick={() => {}}
                      ></Link>
                      <FaEdit size={22}  />
                    </td>
                  </tr>
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
              <h6 className="m-0 font-weight-bold text-primary">
                Calender
              </h6>
            </div>
            <div className="card-body">
            <Calender/>
            </div>
          </div>

          {/* <!-- Approach --> */}

        </div>
        {/*   <!-- Content Column --> */}
        <div className="col-lg-6 mb-4">
          {/* <!-- Project Card Example --> */}
          <div className="card shadow mb-4 border-0">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div className="card-body">
              <h4 className="small font-weight-bold">
                Server Migration <span className="float-right">20%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-danger a2"
                  role="progressbar"
                ></div>
              </div>
              <h4 className="small font-weight-bold">
                Sales Tracking <span className="float-right">40%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-warning a3"
                  role="progressbar"
                ></div>
              </div>
              <h4 className="small font-weight-bold">
                Customer Database <span className="float-right">60%</span>
              </h4>
              <div className="progress mb-4">
                <div className="progress-bar a7" role="progressbar"></div>
              </div>
              <h4 className="small font-weight-bold">
                Payout Details <span className="float-right">80%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-info a4"
                  role="progressbar"
                ></div>
              </div>
              <h4 className="small font-weight-bold">
                Account Setup <span className="float-right">Complete!</span>
              </h4>
              <div className="progress">
                <div
                  className="progress-bar bg-success a5"
                  role="progressbar"
                ></div>
              </div>
            </div>
          </div>

          {/* <!-- Color System --> */}
       
        </div>


      </div>
    </>
  );
};

export default AdminPage;
