import React from "react";
import { useGetDayTypeListQuery } from "../../../../../services/calenderApi";

const Options = () => {
  const res = useGetDayTypeListQuery();
  return (
    <>
      {res.isSuccess &&
        res?.data?.data?.map((item,i) => (
          <option key={i} value={item.id}>{item.title}</option>
        ))}
    </>
  );
};

export default Options;
