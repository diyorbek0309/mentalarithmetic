import { Formik } from "formik";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Slider,
  Select,
} from "@mui/material";

const Form = () => {
  return (
    <div>
      <Formik
        initialValues={{
          frequency: 1,
          theme: "no_theme",
          countQuestions: 1,
          countRows: 10,
          interval: 1,
        }}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = "Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "Invalid email address";
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          // errors,
          // touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              width: 400,
            }}
          >
            <InputLabel>Chastota:</InputLabel>
            <Slider
              aria-label="Frequency"
              defaultValue={values.frequency}
              step={0.2}
              marks
              min={0.2}
              max={3}
              valueLabelDisplay="auto"
              name="frequency"
              value={values.frequency}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
              <InputLabel id="theme">Mavzu:</InputLabel>
              <Select
                labelId="theme"
                id="demo-select-small"
                value={values.theme}
                label="Mavzu:"
                onChange={handleChange}
              >
                <MenuItem value="no_theme">Mavzusiz</MenuItem>
                <MenuItem value="young">Yosh o`rtoqlar +4</MenuItem>
              </Select>
            </FormControl>
            {/* Misollar soni: 1 - 30 number */}
            {/* Qatorlar soni: 5 - 30 */}
            {/* Interval: 1 - 5 */}
            <button type="submit" disabled={isSubmitting}>
              Boshlash
            </button>
          </form>
        )}
      </Formik>
      {/* Back button */}
    </div>
  );
};

export default Form;
