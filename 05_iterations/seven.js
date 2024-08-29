//Map: It iterates over every element and requires a callback too. Also it returns an array!


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})


//Chaining: Inside chaining the result of chain gets passed on to another chain and so on. 

//In filter we get the values based on a true or false condition while in maps we get all the values after iterating on it. 


const newNums = myNumers.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)

console.log(newNums);
