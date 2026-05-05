import "./Cards.css";
const CardsApp ({a, b}) =>{
    return (
        <>
         <div className="card">
            <h1> {a} + {b} = {a + b} </h1>
         </div>
        </>
    )
}
export default CardsApp;