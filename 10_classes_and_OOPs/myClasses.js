// after ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const details = new User('sandip07', 'sandip@gmail.com', '123')

// console.log("Password: " + details.encryptPassword());
// console.log("Username: " + details.changeUsername());

// *******************************************

// Behind the scene

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const details2 = new User('sandipMahatO', 'sandip@gmail.com', '123')

console.log("Password: " + details2.encryptPassword());
console.log("Username: " + details2.changeUsername());