// Dates

let myDate = new Date() 
console.log(myDate.toString());  // Mon Sep 18 2023 08:22:54 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());  // Mon Sep 18 2023
console.log(myDate.toISOString());   // 2023-09-18T08:22:54.872Z
console.log(myDate.toJSON());        //2023-09-18T08:22:54.872Z
console.log(myDate.toLocaleDateString()); //  9/18/2023
console.log(myDate.toLocaleString());  //  9/18/2023, 8:22:54 AM

// let myCreatedDate = new Date(2023, 8, 18)   // 9/18/2023, 12:00:00 AM
// let myCreatedDate = new Date(2023, 8, 18, 14, 1) // 9/18/2023, 12:00:00 AM
// let myCreatedDate = new Date("2023-09-18")  // 9/18/2023, 12:00:00 AM
let myCreatedDate = new Date("09-18-2023")
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();

console.log( myTimeStamp);
console.log(myCreatedDate.getTime());    // 1695026722386 mili-sec
console.log(Math.floor(Date.now()/1000));   // 1695026745 sec


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday : "long"
})

