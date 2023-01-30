import { useFormik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";

const CreateLeaveType = () => {
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
    <>
      <div className="card-body">
        <form className="form-sample">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-5 col-form-label">Leave Title</label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control"
                    name="leave_title"
                    onChange={formik.handleChange}
                    value={formik.values.leave_title}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-5 col-form-label">
                  leave Short Code
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control"
                    name="leave_short_code"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-5 col-form-label">Total Days</label>
                <div className="col-sm-7">
                  <input
                    type="number"
                    className="form-control"
                    name="total_days"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-5 col-form-label">Company</label>
                <div className="col-sm-7">
                  <select className="form-control" name="company_id">
                    <option>x</option>
                    <option>x</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-5 col-form-label">
                  Applicable For
                </label>
                <div className="col-sm-7">
                  <select className="form-control" name="applicable_for">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-5 col-form-label">
                  Applicable For
                </label>
                <div className="col-sm-7">
                  <div class="form-check form-switch">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Check this switch"
                    />
                  </div>
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
    </>
  );
};

export default CreateLeaveType;
