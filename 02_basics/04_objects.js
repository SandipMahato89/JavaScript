// const instaUser = new Object()
const instaUser = {}

instaUser.id = "123abc"
instaUser.name = "Ram"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email: "sing@gmail.com",
    fullname: {
        userfullname:{
            firstname: "sandip",
            lastname: "mahato"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj4 = {5: 'a', 6: 'b'}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

// console.log(obj3);

const users = [
    {
        name : "sandip"
    },
    {
        name : "ram"
    },
    {
        name : "sasi"
    },
]

console.log(users[1].name);
console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn'));