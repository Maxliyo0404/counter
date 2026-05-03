import { useState } from "react";
import "./CounterApp.css";
function CounterApp (){
    const [count, setCount] = useState(0)
    return (
        <>
          <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)}>Incrament</button>
        </>
    )
}
export  default CounterApp;