# javascript and classes

## OOP 

## Object
- collection of properties and methods
- toLowerCase

## why we use OOP

## parts of OOP
Object literal

- Constructor function

    ## 'new' keyword
    - newboject is create for each new keyword
    - constructor function is called due to new keyword and it packs all the arguments and give it to us
    -  all the arguments get injected to this keyword
- Prototypes
- Classes
- Instances (new, this)


## 4 Pillars
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

## Properties of 'new' Keyword

 Here's what happens behind the scenes when the new keyword is used:

- A new object is created: The new keyword initiates the creation of a new JavaScript object.

- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

- The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

- The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.



