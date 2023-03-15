import React, { useState, useMemo, useCallback } from "react";
import MaterialReactTable from "material-react-table";
import { Link } from "react-router-dom";

import { ImCross } from "react-icons/im";
import {  FaEdit, FaCheck } from "react-icons/fa";


import Loader from "../../../common/Loader";
import CompanyModal from "./LeaveTypeModal";
import { useGetLeavePolicyListQuery } from "../../../../services/leavepolicyApi";

const LeaveTypeTable = () => {
  const { data, isSuccess, isFetching } = useGetLeavePolicyListQuery();
  const [show, setShow] = useState(false);
  const [clickValue, setClickValue] = useState(null);
  const [paramId, setParamId] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelClickValue = useCallback((value) => {
    setClickValue(value);
  }, []);

 

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => ` ${row.leave_title} ( ${row.leave_short_code})`,

        //alternate way
        id: "leave_title", //id required if you use accessorFn instead of accessorKey
        header: "leave_title",
        Header: <span className="table-header">Leave Type</span>, //optional custom markup
      },

      {
        accessorKey: "total_days", //normal accessorKey
        header: "Total Days",
      },

      {
        accessorFn: (row) =>
          row.is_applicable_for_all === true ? (
            <>
              <span className="">
                <FaCheck color="green" />
                {row.applicable_for}
              </span>
            </>
          ) : (
            <>
              <span className="">
                <ImCross color="red" />
                {row.applicable_for}
              </span>
            </>
          ), //alternate way
        id: "is_applicable_for_all", //id required if you use accessorFn instead of accessorKey
        header: "is_applicable_for_all",
        Header: <span className="table-header"> For All</span>, //optional custom markup
      },
      {
        accessorFn: (row) =>
          row.is_leave_cut_applicable === true ? (
            <>
              <span className="">
                <FaCheck color="green" />
              </span>
            </>
          ) : (
            <>
              <span className="">
                <ImCross color="red" />
              </span>
            </>
          ), //alternate way
        id: "is_leave_cut_applicable", //id required if you use accessorFn instead of accessorKey
        header: "is_leave_cut_applicable",
        Header: <span className="table-header">Cut Applicable</span>, //optional custom markup
      },

      {
        accessorFn: (row) =>
          row.is_carry_forward === true ? (
            <>
              <span className="">
                <FaCheck color="green" />
                {row.max_carry_forward_days} Days
              </span>
            </>
          ) : (
            <>
              <span className="">
                <ImCross color="red" />
                {row.max_carry_forward_days} Days
              </span>
            </>
          ), //alternate way
        id: "is_carry_forward", //id required if you use accessorFn instead of accessorKey
        header: "is_carry_forward",
        Header: <span className="table-header">Carry Forward</span>, //optional custom markup
      },

      {
        accessorFn: (row) =>
          row.is_document_upload === true ? (
            <>
              <span className="">
                <FaCheck color="green" />
                After {row.document_upload_after_days} Days
              </span>
            </>
          ) : (
            <>
              <span className="">
                <ImCross color="red" />
                After {row.document_upload_after_days} Days
              </span>
            </>
          ), //alternate way
        id: "is_document_upload", //id required if you use accessorFn instead of accessorKey
        header: "is_document_upload",
        Header: <span className="table-header">Document Upload</span>, //optional custom markup
      },

      {
        accessorFn: (row) =>
          row.is_holiday_deduct === true ? (
            <>
              <span className="">
                <FaCheck color="green" />
              </span>
            </>
          ) : (
            <>
              <span className="">
                <ImCross color="red" />
              </span>
            </>
          ), //alternate way
        id: "is_holiday_deduct", //id required if you use accessorFn instead of accessorKey
        header: "is_holiday_deduct",
        Header: <span className="table-header">Holiday Deduct</span>, //optional custom markup
      },

      {
        accessorFn: (row) =>
          row.is_active === true ? (
            <>
              <span className="badge badge-success">Active</span>
            </>
          ) : (
            <>
              <span className="badge badge-danger">Inactive</span>
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

      <CompanyModal
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
                <Link
                  to={`#`}
                  title=""
                  className="px-2"
                  onClick={() => {
                    handleShow();
                    handelClickValue("Edit Leave Information");
                    setParamId(row?.row?.original);
                  }}
                >
                  <FaEdit size={22} />
                </Link>
              </div>

              {/* <div>
                <Link to="#" onClick={() => deleteHandel()}>
                  <FaTrash size={20} color="red" />
                </Link>{" "}
              </div> */}
            </div>
          </>
        )}
      />
    </>
  );
};

export default React.memo(LeaveTypeTable);
