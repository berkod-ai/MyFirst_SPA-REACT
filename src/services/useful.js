
export const check = (type, value) => {

    switch (type) {

        case "name":
        case "surname":
        case "birth":
        case "city":
        case "country":

            if (value === "") {
                return `El campo ${type} no debe de estar vacio`;
            } else {
                return "";
            }

        case "email":
        case "correo":
        case "e-mail":

            if (value === "") {
                return "El campo e-mail no debe estar vacio";
            } else {
                return ""
            }

        case "password":
        case "password2":
        case "contraseña":
        case "contraseña2":

            if (value.length < 8) {
                return "El password no debe estar menos de 8 caracteres";
            } else {
                return ""
            }

        default:
            console.log("Unkown data received to checked...");
    }


}