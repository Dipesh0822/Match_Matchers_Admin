import * as yup from "yup";

const PHONE_NO_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const userSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  age: yup.number().required("Please enter age"),
  mobile_number: yup
    .string()
    .matches(PHONE_NO_REGEX, "Phone number is invalid")
    .required("Please enter phone number"),
});

export default userSchema;
