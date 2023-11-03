import { useState } from "react";
import { CustomInput } from "../../common/CustomInput/CustomInput"
import { check } from "../../services/useful";
import "./Register.css"

//import { NavigateButton } from "../../common/NavigateButton/NavigateButton"

export const Register = () => {

    const [credentials, setCredentials] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        password2: "",
        birth: "",
        city: "",
        country: ""

    });

    const [credentialsError, setcredentialsError] = useState({
        nameError: "",
        surnameError: "",
        emailError: "",
        passwordError: "",
        password2Error: "",
        birthError: "",
        cityError: "",
        countryError: ""
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

    return (
        <div className="registerDesign">Soy Register..
            {/*<NavigateButton
                path={"/"}
                name={"Home"} 
            />
            
            <NavigateButton
                path={"/login"}
                name={"Login"} 
            />*/}

            <CustomInput
                design={
                    credentialsError.nameError === "" ? "normalDesign" : "errorDesign"
                }
                type={"text"}
                name={"name"}
                placehoder={""}
                handlerFunction={inputHandler}
                errorFunction={errorHandler}
            />
            {credentialsError.nameError}
            <CustomInput
                design={
                    credentialsError.surnameError === "" ? "normalDesign" : "errorDesign"
                }
                type={"text"}
                name={"surname"}
                placehoder={""}
                handlerFunction={inputHandler}
                errorFunction={errorHandler}
            />
            {credentialsError.surnameError}
            <CustomInput
                design={
                    credentialsError.emailError === "" ? "normalDesign" : "errorDesign"
                }
                type={"email"}
                name={"email"}
                placehoder={""}
                handlerFunction={inputHandler}
                errorFunction={errorHandler}
            />
            {credentialsError.emailError}
            <CustomInput
                design={
                    credentialsError.passwordError === "" ? "normalDesign" : "errorDesign"
                }
                type={"password"}
                name={"password"}
                placehoder={""}
                handlerFunction={inputHandler}
                errorFunction={errorHandler}
            />
            {credentialsError.passwordError}
            <CustomInput
                design={
                    credentialsError.password2Error === "" ? "normalDesign" : "errorDesign"
                }
                type={"password"}
                name={"password2"}
                placehoder={""}
                handlerFunction={inputHandler}
                errorFunction={errorHandler}
            />
            {credentialsError.password2Error}
            <CustomInput
                design={
                    credentialsError.birthError === "" ? "normalDesign" : "errorDesign"
                }
                type={"text"}
                name={"birth"}
                placehoder={""}
                handlerFunction={inputHandler}
                errorFunction={errorHandler}
            />
            {credentialsError.birthError}
            <CustomInput
                design={
                    credentialsError.cityError === "" ? "normalDesign" : "errorDesign"
                }
                type={"text"}
                name={"city"}
                placehoder={""}
                handlerFunction={inputHandler}
                errorFunction={errorHandler}
            />
            {credentialsError.cityError}
            <CustomInput
                design={
                    credentialsError.countryError === "" ? "normalDesign" : "errorDesign"
                }
                type={"text"}
                name={"country"}
                placehoder={""}
                handlerFunction={inputHandler}
                errorFunction={errorHandler}
            />
            {credentialsError.countryError}


        </div>
    )
}