
export const check = (type, value) => {

    switch (type) {

        case "email":
        case "correo":
        case "e-mail":

            if (value === "") {
                return "El campo e-mail no debe estar vacio";
            } else {
                return ""
            }

        case "password":
        case "contraseña":

            if (value.length < 8) {
                return "El password no debe estar menos de 8 caracteres";
            } else {
                return ""
            }

        default:
            console.log("Unkown data received to checked...");
    }


}