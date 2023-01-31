import React, {  useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { Box, Button } from "@mui/material";

import { BsFillEyeFill } from "react-icons/bs";
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

import Loader from "../../../common/Loader";
import { useGetCompanyListQuery } from "../../../../services/companyApi";

const EmployeeTable = () => {
 

  const { data, isSuccess,isFetching } = useGetCompanyListQuery()



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
        accessorKey: "userId", //access nested data with dot notation
        header: "Employee Code",
      },
      {
        accessorKey: "id", //access nested data with dot notation
        header: "Name",
      },

      {
        accessorKey: "title", //normal accessorKey
        header: "Title",
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
    csvExporter.generateCsv(data);
  };

  const handleExportRows = (rows) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  return (
    <>
      { isFetching&& <Loader/> }
      {/* <MaterialReactTable columns={columns} data={data} /> */}
      <MaterialReactTable
        enableRowSelection
        columns={columns}
        data={isSuccess&&data}
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
            <Link to={`/dashboard/admin/employee-details/${1}`}>
              {" "}
              <BsFillEyeFill color="black" size={24} />
            </Link>
            <Link
              to={`/dashboard/admin/edit-employee/${2}`}
              title=""
              className="px-2"
            >
              <FaEdit size={22} />
            </Link>
            <Link to="#" onClick={() => deleteHandel()}>
              <FaTrash size={20} color="red" />
            </Link>{" "}
          </>
        )}
      />
    </>
  );
};

export default EmployeeTable;
