// const userEmail = "san@gmail.com"  // ture
// const userEmail = ""    // false
const userEmail = []    // ture


if(userEmail) {
    console.log("Got user Email..");
} else {
    console.log("Don't have user email..");
}

// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}, 


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

// val1 = null ?? 10 ?? 20
val1 = null ?? undefined ?? 20

console.log(val1);

// Ternary Operator

// condition ? true : false

const price = 200
// price >= 100 ? console.log("less than 100") : console.log("greater than 100")
const res = (price <= 100) ? "less than 100" : "greater than 100"

console.log(res);
