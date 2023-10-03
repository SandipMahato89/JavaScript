function multiplyBySeven(number) {
    return number * 7
}

multiplyBySeven.power = 2

console.log(multiplyBySeven(5))
console.log(multiplyBySeven.power);
console.log(multiplyBySeven.prototype);

// *******************************

function createUser(userName, price){
    this.userName = userName;
    this.price = price
}

createUser.prototype.increasePrice = function() {
    this.price += 50
}

createUser.prototype.printUser = function() {
    console.log(`${this.userName} price is : ${this.price}`);
}

const butterChicken = new createUser('Butter Chicken', 250)
const chillyChicken = new createUser('Chilly Chicken', 250)

butterChicken.increasePrice();
butterChicken.printUser();

chillyChicken.increasePrice();
chillyChicken.printUser();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/