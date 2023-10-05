const User = {
    _email: 'test@gmail.com',
    _password: 'password',

    get email(){
        return this._email
    },
    set email(value) {
        this._email = value;
    },
    get password(){
        return this._password
    },
    set password(value){
        this._password = value;
    }
}

const user = Object.create(User)
console.log(user.email);
console.log(user.password);