/*
    The following code solves week 11 lab
*/

const CURRENT_YEAR = 2023;

const account = {
    name    : "Ben",
    address : "Dublin",
    dobYear : "1990",
    balance : 500,

    getName          : function() {
        return this.name;
    },

    getAge          : function() {
        return CURRENT_YEAR - this.dobYear;
    },

    getInterest     : function() {
        if ( this.balance > 1000 ) {
            return this.balance * .1;
        }
        else {
            return this.balance * .05;
        }
    }
};

// Task 2 Part 1. Constructor function for Car objects
function Car( makeIn, modelIn, engineSizeIn ) {
       this.make = makeIn;
       this.model = modelIn;
       this.engineSize = engineSizeIn;

       this.getMakeandModel = function() {
            return this.make + " " + this.model;

       }
}

console.log( "The following information is from the account");
console.log( "Name: " + account.name );
console.log( "Name: " + account.getName() );
console.log( "Age: " + account.getAge() );
console.log( "Interest: " + account.getInterest() );


console.log( "The following information is from the Car object");

// Task 2 Part 3. Create objects
let car1 = new Car( "Toyota", "Corolla", 2 );
let car2 = new Car( "Opel", "Astra", 1 );

// Task 2 Part 4. Accessing properties and functions
console.log( "Car 1")
console.log( "Make: " + car1.make );
console.log( "Model: " + car1.model );
console.log( "Engine Size: " + car1.engineSize );
console.log( "Make and Model: " + car1.getMakeandModel() );

console.log( "Car 2")
console.log( "Make: " + car2.make );
console.log( "Model: " + car2.model );
console.log( "Engine Size: " + car2.engineSize );
console.log( "Make and Model: " + car2.getMakeandModel() );
