//Datatypes are categorised into 2 types: Primitive & Non-Primitive : These furthere differ into call by value & call by reference.

//(Value type) Primitive Datatypes: 7 types of DT are present here

//String, Boolean, Number, null, undefined, BigInt, Symbol (It is used for making certain things unique like containers are made unique)

//Reference Type (aka Non-Primitive) Here memory reference is directly allocated.

//Array, Objects, Functions

//Is JS dynamically typed or static typed language?
// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.

const score = 100
const scoreValue = 100.4

const isLoggedIn = false;

const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 34519878417198;


//Checking the type of data with the help of typeof :

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof bigNumber);
//Non primitive Datatypes examples
//Arrays, Objects, Functions

// All the non-primitive datatypes has its datatype as object by checking it with the help of typeof we can investigate it further

//Arrays

const heros = ["Shaktiman", "Naagaraj", "Debo"]

//Functions

let myFunction = function(){
    console.log("Hello World");
}

//Objects

let myObj = {
    name: "Aanchal",
    age: 21
}


console.log(typeof heros);

//Arrays ka return type bhi object hai

//Typeof in JavaScript is an operator used for type checking and returns the data type of the operand passed to it. The operand can be any variable, function, or object whose type you want to find out using the typeof operator.