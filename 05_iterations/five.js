//for-each loop: It is majorly used for the arrays.

const coding = ["js", "ruby", "java", "python", "cpp"]

//In for-each we have to pass the callback of the function in which we cannot pass its name & below is the syntax of achieving it!
// coding.forEach( function (val){
//     console.log(val);
// } )

//Same concept goes for arrow functions in which there is no need to hold it into a variable it can be achieved like below
// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }

//Also we can do like giving the reference of a function which is defined somewhere else in the code & then too we can get the same output.
// coding.forEach(printMe)


//Apart from item/val/num we also get access to the index & the original arr inside the for-each loop!
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//Objects inside Array!
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


//It becomes very easy to extract the properties of the objects which is defined inside the array using the for-each loop!

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )