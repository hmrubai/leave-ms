import React, { useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import axios from "axios";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { Box, Button } from "@mui/material";

const Table = () => {

  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then((res) =>
      setData(res.data)
    );
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "userId", //access nested data with dot notation
        header: "ID",
      },
      {
        accessorKey: "id",
        header: "Id",
      },
      {
        accessorKey: "title", //normal accessorKey
        header: "Title",
      },
      {
        accessorKey: "body", //normal accessorKey
        header: "Body",
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
      Table
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
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="text-danger w-100"
            >
              <i className="fas fa-trash fa-lg"></i>
            </Link>{" "}
            <Link
              to={`/admin/authors/edit/${row.row.original.id}`}
              title="Edit Author"
              // className="btn btn-warning btn-sm"
            >
              <i className="fas fa-edit fa-lg"></i>
            </Link>
          </>
        )}
      />
    </div>
  );
};

export default Table;
