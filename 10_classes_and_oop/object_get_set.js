const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

//Object.create() is the factory function whereas new is the constructor function. 

//Object.create() requires an object jiske basis par vo tea naam ke object ko uss par refer krwaega. 

//_ defines the private properties. getters & setters behind the scene krte hai ki vo special methods hai jo hum properties ke upar as a layer rkh rhe hai kyuki actually we are going & bringing the values from the memory. This process is overwritten by getters & setters in JS. The methods declared with getters & setters are further accessed by the . operator only. 

//If further confusion is there refer to the lecture once again! 