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

      {
        accessorFn: (row) => (
          <>
            <span className="badge badge-success">
              {row.total_applied_days} Dayes
            </span>
          </>
        ),

        id: "total_applied_days", //id required if you use accessorFn instead of accessorKey
        header: "Applied For",
        Header: <span className="table-header">Applied For</span>,
      },
      {
        accessorFn: (row) =>
          row.half_day === "Not Applicable" ? (
            <span className="badge badge-info">No</span>
          ) : (
              <span >{row.half_day}</span>
          ),
      
        id: "half_day", //id required if you use accessorFn instead of accessorKey
        header: "Is Half Day",
        Header: <span className="table-header">Is Half Day</span>,
      },

      {
        accessorFn: (row) =>
          row.leave_status && (
            <>
              {row.leave_status === "Pending" && (
                <span className="badge badge-warning">{row.leave_status}</span>
              )}

              {row.leave_status === "Approved" && (
                <span className="badge badge-success">{row.leave_status}</span>
              )}
              {row.leave_status === "Rejected" && (
                <span className="badge badge-danger">{row.leave_status}</span>
              )}
            </>
          ), //alternate way
  
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
        muiTopToolbarProps={{
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
