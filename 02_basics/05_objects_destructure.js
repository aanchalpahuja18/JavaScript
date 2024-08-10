const course = {
    courseName: "JS",
    price: "999",
    courseInstructor: "Hitesh Choudhary"
}

console.log(course.courseInstructor);

//To make above a clean code we use object destructuring:

//HEre object destructuring has happened which also lets us to use a different name rather than the value that has been extracted out from the object
const {courseInstructor: instructor} = course
console.log(instructor);


//API's 
//API are called in order to extract the data from the backend
//The response received from the backend can be objects or arrays of objects but everything comes under JSON format.


//JSON formatter is used to study the API easily
