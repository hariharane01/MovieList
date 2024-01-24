import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { ExpandLess, ExpandMore } from '@mui/icons-material';


export function Movie({ movie, id }) {
  const navigate = useNavigate();
  const ratingStyles = {
    color: movie.rating >= 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  // const summaryStyles={
  //   display: show ? "block" : "none",
  // }
  return (
    <div className='movie-container'>
      <img className='movie-poster' src={movie.poster} alt={movie.name}></img>
      <div className='movie-spec'>
        <h3 className='movie-name'>{movie.name} - {id}</h3>
        <p style={ratingStyles} className='movie-rating'>{movie.rating}</p>
      </div>
      <IconButton color='primary' onClick={() => setShow(!show)}>
        {show ? <ExpandLess /> : <ExpandMore />}
      </IconButton>
      {/* <button onClick={() => setShow(!show)} >⏫</button> */}
      <IconButton color='primary' onClick={() => navigate("/movie/" + id)}><InfoIcon /></IconButton>
      {/* <p style={summaryStyles} className='movie-summary'>{movie.summary}</p> */}
      {show ? <p className='movie-summary'>{movie.summary}</p> : ""}

      <Counter />
      
 

    </div>

  );
}
