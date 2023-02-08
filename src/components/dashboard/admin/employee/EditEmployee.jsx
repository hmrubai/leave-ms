import { useFormik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../../common/Loader";
// import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { useGetCompanyListQuery } from "../../../../services/companyApi";
import { useGetBranchListByCompanyIdQuery } from "../../../../services/branchApi";
import { useGetDesignationtListByCompanyAndBranchIdQuery } from "../../../../services/designationApi";
import { useGetDepartmentListByCompanyAndBranchIdQuery } from "../../../../services/departmentApi";
import { useGetEmploymentTypeListQuery } from "../../../../services/employmentApi";
import {
  useEmployeeDetailsByIdQuery,
  useGetAreaListByIdQuery,
  useGetDistrictListByIdQuery,
  useGetDivisionListQuery,
  useGetUpazilaListByIdQuery,
  useUpdateEmployeeMutation,
} from "../../../../services/employeeApi";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const companyRes = useGetCompanyListQuery();
  const empDetailsRes = useEmployeeDetailsByIdQuery(id);
  const employmentRes = useGetEmploymentTypeListQuery();
  const divisionRes = useGetDivisionListQuery();

  const [updateEmployee, empUpdateRes] = useUpdateEmployeeMutation();
  const [previewImage, setPreviewImage] = useState();
  const [divisions_id, setdivision_id] = useState();
  const [districts_id, setdistrict_id] = useState();
  const [city_id, setcity_id] = useState();
  const [company_id, setCompany_id] = useState();
  const [branch_id, setBranch_id] = useState();




  const initialValues = {
    name: empDetailsRes?.data?.data?.name,
    email: empDetailsRes?.data?.data?.email,
    mobile: empDetailsRes?.data?.data?.mobile,
    institution: empDetailsRes?.data?.data?.institution,
    education: empDetailsRes?.data?.data?.education,
    present_address: empDetailsRes?.data?.data?.present_address,
    permanent_address: empDetailsRes?.data?.data?.permanent_address,
    father_name: empDetailsRes?.data?.data?.father_name,
    fathers_contact_number: empDetailsRes?.data?.data?.fathers_contact_number,
    mother_name: empDetailsRes?.data?.data?.mother_name,
    mothers_contact_number: empDetailsRes?.data?.data?.mothers_contact_number,
    date_of_birth: empDetailsRes?.data?.data?.date_of_birth,
    employee_id: empDetailsRes?.data?.data?.employee_id,
    nid: empDetailsRes?.data?.data?.nid,
    joining_date: empDetailsRes?.data?.data?.joining_date,
    marital_status: empDetailsRes?.data?.data?.marital_status,
    company_id: empDetailsRes?.data?.data?.company_id,
    branch_id: empDetailsRes?.data?.data?.branch_id,
    department_id: empDetailsRes?.data?.data?.department_id,
    designation_id: empDetailsRes?.data?.data?.designation_id,
    division_id: empDetailsRes?.data?.data?.division_id,
    gender: empDetailsRes?.data?.data?.gender,
    district_id: empDetailsRes?.data?.data?.district_id,
    city_id: empDetailsRes?.data?.data?.city_id,
    area_id: empDetailsRes?.data?.data?.area_id,
    is_active: empDetailsRes?.data?.data?.is_active,
    image: empDetailsRes?.data?.data?.image,
    blood_group: empDetailsRes?.data?.data?.blood_group,
    office_contact_number: empDetailsRes?.data?.data?.office_contact_number,
    finger_print_id: empDetailsRes?.data?.data?.finger_print_id,
    personal_alt_contact_number:
      empDetailsRes?.data?.data?.personal_alt_contact_number,
    personal_email: empDetailsRes?.data?.data?.personal_email,
    passport_number: empDetailsRes?.data?.data?.passport_number,
    spouse_name: empDetailsRes?.data?.data?.spouse_name,
    spouse_number: empDetailsRes?.data?.data?.spouse_number,
    referee_office: empDetailsRes?.data?.data?.referee_office,
    referee_relative: empDetailsRes?.data?.data?.referee_relative,
    referee_contact_details: empDetailsRes?.data?.data?.referee_contact_details,
    key_skills: empDetailsRes?.data?.data?.key_skills,
    highest_level_of_study: empDetailsRes?.data?.data?.highest_level_of_study,
    e_tin: empDetailsRes?.data?.data?.e_tin,
    applicable_tax_amount: empDetailsRes?.data?.data?.applicable_tax_amount,
    official_achievement: empDetailsRes?.data?.data?.official_achievement,
    remarks: empDetailsRes?.data?.data?.remarks,
    employment_type_id: empDetailsRes?.data?.data?.employment_type_id,
  };

  const formik = useFormik({
    initialValues,

    enableReinitialize: true,
    onSubmit: async (values) => {
      let formData = new FormData();
      formData.append("id", id);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("mobile", values.mobile);
      formData.append("institution", values.institution);
      formData.append("education", values.education);
      formData.append("present_address", values.present_address);
      formData.append("permanent_address", values.permanent_address);
      formData.append("father_name", values.father_name);
      formData.append("fathers_contact_number", values.fathers_contact_number);
      formData.append("mother_name", values.mother_name);
      formData.append("mothers_contact_number", values.mothers_contact_number);
      formData.append("date_of_birth", values.date_of_birth);
      formData.append("employee_id", values.employee_id);
      formData.append("nid", values.nid);
      formData.append("joining_date", values.joining_date);
      formData.append("marital_status", values.marital_status);
      formData.append("company_id", values.company_id);
      formData.append("branch_id", values.branch_id);
      formData.append("department_id", values.department_id);
      formData.append("designation_id", values.designation_id);
      formData.append("division_id", values.division_id);
      formData.append("gender", values.gender);
      formData.append("district_id", values.district_id);
      formData.append("city_id", values.city_id);
      formData.append("area_id", values.area_id);
      formData.append("is_active", values.is_active);
      formData.append("image", values.image);
      formData.append("blood_group", values.blood_group);
      formData.append("office_contact_number", values.office_contact_number);
      formData.append("finger_print_id", values.finger_print_id);
      formData.append(
        "personal_alt_contact_number",
        values.personal_alt_contact_number
      );
      formData.append("personal_email", values.personal_email);
      formData.append("passport_number", values.passport_number);
      formData.append("spouse_name", values.spouse_name);
      formData.append("spouse_number", values.spouse_number);
      formData.append("referee_office", values.referee_office);
      formData.append("referee_relative", values.a);
      formData.append(
        "referee_contact_details",
        values.referee_contact_details
      );
      formData.append("key_skills", values.key_skills);
      formData.append("highest_level_of_study", values.highest_level_of_study);
      formData.append("e_tin", values.e_tin);
      formData.append("applicable_tax_amount", values.applicable_tax_amount);
      formData.append("official_achievement", values.official_achievement);
      formData.append("remarks", values.remarks);
      formData.append("employment_type_id", values.employment_type_id);
      try {
        const result = await updateEmployee(formData).unwrap();
        toast.success(result.message);
      } catch (error) {
        toast.warn(error.data.message);
      }
    },
  });

  if (empUpdateRes.isSuccess) {
    navigate("/dashboard/admin/employee-list");
  }

  const focusHandelerOne = (name, id) => {
    setdivision_id(id);
    if (name === "division_id") {
      setdistrict_id(null);
      setcity_id(null);
    }
  };

  const focusHandelerTwo = (name, id) => {
    setdistrict_id(id);
    if (name === "district_id") {
      setcity_id(null);
    }
  };

  const districtRes = useGetDistrictListByIdQuery(divisions_id);
  const upazilaRes = useGetUpazilaListByIdQuery(districts_id);
  const areaRes = useGetAreaListByIdQuery(city_id);

  const branchRes = useGetBranchListByCompanyIdQuery(company_id);
  const departmentRes = useGetDepartmentListByCompanyAndBranchIdQuery({
    comId: company_id,
    braId: branch_id,
  });

  const designationRes = useGetDesignationtListByCompanyAndBranchIdQuery({
    comId: company_id,
    braId: branch_id,
  });

  function handelImage(e) {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <div className=" card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">Edit Employee</h6>
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

        {empDetailsRes.isFetching && <Loader />}

        <div className="card-body">
          <form
            className="form-sample"
            onSubmit={formik.handleSubmit}
            encType="multipart/form-data"
          >
            <h5 className="card-description text-info py-2">
              {" "}
              Personal Information :{" "}
            </h5>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Employee Name
                  </label>
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
                  <label className="col-sm-3 col-form-label">
                    Personal e-mail ID
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      className="form-control"
                      name="personal_email"
                      onChange={formik.handleChange}
                      value={formik.values.personal_email}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Personal Contact Number
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      name="mobile"
                      onChange={formik.handleChange}
                      value={formik.values.mobile}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Personal Alt. Contact Number
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      name="personal_alt_contact_number"
                      onChange={formik.handleChange}
                      value={formik.values.personal_alt_contact_number}
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
                      onChange={formik.handleChange}
                      value={formik.values.father_name}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Fathers Contact Number
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      name="fathers_contact_number"
                      onChange={formik.handleChange}
                      value={formik.values.fathers_contact_number}
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
                      onChange={formik.handleChange}
                      value={formik.values.mother_name}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Mothers Contact Number
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      name="mothers_contact_number"
                      onChange={formik.handleChange}
                      value={formik.values.mothers_contact_number}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Spouse Name</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="spouse_name"
                      onChange={formik.handleChange}
                      value={formik.values.spouse_name}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Spouse Number
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      name="spouse_number"
                      onChange={formik.handleChange}
                      value={formik.values.spouse_number}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Gender</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="gender"
                      onChange={formik.handleChange}
                      value={formik.values.gender}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Transgender">Transgender</option>
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
                      onChange={formik.handleChange}
                      value={formik.values.date_of_birth}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    NID/Birth ID/ Driving License Number
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="nid"
                      onChange={formik.handleChange}
                      value={formik.values.nid}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Passport Number
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="passport_number"
                      onChange={formik.handleChange}
                      value={formik.values.passport_number}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Blood Group</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="blood_group"
                      onChange={formik.handleChange}
                      value={formik.values.blood_group}
                    >
                      <option value="A+">A+</option>
                      <option value="B+">B+</option>
                      <option value="AB+">AB+</option>
                      <option value="O+">O+</option>
                      <option value="A-">A-</option>
                      <option value="B-">B-</option>
                      <option value="AB-">AB-</option>
                      <option value="O-">O-</option>
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
                      onChange={formik.handleChange}
                      value={formik.values.institution}
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
                      onChange={formik.handleChange}
                      value={formik.values.education}
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
                    <select
                      className="form-control"
                      name="marital_status"
                      onChange={formik.handleChange}
                      value={formik.values.marital_status}
                    >
                      <option value="Married">Married</option>
                      <option value="Unmarried">Unmarried</option>
                      <option value="Dnmarried">Dnmarried</option>
                    </select>
                  </div>
                </div>{" "}
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Referee (office)
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="referee_office"
                      onChange={formik.handleChange}
                      value={formik.values.referee_office}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Referee (Relative)
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="referee_relative"
                      onChange={formik.handleChange}
                      value={formik.values.referee_relative}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Referee Contact Details
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="referee_contact_details"
                      onChange={formik.handleChange}
                      value={formik.values.referee_contact_details}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Highest Level of Study
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="highest_level_of_study"
                      onChange={formik.handleChange}
                      value={formik.values.highest_level_of_study}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">e-TIN</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="e_tin"
                      onChange={formik.handleChange}
                      value={formik.values.e_tin}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Applicable Tax Amount
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="applicable_tax_amount"
                      onChange={formik.handleChange}
                      value={formik.values.applicable_tax_amount}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Remarks</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="remarks"
                      onChange={formik.handleChange}
                      value={formik.values.remarks}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Official Achievement
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="official_achievement"
                      onChange={formik.handleChange}
                      value={formik.values.official_achievement}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Key Skills</label>
                  <div className="col-sm-9">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      className="form-control"
                      name="key_skills"
                      onChange={formik.handleChange}
                      value={formik.values.key_skills}
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* <div className="col-md-12">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Key Skills</label>
                  <JoditEditor
                    ref={editor}
                    value={description}
                    // config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={(newContent) => setDescription(newContent)} // preferred to use only this option to update the content for performance reasons
                    // onChange={(newContent) => {setDescription(newContent.target.value)}}
                  />
                </div>
              </div> */}
            </div>
            <h5 className="card-description text-info py-2">
              {" "}
              Company Information :{" "}
            </h5>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    {" "}
                    Office ID Number
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="employee_id"
                      onChange={formik.handleChange}
                      value={formik.values.employee_id}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Office e-Mail ID
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Office Number
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      name="office_contact_number"
                      onChange={formik.handleChange}
                      value={formik.values.office_contact_number}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Finger Print ID
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      name="finger_print_id"
                      onChange={formik.handleChange}
                      value={formik.values.finger_print_id}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Company</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="company_id"
                      onChange={(e) => {
                        formik.handleChange(e);
                        setCompany_id(e.target.value);
                      }}
                      value={formik.values.company_id}
                    >
                      <option>Selact Company</option>
                      {companyRes?.data?.data?.map((company, i) => (
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
                  <label className="col-sm-3 col-form-label">
                    Joining Date
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="date"
                      className="form-control"
                      name="joining_date"
                      onChange={formik.handleChange}
                      value={formik.values.joining_date}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Branch</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="branch_id"
                      onChange={(e) => {
                        formik.handleChange(e);
                        setBranch_id(e.target.value);
                      }}
                      value={formik.values.branch_id}
                    >
                      <option>Selact Branch</option>
                      {branchRes?.data?.data?.map((branch, i) => (
                        <option key={i} value={branch.id}>
                          {branch.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Designation</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="designation_id"
                      onChange={formik.handleChange}
                      value={formik.values.designation_id}
                    >
                      <option>Selact Designation</option>
                      {designationRes?.data?.data?.map((designation, i) => (
                        <option key={i} value={designation.id}>
                          {designation.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Department</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="department_id"
                      onChange={formik.handleChange}
                      value={formik.values.department_id}
                    >
                      <option>Selact Department</option>
                      {departmentRes?.data?.data?.map((department, i) => (
                        <option key={i} value={department.id}>
                          {department.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Employment</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="employment_type_id"
                      onChange={formik.handleChange}
                      value={formik.values.employment_type_id}
                    >
                      <option>Selact Employment</option>
                      {employmentRes?.data?.data?.map((employment, i) => (
                        <option key={i} value={employment.id}>
                          {employment.type}
                        </option>
                      ))}
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
                      onChange={formik.handleChange}
                      value={formik.values.present_address}
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
                      onChange={formik.handleChange}
                      value={formik.values.permanent_address}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Division</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="division_id"
                      onChange={(e) => {
                        formik.handleChange(e);
                        focusHandelerOne(e.target.name, e.target.value);
                      }}
                      value={formik.values.division_id}
                    >
                      <option>Selact Division</option>
                      {divisionRes?.data?.data?.map((division, i) => (
                        <option key={i} value={division.id}>
                          {division.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              {/* district_id */}
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">District</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="district_id"
                      onChange={(e) => {
                        formik.handleChange(e);
                        focusHandelerTwo(e.target.name, e.target.value);
                      }}
                      value={formik.values.district_id}
                    >
                      <option>Selact District</option>
                      {districtRes?.data?.data?.map((district, i) => (
                        <option key={i} value={district.id}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">City</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="city_id"
                      onChange={(e) => {
                        formik.handleChange(e);
                        setcity_id(e.target.value);
                      }}
                      value={formik.values.city_id}
                    >
                      <option>Selact City</option>
                      {upazilaRes?.data?.data?.map((upazila, i) => (
                        <option key={i} value={upazila.id}>
                          {upazila.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Area</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="area_id"
                      onChange={formik.handleChange}
                      value={formik.values.area_id}
                    >
                      <option>Selact City</option>
                      {areaRes?.data?.data?.map((area, i) => (
                        <option key={i} value={area.id}>
                          {area.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Image</label>
                  <div className="col-sm-9">
                    <input
                      type="file"
                      className="form-control"
                      name="image"
                      onChange={(e) => {
                        formik.setFieldValue("image", e.currentTarget.files[0]);
                        handelImage(e);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">Is Active</label>
                  <div className="col-sm-8">
                    <div class="form-check form-switch mt-2">
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Active"
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
            <div className="">
              {previewImage ? (
                <img
                  className="py-2"
                  src={previewImage}
                  width="80px"
                  height="80px"
                  alt=""
                />
              ) : (
                <img
                  className="py-2"
                  src={`${process.env.REACT_APP_FILE_URL}${formik.values.image}`}
                  width="80px"
                  height="80px"
                  alt=""
                />
              )}
            </div>

            <div className=" py-3">
              <Button className="btn btn-success" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditEmployee;
