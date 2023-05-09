import { Formik } from "formik";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  autocompleteClasses,
} from "@mui/material";

const Form = () => {
  const formikData = [
    {
      id: 1,
      title: "Chastota",
      name: "frequency",
      countData: [0.2, 0.4, 0.6],
    },
    {
      id: 2,
      title: "Mavzu",
      name: "theme",
      countData: ["Mavzusiz", "Yosh o'rtoqlar+4", "Yosh o'rtoqlar-4"],
    },
    {
      id: 3,
      title: "Misollar soni",
      name: "countProblems",
      countData: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      id: 4,
      title: "Qatorlar soni",
      name: "countRows",
      countData: [5, 6, 7, 8, 9, 10],
    },
    {
      id: 5,
      title: "Interval",
      name: "interval",
      countData: [5, 6, 7, 8, 9, 10],
    },
  ];
  return (
    <div className="formik">
      <Formik
        initialValues={{
          frequency: 0.6,
          theme: "Mavzusiz",
          countProblems: 1,
          countRows: 6,
          interval: 7,
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
            {formikData.map((data) => (
              <FormControl variant="standard" sx={{ m: 1.5, minWidth: 400 }}>
                <InputLabel id={data.name}>{data.title}</InputLabel>
                <Select
                  name={data.name}
                  labelId={data.name}
                  value={values[data.name]}
                  onChange={handleChange}
                >
                  {data.countData.map((count) => (
                    <MenuItem value={count}>{count}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
            <br />
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
