//Scope is nothing but the curly braces which are independantly executed in the code & it can access values from the global scope but the values available inside it should'nt be leaked outside of its scope.


//In the part of nested functions inner function can access the variables of its parent

function one(){
    const username = "aanchal"

    function two() {
        const website = "youtube"
        console.log(username);
    }

    //Here error occurs since the website won't be accessible to one() as it is declared inside the child of one() which is two()
    // console.log(website);

    two()
    
}
// one()

//Chote bache jo hai vo bado ki icecream cheen skte hai but bade bache esa nhi kr skte this is known as nested function scopes

//In nested functions inner function can access all the variables & everything of its parent function but vice versa is not true!

//Scope just means that where will the variables be actually accessible in the code

if(true){
    const username = "aanchal"
    if(username === "aanchal"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    //Here error will occur since website has its scope only till the child if 
    // console.log(website);
    
}

//Error will occur since username has the scope only till parent if
// console.log(username);


//************************INTERESTING EXAMPLE*********************************//

addone(6)

function addone(value) {
    return value + 1;
}

addone(6)

//Below is known as function expression in which a variable is holding the function

//In JS variables are very powerful since it can hold a JSON, objects, arrays & even functions.

addtwo(7)

const addtwo = function (value){
    return value + 2;
}

addtwo(7)

//If we access the function expression before its declaration it will give an error of Cannot access 'addtwo' before initialization!

//But if we are doing the same thing with normal functions everything is well executed. Here comes the concept of hoisting

//Hoisting refers to accessing the functional expression or the functions before declaring it. Executing context & hoisting will be a part of next lectures in great detail!