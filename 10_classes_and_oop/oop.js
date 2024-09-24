//1. Object Literal: An object literal is a list of name:value pairs inside curly braces {}.

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        //In above if we write only username then it will give an error since the function doesn't know which username to access so by using the this infront of username it tells the function that we have to refer to the username of the current object we are residing in. 
        console.log(this);
    }

}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

//this is used to refer the current context of the object. Which means if we have 2 arrays and both have the map function so how will the map() know that on which array it have to apply. This would be possible only if we provide the current context to the map() that on this array you should be supposed to work. Same happens with this. 

//Also only printing this in different environment gives different results, in browser it will give entire window object whereas in vscode since node is the runtime environment for js it will only give an empty parenthesis. {}

//2. Constructor function - It allows us to form & make new multiple instances from 1 object literal with the help of new keyword. Everytime we write new keyword in front of function / object an entire new instance of that function / object is given to us which has no previous relationship with another instances of them.

// Many times we want a new execution context so that we can put new values inside it so new keyword is used to create an entire new context. So this is known as the constructor function


//new keyword notes:

//1. Whenever we use a new keyword everytime an empty object is created which is known as instance.
//2. Step 1 - New object is created. 
//3. Step 2 - A constructor function is called (whenever a new empty object is created) with the help of new keyword & it packs all the arguments & give it to us.
//4. Step 3 - All the arguments are injected in the variables with the help of this keyword.
//5. Step 4 - Every argument is made available to the user.


const promiseOne = new Promise()
const date = new Date()

function user(username, loginCount, isLoggedIn){
    //this.username informs that we have to inject the value coming from the parameter into the current object's/context's variable
    //By using this we will get an empty object into which we will start injecting our values. 
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    //this is returned implicitally from the function so need to specify it
    return this
}


//By using below code we will overwrite the values of userTwo into userOne whenever it would be called. And even the below code would give us a lot of unnecessary previous info which we don't want it to use now. 

// const userOne =  user("hitesh", 12, true)
// const userTwo =  user("ChaiAurCode", 11, false)


//To have a new info of the entire instance & to control over the values passed into it we will use new keyword so that an wntire new independant instance is available to use. 

const userOne = new user("hitesh", 12, true)
const userTwo = new user("ChaiAurCode", 11, false)
//constructor property is the reference to our own function/object
console.log(userOne.constructor);
//console.log(userTwo);

