import * as Yup from "yup";

export const Schema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("The email field is required"),
  password: Yup.string()
    .required("The password field is required")
    .min(8, "Password should be greater tha 8 character"),
  firstname: Yup.string().required("Please enter your firstname"),
  lastname: Yup.string().required("Please enter your lastname"),
});
