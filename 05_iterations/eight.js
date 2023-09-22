// reduce 

const myNums = [1, 2, 3, 4]

const total = myNums.reduce( function (acc, curVal) {
    console.log(`acc: ${acc} and curVal : ${curVal}`);
    return acc +curVal 
}, 5)

console.log(total);