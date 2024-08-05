//Date is an object in JS & below is the instamce of that object created 
const date = new Date()
// console.log(date);

//Different formats of date representation is added below :>
// console.log(date.toString());

// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());

//Months start from 0 in JS
let myCreatedDate = new Date(2024, 0, 8);
console.log(myCreatedDate.toDateString());


myCreatedDate = new Date(2024,0,8,5,3);
console.log(myCreatedDate.toLocaleString());
myCreatedDate = new Date("2024-08-05");
console.log(myCreatedDate.toLocaleString());

myCreatedDate = new Date("08-05-2024");
console.log(myCreatedDate.toLocaleString());

//Timestamps

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

//To convert ms into seconds 

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);


console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());


//Customization of dates further with the help of toLocaleString

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: 
})

