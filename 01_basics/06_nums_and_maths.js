//Here JS will automatically determine the type of score variable
const score = 100
// console.log(score);

//We can also explicitly define the type of the data we want to use using the new keyword
const balance = new Number(400)
// console.log(balance);

//By using new keyword we can get access to various methods present inside the Number class!

// console.log(balance.toString().length);
//To convert the number into decimal number we require ToFixed()
// console.log(balance.toFixed(2));

//Precision in JS - It is used to give priority to the numbers before decimal & the numbers after decimal has to be rounded off to its nearest form
const otherNumber = 123.45
// console.log(otherNumber.toPrecision(3));

//To improve the representation of various 0s together we use toLocaleString()
const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));


//For numbers properties like min value, max value, epsilon, finite we use Number.propertyname

// ********************************Maths***********************************************

//Below gives an object of Math
// console.log(Math);
// console.log(Math.abs(-1));
// console.log(Math.round(4.2));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,7,2,5));
// console.log(Math.max(4,2,5,9));

//Below gives random numbers between 0 to 1
console.log(Math.random());

//To avoid the numbers coming between 0 to 1 we multiply Math.random() with 10
console.log(Math.random() * 10);

//To avoid the numbers like 0.0133 we add 1 to it so that the minimum we get is 1 & Math.floor is added so that the decimal places are handled correctly
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min);
//Upar max - min  + 1 isliye kra hai taki max - min se range define ho jaye & then we add 1 in order to avoid the 0 value
//Baad me + min isliye kiya taki uss min value se upar vale numbers mil jaye







