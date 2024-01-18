import { useState } from 'react';
import { Movie } from './Movie';

export function MovieList({ movieList }) {
  //const movieList = INITIAL_MOVIE_LIST;
  //const [movieList,setMovieList]=useState(INITIAL_MOVIE_LIST);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  return (

    <div>

      <div className='movie-list'>
        {movieList.map((mo, index) => (
          <Movie key={index} movie={mo} id={index} />
        ))}
      </div>
    </div>
  );
}
