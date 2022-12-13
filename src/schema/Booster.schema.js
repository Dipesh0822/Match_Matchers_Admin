import * as yup from "yup";

const boosterSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  file: yup.string().required("Please select image"),
  coin: yup.number().required("Please enter coin"),
});

export default boosterSchema;
