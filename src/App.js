
import './App.css';
import { AddColor } from './AddColor';
import { NotFoundPage } from './NotFoundPage';
import { Home } from './Home';
import { UserList } from './UserList';
import { MovieDetail } from './MovieDetail';

//React component 
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Info } from '@mui/icons-material';


//Context 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AddMovie } from './AddMovie';
import { MovieList } from './MovieList';




const INITIAL_MOVIE_LIST = [
  {
    name: "LEO",
    summary: "The film was officially announced in January 2023 under the tentative title Thalapathy 67, as it is Vijay's 67th film as a lead actor, and the official title was announced a few days later.",
    rating: '9.5',
    poster: "https://assets.gadgets360cdn.com/pricee/assets/product/202303/Leo_1678967552.jpg",
    trailer: "https://www.youtube.com/embed/Po3jStA673E?si=dmnn5giZ-KzvuqYR",

  },
  {
    name: "BEAST",
    summary: "After a shopping mall in Chennai gets hijacked by terrorists who hold the visitors as hostages, Veera Raghavan, a spy also trapped in the mall, decides to save the hostages by eliminating the terrorists.",
    rating: '8.6',
    poster: "https://igimages.gumlet.io/tamil/home/beast260322_1.jpg?w=900&dpr=1.3 ",
    trailer: " https://youtube.com/embed/0E1kVRRi6lk?si=X9he9E1P9b6nQEbB",
  },
  {
    name: "VARISU",
    summary: "Vijay Rajendran is a happy to-go lucky man. Things change when his father becomes terminally ill, and he is left to manage his business empire.",
    rating: '9.5',
    poster: " https://igimages.gumlet.io/tamil/home/varisu241022_2.jpg?w=376&dpr=2.6",
    trailer: " https://youtube.com/embed/9fux9swQ5AQ?si=jKjh1zmpHO2NV5zq",
  },
  {
    name: "MASTER",
    summary: "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities.",
    rating: '9.0',
    poster: " https://pbs.twimg.com/media/EVJgwvdU0AI59iw?format=jpg&name=900x900",
    trailer: " https://youtube.com/embed/UTiXQcrLlv4?si=ksUGVO40VTUGr_dH"
  },
  {
    name: "BIGIL",
    summary: "Michael gives up his dream of becoming a footballer after his father's murder. However, a friend convinces him to coach a women's football team and turn his life around.",
    rating: '7.5',
    poster: "https://static.toiimg.com/thumb/imgsize-23456,msid-71277352,width-600,resizemode-4/71277352.jpg ",
    trailer: " https://youtube.com/embed/GR-Ui8-V2M0?si=2O7nHbVcENxeeESk"
  },
  {
    name: "MERSAL",
    summary: "A police officer arrests a doctor for crimes targeting medical professionals but later finds the real culprit in a tale of revenge, corruption and magic.",
    rating: '8.5',
    poster: "https://m.media-amazon.com/images/M/MV5BY2M2ZjUxMDUtNDk4MC00ZDAxLTljZjItZmI4MTU5OTQ0ZTQ4XkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_FMjpg_UY2000_.jpg ",
    trailer: "https://youtube.com/embed/gQDo5QuZTaw?si=bUHwi-HJ-iQU40In"
  },

]


export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [mode, setMode] = useState("light");
  const navigate = useNavigate();


  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  fetch("https://659fc8755023b02bfe8a7837.mockapi.io/movie")
  .then((res) => res.json())
  .then((data) => {
    setMovieList(data);
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div >
        <AppBar position='static'>
          <Toolbar>
            <nav>
              <Button color='inherit' onClick={() => navigate('/')}>Home</Button>
              <Button color='inherit' onClick={() => navigate('/movie')}>Movie List</Button>
              <Button color='inherit' onClick={() => navigate('/movie/add')}>Add Movie</Button>

              <Button color='inherit' onClick={() => navigate('/color-game')}>Color Game</Button>
              <Button color='inherit' onClick={() => navigate('/user')}>User</Button>
              <Button
                startIcon={
                  mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />
                }
                color='inherit' onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                {(mode === "light" ? "dark" : "light")} Mode</Button>
            </nav>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movie' element={<MovieList movieList={movieList} setMovieList={setMovieList} />}></Route>
          <Route path='/movie/:movieId' element={<MovieDetail movieList={movieList} />}></Route>
          <Route path='/color-game' element={<AddColor />}></Route>
          <Route path='/user' element={<UserList />}></Route>
          <Route path='/flims' element={<Navigate replace to="/movie" />} />
          <Route path='/404' element={<NotFoundPage />}></Route>
          <Route path='*' element={<Navigate replace to="/404" />} />
          <Route path="/movie/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />} />

        </Routes>

      </div>
    </ThemeProvider>

  );
}


