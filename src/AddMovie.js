import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { API } from "./global";

export function AddMovie({ movieList, setMovieList }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  return (
    <div>
      <div className='add-movie-form'>
        <TextField variant='outlined' label="Name"
          onChange={(event) => setName(event.target.value)}
          type='text'
          placeholder='enter name' />
        <TextField variant='outlined' label="Poster"
          onChange={(event) => setPoster(event.target.value)}
          type='text'
          placeholder='enter poster' />
        <TextField variant='outlined' label="Rating"
          onChange={(event) => setRating(event.target.value)}
          type='text'
          placeholder='enter rating' />
        <TextField variant='outlined' label="Summary"
          onChange={(event) => setSummary(event.target.value)}
          type='text'
          placeholder='enter summary' />
        <TextField variant='outlined' label="Trailer"
          onChange={(event) => setTrailer(event.target.value)}
          type='text'
          placeholder='enter Trailer' />


        <Button
          variant="contained"
          onClick={() => {
            const newMovie = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
              trailer: trailer,
            };

            fetch(`${API}/movie`, {
              method: "POST",
              body: JSON.stringify(newMovie),
              headers: {"Content-Type":"application/json"},

            }).then((data)=> data.json())
            .then(navigate("/movie"));


            //console.log(newMovie);
            // setMovieList([...movieList, newMovie]);
            // navigate('/movie');

          }}>Add Movie </Button>
      </div>
    </div>

  );


}
