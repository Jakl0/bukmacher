import React from "react";

const Kupony = ({Tablica}) => {
    
    return (
        
        <div className="container kupon">
            <div>
                <h1>Twój Kupon</h1>

                {
                    Tablica.length > 0 ? 
                    <div>

                    </div> 
                    : 
                    <p>Kupon jest pusty</p>
                }

                Stawka (PLN):
                <input type="number" placeholder="0.00"></input>
                
            </div>



        </div>

    )
}
export default Kupony;