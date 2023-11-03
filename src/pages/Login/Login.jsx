import { CustomInput } from "../../common/CustomInput/CustomInput";
import { check } from "../../services/useful";
import "./Login.css";

//import { NavigateButton } from "../../common/NavigateButton/NavigateButton"


import React, { useState, useEffect } from "react";

export const Login = () => {

    // Genero el estado encargado de manejar los credenciales

    const [credentials, setCredentials] = useState({

        email: "",
        password: ""

    });

    const [credentialsError, setcredentialsError] = useState({

        emailError: "",
        passwordError: ""

    });

    const inputHandler = (e) => {
        // console.log("manejaremos el input... bindeado", e.target.name);

        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }));
    };

    const errorHandler = (e) => {
        //console.log("comprobando el error de....", e.target.name, e.target.value)
        let error = "";

        error = check(e.target.name, e.target.value);


        //console.log(error)

        setcredentialsError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: error,

        }));
    }

    //useEffect(() => {
    //console.log("las credenciales valen....", credentials);
    //}, [credentials]);

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
                design={
                    credentialsError.emailError === ""
                        ? "normalDesign"
                        : "errorDesign"
                }
                type={"email"}
                name={"email"}
                placeholder={""}
                handlerFuntion={inputHandler}
                errorFunction={errorHandler}
            />
            {credentialsError.emailError}
            <CustomInput
                design= {
                    credentialsError.passwordError === ""
                        ? "normalDesign"
                        : "errorDesign"
                }
                type={"password"}
                name={"password"}
                placeholder={""}
                handlerFuntion={inputHandler}
                errorFunction={errorHandler}
            />
            {credentialsError.passwordError}
        </div>
    )
}