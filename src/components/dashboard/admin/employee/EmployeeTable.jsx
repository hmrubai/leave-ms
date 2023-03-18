import React, { useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Link } from "react-router-dom";

import { BsFillEyeFill } from "react-icons/bs";

import { FaEdit } from "react-icons/fa";
import { FcUnlock } from "react-icons/fc";
import Loader from "../../../common/Loader";
import avatar from "../../../../assets/images/profile-picture.png";

import { useGetEmployeeListQuery } from "../../../../services/employeeApi";
import PasswordUpdateModal from "./PasswordUpdateModal";

const EmployeeTable = () => {
  const { data, isSuccess, isFetching } = useGetEmployeeListQuery();

  const [show, setShow] = useState(false);
  const [paramId, setParamId] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) =>
          row.image ? (
            <>
              <img
                className="img-fluid rounded-circle shadow"
                style={{ width: "50px", height: "50px" }}
                src={`${process.env.REACT_APP_FILE_URL}${row.image}`}
                alt=""
              ></img>
            </>
          ) : (
            <>
              <img
                className="img-fluid rounded-circle shadow"
                style={{ width: "50px", height: "50px" }}
                src={avatar}
                alt=""
              ></img>
            </>
          ), //alternate way
        id: "image", //id required if you use accessorFn instead of accessorKey
        header: "image",
        size: "small",
        
       
        
        Header: <span className="table-header">Image</span>, //optional custom markup
      },
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
        size: "small",
      },
      {
        accessorKey: "employee_code", //access nested data with dot notation
        header: "Code",
        size: "small",
      },
      {
        accessorKey: "email", //access nested data with dot notation
        header: "Email",
        size: "small",
      },
      {
        accessorKey: "designation", //access nested data with dot notation
        header: "Designation",
        size: "small",
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
        size: "small",
        Header: <span className="table-header">Status</span>, //optional custom markup
      },

    ],
    []
  );

  

  return (
    <>
      {isFetching && <Loader />}

      <PasswordUpdateModal
        handleClose={handleClose}
        show={show}
        clickValue="Password Reset"
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
        muiBottomToolbarProps={{
          style: {
            backgroundColor: "#0D6EFD",
            
           
          },
        }}

   
      
        // enablePagination="true"
        renderRowActions={(row, index) => (
          <>
            <div className="d-flex">
              <div className="mr-2">
                <Link
                  to="#"
                  className="btn btn-warning btn-sm"
                  onClick={() => {
                    handleShow();
                    setParamId(row?.row?.original?.user_id);
                  }}
                >
                  <FcUnlock className="mb-1 mr-1"/>
                  Reset 
                </Link>
              </div>
              <div>
                <Link
                  to={`/dashboard/approval-authority/employee-details/${row?.row?.original?.id}`}
                >
                  <BsFillEyeFill color="black" size={24} />
                </Link>
              </div>
              <div>
                <Link
                  to={`/dashboard/approval-authority/edit-employee/${row?.row?.original?.id}`}
                  title=""
                  className="px-2"
                >
                  <FaEdit size={22} />
                </Link>
              </div>
            </div>

       
          </>
        )}
      />
    </>
  );
};

export default EmployeeTable;
