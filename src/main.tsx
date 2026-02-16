import { createRoot } from "react-dom/client";
// import './index.css'
import image from './assets/download.jpeg'

// const isOnline = true;
// const name1 = "Jacob";
// const name2 = "Olha";


const numbers = [1, 2, 3, 4, 5]


const markup = (
  <>
    {/* {isOnline ? <p>Hello, {name1}</p> : <p>Hello, {name2}</p>} */}
    {/* <p>Hello, {isOnline ? name1 : name2}</p>
    {isOnline && <p>How are you?</p>} */}
    {/* {null}
    {undefined}
    {true}
    {false} */}
    <ul>
      {numbers.map(number => <li key={number}><p>{number}</p><button>Delete</button></li>)}
    </ul>
    <img alt='image' src={image} />
  </>
);

createRoot(document.getElementById("root") as HTMLDivElement).render(markup);
