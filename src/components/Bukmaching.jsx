import React from "react";

const Bukmaching = ({Tablica,dodajKurs}) =>{
    
    return(
        <div className="container bukmaching">
            {
                Tablica.map((mecz) => (
                    <div className="bettingMenu">
                        {mecz.Klub1} VS {mecz.Klub2}
                        <div className="bettingNav">
                            <button className="bukmacherButton" onClick={()=>dodajKurs({mecz:`${mecz.Klub1} - ${mecz.Klub2} `,kurs:mecz.Kurs1 , typ:"1"})}>{mecz.Kurs1}</button>
                            <button className="bukmacherButton" onClick={()=>dodajKurs({mecz:`${mecz.Klub1} - ${mecz.Klub2} `,kurs:mecz.Remis , typ:"X"})}>{mecz.Remis}</button>
                            <button className="bukmacherButton" onClick={()=>dodajKurs({mecz:`${mecz.Klub1} - ${mecz.Klub2} `,kurs:mecz.Kurs2 , typ:"2"})}>{mecz.Kurs2}</button>
                        </div>

                    </div>
            ))}
        </div>
    )

}
export default Bukmaching;