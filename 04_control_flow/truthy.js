//Some values we assume to be true or false those are known as truthy & falsy values.

let userEmail = "aanchal.ai"

if(userEmail){
    console.log("User logged in!");
    
}
else{
    console.log("Please log in!");
    
}

//Falsy values:

// false, 0, -0, BigInt - 0n, "", null, undefined, NaN, 

//Truthy values:

//"0", 'false', " ", [], {}, function() {}, 

//to check whether array is empty or not we use its length function

userEmail = []
if(userEmail.length === 0){
    console.log("Array is empty");
    
}

//to check whether object is empty or not we first collect all its keys & then it returns an array on which we use the length function to check whether it is empty or not

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

//Some imp results to be taken care of!

// 0 == false => true
// 0 == '' => true
// false == '' => true

//******************************************************************************************** */

//Nullish Coalescing Operator (??) : Here the whole story revolves around 2 keywords that are: null & undefined 

// ?? this operatir is basically used to do a safety check with null saying that if we get null or undefined as the ouptut from the database or API we have to handle it differently in our code!

let val1 = 10

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

//neche me se jo bhi first value hume mil gyi hai that will be assigned to it!
val1 = null ?? 10 ?? 15

console.log(val1);

//Ternary operator & Above operator are totally different, Its design, pattern, goal everything are different from the nullish operator

// condition ? true : false 

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80");


