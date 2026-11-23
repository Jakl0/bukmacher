import React from "react";

const Logowanie = ({Zaloguj}) => {


    function Login(e){
        e.preventDefault;
        Zaloguj();
    }

    return(
        <div className="container">
            <div>
                <h1>
                    Logowanie
                </h1>
                <form onSubmit={(e) =>Login(e)}>
                    <input type="text"/>
                    <input type="password"/>

                    <button type="submit">ZALOGUJ</button>
                </form>
            </div>
        </div>
    );
}
export default Logowanie;