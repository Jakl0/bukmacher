import React from "react";

const Logowanie = ({Zaloguj}) => {


    function Login(e){
        e.preventDefault;
        Zaloguj();
    }

    return(
        <div className="container login">
            <div>
                
                <form onSubmit={(e) =>Login(e)}>
                    <h1>
                    Logowanie
                </h1>
                    <input type="text" placeholder="Nazwa..."/>
                    <input type="password" placeholder="Hasło..."/>

                    <button type="submit">ZALOGUJ</button>
                </form>
            </div>
        </div>
    );
}
export default Logowanie;