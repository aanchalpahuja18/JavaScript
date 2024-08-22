//for of loop

// ["", "", ""]
// [{}, {}, {}]


const arr = [1,2,3,4,5]

//of ke baad snippet me object aata hai uska mtlb hai ki in which thing we want to apply this loop! Object ke sense me string, array, objects, kisi par bhi this loop is applicable.

//Also there is no need to declare, initialize, condition check, increment in this type of loop everything will be automatically taken care of!
for (const num of arr) {
    console.log("Value is: ", num);
    
}

const greetings = "Hello World!"

for (const greet of greetings) {
    if(greet == " "){
        continue;
    }
    console.log(`Each char is: ${greet}`);
    
}

//Maps: It holds our key-value pairs & remembers the insertion order of the keys
//Key may only occur once in the map!
//Map contains only unique values

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")


console.log(map);
//To print the key value pairs as it is in the form of arrays
//Here the keys extracted are the actual keys of the map!
for (const key of map) {
    console.log(key);
    
}
//To seperately print the key & value pairs in a destructure manner of arrays
for (const [key, value] of map) {
    // console.log(key, ":- ", value);
    
}


const myObj = {
    'game1': "NFS",
    'game2': "Spider Man"
};

//Here the for of loop does'nt work on objects & objects have different way of being iterated.
for (const [key, value] of myObj) {
    console.log(key, ":- ", value);
}