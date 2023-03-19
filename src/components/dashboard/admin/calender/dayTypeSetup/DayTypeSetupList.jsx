import React from 'react'
import PageTopHeader from '../../../../common/PageTopHeader'
import DayTypeSetupTable from './DayTypeSetupTable'

const DayTypeSetupList = () => {
  return (
    <>
      <PageTopHeader title="Day Type Setup"/>
      <div className="card shadow ">
        <div className="card-header ">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">Day Type Setup</h6>
          </div>

        </div>

        <div className="card-body m-0 p-0">
     
          <DayTypeSetupTable/>
        </div>
      </div>

    </>
  )
}

export default DayTypeSetupList