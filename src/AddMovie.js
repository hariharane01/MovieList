import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  name: yup.string(),
  poster: yup.string().min(4),
  rating: yup.number().min(0).max(10),
  summary: yup.string(),
  trailer: yup.string(),
});

export function AddMovie() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (newMovie) => {
      createMovie(newMovie);
    },
  });

  const createMovie = (newMovie) => {
    console.log("createMovie", newMovie);
    fetch(`${API}/movie`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => navigate("/movie"));
    console.log(newMovie);
  };
  return (
    <form onSubmit={formik.handleSubmit} className="add-movie-form">
      <TextField
        variant="outlined"
        label="Name"
        id="name"
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
      <TextField
        variant="outlined"
        label="Poster"
        id="poster"
        name="poster"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.poster}
      />
      {formik.touched.poster && formik.errors.poster
        ? formik.errors.poster
        : ""}
      <TextField
        variant="outlined"
        label="Rating"
        id="rating"
        name="rating"
        onChange={formik.handleChange}
        value={formik.values.rating}
        onBlur={formik.handleBlur}
      />
      {formik.touched.rating && formik.errors.rating
        ? formik.errors.rating
        : ""}
      <TextField
        variant="outlined"
        label="Summary"
        id="summary"
        name="summary"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.summary}
      />
      {formik.touched.summary && formik.errors.summary
        ? formik.errors.summary
        : ""}
      <TextField
        variant="outlined"
        label="Trailer"
        id="trailer"
        name="trailer"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.trailer}
      />
      {formik.touched.trailer && formik.errors.trailer
        ? formik.errors.trailer
        : ""}
      <Button type="submit" variant="contained" onClick={createMovie}>
        Add Movie
      </Button>
    </form>
  );
}
