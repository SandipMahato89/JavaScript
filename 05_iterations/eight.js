// reduce 

const myNums = [1, 2, 3, 4]

// const total = myNums.reduce( function (acc, curVal) {
//     console.log(`acc: ${acc} and curVal : ${curVal}`);
//     return acc +curVal 
// }, 5)

const total = myNums.reduce( (acc, curr) => acc+curr, 5)

console.log(total);

const shoppingCart = [
    {
        itemName : "js course",
        price : 1500
    },
    {
        itemName : "Mobile dev course",
        price : 5000
    },
    {
        itemName : "AI & ML",
        price : 10000
    }
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPrice);