import { CustomInput } from "../../common/CustomInput/CustomInput";
import "./Login.css";

//import { NavigateButton } from "../../common/NavigateButton/NavigateButton"


import React, { useState, useEffect } from "react";

export const Login = () => {

    // Genero el estado encargado de manejar los credenciales

    const [credentials, setCredentials] = useState(
        {
            email: "",
            password: ""

        }

    )

    const inputHandler = (e) => {
        // console.log("manejaremos el input... bindeado", e.target.name);
        
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            
        }));
    };

    const errorHandler = (e) => {
        console.log("comprobando el error de....", e.target.name, e.target.value)

    }
        
    useEffect(() => {
        console.log("las credenciales valen....", credentials);

    }, [credentials]);

    return (
        <div className="loginDesign">Soy Login..
            {/*<NavigateButton
                path={"/"}
                name={"Home"} 
            />
            
            <NavigateButton
                path={"/register"}
                name={"Register"} 
            />*/}

            <CustomInput
                design={"normalDesign"}
                type={"email"}
                name={"email"}
                placeholder={""}
                handlerFuntion={inputHandler}
                errorFunction={errorHandler}
            />

            <CustomInput
                design={"normalDesign"}
                type={"password"}
                name={"password"}
                placeholder={""}
                handlerFuntion={inputHandler}
                errorFunction={errorHandler}
            />
        </div>
    )
}