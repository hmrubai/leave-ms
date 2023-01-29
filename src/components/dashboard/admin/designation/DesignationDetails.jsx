import React from 'react'

const DesignationDetails = ({ paramId }) => {
  console.log(paramId);
  return (
    <>
    <div className="card-body">
      <div className="row">
      <div className="col-6">
          <p>
                Name:
                <span className="font-weight-bold text-primary "></span>
              </p>
              <p>
              Company:
                <span className="font-weight-bold text-primary "></span>
              </p>
            </div>
            <div className="col-6">
            
              <p>
              Branch:
                <span className="font-weight-bold text-primary "> </span>
              </p>
              <p>
                Status:
                <span className="font-weight-bold text-primary"></span>
              </p>
        
            </div>

      </div>
    </div>
  </>
  )
}

export default DesignationDetails