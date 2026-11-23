import React from "react";

const Header = () => {
    return(
        <>
            <h1>BUKMACHER</h1>

            <div className="nav">
                <button>Zakłady Sportowe</button>
                <button>Live</button>
                <button>Misje</button>
                <button>Produkty</button>
            </div>

            <button>Wyloguj</button>
        </>
    )
}
export default Header;