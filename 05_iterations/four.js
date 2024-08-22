const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
};

//To iterate over the objects we have another loop named as for-in

//for-in can also be used for other datatypes and not just objects

for (const key in myObj) {
    console.log(key);
    
}

//to extract both key & value we have one more way

for (const key in myObj) {
    console.log(`key is ${key} and its value is ${myObj[key]}`);
    
}

//applying forin loop on arrays
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

//applying forin loop on maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}

//Map is not iterable so we cannot write above in this way in the loops! We will study more about it later!
//So this way of doing iterations on map is not possible