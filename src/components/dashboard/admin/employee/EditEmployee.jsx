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
            Edit Employee
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
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">First Name</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Last Name</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Gender</label>
                <div className="col-sm-9">
                  <select className="form-control">
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
                  <input className="form-control" placeholder="dd/mm/yyyy" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Category</label>
                <div className="col-sm-9">
                  <select className="form-control">
                    <option>Category1</option>
                    <option>Category2</option>
                    <option>Category3</option>
                    <option>Category4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <p className="card-description"> Address </p>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Address 1</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">State</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Address 2</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Postcode</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">City</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Country</label>
                <div className="col-sm-9">
                  <select className="form-control">
                    <option>America</option>
                    <option>Italy</option>
                    <option>Russia</option>
                    <option>Britain</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Image</label>
                <div className="col-sm-9 ">
                  <input
                    type="file"
                    name=""
                    id=""
                    className="form-control  "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" py-5">
          <Button variant="primary" type="submit">
                Submit
              </Button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default EditEmployee