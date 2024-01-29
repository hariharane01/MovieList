import { useState, useEffect } from "react";
import { Movie } from "./Movie";
import { API } from "./global";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";


export function MovieList() {
  //const movieList = INITIAL_MOVIE_LIST;
  //const [movieList,setMovieList]=useState(INITIAL_MOVIE_LIST);
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();


  // useEffect(() => {
  //   fetch(`${API}/movie`, {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((mol) => {
  //       setMovieList(mol);
  //     });
  // }, []);

  const getMovies = () => {
    fetch(`${API}/movie`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((mol) => {
        setMovieList(mol);
      });
  };

  useEffect(() => getMovies(), []);

  return (
    <div>
      <div className="movie-list  ">
        {movieList.map((mo) => (
          <Movie
            key={mo.id}
            movie={mo}
            id={mo.id}
            deleteButton={
              <IconButton
                color="error"
                aria-label="deleteButton"
                onClick={() => {
                  fetch(`${API}/movie/${mo.id}`, {
                    method: "DELETE",
                  }).then(() => getMovies());
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton color="secondary" aria-label="editButton"
              onClick={()=>{
                navigate(`/movie/edit/${mo.id}`)
              }}
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
