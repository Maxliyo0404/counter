import { useState } from "react";
import "./CounterApp.css";
function CounterApp (){
    const [count, setCount] = useState(0)
    const incCount = ()=>setCount(count + 1);
    return (
        <>
          <h1>{count}</h1>
          <button className="inc" onClick={incCount}>Incrament</button>
          <button className="rest" onClick={() => setCount(0)}>Reset</button>
          <button className="dec" onClick={() => setCount(count - 1)}>Decrament</button>
        </>
    )
}
export  default CounterApp;