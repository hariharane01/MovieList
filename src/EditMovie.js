import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "./global";

export function EditMovie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API}/movie/${movieId}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((moe) => {
        setMovie(moe);
        // console.log(moe);
      });
  }, []);

  return movie ? <EditMovieForm movie={movie} /> : "Loading...";
}

function EditMovieForm({ movie }) {
  const navigate = useNavigate();
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  return (
    <div className="add-movie-form">
      <TextField
        variant="outlined"
        label="Name"
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="enter name"
        value={name}
      />
      <TextField
        variant="outlined"
        label="Poster"
        onChange={(event) => setPoster(event.target.value)}
        type="text"
        placeholder="enter poster"
        value={poster}
      />
      <TextField
        variant="outlined"
        label="Rating"
        onChange={(event) => setRating(event.target.value)}
        type="text"
        placeholder="enter rating"
        value={rating}
      />
      <TextField
        variant="outlined"
        label="Summary"
        onChange={(event) => setSummary(event.target.value)}
        type="text"
        placeholder="enter summary"
        value={summary}
      />
      <TextField
        variant="outlined"
        label="Trailer"
        onChange={(event) => setTrailer(event.target.value)}
        type="text"
        placeholder="enter Trailer"
        value={trailer}
      />

      <Button
        variant="contained"
        onClick={() => {
          const updatedMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };

          fetch(`${API}/movie/${movie.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: { "Content-Type": "application/json" },
          })
            .then((data) => data.json())
            .then(navigate("/movie"));

          //console.log(newMovie);
          // setMovieList([...movieList, newMovie]);
          // navigate('/movie');
        }}
      >
        Edit This Movie
      </Button>
    </div>
  );
}
