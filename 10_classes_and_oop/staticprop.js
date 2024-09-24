class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }

    //many a times it will happen that we don't want to give the access of the method to every object which is instantiated from the class. After declaring a function as static it won't give access to any of the objects aur child classes of the parent class. 
    static createId(){
        return `123`
    }
}

const user = new User("Aanchal")

// console.log(user.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

//Class constructor Teacher cannot be invoked without 'new' => error without declaring a new keyword since it won't bind the constructor's values to the value passed inside the instantiated object.

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone);

// console.log(iphone.createId());

