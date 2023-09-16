                    /* conversion of data_types in JavaScript */

// let score = 33       // Number 33
// let score = "33"     // Number 33
// let score = "33abc"      // Number NaN
// let score = null     // Number 1
// let score = undefined   // Number NaN
// let score = true    // Number 1
let score = "sandip"  // Number NaN

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// let isLoggedIn = "sandip"  // true
// let isLoggedIn = ""     // false
let isLoggedIn = 1      // 1 => true; 0 => false

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


let num = 25
let numberToString = String(num)
console.log(typeof num);
console.log(typeof numberToString);
console.log(numberToString);


