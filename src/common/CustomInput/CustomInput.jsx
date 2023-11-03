import "./CustomInput.css";

//import { useEffect } from "react";

export const CustomInput = ({design, type, name, placeholder, handlerFuntion, errorFunction}) => {


    //useEffect(()=> {
     //   console.log(design, "arrrr");

    //},[]);

    return (
        <input 
            className={design}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={(e)=>handlerFuntion(e)}
            onBlur={(e)=>errorFunction(e)}
        
        />
    )
}