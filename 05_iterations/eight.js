//reduce: It reduces the array into a single value & returns it. 

const myNums = [1, 2, 3]

//Here accumulator (acc) will initially take the value given after the curly braces (here 0) amd after every iteration it takes the result of the operation in every iteration & then it finally returns it as a result. 

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total = shoppingCart.reduce( (acc, currVal) => (acc + currVal.price), 0)

console.log("Total price is: ", total);
