class User{
    constructor(username){
        this.username = username 
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const sandip = new User("Sandip0705")
// console.log(sandip.createId());

class  Teacher extends User {
    constructor(username, email){
        super(username)
        this.email
    }
}

const hp = new Teacher("Hindustan Petroleum", "hpindia@gmail.com")
hp.logMe()
console.log(hp.createId());


// static keyword do not allow access of any function from the object of that class as well as from the extended classes