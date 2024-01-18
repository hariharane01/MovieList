import { Counter } from './Counter'; 


export function Msd({ name, pic }) {
  return (
    <div id='user-def'>
      <img className="pro_pic" src={pic} alt="name" />
      <h1>{name}</h1>
      <Counter />
    </div>
  );
}

