const accountId = 705200
let accountEmail = "tejsand4@gmail.com"
var accountPassword = "12345"
accountCity = "Andal" //this by default treated as var global scope variable

// accountId = 2 //not allowed

accountEmail = "sand@gmail.com"
accountPassword = "321"
accountCity = "Kolkata"

let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);