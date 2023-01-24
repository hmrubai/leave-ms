import React, { useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import axios from "axios";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { Box, Button } from "@mui/material";

import { BsFillEyeFill } from "react-icons/bs";
import { FaTrash,FaEdit } from "react-icons/fa";
import  Swal from 'sweetalert2';


const EmployeeTable = () => {
  const [data, setData] = useState([]);

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

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then((res) =>
      setData(res.data)
    );
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "userId", //access nested data with dot notation
        header: "Employee Code",
      },
      {
        accessorKey: "userId", //access nested data with dot notation
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
    <div>
      {/* <MaterialReactTable columns={columns} data={data} /> */}
      <MaterialReactTable
        enableRowSelection
        columns={columns}
        data={data}
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
              Export All Data
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
            <Link to={`/dashboard/admin/employee-details/${1}`}> <BsFillEyeFill color="black" size={24} /></Link>
        
   
            <Link
              to={`/admin/authors/edit/${row.row.original.id}`}
              title=""
              className="px-2"
            >
              <FaEdit size={22} />
            </Link>
          


            <Link
              to="#"
              onClick={()=>deleteHandel()}
         
            >
             <FaTrash size={20} color="red"/>
            </Link>{" "}
          </>
        )}
      />
    </div>
  );
};

export default EmployeeTable;
