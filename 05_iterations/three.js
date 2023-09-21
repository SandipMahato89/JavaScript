/// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [4, 9, 3, 2, 7]

for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    if(greet == ' '){
        break;
    }
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);
for (const key of map) {
    console.log(`${key} `);
}

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}

const myObject = {
    'game1' : "BGMI",
    "game2" : "COC"
}

// for (const [key, value] of myObject) {
//     console.log(`${key} :- ${value}`);    
// }