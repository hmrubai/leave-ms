import React from "react";


import Loader from "./../../../../common/Loader";

import { useGetDayTypeListQuery } from "../../../../../services/calenderApi";

const DayTypeSetupTable = () => {
  const { data, isSuccess, isFetching } = useGetDayTypeListQuery();


 

  return (
    <>
      {isFetching && <Loader />}

      <div className="card-body table-responsive">
        <table class="table table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Day Short Code</th>
              <th scope="col">Is Active</th>
            </tr>
          </thead>
          <tbody>
            {isSuccess && (
              <>
                {data?.data?.map((item, i) => (
                  <tr key={i}>
                    <td>{item.title}</td>
                    <td>{item.day_short_code}</td>
                    <td>
                      {item.is_active === true ? (
                        <>
                          <span className="badge badge-success">Active</span>
                        </>
                      ) : (
                        <>
                          <span className="badge badge-danger">Inactive</span>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default React.memo(DayTypeSetupTable);
