function sayMyName(){
    console.log("Sandip");
}

sayMyName()

// function addTwoNumbers( number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(2, 3)
// addTwoNumbers(2, null)

function addTwoNumbers( number1, number2){
    return number1 + number2
}

// console.log(addTwoNumbers(2, "3"));
// console.log(addTwoNumbers(2, "a"));

// const result = addTwoNumbers(2, 5)
// console.log("Result: ", result);

function loginUserMessage(username = "example"){
    if(!username){
        console.log("please enter username..");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sandip"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 100, 500, 2000, 3000));

const user = {
    username : "sandip",
    price : 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username : "sandip",
    price : 499
})

const myNewArray = [ 200, 500, 100, 600]

function returnValue(getArray) {
    return getArray[2]
}

// console.log(returnValue(myNewArray));
console.log(returnValue([ 200, 500, 100, 600]));
