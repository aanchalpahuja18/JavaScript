//Switch is just having a lock & multiple keys with it.
//Jisse bhi tala khulega vo jaabi vale code ko execute kr dege!

const month = 3

//month jo hai that is key & case ke andar jo hai that is the value
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;


    default:
        console.log("Enter a valid month!");
        
        break;
}

//If break stmnt is not written then all its code below it is executed except the default code

//We can use any sort of datatype as the value to be checked inside switch!