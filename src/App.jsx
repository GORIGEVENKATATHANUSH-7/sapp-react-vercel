import { useState } from "react"; 
export default function App() { 
const [count, setCount] = useState(0); 
const [dark, setDark] = useState(false); 
return ( 
<main className={dark ? "dark" : "light"}> 
<button onClick={() => setDark(value => !value)}> 
Switch theme 
</button> 
<p>Count: {count}</p> 
<button onClick={() => setCount(value => value + 
1)}>Add</button> 
<button onClick={() => setCount(value => value - 
1)}>Subtract</button> 
<button onClick={() => setCount(0)}>Reset</button> 
</main> 
); 
}