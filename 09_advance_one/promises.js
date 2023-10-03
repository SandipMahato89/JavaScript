const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network calls
    setTimeout(function(){
        console.log('Async task is complete'); 
        return resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})

// *************

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        return resolve()
    }, 1000)
}).then(function() {
    console.log('Aysnc task 2 completed ');
})

// *********************

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: 'sandip', email: 'sin91816@gmail.com'})
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user);
})

// **********************

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = false
        if(!error){
            resolve({username: 'Sandip_Mahato', password: '123'})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then( (user) => {
    console.log(user);
    return user.username
}).then( (userName) => {
    console.log(userName);
}).catch( (error) => {
    console.log(error);
}).finally( () => {
    console.log('Promise is either resolved or rejected');
})

// ********************

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        const error = true
        if(!error){
            resolve({username: 'JavaScript', password: '123'})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumepromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumepromiseFive()

// ****************************

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//        console.log("E", error); 
//     }
// }

// getAllUsers()
 

// *********************************

fetch('https://api.github.com/users/SandipMahato89')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));