import React, { useState, useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { Link } from "react-router-dom";

import { BsFillEyeFill } from "react-icons/bs";


import { useGetLeaveApplicationListQuery } from "../../../../../services/leaveApplication";
import Loader from "../../../../common/Loader";
import ApplyForLeaveModal from "./ApplyForLeaveModal";
import { useSelector } from "react-redux";

const ApplyForLeaveTable = () => {
  const { data, isSuccess, isFetching } = useGetLeaveApplicationListQuery();
  const authRole = useSelector((state) => state.auth.role);
  const [show, setShow] = useState(false);
  const [clickValue, setClickValue] = useState(null);
  const [paramId, setParamId] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  const columns = useMemo(
    () => [
      {
        accessorKey: "leave_title", //access nested data with dot notation
        header: "Leave Title",
      },

      {
        accessorKey: "start_date", //normal accessorKey
        header: "Start Date",
      },
      {
        accessorKey: "end_date", //normal accessorKey
        header: "End Date",
      },
      // {
      //   accessorKey: "total_applied_days", //normal accessorKey
      //   header: "Applied For",
      // },
      {
        accessorFn: (row) => (
          <>
            <span className="badge badge-success">
              {row.total_applied_days} Dayes
            </span>
          </>
        ),
        size: 10, //optional
        id: "total_applied_days", //id required if you use accessorFn instead of accessorKey
        header: "Applied For",
        Header: <span className="table-header">Applied For</span>,
      },

      {
        accessorKey: "half_day", //normal accessorKey
        header: "Is Half Day",
      },

      {
        accessorFn: (row) =>
          row.leave_status === true ? (
            <>
              <span className="badge badge-success">Active</span>
            </>
          ) : (
            <>
              <span className="badge badge-warning ">Pending</span>
            </>
          ), //alternate way
        size: 10, //optional
        id: "is_active", //id required if you use accessorFn instead of accessorKey
        header: "Status",
        Header: <span className="table-header">Status</span>, //optional custom markup
      },
    ],
    []
  );


  return (
    <>
      {isFetching && <Loader />}

      <ApplyForLeaveModal
        show={show}
        handleClose={handleClose}
        clickValue={clickValue}
        paramId={paramId}
      />
      {/* <MaterialReactTable columns={columns} data={data} /> */}
      <MaterialReactTable
   
        columns={columns}
        data={isSuccess && data?.data}
        enableRowActions
        enableColumnActions
    
        positionActionsColumn="last"
        muiTopToolbarProps={
          {
            style: {
              backgroundColor: "#0D6EFD",
           
            },

          }}
        // enablePagination="true"
        renderRowActions={(row, index) => (
          <>
            <div className="d-flex">
              <div>
                {authRole === "ApprovalAuthority" && (
                  <Link
                    to={`/dashboard/approval-authority/leave-details/${row?.row?.original?.id}`}
                  >
                    <BsFillEyeFill color="black" size={24} />
                  </Link>
                )}

                {authRole === "Employee" && (
                  <Link
                    to={`/dashboard/employee/leave-details/${row?.row?.original?.id}`}
                  >
                    <BsFillEyeFill color="black" size={24} />
                  </Link>
                )}
              </div>
            </div>
          </>
        )}
      />
    </>
  );
};

export default React.memo(ApplyForLeaveTable);
