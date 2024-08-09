//Arrays - 
//It is an object which is of resizable size  also it can contain any type of data, not compulsory to contain only homogenous data as in the case of CPP. Arrays cannot be accessed using arbitrary strings & it can be accessed only using indexe.
//Arrays are 0 based indexing
//Arrays create shallow copy (Shallow copy is a copy of the object whose properties share the same reference point)
//Deep copy - Properties do not share the same reference & a copy is created inside the stack

const myArr = [0,1,2,3,4,5]

console.log(myArr);

const newArr = new Array(1,2,3,4)
// console.log(newArr);

//Array methods

//1. To add the values we use push()
myArr.push(6)
console.log(myArr);

//2. pop():  It removes the last element of the array
myArr.pop()
console.log(myArr);

//3. unshift(value) : To add a value to the start of the array
myArr.unshift(99)
console.log(myArr);

//4. shift() : To remove the starting value from the array
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));

console.log(myArr.indexOf(9));


//join() converts the array into string but in comma separated manner
const arr2 = myArr.join()
console.log(arr2);

//slice & splice
const n1arr = myArr.slice(1,3)

console.log(n1arr);

console.log("A", myArr);

//splice
const n2arr = myArr.splice(1,3);
console.log(n2arr);
console.log("B", myArr);

//Notes about slice & splice:
//Slice: In the range from 1,3 suppose 1 is included & 3 is not included & also the change is not done in the original array a copy of the changed array is returned using this method

//Splice: In this the range from 1,3 suppose 1 & 3 both are included but the change is done in the original array which means that the elements from (1,3) indexes are removed from the original array. 






