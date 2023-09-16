// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);     // false
console.log(null == 0);    // false
console.log(null >= 0);    // true
    
/*
    The reason is tha an equality check == and comparisions > < >= <= work diffrently
    Comparisions convert null to a number, treating it as 0.
    That's why (3) >= 0 is true and (1) > 0 is false
*/

console.log(undefined == 0);  // false
console.log(undefined >= 0);  // false
console.log(undefined > 0);   // false

// === strictly check the value as well as type of value and compares as there is no conversion

console.log("2" == 2); // true -> loosely check as conversion is there that is number of string

console.log("2" === 2); // false  -> no connversion


