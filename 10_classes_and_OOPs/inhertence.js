class User {
    constructor(username){
        this.username = username
    }

    logME() {
        console.log(`Username : ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`New course was added by ${this.username}`);
    }
}

const teach = new Teacher('Suvendu', "suvendu@gmail.com", "1234")
teach.addCourse()
teach.logME()

const user = new User('Sandip')
user.logME()

