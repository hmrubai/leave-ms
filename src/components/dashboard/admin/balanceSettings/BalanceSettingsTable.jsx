import React, { useState, useMemo, useCallback } from "react";
import MaterialReactTable from "material-react-table";
import { Link } from "react-router-dom";
import {  BsFillPlusCircleFill } from "react-icons/bs";
import {FaEdit } from "react-icons/fa";


import { IoSyncCircle } from "react-icons/io5";
import Select from "react-select";
import Loader from "../../../common/Loader";
import { useGetLeaveBalenceSettingsQuery } from "../../../../services/leaveBalanceSettingsApi";
import { useGetEmploymentTypeListQuery } from "../../../../services/employmentApi";

import BalanceSettingsModal from "./BalanceSettingsModal";

const BalanceSettingsTable = () => {
  const [employmentTypeId, setEmploymentTypeId] = useState(0);
  const { data: employmentType } = useGetEmploymentTypeListQuery();

  const { data, isSuccess, isFetching } =
    useGetLeaveBalenceSettingsQuery(employmentTypeId);

  const get = useGetLeaveBalenceSettingsQuery(employmentTypeId);

  const [show, setShow] = useState(false);
  const [clickValue, setClickValue] = useState(null);
  const [paramId, setParamId] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelClickValue = useCallback((value) => {
    setClickValue(value);
  }, []);

  

  const refatchClick = () => {
    get.refetch();
    setEmploymentTypeId(0);
  };


  const columns = useMemo(
    () => [
      {
        accessorKey: "employment_type", //normal accessorKey
        header: "Employment Type",
      },
      {
        accessorFn: (row) => ` ${row.leave_title} ( ${row.leave_short_code})`,

        //alternate way
        id: "leave_title", //id required if you use accessorFn instead of accessorKey
        header: "leave_title",
        Header: <span className="table-header">Leave Type</span>, //optional custom markup
      },

      {
        accessorKey: "total_days", //access nested data with dot notation
        header: "Total Days",
      },
      {
        accessorKey: "company_name", //access nested data with dot notation
        header: "Company Name",
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

      <BalanceSettingsModal
        show={show}
        handleClose={handleClose}
        clickValue={clickValue}
        paramId={paramId}
      />
      {/* <MaterialReactTable columns={columns} data={data} /> */}

      <div className="pb-3 text-right mr-1 ">
        <div className=" d-flex justify-content-end  ">
          <div className="mt-1 col-md-8 ">
            <IoSyncCircle
              className="cursor "
              color="black"
              size={25}
              onClick={() => refatchClick()}
            />
          </div>

          <div className="col-md-2">
            <Select
              placeholder="Employment Type"
              classNamePrefix="Employment Type"
              onChange={(e) => setEmploymentTypeId(e.id)}
              getOptionValue={(option) => `${option["id"]}`}
              getOptionLabel={(option) => `${option["type"]}`}
              options={employmentType?.data}
              
            />
          </div>
          <div className="col-md-2">
            <Link
              to="#"
              className="btn btn-primary btn-sm"
              onClick={() => {
                handleShow();
                handelClickValue("Add Leave Balance Information");
              }}
            >
              <BsFillPlusCircleFill className="mb-1 mr-1" />
             Add New Leave Settings
            </Link>
          </div>
        </div>
      </div>

      <MaterialReactTable
        enableRowSelection
        columns={columns}
        data={isSuccess && data?.data}
        enableRowActions
        enableColumnActions
        enableRowNumbers
        positionActionsColumn="last"
        rowsPerPageOptions={[5]}
        
 
        // enablePagination="true"
        renderRowActions={(row, index) => (
          <>
            <div className="d-flex">
              <div>
  
              </div>
              <div>
                <Link
                  to={`#`}
                  title=""
                  className="px-2"
                  onClick={() => {
                    handleShow();
                    handelClickValue("Edit Leave Balance Information");
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

export default React.memo(BalanceSettingsTable);
