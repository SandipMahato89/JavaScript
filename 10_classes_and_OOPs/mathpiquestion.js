const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// log(Math.PI)
// Math.PI = 4
// console.log(Math.PI);

// const newObject = Object.create(null)

const student = {
    name: 'sandip',
    id: 121,
    isAvailable: true,

    teacher: function() {
        console.log("student");
    }
}

console.log(Object.getOwnPropertyDescriptor(student, "name"));

Object.defineProperty(student, 'name', {
    // writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(student, "name"));

for (let [key, value] of Object.entries(student)) {
    if (typeof value !== 'function') {
        console.log(`${key} :  ${value}`);        
    }
    
}