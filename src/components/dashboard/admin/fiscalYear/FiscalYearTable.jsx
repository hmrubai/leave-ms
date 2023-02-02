import React, { useState, useMemo, useCallback } from "react";
import MaterialReactTable from "material-react-table";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { Box, Button } from "@mui/material";
import { BsFillEyeFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "../../../common/Loader";
import FiscalYearModal from "./FiscalYearModal";
import { useGetFiscalYearListQuery } from "../../../../services/fiscalyearApi";

const FiscalYearTable = () => {
  const { data, isSuccess, isFetching } =useGetFiscalYearListQuery ();
  const [show, setShow] = useState(false);
  const [clickValue, setClickValue] = useState(null);
  const [paramId, setParamId] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelClickValue = useCallback((value) => {
    setClickValue(value);
  }, []);

  const deleteHandel = async (deleteFunc, Did) => {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "error",
      confirmButtonColor: "#d33 ",
      cancelButtonColor: " #4e4e4e",
      confirmButtonText: "Yes, delete it!",
      width: 200,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // deleteFunc(Did);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
      console.log(result);
    });
  };

  

  const columns = useMemo(
    () => [
      {
        accessorKey: "fiscal_year", //access nested data with dot notation
        header: "Fiscal Year",
      },
      {
        accessorKey: "start_date", //access nested data with dot notation
        header: "Start Date",
      },

      {
        accessorKey: "end_date", //normal accessorKey
        header: "End Date",
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
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: columns.map((c) => c.header),
  };

  const csvExporter = new ExportToCsv(csvOptions);

  const handleExportData = () => {
    csvExporter.generateCsv();
  };

  const handleExportRows = (rows) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  return (
    <>
      {isFetching && <Loader />}

      <FiscalYearModal
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
            sx={{ display: "flex", gap: "1rem", p: "0.5rem", flexWrap: "wrap" }}
          >
            <Button
              color="primary"
              //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
              onClick={handleExportData}
              startIcon={<FileDownloadIcon />}
              variant="contained"
            >
              Export
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
              Selected Rows
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
                    handelClickValue("Fiscal Year Information");
                    setParamId(row?.row?.original);
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
                    handelClickValue("Edit Fiscal Year Information");
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

export default React.memo(FiscalYearTable);
