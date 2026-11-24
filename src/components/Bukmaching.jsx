import React from "react";

const Bukmaching = ({Tablica}) =>{

    return(
        <div>
            {
                Tablica.map((mecz) => (
                    <div className="container bukmaching">
                        {mecz.Klub1} VS {mecz.Klub2}

                        <button>{mecz.Kurs1}</button>
                        <button>{mecz.Remis}</button>
                        <button>{mecz.Kurs2}</button>

                    </div>
            ))}
        </div>
    )

}
export default Bukmaching;