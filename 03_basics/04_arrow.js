//this refers to the current context which simply means that where the things are being accessed.

const user = {
    username: "Aanchal",
    price: 1000,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}, to our website`);
        console.log(this);
    }
}

console.log(user.welcomeMessage());
user.username = "Parv"
console.log(user.welcomeMessage());


//Here this refers to the empty global object in node that is in our code whereas in browser this refers to the global object which is windows
console.log(this);


//this in functions & function expressions

function one() {
    //this inside function leads us to provide certain useful functions

    const username = "Aanchal"
    // console.log(this);

    //But accessing variables inside function using this gives us undefined & not the actual result!
    console.log(this.username);
    
}

one()

//Same happens with function expression which means declaring functions inside variables.
const two = function(){
    const username = "Aanchal"
    console.log(this.username);
    
}

two()

//An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage
//In arrow functions only this & this with accessing some properties both gives us undefined
const three = () => {
    const username = "Aanchal"
    console.log(this.username);
    console.log(this);
}
three()


const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(3,4));


//Implicit return where we don't have to specify the braces & we can just return the code of 1 line without specifying the return keyword & with or without using parathesis
const subTwo = (num1, num2) => (num1 - num2)

console.log(subTwo(10,4));


//To return the objects we would definitely require () which will make sure that the object has been returned in the correct syntax without any confusion
const other = () => ({username: "Aanchal"})

console.log(other());
