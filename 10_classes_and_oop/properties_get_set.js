//Function based getters & setters=> 

function User(email, password){
    this._email = email;
    this._password = password

    //Below takes 3 parameters => 1. context into which we want to define the properties (which is this here) since defineProperty has the context pointing to global object or else pointing to a null context. 2. the name of the property into which we want to define our getters & setters. 3. getters & setters methods defines inside { }
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);