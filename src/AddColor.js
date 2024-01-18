import { useState } from "react";
import { ColorBox } from './ColorBox';

export function AddColor() {
  // const color= "crimson";
  const [color, setColor] = useState("red");
  //const colorList=["blue","green","yellow"]
  const [colorList, setColorlist] = useState(["blue", "green", "yellow"]);

  const styles = {
    fontSize: "50px",
    backgroundColor: color,
  };
  return (
    <div>
      <div className='add-color'>
        <input
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          type="text"
          value={color} />
        <button onClick={() => setColorlist([...colorList, color])}>Add Color</button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}

    </div>
  );
}
