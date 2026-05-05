import CounterApp from "./Components/CounterApp";
import CardsApp from "./Components/Cards/CardsApp";
import "./App.css";
function App (){
    return (
        <>
         <CounterApp/>
         <CardsApp a ="5"  b = "10"   />

        </>
    )
}
export  default App;