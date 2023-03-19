import * as Yup from "yup";
export const changePasswordSchema = Yup.object().shape({
  old_password: Yup.string().required("Old Password is required"),
  new_password: Yup.string().required("Password is required"),
  confirm_password: Yup.string()
    .required("Password Confirmation is required")
    .oneOf([Yup.ref("new_password"), null], "Passwords must match"),
});
