import React from "react";

const Kupony = ({Tablica,Stawka,zmienStawke,usunElement,zatwierdzZaklad}) => {
    const lacznyKurs = Number(Tablica.reduce((akumulator,element)=> akumulator * element.kurs,1)).toFixed(2);    
    return (
        
        <div className="container kupon">
            <div className="CouponList">
                <h2>Twój Kupon</h2>
                <div className="ListDisplay">
                {
                    Tablica.length > 0 ? 
                    <div >
                        {
                            Tablica.map((kupon)=> (
                                <div className="listElement">
                                    <div>
                                        {kupon.mecz}<br/>
                                    Typ: {kupon.typ}
                                    </div>
                                    <div style={{display:"flex", flexDirection:"row", alignItems:"baseline"}}>
                                        {kupon.kurs}
                                        <button className="deleteButton" onClick={()=>usunElement(kupon.mecz)}>X</button>
                                    </div>
                                    
                                    
                                </div>
                            ))
                        }

                    </div> 
                    
                    : 
                    <p>Kupon jest pusty</p>
                }
                </div>
                
                Stawka (PLN):
                <input type="number" placeholder="0.00" onChange={()=>zmienStawke(event.target.value)}></input>
                
                <div className="CouponDisplay">
                    <p>Kurs całkowity:</p>
                    <h4>

                        {
                        Tablica.length > 0? lacznyKurs : 0
                        }

                    </h4>
                </div>

                <div className="CouponDisplay">
                    <p>Możliwa wygrana:</p>
                    <h3 style={{color:"green"}}>

                        {
                            Tablica.length > 0?(lacznyKurs * Number(Stawka)).toFixed(2) :"0 "
                        }
                        
                         PLN</h3>
                </div>
                
                <div style={{display:"flex" , justifyContent:"space-around"}}>
                    <button onClick={()=>zatwierdzZaklad()}>ZATWIERDŹ ZAKŁAD</button>
                </div>

            </div>



        </div>

    )
}
export default Kupony;