import React from "react";
import PageTopHeader from "./../../../../common/PageTopHeader";
import Calender from "../../adminDashboardPage/Calender";

const MyCalender = () => {


  return (
    <>
      <PageTopHeader title="Academic Calendar" />
      <div className="card shadow mb-4">
        <div className="card-header py-3 n">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">
              Academic Calendar
            </h6>
          </div>
        </div>

        {/* {res.isFetching && <Loader />} */}

        <div className="card-body">
          <div className="py-2 text-right mr-1">
            <div className="d-flex justify-content-end">
              <div className="mt-1"></div>
            </div>
          </div>
    <Calender />
        </div>
      </div>
    </>
  );
};

export default MyCalender;
