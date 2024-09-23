//Promise creation method

//Promise 1 => 
const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network
   setTimeout(function(){
    console.log("Async task is completed!"); 
    resolve()
   }, 1000)

})

//Since now the promise is created we also have to consume it.

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

//Promise 2 =>
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async2 resolved successfully");
})


//Promise 3 => Passing values from resolve() to then. Every Parameter passed from resolve() will be accessed inside the then()
//We can pass any parameter to the resolve() & then access it in then()

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Aanchal", email: "aanchal@example.com"})
    }, 2000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

//Above is the basics of Promises like how data consumption is there & how the values are passed in & out. 


//Promise 4 => catch() & finally()

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Aanchal", password: 123})
        }
        else{
            reject("ERROR Something went wrong!")
        }
    }, 3000)
})


promiseFour.then(function(user){
    console.log(user)
    return user.username
})
.then(function(username){
console.log("Username is: ", username)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("The promise is either resolved or rejected!")
})

//In above there is a chaining of then which means the result of 1st then is passed into 2nd then by using the return.
//catch is executed only when there occurs some error
//finally is executed all the time since it has the responsibility of informing the user about whether its task is completed or not. Like whether the promise is resolved or whether it is rejected.

//Promise 5 => async & await = Exactly like .then & .catch.  It waits for sometime to get the work done. If the work is done then only async wait aage badhta hai or else it gives the error at that time.

//Since promises are the task which will be completed in the future so we can also handle them using the async & await methods.

//async await cannot handle errors on their own we have to do it inside the try-catch block


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "JS", password: 123})
        }
        else{
            reject("ERROR JS went wrong!")
        }
    }, 3000)
})


async function consumePromiseFive() {
    try {
        //this will help to wait until the promise is resolved either successfully or failure. 
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
        
    }
}


consumePromiseFive()


//Promises Example 6 => fetch() it just required a url & it returns a promise.

//The api codes also takes time to give us a promise. Also since the result coming from the api is in string format & we have to convert it into json. So this conversion operation also takes time & we have to put an await keyword in front of it. 

// async function getAllUsers(){
//   try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response);
//     const data = await response.json()
//     console.log(data);
    
    
//   } catch (error) {
//     console.log("Error: ", error);
    
//   }
   
// }

// getAllUsers()

fetch('https://api.github.com/users/aanchalpahuja18')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))