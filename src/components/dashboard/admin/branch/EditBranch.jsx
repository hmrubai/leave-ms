import { useFormik } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { useBranchSaveOrUpdateMutation } from "../../../../services/branchApi";
import { useGetCompanyListQuery } from "../../../../services/companyApi";

const EditBranch = ({item}) => {
  const { data } = useGetCompanyListQuery();
  const [branchSaveOrUpdate, { data: branchData, isFetching, isSuccess }] =
    useBranchSaveOrUpdateMutation();
  


  const formik = useFormik({
    initialValues: {
      id:item.id,
      name: item.name,
      address: item.address,
      contact_no: item.contact_no,
      company_id: item.company_id,
      is_active: item.is_active,
    },

    onSubmit: async (values,{resetForm }) => {
      try {
        const result = await branchSaveOrUpdate(values).unwrap();
        toast.success(result.message);
        resetForm();

        // console.log(values)
     
      } catch (error) {
        toast.warn(error.data.message);
      }
    },
  });
  return (
    <>
      <ToastContainer />
      <div className="card-body">
        <form className="form-sample" onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Name</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Address</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Contact No:</label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    name="contact_no"
                    onChange={formik.handleChange}
                    value={formik.values.contact_no}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Company</label>
                <div className="col-sm-8">
                  <select
                    className="form-control"
                    name="company_id"
                    onChange={formik.handleChange}
                    value={formik.values.company_id}
                  >
                    <option>Selact Company</option>
                    {data?.data?.map((company, i) => (
                      <option key={i} value={company.id}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Status</label>
                <div className="col-sm-8">
                  <div class="form-check form-switch mt-2">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label=""
                      name="is_active"
                      onChange={formik.handleChange}
                      value={formik.values.is_active}
                      checked={formik.values.is_active}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-6 py-5 "> */}
          <div className="py-3">
            <button type="submit" className=" btn btn-success  ">
              Submit
            </button>
          </div>
          {/* </div> */}
        </form>
      </div>
    </>
  );
};

export default EditBranch;
