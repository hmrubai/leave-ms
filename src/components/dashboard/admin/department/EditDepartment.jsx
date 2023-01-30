import { useFormik } from 'formik';
import React from 'react'

const EditDepartment = ({paramId}) => {

  // console.log(paramId)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="card-body">
    <form className="form-sample">

      <div className="row">
        <div className="col-md-6">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Name</label>
            <div className="col-sm-9">
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
                  <label className="col-sm-3 col-form-label">Company</label>
                  <div className="col-sm-9">
                    <select className="form-control" name="company_id">
                      <option>x</option>
                      <option>x</option>
                    </select>
                  </div>
                </div>
              </div>
        <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Branch</label>
                  <div className="col-sm-9">
                    <select className="form-control" name="branch_id">
                      <option>x</option>
                      <option>x</option>
                    </select>
                  </div>
                </div>
              </div>
          
          <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Status</label>
                  <div className="col-sm-9">
                    <select className="form-control" name='is_active'>
                      <option value='1' >Active</option>
                      <option value='2' >Dactive</option>
               
                    </select>
                  </div>
                </div>
              </div>
      </div>
      {/* <div className="col-6 py-5 "> */}
        <button type="submit" className=" btn btn-success  ">
          Submit
        </button>
      {/* </div> */}
    </form>
  </div>
  )
}

export default EditDepartment