function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password
        },
        set: function(value){
            this._password = value
        }
    })
}

const user = new User('test@gmail.com', 'test')
console.log(user.email);