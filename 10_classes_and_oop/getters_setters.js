class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);


//getters & setters are used to give a custom control to the dev that what he/she has to return when the value is used by the user.
//If we want to give a specific access to the user then we specifically use gettters & setters. 
//Also getters & setters are present in all the classes & since its functionality is not implemented it works on its default code. We have to use them as the name of the variable & they are methods inside which we implement our own logic.
//In the setter method since the constructor is also setting up a value & a setter is also setting up a value for the same variable so for that an error occurs which tells that Maximum stack size occurred & a race condition is happening between both of the setter() & the constructor. So to avoid this condition we have to take a new variable & set a value of the variable inside it. This will be taken care by JS & the same variable name should be present inside the getter().
//With getter() we have to compulsorily write the setter() as well.