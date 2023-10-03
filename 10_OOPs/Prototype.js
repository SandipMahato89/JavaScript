// let myName = 'Sandip'
// let myWork = 'Developer'

// console.log(myName.truelength());

let heros = ["Thor", "IronMan"]

let heroPower = {
    Thor: 'Hammer',
    IronMan: 'Jarvis',

    getIronPower: function(){
        console.log(`Iron Man power is ${this.IronMan}`);
    }
}

Object.prototype.sandip = function() {
    console.log(`Present in all Objects`);
}

Array.prototype.heySandip = function() {
    console.log('Sandip says hello');
}

// heroPower.sandip()
// heros.sandip()
// heros.heySandip()
// heroPower.heySandip()

const User = {
    name : 'Sandip',
    email : 'sing91816@gmail.com'
}

const Teacher = {
    teach : "Text Tracker"
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JavaScript Assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

//*****************************

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


// *****************************

let anotherUserName = "Sandy"

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUserName.trueLength()
"sandip".trueLength()
"monitor".trueLength()