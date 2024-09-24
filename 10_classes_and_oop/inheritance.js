class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
        
    }
}

//sometimes we want to make the user admin, teacher, etc.

class Teacher extends User{
    constructor(username, email, password){
        //super keyword will refer the parent class ka constructor & bts it will take this along with it to give the current context & it will go into the parent class ka constructor & then it will set the value of the username for child class using this of Teacher.
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Aanchal", "aanchal@gmail.com", 123)

chai.addCourse()

chai.logMe()

//object created through the parent class ke pass bss ussi ke properties & methods ka access hoga & not child ka access. Whereas child ke pass parent ki properties aur methods ka bhi access hoga since it is inheriting them.

const masalaChai = new User("masalaChai")

masalaChai.logMe()

//chai is an instance of the User since User is the parent of the Teacher & chai is created as an instance of the Teacher so indirectly it is also an instance of the User. It is the instance & not equal to the Teacher or User.

//instanceof operator is used to check whether an object or a class is the instance of another class!
console.log(chai instanceof User);
