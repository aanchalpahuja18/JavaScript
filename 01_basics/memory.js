//Stack (All the primitive datatypes are stored inside stack which takes value using copy of the variables & are often known as copy values)
// Heaps(All the non-primitive datatypes are stored inside heap which takes the value from the reference of the data stored inside heap meaning any change in the value refers to the actual data stored inside heap)

//Heap ke andar jo bhi jaega uska humesha reference hi milega.

//Stack ke andar jab bhi hum koi cheez lege we will get its copy everytime

//Stack examples

let myYoutubeName = "aanchalpahuja"
let somename = myYoutubeName

console.log(somename);
somename = "aanchalpahuja18"

console.log(somename);
console.log(myYoutubeName);


//Heaps examples

let userOne = {
    email: "aanchalpahuja34@gmail.com",
    upi: "aanchal@ybl"
}

let userTwo = userOne;

userTwo.email = "aanchalpahuja1808@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


