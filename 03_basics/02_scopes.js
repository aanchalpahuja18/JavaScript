// let a = 10
// const b = 20
// var c = 30


//Now all the variables are accessible globally
// console.log(a);
// console.log(b);
// console.log(c);

var c = 400

if(true){
let a = 10
const b = 20
c = 30

}

//let & const have block scope which means the variables will be accessible only till the scope of block & not outside that which should be there since it is a measure of security provided by the language whereas in var the value is accessible anywhere in the entire code & no concept of scope is applied on var which eventually leads to the inconsistency in code.


// console.log(a);
// console.log(b);
console.log(c);

//In above since we have declared var globally & if a function has been imported to our file in which we don't know the variables & its values will lead us to wrong output since the value of c will be changed due to that file.

//Concept of scope is different in code which is here & it is different in browser