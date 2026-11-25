import React from "react";

const Kupony = ({Tablica}) => {
    
    return (
        
        <div className="container kupon">
            <div className="CouponList">
                <h2>Twój Kupon</h2>
                <div className="ListDisplay">
                {
                    Tablica.length > 0 ? 
                    <div>
                        

                    </div> 
                    
                    : 
                    <p>Kupon jest pusty</p>
                }
                </div>
                
                Stawka (PLN):
                <input type="number" placeholder="0.00"></input>
                
                <div className="CouponDisplay">
                    <p>Kurs całkowity:</p>
                    <h4>0.00</h4>
                </div>

                <div className="CouponDisplay">
                    <p>Możliwa wygrana:</p>
                    <h3 style={{color:"green"}}>0.00 PLN</h3>
                </div>
                
                <div style={{display:"flex" , justifyContent:"space-around"}}>
                    <button>ZATWIERDŹ ZAKŁAD</button>
                </div>

            </div>



        </div>

    )
}
export default Kupony;