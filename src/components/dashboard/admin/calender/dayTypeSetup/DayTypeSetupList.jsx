import React from 'react'
import PageTopHeader from '../../../../common/PageTopHeader'
import DayTypeSetupTable from './DayTypeSetupTable'

const DayTypeSetupList = () => {
  return (
    <>
      <PageTopHeader title="Day Type Setup"/>
      <div className="card shadow mb-4">
        <div className="card-header py-3 ">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">Day Type Setup</h6>
          </div>

        </div>

        <div className="card-body">
          <div className="py-2 text-right mr-1">
            <div className="d-flex justify-content-end">
              <div className="mt-1">
                {/* <IoSyncCircle
                  className="cursor "
                  color="black"
                  size={25}
                //   onClick={() => refatchClick()}
                /> */}
              </div>
            </div>
          </div>
          <DayTypeSetupTable/>
        </div>
      </div>

    </>
  )
}

export default DayTypeSetupList