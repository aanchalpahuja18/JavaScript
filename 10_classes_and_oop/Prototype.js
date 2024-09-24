// let myName = "aanchal     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

//we want to inject a default trueLength method which will trim the spaces automatically & will just give us the actual length of the string. 

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//we are directly adding a method to the Object since everything is object at the end so strings, functions, arrays, etc. are able to access the aanchal method directly through the Object. It would be inherited to everything as well.

Object.prototype.aanchal = function(){
    console.log(`aanchal is present in all objects`);
}


//below will only inject the heyaanchal method to the arrays & it won't be available to object or any of the strings, function, etc. 
Array.prototype.heyaanchal = function(){
    console.log(`aanchal says hello`);
}

// heroPower.aanchal()
// myHeros.aanchal()
// myHeros.heyaanchal()
// heroPower.heyaanchal()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    //below will link TASupport to TeachingSupport like siblings & TASupport will be able to access all the properties of TeachingSupport.
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
//jo string bulaegi this mtlb vo ho jaegi.
"aanchal".trueLength()
"iceTea".trueLength()


//jisne bulaya hai vahi this ho jaega.