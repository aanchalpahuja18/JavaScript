//Immediately Invoked Function Expression

//Jese hi function likha usse turant hi execute krwana hai!
//Why do we want this?

//1. If our app is connected to a DB we would want that as soon as the app starts it gets connected with the DB

//2. Global scope pollutes the functions so to remove the declaration of variables of that global scope we use IIFE

function chai() {
    console.log("DB Connected");
    
}
// chai()

//Here the function gets executed immediately but the global scope pollution issue is still there. 
//Below is named IIFE
(function chai() {
    console.log("DB Connected");
    
}) ();

//Therefore we wrap our function with the () => it gives us an independant block to write our function definition & an extra () is added to execute the function

//Here we add ; to explicitly stop the execution of IIFE bcoz sometimes IIFE doesn't know to stop its execution;

//Below is un-named IIFE or simple IIFE or parameter passed IIFE
( (name) => {
    console.log(`DB Connected ${name}`);
    
}) ("aanchal")