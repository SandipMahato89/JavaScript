function setUserName(username){
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const user = new createUser('sandip07', "sandip@gmail.com", "123")
console.log(user);

// call function pass the current execution context to another function