import React, { useState } from "react";
import Select from "react-select";
import { useGetEmployeeFilterListQuery } from "../../../../services/leaveApprovalFlowApi";
import { useGetCompanyListQuery } from "../../../../services/companyApi";
import { useGetBranchListByCompanyIdQuery } from "../../../../services/branchApi";
import { useGetDepartmentListByCompanyAndBranchIdQuery } from "../../../../services/departmentApi";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

const CreateLeaveApprovalFlow = () => {
  const [employeeId, setEmployeeId] = useState();
  const [companyId, setCompanyId] = useState(0);
  const [branchId, setBranchId] = useState(0);
  const [departmentId, setDepartmentId] = useState(0);
  const [designationId, setDesignationId] = useState(0);

  const [noOfSteps, setNoOfSteps] = useState(0);


  const employeeList = useGetCompanyListQuery();
  const branchList = useGetBranchListByCompanyIdQuery(companyId);
  const departmentList =  useGetDepartmentListByCompanyAndBranchIdQuery({
    comId: companyId,
    braId: branchId,
  });

  const designationList= useGetDepartmentListByCompanyAndBranchIdQuery({
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


  const formik = useFormik(
    {
      initialValues: {
        employee_ids: [],
        steps:[]
      },
      
      onSubmit: async (values, { resetForm }) => {
        try {
          // const result = await DesignationSaveOrUpdate(values).unwrap();
          // toast.success(result.message);
          const employeeid=[]
          employeeId.map((item) => {
            employeeid.push(item.id);
          });





          console.log(employeeid);


          resetForm();
        } catch (error) {
          toast.warn(error.data.message);
        }
      },

  }
)





  return (
    <div>
      <form
        className="form-sample"
        onSubmit={formik.handleSubmit}
      >
        <div className="row">
          <div className="col-md-3">
            <div>
              <label className="form-label">Company</label>
            </div>
            <Select
              isClearable={true}
              classNamePrefix="Employment Type"
              backspaceRemovesValue={true}
              onChange={(e) => setCompanyId(e.id)}
              getOptionValue={(option) => `${option["id"]}`}
              getOptionLabel={(option) => `${option["name"]}`}
              options={employeeList?.data?.data}
            />
          </div>
          <div className="col-md-3">
            <div>
              <label className="form-label">Branch</label>
            </div>
            <Select
              isClearable={true}
              classNamePrefix="Employment Type"
              backspaceRemovesValue={true}
              onChange={(e) => setBranchId(e.id)}
              getOptionValue={(option) => `${option["id"]}`}
              getOptionLabel={(option) => `${option["name"]}`}
              options={branchList?.data?.data}
            />
          </div>
          <div className="col-md-3">
            <div>
              <label className="form-label">Department</label>
            </div>
            <Select
              isClearable={true}
              classNamePrefix="Employment Type"
              backspaceRemovesValue={true}
              onChange={(e) => setDepartmentId(e.id)}
              getOptionValue={(option) => `${option["id"]}`}
              getOptionLabel={(option) =>
                `${option["name"]}`
              }
              options={departmentList?.data?.data}
            />
          </div>
          <div className="col-md-3">
            <div>
              <label className="form-label">Designation</label>
            </div>
            <Select
              isClearable={true}
              classNamePrefix="Employment Type"
              backspaceRemovesValue={true}
              onChange={(e) => setDesignationId(e.id)}
              getOptionValue={(option) => `${option["id"]}`}
              getOptionLabel={(option) =>
                `${option["name"]} (${option["employee_code"]})`
              }
              options={designationList?.data?.data}
            />
          </div>

          <div className="col-md-8">
            <div>
              <label className="form-label">Employee</label>
            </div>
            <Select
              isClearable={true}
              isMulti={true}
              classNamePrefix="Employment Type"
              backspaceRemovesValue={true}
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
            <select className="form-select" aria-label="Default select example"
              onChange={(e) => setNoOfSteps(e.target.value)
                
              }
              name="noOfSteps"
            >
              <option selected  value="0">Select step</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
       
          </div>

        
       
          <div className= {noOfSteps >= '1' ? ' d-block col-md-3' : 'd-none'} >
            <div>
              <label className="form-label">Step-1:</label>
            </div>
            <Select
              isClearable={true}
              classNamePrefix="Employment Type"
              backspaceRemovesValue={true}
              // onChange={(e) => setEmployeeId(e.id)}
              getOptionValue={(option) => `${option["id"]}`}
              getOptionLabel={(option) =>
                `${option["name"]} `
              }
              // options={employeeList?.data}
            />
          </div>
          <div className= {noOfSteps >= '2' ? ' d-block col-md-3' : 'd-none'}>
            <div>
              <label className="form-label">Step-2:</label>
            </div>
            <Select
              isClearable={true}
              classNamePrefix="Employment Type"
              backspaceRemovesValue={true}
              // onChange={(e) => setEmployeeId(e.id)}
              getOptionValue={(option) => `${option["id"]}`}
              getOptionLabel={(option) =>
                `${option["name"]} (${option["employee_code"]})`
              }
              // options={employeeList?.data}
            />
          </div>
          <div className= {noOfSteps >= '3' ? ' d-block col-md-3' : 'd-none'}>
            <div>
              <label className="form-label">Step-3:</label>
            </div>
            <Select
              isClearable={true}
              classNamePrefix="Employment Type"
              backspaceRemovesValue={true}
              // onChange={(e) => setEmployeeId(e.id)}
              getOptionValue={(option) => `${option["id"]}`}
              getOptionLabel={(option) =>
                `${option["name"]} (${option["employee_code"]})`
              }
              // options={employeeList?.data}
            />
          </div>
          <div className= {noOfSteps >= '4' ? ' d-block col-md-3' : 'd-none'}>
            <div>
              <label className="form-label">Step-4:</label>
            </div>
            <Select
              isClearable={true}
              classNamePrefix="Employment Type"
              backspaceRemovesValue={true}
              // onChange={(e) => setEmployeeId(e.id)}
              getOptionValue={(option) => `${option["id"]}`}
              getOptionLabel={(option) =>
                `${option["name"]} (${option["employee_code"]})`
              }
              // options={employeeList?.data}
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
