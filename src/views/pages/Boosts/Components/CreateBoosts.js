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
import Dropzone from "react-dropzone";
import boosterSchema from "schema/Booster.schema";
import { createUser } from "store/thunk/user.thunk";

function CreateBoosts({
  dispatch,
  isMobileDevice,
  openModal,
  setOpenModal,
  theme,
}) {
  const formik = useFormik({
    initialValues: {
      name: "",
      file: "",
      coin: "",
    },
    validationSchema: boosterSchema,
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
          error={formik.touched.file && Boolean(formik.errors.file)}
          style={{ marginBottom: 10 }}
        >
          {/* <input
            id="file"
            name="file"
            type="file"
            onChange={(event) => {
              formik.setFieldValue("file", event.currentTarget.files[0]);
            }}
          /> */}
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} name="file" />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </Dropzone>
          {formik.touched.file && formik.errors.file && (
            <FormHelperText id="age-error">{formik.errors.file}</FormHelperText>
          )}
        </FormControl>
        <FormControl
          fullWidth
          error={formik.touched.coin && Boolean(formik.errors.coin)}
          style={{ marginBottom: 10 }}
        >
          <InputLabel htmlFor="coin">Coin</InputLabel>
          <OutlinedInput
            value={formik.values.coin}
            type="text"
            label="Coin"
            name="coin"
            id="coin"
            min="0"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
          />
          {formik.touched.coin && formik.errors.coin && (
            <FormHelperText id="coin-error">
              {formik.errors.coin}
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
export default CreateBoosts;
