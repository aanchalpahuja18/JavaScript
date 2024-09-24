//JS after ES6 => Internally everything is done with the help of new keyword

class User{
    //jese hi class se ek object initialize hoga means jese hi hum new keyword ko kaam m lege vese hi constructor call ho jaega 
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    //below is function which is known as methods inside the class
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const user = new User("chai", "chai@chai.com", 1234)
console.log(user.encryptPassword());

console.log(user.changeUsername());


//behind the scene => when classes concept was not there we would do it with the help of functions since functions behave like objects as seen in before lectures. 


function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

