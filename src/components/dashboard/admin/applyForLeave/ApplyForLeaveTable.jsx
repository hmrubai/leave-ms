import React, { useState, useMemo, useCallback } from "react";
import MaterialReactTable from "material-react-table";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { Box, Button } from "@mui/material";
import { BsFillEyeFill } from "react-icons/bs";
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "../../../common/Loader";
import BranchModal from "./ApplyForLeaveModal";
import { useGetBranchListQuery } from "../../../../services/branchApi";
import { useGetLeaveApplicationListQuery } from "../../../../services/leaveApplication";

const ApplyForLeaveTable = () => {
  const { data, isSuccess, isFetching } = useGetLeaveApplicationListQuery();

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
        accessorKey: "total_applied_days", //normal accessorKey
        header: "Applied For",
      },
      {
        accessorKey: "half_day", //normal accessorKey
        header: "Applied For",
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
                  to={`/dashboard/approval-authority/leave-details/${row?.row?.original?.id}`}
              
                >
                  <BsFillEyeFill color="black" size={24} />
                </Link>
              </div>
           
            </div>
          </>
        )}
      />
    </>
  );
};

export default React.memo(ApplyForLeaveTable);
