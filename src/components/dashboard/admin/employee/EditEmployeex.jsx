import React from 'react'
import { Button } from 'react-bootstrap'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


const EditEmployee = () => {
    const navigate =useNavigate()
  return (
    <>
    <div className=" card shadow mb-4">
      <div className="card-header py-3 d-flex justify-content-between">
        <div>
          <h6 className="m-0 font-weight-bold text-primary">
            Create Employee
          </h6>
        </div>
        <div>
          <BsFillArrowLeftCircleFill
            onClick={() => navigate(-1)}
            className="cursor"
            color="black"
            size={20}
          />
        </div>
      </div>
      <div className="card-body">
        <form className="form-sample">
          <h5 className="card-description text-info py-2">
            {" "}
            Personal Information :{" "}
          </h5>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Name</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    // onChange={formik.handleChange}
                    // value={formik.values.name}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-9">
                  <input type="email" className="form-control" name="email" />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mobile</label>
                <div className="col-sm-9">
                  <input
                    type="number"
                    className="form-control"
                    name="mobile"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Father Name</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="father_name"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mother Name</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="mother_name"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Gender</label>
                <div className="col-sm-9">
                  <select className="form-control" name="gender">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  Date of Birth
                </label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                    name="date_of_birth"
                    type="date"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">NID No:</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="nid" />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Blood Group</label>
                <div className="col-sm-9">
                  <select className="form-control" name="blood_group">
                    <option>A+</option>
                    <option>B+</option>
                    <option>AB+</option>
                    <option>O+</option>
                    <option>A-</option>
                    <option>B-</option>
                    <option>AB-</option>
                    <option>O-</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Institution</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="institution"
                    // onChange={formik.handleChange}
                    // value={formik.values.institution}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Education</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="education"
                    // onChange={formik.handleChange}
                    // value={formik.values.education}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  Marital Status
                </label>
                <div className="col-sm-9">
                  <select className="form-control" name="marital_status">
                    <option value="married">Married</option>
                    <option value="unmarried">Unmarried</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <h5 className="card-description text-info py-2">
            {" "}
            Company Information :{" "}
          </h5>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Employee ID</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="employee_id"
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
                <label className="col-sm-3 col-form-label">
                  Joining Date
                </label>
                <div className="col-sm-9">
                  <input
                    type="date"
                    className="form-control"
                    name="joining_date"
                  />
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
                <label className="col-sm-3 col-form-label">Designation</label>
                <div className="col-sm-9">
                  <select className="form-control" name="designation_id">
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

          <h5 className="card-description text-info py-2"> Address : </h5>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  Present Address
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="present_address"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  Permanent Address
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="permanent_address"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Division</label>
                <div className="col-sm-9">
                  <select className="form-control" name="division_id">
                    <option>X</option>
                    <option>X</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">District</label>
                <div className="col-sm-9">
                  <select className="form-control" name="district_id">
                    <option>X</option>
                    <option>X</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">City</label>
                <div className="col-sm-9">
                  <select className="form-control" name="city_id">
                    <option>X</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Area </label>
                <div className="col-sm-9">
                  <select className="form-control" name="area_id">
                    <option>X</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Image </label>
                <div className="col-sm-9">
                  <input
                    type="file"
                    // className="form-control"
                    name="image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" py-5">
            <Button className="btn btn-success">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default EditEmployee

