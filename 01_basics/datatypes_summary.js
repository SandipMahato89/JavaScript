//Primitive data types

// 7 types: String, Number, null, undefined, Boolean, Symbol, BigInt

const score = 25
const deciNum = 17.25

const isLoggedIn = false
const Temperature = null
let userEmail;

const id = Symbol("123")
const id2 = Symbol("123")
console.log(id == id2);

const bigNumber = 54666498165746541654n
// console.log(typeof bigNumber); // bigint

// Reference (Non primitive)

//Array, Objects, Functions

const arr = ['Ram', "Lakshman", 'Sita', "Hanuman", "Bharat"];
// console.log(typeof arr); // object

let myObj = {
    name : "Sandip",
    age : 23,
}

// console.log(typeof myObj);  // object

const myFunction = function() {
    console.log("Hello doston");
}

// console.log(typeof myFunction);  // function

// https://262.ecma-international.org/5.1/#sec-11.4.3



// **********************************************

//Stack (Primitive) -> here we get a copy of memory,
// Heap (Non-Primitive) -> here we get a reference of memory

let name1 = "Snadip"            // Primitive type 
let name2 = name1
name2 = "Something change"

console.log(name1);
console.log(name2);

let userOne = {                 // Non-primitive type 
    email : "sandip@gmail.com",
    age : 23
}

let userTwo = userOne
userTwo.email = "change@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);