import React, { useState, useMemo, useCallback } from "react";
import MaterialReactTable from "material-react-table";
import { Link } from "react-router-dom";

import { BsFillEyeFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

import Loader from "../../../common/Loader";
import BranchModal from "./BranchModal";
import { useGetBranchListQuery } from "../../../../services/branchApi";


const BranchTable = () => {
  const { data, isSuccess, isFetching } = useGetBranchListQuery();

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
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
      },

      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
      },
      {
        accessorKey: "contact_no", //normal accessorKey
        header: "Contact No",
        size: 10, 
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

      <BranchModal
    show={show}
    handleClose={handleClose}
        clickValue={clickValue}
        paramId={paramId}
      />
      {/* <MaterialReactTable columns={columns} data={data} /> */}
      <MaterialReactTable
        enableRowSelection
        columns={columns}
        data={isSuccess && data?.data}
      
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
                  to="#"
                  onClick={() => {
                    handleShow();
                    handelClickValue("Branch Information");
                    setParamId(row?.row?.original)
                  }}
                >
                  <BsFillEyeFill color="black" size={24} />
                </Link>
              </div>
              <div>
                
                <Link
                  to={`#`}
                  title=""
                  className="px-2"
                  onClick={() => {
                    handleShow();
                    handelClickValue("Edit Branch Information");
                    setParamId(row?.row?.original)
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

export default React.memo(BranchTable);
