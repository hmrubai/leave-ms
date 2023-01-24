import React from "react";


const EmployeeDetails = () => {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Employee Information Details
          </h6>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <img
                    class="img-fluid rounded-circle "
                    style={{ width: "200px", height: "200px" }}
                    src=""
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <p>
                    Name:
                    <span class="font-weight-bold text-primary "></span>
                  </p>
                  <p>
                    Email:
                    <span class="font-weight-bold text-primary "></span>
                  </p>
                  <p>
                    Username:
                    <span class="font-weight-bold text-primary "> </span>
                  </p>

                  <p>
                    Number:
                    <span class="font-weight-bold text-primary"></span>
                  </p>
                  <p>
                    Gender:
                    <span class="font-weight-bold text-primary"></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <p>
                    Created at :
                    <span class="font-weight-bold text-primary">
                      {/* Time: <DayJS format="h:mm A"></DayJS>
                  || Date: <DayJS format="YYYY-MM-DD"></DayJS> */}
                    </span>
                  </p>
                  <p>
                    Updated at :
                    <span class="font-weight-bold text-primary">
                      {/* Time: <DayJS format="h:mm A "></DayJS>
                  || Date: <DayJS format="YYYY-MM-DD"></DayJS> */}
                    </span>
                  </p>
                </div>
                <div className="col-6">
                  <p>
                    Created at :
                    <span class="font-weight-bold text-primary">
                      {/* Time: <DayJS format="h:mm A"></DayJS>
                  || Date: <DayJS format="YYYY-MM-DD"></DayJS> */}
                    </span>
                  </p>
                  <p>
                    Updated at :
                    <span class="font-weight-bold text-primary">
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
        <div className="card-body">
      
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
