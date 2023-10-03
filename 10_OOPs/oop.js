const user = {
    username: 'sandip',
    password: '1234',
    logingCount: 5,
    singnedIn: true,

    getUserDetails: function(){
        // console.log('Something got from database');
        // console.log(`UserName: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// *************************

function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User('Sandip', 12, true)
const userTwo = new User('Sasikant', 10, false)

console.log(userOne);
console.log(userTwo);