const fruits = ['mango', 'oranges', 'banana']
const vegetable = ['potato', 'tomato', 'onion']

// fruits.push(vegetable)  // [ 'mango', 'oranges', 'banana', [ 'potato', 'tomato', 'onion' ] ]

// console.log(fruits);
// console.log(fruits[3][1]);  // tomato

// const food = fruits.concat(vegetable)  // [ 'mango', 'oranges', 'banana', 'potato', 'tomato', 'onion' ]
// console.log(food);

const all_food = [...fruits, ...vegetable]  // spread can combine more than two arrays
console.log(all_food);

const another_array = [1, 2, 3, [7, 4, 5], 6, 7, [8, 9, [3, 8]]]
const real_another_arr = another_array.flat(Infinity)
console.log(real_another_arr);


console.log(Array.isArray("Sandip"));
console.log(Array.from("Sandip"));
console.log(Array.from({name : "sandip"}));  // intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log((Array.of(score1, score2, score3)));
