//  singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const user = {
    name: "Sandip",
    "full name": "Sandip Mahato",
    age: 23,
    location: "Kolkata",
    email: "sandip@gmail.com",
    [mySym]: "key1",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(typeof user[mySym]);

user.email = "sing91816@gmail.com"  // to change the value in object
// Object.freeze(user) // the values will not change after any manipulation of data in object
user.email = "gana@gmail.com"
// console.log(user);
 
user.greeting = function(){
    console.log("Hello friends");
}

user.greeting2 = function(){
    console.log(`Hello how are you, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting2());