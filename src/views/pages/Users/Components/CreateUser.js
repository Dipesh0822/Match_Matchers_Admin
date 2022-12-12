import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import {
  IconDeviceFloppy as SaveIcon,
  IconRefresh as ResetIcon,
  IconX as CancelIcon,
} from "@tabler/icons";
import userSchema from "schema/Users.schema";
import { createUser } from "store/thunk/user.thunk";

function CreateUser({
  dispatch,
  isMobileDevice,
  openModal,
  setOpenModal,
  theme,
}) {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      mobile_number: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(createUser(values));
      setOpenModal(!openModal);
    },
  });

  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <form
        noValidate
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
      >
        <FormControl
          fullWidth
          error={formik.touched.name && Boolean(formik.errors.name)}
          style={{ marginBottom: 10 }}
        >
          <InputLabel htmlFor="name">Name</InputLabel>
          <OutlinedInput
            value={formik.values.name}
            type="text"
            id="name"
            label="Name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            required
          />
          {formik.touched.name && formik.errors.name && (
            <FormHelperText error id="name-error">
              {formik.errors.name}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl
          fullWidth
          error={formik.touched.age && Boolean(formik.errors.age)}
          style={{ marginBottom: 10 }}
        >
          <InputLabel htmlFor="age">Age</InputLabel>
          <OutlinedInput
            value={formik.values.age}
            type="number"
            label="Age"
            name="age"
            id="age"
            min="0"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
          />
          {formik.touched.age && formik.errors.age && (
            <FormHelperText id="age-error">{formik.errors.age}</FormHelperText>
          )}
        </FormControl>
        <FormControl
          fullWidth
          error={
            formik.touched.mobile_number && Boolean(formik.errors.mobile_number)
          }
          style={{ marginBottom: 10 }}
        >
          <InputLabel htmlFor="mobile_number">Phone number</InputLabel>
          <OutlinedInput
            value={formik.values.mobile_number}
            type="text"
            label="Amount of Majestic mobile_number"
            name="mobile_number"
            id="mobile_number"
            min="0"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
          />
          {formik.touched.mobile_number && formik.errors.mobile_number && (
            <FormHelperText id="mobile_number-error">
              {formik.errors.mobile_number}
            </FormHelperText>
          )}
        </FormControl>

        <Box
          style={{ display: "flex", justifyContent: "right", float: "right" }}
        >
          <Button
            type="reset"
            onClick={() => setOpenModal(!openModal)}
            variant="contained"
            color={theme.palette.secondary.light[800]}
            style={{
              margin: 10,
              color: "white",
              paddingLeft: 20,
              paddingRight: 20,
            }}
            startIcon={!isMobileDevice && <CancelIcon />}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="reset"
            color="error"
            style={{
              color: "#fff",
              margin: 10,
              paddingLeft: 20,
              paddingRight: 20,
            }}
            startIcon={!isMobileDevice && <ResetIcon />}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            style={{
              color: "#fff",
              margin: 10,
              paddingLeft: 20,
              paddingRight: 20,
            }}
            startIcon={!isMobileDevice && <SaveIcon />}
            disabled={!(formik.isValid && formik.dirty)}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}
export default CreateUser;
