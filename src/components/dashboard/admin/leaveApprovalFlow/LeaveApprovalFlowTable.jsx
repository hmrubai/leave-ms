import React, { useState, useMemo, useCallback } from "react";
import MaterialReactTable from "material-react-table";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { Box, Button } from "@mui/material";
import { BsFillEyeFill, BsFillPlusCircleFill } from "react-icons/bs";
import { FaTrash, FaEdit } from "react-icons/fa";

import Loader from "../../../common/Loader";
import { useGetApprovalFlowListQuery } from "../../../../services/leaveApprovalFlowApi";
import LeaveApprovalFlowModal from "./LeaveApprovalFlowModal";
// import Select from './../calender/workingDaySetup/Select';
import Select from "react-select";

import { useGetEmployeeListQuery } from "../../../../services/employeeApi";

const LeaveApprovalFlowTable = () => {
  const [employeeId, setEmployeeId] = useState(0);
  
  const { data, isSuccess, isFetching } = useGetApprovalFlowListQuery(employeeId);
  const { data: employeeList } = useGetEmployeeListQuery();

  // console.log(employeeList)

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
        accessorFn: (row) =>
          ` ${row.authority_name} - 
            ${row.authority_email}`,

        //alternate way
        id: "authority_name", //id required if you use accessorFn instead of accessorKey
        header: "authority_name",
        Header: <span className="table-header">Approval Authority</span>, //optional custom markup
      },
      {
        accessorFn: (row) =>
          ` ${row.employee_name} - 
           ${row.employee_email}`,

        //alternate way
        id: "employee_name", //id required if you use accessorFn instead of accessorKey
        header: "employee_name",
        Header: <span className="table-header">Employee</span>, //optional custom markup
      },

      {
        accessorKey: "step", //normal accessorKey
        header: "Step",
        size: 50,
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
      <div className="d-flex justify-content-end py-1">
        <div className="col-md-2">
          <Select
            placeholder="Select Employee"
            // isClearable={true}

            // backspaceRemovesValue={true}
            onChange={(e) => setEmployeeId(e.id)}
            getOptionValue={(option) => `${option["id"]}`}
            getOptionLabel={(option) =>
              `${option["name"]} (${option["employee_code"]})`
            }
            options={employeeList?.data}
          />
        </div>

        <div>
          <Link
            to="#"
            className="btn btn-primary btn-sm"
            onClick={() => {
              handleShow();
              handelClickValue("Add approval");
            }}
          >
            <BsFillPlusCircleFill className="mb-1 mr-1" /> Add Flow
          </Link>
        </div>
      </div>

      {isFetching && <Loader />}

      <LeaveApprovalFlowModal
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
                  to={`#`}
                  title=""
                  className="px-2"
                  onClick={() => {
                    handleShow();
                    handelClickValue("Edit Step");
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

export default React.memo(LeaveApprovalFlowTable);
