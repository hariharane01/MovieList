import { useState, useEffect } from "react";
import { Movie } from "./Movie";
import { API } from "./global";
import { IconButton } from "@mui/material";

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
    fetch(`${API}/movie`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((mol) => {
        setMovieList(mol);
      });
  }, []);

  return (
    <div>
      <div className="movie-list  ">
        {movieList.map((mo) => (
          <Movie
            key={mo.id}
            movie={mo}
            id={mo.id}
            deleteButton={
              <IconButton color="primary" aria-label="deleteButton">
                <DeleteIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
