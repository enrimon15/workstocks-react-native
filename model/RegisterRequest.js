class RegisterRequest {
    constructor(email, name, surname, password, passwordConfirmation) {
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.passwordConfirmation = passwordConfirmation;
    }
}

export default RegisterRequest;