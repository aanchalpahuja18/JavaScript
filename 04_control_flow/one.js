//Scope determines the accessibility of variables, objects, and functions from different parts of the code.

//The variables defined inside the block has its accessibility only till that block & are no longer accessible outside the block in any manner. This is known as block scope

//We don't want all time the code to run for that we use control flow which indicates that at sometime this code should execute & at some other condition another should be executed!

//Control Flow indicates how the control of our program should execute using if, if-else nested if-else, switch, etc.
//if

// const userLoggedIn = false;

// if(userLoggedIn == false){
//     console.log("Please Log In")
// }


//if-else
// const temperature = 41

// if(temperature < 50){
//     console.log("Less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
    
// }

//Comparison Operators Used for comparing the conditions which would be frequently written inside the control flow are:
// >, <, >=, <=, ==, ===, !=

//Variable accessibility => Scope in Control flow

const score = 200
if(score > 100){
    let power = "fly"
    console.log(`User power : ${power}`);
    
}

//Here power is not accessible outside its scope since it is defined using let keyword
// console.log(`User power : ${power}`);


const balance = 1000

//Below is very bakwas code so do not try it ever!
if (balance > 500) console.log("test"),console.log("test2");

//For checking multiple conditions we have if-elseif-else statements!

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//Multiple conditions checking together
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
