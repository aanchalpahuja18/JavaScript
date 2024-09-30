## A closure gives a function access to its outer scope.

## Lexical Scoping:

'''javascript

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
'''

## init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer scopes, displayName() can access the variable name declared in the parent function, init().

## Children can access to all the properties of their parents whereas viceversa is not true. Even siblings cannot share the properties of each other. So only parents ki properties are accessible to their children this is overall known as lexical scoping. 

## Lexical Scoping technical definition:  inner function ke paas outer function ki scope ka access hota hai. inner yaha refers to a function declared & called inside another function.  inner function & outer function shares a memory. 


## Closures: When we return a function (its reference mainly) along with it its lexical scope is also returned altogether. Not only the execution context of the function is returned but also its lexical scope is returned along with it even though the parent's execution is over still the inner function has the reference of its lexical scope & returns along with it whenever the inner function's reference is returned. 

'''javascript
 function makeFunc() {
        const name = "Mozilla";
        function displayName() {
            console.log(name);
        }
        return displayName;
    }

    const myFunc = makeFunc();
    myFunc();


'''

''' javascript
  document.getElementById('orange').onclick = clickHandler
 document.getElementById('green').onclick = clickHandler
 '''

## In above we are just giving the reference of the clickHandler function which means only the definition of the clickHandler is provided & onclick requires the function call so we have to provide the function call which is clickHandler("orange"). But doing this will directly execute the function & our use case of changing the bg color on clicking the button won't be fulfilled. 

## To avoid above we will use closures & will declare a function inside our clickHandler which will be returned from the clickHandler. 
