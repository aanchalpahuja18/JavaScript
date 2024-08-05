const name = "aanchal"
const repoCount = 25

console.log(name + repoCount + " Value");

//String Interpolation - It means that by using back ticks we can inject placeholders which can be further used to hold the variables inside it.

console.log(`Hello my name is ${name} & my repo count is ${repoCount}`);

// We can also declare string using new keyword.

const gameName = new String("aanchal_18_08");

//Above is an object in which the indices refer to the keys & characters at those indices refer to the values inside the object

console.log(gameName.length);

console.log(gameName[0]);

console.log(gameName.toUpperCase());
//Here changes of uppercase is not done on the original string since it is a primitive DT so a copy of it will be made as per last memory.js file and everything will be stored inside Stack memory
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-8,6);
console.log(anotherString);

//In substring & slice last index won't be included 

const newStringOne = "   aanchal      "
console.log(newStringOne);
console.log(newStringOne.trim());

//trim() stripes off all the white spaces from front & from back given in the input field 

const url = "https://aanchal.com/aanchal%18pahuja";

//To replace something from the string we use replace()
console.log(url.replace("%18", "-"));

//To check if the string contains a specific character or string we use includes
console.log(url.includes("aanchal"));

//What if we want to convert string into arrays based on some sort of separator for that we will use split method

console.log(gameName.split('_'));


