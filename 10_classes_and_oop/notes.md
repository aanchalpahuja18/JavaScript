## JAVASCRIPT & CLASSES

### JS is not a class based language. It is only a prototype based language (will be explained in next lecture). Classes are just provided as a syntactic sugar over the prototype based language (JS) so that programmers don't feel left out & can use the concept of classes in JS as well. Overall JS is not at all a Class based language & it does not have classes.

## OOPS: 

### OOPs is object oriented programming is just a paradigm (programming style) where everything is represented in the terms of obejcts & classes.

## Object:

### Collection of properties (variables) & methods (function)
### eg: toLowerCase()

## Why Use OOP?

### Without using oops the code would get a lot of messy & no chunk of the code would be reused. So OOP came into picture. Also we can use various features of JAVA with the help of OOP.

## Parts of OOPS!

### Object Literal - It means taking the object literally 

- Constructor function
- Prototype
- Classes
- Instances (new, this)

## 4 pillars of OOP

Abstraction, Encapsulation, Polymorphism & Inheritance

## Abstraction - To hide the details eg: fetch()
## Encapsulation - To wrap up the data & hide the data further. It also allows the developers an ability to what to show & what not to the users. 
## Inheritance - Prototype lecture me cover hoga
## Polymorphism - Many forms

# Prototype:

JS has the default prototypal behaviour which means JS itni jldi haar nhi maanti if it doesn't find the value to any variable in its scope it finds it in the scope of parent, grandparent & great great grandparent until it finds null for that variable.

Prototype is the one which gives access to new keyword, classes, this, prototypal inheritance, etc.

Inside Prototype we have several methods for different DS & again we have Prototype (Since Prototypal behaviour is all about not giving up on things easily). 


Everything in JS is in the form of the object. So every property & methods of objects will be by default available to all. 
Object itself doesn't have any parent

Object ka prototype is null we can access it via getters & setters but since it doesn't have any parent therefore null par jaake rukti hai JS.

Everything in JS are objects even the functions are functions and they also show object behaviour. 

End of the day everything in JS gets mix up with the objects.

Below gives us the by default context which is setted up & also it is known as the this of that particular method & it also gives some internal properties related to that method. 
console.log(multipleBy5.prototype);


All JavaScript objects inherit properties and methods from a prototype.


