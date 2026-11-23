import React from "react";

const Bukmaching = ({Tablica}) =>{

    return(
        <>
            {
                Tablica.map((mecz) => (
                    <div>
                        {mecz.Klub1} VS {mecz.Klub2}

                        <button>{mecz.Kurs1}</button>
                        <button>{mecz.Remis}</button>
                        <button>{mecz.Kurs2}</button>

                    </div>
            ))}
        </>
    )

}
export default Bukmaching;