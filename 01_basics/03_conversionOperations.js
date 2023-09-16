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
// console.log(typeof num);
// console.log(typeof numberToString);
// console.log(numberToString);


// ************** Operations **************

let value = 10
let negValue = -value
// console.log(negValue);

// console.log(5 + 5);
// console.log(5 - 5);
// console.log(5 * 5);
// console.log(5 / 5);
// console.log(5 % 5);
// console.log(5**5);

let str1 = "hello"
let str2 = " sandip"
let str3 = str1 + str2
// console.log(str3);

// console.log("2" + 1);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let counter = 10
++counter   // prefix -> first change the value then use the value
counter++   // postfix -> first use the value then change the value
console.log(counter);

// conversion link for detailed explanation
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion