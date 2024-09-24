
//In below it will have its own execution context which on function execution will be removed from the call stack & because of which we won't get access to the username setted in this method. 
//Due to above problem we will hold the reference of the below function so that before it is removed from the call stack we can take the values jo usne username m set ki thi. For holding the reference we use .call while calling the below function.
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // For holding the reference we use .call while calling the below function.
    //Also we are passing the current execution context of the createUser function since we want the value of the username to be added inside this function. Also if we not pass this then the username's value will be updated inside the SetUsername ke execution context m and ek baar uska execution ho gya to vo remove ho jaega from the call stack & again we will loose the values. So to retain the value we pass this as an optional paramter of the .call to guarantee ki jo bhi updation or set hoge values vo createUser ke context m hogi fir bhale hi SetUsername vala context remove ho jaye koi farak nhi padega.
    
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);