//Objects has some more unique properties through which we can give further access to the developers that whether they want to the objects to be enumerated, iterated or further these types of access. 
//getOwnPropertyDescriptor() is one of the methods which gives more access like above to objects specified inside the parameter of the function. 1st paramter is the object name & 2nd is the property of the object of which we want to specify certain access.

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


//We can also create custom objects into which we can give access properties as well. 
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


//Below is used to define the properties which we want to give to the name parameter of the chai object. defineProperty() takes 3 parameters => 1. name of the object, 2. name of the key, 3. object inside which we give property access. 
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    //in below only those values will be printed which are not functions 
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}