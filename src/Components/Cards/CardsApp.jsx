import "./Cards.css";
const CardsApp = ({a, b}) =>{
    return (
        <>
         <div className="card">
            <h1 className="titles"> {a} + {b} = {a + b} </h1>
         </div>
        </>
    )
}
export default CardsApp;