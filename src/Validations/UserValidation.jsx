import * as yup from "yup";
const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const userSchema = yup.object().shape({
  firstName:yup.string().required("firstname is required"),
  lastName:yup.string().required("lastname is required"),
  email: yup.string().email('Invalid email').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Invalid email address').required("email is required"),
  password: yup
    .string()
    .trim()
    .matches(passwordRules, "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character")
    .min(8)
    .required("password is required"),
    confirmPassword:yup.string().oneOf([yup.ref("password"), null], "passwords must match").required("passwords must match")
  })
