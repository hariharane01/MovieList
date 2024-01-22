import { useState, useEffect } from "react";
import { Movie } from "./Movie";

export function MovieList() {
  //const movieList = INITIAL_MOVIE_LIST;
  //const [movieList,setMovieList]=useState(INITIAL_MOVIE_LIST);
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("https://659fc8755023b02bfe8a7837.mockapi.io/movie", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((mol) => {
        setMovieList(mol);
      });
  }, []);

  return (
    <div>
      <div className="movie-list">
        {movieList.map((mo, index) => (
          <Movie key={mo.id} movie={mo} id={mo.id} />
        ))}
      </div>
    </div>
  );
}
