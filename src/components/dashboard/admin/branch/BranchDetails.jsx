import React from 'react'

const BranchDetails = () => {
  return (
    <>
       <div className="card-body">
          <div className="row">
            <div className="col-md-6 col-12">
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
            <div className="col-md-6">
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
    </>
  )
}

export default BranchDetails