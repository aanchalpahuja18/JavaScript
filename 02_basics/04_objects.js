// const tinderUser = new Object() => This is a singleton object

const tinderUser = {} //This is not a singleton object but both are similar to each other since none have anything inside it


tinderUser.id = "123abc"
tinderUser.name = "Aanchal"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "aanchal@gmail.com",
    fullname: {
        username: {
            firstname: "Aanchal",
            lastname: "Pahuja"
        }
    }
}

//A concept of optional chaining arises here

console.log(regularUser.fullname.username.firstname);

//Merging objects together

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}

//Below is one way to merge the objects but it faces the same issue as in the case of arrays where objects are treated as it is.
// const obj3 = {obj1, obj2}
// console.log(obj3);


//2nd method to merge the objects together is using the Object.assign() in which {} => is the target object in which all the merged objects will be going inside & obj1, obj2 are the source objects which are to be merged together.
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

//3rd method is the spread operator which will be used the most
const obj3 = {...obj1, ...obj2}
console.log(obj3);

//Databases se jb values aaegi to that will be in the form of array of objects:

const user = [
    {
        id: 1,
        email: "aanchal@gmail.com"
    },
    {
        id: 1,
        email: "aanchal@gmail.com"
    },
    {
        id: 1,
        email: "aanchal@gmail.com"
    }
]

console.log(user[1].email);

console.log(tinderUser);
//To access all the keys of the object
console.log(Object.keys(tinderUser));
//To access all the values of the object
console.log(Object.values(tinderUser));
//To access the key value pair in the form of nested arrays
console.log(Object.entries(tinderUser));


//Many a times it may happen that while checking for the keys we have to first find that whether the key exists in the object or not for doing that we have hasOwnProperty()
console.log(tinderUser.hasOwnProperty('isLoggedIn'));




