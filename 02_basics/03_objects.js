//Literal se bnaege to singleton nhi bnega
//Constructor se bnaege to humesha singleton hi bnega => Object.create()

//object literals 
//Symbol declaration
const sym = Symbol("key1")

//Objects can have any type of keys & objects are a key-value pair data type.
const user = {
    //Keys internally are changed into strings so we do not have to explicitly specify that the key is string JS will automatically do it.
    name: "Aanchal",
    age: 20,
    location: "Nagpur",
    isLoggedIn: false,
    email: "aanchal@google.com",
    loginDays: ["Monday", "Wednesday", "Friday"],
    [sym]: "myKey1",
    "full name": "Aanchal Pahuja"
    //Above is the declaration of symbol inside objects.
}

//Accessing the values of Objects give us 2 methods => 1. Using dot operator & 2. using [] 

console.log(user.email);
//To access values inside [] we have to specify its corresponding key in terms of string
console.log(user["email"]);

//To access these kinds of keys we have to have to use [] dot operator won't work for these.
console.log(user["full name"]);
console.log(typeof user[sym]);


user.email = "aanchalpahuja@gmail.com"
//We can freeze the objects which mean no error will occur & no further changes can be done to any part of the key of the object

// Object.freeze(user)
user.email = "aanchal@gmail.com"
console.log(user);

//Adding functions to objects

user.greetings = function(){
    console.log("Hello Duniya");
}

//Here the function is executed & then its output is printed to the screen. 
console.log(user.greetings());

//Here the reference of the function is just given to the log stmt.
console.log(user.greetings);

//To access the properties of the same object we cann use this which gives us the info that we are refering to the same object.
user.greetingsTwo = function(){
    console.log(`Hello Duniya ${this.name}`);
}

console.log(user.greetingsTwo());
