import React from "react";

const DepartmentDetails = ( {paramId} ) => {
  const id = paramId;
  console.log(id)


  return (
    <>
    
      <div className="card-body">
        <div className="row">
          <div className="col-md-7 col-12">
            <div className="row">
              <div className="col-4">
                <img
                  className="img-fluid rounded-circle "
                  style={{ width: "150px", height: "150px" }}
                  src=""
                  alt=""
                />
              </div>
              <div className="col-8">
                <p>
                  Name:
                  <span className="font-weight-bold text-primary "></span>
                </p>
                <p>
                  Address:
                  <span className="font-weight-bold text-primary "></span>
                </p>
                <p>
                  Contact No:
                  <span className="font-weight-bold text-primary "> </span>
                </p>
                <p>
                  Employee Code:
                  <span className="font-weight-bold text-primary"></span>
                </p>
          
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-6">
                <p>
                  Company Email:
                  <span className="font-weight-bold text-primary"></span>
                </p>
                <p>
                  HR Email:
                  <span className="font-weight-bold text-primary"></span>
                </p>

                <p>
                  Leave Email:
                  <span className="font-weight-bold text-primary"></span>
                </p>
                <p>
                  Company Prefix:
                  <span className="font-weight-bold text-primary"></span>
                </p>
                <p>
                  Status:
                  <span className="font-weight-bold text-primary"></span>
                </p>
         
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentDetails;
