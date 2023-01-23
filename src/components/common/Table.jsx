import React, { useEffect, useMemo,useState } from "react";
import MaterialReactTable from "material-react-table";
import axios from "axios";


      

const Table = () => {
  const [data, setData] = useState([])
useEffect(() => {
  axios('https://jsonplaceholder.typicode.com/posts')
  .then(res => setData(res.data))
   
}, [])

  
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

  return (
    <div>
      Table
      <MaterialReactTable columns={columns} data={data} />
    </div>
  );
};

export default Table;
