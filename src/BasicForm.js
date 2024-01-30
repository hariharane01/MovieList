import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup.string().min(5, "need a longer email"),
  password: yup.string().min(8, "need a longer password"),
});
export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        type="email"
        placeholder="Email"
      ></input>
      <br/>{ formik.touched.email && formik.errors.email ? formik.errors.email : ""}<br/>
      <input
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        value={formik.values.password}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      ></input>
      <br/>{ formik.touched.password && formik.errors.password ? formik.errors.password : ""}<br/>
      <button type="submit">Submit</button>
    </form>
  );
}
