const user = {
    username : "sandip",
    price : 299,

    wlcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.wlcomeMessage()
// user.username = "danny"
// user.wlcomeMessage()

// console.log(this);


// function check() {
//     let username = "sandip"
//     console.log(this.username);
// }

// check()

// const check = function(){
//     let username = "sandip"
//     console.log(this.username);
// }

const check = () => {
    let username = "sandip"
    console.log(this);
}

// check()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "sandip"})

console.log(addTwo(3, 5));

const myArray = [2, 5, 8, 7]