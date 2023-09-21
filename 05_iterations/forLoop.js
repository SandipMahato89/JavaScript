// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 4) {
        // console.log("heyy next number is 4");
    }
    // console.log(element);    
}

// console.log(i);

for (let i = 1; i <= 5; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 5; j++) {
        // console.log(`${i} X ${j} = ${i*j}`);        
    }
    // console.log();
}


let myArray = ["Ram", "Hanuman", "Krishna", "Shiva"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}



// break and continue

// for (let i = 0; i < 10; i++) {
//     if(i == 7){
//         console.log("Detected number 7");
//         break;
//     }
//     console.log(`Value of i is ${i}`);    
// }

for (let i = 0; i < 10; i++) {
    if(i == 7){
        console.log("Detected number 7");
        continue;
    }
    console.log(`Value of i is ${i}`);    
}