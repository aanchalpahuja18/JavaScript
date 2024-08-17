//for loop 


for(let i = 0;i <= 10;i++){
    const element = i;
    if(i == 5){
        // console.log("5 is the best number");
        
    }

    // console.log(element);
    
}

//Here element is not accessible outside the code since it is declared inside the block & it is having a block scope!
// console.log(element);


//We can also write loops inside loops which are known as nested loops

//Nested for loops

for(let i = 1;i <= 10;i++){
    // console.log(`Outer loop is: ${i}`);
    for(let j = 1;j <= 10; j++){
        // console.log(`Inner value is ${j} and outer loop is ${i}`);
        // console.log(i + "*" + j + " = " + i*j);
        
        
    }
}

//for loops in arrays

const myArr = ["spiderman", "superman", "batman", "flash"]
// console.log(myArr.length);

for(let i=0;i<myArr.length;i++){
    const element = myArr[i];
    // console.log(element);
    
}


//break & continue: To come out of the loop based on certain condition achieved we will use break & continue kerywords

//break: To break a certain control flow

for(let i= 1;i<=20;i++){
    if(i == 5){
        // console.log("Detected 5!");
        break;
        
    }

    // console.log("Value is: ", i);
    
}

//continue is like ki yaar ek baar maaf kr do!  It basically skips the condition for one time
for(let i= 1;i<=20;i++){
    if(i == 5){
        console.log("Detected 5!");
        continue;
        
    }

    console.log("Value is: ", i);
    
}

