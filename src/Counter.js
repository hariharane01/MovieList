import { useState } from "react";
import Badge from '@mui/material/Badge';

import IconButton from '@mui/material/IconButton';


//Hook=> usestate()

export function Counter() {
  //let Like= 10;
  const [Like, setLike] = useState(0);
  const [dislike, setdislike] = useState(0);
  return (
    <div>
      <IconButton aria-label="delete"
        onClick={() => {
          setLike(Like + 1);
          console.log(Like);
        }}>
        <Badge badgeContent={Like} color="primary">
          👍
        </Badge>


      </IconButton>



      <IconButton onClick={() => {
        setdislike(dislike + 1);
      }}>
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>

      </IconButton>
      {/* <button onClick={() => {
        setLike(Like + 1);
        console.log(Like);

      }}>👍{Like}</button> */}
      {/* <p>{Like}</p> */}
    </div>
  );
}
