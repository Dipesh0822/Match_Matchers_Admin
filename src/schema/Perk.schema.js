import * as yup from "yup";

const perkSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  file: yup.string().required("Please select image"),
});

export default perkSchema;
