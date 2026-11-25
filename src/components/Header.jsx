import React from "react";

const Header = ({LogOut}) => {
    return(
        <div className="headingMenu">
            <h1>BUKMACHER</h1>

            <div className="nav">
                <button>Zakłady Sportowe</button>
                <button>Live</button>
                <button>Misje</button>
                <button>Produkty</button>
            </div>

            <button onClick={()=>LogOut()}>Wyloguj</button>
        </div>
    )
}
export default Header;