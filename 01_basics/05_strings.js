const name = "sandip"
const repoCount = 10

// console.log(name + repoCount + " Value");        X

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sandip_mahato')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-10, 4)
console.log(anotherString);

const newStringOne = "   sandip   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sandip.com/sandip%20mahato"

console.log(url.replace('%20', '-'));

console.log(url.includes('hata'));

console.log(gameName.split('_'));

