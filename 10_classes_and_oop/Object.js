function multiplyBy5(num){
    return num * 5;
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);

//Below gives us the by default context which is setted up & also it is known as the this of that particular method & it also gives some internal properties related to that method. 
console.log(multipleBy5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}

//We can also add our additional properties inside the prototype & there is no need to everytime specify the prototype keyword while adding the values. 


//yaha par this btaega ki jis user ne call kiya hai uski value ka access vo de dega
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)

//jab hum function se tea ke andar values transfer krri tb humne usko btaya nhi ki humare paas additional properties aayi hai jese ki printMe aur increment vali, to vo btane ka kaam new keyword krega. 
const tea = createUser("tea", 250)

chai.printMe()
