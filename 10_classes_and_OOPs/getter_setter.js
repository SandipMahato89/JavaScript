class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(data) {
        this._email = data;
    }

    get password(){
        return `${this._password.toUpperCase()}sandip`;
    }
    set password(data) {
        this._password = data;
    }
}

const customer = new User('sandip@gmail.com', 'abc')
console.log(customer.password);