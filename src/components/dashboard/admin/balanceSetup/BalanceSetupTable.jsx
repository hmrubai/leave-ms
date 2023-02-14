import React, { useState, useMemo, useCallback } from "react";
import MaterialReactTable from "material-react-table";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { Box, Button } from "@mui/material";
import { BsFillEyeFill, BsFillPlusCircleFill } from "react-icons/bs";
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "../../../common/Loader";
import { IoSyncCircle } from "react-icons/io5";
import Select from "react-select";
import BalanceSetupModal from "./BalanceSetupModal";
import { useGetBalanceSetupListQuery } from "../../../../services/balanceSetupApi";
import { useGetEmployeeListQuery } from "../../../../services/employeeApi";


const BalanceSetupTable = () => {
  const [employeeId, setEmployeeId] = useState(1);
 




  const { data, isSuccess, isFetching } = useGetBalanceSetupListQuery(employeeId);

  const { data: employeeList } = useGetEmployeeListQuery();
  const get = useGetBalanceSetupListQuery(employeeId);

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
  };

  // const deleteHandel = async (deleteFunc, Did) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     // text: "You won't be able to revert this!",
  //     icon: "error",
  //     confirmButtonColor: "#d33 ",
  //     cancelButtonColor: " #4e4e4e",
  //     confirmButtonText: "Yes, delete it!",
  //     width: 200,
  //     showCancelButton: true,
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // deleteFunc(Did);
  //       Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //     }
  //     console.log(result);
  //   });
  // };

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
        accessorKey: "total_days", //access nested data with dot notation
        header: "Total Days",
      },
      {
        accessorKey: "availed_days", //access nested data with dot notation
        header: "Availed Days",
      },
      {
        accessorKey: "remaining_days",

        header: "Remaining",
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

      <BalanceSetupModal
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

          <div className="col-md-3">
            <Select

              isClearable={true}
              classNamePrefix="Employment Type"
              backspaceRemovesValue={true}
              onChange={(e) => setEmployeeId(e.id)}
              getOptionValue={(option) => `${option["id"]}`}
              getOptionLabel={(option) => `${option["name"]} (${option["employee_code"]})`}
              options={employeeList?.data}
            />
          </div>
          {/* <div className="col-md-2">
            <Link
              to="#"
              className="btn btn-primary "
              onClick={() => {
                handleShow();
                handelClickValue("Add Leave Balance Information");
              }}
            >
              <BsFillPlusCircleFill className="mb-1 mr-1" /> New
            </Link>
          </div> */}
        </div>
      </div>

      <MaterialReactTable
        

        enableRowSelection
        columns={columns}
        data={isSuccess && data?.data?.balance_list}
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
                {/* <Link
                  to="#"
                  onClick={() => {
                    handleShow();
                    handelClickValue("Leave Balance Information");
                    setParamId(row?.row?.original);
                  }}
                >
                  <BsFillEyeFill color="black" size={24} />
                </Link> */}
              </div>
              <div>
                <Link
                  to={`#`}
                  title=""
                  className="px-2"
                  onClick={() => {
                    handleShow();
                    handelClickValue("Edit Balance Setup Information");
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

export default React.memo(BalanceSetupTable);
