//Functions are some lines of code packaged inside a block which does a certain work independently.
function sayMyName(){
    console.log("A")
    console.log("A");
    console.log("N");
    console.log("C");
    console.log("H");
    console.log("A");
    console.log("L");
}

sayMyName()

sayMyName //This is just a reference of the function which tells us that where the function is present & it doesn't helps us to execute the function

//Values got inside the function definition are known as parameters.
function addTwoNums(num1, num2){
    console.log(num1 + num2);
    
}

//values passed during calling the function are arguments
// addTwoNums(3, 4);

//Return in functions: 
let result = addTwoNums(3,4)
console.log(result);

//In below result is still undefined because nothing has been returned from the function which can be stored inside result so result still remains undefined


function mul(num1, num2){
    // let result = num1 * num2;
    // return result;

    return num1 * num2;
    console.log("Aanchal");
    
}

//Here the answer returned from the mul() is stored in the ans variable & then it is printed.

//Any stmnt after return won't be executed
let ans = mul(3,5)
console.log(ans);

//if no username is entered by the user then default username = "Aanchal" will be treated & if a certain username is entered by the user then that value is overwrited & treated as the username.
//if condition is writted to check whether there is a value inside username & it is not undefined. 
//!username means if username === undefined so enter inside it & ask the user to login after that go back where the function was called. 
// By default in JS undefined, "" are treated as false So !false is true which allows us to enter inside the if block
function loginUserMessage(username = "Aanchal"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Pahuja"))
console.log(loginUserMessage("Pahuja"))


//Functions & Objects:

//... is the rest operator which bundles up all the values & gives it accordingly
//Here val1 & val2 is taken by 200 & 400 respectively so nums1 will have 500 & 2000
//nums1 will be returned as an array 
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))


//Passing objects to functions
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


//Passing arrays to functions
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

