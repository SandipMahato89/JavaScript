// arrays

const myArr = [8, 2, 1, 7, 5, 8]
// console.log(myArr[3]);

const myHeros = ['Hanuman', 'Ram', 'Krishna']
// console.log(myHeros);

const arr2 = new Array(8, 9, 2, 3)
// console.log(arr2);

// ********* array methods **********

// myArr.push(23)
// myArr.pop()

// myArr.unshift(9)
myArr.shift()
// arr2.shift()

// console.log(arr2);

// console.log(myArr);

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(8));

const newArr = myArr.join()
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myA1 = myArr.slice(1,3)

console.log(myA1);
console.log("B ", myArr);

const myA2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myA2);
