let score = "20"

console.log(typeof score);

let numberScore = Number(score)

console.log(numberScore);
console.log(typeof numberScore);


score = "20abc"
numberScore = Number(score)
console.log(numberScore);

score = true
numberScore = Number(score)
console.log(numberScore);
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let isLoggedIn = "true"

let booleanisLoggedIn = Boolean(isLoggedIn)

console.log(booleanisLoggedIn);

isLoggedIn = "aanchal"
booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

isLoggedIn = ""
booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1 => true; 0 => false
// "" => false
// "aanchal" => true

let someNumber = 33
let stringSomeNumber = String(someNumber)

console.log(stringSomeNumber);

console.log(typeof stringSomeNumber);
