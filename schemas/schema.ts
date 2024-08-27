import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Please enter your user name"),
  password: Yup.string().required("Please this field is required"),
});
