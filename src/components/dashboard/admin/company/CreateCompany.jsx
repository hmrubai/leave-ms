import { useFormik } from "formik";
import React,{useState} from "react";


const CreateCompany = () => {
  const [previewImage, setPreviewImage] = useState();

  function handelImage(e) {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      contact_no: "",
      company_email: "",
      hr_email:"",
      leave_email: "",
      employee_code_length: "",
      company_prefix:"",
      file: "",
      
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="card-body">
        <form className="form-sample" onSubmit={formik.handleSubmit} encType="multipart/form-data">

          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-5 col-form-label">Name</label>
                <div className="col-sm-7">
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
                <label className="col-sm-5 col-form-label">Address</label>
                <div className="col-sm-7">
                  <input type="text" className="form-control"
                    name="address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-5 col-form-label">Contact No:</label>
                <div className="col-sm-7">
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
                <label className="col-sm-5 col-form-label">Company Email</label>
                <div className="col-sm-7">
                  <input
                    type="email"
                    className="form-control"
                    name="company_email"
                    onChange={formik.handleChange}
                    value={formik.values.company_email}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-5 col-form-label">HR email</label>
                <div className="col-sm-7">
                  <input
                    type="email"
                    className="form-control"
                    name="hr_email"
                    onChange={formik.handleChange}
                    value={formik.values.hr_email}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-5 col-form-label">Leave Email</label>
                <div className="col-sm-7">
                  <input
                    type="email"
                    className="form-control"
                    name="leave_email"
                    onChange={formik.handleChange}
                    value={formik.values.leave_email}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-5 col-form-label">Employee Code</label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control"
                    name="employee_code_length"
                    onChange={formik.handleChange}
                    value={formik.values.employee_code_length}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-5 col-form-label">
                  Company Prefix
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control"
                    name="company_prefix"
                    onChange={formik.handleChange}
                    value={formik.values.company_prefix}
                  />
                </div>
              </div>
            </div>
         
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-5 col-form-label">Company Logo</label>
                <div className="col-sm-7">
                  <input
                    className="form-control"
                    name="file"
                    type='file'
                    accept='image/*'
                    onChange={(e) =>
                    {
                      formik.setFieldValue('file', e.currentTarget.files[0]);
                      handelImage(e)}
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <img className="py-2" src={previewImage} width="80px" height="80px" alt="" />
            </div>
          <div className="py-2">
                <button type="submit" className=" btn btn-success  ">
              Submit
            </button>
         </div>
        
        
        </form>
      </div>
    </>
  );
};

export default CreateCompany;
