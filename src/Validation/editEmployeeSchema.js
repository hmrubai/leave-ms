import * as Yup from "yup";
export const editEmployeeSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),


  father_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  mother_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  employee_id: Yup.string().required("Required"),
  mobile: Yup.number().required("Required"),
  nid: Yup.string().required("Required"),
  present_address: Yup.string().required("Required"),
  permanent_address: Yup.string().required("Required"),
  date_of_birth: Yup.string().required("Required"),
  joining_date: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  marital_status: Yup.string().required("Required"),
  company_id: Yup.number().required("Required"),
  branch_id: Yup.number().required("Required"),
  department_id: Yup.number().required("Required"),
  employment_type_id: Yup.number().required("Required"),
  designation_id: Yup.number().required("Required"),
  division_id: Yup.number().required("Required"),
  district_id: Yup.number().required("Required"),
  city_id: Yup.number().required("Required"),
});
