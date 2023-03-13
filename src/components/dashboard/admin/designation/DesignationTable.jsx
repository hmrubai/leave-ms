import React, { useState, useMemo, useCallback } from "react";
import MaterialReactTable from "material-react-table";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { Box, Button } from "@mui/material";
import { BsFillEyeFill } from "react-icons/bs";
import {FaEdit } from "react-icons/fa";


import Loader from "../../../common/Loader";

import DesignationModal from "./DesignationModal";
import { useGetDesignationListQuery } from "../../../../services/designationApi";


const DesignationTable = () => {
  const { data, isSuccess, isFetching } = useGetDesignationListQuery();
  const [show, setShow] = useState(false);
  const [clickValue, setClickValue] = useState(null);
  const [paramId,setParamId]=useState(null)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
  const handelClickValue = useCallback((value) => {
    setClickValue(value);
  }, []);


  const columns = useMemo(
    () => [
      {
        accessorKey: "title", //access nested data with dot notation
        header: "Title",
      },
      {
        accessorKey: "company_name", //access nested data with dot notation
        header: "Company Name",
      },

      {
        accessorKey: "branch_name", //normal accessorKey
        header: "Branch Name",
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
  const csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: columns.map((c) => c.header),
  };


  const csvExporter = new ExportToCsv(csvOptions);
  const handleExportRows = (rows) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => {
    csvExporter.generateCsv(data);
  };


  return (
    <>
      {isFetching && <Loader />}

      <DesignationModal
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
        enableRowActions
        enableColumnActions
        enableRowNumbers
        positionActionsColumn="last"
        renderTopToolbarCustomActions={({ table }) => (
          <Box
          sx={{ display: 'flex', gap: '1rem', p: '0.5rem', flexWrap: 'wrap' }}
        >
   
          <Button
            disabled={table.getPrePaginationRowModel().rows.length === 0}
            //export all rows, including from the next page, (still respects filtering and sorting)
            onClick={() =>
              handleExportRows(table.getPrePaginationRowModel().rows)
            }
            startIcon={<FileDownloadIcon />}
            variant="contained"
          >
            Export All Rows
          </Button>

          <Button
            disabled={
              !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
            }
            //only export selected rows
            onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
            startIcon={<FileDownloadIcon />}
            variant="contained"
          >
            Export Selected Rows
          </Button>
        </Box>
        )}
        // enablePagination="true"
        renderRowActions={(row, index) => (
          
          <>
         
            <div className="d-flex">
              <div>
                <Link
                  to="#"
                  onClick={() => {
                    handleShow();
                    handelClickValue("Designation Information");
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
                    handelClickValue("Edit Designation Information");
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

export default React.memo(DesignationTable);
