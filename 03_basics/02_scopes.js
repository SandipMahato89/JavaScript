// var c = 200
let a = 300

if(true) {
    let a = 10
    const b= 30
    // console.log("Inner: ", a);
    //  c = 90
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "sandip"

    function two(){
        const website = 'google'
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true) {
    const username = "sandip"
    if(username === "sandip") {
        const website = " youtube"
        // console.log(username + website);
    }
// console.log(website);
}

// console.log(username);


// *************** intresting  *************

// no error is accured
addOne(5)
function addOne(num) {
    return num + 1 
}

// error is shown
addTwo(5)           // hoisting 
const addTwo = function(num) {
    return num + 2
}
