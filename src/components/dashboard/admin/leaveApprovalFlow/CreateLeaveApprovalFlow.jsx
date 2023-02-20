import React, { useState } from "react";
import Select from "react-select";
import { useGetEmployeeFilterListQuery } from "../../../../services/leaveApprovalFlowApi";
import { useGetCompanyListQuery } from "../../../../services/companyApi";
import { useGetBranchListByCompanyIdQuery } from "../../../../services/branchApi";
import { useGetDepartmentListByCompanyAndBranchIdQuery } from "../../../../services/departmentApi";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useGetDesignationtListByCompanyAndBranchIdQuery } from "../../../../services/designationApi";
import StepSelect from "./StepSelect";

const CreateLeaveApprovalFlow = () => {
  const [employeeId, setEmployeeId] = useState();
  const [companyId, setCompanyId] = useState(0);
  const [branchId, setBranchId] = useState(0);
  const [departmentId, setDepartmentId] = useState(0);
  const [designationId, setDesignationId] = useState(0);
  const [noOfSteps, setNoOfSteps] = useState(0);

  const [selectNoOfSteps, setSelectNoOfSteps] = useState([]);

  const [stepOne, setStepOne] = useState({
    step_count: 1,
    authority_id:"",
  });

  const [stepTwo, setStepTwo] = useState({
    step_count: 2,
    authority_id: "",
  });
  const [stepThree, setStepThree] = useState({
    step_count: 3,
    authority_id: "",
  });
  const [stepFour, setStepFour] = useState({
    step_count: 4 ,
    authority_id: "",
  });

  console.log(stepOne);

  const handleChange = (e) => setStepOne({ ...stepOne, [e.target.name]: e.target.value });




  const companyList = useGetCompanyListQuery();
  const branchList = useGetBranchListByCompanyIdQuery(companyId);
  const departmentList = useGetDepartmentListByCompanyAndBranchIdQuery({
    comId: companyId,
    braId: branchId,
  });

  const designationList = useGetDesignationtListByCompanyAndBranchIdQuery({
    comId: companyId,
    braId: branchId,
  });

  const params = {
    company_id: companyId,
    branch_id: branchId,
    department_id: departmentId,
    designation_id: designationId,
  };

  const employeeFilterList = useGetEmployeeFilterListQuery(params);

  const focusHandelerOne = (name, id) => {
    setCompanyId(id);
    if (name === "company_id") {
      setBranchId(0);
      setDepartmentId(0);
      setDesignationId(0);
      setEmployeeId("");
    }
  };
  const focusHandelerTwo = (name, id) => {
    setBranchId(id);
    if (name === "branch_id") {
      setDepartmentId(0);
      setDesignationId(0);
      setEmployeeId("");
    }
  };
  const focusHandelerThree = (name, id) => {
    setDepartmentId(id);
    if (name === "department_id") {
      setDesignationId(0);
      setEmployeeId("");
    }
  };



  const formik = useFormik({
    initialValues: {
      employee_ids: [],
      steps: [],
    },



    onSubmit: async (values, { resetForm }) => {
      try {
        // const result = await DesignationSaveOrUpdate(values).unwrap();
        // toast.success(result.message);
        const employeeid = [];
        employeeId.map((item) => {
          employeeid.push(item.id);
        });

        console.log(employeeid);

        resetForm();
      } catch (error) {
        toast.warn(error.data.message);
      }
    },
  });

  return (
    <div>
      <form className="form-sample" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-3">
            <div>
              <label className="form-label">Company</label>
            </div>

            <select
              className="form-control"
              name="company_id"
              onChange={(e) => {
                focusHandelerOne("company_id", e.target.value);
              }}
            >
              <option value="0">Select Company</option>
              {companyList?.data?.data?.map((item, i) => (
                <option key={i} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3">
            <div>
              <label className="form-label">Branch</label>
            </div>
            <select
              className="form-control"
              name="branch_id"
              onChange={(e) => {
                focusHandelerTwo("branch_id", e.target.value);
              }}
            >
              <option value="0">Select Branch</option>
              {branchList?.data?.data?.map((item, i) => (
                <option value={item.id} key={i}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3">
            <div>
              <label className="form-label">Department</label>
            </div>
            <select
              className="form-control"
              name="department_id"
              onChange={(e) => {
                focusHandelerThree("department_id", e.target.value);
              }}
            >
              <option value="0">Select Department</option>
              {departmentList?.data?.data?.map((item, i) => (
                <option value={item.id} key={i}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3">
            <div>
              <label className="form-label">Designation</label>
            </div>
            <select
              className="form-control"
              name="designation_id"
              aria-label="Default select example"
              onChange={(e) => {
                setDesignationId(e.target.value);
              }}
            >
              <option value="0">Select Designation</option>
              {designationList?.data?.data?.map((item, i) => (
                <option value={item.id} key={i}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-8">
            <div>
              <label className="form-label">Employee</label>
            </div>
            <Select
              isClearable={true}
              isMulti={true}
              value={employeeId}
              classNamePrefix="Employment Type"
              onChange={(e) => setEmployeeId(e)}
              getOptionValue={(option) => `${option["id"]}`}
              getOptionLabel={(option) =>
                `(${option["employee_code"]}) ${option["name"]}`
              }
              options={employeeFilterList?.data?.data}
            />
          </div>

          <div className="col-md-4">
            <div>
              <label className="form-label">No. Of Steps</label>
            </div>

            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setNoOfSteps(e.target.value)}
              name="noOfSteps"
            >
              <option selected value="0">
                Select step
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className={noOfSteps >= "1" ? " d-block col-md-3" : "d-none"}>
            <div>
              <label className="form-label">Step-1:</label>
            </div>

            <StepSelect
              name="authority_id"
              onChange={handleChange}
              value={stepOne.authority_id}
            />
          </div>
          <div className={noOfSteps >= "2" ? " d-block col-md-3" : "d-none"}>
            <div>
              <label className="form-label">Step-2:</label>
            </div>

            <StepSelect
              name="authority_id"
              onChange={handleChange}
              
            />
          </div>

          <div className={noOfSteps >= "3" ? " d-block col-md-3" : "d-none"}>
            <div>
              <label className="form-label">Step-3:</label>
            </div>

            <StepSelect
              // name={stepThree}
              // onChange={(e) => setStepThree(e.target.value)}
              // value={stepThree}
            />
          </div>
          <div className={noOfSteps >= "4" ? " d-block col-md-3" : "d-none"}>
            <div>
              <label className="form-label">Step-4:</label>
            </div>

            <StepSelect
              // name={stepFour}
              // onChange={(e) => setStepFour(e.target.value)}
              // value={stepFour}
            />
          </div>
        </div>

        <div className="pt-3">
          <button type="submit" className="btn btn-primary mr-2">
            Submit
          </button>
          <button className="btn btn-dark">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreateLeaveApprovalFlow;
