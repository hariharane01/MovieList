import { useParams , useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export function MovieDetail({ movieList }) {
  const { movieId } = useParams();
  const movie = movieList[movieId];
  const navigate=useNavigate();
  console.log(movieList)
  console.log(movieId)
  return (
    <div>   
      <div>
      <iframe 
      width="100%" 
      height="560" 
      src={movie.trailer}
      title="youtube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
      </div>
      <div className='movie-detail-container'>
      <div className='movie-spec'>
      <h3 className='movie-name'>{movie.name} </h3>
      <p className='movie-rating'>{movie.rating}</p>
      <p className='movie-summary'>{movie.summary}</p>
      
      <Button onClick={()=> navigate(-1)} variant="contained" startIcon={<ArrowBackIosIcon />}>
        Back
      </Button>
    </div>
   </div>
   </div>

  );
}
