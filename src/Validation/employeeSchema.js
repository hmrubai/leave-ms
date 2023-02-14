import * as Yup from "yup";
export const employeeSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is required"),
  email: Yup.string().email("Invalid email").required("This field is required"),

  father_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is required"),
  mother_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is required"),
  employee_id: Yup.string().required("This field is required"),
  mobile: Yup.number().required("This field is required"),
  nid: Yup.string().required("This field is required"),
  present_address: Yup.string().required("This field is required"),
  permanent_address: Yup.string().required("This field is required"),
  date_of_birth: Yup.string().required("This field is required"),
  joining_date: Yup.string().required("This field is required"),
  gender: Yup.string().required("This field is required"),
  marital_status: Yup.string().required("This field is required"),
  company_id: Yup.number().required("This field is required"),
  branch_id: Yup.number().required("This field is required"),
  department_id: Yup.number().required("This field is required"),
  employment_type_id: Yup.number().required("This field is required"),
  designation_id: Yup.number().required("This field is required"),
  division_id: Yup.number().required("This field is required"),
  district_id: Yup.number().required("This field is required"),
  city_id: Yup.number().required("This field is required"),
});
