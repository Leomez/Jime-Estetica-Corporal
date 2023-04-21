function validarLogin(username, password) {
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    const errors = [];

    if (!emailRegex.test(username)) {
        errors.push("Por favor, introduce una dirección de correo electrónico válida.");
    }

    if (!passwordRegex.test(password)) {
        if (password.length < 6) {
            errors.push("La contraseña debe tener al menos 6 caracteres.");
        }
        if (!password.match(/[A-Za-z]/)) {
            errors.push("La contraseña debe contener al menos una letra.");
        }
        if (!password.match(/\d/)) {
            errors.push("La contraseña debe contener al menos un número.");
        }
    }

    return errors;
}

export default validarLogin