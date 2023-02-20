import React from "react";
import { useGetApprovalAuthorityListQuery } from "../../../../services/employeeApi";

const StepSelect = ({ onChange, value, name,step }) => {
  const res = useGetApprovalAuthorityListQuery();
  return (
    <>
      <select
        className="form-control"
        name={name}
        onChange={onChange}
        value={value}
      >
        <option value="">Select Step { step+1}</option>
        {res.isSuccess &&
          res?.data?.data?.map((item, i) => (
            <option key={i} value={item.id}>
              {item.name}
            </option>
          ))}
      </select>

    </>
  );
};

export default StepSelect;
