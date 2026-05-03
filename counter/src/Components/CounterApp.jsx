import { useState } from "react";
import "./CounterApp.css";
function CounterApp (){
    const [count, setCount] = useState(0)
    return (
        <>
          <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)}>Incrament</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count - 1)}>Decrament</button>
        </>
    )
}
export  default CounterApp;