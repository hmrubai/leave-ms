import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const EmployeeDetails = () => {
 const navigate= useNavigate()
  return (
    <> 
      <div className="card shadow mb-4">
      <div className="card-header py-3 d-flex justify-content-between">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">
        Employee Information Details
            </h6>
          </div>
          <div>
            <BsFillArrowLeftCircleFill
              onClick={() => navigate(-1)}
              className="cursor"
              color="black"
              size={20}
            />
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="row">
                <div className="col-6">
                  <img
                    className="img-fluid rounded-circle "
                    style={{ width: "200px", height: "200px" }}
                    src=""
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <p>
                    Name:
                    <span className="font-weight-bold text-primary "></span>
                  </p>
                  <p>
                    Email:
                    <span className="font-weight-bold text-primary "></span>
                  </p>
                  <p>
                    Username:
                    <span className="font-weight-bold text-primary "> </span>
                  </p>

                  <p>
                    Number:
                    <span className="font-weight-bold text-primary"></span>
                  </p>
                  <p>
                    Gender:
                    <span className="font-weight-bold text-primary"></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-6">
                  <p>
                    Created at :
                    <span className="font-weight-bold text-primary">
                      {/* Time: <DayJS format="h:mm A"></DayJS>
                  || Date: <DayJS format="YYYY-MM-DD"></DayJS> */}
                    </span>
                  </p>
                  <p>
                    Updated at :
                    <span className="font-weight-bold text-primary">
                      {/* Time: <DayJS format="h:mm A "></DayJS>
                  || Date: <DayJS format="YYYY-MM-DD"></DayJS> */}
                    </span>
                  </p>
                </div>
                <div className="col-6">
                  <p>
                    Created at :
                    <span className="font-weight-bold text-primary">
                      {/* Time: <DayJS format="h:mm A"></DayJS>
                  || Date: <DayJS format="YYYY-MM-DD"></DayJS> */}
                    </span>
                  </p>
                  <p>
                    Updated at :
                    <span className="font-weight-bold text-primary">
                      {/* Time: <DayJS format="h:mm A "></DayJS>
                  || Date: <DayJS format="YYYY-MM-DD"></DayJS> */}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card card shadow mb-4">
      <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Employee Leave Details
          </h6>
        </div>
        <div className="card-body table-responsive">
          <table className="table table-borderless">
            <thead className="shadow">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Leave Type</th>
                <th scope="col">Balence</th>
                <th scope="col">Count</th>
                <th scope="col">Applied</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
