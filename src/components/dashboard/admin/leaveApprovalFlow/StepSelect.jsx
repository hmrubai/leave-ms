import React from "react";
import { useGetApprovalAuthorityListQuery } from "../../../../services/employeeApi";
import Select from "react-select";
const StepSelect = ({ onChange, value, name }) => {
  const res = useGetApprovalAuthorityListQuery();
  return (
    <>
      <select
        className="form-control"
        name={name}
        onChange={onChange}
        value={value}
      >
        <option value="">Select</option>
        {res.isSuccess &&
          res?.data?.data?.map((item, i) => (
            <option key={i} value={item.id}>
              {item.name}
            </option>
          ))}
      </select>
{/* 
      <Select
        isClearable={true}
        name={name}
        onChange={onChange}
        value={value}
        getOptionValue={(option) => `${option["id"]}`}
        getOptionLabel={(option) => `${option["name"]} `}
        options={res?.data?.data}
      /> */}
    </>
  );
};

export default StepSelect;
